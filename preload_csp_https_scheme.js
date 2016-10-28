const webFrame = require('electron').webFrame;

// Bypass CSP compliance using protocol scheme
webFrame.registerURLSchemeAsBypassingCSP('https');

require('./script');
