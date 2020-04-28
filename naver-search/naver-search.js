var https = require('https');
var parseString = require('xml2js').parseString;

var keyword = '애견동반식당';

var client_id = 'client_id';
var client_secret = 'client_secret';
var host = 'openapi.naver.com';
var port = 443;
var uri = '/v1/search/blog.xml?query=' + encodeURIComponent(keyword);

var options = {
    host: host,
    port: port,
    path: uri,
    method: 'GET',
    headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
};

var result = "";

var req = https.request(options, function(res) {
    res.setEncoding('utf8');

    res.on('data', function(chunk) {
        result = result + chunk;
    });

    res.on('end', function() {
        parseString(result, function(err, pStr) {
            var items = pStr.rss.channel[0].item;
            for (var i in items) {
                console.log("USER: " + item[i].bloggername[0]);
                console.log("TITLE: " + item[i].title[0]);
                console.log("DESC: " + item[i].description[0]);
            }
        });
    });
});

req.end();