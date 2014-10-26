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
			icon: exports.MapSettings.markerStyles.fromMarker,
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

	function clearClusters(e) {
		e.preventDefault();
		e.stopPropagation();
		markerCluster.clearMarkers();
	}

	function refreshMap (data) {
		window.data = data; // TODO: remove, only for debug!

		if (markerCluster) {
			markerCluster.clearMarkers();
		}
		markers = [];

		for (var i = 0; i < data.length; i++) {
      if (!data[i]._exclude) {
        var coords = data[i].contract_location_nuts;
        var latLng = new google.maps.LatLng(coords.lat, coords.long)
        var marker = new google.maps.Marker({
          position: latLng,
          draggable: false,
          icon: exports.MapSettings.markerStyles.fromMarker,
          data: data[i]
        });
        google.maps.event.addListener(marker, 'mouseover', showOneOrManyMarkerInfo);
        google.maps.event.addListener(marker, 'click', function (e) {
          keepOpen = true;
        });
        google.maps.event.addListener(marker, 'mouseout', closeMarkerInfo);

        markers.push(marker);
      }
    }

		markerCluster = new MarkerClusterer(map, markers, {
			maxZoom: null,
			gridSize: null,
      // averageCenter: true,
			styles:  exports.MapSettings.clusterStyles
		});
		window.markerCluster = markerCluster;

		google.maps.event.addListener(markerCluster, "click", function (e, c) {
			e.stopPropagation();
			e.preventDefault();
			e.returnValue = false;

			var mc = c.getMarkerClusterer();
			mc.setZoomOnClick(false);

			euvis.Table.clearTable();
			var p = c.getCenter();
			var m = c.getMarkers();
			for (var i = 0; i < m.length; i++ ){
				euvis.Table.addDataRow(m[i].data);
			}
      console.log('refresh table')
			euvis.Table.sorterRefresh();

			var to;
			to = new google.maps.LatLng(53, 23); drawLine(p, to);
			to = new google.maps.LatLng(45, 17); drawLine(p, to);
			to = new google.maps.LatLng(43, 15); drawLine(p, to);
			to = new google.maps.LatLng(44, 19); drawLine(p, to);
		});
		google.maps.event.addListener(markerCluster, "mouseover", function (c) {
			console.log("mouseover: ");
			console.log("Center of cluster: " + c.getCenter());
			console.log("Number of managed markers in cluster: " + c.getSize());
		});
		google.maps.event.addListener(markerCluster, "mouseout", function (c) {
			console.log("mouseout: ");
			console.log("Center of cluster: " + c.getCenter());
			console.log("Number of managed markers in cluster: " + c.getSize());
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

}(window.euvis || (window.euvis = {})));
