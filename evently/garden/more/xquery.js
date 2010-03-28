function(e, params) {
  return {
    view : "more",
    limit : 25,
    startkey : [params.name, {}],
    endkey : [params.name],
    descending : true
  }
}
