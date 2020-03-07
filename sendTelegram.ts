export function sendTelegram(url: string) {
    const axios = require("axios");
    const API_TOKEN = '1047126178:AAH1y4e3jBPXX3U2LbaXeBDhGTZKolhhXng';
    const API_URL = `https://api.telegram.org/bot${API_TOKEN}/sendMessage`;

    let params = {
        chat_id: '@tgk_mask_noti_test2',
        text: `${url}
        재입고!`
    }

    axios({
        method: 'post',
        url: API_URL,
        data: params
    })
}