$.couch.app(function() {
  var app = this;
  var garden = app.require("lib/garden");
  garden.localApps(function(apps) {
    var grouped_apps = garden.groupApps(apps);
    $.forIn(grouped_apps, function(name, apps) {
      var li = $('<li class="app"></li>');
      $("#couchapps").append(li);
      $(li).evently(app.ddoc.evently.applist, app, [name, apps]);
    });
  });
  
  
  // give an option to copy those ddocs to the garden db for sharing
  
  // ability to replicate remote gardens into the local garden

  // bookmark remote gardens info in the garden, so that that info also replicates
    // remote garden bookmarks should have non-uuid docids to prevent duplicate entries for popular sources?

  // ability to install ddocs in the local garden into local databases
  //   this should have a warning!
});