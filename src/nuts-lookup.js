(function (exports) {
  'use strict';

  var POINT_REGEX = /\./g;

  var lookupTable={};

  exports.Nuts3 = {
    init: function (callback) {

      console.log('load');

      $.get('data/nuts-labels.csv', function (data) {
        var key, lat, long, level, i, entry;
        var entries = CSV.parse(data);

        console.log('loaded')

        for (i = 1; i < entries.length; i++) {
          entry = entries[i];
          key = entry[0];
          lat = entry[1];
          long = entry[2];
          level = entry[3];

          lookupTable[key] = {lat: lat, long: long, level: level}
        }

        callback();
      })
    },

    convert: function (nuts) {
      return lookupTable[nuts.slice(0, 4)] || {}
    }
  }

}(window.euvis || (window.euvis = {})));