const axios = require("axios");
const cheerio = require("cheerio");
// const v = require("voca");

export async function check(url: string) {
    let availability: boolean;

    let result = await axios.get(url)
        .then((res: any) => {
            const $ = cheerio.load(res.data);
            const $target = $('div.prd_type3 div.btn_order span.buy').children('a');

            availability = $target.attr('class').includes('checkoutPurchase()');

            return availability;
        })
        .catch((err: any) => {
            console.error(err);
        });

    console.log(result)
}