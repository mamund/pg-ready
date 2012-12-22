// pgbuild common library
// 2012-12 (@mamund)

var pg;
window.onload= function() {
    pg = pgblib();
    pg.init();
}

var pgblib = function() {
    var g = {};
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
        g.deviceUUID = device.uuid;
        deviceDetection();
    }

    function deviceDetection() {
        if(isPhoneGapReady) {
            switch (device.platform) {
                case 'Android' :
                    isAndroid = true;
                    break;
                case 'Blackberry' :
                    isBlackberry = true;
                    break;
                case 'iPhone' :
                    isIphone = true;
                    break;
                case 'WinCE' :
                    isWindows = true;
                    break;
            }
        }
        alert(device.platform);
    }
    
    var that = {};
    that.init = init;
    return that;
}
