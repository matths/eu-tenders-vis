(function (exports) {
  'use strict';

  function CSVLoader (params) {
    this.loaded = params.loaded;

    $(params.element).on('change', _.bind(this.handleFileSelect, this));
  }

  CSVLoader.prototype = {

    loaded: _.noop,

    handleFileSelect: function (evt) {
      var file = _.first(evt.target.files);
      this.read(file);
    },

    read: function (file) {
      var self = this;
      var reader = new FileReader();

      reader.onloadend = function (evt) {
        var entries = evt.target.result.split('\n');
        var keys = entries.shift();

        self.loaded({entries: entries, keys: keys});
      };

      reader.readAsText(file);
    }
  };

  exports.CSVLoader = CSVLoader;


}(window.euvis || (window.euvis = {})));