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
  let delay = 0;
  let clusterDelay = 0;
  let clusterAngle  = 0.3 * Math.random() + 0.3;

  function draw() {
    ctx.clearRect(0, 0, canWidth, canHeight);
    guardianShield.drawShield();
    guardianShield.moveShield(rightPressed, leftPressed);

    if (clusterDelay === 0){
      clusterAngle  = 0.3 * Math.random() + 0.325;
      clusterDelay = 100;
    } else {
      clusterDelay -= 1;
    }


    if (delay === 0){
      cannons.push(new Cannon(ctx, canWidth, canHeight, clusterAngle));
      delay = 10;
    } else {
      delay -= 1;
    }


    for (var i = cannons.length-1; i >=0 ; i--) {
      // debugger
      cannons[i].moveCannon(guardianShield);
      if (cannons[i].status === 1) {
        cannons[i].drawCannon();
      }
      if (cannons[i].status < 0 && cannons[i].status > -5 ){ //cannon to explode on shield
        cannons[i].blockedExplosion();
        cannons[i].status += 1;
      }
      if (cannons[i].status === 0){ // status === 0 , remove cannon
        cannons.splice(i, 1);
      }
    }

  }


  setInterval(draw, 10);
});
