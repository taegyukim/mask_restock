export function sendTelegram(url: string) {
    const axios = require("axios");
    const API_TOKEN = '1108289946:AAF-DfrR_W3l6mVYBPEdlt4dZ2W9-Wbpi-A';
    const API_URL = `https://api.telegram.org/bot${API_TOKEN}/sendMessage`;

    let params = {
        chat_id: '@mask_restock',
        text: `${url}
        재입고!`
    }

    axios({
        method: 'post',
        url: API_URL,
        data: params
    }).then(() => {
        console.log('message sent')
    })
}