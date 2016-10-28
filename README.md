# electron-csp-test

**Clone and run for an example of [Electron Issue 6465](https://github.com/electron/electron/issues/6465)**

This is a minimal Electron application used to reproduce the issue where you can only register certain protocol schemes (i.e. https, file) as bypassing a page's CSP policy with webFrame.registerURLSchemeAsBypassingCSP(scheme) instead of being able to use a finer control over bypassing a page's CSP policy with things like CSP [Source Lists](https://developer.mozilla.org/en-US/docs/Web/Security/CSP/CSP_policy_directives#Source_lists) like http://\*.example.com

Explanation of the application:

* The main browser window loads two webviews. Both webviews load https://github.com.
* Both webviews try to load a remote script from https://hosted-script.herokuapp.com/alert.js
* One webview registers the scheme `https` as bypassing CSP, which works as can be seen by the console log in the developer tools of the webview:

![Alt text](./screenshots/WorkingCSP3.png?raw=true "Working CSP")

* The other webview registers the scheme `https://\*.herokuapp.com`, which fails because the script is blocked by github's CSP scheme as can be seen by the console log in the developer tools of the webview:

![Alt text](./screenshots/BrokenCSP3.png?raw=true "Broken CSP")
