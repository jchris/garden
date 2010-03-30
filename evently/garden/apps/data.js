function() {
  $.log(arguments)
  var apps = $$(this).apps;
  $.log(apps)
  var stash = {
    couchapps : []
  };
  $.forIn(apps, function(name, apps) {
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