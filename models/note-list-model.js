(function(exports) {
  function NoteList() {
    this.noteArray = [];
  }

  NoteList.prototype.storeNote = function(Note, string) {
    this.noteArray.push(new Note(string));
  };

  NoteList.prototype.getNotes = function() {
    return this.noteArray;
  };
  module.exports = NoteList;
})(this);
