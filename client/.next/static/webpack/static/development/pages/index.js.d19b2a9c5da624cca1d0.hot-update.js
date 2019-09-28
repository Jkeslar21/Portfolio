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
    className: "jsx-3914858784" + " " + "wrapper",
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
    className: "jsx-3914858784" + " " + "home",
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
    className: "jsx-3914858784",
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
    className: "jsx-3914858784",
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
    className: "jsx-3914858784" + " " + "arrow-down",
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
    className: "jsx-3914858784" + " " + "particle-bottom",
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
    className: "jsx-3914858784" + " " + "clear",
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
    id: "3914858784",
    __self: this
  }, ".particle-bottom.jsx-3914858784{background-color:#000c1f;}.home.jsx-3914858784{background-color:#000c1f;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:1;margin-top:-50%;}.wrapper.jsx-3914858784{width:100%;}h1.jsx-3914858784{color:white;font-size:6rem;margin-top:6%;font-family:\"Raleway\",sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}h4.jsx-3914858784{color:#b7b5b3;font-size:2.5rem;margin-top:35px;font-family:\"Raleway\",sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}img.jsx-3914858784{border-radius:21px;}.arrow-down.jsx-3914858784{color:#e5e7e6;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:200px;font-size:4rem;}.arrow-down.jsx-3914858784:hover{cursor:pointer;}.clear.jsx-3914858784{z-index:50;margin-top:-50%;}.particle-middle.jsx-3914858784{z-index:-5;margin-top:-500px;background-color:#000c1f;}@media (max-width:650px){h1.jsx-3914858784{font-size:5rem;}}@media (max-width:550px){h1.jsx-3914858784{font-size:3.5rem;}h4.jsx-3914858784{font-size:2rem;}}@media (max-width:395px){h1.jsx-3914858784{font-size:3rem;}h4.jsx-3914858784{font-size:2rem;}}@media (max-width:395px){.home.jsx-3914858784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxwb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcSG9tZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkprQixBQUdvQyxBQUdBLEFBVWQsQUFXQyxBQWFFLEFBWUssQUFJTCxBQVVDLEFBR0osQUFJQSxBQU1NLEFBS0UsQUFHRixBQUtBLEFBR0EsQUFLRixXQTVFakIsQUE4Q2tCLEFBSUUsQ0E5Q0gsRUFhRSxBQWtCSixDQVFmLEFBYUUsQUFRQSxBQUtBLEFBR0EsRUFYQSxFQS9CRixNQWxEQSxBQUdlLEVBdUJDLEFBeUNoQixFQUkyQixFQWpDVCxPQWxDSCxHQXVCcUIsTUFZQSxPQWlDcEMsb0JBM0MyQixBQW9FRCxNQXhEQyxRQWVGLFdBMUJELE1BWUEsT0FyQ0EsU0EwQkQsTUFZQSxlQVhELE1BWUEsSUF1RHBCLFVBbEVpQixNQVlBLG1CQWFBLEdBcERNLGNBcURSLGVBQ2pCLDRCQTFCQSxNQVlBLG9DQXZDcUIsNkZBQ1QsVUFDTSxnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxkaWFtb1xcRGVza3RvcFxcR2l0RmlsZXNcXHBvcnRmb2xpb1xcY2xpZW50XFxjb21wb25lbnRzXFxIb21lLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvVHJhbnNpdGlvblwiO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gXCJyZWFjdC1hbmltYXRlLW9uLXNjcm9sbFwiO1xyXG5pbXBvcnQgUGFydGljbGVzIGZyb20gXCJyZWFjdC1wYXJ0aWNsZXMtanNcIjtcclxuaW1wb3J0IHsgVGlBcnJvd0Rvd25UaGljayB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5cclxuY29uc3QgcGFydGljbGVPcHQgPSB7XHJcbiAgcGFydGljbGVzOiB7XHJcbiAgICBudW1iZXI6IHtcclxuICAgICAgdmFsdWU6IDE2MCxcclxuICAgICAgZGVuc2l0eToge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbG9yOiB7XHJcbiAgICAgIHZhbHVlOiBcIiNlNWU3ZTZcIlxyXG4gICAgfSxcclxuICAgIHNoYXBlOiB7XHJcbiAgICAgIHR5cGU6IFwiY2lyY2xlXCIsXHJcbiAgICAgIHN0cm9rZToge1xyXG4gICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIlxyXG4gICAgICB9LFxyXG4gICAgICBwb2x5Z29uOiB7XHJcbiAgICAgICAgbmJfc2lkZXM6IDVcclxuICAgICAgfSxcclxuICAgICAgaW1hZ2U6IHtcclxuICAgICAgICBzcmM6IFwiaW1nL2dpdGh1Yi5zdmdcIixcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgIGhlaWdodDogMTAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvcGFjaXR5OiB7XHJcbiAgICAgIHZhbHVlOiAxLFxyXG4gICAgICByYW5kb206IHRydWUsXHJcbiAgICAgIGFuaW06IHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgICAgb3BhY2l0eV9taW46IDAsXHJcbiAgICAgICAgc3luYzogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNpemU6IHtcclxuICAgICAgdmFsdWU6IDEwLFxyXG4gICAgICByYW5kb206IHRydWUsXHJcbiAgICAgIGFuaW06IHtcclxuICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHNwZWVkOiA0LFxyXG4gICAgICAgIHNpemVfbWluOiAwLjMsXHJcbiAgICAgICAgc3luYzogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxpbmVfbGlua2VkOiB7XHJcbiAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgIGRpc3RhbmNlOiAxNTAsXHJcbiAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgb3BhY2l0eTogMC40LFxyXG4gICAgICB3aWR0aDogMVxyXG4gICAgfSxcclxuICAgIG1vdmU6IHtcclxuICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICBzcGVlZDogMSxcclxuICAgICAgZGlyZWN0aW9uOiBcIm5vbmVcIixcclxuICAgICAgcmFuZG9tOiB0cnVlLFxyXG4gICAgICBzdHJhaWdodDogZmFsc2UsXHJcbiAgICAgIG91dF9tb2RlOiBcIm91dFwiLFxyXG4gICAgICBib3VuY2U6IGZhbHNlLFxyXG4gICAgICBhdHRyYWN0OiB7XHJcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICByb3RhdGVYOiA2MDAsXHJcbiAgICAgICAgcm90YXRlWTogNjAwXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGludGVyYWN0aXZpdHk6IHtcclxuICAgIGRldGVjdF9vbjogXCJjYW52YXNcIixcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBvbmhvdmVyOiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIG1vZGU6IFwiYnViYmxlXCJcclxuICAgICAgfSxcclxuICAgICAgb25jbGljazoge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICBtb2RlOiBcInJlcHVsc2VcIlxyXG4gICAgICB9LFxyXG4gICAgICByZXNpemU6IHRydWVcclxuICAgIH0sXHJcbiAgICBtb2Rlczoge1xyXG4gICAgICBncmFiOiB7XHJcbiAgICAgICAgZGlzdGFuY2U6IDQwMCxcclxuICAgICAgICBsaW5lX2xpbmtlZDoge1xyXG4gICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYnViYmxlOiB7XHJcbiAgICAgICAgZGlzdGFuY2U6IDI1MCxcclxuICAgICAgICBzaXplOiAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgc3BlZWQ6IDNcclxuICAgICAgfSxcclxuICAgICAgcmVwdWxzZToge1xyXG4gICAgICAgIGRpc3RhbmNlOiA0MDAsXHJcbiAgICAgICAgZHVyYXRpb246IDAuNFxyXG4gICAgICB9LFxyXG4gICAgICBwdXNoOiB7XHJcbiAgICAgICAgcGFydGljbGVzX25iOiA0XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlbW92ZToge1xyXG4gICAgICAgIHBhcnRpY2xlc19uYjogMlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICByZXRpbmFfZGV0ZWN0OiB0cnVlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICA8UGFydGljbGVzIHBhcmFtcz17cGFydGljbGVPcHR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJob21lXCJ9PlxyXG4gICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiZmFkZUluXCIgZHVyYXRpb249ezJ9PlxyXG4gICAgICAgICAgPGgxPkpvc2ggRGlhbW9uZDwvaDE+XHJcbiAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJmYWRlSW5cIiBkdXJhdGlvbj17M30+XHJcbiAgICAgICAgICA8aDQ+U29mdHdhcmUgRGV2ZWxvcGVyPC9oND5cclxuICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImZhZGVJblwiIGR1cmF0aW9uPXs0fT5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgdG89XCJza2lsbHNcIlxyXG4gICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgZHVyYXRpb249ezEwMDB9XHJcbiAgICAgICAgICAgIG9mZnNldD17LTEyNX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT17XCJhcnJvdy1kb3duXCJ9PlxyXG4gICAgICAgICAgICAgIDxUaUFycm93RG93blRoaWNrIC8+XHJcbiAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdwYXJ0aWNsZS1taWRkbGUnPlxyXG4gICAgICAgICAgICAgICAgPFBhcnRpY2xlcyBwYXJhbXM9e3BhcnRpY2xlT3B0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0aWNsZS1ib3R0b21cIj5cclxuICAgICAgICA8UGFydGljbGVzIHBhcmFtcz17cGFydGljbGVPcHR9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhclwiPlxyXG4gICAgICAgICAgPFRyYW5zaXRpb24gaW1hZ2U9e1wiLi4vc3RhdGljL2NsZWFyVG9MaWdodC5wbmdcIn0gaG9tZSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5wYXJ0aWNsZS1ib3R0b20ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGMxZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhvbWUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxNDEzMDE7XHJcblxyXG4gICAgICAgICAgLy8gLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAvLyAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAvLyAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAvKiBJRSAxMCAgKi9cclxuICAgICAgICAgIC8vIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLy8gdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIC8vIGNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xyXG4gICAgICAgICAgLy8gbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBXZWJraXQgKi9cclxuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTAgICovXHJcbiAgICAgICAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBjb2xvcjogI2I3YjViMztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBXZWJraXQgKi9cclxuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTAgICovXHJcbiAgICAgICAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjFweDtcclxuICAgICAgICAgIC8vIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcnJvdy1kb3duIHtcclxuICAgICAgICAgIGNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgLy8gY29sb3I6ICM0YWQ1ZmY7XHJcbiAgICAgICAgICAvLyBjb2xvcjogc2lsdmVyO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgLy8gY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcnJvdy1kb3duOmhvdmVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNsZWFyIHtcclxuICAgICAgICAgIHotaW5kZXg6IDUwO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhcnRpY2xlLW1pZGRsZSB7XHJcbiAgICAgICAgICB6LWluZGV4OiAtNTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC01MDBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzk1cHgpIHtcclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzOTVweCkge1xyXG4gICAgICAgICAgLmhvbWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\Home.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.d19b2a9c5da624cca1d0.hot-update.js.map