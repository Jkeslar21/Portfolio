module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Footer.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const particleOpt = {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000c1f"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};
function Footer() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2203711801" + " " + 'particles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_2___default.a, {
    params: particleOpt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2203711801",
    __self: this
  }, ".particles.jsx-2203711801{width:100%;margin-top:-13%;background-color:#e5e7e6;z-index:-3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcRm9vdGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SG9CLEFBR3dCLFdBQ0ssZ0JBQ1MseUJBQ2QsV0FDZiIsImZpbGUiOiJDOlxcVXNlcnNcXGRpYW1vXFxEZXNrdG9wXFxHaXRGaWxlc1xcUG9ydGZvbGlvXFxjbGllbnRcXGNvbXBvbmVudHNcXEZvb3Rlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSAncmVhY3QtcGFydGljbGVzLWpzJ1xyXG5cclxuY29uc3QgcGFydGljbGVPcHQgPSB7XHJcbiAgICBcInBhcnRpY2xlc1wiOiB7XHJcbiAgICAgIFwibnVtYmVyXCI6IHtcclxuICAgICAgICBcInZhbHVlXCI6IDE2MCxcclxuICAgICAgICBcImRlbnNpdHlcIjoge1xyXG4gICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgIFwidmFsdWVfYXJlYVwiOiA4MDBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFwiY29sb3JcIjoge1xyXG4gICAgICAgIFwidmFsdWVcIjogXCIjMDAwYzFmXCJcclxuICAgICAgfSxcclxuICAgICAgXCJzaGFwZVwiOiB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgXCJzdHJva2VcIjoge1xyXG4gICAgICAgICAgXCJ3aWR0aFwiOiAwLFxyXG4gICAgICAgICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJwb2x5Z29uXCI6IHtcclxuICAgICAgICAgIFwibmJfc2lkZXNcIjogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpbWFnZVwiOiB7XHJcbiAgICAgICAgICBcInNyY1wiOiBcImltZy9naXRodWIuc3ZnXCIsXHJcbiAgICAgICAgICBcIndpZHRoXCI6IDEwMCxcclxuICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgXCJvcGFjaXR5XCI6IHtcclxuICAgICAgICBcInZhbHVlXCI6IDEsXHJcbiAgICAgICAgXCJyYW5kb21cIjogdHJ1ZSxcclxuICAgICAgICBcImFuaW1cIjoge1xyXG4gICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgIFwic3BlZWRcIjogMSxcclxuICAgICAgICAgIFwib3BhY2l0eV9taW5cIjogMCxcclxuICAgICAgICAgIFwic3luY1wiOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgXCJzaXplXCI6IHtcclxuICAgICAgICBcInZhbHVlXCI6IDEwLFxyXG4gICAgICAgIFwicmFuZG9tXCI6IHRydWUsXHJcbiAgICAgICAgXCJhbmltXCI6IHtcclxuICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgXCJzcGVlZFwiOiA0LFxyXG4gICAgICAgICAgXCJzaXplX21pblwiOiAwLjMsXHJcbiAgICAgICAgICBcInN5bmNcIjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFwibGluZV9saW5rZWRcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGlzdGFuY2VcIjogMTUwLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgXCJvcGFjaXR5XCI6IDAuNCxcclxuICAgICAgICBcIndpZHRoXCI6IDFcclxuICAgICAgfSxcclxuICAgICAgXCJtb3ZlXCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgIFwic3BlZWRcIjogMSxcclxuICAgICAgICBcImRpcmVjdGlvblwiOiBcIm5vbmVcIixcclxuICAgICAgICBcInJhbmRvbVwiOiB0cnVlLFxyXG4gICAgICAgIFwic3RyYWlnaHRcIjogZmFsc2UsXHJcbiAgICAgICAgXCJvdXRfbW9kZVwiOiBcIm91dFwiLFxyXG4gICAgICAgIFwiYm91bmNlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiYXR0cmFjdFwiOiB7XHJcbiAgICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgIFwicm90YXRlWFwiOiA2MDAsXHJcbiAgICAgICAgICBcInJvdGF0ZVlcIjogNjAwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJpbnRlcmFjdGl2aXR5XCI6IHtcclxuICAgICAgXCJkZXRlY3Rfb25cIjogXCJjYW52YXNcIixcclxuICAgICAgXCJldmVudHNcIjoge1xyXG4gICAgICAgIFwib25ob3ZlclwiOiB7XHJcbiAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgXCJtb2RlXCI6IFwiYnViYmxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwib25jbGlja1wiOiB7XHJcbiAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgXCJtb2RlXCI6IFwicmVwdWxzZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlc2l6ZVwiOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIFwibW9kZXNcIjoge1xyXG4gICAgICAgIFwiZ3JhYlwiOiB7XHJcbiAgICAgICAgICBcImRpc3RhbmNlXCI6IDQwMCxcclxuICAgICAgICAgIFwibGluZV9saW5rZWRcIjoge1xyXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJidWJibGVcIjoge1xyXG4gICAgICAgICAgXCJkaXN0YW5jZVwiOiAyNTAsXHJcbiAgICAgICAgICBcInNpemVcIjogMCxcclxuICAgICAgICAgIFwiZHVyYXRpb25cIjogMixcclxuICAgICAgICAgIFwib3BhY2l0eVwiOiAwLFxyXG4gICAgICAgICAgXCJzcGVlZFwiOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcHVsc2VcIjoge1xyXG4gICAgICAgICAgXCJkaXN0YW5jZVwiOiA0MDAsXHJcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IDAuNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJwdXNoXCI6IHtcclxuICAgICAgICAgIFwicGFydGljbGVzX25iXCI6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcclxuICAgICAgICAgIFwicGFydGljbGVzX25iXCI6IDJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcInJldGluYV9kZXRlY3RcIjogdHJ1ZVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFydGljbGVzJz5cclxuICAgICAgICAgICAgPFBhcnRpY2xlcyBwYXJhbXM9e3BhcnRpY2xlT3B0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucGFydGljbGVzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMyU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0zO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Footer.jsx */"));
}

/***/ }),

/***/ "./components/GlobalHead.jsx":
/*!***********************************!*\
  !*** ./components/GlobalHead.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalHead; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\GlobalHead.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function GlobalHead() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Raleway&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })));
}

/***/ }),

/***/ "./components/GlobalStyles.jsx":
/*!*************************************!*\
  !*** ./components/GlobalStyles.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalStyles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\GlobalStyles.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function GlobalStyles() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["Global"], {
    styles: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
                `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Home.jsx":
/*!*****************************!*\
  !*** ./components/Home.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Transition */ "./components/Transition.jsx");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-animate-on-scroll */ "react-animate-on-scroll");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ti */ "react-icons/ti");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ti__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Home.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const particleOpt = {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#e5e7e6"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};
function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2709972979" + " " + 'wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_4___default.a, {
    params: particleOpt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2709972979" + " " + 'home',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2709972979",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Joshua Keslar")), __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-2709972979",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Software Developer")), __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    activeClass: "active",
    to: "skills",
    spy: true,
    smooth: true,
    duration: 1000,
    offset: -125,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("h5", {
    className: "jsx-2709972979" + " " + 'arrow-down',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_5__["TiArrowDownThick"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }))))), __jsx("div", {
    className: "jsx-2709972979" + " " + 'particle-bottom',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_4___default.a, {
    params: particleOpt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2709972979" + " " + 'clear',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: '../static/clearToLight.png',
    home: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2709972979",
    __self: this
  }, ".particle-bottom.jsx-2709972979{background-color:#000c1f;}.home.jsx-2709972979{background-color:#000c1f;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:1;margin-top:-50%;}.wrapper.jsx-2709972979{width:100%;}h1.jsx-2709972979{color:white;font-size:6rem;margin-top:6%;font-family:'Raleway',sans-serif;}h4.jsx-2709972979{color:#b7b5b3;font-size:2.5rem;margin-top:35px;font-family:'Raleway',sans-serif;}img.jsx-2709972979{border-radius:21px;}.arrow-down.jsx-2709972979{color:#e5e7e6;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:200px;font-size:4rem;}.clear.jsx-2709972979{z-index:50;margin-top:-50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcSG9tZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0p3QixBQUdvQyxBQUdFLEFBVWQsQUFLQyxBQU9FLEFBTUssQUFJTCxBQVVMLFdBOUJiLEFBK0JrQixDQTNCQyxFQU9FLEFBWUosS0FMakIsTUFoQ0EsQUFHaUIsRUFpQkMsQUEwQmxCLElBcEJvQixPQXRCSCxHQWlCcUIsTUFNQSwyQkFMdEMsTUFNQSxRQVUyQix3QkFqQ0QsMkVBbUNMLEdBbENNLGNBbUNSLGVBQ25CLHNFQW5DdUIsNkZBQ1QsVUFDTSxnQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxkaWFtb1xcRGVza3RvcFxcR2l0RmlsZXNcXFBvcnRmb2xpb1xcY2xpZW50XFxjb21wb25lbnRzXFxIb21lLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9UcmFuc2l0aW9uJ1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnXHJcbmltcG9ydCB7IFRpQXJyb3dEb3duVGhpY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvdGlcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcclxuXHJcbmNvbnN0IHBhcnRpY2xlT3B0ID0ge1xyXG4gICAgXCJwYXJ0aWNsZXNcIjoge1xyXG4gICAgICBcIm51bWJlclwiOiB7XHJcbiAgICAgICAgXCJ2YWx1ZVwiOiAxNjAsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IHtcclxuICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICBcInZhbHVlX2FyZWFcIjogODAwXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcImNvbG9yXCI6IHtcclxuICAgICAgICBcInZhbHVlXCI6IFwiI2U1ZTdlNlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwic2hhcGVcIjoge1xyXG4gICAgICAgIFwidHlwZVwiOiBcImNpcmNsZVwiLFxyXG4gICAgICAgIFwic3Ryb2tlXCI6IHtcclxuICAgICAgICAgIFwid2lkdGhcIjogMCxcclxuICAgICAgICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicG9seWdvblwiOiB7XHJcbiAgICAgICAgICBcIm5iX3NpZGVzXCI6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaW1hZ2VcIjoge1xyXG4gICAgICAgICAgXCJzcmNcIjogXCJpbWcvZ2l0aHViLnN2Z1wiLFxyXG4gICAgICAgICAgXCJ3aWR0aFwiOiAxMDAsXHJcbiAgICAgICAgICBcImhlaWdodFwiOiAxMDBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFwib3BhY2l0eVwiOiB7XHJcbiAgICAgICAgXCJ2YWx1ZVwiOiAxLFxyXG4gICAgICAgIFwicmFuZG9tXCI6IHRydWUsXHJcbiAgICAgICAgXCJhbmltXCI6IHtcclxuICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICBcInNwZWVkXCI6IDEsXHJcbiAgICAgICAgICBcIm9wYWNpdHlfbWluXCI6IDAsXHJcbiAgICAgICAgICBcInN5bmNcIjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFwic2l6ZVwiOiB7XHJcbiAgICAgICAgXCJ2YWx1ZVwiOiAxMCxcclxuICAgICAgICBcInJhbmRvbVwiOiB0cnVlLFxyXG4gICAgICAgIFwiYW5pbVwiOiB7XHJcbiAgICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgIFwic3BlZWRcIjogNCxcclxuICAgICAgICAgIFwic2l6ZV9taW5cIjogMC4zLFxyXG4gICAgICAgICAgXCJzeW5jXCI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcImxpbmVfbGlua2VkXCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICBcImRpc3RhbmNlXCI6IDE1MCxcclxuICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIFwib3BhY2l0eVwiOiAwLjQsXHJcbiAgICAgICAgXCJ3aWR0aFwiOiAxXHJcbiAgICAgIH0sXHJcbiAgICAgIFwibW92ZVwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgICBcInNwZWVkXCI6IDEsXHJcbiAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJub25lXCIsXHJcbiAgICAgICAgXCJyYW5kb21cIjogdHJ1ZSxcclxuICAgICAgICBcInN0cmFpZ2h0XCI6IGZhbHNlLFxyXG4gICAgICAgIFwib3V0X21vZGVcIjogXCJvdXRcIixcclxuICAgICAgICBcImJvdW5jZVwiOiBmYWxzZSxcclxuICAgICAgICBcImF0dHJhY3RcIjoge1xyXG4gICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICBcInJvdGF0ZVhcIjogNjAwLFxyXG4gICAgICAgICAgXCJyb3RhdGVZXCI6IDYwMFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiaW50ZXJhY3Rpdml0eVwiOiB7XHJcbiAgICAgIFwiZGV0ZWN0X29uXCI6IFwiY2FudmFzXCIsXHJcbiAgICAgIFwiZXZlbnRzXCI6IHtcclxuICAgICAgICBcIm9uaG92ZXJcIjoge1xyXG4gICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgIFwibW9kZVwiOiBcImJ1YmJsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm9uY2xpY2tcIjoge1xyXG4gICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgIFwibW9kZVwiOiBcInJlcHVsc2VcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXNpemVcIjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBcIm1vZGVzXCI6IHtcclxuICAgICAgICBcImdyYWJcIjoge1xyXG4gICAgICAgICAgXCJkaXN0YW5jZVwiOiA0MDAsXHJcbiAgICAgICAgICBcImxpbmVfbGlua2VkXCI6IHtcclxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDFcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYnViYmxlXCI6IHtcclxuICAgICAgICAgIFwiZGlzdGFuY2VcIjogMjUwLFxyXG4gICAgICAgICAgXCJzaXplXCI6IDAsXHJcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IDIsXHJcbiAgICAgICAgICBcIm9wYWNpdHlcIjogMCxcclxuICAgICAgICAgIFwic3BlZWRcIjogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXB1bHNlXCI6IHtcclxuICAgICAgICAgIFwiZGlzdGFuY2VcIjogNDAwLFxyXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiAwLjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicHVzaFwiOiB7XHJcbiAgICAgICAgICBcInBhcnRpY2xlc19uYlwiOiA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlbW92ZVwiOiB7XHJcbiAgICAgICAgICBcInBhcnRpY2xlc19uYlwiOiAyXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJyZXRpbmFfZGV0ZWN0XCI6IHRydWVcclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XHJcbiAgICAgICAgICAgICAgICA8UGFydGljbGVzIHBhcmFtcz17cGFydGljbGVPcHR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnaG9tZSd9PlxyXG4gICAgICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49J2ZhZGVJbicgZHVyYXRpb249ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Kb3NodWEgS2VzbGFyPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj0nZmFkZUluJyBkdXJhdGlvbj17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlNvZnR3YXJlIERldmVsb3BlcjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49J2ZhZGVJbicgZHVyYXRpb249ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9J2FjdGl2ZSdcclxuICAgICAgICAgICAgICAgIHRvPVwic2tpbGxzXCJcclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstMTI1fVxyXG4gICAgICAgICAgICAgPjxoNSBjbGFzc05hbWU9eydhcnJvdy1kb3duJ30gPjxUaUFycm93RG93blRoaWNrIC8+PC9oNT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXJ0aWNsZS1ib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICA8UGFydGljbGVzIHBhcmFtcz17cGFydGljbGVPcHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGVhcic+XHJcbiAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uIGltYWdlPXsnLi4vc3RhdGljL2NsZWFyVG9MaWdodC5wbmcnfSBob21lIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucGFydGljbGUtYm90dG9tIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ob21lIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53cmFwcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxNDEzMDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgLy8gY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xyXG4gICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgY29sb3I6ICNiN2I1YjM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xyXG4gICAgICAgICAgICAvLyBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYXJyb3ctZG93biB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAvLyBjb2xvcjogIzRhZDVmZjtcclxuICAgICAgICAgICAgLy8gY29sb3I6IHNpbHZlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC8vIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNsZWFyIHtcclxuICAgICAgICAgIHotaW5kZXg6IDUwO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTUwJTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Home.jsx */"));
}

