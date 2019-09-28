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
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ti */ "react-icons/ti");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ti__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\Footer.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const particleOpt = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#000c1f"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
function Footer() {
  const particles = {
    width: "100%",
    marginTop: "-13%",
    backgroundColor: "#e5e7e6",
    zIndex: -3
  };
  const arrowUpIconDark = {
    display: "flex",
    justifyContent: "center",
    color: "#e5e7e6",
    marginTop: "-8%",
    fontSize: "4rem",
    border: "1px solid red",
    zIndex: "9999 !important"
  };

  const scrollToTop = () => {
    react_scroll__WEBPACK_IMPORTED_MODULE_3__["animateScroll"].scrollToTop();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2700964902" + " " + "particles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_2___default.a, {
    params: particleOpt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2700964902",
    __self: this
  }, ".particles.jsx-2700964902{width:100%;margin-top:-13%;background-color:#e5e7e6;z-index:-99;}.arrow-up-icon-dark.jsx-2700964902{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#e5e7e6;margin-top:-8%;font-size:4rem;border:1px solid red;z-index:9999 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxwb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcRm9vdGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSWtCLEFBR3NCLEFBTUUsV0FMRyxnQkFDUyx5QkFDYixZQUNkLFVBR3lCLG1HQUNULGNBQ0MsZUFDQSxlQUNNLHFCQUNHLHdCQUMxQiIsImZpbGUiOiJDOlxcVXNlcnNcXGRpYW1vXFxEZXNrdG9wXFxHaXRGaWxlc1xccG9ydGZvbGlvXFxjbGllbnRcXGNvbXBvbmVudHNcXEZvb3Rlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSBcInJlYWN0LXBhcnRpY2xlcy1qc1wiO1xyXG5pbXBvcnQgeyBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IHsgVGlBcnJvd1VwVGhpY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvdGlcIjtcclxuXHJcbmNvbnN0IHBhcnRpY2xlT3B0ID0ge1xyXG4gIHBhcnRpY2xlczoge1xyXG4gICAgbnVtYmVyOiB7XHJcbiAgICAgIHZhbHVlOiAxNjAsXHJcbiAgICAgIGRlbnNpdHk6IHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgdmFsdWVfYXJlYTogODAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb2xvcjoge1xyXG4gICAgICB2YWx1ZTogXCIjMDAwYzFmXCJcclxuICAgIH0sXHJcbiAgICBzaGFwZToge1xyXG4gICAgICB0eXBlOiBcImNpcmNsZVwiLFxyXG4gICAgICBzdHJva2U6IHtcclxuICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCJcclxuICAgICAgfSxcclxuICAgICAgcG9seWdvbjoge1xyXG4gICAgICAgIG5iX3NpZGVzOiA1XHJcbiAgICAgIH0sXHJcbiAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgc3JjOiBcImltZy9naXRodWIuc3ZnXCIsXHJcbiAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICBoZWlnaHQ6IDEwMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb3BhY2l0eToge1xyXG4gICAgICB2YWx1ZTogMSxcclxuICAgICAgcmFuZG9tOiB0cnVlLFxyXG4gICAgICBhbmltOiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiAxLFxyXG4gICAgICAgIG9wYWNpdHlfbWluOiAwLFxyXG4gICAgICAgIHN5bmM6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaXplOiB7XHJcbiAgICAgIHZhbHVlOiAxMCxcclxuICAgICAgcmFuZG9tOiB0cnVlLFxyXG4gICAgICBhbmltOiB7XHJcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICBzcGVlZDogNCxcclxuICAgICAgICBzaXplX21pbjogMC4zLFxyXG4gICAgICAgIHN5bmM6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsaW5lX2xpbmtlZDoge1xyXG4gICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICBkaXN0YW5jZTogMTUwLFxyXG4gICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgIG9wYWNpdHk6IDAuNCxcclxuICAgICAgd2lkdGg6IDFcclxuICAgIH0sXHJcbiAgICBtb3ZlOiB7XHJcbiAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgIGRpcmVjdGlvbjogXCJub25lXCIsXHJcbiAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxyXG4gICAgICBvdXRfbW9kZTogXCJvdXRcIixcclxuICAgICAgYm91bmNlOiBmYWxzZSxcclxuICAgICAgYXR0cmFjdDoge1xyXG4gICAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcm90YXRlWDogNjAwLFxyXG4gICAgICAgIHJvdGF0ZVk6IDYwMFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbnRlcmFjdGl2aXR5OiB7XHJcbiAgICBkZXRlY3Rfb246IFwiY2FudmFzXCIsXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgb25ob3Zlcjoge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICBtb2RlOiBcImJ1YmJsZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uY2xpY2s6IHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgbW9kZTogXCJyZXB1bHNlXCJcclxuICAgICAgfSxcclxuICAgICAgcmVzaXplOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbW9kZXM6IHtcclxuICAgICAgZ3JhYjoge1xyXG4gICAgICAgIGRpc3RhbmNlOiA0MDAsXHJcbiAgICAgICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGJ1YmJsZToge1xyXG4gICAgICAgIGRpc3RhbmNlOiAyNTAsXHJcbiAgICAgICAgc2l6ZTogMCxcclxuICAgICAgICBkdXJhdGlvbjogMixcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIHNwZWVkOiAzXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlcHVsc2U6IHtcclxuICAgICAgICBkaXN0YW5jZTogNDAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAwLjRcclxuICAgICAgfSxcclxuICAgICAgcHVzaDoge1xyXG4gICAgICAgIHBhcnRpY2xlc19uYjogNFxyXG4gICAgICB9LFxyXG4gICAgICByZW1vdmU6IHtcclxuICAgICAgICBwYXJ0aWNsZXNfbmI6IDJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmV0aW5hX2RldGVjdDogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIGNvbnN0IHBhcnRpY2xlcyA9IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIG1hcmdpblRvcDogXCItMTMlXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2U1ZTdlNlwiLFxyXG4gICAgekluZGV4OiAtM1xyXG4gIH07XHJcbiAgY29uc3QgYXJyb3dVcEljb25EYXJrID0ge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiBcIiNlNWU3ZTZcIixcclxuICAgIG1hcmdpblRvcDogXCItOCVcIixcclxuICAgIGZvbnRTaXplOiBcIjRyZW1cIixcclxuICAgIGJvcmRlcjogXCIxcHggc29saWQgcmVkXCIsXHJcbiAgICB6SW5kZXg6IFwiOTk5OSAhaW1wb3J0YW50XCJcclxuICB9O1xyXG5cclxuICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgIHNjcm9sbC5zY3JvbGxUb1RvcCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGg1IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfSBjbGFzc05hbWU9eydhcnJvdy11cC1pY29uLWRhcmsnfT48VGlBcnJvd1VwVGhpY2sgLz48L2g1PiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wicGFydGljbGVzXCJ9PlxyXG4gICAgICAgIDxQYXJ0aWNsZXMgcGFyYW1zPXtwYXJ0aWNsZU9wdH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucGFydGljbGVzIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEzJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICB6LWluZGV4OiAtOTk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcnJvdy11cC1pY29uLWRhcmsge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtOCU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTk5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIC5jb250YWN0LWFycm93IHtcclxuICAgICAgICAvLyAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAvLyAgICAgLy8gei1pbmRleDogOTk7XHJcbiAgICAgICAgLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\Footer.jsx */"));
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
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\GlobalHead.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function GlobalHead() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("link", {
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
      lineNumber: 13
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Raleway&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
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
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\GlobalStyles.jsx";
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
          html,
          body,
          div,
          span,
          applet,
          object,
          iframe,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          blockquote,
          pre,
          a,
          abbr,
          acronym,
          address,
          big,
          cite,
          code,
          del,
          dfn,
          em,
          img,
          ins,
          kbd,
          q,
          s,
          samp,
          small,
          strike,
          strong,
          sub,
          sup,
          tt,
          var,
          b,
          u,
          i,
          center,
          dl,
          dt,
          dd,
          ol,
          ul,
          li,
          fieldset,
          form,
          label,
          legend,
          table,
          caption,
          tbody,
          tfoot,
          thead,
          tr,
          th,
          td,
          article,
          aside,
          canvas,
          details,
          embed,
          figure,
          figcaption,
          footer,
          header,
          hgroup,
          menu,
          nav,
          output,
          ruby,
          section,
          summary,
          time,
          mark,
          audio,
          video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
          }

          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          menu,
          nav,
          section {
            display: block;
          }
          body {
            line-height: 1;
          }
          ol,
          ul {
            list-style: none;
          }
          blockquote,
          q {
            quotes: none;
          }
          blockquote:before,
          blockquote:after,
          q:before,
          q:after {
            content: "";
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
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\Home.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const particleOpt = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#e5e7e6"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3923056161" + " " + "wrapper",
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
    className: "jsx-3923056161" + " " + "home",
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
    className: "jsx-3923056161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Josh Diamond")), __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    animateIn: "fadeIn",
    duration: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3923056161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Software Developer")), __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    animateIn: "fadeIn",
    duration: 4,
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
    className: "jsx-3923056161" + " " + "arrow-down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_5__["TiArrowDownThick"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }))))), __jsx("div", {
    className: "jsx-3923056161" + " " + "particle-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_4___default.a, {
    params: particleOpt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923056161" + " " + "clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: "../static/clearToLight.png",
    home: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3923056161",
    __self: this
  }, ".particle-bottom.jsx-3923056161{background-color:#000c1f;}.home.jsx-3923056161{background-color:#000c1f;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:1;margin-top:-50%;}.wrapper.jsx-3923056161{width:100%;}h1.jsx-3923056161{color:white;font-size:6rem;margin-top:6%;font-family:\"Raleway\",sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}h4.jsx-3923056161{color:#b7b5b3;font-size:2.5rem;margin-top:35px;font-family:\"Raleway\",sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}img.jsx-3923056161{border-radius:21px;}.arrow-down.jsx-3923056161{color:#e5e7e6;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:200px;font-size:4rem;}.arrow-down.jsx-3923056161:hover{cursor:pointer;}.clear.jsx-3923056161{z-index:50;margin-top:-50%;}.particle-middle.jsx-3923056161{z-index:-5;margin-top:-500px;background-color:#000c1f;}@media (max-width:650px){h1.jsx-3923056161{font-size:5rem;}}@media (max-width:550px){h1.jsx-3923056161{font-size:3.5rem;}h4.jsx-3923056161{font-size:2rem;}}@media (max-width:395px){h1.jsx-3923056161{font-size:3rem;}h4.jsx-3923056161{font-size:1.8rem;}}@media (max-width:333px){h1.jsx-3923056161{font-size:2.75rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxwb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcSG9tZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkprQixBQUdvQyxBQUdBLEFBVWQsQUFXQyxBQWFFLEFBWUssQUFJTCxBQVVDLEFBR0osQUFJQSxBQU1NLEFBS0UsQUFHRixBQUtBLEFBR0UsQUFNcEIsV0E3RUQsQUE4Q2tCLEFBSUUsQ0E5Q0gsRUFhRSxBQWtCSixDQVFmLEFBYUUsQUFRQSxBQUtBLEVBUkEsQUFXQSxDQUtBLENBL0NGLE1BbERBLEFBR2UsRUF1QkMsQUF5Q2hCLEVBSTJCLEVBakNULE9BbENILEdBdUJxQixNQVlBLE9BaUNwQyxvQkEzQzJCLE1BWUEsUUFlRixXQTFCRCxNQVlBLE9BckNBLFNBMEJELE1BWUEsZUFYRCxNQVlBLGNBWEgsTUFZQSxtQkFhQSxHQXBETSxjQXFEUixlQUNqQiw0QkExQkEsTUFZQSxvQ0F2Q3FCLDZGQUNULFVBQ00sZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxwb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcSG9tZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1RyYW5zaXRpb25cIjtcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tIFwicmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGxcIjtcclxuaW1wb3J0IFBhcnRpY2xlcyBmcm9tIFwicmVhY3QtcGFydGljbGVzLWpzXCI7XHJcbmltcG9ydCB7IFRpQXJyb3dEb3duVGhpY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvdGlcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuXHJcbmNvbnN0IHBhcnRpY2xlT3B0ID0ge1xyXG4gIHBhcnRpY2xlczoge1xyXG4gICAgbnVtYmVyOiB7XHJcbiAgICAgIHZhbHVlOiAxNjAsXHJcbiAgICAgIGRlbnNpdHk6IHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgdmFsdWVfYXJlYTogODAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb2xvcjoge1xyXG4gICAgICB2YWx1ZTogXCIjZTVlN2U2XCJcclxuICAgIH0sXHJcbiAgICBzaGFwZToge1xyXG4gICAgICB0eXBlOiBcImNpcmNsZVwiLFxyXG4gICAgICBzdHJva2U6IHtcclxuICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCJcclxuICAgICAgfSxcclxuICAgICAgcG9seWdvbjoge1xyXG4gICAgICAgIG5iX3NpZGVzOiA1XHJcbiAgICAgIH0sXHJcbiAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgc3JjOiBcImltZy9naXRodWIuc3ZnXCIsXHJcbiAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICBoZWlnaHQ6IDEwMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb3BhY2l0eToge1xyXG4gICAgICB2YWx1ZTogMSxcclxuICAgICAgcmFuZG9tOiB0cnVlLFxyXG4gICAgICBhbmltOiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiAxLFxyXG4gICAgICAgIG9wYWNpdHlfbWluOiAwLFxyXG4gICAgICAgIHN5bmM6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaXplOiB7XHJcbiAgICAgIHZhbHVlOiAxMCxcclxuICAgICAgcmFuZG9tOiB0cnVlLFxyXG4gICAgICBhbmltOiB7XHJcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICBzcGVlZDogNCxcclxuICAgICAgICBzaXplX21pbjogMC4zLFxyXG4gICAgICAgIHN5bmM6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsaW5lX2xpbmtlZDoge1xyXG4gICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICBkaXN0YW5jZTogMTUwLFxyXG4gICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgIG9wYWNpdHk6IDAuNCxcclxuICAgICAgd2lkdGg6IDFcclxuICAgIH0sXHJcbiAgICBtb3ZlOiB7XHJcbiAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgIGRpcmVjdGlvbjogXCJub25lXCIsXHJcbiAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxyXG4gICAgICBvdXRfbW9kZTogXCJvdXRcIixcclxuICAgICAgYm91bmNlOiBmYWxzZSxcclxuICAgICAgYXR0cmFjdDoge1xyXG4gICAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcm90YXRlWDogNjAwLFxyXG4gICAgICAgIHJvdGF0ZVk6IDYwMFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbnRlcmFjdGl2aXR5OiB7XHJcbiAgICBkZXRlY3Rfb246IFwiY2FudmFzXCIsXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgb25ob3Zlcjoge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICBtb2RlOiBcImJ1YmJsZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uY2xpY2s6IHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgbW9kZTogXCJyZXB1bHNlXCJcclxuICAgICAgfSxcclxuICAgICAgcmVzaXplOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbW9kZXM6IHtcclxuICAgICAgZ3JhYjoge1xyXG4gICAgICAgIGRpc3RhbmNlOiA0MDAsXHJcbiAgICAgICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGJ1YmJsZToge1xyXG4gICAgICAgIGRpc3RhbmNlOiAyNTAsXHJcbiAgICAgICAgc2l6ZTogMCxcclxuICAgICAgICBkdXJhdGlvbjogMixcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIHNwZWVkOiAzXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlcHVsc2U6IHtcclxuICAgICAgICBkaXN0YW5jZTogNDAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAwLjRcclxuICAgICAgfSxcclxuICAgICAgcHVzaDoge1xyXG4gICAgICAgIHBhcnRpY2xlc19uYjogNFxyXG4gICAgICB9LFxyXG4gICAgICByZW1vdmU6IHtcclxuICAgICAgICBwYXJ0aWNsZXNfbmI6IDJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmV0aW5hX2RldGVjdDogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgPFBhcnRpY2xlcyBwYXJhbXM9e3BhcnRpY2xlT3B0fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaG9tZVwifT5cclxuICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImZhZGVJblwiIGR1cmF0aW9uPXsyfT5cclxuICAgICAgICAgIDxoMT5Kb3NoIERpYW1vbmQ8L2gxPlxyXG4gICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiZmFkZUluXCIgZHVyYXRpb249ezN9PlxyXG4gICAgICAgICAgPGg0PlNvZnR3YXJlIERldmVsb3BlcjwvaDQ+XHJcbiAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJmYWRlSW5cIiBkdXJhdGlvbj17NH0+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgIHRvPVwic2tpbGxzXCJcclxuICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgIGR1cmF0aW9uPXsxMDAwfVxyXG4gICAgICAgICAgICBvZmZzZXQ9ey0xMjV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e1wiYXJyb3ctZG93blwifT5cclxuICAgICAgICAgICAgICA8VGlBcnJvd0Rvd25UaGljayAvPlxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ncGFydGljbGUtbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgIDxQYXJ0aWNsZXMgcGFyYW1zPXtwYXJ0aWNsZU9wdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydGljbGUtYm90dG9tXCI+XHJcbiAgICAgICAgPFBhcnRpY2xlcyBwYXJhbXM9e3BhcnRpY2xlT3B0fSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIj5cclxuICAgICAgICAgIDxUcmFuc2l0aW9uIGltYWdlPXtcIi4uL3N0YXRpYy9jbGVhclRvTGlnaHQucG5nXCJ9IGhvbWUgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucGFydGljbGUtYm90dG9tIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ob21lIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxMzAxO1xyXG5cclxuICAgICAgICAgIC8vIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFdlYmtpdCAqL1xyXG4gICAgICAgICAgLy8gLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgLy8gLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogSUUgMTAgICovXHJcbiAgICAgICAgICAvLyAtby11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC8vIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAvLyBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcclxuICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwICAqL1xyXG4gICAgICAgICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgY29sb3I6ICNiN2I1YjM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwICAqL1xyXG4gICAgICAgICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XHJcbiAgICAgICAgICAvLyBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYXJyb3ctZG93biB7XHJcbiAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgIC8vIGNvbG9yOiAjNGFkNWZmO1xyXG4gICAgICAgICAgLy8gY29sb3I6IHNpbHZlcjtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIC8vIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXJyb3ctZG93bjpob3ZlciB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbGVhciB7XHJcbiAgICAgICAgICB6LWluZGV4OiA1MDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC01MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYXJ0aWNsZS1taWRkbGUge1xyXG4gICAgICAgICAgei1pbmRleDogLTU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNTAwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM5NXB4KSB7XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMzNweCkge1xyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNzVyZW1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\Home.jsx */"));
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
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\Navigation.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Navigation() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-579213679" + " " + "nav-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
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
      lineNumber: 8
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-579213679" + " " + "nav-item",
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
      lineNumber: 18
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-579213679" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
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
      lineNumber: 28
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-579213679" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
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
      lineNumber: 38
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-579213679" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Contact"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "579213679",
    __self: this
  }, ".nav-items.jsx-579213679{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;position:fixed;top:0;left:0;z-index:9999;width:100%;padding:1%;color:#b7b5b3;background-color:#1f2a44;border-bottom:2px solid #b7b5b3;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.nav-item.jsx-579213679{-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:'Raleway',sans-serif;}.nav-item.jsx-579213679:hover{border-bottom:1px solid #4ad5ff;cursor:pointer;color:#e5e7e6;font-family:'Raleway',sans-serif;}.active.jsx-579213679{border-bottom:1px solid #4ad5ff !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxwb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RrQixBQUdrQyxBQXNCTSxBQUlhLEFBTVcsZ0NBTDVCLFdBTW5CLElBTGtCLGNBQ29CLGFBNUJMLG1CQXNCSyxDQU90QyxnQ0FOQSx1RUFyQm1CLGVBQ1QsTUFDQyxPQUNNLGFBQ0YsV0FDQSxXQUNHLGNBQ1cseUJBQ08sZ0NBRVAseUJBQ0gsc0JBQ0QscUJBRUQsb0JBQ0gscUZBQ3JCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxwb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtc1wiPlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICB0bz1cInNraWxsc1wiXHJcbiAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICBkdXJhdGlvbj17MTAwMH1cclxuICAgICAgICAgIG9mZnNldD17LTEyNX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlNraWxsczwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgIHRvPVwicG9ydGZvbGlvXCJcclxuICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgIGR1cmF0aW9uPXsxMDAwfVxyXG4gICAgICAgICAgb2Zmc2V0PXstMTI1fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+UG9ydGZvbGlvPC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgdG89XCJyZXN1bWVcIlxyXG4gICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgZHVyYXRpb249ezEwMDB9XHJcbiAgICAgICAgICBvZmZzZXQ9ey0xMjV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5SZXN1bWU8L3NwYW4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICB0bz1cImNvbnRhY3RcIlxyXG4gICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgZHVyYXRpb249ezEwMDB9XHJcbiAgICAgICAgICBvZmZzZXQ9ey0xMjV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5Db250YWN0PC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5uYXYtaXRlbXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMSU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiN2I1YjM7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMmE0NDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2I3YjViMztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIElFIDEwICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIEN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIGluIE9wZXJhIGJ1dCB3aWxsIGJlIHNvb24gKi9cclxuICAgICAgICAgICAgICAgICAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXYtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0YWQ1ZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRhZDVmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLm5hdi1pdGVtcyB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGZsZXgtd3JhcDogd3JhcFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\Navigation.jsx */"));
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
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Transition */ "./components/Transition.jsx");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ti */ "react-icons/ti");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ti__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-animate-on-scroll */ "react-animate-on-scroll");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-card-flip */ "react-card-flip");
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_card_flip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/di */ "react-icons/di");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_di__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _icon_ActiveCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icon/ActiveCard */ "./components/icon/ActiveCard.jsx");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _projects_MediaCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/MediaCard */ "./components/projects/MediaCard.jsx");
/* harmony import */ var _projects_CustomizedDialogs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects/CustomizedDialogs */ "./components/projects/CustomizedDialogs.jsx");
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\Section.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












 // import { Document, Page } from 'react-pdf';

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
    0: isFlipped3,
    1: setIsFlipped3
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: backend,
    1: setBackend
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: frontend,
    1: setFrontend
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: devops,
    1: setDevops
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: activeSkill,
    1: setActiveSkill
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: resumeView,
    1: setResumeView
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // const scrollToTop = () => {
  //     scroll.scrollToTop()
  // }

  const clickMeFront = () => {
    setFrontend(true);
    setIsFlipped(true);
  };

  const clickMeFrontBack = () => {
    setFrontend(false);
    setIsFlipped(false);
    setActiveSkill(null);
  };

  const clickMeBack = () => {
    setBackend(true);
    setIsFlipped2(true);
  };

  const clickMeBackFront = () => {
    setBackend(false);
    setIsFlipped2(false);
    setActiveSkill(null);
  };

  const clickMeDev = () => {
    setDevops(true);
    setIsFlipped3(true);
  };

  const clickMeDevBack = () => {
    setDevops(false);
    setIsFlipped3(false);
    setActiveSkill(null);
  };

  const scrollToTop = () => {
    react_scroll__WEBPACK_IMPORTED_MODULE_2__["animateScroll"].scrollToTop();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3998422307" + " " + (classNameProp || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    id: id,
    className: "jsx-3998422307" + " " + "section-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, skills ? __jsx("h2", {
    className: "jsx-3998422307" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3998422307" + " " + ((dark ? 'title-dark title-skills' : 'title title-skills') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, title)) : __jsx("h2", {
    className: "jsx-3998422307" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3998422307" + " " + ((dark ? 'title-dark' : 'title') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, title))), skills && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3998422307" + " " + 'images-modal',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3998422307" + " " + 'images',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3998422307" + " " + 'frontend',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    isFlipped: isFlipped,
    flipDirection: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("img", {
    src: "../static/treeFINAL.png",
    alt: "Tree Canopy Image",
    key: frontend ? null : 'front',
    onClick: clickMeFront,
    className: "jsx-3998422307" + " " + 'sunflower',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-3998422307" + " " + 'view canopy-view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3998422307" + " " + 'card-back card-back-canopy ',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3998422307" + " " + 'canopy-header margin',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3998422307" + " " + "skills-title opacity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Front End"), __jsx("div", {
    className: "jsx-3998422307" + " " + 'x opacity',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeFrontBack,
    className: "jsx-3998422307" + " " + 'close-button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "X"))), __jsx("div", {
    className: "jsx-3998422307" + " " + 'card-icons card-icons-canopy',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, icons.frontend.map(icon => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiHtml5" ? __jsx("div", {
    className: "jsx-3998422307" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiHtml5"], {
    style: {
      fontSize: '6rem',
      color: '#E54D26'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), " ") : icon.icon === "DiCss3" ? __jsx("div", {
    className: "jsx-3998422307" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiCss3"], {
    style: {
      fontSize: '6rem',
      color: '#3D8FC6'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), " ") : icon.icon === "DiLess" ? __jsx("div", {
    className: "jsx-3998422307" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiLess"], {
    style: {
      fontSize: '6rem',
      color: '#2A4D80'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), " ") : icon.icon === "DiSass" ? __jsx("div", {
    className: "jsx-3998422307" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiSass"], {
    style: {
      fontSize: '6rem',
      color: '#CC6699'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), " ") : icon.icon === "DiBootstrap" ? __jsx("div", {
    className: "jsx-3998422307" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiBootstrap"], {
    style: {
      fontSize: '6rem',
      color: '#5B4282'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), " ") : icon.icon === "DiJavascript1" ? __jsx("div", {
    className: "jsx-3998422307" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiJavascript1"], {
    style: {
      fontSize: '6rem',
      color: '#F0DB4F'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), " ") : icon.icon === "DiReact" ? __jsx("div", {
    className: "jsx-3998422307" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiReact"], {
    style: {
      fontSize: '6rem',
      color: '#61DAFB'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), " ") : icon.icon === "img src='../static/redux.png' alt='Redux Icon'" ? __jsx("img", {
    src: "../static/redux.png",
    alt: "Redux Icon",
    style: {
      width: '75px',
      maxHeight: '70px',
      margin: '1%'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    className: "jsx-3998422307" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }) : icon.icon === "img src='../static/next-text.png' alt='Next Icon'" ? __jsx("img", {
    src: "../static/next-text.png",
    alt: "Next Icon",
    style: {
      width: '75px',
      maxHeight: '75px',
      marginRight: '5%'
    },
    onClick: () => setActiveSkill(icon),
    className: "jsx-3998422307" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }) : null))))))), __jsx("div", {
    className: "jsx-3998422307" + " " + 'devOps',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    isFlipped: isFlipped3,
    flipDirection: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("img", {
    src: "../static/devops.png",
    alt: "Tree Canopy Image",
    key: devops ? null : 'front',
    onClick: clickMeDev,
    className: "jsx-3998422307" + " " + 'devops',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-3998422307" + " " + 'view dev-view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3998422307" + " " + 'card-back-dev card-back-devops',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3998422307" + " " + 'dev-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3998422307" + " " + "skills-title-dev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "DevOps"), __jsx("div", {
    className: "jsx-3998422307" + " " + 'x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeDevBack,
    className: "jsx-3998422307" + " " + 'close-button-dev',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "X"))), __jsx("div", {
    className: "jsx-3998422307" + " " + 'card-icons-dev',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, icons.devops.map(icon => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiGit" ? __jsx("div", {
    className: "jsx-3998422307" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiGit"], {
    style: {
      fontSize: '6rem',
      color: '#F34F29'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), " ") : icon.icon === "DiGithubBadge" ? __jsx("div", {
    className: "jsx-3998422307" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiGithubBadge"], {
    style: {
      fontSize: '6rem',
      color: '#181616'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), " ") : icon.icon === "Netlify" ? __jsx("img", {
    src: "../static/netlify.png",
    alt: "Netlify Icon",
    style: {
      width: '75px',
      height: '75px',
      marginTop: '2.25%',
      paddingLeft: '2%'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    className: "jsx-3998422307" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }) : icon.icon === "Heroku" ? __jsx("img", {
    src: "../static/herokuu.png",
    alt: "Heroku Icon",
    style: {
      width: '90px',
      height: '90px',
      marginTop: '1%',
      paddingLeft: '2%'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    className: "jsx-3998422307" + " " + 'heroku icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }) : null))))))), __jsx("div", {
    className: "jsx-3998422307" + " " + 'backend',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    isFlipped: isFlipped2,
    flipDirection: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("img", {
    src: "../static/roots.png",
    alt: "Roots Image",
    key: backend ? null : 'front',
    onClick: clickMeBack,
    className: "jsx-3998422307" + " " + 'roots',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-3998422307" + " " + 'view canopy-view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3998422307" + " " + 'card-back card-back-canopy ',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3998422307" + " " + 'canopy-header margin-back',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3998422307" + " " + 'skills-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Back End"), __jsx("div", {
    className: "jsx-3998422307" + " " + 'x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeBackFront,
    className: "jsx-3998422307" + " " + 'close-button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "X"))), __jsx("div", {
    className: "jsx-3998422307" + " " + 'card-icons',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, icons.backend.map(icon => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiGit" ? __jsx("div", {
    className: "jsx-3998422307" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiGit"], {
    style: {
      fontSize: '6rem',
      color: '#F34F29'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), " ") : icon.icon === "DiGithubBadge" ? __jsx("div", {
    className: "jsx-3998422307" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiGithubBadge"], {
    style: {
      fontSize: '6rem',
      color: '#181616'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), " ") : icon.icon === "iNodejsSmall" ? __jsx("div", {
    className: "jsx-3998422307" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiNodejsSmall"], {
    style: {
      fontSize: '6rem',
      color: '#83CD29'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), " ") : icon.icon === "img src='../static/expressFinal.png' alt='Express Icon'" ? __jsx("img", {
    src: "../static/expressFinal.png",
    alt: "Express Icon",
    style: {
      width: '75px',
      height: '75px',
      marginTop: '2%',
      paddingLeft: '2%'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    className: "jsx-3998422307" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }) : icon.icon === "img src='../static/knexjs.png' alt='Knex.js Icon'" ? __jsx("img", {
    src: "../static/knexjs.png",
    alt: "Knex.js Icon",
    style: {
      width: '75px',
      height: '75px',
      marginTop: '2%',
      paddingLeft: '2%'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    className: "jsx-3998422307" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }) : icon.icon === "DiMysql" ? __jsx("div", {
    className: "jsx-3998422307" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiMysql"], {
    style: {
      fontSize: '6rem',
      color: '#00618A',
      marginLeft: '14%'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), " ") : icon.icon === "DiPostgresql" ? __jsx("div", {
    className: "jsx-3998422307" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiPostgresql"], {
    style: {
      fontSize: '6rem',
      color: '#336791',
      marginRight: '12%'
    },
    onClick: () => setActiveSkill(icon),
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }), " ") : null)))))))), __jsx("div", {
    className: "jsx-3998422307" + " " + 'modal',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, frontend || backend || devops ? __jsx("h6", {
    className: "jsx-3998422307" + " " + ((activeSkill ? "icon-selected" : "select-icon") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Select an Icon") : __jsx("h6", {
    className: "jsx-3998422307" + " " + 'select-image',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Select an Image"), activeSkill && __jsx(_icon_ActiveCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
    activeSkill: activeSkill,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-3998422307" + " " + 'gauges',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3998422307" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3998422307" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaChartLine"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "Efficient"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "maximum productivity; well-organized")), __jsx("div", {
    className: "jsx-3998422307" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3998422307" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdPhonelink"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Responsive"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "optimized layouts for all devices")), __jsx("div", {
    className: "jsx-3998422307" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3998422307" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdLightbulbOutline"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "Creative"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "highest quality solutions provided")), __jsx("div", {
    className: "jsx-3998422307" + " " + 'gauge-styles dynamic',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3998422307" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaGlobeAmericas"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Dynamic"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "reflects real-time changes in values with activity.  Built with DRY, reusable components. ")))), portfolio && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3998422307" + " " + 'portfolio-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx(_projects_CustomizedDialogs__WEBPACK_IMPORTED_MODULE_13__["default"], {
    one: true,
    image: '../static/wellDoneProjectImage.png',
    title: "WellDone International",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }), __jsx(_projects_CustomizedDialogs__WEBPACK_IMPORTED_MODULE_13__["default"], {
    two: true,
    image: '../static/netlify.png',
    title: "title 2 here",
    icons: "project icons here",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }), __jsx(_projects_CustomizedDialogs__WEBPACK_IMPORTED_MODULE_13__["default"], {
    three: true,
    image: '../static/redux.png',
    title: "title 3 here",
    icons: "project icons here",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }), __jsx(_projects_CustomizedDialogs__WEBPACK_IMPORTED_MODULE_13__["default"], {
    four: true,
    image: '../static/next-text.png',
    title: "title 4 here",
    icons: "project icons here",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }))), resume && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3998422307" + " " + 'resume-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx("a", {
    href: "../static/resume.pdf",
    download: true,
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__["FiDownload"], {
    style: {
      fontSize: '2.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  })), __jsx("details", {
    style: {
      marginTop: '2%'
    },
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, __jsx("summary", {
    onClick: () => setResumeView(!resumeView),
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, resumeView ? __jsx("div", {
    className: "jsx-3998422307" + " " + 'resume-imgs resume-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, __jsx("img", {
    src: "../static/topFinalResume.png",
    alt: "resume-header",
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }), __jsx("img", {
    src: "../static/middleFinalResume.png",
    alt: "resume-bottom",
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }), __jsx("img", {
    src: "../static/bottomFinalResume.png",
    alt: "resume-top",
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  })) : __jsx("div", {
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, __jsx("img", {
    src: "../static/topFinalResume.png",
    alt: "resume-header",
    className: "jsx-3998422307" + " " + 'resume-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  })))))), contact && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3998422307" + " " + 'form',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, __jsx("form", {
    action: "https://formcarry.com/s/bN9Y1F-wrzW",
    method: "POST",
    "accept-charset": "UTF-8",
    className: "jsx-3998422307" + " " + 'form-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "name",
    placeholder: "Name",
    required: true,
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }), __jsx("input", {
    type: "email",
    name: "email",
    placeholder: "E-mail",
    required: true,
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }), __jsx("textarea", {
    type: "text",
    name: "message",
    placeholder: "Message",
    required: true,
    className: "jsx-3998422307" + " " + 'message',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }), __jsx("input", {
    type: "hidden",
    name: "_gotcha",
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }), __jsx("button", {
    className: "jsx-3998422307",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3998422307" + " " + 'button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, "Send ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaPaperPlane"], {
    style: {
      fontSize: '1.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }))))), __jsx("h5", {
    onClick: scrollToTop,
    className: "jsx-3998422307" + " " + 'arrow-up-icon-dark',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_4__["TiArrowUpThick"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  })))), __jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: image,
    dark: dark,
    contact: contact,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3998422307",
    __self: this
  }, ".light.jsx-3998422307{background-color:#e5e7e6;margin-top:-5px;font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.dark.jsx-3998422307{background-color:#000c1f;margin-top:-5px;color:#e5e7e6;font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.images.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1%;padding-top:2%;}.sunflower.jsx-3998422307,.roots.jsx-3998422307,.devops.jsx-3998422307{max-width:100%;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-animation:colorFadeOut-jsx-3998422307 2s,shapeShiftOut-jsx-3998422307 2s;animation:colorFadeOut-jsx-3998422307 2s,shapeShiftOut-jsx-3998422307 2s;border-radius:50%;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.sunflower.jsx-3998422307:hover,.roots.jsx-3998422307:hover,.devops.jsx-3998422307:hover{width:100%;height:100%;cursor:pointer;-webkit-animation:colorFadeIn-jsx-3998422307 2s,shapeShiftIn-jsx-3998422307 2s;animation:colorFadeIn-jsx-3998422307 2s,shapeShiftIn-jsx-3998422307 2s;-webkit-filter:grayscale(0%);filter:grayscale(0%);border-radius:12px;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.skills-card.jsx-3998422307{width:33%;height:420px;}.frontend.jsx-3998422307,.backend.jsx-3998422307{max-width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.titles.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border:1px solid red;padding:2%;}.skills-title.jsx-3998422307{font-size:2.1rem;}.skills-title.jsx-3998422307:hover{cursor:pointer;}.view.jsx-3998422307{opacity:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:100%;background:#fbfbf8;border-radius:12px;padding:2% 4%;cursor:pointer;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.canopy-view.jsx-3998422307{width:680px;height:350px;}.dev-view.jsx-3998422307{width:680px;height:75px;}.roots-view.jsx-3998422307{width:670px;height:350px;}.card-back.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:100%;max-height:100%;}.card-back-canopy.jsx-3998422307{max-width:100%;max-height:100%;color:black;border-radius:12px;}.card-back-devops.jsx-3998422307{color:#e5e7e6;max-width:100%;max-height:100%;width:680px;height:75px;border-radius:12px;}.card-back-roots.jsx-3998422307{color:#e5e7e6;max-width:100%;max-height:100%;width:670px;height:350px;border-radius:12px;}.card-icons.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;max-width:100%;}.card-icons-canopy.jsx-3998422307{padding:2%;}.icon-hover.jsx-3998422307{opacity:.5;}.icon-hover.jsx-3998422307:hover{opacity:1;}.card-icons-dev.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;max-width:100%;margin:-6% 5%;}.dev-header.jsx-3998422307{color:#000c1f;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-weight:bolder;}.canopy-header.jsx-3998422307{color:#000c1f;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:680px;margin-top:-65px;}.skills-title-dev.jsx-3998422307{color:#000c1f;}.close-button-dev.jsx-3998422307{color:#000c1f;margin:none;padding:none;}h2.jsx-3998422307{font-size:4rem;padding-top:2%;padding-bottom:2%;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding-left:2%;}p.jsx-3998422307{padding-left:2%;line-height:1.8;padding-top:2%;}.title-center.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.title.jsx-3998422307{color:#000c1f;margin-right:2%;margin-top:6%;}.title-dark.jsx-3998422307{margin-right:2%;color:#E5E7E6;margin-top:6%;}.arrow-up-icon-dark.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#e5e7e6;font-size:4rem;position:relative;top:300px;}.arrow-up-icon-dark.jsx-3998422307:hover{cursor:pointer;}@-webkit-keyframes colorFadeIn-jsx-3998422307{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@keyframes colorFadeIn-jsx-3998422307{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@-webkit-keyframes colorFadeOut-jsx-3998422307{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@keyframes colorFadeOut-jsx-3998422307{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@-webkit-keyframes shapeShiftIn-jsx-3998422307{from{border-radius:50%;}to{border-radius:12px;}}@keyframes shapeShiftIn-jsx-3998422307{from{border-radius:50%;}to{border-radius:12px;}}@-webkit-keyframes shapeShiftOut-jsx-3998422307{from{border-radius:12px;}to{border-radius:50%;}}@keyframes shapeShiftOut-jsx-3998422307{from{border-radius:12px;}to{border-radius:50%;}}@-webkit-keyframes fadeIn-jsx-3998422307{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-3998422307{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadeOut-jsx-3998422307{from{opacity:1;}to{opacity:0;}}@keyframes fadeOut-jsx-3998422307{from{opacity:1;}to{opacity:0;}}.animate.jsx-3998422307{opacity:1;}.gauges.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:5%;}.gauge-styles.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:200px;}.gauge.jsx-3998422307{background-image:url('../static/DarkBlueBadge.png');background-size:cover;max-width:100%;width:200px;height:175px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.dynamic.jsx-3998422307{margin-top:55px;}.light-text.jsx-3998422307{color:#000c1f;}.title-skills.jsx-3998422307{margin-top:1%;}.section-content.jsx-3998422307{margin-bottom:2%;}.modal.jsx-3998422307{width:450px;max-height:270px;margin-top:17%;max-width:100%;border-radius:12px;padding:2%;}.images-modal.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.close-button.jsx-3998422307{font-size:2.1rem;font-weight:bolder;}.icon-selected.jsx-3998422307{display:none;}.select-icon.jsx-3998422307{text-align:center;vertical-align:center;margin-top:25%;font-size:2rem;color:#000c1f;}.select-image.jsx-3998422307{text-align:center;vertical-align:center;margin-top:25%;font-size:2rem;color:#000c1f;}.front.jsx-3998422307{margin:0 2%;}.margin.jsx-3998422307{margin:2% 0;}.margin-back.jsx-3998422307{margin-top:-25px;margin-bottom:2%;}.resume-container.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.resume-imgs.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.resume-header.jsx-3998422307{max-width:100%;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}summary.jsx-3998422307{width:100%: max-width:847px;outline:none;cursor:pointer;}summary.jsx-3998422307::-webkit-details-marker{display:none;}a.jsx-3998422307{color:#b7b5b3;-webkit-transition:0.4s;transition:0.4s;}a.jsx-3998422307:hover{cursor:pointer;color:#000c1f;}.form.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:30%;margin:0 auto;margin-top:3%;}.form-container.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}input.jsx-3998422307{font-family:'Raleway',sans-serif;width:100%;background-color:#1f2a44;outline:none;font-weight:bold;color:#e5e7e6;margin:1% 0;padding:10px 15px;border:none;}textarea.jsx-3998422307{font-family:'Raleway',sans-serif;width:100%;background-color:#1f2a44;outline:none;font-weight:bold;color:#e5e7e6;margin:1% 0;padding:10px 15px;border:none;height:100px;}button.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:'Raleway',sans-serif;width:25%;font-size:1.5rem;vertical-align:center;margin-top:5%;font-weight:bold;border-radius:12px;color:#000c1f;-webkit-transition:0.5s;transition:0.5s;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}button.jsx-3998422307:hover{cursor:pointer;background-color:#1f2a44;color:#e5e7e6;}.button.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;}.portfolio-container.jsx-3998422307{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxwb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcU2VjdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc1NvQixBQU04QyxBQVlBLEFBWVosQUFVRSxBQVdKLEFBWUQsQUFNSyxBQVVGLEFBT0ksQUFNRixBQUtMLEFBa0JFLEFBSUEsQUFJQSxBQUlDLEFBV0UsQUFPRCxBQVNBLEFBUUQsQUFVRixBQUdBLEFBR0QsQUFHRyxBQU9DLEFBU0EsQUFTQSxBQUdBLEFBS0MsQUFRQyxBQUtILEFBSUMsQUFLRSxBQUtILEFBUUUsQUFVWSxBQUk1QixBQUkwQixBQUkxQixBQUl1QixBQUdDLEFBS0EsQUFHRCxBQUtSLEFBR0EsQUFLQSxBQUdBLEFBd0JKLEFBR0csQUFTQSxBQU91QyxBQVVwQyxBQUdGLEFBR0EsQUFHRyxBQUdMLEFBWUMsQUFXSSxBQUlKLEFBR0ssQUFRQSxBQWNOLEFBR0EsQUFHSyxBQUlKLEFBT0EsQUFRRSxBQU9DLEFBT3JCLEFBRW1CLEFBS0MsQUFJRixBQU9BLEFBUXFCLEFBWUEsQUFZckIsQUFhRSxBQUtGLEFBZ0JBLFVBOWRBLEFBa0NBLEFBaUZqQixBQWlISSxBQUdBLEFBS0EsQUFHQSxBQXdCSixDQW5SZ0IsQUF5SGhCLEFBR0EsQ0E1RGlCLEFBSUQsQUFJQyxBQW9QSSxBQW9EckIsQUFHQSxDQTVCQSxBQStEQSxDQXhUbUIsQUFTQSxBQWtDRixBQVNBLEFBU2pCLEFBR2dCLEFBc0JJLEFBK0hwQixBQUdBLEFBbUdvQixDQXBhTyxBQWlDVixBQW9CakIsQUE2Q29CLEFBNEVELEFBbUNuQixBQW1NOEQsQUFxQjVDLEFBd0RXLENBM1NULEFBY0YsQUF1SGxCLENBMVFBLEFBbVJBLEFBMEJ1QixBQW1DRixDQXRKakIsQUFXQSxBQStHc0IsQUFRQSxDQS9IdEIsQUFLQSxJQXZPZSxBQWNuQixDQXNEQSxDQWxIb0IsQUFZQSxBQWtHcEIsQUFRQSxDQXNGaUIsRUFpUEEsQ0FqVEcsQUFTQSxBQXFORCxBQWtHbkIsQ0EzUHNCLEFBaUJKLEFBS0EsQ0FsR0YsQ0FvRkcsQ0FxUUosQUFZQSxDQXRFZixFQW5DQSxFQWxWOEMsQ0E4SjlDLENBMkxtQixBQVFBLEFBb0hELENBbmdCb0IsQUFZcEIsQUFpYkMsRUF4VEksQ0E2RnZCLEFBS0EsQUFtSW1CLEFBb0hVLEFBWUEsQ0E5VmIsQUFTQSxFQW9FaEIsQ0FSdUIsRUE4Q25CLEFBS0EsRUE4RXNCLEVBdEZ0QixBQVdBLEFBZ01KLEFBNkRBLENBdmZzQyxBQTJYbkIsQUFRQSxDQStDbkIsQ0FsVGdCLEFBU0MsRUFzTk0sR0F0T3ZCLE9BcEdnRCxBQTRHekIsQUFpVk4sQUFZQSxDQXBWTSxBQWtQTCxBQVFBLEdBcUN5QyxDQW5iOUIsQUFvQkgsQUFpRE8sQUFnRFAsQUFtQ0gsQUFtQkosQUE4Q1EsQUFjQSxBQXdGSixBQVNVLEFBUWQsQUFpQ2MsQUFrRFAsQUFPQSxBQWlDUixBQU9RLEFBZ0NZLEFBa0JYLEFBZ0JNLElBMUtsQixJQW1ITSxBQVlBLEVBalpGLEFBZ1RuQixBQVFBLElBcFk2QixBQWdJN0IsQUF1Q3VCLEFBU0EsQUFpUkwsQ0E3WVEsQUFxRjFCLEFBNExnQixBQTZCaEIsVUE3VzBCLEFBNmRSLEFBWUEsRUF4SkQsQ0E0SEMsS0FxQ0osTUF0ZVksQUFrZFYsQUFZQSxDQXhKQyxFQTRIakIsQ0FxQ3FCLElBbGZJLElBOGRILEFBWUEsR0F4RGdDLEdBeFFyQixHQXlVUCxDQXZlRCxNQTJFRixBQXNISCxDQTVNSSxDQXNKTCxBQXVLQSxBQWlLSCxBQVlBLFNBeGRPLEFBaUdJLEFBOFNKLEFBUXVDLEFBd0MvQyxHQWNmLEFBWWlCLENBL2RPLEFBdWVOLENBbFVLLEFBU0EsQUFtQnZCLEtBNU1xQixDQWlkRSxJQXBaQSxDQThhdkIsRUFRcUIsR0E3UnJCLEFBY2tCLEFBNlJLLEdBcmZGLEVBcWFyQixTQTVNb0IsQUErUUcsQ0E1Y0UsQUF3U0UsU0E5UUYsQUFtUUMsQUF5QzFCLEFBbUttQixHQTNYZSxBQXVLbkIsRUF2Rk8sSUErUUosSUEvWmdCLEFBbVZ5QixDQTNHMUIsT0F6UGxDLEVBa0tlLEFBK1FNLEdBMWRFLE1BeUN0QixDQW1LQSxRQS9MdUIsR0FYdUMsSUFYL0MsQUE4WVksRUFoYTNCLEdBZ0xrQyxBQVNBLENBdkVYLEdBc0RKLEFBeVduQixFQTlmbUIsQUErYm5CLENBeGE4RCxHQW1COUQsQUF5YmlDLENBMWVqQyxJQTZac0QsQ0F3Ri9CLEdBeFZMLEVBckpsQixJQWlUb0IsUUEzSnBCLElBc0t1QixJQVR2QixRQXpTMkQsZ0JBYUEsQUEyRzVDLEFBb1JmLFVBcFZtQixDQWlFQSxRQXVLSSxNQXZPQSxDQW1FdkIsR0FyQ21CLEFBNFNuQixVQWxZc0QsS0F5RC9CLEFBOEJILEFBNFlwQixNQWhWdUIsQUFRUCxLQTlJc0MsS0EyRXRELEVBb0VxQixDQWxHSCxFQXdQbEIsR0FzS0EsQ0FwVUEsUUF4Rm1CLEVBaUduQixVQTVKQSxHQTREOEQsYUEvQzlELE9Ba1JrQixjQUNsQix3QkFuTzJELHVEQUNMLGtEQUd0RCIsImZpbGUiOiJDOlxcVXNlcnNcXGRpYW1vXFxEZXNrdG9wXFxHaXRGaWxlc1xccG9ydGZvbGlvXFxjbGllbnRcXGNvbXBvbmVudHNcXFNlY3Rpb24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xyXG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1RyYW5zaXRpb24nXHJcbmltcG9ydCB7IFRpQXJyb3dVcFRoaWNrIH0gZnJvbSBcInJlYWN0LWljb25zL3RpXCI7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xyXG5pbXBvcnQgUmVhY3RDYXJkRmxpcCBmcm9tICdyZWFjdC1jYXJkLWZsaXAnO1xyXG5pbXBvcnQgeyBEaVJlYWN0LCBEaUphdmFzY3JpcHQxLCBEaUJvb3RzdHJhcCwgRGlTYXNzLCBEaUxlc3MsIERpQ3NzMywgRGlIdG1sNSwgRGlHaXRodWJCYWRnZSwgRGlHaXQsIERpTm9kZWpzU21hbGwsIERpTXlzcWwsIERpUG9zdGdyZXNxbCB9IGZyb20gXCJyZWFjdC1pY29ucy9kaVwiO1xyXG5pbXBvcnQgeyBGYUNoYXJ0TGluZSwgRmFHbG9iZUFtZXJpY2FzLCBGYVBhcGVyUGxhbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgTWRQaG9uZWxpbmssIE1kTGlnaHRidWxiT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgQWN0aXZlQ2FyZCBmcm9tICcuL2ljb24vQWN0aXZlQ2FyZCdcclxuaW1wb3J0IHsgRmlEb3dubG9hZCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgTWVkaWFDYXJkIGZyb20gJy4vcHJvamVjdHMvTWVkaWFDYXJkJ1xyXG5pbXBvcnQgQ3VzdG9taXplZERpYWxvZ3MgZnJvbSAnLi9wcm9qZWN0cy9DdXN0b21pemVkRGlhbG9ncydcclxuLy8gaW1wb3J0IHsgRG9jdW1lbnQsIFBhZ2UgfSBmcm9tICdyZWFjdC1wZGYnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbih7dGl0bGUsIGlkLCBpbWFnZSwgY2xhc3NOYW1lUHJvcCwgZGFyaywgc2tpbGxzLCBwb3J0Zm9saW8sIHJlc3VtZSwgY29udGFjdH0pIHtcclxuICAgIGNvbnN0IFtpc0ZsaXBwZWQsIHNldElzRmxpcHBlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc0ZsaXBwZWQyLCBzZXRJc0ZsaXBwZWQyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzRmxpcHBlZDMsIHNldElzRmxpcHBlZDNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbYmFja2VuZCwgc2V0QmFja2VuZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtmcm9udGVuZCwgc2V0RnJvbnRlbmRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZGV2b3BzLCBzZXREZXZvcHNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbYWN0aXZlU2tpbGwsIHNldEFjdGl2ZVNraWxsXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbcmVzdW1lVmlldywgc2V0UmVzdW1lVmlld10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICAvLyBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgIC8vICAgICBzY3JvbGwuc2Nyb2xsVG9Ub3AoKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IGNsaWNrTWVGcm9udCA9ICgpID0+IHtcclxuICAgICAgICBzZXRGcm9udGVuZCh0cnVlKVxyXG4gICAgICAgIHNldElzRmxpcHBlZCh0cnVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tNZUZyb250QmFjayA9ICgpID0+IHtcclxuICAgICAgICBzZXRGcm9udGVuZChmYWxzZSlcclxuICAgICAgICBzZXRJc0ZsaXBwZWQoZmFsc2UpXHJcbiAgICAgICAgc2V0QWN0aXZlU2tpbGwobnVsbClcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrTWVCYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJhY2tlbmQodHJ1ZSlcclxuICAgICAgICBzZXRJc0ZsaXBwZWQyKHRydWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja01lQmFja0Zyb250ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJhY2tlbmQoZmFsc2UpXHJcbiAgICAgICAgc2V0SXNGbGlwcGVkMihmYWxzZSlcclxuICAgICAgICBzZXRBY3RpdmVTa2lsbChudWxsKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tNZURldiA9ICgpID0+IHtcclxuICAgICAgICBzZXREZXZvcHModHJ1ZSlcclxuICAgICAgICBzZXRJc0ZsaXBwZWQzKHRydWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja01lRGV2QmFjayA9ICgpID0+IHtcclxuICAgICAgICBzZXREZXZvcHMoZmFsc2UpXHJcbiAgICAgICAgc2V0SXNGbGlwcGVkMyhmYWxzZSlcclxuICAgICAgICBzZXRBY3RpdmVTa2lsbChudWxsKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvVG9wKClcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZVByb3B9PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e1wic2VjdGlvblwiICsgKGRhcmsgPyBcIiBzZWN0aW9uLWRhcmtcIiA6IFwiXCIpfT4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIiBpZD17aWR9PlxyXG4gICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj0nZmFkZUluJyBkdXJhdGlvbj17Mn0+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHtza2lsbHMgPyA8aDIgY2xhc3NOYW1lPSd0aXRsZS1jZW50ZXInPjxzcGFuIGNsYXNzTmFtZT17ZGFyayA/ICd0aXRsZS1kYXJrIHRpdGxlLXNraWxscycgOiAndGl0bGUgdGl0bGUtc2tpbGxzJ30+e3RpdGxlfTwvc3Bhbj48L2gyPiA6IDxoMiBjbGFzc05hbWU9J3RpdGxlLWNlbnRlcic+PHNwYW4gY2xhc3NOYW1lPXtkYXJrID8gJ3RpdGxlLWRhcmsnIDogJ3RpdGxlJ30+e3RpdGxlfTwvc3Bhbj48L2gyPn1cclxuXHJcbiAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICB7LyogRHluYW1pYyBTZWN0aW9ucyAqL31cclxuXHJcbiAgICAgICAgICAgIHtza2lsbHMgJiZcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgey8qIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZXMtbW9kYWwnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zyb250ZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0Q2FyZEZsaXAgaXNGbGlwcGVkPXtpc0ZsaXBwZWR9IGZsaXBEaXJlY3Rpb249J2hvcml6b250YWwnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBjbGFzc05hbWU9eydzdW5mbG93ZXInfSBzcmM9Jy4uL3N0YXRpYy90cmVlRklOQUwucG5nJyBhbHQ9J1RyZWUgQ2Fub3B5IEltYWdlJyBrZXk9e2Zyb250ZW5kID8gbnVsbCA6ICdmcm9udCd9IG9uQ2xpY2s9e2NsaWNrTWVGcm9udH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoMiBrZXk9J2Zyb250JyBzdHlsZT17eyBjb2xvcjogJ3BpbmsnLCB6SW5kZXg6IDgwfX0+RnJvbnQgRW5kPC9oMj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3ZpZXcgY2Fub3B5LXZpZXcnfSBrZXk9J2JhY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1iYWNrIGNhcmQtYmFjay1jYW5vcHkgJz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2Fub3B5LWhlYWRlciBtYXJnaW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJza2lsbHMtdGl0bGUgb3BhY2l0eVwiPkZyb250IEVuZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ggb3BhY2l0eSc+PHAgY2xhc3NOYW1lPSdjbG9zZS1idXR0b24nIG9uQ2xpY2s9e2NsaWNrTWVGcm9udEJhY2t9Plg8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaWNvbnMgY2FyZC1pY29ucy1jYW5vcHknPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25zLmZyb250ZW5kLm1hcChpY29uID0+IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbi5pY29uID09PSBcIkRpSHRtbDVcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250Jz48RGlIdG1sNSBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNFNTREMjYnfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaUNzczNcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250Jz48RGlDc3MzIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzNEOEZDNid9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpTGVzc1wiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnPjxEaUxlc3Mgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjMkE0RDgwJ319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlTYXNzXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3ZlciBmcm9udCc+PERpU2FzcyBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNDQzY2OTknfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaUJvb3RzdHJhcFwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnPjxEaUJvb3RzdHJhcCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyM1QjQyODInfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaUphdmFzY3JpcHQxXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3ZlciBmcm9udCc+PERpSmF2YXNjcmlwdDEgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjRjBEQjRGJ319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlSZWFjdFwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnPjxEaVJlYWN0IHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzYxREFGQid9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcImltZyBzcmM9Jy4uL3N0YXRpYy9yZWR1eC5wbmcnIGFsdD0nUmVkdXggSWNvbidcIiA/IDxpbWcgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250JyBzcmM9Jy4uL3N0YXRpYy9yZWR1eC5wbmcnIGFsdD0nUmVkdXggSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc3NXB4JywgbWF4SGVpZ2h0OiAnNzBweCcsIG1hcmdpbjogJzElJyB9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcImltZyBzcmM9Jy4uL3N0YXRpYy9uZXh0LXRleHQucG5nJyBhbHQ9J05leHQgSWNvbidcIiA/IDxpbWcgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250JyBzcmM9Jy4uL3N0YXRpYy9uZXh0LXRleHQucG5nJyBhbHQ9J05leHQgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc3NXB4JywgbWF4SGVpZ2h0OiAnNzVweCcsIG1hcmdpblJpZ2h0OiAnNSUnIH19IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IC8+ICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdENhcmRGbGlwPiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXZPcHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RDYXJkRmxpcCBpc0ZsaXBwZWQ9e2lzRmxpcHBlZDN9IGZsaXBEaXJlY3Rpb249J2hvcml6b250YWwnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgY2xhc3NOYW1lPXsnZGV2b3BzJ30gc3JjPScuLi9zdGF0aWMvZGV2b3BzLnBuZycgYWx0PSdUcmVlIENhbm9weSBJbWFnZScga2V5PXtkZXZvcHMgPyBudWxsIDogJ2Zyb250J30gb25DbGljaz17Y2xpY2tNZURldn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd2aWV3IGRldi12aWV3J30ga2V5PSdiYWNrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYmFjay1kZXYgY2FyZC1iYWNrLWRldm9wcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXYtaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2tpbGxzLXRpdGxlLWRldlwiPkRldk9wczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3gnPjxwIGNsYXNzTmFtZT0nY2xvc2UtYnV0dG9uLWRldicgb25DbGljaz17Y2xpY2tNZURldkJhY2t9Plg8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1pY29ucy1kZXYnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25zLmRldm9wcy5tYXAoaWNvbiA9PiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb24uaWNvbiA9PT0gXCJEaUdpdFwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXInPjxEaUdpdCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNGMzRGMjknfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaUdpdGh1YkJhZGdlXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3Zlcic+PERpR2l0aHViQmFkZ2Ugc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjMTgxNjE2J319ICBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIk5ldGxpZnlcIiA/IDxpbWcgY2xhc3NOYW1lPSdpY29uLWhvdmVyJyBzcmM9Jy4uL3N0YXRpYy9uZXRsaWZ5LnBuZycgYWx0PSdOZXRsaWZ5IEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNzVweCcsIGhlaWdodDogJzc1cHgnLCBtYXJnaW5Ub3A6ICcyLjI1JScsIHBhZGRpbmdMZWZ0OiAnMiUnIH19IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiSGVyb2t1XCIgPyA8aW1nIGNsYXNzTmFtZT0naGVyb2t1IGljb24taG92ZXInIHNyYz0nLi4vc3RhdGljL2hlcm9rdXUucG5nJyBhbHQ9J0hlcm9rdSBJY29uJyBzdHlsZT17eyB3aWR0aDogJzkwcHgnLCBoZWlnaHQ6ICc5MHB4JywgbWFyZ2luVG9wOiAnMSUnLCBwYWRkaW5nTGVmdDogJzIlJ319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0Q2FyZEZsaXA+ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tlbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RDYXJkRmxpcCBpc0ZsaXBwZWQ9e2lzRmxpcHBlZDJ9IGZsaXBEaXJlY3Rpb249J2hvcml6b250YWwnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdyb290cycgc3JjPScuLi9zdGF0aWMvcm9vdHMucG5nJyBhbHQ9J1Jvb3RzIEltYWdlJyBrZXk9e2JhY2tlbmQgPyBudWxsIDogJ2Zyb250J30gb25DbGljaz17Y2xpY2tNZUJhY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3ZpZXcgY2Fub3B5LXZpZXcnfSBrZXk9J2JhY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYmFjayBjYXJkLWJhY2stY2Fub3B5ICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Nhbm9weS1oZWFkZXIgbWFyZ2luLWJhY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdza2lsbHMtdGl0bGUnPkJhY2sgRW5kPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3gnPjxwIGNsYXNzTmFtZT0nY2xvc2UtYnV0dG9uJyBvbkNsaWNrPXtjbGlja01lQmFja0Zyb250fT5YPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1pY29ucyc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbnMuYmFja2VuZC5tYXAoaWNvbiA9PiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbi5pY29uID09PSBcIkRpR2l0XCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3Zlcic+PERpR2l0IHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnI0YzNEYyOSd9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpR2l0aHViQmFkZ2VcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyJz48RGlHaXRodWJCYWRnZSBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMxODE2MTYnfX0gIG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiaU5vZGVqc1NtYWxsXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3Zlcic+PERpTm9kZWpzU21hbGwgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjODNDRDI5J319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiaW1nIHNyYz0nLi4vc3RhdGljL2V4cHJlc3NGaW5hbC5wbmcnIGFsdD0nRXhwcmVzcyBJY29uJ1wiID8gPGltZyBjbGFzc05hbWU9J2ljb24taG92ZXInIHNyYz0nLi4vc3RhdGljL2V4cHJlc3NGaW5hbC5wbmcnIGFsdD0nRXhwcmVzcyBJY29uJyBzdHlsZT17eyB3aWR0aDogJzc1cHgnLCBoZWlnaHQ6ICc3NXB4JywgbWFyZ2luVG9wOiAnMiUnLCBwYWRkaW5nTGVmdDogJzIlJyB9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcImltZyBzcmM9Jy4uL3N0YXRpYy9rbmV4anMucG5nJyBhbHQ9J0tuZXguanMgSWNvbidcIiA/IDxpbWcgY2xhc3NOYW1lPSdpY29uLWhvdmVyJyBzcmM9Jy4uL3N0YXRpYy9rbmV4anMucG5nJyBhbHQ9J0tuZXguanMgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc3NXB4JywgaGVpZ2h0OiAnNzVweCcsIG1hcmdpblRvcDogJzIlJywgcGFkZGluZ0xlZnQ6ICcyJScgfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaU15c3FsXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3Zlcic+PERpTXlzcWwgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjMDA2MThBJywgbWFyZ2luTGVmdDogJzE0JSd9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpUG9zdGdyZXNxbFwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXInPjxEaVBvc3RncmVzcWwgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjMzM2NzkxJywgbWFyZ2luUmlnaHQ6ICcxMiUnfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdENhcmRGbGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwnPlxyXG4gICAgICAgICAgICAgICAgey8qIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgIHtmcm9udGVuZCB8fCBiYWNrZW5kIHx8IGRldm9wcyA/IDxoNiBjbGFzc05hbWU9e2FjdGl2ZVNraWxsID8gXCJpY29uLXNlbGVjdGVkXCIgOiBcInNlbGVjdC1pY29uXCJ9PlNlbGVjdCBhbiBJY29uPC9oNj4gOiA8aDYgY2xhc3NOYW1lPSdzZWxlY3QtaW1hZ2UnPlNlbGVjdCBhbiBJbWFnZTwvaDY+fVxyXG4gICAgICAgICAgICAgICAgICAgICB7YWN0aXZlU2tpbGwgJiYgPEFjdGl2ZUNhcmQgYWN0aXZlU2tpbGw9e2FjdGl2ZVNraWxsfSAvPiB9XHJcbiAgICAgICAgICAgICAgICB7LyogPC9TY3JvbGxBbmltYXRpb24+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlcyc+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIGVmZmljaWVudCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nLi4vc3RhdGljL0RhcmtCYWRnZS5wbmcnIHdpZHRoPXsxNzV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGFydExpbmUgc3R5bGU9e3sgY29sb3I6ICcjRTVFN0U2JywgZm9udFNpemU6ICc2cmVtJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJyMwMDBjMWYnLCBmb250V2VpZ2h0OiAnYm9sZGVyJ319PkVmZmljaWVudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgIHN0eWxlPXt7IGNvbG9yOiAnIzE0MTMwMSd9fT5tYXhpbXVtIHByb2R1Y3Rpdml0eTsgd2VsbC1vcmdhbml6ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogcmVzcG9uc2l2ZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZFBob25lbGluayBzdHlsZT17eyBjb2xvcjogJyNFNUU3RTYnLCBmb250U2l6ZTogJzZyZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJyMwMDBjMWYnLCBmb250V2VpZ2h0OiAnYm9sZGVyJ319PlJlc3BvbnNpdmU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnIzE0MTMwMSd9fT5vcHRpbWl6ZWQgbGF5b3V0cyBmb3IgYWxsIGRldmljZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogY3JlYXRpdmUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2Utc3R5bGVzJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWRMaWdodGJ1bGJPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnI0U1RTdFNicsIGZvbnRTaXplOiAnNnJlbScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjMDAwYzFmJywgZm9udFdlaWdodDogJ2JvbGRlcid9fT5DcmVhdGl2ZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMTQxMzAxJ319PmhpZ2hlc3QgcXVhbGl0eSBzb2x1dGlvbnMgcHJvdmlkZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogZHluYW1pYyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMgZHluYW1pYyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhR2xvYmVBbWVyaWNhcyBzdHlsZT17eyBjb2xvcjogJyNFNUU3RTYnLCBmb250U2l6ZTogJzZyZW0nIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjMDAwYzFmJywgZm9udFdlaWdodDogJ2JvbGRlcid9fT5EeW5hbWljPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMxNDEzMDEnfX0+cmVmbGVjdHMgcmVhbC10aW1lIGNoYW5nZXMgaW4gdmFsdWVzIHdpdGggYWN0aXZpdHkuICBCdWlsdCB3aXRoIERSWSwgcmV1c2FibGUgY29tcG9uZW50cy4gPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPC9TY3JvbGxBbmltYXRpb24+ICovfVxyXG4gICAgICAgICAgICA8Lz59XHJcblxyXG4gICAgICAgICAgICB7cG9ydGZvbGlvICYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3J0Zm9saW8tY29udGFpbmVyJz5cclxuICAgICAgICAgICAgey8qIDxNZWRpYUNhcmQgLz4gKi99XHJcbiAgICAgICAgICAgIDxDdXN0b21pemVkRGlhbG9ncyBvbmUgaW1hZ2U9eycuLi9zdGF0aWMvd2VsbERvbmVQcm9qZWN0SW1hZ2UucG5nJ30gdGl0bGU9J1dlbGxEb25lIEludGVybmF0aW9uYWwnIC8+XHJcbiAgICAgICAgICAgIDxDdXN0b21pemVkRGlhbG9ncyB0d28gaW1hZ2U9eycuLi9zdGF0aWMvbmV0bGlmeS5wbmcnfSB0aXRsZT0ndGl0bGUgMiBoZXJlJyBpY29ucz0ncHJvamVjdCBpY29ucyBoZXJlJyAvPlxyXG4gICAgICAgICAgICA8Q3VzdG9taXplZERpYWxvZ3MgdGhyZWUgaW1hZ2U9eycuLi9zdGF0aWMvcmVkdXgucG5nJ30gdGl0bGU9J3RpdGxlIDMgaGVyZScgaWNvbnM9J3Byb2plY3QgaWNvbnMgaGVyZScgLz5cclxuICAgICAgICAgICAgPEN1c3RvbWl6ZWREaWFsb2dzIGZvdXIgaW1hZ2U9eycuLi9zdGF0aWMvbmV4dC10ZXh0LnBuZyd9IHRpdGxlPSd0aXRsZSA0IGhlcmUnIGljb25zPSdwcm9qZWN0IGljb25zIGhlcmUnIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49J2ZhZGVJbicgZHVyYXRpb249ezJ9PiAqL31cclxuICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT17ZGFyayA/IG51bGwgOiAnbGlnaHQtdGV4dCd9PlBPUlRGT0xJTyBDT05URU5UIFRFU1QgLSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3J1bSBxdWlidXNkYW0gcXVpZGVtIG1vZGksIGNvbW1vZGkgYWxpcXVhbSBmdWdhIHF1YWVyYXQsIGlwc3VtIG9wdGlvIG1vbGVzdGlhcyBkb2xvcmVzLCBhdXQgYWNjdXNhbnRpdW0gY29uc2VxdWF0dXIgZXhwZWRpdGEuIFZlcml0YXRpcywgcmVjdXNhbmRhZSBkb2xvcmUuIEFjY3VzYW11cywgZXJyb3IgZGVsZWN0dXMhXHJcbiAgICAgICAgICAgIENvbW1vZGkgbWFnbmkgdm9sdXB0YXMgbmVtbyBlYXJ1bSBwZXJmZXJlbmRpcyB2b2x1cHRhdHVtIG9kaW8gZGlnbmlzc2ltb3MgbW9sZXN0aWFlIGVzc2UgYXV0LiBOYW0gcXVhZSBiZWF0YWUgbWFnbmFtIGVhLCB2b2x1cHRhdGlidXMgbWludXMgZW5pbSB2aXRhZSBjdWxwYSwgY3VtIGV4cGVkaXRhIGZ1Z2EgbmVzY2l1bnQgbnVsbGEsIHV0IHNpbWlsaXF1ZSBjb3JydXB0aT9cclxuICAgICAgICAgICAgQ3VtcXVlIHF1aXMgaWxsbyBlaXVzIGRvbG9yZW1xdWUgYWNjdXNhbXVzIGFsaXF1aWQgYXJjaGl0ZWN0byEgUGFyaWF0dXIgcHJvdmlkZW50IGN1bXF1ZSBtaW5pbWEgY29ycG9yaXMgbWFpb3Jlcy4gQXNwZXJpb3JlcywgZGViaXRpcyBldmVuaWV0LiBRdWFlcmF0LCBwb3JybyB0ZW5ldHVyIHF1YW0gcmF0aW9uZSBzdXNjaXBpdCBub24gdm9sdXB0YXRlcyBjdXBpZGl0YXRlIHRvdGFtIHF1aXMgY29ycnVwdGkgb2ZmaWNpaXMhXHJcbiAgICAgICAgICAgIEFsaXF1YW0gZGljdGEgYXQgbW9sZXN0aWFzIGRpZ25pc3NpbW9zLCBpbGx1bSBhY2N1c2FtdXMsIHZpdGFlIHF1YWVyYXQgY29ycnVwdGkgcGVyZmVyZW5kaXMgYWQgb2JjYWVjYXRpIGhpYyBjdWxwYSBpdXN0byB0ZW1wb3JhIG1hZ25pIHNpdCBpbmNpZHVudCBtaW5pbWEgdGVtcG9yZSBhdHF1ZSBkdWNpbXVzIG5lcXVlIHF1YWUuIE5pc2kgZXhlcmNpdGF0aW9uZW0gcHJvdmlkZW50IGJsYW5kaXRpaXMhXHJcbiAgICAgICAgICAgIEVycm9yIGF1dGVtIG9mZmljaWEgdGVuZXR1ciBzb2x1dGEgbnVsbGEgaWxsdW0sIHZlcm8gY29tbW9kaSByZWN1c2FuZGFlLCBmdWdhIG5vYmlzIG5hbSBmYWNlcmUgaXRhcXVlIGhhcnVtIG9mZmljaWlzISBQZXJmZXJlbmRpcyBpcHNhbSBlc3NlIGxhYm9yaW9zYW0gbmVxdWUgZW5pbSBxdW9kIHNpdC4gQ29uc2VxdXVudHVyIG1haW9yZXMgc29sdXRhIG9iY2FlY2F0aSBhc3Blcm5hdHVyP1xyXG4gICAgICAgICAgICBBc3Blcm5hdHVyLCBuaWhpbCBvZmZpY2lhISBFeHBlZGl0YSBkb2xvciBuZW1vIGl0YXF1ZSByYXRpb25lIGFjY3VzYW50aXVtIHVuZGUgdmVsIGFyY2hpdGVjdG8gcXVvZCBhY2N1c2FtdXMsIHRlbmV0dXIgYmxhbmRpdGlpcyBlc3NlIGxpYmVybyBsYWJvcnVtIGFtZXQsIGZ1Z2EgYWRpcGlzY2kuIFJlaWNpZW5kaXMgbGFib3J1bSBuYW0gZWFxdWUgbm9uIGVhcnVtIHF1aXMgZmFjZXJlLlxyXG4gICAgICAgICAgICBGdWdpdCBhY2N1c2FtdXMgYXBlcmlhbSBsYWJvcmUgcXVpc3F1YW0gYXV0LiBEb2xvciByZWljaWVuZGlzIGFsaXF1YW0gcXVvZCBmdWdpdCBwb3NzaW11cyBlYXJ1bSBuZXF1ZSwgaXVzdG8gcmF0aW9uZSBleHBlZGl0YT8gUmVpY2llbmRpcyBxdWkgc2FwaWVudGUgcG9zc2ltdXMgbm9zdHJ1bSBzYWVwZSBzaXQgZGlzdGluY3RpbyBwYXJpYXR1ciBhdXRlbSwgY29tbW9kaSBpcHNhIGVhcnVtLlxyXG4gICAgICAgICAgICBPZGl0IHJlcGVsbGF0IGluIG1vZGkgdGVtcG9yYSEgUXVpYSBxdWlzcXVhbSByZXBlbGxlbmR1cyBzZWQgcXVhc2kgc2l0IHNvbHV0YSBzaW50IG1hZ25hbSBxdWFlIG1vZGkgcmVpY2llbmRpcyBwYXJpYXR1ciBuaXNpIGZ1Z2EgY3VscGEsIHNhcGllbnRlIHZlbCB0ZW1wb3JhIHNpbWlsaXF1ZT8gUXVvcyBvZmZpY2lpcyBwb3NzaW11cyBkaWduaXNzaW1vcyBhZGlwaXNjaS5cclxuICAgICAgICAgICAgRXZlbmlldCBleHBsaWNhYm8gdm9sdXB0YXRlIGVsaWdlbmRpIGRvbG9yZW1xdWUgZXQgc3VzY2lwaXQsIHJlcnVtLCBvZmZpY2lpcyBuZXNjaXVudCBzYXBpZW50ZSBpcHNhIG1hZ25pIG51bXF1YW0gcXVhbSBhYiByZWN1c2FuZGFlIGhhcnVtIGluY2lkdW50IGN1bXF1ZSBlcnJvciB2b2x1cHRhdGVtIHRlbXBvcmlidXMgcXVhZSBtb2RpLCBudWxsYSBleD8gUmF0aW9uZSwgbW9kaSBjb25zZXF1dW50dXIhXHJcbiAgICAgICAgICAgIEl0YXF1ZSBleHBlZGl0YSB2ZWwgZG9sb3JlIGV4ZXJjaXRhdGlvbmVtIG9kaW8gb2ZmaWNpYSwgZW9zIGZ1Z2lhdCBvYmNhZWNhdGkgaW1wZWRpdCBhZGlwaXNjaSBzaW50IHJlY3VzYW5kYWUgY29uc2VxdXVudHVyIHBvc3NpbXVzIGNvbnNlY3RldHVyIHN1bnQgbmlzaSByZXBlbGxhdCB2b2x1cHRhdGVzIHJlcGVsbGVuZHVzIHF1aXNxdWFtIGVzc2UgYXNwZXJpb3JlcyBtaW51cyBlYS4gRmFjaWxpcywgYmVhdGFlIG9wdGlvLlxyXG4gICAgICAgICAgICBDb3Jwb3JpcyBlc3NlIG1vZGkgbGFib3J1bSBkb2xvcnVtLCBuaXNpIGF1dGVtIHBhcmlhdHVyIG1vbGxpdGlhLiBJbGxvLCBhY2N1c2FtdXMgc2VkIHByYWVzZW50aXVtIGF0cXVlIGVvcyBtYWduaS4gSGFydW0gYXV0IHJlcGVsbGVuZHVzIGNvbnNlcXVhdHVyIGxhYm9ydW0sIHByYWVzZW50aXVtIGNvbnNlcXV1bnR1ciB2b2x1cHRhdGVzIGRvbG9yZW1xdWUgcHJvdmlkZW50IG5paGlsIGVhcnVtIHRlbXBvcmUgZXN0IVxyXG4gICAgICAgICAgICBJdXN0byBwb3JybyB1bGxhbSBuZWNlc3NpdGF0aWJ1cyBkZWxlbml0aSBvZmZpY2lhIHJlcnVtIGlkIGRpc3RpbmN0aW8hIE5vbiwgdmVyaXRhdGlzIGlwc2EgY29uc2VjdGV0dXIgYXJjaGl0ZWN0byBpbGxvIHBsYWNlYXQgZXQgZXJyb3IgdmVsIGludmVudG9yZT8gTW9sbGl0aWEgZGVzZXJ1bnQgbWludXMgdm9sdXB0YXRlcyBwcmFlc2VudGl1bSBhbmltaS4gUmVydW0gcHJvdmlkZW50IHN1bnQgcXVhcyFcclxuICAgICAgICAgICAgTGFib3J1bSBxdWlidXNkYW0gaXVyZSB0b3RhbSBleHBsaWNhYm8gY3VscGEgdGVtcG9yaWJ1cywgb3B0aW8gdm9sdXB0YXRlbSBuZW1vIGF0IGVvcyB2b2x1cHRhcyBuZWNlc3NpdGF0aWJ1cyBkdWNpbXVzIHF1aSBjb25zZXF1YXR1ciBxdWFtIG5hdHVzIGRvbG9yIGV4LCBuYW0gY3VtcXVlLiBNb2RpIG9wdGlvIGF1dGVtIGFkaXBpc2NpIGlsbG8sIGNvbnNlY3RldHVyIHByb3ZpZGVudC5cclxuICAgICAgICAgICAgRW5pbSBzdXNjaXBpdCBjdW1xdWUgYW1ldCBibGFuZGl0aWlzIHZlcml0YXRpcyBzZWQgdmVuaWFtIGVhcnVtIGNvbnNlY3RldHVyIG5lcXVlIG1pbmltYSBxdWlzcXVhbSBkZWxlbml0aSBjdWxwYSB1dCBpdXJlIGlwc2EsIG5lY2Vzc2l0YXRpYnVzIGRpc3RpbmN0aW8gcmVjdXNhbmRhZSBjb21tb2RpIHVsbGFtISBMYWJvcmlvc2FtIG1heGltZSBzdXNjaXBpdCBoaWMgaW5jaWR1bnQgdGVtcG9yYSBoYXJ1bS5cclxuICAgICAgICAgICAgTWludXMgYXJjaGl0ZWN0byB2ZXJpdGF0aXMgaXBzdW0gaW4gZW9zIHJlbSB2ZWxpdCBzZXF1aT8gSWxsbyBjb3Jwb3JpcyBkaXN0aW5jdGlvIHF1aXNxdWFtIGlwc2EgdmVsaXQgbWFnbmFtLCBldCBtYXhpbWUgYWQgdGVtcG9yZSBzb2x1dGEgcGFyaWF0dXIgaW52ZW50b3JlIHZvbHVwdGFzIGlsbHVtIHRvdGFtIHJlcnVtIHZvbHVwdGF0aWJ1cyBxdWlhIGF0cXVlP1xyXG4gICAgICAgICAgICBRdWkgY3VwaWRpdGF0ZSBlYSBtb2xlc3RpYXMgaWQgcXVpc3F1YW0gbnVsbGEgYSEgVWxsYW0gbnVsbGEgbW9sZXN0aWFlIGFjY3VzYW50aXVtIGFuaW1pIG9wdGlvIGluIGRvbG9ydW0gb2JjYWVjYXRpLCBwZXJmZXJlbmRpcyBiZWF0YWUgZG9sb3JlcyBlc3QgY3VscGEgZG9sb3JlbXF1ZSB1bmRlIGl1c3RvIG5lbW8gc2FlcGUgbmVxdWUgcmVwdWRpYW5kYWUgaXN0ZS5cclxuICAgICAgICAgICAgRXZlbmlldCBkb2xvcnVtIGluY2lkdW50IG9iY2FlY2F0aSBpcHNhIHZlcm8gZXJyb3Igb2ZmaWNpaXMgZG9sb3JlbXF1ZSBkaXN0aW5jdGlvLCB2b2x1cHRhcyBhdHF1ZSB0b3RhbSBvZmZpY2lhIGxhYm9yZSB2ZXJpdGF0aXMgbW9sbGl0aWEgbm9zdHJ1bSB1dCB0ZW1wb3JpYnVzIHZvbHVwdGF0ZXMgcGxhY2VhdCBzb2x1dGEsIHVuZGUgaGljIGNvcnJ1cHRpIG5hdHVzIHBhcmlhdHVyIHF1YXMuIEFtZXQhXHJcbiAgICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8L1Njcm9sbEFuaW1hdGlvbj4gKi99XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgICAgIHtyZXN1bWUgJiZcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgey8qIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzdW1lLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPScuLi9zdGF0aWMvcmVzdW1lLnBkZicgZG93bmxvYWQ+PEZpRG93bmxvYWQgc3R5bGU9e3sgZm9udFNpemU6ICcyLjVyZW0nfX0gLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRldGFpbHMgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMiUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5IG9uQ2xpY2s9eygpPT4gc2V0UmVzdW1lVmlldyghcmVzdW1lVmlldyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtyZXN1bWVWaWV3ID8gPGg1PkNsaWNrIHRvIEhpZGU8L2g1PiA6IDxoNT5DbGljayBGb3IgTW9yZSBJbmZvPC9oNT59ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3VtZVZpZXcgPyA8ZGl2IGNsYXNzTmFtZT0ncmVzdW1lLWltZ3MgcmVzdW1lLWhlYWRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBzcmM9Jy4uL3N0YXRpYy90b3BGaW5hbFJlc3VtZS5wbmcnIGFsdD0ncmVzdW1lLWhlYWRlcicvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgc3JjPScuLi9zdGF0aWMvbWlkZGxlRmluYWxSZXN1bWUucG5nJyBhbHQ9J3Jlc3VtZS1ib3R0b20nLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIHNyYz0nLi4vc3RhdGljL2JvdHRvbUZpbmFsUmVzdW1lLnBuZycgYWx0PSdyZXN1bWUtdG9wJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdyZXN1bWUtaGVhZGVyJyBzcmM9Jy4uL3N0YXRpYy90b3BGaW5hbFJlc3VtZS5wbmcnIGFsdD0ncmVzdW1lLWhlYWRlcicvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPC9TY3JvbGxBbmltYXRpb24+ICovfVxyXG4gICAgICAgICAgICA8Lz59XHJcblxyXG4gICAgICAgICAgICB7Y29udGFjdCAmJlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49J2ZhZGVJbicgZHVyYXRpb249ezJ9PiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtJz5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm0tY29udGFpbmVyJyBhY3Rpb249XCJodHRwczovL2Zvcm1jYXJyeS5jb20vcy9iTjlZMUYtd3J6V1wiIG1ldGhvZD1cIlBPU1RcIiBhY2NlcHQtY2hhcnNldD1cIlVURi04XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPSdOYW1lJyByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9J0UtbWFpbCcgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj0nTWVzc2FnZScgY2xhc3NOYW1lPSdtZXNzYWdlJyByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfZ290Y2hhXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48ZGl2IGNsYXNzTmFtZT0nYnV0dG9uJyA+U2VuZCA8RmFQYXBlclBsYW5lIHN0eWxlPXt7IGZvbnRTaXplOiAnMS41cmVtJ319IC8+PC9kaXY+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8L1Njcm9sbEFuaW1hdGlvbj4gKi99XHJcbiAgICAgICAgICAgIDxoNSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0gY2xhc3NOYW1lPXsnYXJyb3ctdXAtaWNvbi1kYXJrJ30+PFRpQXJyb3dVcFRoaWNrIC8+PC9oNT5cclxuICAgICAgICAgICAgPC8+fVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8VHJhbnNpdGlvbiBpbWFnZT17aW1hZ2V9IGRhcms9e2Rhcmt9IGNvbnRhY3Q9e2NvbnRhY3R9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC8vICoge1xyXG4gICAgICAgIC8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC5saWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBXZWJraXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogSUUgMTAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRhcmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBXZWJraXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogSUUgMTAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnN1bmZsb3dlciwgLnJvb3RzLCAuZGV2b3BzIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGNvbG9yRmFkZU91dCAycywgc2hhcGVTaGlmdE91dCAycztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAzcHggc29saWQgIzE0MTMwMVxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnN1bmZsb3dlcjpob3ZlciwgLnJvb3RzOmhvdmVyLCAuZGV2b3BzOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogY29sb3JGYWRlSW4gMnMsIHNoYXBlU2hpZnRJbiAycztcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDNweCBzb2xpZCAjYjgwYzA5XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy1jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZyb250ZW5kLCAuYmFja2VuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDElO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogLTIwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy10aXRsZTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC52aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbmltYXRpb246IGZhZGVJbiAxcztcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmJmYmY4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMiUgNCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luOiAxJSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDQyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2Fub3B5LXZpZXcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2ODBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRldi12aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJvb3RzLXZpZXcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZC1iYWNrLWNhbm9weSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogVVJMKCcuLi9zdGF0aWMvY2Fub3B5VHJhbnNwYXJlbnQucG5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZC1iYWNrLWRldm9wcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogVVJMKCcuLi9zdGF0aWMvZGV2b3BzVHJhbnNwYXJlbnQucG5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtYmFjay1yb290cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogVVJMKCcuLi9zdGF0aWMvcm9vdHNUcmFuc3BhcmVudC5wbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaWNvbnMtY2Fub3B5IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pY29uLWhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pY29uLWhvdmVyOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaWNvbnMtZGV2IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAtNiUgNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGV2LWhlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogMCAyJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhbm9weS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTY1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2tpbGxzLXRpdGxlLWRldiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2xvc2UtYnV0dG9uLWRldiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlLWNlbnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZS1kYXJrIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRTVFN0U2O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93LXVwLWljb24tZGFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW0gO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93LXVwLWljb24tZGFyazpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gLmFycm93LXVwLWljb24ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbi1sZWZ0OiA0OSU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBjb2xvckZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDAlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgY29sb3JGYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzaGFwZVNoaWZ0SW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNoYXBlU2hpZnRPdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQGtleWZyYW1lcyBjaXJjbGVJbiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC13aWR0aDogNDk4cHg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC1oZWlnaHQ6IDQ5OHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBAa2V5ZnJhbWVzIGNpcmNsZU91dCB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtd2lkdGg6IDQ5OHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtaGVpZ2h0OiA0OThweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAuYW5pbWF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5nYXVnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5nYXVnZS1zdHlsZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2F1Z2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3RhdGljL0RhcmtCbHVlQmFkZ2UucG5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmR5bmFtaWMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlnaHQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUtc2tpbGxzIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTclO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZmJmYmY4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDI1NSwyNTUsMjU1LDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltYWdlcy1tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIC54IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAuY2xvc2UtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pY29uLXNlbGVjdGVkIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNlbGVjdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbjogZmFkZUluIDJzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNlbGVjdC1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbmltYXRpb246IGZhZGVJbiAycztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIC5zZWxlY3Rvcjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyOiAycHggc29saWQgIzFmMmE0NDtcclxuICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAuZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tYXJnaW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMiUgMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tYXJnaW4tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgICAgICAgICAucmVzdW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAucmVzdW1lLWltZ3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJlc3VtZS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdW1tYXJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTpcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDg0N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3VtbWFyeTo6LXdlYmtpdC1kZXRhaWxzLW1hcmtlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiN2I1YjM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjJhNDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDElIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyYTQ0O1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxJSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyYTQ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAqOmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gLm1lc3NhZ2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAucG9ydGZvbGlvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAuYXJyb3ctdXAtaWNvbiwgLmFycm93LXVwLWljb24tZGFyazoge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXJnaW4tdG9wOiAtMjFweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBpY29ucyA9IHtcclxuICAgIFwiZnJvbnRlbmRcIjogW1xyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJpY29uXCI6IFwiRGlHaXRcIixcclxuICAgICAgICAvLyAgICAgXCJuYW1lXCI6IFwiR2l0XCIsXHJcbiAgICAgICAgLy8gICAgIFwic3VidGl0bGVcIjogXCJTeXN0ZW0gU29mdHdhcmVcIixcclxuICAgICAgICAvLyAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdpdCBpcyBhIGRpc3RyaWJ1dGVkIHZlcnNpb24tY29udHJvbCBzeXN0ZW0gZm9yIHRyYWNraW5nIGNoYW5nZXMgaW4gc291cmNlIGNvZGUgZHVyaW5nIHNvZnR3YXJlIGRldmVsb3BtZW50LiBJdCBpcyBkZXNpZ25lZCBmb3IgY29vcmRpbmF0aW5nIHdvcmsgYW1vbmcgcHJvZ3JhbW1lcnMsIGJ1dCBpdCBjYW4gYmUgdXNlZCB0byB0cmFjayBjaGFuZ2VzIGluIGFueSBzZXQgb2YgZmlsZXMuIEl0cyBnb2FscyBpbmNsdWRlIHNwZWVkLCBkYXRhIGludGVncml0eSwgYW5kIHN1cHBvcnQgZm9yIGRpc3RyaWJ1dGVkLCBub24tbGluZWFyIHdvcmtmbG93cy5cIixcclxuICAgICAgICAvLyAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBcImljb25cIjogXCJEaUdpdGh1YkJhZGdlXCIsXHJcbiAgICAgICAgLy8gICAgIFwibmFtZVwiOiBcIkdpdEh1YlwiLFxyXG4gICAgICAgIC8vICAgICBcInN1YnRpdGxlXCI6IFwiU29mdHdhcmUgRGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgaXMgYW4gQW1lcmljYW4gY29tcGFueSB0aGF0IHByb3ZpZGVzIGhvc3RpbmcgZm9yIHNvZnR3YXJlIGRldmVsb3BtZW50IHZlcnNpb24gY29udHJvbCB1c2luZyBHaXQuIEl0IGlzIGEgc3Vic2lkaWFyeSBvZiBNaWNyb3NvZnQsIHdoaWNoIGFjcXVpcmVkIHRoZSBjb21wYW55IGluIDIwMTggZm9yICQ3LjUgYmlsbGlvbi5cIixcclxuICAgICAgICAvLyAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUh0bWw1XCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkhUTUw1XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJQcm9ncmFtbWluZyBMYW5ndWFnZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSFRNTDUgaXMgYSBzb2Z0d2FyZSBzb2x1dGlvbiBzdGFjayB0aGF0IGRlZmluZXMgdGhlIHByb3BlcnRpZXMgYW5kIGJlaGF2aW9ycyBvZiB3ZWIgcGFnZSBjb250ZW50IGJ5IGltcGxlbWVudGluZyBhIG1hcmt1cCBiYXNlZCBwYXR0ZXJuIHRvIGl0LiBIVE1MNSBpcyB0aGUgZmlmdGggYW5kIGN1cnJlbnQgbWFqb3IgdmVyc2lvbiBvZiBIVE1MLCBhbmQgc3Vic3VtZXMgWEhUTUwuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlDc3MzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNTUzNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlByb2dyYW1taW5nIExhbmd1YWdlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDU1MzIGlzIHRoZSBsYXRlc3QgZXZvbHV0aW9uIG9mIHRoZSBDYXNjYWRpbmcgU3R5bGUgU2hlZXRzIGxhbmd1YWdlIGFuZCBhaW1zIGF0IGV4dGVuZGluZyBDU1MyLjEuIEl0IGJyaW5ncyBhIGxvdCBvZiBsb25nLWF3YWl0ZWQgbm92ZWx0aWVzLCBsaWtlIHJvdW5kZWQgY29ybmVycywgc2hhZG93cywgZ3JhZGllbnRzLCB0cmFuc2l0aW9ucyBvciBhbmltYXRpb25zLCBhcyB3ZWxsIGFzIG5ldyBsYXlvdXRzIGxpa2UgbXVsdGktY29sdW1ucywgZmxleGlibGUgYm94IG9yIGdyaWQgbGF5b3V0cy5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUxlc3NcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGVzc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxlc3MgaXMgYSBkeW5hbWljIHByZXByb2Nlc3NvciBzdHlsZSBzaGVldCBsYW5ndWFnZSB0aGF0IGNhbiBiZSBjb21waWxlZCBpbnRvIENhc2NhZGluZyBTdHlsZSBTaGVldHMgYW5kIHJ1biBvbiB0aGUgY2xpZW50IHNpZGUgb3Igc2VydmVyIHNpZGUuIERlc2lnbmVkIGJ5IEFsZXhpcyBTZWxsaWVyLCBMZXNzIGlzIGluZmx1ZW5jZWQgYnkgU2FzcyBhbmQgaGFzIGluZmx1ZW5jZWQgdGhlIG5ld2VyIFxcXCJTQ1NTXFxcIiBzeW50YXggb2YgU2Fzcywgd2hpY2ggYWRhcHRlZCBpdHMgQ1NTLWxpa2UgYmxvY2sgZm9ybWF0dGluZyBzeW50YXguXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlTYXNzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlNhc3NcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlByb2dyYW1taW5nIExhbmd1YWdlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTYXNzIGlzIGEgc3R5bGUgc2hlZXQgbGFuZ3VhZ2UgaW5pdGlhbGx5IGRlc2lnbmVkIGJ5IEhhbXB0b24gQ2F0bGluIGFuZCBkZXZlbG9wZWQgYnkgTmF0YWxpZSBXZWl6ZW5iYXVtLiBBZnRlciBpdHMgaW5pdGlhbCB2ZXJzaW9ucywgV2VpemVuYmF1bSBhbmQgQ2hyaXMgRXBwc3RlaW4gaGF2ZSBjb250aW51ZWQgdG8gZXh0ZW5kIFNhc3Mgd2l0aCBTYXNzU2NyaXB0LCBhIHNpbXBsZSBzY3JpcHRpbmcgbGFuZ3VhZ2UgdXNlZCBpbiBTYXNzIGZpbGVzLiBcIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUJvb3RzdHJhcFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJCb290c3RyYXBcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkZyb250LWVuZCBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJvb3RzdHJhcCBpcyBhIGZyZWUgYW5kIG9wZW4tc291cmNlIENTUyBmcmFtZXdvcmsgZGlyZWN0ZWQgYXQgcmVzcG9uc2l2ZSwgbW9iaWxlLWZpcnN0IGZyb250LWVuZCB3ZWIgZGV2ZWxvcG1lbnQuIEl0IGNvbnRhaW5zIENTUy0gYW5kIEphdmFTY3JpcHQtYmFzZWQgZGVzaWduIHRlbXBsYXRlcyBmb3IgdHlwb2dyYXBoeSwgZm9ybXMsIGJ1dHRvbnMsIG5hdmlnYXRpb24gYW5kIG90aGVyIGludGVyZmFjZSBjb21wb25lbnRzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpSmF2YXNjcmlwdDFcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmF2YVNjcmlwdFwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiSGlnaC1sZXZlbCBQcm9ncmFtbWluZyBMYW5ndWFnZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSmF2YVNjcmlwdCwgb2Z0ZW4gYWJicmV2aWF0ZWQgYXMgSlMsIGlzIGEgaGlnaC1sZXZlbCwgaW50ZXJwcmV0ZWQgc2NyaXB0aW5nIGxhbmd1YWdlIHRoYXQgY29uZm9ybXMgdG8gdGhlIEVDTUFTY3JpcHQgc3BlY2lmaWNhdGlvbi4gSmF2YVNjcmlwdCBoYXMgY3VybHktYnJhY2tldCBzeW50YXgsIGR5bmFtaWMgdHlwaW5nLCBwcm90b3R5cGUtYmFzZWQgb2JqZWN0LW9yaWVudGF0aW9uLCBhbmQgZmlyc3QtY2xhc3MgZnVuY3Rpb25zLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpUmVhY3RcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmVhY3QuanNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIldlYiBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJlYWN0IGlzIGEgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBidWlsZGluZyB1c2VyIGludGVyZmFjZXMuIEl0IGlzIG1haW50YWluZWQgYnkgRmFjZWJvb2sgYW5kIGEgY29tbXVuaXR5IG9mIGluZGl2aWR1YWwgZGV2ZWxvcGVycyBhbmQgY29tcGFuaWVzLiBSZWFjdCBjYW4gYmUgdXNlZCBhcyBhIGJhc2UgaW4gdGhlIGRldmVsb3BtZW50IG9mIHNpbmdsZS1wYWdlIG9yIG1vYmlsZSBhcHBsaWNhdGlvbnMsIGFzIGl0IGlzIG9wdGltYWwgZm9yIGZldGNoaW5nIHJhcGlkbHkgY2hhbmdpbmcgZGF0YSB0aGF0IG5lZWRzIHRvIGJlIHJlY29yZGVkLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkZlYnJ1YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpbWcgc3JjPScuLi9zdGF0aWMvcmVkdXgucG5nJyBhbHQ9J1JlZHV4IEljb24nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlJlZHV4XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJKYXZhU2NyaXB0IExpYnJhcnlcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJlZHV4IGlzIGFuIG9wZW4tc291cmNlIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgbWFuYWdpbmcgYXBwbGljYXRpb24gc3RhdGUuIEl0IGlzIG1vc3QgY29tbW9ubHkgdXNlZCB3aXRoIGxpYnJhcmllcyBzdWNoIGFzIFJlYWN0IG9yIEFuZ3VsYXIgZm9yIGJ1aWxkaW5nIHVzZXIgaW50ZXJmYWNlcy4gU2ltaWxhciB0byBGYWNlYm9vaydzIEZsdXggYXJjaGl0ZWN0dXJlLCBpdCB3YXMgY3JlYXRlZCBieSBEYW4gQWJyYW1vdiBhbmQgQW5kcmV3IENsYXJrLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkZlYnJ1YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpbWcgc3JjPScuLi9zdGF0aWMvbmV4dC10ZXh0LnBuZycgYWx0PSdOZXh0IEljb24nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5leHQuanNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIldlYiBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5leHQuanMgaXMgYSBmcmVlIGFuZCBvcGVuIHNvdXJjZSB3ZWIgYXBwbGljYXRpb24gZnJhbWV3b3JrIGJhc2VkIG9uIFJlYWN0LmpzLCBOb2RlLmpzLCBXZWJwYWNrIGFuZCBCYWJlbC5qcy4gVGhlIGZyYW1ld29yayBpcyBhZHZlcnRpc2VkIGFzIFxcXCJtZXRhLWZyYW1ld29yayBmb3IgdW5pdmVyc2FsIGFwcGxpY2F0aW9uc1xcXCIuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiQXVndXN0IDIwMTlcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcImRldm9wc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUdpdFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJHaXRcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlN5c3RlbSBTb2Z0d2FyZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR2l0IGlzIGEgZGlzdHJpYnV0ZWQgdmVyc2lvbi1jb250cm9sIHN5c3RlbSBmb3IgdHJhY2tpbmcgY2hhbmdlcyBpbiBzb3VyY2UgY29kZSBkdXJpbmcgc29mdHdhcmUgZGV2ZWxvcG1lbnQuIEl0IGlzIGRlc2lnbmVkIGZvciBjb29yZGluYXRpbmcgd29yayBhbW9uZyBwcm9ncmFtbWVycywgYnV0IGl0IGNhbiBiZSB1c2VkIHRvIHRyYWNrIGNoYW5nZXMgaW4gYW55IHNldCBvZiBmaWxlcy4gSXRzIGdvYWxzIGluY2x1ZGUgc3BlZWQsIGRhdGEgaW50ZWdyaXR5LCBhbmQgc3VwcG9ydCBmb3IgZGlzdHJpYnV0ZWQsIG5vbi1saW5lYXIgd29ya2Zsb3dzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpR2l0aHViQmFkZ2VcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2l0SHViXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJTb2Z0d2FyZSBEZXZlbG9wZXIgUGxhdGZvcm1cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBpcyBhbiBBbWVyaWNhbiBjb21wYW55IHRoYXQgcHJvdmlkZXMgaG9zdGluZyBmb3Igc29mdHdhcmUgZGV2ZWxvcG1lbnQgdmVyc2lvbiBjb250cm9sIHVzaW5nIEdpdC4gSXQgaXMgYSBzdWJzaWRpYXJ5IG9mIE1pY3Jvc29mdCwgd2hpY2ggYWNxdWlyZWQgdGhlIGNvbXBhbnkgaW4gMjAxOCBmb3IgJDcuNSBiaWxsaW9uLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIk5ldGxpZnlcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmV0bGlmeVwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiUGxhdGZvcm1cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ldGxpZnkgaXMgYSBTYW4gRnJhbmNpc2NvLWJhc2VkIGNsb3VkIGNvbXB1dGluZyBjb21wYW55IHRoYXQgb2ZmZXJzIGhvc3RpbmcgYW5kIHNlcnZlcmxlc3MgYmFja2VuZCBzZXJ2aWNlcyBmb3Igc3RhdGljIHdlYnNpdGVzLiBJdCBmZWF0dXJlcyBjb250aW51b3VzIGRlcGxveW1lbnQgZnJvbSBHaXQgYWNyb3NzIGEgZ2xvYmFsIGFwcGxpY2F0aW9uIGRlbGl2ZXJ5IG5ldHdvcmssIHNlcnZlcmxlc3MgZm9ybSBoYW5kbGluZywgc3VwcG9ydCBmb3IgQVdTIExhbWJkYSBmdW5jdGlvbnMsIGFuZCBmdWxsIGludGVncmF0aW9uIHdpdGggTGV0J3MgRW5jcnlwdC5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJGZWJydWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiSGVyb2t1XCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkhlcm9rdVwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiUGxhdGZvcm1cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkhlcm9rdSBpcyBhIGNsb3VkIHBsYXRmb3JtIGFzIGEgc2VydmljZSBzdXBwb3J0aW5nIHNldmVyYWwgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VzLiBPbmUgb2YgdGhlIGZpcnN0IGNsb3VkIHBsYXRmb3JtcywgSGVyb2t1IGhhcyBiZWVuIGluIGRldmVsb3BtZW50IHNpbmNlIEp1bmUgMjAwNywgd2hlbiBpdCBzdXBwb3J0ZWQgb25seSB0aGUgUnVieSBwcm9ncmFtbWluZyBsYW5ndWFnZSwgYnV0IG5vdyBzdXBwb3J0cyBKYXZhLCBOb2RlLmpzLCBTY2FsYSwgQ2xvanVyZSwgUHl0aG9uLCBQSFAsIGFuZCBHby5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJNYXJjaCAyMDE5XCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCJiYWNrZW5kXCI6IFtcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiaWNvblwiOiBcIkRpR2l0XCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVzXCI6IHsgXCJmb250U2l6ZVwiOiBcIjZyZW1cIiwgXCJjb2xvclwiOiBcIiNGMzRGMjlcIn0sXHJcbiAgICAgICAgLy8gICAgIFwibmFtZVwiOiBcIkdpdFwiLFxyXG4gICAgICAgIC8vICAgICBcInN1YnRpdGxlXCI6IFwiU3lzdGVtIFNvZnR3YXJlXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZGVzY3JpcHRpb25cIjogXCJHaXQgaXMgYSBkaXN0cmlidXRlZCB2ZXJzaW9uLWNvbnRyb2wgc3lzdGVtIGZvciB0cmFja2luZyBjaGFuZ2VzIGluIHNvdXJjZSBjb2RlIGR1cmluZyBzb2Z0d2FyZSBkZXZlbG9wbWVudC4gSXQgaXMgZGVzaWduZWQgZm9yIGNvb3JkaW5hdGluZyB3b3JrIGFtb25nIHByb2dyYW1tZXJzLCBidXQgaXQgY2FuIGJlIHVzZWQgdG8gdHJhY2sgY2hhbmdlcyBpbiBhbnkgc2V0IG9mIGZpbGVzLiBJdHMgZ29hbHMgaW5jbHVkZSBzcGVlZCwgZGF0YSBpbnRlZ3JpdHksIGFuZCBzdXBwb3J0IGZvciBkaXN0cmlidXRlZCwgbm9uLWxpbmVhciB3b3JrZmxvd3MuXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJpY29uXCI6IFwiRGlHaXRodWJCYWRnZVwiLFxyXG4gICAgICAgIC8vICAgICBcInN0eWxlc1wiOiBcImdpdEh1YlN0eWxlc1wiLFxyXG4gICAgICAgIC8vICAgICBcIm5hbWVcIjogXCJHaXRIdWJcIixcclxuICAgICAgICAvLyAgICAgXCJzdWJ0aXRsZVwiOiBcIlNvZnR3YXJlIERldmVsb3BlclwiLFxyXG4gICAgICAgIC8vICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIGlzIGFuIEFtZXJpY2FuIGNvbXBhbnkgdGhhdCBwcm92aWRlcyBob3N0aW5nIGZvciBzb2Z0d2FyZSBkZXZlbG9wbWVudCB2ZXJzaW9uIGNvbnRyb2wgdXNpbmcgR2l0LiBJdCBpcyBhIHN1YnNpZGlhcnkgb2YgTWljcm9zb2Z0LCB3aGljaCBhY3F1aXJlZCB0aGUgY29tcGFueSBpbiAyMDE4IGZvciAkNy41IGJpbGxpb24uXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiaU5vZGVqc1NtYWxsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVzXCI6IFwibm9kZVN0eWxlc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOb2RlLmpzXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJKYXZhU2NyaXB0IFJ1bi10aW1lIEVudmlyb25tZW50XCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOb2RlLmpzIGlzIGFuIG9wZW4tc291cmNlLCBjcm9zcy1wbGF0Zm9ybSwgSmF2YVNjcmlwdCBydW4tdGltZSBlbnZpcm9ubWVudCB0aGF0IGV4ZWN1dGVzIEphdmFTY3JpcHQgY29kZSBvdXRzaWRlIG9mIGEgYnJvd3Nlci5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJNYXJjaCAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiaW1nIHNyYz0nLi4vc3RhdGljL2V4cHJlc3NGaW5hbC5wbmcnIGFsdD0nRXhwcmVzcyBJY29uJ1wiLFxyXG4gICAgICAgICAgICBcInN0eWxlc1wiOiBcImV4cHJlc3NTdHlsZXNcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRXhwcmVzcy5qc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiV2ViIEZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRXhwcmVzcy5qcywgb3Igc2ltcGx5IEV4cHJlc3MsIGlzIGEgd2ViIGFwcGxpY2F0aW9uIGZyYW1ld29yayBmb3IgTm9kZS5qcywgcmVsZWFzZWQgYXMgZnJlZSBhbmQgb3Blbi1zb3VyY2Ugc29mdHdhcmUgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBJdCBpcyBkZXNpZ25lZCBmb3IgYnVpbGRpbmcgd2ViIGFwcGxpY2F0aW9ucyBhbmQgQVBJcy4gSXQgaGFzIGJlZW4gY2FsbGVkIHRoZSBkZSBmYWN0byBzdGFuZGFyZCBzZXJ2ZXIgZnJhbWV3b3JrIGZvciBOb2RlLmpzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIk1hcmNoIDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpbWcgc3JjPScuLi9zdGF0aWMva25leGpzLnBuZycgYWx0PSdLbmV4LmpzIEljb24nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIktuZXguanNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkphdmFTY3JpcHQgUXVlcnkgQnVpbGRlclwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiIEtuZXguanMgaXMgYSBKYXZhU2NyaXB0IHF1ZXJ5IGJ1aWxkZXIgZm9yIHJlbGF0aW9uYWwgZGF0YWJhc2VzIGluY2x1ZGluZyBQb3N0Z3JlU1FMLCBNeVNRTCwgU1FMaXRlMywgYW5kIE9yYWNsZS4gSXQgY2FuIGJlIHVzZWQgd2l0aCBjYWxsYmFja3MgYW5kIHByb21pc2VzLiBJdCBzdXBwb3J0cyB0cmFuc2FjdGlvbnMgYW5kIGNvbm5lY3Rpb24gcG9vbGluZy5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJNYXJjaCAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlNeXNxbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlc1wiOiBcIm15U3FsU3R5bGVzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk15U1FMXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJTeXN0ZW0gU29mdHdhcmVcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk15U1FMIGlzIGFuIG9wZW4tc291cmNlIHJlbGF0aW9uYWwgZGF0YWJhc2UgbWFuYWdlbWVudCBzeXN0ZW0uIEl0cyBuYW1lIGlzIGEgY29tYmluYXRpb24gb2YgXFxcIk15XFxcIiwgdGhlIG5hbWUgb2YgY28tZm91bmRlciBNaWNoYWVsIFdpZGVuaXVzJ3MgZGF1Z2h0ZXIsIGFuZCBcXFwiU1FMXFxcIiwgdGhlIGFiYnJldmlhdGlvbiBmb3IgU3RydWN0dXJlZFwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIk1hcmNoIDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaVBvc3RncmVzcWxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXNcIjogXCJwb3N0Z3Jlc1N0eWxlc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJQb3N0Z3JlU1FMXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJTeXN0ZW0gU29mdHdhcmVcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlBvc3RncmVTUUwsIGFsc28ga25vd24gYXMgUG9zdGdyZXMsIGlzIGEgZnJlZSBhbmQgb3Blbi1zb3VyY2UgcmVsYXRpb25hbCBkYXRhYmFzZSBtYW5hZ2VtZW50IHN5c3RlbSBlbXBoYXNpemluZyBleHRlbnNpYmlsaXR5IGFuZCB0ZWNobmljYWwgc3RhbmRhcmRzIGNvbXBsaWFuY2UuIEl0IGlzIGRlc2lnbmVkIHRvIGhhbmRsZSBhIHJhbmdlIG9mIHdvcmtsb2FkcywgZnJvbSBzaW5nbGUgbWFjaGluZXMgdG8gZGF0YSB3YXJlaG91c2VzIG9yIFdlYiBzZXJ2aWNlcyB3aXRoIG1hbnkgY29uY3VycmVudCB1c2Vycy5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJNYXJjaCAyMDE5XCJcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbi8vIGNvbnN0IHdlbGxEb25lSW50ZXJuYXRpb25hbCA9IHtcclxuLy8gICAgIGNvbXBvbmVudHM6IFsgICBcclxuLy8gICAgICAgICAgICAgICAgICAgICA8RGlSZWFjdCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyM2MURBRkInfX0gLz4sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnIHNyYz0nLi4vc3RhdGljL25leHQtdGV4dC5wbmcnIGFsdD0nTmV4dCBJY29uJyBzdHlsZT17eyB3aWR0aDogJzc1cHgnLCBtYXhIZWlnaHQ6ICc3NXB4JywgbWFyZ2luUmlnaHQ6ICc1JScgfX0gLz4sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPERpTm9kZWpzU21hbGwgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjODNDRDI5J319IC8+LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uLWhvdmVyJyBzcmM9Jy4uL3N0YXRpYy9leHByZXNzRmluYWwucG5nJyBhbHQ9J0V4cHJlc3MgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc3NXB4JywgaGVpZ2h0OiAnNzVweCcsIG1hcmdpblRvcDogJzIlJywgcGFkZGluZ0xlZnQ6ICcyJScgfX0gLz4sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24taG92ZXInIHNyYz0nLi4vc3RhdGljL25ldGxpZnkucG5nJyBhbHQ9J05ldGxpZnkgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc3NXB4JywgaGVpZ2h0OiAnNzVweCcsIG1hcmdpblRvcDogJzIuMjUlJywgcGFkZGluZ0xlZnQ6ICcyJScgfX0gLz5cclxuLy8gICAgIF1cclxuLy8gfSJdfQ== */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\Section.jsx */"));
}
const icons = {
  "frontend": [// {
  //     "icon": "DiGit",
  //     "name": "Git",
  //     "subtitle": "System Software",
  //     "description": "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
  //     "date_learned": "January 2019"
  // },
  // {
  //     "icon": "DiGithubBadge",
  //     "name": "GitHub",
  //     "subtitle": "Software Developer",
  //     "description": "GitHub is an American company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for $7.5 billion.",
  //     "date_learned": "January 2019"
  // },
  {
    "icon": "DiHtml5",
    "name": "HTML5",
    "subtitle": "Programming Language",
    "description": "HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup based pattern to it. HTML5 is the fifth and current major version of HTML, and subsumes XHTML.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiCss3",
    "name": "CSS3",
    "subtitle": "Programming Language",
    "description": "CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiLess",
    "name": "Less",
    "subtitle": "Programming Language",
    "description": "Less is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets and run on the client side or server side. Designed by Alexis Sellier, Less is influenced by Sass and has influenced the newer \"SCSS\" syntax of Sass, which adapted its CSS-like block formatting syntax.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiSass",
    "name": "Sass",
    "subtitle": "Programming Language",
    "description": "Sass is a style sheet language initially designed by Hampton Catlin and developed by Natalie Weizenbaum. After its initial versions, Weizenbaum and Chris Eppstein have continued to extend Sass with SassScript, a simple scripting language used in Sass files. ",
    "date_learned": "January 2019"
  }, {
    "icon": "DiBootstrap",
    "name": "Bootstrap",
    "subtitle": "Front-end Framework",
    "description": "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiJavascript1",
    "name": "JavaScript",
    "subtitle": "High-level Programming Language",
    "description": "JavaScript, often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiReact",
    "name": "React.js",
    "subtitle": "Web Framework",
    "description": "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.",
    "date_learned": "February 2019"
  }, {
    "icon": "img src='../static/redux.png' alt='Redux Icon'",
    "name": "Redux",
    "subtitle": "JavaScript Library",
    "description": "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
    "date_learned": "February 2019"
  }, {
    "icon": "img src='../static/next-text.png' alt='Next Icon'",
    "name": "Next.js",
    "subtitle": "Web Framework",
    "description": "Next.js is a free and open source web application framework based on React.js, Node.js, Webpack and Babel.js. The framework is advertised as \"meta-framework for universal applications\".",
    "date_learned": "August 2019"
  }],
  "devops": [{
    "icon": "DiGit",
    "name": "Git",
    "subtitle": "System Software",
    "description": "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiGithubBadge",
    "name": "GitHub",
    "subtitle": "Software Developer Platform",
    "description": "GitHub is an American company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for $7.5 billion.",
    "date_learned": "January 2019"
  }, {
    "icon": "Netlify",
    "name": "Netlify",
    "subtitle": "Platform",
    "description": "Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for static websites. It features continuous deployment from Git across a global application delivery network, serverless form handling, support for AWS Lambda functions, and full integration with Let's Encrypt.",
    "date_learned": "February 2019"
  }, {
    "icon": "Heroku",
    "name": "Heroku",
    "subtitle": "Platform",
    "description": "Heroku is a cloud platform as a service supporting several programming languages. One of the first cloud platforms, Heroku has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go.",
    "date_learned": "March 2019"
  }],
  "backend": [// {
  //     "icon": "DiGit",
  //     "styles": { "fontSize": "6rem", "color": "#F34F29"},
  //     "name": "Git",
  //     "subtitle": "System Software",
  //     "description": "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
  //     "date_learned": "January 2019"
  // },
  // {
  //     "icon": "DiGithubBadge",
  //     "styles": "gitHubStyles",
  //     "name": "GitHub",
  //     "subtitle": "Software Developer",
  //     "description": "GitHub is an American company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for $7.5 billion.",
  //     "date_learned": "January 2019"
  // },
  {
    "icon": "iNodejsSmall",
    "styles": "nodeStyles",
    "name": "Node.js",
    "subtitle": "JavaScript Run-time Environment",
    "description": "Node.js is an open-source, cross-platform, JavaScript run-time environment that executes JavaScript code outside of a browser.",
    "date_learned": "March 2019"
  }, {
    "icon": "img src='../static/expressFinal.png' alt='Express Icon'",
    "styles": "expressStyles",
    "name": "Express.js",
    "subtitle": "Web Framework",
    "description": "Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
    "date_learned": "March 2019"
  }, {
    "icon": "img src='../static/knexjs.png' alt='Knex.js Icon'",
    "name": "Knex.js",
    "subtitle": "JavaScript Query Builder",
    "description": " Knex.js is a JavaScript query builder for relational databases including PostgreSQL, MySQL, SQLite3, and Oracle. It can be used with callbacks and promises. It supports transactions and connection pooling.",
    "date_learned": "March 2019"
  }, {
    "icon": "DiMysql",
    "styles": "mySqlStyles",
    "name": "MySQL",
    "subtitle": "System Software",
    "description": "MySQL is an open-source relational database management system. Its name is a combination of \"My\", the name of co-founder Michael Widenius's daughter, and \"SQL\", the abbreviation for Structured",
    "date_learned": "March 2019"
  }, {
    "icon": "DiPostgresql",
    "styles": "postgresStyles",
    "name": "PostgreSQL",
    "subtitle": "System Software",
    "description": "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and technical standards compliance. It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users.",
    "date_learned": "March 2019"
  }]
}; // const wellDoneInternational = {
//     components: [   
//                     <DiReact style={{ fontSize: '6rem', color: '#61DAFB'}} />,
//                     <img className='icon-hover front' src='../static/next-text.png' alt='Next Icon' style={{ width: '75px', maxHeight: '75px', marginRight: '5%' }} />,
//                     <DiNodejsSmall style={{ fontSize: '6rem', color: '#83CD29'}} />,
//                     <img className='icon-hover' src='../static/expressFinal.png' alt='Express Icon' style={{ width: '75px', height: '75px', marginTop: '2%', paddingLeft: '2%' }} />,
//                     <img className='icon-hover' src='../static/netlify.png' alt='Netlify Icon' style={{ width: '75px', height: '75px', marginTop: '2.25%', paddingLeft: '2%' }} />
//     ]
// }

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
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\Transition.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Transition({
  image,
  dark,
  home,
  contact
}) {
  const scrollToTop = () => {
    react_scroll__WEBPACK_IMPORTED_MODULE_2__["animateScroll"].scrollToTop();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3954958656" + " " + 'image',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    src: image,
    alt: "Transitional Image",
    className: "jsx-3954958656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), home || contact ? null : __jsx("h5", {
    onClick: scrollToTop,
    className: "jsx-3954958656" + " " + ((dark ? 'arrow-up-icon-dark' : 'arrow-up-icon') || ""),
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
    id: "3954958656",
    __self: this
  }, ".image.jsx-3954958656{width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}img.jsx-3954958656{width:100%;}.arrow-up-icon-dark.jsx-3954958656{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#e5e7e6;margin-top:-8%;font-size:4rem;}.arrow-up-icon-dark.jsx-3954958656:hover{cursor:pointer;}.arrow-up-icon.jsx-3954958656{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#000c1f;margin-top:-8%;font-size:4rem;}.arrow-up-icon.jsx-3954958656:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxwb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcVHJhbnNpdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J3QixBQUdnQyxBQVVBLEFBR0UsQUFRRSxBQUdGLEFBUUUsV0E3QlUsQUFRN0IsSUFXQSxBQVdBLHFCQTdCMEIsc0JBQ0QsZ0JBU0UsQUFXQSxLQW5CSCxvQkFDSCwwRUFRSCxBQVdBLFdBbEJsQixHQVFtQixBQVdBLGVBVkEsQUFXQSxlQVRuQixBQVdBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxwb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcVHJhbnNpdGlvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xyXG5pbXBvcnQgeyBUaUFycm93VXBUaGljayB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNpdGlvbih7aW1hZ2UsIGRhcmssIGhvbWUsIGNvbnRhY3R9KSB7XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvVG9wKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZSc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD0nVHJhbnNpdGlvbmFsIEltYWdlJyAvPlxyXG4gICAgICAgICAgICAgICAge2hvbWUgfHwgY29udGFjdCA/IG51bGwgOiA8aDUgb25DbGljaz17c2Nyb2xsVG9Ub3B9IGNsYXNzTmFtZT17ZGFyayA/ICdhcnJvdy11cC1pY29uLWRhcmsnIDogJ2Fycm93LXVwLWljb24nfT48VGlBcnJvd1VwVGhpY2sgLz48L2g1PiB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIElFIDEwICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvdy11cC1pY29uLWRhcmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTglO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93LXVwLWljb24tZGFyazpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93LXVwLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTglO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93LXVwLWljb246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gLmxpZ2h0LWFycm93IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\Transition.jsx */"));
}

/***/ }),

/***/ "./components/icon/ActiveCard.jsx":
/*!****************************************!*\
  !*** ./components/icon/ActiveCard.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActiveCard; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/di */ "react-icons/di");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_di__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\icon\\ActiveCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ActiveCard({
  activeSkill
}) {
  return __jsx("div", {
    className: "jsx-377980005" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    style: activeSkill.name === "Redux" ? {
      marginTop: "2.75%"
    } : null,
    className: "jsx-377980005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-377980005" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-377980005" + " " + "titles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-377980005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, activeSkill.name), __jsx("h4", {
    className: "jsx-377980005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, activeSkill.subtitle)), __jsx("div", {
    className: "jsx-377980005" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, activeSkill.icon === "DiGit" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiGit"], {
    style: {
      fontSize: "6rem",
      color: "#F34F29"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }) : activeSkill.icon === "DiGithubBadge" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiGithubBadge"], {
    style: {
      fontSize: "6rem",
      color: "#181616"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }) : activeSkill.icon === "DiHtml5" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiHtml5"], {
    style: {
      fontSize: "6rem",
      color: "#E54D26"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }) : activeSkill.icon === "DiCss3" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiCss3"], {
    style: {
      fontSize: "6rem",
      color: "#3D8FC6"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }) : activeSkill.icon === "DiLess" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiLess"], {
    style: {
      fontSize: "6rem",
      color: "#2A4D80"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }) : activeSkill.icon === "DiSass" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiSass"], {
    style: {
      fontSize: "6rem",
      color: "#CC6699"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }) : activeSkill.icon === "DiBootstrap" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiBootstrap"], {
    style: {
      fontSize: "6rem",
      color: "#5B4282"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }) : activeSkill.icon === "DiJavascript1" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiJavascript1"], {
    style: {
      fontSize: "6rem",
      color: "#F0DB4F"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }) : activeSkill.icon === "DiReact" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiReact"], {
    style: {
      fontSize: "6rem",
      color: "#61DAFB"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }) : activeSkill.icon === "img src='../static/redux.png' alt='Redux Icon'" ? __jsx("img", {
    src: "../static/redux.png",
    alt: "Redux Icon",
    style: {
      width: "75px",
      maxHeight: "70px",
      marginRight: "2%"
    },
    className: "jsx-377980005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }) : activeSkill.icon === "img src='../static/next-text.png' alt='Next Icon'" ? __jsx("img", {
    src: "../static/next-text.png",
    alt: "Next Icon",
    style: {
      width: "100px",
      maxHeight: "100px",
      marginRight: "5%"
    },
    className: "jsx-377980005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }) : activeSkill.icon === "iNodejsSmall" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiNodejsSmall"], {
    style: {
      fontSize: "6rem",
      color: "#83CD29"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }) : activeSkill.icon === "img src='../static/expressFinal.png' alt='Express Icon'" ? __jsx("img", {
    src: "../static/expressFinal.png",
    alt: "Express Icon",
    style: {
      width: "75px",
      height: "75px",
      marginTop: "2%",
      paddingLeft: "2%"
    },
    className: "jsx-377980005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }) : activeSkill.icon === "img src='../static/knexjs.png' alt='Knex.js Icon'" ? __jsx("img", {
    src: "../static/knexjs.png",
    alt: "Knex.js Icon",
    style: {
      width: "60px",
      height: "60px",
      marginTop: "2%",
      paddingLeft: "2%"
    },
    className: "jsx-377980005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }) : activeSkill.icon === "DiMysql" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiMysql"], {
    style: {
      fontSize: "6rem",
      color: "#00618A",
      marginLeft: "14%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }) : activeSkill.icon === "DiPostgresql" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiPostgresql"], {
    style: {
      fontSize: "6rem",
      color: "#336791",
      marginRight: "12%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }) : activeSkill.icon === "Netlify" ? __jsx("img", {
    src: "../static/netlify.png",
    alt: "Netlify Icon",
    style: {
      width: "75px",
      height: "75px",
      marginTop: "2.25%",
      paddingLeft: "2%"
    },
    className: "jsx-377980005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }) : activeSkill.icon === "Heroku" ? __jsx("img", {
    src: "../static/herokuu.png",
    alt: "Heroku Icon",
    style: {
      width: "90px",
      height: "90px",
      marginTop: "1%",
      paddingLeft: "2%"
    },
    className: "jsx-377980005" + " " + "heroku",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }) : null)), __jsx("p", {
    style: activeSkill.name === "Redux" ? {
      marginTop: "5%"
    } : null,
    className: "jsx-377980005" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, activeSkill.description), __jsx("div", {
    style: activeSkill.name === "Redux" ? {
      marginTop: "4.5%"
    } : null,
    className: "jsx-377980005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, activeSkill && __jsx("p", {
    className: "jsx-377980005" + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-377980005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Date Learned:"), " ", activeSkill.date_learned))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "377980005",
    __self: this
  }, ".container.jsx-377980005{font-family:\"Raleway\",sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.header.jsx-377980005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.titles.jsx-377980005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.date.jsx-377980005{margin-top:4%;}.description.jsx-377980005{line-height:1.25;}h2.jsx-377980005{font-size:3rem;color:#000c1f;}h4.jsx-377980005{font-size:1rem;}p.jsx-377980005{color:#000c1f;margin:2% 0;}span.jsx-377980005{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxwb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcaWNvblxcQWN0aXZlQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0prQixBQU82QyxBQVNyQixBQUtBLEFBTUMsQUFHRyxBQUdGLEFBSUEsQUFHRCxBQUlHLGNBaEJuQixBQWFjLENBUEUsQUFJaEIsRUFQQSxBQWNBLFNBSEEsR0FQQSxJQTFCMkIseUJBQ0gsZ0JBT0gsQUFLRyxNQVhELHFCQUNELG9CQUNILCtCQVVNLGVBTE8sdUNBSmhDLHVEQVUyQixxQkFMM0IsNEVBTUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxkaWFtb1xcRGVza3RvcFxcR2l0RmlsZXNcXHBvcnRmb2xpb1xcY2xpZW50XFxjb21wb25lbnRzXFxpY29uXFxBY3RpdmVDYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBEaVJlYWN0LFxyXG4gIERpSmF2YXNjcmlwdDEsXHJcbiAgRGlCb290c3RyYXAsXHJcbiAgRGlTYXNzLFxyXG4gIERpTGVzcyxcclxuICBEaUNzczMsXHJcbiAgRGlIdG1sNSxcclxuICBEaUdpdGh1YkJhZGdlLFxyXG4gIERpR2l0LFxyXG4gIERpTm9kZWpzU21hbGwsXHJcbiAgRGlNeXNxbCxcclxuICBEaVBvc3RncmVzcWxcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvZGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGl2ZUNhcmQoeyBhY3RpdmVTa2lsbCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgc3R5bGU9e2FjdGl2ZVNraWxsLm5hbWUgPT09IFwiUmVkdXhcIiA/IHsgbWFyZ2luVG9wOiBcIjIuNzUlXCIgfSA6IG51bGx9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlc1wiPlxyXG4gICAgICAgICAgICA8aDI+e2FjdGl2ZVNraWxsLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgPGg0PnthY3RpdmVTa2lsbC5zdWJ0aXRsZX08L2g0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAge2FjdGl2ZVNraWxsLmljb24gPT09IFwiRGlHaXRcIiA/IChcclxuICAgICAgICAgICAgICA8RGlHaXQgc3R5bGU9e3sgZm9udFNpemU6IFwiNnJlbVwiLCBjb2xvcjogXCIjRjM0RjI5XCIgfX0gLz5cclxuICAgICAgICAgICAgKSA6IGFjdGl2ZVNraWxsLmljb24gPT09IFwiRGlHaXRodWJCYWRnZVwiID8gKFxyXG4gICAgICAgICAgICAgIDxEaUdpdGh1YkJhZGdlIHN0eWxlPXt7IGZvbnRTaXplOiBcIjZyZW1cIiwgY29sb3I6IFwiIzE4MTYxNlwiIH19IC8+XHJcbiAgICAgICAgICAgICkgOiBhY3RpdmVTa2lsbC5pY29uID09PSBcIkRpSHRtbDVcIiA/IChcclxuICAgICAgICAgICAgICA8RGlIdG1sNSBzdHlsZT17eyBmb250U2l6ZTogXCI2cmVtXCIsIGNvbG9yOiBcIiNFNTREMjZcIiB9fSAvPlxyXG4gICAgICAgICAgICApIDogYWN0aXZlU2tpbGwuaWNvbiA9PT0gXCJEaUNzczNcIiA/IChcclxuICAgICAgICAgICAgICA8RGlDc3MzIHN0eWxlPXt7IGZvbnRTaXplOiBcIjZyZW1cIiwgY29sb3I6IFwiIzNEOEZDNlwiIH19IC8+XHJcbiAgICAgICAgICAgICkgOiBhY3RpdmVTa2lsbC5pY29uID09PSBcIkRpTGVzc1wiID8gKFxyXG4gICAgICAgICAgICAgIDxEaUxlc3Mgc3R5bGU9e3sgZm9udFNpemU6IFwiNnJlbVwiLCBjb2xvcjogXCIjMkE0RDgwXCIgfX0gLz5cclxuICAgICAgICAgICAgKSA6IGFjdGl2ZVNraWxsLmljb24gPT09IFwiRGlTYXNzXCIgPyAoXHJcbiAgICAgICAgICAgICAgPERpU2FzcyBzdHlsZT17eyBmb250U2l6ZTogXCI2cmVtXCIsIGNvbG9yOiBcIiNDQzY2OTlcIiB9fSAvPlxyXG4gICAgICAgICAgICApIDogYWN0aXZlU2tpbGwuaWNvbiA9PT0gXCJEaUJvb3RzdHJhcFwiID8gKFxyXG4gICAgICAgICAgICAgIDxEaUJvb3RzdHJhcCBzdHlsZT17eyBmb250U2l6ZTogXCI2cmVtXCIsIGNvbG9yOiBcIiM1QjQyODJcIiB9fSAvPlxyXG4gICAgICAgICAgICApIDogYWN0aXZlU2tpbGwuaWNvbiA9PT0gXCJEaUphdmFzY3JpcHQxXCIgPyAoXHJcbiAgICAgICAgICAgICAgPERpSmF2YXNjcmlwdDEgc3R5bGU9e3sgZm9udFNpemU6IFwiNnJlbVwiLCBjb2xvcjogXCIjRjBEQjRGXCIgfX0gLz5cclxuICAgICAgICAgICAgKSA6IGFjdGl2ZVNraWxsLmljb24gPT09IFwiRGlSZWFjdFwiID8gKFxyXG4gICAgICAgICAgICAgIDxEaVJlYWN0IHN0eWxlPXt7IGZvbnRTaXplOiBcIjZyZW1cIiwgY29sb3I6IFwiIzYxREFGQlwiIH19IC8+XHJcbiAgICAgICAgICAgICkgOiBhY3RpdmVTa2lsbC5pY29uID09PVxyXG4gICAgICAgICAgICAgIFwiaW1nIHNyYz0nLi4vc3RhdGljL3JlZHV4LnBuZycgYWx0PSdSZWR1eCBJY29uJ1wiID8gKFxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9yZWR1eC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiUmVkdXggSWNvblwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI3NXB4XCIsIG1heEhlaWdodDogXCI3MHB4XCIsIG1hcmdpblJpZ2h0OiBcIjIlXCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogYWN0aXZlU2tpbGwuaWNvbiA9PT1cclxuICAgICAgICAgICAgICBcImltZyBzcmM9Jy4uL3N0YXRpYy9uZXh0LXRleHQucG5nJyBhbHQ9J05leHQgSWNvbidcIiA/IChcclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIuLi9zdGF0aWMvbmV4dC10ZXh0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJOZXh0IEljb25cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjUlXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IGFjdGl2ZVNraWxsLmljb24gPT09IFwiaU5vZGVqc1NtYWxsXCIgPyAoXHJcbiAgICAgICAgICAgICAgPERpTm9kZWpzU21hbGwgc3R5bGU9e3sgZm9udFNpemU6IFwiNnJlbVwiLCBjb2xvcjogXCIjODNDRDI5XCIgfX0gLz5cclxuICAgICAgICAgICAgKSA6IGFjdGl2ZVNraWxsLmljb24gPT09XHJcbiAgICAgICAgICAgICAgXCJpbWcgc3JjPScuLi9zdGF0aWMvZXhwcmVzc0ZpbmFsLnBuZycgYWx0PSdFeHByZXNzIEljb24nXCIgPyAoXHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2V4cHJlc3NGaW5hbC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiRXhwcmVzcyBJY29uXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjc1cHhcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjc1cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIlXCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjIlXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IGFjdGl2ZVNraWxsLmljb24gPT09XHJcbiAgICAgICAgICAgICAgXCJpbWcgc3JjPScuLi9zdGF0aWMva25leGpzLnBuZycgYWx0PSdLbmV4LmpzIEljb24nXCIgPyAoXHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2tuZXhqcy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiS25leC5qcyBJY29uXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIlXCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjIlXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IGFjdGl2ZVNraWxsLmljb24gPT09IFwiRGlNeXNxbFwiID8gKFxyXG4gICAgICAgICAgICAgIDxEaU15c3FsXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCI2cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDYxOEFcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxNCVcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogYWN0aXZlU2tpbGwuaWNvbiA9PT0gXCJEaVBvc3RncmVzcWxcIiA/IChcclxuICAgICAgICAgICAgICA8RGlQb3N0Z3Jlc3FsXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCI2cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMzMzY3OTFcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTIlXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IGFjdGl2ZVNraWxsLmljb24gPT09IFwiTmV0bGlmeVwiID8gKFxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9uZXRsaWZ5LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJOZXRsaWZ5IEljb25cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNzVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNzVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMi4yNSVcIixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMiVcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogYWN0aXZlU2tpbGwuaWNvbiA9PT0gXCJIZXJva3VcIiA/IChcclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZXJva3VcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2hlcm9rdXUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIkhlcm9rdSBJY29uXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjkwcHhcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjkwcHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjElXCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjIlXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgc3R5bGU9e2FjdGl2ZVNraWxsLm5hbWUgPT09IFwiUmVkdXhcIiA/IHsgbWFyZ2luVG9wOiBcIjUlXCIgfSA6IG51bGx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2FjdGl2ZVNraWxsLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17YWN0aXZlU2tpbGwubmFtZSA9PT0gXCJSZWR1eFwiID8geyBtYXJnaW5Ub3A6IFwiNC41JVwiIH0gOiBudWxsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHthY3RpdmVTa2lsbCAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5EYXRlIExlYXJuZWQ6PC9zcGFuPiB7YWN0aXZlU2tpbGwuZGF0ZV9sZWFybmVkfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgLy8gY29sb3I6ICNiN2I1YjM7XHJcbiAgICAgICAgICAvLyBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwICAqL1xyXG4gICAgICAgICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlcyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgIG1hcmdpbjogMiUgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGZ1bmN0aW9uIG5ld0Z1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIFwiaW1nIHNyYz0nLi4vc3RhdGljL2V4cHJlc3NGaW5hbC5wbmcnIGFsdD0nRXhwcmVzcyBJY29uJ1wiO1xyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\icon\\ActiveCard.jsx */"));

  function newFunction() {
    return "img src='../static/expressFinal.png' alt='Express Icon'";
  }
}

/***/ }),

