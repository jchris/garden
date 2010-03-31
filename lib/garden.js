function couchAppName(ddoc) {
  var name;
  name = ddoc.couchapp && ddoc.couchapp.name;
  if (name && name != "Name of your CouchApp") {
    return name;
  } else {
    name = ddoc._id.split('/');
    name.shift();
    return name.join('/');
  }
}

function couchAppIcon(db, ddoc) {
  if (ddoc._attachments && ddoc._attachments["images/icon.png"]) {
    return ['', db, ddoc._id, "images/icon.png"].join('/');
  }
}

function couchAppPath(db, ddoc) {
  var index, path;
  index = ddoc.couchapp && ddoc.couchapp.index;
  if (index) {
    path = ['', db, ddoc._id, index].join('/');
  } else if (ddoc._attachments && ddoc._attachments["index.html"]) {
    path = ['', db, ddoc._id, "index.html"].join('/');
  }
  return path;
}

function couchAppId(db, ddoc) {
  return [db,ddoc._id].join("/");
}

function appInfos(db, rows) {
  var app_infos = [];
  for (var i=0; i < rows.length; i++) {
    var row = rows[i];
    var app_info = {
      name : couchAppName(row.doc),
      path : couchAppPath(db, row.doc),
      icon : couchAppIcon(db, row.doc),
      db : db,
      id : couchAppId(db, row.doc)
    };
    if (app_info.path) {
      app_infos.push(app_info);
    }
  }
  return app_infos;
}

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
    cb(app_infos);
  }
}

function localApps(cb) {
  $.couch.allDbs({
    success : function(dbs) {
      findApps(dbs, [], function(apps) {
        cb(apps);
      });
    }
  });
}

function groupApps(db_apps) {
  var app, apps = {};
  for (var i=0; i < db_apps.length; i++) {
    app = db_apps[i];
    if (apps[app.name]) {
      apps[app.name].push(app);
    } else {
      apps[app.name] = [app];
    }
  }
  
  $.forIn(apps, function(name, installs) {
    var icon = "images/couchapp.png";
    installs.forEach(function(app) {
      if (app.icon) {icon = app.icon;}
    });
    apps[name] = {
      name : name,
      installs : installs,
      icon : icon
    };
  });
  
  return apps;
}

exports.localApps = localApps;

exports.cachedApps = function(app, fun) {
  var cache = app.require("vendor/couchapp/lib/cache");
  cache.get(app.db, "local_apps_cache", function(value_cb) {
    garden.localApps(function(apps) {
      value_cb(apps.map(function(a) {
        a.icon = a.icon || "images/couchapp.png";
        return a;
      }));
    });
  }, fun);
};

exports.shareApp = function(app, userName, path, opts) {
  // load the ddoc from the path, save it to app.db, call success
  var parts = path.split('/');
  var db = parts.shift();
  var ddoc_id = parts.join('/');
  $.couch.db(db).openDoc(ddoc_id, {
    attachments : true,
    success : function(doc) {
      doc.garden = {
        id : doc._id,
        rev : doc._rev,
        shared_at : new Date()
      };
      var garden_id = ["garden", userName, doc._id].join('/');
      doc._id = garden_id;
      app.db.openDoc(garden_id, {
        success : function(shared) {
          doc._rev = shared._rev;
          app.db.saveDoc(doc, opts);
        },
        error : function() {
          delete doc._rev;
          app.db.saveDoc(doc, opts);          
        }
      });
    }
  });
};
