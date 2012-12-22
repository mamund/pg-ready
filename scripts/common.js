// pgbuild common library
// 2012-12 (@mamund)

var pg;
window.onload= function() {
    pg = pgblib();
    pg.init();
}

var pgblib = function() {
    var g = {};
    g.deviceUUID = null;
    g.isReady = false;
    g.isAndriod = false;
    g.isBlackberry = false;
    g.isIphone = false;
    g.isWindows = false;

    function init() {
        document.addEventListener('deviceready', onDeviceReady, false);
    }

    function onDeviceReady() {
        isReady = true;
        alert(device.uuid);
        g.deviceUUID = device.uuid;
        alert(g.deviceUUID);
        deviceDetection();
    }

    function deviceDetection() {
        if(g.isReady) {
            switch (device.platform) {
                case 'Android' :
                    g.isAndroid = true;
                    break;
                case 'Blackberry' :
                    g.isBlackberry = true;
                    break;
                case 'iPhone' :
                    g.isIphone = true;
                    break;
                case 'WinCE' :
                    g.isWindows = true;
                    break;
            }
        }
        alert(device.platform);
    }
    
    var that = {};
    that.init = init;
    return that;
}
