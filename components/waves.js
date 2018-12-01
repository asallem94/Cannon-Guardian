import Cannon from './cannon';

class Waves{
  constructor(ctx, canWidth, canHeight, clusterDelay, clusterAngle, intervalDelay = 0, waveDelay = 0){
    this.ctx = ctx;
    this.canWidth = canWidth;
    this.canHeight = canHeight;
    this.clusterDelay = clusterDelay;
    this.clusterAngle = clusterAngle;
    this.intervalDelay = intervalDelay;
    this.waveDelay = waveDelay;
    this.wave = 0;
    this.cannons = [];

    this.framesPerCannon = 25; //????
    this.cannonsPerCluster = 1;
    this.clustersPerWave = 2;
    this.delayFramesBetweenWaves = 0;
    this.delayFramesBetweenClusters= 0;
    this.delayRatio = 20;
  }

  incrementClusterDelay(resetClusterDelay){
    if (this.clusterDelay === 0){
      this.clusterAngle  = 0.3 * Math.random() + 0.325;
      this.clusterDelay = resetClusterDelay;
      this.delayFramesBetweenClusters = this.delayRatio - Math.floor(this.wave/2);
    } else {
      this.clusterDelay -= 1;
    }
  }
  incrementIntervalDelay(resetIntervalDelay){
    if (this.intervalDelay === 0){
      this.cannons.push(new Cannon(this.ctx, this.canWidth, this.canHeight, this.clusterAngle));
      this.intervalDelay = resetIntervalDelay;
    } else {
      this.intervalDelay -= 1;
    }
  }

  incrementWaveDelay(resetWave, myScoring){
    if (this.waveDelay === 0){

      this.waveDelay = resetWave;
      this.wave += 1;
      myScoring.lives ++;
      this.delayFramesBetweenWaves = this.delayRatio * 10;

      if (this.wave % 2 === 1){
        this.framesPerCannon = Math.floor(this.framesPerCannon * 0.9);
      }
      if (this.wave % 2 === 1){
        this.cannonsPerCluster += 1;
      }
      if (this.wave % 3 === 1){
        this.clustersPerWave += 1;
      }

      console.log("");
    } else {
      this.waveDelay -= 1;
    }
  }

  drawWave(guardianShield, myScoring){
    if (this.delayFramesBetweenWaves === 0){
      if ( this.delayFramesBetweenClusters === 0){
        this.incrementIntervalDelay(this.framesPerCannon); //create new cannon
        this.incrementClusterDelay(this.cannonsPerCluster * this.framesPerCannon ); //cahange cannon cluster
      } else {
        this.delayFramesBetweenClusters -= 1;
      }
      this.incrementWaveDelay(this.clustersPerWave * this.cannonsPerCluster * this.framesPerCannon + this.delayFramesBetweenWaves, myScoring );
    } else {
      this.delayFramesBetweenWaves -= 1;
    }

    // draw all cannons in the frame
    this.drawAttackingWave(guardianShield, myScoring);
  }

  drawWaveLabel(){
    this.ctx.font = "32px Arial";
    this.ctx.fillStyle = "#white";
    this.ctx.fillText("Waves: "+this.wave, this.canWidth/2-75, 40);
  }

  drawAttackingWave(guardianShield, myScoring) {
    for (let i = this.cannons.length-1; i >=0 ; i--) {
      this.cannons[i].moveCannon(guardianShield, myScoring);
      if (this.cannons[i].status === 1) {
        this.cannons[i].drawCannon();
      }
      if (this.cannons[i].status < 0 && this.cannons[i].status > -5 ){ //cannon to explode on shield
        this.cannons[i].blockedExplosion();
        this.cannons[i].status += 1;
      }
      if (this.cannons[i].status === 0){ // status === 0 , remove cannon
        this.cannons.splice(i, 1);
      }
    }
  }
}


export default Waves;
