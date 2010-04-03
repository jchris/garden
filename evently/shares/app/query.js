function(async_data, e, params) {
  $.log("arguments")
  $.log(e)
  return {
    view : "apps",
    type : "newRows",
    key : e.key
  };
};
