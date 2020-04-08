var client = require('cheerio-httpcli');
var urlType = require('url');
var request = require('request');
var fs = require('fs');

var savedir = __dirname + "/img";
if(!fs.existsSync(savedir)) {
    fs.mkdirSync(savedir);
}

var url = "https://ko.wikipedia.org/wiki/" + encodeURIComponent("강아지");
var param = {};

client.fetch(url, param, function(err, $, res){
    if(err) {
        console.log('Error:', err);
        return;
    }

    var body = $.html();
    //console.log(body);
   
    // Get link
    $("a").each(function(idx) {
        var text = $(this).text();
        var href = $(this).attr('href');
        if (!href) return;
        var href2 = urlType.resolve(url, href);
        console.log(text + " : " + href);
        console.log(" >>> " + href2 + "\n");
    });

    // Download image
    $("img").each(function(idx) {
        var src = $(this).attr('src');
        src = urlType.resolve(url, src);
        console.log(src);
        var fname = urlType.parse(src).pathname;
        fname = savedir + "/" + fname.replace(/[^a-zA-X0-9\.]+/g, '_');
        request(src).pipe(fs.createWriteStream(fname));
    });
});