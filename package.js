'use strict';

Package.describe({
  summary: "Compile ECMAScript 6 (Harmony) to ECMAScript 5 with Google's Traceur compiler."
});

Package._transitional_registerBuildPlugin({
  name: "harmony-compiler",
  use: [],
  sources: [
    "plugin/compiler.js"
  ],
  npmDependencies: {"traceur": "0.0.42"}
});

Package.on_use(function(api) {
  var path = '.npm/plugin/harmony-compiler/node_modules/traceur/bin/';
  api.add_files(path + 'traceur-runtime.js');
});