/***/ }),

/***/ "./components/Navigation.jsx":
/*!***********************************!*\
  !*** ./components/Navigation.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Navigation.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Navigation() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2712963717" + " " + 'nav-items',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    activeClass: "active",
    to: "skills",
    spy: true,
    smooth: true,
    duration: 1000,
    offset: -125,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2712963717" + " " + 'nav-item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Skills")), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    activeClass: "active",
    to: "portfolio",
    spy: true,
    smooth: true,
    duration: 1000,
    offset: -125,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2712963717" + " " + 'nav-item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Portfolio")), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    activeClass: "active",
    to: "resume",
    spy: true,
    smooth: true,
    duration: 1000,
    offset: -125,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2712963717" + " " + 'nav-item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Resume")), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    activeClass: "active",
    to: "contact",
    spy: true,
    smooth: true,
    duration: 1000,
    offset: -125,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2712963717" + " " + 'nav-item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Contact"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2712963717",
    __self: this
  }, ".nav-items.jsx-2712963717{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed;top:0;left:0;z-index:9999;width:100%;padding:1%;color:#b7b5b3;background-color:#1f2a44;border-bottom:2px solid #b7b5b3;}.nav-item.jsx-2712963717{margin-right:50px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:'Raleway',sans-serif;}.nav-item.jsx-2712963717:hover{border-bottom:1px solid #4ad5ff;cursor:pointer;color:#e5e7e6;font-family:'Raleway',sans-serif;}.active.jsx-2712963717{border-bottom:1px solid #4ad5ff !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNvQixBQUdrQyxBQWFLLEFBS2MsQUFNVyxrQkFWeEIsY0FLSixXQU1uQixJQUxrQixjQUNvQixhQXBCWCxvQkFxQjNCLGlCQVBzQyxpQ0FDdEMsNkJBZG1CLGVBQ1QsTUFDQyxPQUNNLGFBQ0YsV0FDQSxXQUNHLGNBQ1cseUJBQ08sZ0NBQ3BDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2LWl0ZW1zJz5cclxuICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz0nYWN0aXZlJ1xyXG4gICAgICAgICAgICAgICAgdG89XCJza2lsbHNcIlxyXG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezEwMDB9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey0xMjV9XHJcbiAgICAgICAgICAgICA+PHNwYW4gY2xhc3NOYW1lPSduYXYtaXRlbSc+U2tpbGxzPC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9J2FjdGl2ZSdcclxuICAgICAgICAgICAgICAgIHRvPVwicG9ydGZvbGlvXCJcclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstMTI1fVxyXG4gICAgICAgICAgICAgPjxzcGFuIGNsYXNzTmFtZT0nbmF2LWl0ZW0nPlBvcnRmb2xpbzwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPSdhY3RpdmUnXHJcbiAgICAgICAgICAgICAgICB0bz1cInJlc3VtZVwiXHJcbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17MTAwMH1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTEyNX1cclxuICAgICAgICAgICAgID48c3BhbiBjbGFzc05hbWU9J25hdi1pdGVtJz5SZXN1bWU8L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz0nYWN0aXZlJ1xyXG4gICAgICAgICAgICAgICAgdG89XCJjb250YWN0XCJcclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstMTI1fVxyXG4gICAgICAgICAgICAgPjxzcGFuIGNsYXNzTmFtZT0nbmF2LWl0ZW0nPkNvbnRhY3Q8L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5uYXYtaXRlbXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMSU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiN2I1YjM7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMmE0NDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2I3YjViMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXYtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0YWQ1ZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRhZDVmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Navigation.jsx */"));
}

/***/ }),

/***/ "./components/Section.jsx":
/*!********************************!*\
  !*** ./components/Section.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Transition */ "./components/Transition.jsx");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-animate-on-scroll */ "react-animate-on-scroll");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-card-flip */ "react-card-flip");
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_card_flip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/di */ "react-icons/di");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_di__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Section.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import { animateScroll as scroll } from 'react-scroll'

 // import { TiArrowUpThick } from "react-icons/ti";






