var TARGET_URL = "https://atom.io";

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
    win.capturePage(function(img) {
        fs.writeFileSync('screenshot.png', img.toPng);
    });
}