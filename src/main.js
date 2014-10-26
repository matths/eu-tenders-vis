(function () {
  'use strict';

  var GeoConverter = euvis.GeoConverter;
  var Contracts = euvis.Contracts;
  var FileLoader = euvis.FileLoader;
  var Map = euvis.Map;


  $.get('data/ted-contracts-de-2014.csv', function (data) {

    GeoConverter.init(function () {
      Contracts.init(data);
      Map.addData(Contracts.getAll());

      $('#loading-screen').remove();

      $('#filter-button')
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

  });

}());