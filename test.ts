// var http = require('http');
// var fs = require('fs');

// // let rawData = fs.readFileSync('./smartstore-1.json');
// // let data = JSON.parse(rawData);
// const fileName = './data/smartstore-1.json';
// let data = require(fileName)
// if(1) {
//     data.status = true;
//     fs.writeFile(fileName, JSON.stringify(data, null, 2), (err: any) => {
//         if (err) throw err;
//         console.log(JSON.stringify(data));
//         console.log('writing to ' + fileName);
//     });
// }
// console.log(data);
const axios = require("axios");
const API_TOKEN = '1047126178:AAH1y4e3jBPXX3U2LbaXeBDhGTZKolhhXng';
const API_URL = `https://api.telegram.org/bot${API_TOKEN}/sendMessage`;

let params = {
    chat_id: '@tgk_mask_noti_test2',
    text: 'hahaha'
}

axios({
    method: 'post',
    url: API_URL,
    data: params
})