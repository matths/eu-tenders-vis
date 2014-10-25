(function () {

	// dummy data
	var data = [
		{"longitude": -64.404945, "latitude": -32.202924 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 17.470493, "latitude": 47.867077 },
		{ "longitude": 145.141754, "latitude": -37.766372 },
		{ "longitude": 30.785408, "latitude": 46.639301 },
		{ "longitude": -84.693432, "latitude": 10.479372 },
		{ "longitude": 12.900009, "latitude": 47.409968 },
		{ "longitude": 11.272659, "latitude": 59.637472 },
		{ "longitude": 13.189259, "latitude": 47.483221 },
		{ "longitude": -61.013432, "latitude": 14.493688 },
		{ "longitude": 0.490866, "latitude": 40.903783 },
		{ "longitude": 12.852459, "latitude": 47.609519 },
		{ "longitude": -111.407890, "latitude": 36.894037 },
		{ "longitude": 8.838158, "latitude": 46.257746 },
		{ "longitude": -2.933736, "latitude": 43.269159 },
		{ "longitude": 17.815200, "latitude": 43.337255 },
		{ "longitude": -151.750000, "latitude": -16.500000 },
		{ "longitude": 6.108742, "latitude": 62.226676 },
		{ "longitude": 11.616282, "latitude": 43.064389 },
		{ "longitude": -59.070311, "latitude": -52.430295 },
		{ "longitude": 1.314712, "latitude": 45.922199 },
		{ "longitude": 18.239279, "latitude": 47.535341 },
		{ "longitude": -67.549438, "latitude": -20.552438 },
		{ "longitude": 139.011619, "latitude": 37.871500 },
		{ "longitude": 21.035728, "latitude": 52.242353 },
		{ "longitude": 160.587502, "latitude": 56.081999 },
		{ "longitude": 8.024461, "latitude": 46.245801 },
		{ "longitude": -79.798197, "latitude": 43.321353 },
		{ "longitude": -72.607527, "latitude": -46.647138 },
		{ "longitude": 139.243813, "latitude": 37.909669 },
		{ "longitude": 159.480114, "latitude": 54.025419 },
		{ "longitude": 2.805762, "latitude": 39.852352 },
		{ "longitude": -8.659008, "latitude": 41.068821 },
		{ "longitude": -1.806951, "latitude": 43.245140 },
		{ "longitude": 7.706180, "latitude": 51.665741 },
		{ "longitude": 44.215508, "latitude": 65.829148 },
		{ "longitude": -113.047771, "latitude": 37.312154 },
		{ "longitude": -0.323882, "latitude": 39.349166 },
		{ "longitude": 24.373169, "latitude": 68.908534 },
		{ "longitude": -0.275195, "latitude": 51.445890 },
		{ "longitude": 2.336990, "latitude": 48.853891 },
		{ "longitude": 175.699196, "latitude": -36.817685 },
		{ "longitude": -59.683228, "latitude": -62.485684 },
		{ "longitude": 25.376015, "latitude": 36.461537 },
		{ "longitude": 17.504482, "latitude": 47.842773 },
		{ "longitude": -112.005315, "latitude": 36.995972 },
		{ "longitude": 36.046829, "latitude": -3.818353 },
		{ "longitude": -124.077530, "latitude": 44.519888 },
		{ "longitude": 98.471628, "latitude": 8.428840 },
		{ "longitude": -0.323882, "latitude": 39.349166 },
		{ "longitude": 12.113349, "latitude": 49.342559 },
		{ "longitude": -91.677904, "latitude": 16.111297 },
		{ "longitude": -116.175613, "latitude": 51.327608 },
		{ "longitude": 9.412537, "latitude": 62.686749 },
		{ "longitude": 110.454826, "latitude": 24.962716 },
		{ "longitude": -73.241998, "latitude": -39.809583 },
		{ "longitude": 12.850227, "latitude": 47.815575 },
		{ "longitude": -124.726700, "latitude": 48.385898 },
		{ "longitude": 72.920637, "latitude": 4.038162 },
		{ "longitude": 12.591190, "latitude": 55.679762 },
		{ "longitude": 0.493140, "latitude": 40.904172 },
		{ "longitude": 9.908917, "latitude": 50.487112 },
		{ "longitude": 103.853851, "latitude": 1.286973 },
		{ "longitude": -3.986835, "latitude": 55.773532 },
		{ "longitude": 15.964594, "latitude": 47.875426 },
		{ "longitude": 17.521820, "latitude": 47.748558 },
		{ "longitude": -105.654080, "latitude": 40.294560 },
		{ "longitude": -2.909800, "latitude": 42.976199 },
		{ "longitude": 17.521133, "latitude": 47.854408 },
		{ "longitude": -67.819161, "latitude": -22.787696 },
		{ "longitude": 17.684383, "latitude": 47.587873 },
		{ "longitude": 94.860935, "latitude": 21.169045 },
		{ "longitude": 17.481651, "latitude": 47.457576 },
		{ "longitude": 148.662905, "latitude": -35.304724 },
		{ "longitude": 44.483900, "latitude": 40.195299 },
		{ "longitude": 8.500500, "latitude": 48.793465 },
		{ "longitude": 16.391602, "latitude": 46.851269 },
		{ "longitude": -75.912872, "latitude": 45.507640 },
		{ "longitude": 31.133537, "latitude": 29.966721 },
		{ "longitude": 5.054559, "latitude": 43.405079 },
		{ "longitude": 138.423271, "latitude": 38.069312 },
		{ "longitude": 12.336917, "latitude": 45.434053 },
		{ "longitude": 139.047089, "latitude": 37.449787 },
		{ "longitude": -0.739861, "latitude": 37.594104 },
		{ "longitude": 18.207092, "latitude": 47.318578 },
		{ "longitude": 5.168552, "latitude": 47.312642 },
		{ "longitude": 144.968119, "latitude": -37.819616 },
		{ "longitude": 137.831554, "latitude": 36.911608 },
		{ "longitude": 151.209834, "latitude": -33.848588 },
		{ "longitude": 21.077271, "latitude": 42.011550 },
		{ "longitude": -110.843537, "latitude": 44.475020 },
		{ "longitude": 76.732550, "latitude": 35.877298 },
		{ "longitude": -119.495888, "latitude": 37.811411 },
		{ "longitude": 4.864798, "latitude": 52.594393 },
		{ "longitude": 151.216968, "latitude": -33.851702 },
		{ "longitude": -115.729235, "latitude": 33.347316 },
		{ "longitude": 30.785751, "latitude": 46.639301 },
		{ "longitude": 17.507057, "latitude": 47.776425 },
		{ "longitude": -114.481916, "latitude": 51.095841 },
		{ "longitude": 6.055870, "latitude": 44.610146 },
		{ "longitude": 21.952747, "latitude": 36.797775 },
		{ "longitude": -3.989239, "latitude": 55.772808 },
		{ "longitude": -0.476360, "latitude": 39.612565 },
		{ "longitude": 37.621951, "latitude": 55.753033 },
		{ "longitude": 12.340747, "latitude": 45.433364 },
		{ "longitude": 15.408325, "latitude": -24.729370 },
		{ "longitude": 11.988916, "latitude": 43.273659 },
		{ "longitude": 138.789682, "latitude": 37.726398 },
		{ "longitude": 55.187416, "latitude": 25.140312 },
		{ "longitude": -116.177502, "latitude": 51.325946 },
		{ "longitude": 13.068817, "latitude": 47.744540 },
		{ "longitude": 138.727455, "latitude": 35.377294 },
		{ "longitude": 11.557188, "latitude": 46.471044 },
		{ "longitude": -9.799418, "latitude": 31.355662 },
		{ "longitude": -69.930505, "latitude": 12.522579 },
		{ "longitude": 10.591164, "latitude": 47.521142 },
		{ "longitude": -2.874470, "latitude": 41.198451 },
		{ "longitude": -2.324982, "latitude": 42.951240 },
		{ "longitude": 7.949853, "latitude": 48.489947 },
		{ "longitude": 13.965683, "latitude": 45.955625 },
		{ "longitude": -77.640553, "latitude": -9.071585 },
		{ "longitude": 15.965366, "latitude": 47.877556 },
		{ "longitude": -2.780957, "latitude": 43.033953 }];

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

	function refreshMap() {
		if (markerClusterer) {
			markerClusterer.clearMarkers();
		}
		markers = [];

		for (var i = 0; i < data.length; i++) {

			var latLng = new google.maps.LatLng(data[i].latitude, data[i].longitude)
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

		refreshMap();
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
})();
