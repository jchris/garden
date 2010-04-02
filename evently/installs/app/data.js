function(apps) {
  $.log("apps")
  $.log(apps);




  
  return {
    installs : apps.map(function(a) {
      return {
        name : a.name,
        user : "jchris",
        path : a.path,
        db : a.db,
        share : true,
        update : false
      }
    })
  };
};

// create a stash of list items that have the proper values for share and update