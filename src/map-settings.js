(function (exports) {

	// colorize google maps
	var mapStyles = [
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

	// cluster markers
	var clusterStyles = [{
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

	// normal markers
	var markerStyles = {
		fromMarker: "assets/images/map_spot.png",
		toMarker: "assets/images/map_recipient.png"
	}

	exports.MapSettings = {};
	exports.MapSettings.mapStyles = mapStyles;
	exports.MapSettings.clusterStyles = clusterStyles;
	exports.MapSettings.markerStyles = markerStyles;


}(window.euvis || (window.euvis = {})));
