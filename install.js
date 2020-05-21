const os = require('os');
var spawn = require('cross-spawn');

if (os.platform() === 'darwin') {
    spawn.sync('npm', ['run', 'native_install'], {
        input: 'MacOS detected. Installing native module.',
        stdio: 'inherit'
    });
}
