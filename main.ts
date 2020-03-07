import { update } from "./update";

export function jobHandler<T>(
  product: string,
  update: (fileName: string) => Promise<T>,
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
      await update(fileName);
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

for(let i = 1 ; i <= 13 ; i++) {
  jobHandler(`smartstore-${i}`, update, 3)
}
// jobHandler("smartstore-100", update, 3);
