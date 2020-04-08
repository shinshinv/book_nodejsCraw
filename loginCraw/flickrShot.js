var casper = require('casper').create();

casper.start();

//casper.viewport(1400, 800);
casper.viewport(750, 1334);

// casper.userAgent('User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36(KHTML, like Gecko) Chrome/370.0.2062.120 Safari/537.36');
casper.userAgent('User-Agent: Mozilla/5.0 (iPhone; CPU iphone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53');

var text = encodeURIComponent("말티즈");
casper.open('https://www.flickr.com/search/?text=' + text);

casper.then(function() {
    this.capture('flickr-jr.png', {
        top:0, left:0, width:1400, height:800
    });
});

casper.run();