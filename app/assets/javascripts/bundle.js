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
  constructor( ctx, canWidth, canHeight){
    this.canWidth = canWidth;
    this.canHeight = canHeight;
    this.ctx = ctx;
    this.x0 = canWidth/2;
    this.y0 = canHeight * 2/3;

    this.g = 1;
    const v0 = -35;

    this.cannonRadius = 1;
    this.dr = 0.05;

    this.status = 1

    const angle = Math.PI * Math.random();

    this.vy0 = v0 * Math.sin (angle);
    this.vx0 = v0 * Math.cos (angle);

    this.t = 0;
    this.dt = .1;

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

  blockedExplosion(){
    debugger
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y-10, 5, 15);
    this.ctx.fillStyle = "yellow";
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

    if(this.y > this.canHeight + this.cannonRadius) {
      if(this.x > guardianShield.paddleX && this.x < guardianShield.paddleX + guardianShield.paddleWidth) {
        this.status = 0;
        console.log("blocked");
      }
    }
    if(this.y > this.canHeight + 2 * this.cannonRadius) {
      // alert("GAME OVER");
      // document.location.reload();
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Cannon);


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

  }

  drawShield() {
    this.ctx.beginPath();
    this.ctx.rect(this.paddleX, this.canHeight-this.paddleHeight, this.paddleWidth, this.paddleHeight);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
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

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  document.addEventListener("keydown", guardianShield.keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  const cannons = [];

  let delay = 0
  // create cannons
  function draw() {
    ctx.clearRect(0, 0, canWidth, canHeight);
    guardianShield.drawShield();
    guardianShield.moveShield(rightPressed, leftPressed);

    if (delay === 0){
      cannons.push(new _components_cannon__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, canWidth, canHeight));
      delay = 200;
    } else {
      delay -= 1;
    }


    for (var i = 0; i < cannons.length; i++) {
      cannons[i].moveCannon(guardianShield);
      if (cannons[i].status) {
        cannons[i].drawCannon();
      }else{
        cannons[i].blockedExplosion()
      }
    }


  }

  setInterval(draw, 10);
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map