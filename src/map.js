(function (exports) {

	// colorize google maps
	var styles = [
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#193341"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#2c5a71"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#29768a"
				},
				{
					"lightness": -37
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#406d80"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#406d80"
				}
			]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"color": "#3e606f"
				},
				{
					"weight": 2
				},
				{
					"gamma": 0.84
				}
			]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry",
			"stylers": [
				{
					"weight": 0.8
				},
				{
					"color": "#dddddd"// 1a3541
				}
			]
		},
		{
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#2c5a71"
				}
			]
		}
	];

	// closure globals
	var markerClusterer = null;
	var markers = [];
	var map = null;
	var infobox = null;
	var markerImage = "assets/images/map_spot.png";
	var lines = [];
	var additionalMarkers = [];
	var keepOpen = false;

	// info box
	infobox = new InfoBox({
		content: document.getElementById("infobox"),
		disableAutoPan: false,
		maxWidth: 150,
		pixelOffset: new google.maps.Size(-140, 0),
		zIndex: null,
		boxStyle: {
			background: "url('assets/images/tipbox.gif') no-repeat",
			opacity: 0.75,
			width: "280px"
		},
		closeBoxMargin: "12px 4px 2px 2px",
		closeBoxURL: "", //"http://www.google.com/intl/en_us/mapfiles/close.gif",
		infoBoxClearance: new google.maps.Size(1, 1)
	});


// === LINES ===

	function drawLineStatic (from, to) {
		var line = new google.maps.Polyline({
			path: [from, to],
			icon: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
			geodesic: true,
			strokeColor: '#ffcc00',
			strokeOpacity: 1,
			strokeWeight: 2
		});
		line.setMap(map);		
	}

	function drawToMarker(to) {
		var marker = new google.maps.Marker({
			position: to,
			icon: 'assets/images/icon_info.png',
			map: map
		});
		additionalMarkers.push(marker);
	}

	// animated line between two locations (lat/lng)
	function drawLine (from, to) {
		var line = new google.maps.Polyline({
			path: [from, from],
			strokeColor: "#ffcc00",
			strokeOpacity: 1,
			strokeWeight: 2,
			geodesic: true, //set to false if you want straight line instead of arc
			map: map,
		});
		lines.push(line);
		 var step = 0;
		 var numSteps = 40; //Change this to set animation resolution
		 var timePerStep = 5; //Change this to alter animation speed
		 var interval = setInterval(function() {
			step += 1;
			if (step > numSteps) {
				drawToMarker(to);
				clearInterval(interval);
			} else {
				var are_we_there_yet = google.maps.geometry.spherical.interpolate(from, to, step/numSteps);
				line.setPath([from, are_we_there_yet]);
			}
		}, timePerStep);		
	}

	function clearLinesAndAdditionalMarkers() {
		while (additionalMarkers.length) {
			additionalMarkers.pop().setMap(null);
		}
		while (lines.length) {
			lines.pop().setMap(null);
		}
	}


// === MARKER EVENTS ===

	function showOneOrManyMarkerInfo (e) {
		keepOpen = false;
		closeMarkerInfo();

		infobox.open(map, this);
		var to;
		to = new google.maps.LatLng(53, 23); drawLine(e.latLng, to);
		to = new google.maps.LatLng(45, 17); drawLine(e.latLng, to);
	};

	function closeMarkerInfo (e) {
		if (keepOpen) return;
		infobox.close();
		clearLinesAndAdditionalMarkers();
	};

// === CLUSTERS ===

	// cluster markers
	var clusterLevels = [{
		url: 'assets/images/map_cluster1.png',
		height: 20,
		width: 20,
		anchor: [0, 0],
		textColor: '#000000',
		textSize: 10
	}, {
		url: 'assets/images/map_cluster2.png',
		height: 30,
		width: 30,
		anchor: [0, 0],
		textColor: '#000000',
		textSize: 11
	}, {
		url: 'assets/images/map_cluster3.png',
		height: 40,
		width: 40,
		anchor: [0, 0],
		textColor: '#000000',
		textSize: 12
	}];

	function clearClusters(e) {
		e.preventDefault();
		e.stopPropagation();
		markerClusterer.clearMarkers();
	}

	function refreshMap (data) {
		if (markerClusterer) {
			markerClusterer.clearMarkers();
		}
		markers = [];

		for (var i = 0; i < data.length; i++) {

			var coords = data[i].contract_location_nuts;

			var latLng = new google.maps.LatLng(coords.lat, coords.long)
			var marker = new google.maps.Marker({
				position: latLng,
				draggable: false,
				icon: markerImage,
				data: 'whatnot'
			});
			google.maps.event.addListener(marker, 'mouseover', showOneOrManyMarkerInfo);
			google.maps.event.addListener(marker, 'click', function (e) {
				keepOpen = true;
			});
			google.maps.event.addListener(marker, 'mouseout', closeMarkerInfo);

			markers.push(marker);
		}

		markerClusterer = new MarkerClusterer(map, markers, {
			maxZoom: null,
			gridSize: null,
			styles: clusterLevels
		});
	}
	exports.Map = {};
	exports.Map.addData = refreshMap;


// === GENRAL MAP INITIALIZATION ===

	function initialize() {
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 4,
			center: new google.maps.LatLng(52, 18),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			panControl: false,
			zoomControl: true,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE,
				position: google.maps.ControlPosition.RIGHT_TOP
			},
			streetViewControl: false,
			mapTypeControl: false,
			draggable: true,
			scrollwheel: false
		});

		var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
	}

	// resize map if necessary
	var recalcMapHeight = function() {
		var newHeight = $(window).height();
		$("#map").css('height', newHeight+'px');
//		google.maps.event.trigger(map, 'resize');
	}; 
	$(window).resize(recalcMapHeight);
	recalcMapHeight();

	google.maps.event.addDomListener(window, 'load', initialize);

}(window.euvis || (window.euvis = {})));
