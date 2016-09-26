(function(exports) {
//
   function NoteController(notelist) {
    this.notelistview = new noteListView(notelist);
    this.notelist= notelist;
  };

    NoteController.prototype.insertHTML = function() {
      var element = document.getElementById("app");
      element.innerHTML = this.getListView().returnArrayAsHtml();
    };
    NoteController.prototype.getListView = function() {
      return this.notelistview;
    };
    NoteController.prototype.showNote = function () {
      var id = window.location.hash.split("#")[1];
      var notehtml = new NoteView(this.notelist.getNotes()[id]).show();
      document.getElementById("note").innerHTML = notehtml;
    };

    NoteController.prototype.makeUrlChangeShowNote = function () {
      window.addEventListener("hashchange", this.showNote);
    };

  exports.NoteController = NoteController;
})(this);
