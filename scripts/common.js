// pgbuild common library
// 2012-12 (@mamund)

var isPhoneGapReady, intervalID;

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

document.addEventListener("load",init, false);

