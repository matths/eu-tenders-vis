(function () {
  'use strict';

  var Nuts3 = euvis.Nuts3;
  var Contracts = euvis.Contracts;

  new euvis.FileLoader({
    element: $('#csv-input'),
    loaded: function (data) {

      Nuts3.init(function () {
        Contracts.init(data);


      });
    }
  })

}());