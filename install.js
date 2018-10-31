const os = require('os');
var spawn = require('cross-spawn');

if (os.platform() === 'darwin') {
    spawn.sync('npm', ['run', 'native_build'], {
        input: 'MacOS detected. Building native module.',
        stdio: 'inherit'
    });
}