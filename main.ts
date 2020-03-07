var http = require("http");
var fs = require("fs");
// var app = http.createServer(function(request: any,response: any){
//     var url = request.url;
//     if(request.url == '/'){
//       url = '/index.html';
//     }
//     if(request.url == '/favicon.ico'){
//       return response.writeHead(404);
//     }
//     response.writeHead(200);
//     response.end(fs.readFileSync(__dirname + url));

// });
// app.listen(3000);

import { update } from "./update";

export function jobHandler<T>(
  product: string,
  update: (fileName: string, mall: string) => Promise<T>,
  mall: string,
  timeInterval: number
) {
  const fileName = `./data/${product}.json`;

  let isRunning = false;

  async function job() {
    if (isRunning) {
      return;
    }

    isRunning = true;

    console.log(`[${product}] [${new Date().toISOString()}] Running Job`);

    try {
      await update(fileName, mall);
    } catch (err) {
      console.log(`Error!! [${product}] [${new Date().toISOString()}]`);
      console.error(err);
    } finally {
      isRunning = false;
    }
  }
  job();

  setInterval(job, timeInterval * 1000);
}

jobHandler("smartstore-100", update, "smartstore", 3);
