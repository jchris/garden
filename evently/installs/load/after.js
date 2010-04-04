function(e, params) {
  var name = params.name;
  $(".app").text(name);
  document.title = name + " : Share and Update : CouchApp Garden";
  // load all ddocs with the matching name in any database
  var widget = $(this);
  var app =  $$(this).app;
  var garden = app.require("lib/garden");
  garden.installedApps(app, name, function(installs) {
    $(widget).trigger("render", [name, installs]);
  });
};