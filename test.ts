var http = require('http');
var fs = require('fs');

// let rawData = fs.readFileSync('./smartstore-1.json');
// let data = JSON.parse(rawData);
const fileName = './data/smartstore-1.json';
let data = require(fileName)
if(1) {
    data.status = true;
    fs.writeFile(fileName, JSON.stringify(data, null, 2), (err: any) => {
        if (err) throw err;
        console.log(JSON.stringify(data));
        console.log('writing to ' + fileName);
    });
}
console.log(data);