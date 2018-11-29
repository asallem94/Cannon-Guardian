document.addEventListener('DOMContentLoaded', () => {
  const canvasElement = document.getElementById('canvasEl');
  const ctx = canvasElement.getContext("2d");

  const canWidth = 800;
  canvasElement.width = canWidth;
  const canHeight = 500;
  canvasElement.height = canHeight;
  //

  cannonRadius = 10;

  let x = canWidth/2;
  let y = canHeight-30;

  let dx = 2;
  let dy = -2;


  function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, cannonRadius, 0, Math.PI*2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
  }

  function draw() {
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      drawBall();
      x += dx;
      y += dy;
      if(x + dx > canvasElement.width - cannonRadius || x + dx < cannonRadius) {
        dx = -dx;
      }
      if(y + dy > canvasElement.height - cannonRadius || y + dy < cannonRadius) {
        dy = -dy;
      }
  }

  let paddleHeight = 10;
  let paddleWidth = 75;
  let paddleX = (canvas.width-paddleWidth)/2;

  function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  setInterval(draw, 10);
});
