function(doc) {
  if (doc.garden && doc.garden.shared) {
    var slug = doc.garden.shared.id.split("/");
    slug.shift();
    emit(slug.join('/'), doc.garden);
  }
};
