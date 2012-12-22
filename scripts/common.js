// pgbuild common library
// 2012-12 (@mamund)

var pg;
window.onload= function() {
    pg = pgblib();
    alert('onload');
    pg.init(showPlatform);
    alert('init is done');
}

function showPlatform() {
    alert(pg.g.isAndroid);
}

var pgblib = function() {
    var g = {};
    g.deviceUUID = null;
    g.isReady = false;
    g.isAndriod = false;
    g.isBlackberry = false;
    g.isIphone = false;
    g.isWindows = false;

    function init(next) {
        g.next = next;
        document.addEventListener('deviceready', 
                function(){onDeviceReady(next)}, false);
    }

    function onDeviceReady(next) {
        isReady = true;
        g.deviceUUID = device.uuid;
        deviceDetection(next);
    }

    function deviceDetection(next) {
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
        next();
    }
    
    var that = {};
    that.init = init;
    that.g = g;
    return that;
}
