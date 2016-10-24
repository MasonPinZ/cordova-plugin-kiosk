/* globals module */
var exec = require('cordova/exec');

var KioskPlugin = (function() {
    'use strict';

    return {
        exitKiosk: function() {
            exec(null, null, 'KioskPlugin', 'exitKiosk', []);
        },

        isInKiosk: function(callback) {
            if (/ios|iphone|ipod|ipad|windows/i.test(navigator.userAgent)) {
                callback(false); // ios not supported - cannot be in kiosk
                return;
            }
            exec(function(out) {
                callback(out === 'true');
            }, function(error) {
                throw new Error('KioskPlugin.isInKiosk failed: ' + error);
            }, 'KioskPlugin', 'isInKiosk', []);
        }
    };

}());

module.exports = KioskPlugin;
