(function () {
  'use strict';

  var GeoConverter = euvis.GeoConverter;
  var Contracts = euvis.Contracts;
  var FileLoader = euvis.FileLoader;
  var Map = euvis.Map;

  $("#dataTable").tablesorter();

  new FileLoader({
    element: $('#csv-input'),
    loaded: function (data) {

      GeoConverter.init(function () {
        Contracts.init(data);
        Map.addData(Contracts.getAll());

        $('#filter-button')
          .removeAttr('disabled')
          .on('click', function () {
          Map.addData(Contracts.getFiltered({
            money: {
              max: +$('#max-value').val(),
              min: +$('#min-value').val()
            },
            sector: $('#sector-value').val()
          }));
        });
      });
    }
  })




}());