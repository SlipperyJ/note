var notelist = new NoteList();
notelist.createNote("Hello, world!!! =)");
notelist.createNote("My note 2 =)");
var noteController = new NoteController(notelist);

noteController.insertHTML();
noteController.makeUrlChangeShowNote()
