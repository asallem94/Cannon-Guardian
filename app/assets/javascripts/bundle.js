/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/cannon.js":
/*!******************************!*\
  !*** ./components/cannon.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Cannon {
  constructor( ctx, canWidth, canHeight, clusterAngle){
    const colors = ["red", "green", "orange", "brown", "black", "blue", "purple","rgb(0,0,255)" , "lightblue" , "gray"];
    this.color = colors[Math.floor(Math.random()*10)];
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

    const angle = (Math.random()/20 + clusterAngle)* Math.PI ;

    this.vy0 = v0 * Math.sin (angle);
    this.vx0 = v0 * Math.cos (angle);

    this.t = 0;
    this.dt = 0.1;

    this.x = this.vx0 * this.t + this.x0;
    this.y = (this.g * Math.pow(this.t, 2)) + (this.vy0 * this.t) + this.y0;

  }

  drawCannon(){
    // this.ctx.shadowOffsetY = 350-this.y+ 8*this.cannonRadius;
    // this.ctx.shadowColor= "rgba(0,0,0,0.5)";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.cannonRadius, 0, Math.PI*2);
    this.ctx.fillStyle = "white" ;
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = this.cannonRadius * 0.1;
    this.ctx.fill();
    this.ctx.stroke();
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

    this.ctx.beginPath();
    this.ctx.arc(this.x +5 * Math.random(), this.y + (4 * Math.random()), this.cannonRadius-14, 0, Math.PI*2);
    this.ctx.fillStyle = "red";
    this.ctx.lineWidth = 2;
    this.ctx.fill();
    this.ctx.closePath();
  }

  moveCannon(guardianShield, scoreKeeping){
    if (this.status < 0) {
      return null;
    }
    this.t += this.dt;

    this.cannonRadius += this.dr;

    this.x = this.vx0 * this.t + this.x0;
    this.y = (this.g * Math.pow(this.t, 2)) + (this.vy0 * this.t) + this.y0;

    // bounce off walls
    if(this.x > this.canWidth - this.cannonRadius || this.x < this.cannonRadius) {
      this.x0 = (this.vx0 * this.t) + this.x;
      this.vx0 = -(this.vx0) ;
    }

    // cannons explodes
    if(this.y >= this.canHeight - guardianShield.paddleHeight - this.cannonRadius && this.y <= this.canHeight) {
      if(this.x > guardianShield.paddleX && this.x < guardianShield.paddleX + guardianShield.paddleWidth) {
        guardianShield.blockCannonAudio();
        this.status = -2;
        scoreKeeping.score ++;
      }
    }

    // Lose life
    if(this.y > this.canHeight + 2 * this.cannonRadius) {
      this.status = 0;
      scoreKeeping.lives --;
      guardianShield.blockCannonAudio();
      if (scoreKeeping.lives === 0) {
        alert("GAME OVER");
        document.location.reload();
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Cannon);


/***/ }),

/***/ "./components/scoring.js":
/*!*******************************!*\
  !*** ./components/scoring.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Scoring);


/***/ }),

/***/ "./components/shield.js":
/*!******************************!*\
  !*** ./components/shield.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Shield);


/***/ }),

/***/ "./components/waves.js":
/*!*****************************!*\
  !*** ./components/waves.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cannon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cannon */ "./components/cannon.js");


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
      this.cannons.push(new _cannon__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, this.canWidth, this.canHeight, this.clusterAngle));
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


/* harmony default export */ __webpack_exports__["default"] = (Waves);


/***/ }),

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_cannon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/cannon */ "./components/cannon.js");
/* harmony import */ var _components_shield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/shield */ "./components/shield.js");
/* harmony import */ var _components_scoring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/scoring */ "./components/scoring.js");
/* harmony import */ var _components_waves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/waves */ "./components/waves.js");





document.addEventListener('DOMContentLoaded', () => {
  const canvasElement = document.getElementById('canvasEl');
  const ctx = canvasElement.getContext("2d");

  const canWidth = 800;
  const canHeight = 500;

  canvasElement.width = canWidth;
  canvasElement.height = canHeight;

  // create guardianShield
  const guardianShield = new _components_shield__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canWidth, canHeight);

  let rightPressed;
  let leftPressed;

  function keyDownHandler(e) {
    if(e.keyCode == 39) {
      rightPressed = true;
    }
    else if(e.keyCode == 37) {
      leftPressed = true;
    }
  }

  function keyUpHandler(e) {
      if(e.keyCode == 39) {
          rightPressed = false;
      }
      else if(e.keyCode == 37) {
          leftPressed = false;
      }
  }

  function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvasElement.offsetLeft;
    if(relativeX > 0 && relativeX < canvasElement.width) {
        guardianShield.paddleX = relativeX - guardianShield.paddleWidth/2;
    }
  }

  document.addEventListener("mousemove", mouseMoveHandler, false);

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  document.addEventListener("keydown", guardianShield.keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  const cannons = [];
  let intervalDelay = 0;
  let clusterDelay = 0;
  let clusterAngle  = 0.3 * Math.random() + 0.3;

  const myScoring = new _components_scoring__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, canWidth);
  const wave = new _components_waves__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, canWidth, canHeight, clusterDelay, clusterAngle, intervalDelay, 0);

  function draw() {
    ctx.clearRect(0, 0, canWidth, canHeight);
    guardianShield.drawShield();
    guardianShield.moveShield(rightPressed, leftPressed);

    wave.drawWave(guardianShield, myScoring);

    myScoring.drawScore();
    myScoring.drawLives();
    wave.drawWaveLabel();
  }

  setInterval(draw, 10);
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map