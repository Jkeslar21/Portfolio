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
    className: "jsx-2232853091" + " " + "wrapper",
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
    className: "jsx-2232853091" + " " + "home",
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
    className: "jsx-2232853091",
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
    className: "jsx-2232853091",
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
    className: "jsx-2232853091" + " " + "arrow-down",
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
    className: "jsx-2232853091" + " " + "particle-bottom",
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
    className: "jsx-2232853091" + " " + "clear",
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
    id: "2232853091",
    __self: this
  }, ".particle-bottom.jsx-2232853091{background-color:#000c1f;}.home.jsx-2232853091{background-color:#000c1f;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:1;margin-top:-50%;}.wrapper.jsx-2232853091{width:100%;}h1.jsx-2232853091{color:white;font-size:6rem;margin-top:6%;font-family:\"Raleway\",sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}h4.jsx-2232853091{color:#b7b5b3;font-size:2.5rem;margin-top:35px;font-family:\"Raleway\",sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}img.jsx-2232853091{border-radius:21px;}.arrow-down.jsx-2232853091{color:#e5e7e6;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:200px;font-size:4rem;}.arrow-down.jsx-2232853091:hover{cursor:pointer;}.clear.jsx-2232853091{z-index:50;margin-top:-50%;}.particle-middle.jsx-2232853091{z-index:-5;margin-top:-500px;background-color:#000c1f;}@media (max-width:650px){h1.jsx-2232853091{font-size:5rem;}}@media (max-width:550px){h1.jsx-2232853091{font-size:3.5rem;}h4.jsx-2232853091{font-size:2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxwb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcSG9tZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkprQixBQUdvQyxBQUdBLEFBVWQsQUFXQyxBQWFFLEFBWUssQUFJTCxBQVVDLEFBR0osQUFJQSxBQU1NLEFBS0UsQUFHRixXQS9EbkIsQUE4Q2tCLEFBSUUsQ0E5Q0gsRUFhRSxBQWtCSixDQVFmLEFBYUUsQUFRQSxFQUhBLEVBL0JGLE1BbERBLEFBR2UsRUF1QkMsQUF5Q2hCLEVBSTJCLEVBakNULE9BbENILEdBdUJxQixNQVlBLE9BaUNwQyxvQkEzQzJCLE1BWUEsUUFlRixXQTFCRCxNQVlBLE9BckNBLFNBMEJELE1BWUEsZUFYRCxNQVlBLGNBWEgsTUFZQSxtQkFhQSxHQXBETSxjQXFEUixlQUNqQiw0QkExQkEsTUFZQSxvQ0F2Q3FCLDZGQUNULFVBQ00sZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxwb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcSG9tZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1RyYW5zaXRpb25cIjtcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tIFwicmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGxcIjtcclxuaW1wb3J0IFBhcnRpY2xlcyBmcm9tIFwicmVhY3QtcGFydGljbGVzLWpzXCI7XHJcbmltcG9ydCB7IFRpQXJyb3dEb3duVGhpY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvdGlcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuXHJcbmNvbnN0IHBhcnRpY2xlT3B0ID0ge1xyXG4gIHBhcnRpY2xlczoge1xyXG4gICAgbnVtYmVyOiB7XHJcbiAgICAgIHZhbHVlOiAxNjAsXHJcbiAgICAgIGRlbnNpdHk6IHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgdmFsdWVfYXJlYTogODAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb2xvcjoge1xyXG4gICAgICB2YWx1ZTogXCIjZTVlN2U2XCJcclxuICAgIH0sXHJcbiAgICBzaGFwZToge1xyXG4gICAgICB0eXBlOiBcImNpcmNsZVwiLFxyXG4gICAgICBzdHJva2U6IHtcclxuICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCJcclxuICAgICAgfSxcclxuICAgICAgcG9seWdvbjoge1xyXG4gICAgICAgIG5iX3NpZGVzOiA1XHJcbiAgICAgIH0sXHJcbiAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgc3JjOiBcImltZy9naXRodWIuc3ZnXCIsXHJcbiAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICBoZWlnaHQ6IDEwMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb3BhY2l0eToge1xyXG4gICAgICB2YWx1ZTogMSxcclxuICAgICAgcmFuZG9tOiB0cnVlLFxyXG4gICAgICBhbmltOiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiAxLFxyXG4gICAgICAgIG9wYWNpdHlfbWluOiAwLFxyXG4gICAgICAgIHN5bmM6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaXplOiB7XHJcbiAgICAgIHZhbHVlOiAxMCxcclxuICAgICAgcmFuZG9tOiB0cnVlLFxyXG4gICAgICBhbmltOiB7XHJcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICBzcGVlZDogNCxcclxuICAgICAgICBzaXplX21pbjogMC4zLFxyXG4gICAgICAgIHN5bmM6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsaW5lX2xpbmtlZDoge1xyXG4gICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICBkaXN0YW5jZTogMTUwLFxyXG4gICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgIG9wYWNpdHk6IDAuNCxcclxuICAgICAgd2lkdGg6IDFcclxuICAgIH0sXHJcbiAgICBtb3ZlOiB7XHJcbiAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgIGRpcmVjdGlvbjogXCJub25lXCIsXHJcbiAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxyXG4gICAgICBvdXRfbW9kZTogXCJvdXRcIixcclxuICAgICAgYm91bmNlOiBmYWxzZSxcclxuICAgICAgYXR0cmFjdDoge1xyXG4gICAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcm90YXRlWDogNjAwLFxyXG4gICAgICAgIHJvdGF0ZVk6IDYwMFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbnRlcmFjdGl2aXR5OiB7XHJcbiAgICBkZXRlY3Rfb246IFwiY2FudmFzXCIsXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgb25ob3Zlcjoge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICBtb2RlOiBcImJ1YmJsZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uY2xpY2s6IHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgbW9kZTogXCJyZXB1bHNlXCJcclxuICAgICAgfSxcclxuICAgICAgcmVzaXplOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbW9kZXM6IHtcclxuICAgICAgZ3JhYjoge1xyXG4gICAgICAgIGRpc3RhbmNlOiA0MDAsXHJcbiAgICAgICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGJ1YmJsZToge1xyXG4gICAgICAgIGRpc3RhbmNlOiAyNTAsXHJcbiAgICAgICAgc2l6ZTogMCxcclxuICAgICAgICBkdXJhdGlvbjogMixcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIHNwZWVkOiAzXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlcHVsc2U6IHtcclxuICAgICAgICBkaXN0YW5jZTogNDAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAwLjRcclxuICAgICAgfSxcclxuICAgICAgcHVzaDoge1xyXG4gICAgICAgIHBhcnRpY2xlc19uYjogNFxyXG4gICAgICB9LFxyXG4gICAgICByZW1vdmU6IHtcclxuICAgICAgICBwYXJ0aWNsZXNfbmI6IDJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmV0aW5hX2RldGVjdDogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgPFBhcnRpY2xlcyBwYXJhbXM9e3BhcnRpY2xlT3B0fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaG9tZVwifT5cclxuICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImZhZGVJblwiIGR1cmF0aW9uPXsyfT5cclxuICAgICAgICAgIDxoMT5Kb3NoIERpYW1vbmQ8L2gxPlxyXG4gICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiZmFkZUluXCIgZHVyYXRpb249ezN9PlxyXG4gICAgICAgICAgPGg0PlNvZnR3YXJlIERldmVsb3BlcjwvaDQ+XHJcbiAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJmYWRlSW5cIiBkdXJhdGlvbj17NH0+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgIHRvPVwic2tpbGxzXCJcclxuICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgIGR1cmF0aW9uPXsxMDAwfVxyXG4gICAgICAgICAgICBvZmZzZXQ9ey0xMjV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e1wiYXJyb3ctZG93blwifT5cclxuICAgICAgICAgICAgICA8VGlBcnJvd0Rvd25UaGljayAvPlxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ncGFydGljbGUtbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgIDxQYXJ0aWNsZXMgcGFyYW1zPXtwYXJ0aWNsZU9wdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydGljbGUtYm90dG9tXCI+XHJcbiAgICAgICAgPFBhcnRpY2xlcyBwYXJhbXM9e3BhcnRpY2xlT3B0fSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIj5cclxuICAgICAgICAgIDxUcmFuc2l0aW9uIGltYWdlPXtcIi4uL3N0YXRpYy9jbGVhclRvTGlnaHQucG5nXCJ9IGhvbWUgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucGFydGljbGUtYm90dG9tIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ob21lIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxMzAxO1xyXG5cclxuICAgICAgICAgIC8vIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFdlYmtpdCAqL1xyXG4gICAgICAgICAgLy8gLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgLy8gLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogSUUgMTAgICovXHJcbiAgICAgICAgICAvLyAtby11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC8vIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAvLyBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcclxuICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwICAqL1xyXG4gICAgICAgICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgY29sb3I6ICNiN2I1YjM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwICAqL1xyXG4gICAgICAgICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XHJcbiAgICAgICAgICAvLyBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYXJyb3ctZG93biB7XHJcbiAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgIC8vIGNvbG9yOiAjNGFkNWZmO1xyXG4gICAgICAgICAgLy8gY29sb3I6IHNpbHZlcjtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIC8vIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXJyb3ctZG93bjpob3ZlciB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbGVhciB7XHJcbiAgICAgICAgICB6LWluZGV4OiA1MDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC01MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYXJ0aWNsZS1taWRkbGUge1xyXG4gICAgICAgICAgei1pbmRleDogLTU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNTAwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\portfolio\\client\\components\\Home.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.f86f849f5ead171ea683.hot-update.js.map