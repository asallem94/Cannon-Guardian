const drawCannon = (x, y, cannonRadius, ctx) => {
  // debugger
    ctx.beginPath();
    ctx.arc(x, y, cannonRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
};

export default drawCannon;
