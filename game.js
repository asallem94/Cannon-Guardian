import paddleController from './paddle_controller';
import Cannon from './cannon';

document.addEventListener('DOMContentLoaded', () => {
  const canvasElement = document.getElementById('canvasEl');
  const ctx = canvasElement.getContext("2d");

  const canWidth = 800;
  const canHeight = 500;

  canvasElement.width = canWidth;
  canvasElement.height = canHeight;

  const firstCannon = new Cannon(ctx, canWidth, canHeight);

  function draw() {
    ctx.clearRect(0, 0, canWidth, canHeight);
    firstCannon.drawCannon();
    firstCannon.moveBall();
  }

  setInterval(draw, 10);
});
