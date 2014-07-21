Package.describe({
  summary: "Meteor wrapper of Keen IO: an online service to collect, analyze, and visualize your data."
});

Npm.depends({"keen.io" : "0.1.2"})

Package.on_use(function (api, where) {
  api.add_files('keen.js', ['server']);
  if (typeof api.export !== 'undefined') {
    api.export(['Keen'], ['server']);
  }
});
