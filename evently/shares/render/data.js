function(row, e, name, installs) {
  var info = row.value.shared.info;
  info.shared_by = row.value.shared.by;
  info.icon = info.icon || "images/couchapp.png";
  info.installs = installs;
  info.shared_doc_id = row.id;
  return info;
};