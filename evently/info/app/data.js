function(r, p) {
  // $.log(arguments)
  p.app = $$(this).apps[p.name];
  // p.json = JSON.stringify($$(this).apps[p.name]);
  return p;
  // return r;
};