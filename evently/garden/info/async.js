function(cb, e, params) {
  var app_db_id = params.splat[0];
  var app = $$(this).app;
  var garden = app.require("lib/garden");
  $.log(app_db_id)
  app.view("apps", {
    startkey : [app_db_id],
    endkey : [app_db_id,{}],
    success : function(resp) {
      resp.rows.forEach(function(row) {
        
      });
      
      garden.cachedApps(app, function(apps) {
        $.log(arguments)
        for (var i=0; i < apps.length; i++) {
          if (apps[i].app_db_id == app_db_id) {
            app = apps[i];
            break;
          }
        };
        
        cb(app);
      });
      
    }
  });
  
  // query to find the app in the garden
  // merge this with the installed apps info
  
  

};
