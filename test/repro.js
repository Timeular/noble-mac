const noble = require('../index.js');

noble.on('stateChange', function(state) {
    if (state === 'poweredOn') {
      noble.startScanning();
    } else {
      noble.stopScanning();
    }
});

function toUUID(uuid) {
    return (uuid.substring(0, 8) + '-' + uuid.substring(8, 12) + '-' +
    uuid.substring(12, 16)  + '-' + uuid.substring(16, 20) +
    '-' + uuid.substring(20, uuid.length)).toUpperCase()
}

noble.on('discover', function(peripheral) {
    console.log('nobl:', toUUID(peripheral.uuid))
})
