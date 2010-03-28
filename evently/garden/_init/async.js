function(cb) {
  var app = $$(this).app;
  var garden = app.require("lib/garden");
  garden.localApps(function(apps) {
    var grouped_apps = garden.groupApps(apps);
    $.forIn(grouped_apps, function(name, apps) {
      var li = $('<li class="app"></li>');
      var icon;
      apps.forEach(function(app) {
        if (app.icon) icon = app.icon;
      });
      $$(li).couchapp = {
        name : name,
        apps : apps,
        icon : icon
      };
      $("#garden").append(li);
    });
    cb();
  });
};
