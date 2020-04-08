var client = require('cheerio-httpcli');
var urlType = require('url');

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

    // Get image
    $("img").each(function(idx) {
        var src = $(this).attr('src');
        src = urlType.resolve(url, src);
        console.log(src);
    })
});