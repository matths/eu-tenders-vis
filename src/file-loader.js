(function (exports) {
  'use strict';

  function FileLoader (params) {
    this.loaded = params.loaded;

    $(params.element).on('change', this.handleFileSelect.bind(this));
  }

  FileLoader.prototype = {

    loaded: function () {},

    handleFileSelect: function (evt) {
      var file = evt.target.files[0];
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