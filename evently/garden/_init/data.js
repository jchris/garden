function() {
  var apps = $$(this).apps;
  var stash = {
    couchapps : []
  };
  $.forIn(apps, function(name, info) {
    stash.couchapps.push(info);
  });
  return stash;
}