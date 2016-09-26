var assert = require("./assert");
var Note = require("../models/note-model");
var NoteList = require("../models/note-list-model");

var noteList = new NoteList();

function testNoteListStoresNotes() {
  noteList.storeNote(Note, "test");
  var arr = noteList.getNotes();

  for (var i = 0; i < arr.length; i++) {
    assert.isTrue(arr[i].text === "test");
    assert.isTrue(arr[i] instanceof Note);
  }
}
testNoteListStoresNotes();
