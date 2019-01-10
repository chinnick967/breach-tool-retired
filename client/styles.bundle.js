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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/styles/dashboard.scss":
/*!******************************************!*\
  !*** ./client/src/styles/dashboard.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./dashboard.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/src/styles/dashboard.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/src/styles/dashboard.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/src/styles/dashboard.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n  font-family: HalisGR;\n  -webkit-font-smoothing: antialiased; }\n\n@font-face {\n  font-family: Shentox;\n  src: url(https://d2g7q0lv6x92ee.cloudfront.net/static/fonts/Shentox%20Medium%20Italic.woff2); }\n\n@font-face {\n  font-family: HalisGR;\n  src: url(https://d2g7q0lv6x92ee.cloudfront.net/static/fonts/Ahmet%20Altun%20-%20HalisGR-Regular.woff2); }\n\nhtml {\n  background: url(/assets/bg-top.png) top no-repeat, url(/assets/bg-bot.jpg) bottom no-repeat;\n  color: white;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  font-family: HalisGR; }\n\n.header {\n  width: 100%;\n  background: url(/assets/header-bg.jpg);\n  background-position-y: -400px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 55px;\n  font-size: 24px; }\n  .header h1 {\n    width: 100%;\n    text-align: center;\n    margin-top: 12px;\n    text-shadow: 0 0 0.3125em #0182f0, 0 0 0.5em #0182f0;\n    color: #eeeeee;\n    filter: brightness(110%);\n    font-family: Shentox; }\n  .header:after {\n    content: \"\";\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    background: url(/assets/header-bottom.png) center;\n    width: 100%;\n    height: 55px;\n    background-size: cover; }\n\nmain {\n  padding: 100px 150px;\n  padding-top: 100px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box; }\n\n.list {\n  width: 400px;\n  max-width: 30%;\n  min-height: 600px;\n  background: black;\n  text-align: left;\n  display: inline-block;\n  vertical-align: top;\n  margin: 10px 20px;\n  position: relative; }\n  .list ul {\n    list-style-type: none;\n    padding-top: 30px; }\n    .list ul li {\n      position: relative;\n      padding-bottom: 25px;\n      margin-bottom: 25px; }\n      .list ul li:before {\n        background: linear-gradient(90deg, rgba(213, 217, 250, 0) 0, rgba(213, 217, 250, 0.36) 50%, rgba(213, 217, 250, 0));\n        height: 2px;\n        width: 100%;\n        content: \"\";\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        margin: 0 auto; }\n      .list ul li:last-child:before {\n        display: none; }\n      .list ul li button {\n        position: absolute;\n        right: 0px;\n        top: -10px; }\n        .list ul li button.closeApiPanelBtn {\n          top: 720px;\n          left: 0;\n          margin: 0 auto;\n          z-index: 100;\n          animation: slideUp 250ms ease-in-out;\n          transform: scale(0.6); }\n        .list ul li button.arrayAddBtn {\n          width: 16px;\n          height: 16px;\n          line-height: 16px;\n          border-radius: 50px;\n          background: linear-gradient(-13deg, #d99d0e, #dec90d 90%) 50% no-repeat;\n          padding: 0;\n          top: 0px;\n          position: relative;\n          margin-top: 8px; }\n      .list ul li .arrayWrapper {\n        float: right;\n        width: 150px;\n        text-align: center; }\n      .list ul li .info {\n        width: 25px;\n        height: 25px;\n        line-height: 25px;\n        background: linear-gradient(to right, #e53935, #e35d5b);\n        border-radius: 25px;\n        display: inline-block;\n        text-align: center;\n        font-weight: bold;\n        position: absolute;\n        top: -3px;\n        right: 132px;\n        transition: 250ms ease-in-out;\n        opacity: .6;\n        z-index: 5; }\n        .list ul li .info .description {\n          opacity: 0;\n          position: absolute;\n          padding: 5px;\n          width: 250px;\n          background: black;\n          color: white;\n          top: 30px;\n          left: -115px;\n          font-size: 10px;\n          z-index: 7;\n          pointer-events: none;\n          line-height: 1.4em; }\n        .list ul li .info:hover {\n          cursor: help;\n          opacity: 1; }\n          .list ul li .info:hover .description {\n            opacity: 1; }\n    .list ul.responseData {\n      height: 100%;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      font-size: 14px; }\n      .list ul.responseData strong {\n        color: #dec90d; }\n      .list ul.responseData li {\n        padding-bottom: 10px;\n        margin-bottom: 10px; }\n      .list ul.responseData ul {\n        padding-top: 5px;\n        padding-bottom: 0px;\n        margin-bottom: 0px;\n        max-height: 150px;\n        overflow-y: scroll;\n        overflow-x: hidden; }\n        .list ul.responseData ul li {\n          padding-bottom: 0;\n          padding-left: 20px;\n          margin-bottom: 5px; }\n          .list ul.responseData ul li:before {\n            display: none; }\n\nbutton, input[type=submit] {\n  background: linear-gradient(-13deg, #d99d0e, #dec90d 90%) 50% no-repeat, linear-gradient(-45deg, #e2cc0c, #ffff1c 50%, #e9b700 0, #ece00f 80%);\n  background-size: calc(100% - 6px) calc(100% - 6px), 100% 100%;\n  color: #04041a;\n  -webkit-box-shadow: 0 0 21px #fa6705;\n  box-shadow: 0 0 21px #fa6705;\n  padding: 10px 5px;\n  z-index: 4;\n  transition: 250ms ease-in-out;\n  text-align: center;\n  width: 120px;\n  font-size: 14px; }\n  button:hover, input[type=submit]:hover {\n    cursor: pointer;\n    filter: brightness(120%); }\n  button strong, input[type=submit] strong {\n    font-weight: normal; }\n  button.red, input[type=submit].red {\n    background: linear-gradient(-13deg, #AA3939, #801515 90%) 50% no-repeat;\n    box-shadow: none; }\n\n.modal {\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.9);\n  transition: 250ms ease-in-out;\n  text-align: center;\n  position: fixed;\n  z-index: 99;\n  top: 0;\n  left: 0; }\n  .modal .panel {\n    width: 450px;\n    height: 60%;\n    position: absolute;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    top: 150px;\n    animation: modalIn .25s ease;\n    text-align: left;\n    display: inline-block;\n    vertical-align: top;\n    transition: 500ms ease; }\n    .modal .panel.response {\n      animation: fadeIn 1s ease;\n      transform: translateX(240px); }\n      .modal .panel.response:after {\n        content: \"Waiting on Response...\";\n        text-align: center;\n        width: 200px;\n        height: 200px;\n        background: url(\"/assets/loadinggif.gif\");\n        filter: brightness(120%);\n        background-size: cover;\n        position: absolute;\n        top: 30%;\n        left: 0;\n        right: 0;\n        margin: 0 auto;\n        border: none;\n        box-shadow: none;\n        opacity: .4; }\n      .modal .panel.response.done:after {\n        display: none; }\n      .modal .panel.response.loaded:after {\n        display: none; }\n    .modal .panel[responseopen=true] {\n      transform: translateX(-240px); }\n\n.form-note {\n  font-size: 12px;\n  width: 100%;\n  display: block;\n  text-align: center;\n  padding: 10px 0;\n  color: #dec90d;\n  margin-top: 10px; }\n\n.formWrap {\n  height: 100%; }\n\n.container {\n  padding: 50px 40px;\n  background: #1b2242 url(https://d2g7q0lv6x92ee.cloudfront.net/static/img/global/box/aside-box-bg.jpg);\n  background-size: cover;\n  font-family: HalisGR, sans-serif;\n  box-sizing: border-box;\n  box-shadow: 0 0 100px rgba(0, 0, 0, 0.75);\n  border: solid 1px #68686e;\n  animation: slideUpContainer .5s ease; }\n  .container:before {\n    content: \"\";\n    pointer-events: none;\n    display: block;\n    width: 100%;\n    height: 99px;\n    background: url(https://d2g7q0lv6x92ee.cloudfront.net/static/img/global/bar.png) 50% no-repeat;\n    background-size: 100% 100%;\n    position: absolute;\n    top: -50px;\n    right: 0px;\n    z-index: 2; }\n  .container:after {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    border: 5px solid #2e3245;\n    position: absolute;\n    left: 0;\n    top: 0;\n    box-sizing: border-box;\n    pointer-events: none; }\n  .container h3 {\n    width: 100%;\n    text-align: center;\n    font-size: 20px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 50px;\n    line-height: 50px;\n    text-shadow: 0 0 0.3125em #0182f0, 0 0 0.5em #0182f0;\n    color: #eeeeee;\n    filter: brightness(120%);\n    font-family: Shentox;\n    z-index: 1;\n    background: linear-gradient(90deg, #182139 0, #25304d 50%, #182139);\n    border-bottom: dashed 1px #68686e; }\n  .container form {\n    height: 85%;\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    padding-right: 20px; }\n  .container label {\n    margin: 8px 0;\n    display: inline-block;\n    width: 100%;\n    z-index: 4;\n    font-size: 14px;\n    position: relative; }\n    .container label span[required]:after {\n      content: \"*\";\n      color: red;\n      margin-left: 4px; }\n  .container input, .container textarea {\n    background: white;\n    border: gray;\n    width: 150px;\n    height: 25px;\n    float: right;\n    text-align: center;\n    z-index: 4;\n    box-shadow: inset 0px 0px 5px 0px #000;\n    position: relative; }\n    .container input[type=submit], .container textarea[type=submit] {\n      position: absolute;\n      bottom: 15px;\n      margin: 0 auto;\n      left: 0;\n      right: 0;\n      background: linear-gradient(-13deg, #d99d0e, #dec90d 90%) 50% no-repeat, linear-gradient(-45deg, #e2cc0c, #ffff1c 50%, #e9b700 0, #ece00f 80%);\n      background-size: calc(100% - 6px) calc(100% - 6px), 100% 100%;\n      color: #04041a;\n      -webkit-box-shadow: 0 0 21px #801515;\n      box-shadow: 0 0 21px #fa6705;\n      padding: 10px 5px;\n      z-index: 4;\n      transition: 250ms ease-in-out;\n      text-align: center;\n      width: 120px;\n      font-size: 14px;\n      height: auto; }\n    .container input.arrayInput, .container textarea.arrayInput {\n      margin-top: 3px; }\n  .container textarea {\n    width: 350px;\n    height: 80px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    display: block;\n    resize: none;\n    text-align: left;\n    padding: 10px; }\n  .container .key {\n    position: absolute;\n    pointer-events: none;\n    position: absolute;\n    bottom: 15px;\n    font-size: 10px;\n    right: 15px;\n    display: none; }\n    .container .key input {\n      width: 100px;\n      float: none;\n      display: block;\n      margin-top: 5px; }\n\n.signin {\n  width: 450px;\n  height: 300px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  position: fixed;\n  top: 200px;\n  padding-top: 30px; }\n  .signin h1 {\n    font-size: 24px;\n    width: 100%;\n    text-align: center;\n    margin-bottom: 25px; }\n  .signin h2 {\n    margin-bottom: 20px;\n    text-align: center; }\n  .signin form {\n    text-align: center; }\n    .signin form input {\n      float: none;\n      display: block;\n      width: 75%;\n      margin: 0 auto;\n      margin-bottom: 10px;\n      position: relative; }\n    .signin form button {\n      margin-top: 20px; }\n\n.tools {\n  width: 70px;\n  height: 70px;\n  text-align: center;\n  margin-top: 30px;\n  position: fixed;\n  bottom: 30px;\n  border-radius: 50px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background: linear-gradient(-55deg, #dec90d, #d99d0e 50%, #d99d0e 0, #dec90d) 50% no-repeat, linear-gradient(-55deg, #5d6b87 50%, #434b67 0);\n  transition: .25s ease-in-out;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.75);\n  z-index: 50;\n  transform: scale(1.1); }\n  .tools:after {\n    content: \"\";\n    width: 45px;\n    height: 45px;\n    position: absolute;\n    left: 12.5px;\n    top: 12.5px;\n    background-image: url(\"/assets/x.png\");\n    background-size: cover;\n    background-repeat: no-repeat; }\n  .tools:hover {\n    cursor: pointer;\n    filter: brightness(100%); }\n  .tools.closed {\n    transform: scale(1); }\n    .tools.closed:after {\n      background-image: url(\"/assets/toolsicon-black.png\"); }\n    .tools.closed .tool {\n      opacity: 0; }\n      .tools.closed .tool.log {\n        transform: translateY(100px); }\n      .tools.closed .tool.account {\n        transform: translateX(90px) translateY(50px); }\n      .tools.closed .tool.logout {\n        transform: translateX(-90px) translateY(50px); }\n    .tools.closed:hover {\n      filter: brightness(120%); }\n  .tools .tool {\n    background: white;\n    width: 50px;\n    height: 50px;\n    color: #eee;\n    transition: .25s ease-in-out;\n    display: inline-block;\n    position: absolute;\n    filter: brightness(120%);\n    margin: 0 10px;\n    border-radius: 80px;\n    z-index: -1;\n    opacity: 1;\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.75);\n    background: linear-gradient(-55deg, #dec90d, #d99d0e 50%, #d99d0e 0, #dec90d) 50% no-repeat; }\n    .tools .tool:hover {\n      cursor: pointer; }\n    .tools .tool:before {\n      position: absolute;\n      bottom: -20px;\n      color: white;\n      font-size: 10px;\n      width: 100%;\n      text-align: center;\n      left: 0; }\n    .tools .tool:after {\n      content: \"\";\n      width: 30px;\n      height: 30px;\n      position: absolute;\n      left: 10px;\n      top: 10px;\n      background-size: cover;\n      background-repeat: no-repeat; }\n    .tools .tool.log {\n      transform: translateY(0);\n      top: -90px;\n      left: 0; }\n      .tools .tool.log:after {\n        background-image: url(\"/assets/log-black.png\");\n        left: 11px; }\n      .tools .tool.log:before {\n        content: \"Logs\"; }\n    .tools .tool.account {\n      transform: translateX(0) translateY(0);\n      top: -50px;\n      left: -90px; }\n      .tools .tool.account:after {\n        background-image: url(\"/assets/account.png\"); }\n      .tools .tool.account:before {\n        content: \"Accounts\"; }\n    .tools .tool.logout {\n      transform: translateX(0) translateY(0);\n      top: -50px;\n      left: 90px; }\n      .tools .tool.logout:after {\n        background-image: url(\"/assets/logout.png\"); }\n      .tools .tool.logout:before {\n        content: \"Logout\"; }\n\n.apiPanelWrap {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 99; }\n\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  float: right;\n  margin-top: -20px; }\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #2196F3; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px); }\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\n@keyframes modalIn {\n  0% {\n    transform: translateX(-600px); }\n  100% {\n    transform: translateX(0); } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: .2; }\n  100% {\n    opacity: 1; } }\n\n@keyframes slideLeft {\n  0% {\n    transform: translateX(0); }\n  100% {\n    transform: translateX(-500px); } }\n\n@keyframes slideUp {\n  0% {\n    transform: translateY(300px) scale(0.6); }\n  100% {\n    transform: translateY(0px) scale(0.6); } }\n\n@keyframes slideUpContainer {\n  0% {\n    transform: translateY(600px); }\n  100% {\n    transform: translateY(0px); } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 1:
/*!************************************************!*\
  !*** multi ./client/src/styles/dashboard.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./client/src/styles/dashboard.scss */"./client/src/styles/dashboard.scss");


/***/ })

/******/ });
//# sourceMappingURL=styles.bundle.js.map