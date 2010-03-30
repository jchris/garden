function() {
  var app = $$(this).app;
  $("#info").evently(app.ddoc.evently.info, app);
  $.pathbinder.begin("/");
};