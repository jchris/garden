function(e) {
  e.preventDefault();
  var widget = $$(this);
  var app = widget.app;
  var garden = app.require("lib/garden");
  var ddoc_path = $(this).attr("href");

  garden.shareApp(app, $$("#account").userCtx.name, ddoc_path, {
    success : function() {
      $.log("shared!");
    }
  });
  return false;
};