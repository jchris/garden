function() {
  var ca = $$(this).couchapp;
  $.log(ca);
  ca.icon = ca.icon || "images/couchapp.png"
  return ca;
}
