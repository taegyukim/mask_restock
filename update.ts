import { check } from "./isInStock";
import {sendTelegram} from './sendTelegram';

const fs = require("fs");

export async function update(fileName: string, mall: string) {
  let data = require(fileName);

  const status = await check(data.url, mall);

  // 저장된 상태와 새롭게 체크한 상태가 다를 경우
  if (status !== data.status) {
    data.status = status;

    await fs.writeFile(fileName, JSON.stringify(data, null, 2), (err: any) => {
      if (err) throw err;
      console.log(JSON.stringify(data));
      console.log("writing to " + fileName);
    });
    console.log("file updated!");

    // 새로운 상태가 true 일 경우
    if (status) {
      console.log("in stock!");

      //여기에 텔레그램 api 넣을 예정
      sendTelegram(data.url)
    }
  }
  console.log(status);
}
