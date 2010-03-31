function(e, params) {
  var apps = $$("#garden").apps;
  for (var i=0; i < apps.length; i++) {
    var app = apps[i];
    if (app.id == id) {
      return app;
    }
  };
};
