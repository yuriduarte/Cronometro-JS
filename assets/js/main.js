function Chronometer() {
  const getTimeFromSeconds = (sec) => {
    const date = new Date(sec * 1000);
    return date.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const clock = document.querySelector('.clock');
  const start = document.querySelector('.start');
  const pause = document.querySelector('.pause');
  const reset = document.querySelector('.reset');
  let seconds = 0;
  let timer;

  const startTimer = () => {
    timer = setInterval(function () {
      seconds++;
      clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
  }

  start.addEventListener('click', function (event) {
    clock.classList.remove('paused');
    clearInterval(timer);
    startTimer();
  });

  pause.addEventListener('click', function (event) {
    clearInterval(timer);
    clock.classList.add('paused');
  });

  reset.addEventListener('click', function (event) {
    clearInterval(timer);
    seconds = 0;
    clock.innerHTML = '00:00:00';
  });
}

Chronometer();