// pgbuild common library
// 2012-12 (@mamund)

var pg;
window.onload= function() {
    pg = pgblib();
    pg.init(showPlatform);
}

function showPlatform() {
    alert(pg.g.isReady);
    alert(pg.g.isConnected);
    alert(pg.getDeviceUUID());
    alert(pg.getPlatform());
    alert(pg.getConnectStatus());
}

var pgblib = function() {
    var g = {};
    g.isReady = false;
    g.isConnected = false;

    function init(next) {
        g.next = next;
        document.addEventListener('deviceready', 
                function(){onDeviceReady(next)}, false);
    }

    function onDeviceReady(next) {
        g.isReady = true;
        
        document.addEventListener("online", onOnline, false);
        document.addEventListener("offline", onOffline, false);

        if(next) {
            next();
        }
    }

    function getDeviceUUID() {
        return device.uuid;
    }

    function getPlatform() {
        return device.platform;
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
    that.getPlatform = getPlatform;
    that.getDeviceUUID = getDeviceUUID;
    that.g = g;
    return that;
}
