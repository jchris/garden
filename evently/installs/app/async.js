function(cb, e, params) {
  $.log("aysn")
  var name = params.name;
  // load all ddocs with the matching name in any database
    // use the memoized thing + filter (for 1 cache)

  var widget = $$(this);
  var app = widget.app;
  var garden = app.require("lib/garden");
  garden.cachedApps(app, function(apps) {
    var installs = [];
    apps.forEach(function(a) {
      if (a.slug == name) {
        installs.push(a)
      }
    });
    cb(installs)
  });
};
