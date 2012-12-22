var isPhoneGapReady = false;
function init() {
    alert('init');
    // Add an event listener for deviceready
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    alert('onready');
    window.clearInterval(intervalID);
    // set to true
    isPhoneGapReady = true;
    alert('The device is now ready');
}

// Set an onload handler to call the init function
window.onload = init;

