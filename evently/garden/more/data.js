function(r, p) {
  // $.log(arguments)
  p.app = $$(this).grouped_apps[p.name];
  p.json = JSON.stringify($$(this).grouped_apps[p.name]);
  return p;
  // return r;
};