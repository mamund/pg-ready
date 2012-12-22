// pgbuild common library
// 2012-12 (@mamund)

var pg;
window.onload= function() {
    pg = pgblib();
    pg.init(showPlatform);
}

function showPlatform() {
    alert(pg.g.deviceUUID);
    alert(pg.g.devicePlatform);
    alert(pg.isConnected());
}

var pgblib = function() {
    var g = {};
    g.deviceUUID = null;
    g.devicePlatform = null;
    g.isReady = false;

    function init(next) {
        g.next = next;
        document.addEventListener('deviceready', 
                function(){onDeviceReady(next)}, false);
    }

    function onDeviceReady(next) {
        isReady = true;
        g.deviceUUID = device.uuid;
        g.devicePlatform = device.platform;
        if(next) {
            next();
        }
    }

    function isConnected() {
        return navigator.network.connection.type !== Connection.NONE;
    }
   
    var that = {};
    that.init = init;
    that.isConnected = isConnected;
    that.g = g;
    return that;
}
