webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Home.jsx":
/*!*****************************!*\
  !*** ./components/Home.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Transition */ "./components/Transition.jsx");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/lib/particles.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\Home.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var particleOpt = {
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
    className: "jsx-3479328625" + " " + "wrapper",
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
    className: "jsx-3479328625" + " " + "home",
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
    className: "jsx-3479328625",
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
    className: "jsx-3479328625",
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
    className: "jsx-3479328625" + " " + "arrow-down",
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
    className: "jsx-3479328625" + " " + "particle-bottom",
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
    className: "jsx-3479328625" + " " + "clear",
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
    id: "3479328625",
    __self: this
  }, ".particle-bottom.jsx-3479328625{background-color:#000c1f;}.home.jsx-3479328625{background-color:#000c1f;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:1;margin-top:-50%;}.wrapper.jsx-3479328625{width:100%;}h1.jsx-3479328625{color:white;font-size:6rem;margin-top:6%;font-family:\"Raleway\",sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}h4.jsx-3479328625{color:#b7b5b3;font-size:2.5rem;margin-top:35px;font-family:\"Raleway\",sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}img.jsx-3479328625{border-radius:21px;}.arrow-down.jsx-3479328625{color:#e5e7e6;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:200px;font-size:4rem;}.arrow-down.jsx-3479328625:hover{cursor:pointer;}.clear.jsx-3479328625{z-index:50;margin-top:-50%;}.particle-middle.jsx-3479328625{z-index:-5;margin-top:-500px;background-color:#000c1f;}@media (max-width:650px){h1.jsx-3479328625{font-size:5rem;}}@media (max-width:550px){h1.jsx-3479328625{font-size:3.5rem;}h4.jsx-3479328625{font-size:2rem;}}@media (max-width:395px){h1.jsx-3479328625{font-size:3rem;}h4.jsx-3479328625{font-size:2rem;}}@media (max-width:333px){h1.jsx-3479328625{margin-left:40%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxwb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcSG9tZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkprQixBQUdvQyxBQUdBLEFBVWQsQUFXQyxBQWFFLEFBWUssQUFJTCxBQVVDLEFBR0osQUFJQSxBQU1NLEFBS0UsQUFHRixBQUtBLEFBR0EsQUFLQyxXQTVFcEIsQUE4Q2tCLEFBSUUsQ0E5Q0gsRUFhRSxBQWtCSixDQVFmLEFBYUUsQUFRQSxBQUtBLEFBR0EsQ0FLQSxDQWhCQSxFQS9CRixNQWxEQSxBQUdlLEVBdUJDLEFBeUNoQixFQUkyQixFQWpDVCxPQWxDSCxHQXVCcUIsTUFZQSxPQWlDcEMsb0JBM0MyQixNQVlBLFFBZUYsV0ExQkQsTUFZQSxPQXJDQSxTQTBCRCxNQVlBLGVBWEQsTUFZQSxjQVhILE1BWUEsbUJBYUEsR0FwRE0sY0FxRFIsZUFDakIsNEJBMUJBLE1BWUEsb0NBdkNxQiw2RkFDVCxVQUNNLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXGRpYW1vXFxEZXNrdG9wXFxHaXRGaWxlc1xccG9ydGZvbGlvXFxjbGllbnRcXGNvbXBvbmVudHNcXEhvbWUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9UcmFuc2l0aW9uXCI7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSBcInJlYWN0LWFuaW1hdGUtb24tc2Nyb2xsXCI7XHJcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSBcInJlYWN0LXBhcnRpY2xlcy1qc1wiO1xyXG5pbXBvcnQgeyBUaUFycm93RG93blRoaWNrIH0gZnJvbSBcInJlYWN0LWljb25zL3RpXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcblxyXG5jb25zdCBwYXJ0aWNsZU9wdCA9IHtcclxuICBwYXJ0aWNsZXM6IHtcclxuICAgIG51bWJlcjoge1xyXG4gICAgICB2YWx1ZTogMTYwLFxyXG4gICAgICBkZW5zaXR5OiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlX2FyZWE6IDgwMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29sb3I6IHtcclxuICAgICAgdmFsdWU6IFwiI2U1ZTdlNlwiXHJcbiAgICB9LFxyXG4gICAgc2hhcGU6IHtcclxuICAgICAgdHlwZTogXCJjaXJjbGVcIixcclxuICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHBvbHlnb246IHtcclxuICAgICAgICBuYl9zaWRlczogNVxyXG4gICAgICB9LFxyXG4gICAgICBpbWFnZToge1xyXG4gICAgICAgIHNyYzogXCJpbWcvZ2l0aHViLnN2Z1wiLFxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgaGVpZ2h0OiAxMDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9wYWNpdHk6IHtcclxuICAgICAgdmFsdWU6IDEsXHJcbiAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgYW5pbToge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICBvcGFjaXR5X21pbjogMCxcclxuICAgICAgICBzeW5jOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2l6ZToge1xyXG4gICAgICB2YWx1ZTogMTAsXHJcbiAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgYW5pbToge1xyXG4gICAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgICAgc3BlZWQ6IDQsXHJcbiAgICAgICAgc2l6ZV9taW46IDAuMyxcclxuICAgICAgICBzeW5jOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgZGlzdGFuY2U6IDE1MCxcclxuICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICBvcGFjaXR5OiAwLjQsXHJcbiAgICAgIHdpZHRoOiAxXHJcbiAgICB9LFxyXG4gICAgbW92ZToge1xyXG4gICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgIHNwZWVkOiAxLFxyXG4gICAgICBkaXJlY3Rpb246IFwibm9uZVwiLFxyXG4gICAgICByYW5kb206IHRydWUsXHJcbiAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcclxuICAgICAgb3V0X21vZGU6IFwib3V0XCIsXHJcbiAgICAgIGJvdW5jZTogZmFsc2UsXHJcbiAgICAgIGF0dHJhY3Q6IHtcclxuICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHJvdGF0ZVg6IDYwMCxcclxuICAgICAgICByb3RhdGVZOiA2MDBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW50ZXJhY3Rpdml0eToge1xyXG4gICAgZGV0ZWN0X29uOiBcImNhbnZhc1wiLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIG9uaG92ZXI6IHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgbW9kZTogXCJidWJibGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBvbmNsaWNrOiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIG1vZGU6IFwicmVwdWxzZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc2l6ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1vZGVzOiB7XHJcbiAgICAgIGdyYWI6IHtcclxuICAgICAgICBkaXN0YW5jZTogNDAwLFxyXG4gICAgICAgIGxpbmVfbGlua2VkOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBidWJibGU6IHtcclxuICAgICAgICBkaXN0YW5jZTogMjUwLFxyXG4gICAgICAgIHNpemU6IDAsXHJcbiAgICAgICAgZHVyYXRpb246IDIsXHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICBzcGVlZDogM1xyXG4gICAgICB9LFxyXG4gICAgICByZXB1bHNlOiB7XHJcbiAgICAgICAgZGlzdGFuY2U6IDQwMCxcclxuICAgICAgICBkdXJhdGlvbjogMC40XHJcbiAgICAgIH0sXHJcbiAgICAgIHB1c2g6IHtcclxuICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcclxuICAgICAgfSxcclxuICAgICAgcmVtb3ZlOiB7XHJcbiAgICAgICAgcGFydGljbGVzX25iOiAyXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHJldGluYV9kZXRlY3Q6IHRydWVcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgIDxQYXJ0aWNsZXMgcGFyYW1zPXtwYXJ0aWNsZU9wdH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImhvbWVcIn0+XHJcbiAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJmYWRlSW5cIiBkdXJhdGlvbj17Mn0+XHJcbiAgICAgICAgICA8aDE+Sm9zaCBEaWFtb25kPC9oMT5cclxuICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImZhZGVJblwiIGR1cmF0aW9uPXszfT5cclxuICAgICAgICAgIDxoND5Tb2Z0d2FyZSBEZXZlbG9wZXI8L2g0PlxyXG4gICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiZmFkZUluXCIgZHVyYXRpb249ezR9PlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICB0bz1cInNraWxsc1wiXHJcbiAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICBkdXJhdGlvbj17MTAwMH1cclxuICAgICAgICAgICAgb2Zmc2V0PXstMTI1fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtcImFycm93LWRvd25cIn0+XHJcbiAgICAgICAgICAgICAgPFRpQXJyb3dEb3duVGhpY2sgLz5cclxuICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3BhcnRpY2xlLW1pZGRsZSc+XHJcbiAgICAgICAgICAgICAgICA8UGFydGljbGVzIHBhcmFtcz17cGFydGljbGVPcHR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRpY2xlLWJvdHRvbVwiPlxyXG4gICAgICAgIDxQYXJ0aWNsZXMgcGFyYW1zPXtwYXJ0aWNsZU9wdH0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyXCI+XHJcbiAgICAgICAgICA8VHJhbnNpdGlvbiBpbWFnZT17XCIuLi9zdGF0aWMvY2xlYXJUb0xpZ2h0LnBuZ1wifSBob21lIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnBhcnRpY2xlLWJvdHRvbSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaG9tZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC01MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53cmFwcGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzE0MTMwMTtcclxuXHJcbiAgICAgICAgICAvLyAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBXZWJraXQgKi9cclxuICAgICAgICAgIC8vIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgIC8vIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIElFIDEwICAqL1xyXG4gICAgICAgICAgLy8gLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAvLyB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgLy8gY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDZyZW07XHJcbiAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFdlYmtpdCAqL1xyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCAgKi9cclxuICAgICAgICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGNvbG9yOiAjYjdiNWIzO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFdlYmtpdCAqL1xyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCAgKi9cclxuICAgICAgICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xyXG4gICAgICAgICAgLy8gZmlsdGVyOiBncmF5c2NhbGUoMTAwJSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFycm93LWRvd24ge1xyXG4gICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAvLyBjb2xvcjogIzRhZDVmZjtcclxuICAgICAgICAgIC8vIGNvbG9yOiBzaWx2ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAvLyBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFycm93LWRvd246aG92ZXIge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xlYXIge1xyXG4gICAgICAgICAgei1pbmRleDogNTA7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFydGljbGUtbWlkZGxlIHtcclxuICAgICAgICAgIHotaW5kZXg6IC01O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTUwMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGMxZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzOTVweCkge1xyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDMzM3B4KSB7XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\Home.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.d28a5d032db7144c5964.hot-update.js.map