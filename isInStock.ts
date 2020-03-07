const axios = require("axios");
const cheerio = require("cheerio");
// const v = require("voca");

export async function check(url: string, mall: string) {
  let availability: boolean;

  let result = await axios
    .get(url)
    .then((res: any) => {
      const $ = cheerio.load(res.data);
      switch (mall) {
        case "smartstore": {
          const $target = $("div.prd_type3 div.btn_order span.buy").children(
            "a"
          );

          availability = $target.attr("class").includes("checkoutPurchase()");
        }
      }

      return availability;
    })
    .catch((err: any) => {
      console.error(err);
    });

  return result;
}
