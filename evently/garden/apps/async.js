function(cb) {
  var widget = $$(this);
  var app = widget.app;
  var garden = app.require("lib/garden");
  garden.localApps(function(apps) {
    var grouped_apps = garden.groupApps(apps);
    widget.grouped_apps = grouped_apps;
    cb();
  });
};
