function(doc) {
  if (doc.type == "remote") {
    // iterate through apps and emit them
    doc.apps.forEach(function(app) {
      emit([app.name, doc.db_url], doc)      
    })
  }
};