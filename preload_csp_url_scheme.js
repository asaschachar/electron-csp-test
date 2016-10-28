const webFrame = require('electron').webFrame;

// Bypass CSP compliance using url scheme
webFrame.registerURLSchemeAsBypassingCSP('https://*.herokuapp.com');

console.log(`[WEBVIEW] Changed CSP Scheme using the scheme 'https://*.herokuapp.com'
Attempting to load script from the following url: 'https://hosted-script.herokuapp.com/alert.js'`);

require('./script');
