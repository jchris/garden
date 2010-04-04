function(e) {
  var db = $("select",this).val();
  $.log(db)
  if (db == "_other") {
    $(".other",this).show();
  } else {
    $(".other",this).hide();
  }
};