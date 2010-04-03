function(row) {
  $.log(row)
  var info = row.value.shared.info;
  info.shared_by = row.value.shared.by;
  info.icon = info.icon || "images/couchapp.png";
  // todo
  info.dbs = [{name:"drl"},{name:"toast"},{name:"todo"}];
  info.shared_doc_id = row.id;
  return info;
};