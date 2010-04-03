function(e) {
  e.preventDefault();
  var app = $$(this).app;
  var db = $("select",this).val();
  var shared_doc_id = $("input[name=shared_doc_id]",this).val();
  var garden = app.require("lib/garden");
  garden.installApp(app, db, shared_doc_id, {
    success : function() {
      $.log("installed!")
    }
  });
  return false;
};