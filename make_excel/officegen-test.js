var fs = require('fs');
var officegen = require('officegen');
var xlsx = officegen('xlsx');

var sheet = xlsx.makeNewSheet();
sheet.name = "test";

sheet.data[0] = ["ProductName", "Price", "Feature"];
sheet.data[1] = ["Apple", 200] ;
sheet.data[2] = ["Samsung", 190] ;
sheet.data[3] = ["Google", 210] ;

sheet.setCell('C2', "USA")
sheet.setCell('C3', "KOREA")

var strm = fs.createWriteStream('test.xlsx');
xlsx.generate(strm);
