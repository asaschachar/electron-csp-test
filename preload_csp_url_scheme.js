const webFrame = require('electron').webFrame;

// Bypass CSP compliance using url scheme
webFrame.registerURLSchemeAsBypassingCSP('https://*.herokuapp.com');

require('./script');
