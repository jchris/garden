function(cb, e, params) {
  var name = params.name;
  // load all ddocs with the matching name in any database
  var widget = $(this);
  var app =  $$(this).app;
  var garden = app.require("lib/garden");
  garden.installedApps(app, name, function(installs) {
    $(widget).trigger("render", [installs]);
  });
};
