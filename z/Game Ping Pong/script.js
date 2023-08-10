const paddle = document.getElementById("paddle");
const ball = document.getElementById("ball");
const gameContainer = document.querySelector(".game-container");

let ballX = 200;
let ballY = 150;
let ballSpeedX = 2;
let ballSpeedY = 2;
const initialBallSpeedX = 2;
const initialBallSpeedY = 2;
const speedIncrement = 0.2;
let powerUpActive = false;
let currentPowerUp = null;

const paddleSpeed = 4;
let paddleX = 150;

const scoreDisplay = document.getElementById("score");
let score = 0;

function spawnPowerUp() {
  const powerUpElement = document.createElement("div");
  powerUpElement.className = "power-up";
  powerUpElement.classList.add(currentPowerUp);
  powerUpElement.style.backgroundColor = getPowerUpColor(currentPowerUp); // Menambahkan warna power-up
  gameContainer.appendChild(powerUpElement);

  let powerUpX = Math.random() * (gameContainer.clientWidth - 20);
  let powerUpY = 0;

  function movePowerUp() {
    powerUpY += 2;
    powerUpElement.style.left = powerUpX + "px";
    powerUpElement.style.top = powerUpY + "px";

    if (powerUpY > gameContainer.clientHeight) {
      gameContainer.removeChild(powerUpElement);
      clearInterval(powerUpInterval);
      powerUpActive = false;
      currentPowerUp = null;
    }

    // Deteksi tumbukan dengan paddle
    if (
      powerUpX > paddleX &&
      powerUpX < paddleX + paddle.clientWidth &&
      powerUpY > gameContainer.clientHeight - paddle.clientHeight
    ) {
      applyPowerUp(currentPowerUp);
      gameContainer.removeChild(powerUpElement);
      clearInterval(powerUpInterval);
      powerUpActive = false;
      currentPowerUp = null;
    }
  }

  function getPowerUpColor(powerUpType) {
    if (powerUpType === "doubleBall") {
      return "blue"; // Warna untuk doubleBall
    } else if (powerUpType === "widenPaddle") {
      return "green"; // Warna untuk widenPaddle
    } else if (powerUpType === "resetPaddle") {
      return "red"; // Warna untuk resetPaddle
    }
  }

  powerUpActive = true;
  powerUpInterval = setInterval(movePowerUp, 10);
}

function applyPowerUp(powerUpType) {
  if (powerUpType === "doubleBall") {
    // Implementasi efek doubleBall
  } else if (powerUpType === "widenPaddle") {
    // Implementasi efek widenPaddle
  } else if (powerUpType === "resetPaddle") {
    // Implementasi efek resetPaddle
  }
}


function generateRandomPowerUp() {
  const powerUps = ["doubleBall", "widenPaddle", "resetPaddle"];
  const randomIndex = Math.floor(Math.random() * powerUps.length);
  return powerUps[randomIndex];
}

function updateScore() {
  score++;
  scoreDisplay.innerText = "Score: " + score;
}

function updateGameArea() {

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Batas atas dan bawah
  if (ballY + ballSpeedY > gameContainer.clientHeight - ball.clientHeight || ballY + ballSpeedY < 0) {
    ballSpeedY *= -1;
  }

  // Deteksi tumbukan dengan paddle
  if (
    ballX + ballSpeedX > paddleX &&
    ballX + ballSpeedX < paddleX + paddle.clientWidth &&
    ballY + ballSpeedY > gameContainer.clientHeight - ball.clientHeight - paddle.clientHeight &&
    ballY + ballSpeedY < gameContainer.clientHeight - ball.clientHeight - paddle.clientHeight + ballSpeedY
  ) {
    ballSpeedY *= -1;
    updateScore();
  }


  // Batas kanan dan kiri
  if (ballX + ballSpeedX > gameContainer.clientWidth - ball.clientWidth || ballX + ballSpeedX < 0) {
    ballSpeedX *= -1;
  }

  // Cek game over (ketika bola menyentuh platform pergeseran paddle)
  if (ballY + ballSpeedY > gameContainer.clientHeight - ball.clientHeight - paddle.clientHeight) {
    gameOver();
    return;
  }

  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
}

function gameOver() {
  clearInterval(gameInterval);
  const tryAgain = confirm("Game Over! Your Score: " + score + "\nTry Again?");
  if (tryAgain) {
    resetGame();
    startGame();
  } else {
    document.removeEventListener("keydown", movePaddle);
  }
}

function resetGame() {
  ballX = Math.floor(Math.random() * (gameContainer.clientWidth - ball.clientWidth));
  ballY = 50;
  ballSpeedX = 2;
  ballSpeedY = 2;
  score = 0;
  scoreDisplay.innerText = "Score: " + score;
  paddleX = 150;
  paddle.style.left = paddleX + "px";
  ballSpeedX = initialBallSpeedX;
  ballSpeedY = initialBallSpeedY;
}



function movePaddle(event) {
  const key = event.key;
  if (key === "ArrowLeft" && paddleX > 0) {
    paddleX -= paddleSpeed;
  } else if (key === "ArrowRight" && paddleX < gameContainer.clientWidth - paddle.clientWidth) {
    paddleX += paddleSpeed;
  }
  paddle.style.left = paddleX + "px";
}

document.addEventListener("keydown", movePaddle);

let gameInterval;

function startGame() {
  let powerUpInterval;
  resetGame();
  gameInterval = setInterval(updateGameArea, 10);

  powerUpInterval = setInterval(function () {
    if (!powerUpActive) {
      currentPowerUp = generateRandomPowerUp();
      spawnPowerUp();
    }
  }, 5000);
}

startGame();
