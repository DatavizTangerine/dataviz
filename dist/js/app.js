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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/components/chooseSexe.js":
/*!*************************************!*\
  !*** ./js/components/chooseSexe.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar chooseSex = function chooseSex() {\n  var male = document.querySelector('.male');\n  var female = document.querySelector('.female');\n  var background = document.querySelector('.background');\n  male.addEventListener('mouseover', function () {\n    background.classList.add('blue');\n  });\n  male.addEventListener('mouseout', function () {\n    background.classList.remove('blue');\n  });\n  female.addEventListener('mouseover', function () {\n    background.classList.add('pink');\n  });\n  female.addEventListener('mouseout', function () {\n    background.classList.remove('pink');\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (chooseSex);\n\n//# sourceURL=webpack:///./js/components/chooseSexe.js?");

/***/ }),

/***/ "./js/components/cursor.js":
/*!*********************************!*\
  !*** ./js/components/cursor.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cursor = function cursor() {\n  var cursor = document.getElementById('cursor');\n  document.addEventListener('mousemove', function (e) {\n    var x = e.clientX;\n    var y = e.clientY;\n    cursor.style.left = x + \"px\";\n    cursor.style.top = y + \"px\";\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cursor); // document.addEventListener('click', () => {\n//     cursor.classList.add(\"expand\");\n//\n//     setTimeout(() => {\n//         cursor.classList.remove(\"expand\");\n//     }, 500)\n// })\n\n//# sourceURL=webpack:///./js/components/cursor.js?");

/***/ }),

/***/ "./js/components/introduction.js":
/*!***************************************!*\
  !*** ./js/components/introduction.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar introduction = function introduction() {\n  var btn = document.querySelector('.introduction p');\n\n  if (btn) {\n    var sectionIntroduction = document.querySelector('.introduction');\n    var sectionOnboarding = document.querySelector('.onboarding');\n    btn.addEventListener('click', function () {\n      sectionIntroduction.classList.add('slideOff');\n      sectionOnboarding.classList.add('slideOn');\n    });\n  }\n\n  var text = document.querySelectorAll('.introduction .content .text');\n  text[0].classList.add('is-active');\n  var word = text[0].querySelectorAll('span');\n  word[word.length - 1].addEventListener('transitionend', function () {\n    text[0].classList.remove('is-active');\n    text[1].classList.add('is-active');\n    word = text[1].querySelectorAll('span');\n    word[word.length - 1].addEventListener('transitionend', function () {\n      text[1].classList.remove('is-active');\n      text[2].classList.add('is-active');\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (introduction);\n\n//# sourceURL=webpack:///./js/components/introduction.js?");

/***/ }),

/***/ "./js/components/onboarding.js":
/*!*************************************!*\
  !*** ./js/components/onboarding.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar onboarding = function onboarding() {\n  var btn = document.querySelector('.onboarding span');\n\n  if (btn) {\n    var sectionOnboarding = document.querySelector('.onboarding');\n    var sectionChoose = document.querySelector('.choose__sexe');\n    var timeline = document.querySelector('.timeline');\n    var topLine = document.querySelector('.line-top');\n    btn.addEventListener('click', function () {\n      sectionOnboarding.classList.add('slideOff');\n      sectionOnboarding.classList.remove('slideOn');\n      sectionChoose.classList.add('slideOn');\n      timeline.classList.add('show');\n      topLine.classList.remove('hidden');\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (onboarding);\n\n//# sourceURL=webpack:///./js/components/onboarding.js?");

/***/ }),

/***/ "./js/components/timeline.js":
/*!***********************************!*\
  !*** ./js/components/timeline.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar timeline = function timeline() {\n  var timeline = document.querySelector('.timeline');\n  var items = timeline.querySelectorAll('.timeline__item');\n  items.forEach(function (item) {\n    item.addEventListener('click', function () {\n      items.forEach(function (item) {\n        item.classList.remove('is-active');\n      });\n      item.classList.add('is-active');\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (timeline);\n\n//# sourceURL=webpack:///./js/components/timeline.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_introduction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/introduction */ \"./js/components/introduction.js\");\n/* harmony import */ var _components_onboarding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/onboarding */ \"./js/components/onboarding.js\");\n/* harmony import */ var _components_chooseSexe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/chooseSexe */ \"./js/components/chooseSexe.js\");\n/* harmony import */ var _components_timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/timeline */ \"./js/components/timeline.js\");\n/* harmony import */ var _components_cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cursor */ \"./js/components/cursor.js\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  Object(_components_introduction__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_components_onboarding__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_components_chooseSexe__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_components_timeline__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  Object(_components_cursor__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./scss/main.scss?");

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./js/main.js ./scss/main.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\wamp64\\www\\dataviz\\src/js/main.js */\"./js/main.js\");\nmodule.exports = __webpack_require__(/*! D:\\wamp64\\www\\dataviz\\src/scss/main.scss */\"./scss/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./js/main.js_./scss/main.scss?");

/***/ })

/******/ });