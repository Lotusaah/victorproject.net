// begin stopwatch code
let miliseconds;
let seconds;
let minutes; 
let timerInterval;

document.querySelector('.js-start-button').addEventListener('click', () => {
  runTimer();
});

document.querySelector('.js-stop-button').addEventListener('click', () => {
  clearInterval(timerInterval);
});

document.querySelector('.js-reset-button').addEventListener('click', () => {
  miliseconds = 0;
  seconds = 0;
  minutes = 0; 
  const milisecondsHTML = document.querySelector('.js-miliseconds');
  const secondsHTML = document.querySelector('.js-seconds');
  const minutesHTML = document.querySelector('.js-minutes');
  minutesHTML.innerHTML = `${minutes}`.padStart(2, '0');
  secondsHTML.innerHTML = `${seconds}`.padStart(2, '0');
  milisecondsHTML.innerHTML = `${miliseconds}`.padStart(2, '0');
});

function runTimer() {
  let miliseconds = 0;
  let seconds = 0;
  let minutes = 0; 
  const milisecondsHTML = document.querySelector('.js-miliseconds');
  const secondsHTML = document.querySelector('.js-seconds');
  const minutesHTML = document.querySelector('.js-minutes');
  timerInterval = setInterval(() => {
    miliseconds++;
    milisecondsHTML.innerHTML = `${miliseconds}`.padStart(2, '0');
    if (miliseconds === 99) {
      seconds++;
      miliseconds = 0;
      secondsHTML.innerHTML = `${seconds}`.padStart(2, '0');
      milisecondsHTML.innerHTML = `${miliseconds}`.padStart(2, '0');
      if (seconds === 60) {
        minutes++;
        seconds = 0;
        minutesHTML.innerHTML = `${minutes}`.padStart(2, '0');
        secondsHTML.innerHTML = `${seconds}`.padStart(2, '0');
        milisecondsHTML.innerHTML = `${miliseconds}`.padStart(2, '0');
        
      }
      
    }
  }, 10);

  return timerInterval;
}
// end stopwatch code

//code for nav bar
//open side bar
document.querySelector('.js-menu').addEventListener('click', () => {
  showSideBar();
})
function showSideBar() {
  const sidebar = document.querySelector('.sideBar');
  sidebar.style.display = 'flex';
}
//close side bar
document.querySelector('.js-close').addEventListener('click', () => {
  hideSideBar();
})
function hideSideBar() {
  const sidebar = document.querySelector('.sideBar');
  sidebar.style.display = 'none';
}


