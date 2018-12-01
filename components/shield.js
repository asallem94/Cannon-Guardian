class Shield{
  constructor(ctx, canWidth, canHeight){
    this.ctx = ctx;
    this.canWidth = canWidth;
    this.canHeight = canHeight;

    this.paddleHeight = 25;
    this.paddleWidth = 200;
    this.paddleX = (this.canWidth-this.paddleWidth)/2;


    this.blockingExplosion = document.getElementById('explosion2');
    // new Audio("app/assets/audio/explosion2.mp3");
    this.dieingExplosion = document.getElementById('explosion1');
    // new Audio("app/assets/audio/explosion1.mp3");
  }

  drawShield() {

    // const height3d = this.canHeight-this.paddleHeight;
    // const refFactor = ( 2 * this.paddleHeight ) * (this.canHeight/2 - this.paddleX )/this.canHeight ;
    // console.log(this.paddleX);
    //
    // this.ctx.moveTo(this.paddleX, height3d);
    // this.ctx.lineTo(this.paddleX*2, height3d - this.paddleHeight);
    // this.ctx.lineTo(this.paddleX/2 + this.paddleWidth/2 - refFactor, height3d - this.paddleHeight);
    // this.ctx.lineTo(this.paddleX + this.paddleWidth, height3d);
    // // this.ctx.lineTo(500,200);
    // this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.rect(this.paddleX, this.canHeight-this.paddleHeight, this.paddleWidth, this.paddleHeight);
    this.ctx.fillStyle = "lightgray";
    this.ctx.fill();
    this.ctx.closePath();
  }

  looseLifeAudio(){
    // this.dieingExplosion.play();
  }

  blockCannonAudio(){
    // this.blockingExplosion.play();
  }

  moveShield(rightPressed, leftPressed){
    const sensitivity = 7;

    if(rightPressed && this.paddleX < this.canWidth-this.paddleWidth) {
      this.paddleX += sensitivity;
    }
    if(leftPressed && this.paddleX > 0) {
      this.paddleX -= sensitivity;
    }
  }
}

export default Shield;
