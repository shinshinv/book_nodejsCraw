var casper = require('casper').create({verbose: true, loglevel: "debug"});

var url = "http://shinshinv-dev.tistory.com/admin/center/";
var id = "";
var password = "";

casper.start();

casper.open(url);

casper.then(function() {
    casper.fill("#authForm", {
        loginId: id,
        password: password
    }, true);
});

casper.then(function() {
    var getComment = function() {
        return document.querySelector("#blogInfo > ul > li:nth-child(3) > span.day").innerText;
    };
    console.log("New reply : " + this.evaluate(getComment));
});

casper.run();
