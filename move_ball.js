const moveBall =  ( ballId, t, vx0, vy0, g, y0 ) => {

  t += dt;
  // x = v0*t + x0
  x = vx0*t + x0;
  // y = gt^2 + v0t + y0
  y = (g * t * t) + (vy0 * t) + y0;


  if(x > canWidth - cannonRadius || x < cannonRadius) {
    x0 = (vx0 * t) + x;
    vx0 = -(vx0) ;
  }

  // console.log(`y axis: ${y}`);
  if(y > canHeight - cannonRadius || y < cannonRadius) {
    y0 = y;
    vy0 = -(2 * g * t);
  }
};
