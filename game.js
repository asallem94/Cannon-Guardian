import Cannon from './components/cannon';
import Shield from './components/shield';

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

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  document.addEventListener("keydown", guardianShield.keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  const cannons = [];

  let delay = 0
  // create cannons
  function draw() {
    ctx.clearRect(0, 0, canWidth, canHeight);
    guardianShield.drawShield();
    guardianShield.moveShield(rightPressed, leftPressed);

    if (delay === 0){
      cannons.push(new Cannon(ctx, canWidth, canHeight));
      delay = 200;
    } else {
      delay -= 1;
    }


    for (var i = 0; i < cannons.length; i++) {
      cannons[i].moveCannon(guardianShield);
      if (cannons[i].status) {
        cannons[i].drawCannon();
      }else{
        cannons[i].blockedExplosion()
      }
    }


  }

  setInterval(draw, 10);
});
