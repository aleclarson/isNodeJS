var exposeToGlobal = require('exposeToGlobal');
module.exports = exposeToGlobal('isNodeJS', require('./server'));
