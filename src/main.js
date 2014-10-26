(function () {
  'use strict';

  var Nuts3 = euvis.Nuts3;
  var Contracts = euvis.Contracts;
  var FileLoader = euvis.FileLoader;
  var Map = euvis.Map;

	$('#pager').show();

  new FileLoader({
    element: $('#csv-input'),
    loaded: function (data) {

      Nuts3.init(function () {
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