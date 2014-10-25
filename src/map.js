(function () {

	function initialize() {
		var map = new google.maps.Map(document.getElementById('map'));
		var kmlLayer = new google.maps.KmlLayer({
			url: 'http://nuts.geovocab.org/id/DE13_geometry.kml',
			suppressInfoWindows: true,
			map: map
		});
		google.maps.event.addListener(kmlLayer, 'click', function(kmlEvent) {
			var text = kmlEvent.featureData.description;
			showInContentWindow("Hello "+text);
		});
	}

	function showInContentWindow(text) {
		var sidediv = document.getElementById('content-window');
		sidediv.innerHTML = text;
	}

	google.maps.event.addDomListener(window, 'load', initialize);

})();
