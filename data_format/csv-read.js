var fs = require('fs');
var CSV = require('comma-separated-values');
var jschardet = require('jschardet') ;
var Iconv = require('iconv').Iconv;


var buf = fs.readFileSync("test.txt");
var det = jschardet.detect(buf)
console.log('# det : ' + JSON.stringify(det));

//var iconv = new Iconv('EUC-KR', 'UTF-8');
var iconv = new Iconv(det.encoding, 'utf-8');

//var buf2 = iconv.convert(buf)
//var txt = buf2.toString('utf-8');
var txt = iconv.convert(buf).toString('utf-8')

var csv = new CSV(txt, {header:false});
var records = csv.parse();
records.shift();
for (var i=0; i<records.length; i++) {
    var fs = records[i];
    console.log('# line : ' + fs);
}