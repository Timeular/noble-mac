const events = require('events');
const util = require('util');

const NobleMac = require('../build/Release/noble-mac-native').NobleMac;

util.inherits(NobleMac, events.EventEmitter);

module.exports = new NobleMac();
