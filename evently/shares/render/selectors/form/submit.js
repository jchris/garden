function(e) {
  e.preventDefault();
  var app = $$(this).app;
  var db = $("select",this).val();
  var shared_doc_id = $("input[name=shared_doc_id]",this).val();
  var garden = app.require("lib/garden");
  var form = this;
  function installApp() {
    $(form).append('<p class="progress">Installing into ' + db + '...</p>');
    garden.installApp(app, db, shared_doc_id, {
      success : function() {
        $(".progress:last",form).text("Installed into "+db);
      }
    });
  }

  if (db == "_other") {
    db = $("[name=other]", form).val();
    var create = $("[name=create]", form).is(':checked');
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