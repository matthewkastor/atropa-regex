var regex = require('../src/atropa-regex.js');

try {
    Object.keys(regex).forEach(
        function (prop) {
            if(!atropa[prop]) {
                atropa[prop] = regex[prop];
            }
        }
    );
} catch (ignore) {
    atropa = require('../src/atropa-regex.js');
}

Object.keys(regex.data).filter(
    function (prop) {
        return prop !== 'requirements';
    }
).forEach(
    function (prop) {
        atropa.data[prop] = regex.data[prop];
    }
);
