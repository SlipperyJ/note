(function (exports) {

  function Note(string) {
    this.text = string;
  }

  Note.prototype.getText = function() {
    return this.text;
  };
  module.exports = Note;
})(this);
