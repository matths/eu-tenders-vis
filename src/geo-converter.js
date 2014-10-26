(function (exports) {
  'use strict';

  var POINT_REGEX = /\./g;

  var nutsTable={};
  var plzTable={};

  function  getTable (file, callback) {
    $.get(file, function (data) {
      var key, lat, long, level, i, entry;
      var table = {};
      var entries = CSV.parse(data);

      for (i = 1; i < entries.length; i++) {
        entry = entries[i];
        key = entry[0];
        lat = entry[1];
        long = entry[2];
        level = entry[3];

        table[key] = {lat: lat, long: long, level: level}
      }

      callback(table);
    })
  }


  exports.GeoConverter = {
    init: function (callback) {

      getTable('data/nuts-geo.csv', function (table) {
        nutsTable = table;

        getTable('data/zip-geo.csv', function (table) {
          plzTable = table;
          callback();
        })
      });
    },

    convertZIP: function (plz) {
      return plzTable[plz];
    },

    convertNUTS3: function (nuts) {
      return nutsTable[nuts.slice(0, 4)] || {}
    }
  }

}(window.euvis || (window.euvis = {})));