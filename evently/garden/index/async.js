function(cb) {
  var widget = $$(this);
  var app = widget.app;
  var garden = app.require("lib/garden");
  var cache = app.require("vendor/couchapp/lib/cache");
  cache.get(app.db, "local_apps_cache", function(value_cb) {
    garden.localApps(function(apps) {
      value_cb(apps.map(function(a) {
        a.icon = a.icon || "images/couchapp.png";
        return a;
      }));
    });
  }, function(apps) {
    widget.apps = apps;
    cb();
  });
};
