var DELAY_TIME = 1000 * 1;

var WORD = "말티즈"
var TARGET_URL = "https://www.google.co.kr/search" + "?source=lnms&tbm=isch&q=" + encodeURIComponent(WORD);

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var fs = require('fs');

var win = null;
app.on('ready', function() {
    win = new BrowserWindow({width:1024, height:800});
    win.loadURL(TARGET_URL);
    win.webContents.on('did-finish-load', captureFunc);
});

function captureFunc() {
    setTimeout(function() {
        var fname = "mal-" + (new Date()).getTime() + ".png";
        win.capturePage(function(img) {
            fs.writeFileSync( fname, img.toPng);
            app.quit();
        });
    }, DELAY_TIME);
}