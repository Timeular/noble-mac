'use strict';

const os = require('os');

// noble-mac acts as a shim to noble.
if (os.platform() === 'mac') {
	const Noble = require('noble/lib/noble');
	const macBindings = require('./lib/binding.js');
	var nobleInstance = new Noble(macBindings);
	module.exports = nobleInstance;
} else {
	module.exports = require('noble');
}
