$.couch.app(function() {
  
  function couchAppName(ddoc) {
    var name;
    name = ddoc.couchapp && ddoc.couchapp.name;
    if (name) {
      return name;
    } else {
      var name = ddoc._id.split('/');
      name.shift();
      return name.join('/');
    }
  };
  
  function couchAppPath(db, ddoc) {
    var index, path;
    index = ddoc.couchapp && ddoc.couchapp.index;
    if (index) {
      path = ['', db, ddoc._id, index].join('/');
    } else if (ddoc._attachments && ddoc._attachments["index.html"]) {
      path = ['', db, ddoc._id, "index.html"].join('/');
    }
    return path;
  };
  
  function appInfos(db, rows) {
    var app_infos = [];
    for (var i=0; i < rows.length; i++) {
      var row = rows[i];
      var app_info = {
        name : couchAppName(row.doc),
        path : couchAppPath(db, row.doc)
      }
      app_infos.push(app_info);
    };
    return app_infos;
  };
  
  function findApps(dbs, app_infos, cb) {
    var db = dbs.pop();
    if (db) {
      $.couch.db(db).allDesignDocs({
        include_docs : true,
        success : function(resp) {
          findApps(dbs, app_infos.concat(appInfos(db, resp.rows)), cb);
        },
        error : function(resp) {
          findApps(dbs, app_infos, cb);
        }
      });
    } else { // did the last db
      cb(app_infos)
    }
  }
  
  $.couch.allDbs({
    success : function(dbs) {
      findApps(dbs, [], function(apps) {
        $.log(apps)
        
        
      });
    }
  });
  
  // find all design documents
  // list them
  
  
  // give an option to copy those ddocs to the garden db for sharing
  
  // ability to replicate remote gardens into the local garden

  // bookmark remote gardens info in the garden, so that that info also replicates
    // remote garden bookmarks should have non-uuid docids to prevent duplicate entries for popular sources?

  // ability to install ddocs in the local garden into local databases
  //   this should have a warning!
});