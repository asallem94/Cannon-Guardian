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
  const toDelete = [];

  let delay = 0;
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


    for (var i = cannons.length-1; i >=0 ; i--) {
      // debugger
      cannons[i].moveCannon(guardianShield);
      if (cannons[i].status === 1) {
        cannons[i].drawCannon();
      }
      if (cannons[i].status < 0 && cannons[i].status => -5 ){ //cannon to explode on shield
        cannons[i].blockedExplosion();
        cannons[i].status += 1;
      }
      if (cannons[i].status === 0){ // status === 0 , remove cannon
        toDelete.push(i);
      }
    }
    for (var i = toDelete.length - 1; i >= 0; i--) {
      toDelete.splice(i, 1);
      cannons.splice(toDelete[i], 1);
    }
  }


  setInterval(draw, 10);
});
