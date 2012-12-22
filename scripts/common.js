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

    function init() {
        document.addEventListener('deviceready', onDeviceReady, false);
    }

    function onDeviceReady() {
        isReady = true;
        alert(g.isReady);
    }

    var that = {};
    that.init = init;
    return that;
}

/*
isPhoneGapReady = false;
function init() {
    // Add an event listener for deviceready
    document.addEventListener("deviceready", onDeviceReady, false);
}

intervalID = window.setInterval(function() {
    if (PhoneGap.available) {
        onDeviceReady();
    }
}, 500);

function onDeviceReady() {
    window.clearInterval(intervalID);
    isPhoneGapReady = true;
    alert('The device is now ready');
}

window.onload = init;
*/

