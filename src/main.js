(function () {
  'use strict';

  var GeoConverter = euvis.GeoConverter;
  var Contracts = euvis.Contracts;
  var FileLoader = euvis.FileLoader;
  var Map = euvis.Map;

  function getQuery () {
    return {
      money: {
        max: +$('#max-value').val(),
          min: +$('#min-value').val()
      },
      sector: $('#sector-value').val()
    };
  }

  $.get('data/ted-contracts-de-2014.csv', function (data) {

    GeoConverter.init(function () {
      Contracts.init(data);
      Map.addData(Contracts.getAll());

      $('#loading-screen').hide();

      $('#filter-button')
        .on('click', function () {
          Map.addData(Contracts.getFiltered(getQuery()));
        });
    });
  });

  new FileLoader({
    element: $('#csv-input'),
    loaded: function (data) {
      Contracts.init(data);
      Map.addData(Contracts.getAll());
    }
  })

}());