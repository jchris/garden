function(cb) {
  var widget = $$(this);
  var app = widget.app;
  var garden = app.require("lib/garden");
  app.db.openDoc("local_app_cache", {
    success : function(doc) {
      widget.apps = doc.apps;
      cb();
    },
    error : function() {
      garden.localApps(function(apps) {
        $.log(apps);
        app.db.saveDoc({
          _id : "local_app_cache",
          apps : apps
        });
        widget.apps = apps;
        cb();
      });
    }
  })

};
