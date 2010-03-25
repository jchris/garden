function couchAppName(ddoc) {
  var name;
  name = ddoc.couchapp && ddoc.couchapp.name;
  if (name && name != "Name of your CouchApp") {
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
      path : couchAppPath(db, row.doc),
      db : db
    }
    if (app_info.path) {
      app_infos.push(app_info);
    }
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

function localApps(cb) {
  $.couch.allDbs({
    success : function(dbs) {
      findApps(dbs, [], cb);
    }
  });
};

function groupApps(apps) {
  var app, grouped_apps = {};
  for (var i=0; i < apps.length; i++) {
    app = apps[i];
    if (grouped_apps[app.name]) {
      grouped_apps[app.name].push(app);
    } else {
      grouped_apps[app.name] = [app];
    }
  };
  return grouped_apps;
};

exports.localApps = localApps;
exports.groupApps = groupApps;
