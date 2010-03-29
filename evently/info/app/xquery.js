function(e, params) {
  return {
    view : "apps",
    limit : 25,
    startkey : [params.name, {}],
    endkey : [params.name],
    descending : true
  }
}
