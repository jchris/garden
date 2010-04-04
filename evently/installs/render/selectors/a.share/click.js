function(e) {
  e.preventDefault();
  var widget = $$(this);
  var app = widget.app;
  var garden = app.require("lib/garden");
  var ddoc_path = $(this).attr("href");
  $.log(ddoc_path)
  garden.shareApp(app, $$("#account").userCtx.name, ddoc_path, {
    success : function() {
      $.log("shared!");
    }
  });
  return false;
};