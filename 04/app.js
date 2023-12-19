function runTimer() {
  let iteration = 0;

  const intervalId = setInterval(() => {
    showTime();
    iteration++;

    if (iteration === 5) {
      clearInterval(intervalId);
    }
  }, 5000);
}

function showTime() {
  const time = new Date().toLocaleTimeString();
  console.log(time);
}
runTimer();
