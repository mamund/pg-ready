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
    alert(pg.getConnectStatus();
}

var pgblib = function() {
    var g = {};
    g.deviceUUID = null;
    g.devicePlatform = null;
    g.isReady = false;
    g.isConnected = false;

    function init(next) {
        g.next = next;
        document.addEventListener('deviceready', 
                function(){onDeviceReady(next)}, false);
    }

    function onDeviceReady(next) {
        g.isReady = true;
        g.deviceUUID = device.uuid;
        g.devicePlatform = device.platform;
        
        document.addEventListener("online", onOnline, false);
        document.addEventListener("offline", onOffline, false);

        if(next) {
            next();
        }
    }

    function getConnectStatus() {
        return navigator.network.connection.type;
    }
   
    function onOnline() {
        g.isConnected = true;
    }
    function onOffline() {
        g.isConnected = false;
    }

    var that = {};
    that.init = init;
    that.getConnectStatus = getConnectStatus;
    that.g = g;
    return that;
}
