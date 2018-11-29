
import drawCannon from './draw_cannon';

const makeBall = (canWidth, canHeight, ctx) => {

  const cannonRadius = 10;

  let angle = Math.PI/3;

  let x;
  let y;
  let x0 = canWidth/2;
  let y0 = canHeight-30;
  const g = 1;
  const v0 = -40;

  let vy0 = v0 * Math.sin (angle);
  let vx0 = v0 * Math.cos (angle);

  let t = 0;
  x = vx0*t + x0;
  y = (g * t * t) + (vy0 * t) + y0;
  drawCannon(x, y, cannonRadius, ctx);
  debugger
};

export default makeBall;
