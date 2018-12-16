Cannon Guardian is a javascript game where the Guardian must protect from any cannons passing with his powerful shield.

(https://asallem94.github.io/Cannon-Guardian/cannon_guardian)

The year is 2500. You are the guardian protecting the universe from cannons that are entering the dimension to you universe.

# Instructions:
move the your sheild left and right to prevent any cannons from passing and destoying your universe.

# Controls:
move the shield left and right by clicking the left and right arrow keys or scrolling over with your mouse.

# Rules:
* Every wave of cannons survived allows the people of your universe to strengthen the infrastructure giving you more lives for survival.

* Every cannon blocked is an additional 1 point to your score. The more points you recieve, the more love you get from the people of your universe.

## Each wave of cannons gets harder and harder, but your universe has entrusted you to save it.  Good luck !!!

![alt text](https://github.com/asallem94/Cannon-Guardian/blob/master/app/assets/videos/cg_gif.gif "gif demo")

###For developers a little inside on the wave generation:

Every ten miliseconds a the attacking wave is regenerated with an array of cannon objects
Each cannon object is rendered after looping through all the created cannons.  if a cannon falls of the bottom of the screen or collides with the shield it is removed from the array and will never be rendered again.

Below is a code snippet to demonstrate the recreation of each cannon on each frame being rendered: 

```
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
```


