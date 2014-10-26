(function (exports) {

	// closure globals
	var markerCluster = null;
	var markers = [];
	var map = null;
	var infobox = null;
	var lines = [];
	var additionalMarkers = [];
	var keepOpen = false;

	// info box
	infobox = new InfoBox({
		content: document.getElementById("infobox"),
		disableAutoPan: false,
		maxWidth: 150,
		pixelOffset: new google.maps.Size(-90, 0),
		zIndex: null,
		boxStyle: {
			background: "url('assets/images/infobox_arrow.png') scroll no-repeat center top",
			opacity: 0.75,
			width: "180px"
		},
		closeBoxMargin: "12px 4px 2px 2px",
		closeBoxURL: "", //"http://www.google.com/intl/en_us/mapfiles/close.gif",
		infoBoxClearance: new google.maps.Size(1, 1)
	});


// === LINES ===

	function drawToMarker(to) {
		var marker = new google.maps.Marker({
			position: to,
			icon: exports.MapSettings.markerStyles.toMarker,
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
		 var numSteps = 50; //Change this to set animation resolution
		 var timePerStep = 5; //Change this to alter animation speed
		 var interval = setInterval(function() {
			step += 1;
			if (step > numSteps) {
				drawToMarker(to);
				clearInterval(interval);
			} else {
				if (google.maps.geometry) {
					var are_we_there_yet = google.maps.geometry.spherical.interpolate(from, to, step/numSteps);
					line.setPath([from, are_we_there_yet]);
				}
			}
		}, timePerStep);		
	}

	function removeLineAndReceipient() {
		while (additionalMarkers.length) {
			additionalMarkers.pop().setMap(null);
		}
		while (lines.length) {
			lines.pop().setMap(null);
		}
	}

	function drawLineToReceipientForMarker (markers) {
		for (i=0; i< markers.length; i++) {
			var marker = markers[i];
			var to = new google.maps.LatLng(53, 23);
			drawLine(marker.getPosition(), to);
		}
	}

// === MARKER EVENTS ===

	function showInfoBoxForMarker(marker) {
		infobox.close();
		marker.setMap(map);
//		$('#infobox')
		$(infobox.content_).html('contractee: '+marker.data.contract_operator_official_name);
		infobox.open(map, marker);
	}

	function hideInfoBoxForMarker(marker) {
		marker.setMap(null);
		infobox.close();
	}

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
		removeLineAndReceipient();
	};

	function showTableDataForMarkers(markers) {
			euvis.Table.clearTable();
			for (var i = 0; i < markers.length; i++ ){
				euvis.Table.addDataRow(markers[i].data, markers[i]);
			}
			euvis.Table.sorterRefresh();
	};

	function markersEvent (type, event, markers, cluster) {
		console.log(type, event, markers, markers.length, cluster);

		if (type == 'click') {
			showTableDataForMarkers(markers);
		}
		// return showOneOrManyMarkerInfo(e);
		// return closeMarkerInfo(e);
/*
			var to;
			to = new google.maps.LatLng(53, 23); drawLine(p, to);
			to = new google.maps.LatLng(45, 17); drawLine(p, to);
			to = new google.maps.LatLng(43, 15); drawLine(p, to);
			to = new google.maps.LatLng(44, 19); drawLine(p, to);
*/
	}

// === CLUSTERS ===

	function clearClusters(e) {
		e.preventDefault();
		e.stopPropagation();
		markerCluster.clearMarkers();
	}

	function addMarkers (data) {
		for (var i = 0; i < data.length; i++) {
			if (!data[i]._exclude) {
				var coords = data[i].contract_location_nuts;
				var latLng = new google.maps.LatLng(coords.lat, coords.long)
				var marker = new google.maps.Marker({
					position: latLng,
					draggable: false,
					icon: exports.MapSettings.markerStyles.fromMarker,
					data: data[i] // append data to marker
				});

				// marker events
				google.maps.event.addListener(marker, 'mouseover', function (e) {
					return markersEvent('mouseover', e, [marker]);
				});

				google.maps.event.addListener(marker, 'mouseout', function (e) {
					return markersEvent('mouseout', e, [marker]);
				});

				google.maps.event.addListener(marker, 'click', function (e) {
					return markersEvent('click', e, [marker]);
				});

				// keep markers
				markers.push(marker);
			}
		}
	}

	function refreshMap (data) {
		if (markerCluster) {
			markerCluster.clearMarkers();
		}
		markers = [];
		addMarkers(data);

		// cluster markers
		markerCluster = new MarkerClusterer(map, markers, {
			gridSize: 100,
      		averageCenter: true,
      		zoomOnClick: false,
			styles: exports.MapSettings.clusterStyles
		});

		// cluster events
		google.maps.event.addListener(markerCluster, "click", function (e, c) {
			var s = c.getSize(), p = c.getCenter(), m = c.getMarkers();
			return markersEvent('click', e, m, c);
		});
		google.maps.event.addListener(markerCluster, "mouseover", function (c) {
			var s = c.getSize(), p = c.getCenter(), m = c.getMarkers();
			return markersEvent('mouseover', null, m, c);
		});
		google.maps.event.addListener(markerCluster, "mouseout", function (c) {
			var s = c.getSize(), p = c.getCenter(), m = c.getMarkers();
			return markersEvent('mouseout', null, m, c);
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

		var styledMap = new google.maps.StyledMapType(exports.MapSettings.mapStyles, {name: "Styled Map"});
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



	exports.Map = {};
	exports.Map.addData = refreshMap;
	exports.Map.showInfoBoxForMarker = showInfoBoxForMarker;
	exports.Map.hideInfoBoxForMarker = hideInfoBoxForMarker;
	exports.Map.drawLineToReceipientForMarker = drawLineToReceipientForMarker;
	exports.Map.removeLineAndReceipient = removeLineAndReceipient;

}(window.euvis || (window.euvis = {})));