/***/ "./components/projects/CustomizedDialogs.jsx":
/*!***************************************************!*\
  !*** ./components/projects/CustomizedDialogs.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedDialogs; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MediaCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MediaCard */ "./components/projects/MediaCard.jsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/di */ "react-icons/di");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_di__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\projects\\CustomizedDialogs.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













 // const useStyles = makeStyles({
//   card: {
//     background: 'pink'
//   }
// });

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(props => {
  const {
    children,
    classes,
    onClose
  } = props;
  return __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4___default.a, {
    disableTypography: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, children), onClose ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })) : null);
});
const DialogContent = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a);
const DialogActions = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6___default.a);
function CustomizedDialogs({
  image,
  title,
  icons,
  description,
  one,
  two,
  three,
  four
}) {
  // const classes = useStyles();
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: picture,
    1: setPicture
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectPictureRight = () => {
    if (picture < 4) {
      setPicture(picture + 1);
    }

    if (picture === 3) {
      setPicture(0);
    }
  };

  const selectPictureLeft = () => {
    if (picture === 0) {
      setPicture(3);
    }

    if (picture > 0) {
      setPicture(picture - 1);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    style: {
      maxWidth: '345px'
    },
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, one && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    one: one,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), two && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    two: two,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), three && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    three: three,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), four && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    four: four,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClose: handleClose,
    "aria-labelledby": "customized-dialog-title",
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(DialogTitle, {
    id: "customized-dialog-title",
    onClose: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, one && __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, picture === 0 ? 'WellDone International • Index' : picture === 1 ? 'WellDone International • Dashboard' : picture === 2 ? 'WellDone International • Monitors' : picture === 3 ? 'WellDone International • Reports' : null), two && __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Project 2 Title"), three && __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Project 3 Title"), four && __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Project 4 Title")), __jsx(DialogContent, {
    dividers: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, one && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("img", {
    src: picture === 0 ? '../static/IndexModal.png' : picture === 1 ? '../static/DashboardFinal.png' : picture === 2 ? '../static/monitorsFinal.png' : picture === 3 ? '../static/reportsPage.png' : null,
    alt: "WellDone International \u2022 Dashboard Screenshot",
    width: "100%",
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-449160647" + " " + 'arrow-icons',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("div", {
    onClick: selectPictureLeft,
    className: "jsx-449160647" + " " + 'arrow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaAngleLeft"], {
    style: {
      fontSize: '3rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-449160647" + " " + 'radio-buttons',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, picture === 0 ? __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_14__["MdBrightness1"], {
    style: {
      color: '#1f2a44'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosRadioButtonOff"], {
    onClick: () => setPicture(0),
    style: {
      color: '#b7b5b3',
      cursor: 'pointer'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), picture === 1 ? __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_14__["MdBrightness1"], {
    style: {
      color: '#1f2a44'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosRadioButtonOff"], {
    onClick: () => setPicture(1),
    style: {
      color: '#b7b5b3',
      cursor: 'pointer'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), picture === 2 ? __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_14__["MdBrightness1"], {
    style: {
      color: '#1f2a44'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosRadioButtonOff"], {
    onClick: () => setPicture(2),
    style: {
      color: '#b7b5b3',
      cursor: 'pointer'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), picture === 3 ? __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_14__["MdBrightness1"], {
    style: {
      color: '#1f2a44'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosRadioButtonOff"], {
    onClick: () => setPicture(3),
    style: {
      color: '#b7b5b3',
      cursor: 'pointer'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })), __jsx("div", {
    onClick: selectPictureRight,
    className: "jsx-449160647" + " " + 'arrow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaAngleRight"], {
    style: {
      fontSize: '3rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })))), two && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), three && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), four && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, one && __jsx("div", {
    className: "jsx-449160647" + " " + 'tech-stack',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-449160647" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "React.js"), __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "|"), __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Next.js"), __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "|"), __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Node.js"), __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "|"), __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Express.js"), __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "|"), __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Netlify")), __jsx("span", {
    className: "jsx-449160647" + " " + 'row-2',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_12__["DiReact"], {
    style: {
      fontSize: '3rem',
      color: '#61DAFB',
      marginLeft: '-5px',
      marginTop: '-7px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), __jsx("img", {
    src: "../static/next-text.png",
    alt: "Next Icon",
    style: {
      width: '50px',
      maxHeight: '50px',
      marginLeft: '-12px'
    },
    className: "jsx-449160647" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_12__["DiNodejsSmall"], {
    style: {
      fontSize: '3rem',
      color: '#83CD29',
      marginLeft: '-15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), __jsx("img", {
    src: "../static/expressFinal.png",
    alt: "Express Icon",
    style: {
      width: '40px',
      height: '40px'
    },
    className: "jsx-449160647" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), __jsx("img", {
    src: "../static/netlify.png",
    alt: "Netlify Icon",
    style: {
      width: '40px',
      height: '40px'
    },
    className: "jsx-449160647" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  })), " "), two && __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Project 2 Title"), three && __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Project 3 Title"), four && __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Project 4 Title")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, one && __jsx("p", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, picture === 0 ? __jsx("p", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Index Page displays a hero image with a dashboard greeting and a \"View Dashboard\" link.  There is also an \"About\" section to describe the company, as well as a guided tour, to break down the content you will find by visiting each page in the dashboard.  Additionally, this page is fully customizable through Prismic, a content management system which allows an admin the ability to add new, update existing, or remove content from the dashboard.") : picture === 1 ? __jsx("p", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Dashboard Page showcases sensor statuses, an interactive map, as well as sensor specific details all available at-a-glance.") : picture === 2 ? __jsx("p", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Monitors Page reveals a grid of sensor cards which display sensor specific data.  In the upper-left corner, you'll find the sensor's current status, along with the sensor's unique ID.  In the upper-right corner, you'll see a 14-day spread of that sensor's statuses over the past two weeks, with the sensor's location listed below.  Across the bottom of the card, is an interactive graph exposing the sensor's total water-flow usage over a 24-hour period.  You may click along the graph to unveil the usage for a single date.") : picture === 3 ? 'Reports Page description here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem soluta impedit illo excepturi ea ipsam cum earum obcaecati nisi aliquid! Possimus expedita ratione eum necessitatibus? Laudantium architecto perferendis quidem.Expedita nisi eum, aspernatur nostrum' : null), two && __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Project 2 Description"), three && __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Project 3 Description"), four && __jsx("h2", {
    className: "jsx-449160647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Project 4 Description"))), __jsx(DialogActions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "449160647",
    __self: this
  }, "*.jsx-449160647{font-family:'Raleway',sans-serif;}.arrow-icons.jsx-449160647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.arrow.jsx-449160647{color:#1f2a44;-webkit-transition:0.4s;transition:0.4s;}.arrow.jsx-449160647:hover{color:#b7b5b3;cursor:pointer;}.tech-stack.jsx-449160647{width:100%;}.row.jsx-449160647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:1%;}.row-2.jsx-449160647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.invisible.jsx-449160647{display:none;}.radio-buttons.jsx-449160647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:25%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxwb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xccHJvamVjdHNcXEN1c3RvbWl6ZWREaWFsb2dzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxTGdCLEFBR3FELEFBR25CLEFBSUMsQUFJQSxBQUlILEFBR0UsQUFNQSxBQU1BLEFBR0YsV0FqQmYsRUFlQSxDQXZCb0IsQUFJRCxlQUNuQixJQVpBLHFCQVFBLG9CQUxrQyxBQWVELEFBTUEsQUFTWiw2RkFDVCxVQUVvQixZQWhDaEMsUUFldUIsQUFNQSw2RkFMRixBQU9yQixFQVVBLGVBaEJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxwb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xccHJvamVjdHNcXEN1c3RvbWl6ZWREaWFsb2dzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IE11aURpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IE11aURpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XHJcbmltcG9ydCBNdWlEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IE1lZGlhQ2FyZCBmcm9tICcuL01lZGlhQ2FyZCdcclxuaW1wb3J0IHsgRmFBbmdsZVJpZ2h0LCBGYUFuZ2xlTGVmdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBEaVJlYWN0LCBEaU5vZGVqc1NtYWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2RpXCI7XHJcbmltcG9ydCB7IElvSW9zUmFkaW9CdXR0b25PZmYsIElvSW9zUmFkaW9CdXR0b25PbiB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiXHJcbmltcG9ydCB7IE1kRmliZXJNYW51YWxSZWNvcmQsIE1kQnJpZ2h0bmVzczEgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuXHJcbi8vIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4vLyAgIGNhcmQ6IHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICdwaW5rJ1xyXG4vLyAgIH1cclxuLy8gfSk7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpbjogMCxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMilcclxuICB9LFxyXG4gIGNsb3NlQnV0dG9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgdG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgRGlhbG9nVGl0bGUgPSB3aXRoU3R5bGVzKHN0eWxlcykocHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzZXMsIG9uQ2xvc2UgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TXVpRGlhbG9nVGl0bGUgZGlzYWJsZVR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG4gICAgICB7b25DbG9zZSA/IChcclxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VCdXR0b259IG9uQ2xpY2s9e29uQ2xvc2V9PlxyXG4gICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L011aURpYWxvZ1RpdGxlPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuY29uc3QgRGlhbG9nQ29udGVudCA9IHdpdGhTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKShNdWlEaWFsb2dDb250ZW50KTtcclxuXHJcbmNvbnN0IERpYWxvZ0FjdGlvbnMgPSB3aXRoU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSkoTXVpRGlhbG9nQWN0aW9ucyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21pemVkRGlhbG9ncyh7aW1hZ2UsIHRpdGxlLCBpY29ucywgZGVzY3JpcHRpb24sIG9uZSwgdHdvLCB0aHJlZSwgZm91cn0pIHtcclxuICAgIC8vIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwaWN0dXJlLCBzZXRQaWN0dXJlXSA9IHVzZVN0YXRlKDApXHJcbiAgXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbGVjdFBpY3R1cmVSaWdodCA9ICgpID0+IHtcclxuICAgICAgaWYgKHBpY3R1cmUgPCA0KSB7XHJcbiAgICAgICAgICBzZXRQaWN0dXJlKHBpY3R1cmUrMSlcclxuICAgICAgfVxyXG4gICAgICBpZiAocGljdHVyZSA9PT0gMykge1xyXG4gICAgICAgICAgc2V0UGljdHVyZSgwKVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBzZWxlY3RQaWN0dXJlTGVmdCA9ICgpID0+IHtcclxuICAgICAgaWYgKHBpY3R1cmUgPT09IDApIHtcclxuICAgICAgICAgIHNldFBpY3R1cmUoMylcclxuICAgICAgfVxyXG4gICAgICBpZiAocGljdHVyZSA+IDApIHtcclxuICAgICAgICAgIHNldFBpY3R1cmUocGljdHVyZS0xKVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbGlja09wZW59PlxyXG4gICAgICAgIE9wZW4gZGlhbG9nXHJcbiAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogJzM0NXB4J319PlxyXG4gICAgICB7b25lICYmIDxNZWRpYUNhcmQgaGFuZGxlQ2xpY2tPcGVuPXtoYW5kbGVDbGlja09wZW59IGltYWdlPXtpbWFnZX0gb25lPXtvbmV9IHRpdGxlPXt0aXRsZX0gLz59XHJcbiAgICAgIHt0d28gJiYgPE1lZGlhQ2FyZCBoYW5kbGVDbGlja09wZW49e2hhbmRsZUNsaWNrT3Blbn0gaW1hZ2U9e2ltYWdlfSB0d289e3R3b30gdGl0bGU9e3RpdGxlfSAvPn1cclxuICAgICAge3RocmVlICYmIDxNZWRpYUNhcmQgaGFuZGxlQ2xpY2tPcGVuPXtoYW5kbGVDbGlja09wZW59IGltYWdlPXtpbWFnZX0gdGhyZWU9e3RocmVlfSB0aXRsZT17dGl0bGV9IC8+fVxyXG4gICAgICB7Zm91ciAmJiA8TWVkaWFDYXJkIGhhbmRsZUNsaWNrT3Blbj17aGFuZGxlQ2xpY2tPcGVufSBpbWFnZT17aW1hZ2V9IGZvdXI9e2ZvdXJ9IHRpdGxlPXt0aXRsZX0gLz59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8RGlhbG9nICBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PVwiY3VzdG9taXplZC1kaWFsb2ctdGl0bGVcIiBvcGVuPXtvcGVufT5cclxuXHJcbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiY3VzdG9taXplZC1kaWFsb2ctdGl0bGVcIiBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICB7b25lICYmIDxoMj57cGljdHVyZSA9PT0gMCA/ICdXZWxsRG9uZSBJbnRlcm5hdGlvbmFsIOKAoiBJbmRleCcgOlxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPT09IDEgPyAnV2VsbERvbmUgSW50ZXJuYXRpb25hbCDigKIgRGFzaGJvYXJkJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSA9PT0gMiA/ICdXZWxsRG9uZSBJbnRlcm5hdGlvbmFsIOKAoiBNb25pdG9ycycgOlxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPT09IDMgPyAnV2VsbERvbmUgSW50ZXJuYXRpb25hbCDigKIgUmVwb3J0cycgOlxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwgfTwvaDI+fVxyXG4gICAgICAgICAge3R3byAmJiA8aDI+UHJvamVjdCAyIFRpdGxlPC9oMj59XHJcbiAgICAgICAgICB7dGhyZWUgJiYgPGgyPlByb2plY3QgMyBUaXRsZTwvaDI+fVxyXG4gICAgICAgICAge2ZvdXIgJiYgPGgyPlByb2plY3QgNCBUaXRsZTwvaDI+fVxyXG4gICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgZGl2aWRlcnM+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICB7b25lICYmIFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwaWN0dXJlID09PSAwID8gJy4uL3N0YXRpYy9JbmRleE1vZGFsLnBuZycgOlxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPT09IDEgPyAnLi4vc3RhdGljL0Rhc2hib2FyZEZpbmFsLnBuZycgOlxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPT09IDIgPyAnLi4vc3RhdGljL21vbml0b3JzRmluYWwucG5nJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSA9PT0gMyA/ICcuLi9zdGF0aWMvcmVwb3J0c1BhZ2UucG5nJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgIGFsdD0nV2VsbERvbmUgSW50ZXJuYXRpb25hbCDigKIgRGFzaGJvYXJkIFNjcmVlbnNob3QnXHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoPScxMDAlJyAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fycm93LWljb25zJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3NlbGVjdFBpY3R1cmVMZWZ0fSBjbGFzc05hbWU9J2Fycm93JyA+PEZhQW5nbGVMZWZ0IHN0eWxlPXt7IGZvbnRTaXplOiAnM3JlbSd9fSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYWRpby1idXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICB7cGljdHVyZSA9PT0gMCA/IDxNZEJyaWdodG5lc3MxIHN0eWxlPXt7IGNvbG9yOiAnIzFmMmE0NCd9fSAvPiA6IDxJb0lvc1JhZGlvQnV0dG9uT2ZmIG9uQ2xpY2s9eygpPT5zZXRQaWN0dXJlKDApfSBzdHlsZT17eyBjb2xvcjogJyNiN2I1YjMnLCBjdXJzb3I6ICdwb2ludGVyJ319IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtwaWN0dXJlID09PSAxID8gPE1kQnJpZ2h0bmVzczEgc3R5bGU9e3sgY29sb3I6ICcjMWYyYTQ0J319IC8+IDogPElvSW9zUmFkaW9CdXR0b25PZmYgb25DbGljaz17KCk9PnNldFBpY3R1cmUoMSl9IHN0eWxlPXt7IGNvbG9yOiAnI2I3YjViMycsIGN1cnNvcjogJ3BvaW50ZXInfX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAge3BpY3R1cmUgPT09IDIgPyA8TWRCcmlnaHRuZXNzMSBzdHlsZT17eyBjb2xvcjogJyMxZjJhNDQnfX0gLz4gOiA8SW9Jb3NSYWRpb0J1dHRvbk9mZiBvbkNsaWNrPXsoKT0+c2V0UGljdHVyZSgyKX0gc3R5bGU9e3sgY29sb3I6ICcjYjdiNWIzJywgY3Vyc29yOiAncG9pbnRlcid9fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICB7cGljdHVyZSA9PT0gMyA/IDxNZEJyaWdodG5lc3MxIHN0eWxlPXt7IGNvbG9yOiAnIzFmMmE0NCd9fSAvPiA6IDxJb0lvc1JhZGlvQnV0dG9uT2ZmIG9uQ2xpY2s9eygpPT5zZXRQaWN0dXJlKDMpfSBzdHlsZT17eyBjb2xvcjogJyNiN2I1YjMnLCBjdXJzb3I6ICdwb2ludGVyJ319IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17c2VsZWN0UGljdHVyZVJpZ2h0fSBjbGFzc05hbWU9J2Fycm93JyA+PEZhQW5nbGVSaWdodCBzdHlsZT17eyBmb250U2l6ZTogJzNyZW0nfX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+fSBcclxuICAgICAgICAgICAge3R3byAmJiBcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgIHt0aHJlZSAmJiBcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgIHtmb3VyICYmIFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICB7LyogVGVjaC1TdGFjayAqL31cclxuICAgICAgICAgIHtvbmUgJiYgPGRpdiBjbGFzc05hbWU9J3RlY2gtc3RhY2snPjxzcGFuIGNsYXNzTmFtZT0ncm93Jz48aDI+UmVhY3QuanM8L2gyPjxoMj58PC9oMj48aDI+TmV4dC5qczwvaDI+PGgyPnw8L2gyPjxoMj5Ob2RlLmpzPC9oMj48aDI+fDwvaDI+PGgyPkV4cHJlc3MuanM8L2gyPjxoMj58PC9oMj48aDI+TmV0bGlmeTwvaDI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Jvdy0yJz48RGlSZWFjdCBzdHlsZT17eyBmb250U2l6ZTogJzNyZW0nLCBjb2xvcjogJyM2MURBRkInLCBtYXJnaW5MZWZ0OiAnLTVweCcsIG1hcmdpblRvcDogJy03cHgnfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnIHNyYz0nLi4vc3RhdGljL25leHQtdGV4dC5wbmcnIGFsdD0nTmV4dCBJY29uJyBzdHlsZT17eyB3aWR0aDogJzUwcHgnLCBtYXhIZWlnaHQ6ICc1MHB4JywgbWFyZ2luTGVmdDogJy0xMnB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlOb2RlanNTbWFsbCBzdHlsZT17eyBmb250U2l6ZTogJzNyZW0nLCBjb2xvcjogJyM4M0NEMjknLCBtYXJnaW5MZWZ0OiAnLTE1cHgnfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24taG92ZXInIHNyYz0nLi4vc3RhdGljL2V4cHJlc3NGaW5hbC5wbmcnIGFsdD0nRXhwcmVzcyBJY29uJyBzdHlsZT17eyB3aWR0aDogJzQwcHgnLCBoZWlnaHQ6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbi1ob3Zlcicgc3JjPScuLi9zdGF0aWMvbmV0bGlmeS5wbmcnIGFsdD0nTmV0bGlmeSBJY29uJyBzdHlsZT17eyB3aWR0aDogJzQwcHgnLCBoZWlnaHQ6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgPC9zcGFuPiA8L2Rpdj59XHJcbiAgICAgICAgICB7dHdvICYmIDxoMj5Qcm9qZWN0IDIgVGl0bGU8L2gyPn1cclxuICAgICAgICAgIHt0aHJlZSAmJiA8aDI+UHJvamVjdCAzIFRpdGxlPC9oMj59XHJcbiAgICAgICAgICB7Zm91ciAmJiA8aDI+UHJvamVjdCA0IFRpdGxlPC9oMj59XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgey8qIERlc2NyaXB0aW9uICovfVxyXG4gICAgICAgICAge29uZSAmJiA8cD57cGljdHVyZSA9PT0gMCA/IDxwPkluZGV4IFBhZ2UgZGlzcGxheXMgYSBoZXJvIGltYWdlIHdpdGggYSBkYXNoYm9hcmQgZ3JlZXRpbmcgYW5kIGEgXCJWaWV3IERhc2hib2FyZFwiIGxpbmsuICBUaGVyZSBpcyBhbHNvIGFuIFwiQWJvdXRcIiBzZWN0aW9uIHRvIGRlc2NyaWJlIHRoZSBjb21wYW55LCBhcyB3ZWxsIGFzIGEgZ3VpZGVkIHRvdXIsIHRvIGJyZWFrIGRvd24gdGhlIGNvbnRlbnQgeW91IHdpbGwgZmluZCBieSB2aXNpdGluZyBlYWNoIHBhZ2UgaW4gdGhlIGRhc2hib2FyZC4gIEFkZGl0aW9uYWxseSwgdGhpcyBwYWdlIGlzIGZ1bGx5IGN1c3RvbWl6YWJsZSB0aHJvdWdoIFByaXNtaWMsIGEgY29udGVudCBtYW5hZ2VtZW50IHN5c3RlbSB3aGljaCBhbGxvd3MgYW4gYWRtaW4gdGhlIGFiaWxpdHkgdG8gYWRkIG5ldywgdXBkYXRlIGV4aXN0aW5nLCBvciByZW1vdmUgY29udGVudCBmcm9tIHRoZSBkYXNoYm9hcmQuPC9wPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSA9PT0gMSA/IDxwPkRhc2hib2FyZCBQYWdlIHNob3djYXNlcyBzZW5zb3Igc3RhdHVzZXMsIGFuIGludGVyYWN0aXZlIG1hcCwgYXMgd2VsbCBhcyBzZW5zb3Igc3BlY2lmaWMgZGV0YWlscyBhbGwgYXZhaWxhYmxlIGF0LWEtZ2xhbmNlLjwvcD4gOlxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPT09IDIgPyA8cD5Nb25pdG9ycyBQYWdlIHJldmVhbHMgYSBncmlkIG9mIHNlbnNvciBjYXJkcyB3aGljaCBkaXNwbGF5IHNlbnNvciBzcGVjaWZpYyBkYXRhLiAgSW4gdGhlIHVwcGVyLWxlZnQgY29ybmVyLCB5b3UnbGwgZmluZCB0aGUgc2Vuc29yJ3MgY3VycmVudCBzdGF0dXMsIGFsb25nIHdpdGggdGhlIHNlbnNvcidzIHVuaXF1ZSBJRC4gIEluIHRoZSB1cHBlci1yaWdodCBjb3JuZXIsIHlvdSdsbCBzZWUgYSAxNC1kYXkgc3ByZWFkIG9mIHRoYXQgc2Vuc29yJ3Mgc3RhdHVzZXMgb3ZlciB0aGUgcGFzdCB0d28gd2Vla3MsIHdpdGggdGhlIHNlbnNvcidzIGxvY2F0aW9uIGxpc3RlZCBiZWxvdy4gIEFjcm9zcyB0aGUgYm90dG9tIG9mIHRoZSBjYXJkLCBpcyBhbiBpbnRlcmFjdGl2ZSBncmFwaCBleHBvc2luZyB0aGUgc2Vuc29yJ3MgdG90YWwgd2F0ZXItZmxvdyB1c2FnZSBvdmVyIGEgMjQtaG91ciBwZXJpb2QuICBZb3UgbWF5IGNsaWNrIGFsb25nIHRoZSBncmFwaCB0byB1bnZlaWwgdGhlIHVzYWdlIGZvciBhIHNpbmdsZSBkYXRlLjwvcD4gOlxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPT09IDMgPyAnUmVwb3J0cyBQYWdlIGRlc2NyaXB0aW9uIGhlcmUgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE9mZmljaWEsIGV4ZXJjaXRhdGlvbmVtIHNvbHV0YSBpbXBlZGl0IGlsbG8gZXhjZXB0dXJpIGVhIGlwc2FtIGN1bSBlYXJ1bSBvYmNhZWNhdGkgbmlzaSBhbGlxdWlkISBQb3NzaW11cyBleHBlZGl0YSByYXRpb25lIGV1bSBuZWNlc3NpdGF0aWJ1cz8gTGF1ZGFudGl1bSBhcmNoaXRlY3RvIHBlcmZlcmVuZGlzIHF1aWRlbS5FeHBlZGl0YSBuaXNpIGV1bSwgYXNwZXJuYXR1ciBub3N0cnVtJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCB9PC9wPn1cclxuICAgICAgICAgIHt0d28gJiYgPGgyPlByb2plY3QgMiBEZXNjcmlwdGlvbjwvaDI+fVxyXG4gICAgICAgICAge3RocmVlICYmIDxoMj5Qcm9qZWN0IDMgRGVzY3JpcHRpb248L2gyPn1cclxuICAgICAgICAgIHtmb3VyICYmIDxoMj5Qcm9qZWN0IDQgRGVzY3JpcHRpb248L2gyPn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICB7LyogPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIFNhdmUgY2hhbmdlc1xyXG4gICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgPC9EaWFsb2c+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICoge1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93LWljb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxZjJhNDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvdzpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiN2I1YjM7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRlY2gtc3RhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJvdy0yIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbnZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmFkaW8tYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gLk11aURpYWxvZy1wYXBlcldpZHRoU20ge1xyXG4gICAgICAgICAgICAgICAgLy8gICBtYXgtd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuIl19 */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\projects\\CustomizedDialogs.jsx */"));
}

