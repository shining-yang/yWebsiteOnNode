//
// Exports all .js modules under the directory except the index.js
//
var fs = require('fs');
var path = require('path');
var files = fs.readdirSync(__dirname);

files.forEach(function (file) {
  var moduleName = path.basename(file, '.js');
  if (moduleName != 'index') {
    exports[moduleName] = require('./' + moduleName);
  }
});