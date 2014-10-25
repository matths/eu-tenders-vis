(function () {
  'use strict';

  new euvis.CSVLoader({
    element: $('#csv-input'),
    loaded: function (data) {
      console.log(data.entries.length);
    }
  })


}());