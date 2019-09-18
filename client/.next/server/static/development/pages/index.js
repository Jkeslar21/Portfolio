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
  const particles = {
    width: '100%',
    marginTop: '-13%',
    backgroundColor: '#e5e7e6',
    zIndex: -3
  };
  const arrowUpIconDark = {
    display: 'flex',
    justifyContent: 'center',
    color: '#e5e7e6',
    marginTop: '-8%',
    fontSize: '4rem',
    border: '1px solid red',
    zIndex: '9999 !important'
  };

  const scrollToTop = () => {
    react_scroll__WEBPACK_IMPORTED_MODULE_3__["animateScroll"].scrollToTop();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2920063860" + " " + 'particles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_2___default.a, {
    params: particleOpt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2920063860",
    __self: this
  }, ".particles.jsx-2920063860{width:100%;margin-top:-13%;background-color:#e5e7e6;z-index:-99;}.arrow-up-icon-dark.jsx-2920063860{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#e5e7e6;margin-top:-8%;font-size:4rem;border:1px solid red;z-index:9999 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcRm9vdGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSm9CLEFBR3dCLEFBT0UsV0FORyxnQkFDUyx5QkFDYixZQUVoQixVQUcyQixtR0FDVCxjQUNDLGVBQ0EsZUFDTSxxQkFDRyx3QkFDNUIiLCJmaWxlIjoiQzpcXFVzZXJzXFxkaWFtb1xcRGVza3RvcFxcR2l0RmlsZXNcXFBvcnRmb2xpb1xcY2xpZW50XFxjb21wb25lbnRzXFxGb290ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXBhcnRpY2xlcy1qcydcclxuaW1wb3J0IHsgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwgfSBmcm9tICdyZWFjdC1zY3JvbGwnXHJcbmltcG9ydCB7IFRpQXJyb3dVcFRoaWNrIH0gZnJvbSBcInJlYWN0LWljb25zL3RpXCI7XHJcblxyXG5jb25zdCBwYXJ0aWNsZU9wdCA9IHtcclxuICAgIFwicGFydGljbGVzXCI6IHtcclxuICAgICAgXCJudW1iZXJcIjoge1xyXG4gICAgICAgIFwidmFsdWVcIjogMTYwLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiB7XHJcbiAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgXCJ2YWx1ZV9hcmVhXCI6IDgwMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgXCJjb2xvclwiOiB7XHJcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIiMwMDBjMWZcIlxyXG4gICAgICB9LFxyXG4gICAgICBcInNoYXBlXCI6IHtcclxuICAgICAgICBcInR5cGVcIjogXCJjaXJjbGVcIixcclxuICAgICAgICBcInN0cm9rZVwiOiB7XHJcbiAgICAgICAgICBcIndpZHRoXCI6IDAsXHJcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInBvbHlnb25cIjoge1xyXG4gICAgICAgICAgXCJuYl9zaWRlc1wiOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImltYWdlXCI6IHtcclxuICAgICAgICAgIFwic3JjXCI6IFwiaW1nL2dpdGh1Yi5zdmdcIixcclxuICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxyXG4gICAgICAgICAgXCJoZWlnaHRcIjogMTAwXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcIm9wYWNpdHlcIjoge1xyXG4gICAgICAgIFwidmFsdWVcIjogMSxcclxuICAgICAgICBcInJhbmRvbVwiOiB0cnVlLFxyXG4gICAgICAgIFwiYW5pbVwiOiB7XHJcbiAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgXCJzcGVlZFwiOiAxLFxyXG4gICAgICAgICAgXCJvcGFjaXR5X21pblwiOiAwLFxyXG4gICAgICAgICAgXCJzeW5jXCI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcInNpemVcIjoge1xyXG4gICAgICAgIFwidmFsdWVcIjogMTAsXHJcbiAgICAgICAgXCJyYW5kb21cIjogdHJ1ZSxcclxuICAgICAgICBcImFuaW1cIjoge1xyXG4gICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICBcInNwZWVkXCI6IDQsXHJcbiAgICAgICAgICBcInNpemVfbWluXCI6IDAuMyxcclxuICAgICAgICAgIFwic3luY1wiOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkaXN0YW5jZVwiOiAxNTAsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBcIm9wYWNpdHlcIjogMC40LFxyXG4gICAgICAgIFwid2lkdGhcIjogMVxyXG4gICAgICB9LFxyXG4gICAgICBcIm1vdmVcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgXCJzcGVlZFwiOiAxLFxyXG4gICAgICAgIFwiZGlyZWN0aW9uXCI6IFwibm9uZVwiLFxyXG4gICAgICAgIFwicmFuZG9tXCI6IHRydWUsXHJcbiAgICAgICAgXCJzdHJhaWdodFwiOiBmYWxzZSxcclxuICAgICAgICBcIm91dF9tb2RlXCI6IFwib3V0XCIsXHJcbiAgICAgICAgXCJib3VuY2VcIjogZmFsc2UsXHJcbiAgICAgICAgXCJhdHRyYWN0XCI6IHtcclxuICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgXCJyb3RhdGVYXCI6IDYwMCxcclxuICAgICAgICAgIFwicm90YXRlWVwiOiA2MDBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImludGVyYWN0aXZpdHlcIjoge1xyXG4gICAgICBcImRldGVjdF9vblwiOiBcImNhbnZhc1wiLFxyXG4gICAgICBcImV2ZW50c1wiOiB7XHJcbiAgICAgICAgXCJvbmhvdmVyXCI6IHtcclxuICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICBcIm1vZGVcIjogXCJidWJibGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJvbmNsaWNrXCI6IHtcclxuICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICBcIm1vZGVcIjogXCJyZXB1bHNlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzaXplXCI6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgXCJtb2Rlc1wiOiB7XHJcbiAgICAgICAgXCJncmFiXCI6IHtcclxuICAgICAgICAgIFwiZGlzdGFuY2VcIjogNDAwLFxyXG4gICAgICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XHJcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJ1YmJsZVwiOiB7XHJcbiAgICAgICAgICBcImRpc3RhbmNlXCI6IDI1MCxcclxuICAgICAgICAgIFwic2l6ZVwiOiAwLFxyXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiAyLFxyXG4gICAgICAgICAgXCJvcGFjaXR5XCI6IDAsXHJcbiAgICAgICAgICBcInNwZWVkXCI6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVwdWxzZVwiOiB7XHJcbiAgICAgICAgICBcImRpc3RhbmNlXCI6IDQwMCxcclxuICAgICAgICAgIFwiZHVyYXRpb25cIjogMC40XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInB1c2hcIjoge1xyXG4gICAgICAgICAgXCJwYXJ0aWNsZXNfbmJcIjogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZW1vdmVcIjoge1xyXG4gICAgICAgICAgXCJwYXJ0aWNsZXNfbmJcIjogMlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwicmV0aW5hX2RldGVjdFwiOiB0cnVlXHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHBhcnRpY2xlcyA9IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG1hcmdpblRvcDogJy0xMyUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlNWU3ZTYnLFxyXG4gICAgICAgIHpJbmRleDogLTNcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNvbnN0IGFycm93VXBJY29uRGFyayA9IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiAnI2U1ZTdlNicsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnLTglJyxcclxuICAgICAgICBmb250U2l6ZTogJzRyZW0nLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZWQnLFxyXG4gICAgICAgIHpJbmRleDogJzk5OTkgIWltcG9ydGFudCdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgICAgICBzY3JvbGwuc2Nyb2xsVG9Ub3AoKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgey8qIDxoNSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0gY2xhc3NOYW1lPXsnYXJyb3ctdXAtaWNvbi1kYXJrJ30+PFRpQXJyb3dVcFRoaWNrIC8+PC9oNT4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwYXJ0aWNsZXMnfT5cclxuICAgICAgICAgICAgPFBhcnRpY2xlcyBwYXJhbXM9e3BhcnRpY2xlT3B0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucGFydGljbGVzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMyU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC05OTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcnJvdy11cC1pY29uLWRhcmsge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC04JTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLmNvbnRhY3QtYXJyb3cge1xyXG4gICAgICAgIC8vICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIC8vICAgICAvLyB6LWluZGV4OiA5OTtcclxuICAgICAgICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Footer.jsx */"));
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
    className: "jsx-2136420227" + " " + 'wrapper',
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
    className: "jsx-2136420227" + " " + 'home',
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
    className: "jsx-2136420227",
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
    className: "jsx-2136420227",
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
    className: "jsx-2136420227" + " " + 'arrow-down',
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
    className: "jsx-2136420227" + " " + 'particle-bottom',
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
    className: "jsx-2136420227" + " " + 'clear',
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
    id: "2136420227",
    __self: this
  }, ".particle-bottom.jsx-2136420227{background-color:#000c1f;}.home.jsx-2136420227{background-color:#000c1f;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:1;margin-top:-50%;}.wrapper.jsx-2136420227{width:100%;}h1.jsx-2136420227{color:white;font-size:6rem;margin-top:6%;font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}h4.jsx-2136420227{color:#b7b5b3;font-size:2.5rem;margin-top:35px;font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}img.jsx-2136420227{border-radius:21px;}.arrow-down.jsx-2136420227{color:#e5e7e6;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:200px;font-size:4rem;}.arrow-down.jsx-2136420227:hover{cursor:pointer;}.clear.jsx-2136420227{z-index:50;margin-top:-50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcSG9tZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0p3QixBQUdvQyxBQUdFLEFBVWQsQUFXQyxBQWFFLEFBWUssQUFJTCxBQVVELEFBR0osV0E3Q2IsQUE4Q2tCLENBMUNDLEVBYUUsQUFrQkosQ0FRakIsSUFiQSxNQWxEQSxBQUdpQixFQXVCQyxBQXlDbEIsSUE3Qm9CLE9BbENILEdBdUJxQixNQVlBLDJCQVZULE1BWUEsUUFlRixXQTFCRCxNQVlRLE9BckNSLFNBMEJELE1BWVEsZUFYVCxNQVlRLGNBWFgsTUFZUSxtQkFhUixHQXBETSxjQXFEUixlQUNuQiw0QkExQkEsTUFZQSxvQ0F2Q3VCLDZGQUNULFVBQ00sZ0JBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcSG9tZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhbnNpdGlvbidcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XHJcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSAncmVhY3QtcGFydGljbGVzLWpzJ1xyXG5pbXBvcnQgeyBUaUFycm93RG93blRoaWNrIH0gZnJvbSBcInJlYWN0LWljb25zL3RpXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnXHJcblxyXG5jb25zdCBwYXJ0aWNsZU9wdCA9IHtcclxuICAgIFwicGFydGljbGVzXCI6IHtcclxuICAgICAgXCJudW1iZXJcIjoge1xyXG4gICAgICAgIFwidmFsdWVcIjogMTYwLFxyXG4gICAgICAgIFwiZGVuc2l0eVwiOiB7XHJcbiAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgXCJ2YWx1ZV9hcmVhXCI6IDgwMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgXCJjb2xvclwiOiB7XHJcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIiNlNWU3ZTZcIlxyXG4gICAgICB9LFxyXG4gICAgICBcInNoYXBlXCI6IHtcclxuICAgICAgICBcInR5cGVcIjogXCJjaXJjbGVcIixcclxuICAgICAgICBcInN0cm9rZVwiOiB7XHJcbiAgICAgICAgICBcIndpZHRoXCI6IDAsXHJcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInBvbHlnb25cIjoge1xyXG4gICAgICAgICAgXCJuYl9zaWRlc1wiOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImltYWdlXCI6IHtcclxuICAgICAgICAgIFwic3JjXCI6IFwiaW1nL2dpdGh1Yi5zdmdcIixcclxuICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxyXG4gICAgICAgICAgXCJoZWlnaHRcIjogMTAwXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcIm9wYWNpdHlcIjoge1xyXG4gICAgICAgIFwidmFsdWVcIjogMSxcclxuICAgICAgICBcInJhbmRvbVwiOiB0cnVlLFxyXG4gICAgICAgIFwiYW5pbVwiOiB7XHJcbiAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgXCJzcGVlZFwiOiAxLFxyXG4gICAgICAgICAgXCJvcGFjaXR5X21pblwiOiAwLFxyXG4gICAgICAgICAgXCJzeW5jXCI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcInNpemVcIjoge1xyXG4gICAgICAgIFwidmFsdWVcIjogMTAsXHJcbiAgICAgICAgXCJyYW5kb21cIjogdHJ1ZSxcclxuICAgICAgICBcImFuaW1cIjoge1xyXG4gICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICBcInNwZWVkXCI6IDQsXHJcbiAgICAgICAgICBcInNpemVfbWluXCI6IDAuMyxcclxuICAgICAgICAgIFwic3luY1wiOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkaXN0YW5jZVwiOiAxNTAsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBcIm9wYWNpdHlcIjogMC40LFxyXG4gICAgICAgIFwid2lkdGhcIjogMVxyXG4gICAgICB9LFxyXG4gICAgICBcIm1vdmVcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgXCJzcGVlZFwiOiAxLFxyXG4gICAgICAgIFwiZGlyZWN0aW9uXCI6IFwibm9uZVwiLFxyXG4gICAgICAgIFwicmFuZG9tXCI6IHRydWUsXHJcbiAgICAgICAgXCJzdHJhaWdodFwiOiBmYWxzZSxcclxuICAgICAgICBcIm91dF9tb2RlXCI6IFwib3V0XCIsXHJcbiAgICAgICAgXCJib3VuY2VcIjogZmFsc2UsXHJcbiAgICAgICAgXCJhdHRyYWN0XCI6IHtcclxuICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgXCJyb3RhdGVYXCI6IDYwMCxcclxuICAgICAgICAgIFwicm90YXRlWVwiOiA2MDBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImludGVyYWN0aXZpdHlcIjoge1xyXG4gICAgICBcImRldGVjdF9vblwiOiBcImNhbnZhc1wiLFxyXG4gICAgICBcImV2ZW50c1wiOiB7XHJcbiAgICAgICAgXCJvbmhvdmVyXCI6IHtcclxuICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICBcIm1vZGVcIjogXCJidWJibGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJvbmNsaWNrXCI6IHtcclxuICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICBcIm1vZGVcIjogXCJyZXB1bHNlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzaXplXCI6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgXCJtb2Rlc1wiOiB7XHJcbiAgICAgICAgXCJncmFiXCI6IHtcclxuICAgICAgICAgIFwiZGlzdGFuY2VcIjogNDAwLFxyXG4gICAgICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XHJcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJ1YmJsZVwiOiB7XHJcbiAgICAgICAgICBcImRpc3RhbmNlXCI6IDI1MCxcclxuICAgICAgICAgIFwic2l6ZVwiOiAwLFxyXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiAyLFxyXG4gICAgICAgICAgXCJvcGFjaXR5XCI6IDAsXHJcbiAgICAgICAgICBcInNwZWVkXCI6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVwdWxzZVwiOiB7XHJcbiAgICAgICAgICBcImRpc3RhbmNlXCI6IDQwMCxcclxuICAgICAgICAgIFwiZHVyYXRpb25cIjogMC40XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInB1c2hcIjoge1xyXG4gICAgICAgICAgXCJwYXJ0aWNsZXNfbmJcIjogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZW1vdmVcIjoge1xyXG4gICAgICAgICAgXCJwYXJ0aWNsZXNfbmJcIjogMlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwicmV0aW5hX2RldGVjdFwiOiB0cnVlXHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgPFBhcnRpY2xlcyBwYXJhbXM9e3BhcnRpY2xlT3B0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2hvbWUnfT5cclxuICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+Sm9zaHVhIEtlc2xhcjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49J2ZhZGVJbicgZHVyYXRpb249ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5Tb2Z0d2FyZSBEZXZlbG9wZXI8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPSdhY3RpdmUnXHJcbiAgICAgICAgICAgICAgICB0bz1cInNraWxsc1wiXHJcbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17MTAwMH1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTEyNX1cclxuICAgICAgICAgICAgID48aDUgY2xhc3NOYW1lPXsnYXJyb3ctZG93bid9ID48VGlBcnJvd0Rvd25UaGljayAvPjwvaDU+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFydGljbGUtYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgPFBhcnRpY2xlcyBwYXJhbXM9e3BhcnRpY2xlT3B0fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xlYXInPlxyXG4gICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbiBpbWFnZT17Jy4uL3N0YXRpYy9jbGVhclRvTGlnaHQucG5nJ30gaG9tZSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnBhcnRpY2xlLWJvdHRvbSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaG9tZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxMzAxO1xyXG5cclxuICAgICAgICAgICAgLy8gLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAgIC8vIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgICAgLy8gLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogSUUgMTAgICovXHJcbiAgICAgICAgICAgIC8vIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAvLyB1c2VyLXNlbGVjdDogbm9uZTsgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAvLyBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDZyZW07XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFdlYmtpdCAqL1xyXG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIElFIDEwICAqL1xyXG4gICAgICAgICAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgY29sb3I6ICNiN2I1YjM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIElFIDEwICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xyXG4gICAgICAgICAgICAvLyBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYXJyb3ctZG93biB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAvLyBjb2xvcjogIzRhZDVmZjtcclxuICAgICAgICAgICAgLy8gY29sb3I6IHNpbHZlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC8vIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFycm93LWRvd246aG92ZXIge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xlYXIge1xyXG4gICAgICAgICAgei1pbmRleDogNTA7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Home.jsx */"));
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
    className: "jsx-2676468524" + " " + 'nav-items',
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
    className: "jsx-2676468524" + " " + 'nav-item',
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
    className: "jsx-2676468524" + " " + 'nav-item',
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
    className: "jsx-2676468524" + " " + 'nav-item',
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
    className: "jsx-2676468524" + " " + 'nav-item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Contact"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2676468524",
    __self: this
  }, ".nav-items.jsx-2676468524{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed;top:0;left:0;z-index:9999;width:100%;padding:1%;color:#b7b5b3;background-color:#1f2a44;border-bottom:2px solid #b7b5b3;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.nav-item.jsx-2676468524{margin-right:50px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:'Raleway',sans-serif;}.nav-item.jsx-2676468524:hover{border-bottom:1px solid #4ad5ff;cursor:pointer;color:#e5e7e6;font-family:'Raleway',sans-serif;}.active.jsx-2676468524{border-bottom:1px solid #4ad5ff !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcTmF2aWdhdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNvQixBQUdrQyxBQW9CSyxBQUtjLEFBTVcsa0JBVnhCLGNBS0osV0FNbkIsSUFMa0IsY0FDb0IsYUEzQlgsb0JBNEIzQixpQkFQc0MsaUNBQ3RDLDZCQXJCbUIsZUFDVCxNQUNDLE9BQ00sYUFDRixXQUNBLFdBQ0csY0FDVyx5QkFDTyxnQ0FFUCx5QkFDSCxzQkFDRCxxQkFFRCxvQkFDSCxxRkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxkaWFtb1xcRGVza3RvcFxcR2l0RmlsZXNcXFBvcnRmb2xpb1xcY2xpZW50XFxjb21wb25lbnRzXFxOYXZpZ2F0aW9uLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXYtaXRlbXMnPlxyXG4gICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPSdhY3RpdmUnXHJcbiAgICAgICAgICAgICAgICB0bz1cInNraWxsc1wiXHJcbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17MTAwMH1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTEyNX1cclxuICAgICAgICAgICAgID48c3BhbiBjbGFzc05hbWU9J25hdi1pdGVtJz5Ta2lsbHM8L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz0nYWN0aXZlJ1xyXG4gICAgICAgICAgICAgICAgdG89XCJwb3J0Zm9saW9cIlxyXG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezEwMDB9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey0xMjV9XHJcbiAgICAgICAgICAgICA+PHNwYW4gY2xhc3NOYW1lPSduYXYtaXRlbSc+UG9ydGZvbGlvPC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9J2FjdGl2ZSdcclxuICAgICAgICAgICAgICAgIHRvPVwicmVzdW1lXCJcclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstMTI1fVxyXG4gICAgICAgICAgICAgPjxzcGFuIGNsYXNzTmFtZT0nbmF2LWl0ZW0nPlJlc3VtZTwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPSdhY3RpdmUnXHJcbiAgICAgICAgICAgICAgICB0bz1cImNvbnRhY3RcIlxyXG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezEwMDB9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey0xMjV9XHJcbiAgICAgICAgICAgICA+PHNwYW4gY2xhc3NOYW1lPSduYXYtaXRlbSc+Q29udGFjdDwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm5hdi1pdGVtcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2I3YjViMztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyYTQ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjdiNWIzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBXZWJraXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogSUUgMTAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgLyogQ3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgaW4gT3BlcmEgYnV0IHdpbGwgYmUgc29vbiAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdi1pdGVtOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRhZDVmZjtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGFkNWZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Navigation.jsx */"));
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
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Section.jsx";

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
    className: "jsx-3079846273" + " " + (classNameProp || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    id: id,
    className: "jsx-3079846273" + " " + "section-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, skills ? __jsx("h2", {
    className: "jsx-3079846273" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3079846273" + " " + ((dark ? 'title-dark title-skills' : 'title title-skills') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, title)) : __jsx("h2", {
    className: "jsx-3079846273" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3079846273" + " " + ((dark ? 'title-dark' : 'title') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, title))), skills && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3079846273" + " " + 'images-modal',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3079846273" + " " + 'images',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3079846273" + " " + 'frontend',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    isFlipped: isFlipped,
    flipDirection: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("img", {
    src: "../static/treeFINAL.png",
    alt: "Tree Canopy Image",
    key: frontend ? null : 'front',
    onClick: clickMeFront,
    className: "jsx-3079846273" + " " + 'sunflower',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-3079846273" + " " + 'view canopy-view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3079846273" + " " + 'card-back card-back-canopy ',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3079846273" + " " + 'canopy-header margin',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3079846273" + " " + "skills-title opacity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Front End"), __jsx("div", {
    className: "jsx-3079846273" + " " + 'x opacity',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeFrontBack,
    className: "jsx-3079846273" + " " + 'close-button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "X"))), __jsx("div", {
    className: "jsx-3079846273" + " " + 'card-icons card-icons-canopy',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, icons.frontend.map(icon => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiHtml5" ? __jsx("div", {
    className: "jsx-3079846273" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
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
      lineNumber: 95
    },
    __self: this
  }), " ") : icon.icon === "DiCss3" ? __jsx("div", {
    className: "jsx-3079846273" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
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
      lineNumber: 96
    },
    __self: this
  }), " ") : icon.icon === "DiLess" ? __jsx("div", {
    className: "jsx-3079846273" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
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
      lineNumber: 97
    },
    __self: this
  }), " ") : icon.icon === "DiSass" ? __jsx("div", {
    className: "jsx-3079846273" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
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
      lineNumber: 98
    },
    __self: this
  }), " ") : icon.icon === "DiBootstrap" ? __jsx("div", {
    className: "jsx-3079846273" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
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
      lineNumber: 99
    },
    __self: this
  }), " ") : icon.icon === "DiJavascript1" ? __jsx("div", {
    className: "jsx-3079846273" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
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
      lineNumber: 100
    },
    __self: this
  }), " ") : icon.icon === "DiReact" ? __jsx("div", {
    className: "jsx-3079846273" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
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
      lineNumber: 101
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
    className: "jsx-3079846273" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
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
    className: "jsx-3079846273" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }) : null))))))), __jsx("div", {
    className: "jsx-3079846273" + " " + 'devOps',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    isFlipped: isFlipped3,
    flipDirection: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("img", {
    src: "../static/devops.png",
    alt: "Tree Canopy Image",
    key: devops ? null : 'front',
    onClick: clickMeDev,
    className: "jsx-3079846273" + " " + 'devops',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-3079846273" + " " + 'view dev-view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3079846273" + " " + 'card-back-dev card-back-devops',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3079846273" + " " + 'dev-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3079846273" + " " + "skills-title-dev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "DevOps"), __jsx("div", {
    className: "jsx-3079846273" + " " + 'x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeDevBack,
    className: "jsx-3079846273" + " " + 'close-button-dev',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "X"))), __jsx("div", {
    className: "jsx-3079846273" + " " + 'card-icons-dev',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, icons.devops.map(icon => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiGit" ? __jsx("div", {
    className: "jsx-3079846273" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
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
      lineNumber: 129
    },
    __self: this
  }), " ") : icon.icon === "DiGithubBadge" ? __jsx("div", {
    className: "jsx-3079846273" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
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
      lineNumber: 130
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
    className: "jsx-3079846273" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
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
    className: "jsx-3079846273" + " " + 'heroku icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }) : null))))))), __jsx("div", {
    className: "jsx-3079846273" + " " + 'backend',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    isFlipped: isFlipped2,
    flipDirection: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("img", {
    src: "../static/roots.png",
    alt: "Roots Image",
    key: backend ? null : 'front',
    onClick: clickMeBack,
    className: "jsx-3079846273" + " " + 'roots',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-3079846273" + " " + 'view canopy-view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3079846273" + " " + 'card-back card-back-canopy ',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3079846273" + " " + 'canopy-header margin-back',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3079846273" + " " + 'skills-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Back End"), __jsx("div", {
    className: "jsx-3079846273" + " " + 'x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeBackFront,
    className: "jsx-3079846273" + " " + 'close-button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "X"))), __jsx("div", {
    className: "jsx-3079846273" + " " + 'card-icons',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, icons.backend.map(icon => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiGit" ? __jsx("div", {
    className: "jsx-3079846273" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
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
      lineNumber: 155
    },
    __self: this
  }), " ") : icon.icon === "DiGithubBadge" ? __jsx("div", {
    className: "jsx-3079846273" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
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
      lineNumber: 156
    },
    __self: this
  }), " ") : icon.icon === "iNodejsSmall" ? __jsx("div", {
    className: "jsx-3079846273" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
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
      lineNumber: 157
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
    className: "jsx-3079846273" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
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
    className: "jsx-3079846273" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }) : icon.icon === "DiMysql" ? __jsx("div", {
    className: "jsx-3079846273" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
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
      lineNumber: 160
    },
    __self: this
  }), " ") : icon.icon === "DiPostgresql" ? __jsx("div", {
    className: "jsx-3079846273" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
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
      lineNumber: 161
    },
    __self: this
  }), " ") : null)))))))), __jsx("div", {
    className: "jsx-3079846273" + " " + 'modal',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, frontend || backend || devops ? __jsx("h6", {
    className: "jsx-3079846273" + " " + ((activeSkill ? "icon-selected" : "select-icon") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Select an Icon") : __jsx("h6", {
    className: "jsx-3079846273" + " " + 'select-image',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Select an Image"), activeSkill && __jsx(_icon_ActiveCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
    activeSkill: activeSkill,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-3079846273" + " " + 'gauges',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3079846273" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3079846273" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaChartLine"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Efficient"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "maximum productivity; well-organized")), __jsx("div", {
    className: "jsx-3079846273" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3079846273" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdPhonelink"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Responsive"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "optimized layouts for all devices")), __jsx("div", {
    className: "jsx-3079846273" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3079846273" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdLightbulbOutline"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "Creative"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "highest quality solutions provided")), __jsx("div", {
    className: "jsx-3079846273" + " " + 'gauge-styles dynamic',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3079846273" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaGlobeAmericas"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Dynamic"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "reflects real-time changes in values with activity.  Built with DRY, reusable components. "))))), portfolio && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3079846273" + " " + ((dark ? null : 'light-text') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "PORTFOLIO CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus! Commodi magni voluptas nemo earum perferendis voluptatum odio dignissimos molestiae esse aut. Nam quae beatae magnam ea, voluptatibus minus enim vitae culpa, cum expedita fuga nesciunt nulla, ut similique corrupti? Cumque quis illo eius doloremque accusamus aliquid architecto! Pariatur provident cumque minima corporis maiores. Asperiores, debitis eveniet. Quaerat, porro tenetur quam ratione suscipit non voluptates cupiditate totam quis corrupti officiis! Aliquam dicta at molestias dignissimos, illum accusamus, vitae quaerat corrupti perferendis ad obcaecati hic culpa iusto tempora magni sit incidunt minima tempore atque ducimus neque quae. Nisi exercitationem provident blanditiis! Error autem officia tenetur soluta nulla illum, vero commodi recusandae, fuga nobis nam facere itaque harum officiis! Perferendis ipsam esse laboriosam neque enim quod sit. Consequuntur maiores soluta obcaecati aspernatur? Aspernatur, nihil officia! Expedita dolor nemo itaque ratione accusantium unde vel architecto quod accusamus, tenetur blanditiis esse libero laborum amet, fuga adipisci. Reiciendis laborum nam eaque non earum quis facere. Fugit accusamus aperiam labore quisquam aut. Dolor reiciendis aliquam quod fugit possimus earum neque, iusto ratione expedita? Reiciendis qui sapiente possimus nostrum saepe sit distinctio pariatur autem, commodi ipsa earum. Odit repellat in modi tempora! Quia quisquam repellendus sed quasi sit soluta sint magnam quae modi reiciendis pariatur nisi fuga culpa, sapiente vel tempora similique? Quos officiis possimus dignissimos adipisci. Eveniet explicabo voluptate eligendi doloremque et suscipit, rerum, officiis nesciunt sapiente ipsa magni numquam quam ab recusandae harum incidunt cumque error voluptatem temporibus quae modi, nulla ex? Ratione, modi consequuntur! Itaque expedita vel dolore exercitationem odio officia, eos fugiat obcaecati impedit adipisci sint recusandae consequuntur possimus consectetur sunt nisi repellat voluptates repellendus quisquam esse asperiores minus ea. Facilis, beatae optio. Corporis esse modi laborum dolorum, nisi autem pariatur mollitia. Illo, accusamus sed praesentium atque eos magni. Harum aut repellendus consequatur laborum, praesentium consequuntur voluptates doloremque provident nihil earum tempore est! Iusto porro ullam necessitatibus deleniti officia rerum id distinctio! Non, veritatis ipsa consectetur architecto illo placeat et error vel inventore? Mollitia deserunt minus voluptates praesentium animi. Rerum provident sunt quas! Laborum quibusdam iure totam explicabo culpa temporibus, optio voluptatem nemo at eos voluptas necessitatibus ducimus qui consequatur quam natus dolor ex, nam cumque. Modi optio autem adipisci illo, consectetur provident. Enim suscipit cumque amet blanditiis veritatis sed veniam earum consectetur neque minima quisquam deleniti culpa ut iure ipsa, necessitatibus distinctio recusandae commodi ullam! Laboriosam maxime suscipit hic incidunt tempora harum. Minus architecto veritatis ipsum in eos rem velit sequi? Illo corporis distinctio quisquam ipsa velit magnam, et maxime ad tempore soluta pariatur inventore voluptas illum totam rerum voluptatibus quia atque? Qui cupiditate ea molestias id quisquam nulla a! Ullam nulla molestiae accusantium animi optio in dolorum obcaecati, perferendis beatae dolores est culpa doloremque unde iusto nemo saepe neque repudiandae iste. Eveniet dolorum incidunt obcaecati ipsa vero error officiis doloremque distinctio, voluptas atque totam officia labore veritatis mollitia nostrum ut temporibus voluptates placeat soluta, unde hic corrupti natus pariatur quas. Amet!"))), resume && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3079846273" + " " + 'resume-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx("a", {
    href: "../static/resume.pdf",
    download: true,
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__["FiDownload"], {
    style: {
      fontSize: '2.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  })), __jsx("details", {
    style: {
      marginTop: '2%'
    },
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, __jsx("summary", {
    onClick: () => setResumeView(!resumeView),
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, resumeView ? __jsx("div", {
    className: "jsx-3079846273" + " " + 'resume-imgs',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx("img", {
    src: "../static/resume-header.png",
    alt: "resume-header",
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }), __jsx("img", {
    src: "../static/resumeTop.png",
    alt: "resume-bottom",
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }), __jsx("img", {
    src: "../static/resumeBottom.png",
    alt: "resume-top",
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("img", {
    src: "../static/resume-header.png",
    alt: "resume-header",
    className: "jsx-3079846273" + " " + 'resume-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }))))))), contact && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3079846273" + " " + 'form',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, __jsx("form", {
    action: "https://formcarry.com/s/bN9Y1F-wrzW",
    method: "POST",
    "accept-charset": "UTF-8",
    className: "jsx-3079846273" + " " + 'form-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "name",
    placeholder: "Name",
    required: true,
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }), __jsx("input", {
    type: "email",
    name: "email",
    placeholder: "E-mail",
    required: true,
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }), __jsx("textarea", {
    type: "text",
    name: "message",
    placeholder: "Message",
    required: true,
    className: "jsx-3079846273" + " " + 'message',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }), __jsx("input", {
    type: "hidden",
    name: "_gotcha",
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }), __jsx("button", {
    className: "jsx-3079846273",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Send ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaPaperPlane"], {
    style: {
      fontSize: '1.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  })))))), __jsx("h5", {
    onClick: scrollToTop,
    className: "jsx-3079846273" + " " + 'arrow-up-icon-dark',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_4__["TiArrowUpThick"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  })))), __jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: image,
    dark: dark,
    contact: contact,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3079846273",
    __self: this
  }, ".light.jsx-3079846273{background-color:#e5e7e6;margin-top:-5px;font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.dark.jsx-3079846273{background-color:#000c1f;margin-top:-5px;color:#e5e7e6;font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.images.jsx-3079846273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1%;padding-top:2%;}.sunflower.jsx-3079846273,.roots.jsx-3079846273,.devops.jsx-3079846273{max-width:100%;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-animation:colorFadeOut-jsx-3079846273 2s,shapeShiftOut-jsx-3079846273 2s;animation:colorFadeOut-jsx-3079846273 2s,shapeShiftOut-jsx-3079846273 2s;border-radius:50%;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.sunflower.jsx-3079846273:hover,.roots.jsx-3079846273:hover,.devops.jsx-3079846273:hover{width:100%;height:100%;cursor:pointer;-webkit-animation:colorFadeIn-jsx-3079846273 2s,shapeShiftIn-jsx-3079846273 2s;animation:colorFadeIn-jsx-3079846273 2s,shapeShiftIn-jsx-3079846273 2s;-webkit-filter:grayscale(0%);filter:grayscale(0%);border-radius:12px;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.skills-card.jsx-3079846273{width:33%;height:420px;}.frontend.jsx-3079846273,.backend.jsx-3079846273{max-width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.titles.jsx-3079846273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border:1px solid red;padding:2%;}.skills-title.jsx-3079846273{font-size:2.1rem;}.skills-title.jsx-3079846273:hover{cursor:pointer;}.view.jsx-3079846273{opacity:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:100%;background:#fbfbf8;border-radius:12px;padding:2% 4%;cursor:pointer;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.canopy-view.jsx-3079846273{width:680px;height:350px;}.dev-view.jsx-3079846273{width:680px;height:75px;}.roots-view.jsx-3079846273{width:670px;height:350px;}.card-back.jsx-3079846273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:100%;max-height:100%;}.card-back-canopy.jsx-3079846273{max-width:100%;max-height:100%;color:black;border-radius:12px;}.card-back-devops.jsx-3079846273{color:#e5e7e6;max-width:100%;max-height:100%;width:680px;height:75px;border-radius:12px;}.card-back-roots.jsx-3079846273{color:#e5e7e6;max-width:100%;max-height:100%;width:670px;height:350px;border-radius:12px;}.card-icons.jsx-3079846273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;max-width:100%;}.card-icons-canopy.jsx-3079846273{padding:2%;}.icon-hover.jsx-3079846273{opacity:.5;}.icon-hover.jsx-3079846273:hover{opacity:1;}.card-icons-dev.jsx-3079846273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;max-width:100%;margin:-6% 5%;}.dev-header.jsx-3079846273{color:#000c1f;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-weight:bolder;}.canopy-header.jsx-3079846273{color:#000c1f;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:680px;margin-top:-65px;}.skills-title-dev.jsx-3079846273{color:#000c1f;}.close-button-dev.jsx-3079846273{color:#000c1f;margin:none;padding:none;}h2.jsx-3079846273{font-size:4rem;padding-top:2%;padding-bottom:2%;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding-left:2%;}p.jsx-3079846273{padding-left:2%;line-height:1.8;padding-top:2%;}.title-center.jsx-3079846273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.title.jsx-3079846273{color:#000c1f;margin-right:2%;margin-top:6%;}.title-dark.jsx-3079846273{margin-right:2%;color:#E5E7E6;margin-top:6%;}.arrow-up-icon-dark.jsx-3079846273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#e5e7e6;font-size:4rem;position:relative;top:300px;}.arrow-up-icon-dark.jsx-3079846273:hover{cursor:pointer;}@-webkit-keyframes colorFadeIn-jsx-3079846273{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@keyframes colorFadeIn-jsx-3079846273{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@-webkit-keyframes colorFadeOut-jsx-3079846273{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@keyframes colorFadeOut-jsx-3079846273{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@-webkit-keyframes shapeShiftIn-jsx-3079846273{from{border-radius:50%;}to{border-radius:12px;}}@keyframes shapeShiftIn-jsx-3079846273{from{border-radius:50%;}to{border-radius:12px;}}@-webkit-keyframes shapeShiftOut-jsx-3079846273{from{border-radius:12px;}to{border-radius:50%;}}@keyframes shapeShiftOut-jsx-3079846273{from{border-radius:12px;}to{border-radius:50%;}}@-webkit-keyframes fadeIn-jsx-3079846273{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-3079846273{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadeOut-jsx-3079846273{from{opacity:1;}to{opacity:0;}}@keyframes fadeOut-jsx-3079846273{from{opacity:1;}to{opacity:0;}}.animate.jsx-3079846273{opacity:1;}.gauges.jsx-3079846273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:5%;}.gauge-styles.jsx-3079846273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:200px;}.gauge.jsx-3079846273{background-image:url('../static/DarkBlueBadge.png');background-size:cover;max-width:100%;width:200px;height:175px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.dynamic.jsx-3079846273{margin-top:55px;}.light-text.jsx-3079846273{color:#000c1f;}.title-skills.jsx-3079846273{margin-top:1%;}.section-content.jsx-3079846273{margin-bottom:2%;}.modal.jsx-3079846273{width:450px;max-height:270px;margin-top:17%;max-width:100%;border-radius:12px;padding:2%;}.images-modal.jsx-3079846273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.close-button.jsx-3079846273{font-size:2.1rem;font-weight:bolder;}.icon-selected.jsx-3079846273{display:none;}.select-icon.jsx-3079846273{text-align:center;vertical-align:center;margin-top:25%;font-size:2rem;color:#000c1f;-webkit-animation:fadeIn-jsx-3079846273 2s;animation:fadeIn-jsx-3079846273 2s;}.select-image.jsx-3079846273{text-align:center;vertical-align:center;margin-top:25%;font-size:2rem;color:#000c1f;-webkit-animation:fadeIn-jsx-3079846273 2s;animation:fadeIn-jsx-3079846273 2s;}.front.jsx-3079846273{margin:0 2%;}.margin.jsx-3079846273{margin:2% 0;}.margin-back.jsx-3079846273{margin-top:-25px;margin-bottom:2%;}.resume-container.jsx-3079846273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.resume-imgs.jsx-3079846273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.resume-header.jsx-3079846273{-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}summary.jsx-3079846273{outline:none;cursor:pointer;}summary.jsx-3079846273::-webkit-details-marker{display:none;}a.jsx-3079846273{color:#b7b5b3;}a.jsx-3079846273:hover{border-bottom:2px solid #4ad5ff;cursor:pointer;color:#000c1f;}.form.jsx-3079846273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:30%;margin:0 auto;margin-top:3%;}.form-container.jsx-3079846273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}input.jsx-3079846273{font-family:'Raleway',sans-serif;width:100%;background-color:#1f2a44;outline:none;font-weight:bold;color:#e5e7e6;margin:1% 0;padding:10px 15px;border:none;}textarea.jsx-3079846273{font-family:'Raleway',sans-serif;width:100%;background-color:#1f2a44;outline:none;font-weight:bold;color:#e5e7e6;margin:1% 0;padding:10px 15px;border:none;}button.jsx-3079846273{font-family:'Raleway',sans-serif;width:35%;font-size:1.5rem;vertical-align:center;margin-top:5%;font-weight:bold;border-radius:12px;color:#000c1f;-webkit-transition:0.5s;transition:0.5s;}button.jsx-3079846273:hover{cursor:pointer;background-color:#1f2a44;color:#e5e7e6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcU2VjdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa1VvQixBQUc4QyxBQVlBLEFBWVosQUFVRSxBQVdKLEFBWUQsQUFNSyxBQVVGLEFBT0ksQUFNRixBQUtMLEFBa0JFLEFBSUEsQUFJQSxBQUlDLEFBV0UsQUFPRCxBQVNBLEFBUUQsQUFVRixBQUdBLEFBR0QsQUFHRyxBQU9DLEFBU0EsQUFVQSxBQUdBLEFBS0MsQUFRQyxBQUtILEFBSUMsQUFLRSxBQUtILEFBUUUsQUFVWSxBQUk1QixBQUkwQixBQUkxQixBQUl1QixBQUdDLEFBS0EsQUFHRCxBQUtSLEFBR0EsQUFLQSxBQUdBLEFBd0JKLEFBR0csQUFTQSxBQU91QyxBQVVwQyxBQUdGLEFBR0EsQUFHRyxBQUdMLEFBWUMsQUFXSSxBQUlKLEFBR0ssQUFRQSxBQWNOLEFBR0EsQUFHSyxBQUlKLEFBT0EsQUFRNkMsQUFLN0MsQUFNbEIsQUFFbUIsQUFJa0IsQUFLbkIsQUFPQSxBQVFxQixBQVlBLEFBV0EsQUFXbkIsVUFwY0YsQUFrQ0EsQUFpRmpCLEFBa0hJLEFBR0EsQUFLQSxBQUdBLEFBd0JKLENBcFJnQixBQXlIaEIsQUFHQSxDQTVEaUIsQUFJRCxBQUlDLEFBcVBJLEFBb0RyQixBQUdBLENBNUJBLEFBdURtQixBQUtuQixDQXRUbUIsQUFTQSxBQWtDRixBQVNBLEFBVWpCLEFBR2dCLEFBc0JJLEFBK0hwQixBQUdBLEFBaUdBLENBbmEyQixBQWlDVixBQW9CakIsQUE2Q29CLEFBNkVELEFBbUNuQixBQTBRNkIsQ0FyU1QsQUFjRixBQXVIbEIsQ0EzUUEsQUFvUkEsQUEwQnVCLEFBbUNGLENBdEpqQixBQVdBLEFBK0dzQixBQVFBLENBL0h0QixBQUtBLElBeE9lLEFBY25CLENBc0RBLENBbEhvQixBQVlBLEFBa0dwQixBQVFBLENBdUZpQixFQWlQakIsQ0FsVG9CLEFBU0EsQUFzTkQsQ0F6SkcsQUFpQkosQUFLQSxDQW5HRixDQXFGRyxBQThPQSxDQW9CSixBQVlBLEFBV0QsQ0E5RWQsRUFuQ0EsRUFuVjhDLENBK0o5QyxDQTJMbUIsQUFRQSxBQThHRCxDQTlmb0IsQUFZcEIsRUF5SEssQUE4V0YsQ0FoUnJCLEFBS0EsQUFtSW1CLEFBaUhVLEFBWUEsQ0E1VmIsQUFTQSxFQXFFaEIsQUE4T2tCLENBdFBLLEVBOENuQixBQUtBLEVBOEVzQixFQXRGdEIsQUFXQSxBQXVQSixDQWxmc0MsQUE0WG5CLEFBUUEsRUFwUUgsQUFTQyxDQWdTMEMsQ0F6RXBDLENBdUlHLENBM0MxQixDQW5VQSxPQXBHZ0QsQUE0R3pCLEFBK1VOLEFBWUEsQ0FsVk0sQUFtUEwsQUFRQSxJQS9ZVyxBQW9CSCxBQWlETyxBQWdEUCxBQW1DSCxBQW1CSixBQStDUSxBQWNBLEFBd0ZKLEFBU1UsQUFRZCxBQWlDYyxBQWtEUCxBQU9BLEFBOEJSLEFBT1EsSUFyR1gsSUFnSE0sQUFZQSxBQVdILEVBMVpDLEFBZ1RLLEFBUUEsSUFwWUssQUFnSTdCLEFBdUN1QixBQVNBLEFBK1FMLENBM1lRLEFBcUYxQixBQTZMZ0IsQUE2QmhCLE9Bb0lxQixHQWxmSyxBQTJkUixBQVlBLEVBckpELENBeUhDLFdBL2JRLEFBdWE0QixBQXlDdEMsQUFZQSxBQVdPLENBaEtOLEVBeUhqQixLQTNjeUIsSUE0ZEgsQUFZQSxNQTlUVyxDQXlVZixHQXZlTyxNQTJFRixBQXVISCxDQTdNSSxDQXNKTCxBQXdLQSxBQThKSCxBQVlBLEdBV0ksTUFqZUcsQUFpR0ksQUErU0osQUFRdUMsQUFxQy9DLEdBY2YsQUFZQSxDQTdkd0IsQ0FxS0QsQUFTQSxBQW9CdkIsS0E3TXFCLEFBcVlyQixBQVFBLENBb0NBLEFBOEJ1QixJQWxaQSxNQTBKdkIsQUFja0IsR0F6TkcsVUF1ZXJCLENBN1FvQixDQTlMSyxBQXlTRSxTQS9RRixBQW9RQyxBQXlDMUIsR0F6TmtDLEFBd0tuQixFQXZGTyxRQWpKWSxBQW9WeUIsQ0EzRzFCLE9BMVBsQyxFQW1LZSxHQTVNUSxNQXlDdEIsQ0FvS0EsUUFoTXVCLEdBWHVDLElBWC9DLEFBK1lZLEVBamEzQixHQWdMa0MsQUFTQSxDQXZFWCxHQXNESixFQXJKQSxBQTZibkIsQ0F0YThELEdBbUI5RCxDQWpEQSxJQThac0QsSUFqUXBDLEVBckpsQixJQWtUb0IsUUE1SnBCLElBdUt1QixJQVR2QixRQTFTMkQsZ0JBYUEsQUEyRzVDLEFBcVJmLFVBclZtQixDQWlFQSxRQXdLSSxNQXhPQSxDQW1FdkIsR0FyQ21CLEFBNlNuQixVQW5Zc0QsS0F5RC9CLEFBOEJILE1BNERHLEFBUVAsS0E5SXNDLEtBMkV0RCxFQXFFcUIsQ0FuR0gsRUF5UGxCLElBL0pBLFFBeEZtQixFQWtHbkIsVUE3SkEsR0E0RDhELGFBL0M5RCxPQW1Sa0IsY0FDbEIsd0JBcE8yRCx1REFDTCxrREFHdEQiLCJmaWxlIjoiQzpcXFVzZXJzXFxkaWFtb1xcRGVza3RvcFxcR2l0RmlsZXNcXFBvcnRmb2xpb1xcY2xpZW50XFxjb21wb25lbnRzXFxTZWN0aW9uLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcclxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9UcmFuc2l0aW9uJ1xyXG5pbXBvcnQgeyBUaUFycm93VXBUaGljayB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuaW1wb3J0IFJlYWN0Q2FyZEZsaXAgZnJvbSAncmVhY3QtY2FyZC1mbGlwJztcclxuaW1wb3J0IHsgRGlSZWFjdCwgRGlKYXZhc2NyaXB0MSwgRGlCb290c3RyYXAsIERpU2FzcywgRGlMZXNzLCBEaUNzczMsIERpSHRtbDUsIERpR2l0aHViQmFkZ2UsIERpR2l0LCBEaU5vZGVqc1NtYWxsLCBEaU15c3FsLCBEaVBvc3RncmVzcWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvZGlcIjtcclxuaW1wb3J0IHsgRmFDaGFydExpbmUsIEZhR2xvYmVBbWVyaWNhcywgRmFQYXBlclBsYW5lIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IE1kUGhvbmVsaW5rLCBNZExpZ2h0YnVsYk91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IEFjdGl2ZUNhcmQgZnJvbSAnLi9pY29uL0FjdGl2ZUNhcmQnXHJcbmltcG9ydCB7IEZpRG93bmxvYWQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuLy8gaW1wb3J0IHsgRG9jdW1lbnQsIFBhZ2UgfSBmcm9tICdyZWFjdC1wZGYnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbih7dGl0bGUsIGlkLCBpbWFnZSwgY2xhc3NOYW1lUHJvcCwgZGFyaywgc2tpbGxzLCBwb3J0Zm9saW8sIHJlc3VtZSwgY29udGFjdH0pIHtcclxuICAgIGNvbnN0IFtpc0ZsaXBwZWQsIHNldElzRmxpcHBlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc0ZsaXBwZWQyLCBzZXRJc0ZsaXBwZWQyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzRmxpcHBlZDMsIHNldElzRmxpcHBlZDNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbYmFja2VuZCwgc2V0QmFja2VuZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtmcm9udGVuZCwgc2V0RnJvbnRlbmRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZGV2b3BzLCBzZXREZXZvcHNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbYWN0aXZlU2tpbGwsIHNldEFjdGl2ZVNraWxsXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbcmVzdW1lVmlldywgc2V0UmVzdW1lVmlld10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICAvLyBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgIC8vICAgICBzY3JvbGwuc2Nyb2xsVG9Ub3AoKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IGNsaWNrTWVGcm9udCA9ICgpID0+IHtcclxuICAgICAgICBzZXRGcm9udGVuZCh0cnVlKVxyXG4gICAgICAgIHNldElzRmxpcHBlZCh0cnVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tNZUZyb250QmFjayA9ICgpID0+IHtcclxuICAgICAgICBzZXRGcm9udGVuZChmYWxzZSlcclxuICAgICAgICBzZXRJc0ZsaXBwZWQoZmFsc2UpXHJcbiAgICAgICAgc2V0QWN0aXZlU2tpbGwobnVsbClcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrTWVCYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJhY2tlbmQodHJ1ZSlcclxuICAgICAgICBzZXRJc0ZsaXBwZWQyKHRydWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja01lQmFja0Zyb250ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJhY2tlbmQoZmFsc2UpXHJcbiAgICAgICAgc2V0SXNGbGlwcGVkMihmYWxzZSlcclxuICAgICAgICBzZXRBY3RpdmVTa2lsbChudWxsKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tNZURldiA9ICgpID0+IHtcclxuICAgICAgICBzZXREZXZvcHModHJ1ZSlcclxuICAgICAgICBzZXRJc0ZsaXBwZWQzKHRydWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja01lRGV2QmFjayA9ICgpID0+IHtcclxuICAgICAgICBzZXREZXZvcHMoZmFsc2UpXHJcbiAgICAgICAgc2V0SXNGbGlwcGVkMyhmYWxzZSlcclxuICAgICAgICBzZXRBY3RpdmVTa2lsbChudWxsKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvVG9wKClcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZVByb3B9PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e1wic2VjdGlvblwiICsgKGRhcmsgPyBcIiBzZWN0aW9uLWRhcmtcIiA6IFwiXCIpfT4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIiBpZD17aWR9PlxyXG4gICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj0nZmFkZUluJyBkdXJhdGlvbj17Mn0+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHtza2lsbHMgPyA8aDIgY2xhc3NOYW1lPSd0aXRsZS1jZW50ZXInPjxzcGFuIGNsYXNzTmFtZT17ZGFyayA/ICd0aXRsZS1kYXJrIHRpdGxlLXNraWxscycgOiAndGl0bGUgdGl0bGUtc2tpbGxzJ30+e3RpdGxlfTwvc3Bhbj48L2gyPiA6IDxoMiBjbGFzc05hbWU9J3RpdGxlLWNlbnRlcic+PHNwYW4gY2xhc3NOYW1lPXtkYXJrID8gJ3RpdGxlLWRhcmsnIDogJ3RpdGxlJ30+e3RpdGxlfTwvc3Bhbj48L2gyPn1cclxuXHJcbiAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICB7LyogRHluYW1pYyBTZWN0aW9ucyAqL31cclxuXHJcbiAgICAgICAgICAgIHtza2lsbHMgJiZcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49J2ZhZGVJbicgZHVyYXRpb249ezJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2VzLW1vZGFsJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmcm9udGVuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdENhcmRGbGlwIGlzRmxpcHBlZD17aXNGbGlwcGVkfSBmbGlwRGlyZWN0aW9uPSdob3Jpem9udGFsJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgY2xhc3NOYW1lPXsnc3VuZmxvd2VyJ30gc3JjPScuLi9zdGF0aWMvdHJlZUZJTkFMLnBuZycgYWx0PSdUcmVlIENhbm9weSBJbWFnZScga2V5PXtmcm9udGVuZCA/IG51bGwgOiAnZnJvbnQnfSBvbkNsaWNrPXtjbGlja01lRnJvbnR9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDIga2V5PSdmcm9udCcgc3R5bGU9e3sgY29sb3I6ICdwaW5rJywgekluZGV4OiA4MH19PkZyb250IEVuZDwvaDI+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd2aWV3IGNhbm9weS12aWV3J30ga2V5PSdiYWNrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYmFjayBjYXJkLWJhY2stY2Fub3B5ICc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Nhbm9weS1oZWFkZXIgbWFyZ2luJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2tpbGxzLXRpdGxlIG9wYWNpdHlcIj5Gcm9udCBFbmQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd4IG9wYWNpdHknPjxwIGNsYXNzTmFtZT0nY2xvc2UtYnV0dG9uJyBvbkNsaWNrPXtjbGlja01lRnJvbnRCYWNrfT5YPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWljb25zIGNhcmQtaWNvbnMtY2Fub3B5Jz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ucy5mcm9udGVuZC5tYXAoaWNvbiA9PiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb24uaWNvbiA9PT0gXCJEaUh0bWw1XCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3ZlciBmcm9udCc+PERpSHRtbDUgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjRTU0RDI2J319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlDc3MzXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3ZlciBmcm9udCc+PERpQ3NzMyBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMzRDhGQzYnfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaUxlc3NcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250Jz48RGlMZXNzIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzJBNEQ4MCd9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpU2Fzc1wiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnPjxEaVNhc3Mgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjQ0M2Njk5J319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlCb290c3RyYXBcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250Jz48RGlCb290c3RyYXAgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjNUI0MjgyJ319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlKYXZhc2NyaXB0MVwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnPjxEaUphdmFzY3JpcHQxIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnI0YwREI0Rid9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpUmVhY3RcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250Jz48RGlSZWFjdCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyM2MURBRkInfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJpbWcgc3JjPScuLi9zdGF0aWMvcmVkdXgucG5nJyBhbHQ9J1JlZHV4IEljb24nXCIgPyA8aW1nIGNsYXNzTmFtZT0naWNvbi1ob3ZlciBmcm9udCcgc3JjPScuLi9zdGF0aWMvcmVkdXgucG5nJyBhbHQ9J1JlZHV4IEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNzVweCcsIG1heEhlaWdodDogJzcwcHgnLCBtYXJnaW46ICcxJScgfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJpbWcgc3JjPScuLi9zdGF0aWMvbmV4dC10ZXh0LnBuZycgYWx0PSdOZXh0IEljb24nXCIgPyA8aW1nIGNsYXNzTmFtZT0naWNvbi1ob3ZlciBmcm9udCcgc3JjPScuLi9zdGF0aWMvbmV4dC10ZXh0LnBuZycgYWx0PSdOZXh0IEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNzVweCcsIG1heEhlaWdodDogJzc1cHgnLCBtYXJnaW5SaWdodDogJzUlJyB9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSAvPiAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPil9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3RDYXJkRmxpcD4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGV2T3BzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0Q2FyZEZsaXAgaXNGbGlwcGVkPXtpc0ZsaXBwZWQzfSBmbGlwRGlyZWN0aW9uPSdob3Jpem9udGFsJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGNsYXNzTmFtZT17J2Rldm9wcyd9IHNyYz0nLi4vc3RhdGljL2Rldm9wcy5wbmcnIGFsdD0nVHJlZSBDYW5vcHkgSW1hZ2UnIGtleT17ZGV2b3BzID8gbnVsbCA6ICdmcm9udCd9IG9uQ2xpY2s9e2NsaWNrTWVEZXZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndmlldyBkZXYtdmlldyd9IGtleT0nYmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJhY2stZGV2IGNhcmQtYmFjay1kZXZvcHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGV2LWhlYWRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNraWxscy10aXRsZS1kZXZcIj5EZXZPcHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd4Jz48cCBjbGFzc05hbWU9J2Nsb3NlLWJ1dHRvbi1kZXYnIG9uQ2xpY2s9e2NsaWNrTWVEZXZCYWNrfT5YPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaWNvbnMtZGV2Jz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ucy5kZXZvcHMubWFwKGljb24gPT4gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uLmljb24gPT09IFwiRGlHaXRcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyJz48RGlHaXQgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjRjM0RjI5J319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlHaXRodWJCYWRnZVwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXInPjxEaUdpdGh1YkJhZGdlIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzE4MTYxNid9fSAgb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJOZXRsaWZ5XCIgPyA8aW1nIGNsYXNzTmFtZT0naWNvbi1ob3Zlcicgc3JjPScuLi9zdGF0aWMvbmV0bGlmeS5wbmcnIGFsdD0nTmV0bGlmeSBJY29uJyBzdHlsZT17eyB3aWR0aDogJzc1cHgnLCBoZWlnaHQ6ICc3NXB4JywgbWFyZ2luVG9wOiAnMi4yNSUnLCBwYWRkaW5nTGVmdDogJzIlJyB9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkhlcm9rdVwiID8gPGltZyBjbGFzc05hbWU9J2hlcm9rdSBpY29uLWhvdmVyJyBzcmM9Jy4uL3N0YXRpYy9oZXJva3V1LnBuZycgYWx0PSdIZXJva3UgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc5MHB4JywgaGVpZ2h0OiAnOTBweCcsIG1hcmdpblRvcDogJzElJywgcGFkZGluZ0xlZnQ6ICcyJSd9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdENhcmRGbGlwPiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0Q2FyZEZsaXAgaXNGbGlwcGVkPXtpc0ZsaXBwZWQyfSBmbGlwRGlyZWN0aW9uPSdob3Jpem9udGFsJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ncm9vdHMnIHNyYz0nLi4vc3RhdGljL3Jvb3RzLnBuZycgYWx0PSdSb290cyBJbWFnZScga2V5PXtiYWNrZW5kID8gbnVsbCA6ICdmcm9udCd9IG9uQ2xpY2s9e2NsaWNrTWVCYWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd2aWV3IGNhbm9weS12aWV3J30ga2V5PSdiYWNrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJhY2sgY2FyZC1iYWNrLWNhbm9weSAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYW5vcHktaGVhZGVyIG1hcmdpbi1iYWNrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nc2tpbGxzLXRpdGxlJz5CYWNrIEVuZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd4Jz48cCBjbGFzc05hbWU9J2Nsb3NlLWJ1dHRvbicgb25DbGljaz17Y2xpY2tNZUJhY2tGcm9udH0+WDwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaWNvbnMnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25zLmJhY2tlbmQubWFwKGljb24gPT4gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb24uaWNvbiA9PT0gXCJEaUdpdFwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXInPjxEaUdpdCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNGMzRGMjknfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaUdpdGh1YkJhZGdlXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3Zlcic+PERpR2l0aHViQmFkZ2Ugc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjMTgxNjE2J319ICBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcImlOb2RlanNTbWFsbFwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXInPjxEaU5vZGVqc1NtYWxsIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzgzQ0QyOSd9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcImltZyBzcmM9Jy4uL3N0YXRpYy9leHByZXNzRmluYWwucG5nJyBhbHQ9J0V4cHJlc3MgSWNvbidcIiA/IDxpbWcgY2xhc3NOYW1lPSdpY29uLWhvdmVyJyBzcmM9Jy4uL3N0YXRpYy9leHByZXNzRmluYWwucG5nJyBhbHQ9J0V4cHJlc3MgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc3NXB4JywgaGVpZ2h0OiAnNzVweCcsIG1hcmdpblRvcDogJzIlJywgcGFkZGluZ0xlZnQ6ICcyJScgfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJpbWcgc3JjPScuLi9zdGF0aWMva25leGpzLnBuZycgYWx0PSdLbmV4LmpzIEljb24nXCIgPyA8aW1nIGNsYXNzTmFtZT0naWNvbi1ob3Zlcicgc3JjPScuLi9zdGF0aWMva25leGpzLnBuZycgYWx0PSdLbmV4LmpzIEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNzVweCcsIGhlaWdodDogJzc1cHgnLCBtYXJnaW5Ub3A6ICcyJScsIHBhZGRpbmdMZWZ0OiAnMiUnIH19IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlNeXNxbFwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXInPjxEaU15c3FsIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzAwNjE4QScsIG1hcmdpbkxlZnQ6ICcxNCUnfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaVBvc3RncmVzcWxcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyJz48RGlQb3N0Z3Jlc3FsIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzMzNjc5MScsIG1hcmdpblJpZ2h0OiAnMTIlJ319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3RDYXJkRmxpcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsJz5cclxuICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAge2Zyb250ZW5kIHx8IGJhY2tlbmQgfHwgZGV2b3BzID8gPGg2IGNsYXNzTmFtZT17YWN0aXZlU2tpbGwgPyBcImljb24tc2VsZWN0ZWRcIiA6IFwic2VsZWN0LWljb25cIn0+U2VsZWN0IGFuIEljb248L2g2PiA6IDxoNiBjbGFzc05hbWU9J3NlbGVjdC1pbWFnZSc+U2VsZWN0IGFuIEltYWdlPC9oNj59XHJcbiAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVTa2lsbCAmJiA8QWN0aXZlQ2FyZCBhY3RpdmVTa2lsbD17YWN0aXZlU2tpbGx9IC8+IH1cclxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlcyc+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIGVmZmljaWVudCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nLi4vc3RhdGljL0RhcmtCYWRnZS5wbmcnIHdpZHRoPXsxNzV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGFydExpbmUgc3R5bGU9e3sgY29sb3I6ICcjRTVFN0U2JywgZm9udFNpemU6ICc2cmVtJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJyMwMDBjMWYnLCBmb250V2VpZ2h0OiAnYm9sZGVyJ319PkVmZmljaWVudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgIHN0eWxlPXt7IGNvbG9yOiAnIzE0MTMwMSd9fT5tYXhpbXVtIHByb2R1Y3Rpdml0eTsgd2VsbC1vcmdhbml6ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogcmVzcG9uc2l2ZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZFBob25lbGluayBzdHlsZT17eyBjb2xvcjogJyNFNUU3RTYnLCBmb250U2l6ZTogJzZyZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJyMwMDBjMWYnLCBmb250V2VpZ2h0OiAnYm9sZGVyJ319PlJlc3BvbnNpdmU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnIzE0MTMwMSd9fT5vcHRpbWl6ZWQgbGF5b3V0cyBmb3IgYWxsIGRldmljZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogY3JlYXRpdmUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2Utc3R5bGVzJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWRMaWdodGJ1bGJPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnI0U1RTdFNicsIGZvbnRTaXplOiAnNnJlbScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjMDAwYzFmJywgZm9udFdlaWdodDogJ2JvbGRlcid9fT5DcmVhdGl2ZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMTQxMzAxJ319PmhpZ2hlc3QgcXVhbGl0eSBzb2x1dGlvbnMgcHJvdmlkZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogZHluYW1pYyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMgZHluYW1pYyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhR2xvYmVBbWVyaWNhcyBzdHlsZT17eyBjb2xvcjogJyNFNUU3RTYnLCBmb250U2l6ZTogJzZyZW0nIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjMDAwYzFmJywgZm9udFdlaWdodDogJ2JvbGRlcid9fT5EeW5hbWljPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMxNDEzMDEnfX0+cmVmbGVjdHMgcmVhbC10aW1lIGNoYW5nZXMgaW4gdmFsdWVzIHdpdGggYWN0aXZpdHkuICBCdWlsdCB3aXRoIERSWSwgcmV1c2FibGUgY29tcG9uZW50cy4gPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgICAgICAgPC8+fVxyXG5cclxuICAgICAgICAgICAge3BvcnRmb2xpbyAmJlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj0nZmFkZUluJyBkdXJhdGlvbj17Mn0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17ZGFyayA/IG51bGwgOiAnbGlnaHQtdGV4dCd9PlBPUlRGT0xJTyBDT05URU5UIFRFU1QgLSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3J1bSBxdWlidXNkYW0gcXVpZGVtIG1vZGksIGNvbW1vZGkgYWxpcXVhbSBmdWdhIHF1YWVyYXQsIGlwc3VtIG9wdGlvIG1vbGVzdGlhcyBkb2xvcmVzLCBhdXQgYWNjdXNhbnRpdW0gY29uc2VxdWF0dXIgZXhwZWRpdGEuIFZlcml0YXRpcywgcmVjdXNhbmRhZSBkb2xvcmUuIEFjY3VzYW11cywgZXJyb3IgZGVsZWN0dXMhXHJcbiAgICAgICAgICAgIENvbW1vZGkgbWFnbmkgdm9sdXB0YXMgbmVtbyBlYXJ1bSBwZXJmZXJlbmRpcyB2b2x1cHRhdHVtIG9kaW8gZGlnbmlzc2ltb3MgbW9sZXN0aWFlIGVzc2UgYXV0LiBOYW0gcXVhZSBiZWF0YWUgbWFnbmFtIGVhLCB2b2x1cHRhdGlidXMgbWludXMgZW5pbSB2aXRhZSBjdWxwYSwgY3VtIGV4cGVkaXRhIGZ1Z2EgbmVzY2l1bnQgbnVsbGEsIHV0IHNpbWlsaXF1ZSBjb3JydXB0aT9cclxuICAgICAgICAgICAgQ3VtcXVlIHF1aXMgaWxsbyBlaXVzIGRvbG9yZW1xdWUgYWNjdXNhbXVzIGFsaXF1aWQgYXJjaGl0ZWN0byEgUGFyaWF0dXIgcHJvdmlkZW50IGN1bXF1ZSBtaW5pbWEgY29ycG9yaXMgbWFpb3Jlcy4gQXNwZXJpb3JlcywgZGViaXRpcyBldmVuaWV0LiBRdWFlcmF0LCBwb3JybyB0ZW5ldHVyIHF1YW0gcmF0aW9uZSBzdXNjaXBpdCBub24gdm9sdXB0YXRlcyBjdXBpZGl0YXRlIHRvdGFtIHF1aXMgY29ycnVwdGkgb2ZmaWNpaXMhXHJcbiAgICAgICAgICAgIEFsaXF1YW0gZGljdGEgYXQgbW9sZXN0aWFzIGRpZ25pc3NpbW9zLCBpbGx1bSBhY2N1c2FtdXMsIHZpdGFlIHF1YWVyYXQgY29ycnVwdGkgcGVyZmVyZW5kaXMgYWQgb2JjYWVjYXRpIGhpYyBjdWxwYSBpdXN0byB0ZW1wb3JhIG1hZ25pIHNpdCBpbmNpZHVudCBtaW5pbWEgdGVtcG9yZSBhdHF1ZSBkdWNpbXVzIG5lcXVlIHF1YWUuIE5pc2kgZXhlcmNpdGF0aW9uZW0gcHJvdmlkZW50IGJsYW5kaXRpaXMhXHJcbiAgICAgICAgICAgIEVycm9yIGF1dGVtIG9mZmljaWEgdGVuZXR1ciBzb2x1dGEgbnVsbGEgaWxsdW0sIHZlcm8gY29tbW9kaSByZWN1c2FuZGFlLCBmdWdhIG5vYmlzIG5hbSBmYWNlcmUgaXRhcXVlIGhhcnVtIG9mZmljaWlzISBQZXJmZXJlbmRpcyBpcHNhbSBlc3NlIGxhYm9yaW9zYW0gbmVxdWUgZW5pbSBxdW9kIHNpdC4gQ29uc2VxdXVudHVyIG1haW9yZXMgc29sdXRhIG9iY2FlY2F0aSBhc3Blcm5hdHVyP1xyXG4gICAgICAgICAgICBBc3Blcm5hdHVyLCBuaWhpbCBvZmZpY2lhISBFeHBlZGl0YSBkb2xvciBuZW1vIGl0YXF1ZSByYXRpb25lIGFjY3VzYW50aXVtIHVuZGUgdmVsIGFyY2hpdGVjdG8gcXVvZCBhY2N1c2FtdXMsIHRlbmV0dXIgYmxhbmRpdGlpcyBlc3NlIGxpYmVybyBsYWJvcnVtIGFtZXQsIGZ1Z2EgYWRpcGlzY2kuIFJlaWNpZW5kaXMgbGFib3J1bSBuYW0gZWFxdWUgbm9uIGVhcnVtIHF1aXMgZmFjZXJlLlxyXG4gICAgICAgICAgICBGdWdpdCBhY2N1c2FtdXMgYXBlcmlhbSBsYWJvcmUgcXVpc3F1YW0gYXV0LiBEb2xvciByZWljaWVuZGlzIGFsaXF1YW0gcXVvZCBmdWdpdCBwb3NzaW11cyBlYXJ1bSBuZXF1ZSwgaXVzdG8gcmF0aW9uZSBleHBlZGl0YT8gUmVpY2llbmRpcyBxdWkgc2FwaWVudGUgcG9zc2ltdXMgbm9zdHJ1bSBzYWVwZSBzaXQgZGlzdGluY3RpbyBwYXJpYXR1ciBhdXRlbSwgY29tbW9kaSBpcHNhIGVhcnVtLlxyXG4gICAgICAgICAgICBPZGl0IHJlcGVsbGF0IGluIG1vZGkgdGVtcG9yYSEgUXVpYSBxdWlzcXVhbSByZXBlbGxlbmR1cyBzZWQgcXVhc2kgc2l0IHNvbHV0YSBzaW50IG1hZ25hbSBxdWFlIG1vZGkgcmVpY2llbmRpcyBwYXJpYXR1ciBuaXNpIGZ1Z2EgY3VscGEsIHNhcGllbnRlIHZlbCB0ZW1wb3JhIHNpbWlsaXF1ZT8gUXVvcyBvZmZpY2lpcyBwb3NzaW11cyBkaWduaXNzaW1vcyBhZGlwaXNjaS5cclxuICAgICAgICAgICAgRXZlbmlldCBleHBsaWNhYm8gdm9sdXB0YXRlIGVsaWdlbmRpIGRvbG9yZW1xdWUgZXQgc3VzY2lwaXQsIHJlcnVtLCBvZmZpY2lpcyBuZXNjaXVudCBzYXBpZW50ZSBpcHNhIG1hZ25pIG51bXF1YW0gcXVhbSBhYiByZWN1c2FuZGFlIGhhcnVtIGluY2lkdW50IGN1bXF1ZSBlcnJvciB2b2x1cHRhdGVtIHRlbXBvcmlidXMgcXVhZSBtb2RpLCBudWxsYSBleD8gUmF0aW9uZSwgbW9kaSBjb25zZXF1dW50dXIhXHJcbiAgICAgICAgICAgIEl0YXF1ZSBleHBlZGl0YSB2ZWwgZG9sb3JlIGV4ZXJjaXRhdGlvbmVtIG9kaW8gb2ZmaWNpYSwgZW9zIGZ1Z2lhdCBvYmNhZWNhdGkgaW1wZWRpdCBhZGlwaXNjaSBzaW50IHJlY3VzYW5kYWUgY29uc2VxdXVudHVyIHBvc3NpbXVzIGNvbnNlY3RldHVyIHN1bnQgbmlzaSByZXBlbGxhdCB2b2x1cHRhdGVzIHJlcGVsbGVuZHVzIHF1aXNxdWFtIGVzc2UgYXNwZXJpb3JlcyBtaW51cyBlYS4gRmFjaWxpcywgYmVhdGFlIG9wdGlvLlxyXG4gICAgICAgICAgICBDb3Jwb3JpcyBlc3NlIG1vZGkgbGFib3J1bSBkb2xvcnVtLCBuaXNpIGF1dGVtIHBhcmlhdHVyIG1vbGxpdGlhLiBJbGxvLCBhY2N1c2FtdXMgc2VkIHByYWVzZW50aXVtIGF0cXVlIGVvcyBtYWduaS4gSGFydW0gYXV0IHJlcGVsbGVuZHVzIGNvbnNlcXVhdHVyIGxhYm9ydW0sIHByYWVzZW50aXVtIGNvbnNlcXV1bnR1ciB2b2x1cHRhdGVzIGRvbG9yZW1xdWUgcHJvdmlkZW50IG5paGlsIGVhcnVtIHRlbXBvcmUgZXN0IVxyXG4gICAgICAgICAgICBJdXN0byBwb3JybyB1bGxhbSBuZWNlc3NpdGF0aWJ1cyBkZWxlbml0aSBvZmZpY2lhIHJlcnVtIGlkIGRpc3RpbmN0aW8hIE5vbiwgdmVyaXRhdGlzIGlwc2EgY29uc2VjdGV0dXIgYXJjaGl0ZWN0byBpbGxvIHBsYWNlYXQgZXQgZXJyb3IgdmVsIGludmVudG9yZT8gTW9sbGl0aWEgZGVzZXJ1bnQgbWludXMgdm9sdXB0YXRlcyBwcmFlc2VudGl1bSBhbmltaS4gUmVydW0gcHJvdmlkZW50IHN1bnQgcXVhcyFcclxuICAgICAgICAgICAgTGFib3J1bSBxdWlidXNkYW0gaXVyZSB0b3RhbSBleHBsaWNhYm8gY3VscGEgdGVtcG9yaWJ1cywgb3B0aW8gdm9sdXB0YXRlbSBuZW1vIGF0IGVvcyB2b2x1cHRhcyBuZWNlc3NpdGF0aWJ1cyBkdWNpbXVzIHF1aSBjb25zZXF1YXR1ciBxdWFtIG5hdHVzIGRvbG9yIGV4LCBuYW0gY3VtcXVlLiBNb2RpIG9wdGlvIGF1dGVtIGFkaXBpc2NpIGlsbG8sIGNvbnNlY3RldHVyIHByb3ZpZGVudC5cclxuICAgICAgICAgICAgRW5pbSBzdXNjaXBpdCBjdW1xdWUgYW1ldCBibGFuZGl0aWlzIHZlcml0YXRpcyBzZWQgdmVuaWFtIGVhcnVtIGNvbnNlY3RldHVyIG5lcXVlIG1pbmltYSBxdWlzcXVhbSBkZWxlbml0aSBjdWxwYSB1dCBpdXJlIGlwc2EsIG5lY2Vzc2l0YXRpYnVzIGRpc3RpbmN0aW8gcmVjdXNhbmRhZSBjb21tb2RpIHVsbGFtISBMYWJvcmlvc2FtIG1heGltZSBzdXNjaXBpdCBoaWMgaW5jaWR1bnQgdGVtcG9yYSBoYXJ1bS5cclxuICAgICAgICAgICAgTWludXMgYXJjaGl0ZWN0byB2ZXJpdGF0aXMgaXBzdW0gaW4gZW9zIHJlbSB2ZWxpdCBzZXF1aT8gSWxsbyBjb3Jwb3JpcyBkaXN0aW5jdGlvIHF1aXNxdWFtIGlwc2EgdmVsaXQgbWFnbmFtLCBldCBtYXhpbWUgYWQgdGVtcG9yZSBzb2x1dGEgcGFyaWF0dXIgaW52ZW50b3JlIHZvbHVwdGFzIGlsbHVtIHRvdGFtIHJlcnVtIHZvbHVwdGF0aWJ1cyBxdWlhIGF0cXVlP1xyXG4gICAgICAgICAgICBRdWkgY3VwaWRpdGF0ZSBlYSBtb2xlc3RpYXMgaWQgcXVpc3F1YW0gbnVsbGEgYSEgVWxsYW0gbnVsbGEgbW9sZXN0aWFlIGFjY3VzYW50aXVtIGFuaW1pIG9wdGlvIGluIGRvbG9ydW0gb2JjYWVjYXRpLCBwZXJmZXJlbmRpcyBiZWF0YWUgZG9sb3JlcyBlc3QgY3VscGEgZG9sb3JlbXF1ZSB1bmRlIGl1c3RvIG5lbW8gc2FlcGUgbmVxdWUgcmVwdWRpYW5kYWUgaXN0ZS5cclxuICAgICAgICAgICAgRXZlbmlldCBkb2xvcnVtIGluY2lkdW50IG9iY2FlY2F0aSBpcHNhIHZlcm8gZXJyb3Igb2ZmaWNpaXMgZG9sb3JlbXF1ZSBkaXN0aW5jdGlvLCB2b2x1cHRhcyBhdHF1ZSB0b3RhbSBvZmZpY2lhIGxhYm9yZSB2ZXJpdGF0aXMgbW9sbGl0aWEgbm9zdHJ1bSB1dCB0ZW1wb3JpYnVzIHZvbHVwdGF0ZXMgcGxhY2VhdCBzb2x1dGEsIHVuZGUgaGljIGNvcnJ1cHRpIG5hdHVzIHBhcmlhdHVyIHF1YXMuIEFtZXQhXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgICAgIHtyZXN1bWUgJiZcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49J2ZhZGVJbicgZHVyYXRpb249ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc3VtZS1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nLi4vc3RhdGljL3Jlc3VtZS5wZGYnIGRvd25sb2FkPjxGaURvd25sb2FkIHN0eWxlPXt7IGZvbnRTaXplOiAnMi41cmVtJ319IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZXRhaWxzIHN0eWxlPXt7IG1hcmdpblRvcDogJzIlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeSBvbkNsaWNrPXsoKT0+IHNldFJlc3VtZVZpZXcoIXJlc3VtZVZpZXcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7cmVzdW1lVmlldyA/IDxoNT5DbGljayB0byBIaWRlPC9oNT4gOiA8aDU+Q2xpY2sgRm9yIE1vcmUgSW5mbzwvaDU+fSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bWVWaWV3ID8gPGRpdiBjbGFzc05hbWU9J3Jlc3VtZS1pbWdzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuLi9zdGF0aWMvcmVzdW1lLWhlYWRlci5wbmcnIGFsdD0ncmVzdW1lLWhlYWRlcicvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4uL3N0YXRpYy9yZXN1bWVUb3AucG5nJyBhbHQ9J3Jlc3VtZS1ib3R0b20nLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuLi9zdGF0aWMvcmVzdW1lQm90dG9tLnBuZycgYWx0PSdyZXN1bWUtdG9wJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdyZXN1bWUtaGVhZGVyJyBzcmM9Jy4uL3N0YXRpYy9yZXN1bWUtaGVhZGVyLnBuZycgYWx0PSdyZXN1bWUtaGVhZGVyJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPXtkYXJrID8gbnVsbCA6ICdsaWdodC10ZXh0J30+UkVTVU1FIENPTlRFTlQgVEVTVCAtIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvcnVtIHF1aWJ1c2RhbSBxdWlkZW0gbW9kaSwgY29tbW9kaSBhbGlxdWFtIGZ1Z2EgcXVhZXJhdCwgaXBzdW0gb3B0aW8gbW9sZXN0aWFzIGRvbG9yZXMsIGF1dCBhY2N1c2FudGl1bSBjb25zZXF1YXR1ciBleHBlZGl0YS4gVmVyaXRhdGlzLCByZWN1c2FuZGFlIGRvbG9yZS4gQWNjdXNhbXVzLCBlcnJvciBkZWxlY3R1cyFcclxuICAgICAgICAgICAgQ29tbW9kaSBtYWduaSB2b2x1cHRhcyBuZW1vIGVhcnVtIHBlcmZlcmVuZGlzIHZvbHVwdGF0dW0gb2RpbyBkaWduaXNzaW1vcyBtb2xlc3RpYWUgZXNzZSBhdXQuIE5hbSBxdWFlIGJlYXRhZSBtYWduYW0gZWEsIHZvbHVwdGF0aWJ1cyBtaW51cyBlbmltIHZpdGFlIGN1bHBhLCBjdW0gZXhwZWRpdGEgZnVnYSBuZXNjaXVudCBudWxsYSwgdXQgc2ltaWxpcXVlIGNvcnJ1cHRpP1xyXG4gICAgICAgICAgICBDdW1xdWUgcXVpcyBpbGxvIGVpdXMgZG9sb3JlbXF1ZSBhY2N1c2FtdXMgYWxpcXVpZCBhcmNoaXRlY3RvISBQYXJpYXR1ciBwcm92aWRlbnQgY3VtcXVlIG1pbmltYSBjb3Jwb3JpcyBtYWlvcmVzLiBBc3BlcmlvcmVzLCBkZWJpdGlzIGV2ZW5pZXQuIFF1YWVyYXQsIHBvcnJvIHRlbmV0dXIgcXVhbSByYXRpb25lIHN1c2NpcGl0IG5vbiB2b2x1cHRhdGVzIGN1cGlkaXRhdGUgdG90YW0gcXVpcyBjb3JydXB0aSBvZmZpY2lpcyFcclxuICAgICAgICAgICAgQWxpcXVhbSBkaWN0YSBhdCBtb2xlc3RpYXMgZGlnbmlzc2ltb3MsIGlsbHVtIGFjY3VzYW11cywgdml0YWUgcXVhZXJhdCBjb3JydXB0aSBwZXJmZXJlbmRpcyBhZCBvYmNhZWNhdGkgaGljIGN1bHBhIGl1c3RvIHRlbXBvcmEgbWFnbmkgc2l0IGluY2lkdW50IG1pbmltYSB0ZW1wb3JlIGF0cXVlIGR1Y2ltdXMgbmVxdWUgcXVhZS4gTmlzaSBleGVyY2l0YXRpb25lbSBwcm92aWRlbnQgYmxhbmRpdGlpcyFcclxuICAgICAgICAgICAgRXJyb3IgYXV0ZW0gb2ZmaWNpYSB0ZW5ldHVyIHNvbHV0YSBudWxsYSBpbGx1bSwgdmVybyBjb21tb2RpIHJlY3VzYW5kYWUsIGZ1Z2Egbm9iaXMgbmFtIGZhY2VyZSBpdGFxdWUgaGFydW0gb2ZmaWNpaXMhIFBlcmZlcmVuZGlzIGlwc2FtIGVzc2UgbGFib3Jpb3NhbSBuZXF1ZSBlbmltIHF1b2Qgc2l0LiBDb25zZXF1dW50dXIgbWFpb3JlcyBzb2x1dGEgb2JjYWVjYXRpIGFzcGVybmF0dXI/XHJcbiAgICAgICAgICAgIEFzcGVybmF0dXIsIG5paGlsIG9mZmljaWEhIEV4cGVkaXRhIGRvbG9yIG5lbW8gaXRhcXVlIHJhdGlvbmUgYWNjdXNhbnRpdW0gdW5kZSB2ZWwgYXJjaGl0ZWN0byBxdW9kIGFjY3VzYW11cywgdGVuZXR1ciBibGFuZGl0aWlzIGVzc2UgbGliZXJvIGxhYm9ydW0gYW1ldCwgZnVnYSBhZGlwaXNjaS4gUmVpY2llbmRpcyBsYWJvcnVtIG5hbSBlYXF1ZSBub24gZWFydW0gcXVpcyBmYWNlcmUuXHJcbiAgICAgICAgICAgIEZ1Z2l0IGFjY3VzYW11cyBhcGVyaWFtIGxhYm9yZSBxdWlzcXVhbSBhdXQuIERvbG9yIHJlaWNpZW5kaXMgYWxpcXVhbSBxdW9kIGZ1Z2l0IHBvc3NpbXVzIGVhcnVtIG5lcXVlLCBpdXN0byByYXRpb25lIGV4cGVkaXRhPyBSZWljaWVuZGlzIHF1aSBzYXBpZW50ZSBwb3NzaW11cyBub3N0cnVtIHNhZXBlIHNpdCBkaXN0aW5jdGlvIHBhcmlhdHVyIGF1dGVtLCBjb21tb2RpIGlwc2EgZWFydW0uXHJcbiAgICAgICAgICAgIE9kaXQgcmVwZWxsYXQgaW4gbW9kaSB0ZW1wb3JhISBRdWlhIHF1aXNxdWFtIHJlcGVsbGVuZHVzIHNlZCBxdWFzaSBzaXQgc29sdXRhIHNpbnQgbWFnbmFtIHF1YWUgbW9kaSByZWljaWVuZGlzIHBhcmlhdHVyIG5pc2kgZnVnYSBjdWxwYSwgc2FwaWVudGUgdmVsIHRlbXBvcmEgc2ltaWxpcXVlPyBRdW9zIG9mZmljaWlzIHBvc3NpbXVzIGRpZ25pc3NpbW9zIGFkaXBpc2NpLlxyXG4gICAgICAgICAgICBFdmVuaWV0IGV4cGxpY2FibyB2b2x1cHRhdGUgZWxpZ2VuZGkgZG9sb3JlbXF1ZSBldCBzdXNjaXBpdCwgcmVydW0sIG9mZmljaWlzIG5lc2NpdW50IHNhcGllbnRlIGlwc2EgbWFnbmkgbnVtcXVhbSBxdWFtIGFiIHJlY3VzYW5kYWUgaGFydW0gaW5jaWR1bnQgY3VtcXVlIGVycm9yIHZvbHVwdGF0ZW0gdGVtcG9yaWJ1cyBxdWFlIG1vZGksIG51bGxhIGV4PyBSYXRpb25lLCBtb2RpIGNvbnNlcXV1bnR1ciFcclxuICAgICAgICAgICAgSXRhcXVlIGV4cGVkaXRhIHZlbCBkb2xvcmUgZXhlcmNpdGF0aW9uZW0gb2RpbyBvZmZpY2lhLCBlb3MgZnVnaWF0IG9iY2FlY2F0aSBpbXBlZGl0IGFkaXBpc2NpIHNpbnQgcmVjdXNhbmRhZSBjb25zZXF1dW50dXIgcG9zc2ltdXMgY29uc2VjdGV0dXIgc3VudCBuaXNpIHJlcGVsbGF0IHZvbHVwdGF0ZXMgcmVwZWxsZW5kdXMgcXVpc3F1YW0gZXNzZSBhc3BlcmlvcmVzIG1pbnVzIGVhLiBGYWNpbGlzLCBiZWF0YWUgb3B0aW8uXHJcbiAgICAgICAgICAgIENvcnBvcmlzIGVzc2UgbW9kaSBsYWJvcnVtIGRvbG9ydW0sIG5pc2kgYXV0ZW0gcGFyaWF0dXIgbW9sbGl0aWEuIElsbG8sIGFjY3VzYW11cyBzZWQgcHJhZXNlbnRpdW0gYXRxdWUgZW9zIG1hZ25pLiBIYXJ1bSBhdXQgcmVwZWxsZW5kdXMgY29uc2VxdWF0dXIgbGFib3J1bSwgcHJhZXNlbnRpdW0gY29uc2VxdXVudHVyIHZvbHVwdGF0ZXMgZG9sb3JlbXF1ZSBwcm92aWRlbnQgbmloaWwgZWFydW0gdGVtcG9yZSBlc3QhXHJcbiAgICAgICAgICAgIEl1c3RvIHBvcnJvIHVsbGFtIG5lY2Vzc2l0YXRpYnVzIGRlbGVuaXRpIG9mZmljaWEgcmVydW0gaWQgZGlzdGluY3RpbyEgTm9uLCB2ZXJpdGF0aXMgaXBzYSBjb25zZWN0ZXR1ciBhcmNoaXRlY3RvIGlsbG8gcGxhY2VhdCBldCBlcnJvciB2ZWwgaW52ZW50b3JlPyBNb2xsaXRpYSBkZXNlcnVudCBtaW51cyB2b2x1cHRhdGVzIHByYWVzZW50aXVtIGFuaW1pLiBSZXJ1bSBwcm92aWRlbnQgc3VudCBxdWFzIVxyXG4gICAgICAgICAgICBMYWJvcnVtIHF1aWJ1c2RhbSBpdXJlIHRvdGFtIGV4cGxpY2FibyBjdWxwYSB0ZW1wb3JpYnVzLCBvcHRpbyB2b2x1cHRhdGVtIG5lbW8gYXQgZW9zIHZvbHVwdGFzIG5lY2Vzc2l0YXRpYnVzIGR1Y2ltdXMgcXVpIGNvbnNlcXVhdHVyIHF1YW0gbmF0dXMgZG9sb3IgZXgsIG5hbSBjdW1xdWUuIE1vZGkgb3B0aW8gYXV0ZW0gYWRpcGlzY2kgaWxsbywgY29uc2VjdGV0dXIgcHJvdmlkZW50LlxyXG4gICAgICAgICAgICBFbmltIHN1c2NpcGl0IGN1bXF1ZSBhbWV0IGJsYW5kaXRpaXMgdmVyaXRhdGlzIHNlZCB2ZW5pYW0gZWFydW0gY29uc2VjdGV0dXIgbmVxdWUgbWluaW1hIHF1aXNxdWFtIGRlbGVuaXRpIGN1bHBhIHV0IGl1cmUgaXBzYSwgbmVjZXNzaXRhdGlidXMgZGlzdGluY3RpbyByZWN1c2FuZGFlIGNvbW1vZGkgdWxsYW0hIExhYm9yaW9zYW0gbWF4aW1lIHN1c2NpcGl0IGhpYyBpbmNpZHVudCB0ZW1wb3JhIGhhcnVtLlxyXG4gICAgICAgICAgICBNaW51cyBhcmNoaXRlY3RvIHZlcml0YXRpcyBpcHN1bSBpbiBlb3MgcmVtIHZlbGl0IHNlcXVpPyBJbGxvIGNvcnBvcmlzIGRpc3RpbmN0aW8gcXVpc3F1YW0gaXBzYSB2ZWxpdCBtYWduYW0sIGV0IG1heGltZSBhZCB0ZW1wb3JlIHNvbHV0YSBwYXJpYXR1ciBpbnZlbnRvcmUgdm9sdXB0YXMgaWxsdW0gdG90YW0gcmVydW0gdm9sdXB0YXRpYnVzIHF1aWEgYXRxdWU/XHJcbiAgICAgICAgICAgIFF1aSBjdXBpZGl0YXRlIGVhIG1vbGVzdGlhcyBpZCBxdWlzcXVhbSBudWxsYSBhISBVbGxhbSBudWxsYSBtb2xlc3RpYWUgYWNjdXNhbnRpdW0gYW5pbWkgb3B0aW8gaW4gZG9sb3J1bSBvYmNhZWNhdGksIHBlcmZlcmVuZGlzIGJlYXRhZSBkb2xvcmVzIGVzdCBjdWxwYSBkb2xvcmVtcXVlIHVuZGUgaXVzdG8gbmVtbyBzYWVwZSBuZXF1ZSByZXB1ZGlhbmRhZSBpc3RlLlxyXG4gICAgICAgICAgICBFdmVuaWV0IGRvbG9ydW0gaW5jaWR1bnQgb2JjYWVjYXRpIGlwc2EgdmVybyBlcnJvciBvZmZpY2lpcyBkb2xvcmVtcXVlIGRpc3RpbmN0aW8sIHZvbHVwdGFzIGF0cXVlIHRvdGFtIG9mZmljaWEgbGFib3JlIHZlcml0YXRpcyBtb2xsaXRpYSBub3N0cnVtIHV0IHRlbXBvcmlidXMgdm9sdXB0YXRlcyBwbGFjZWF0IHNvbHV0YSwgdW5kZSBoaWMgY29ycnVwdGkgbmF0dXMgcGFyaWF0dXIgcXVhcy4gQW1ldCFcclxuICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgICAgIHtjb250YWN0ICYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtJz5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm0tY29udGFpbmVyJyBhY3Rpb249XCJodHRwczovL2Zvcm1jYXJyeS5jb20vcy9iTjlZMUYtd3J6V1wiIG1ldGhvZD1cIlBPU1RcIiBhY2NlcHQtY2hhcnNldD1cIlVURi04XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPSdOYW1lJyByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9J0UtbWFpbCcgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj0nTWVzc2FnZScgY2xhc3NOYW1lPSdtZXNzYWdlJyByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfZ290Y2hhXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48PlNlbmQgPEZhUGFwZXJQbGFuZSBzdHlsZT17eyBmb250U2l6ZTogJzEuNXJlbSd9fSAvPjwvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPXtkYXJrID8gbnVsbCA6ICdsaWdodC10ZXh0J30+Q09OVEFDVCBDT05URU5UIFRFU1QgLSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3J1bSBxdWlidXNkYW0gcXVpZGVtIG1vZGksIGNvbW1vZGkgYWxpcXVhbSBmdWdhIHF1YWVyYXQsIGlwc3VtIG9wdGlvIG1vbGVzdGlhcyBkb2xvcmVzLCBhdXQgYWNjdXNhbnRpdW0gY29uc2VxdWF0dXIgZXhwZWRpdGEuIFZlcml0YXRpcywgcmVjdXNhbmRhZSBkb2xvcmUuIEFjY3VzYW11cywgZXJyb3IgZGVsZWN0dXMhXHJcbiAgICAgICAgICAgIENvbW1vZGkgbWFnbmkgdm9sdXB0YXMgbmVtbyBlYXJ1bSBwZXJmZXJlbmRpcyB2b2x1cHRhdHVtIG9kaW8gZGlnbmlzc2ltb3MgbW9sZXN0aWFlIGVzc2UgYXV0LiBOYW0gcXVhZSBiZWF0YWUgbWFnbmFtIGVhLCB2b2x1cHRhdGlidXMgbWludXMgZW5pbSB2aXRhZSBjdWxwYSwgY3VtIGV4cGVkaXRhIGZ1Z2EgbmVzY2l1bnQgbnVsbGEsIHV0IHNpbWlsaXF1ZSBjb3JydXB0aT9cclxuICAgICAgICAgICAgQ3VtcXVlIHF1aXMgaWxsbyBlaXVzIGRvbG9yZW1xdWUgYWNjdXNhbXVzIGFsaXF1aWQgYXJjaGl0ZWN0byEgUGFyaWF0dXIgcHJvdmlkZW50IGN1bXF1ZSBtaW5pbWEgY29ycG9yaXMgbWFpb3Jlcy4gQXNwZXJpb3JlcywgZGViaXRpcyBldmVuaWV0LiBRdWFlcmF0LCBwb3JybyB0ZW5ldHVyIHF1YW0gcmF0aW9uZSBzdXNjaXBpdCBub24gdm9sdXB0YXRlcyBjdXBpZGl0YXRlIHRvdGFtIHF1aXMgY29ycnVwdGkgb2ZmaWNpaXMhXHJcbiAgICAgICAgICAgIEFsaXF1YW0gZGljdGEgYXQgbW9sZXN0aWFzIGRpZ25pc3NpbW9zLCBpbGx1bSBhY2N1c2FtdXMsIHZpdGFlIHF1YWVyYXQgY29ycnVwdGkgcGVyZmVyZW5kaXMgYWQgb2JjYWVjYXRpIGhpYyBjdWxwYSBpdXN0byB0ZW1wb3JhIG1hZ25pIHNpdCBpbmNpZHVudCBtaW5pbWEgdGVtcG9yZSBhdHF1ZSBkdWNpbXVzIG5lcXVlIHF1YWUuIE5pc2kgZXhlcmNpdGF0aW9uZW0gcHJvdmlkZW50IGJsYW5kaXRpaXMhXHJcbiAgICAgICAgICAgIEVycm9yIGF1dGVtIG9mZmljaWEgdGVuZXR1ciBzb2x1dGEgbnVsbGEgaWxsdW0sIHZlcm8gY29tbW9kaSByZWN1c2FuZGFlLCBmdWdhIG5vYmlzIG5hbSBmYWNlcmUgaXRhcXVlIGhhcnVtIG9mZmljaWlzISBQZXJmZXJlbmRpcyBpcHNhbSBlc3NlIGxhYm9yaW9zYW0gbmVxdWUgZW5pbSBxdW9kIHNpdC4gQ29uc2VxdXVudHVyIG1haW9yZXMgc29sdXRhIG9iY2FlY2F0aSBhc3Blcm5hdHVyP1xyXG4gICAgICAgICAgICBBc3Blcm5hdHVyLCBuaWhpbCBvZmZpY2lhISBFeHBlZGl0YSBkb2xvciBuZW1vIGl0YXF1ZSByYXRpb25lIGFjY3VzYW50aXVtIHVuZGUgdmVsIGFyY2hpdGVjdG8gcXVvZCBhY2N1c2FtdXMsIHRlbmV0dXIgYmxhbmRpdGlpcyBlc3NlIGxpYmVybyBsYWJvcnVtIGFtZXQsIGZ1Z2EgYWRpcGlzY2kuIFJlaWNpZW5kaXMgbGFib3J1bSBuYW0gZWFxdWUgbm9uIGVhcnVtIHF1aXMgZmFjZXJlLlxyXG4gICAgICAgICAgICBGdWdpdCBhY2N1c2FtdXMgYXBlcmlhbSBsYWJvcmUgcXVpc3F1YW0gYXV0LiBEb2xvciByZWljaWVuZGlzIGFsaXF1YW0gcXVvZCBmdWdpdCBwb3NzaW11cyBlYXJ1bSBuZXF1ZSwgaXVzdG8gcmF0aW9uZSBleHBlZGl0YT8gUmVpY2llbmRpcyBxdWkgc2FwaWVudGUgcG9zc2ltdXMgbm9zdHJ1bSBzYWVwZSBzaXQgZGlzdGluY3RpbyBwYXJpYXR1ciBhdXRlbSwgY29tbW9kaSBpcHNhIGVhcnVtLlxyXG4gICAgICAgICAgICBPZGl0IHJlcGVsbGF0IGluIG1vZGkgdGVtcG9yYSEgUXVpYSBxdWlzcXVhbSByZXBlbGxlbmR1cyBzZWQgcXVhc2kgc2l0IHNvbHV0YSBzaW50IG1hZ25hbSBxdWFlIG1vZGkgcmVpY2llbmRpcyBwYXJpYXR1ciBuaXNpIGZ1Z2EgY3VscGEsIHNhcGllbnRlIHZlbCB0ZW1wb3JhIHNpbWlsaXF1ZT8gUXVvcyBvZmZpY2lpcyBwb3NzaW11cyBkaWduaXNzaW1vcyBhZGlwaXNjaS5cclxuICAgICAgICAgICAgRXZlbmlldCBleHBsaWNhYm8gdm9sdXB0YXRlIGVsaWdlbmRpIGRvbG9yZW1xdWUgZXQgc3VzY2lwaXQsIHJlcnVtLCBvZmZpY2lpcyBuZXNjaXVudCBzYXBpZW50ZSBpcHNhIG1hZ25pIG51bXF1YW0gcXVhbSBhYiByZWN1c2FuZGFlIGhhcnVtIGluY2lkdW50IGN1bXF1ZSBlcnJvciB2b2x1cHRhdGVtIHRlbXBvcmlidXMgcXVhZSBtb2RpLCBudWxsYSBleD8gUmF0aW9uZSwgbW9kaSBjb25zZXF1dW50dXIhXHJcbiAgICAgICAgICAgIEl0YXF1ZSBleHBlZGl0YSB2ZWwgZG9sb3JlIGV4ZXJjaXRhdGlvbmVtIG9kaW8gb2ZmaWNpYSwgZW9zIGZ1Z2lhdCBvYmNhZWNhdGkgaW1wZWRpdCBhZGlwaXNjaSBzaW50IHJlY3VzYW5kYWUgY29uc2VxdXVudHVyIHBvc3NpbXVzIGNvbnNlY3RldHVyIHN1bnQgbmlzaSByZXBlbGxhdCB2b2x1cHRhdGVzIHJlcGVsbGVuZHVzIHF1aXNxdWFtIGVzc2UgYXNwZXJpb3JlcyBtaW51cyBlYS4gRmFjaWxpcywgYmVhdGFlIG9wdGlvLlxyXG4gICAgICAgICAgICBDb3Jwb3JpcyBlc3NlIG1vZGkgbGFib3J1bSBkb2xvcnVtLCBuaXNpIGF1dGVtIHBhcmlhdHVyIG1vbGxpdGlhLiBJbGxvLCBhY2N1c2FtdXMgc2VkIHByYWVzZW50aXVtIGF0cXVlIGVvcyBtYWduaS4gSGFydW0gYXV0IHJlcGVsbGVuZHVzIGNvbnNlcXVhdHVyIGxhYm9ydW0sIHByYWVzZW50aXVtIGNvbnNlcXV1bnR1ciB2b2x1cHRhdGVzIGRvbG9yZW1xdWUgcHJvdmlkZW50IG5paGlsIGVhcnVtIHRlbXBvcmUgZXN0IVxyXG4gICAgICAgICAgICBJdXN0byBwb3JybyB1bGxhbSBuZWNlc3NpdGF0aWJ1cyBkZWxlbml0aSBvZmZpY2lhIHJlcnVtIGlkIGRpc3RpbmN0aW8hIE5vbiwgdmVyaXRhdGlzIGlwc2EgY29uc2VjdGV0dXIgYXJjaGl0ZWN0byBpbGxvIHBsYWNlYXQgZXQgZXJyb3IgdmVsIGludmVudG9yZT8gTW9sbGl0aWEgZGVzZXJ1bnQgbWludXMgdm9sdXB0YXRlcyBwcmFlc2VudGl1bSBhbmltaS4gUmVydW0gcHJvdmlkZW50IHN1bnQgcXVhcyFcclxuICAgICAgICAgICAgTGFib3J1bSBxdWlidXNkYW0gaXVyZSB0b3RhbSBleHBsaWNhYm8gY3VscGEgdGVtcG9yaWJ1cywgb3B0aW8gdm9sdXB0YXRlbSBuZW1vIGF0IGVvcyB2b2x1cHRhcyBuZWNlc3NpdGF0aWJ1cyBkdWNpbXVzIHF1aSBjb25zZXF1YXR1ciBxdWFtIG5hdHVzIGRvbG9yIGV4LCBuYW0gY3VtcXVlLiBNb2RpIG9wdGlvIGF1dGVtIGFkaXBpc2NpIGlsbG8sIGNvbnNlY3RldHVyIHByb3ZpZGVudC5cclxuICAgICAgICAgICAgRW5pbSBzdXNjaXBpdCBjdW1xdWUgYW1ldCBibGFuZGl0aWlzIHZlcml0YXRpcyBzZWQgdmVuaWFtIGVhcnVtIGNvbnNlY3RldHVyIG5lcXVlIG1pbmltYSBxdWlzcXVhbSBkZWxlbml0aSBjdWxwYSB1dCBpdXJlIGlwc2EsIG5lY2Vzc2l0YXRpYnVzIGRpc3RpbmN0aW8gcmVjdXNhbmRhZSBjb21tb2RpIHVsbGFtISBMYWJvcmlvc2FtIG1heGltZSBzdXNjaXBpdCBoaWMgaW5jaWR1bnQgdGVtcG9yYSBoYXJ1bS5cclxuICAgICAgICAgICAgTWludXMgYXJjaGl0ZWN0byB2ZXJpdGF0aXMgaXBzdW0gaW4gZW9zIHJlbSB2ZWxpdCBzZXF1aT8gSWxsbyBjb3Jwb3JpcyBkaXN0aW5jdGlvIHF1aXNxdWFtIGlwc2EgdmVsaXQgbWFnbmFtLCBldCBtYXhpbWUgYWQgdGVtcG9yZSBzb2x1dGEgcGFyaWF0dXIgaW52ZW50b3JlIHZvbHVwdGFzIGlsbHVtIHRvdGFtIHJlcnVtIHZvbHVwdGF0aWJ1cyBxdWlhIGF0cXVlP1xyXG4gICAgICAgICAgICBRdWkgY3VwaWRpdGF0ZSBlYSBtb2xlc3RpYXMgaWQgcXVpc3F1YW0gbnVsbGEgYSEgVWxsYW0gbnVsbGEgbW9sZXN0aWFlIGFjY3VzYW50aXVtIGFuaW1pIG9wdGlvIGluIGRvbG9ydW0gb2JjYWVjYXRpLCBwZXJmZXJlbmRpcyBiZWF0YWUgZG9sb3JlcyBlc3QgY3VscGEgZG9sb3JlbXF1ZSB1bmRlIGl1c3RvIG5lbW8gc2FlcGUgbmVxdWUgcmVwdWRpYW5kYWUgaXN0ZS5cclxuICAgICAgICAgICAgRXZlbmlldCBkb2xvcnVtIGluY2lkdW50IG9iY2FlY2F0aSBpcHNhIHZlcm8gZXJyb3Igb2ZmaWNpaXMgZG9sb3JlbXF1ZSBkaXN0aW5jdGlvLCB2b2x1cHRhcyBhdHF1ZSB0b3RhbSBvZmZpY2lhIGxhYm9yZSB2ZXJpdGF0aXMgbW9sbGl0aWEgbm9zdHJ1bSB1dCB0ZW1wb3JpYnVzIHZvbHVwdGF0ZXMgcGxhY2VhdCBzb2x1dGEsIHVuZGUgaGljIGNvcnJ1cHRpIG5hdHVzIHBhcmlhdHVyIHF1YXMuIEFtZXQhXHJcbiAgICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgICAgICA8aDUgb25DbGljaz17c2Nyb2xsVG9Ub3B9IGNsYXNzTmFtZT17J2Fycm93LXVwLWljb24tZGFyayd9PjxUaUFycm93VXBUaGljayAvPjwvaDU+XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFRyYW5zaXRpb24gaW1hZ2U9e2ltYWdlfSBkYXJrPXtkYXJrfSBjb250YWN0PXtjb250YWN0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5saWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBXZWJraXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogSUUgMTAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRhcmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBXZWJraXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogSUUgMTAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnN1bmZsb3dlciwgLnJvb3RzLCAuZGV2b3BzIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGNvbG9yRmFkZU91dCAycywgc2hhcGVTaGlmdE91dCAycztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAzcHggc29saWQgIzE0MTMwMVxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnN1bmZsb3dlcjpob3ZlciwgLnJvb3RzOmhvdmVyLCAuZGV2b3BzOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogY29sb3JGYWRlSW4gMnMsIHNoYXBlU2hpZnRJbiAycztcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDNweCBzb2xpZCAjYjgwYzA5XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy1jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZyb250ZW5kLCAuYmFja2VuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDElO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogLTIwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy10aXRsZTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC52aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbmltYXRpb246IGZhZGVJbiAxcztcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmJmYmY4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMiUgNCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luOiAxJSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDQyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2Fub3B5LXZpZXcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2ODBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRldi12aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJvb3RzLXZpZXcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZC1iYWNrLWNhbm9weSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogVVJMKCcuLi9zdGF0aWMvY2Fub3B5VHJhbnNwYXJlbnQucG5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZC1iYWNrLWRldm9wcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogVVJMKCcuLi9zdGF0aWMvZGV2b3BzVHJhbnNwYXJlbnQucG5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtYmFjay1yb290cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogVVJMKCcuLi9zdGF0aWMvcm9vdHNUcmFuc3BhcmVudC5wbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaWNvbnMtY2Fub3B5IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pY29uLWhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pY29uLWhvdmVyOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaWNvbnMtZGV2IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAtNiUgNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGV2LWhlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogMCAyJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhbm9weS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC02NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy10aXRsZS1kZXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNsb3NlLWJ1dHRvbi1kZXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZS1jZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUtZGFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0U1RTdFNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvdy11cC1pY29uLWRhcmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtIDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvdy11cC1pY29uLWRhcms6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIC5hcnJvdy11cC1pY29uIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW4tbGVmdDogNDklO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgY29sb3JGYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGNvbG9yRmFkZU91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDAlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2hhcGVTaGlmdEluIHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzaGFwZVNoaWZ0T3V0IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEBrZXlmcmFtZXMgY2lyY2xlSW4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtd2lkdGg6IDQ5OHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtaGVpZ2h0OiA0OThweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gQGtleWZyYW1lcyBjaXJjbGVPdXQge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRvIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWF4LXdpZHRoOiA0OThweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWF4LWhlaWdodDogNDk4cHg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2F1Z2VzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2F1Z2Utc3R5bGVzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmdhdWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3N0YXRpYy9EYXJrQmx1ZUJhZGdlLnBuZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5keW5hbWljIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpZ2h0LXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlLXNraWxscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE3JTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogI2ZiZmJmODtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWFnZXMtbW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAueCB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLmNsb3NlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaWNvbi1zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZWxlY3QtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAycztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZWxlY3QtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAuc2VsZWN0b3I6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkICMxZjJhNDQ7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLmZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMiU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWFyZ2luIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIlIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWFyZ2luLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnJlc3VtZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLnJlc3VtZS1pbWdzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZXN1bWUtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdW1tYXJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb250LXNpemU6IDEuMTVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN1bW1hcnk6Oi13ZWJraXQtZGV0YWlscy1tYXJrZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYjdiNWIzO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0YWQ1ZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMmE0NDtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMSUgMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjJhNDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDElIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMmE0NDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICo6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAvLyAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyAubWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGljb25zID0ge1xyXG4gICAgXCJmcm9udGVuZFwiOiBbXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBcImljb25cIjogXCJEaUdpdFwiLFxyXG4gICAgICAgIC8vICAgICBcIm5hbWVcIjogXCJHaXRcIixcclxuICAgICAgICAvLyAgICAgXCJzdWJ0aXRsZVwiOiBcIlN5c3RlbSBTb2Z0d2FyZVwiLFxyXG4gICAgICAgIC8vICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR2l0IGlzIGEgZGlzdHJpYnV0ZWQgdmVyc2lvbi1jb250cm9sIHN5c3RlbSBmb3IgdHJhY2tpbmcgY2hhbmdlcyBpbiBzb3VyY2UgY29kZSBkdXJpbmcgc29mdHdhcmUgZGV2ZWxvcG1lbnQuIEl0IGlzIGRlc2lnbmVkIGZvciBjb29yZGluYXRpbmcgd29yayBhbW9uZyBwcm9ncmFtbWVycywgYnV0IGl0IGNhbiBiZSB1c2VkIHRvIHRyYWNrIGNoYW5nZXMgaW4gYW55IHNldCBvZiBmaWxlcy4gSXRzIGdvYWxzIGluY2x1ZGUgc3BlZWQsIGRhdGEgaW50ZWdyaXR5LCBhbmQgc3VwcG9ydCBmb3IgZGlzdHJpYnV0ZWQsIG5vbi1saW5lYXIgd29ya2Zsb3dzLlwiLFxyXG4gICAgICAgIC8vICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiaWNvblwiOiBcIkRpR2l0aHViQmFkZ2VcIixcclxuICAgICAgICAvLyAgICAgXCJuYW1lXCI6IFwiR2l0SHViXCIsXHJcbiAgICAgICAgLy8gICAgIFwic3VidGl0bGVcIjogXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIixcclxuICAgICAgICAvLyAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBpcyBhbiBBbWVyaWNhbiBjb21wYW55IHRoYXQgcHJvdmlkZXMgaG9zdGluZyBmb3Igc29mdHdhcmUgZGV2ZWxvcG1lbnQgdmVyc2lvbiBjb250cm9sIHVzaW5nIEdpdC4gSXQgaXMgYSBzdWJzaWRpYXJ5IG9mIE1pY3Jvc29mdCwgd2hpY2ggYWNxdWlyZWQgdGhlIGNvbXBhbnkgaW4gMjAxOCBmb3IgJDcuNSBiaWxsaW9uLlwiLFxyXG4gICAgICAgIC8vICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpSHRtbDVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSFRNTDVcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlByb2dyYW1taW5nIExhbmd1YWdlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJIVE1MNSBpcyBhIHNvZnR3YXJlIHNvbHV0aW9uIHN0YWNrIHRoYXQgZGVmaW5lcyB0aGUgcHJvcGVydGllcyBhbmQgYmVoYXZpb3JzIG9mIHdlYiBwYWdlIGNvbnRlbnQgYnkgaW1wbGVtZW50aW5nIGEgbWFya3VwIGJhc2VkIHBhdHRlcm4gdG8gaXQuIEhUTUw1IGlzIHRoZSBmaWZ0aCBhbmQgY3VycmVudCBtYWpvciB2ZXJzaW9uIG9mIEhUTUwsIGFuZCBzdWJzdW1lcyBYSFRNTC5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUNzczNcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ1NTM1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNTUzMgaXMgdGhlIGxhdGVzdCBldm9sdXRpb24gb2YgdGhlIENhc2NhZGluZyBTdHlsZSBTaGVldHMgbGFuZ3VhZ2UgYW5kIGFpbXMgYXQgZXh0ZW5kaW5nIENTUzIuMS4gSXQgYnJpbmdzIGEgbG90IG9mIGxvbmctYXdhaXRlZCBub3ZlbHRpZXMsIGxpa2Ugcm91bmRlZCBjb3JuZXJzLCBzaGFkb3dzLCBncmFkaWVudHMsIHRyYW5zaXRpb25zIG9yIGFuaW1hdGlvbnMsIGFzIHdlbGwgYXMgbmV3IGxheW91dHMgbGlrZSBtdWx0aS1jb2x1bW5zLCBmbGV4aWJsZSBib3ggb3IgZ3JpZCBsYXlvdXRzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpTGVzc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJMZXNzXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJQcm9ncmFtbWluZyBMYW5ndWFnZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTGVzcyBpcyBhIGR5bmFtaWMgcHJlcHJvY2Vzc29yIHN0eWxlIHNoZWV0IGxhbmd1YWdlIHRoYXQgY2FuIGJlIGNvbXBpbGVkIGludG8gQ2FzY2FkaW5nIFN0eWxlIFNoZWV0cyBhbmQgcnVuIG9uIHRoZSBjbGllbnQgc2lkZSBvciBzZXJ2ZXIgc2lkZS4gRGVzaWduZWQgYnkgQWxleGlzIFNlbGxpZXIsIExlc3MgaXMgaW5mbHVlbmNlZCBieSBTYXNzIGFuZCBoYXMgaW5mbHVlbmNlZCB0aGUgbmV3ZXIgXFxcIlNDU1NcXFwiIHN5bnRheCBvZiBTYXNzLCB3aGljaCBhZGFwdGVkIGl0cyBDU1MtbGlrZSBibG9jayBmb3JtYXR0aW5nIHN5bnRheC5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaVNhc3NcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2Fzc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNhc3MgaXMgYSBzdHlsZSBzaGVldCBsYW5ndWFnZSBpbml0aWFsbHkgZGVzaWduZWQgYnkgSGFtcHRvbiBDYXRsaW4gYW5kIGRldmVsb3BlZCBieSBOYXRhbGllIFdlaXplbmJhdW0uIEFmdGVyIGl0cyBpbml0aWFsIHZlcnNpb25zLCBXZWl6ZW5iYXVtIGFuZCBDaHJpcyBFcHBzdGVpbiBoYXZlIGNvbnRpbnVlZCB0byBleHRlbmQgU2FzcyB3aXRoIFNhc3NTY3JpcHQsIGEgc2ltcGxlIHNjcmlwdGluZyBsYW5ndWFnZSB1c2VkIGluIFNhc3MgZmlsZXMuIFwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpQm9vdHN0cmFwXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkJvb3RzdHJhcFwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiRnJvbnQtZW5kIEZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQm9vdHN0cmFwIGlzIGEgZnJlZSBhbmQgb3Blbi1zb3VyY2UgQ1NTIGZyYW1ld29yayBkaXJlY3RlZCBhdCByZXNwb25zaXZlLCBtb2JpbGUtZmlyc3QgZnJvbnQtZW5kIHdlYiBkZXZlbG9wbWVudC4gSXQgY29udGFpbnMgQ1NTLSBhbmQgSmF2YVNjcmlwdC1iYXNlZCBkZXNpZ24gdGVtcGxhdGVzIGZvciB0eXBvZ3JhcGh5LCBmb3JtcywgYnV0dG9ucywgbmF2aWdhdGlvbiBhbmQgb3RoZXIgaW50ZXJmYWNlIGNvbXBvbmVudHMuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlKYXZhc2NyaXB0MVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJKYXZhU2NyaXB0XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJIaWdoLWxldmVsIFByb2dyYW1taW5nIExhbmd1YWdlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJKYXZhU2NyaXB0LCBvZnRlbiBhYmJyZXZpYXRlZCBhcyBKUywgaXMgYSBoaWdoLWxldmVsLCBpbnRlcnByZXRlZCBzY3JpcHRpbmcgbGFuZ3VhZ2UgdGhhdCBjb25mb3JtcyB0byB0aGUgRUNNQVNjcmlwdCBzcGVjaWZpY2F0aW9uLiBKYXZhU2NyaXB0IGhhcyBjdXJseS1icmFja2V0IHN5bnRheCwgZHluYW1pYyB0eXBpbmcsIHByb3RvdHlwZS1iYXNlZCBvYmplY3Qtb3JpZW50YXRpb24sIGFuZCBmaXJzdC1jbGFzcyBmdW5jdGlvbnMuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlSZWFjdFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJSZWFjdC5qc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiV2ViIEZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUmVhY3QgaXMgYSBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGJ1aWxkaW5nIHVzZXIgaW50ZXJmYWNlcy4gSXQgaXMgbWFpbnRhaW5lZCBieSBGYWNlYm9vayBhbmQgYSBjb21tdW5pdHkgb2YgaW5kaXZpZHVhbCBkZXZlbG9wZXJzIGFuZCBjb21wYW5pZXMuIFJlYWN0IGNhbiBiZSB1c2VkIGFzIGEgYmFzZSBpbiB0aGUgZGV2ZWxvcG1lbnQgb2Ygc2luZ2xlLXBhZ2Ugb3IgbW9iaWxlIGFwcGxpY2F0aW9ucywgYXMgaXQgaXMgb3B0aW1hbCBmb3IgZmV0Y2hpbmcgcmFwaWRseSBjaGFuZ2luZyBkYXRhIHRoYXQgbmVlZHMgdG8gYmUgcmVjb3JkZWQuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiRmVicnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImltZyBzcmM9Jy4uL3N0YXRpYy9yZWR1eC5wbmcnIGFsdD0nUmVkdXggSWNvbidcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmVkdXhcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkphdmFTY3JpcHQgTGlicmFyeVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUmVkdXggaXMgYW4gb3Blbi1zb3VyY2UgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBtYW5hZ2luZyBhcHBsaWNhdGlvbiBzdGF0ZS4gSXQgaXMgbW9zdCBjb21tb25seSB1c2VkIHdpdGggbGlicmFyaWVzIHN1Y2ggYXMgUmVhY3Qgb3IgQW5ndWxhciBmb3IgYnVpbGRpbmcgdXNlciBpbnRlcmZhY2VzLiBTaW1pbGFyIHRvIEZhY2Vib29rJ3MgRmx1eCBhcmNoaXRlY3R1cmUsIGl0IHdhcyBjcmVhdGVkIGJ5IERhbiBBYnJhbW92IGFuZCBBbmRyZXcgQ2xhcmsuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiRmVicnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImltZyBzcmM9Jy4uL3N0YXRpYy9uZXh0LXRleHQucG5nJyBhbHQ9J05leHQgSWNvbidcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmV4dC5qc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiV2ViIEZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTmV4dC5qcyBpcyBhIGZyZWUgYW5kIG9wZW4gc291cmNlIHdlYiBhcHBsaWNhdGlvbiBmcmFtZXdvcmsgYmFzZWQgb24gUmVhY3QuanMsIE5vZGUuanMsIFdlYnBhY2sgYW5kIEJhYmVsLmpzLiBUaGUgZnJhbWV3b3JrIGlzIGFkdmVydGlzZWQgYXMgXFxcIm1ldGEtZnJhbWV3b3JrIGZvciB1bml2ZXJzYWwgYXBwbGljYXRpb25zXFxcIi5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJBdWd1c3QgMjAxOVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiZGV2b3BzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpR2l0XCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkdpdFwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiU3lzdGVtIFNvZnR3YXJlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHaXQgaXMgYSBkaXN0cmlidXRlZCB2ZXJzaW9uLWNvbnRyb2wgc3lzdGVtIGZvciB0cmFja2luZyBjaGFuZ2VzIGluIHNvdXJjZSBjb2RlIGR1cmluZyBzb2Z0d2FyZSBkZXZlbG9wbWVudC4gSXQgaXMgZGVzaWduZWQgZm9yIGNvb3JkaW5hdGluZyB3b3JrIGFtb25nIHByb2dyYW1tZXJzLCBidXQgaXQgY2FuIGJlIHVzZWQgdG8gdHJhY2sgY2hhbmdlcyBpbiBhbnkgc2V0IG9mIGZpbGVzLiBJdHMgZ29hbHMgaW5jbHVkZSBzcGVlZCwgZGF0YSBpbnRlZ3JpdHksIGFuZCBzdXBwb3J0IGZvciBkaXN0cmlidXRlZCwgbm9uLWxpbmVhciB3b3JrZmxvd3MuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlHaXRodWJCYWRnZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJHaXRIdWJcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlNvZnR3YXJlIERldmVsb3BlciBQbGF0Zm9ybVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIGlzIGFuIEFtZXJpY2FuIGNvbXBhbnkgdGhhdCBwcm92aWRlcyBob3N0aW5nIGZvciBzb2Z0d2FyZSBkZXZlbG9wbWVudCB2ZXJzaW9uIGNvbnRyb2wgdXNpbmcgR2l0LiBJdCBpcyBhIHN1YnNpZGlhcnkgb2YgTWljcm9zb2Z0LCB3aGljaCBhY3F1aXJlZCB0aGUgY29tcGFueSBpbiAyMDE4IGZvciAkNy41IGJpbGxpb24uXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiTmV0bGlmeVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOZXRsaWZ5XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJQbGF0Zm9ybVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTmV0bGlmeSBpcyBhIFNhbiBGcmFuY2lzY28tYmFzZWQgY2xvdWQgY29tcHV0aW5nIGNvbXBhbnkgdGhhdCBvZmZlcnMgaG9zdGluZyBhbmQgc2VydmVybGVzcyBiYWNrZW5kIHNlcnZpY2VzIGZvciBzdGF0aWMgd2Vic2l0ZXMuIEl0IGZlYXR1cmVzIGNvbnRpbnVvdXMgZGVwbG95bWVudCBmcm9tIEdpdCBhY3Jvc3MgYSBnbG9iYWwgYXBwbGljYXRpb24gZGVsaXZlcnkgbmV0d29yaywgc2VydmVybGVzcyBmb3JtIGhhbmRsaW5nLCBzdXBwb3J0IGZvciBBV1MgTGFtYmRhIGZ1bmN0aW9ucywgYW5kIGZ1bGwgaW50ZWdyYXRpb24gd2l0aCBMZXQncyBFbmNyeXB0LlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkZlYnJ1YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJIZXJva3VcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGVyb2t1XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJQbGF0Zm9ybVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSGVyb2t1IGlzIGEgY2xvdWQgcGxhdGZvcm0gYXMgYSBzZXJ2aWNlIHN1cHBvcnRpbmcgc2V2ZXJhbCBwcm9ncmFtbWluZyBsYW5ndWFnZXMuIE9uZSBvZiB0aGUgZmlyc3QgY2xvdWQgcGxhdGZvcm1zLCBIZXJva3UgaGFzIGJlZW4gaW4gZGV2ZWxvcG1lbnQgc2luY2UgSnVuZSAyMDA3LCB3aGVuIGl0IHN1cHBvcnRlZCBvbmx5IHRoZSBSdWJ5IHByb2dyYW1taW5nIGxhbmd1YWdlLCBidXQgbm93IHN1cHBvcnRzIEphdmEsIE5vZGUuanMsIFNjYWxhLCBDbG9qdXJlLCBQeXRob24sIFBIUCwgYW5kIEdvLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIk1hcmNoIDIwMTlcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcImJhY2tlbmRcIjogW1xyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJpY29uXCI6IFwiRGlHaXRcIixcclxuICAgICAgICAvLyAgICAgXCJzdHlsZXNcIjogeyBcImZvbnRTaXplXCI6IFwiNnJlbVwiLCBcImNvbG9yXCI6IFwiI0YzNEYyOVwifSxcclxuICAgICAgICAvLyAgICAgXCJuYW1lXCI6IFwiR2l0XCIsXHJcbiAgICAgICAgLy8gICAgIFwic3VidGl0bGVcIjogXCJTeXN0ZW0gU29mdHdhcmVcIixcclxuICAgICAgICAvLyAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdpdCBpcyBhIGRpc3RyaWJ1dGVkIHZlcnNpb24tY29udHJvbCBzeXN0ZW0gZm9yIHRyYWNraW5nIGNoYW5nZXMgaW4gc291cmNlIGNvZGUgZHVyaW5nIHNvZnR3YXJlIGRldmVsb3BtZW50LiBJdCBpcyBkZXNpZ25lZCBmb3IgY29vcmRpbmF0aW5nIHdvcmsgYW1vbmcgcHJvZ3JhbW1lcnMsIGJ1dCBpdCBjYW4gYmUgdXNlZCB0byB0cmFjayBjaGFuZ2VzIGluIGFueSBzZXQgb2YgZmlsZXMuIEl0cyBnb2FscyBpbmNsdWRlIHNwZWVkLCBkYXRhIGludGVncml0eSwgYW5kIHN1cHBvcnQgZm9yIGRpc3RyaWJ1dGVkLCBub24tbGluZWFyIHdvcmtmbG93cy5cIixcclxuICAgICAgICAvLyAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBcImljb25cIjogXCJEaUdpdGh1YkJhZGdlXCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVzXCI6IFwiZ2l0SHViU3R5bGVzXCIsXHJcbiAgICAgICAgLy8gICAgIFwibmFtZVwiOiBcIkdpdEh1YlwiLFxyXG4gICAgICAgIC8vICAgICBcInN1YnRpdGxlXCI6IFwiU29mdHdhcmUgRGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgaXMgYW4gQW1lcmljYW4gY29tcGFueSB0aGF0IHByb3ZpZGVzIGhvc3RpbmcgZm9yIHNvZnR3YXJlIGRldmVsb3BtZW50IHZlcnNpb24gY29udHJvbCB1c2luZyBHaXQuIEl0IGlzIGEgc3Vic2lkaWFyeSBvZiBNaWNyb3NvZnQsIHdoaWNoIGFjcXVpcmVkIHRoZSBjb21wYW55IGluIDIwMTggZm9yICQ3LjUgYmlsbGlvbi5cIixcclxuICAgICAgICAvLyAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpTm9kZWpzU21hbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXNcIjogXCJub2RlU3R5bGVzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5vZGUuanNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkphdmFTY3JpcHQgUnVuLXRpbWUgRW52aXJvbm1lbnRcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5vZGUuanMgaXMgYW4gb3Blbi1zb3VyY2UsIGNyb3NzLXBsYXRmb3JtLCBKYXZhU2NyaXB0IHJ1bi10aW1lIGVudmlyb25tZW50IHRoYXQgZXhlY3V0ZXMgSmF2YVNjcmlwdCBjb2RlIG91dHNpZGUgb2YgYSBicm93c2VyLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIk1hcmNoIDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpbWcgc3JjPScuLi9zdGF0aWMvZXhwcmVzc0ZpbmFsLnBuZycgYWx0PSdFeHByZXNzIEljb24nXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVzXCI6IFwiZXhwcmVzc1N0eWxlc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJFeHByZXNzLmpzXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJXZWIgRnJhbWV3b3JrXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFeHByZXNzLmpzLCBvciBzaW1wbHkgRXhwcmVzcywgaXMgYSB3ZWIgYXBwbGljYXRpb24gZnJhbWV3b3JrIGZvciBOb2RlLmpzLCByZWxlYXNlZCBhcyBmcmVlIGFuZCBvcGVuLXNvdXJjZSBzb2Z0d2FyZSB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIEl0IGlzIGRlc2lnbmVkIGZvciBidWlsZGluZyB3ZWIgYXBwbGljYXRpb25zIGFuZCBBUElzLiBJdCBoYXMgYmVlbiBjYWxsZWQgdGhlIGRlIGZhY3RvIHN0YW5kYXJkIHNlcnZlciBmcmFtZXdvcmsgZm9yIE5vZGUuanMuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiTWFyY2ggMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImltZyBzcmM9Jy4uL3N0YXRpYy9rbmV4anMucG5nJyBhbHQ9J0tuZXguanMgSWNvbidcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiS25leC5qc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiSmF2YVNjcmlwdCBRdWVyeSBCdWlsZGVyXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCIgS25leC5qcyBpcyBhIEphdmFTY3JpcHQgcXVlcnkgYnVpbGRlciBmb3IgcmVsYXRpb25hbCBkYXRhYmFzZXMgaW5jbHVkaW5nIFBvc3RncmVTUUwsIE15U1FMLCBTUUxpdGUzLCBhbmQgT3JhY2xlLiBJdCBjYW4gYmUgdXNlZCB3aXRoIGNhbGxiYWNrcyBhbmQgcHJvbWlzZXMuIEl0IHN1cHBvcnRzIHRyYW5zYWN0aW9ucyBhbmQgY29ubmVjdGlvbiBwb29saW5nLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIk1hcmNoIDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaU15c3FsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVzXCI6IFwibXlTcWxTdHlsZXNcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTXlTUUxcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlN5c3RlbSBTb2Z0d2FyZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTXlTUUwgaXMgYW4gb3Blbi1zb3VyY2UgcmVsYXRpb25hbCBkYXRhYmFzZSBtYW5hZ2VtZW50IHN5c3RlbS4gSXRzIG5hbWUgaXMgYSBjb21iaW5hdGlvbiBvZiBcXFwiTXlcXFwiLCB0aGUgbmFtZSBvZiBjby1mb3VuZGVyIE1pY2hhZWwgV2lkZW5pdXMncyBkYXVnaHRlciwgYW5kIFxcXCJTUUxcXFwiLCB0aGUgYWJicmV2aWF0aW9uIGZvciBTdHJ1Y3R1cmVkXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiTWFyY2ggMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpUG9zdGdyZXNxbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlc1wiOiBcInBvc3RncmVzU3R5bGVzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlBvc3RncmVTUUxcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlN5c3RlbSBTb2Z0d2FyZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUG9zdGdyZVNRTCwgYWxzbyBrbm93biBhcyBQb3N0Z3JlcywgaXMgYSBmcmVlIGFuZCBvcGVuLXNvdXJjZSByZWxhdGlvbmFsIGRhdGFiYXNlIG1hbmFnZW1lbnQgc3lzdGVtIGVtcGhhc2l6aW5nIGV4dGVuc2liaWxpdHkgYW5kIHRlY2huaWNhbCBzdGFuZGFyZHMgY29tcGxpYW5jZS4gSXQgaXMgZGVzaWduZWQgdG8gaGFuZGxlIGEgcmFuZ2Ugb2Ygd29ya2xvYWRzLCBmcm9tIHNpbmdsZSBtYWNoaW5lcyB0byBkYXRhIHdhcmVob3VzZXMgb3IgV2ViIHNlcnZpY2VzIHdpdGggbWFueSBjb25jdXJyZW50IHVzZXJzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIk1hcmNoIDIwMTlcIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Section.jsx */"));
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
};

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
  }, ".image.jsx-3954958656{width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}img.jsx-3954958656{width:100%;}.arrow-up-icon-dark.jsx-3954958656{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#e5e7e6;margin-top:-8%;font-size:4rem;}.arrow-up-icon-dark.jsx-3954958656:hover{cursor:pointer;}.arrow-up-icon.jsx-3954958656{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#000c1f;margin-top:-8%;font-size:4rem;}.arrow-up-icon.jsx-3954958656:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcVHJhbnNpdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J3QixBQUdnQyxBQVVBLEFBR0UsQUFRRSxBQUdGLEFBUUUsV0E3QlUsQUFRN0IsSUFXQSxBQVdBLHFCQTdCMEIsc0JBQ0QsZ0JBU0UsQUFXQSxLQW5CSCxvQkFDSCwwRUFRSCxBQVdBLFdBbEJsQixHQVFtQixBQVdBLGVBVkEsQUFXQSxlQVRuQixBQVdBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcVHJhbnNpdGlvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xyXG5pbXBvcnQgeyBUaUFycm93VXBUaGljayB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNpdGlvbih7aW1hZ2UsIGRhcmssIGhvbWUsIGNvbnRhY3R9KSB7XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvVG9wKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZSc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD0nVHJhbnNpdGlvbmFsIEltYWdlJyAvPlxyXG4gICAgICAgICAgICAgICAge2hvbWUgfHwgY29udGFjdCA/IG51bGwgOiA8aDUgb25DbGljaz17c2Nyb2xsVG9Ub3B9IGNsYXNzTmFtZT17ZGFyayA/ICdhcnJvdy11cC1pY29uLWRhcmsnIDogJ2Fycm93LXVwLWljb24nfT48VGlBcnJvd1VwVGhpY2sgLz48L2g1PiB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIElFIDEwICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvdy11cC1pY29uLWRhcmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTglO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93LXVwLWljb24tZGFyazpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93LXVwLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTglO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93LXVwLWljb246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gLmxpZ2h0LWFycm93IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Transition.jsx */"));
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
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\icon\\ActiveCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ActiveCard({
  activeSkill
}) {
  return __jsx("div", {
    className: "jsx-1100275623" + " " + 'container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    style: activeSkill.name === "Redux" ? {
      marginTop: '2.75%'
    } : null,
    className: "jsx-1100275623",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1100275623" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1100275623" + " " + "titles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1100275623",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, activeSkill.name), __jsx("h4", {
    className: "jsx-1100275623",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, activeSkill.subtitle)), __jsx("div", {
    className: "jsx-1100275623" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, activeSkill.icon === "DiGit" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiGit"], {
    style: {
      fontSize: '6rem',
      color: '#F34F29'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }) : activeSkill.icon === "DiGithubBadge" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiGithubBadge"], {
    style: {
      fontSize: '6rem',
      color: '#181616'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }) : activeSkill.icon === "DiHtml5" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiHtml5"], {
    style: {
      fontSize: '6rem',
      color: '#E54D26'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }) : activeSkill.icon === "DiCss3" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiCss3"], {
    style: {
      fontSize: '6rem',
      color: '#3D8FC6'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }) : activeSkill.icon === "DiLess" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiLess"], {
    style: {
      fontSize: '6rem',
      color: '#2A4D80'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }) : activeSkill.icon === "DiSass" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiSass"], {
    style: {
      fontSize: '6rem',
      color: '#CC6699'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }) : activeSkill.icon === "DiBootstrap" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiBootstrap"], {
    style: {
      fontSize: '6rem',
      color: '#5B4282'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }) : activeSkill.icon === "DiJavascript1" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiJavascript1"], {
    style: {
      fontSize: '6rem',
      color: '#F0DB4F'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }) : activeSkill.icon === "DiReact" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiReact"], {
    style: {
      fontSize: '6rem',
      color: '#61DAFB'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }) : activeSkill.icon === "img src='../static/redux.png' alt='Redux Icon'" ? __jsx("img", {
    src: "../static/redux.png",
    alt: "Redux Icon",
    style: {
      width: '75px',
      maxHeight: '70px',
      marginRight: '2%'
    },
    className: "jsx-1100275623",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }) : activeSkill.icon === "img src='../static/next-text.png' alt='Next Icon'" ? __jsx("img", {
    src: "../static/next-text.png",
    alt: "Next Icon",
    style: {
      width: '100px',
      maxHeight: '100px',
      marginRight: '5%'
    },
    className: "jsx-1100275623",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }) : activeSkill.icon === "iNodejsSmall" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiNodejsSmall"], {
    style: {
      fontSize: '6rem',
      color: '#83CD29'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }) : activeSkill.icon === "img src='../static/expressFinal.png' alt='Express Icon'" ? __jsx("img", {
    src: "../static/expressFinal.png",
    alt: "Express Icon",
    style: {
      width: '75px',
      height: '75px',
      marginTop: '2%',
      paddingLeft: '2%'
    },
    className: "jsx-1100275623",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }) : activeSkill.icon === "img src='../static/knexjs.png' alt='Knex.js Icon'" ? __jsx("img", {
    src: "../static/knexjs.png",
    alt: "Knex.js Icon",
    style: {
      width: '60px',
      height: '60px',
      marginTop: '2%',
      paddingLeft: '2%'
    },
    className: "jsx-1100275623",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }) : activeSkill.icon === "DiMysql" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiMysql"], {
    style: {
      fontSize: '6rem',
      color: '#00618A',
      marginLeft: '14%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }) : activeSkill.icon === "DiPostgresql" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_2__["DiPostgresql"], {
    style: {
      fontSize: '6rem',
      color: '#336791',
      marginRight: '12%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }) : activeSkill.icon === "Netlify" ? __jsx("img", {
    src: "../static/netlify.png",
    alt: "Netlify Icon",
    style: {
      width: '75px',
      height: '75px',
      marginTop: '2.25%',
      paddingLeft: '2%'
    },
    className: "jsx-1100275623",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }) : activeSkill.icon === "Heroku" ? __jsx("img", {
    src: "../static/herokuu.png",
    alt: "Heroku Icon",
    style: {
      width: '90px',
      height: '90px',
      marginTop: '1%',
      paddingLeft: '2%'
    },
    className: "jsx-1100275623" + " " + 'heroku',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }) : null)), __jsx("p", {
    style: activeSkill.name === "Redux" ? {
      marginTop: '5%'
    } : null,
    className: "jsx-1100275623" + " " + 'description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, activeSkill.description), __jsx("div", {
    style: activeSkill.name === "Redux" ? {
      marginTop: '4.5%'
    } : null,
    className: "jsx-1100275623",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, activeSkill && __jsx("p", {
    className: "jsx-1100275623" + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1100275623",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Date Learned:"), " ", activeSkill.date_learned))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1100275623",
    __self: this
  }, ".container.jsx-1100275623{font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.header.jsx-1100275623{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.titles.jsx-1100275623{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.date.jsx-1100275623{margin-top:4%;}.description.jsx-1100275623{line-height:1.25;}h2.jsx-1100275623{font-size:3rem;color:#000c1f;}h4.jsx-1100275623{font-size:1rem;}p.jsx-1100275623{color:#000c1f;margin:2% 0;}span.jsx-1100275623{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcaWNvblxcQWN0aXZlQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNvQixBQU8rQyxBQVNyQixBQUtBLEFBTUMsQUFHRyxBQUdGLEFBSUEsQUFHRCxBQUlHLGNBaEJyQixBQWFnQixDQVBFLEFBSWxCLEVBUEEsQUFjQSxTQUhBLEdBUEEsSUExQjZCLHlCQUNLLGdCQU9YLEFBS0csTUFYTyxxQkFDRCxvQkFDSCwrQkFVRixlQUxPLHVDQUpsQyx1REFVNkIscUJBTDdCLDRFQU1BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcaWNvblxcQWN0aXZlQ2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERpUmVhY3QsIERpSmF2YXNjcmlwdDEsIERpQm9vdHN0cmFwLCBEaVNhc3MsIERpTGVzcywgRGlDc3MzLCBEaUh0bWw1LCBEaUdpdGh1YkJhZGdlLCBEaUdpdCwgRGlOb2RlanNTbWFsbCwgRGlNeXNxbCwgRGlQb3N0Z3Jlc3FsIH0gZnJvbSBcInJlYWN0LWljb25zL2RpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3RpdmVDYXJkKHsgYWN0aXZlU2tpbGwgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17YWN0aXZlU2tpbGwubmFtZSA9PT0gXCJSZWR1eFwiID8ge21hcmdpblRvcDogJzIuNzUlJ306IG51bGx9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e2FjdGl2ZVNraWxsLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+e2FjdGl2ZVNraWxsLnN1YnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZVNraWxsLmljb24gPT09IFwiRGlHaXRcIiA/IDxEaUdpdCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNGMzRGMjknfX0gLz4gOlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlU2tpbGwuaWNvbiA9PT0gXCJEaUdpdGh1YkJhZGdlXCIgPyA8RGlHaXRodWJCYWRnZSBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMxODE2MTYnfX0gLz4gOlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlU2tpbGwuaWNvbiA9PT0gXCJEaUh0bWw1XCIgPyA8RGlIdG1sNSBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNFNTREMjYnfX0gLz4gOlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlU2tpbGwuaWNvbiA9PT0gXCJEaUNzczNcIiA/IDxEaUNzczMgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjM0Q4RkM2J319IC8+IDpcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVNraWxsLmljb24gPT09IFwiRGlMZXNzXCIgPyA8RGlMZXNzIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzJBNEQ4MCd9fSAvPiA6XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTa2lsbC5pY29uID09PSBcIkRpU2Fzc1wiID8gPERpU2FzcyBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNDQzY2OTknfX0gLz4gOlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlU2tpbGwuaWNvbiA9PT0gXCJEaUJvb3RzdHJhcFwiID8gPERpQm9vdHN0cmFwIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzVCNDI4Mid9fSAvPiA6XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTa2lsbC5pY29uID09PSBcIkRpSmF2YXNjcmlwdDFcIiA/IDxEaUphdmFzY3JpcHQxIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnI0YwREI0Rid9fSAvPiA6XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTa2lsbC5pY29uID09PSBcIkRpUmVhY3RcIiA/IDxEaVJlYWN0IHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzYxREFGQid9fSAvPiA6XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTa2lsbC5pY29uID09PSBcImltZyBzcmM9Jy4uL3N0YXRpYy9yZWR1eC5wbmcnIGFsdD0nUmVkdXggSWNvbidcIiA/IDxpbWcgc3JjPScuLi9zdGF0aWMvcmVkdXgucG5nJyBhbHQ9J1JlZHV4IEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNzVweCcsIG1heEhlaWdodDogJzcwcHgnLCBtYXJnaW5SaWdodDogJzIlJyB9fSAvPiA6XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTa2lsbC5pY29uID09PSBcImltZyBzcmM9Jy4uL3N0YXRpYy9uZXh0LXRleHQucG5nJyBhbHQ9J05leHQgSWNvbidcIiA/IDxpbWcgc3JjPScuLi9zdGF0aWMvbmV4dC10ZXh0LnBuZycgYWx0PSdOZXh0IEljb24nIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBtYXhIZWlnaHQ6ICcxMDBweCcsIG1hcmdpblJpZ2h0OiAnNSUnIH19IC8+IDpcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVNraWxsLmljb24gPT09IFwiaU5vZGVqc1NtYWxsXCIgPyA8RGlOb2RlanNTbWFsbCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyM4M0NEMjknfX0gLz4gOlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlU2tpbGwuaWNvbiA9PT0gXCJpbWcgc3JjPScuLi9zdGF0aWMvZXhwcmVzc0ZpbmFsLnBuZycgYWx0PSdFeHByZXNzIEljb24nXCIgPyA8aW1nIHNyYz0nLi4vc3RhdGljL2V4cHJlc3NGaW5hbC5wbmcnIGFsdD0nRXhwcmVzcyBJY29uJyBzdHlsZT17eyB3aWR0aDogJzc1cHgnLCBoZWlnaHQ6ICc3NXB4JywgbWFyZ2luVG9wOiAnMiUnLCBwYWRkaW5nTGVmdDogJzIlJyB9fSAvPiA6XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTa2lsbC5pY29uID09PSBcImltZyBzcmM9Jy4uL3N0YXRpYy9rbmV4anMucG5nJyBhbHQ9J0tuZXguanMgSWNvbidcIiA/IDxpbWcgc3JjPScuLi9zdGF0aWMva25leGpzLnBuZycgYWx0PSdLbmV4LmpzIEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNjBweCcsIGhlaWdodDogJzYwcHgnLCBtYXJnaW5Ub3A6ICcyJScsIHBhZGRpbmdMZWZ0OiAnMiUnIH19IC8+IDpcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVNraWxsLmljb24gPT09IFwiRGlNeXNxbFwiID8gPERpTXlzcWwgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjMDA2MThBJywgbWFyZ2luTGVmdDogJzE0JSd9fSAvPiA6XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTa2lsbC5pY29uID09PSBcIkRpUG9zdGdyZXNxbFwiID8gPERpUG9zdGdyZXNxbCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMzMzY3OTEnLCBtYXJnaW5SaWdodDogJzEyJSd9fSAvPiA6XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTa2lsbC5pY29uID09PSBcIk5ldGxpZnlcIiA/IDxpbWcgc3JjPScuLi9zdGF0aWMvbmV0bGlmeS5wbmcnIGFsdD0nTmV0bGlmeSBJY29uJyBzdHlsZT17eyB3aWR0aDogJzc1cHgnLCBoZWlnaHQ6ICc3NXB4JywgbWFyZ2luVG9wOiAnMi4yNSUnLCBwYWRkaW5nTGVmdDogJzIlJyB9fSAvPiA6XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTa2lsbC5pY29uID09PSBcIkhlcm9rdVwiID8gPGltZyBjbGFzc05hbWU9J2hlcm9rdScgc3JjPScuLi9zdGF0aWMvaGVyb2t1dS5wbmcnIGFsdD0nSGVyb2t1IEljb24nIHN0eWxlPXt7IHdpZHRoOiAnOTBweCcsIGhlaWdodDogJzkwcHgnLCBtYXJnaW5Ub3A6ICcxJScsIHBhZGRpbmdMZWZ0OiAnMiUnfX0gLz4gOlxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJyBzdHlsZT17YWN0aXZlU2tpbGwubmFtZSA9PT0gXCJSZWR1eFwiID8ge21hcmdpblRvcDogJzUlJ30gOiBudWxsfT57YWN0aXZlU2tpbGwuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXthY3RpdmVTa2lsbC5uYW1lID09PSBcIlJlZHV4XCIgPyB7bWFyZ2luVG9wOiAnNC41JSd9OiBudWxsfT57YWN0aXZlU2tpbGwgJiYgPHAgY2xhc3NOYW1lPVwiZGF0ZVwiPjxzcGFuPkRhdGUgTGVhcm5lZDo8L3NwYW4+IHthY3RpdmVTa2lsbC5kYXRlX2xlYXJuZWR9PC9wPn08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIC8vIGNvbG9yOiAjYjdiNWIzO1xyXG4gICAgICAgICAgICAvLyBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMzVweDtcclxuICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIElFIDEwICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMiUgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuICAgIGZ1bmN0aW9uIG5ld0Z1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBcImltZyBzcmM9Jy4uL3N0YXRpYy9leHByZXNzRmluYWwucG5nJyBhbHQ9J0V4cHJlc3MgSWNvbidcIjtcclxuICAgIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\icon\\ActiveCard.jsx */"));

  function newFunction() {
    return "img src='../static/expressFinal.png' alt='Express Icon'";
  }
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

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

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