function(e) {
  e.preventDefault();
  var share = this;
  var widget = $$(this);
  var app = widget.app;
  var garden = app.require("lib/garden");
  var ddoc_path = $(share).attr("href");
  $.log(ddoc_path)
  $(share).text("Sharing...");
  garden.shareApp(app, $$("#account").userCtx.name, ddoc_path, {
    success : function() {
      $(share).text("Shared!");
      window.location.reload()    
    }
  });
  return false;
};