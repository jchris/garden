function() {
  var ca = $$(this).couchapp;
  ca.icon = ca.icon || "images/couchapp.png";
  $.log(ca);  
  return ca;
}
