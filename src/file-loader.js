(function (exports) {
  'use strict';

  function FileLoader (params) {
    this.loaded = params.loaded;

    $(params.element).on('change', _.bind(this.handleFileSelect, this));
  }

  FileLoader.prototype = {

    loaded: _.noop,

    handleFileSelect: function (evt) {
      var file = _.first(evt.target.files);
      this.read(file);
    },

    read: function (file) {
      var self = this;
      var reader = new FileReader();

      reader.onloadend = function (evt) {
        self.loaded(evt.target.result);
      };

      reader.readAsText(file);
    }
  };

  exports.FileLoader = FileLoader;


}(window.euvis || (window.euvis = {})));