/***/ }),

/***/ "./components/projects/MediaCard.jsx":
/*!*******************************************!*\
  !*** ./components/projects/MediaCard.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaCard; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/di */ "react-icons/di");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_di__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\projects\\MediaCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  card: {
    maxWidth: 345,
    width: 275,
    backgroundColor: '#e5e7e6',
    color: '#000c1f',
    borderRadius: '12px',
    webkitBoxShadow: '10px 10px 21px -2px rgba(255,255,255,0.75)',
    mozBoxShadow: '10px 10px 21px -2px rgba(255,255,255,0.75)',
    boxShadow: '10px 10px 21px -2px rgba(229,231,230,.75)',
    fontFamily: 'Raleway, sans-serif'
  },
  media: {
    height: 140 // borderBottom: '2px solid #000c1f'

  }
});
function MediaCard({
  handleClickOpen,
  image,
  title,
  one,
  two,
  three,
  four
}) {
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.media,
    image: image,
    title: one ? "WellDone International" : two ? "Project 2" : three ? "Project 3" : four ? "Project 4" : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, one && __jsx("div", {
    className: "jsx-585283392" + " " + 'icon-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-585283392" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_10__["DiReact"], {
    style: {
      fontSize: '3rem',
      color: '#61DAFB'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("img", {
    src: "../static/next-text.png",
    alt: "Next Icon",
    style: {
      width: '50px',
      maxHeight: '50px',
      marginRight: '5%'
    },
    className: "jsx-585283392" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("img", {
    src: "../static/emotionCSS.png",
    alt: "Emotion CSS Icon",
    style: {
      width: '40px',
      maxHeight: '40px'
    },
    className: "jsx-585283392" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-585283392" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("img", {
    src: "../static/prismicIO.png",
    alt: "Prismic Icon",
    style: {
      width: '35px',
      height: '35px',
      marginTop: '2%',
      paddingLeft: '2%'
    },
    className: "jsx-585283392" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("img", {
    src: "../static/netlify.png",
    alt: "Netlify Icon",
    style: {
      width: '40px',
      height: '40px',
      marginTop: '2.25%',
      paddingLeft: '2%'
    },
    className: "jsx-585283392" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })))))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, one && __jsx("a", {
    target: "_blank",
    href: "https://dev-welldone.netlify.com",
    className: "jsx-585283392",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "View"), two && 'View', three && 'View', four && 'View'), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, one && __jsx("a", {
    target: "_blank",
    href: "https://github.com/labs15-well-done/frontend",
    className: "jsx-585283392",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "GitHub"), two && 'GitHub', three && 'GitHub', four && 'GitHub'))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "585283392",
    __self: this
  }, ".icon-container.jsx-585283392{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.row.jsx-585283392{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}a.jsx-585283392{-webkit-text-decoration:none;text-decoration:none;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxwb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xccHJvamVjdHNcXE1lZGlhQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZnQixBQUdrQyxBQUtBLEFBSVEsa0RBQ1QsWUFFaEIsWUFYMEIsQUFLTyw4RUFIakMsNkNBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxkaWFtb1xcRGVza3RvcFxcR2l0RmlsZXNcXHBvcnRmb2xpb1xcY2xpZW50XFxjb21wb25lbnRzXFxwcm9qZWN0c1xcTWVkaWFDYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBEaVJlYWN0LCBEaU5vZGVqc1NtYWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2RpXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBjYXJkOiB7XHJcbiAgICBtYXhXaWR0aDogMzQ1LFxyXG4gICAgd2lkdGg6IDI3NSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlNWU3ZTYnLFxyXG4gICAgY29sb3I6ICcjMDAwYzFmJyxcclxuICAgIGJvcmRlclJhZGl1czogJzEycHgnLFxyXG4gICAgd2Via2l0Qm94U2hhZG93OiAnMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDI1NSwyNTUsMjU1LDAuNzUpJyxcclxuICAgIG1vekJveFNoYWRvdzogJzEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyNTUsMjU1LDI1NSwwLjc1KScsXHJcbiAgICBib3hTaGFkb3c6ICcxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjI5LDIzMSwyMzAsLjc1KScsXHJcbiAgICBmb250RmFtaWx5OiAnUmFsZXdheSwgc2Fucy1zZXJpZidcclxuICB9LFxyXG4gIG1lZGlhOiB7XHJcbiAgICBoZWlnaHQ6IDE0MCxcclxuICAgIC8vIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCAjMDAwYzFmJ1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVkaWFDYXJkKHsgaGFuZGxlQ2xpY2tPcGVuLCBpbWFnZSwgdGl0bGUsIG9uZSwgdHdvLCB0aHJlZSwgZm91ciB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxyXG4gICAgICA8Q2FyZEFjdGlvbkFyZWEgb25DbGljaz17aGFuZGxlQ2xpY2tPcGVufT5cclxuICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcbiAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgb25lID8gXCJXZWxsRG9uZSBJbnRlcm5hdGlvbmFsXCIgOlxyXG4gICAgICAgICAgICAgIHR3byA/IFwiUHJvamVjdCAyXCIgOlxyXG4gICAgICAgICAgICAgIHRocmVlID8gXCJQcm9qZWN0IDNcIiA6XHJcbiAgICAgICAgICAgICAgZm91ciA/IFwiUHJvamVjdCA0XCIgOlxyXG4gICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAge29uZSAmJiA8ZGl2IGNsYXNzTmFtZT0naWNvbi1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlSZWFjdCBzdHlsZT17eyBmb250U2l6ZTogJzNyZW0nLCBjb2xvcjogJyM2MURBRkInfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnIHNyYz0nLi4vc3RhdGljL25leHQtdGV4dC5wbmcnIGFsdD0nTmV4dCBJY29uJyBzdHlsZT17eyB3aWR0aDogJzUwcHgnLCBtYXhIZWlnaHQ6ICc1MHB4JywgbWFyZ2luUmlnaHQ6ICc1JScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnIHNyYz0nLi4vc3RhdGljL2Vtb3Rpb25DU1MucG5nJyBhbHQ9J0Vtb3Rpb24gQ1NTIEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNDBweCcsIG1heEhlaWdodDogJzQwcHgnfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24taG92ZXInIHNyYz0nLi4vc3RhdGljL3ByaXNtaWNJTy5wbmcnIGFsdD0nUHJpc21pYyBJY29uJyBzdHlsZT17eyB3aWR0aDogJzM1cHgnLCBoZWlnaHQ6ICczNXB4JywgbWFyZ2luVG9wOiAnMiUnLCBwYWRkaW5nTGVmdDogJzIlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbi1ob3Zlcicgc3JjPScuLi9zdGF0aWMvbmV0bGlmeS5wbmcnIGFsdD0nTmV0bGlmeSBJY29uJyBzdHlsZT17eyB3aWR0aDogJzQwcHgnLCBoZWlnaHQ6ICc0MHB4JywgbWFyZ2luVG9wOiAnMi4yNSUnLCBwYWRkaW5nTGVmdDogJzIlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIHsvKiB7dHdvICYmfVxyXG4gICAgICAgICAgICB7dGhyZWUgJiZ9XHJcbiAgICAgICAgICAgIHtmb3VyICYmfSAqL31cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICB7b25lICYmIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2Rldi13ZWxsZG9uZS5uZXRsaWZ5LmNvbVwiPlZpZXc8L2E+fVxyXG4gICAgICAgICAge3R3byAmJiAnVmlldyd9XHJcbiAgICAgICAgICB7dGhyZWUgJiYgJ1ZpZXcnfVxyXG4gICAgICAgICAge2ZvdXIgJiYgJ1ZpZXcnfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICB7b25lICYmIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbGFiczE1LXdlbGwtZG9uZS9mcm9udGVuZFwiPkdpdEh1YjwvYT59XHJcbiAgICAgICAgICB7dHdvICYmICdHaXRIdWInfVxyXG4gICAgICAgICAge3RocmVlICYmICdHaXRIdWInfVxyXG4gICAgICAgICAge2ZvdXIgJiYgJ0dpdEh1Yid9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICA8L0NhcmQ+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gIDwvPlxyXG4gICk7XHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\projects\\MediaCard.jsx */"));
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
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\pages\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // import ScrollAnimation from 'react-animate-on-scroll';

function index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_components_GlobalHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_components_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_components_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Skills",
    id: "skills",
    image: "../static/lightToDark.png",
    classNameProp: "light",
    dark: false,
    skills: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Portfolio",
    id: "portfolio",
    image: "../static/darkToLight.png",
    classNameProp: "dark",
    dark: true,
    portfolio: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Resume",
    id: "resume",
    image: "../static/lightToDark.png",
    classNameProp: "light",
    dark: false,
    resume: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Contact",
    id: "contact",
    image: "../static/darkToLight.png",
    classNameProp: "dark",
    dark: true,
    contact: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
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

module.exports = __webpack_require__(/*! C:\Users\diamo\Desktop\GitFiles\portfolio\client\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

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

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

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