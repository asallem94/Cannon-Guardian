!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var s=class{constructor(t,e,i,s,n){this.color=["red","green","orange","brown","black","blue","purple","rgb(0,0,255)","lightblue","gray"][Math.floor(10*Math.random())],this.canWidth=e,this.canHeight=i,this.ctx=t,this.x0=e/2,this.y0=1*i/2,this.openedModal=n,this.g=1,this.cannonRadius=1,this.dr=.05,this.status=1;const h=(Math.random()/20+s)*Math.PI;this.vy0=-27*Math.sin(h),this.vx0=-27*Math.cos(h),this.t=0,this.dt=.1,this.x=this.vx0*this.t+this.x0,this.y=this.g*Math.pow(this.t,2)+this.vy0*this.t+this.y0}drawCannon(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.cannonRadius,0,2*Math.PI),this.ctx.fillStyle="white",this.ctx.strokeStyle=this.color,this.ctx.lineWidth=.1*this.cannonRadius,this.ctx.fill(),this.ctx.stroke()}blockedExplosion(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y-5,this.cannonRadius+5,0,2*Math.PI),this.ctx.fillStyle="red",this.ctx.lineWidth=5,this.ctx.fill(),this.ctx.closePath(),this.ctx.beginPath(),this.ctx.arc(this.x,this.y-3,.8*this.cannonRadius,0,2*Math.PI),this.ctx.fillStyle="yellow",this.ctx.lineWidth=5,this.ctx.fill(),this.ctx.closePath(),this.ctx.beginPath(),this.ctx.arc(this.x+5*Math.random(),this.y+4*Math.random(),.2*this.cannonRadius,0,2*Math.PI),this.ctx.fillStyle="red",this.ctx.lineWidth=2,this.ctx.fill(),this.ctx.closePath()}checkForExplosion(t,e){this.y>=this.canHeight-t.paddleHeight-this.cannonRadius&&this.y<=this.canHeight&&this.x>t.paddleX&&this.x<t.paddleX+t.paddleWidth&&(this.openedModal||t.blockCannonAudio(),this.status=-2,e.score++)}handleLose(t,e){this.y>this.canHeight+2*this.cannonRadius&&(this.status=0,e.lives--,this.openedModal||t.looseLife(),0===e.lives&&e.resetGame(!0,e.wave,e.score))}moveCannon(t,e){if(this.status<0)return null;this.t+=this.dt,this.cannonRadius+=this.dr,this.x=this.vx0*this.t+this.x0,this.y=this.g*Math.pow(this.t,2)+this.vy0*this.t+this.y0,(this.x>this.canWidth-this.cannonRadius||this.x<this.cannonRadius)&&(this.x0=this.vx0*this.t+this.x,this.vx0=-this.vx0),this.checkForExplosion(t,e),this.handleLose(t,e)}};var n=class{constructor(t,e,i,s){this.ctx=t,this.canvasElement=e,this.canWidth=i,this.canHeight=s,this.paddleHeight=25,this.paddleWidth=200,this.paddleX=(this.canWidth-this.paddleWidth)/2,this.flashed=-1,this.blockingExplosion=document.getElementById("explosion2"),this.blockingExplosion.volume=.1,this.dieingExplosion=document.getElementById("explosion1")}drawShield(){this.ctx.beginPath(),this.ctx.rect(this.paddleX,this.canHeight-this.paddleHeight,this.paddleWidth,this.paddleHeight),this.ctx.fillStyle="lightgray",this.ctx.fill(),this.ctx.closePath()}looseLife(){this.dieingExplosion.currentTime=0,this.dieingExplosion.play(),this.canvasElement.classList.toggle("background-flash"),this.flashed=2}blockCannonAudio(){this.blockingExplosion.currentTime=0,this.blockingExplosion.play()}moveShield(t,e){t&&this.paddleX<this.canWidth-this.paddleWidth&&(this.paddleX+=7),e&&this.paddleX>0&&(this.paddleX-=7)}};var h=class{constructor(t,e,i,s,n=0,h=0){this.score=0,this.wave=0,this.ctx=t,this.canWidth=e,this.canHeight=i,this.resetGame=s,this.lastWave=n,this.lastScore=h,this.lives=10}drawScore(){this.ctx.font="1.5em Arial",this.ctx.fillStyle="white",this.ctx.fillText("Score: "+this.score,80,20)}drawLives(){this.ctx.font="1.5em Arial",this.ctx.fillStyle="#white",this.ctx.fillText("Lives: "+this.lives,this.canWidth-80,20)}displayModal(){const t=this.canHeight/3;this.ctx.lineWidth=3,this.ctx.font="2.5em Arial",this.ctx.strokeStyle="black",this.ctx.strokeText("Click to Start",this.canWidth/2,80+t),this.ctx.fillStyle="#white",this.ctx.textAlign="center",this.ctx.fillText("Click to Start",this.canWidth/2,80+t),this.ctx.font="1.5em Arial",this.ctx.strokeStyle="black",this.ctx.strokeText("Wave: "+this.lastWave,this.canWidth/2,120+t),this.ctx.fillStyle="#white",this.ctx.fillText("Wave: "+this.lastWave,this.canWidth/2,120+t),this.ctx.font="1.5em Arial",this.ctx.strokeStyle="black",this.ctx.strokeText("Score: "+this.lastScore,this.canWidth/2,160+t),this.ctx.fillStyle="white",this.ctx.fillText("Score: "+this.lastScore,this.canWidth/2,160+t)}};var a=class{constructor(t,e,i,s,n){this.ctx=t,this.canWidth=e,this.canHeight=i,this.clusterDelay=0,this.clusterAngle=n,this.intervalDelay=0,this.waveDelay=0,this.wave=0,this.cannons=[],this.framesPerCannon=s?0:25,this.cannonsPerCluster=1,this.clustersPerWave=1,this.delayFramesBetweenClusters=0,this.delayRatio=20,this.openedModal=s,this.currentWave=!0}incrementIntervalDelay(t){0===this.intervalDelay?(this.cannons.push(new s(this.ctx,this.canWidth,this.canHeight,this.clusterAngle,this.openedModal)),this.intervalDelay=t):this.intervalDelay-=1}incrementClusterDelay(t){0===this.clusterDelay?(this.clusterAngle=.3*Math.random()+.325,this.clusterDelay=t,this.delayFramesBetweenClusters=this.delayRatio-Math.floor(this.wave/2)):this.clusterDelay-=1}incrementWaveDelay(t,e){0===this.waveDelay?(this.waveDelay=t,this.wave+=1,e.lives++,e.wave=this.wave,this.currentWave=!1,this.wave%2==1&&(this.framesPerCannon=Math.floor(.9*this.framesPerCannon)),this.wave%2==1&&(this.cannonsPerCluster+=1),this.wave%3==1&&(this.clustersPerWave+=1)):this.waveDelay-=1}drawWave(t,e){this.incrementIntervalDelay(this.framesPerCannon),this.incrementClusterDelay(this.cannonsPerCluster*this.framesPerCannon),this.incrementWaveDelay(this.clustersPerWave*this.cannonsPerCluster*this.framesPerCannon,e),this.currentWave=!0,this.drawAttackingWave(t,e)}drawWaveLabel(){this.ctx.font="2.5em Arial",this.ctx.fillStyle="#white",this.ctx.fillText("Wave: "+this.wave,this.canWidth/2,80)}drawAttackingWave(t,e){for(let i=this.cannons.length-1;i>=0;i--)this.cannons[i].moveCannon(t,e),1===this.cannons[i].status&&this.cannons[i].drawCannon(),this.cannons[i].status<0&&this.cannons[i].status>-5&&(this.cannons[i].blockedExplosion(),this.cannons[i].status+=1),0===this.cannons[i].status&&this.cannons.splice(i,1)}};var l=class{constructor(t,e){this.canvasElement=t,this.rightPressed=!1,this.leftPressed=!1,this.guardianShield=e,document.getElementById("volume").onclick=this.handleSound,document.addEventListener("mousemove",this.mouseMoveHandler.bind(this),!1),document.addEventListener("keydown",this.keyDownHandler.bind(this),!1),document.addEventListener("keyup",this.keyUpHandler.bind(this),!1)}handleSound(){document.getElementById("nosound").classList.toggle("muted"),document.getElementById("sound").classList.toggle("muted"),document.getElementById("explosion1").muted=!document.getElementById("explosion1").muted,document.getElementById("explosion2").muted=!document.getElementById("explosion2").muted,document.getElementById("background-song").muted=!document.getElementById("background-song").muted,document.getElementById("background-song").play()}keyDownHandler(t){t.preventDefault(),39==t.keyCode?this.rightPressed=!0:37==t.keyCode&&(this.leftPressed=!0)}keyUpHandler(t){t.preventDefault(),39==t.keyCode?this.rightPressed=!1:37==t.keyCode&&(this.leftPressed=!1)}mouseMoveHandler(t){let e=t.clientX-this.canvasElement.offsetLeft;e>0&&e<this.canvasElement.width&&(this.guardianShield.paddleX=e-this.guardianShield.paddleWidth/2)}};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("canvasEl"),e=t.getContext("2d"),i=.6*document.getElementById("wallpaper").width,s=.7*document.getElementById("wallpaper").height;t.width=i,t.height=s;const o=new n(e,t,i,s),c=new l(t,o);let d=.3*Math.random()+.3,r=new h(e,i,s),u=!0,x=new a(e,i,s,u,d);const y=(t,n,l)=>{x=new a(e,i,s,u=t,d),r=new h(e,i,s,y,n,l)};t.onclick=(()=>{y(!1)}),setInterval(function(){o.flashed>-1&&(o.flashed--,-1===o.flashed&&t.classList.remove("background-flash")),e.clearRect(0,0,i,s),o.drawShield(),o.moveShield(c.rightPressed,c.leftPressed),x.drawWave(o,r)},10)})}]);
//# sourceMappingURL=bundle.js.map