
const timer = (args) => {

  for (const arg of args) {
    const interval = Number(arg);

    if (isNaN(interval) || interval <= 0) {
      continue;
    }

    setTimeout(() => {
      process.stdout.write(`\x07 ${interval} beep!`);

    }, interval * 1000);

  }

};

timer(process.argv.slice(2));