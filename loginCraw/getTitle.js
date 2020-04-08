var TARGET_URL="http://jpub.tistory.com"

var casper = require('casper').create();

/*
casper.start(TARGET_URL, function(){
    this.echo(casper.getTitle());
});
*/

casper.start();

casper.open(TARGET_URL);

casper.then(function() {
    casper.capture("scrshot.png");

});

casper.run();

