$.couch.app(function() {
  var app = this;
  
  $("#garden").evently(app.ddoc.evently.garden, app);
  $.pathbinder.begin("/");
  

  
  
  // give an option to copy those ddocs to the garden db for sharing
  
  // ability to replicate remote gardens into the local garden

  // bookmark remote gardens info in the garden, so that that info also replicates
    // remote garden bookmarks should have non-uuid docids to prevent duplicate entries for popular sources?

  // ability to install ddocs in the local garden into local databases
  //   this should have a warning!
});