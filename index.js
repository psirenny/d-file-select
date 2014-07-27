function Component () {};

Component.prototype.create = function (model, dom) {
  var self = this;

  if (this.dropzone) {
    dom.addListener('dragenter', this.dropzone, this.dragenter.bind(this));
    dom.addListener('dragover', this.dropzone, this.dragover.bind(this));
    dom.addListener('drop', this.dropzone, this.drop.bind(this));
  }

  if (this.input) {
    dom.addListener('change', this.input, this.change.bind(this));
  }
};

Component.prototype.clear = function () {
  this.input.value = '';
  this.emit('clear');
};

Component.prototype.change = function (e) {
  this.load(e.target.files);
};

Component.prototype.dragenter = function (e) {
  e.stopPropagation();
  e.preventDefault();
};

Component.prototype.dragover = function (e) {
  e.stopPropagation();
  e.preventDefault();
};

Component.prototype.drop = function (e) {
  e.stopPropagation();
  e.preventDefault();
  var data = e.dataTransfer.getData('text');
  var files = e.dataTransfer.files;
  this.load(files || data);
};

Component.prototype.load = function (files) {
  this.model.set('files', files);
  this.emit('load', files);
};

module.exports = Component;
