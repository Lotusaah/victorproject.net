// start game code 
let gameLogic = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let playerHTML = '';

let playerLogic;


document.querySelector('.white-button').addEventListener('click', () => {
  playerHTML = `<img class="image" src="Untitled-1.png">`;
  playerLogic = 1;
});

document.querySelector('.black-button').addEventListener('click', () => {
  playerHTML = `<img class="image" src="Untitled-2.png">`;
  playerLogic = 2;
});

document.querySelector('.reset-button').addEventListener('click', () => {
  reset();
  console.log(gameLogic);
});

document.querySelector('.grid-item1').addEventListener('click', () => {
  document.querySelector('.grid-item1').innerHTML = playerHTML;
  gameLogic[0] = playerLogic;
  console.log(gameLogic);
  setTimeout(function() {
    testTheLogic();
  }, 500);
});

document.querySelector('.grid-item2').addEventListener('click', () => {
  document.querySelector('.grid-item2').innerHTML = playerHTML;
  gameLogic[1] = playerLogic;
  console.log(gameLogic);
  setTimeout(function() {
    testTheLogic();
  }, 500);
});

document.querySelector('.grid-item3').addEventListener('click', () => {
  document.querySelector('.grid-item3').innerHTML = playerHTML;
  gameLogic[2] = playerLogic;
  console.log(gameLogic);
  setTimeout(function() {
    testTheLogic();
  }, 500);
});

document.querySelector('.grid-item4').addEventListener('click', () => {
  document.querySelector('.grid-item4').innerHTML = playerHTML;
  gameLogic[3] = playerLogic;
  console.log(gameLogic);
  setTimeout(function() {
    testTheLogic();
  }, 500);
});

document.querySelector('.grid-item5').addEventListener('click', () => {
  document.querySelector('.grid-item5').innerHTML = playerHTML;
  gameLogic[4] = playerLogic;
  console.log(gameLogic);
  setTimeout(function() {
    testTheLogic();
  }, 500);
});

document.querySelector('.grid-item6').addEventListener('click', () => {
  document.querySelector('.grid-item6').innerHTML = playerHTML;
  gameLogic[5] = playerLogic;
  console.log(gameLogic);
  setTimeout(function() {
    testTheLogic();
  }, 500);
});

document.querySelector('.grid-item7').addEventListener('click', () => {
  document.querySelector('.grid-item7').innerHTML = playerHTML;
  gameLogic[6] = playerLogic;
  console.log(gameLogic);
  setTimeout(function() {
    testTheLogic();
  }, 500);
});

document.querySelector('.grid-item8').addEventListener('click', () => {
  document.querySelector('.grid-item8').innerHTML = playerHTML;
  gameLogic[7] = playerLogic;
  console.log(gameLogic);
  setTimeout(function() {
    testTheLogic();
  }, 500);
});

document.querySelector('.grid-item9').addEventListener('click', () => {
  document.querySelector('.grid-item9').innerHTML = playerHTML;
  gameLogic[8] = playerLogic;
  console.log(gameLogic);
  setTimeout(function() {
    testTheLogic();
  }, 500);
});

function reset() {
  for (let i =1; i <= 9; i++) {
    document.querySelector(`.grid-item${i}`).innerHTML = '';
  }
  for (let i = 0; i <= 8; i++) {
    gameLogic[i] = 0;
  }
}
 
function testTheLogic() {
  if ((gameLogic[0] === 1 && gameLogic[1] === 1 && gameLogic[2] === 1) || (gameLogic[3] === 1 && gameLogic[4] === 1 && gameLogic[5] === 1) || (gameLogic[6] === 1 && gameLogic[7] === 1 && gameLogic[8] === 1) || (gameLogic[0] === 1 && gameLogic[3] === 1 && gameLogic[6] === 1) || (gameLogic[1] === 1 && gameLogic[4] === 1 && gameLogic[7] === 1) || (gameLogic[2] === 1 && gameLogic[5] === 1 && gameLogic[8] === 1) || (gameLogic[0] === 1 && gameLogic[4] === 1 && gameLogic[8] === 1) || (gameLogic[2] === 1 && gameLogic[4] === 1 && gameLogic[6] === 1)) {
    alert('White Player you Win!');
    reset();
  } else if ((gameLogic[0] === 2 && gameLogic[1] === 2 && gameLogic[2] === 2) || (gameLogic[3] === 2 && gameLogic[4] === 2 && gameLogic[5] === 2) || (gameLogic[6] === 2 && gameLogic[7] === 2 && gameLogic[8] === 2) || (gameLogic[0] === 2 && gameLogic[3] === 2 && gameLogic[6] === 2) || (gameLogic[1] === 2 && gameLogic[4] === 2 && gameLogic[7] === 2) || (gameLogic[2] === 2 && gameLogic[5] === 2 && gameLogic[8] === 2) || (gameLogic[0] === 2 && gameLogic[4] === 2 && gameLogic[8] === 2) || (gameLogic[2] === 2 && gameLogic[4] === 2 && gameLogic[6] === 2)) {
    alert('Black Player you Win!');
    reset();
  } else if ((gameLogic[0] === 1 || gameLogic[0] === 2) && (gameLogic[1] === 1 || gameLogic[1] === 2) && (gameLogic[2] === 1 || gameLogic[2] === 2) && (gameLogic[3] === 1 || gameLogic[3] === 2) && (gameLogic[4] === 1 || gameLogic[4] === 2) && (gameLogic[5] === 1 || gameLogic[5] === 2) && (gameLogic[6] === 1 || gameLogic[6] === 2) && (gameLogic[7] === 1 || gameLogic[7] === 2) && (gameLogic[8] === 1 || gameLogic[8] === 2)) {
    alert('It is a tie.');
    reset();
  };  
}
// end game code

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