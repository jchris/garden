function() {
  $.log(arguments)
  var grouped_apps = $$(this).grouped_apps;
  $.log(grouped_apps)
  var stash = {
    couchapps : []
  };
  $.forIn(grouped_apps, function(name, apps) {
    var icon = "images/couchapp.png";
    apps.forEach(function(app) {
      if (app.icon) icon = app.icon;
    });
    stash.couchapps.push({
      name : name,
      apps : apps,
      icon : icon
    });
  });
  $.log(stash)
  return stash;
}