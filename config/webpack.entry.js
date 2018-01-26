var path = require('path');
var configEntry = {};

var APP_PATH = path.resolve(__dirname, '../app');

configEntry.app = path.resolve(APP_PATH, 'index.js');
configEntry.mobile = path.resolve(APP_PATH, 'src/mobile/mobile.js');
configEntry.mobile2 = path.resolve(APP_PATH, 'src/mobile/mobile2.js');
configEntry.mobile3 = path.resolve(APP_PATH, 'src/mobile/mobile3.js');
configEntry.vendor = ['jquery'];

module.exports = configEntry;