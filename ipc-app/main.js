var TARGET_URL  = "https://ko.wikipedia.org/";

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipc = electron.ipcMain;

var mainWindow = null;
console.log('###');

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

ipc.on('mul-sync', function(event, arg) {
    console.log('#1');
    console.log(arg);
    event.returnValue = arg.a * arg.b;
});

ipc.on('mul-async', function(event, arg) {
    console.log('#2');
    console.log(arg);
    var result = arg.a * arg.b;
    event.sender.send('mul-async-reply', result);
});