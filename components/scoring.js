class Scoring {
  constructor(ctx, canWidth){
    this.score = 0;
    this.ctx = ctx;
    this.canWidth = canWidth;
    this.lives = 10;
  }
  drawScore() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("Score: "+this.score, 40, 20);
  }
  drawLives() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "#white";
    this.ctx.fillText("Lives: "+this.lives, this.canWidth-100, 20);
  }
}

export default Scoring;
