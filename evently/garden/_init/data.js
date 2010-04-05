function(apps) {
  $.log(arguments)
  // var apps = $$(this).apps;
  var stash = {
    couchapps : apps
  };
  return stash;
}