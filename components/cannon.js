class Cannon {
  constructor( ctx, canWidth, canHeight){
    this.canWidth = canWidth;
    this.canHeight = canHeight;
    this.ctx = ctx;
    this.x0 = canWidth/2;
    this.y0 = canHeight-30;

    this.g = 1;
    const v0 = -40;

    this.cannonRadius = 10;

    const angle = Math.PI/3;

    this.vy0 = v0 * Math.sin (angle);
    this.vx0 = v0 * Math.cos (angle);

    this.t = 0;
    this.dt = 0.1;

    this.x = this.vx0 * this.t + this.x0;
    this.y = (this.g * Math.pow(this.t, 2)) + (this.vy0 * this.t) + this.y0;

  }

  drawCannon(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.cannonRadius, 0, Math.PI*2);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }

  moveBall(){
    this.t += this.dt;

    this.x = this.vx0 * this.t + this.x0;
    this.y = (this.g * Math.pow(this.t, 2)) + (this.vy0 * this.t) + this.y0;


    if(this.x > this.canWidth - this.cannonRadius || this.x < this.cannonRadius) {
      this.x0 = (this.vx0 * this.t) + this.x;
      this.vx0 = -(this.vx0) ;
    }

    // console.log(`y axis: ${y}`);
    if(this.y < this.cannonRadius) {
      this.y0 = this.y;
      this.vy0 = -(2 * this.g * this.t);
    } else if(y + dy > canvas.height-ballRadius) {
      alert("GAME OVER");
      document.location.reload();
    }
  }
}

export default Cannon