function Section({
  title,
  id,
  image,
  classNameProp,
  dark,
  skills,
  portfolio,
  resume,
  contact
}) {
  const {
    0: isFlipped,
    1: setIsFlipped
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isFlipped2,
    1: setIsFlipped2
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: backend,
    1: setBackend
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: frontend,
    1: setFrontend
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // const scrollToTop = () => {
  //     scroll.scrollToTop()
  // }

  const clickMe = () => {
    setFrontend(!frontend);
    setIsFlipped(!isFlipped);
  };

  const clickMeBack = () => {
    setBackend(!backend);
    setIsFlipped2(!isFlipped2);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1356570401" + " " + (classNameProp || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    id: id,
    className: "jsx-1356570401" + " " + "section-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, skills ? __jsx("h2", {
    className: "jsx-1356570401" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1356570401" + " " + ((dark ? 'title-dark title-skills' : 'title title-skills') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, title)) : __jsx("h2", {
    className: "jsx-1356570401" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1356570401" + " " + ((dark ? 'title-dark' : 'title') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, title)), skills && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1356570401" + " " + 'images',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1356570401" + " " + 'frontend',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_4___default.a, {
    isFlipped: isFlipped,
    flipDirection: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("img", {
    src: "../static/treeTopFinall.png",
    alt: "Sunflower Image",
    key: frontend ? null : 'front',
    onClick: clickMe,
    className: "jsx-1356570401" + " " + 'sunflower',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("div", {
    onClick: clickMe,
    key: "back",
    className: "jsx-1356570401" + " " + 'view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1356570401" + " " + 'card-back',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1356570401" + " " + "skills-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Front End"), __jsx("div", {
    className: "jsx-1356570401" + " " + 'card-icons',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_5__["DiGit"], {
    style: {
      fontSize: '6rem',
      color: '#F34F29'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_5__["DiGithubBadge"], {
    style: {
      fontSize: '6rem',
      color: '#181616'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_5__["DiHtml5"], {
    style: {
      fontSize: '6rem',
      color: '#E54D26'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_5__["DiCss3"], {
    style: {
      fontSize: '6rem',
      color: '#3D8FC6'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_5__["DiLess"], {
    style: {
      fontSize: '6rem',
      color: '#2A4D80'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_5__["DiSass"], {
    style: {
      fontSize: '6rem',
      color: '#CC6699'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_5__["DiBootstrap"], {
    style: {
      fontSize: '6rem',
      color: '#5B4282'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_5__["DiJavascript1"], {
    style: {
      fontSize: '6rem',
      color: '#F0DB4F'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_5__["DiReact"], {
    style: {
      fontSize: '6rem',
      color: '#61DAFB'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("img", {
    src: "../static/redux.png",
    alt: "Redux Icon",
    style: {
      width: '75px',
      maxHeight: '70px',
      margin: '1%'
    },
    className: "jsx-1356570401",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("img", {
    src: "../static/next-text.png",
    alt: "Next Icon",
    style: {
      width: '75px',
      maxHeight: '75px',
      marginLeft: '1%'
    },
    className: "jsx-1356570401",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })))))), __jsx("div", {
    onClick: () => setBackend(!backend),
    className: "jsx-1356570401" + " " + 'backend',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_4___default.a, {
    isFlipped: isFlipped2,
    flipDirection: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("img", {
    src: "../static/treeRootsFinal.png",
    alt: "Roots Image",
    key: backend ? null : 'front',
    onClick: clickMeBack,
    className: "jsx-1356570401" + " " + 'roots',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx("div", {
    onClick: clickMeBack,
    key: "back",
    className: "jsx-1356570401" + " " + 'view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1356570401" + " " + 'card-back',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1356570401" + " " + 'skills-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Back End"), __jsx("div", {
    className: "jsx-1356570401" + " " + 'card-icons',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_5__["DiGit"], {
    style: {
      fontSize: '6rem',
      color: '#F34F29'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_5__["DiGithubBadge"], {
    style: {
      fontSize: '6rem',
      color: '#181616'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_5__["DiNodejsSmall"], {
    style: {
      fontSize: '6rem',
      color: '#83CD29'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx("img", {
    src: "../static/expressFinal.png",
    alt: "Next Icon",
    style: {
      width: '75px',
      height: '75px',
      marginTop: '2%',
      paddingLeft: '2%'
    },
    className: "jsx-1356570401",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_5__["DiMysql"], {
    style: {
      fontSize: '6rem',
      color: '#00618A'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_5__["DiPostgresql"], {
    style: {
      fontSize: '6rem',
      color: '#336791'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }))))))), __jsx("div", {
    className: "jsx-1356570401" + " " + 'gauges',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1356570401" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1356570401" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaChartLine"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-1356570401",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Efficient"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-1356570401",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "maximum productivity; well-organized")), __jsx("div", {
    className: "jsx-1356570401" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1356570401" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdPhonelink"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-1356570401",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Responsive"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-1356570401",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "optimized layouts for all devices")), __jsx("div", {
    className: "jsx-1356570401" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1356570401" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdLightbulbOutline"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-1356570401",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Creative"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-1356570401",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "highest quality solutions provided")), __jsx("div", {
    className: "jsx-1356570401" + " " + 'gauge-styles dynamic',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1356570401" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaGlobeAmericas"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-1356570401",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Dynamic"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-1356570401",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "reflects real-time changes in values with activity.  Built with DRY, reusable components. ")))), portfolio && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
    className: "jsx-1356570401" + " " + ((dark ? null : 'light-text') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "PORTFOLIO CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus! Commodi magni voluptas nemo earum perferendis voluptatum odio dignissimos molestiae esse aut. Nam quae beatae magnam ea, voluptatibus minus enim vitae culpa, cum expedita fuga nesciunt nulla, ut similique corrupti? Cumque quis illo eius doloremque accusamus aliquid architecto! Pariatur provident cumque minima corporis maiores. Asperiores, debitis eveniet. Quaerat, porro tenetur quam ratione suscipit non voluptates cupiditate totam quis corrupti officiis! Aliquam dicta at molestias dignissimos, illum accusamus, vitae quaerat corrupti perferendis ad obcaecati hic culpa iusto tempora magni sit incidunt minima tempore atque ducimus neque quae. Nisi exercitationem provident blanditiis! Error autem officia tenetur soluta nulla illum, vero commodi recusandae, fuga nobis nam facere itaque harum officiis! Perferendis ipsam esse laboriosam neque enim quod sit. Consequuntur maiores soluta obcaecati aspernatur? Aspernatur, nihil officia! Expedita dolor nemo itaque ratione accusantium unde vel architecto quod accusamus, tenetur blanditiis esse libero laborum amet, fuga adipisci. Reiciendis laborum nam eaque non earum quis facere. Fugit accusamus aperiam labore quisquam aut. Dolor reiciendis aliquam quod fugit possimus earum neque, iusto ratione expedita? Reiciendis qui sapiente possimus nostrum saepe sit distinctio pariatur autem, commodi ipsa earum. Odit repellat in modi tempora! Quia quisquam repellendus sed quasi sit soluta sint magnam quae modi reiciendis pariatur nisi fuga culpa, sapiente vel tempora similique? Quos officiis possimus dignissimos adipisci. Eveniet explicabo voluptate eligendi doloremque et suscipit, rerum, officiis nesciunt sapiente ipsa magni numquam quam ab recusandae harum incidunt cumque error voluptatem temporibus quae modi, nulla ex? Ratione, modi consequuntur! Itaque expedita vel dolore exercitationem odio officia, eos fugiat obcaecati impedit adipisci sint recusandae consequuntur possimus consectetur sunt nisi repellat voluptates repellendus quisquam esse asperiores minus ea. Facilis, beatae optio. Corporis esse modi laborum dolorum, nisi autem pariatur mollitia. Illo, accusamus sed praesentium atque eos magni. Harum aut repellendus consequatur laborum, praesentium consequuntur voluptates doloremque provident nihil earum tempore est! Iusto porro ullam necessitatibus deleniti officia rerum id distinctio! Non, veritatis ipsa consectetur architecto illo placeat et error vel inventore? Mollitia deserunt minus voluptates praesentium animi. Rerum provident sunt quas! Laborum quibusdam iure totam explicabo culpa temporibus, optio voluptatem nemo at eos voluptas necessitatibus ducimus qui consequatur quam natus dolor ex, nam cumque. Modi optio autem adipisci illo, consectetur provident. Enim suscipit cumque amet blanditiis veritatis sed veniam earum consectetur neque minima quisquam deleniti culpa ut iure ipsa, necessitatibus distinctio recusandae commodi ullam! Laboriosam maxime suscipit hic incidunt tempora harum. Minus architecto veritatis ipsum in eos rem velit sequi? Illo corporis distinctio quisquam ipsa velit magnam, et maxime ad tempore soluta pariatur inventore voluptas illum totam rerum voluptatibus quia atque? Qui cupiditate ea molestias id quisquam nulla a! Ullam nulla molestiae accusantium animi optio in dolorum obcaecati, perferendis beatae dolores est culpa doloremque unde iusto nemo saepe neque repudiandae iste. Eveniet dolorum incidunt obcaecati ipsa vero error officiis doloremque distinctio, voluptas atque totam officia labore veritatis mollitia nostrum ut temporibus voluptates placeat soluta, unde hic corrupti natus pariatur quas. Amet!")), resume && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
    className: "jsx-1356570401" + " " + ((dark ? null : 'light-text') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "RESUME CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus! Commodi magni voluptas nemo earum perferendis voluptatum odio dignissimos molestiae esse aut. Nam quae beatae magnam ea, voluptatibus minus enim vitae culpa, cum expedita fuga nesciunt nulla, ut similique corrupti? Cumque quis illo eius doloremque accusamus aliquid architecto! Pariatur provident cumque minima corporis maiores. Asperiores, debitis eveniet. Quaerat, porro tenetur quam ratione suscipit non voluptates cupiditate totam quis corrupti officiis! Aliquam dicta at molestias dignissimos, illum accusamus, vitae quaerat corrupti perferendis ad obcaecati hic culpa iusto tempora magni sit incidunt minima tempore atque ducimus neque quae. Nisi exercitationem provident blanditiis! Error autem officia tenetur soluta nulla illum, vero commodi recusandae, fuga nobis nam facere itaque harum officiis! Perferendis ipsam esse laboriosam neque enim quod sit. Consequuntur maiores soluta obcaecati aspernatur? Aspernatur, nihil officia! Expedita dolor nemo itaque ratione accusantium unde vel architecto quod accusamus, tenetur blanditiis esse libero laborum amet, fuga adipisci. Reiciendis laborum nam eaque non earum quis facere. Fugit accusamus aperiam labore quisquam aut. Dolor reiciendis aliquam quod fugit possimus earum neque, iusto ratione expedita? Reiciendis qui sapiente possimus nostrum saepe sit distinctio pariatur autem, commodi ipsa earum. Odit repellat in modi tempora! Quia quisquam repellendus sed quasi sit soluta sint magnam quae modi reiciendis pariatur nisi fuga culpa, sapiente vel tempora similique? Quos officiis possimus dignissimos adipisci. Eveniet explicabo voluptate eligendi doloremque et suscipit, rerum, officiis nesciunt sapiente ipsa magni numquam quam ab recusandae harum incidunt cumque error voluptatem temporibus quae modi, nulla ex? Ratione, modi consequuntur! Itaque expedita vel dolore exercitationem odio officia, eos fugiat obcaecati impedit adipisci sint recusandae consequuntur possimus consectetur sunt nisi repellat voluptates repellendus quisquam esse asperiores minus ea. Facilis, beatae optio. Corporis esse modi laborum dolorum, nisi autem pariatur mollitia. Illo, accusamus sed praesentium atque eos magni. Harum aut repellendus consequatur laborum, praesentium consequuntur voluptates doloremque provident nihil earum tempore est! Iusto porro ullam necessitatibus deleniti officia rerum id distinctio! Non, veritatis ipsa consectetur architecto illo placeat et error vel inventore? Mollitia deserunt minus voluptates praesentium animi. Rerum provident sunt quas! Laborum quibusdam iure totam explicabo culpa temporibus, optio voluptatem nemo at eos voluptas necessitatibus ducimus qui consequatur quam natus dolor ex, nam cumque. Modi optio autem adipisci illo, consectetur provident. Enim suscipit cumque amet blanditiis veritatis sed veniam earum consectetur neque minima quisquam deleniti culpa ut iure ipsa, necessitatibus distinctio recusandae commodi ullam! Laboriosam maxime suscipit hic incidunt tempora harum. Minus architecto veritatis ipsum in eos rem velit sequi? Illo corporis distinctio quisquam ipsa velit magnam, et maxime ad tempore soluta pariatur inventore voluptas illum totam rerum voluptatibus quia atque? Qui cupiditate ea molestias id quisquam nulla a! Ullam nulla molestiae accusantium animi optio in dolorum obcaecati, perferendis beatae dolores est culpa doloremque unde iusto nemo saepe neque repudiandae iste. Eveniet dolorum incidunt obcaecati ipsa vero error officiis doloremque distinctio, voluptas atque totam officia labore veritatis mollitia nostrum ut temporibus voluptates placeat soluta, unde hic corrupti natus pariatur quas. Amet!")), contact && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
    className: "jsx-1356570401" + " " + ((dark ? null : 'light-text') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "CONTACT CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus! Commodi magni voluptas nemo earum perferendis voluptatum odio dignissimos molestiae esse aut. Nam quae beatae magnam ea, voluptatibus minus enim vitae culpa, cum expedita fuga nesciunt nulla, ut similique corrupti? Cumque quis illo eius doloremque accusamus aliquid architecto! Pariatur provident cumque minima corporis maiores. Asperiores, debitis eveniet. Quaerat, porro tenetur quam ratione suscipit non voluptates cupiditate totam quis corrupti officiis! Aliquam dicta at molestias dignissimos, illum accusamus, vitae quaerat corrupti perferendis ad obcaecati hic culpa iusto tempora magni sit incidunt minima tempore atque ducimus neque quae. Nisi exercitationem provident blanditiis! Error autem officia tenetur soluta nulla illum, vero commodi recusandae, fuga nobis nam facere itaque harum officiis! Perferendis ipsam esse laboriosam neque enim quod sit. Consequuntur maiores soluta obcaecati aspernatur? Aspernatur, nihil officia! Expedita dolor nemo itaque ratione accusantium unde vel architecto quod accusamus, tenetur blanditiis esse libero laborum amet, fuga adipisci. Reiciendis laborum nam eaque non earum quis facere. Fugit accusamus aperiam labore quisquam aut. Dolor reiciendis aliquam quod fugit possimus earum neque, iusto ratione expedita? Reiciendis qui sapiente possimus nostrum saepe sit distinctio pariatur autem, commodi ipsa earum. Odit repellat in modi tempora! Quia quisquam repellendus sed quasi sit soluta sint magnam quae modi reiciendis pariatur nisi fuga culpa, sapiente vel tempora similique? Quos officiis possimus dignissimos adipisci. Eveniet explicabo voluptate eligendi doloremque et suscipit, rerum, officiis nesciunt sapiente ipsa magni numquam quam ab recusandae harum incidunt cumque error voluptatem temporibus quae modi, nulla ex? Ratione, modi consequuntur! Itaque expedita vel dolore exercitationem odio officia, eos fugiat obcaecati impedit adipisci sint recusandae consequuntur possimus consectetur sunt nisi repellat voluptates repellendus quisquam esse asperiores minus ea. Facilis, beatae optio. Corporis esse modi laborum dolorum, nisi autem pariatur mollitia. Illo, accusamus sed praesentium atque eos magni. Harum aut repellendus consequatur laborum, praesentium consequuntur voluptates doloremque provident nihil earum tempore est! Iusto porro ullam necessitatibus deleniti officia rerum id distinctio! Non, veritatis ipsa consectetur architecto illo placeat et error vel inventore? Mollitia deserunt minus voluptates praesentium animi. Rerum provident sunt quas! Laborum quibusdam iure totam explicabo culpa temporibus, optio voluptatem nemo at eos voluptas necessitatibus ducimus qui consequatur quam natus dolor ex, nam cumque. Modi optio autem adipisci illo, consectetur provident. Enim suscipit cumque amet blanditiis veritatis sed veniam earum consectetur neque minima quisquam deleniti culpa ut iure ipsa, necessitatibus distinctio recusandae commodi ullam! Laboriosam maxime suscipit hic incidunt tempora harum. Minus architecto veritatis ipsum in eos rem velit sequi? Illo corporis distinctio quisquam ipsa velit magnam, et maxime ad tempore soluta pariatur inventore voluptas illum totam rerum voluptatibus quia atque? Qui cupiditate ea molestias id quisquam nulla a! Ullam nulla molestiae accusantium animi optio in dolorum obcaecati, perferendis beatae dolores est culpa doloremque unde iusto nemo saepe neque repudiandae iste. Eveniet dolorum incidunt obcaecati ipsa vero error officiis doloremque distinctio, voluptas atque totam officia labore veritatis mollitia nostrum ut temporibus voluptates placeat soluta, unde hic corrupti natus pariatur quas. Amet!")))), __jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: image,
    dark: dark,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1356570401",
    __self: this
  }, ".light.jsx-1356570401{background-color:#e5e7e6;margin-top:-5px;font-family:'Raleway',sans-serif;}.dark.jsx-1356570401{background-color:#000c1f;margin-top:-5px;color:#e5e7e6;font-family:'Raleway',sans-serif;}.images.jsx-1356570401{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1%;padding-top:2%;}.sunflower.jsx-1356570401,.roots.jsx-1356570401{max-width:600px;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-animation:colorFadeOut-jsx-1356570401 2s,shapeShiftOut-jsx-1356570401 2s;animation:colorFadeOut-jsx-1356570401 2s,shapeShiftOut-jsx-1356570401 2s;border-radius:50%;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.sunflower.jsx-1356570401:hover,.roots.jsx-1356570401:hover{cursor:pointer;-webkit-animation:colorFadeIn-jsx-1356570401 2s,shapeShiftIn-jsx-1356570401 2s;animation:colorFadeIn-jsx-1356570401 2s,shapeShiftIn-jsx-1356570401 2s;-webkit-filter:grayscale(0%);filter:grayscale(0%);border-radius:50px;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.skills-card.jsx-1356570401{width:33%;height:420px;}.frontend.jsx-1356570401,.backend.jsx-1356570401{width:35%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.titles.jsx-1356570401{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border:1px solid red;padding:2%;}.skills-title.jsx-1356570401{font-size:2.1rem;margin-bottom:5%;}.skills-title.jsx-1356570401:hover{cursor:pointer;}.view.jsx-1356570401{-webkit-animation:fadeIn-jsx-1356570401 1s;animation:fadeIn-jsx-1356570401 1s;opacity:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;max-width:600px;max-height:400px;height:350px;width:550px;background:#fbfbf8;border-radius:50px;padding:2%;margin:3%;cursor:pointer;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.card-back.jsx-1356570401{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.card-icons.jsx-1356570401{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;max-width:600px;max-height:400px;}h2.jsx-1356570401{font-size:4rem;padding-top:2%;padding-bottom:2%;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding-left:2%;}p.jsx-1356570401{padding-left:2%;line-height:1.8;padding-top:2%;}.title-center.jsx-1356570401{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.title.jsx-1356570401{color:#000c1f;margin-right:2%;margin-top:6%;}.title-dark.jsx-1356570401{margin-right:2%;color:#E5E7E6;margin-top:6%;}@-webkit-keyframes colorFadeIn-jsx-1356570401{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@keyframes colorFadeIn-jsx-1356570401{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@-webkit-keyframes colorFadeOut-jsx-1356570401{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@keyframes colorFadeOut-jsx-1356570401{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@-webkit-keyframes shapeShiftIn-jsx-1356570401{from{border-radius:50%;}to{border-radius:50px;}}@keyframes shapeShiftIn-jsx-1356570401{from{border-radius:50%;}to{border-radius:50px;}}@-webkit-keyframes shapeShiftOut-jsx-1356570401{from{border-radius:50px;}to{border-radius:50%;}}@keyframes shapeShiftOut-jsx-1356570401{from{border-radius:50px;}to{border-radius:50%;}}@-webkit-keyframes fadeIn-jsx-1356570401{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-1356570401{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadeOut-jsx-1356570401{from{opacity:1;}to{opacity:0;}}@keyframes fadeOut-jsx-1356570401{from{opacity:1;}to{opacity:0;}}.animate.jsx-1356570401{opacity:1;}.gauges.jsx-1356570401{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:5%;}.gauge-styles.jsx-1356570401{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:200px;}.gauge.jsx-1356570401{background-image:url('../static/DarkBlueBadge.png');background-size:cover;width:200px;height:175px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.dynamic.jsx-1356570401{margin-top:55px;}.light-text.jsx-1356570401{color:#000c1f;}.title-skills.jsx-1356570401{margin-top:1%;}.section-content.jsx-1356570401{margin-bottom:2%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcU2VjdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMk9vQixBQUc4QyxBQUtBLEFBTVosQUFVRyxBQVdELEFBVUwsQUFNQSxBQVFHLEFBT0ksQUFLRixBQUlLLEFBcUJQLEFBTUEsQUFVRSxBQVFDLEFBS0gsQUFJQyxBQUtFLEFBa0JXLEFBSTVCLEFBSTBCLEFBSTFCLEFBSXVCLEFBR0MsQUFLQSxBQUdELEFBS1IsQUFHQSxBQUtBLEFBR0EsQUFJSixBQUdHLEFBU0EsQUFPdUMsQUFTcEMsQUFHRixBQUdBLEFBR0csVUE5TEosQUFRQSxBQW1JYixBQUdBLEFBS0EsQUFHQSxBQUlKLElBdEVvQixBQXFHcEIsQUFHQSxDQXRNOEMsQUFxQzlDLEFBd0NtQixDQXhGUSxBQWdHUCxBQWNGLEFBNkZsQixDQWpLcUIsQUEwS3JCLENBcEVJLEFBV0EsQ0FSQSxBQUtBLElBaElKLEVBN0NvQixBQUtBLEtBeUdFLEFBaUJKLEFBS0EsRUFkQyxFQXJEbkIsT0FoRXNDLEFBS3BCLEdBMEhsQixBQUtBLEdBZEEsQ0FSdUIsRUF5Q25CLEFBS0EsRUEwRHNCLEVBbEV0QixBQVdBLENBekprQyxlQWVVLElBcEJoRCxBQVMwQixBQTZDTyxBQXFDUCxBQU1ILEFBdUJJLEFBNkVKLEFBU1UsQUFRakIsSUFoSkYsTUFyQlksRUFzS1QsRUFqTmpCLEFBaUVpQixXQWlKQSwwQ0ExR0csRUFaRCxBQW9HQSxTQTVMSSxBQWtGSSxLQW1CM0IsS0E3RHVCLEFBc0JKLEdBekNNLFFBMEZ6QixBQWdHMkIsd0JBbEtGLEFBd0pDLEdBNUdRLEFBb0duQixXQUNrQixJQXhLVixHQTBCeEIsQ0Fld0IsS0FwREQsS0FxQ3RCLEtBeEI4RCxRQVhBLEdBVi9DLE1BZ0ZRLElBMUN2QixDQXJDbUIsZUFDbkIsQ0EyTXVCLEdBVkgsYUF0SWMsR0F3SWxDLENBL0syRCxRQVhBLGVBNEU1QyxXQUNLLFFBb0dHLFFBbkdGLEVBUnJCLEdBMURzRCxRQVhBLElBK0V0RCxNQW1IQSxnQ0F0TEEsTUFzQ2UsRUFqRGYsU0FrRG9CLGFBOEhGLEdBN0hHLFdBOEhyQixNQTdIaUIsYUFDRCxZQUNPLG1CQUNBLG1CQUNSLFdBQ0QsVUFDSyxlQUMyQywwREFDSCx1REFDTCxrREFDdEQiLCJmaWxlIjoiQzpcXFVzZXJzXFxkaWFtb1xcRGVza3RvcFxcR2l0RmlsZXNcXFBvcnRmb2xpb1xcY2xpZW50XFxjb21wb25lbnRzXFxTZWN0aW9uLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgeyBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcclxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9UcmFuc2l0aW9uJ1xyXG4vLyBpbXBvcnQgeyBUaUFycm93VXBUaGljayB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuaW1wb3J0IFJlYWN0Q2FyZEZsaXAgZnJvbSAncmVhY3QtY2FyZC1mbGlwJztcclxuaW1wb3J0IHsgRGlSZWFjdCwgRGlKYXZhc2NyaXB0MSwgRGlCb290c3RyYXAsIERpU2FzcywgRGlMZXNzLCBEaUNzczMsIERpSHRtbDUsIERpR2l0aHViQmFkZ2UsIERpR2l0LCBEaU5vZGVqc1NtYWxsLCBEaU15c3FsLCBEaVBvc3RncmVzcWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvZGlcIjtcclxuaW1wb3J0IHsgRmFDaGFydExpbmUsIEZhR2xvYmVBbWVyaWNhcyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBNZFBob25lbGluaywgTWRMaWdodGJ1bGJPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbih7dGl0bGUsIGlkLCBpbWFnZSwgY2xhc3NOYW1lUHJvcCwgZGFyaywgc2tpbGxzLCBwb3J0Zm9saW8sIHJlc3VtZSwgY29udGFjdH0pIHtcclxuICAgIGNvbnN0IFtpc0ZsaXBwZWQsIHNldElzRmxpcHBlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc0ZsaXBwZWQyLCBzZXRJc0ZsaXBwZWQyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2JhY2tlbmQsIHNldEJhY2tlbmRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZnJvbnRlbmQsIHNldEZyb250ZW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIC8vIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHNjcm9sbC5zY3JvbGxUb1RvcCgpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgY2xpY2tNZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRGcm9udGVuZCghZnJvbnRlbmQpXHJcbiAgICAgICAgc2V0SXNGbGlwcGVkKCFpc0ZsaXBwZWQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja01lQmFjayA9ICgpID0+IHtcclxuICAgICAgICBzZXRCYWNrZW5kKCFiYWNrZW5kKVxyXG4gICAgICAgIHNldElzRmxpcHBlZDIoIWlzRmxpcHBlZDIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lUHJvcH0+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17XCJzZWN0aW9uXCIgKyAoZGFyayA/IFwiIHNlY3Rpb24tZGFya1wiIDogXCJcIil9PiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudFwiIGlkPXtpZH0+XHJcbiAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAge3NraWxscyA/IDxoMiBjbGFzc05hbWU9J3RpdGxlLWNlbnRlcic+PHNwYW4gY2xhc3NOYW1lPXtkYXJrID8gJ3RpdGxlLWRhcmsgdGl0bGUtc2tpbGxzJyA6ICd0aXRsZSB0aXRsZS1za2lsbHMnfT57dGl0bGV9PC9zcGFuPjwvaDI+IDogPGgyIGNsYXNzTmFtZT0ndGl0bGUtY2VudGVyJz48c3BhbiBjbGFzc05hbWU9e2RhcmsgPyAndGl0bGUtZGFyaycgOiAndGl0bGUnfT57dGl0bGV9PC9zcGFuPjwvaDI+fVxyXG5cclxuICAgICAgICAgICAgey8qIDwvU2Nyb2xsQW5pbWF0aW9uPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgey8qIER5bmFtaWMgU2VjdGlvbnMgKi99XHJcblxyXG4gICAgICAgICAgICB7c2tpbGxzICYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZXMnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zyb250ZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RDYXJkRmxpcCBpc0ZsaXBwZWQ9e2lzRmxpcHBlZH0gZmxpcERpcmVjdGlvbj0naG9yaXpvbnRhbCcgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgIGNsYXNzTmFtZT17J3N1bmZsb3dlcid9IHNyYz0nLi4vc3RhdGljL3RyZWVUb3BGaW5hbGwucG5nJyBhbHQ9J1N1bmZsb3dlciBJbWFnZScga2V5PXtmcm9udGVuZCA/IG51bGwgOiAnZnJvbnQnfSBvbkNsaWNrPXtjbGlja01lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndmlldyd9IG9uQ2xpY2s9e2NsaWNrTWV9IGtleT0nYmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJza2lsbHMtdGl0bGVcIj5Gcm9udCBFbmQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaWNvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBHaXQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpR2l0IHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnI0YzNEYyOSd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBHaXRIdWIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpR2l0aHViQmFkZ2Ugc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjMTgxNjE2J319IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBIVE1MNSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlIdG1sNSBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNFNTREMjYnfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIENTUzMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpQ3NzMyBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMzRDhGQzYnfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIExFU1MgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpTGVzcyBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMyQTREODAnfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNBU1MgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpU2FzcyBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNDQzY2OTknfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJvb3RzdHJhcCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlCb290c3RyYXAgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjNUI0MjgyJ319IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBKYXZhU2NyaXB0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaUphdmFzY3JpcHQxIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnI0YwREI0Rid9fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUmVhY3QgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpUmVhY3Qgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjNjFEQUZCJ319IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBSZWR1eCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi4vc3RhdGljL3JlZHV4LnBuZycgYWx0PSdSZWR1eCBJY29uJyBzdHlsZT17eyB3aWR0aDogJzc1cHgnLCBtYXhIZWlnaHQ6ICc3MHB4JywgbWFyZ2luOiAnMSUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE5leHQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4uL3N0YXRpYy9uZXh0LXRleHQucG5nJyBhbHQ9J05leHQgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc3NXB4JywgbWF4SGVpZ2h0OiAnNzVweCcsIG1hcmdpbkxlZnQ6ICcxJScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3RDYXJkRmxpcD4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tlbmQnIG9uQ2xpY2s9eygpID0+IHNldEJhY2tlbmQoIWJhY2tlbmQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RDYXJkRmxpcCBpc0ZsaXBwZWQ9e2lzRmxpcHBlZDJ9IGZsaXBEaXJlY3Rpb249J2hvcml6b250YWwnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3Jvb3RzJyBzcmM9Jy4uL3N0YXRpYy90cmVlUm9vdHNGaW5hbC5wbmcnIGFsdD0nUm9vdHMgSW1hZ2UnIGtleT17YmFja2VuZCA/IG51bGwgOiAnZnJvbnQnfSBvbkNsaWNrPXtjbGlja01lQmFja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd2aWV3J30gb25DbGljaz17Y2xpY2tNZUJhY2t9IGtleT0nYmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJhY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nc2tpbGxzLXRpdGxlJz5CYWNrIEVuZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaWNvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogR2l0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlHaXQgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjRjM0RjI5J319IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogR2l0SHViICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlHaXRodWJCYWRnZSBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMxODE2MTYnfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBOb2RlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlOb2RlanNTbWFsbCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyM4M0NEMjknfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFeHByZXNzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi4vc3RhdGljL2V4cHJlc3NGaW5hbC5wbmcnIGFsdD0nTmV4dCBJY29uJyBzdHlsZT17eyB3aWR0aDogJzc1cHgnLCBoZWlnaHQ6ICc3NXB4JywgbWFyZ2luVG9wOiAnMiUnLCBwYWRkaW5nTGVmdDogJzIlJyB9fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE15U1FMICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlNeXNxbCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMwMDYxOEEnfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQb3N0Z3JlU1FMICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlQb3N0Z3Jlc3FsIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzMzNjc5MSd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdENhcmRGbGlwPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlcyc+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIGVmZmljaWVudCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nLi4vc3RhdGljL0RhcmtCYWRnZS5wbmcnIHdpZHRoPXsxNzV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGFydExpbmUgc3R5bGU9e3sgY29sb3I6ICcjRTVFN0U2JywgZm9udFNpemU6ICc2cmVtJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJyMwMDBjMWYnLCBmb250V2VpZ2h0OiAnYm9sZGVyJ319PkVmZmljaWVudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgIHN0eWxlPXt7IGNvbG9yOiAnIzE0MTMwMSd9fT5tYXhpbXVtIHByb2R1Y3Rpdml0eTsgd2VsbC1vcmdhbml6ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogcmVzcG9uc2l2ZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZFBob25lbGluayBzdHlsZT17eyBjb2xvcjogJyNFNUU3RTYnLCBmb250U2l6ZTogJzZyZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJyMwMDBjMWYnLCBmb250V2VpZ2h0OiAnYm9sZGVyJ319PlJlc3BvbnNpdmU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnIzE0MTMwMSd9fT5vcHRpbWl6ZWQgbGF5b3V0cyBmb3IgYWxsIGRldmljZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogY3JlYXRpdmUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2Utc3R5bGVzJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWRMaWdodGJ1bGJPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnI0U1RTdFNicsIGZvbnRTaXplOiAnNnJlbScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjMDAwYzFmJywgZm9udFdlaWdodDogJ2JvbGRlcid9fT5DcmVhdGl2ZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMTQxMzAxJ319PmhpZ2hlc3QgcXVhbGl0eSBzb2x1dGlvbnMgcHJvdmlkZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogZHluYW1pYyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMgZHluYW1pYyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhR2xvYmVBbWVyaWNhcyBzdHlsZT17eyBjb2xvcjogJyNFNUU3RTYnLCBmb250U2l6ZTogJzZyZW0nIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjMDAwYzFmJywgZm9udFdlaWdodDogJ2JvbGRlcid9fT5EeW5hbWljPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMxNDEzMDEnfX0+cmVmbGVjdHMgcmVhbC10aW1lIGNoYW5nZXMgaW4gdmFsdWVzIHdpdGggYWN0aXZpdHkuICBCdWlsdCB3aXRoIERSWSwgcmV1c2FibGUgY29tcG9uZW50cy4gPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+fVxyXG5cclxuICAgICAgICAgICAge3BvcnRmb2xpbyAmJlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2RhcmsgPyBudWxsIDogJ2xpZ2h0LXRleHQnfT5QT1JURk9MSU8gQ09OVEVOVCBURVNUIC0gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9ydW0gcXVpYnVzZGFtIHF1aWRlbSBtb2RpLCBjb21tb2RpIGFsaXF1YW0gZnVnYSBxdWFlcmF0LCBpcHN1bSBvcHRpbyBtb2xlc3RpYXMgZG9sb3JlcywgYXV0IGFjY3VzYW50aXVtIGNvbnNlcXVhdHVyIGV4cGVkaXRhLiBWZXJpdGF0aXMsIHJlY3VzYW5kYWUgZG9sb3JlLiBBY2N1c2FtdXMsIGVycm9yIGRlbGVjdHVzIVxyXG4gICAgICAgICAgICBDb21tb2RpIG1hZ25pIHZvbHVwdGFzIG5lbW8gZWFydW0gcGVyZmVyZW5kaXMgdm9sdXB0YXR1bSBvZGlvIGRpZ25pc3NpbW9zIG1vbGVzdGlhZSBlc3NlIGF1dC4gTmFtIHF1YWUgYmVhdGFlIG1hZ25hbSBlYSwgdm9sdXB0YXRpYnVzIG1pbnVzIGVuaW0gdml0YWUgY3VscGEsIGN1bSBleHBlZGl0YSBmdWdhIG5lc2NpdW50IG51bGxhLCB1dCBzaW1pbGlxdWUgY29ycnVwdGk/XHJcbiAgICAgICAgICAgIEN1bXF1ZSBxdWlzIGlsbG8gZWl1cyBkb2xvcmVtcXVlIGFjY3VzYW11cyBhbGlxdWlkIGFyY2hpdGVjdG8hIFBhcmlhdHVyIHByb3ZpZGVudCBjdW1xdWUgbWluaW1hIGNvcnBvcmlzIG1haW9yZXMuIEFzcGVyaW9yZXMsIGRlYml0aXMgZXZlbmlldC4gUXVhZXJhdCwgcG9ycm8gdGVuZXR1ciBxdWFtIHJhdGlvbmUgc3VzY2lwaXQgbm9uIHZvbHVwdGF0ZXMgY3VwaWRpdGF0ZSB0b3RhbSBxdWlzIGNvcnJ1cHRpIG9mZmljaWlzIVxyXG4gICAgICAgICAgICBBbGlxdWFtIGRpY3RhIGF0IG1vbGVzdGlhcyBkaWduaXNzaW1vcywgaWxsdW0gYWNjdXNhbXVzLCB2aXRhZSBxdWFlcmF0IGNvcnJ1cHRpIHBlcmZlcmVuZGlzIGFkIG9iY2FlY2F0aSBoaWMgY3VscGEgaXVzdG8gdGVtcG9yYSBtYWduaSBzaXQgaW5jaWR1bnQgbWluaW1hIHRlbXBvcmUgYXRxdWUgZHVjaW11cyBuZXF1ZSBxdWFlLiBOaXNpIGV4ZXJjaXRhdGlvbmVtIHByb3ZpZGVudCBibGFuZGl0aWlzIVxyXG4gICAgICAgICAgICBFcnJvciBhdXRlbSBvZmZpY2lhIHRlbmV0dXIgc29sdXRhIG51bGxhIGlsbHVtLCB2ZXJvIGNvbW1vZGkgcmVjdXNhbmRhZSwgZnVnYSBub2JpcyBuYW0gZmFjZXJlIGl0YXF1ZSBoYXJ1bSBvZmZpY2lpcyEgUGVyZmVyZW5kaXMgaXBzYW0gZXNzZSBsYWJvcmlvc2FtIG5lcXVlIGVuaW0gcXVvZCBzaXQuIENvbnNlcXV1bnR1ciBtYWlvcmVzIHNvbHV0YSBvYmNhZWNhdGkgYXNwZXJuYXR1cj9cclxuICAgICAgICAgICAgQXNwZXJuYXR1ciwgbmloaWwgb2ZmaWNpYSEgRXhwZWRpdGEgZG9sb3IgbmVtbyBpdGFxdWUgcmF0aW9uZSBhY2N1c2FudGl1bSB1bmRlIHZlbCBhcmNoaXRlY3RvIHF1b2QgYWNjdXNhbXVzLCB0ZW5ldHVyIGJsYW5kaXRpaXMgZXNzZSBsaWJlcm8gbGFib3J1bSBhbWV0LCBmdWdhIGFkaXBpc2NpLiBSZWljaWVuZGlzIGxhYm9ydW0gbmFtIGVhcXVlIG5vbiBlYXJ1bSBxdWlzIGZhY2VyZS5cclxuICAgICAgICAgICAgRnVnaXQgYWNjdXNhbXVzIGFwZXJpYW0gbGFib3JlIHF1aXNxdWFtIGF1dC4gRG9sb3IgcmVpY2llbmRpcyBhbGlxdWFtIHF1b2QgZnVnaXQgcG9zc2ltdXMgZWFydW0gbmVxdWUsIGl1c3RvIHJhdGlvbmUgZXhwZWRpdGE/IFJlaWNpZW5kaXMgcXVpIHNhcGllbnRlIHBvc3NpbXVzIG5vc3RydW0gc2FlcGUgc2l0IGRpc3RpbmN0aW8gcGFyaWF0dXIgYXV0ZW0sIGNvbW1vZGkgaXBzYSBlYXJ1bS5cclxuICAgICAgICAgICAgT2RpdCByZXBlbGxhdCBpbiBtb2RpIHRlbXBvcmEhIFF1aWEgcXVpc3F1YW0gcmVwZWxsZW5kdXMgc2VkIHF1YXNpIHNpdCBzb2x1dGEgc2ludCBtYWduYW0gcXVhZSBtb2RpIHJlaWNpZW5kaXMgcGFyaWF0dXIgbmlzaSBmdWdhIGN1bHBhLCBzYXBpZW50ZSB2ZWwgdGVtcG9yYSBzaW1pbGlxdWU/IFF1b3Mgb2ZmaWNpaXMgcG9zc2ltdXMgZGlnbmlzc2ltb3MgYWRpcGlzY2kuXHJcbiAgICAgICAgICAgIEV2ZW5pZXQgZXhwbGljYWJvIHZvbHVwdGF0ZSBlbGlnZW5kaSBkb2xvcmVtcXVlIGV0IHN1c2NpcGl0LCByZXJ1bSwgb2ZmaWNpaXMgbmVzY2l1bnQgc2FwaWVudGUgaXBzYSBtYWduaSBudW1xdWFtIHF1YW0gYWIgcmVjdXNhbmRhZSBoYXJ1bSBpbmNpZHVudCBjdW1xdWUgZXJyb3Igdm9sdXB0YXRlbSB0ZW1wb3JpYnVzIHF1YWUgbW9kaSwgbnVsbGEgZXg/IFJhdGlvbmUsIG1vZGkgY29uc2VxdXVudHVyIVxyXG4gICAgICAgICAgICBJdGFxdWUgZXhwZWRpdGEgdmVsIGRvbG9yZSBleGVyY2l0YXRpb25lbSBvZGlvIG9mZmljaWEsIGVvcyBmdWdpYXQgb2JjYWVjYXRpIGltcGVkaXQgYWRpcGlzY2kgc2ludCByZWN1c2FuZGFlIGNvbnNlcXV1bnR1ciBwb3NzaW11cyBjb25zZWN0ZXR1ciBzdW50IG5pc2kgcmVwZWxsYXQgdm9sdXB0YXRlcyByZXBlbGxlbmR1cyBxdWlzcXVhbSBlc3NlIGFzcGVyaW9yZXMgbWludXMgZWEuIEZhY2lsaXMsIGJlYXRhZSBvcHRpby5cclxuICAgICAgICAgICAgQ29ycG9yaXMgZXNzZSBtb2RpIGxhYm9ydW0gZG9sb3J1bSwgbmlzaSBhdXRlbSBwYXJpYXR1ciBtb2xsaXRpYS4gSWxsbywgYWNjdXNhbXVzIHNlZCBwcmFlc2VudGl1bSBhdHF1ZSBlb3MgbWFnbmkuIEhhcnVtIGF1dCByZXBlbGxlbmR1cyBjb25zZXF1YXR1ciBsYWJvcnVtLCBwcmFlc2VudGl1bSBjb25zZXF1dW50dXIgdm9sdXB0YXRlcyBkb2xvcmVtcXVlIHByb3ZpZGVudCBuaWhpbCBlYXJ1bSB0ZW1wb3JlIGVzdCFcclxuICAgICAgICAgICAgSXVzdG8gcG9ycm8gdWxsYW0gbmVjZXNzaXRhdGlidXMgZGVsZW5pdGkgb2ZmaWNpYSByZXJ1bSBpZCBkaXN0aW5jdGlvISBOb24sIHZlcml0YXRpcyBpcHNhIGNvbnNlY3RldHVyIGFyY2hpdGVjdG8gaWxsbyBwbGFjZWF0IGV0IGVycm9yIHZlbCBpbnZlbnRvcmU/IE1vbGxpdGlhIGRlc2VydW50IG1pbnVzIHZvbHVwdGF0ZXMgcHJhZXNlbnRpdW0gYW5pbWkuIFJlcnVtIHByb3ZpZGVudCBzdW50IHF1YXMhXHJcbiAgICAgICAgICAgIExhYm9ydW0gcXVpYnVzZGFtIGl1cmUgdG90YW0gZXhwbGljYWJvIGN1bHBhIHRlbXBvcmlidXMsIG9wdGlvIHZvbHVwdGF0ZW0gbmVtbyBhdCBlb3Mgdm9sdXB0YXMgbmVjZXNzaXRhdGlidXMgZHVjaW11cyBxdWkgY29uc2VxdWF0dXIgcXVhbSBuYXR1cyBkb2xvciBleCwgbmFtIGN1bXF1ZS4gTW9kaSBvcHRpbyBhdXRlbSBhZGlwaXNjaSBpbGxvLCBjb25zZWN0ZXR1ciBwcm92aWRlbnQuXHJcbiAgICAgICAgICAgIEVuaW0gc3VzY2lwaXQgY3VtcXVlIGFtZXQgYmxhbmRpdGlpcyB2ZXJpdGF0aXMgc2VkIHZlbmlhbSBlYXJ1bSBjb25zZWN0ZXR1ciBuZXF1ZSBtaW5pbWEgcXVpc3F1YW0gZGVsZW5pdGkgY3VscGEgdXQgaXVyZSBpcHNhLCBuZWNlc3NpdGF0aWJ1cyBkaXN0aW5jdGlvIHJlY3VzYW5kYWUgY29tbW9kaSB1bGxhbSEgTGFib3Jpb3NhbSBtYXhpbWUgc3VzY2lwaXQgaGljIGluY2lkdW50IHRlbXBvcmEgaGFydW0uXHJcbiAgICAgICAgICAgIE1pbnVzIGFyY2hpdGVjdG8gdmVyaXRhdGlzIGlwc3VtIGluIGVvcyByZW0gdmVsaXQgc2VxdWk/IElsbG8gY29ycG9yaXMgZGlzdGluY3RpbyBxdWlzcXVhbSBpcHNhIHZlbGl0IG1hZ25hbSwgZXQgbWF4aW1lIGFkIHRlbXBvcmUgc29sdXRhIHBhcmlhdHVyIGludmVudG9yZSB2b2x1cHRhcyBpbGx1bSB0b3RhbSByZXJ1bSB2b2x1cHRhdGlidXMgcXVpYSBhdHF1ZT9cclxuICAgICAgICAgICAgUXVpIGN1cGlkaXRhdGUgZWEgbW9sZXN0aWFzIGlkIHF1aXNxdWFtIG51bGxhIGEhIFVsbGFtIG51bGxhIG1vbGVzdGlhZSBhY2N1c2FudGl1bSBhbmltaSBvcHRpbyBpbiBkb2xvcnVtIG9iY2FlY2F0aSwgcGVyZmVyZW5kaXMgYmVhdGFlIGRvbG9yZXMgZXN0IGN1bHBhIGRvbG9yZW1xdWUgdW5kZSBpdXN0byBuZW1vIHNhZXBlIG5lcXVlIHJlcHVkaWFuZGFlIGlzdGUuXHJcbiAgICAgICAgICAgIEV2ZW5pZXQgZG9sb3J1bSBpbmNpZHVudCBvYmNhZWNhdGkgaXBzYSB2ZXJvIGVycm9yIG9mZmljaWlzIGRvbG9yZW1xdWUgZGlzdGluY3Rpbywgdm9sdXB0YXMgYXRxdWUgdG90YW0gb2ZmaWNpYSBsYWJvcmUgdmVyaXRhdGlzIG1vbGxpdGlhIG5vc3RydW0gdXQgdGVtcG9yaWJ1cyB2b2x1cHRhdGVzIHBsYWNlYXQgc29sdXRhLCB1bmRlIGhpYyBjb3JydXB0aSBuYXR1cyBwYXJpYXR1ciBxdWFzLiBBbWV0IVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgICAgIHtyZXN1bWUgJiZcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtkYXJrID8gbnVsbCA6ICdsaWdodC10ZXh0J30+UkVTVU1FIENPTlRFTlQgVEVTVCAtIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvcnVtIHF1aWJ1c2RhbSBxdWlkZW0gbW9kaSwgY29tbW9kaSBhbGlxdWFtIGZ1Z2EgcXVhZXJhdCwgaXBzdW0gb3B0aW8gbW9sZXN0aWFzIGRvbG9yZXMsIGF1dCBhY2N1c2FudGl1bSBjb25zZXF1YXR1ciBleHBlZGl0YS4gVmVyaXRhdGlzLCByZWN1c2FuZGFlIGRvbG9yZS4gQWNjdXNhbXVzLCBlcnJvciBkZWxlY3R1cyFcclxuICAgICAgICAgICAgQ29tbW9kaSBtYWduaSB2b2x1cHRhcyBuZW1vIGVhcnVtIHBlcmZlcmVuZGlzIHZvbHVwdGF0dW0gb2RpbyBkaWduaXNzaW1vcyBtb2xlc3RpYWUgZXNzZSBhdXQuIE5hbSBxdWFlIGJlYXRhZSBtYWduYW0gZWEsIHZvbHVwdGF0aWJ1cyBtaW51cyBlbmltIHZpdGFlIGN1bHBhLCBjdW0gZXhwZWRpdGEgZnVnYSBuZXNjaXVudCBudWxsYSwgdXQgc2ltaWxpcXVlIGNvcnJ1cHRpP1xyXG4gICAgICAgICAgICBDdW1xdWUgcXVpcyBpbGxvIGVpdXMgZG9sb3JlbXF1ZSBhY2N1c2FtdXMgYWxpcXVpZCBhcmNoaXRlY3RvISBQYXJpYXR1ciBwcm92aWRlbnQgY3VtcXVlIG1pbmltYSBjb3Jwb3JpcyBtYWlvcmVzLiBBc3BlcmlvcmVzLCBkZWJpdGlzIGV2ZW5pZXQuIFF1YWVyYXQsIHBvcnJvIHRlbmV0dXIgcXVhbSByYXRpb25lIHN1c2NpcGl0IG5vbiB2b2x1cHRhdGVzIGN1cGlkaXRhdGUgdG90YW0gcXVpcyBjb3JydXB0aSBvZmZpY2lpcyFcclxuICAgICAgICAgICAgQWxpcXVhbSBkaWN0YSBhdCBtb2xlc3RpYXMgZGlnbmlzc2ltb3MsIGlsbHVtIGFjY3VzYW11cywgdml0YWUgcXVhZXJhdCBjb3JydXB0aSBwZXJmZXJlbmRpcyBhZCBvYmNhZWNhdGkgaGljIGN1bHBhIGl1c3RvIHRlbXBvcmEgbWFnbmkgc2l0IGluY2lkdW50IG1pbmltYSB0ZW1wb3JlIGF0cXVlIGR1Y2ltdXMgbmVxdWUgcXVhZS4gTmlzaSBleGVyY2l0YXRpb25lbSBwcm92aWRlbnQgYmxhbmRpdGlpcyFcclxuICAgICAgICAgICAgRXJyb3IgYXV0ZW0gb2ZmaWNpYSB0ZW5ldHVyIHNvbHV0YSBudWxsYSBpbGx1bSwgdmVybyBjb21tb2RpIHJlY3VzYW5kYWUsIGZ1Z2Egbm9iaXMgbmFtIGZhY2VyZSBpdGFxdWUgaGFydW0gb2ZmaWNpaXMhIFBlcmZlcmVuZGlzIGlwc2FtIGVzc2UgbGFib3Jpb3NhbSBuZXF1ZSBlbmltIHF1b2Qgc2l0LiBDb25zZXF1dW50dXIgbWFpb3JlcyBzb2x1dGEgb2JjYWVjYXRpIGFzcGVybmF0dXI/XHJcbiAgICAgICAgICAgIEFzcGVybmF0dXIsIG5paGlsIG9mZmljaWEhIEV4cGVkaXRhIGRvbG9yIG5lbW8gaXRhcXVlIHJhdGlvbmUgYWNjdXNhbnRpdW0gdW5kZSB2ZWwgYXJjaGl0ZWN0byBxdW9kIGFjY3VzYW11cywgdGVuZXR1ciBibGFuZGl0aWlzIGVzc2UgbGliZXJvIGxhYm9ydW0gYW1ldCwgZnVnYSBhZGlwaXNjaS4gUmVpY2llbmRpcyBsYWJvcnVtIG5hbSBlYXF1ZSBub24gZWFydW0gcXVpcyBmYWNlcmUuXHJcbiAgICAgICAgICAgIEZ1Z2l0IGFjY3VzYW11cyBhcGVyaWFtIGxhYm9yZSBxdWlzcXVhbSBhdXQuIERvbG9yIHJlaWNpZW5kaXMgYWxpcXVhbSBxdW9kIGZ1Z2l0IHBvc3NpbXVzIGVhcnVtIG5lcXVlLCBpdXN0byByYXRpb25lIGV4cGVkaXRhPyBSZWljaWVuZGlzIHF1aSBzYXBpZW50ZSBwb3NzaW11cyBub3N0cnVtIHNhZXBlIHNpdCBkaXN0aW5jdGlvIHBhcmlhdHVyIGF1dGVtLCBjb21tb2RpIGlwc2EgZWFydW0uXHJcbiAgICAgICAgICAgIE9kaXQgcmVwZWxsYXQgaW4gbW9kaSB0ZW1wb3JhISBRdWlhIHF1aXNxdWFtIHJlcGVsbGVuZHVzIHNlZCBxdWFzaSBzaXQgc29sdXRhIHNpbnQgbWFnbmFtIHF1YWUgbW9kaSByZWljaWVuZGlzIHBhcmlhdHVyIG5pc2kgZnVnYSBjdWxwYSwgc2FwaWVudGUgdmVsIHRlbXBvcmEgc2ltaWxpcXVlPyBRdW9zIG9mZmljaWlzIHBvc3NpbXVzIGRpZ25pc3NpbW9zIGFkaXBpc2NpLlxyXG4gICAgICAgICAgICBFdmVuaWV0IGV4cGxpY2FibyB2b2x1cHRhdGUgZWxpZ2VuZGkgZG9sb3JlbXF1ZSBldCBzdXNjaXBpdCwgcmVydW0sIG9mZmljaWlzIG5lc2NpdW50IHNhcGllbnRlIGlwc2EgbWFnbmkgbnVtcXVhbSBxdWFtIGFiIHJlY3VzYW5kYWUgaGFydW0gaW5jaWR1bnQgY3VtcXVlIGVycm9yIHZvbHVwdGF0ZW0gdGVtcG9yaWJ1cyBxdWFlIG1vZGksIG51bGxhIGV4PyBSYXRpb25lLCBtb2RpIGNvbnNlcXV1bnR1ciFcclxuICAgICAgICAgICAgSXRhcXVlIGV4cGVkaXRhIHZlbCBkb2xvcmUgZXhlcmNpdGF0aW9uZW0gb2RpbyBvZmZpY2lhLCBlb3MgZnVnaWF0IG9iY2FlY2F0aSBpbXBlZGl0IGFkaXBpc2NpIHNpbnQgcmVjdXNhbmRhZSBjb25zZXF1dW50dXIgcG9zc2ltdXMgY29uc2VjdGV0dXIgc3VudCBuaXNpIHJlcGVsbGF0IHZvbHVwdGF0ZXMgcmVwZWxsZW5kdXMgcXVpc3F1YW0gZXNzZSBhc3BlcmlvcmVzIG1pbnVzIGVhLiBGYWNpbGlzLCBiZWF0YWUgb3B0aW8uXHJcbiAgICAgICAgICAgIENvcnBvcmlzIGVzc2UgbW9kaSBsYWJvcnVtIGRvbG9ydW0sIG5pc2kgYXV0ZW0gcGFyaWF0dXIgbW9sbGl0aWEuIElsbG8sIGFjY3VzYW11cyBzZWQgcHJhZXNlbnRpdW0gYXRxdWUgZW9zIG1hZ25pLiBIYXJ1bSBhdXQgcmVwZWxsZW5kdXMgY29uc2VxdWF0dXIgbGFib3J1bSwgcHJhZXNlbnRpdW0gY29uc2VxdXVudHVyIHZvbHVwdGF0ZXMgZG9sb3JlbXF1ZSBwcm92aWRlbnQgbmloaWwgZWFydW0gdGVtcG9yZSBlc3QhXHJcbiAgICAgICAgICAgIEl1c3RvIHBvcnJvIHVsbGFtIG5lY2Vzc2l0YXRpYnVzIGRlbGVuaXRpIG9mZmljaWEgcmVydW0gaWQgZGlzdGluY3RpbyEgTm9uLCB2ZXJpdGF0aXMgaXBzYSBjb25zZWN0ZXR1ciBhcmNoaXRlY3RvIGlsbG8gcGxhY2VhdCBldCBlcnJvciB2ZWwgaW52ZW50b3JlPyBNb2xsaXRpYSBkZXNlcnVudCBtaW51cyB2b2x1cHRhdGVzIHByYWVzZW50aXVtIGFuaW1pLiBSZXJ1bSBwcm92aWRlbnQgc3VudCBxdWFzIVxyXG4gICAgICAgICAgICBMYWJvcnVtIHF1aWJ1c2RhbSBpdXJlIHRvdGFtIGV4cGxpY2FibyBjdWxwYSB0ZW1wb3JpYnVzLCBvcHRpbyB2b2x1cHRhdGVtIG5lbW8gYXQgZW9zIHZvbHVwdGFzIG5lY2Vzc2l0YXRpYnVzIGR1Y2ltdXMgcXVpIGNvbnNlcXVhdHVyIHF1YW0gbmF0dXMgZG9sb3IgZXgsIG5hbSBjdW1xdWUuIE1vZGkgb3B0aW8gYXV0ZW0gYWRpcGlzY2kgaWxsbywgY29uc2VjdGV0dXIgcHJvdmlkZW50LlxyXG4gICAgICAgICAgICBFbmltIHN1c2NpcGl0IGN1bXF1ZSBhbWV0IGJsYW5kaXRpaXMgdmVyaXRhdGlzIHNlZCB2ZW5pYW0gZWFydW0gY29uc2VjdGV0dXIgbmVxdWUgbWluaW1hIHF1aXNxdWFtIGRlbGVuaXRpIGN1bHBhIHV0IGl1cmUgaXBzYSwgbmVjZXNzaXRhdGlidXMgZGlzdGluY3RpbyByZWN1c2FuZGFlIGNvbW1vZGkgdWxsYW0hIExhYm9yaW9zYW0gbWF4aW1lIHN1c2NpcGl0IGhpYyBpbmNpZHVudCB0ZW1wb3JhIGhhcnVtLlxyXG4gICAgICAgICAgICBNaW51cyBhcmNoaXRlY3RvIHZlcml0YXRpcyBpcHN1bSBpbiBlb3MgcmVtIHZlbGl0IHNlcXVpPyBJbGxvIGNvcnBvcmlzIGRpc3RpbmN0aW8gcXVpc3F1YW0gaXBzYSB2ZWxpdCBtYWduYW0sIGV0IG1heGltZSBhZCB0ZW1wb3JlIHNvbHV0YSBwYXJpYXR1ciBpbnZlbnRvcmUgdm9sdXB0YXMgaWxsdW0gdG90YW0gcmVydW0gdm9sdXB0YXRpYnVzIHF1aWEgYXRxdWU/XHJcbiAgICAgICAgICAgIFF1aSBjdXBpZGl0YXRlIGVhIG1vbGVzdGlhcyBpZCBxdWlzcXVhbSBudWxsYSBhISBVbGxhbSBudWxsYSBtb2xlc3RpYWUgYWNjdXNhbnRpdW0gYW5pbWkgb3B0aW8gaW4gZG9sb3J1bSBvYmNhZWNhdGksIHBlcmZlcmVuZGlzIGJlYXRhZSBkb2xvcmVzIGVzdCBjdWxwYSBkb2xvcmVtcXVlIHVuZGUgaXVzdG8gbmVtbyBzYWVwZSBuZXF1ZSByZXB1ZGlhbmRhZSBpc3RlLlxyXG4gICAgICAgICAgICBFdmVuaWV0IGRvbG9ydW0gaW5jaWR1bnQgb2JjYWVjYXRpIGlwc2EgdmVybyBlcnJvciBvZmZpY2lpcyBkb2xvcmVtcXVlIGRpc3RpbmN0aW8sIHZvbHVwdGFzIGF0cXVlIHRvdGFtIG9mZmljaWEgbGFib3JlIHZlcml0YXRpcyBtb2xsaXRpYSBub3N0cnVtIHV0IHRlbXBvcmlidXMgdm9sdXB0YXRlcyBwbGFjZWF0IHNvbHV0YSwgdW5kZSBoaWMgY29ycnVwdGkgbmF0dXMgcGFyaWF0dXIgcXVhcy4gQW1ldCFcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8Lz59XHJcblxyXG4gICAgICAgICAgICB7Y29udGFjdCAmJlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2RhcmsgPyBudWxsIDogJ2xpZ2h0LXRleHQnfT5DT05UQUNUIENPTlRFTlQgVEVTVCAtIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvcnVtIHF1aWJ1c2RhbSBxdWlkZW0gbW9kaSwgY29tbW9kaSBhbGlxdWFtIGZ1Z2EgcXVhZXJhdCwgaXBzdW0gb3B0aW8gbW9sZXN0aWFzIGRvbG9yZXMsIGF1dCBhY2N1c2FudGl1bSBjb25zZXF1YXR1ciBleHBlZGl0YS4gVmVyaXRhdGlzLCByZWN1c2FuZGFlIGRvbG9yZS4gQWNjdXNhbXVzLCBlcnJvciBkZWxlY3R1cyFcclxuICAgICAgICAgICAgQ29tbW9kaSBtYWduaSB2b2x1cHRhcyBuZW1vIGVhcnVtIHBlcmZlcmVuZGlzIHZvbHVwdGF0dW0gb2RpbyBkaWduaXNzaW1vcyBtb2xlc3RpYWUgZXNzZSBhdXQuIE5hbSBxdWFlIGJlYXRhZSBtYWduYW0gZWEsIHZvbHVwdGF0aWJ1cyBtaW51cyBlbmltIHZpdGFlIGN1bHBhLCBjdW0gZXhwZWRpdGEgZnVnYSBuZXNjaXVudCBudWxsYSwgdXQgc2ltaWxpcXVlIGNvcnJ1cHRpP1xyXG4gICAgICAgICAgICBDdW1xdWUgcXVpcyBpbGxvIGVpdXMgZG9sb3JlbXF1ZSBhY2N1c2FtdXMgYWxpcXVpZCBhcmNoaXRlY3RvISBQYXJpYXR1ciBwcm92aWRlbnQgY3VtcXVlIG1pbmltYSBjb3Jwb3JpcyBtYWlvcmVzLiBBc3BlcmlvcmVzLCBkZWJpdGlzIGV2ZW5pZXQuIFF1YWVyYXQsIHBvcnJvIHRlbmV0dXIgcXVhbSByYXRpb25lIHN1c2NpcGl0IG5vbiB2b2x1cHRhdGVzIGN1cGlkaXRhdGUgdG90YW0gcXVpcyBjb3JydXB0aSBvZmZpY2lpcyFcclxuICAgICAgICAgICAgQWxpcXVhbSBkaWN0YSBhdCBtb2xlc3RpYXMgZGlnbmlzc2ltb3MsIGlsbHVtIGFjY3VzYW11cywgdml0YWUgcXVhZXJhdCBjb3JydXB0aSBwZXJmZXJlbmRpcyBhZCBvYmNhZWNhdGkgaGljIGN1bHBhIGl1c3RvIHRlbXBvcmEgbWFnbmkgc2l0IGluY2lkdW50IG1pbmltYSB0ZW1wb3JlIGF0cXVlIGR1Y2ltdXMgbmVxdWUgcXVhZS4gTmlzaSBleGVyY2l0YXRpb25lbSBwcm92aWRlbnQgYmxhbmRpdGlpcyFcclxuICAgICAgICAgICAgRXJyb3IgYXV0ZW0gb2ZmaWNpYSB0ZW5ldHVyIHNvbHV0YSBudWxsYSBpbGx1bSwgdmVybyBjb21tb2RpIHJlY3VzYW5kYWUsIGZ1Z2Egbm9iaXMgbmFtIGZhY2VyZSBpdGFxdWUgaGFydW0gb2ZmaWNpaXMhIFBlcmZlcmVuZGlzIGlwc2FtIGVzc2UgbGFib3Jpb3NhbSBuZXF1ZSBlbmltIHF1b2Qgc2l0LiBDb25zZXF1dW50dXIgbWFpb3JlcyBzb2x1dGEgb2JjYWVjYXRpIGFzcGVybmF0dXI/XHJcbiAgICAgICAgICAgIEFzcGVybmF0dXIsIG5paGlsIG9mZmljaWEhIEV4cGVkaXRhIGRvbG9yIG5lbW8gaXRhcXVlIHJhdGlvbmUgYWNjdXNhbnRpdW0gdW5kZSB2ZWwgYXJjaGl0ZWN0byBxdW9kIGFjY3VzYW11cywgdGVuZXR1ciBibGFuZGl0aWlzIGVzc2UgbGliZXJvIGxhYm9ydW0gYW1ldCwgZnVnYSBhZGlwaXNjaS4gUmVpY2llbmRpcyBsYWJvcnVtIG5hbSBlYXF1ZSBub24gZWFydW0gcXVpcyBmYWNlcmUuXHJcbiAgICAgICAgICAgIEZ1Z2l0IGFjY3VzYW11cyBhcGVyaWFtIGxhYm9yZSBxdWlzcXVhbSBhdXQuIERvbG9yIHJlaWNpZW5kaXMgYWxpcXVhbSBxdW9kIGZ1Z2l0IHBvc3NpbXVzIGVhcnVtIG5lcXVlLCBpdXN0byByYXRpb25lIGV4cGVkaXRhPyBSZWljaWVuZGlzIHF1aSBzYXBpZW50ZSBwb3NzaW11cyBub3N0cnVtIHNhZXBlIHNpdCBkaXN0aW5jdGlvIHBhcmlhdHVyIGF1dGVtLCBjb21tb2RpIGlwc2EgZWFydW0uXHJcbiAgICAgICAgICAgIE9kaXQgcmVwZWxsYXQgaW4gbW9kaSB0ZW1wb3JhISBRdWlhIHF1aXNxdWFtIHJlcGVsbGVuZHVzIHNlZCBxdWFzaSBzaXQgc29sdXRhIHNpbnQgbWFnbmFtIHF1YWUgbW9kaSByZWljaWVuZGlzIHBhcmlhdHVyIG5pc2kgZnVnYSBjdWxwYSwgc2FwaWVudGUgdmVsIHRlbXBvcmEgc2ltaWxpcXVlPyBRdW9zIG9mZmljaWlzIHBvc3NpbXVzIGRpZ25pc3NpbW9zIGFkaXBpc2NpLlxyXG4gICAgICAgICAgICBFdmVuaWV0IGV4cGxpY2FibyB2b2x1cHRhdGUgZWxpZ2VuZGkgZG9sb3JlbXF1ZSBldCBzdXNjaXBpdCwgcmVydW0sIG9mZmljaWlzIG5lc2NpdW50IHNhcGllbnRlIGlwc2EgbWFnbmkgbnVtcXVhbSBxdWFtIGFiIHJlY3VzYW5kYWUgaGFydW0gaW5jaWR1bnQgY3VtcXVlIGVycm9yIHZvbHVwdGF0ZW0gdGVtcG9yaWJ1cyBxdWFlIG1vZGksIG51bGxhIGV4PyBSYXRpb25lLCBtb2RpIGNvbnNlcXV1bnR1ciFcclxuICAgICAgICAgICAgSXRhcXVlIGV4cGVkaXRhIHZlbCBkb2xvcmUgZXhlcmNpdGF0aW9uZW0gb2RpbyBvZmZpY2lhLCBlb3MgZnVnaWF0IG9iY2FlY2F0aSBpbXBlZGl0IGFkaXBpc2NpIHNpbnQgcmVjdXNhbmRhZSBjb25zZXF1dW50dXIgcG9zc2ltdXMgY29uc2VjdGV0dXIgc3VudCBuaXNpIHJlcGVsbGF0IHZvbHVwdGF0ZXMgcmVwZWxsZW5kdXMgcXVpc3F1YW0gZXNzZSBhc3BlcmlvcmVzIG1pbnVzIGVhLiBGYWNpbGlzLCBiZWF0YWUgb3B0aW8uXHJcbiAgICAgICAgICAgIENvcnBvcmlzIGVzc2UgbW9kaSBsYWJvcnVtIGRvbG9ydW0sIG5pc2kgYXV0ZW0gcGFyaWF0dXIgbW9sbGl0aWEuIElsbG8sIGFjY3VzYW11cyBzZWQgcHJhZXNlbnRpdW0gYXRxdWUgZW9zIG1hZ25pLiBIYXJ1bSBhdXQgcmVwZWxsZW5kdXMgY29uc2VxdWF0dXIgbGFib3J1bSwgcHJhZXNlbnRpdW0gY29uc2VxdXVudHVyIHZvbHVwdGF0ZXMgZG9sb3JlbXF1ZSBwcm92aWRlbnQgbmloaWwgZWFydW0gdGVtcG9yZSBlc3QhXHJcbiAgICAgICAgICAgIEl1c3RvIHBvcnJvIHVsbGFtIG5lY2Vzc2l0YXRpYnVzIGRlbGVuaXRpIG9mZmljaWEgcmVydW0gaWQgZGlzdGluY3RpbyEgTm9uLCB2ZXJpdGF0aXMgaXBzYSBjb25zZWN0ZXR1ciBhcmNoaXRlY3RvIGlsbG8gcGxhY2VhdCBldCBlcnJvciB2ZWwgaW52ZW50b3JlPyBNb2xsaXRpYSBkZXNlcnVudCBtaW51cyB2b2x1cHRhdGVzIHByYWVzZW50aXVtIGFuaW1pLiBSZXJ1bSBwcm92aWRlbnQgc3VudCBxdWFzIVxyXG4gICAgICAgICAgICBMYWJvcnVtIHF1aWJ1c2RhbSBpdXJlIHRvdGFtIGV4cGxpY2FibyBjdWxwYSB0ZW1wb3JpYnVzLCBvcHRpbyB2b2x1cHRhdGVtIG5lbW8gYXQgZW9zIHZvbHVwdGFzIG5lY2Vzc2l0YXRpYnVzIGR1Y2ltdXMgcXVpIGNvbnNlcXVhdHVyIHF1YW0gbmF0dXMgZG9sb3IgZXgsIG5hbSBjdW1xdWUuIE1vZGkgb3B0aW8gYXV0ZW0gYWRpcGlzY2kgaWxsbywgY29uc2VjdGV0dXIgcHJvdmlkZW50LlxyXG4gICAgICAgICAgICBFbmltIHN1c2NpcGl0IGN1bXF1ZSBhbWV0IGJsYW5kaXRpaXMgdmVyaXRhdGlzIHNlZCB2ZW5pYW0gZWFydW0gY29uc2VjdGV0dXIgbmVxdWUgbWluaW1hIHF1aXNxdWFtIGRlbGVuaXRpIGN1bHBhIHV0IGl1cmUgaXBzYSwgbmVjZXNzaXRhdGlidXMgZGlzdGluY3RpbyByZWN1c2FuZGFlIGNvbW1vZGkgdWxsYW0hIExhYm9yaW9zYW0gbWF4aW1lIHN1c2NpcGl0IGhpYyBpbmNpZHVudCB0ZW1wb3JhIGhhcnVtLlxyXG4gICAgICAgICAgICBNaW51cyBhcmNoaXRlY3RvIHZlcml0YXRpcyBpcHN1bSBpbiBlb3MgcmVtIHZlbGl0IHNlcXVpPyBJbGxvIGNvcnBvcmlzIGRpc3RpbmN0aW8gcXVpc3F1YW0gaXBzYSB2ZWxpdCBtYWduYW0sIGV0IG1heGltZSBhZCB0ZW1wb3JlIHNvbHV0YSBwYXJpYXR1ciBpbnZlbnRvcmUgdm9sdXB0YXMgaWxsdW0gdG90YW0gcmVydW0gdm9sdXB0YXRpYnVzIHF1aWEgYXRxdWU/XHJcbiAgICAgICAgICAgIFF1aSBjdXBpZGl0YXRlIGVhIG1vbGVzdGlhcyBpZCBxdWlzcXVhbSBudWxsYSBhISBVbGxhbSBudWxsYSBtb2xlc3RpYWUgYWNjdXNhbnRpdW0gYW5pbWkgb3B0aW8gaW4gZG9sb3J1bSBvYmNhZWNhdGksIHBlcmZlcmVuZGlzIGJlYXRhZSBkb2xvcmVzIGVzdCBjdWxwYSBkb2xvcmVtcXVlIHVuZGUgaXVzdG8gbmVtbyBzYWVwZSBuZXF1ZSByZXB1ZGlhbmRhZSBpc3RlLlxyXG4gICAgICAgICAgICBFdmVuaWV0IGRvbG9ydW0gaW5jaWR1bnQgb2JjYWVjYXRpIGlwc2EgdmVybyBlcnJvciBvZmZpY2lpcyBkb2xvcmVtcXVlIGRpc3RpbmN0aW8sIHZvbHVwdGFzIGF0cXVlIHRvdGFtIG9mZmljaWEgbGFib3JlIHZlcml0YXRpcyBtb2xsaXRpYSBub3N0cnVtIHV0IHRlbXBvcmlidXMgdm9sdXB0YXRlcyBwbGFjZWF0IHNvbHV0YSwgdW5kZSBoaWMgY29ycnVwdGkgbmF0dXMgcGFyaWF0dXIgcXVhcy4gQW1ldCFcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8VHJhbnNpdGlvbiBpbWFnZT17aW1hZ2V9IGRhcms9e2Rhcmt9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmxpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kYXJrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWFnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnN1bmZsb3dlciwgLnJvb3RzIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogY29sb3JGYWRlT3V0IDJzLCBzaGFwZVNoaWZ0T3V0IDJzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDNweCBzb2xpZCAjMTQxMzAxXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuc3VuZmxvd2VyOmhvdmVyLCAucm9vdHM6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGNvbG9yRmFkZUluIDJzLCBzaGFwZVNoaWZ0SW4gMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAzcHggc29saWQgI2I4MGMwOVxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5za2lsbHMtY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mcm9udGVuZCwgLmJhY2tlbmQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2tpbGxzLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy10aXRsZTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC52aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAxcztcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZiZmJmODtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZS1jZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUtZGFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0U1RTdFNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIC5hcnJvdy11cC1pY29uLWRhcmsge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbi1sZWZ0OiA0OSU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gLmFycm93LXVwLWljb24ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbi1sZWZ0OiA0OSU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBjb2xvckZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDAlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgY29sb3JGYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzaGFwZVNoaWZ0SW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNoYXBlU2hpZnRPdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2F1Z2VzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2F1Z2Utc3R5bGVzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmdhdWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3N0YXRpYy9EYXJrQmx1ZUJhZGdlLnBuZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmR5bmFtaWMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlnaHQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUtc2tpbGxzIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbi8vIGRhcmsgYmxhY2sgIzE0MTMwMVxyXG4vLyBtZWRpdW0gZ3JleSAjYjdiNWIzIl19 */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Section.jsx */"));
} // dark black #141301
// medium grey #b7b5b3

/***/ }),

/***/ "./components/Transition.jsx":
/*!***********************************!*\
  !*** ./components/Transition.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transition; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ti */ "react-icons/ti");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ti__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Transition.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Transition({
  image,
  dark,
  home
}) {
  const scrollToTop = () => {
    react_scroll__WEBPACK_IMPORTED_MODULE_2__["animateScroll"].scrollToTop();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1889797827" + " " + 'image',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    src: image,
    alt: "Transitional Image",
    className: "jsx-1889797827",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), home ? null : __jsx("h5", {
    onClick: scrollToTop,
    className: "jsx-1889797827" + " " + ((dark ? 'arrow-up-icon-dark' : 'arrow-up-icon') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_3__["TiArrowUpThick"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1889797827",
    __self: this
  }, ".image.jsx-1889797827{width:100%;}img.jsx-1889797827{width:100%;}.arrow-up-icon-dark.jsx-1889797827{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#e5e7e6;margin-top:-8%;font-size:4rem;}.arrow-up-icon.jsx-1889797827{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#000c1f;margin-top:-8%;font-size:4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcVHJhbnNpdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J3QixBQUdnQyxBQUdBLEFBR0UsQUFPQSxXQVpqQixBQUdBLCtEQUcyQixBQU9BLG1HQU5ULEFBT0EsY0FOQyxBQU9BLGVBTkEsQUFPQSxlQU5uQixBQVFBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcVHJhbnNpdGlvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xyXG5pbXBvcnQgeyBUaUFycm93VXBUaGljayB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNpdGlvbih7aW1hZ2UsIGRhcmssIGhvbWV9KSB7XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvVG9wKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZSc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD0nVHJhbnNpdGlvbmFsIEltYWdlJyAvPlxyXG4gICAgICAgICAgICAgICAge2hvbWUgPyBudWxsIDogPGg1IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfSBjbGFzc05hbWU9e2RhcmsgPyAnYXJyb3ctdXAtaWNvbi1kYXJrJyA6ICdhcnJvdy11cC1pY29uJ30+PFRpQXJyb3dVcFRoaWNrIC8+PC9oNT4gfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYXJyb3ctdXAtaWNvbi1kYXJrIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC04JTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYXJyb3ctdXAtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtOCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIC5saWdodC1hcnJvdyB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Transition.jsx */"));
}

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.jsx");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section */ "./components/Section.jsx");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home */ "./components/Home.jsx");
/* harmony import */ var _components_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GlobalStyles */ "./components/GlobalStyles.jsx");
/* harmony import */ var _components_GlobalHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GlobalHead */ "./components/GlobalHead.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.jsx");
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\pages\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // import ScrollAnimation from 'react-animate-on-scroll';

function index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_GlobalHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_components_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Skills",
    id: "skills",
    image: '../static/lightToDark.png',
    classNameProp: "light",
    dark: false,
    skills: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Portfolio",
    id: "portfolio",
    image: '../static/darkToLight.png',
    classNameProp: "dark",
    dark: true,
    portfolio: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Resume",
    id: "resume",
    image: '../static/lightToDark.png',
    classNameProp: "light",
    dark: false,
    resume: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Contact",
    id: "contact",
    image: '../static/darkToLight.png',
    classNameProp: "dark",
    dark: true,
    contact: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }));
}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\diamo\Desktop\GitFiles\Portfolio\client\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-animate-on-scroll":
/*!******************************************!*\
  !*** external "react-animate-on-scroll" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-animate-on-scroll");

/***/ }),

/***/ "react-card-flip":
/*!**********************************!*\
  !*** external "react-card-flip" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-card-flip");

/***/ }),

/***/ "react-icons/di":
/*!*********************************!*\
  !*** external "react-icons/di" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/di");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-icons/ti":
/*!*********************************!*\
  !*** external "react-icons/ti" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ti");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map