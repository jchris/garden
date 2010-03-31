function() {
  var apps = $$(this).apps;
  $.log(apps)
  var stash = {
    couchapps : $$(this).apps.map(function(a) {
      a.icon = a.icon || "images/couchapp.png";
      return a;
    })
  };
  return stash;
}