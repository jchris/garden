function(e) {
  e.preventDefault();
  var app = $$(this).app;
  var db = $("select",this).val();
  var shared_doc_id = $("input[name=shared_doc_id]",this).val();
  var garden = app.require("lib/garden");

  function installApp() {
    garden.installApp(app, db, shared_doc_id, {
      success : function() {
        $.log("installed!")
      }
    });
  }

  if (db == "_other") {
    db = $("[name=other]", this).val();
    var create = $("[name=create]", this).is(':checked');
    if (create) {
      $.couch.db(db).create({
        success : installApp,
        error : installApp
      });
    } else {
      installApp();
    }    
  } else {
    installApp();
  }

  return false;
};