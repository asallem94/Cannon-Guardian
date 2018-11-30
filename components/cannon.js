class Cannon {
  constructor( ctx, canWidth, canHeight){
    const colors = ["red", "green", "orange", "brown", "black", "blue", "purple","rgb(0,0,255)" , "white" , "gray"]
    this.color = colors[Math.floor(Math.random()*10)]
    this.canWidth = canWidth;
    this.canHeight = canHeight;
    this.ctx = ctx;
    this.x0 = canWidth/2;
    this.y0 = canHeight * 2/3;

    this.g = 1;
    const v0 = -35;

    this.cannonRadius = 1;
    this.dr = 0.05;

    this.status = 1;

    const angle = (Math.random()/2 +1/4)* Math.PI ;

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
    this.ctx.fillStyle = this.color ;
    this.ctx.fill();
    this.ctx.closePath();
  }

  blockedExplosion(){
    // debugger
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y-5, this.cannonRadius+5, 0, Math.PI*2);
    this.ctx.fillStyle = "red";
    this.ctx.lineWidth = 5;
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y-3, this.cannonRadius-3, 0, Math.PI*2);
    this.ctx.fillStyle = "yellow";
    this.ctx.lineWidth = 5;
    this.ctx.fill();
    this.ctx.closePath();
  }

  moveCannon(guardianShield){
    this.t += this.dt;

    this.cannonRadius += this.dr;

    this.x = this.vx0 * this.t + this.x0;
    this.y = (this.g * Math.pow(this.t, 2)) + (this.vy0 * this.t) + this.y0;

    // bounce off walls
    if(this.x > this.canWidth - this.cannonRadius || this.x < this.cannonRadius) {
      this.x0 = (this.vx0 * this.t) + this.x;
      this.vx0 = -(this.vx0) ;
    }

    // debugger

    if(this.y >= this.canHeight - guardianShield.paddleHeight - this.cannonRadius && this.y <= this.canHeight) {
      if(this.x > guardianShield.paddleX && this.x < guardianShield.paddleX + guardianShield.paddleWidth) {
        // this.blockedExplosion();
        this.status = -3;
      }
    }
    if(this.y > this.canHeight + 2 * this.cannonRadius) {
      this.status = 0;
      alert("GAME OVER");
      document.location.reload();
    }
  }
}

export default Cannon;
