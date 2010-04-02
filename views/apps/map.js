function(doc) {
  if (doc.garden) {
    emit([doc.garden.id], doc.garden);
  }
};
