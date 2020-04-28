var client = require('cheerio-httpcli');

var baseCode = "KRW";
var codeList = [
    "JPY", "USD", "EUR", "AUD", "GBP", "NZD", "CAD", "ZAR", "CNH"
];

var url = 'http://finance.yahoo.com/q';

for (var i in codeList) {
    var peer = codeList[i];
    if (peer == baseCode) continue;
    var code = peer + baseCode + "=X";
    getFX(code);
}

function getFX(code) {
    client.fetch(url, {"s":code }, function(err, $, res) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
    
        var str = $('#quote-header-info > div > div > div > span:nth-child(1)').text();
        str = str.replace(/,/g,"");
    
        var arr = str.match(/\d*\.?\d+/);
    
        console.log(code);
        console.log(arr[0]);
    });
}

