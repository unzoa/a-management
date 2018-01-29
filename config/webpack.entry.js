var path = require('path');

var APP_PATH = path.resolve(__dirname, '../app');
var configEntry = {};

configEntry.app = path.resolve(APP_PATH, 'index.js');
configEntry.vendor = ['jquery'];
configEntry.mobile = path.resolve(APP_PATH, 'src/mobile/mobile.js');
configEntry.mobile2 = path.resolve(APP_PATH, 'src/mobile/mobile2.js');
configEntry.mobile3 = path.resolve(APP_PATH, 'src/mobile/mobile3.js');
configEntry.auth = path.resolve(APP_PATH, 'src/test2/auth.js');
configEntry.bumen = path.resolve(APP_PATH, 'src/test2/bumen.js');

module.exports = configEntry;