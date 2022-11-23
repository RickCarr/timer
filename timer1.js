// const beepTime = process.argv.slice(2);
const timer = (args) => {
  //initiating funciton with arg var

  //continue if value is greater than 0 (nothing if not)
  for (const arg of args) {
    const interval = Number(arg);

    if (isNaN(interval) || interval <= 0) {
      continue;
    }

    console.log(`setting timer for ${interval}`);

    setTimeout(() => {
      process.stdout.write(`\x07 beep!`);
      //beep sound + text to visually confirm
    }, interval * 1000);
    //timer is 1000ms* arg input

  }

};

timer(process.argv.slice(2));  //timer to take in arguments
