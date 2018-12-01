import Cannon from './components/cannon';
import Shield from './components/shield';
import MyScoring from './components/scoring';
import Wave from './components/waves';

document.addEventListener('DOMContentLoaded', () => {
  const canvasElement = document.getElementById('canvasEl');
  const ctx = canvasElement.getContext("2d");

  const canWidth = 800;
  const canHeight = 500;

  canvasElement.width = canWidth;
  canvasElement.height = canHeight;

  // create guardianShield
  const guardianShield = new Shield(ctx, canWidth, canHeight);

  let rightPressed;
  let leftPressed;

  function keyDownHandler(e) {
    if(e.keyCode == 39) {
      rightPressed = true;
    }
    else if(e.keyCode == 37) {
      leftPressed = true;
    }
  }

  function keyUpHandler(e) {
      if(e.keyCode == 39) {
          rightPressed = false;
      }
      else if(e.keyCode == 37) {
          leftPressed = false;
      }
  }

  function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvasElement.offsetLeft;
    if(relativeX > 0 && relativeX < canvasElement.width) {
        guardianShield.paddleX = relativeX - guardianShield.paddleWidth/2;
    }
  }

  document.addEventListener("mousemove", mouseMoveHandler, false);

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  document.addEventListener("keydown", guardianShield.keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  const cannons = [];
  let intervalDelay = 0;
  let clusterDelay = 0;
  let clusterAngle  = 0.3 * Math.random() + 0.3;

  const myScoring = new MyScoring(ctx, canWidth);
  const wave = new Wave(ctx, canWidth, canHeight, clusterDelay, clusterAngle, intervalDelay, 0);

  function draw() {
    ctx.clearRect(0, 0, canWidth, canHeight);
    guardianShield.drawShield();
    guardianShield.moveShield(rightPressed, leftPressed);

    wave.drawWave(guardianShield, myScoring);

    myScoring.drawScore();
    myScoring.drawLives();
    wave.drawWaveLabel();
  }

  setInterval(draw, 10);
});
