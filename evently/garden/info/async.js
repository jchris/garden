function(cb) {
  var widget = $$(this);
  var app = widget.app;
  var garden = app.require("lib/garden");
  garden.cachedApps(app, function(apps) {
    widget.apps = apps;
    cb();
  });
};
