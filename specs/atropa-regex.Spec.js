var atropa = require('../src/atropa-regex.js');
var fs = require('fs');
var path = require('path');
var specPath = path.resolve(__dirname, '../browser/tests/atropa-regex.test.js');
var specCode = fs.readFileSync(specPath, "utf8");
eval(specCode);
