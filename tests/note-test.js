var assert = require("./assert");
var Note = require("../models/note-model");

function testNoteHasText() {
  var note = new Note("My favourite language is JavaScript");

  assert.isTrue(note.getText() === "My favourite language is JavaScript");

}
testNoteHasText();
