const webviews = document.getElementsByTagName('webview')
webviewList = Array.prototype.slice.call(webviews)
webviewList.forEach((webview) => {
  webview.addEventListener('dom-ready', () => {

    webview.openDevTools();
  })
})
