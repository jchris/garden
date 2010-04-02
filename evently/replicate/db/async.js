function(cb, e, params) {
  var db = $.couch.db(params.name);
  // load replication history (can we use _local docs to do this?)
  // button to configure a new replication
  db.info({
    success : function(resp) {
      cb(resp)
    }
  });
};