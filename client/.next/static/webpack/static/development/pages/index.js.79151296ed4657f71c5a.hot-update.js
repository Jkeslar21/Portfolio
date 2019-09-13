webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Section.jsx":
/*!********************************!*\
  !*** ./components/Section.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Transition */ "./components/Transition.jsx");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-card-flip */ "./node_modules/react-card-flip/lib/react-card-flip.js");
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_card_flip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _icon_ActiveCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icon/ActiveCard */ "./components/icon/ActiveCard.jsx");
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Section.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










function Section(_ref) {
  var title = _ref.title,
      id = _ref.id,
      image = _ref.image,
      classNameProp = _ref.classNameProp,
      dark = _ref.dark,
      skills = _ref.skills,
      portfolio = _ref.portfolio,
      resume = _ref.resume,
      contact = _ref.contact;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isFlipped = _useState[0],
      setIsFlipped = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isFlipped2 = _useState2[0],
      setIsFlipped2 = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      backend = _useState3[0],
      setBackend = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      frontend = _useState4[0],
      setFrontend = _useState4[1]; // Icon Selectors
  // const [git, setGit] = useState(false)
  // const [gitHub, setGitHub] = useState(false)
  // const [html5, setHtml5] = useState(false)
  // const [css3, setCss3] = useState(false)
  // const [less, setLess] = useState(false)
  // const [sass, setSass] = useState(false)
  // const [bootstrap, setBootstrap] = useState(false)
  // const [javaScript, setJavaScript] = useState(false)
  // const [react, setReact] = useState(false)
  // const [redux, setRedux] = useState(false)
  // const [next, setNext] = useState(false)
  // const [node, setNode] = useState(false)
  // const [express, setExpress] = useState(false)
  // const [mySQL, setMySQL] = useState(false)
  // const [postgres, setPostgres] = useState(false)


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeSkill = _useState5[0],
      setActiveSkill = _useState5[1]; // const scrollToTop = () => {
  //     scroll.scrollToTop()
  // }


  var clickMeFront = function clickMeFront() {
    setFrontend(true);
    setIsFlipped(true);
  };

  var clickMeFrontBack = function clickMeFrontBack() {
    setFrontend(false);
    setIsFlipped(false);
    setActiveSkill(null);
  };

  var clickMeBack = function clickMeBack() {
    setBackend(true);
    setIsFlipped2(true);
  };

  var clickMeBackFront = function clickMeBackFront() {
    setBackend(false);
    setIsFlipped2(false);
    setActiveSkill(null);
  };

  var scrollToTop = function scrollToTop() {
    react_scroll__WEBPACK_IMPORTED_MODULE_2__["animateScroll"].scrollToTop();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2959529189" + " " + (classNameProp || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    id: id,
    className: "jsx-2959529189" + " " + "section-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, skills ? __jsx("h2", {
    className: "jsx-2959529189" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2959529189" + " " + ((dark ? 'title-dark title-skills' : 'title title-skills') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, title)) : __jsx("h2", {
    className: "jsx-2959529189" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2959529189" + " " + ((dark ? 'title-dark' : 'title') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, title))), skills && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2959529189" + " " + 'images-modal',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2959529189" + " " + 'images',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2959529189" + " " + 'frontend',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    isFlipped: isFlipped,
    flipDirection: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("img", {
    src: "../static/treeTopFinally.png",
    alt: "Tree Image",
    key: frontend ? null : 'front',
    onClick: clickMeFront,
    className: "jsx-2959529189" + " " + 'sunflower',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-2959529189" + " " + 'view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2959529189" + " " + 'card-back',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2959529189" + " " + 'x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeFrontBack,
    className: "jsx-2959529189" + " " + 'close-button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "X")), __jsx("h3", {
    className: "jsx-2959529189" + " " + "skills-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Front End"), __jsx("div", {
    className: "jsx-2959529189" + " " + 'card-icons',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, icons.frontend.map(function (icon) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiGit" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiGit"], {
      style: {
        fontSize: '6rem',
        color: '#F34F29'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }) : icon.icon === "GiGithubBadge" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiGithubBadge"], {
      style: {
        fontSize: '6rem',
        color: '#181616'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }) : icon.icon === "DiHtml5" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiHtml5"], {
      style: {
        fontSize: '6rem',
        color: '#E54D26'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }) : icon.icon === "DiCss3" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiCss3"], {
      style: {
        fontSize: '6rem',
        color: '#3D8FC6'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }) : icon.icon === "DiLess" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiLess"], {
      style: {
        fontSize: '6rem',
        color: '#2A4D80'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }) : icon.icon === "DiSass" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiSass"], {
      style: {
        fontSize: '6rem',
        color: '#CC6699'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }) : icon.icon === "DiBootstrap" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiBootstrap"], {
      style: {
        fontSize: '6rem',
        color: '#5B4282'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }) : icon.icon === "DiJavascript1" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiJavascript1"], {
      style: {
        fontSize: '6rem',
        color: '#F0DB4F'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }) : icon.icon === "DiReact" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiReact"], {
      style: {
        fontSize: '6rem',
        color: '#61DAFB'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }) : icon.icon === "img src='../static/redux.png' alt='Redux Icon'" ? __jsx("img", {
      src: "../static/redux.png",
      alt: "Redux Icon",
      style: {
        width: '75px',
        maxHeight: '70px',
        margin: '1%'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      className: "jsx-2959529189",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      className: "jsx-2959529189",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }) : null);
  })))))), __jsx("div", {
    className: "jsx-2959529189" + " " + 'backend',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    isFlipped: isFlipped2,
    flipDirection: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("img", {
    src: "../static/treeRootsFinally.png",
    alt: "Roots Image",
    key: backend ? null : 'front',
    onClick: clickMeBack,
    className: "jsx-2959529189" + " " + 'roots',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-2959529189" + " " + 'view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2959529189" + " " + 'card-back',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2959529189" + " " + 'x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeBackFront,
    className: "jsx-2959529189" + " " + 'close-button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "X")), __jsx("h3", {
    className: "jsx-2959529189" + " " + 'skills-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Back End"), __jsx("div", {
    className: "jsx-2959529189" + " " + 'card-icons',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiGit"], {
    style: {
      fontSize: '6rem',
      color: '#F34F29'
    },
    onClick: function onClick() {
      return setGit(!git);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiGithubBadge"], {
    style: {
      fontSize: '6rem',
      color: '#181616'
    },
    onClick: function onClick() {
      return setGitHub(!gitHub);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiNodejsSmall"], {
    style: {
      fontSize: '6rem',
      color: '#83CD29'
    },
    onClick: function onClick() {
      return setNode(!node);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), __jsx("img", {
    src: "../static/expressFinal.png",
    alt: "Express Icon",
    style: {
      width: '75px',
      height: '75px',
      marginTop: '2%',
      paddingLeft: '2%'
    },
    onClick: function onClick() {
      return setExpress(!express);
    },
    className: "jsx-2959529189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiMysql"], {
    style: {
      fontSize: '6rem',
      color: '#00618A',
      marginLeft: '14%'
    },
    onClick: function onClick() {
      return setMySQL(!mySQL);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiPostgresql"], {
    style: {
      fontSize: '6rem',
      color: '#336791',
      marginRight: '12%'
    },
    onClick: function onClick() {
      return setPostgres(!postgres);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }))))))), __jsx("div", {
    className: "jsx-2959529189" + " " + 'modal',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, frontend || backend ? __jsx("h6", {
    className: "jsx-2959529189" + " " + ((activeSkill ? "icon-selected" : "select-icon") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2959529189" + " " + 'instructions',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Select an Icon")) : __jsx("h6", {
    className: "jsx-2959529189" + " " + 'select-image',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2959529189" + " " + 'instructions',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Select an Image")), activeSkill && __jsx(_icon_ActiveCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
    activeSkill: activeSkill,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2959529189" + " " + 'gauges',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2959529189" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2959529189" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaChartLine"], {
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
    className: "jsx-2959529189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Efficient"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-2959529189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "maximum productivity; well-organized")), __jsx("div", {
    className: "jsx-2959529189" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2959529189" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdPhonelink"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-2959529189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Responsive"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-2959529189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "optimized layouts for all devices")), __jsx("div", {
    className: "jsx-2959529189" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2959529189" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdLightbulbOutline"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-2959529189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Creative"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-2959529189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "highest quality solutions provided")), __jsx("div", {
    className: "jsx-2959529189" + " " + 'gauge-styles dynamic',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2959529189" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaGlobeAmericas"], {
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
    className: "jsx-2959529189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Dynamic"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-2959529189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "reflects real-time changes in values with activity.  Built with DRY, reusable components. "))))), portfolio && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2959529189" + " " + ((dark ? null : 'light-text') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "PORTFOLIO CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus! Commodi magni voluptas nemo earum perferendis voluptatum odio dignissimos molestiae esse aut. Nam quae beatae magnam ea, voluptatibus minus enim vitae culpa, cum expedita fuga nesciunt nulla, ut similique corrupti? Cumque quis illo eius doloremque accusamus aliquid architecto! Pariatur provident cumque minima corporis maiores. Asperiores, debitis eveniet. Quaerat, porro tenetur quam ratione suscipit non voluptates cupiditate totam quis corrupti officiis! Aliquam dicta at molestias dignissimos, illum accusamus, vitae quaerat corrupti perferendis ad obcaecati hic culpa iusto tempora magni sit incidunt minima tempore atque ducimus neque quae. Nisi exercitationem provident blanditiis! Error autem officia tenetur soluta nulla illum, vero commodi recusandae, fuga nobis nam facere itaque harum officiis! Perferendis ipsam esse laboriosam neque enim quod sit. Consequuntur maiores soluta obcaecati aspernatur? Aspernatur, nihil officia! Expedita dolor nemo itaque ratione accusantium unde vel architecto quod accusamus, tenetur blanditiis esse libero laborum amet, fuga adipisci. Reiciendis laborum nam eaque non earum quis facere. Fugit accusamus aperiam labore quisquam aut. Dolor reiciendis aliquam quod fugit possimus earum neque, iusto ratione expedita? Reiciendis qui sapiente possimus nostrum saepe sit distinctio pariatur autem, commodi ipsa earum. Odit repellat in modi tempora! Quia quisquam repellendus sed quasi sit soluta sint magnam quae modi reiciendis pariatur nisi fuga culpa, sapiente vel tempora similique? Quos officiis possimus dignissimos adipisci. Eveniet explicabo voluptate eligendi doloremque et suscipit, rerum, officiis nesciunt sapiente ipsa magni numquam quam ab recusandae harum incidunt cumque error voluptatem temporibus quae modi, nulla ex? Ratione, modi consequuntur! Itaque expedita vel dolore exercitationem odio officia, eos fugiat obcaecati impedit adipisci sint recusandae consequuntur possimus consectetur sunt nisi repellat voluptates repellendus quisquam esse asperiores minus ea. Facilis, beatae optio. Corporis esse modi laborum dolorum, nisi autem pariatur mollitia. Illo, accusamus sed praesentium atque eos magni. Harum aut repellendus consequatur laborum, praesentium consequuntur voluptates doloremque provident nihil earum tempore est! Iusto porro ullam necessitatibus deleniti officia rerum id distinctio! Non, veritatis ipsa consectetur architecto illo placeat et error vel inventore? Mollitia deserunt minus voluptates praesentium animi. Rerum provident sunt quas! Laborum quibusdam iure totam explicabo culpa temporibus, optio voluptatem nemo at eos voluptas necessitatibus ducimus qui consequatur quam natus dolor ex, nam cumque. Modi optio autem adipisci illo, consectetur provident. Enim suscipit cumque amet blanditiis veritatis sed veniam earum consectetur neque minima quisquam deleniti culpa ut iure ipsa, necessitatibus distinctio recusandae commodi ullam! Laboriosam maxime suscipit hic incidunt tempora harum. Minus architecto veritatis ipsum in eos rem velit sequi? Illo corporis distinctio quisquam ipsa velit magnam, et maxime ad tempore soluta pariatur inventore voluptas illum totam rerum voluptatibus quia atque? Qui cupiditate ea molestias id quisquam nulla a! Ullam nulla molestiae accusantium animi optio in dolorum obcaecati, perferendis beatae dolores est culpa doloremque unde iusto nemo saepe neque repudiandae iste. Eveniet dolorum incidunt obcaecati ipsa vero error officiis doloremque distinctio, voluptas atque totam officia labore veritatis mollitia nostrum ut temporibus voluptates placeat soluta, unde hic corrupti natus pariatur quas. Amet!"))), resume && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2959529189" + " " + ((dark ? null : 'light-text') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "RESUME CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus! Commodi magni voluptas nemo earum perferendis voluptatum odio dignissimos molestiae esse aut. Nam quae beatae magnam ea, voluptatibus minus enim vitae culpa, cum expedita fuga nesciunt nulla, ut similique corrupti? Cumque quis illo eius doloremque accusamus aliquid architecto! Pariatur provident cumque minima corporis maiores. Asperiores, debitis eveniet. Quaerat, porro tenetur quam ratione suscipit non voluptates cupiditate totam quis corrupti officiis! Aliquam dicta at molestias dignissimos, illum accusamus, vitae quaerat corrupti perferendis ad obcaecati hic culpa iusto tempora magni sit incidunt minima tempore atque ducimus neque quae. Nisi exercitationem provident blanditiis! Error autem officia tenetur soluta nulla illum, vero commodi recusandae, fuga nobis nam facere itaque harum officiis! Perferendis ipsam esse laboriosam neque enim quod sit. Consequuntur maiores soluta obcaecati aspernatur? Aspernatur, nihil officia! Expedita dolor nemo itaque ratione accusantium unde vel architecto quod accusamus, tenetur blanditiis esse libero laborum amet, fuga adipisci. Reiciendis laborum nam eaque non earum quis facere. Fugit accusamus aperiam labore quisquam aut. Dolor reiciendis aliquam quod fugit possimus earum neque, iusto ratione expedita? Reiciendis qui sapiente possimus nostrum saepe sit distinctio pariatur autem, commodi ipsa earum. Odit repellat in modi tempora! Quia quisquam repellendus sed quasi sit soluta sint magnam quae modi reiciendis pariatur nisi fuga culpa, sapiente vel tempora similique? Quos officiis possimus dignissimos adipisci. Eveniet explicabo voluptate eligendi doloremque et suscipit, rerum, officiis nesciunt sapiente ipsa magni numquam quam ab recusandae harum incidunt cumque error voluptatem temporibus quae modi, nulla ex? Ratione, modi consequuntur! Itaque expedita vel dolore exercitationem odio officia, eos fugiat obcaecati impedit adipisci sint recusandae consequuntur possimus consectetur sunt nisi repellat voluptates repellendus quisquam esse asperiores minus ea. Facilis, beatae optio. Corporis esse modi laborum dolorum, nisi autem pariatur mollitia. Illo, accusamus sed praesentium atque eos magni. Harum aut repellendus consequatur laborum, praesentium consequuntur voluptates doloremque provident nihil earum tempore est! Iusto porro ullam necessitatibus deleniti officia rerum id distinctio! Non, veritatis ipsa consectetur architecto illo placeat et error vel inventore? Mollitia deserunt minus voluptates praesentium animi. Rerum provident sunt quas! Laborum quibusdam iure totam explicabo culpa temporibus, optio voluptatem nemo at eos voluptas necessitatibus ducimus qui consequatur quam natus dolor ex, nam cumque. Modi optio autem adipisci illo, consectetur provident. Enim suscipit cumque amet blanditiis veritatis sed veniam earum consectetur neque minima quisquam deleniti culpa ut iure ipsa, necessitatibus distinctio recusandae commodi ullam! Laboriosam maxime suscipit hic incidunt tempora harum. Minus architecto veritatis ipsum in eos rem velit sequi? Illo corporis distinctio quisquam ipsa velit magnam, et maxime ad tempore soluta pariatur inventore voluptas illum totam rerum voluptatibus quia atque? Qui cupiditate ea molestias id quisquam nulla a! Ullam nulla molestiae accusantium animi optio in dolorum obcaecati, perferendis beatae dolores est culpa doloremque unde iusto nemo saepe neque repudiandae iste. Eveniet dolorum incidunt obcaecati ipsa vero error officiis doloremque distinctio, voluptas atque totam officia labore veritatis mollitia nostrum ut temporibus voluptates placeat soluta, unde hic corrupti natus pariatur quas. Amet!"))), contact && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2959529189" + " " + ((dark ? null : 'light-text') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "CONTACT CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus! Commodi magni voluptas nemo earum perferendis voluptatum odio dignissimos molestiae esse aut. Nam quae beatae magnam ea, voluptatibus minus enim vitae culpa, cum expedita fuga nesciunt nulla, ut similique corrupti? Cumque quis illo eius doloremque accusamus aliquid architecto! Pariatur provident cumque minima corporis maiores. Asperiores, debitis eveniet. Quaerat, porro tenetur quam ratione suscipit non voluptates cupiditate totam quis corrupti officiis! Aliquam dicta at molestias dignissimos, illum accusamus, vitae quaerat corrupti perferendis ad obcaecati hic culpa iusto tempora magni sit incidunt minima tempore atque ducimus neque quae. Nisi exercitationem provident blanditiis! Error autem officia tenetur soluta nulla illum, vero commodi recusandae, fuga nobis nam facere itaque harum officiis! Perferendis ipsam esse laboriosam neque enim quod sit. Consequuntur maiores soluta obcaecati aspernatur? Aspernatur, nihil officia! Expedita dolor nemo itaque ratione accusantium unde vel architecto quod accusamus, tenetur blanditiis esse libero laborum amet, fuga adipisci. Reiciendis laborum nam eaque non earum quis facere. Fugit accusamus aperiam labore quisquam aut. Dolor reiciendis aliquam quod fugit possimus earum neque, iusto ratione expedita? Reiciendis qui sapiente possimus nostrum saepe sit distinctio pariatur autem, commodi ipsa earum. Odit repellat in modi tempora! Quia quisquam repellendus sed quasi sit soluta sint magnam quae modi reiciendis pariatur nisi fuga culpa, sapiente vel tempora similique? Quos officiis possimus dignissimos adipisci. Eveniet explicabo voluptate eligendi doloremque et suscipit, rerum, officiis nesciunt sapiente ipsa magni numquam quam ab recusandae harum incidunt cumque error voluptatem temporibus quae modi, nulla ex? Ratione, modi consequuntur! Itaque expedita vel dolore exercitationem odio officia, eos fugiat obcaecati impedit adipisci sint recusandae consequuntur possimus consectetur sunt nisi repellat voluptates repellendus quisquam esse asperiores minus ea. Facilis, beatae optio. Corporis esse modi laborum dolorum, nisi autem pariatur mollitia. Illo, accusamus sed praesentium atque eos magni. Harum aut repellendus consequatur laborum, praesentium consequuntur voluptates doloremque provident nihil earum tempore est! Iusto porro ullam necessitatibus deleniti officia rerum id distinctio! Non, veritatis ipsa consectetur architecto illo placeat et error vel inventore? Mollitia deserunt minus voluptates praesentium animi. Rerum provident sunt quas! Laborum quibusdam iure totam explicabo culpa temporibus, optio voluptatem nemo at eos voluptas necessitatibus ducimus qui consequatur quam natus dolor ex, nam cumque. Modi optio autem adipisci illo, consectetur provident. Enim suscipit cumque amet blanditiis veritatis sed veniam earum consectetur neque minima quisquam deleniti culpa ut iure ipsa, necessitatibus distinctio recusandae commodi ullam! Laboriosam maxime suscipit hic incidunt tempora harum. Minus architecto veritatis ipsum in eos rem velit sequi? Illo corporis distinctio quisquam ipsa velit magnam, et maxime ad tempore soluta pariatur inventore voluptas illum totam rerum voluptatibus quia atque? Qui cupiditate ea molestias id quisquam nulla a! Ullam nulla molestiae accusantium animi optio in dolorum obcaecati, perferendis beatae dolores est culpa doloremque unde iusto nemo saepe neque repudiandae iste. Eveniet dolorum incidunt obcaecati ipsa vero error officiis doloremque distinctio, voluptas atque totam officia labore veritatis mollitia nostrum ut temporibus voluptates placeat soluta, unde hic corrupti natus pariatur quas. Amet!")), __jsx("h5", {
    onClick: scrollToTop,
    className: "jsx-2959529189" + " " + 'arrow-up-icon-dark',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_4__["TiArrowUpThick"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  })))), __jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: image,
    dark: dark,
    contact: contact,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2959529189",
    __self: this
  }, ".light.jsx-2959529189{background-color:#e5e7e6;margin-top:-5px;font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.dark.jsx-2959529189{background-color:#000c1f;margin-top:-5px;color:#e5e7e6;font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.images.jsx-2959529189{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1%;padding-top:2%;}.sunflower.jsx-2959529189,.roots.jsx-2959529189{max-width:100%;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-animation:colorFadeOut-jsx-2959529189 2s,shapeShiftOut-jsx-2959529189 2s;animation:colorFadeOut-jsx-2959529189 2s,shapeShiftOut-jsx-2959529189 2s;border-radius:50%;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.sunflower.jsx-2959529189:hover,.roots.jsx-2959529189:hover{width:100%;height:100%;cursor:pointer;-webkit-animation:colorFadeIn-jsx-2959529189 2s,shapeShiftIn-jsx-2959529189 2s;animation:colorFadeIn-jsx-2959529189 2s,shapeShiftIn-jsx-2959529189 2s;-webkit-filter:grayscale(0%);filter:grayscale(0%);border-radius:12px;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.skills-card.jsx-2959529189{width:33%;height:420px;}.frontend.jsx-2959529189,.backend.jsx-2959529189{max-width:100%;width:450px;height:450px;margin-top:1%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.titles.jsx-2959529189{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border:1px solid red;padding:2%;}.skills-title.jsx-2959529189{font-size:2.1rem;margin-bottom:5%;margin-top:-20%;}.skills-title.jsx-2959529189:hover{cursor:pointer;}.view.jsx-2959529189{opacity:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:100%;background:#fbfbf8;border-radius:12px;padding:2%;cursor:pointer;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);width:420px;height:420px;}.card-back.jsx-2959529189{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:100%;max-height:100%;}.card-icons.jsx-2959529189{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:100%;}h2.jsx-2959529189{font-size:4rem;padding-top:2%;padding-bottom:2%;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding-left:2%;}p.jsx-2959529189{padding-left:2%;line-height:1.8;padding-top:2%;}.title-center.jsx-2959529189{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.title.jsx-2959529189{color:#000c1f;margin-right:2%;margin-top:6%;}.title-dark.jsx-2959529189{margin-right:2%;color:#E5E7E6;margin-top:6%;}.arrow-up-icon-dark.jsx-2959529189{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#e5e7e6;font-size:4rem;position:relative;top:300px;}.arrow-up-icon-dark.jsx-2959529189:hover{cursor:pointer;}@-webkit-keyframes colorFadeIn-jsx-2959529189{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@keyframes colorFadeIn-jsx-2959529189{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@-webkit-keyframes colorFadeOut-jsx-2959529189{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@keyframes colorFadeOut-jsx-2959529189{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@-webkit-keyframes shapeShiftIn-jsx-2959529189{from{border-radius:50%;}to{border-radius:12px;}}@keyframes shapeShiftIn-jsx-2959529189{from{border-radius:50%;}to{border-radius:12px;}}@-webkit-keyframes shapeShiftOut-jsx-2959529189{from{border-radius:12px;}to{border-radius:50%;}}@keyframes shapeShiftOut-jsx-2959529189{from{border-radius:12px;}to{border-radius:50%;}}@-webkit-keyframes fadeIn-jsx-2959529189{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-2959529189{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadeOut-jsx-2959529189{from{opacity:1;}to{opacity:0;}}@keyframes fadeOut-jsx-2959529189{from{opacity:1;}to{opacity:0;}}.animate.jsx-2959529189{opacity:1;}.gauges.jsx-2959529189{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:5%;}.gauge-styles.jsx-2959529189{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:200px;}.gauge.jsx-2959529189{background-image:url('../static/DarkBlueBadge.png');background-size:cover;max-width:100%;width:200px;height:175px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.dynamic.jsx-2959529189{margin-top:55px;}.light-text.jsx-2959529189{color:#000c1f;}.title-skills.jsx-2959529189{margin-top:1%;}.section-content.jsx-2959529189{margin-bottom:2%;}.modal.jsx-2959529189{width:450px;max-height:270px;border:1px solid red;margin-top:21%;max-width:100%;background:#fbfbf8;border-radius:12px;padding:2%;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.images-modal.jsx-2959529189{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.x.jsx-2959529189{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.close-button.jsx-2959529189{margin-right:10%;margin-bottom:20%;font-size:1.5rem;font-weight:bolder;}.icon-selected.jsx-2959529189{display:none;}.select-image.jsx-2959529189{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcU2VjdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNlFvQixBQUc4QyxBQVlBLEFBWVosQUFVRSxBQVdKLEFBWUQsQUFNSyxBQVVGLEFBT0ksQUFNRixBQUtMLEFBa0JHLEFBVUEsQUFVRSxBQVFDLEFBS0gsQUFJQyxBQUtFLEFBS0gsQUFRRSxBQVVZLEFBSTVCLEFBSTBCLEFBSTFCLEFBSXVCLEFBR0MsQUFLQSxBQUdELEFBS1IsQUFHQSxBQUtBLEFBR0EsQUF3QkosQUFHRyxBQVNBLEFBT3VDLEFBVXBDLEFBR0YsQUFHQSxBQUdHLEFBR0wsQUFhQyxBQUlBLEFBS0ksQUFNSixBQU1VLFVBbFFWLEFBa0NBLEFBbUhiLEFBR0EsQUFLQSxBQUdBLEFBd0JKLENBcE1nQixDQTZPSyxDQTRCckIsQ0FwS29CLEFBK0hwQixBQUdBLENBbFAyQixBQTZCWCxBQXdCaEIsQUEwQ21CLEFBbUNuQixDQTNCb0IsQUFjRixBQXVIbEIsQ0E5THFCLEFBdU1yQixBQXlCc0IsQ0FsSGxCLEFBV0EsQ0FSQSxBQUtBLElBeEplLEFBY25CLEVBNURvQixBQVlBLEVBb0RILEVBMk5RLENBekpILEFBaUJKLEFBS0EsRUFkQyxFQXpEQyxDQWdPQyxHQWxReUIsRUFrQjVCLENBaEVvQixBQVlwQixHQXVJbEIsQUFLQSxHQWRBLENBUnVCLEVBaER2QixBQThGSSxBQUtBLEFBc0dlLEVBeEJPLEFBOENILEVBL09OLEFBMkdiLEFBV0EsQ0EzS2tDLFVBK1FuQixJQTFQNkIsRUFnUmhELEdBL1M2QixBQW9CSCxBQWlETyxBQW9DUCxBQVVILEFBdUJJLEFBY0EsQUF3RkosQUFTVSxBQVFkLEFBa0NjLEFBSWxCLE1BYlEsSUFsTUosQ0FnTlUsR0E1UkEsQ0FzUGIsVUFqUVUsQUEwUkgsQUE2QnZCLEVBckRpQixZQXRQUyxDQXVQVCxJQXdCRixHQTFSVSxPQThEQyxDQTZOb0MsTUEvUXJDLE1BMkVGLEFBdUNILENBN0hJLENBaUhMLEFBNkhBLFNBNU5JLEFBcUZJLElBM0ZILENBa0h4QixLQTdIcUIsV0F1SXJCLEFBY2tCLEdBeklHLE1BeVJyQixLQS9Jb0IsQUFvSXVDLENBbFBsQyxBQXlORSxTQS9MRixBQW9MQyxBQTBDMUIsR0EvS2tDLEFBNkhuQixFQXZGTyxJQTFGQyxJQXlCVyxDQXlKRCxPQTFLbEMsRUFtRmUsR0E1SFEsTUF5Q3RCLENBb0ZBLFFBaEh1QixHQVh1QyxDQTZQUixHQXhRdkMsRUFsQmYsSUFzR3VCLEtBbkZKLENBdUIyQyxJQTlCOUQsVUFRQSxJQWtPb0IsWUFXRyxJQVR2QixDQW1DQSxPQTdQMkQsQUErQjNELGdCQWxCMkQsQUF1RXhDLFVBNUJBLEtBK0JuQixJQTBIdUIsTUF4SkEsSUFrQkosVUExRW1DLEtBeUQvQixBQWtCSCxXQTlEa0MsS0ErRHRELEdBbEJlLEVBeUtmLFNBdkttQixlQTNEbkIsQUE0RDhELGdCQS9DOUQsT0FtTWtCLGNBQ2xCLHFCQXBKMkQsdURBQ0wsa0RBQ3RDLFlBQ0MsYUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxkaWFtb1xcRGVza3RvcFxcR2l0RmlsZXNcXFBvcnRmb2xpb1xcY2xpZW50XFxjb21wb25lbnRzXFxTZWN0aW9uLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcclxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9UcmFuc2l0aW9uJ1xyXG5pbXBvcnQgeyBUaUFycm93VXBUaGljayB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuaW1wb3J0IFJlYWN0Q2FyZEZsaXAgZnJvbSAncmVhY3QtY2FyZC1mbGlwJztcclxuaW1wb3J0IHsgRGlSZWFjdCwgRGlKYXZhc2NyaXB0MSwgRGlCb290c3RyYXAsIERpU2FzcywgRGlMZXNzLCBEaUNzczMsIERpSHRtbDUsIERpR2l0aHViQmFkZ2UsIERpR2l0LCBEaU5vZGVqc1NtYWxsLCBEaU15c3FsLCBEaVBvc3RncmVzcWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvZGlcIjtcclxuaW1wb3J0IHsgRmFDaGFydExpbmUsIEZhR2xvYmVBbWVyaWNhcyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBNZFBob25lbGluaywgTWRMaWdodGJ1bGJPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCBBY3RpdmVDYXJkIGZyb20gJy4vaWNvbi9BY3RpdmVDYXJkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbih7dGl0bGUsIGlkLCBpbWFnZSwgY2xhc3NOYW1lUHJvcCwgZGFyaywgc2tpbGxzLCBwb3J0Zm9saW8sIHJlc3VtZSwgY29udGFjdH0pIHtcclxuICAgIGNvbnN0IFtpc0ZsaXBwZWQsIHNldElzRmxpcHBlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc0ZsaXBwZWQyLCBzZXRJc0ZsaXBwZWQyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2JhY2tlbmQsIHNldEJhY2tlbmRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZnJvbnRlbmQsIHNldEZyb250ZW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIC8vIEljb24gU2VsZWN0b3JzXHJcbiAgICAvLyBjb25zdCBbZ2l0LCBzZXRHaXRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICAvLyBjb25zdCBbZ2l0SHViLCBzZXRHaXRIdWJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICAvLyBjb25zdCBbaHRtbDUsIHNldEh0bWw1XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgLy8gY29uc3QgW2NzczMsIHNldENzczNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICAvLyBjb25zdCBbbGVzcywgc2V0TGVzc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIC8vIGNvbnN0IFtzYXNzLCBzZXRTYXNzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgLy8gY29uc3QgW2Jvb3RzdHJhcCwgc2V0Qm9vdHN0cmFwXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgLy8gY29uc3QgW2phdmFTY3JpcHQsIHNldEphdmFTY3JpcHRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICAvLyBjb25zdCBbcmVhY3QsIHNldFJlYWN0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgLy8gY29uc3QgW3JlZHV4LCBzZXRSZWR1eF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIC8vIGNvbnN0IFtuZXh0LCBzZXROZXh0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgLy8gY29uc3QgW25vZGUsIHNldE5vZGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICAvLyBjb25zdCBbZXhwcmVzcywgc2V0RXhwcmVzc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIC8vIGNvbnN0IFtteVNRTCwgc2V0TXlTUUxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICAvLyBjb25zdCBbcG9zdGdyZXMsIHNldFBvc3RncmVzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFthY3RpdmVTa2lsbCwgc2V0QWN0aXZlU2tpbGxdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICAvLyBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgIC8vICAgICBzY3JvbGwuc2Nyb2xsVG9Ub3AoKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IGNsaWNrTWVGcm9udCA9ICgpID0+IHtcclxuICAgICAgICBzZXRGcm9udGVuZCh0cnVlKVxyXG4gICAgICAgIHNldElzRmxpcHBlZCh0cnVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tNZUZyb250QmFjayA9ICgpID0+IHtcclxuICAgICAgICBzZXRGcm9udGVuZChmYWxzZSlcclxuICAgICAgICBzZXRJc0ZsaXBwZWQoZmFsc2UpXHJcbiAgICAgICAgc2V0QWN0aXZlU2tpbGwobnVsbClcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrTWVCYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJhY2tlbmQodHJ1ZSlcclxuICAgICAgICBzZXRJc0ZsaXBwZWQyKHRydWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja01lQmFja0Zyb250ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJhY2tlbmQoZmFsc2UpXHJcbiAgICAgICAgc2V0SXNGbGlwcGVkMihmYWxzZSlcclxuICAgICAgICBzZXRBY3RpdmVTa2lsbChudWxsKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHNjcm9sbC5zY3JvbGxUb1RvcCgpXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lUHJvcH0+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17XCJzZWN0aW9uXCIgKyAoZGFyayA/IFwiIHNlY3Rpb24tZGFya1wiIDogXCJcIil9PiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudFwiIGlkPXtpZH0+XHJcbiAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAge3NraWxscyA/IDxoMiBjbGFzc05hbWU9J3RpdGxlLWNlbnRlcic+PHNwYW4gY2xhc3NOYW1lPXtkYXJrID8gJ3RpdGxlLWRhcmsgdGl0bGUtc2tpbGxzJyA6ICd0aXRsZSB0aXRsZS1za2lsbHMnfT57dGl0bGV9PC9zcGFuPjwvaDI+IDogPGgyIGNsYXNzTmFtZT0ndGl0bGUtY2VudGVyJz48c3BhbiBjbGFzc05hbWU9e2RhcmsgPyAndGl0bGUtZGFyaycgOiAndGl0bGUnfT57dGl0bGV9PC9zcGFuPjwvaDI+fVxyXG5cclxuICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIHsvKiBEeW5hbWljIFNlY3Rpb25zICovfVxyXG5cclxuICAgICAgICAgICAge3NraWxscyAmJlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj0nZmFkZUluJyBkdXJhdGlvbj17Mn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZXMtbW9kYWwnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zyb250ZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0Q2FyZEZsaXAgaXNGbGlwcGVkPXtpc0ZsaXBwZWR9IGZsaXBEaXJlY3Rpb249J2hvcml6b250YWwnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgY2xhc3NOYW1lPXsnc3VuZmxvd2VyJ30gc3JjPScuLi9zdGF0aWMvdHJlZVRvcEZpbmFsbHkucG5nJyBhbHQ9J1RyZWUgSW1hZ2UnIGtleT17ZnJvbnRlbmQgPyBudWxsIDogJ2Zyb250J30gb25DbGljaz17Y2xpY2tNZUZyb250fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3ZpZXcnfSBrZXk9J2JhY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1iYWNrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd4Jz48cCBjbGFzc05hbWU9J2Nsb3NlLWJ1dHRvbicgb25DbGljaz17Y2xpY2tNZUZyb250QmFja30+WDwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJza2lsbHMtdGl0bGVcIj5Gcm9udCBFbmQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWljb25zJz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ucy5mcm9udGVuZC5tYXAoaWNvbiA9PiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbi5pY29uID09PSBcIkRpR2l0XCIgPyA8RGlHaXQgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjRjM0RjI5J319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiR2lHaXRodWJCYWRnZVwiID8gPERpR2l0aHViQmFkZ2Ugc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjMTgxNjE2J319ICBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpSHRtbDVcIiA/IDxEaUh0bWw1IHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnI0U1NEQyNid9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpQ3NzM1wiID8gPERpQ3NzMyBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMzRDhGQzYnfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaUxlc3NcIiA/IDxEaUxlc3Mgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjMkE0RDgwJ319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlTYXNzXCIgPyA8RGlTYXNzIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnI0NDNjY5OSd9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpQm9vdHN0cmFwXCIgPyA8RGlCb290c3RyYXAgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjNUI0MjgyJ319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlKYXZhc2NyaXB0MVwiID8gPERpSmF2YXNjcmlwdDEgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjRjBEQjRGJ319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlSZWFjdFwiID8gPERpUmVhY3Qgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjNjFEQUZCJ319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiaW1nIHNyYz0nLi4vc3RhdGljL3JlZHV4LnBuZycgYWx0PSdSZWR1eCBJY29uJ1wiID8gPGltZyBzcmM9Jy4uL3N0YXRpYy9yZWR1eC5wbmcnIGFsdD0nUmVkdXggSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc3NXB4JywgbWF4SGVpZ2h0OiAnNzBweCcsIG1hcmdpbjogJzElJyB9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcImltZyBzcmM9Jy4uL3N0YXRpYy9uZXh0LXRleHQucG5nJyBhbHQ9J05leHQgSWNvbidcIiA/IDxpbWcgc3JjPScuLi9zdGF0aWMvbmV4dC10ZXh0LnBuZycgYWx0PSdOZXh0IEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNzVweCcsIG1heEhlaWdodDogJzc1cHgnLCBtYXJnaW5SaWdodDogJzUlJyB9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdENhcmRGbGlwPiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0Q2FyZEZsaXAgaXNGbGlwcGVkPXtpc0ZsaXBwZWQyfSBmbGlwRGlyZWN0aW9uPSdob3Jpem9udGFsJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ncm9vdHMnIHNyYz0nLi4vc3RhdGljL3RyZWVSb290c0ZpbmFsbHkucG5nJyBhbHQ9J1Jvb3RzIEltYWdlJyBrZXk9e2JhY2tlbmQgPyBudWxsIDogJ2Zyb250J30gb25DbGljaz17Y2xpY2tNZUJhY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3ZpZXcnfSBrZXk9J2JhY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0neCc+PHAgY2xhc3NOYW1lPSdjbG9zZS1idXR0b24nIG9uQ2xpY2s9e2NsaWNrTWVCYWNrRnJvbnR9Plg8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nc2tpbGxzLXRpdGxlJz5CYWNrIEVuZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWljb25zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBHaXQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlHaXQgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjRjM0RjI5J319IG9uQ2xpY2s9eygpPT5zZXRHaXQoIWdpdCl9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEdpdEh1YiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaUdpdGh1YkJhZGdlIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzE4MTYxNid9fSBvbkNsaWNrPXsoKT0+c2V0R2l0SHViKCFnaXRIdWIpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBOb2RlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpTm9kZWpzU21hbGwgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjODNDRDI5J319IG9uQ2xpY2s9eygpPT5zZXROb2RlKCFub2RlKX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRXhwcmVzcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuLi9zdGF0aWMvZXhwcmVzc0ZpbmFsLnBuZycgYWx0PSdFeHByZXNzIEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNzVweCcsIGhlaWdodDogJzc1cHgnLCBtYXJnaW5Ub3A6ICcyJScsIHBhZGRpbmdMZWZ0OiAnMiUnIH19IG9uQ2xpY2s9eygpPT5zZXRFeHByZXNzKCFleHByZXNzKX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTXlTUUwgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlNeXNxbCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMwMDYxOEEnLCBtYXJnaW5MZWZ0OiAnMTQlJ319IG9uQ2xpY2s9eygpPT5zZXRNeVNRTCghbXlTUUwpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQb3N0Z3JlU1FMICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpUG9zdGdyZXNxbCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMzMzY3OTEnLCBtYXJnaW5SaWdodDogJzEyJSd9fSBvbkNsaWNrPXsoKT0+c2V0UG9zdGdyZXMoIXBvc3RncmVzKX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdENhcmRGbGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICB7ZnJvbnRlbmQgfHwgYmFja2VuZCA/IDxoNiBjbGFzc05hbWU9e2FjdGl2ZVNraWxsID8gXCJpY29uLXNlbGVjdGVkXCIgOiBcInNlbGVjdC1pY29uXCJ9PjxzcGFuIGNsYXNzTmFtZT0naW5zdHJ1Y3Rpb25zJz5TZWxlY3QgYW4gSWNvbjwvc3Bhbj48L2g2PiA6IDxoNiBjbGFzc05hbWU9J3NlbGVjdC1pbWFnZSc+PHNwYW4gY2xhc3NOYW1lPSdpbnN0cnVjdGlvbnMnPlNlbGVjdCBhbiBJbWFnZTwvc3Bhbj48L2g2Pn1cclxuICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVNraWxsICYmIDxBY3RpdmVDYXJkIGFjdGl2ZVNraWxsPXthY3RpdmVTa2lsbH0gLz4gfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlcyc+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIGVmZmljaWVudCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nLi4vc3RhdGljL0RhcmtCYWRnZS5wbmcnIHdpZHRoPXsxNzV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGFydExpbmUgc3R5bGU9e3sgY29sb3I6ICcjRTVFN0U2JywgZm9udFNpemU6ICc2cmVtJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJyMwMDBjMWYnLCBmb250V2VpZ2h0OiAnYm9sZGVyJ319PkVmZmljaWVudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgIHN0eWxlPXt7IGNvbG9yOiAnIzE0MTMwMSd9fT5tYXhpbXVtIHByb2R1Y3Rpdml0eTsgd2VsbC1vcmdhbml6ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogcmVzcG9uc2l2ZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZFBob25lbGluayBzdHlsZT17eyBjb2xvcjogJyNFNUU3RTYnLCBmb250U2l6ZTogJzZyZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJyMwMDBjMWYnLCBmb250V2VpZ2h0OiAnYm9sZGVyJ319PlJlc3BvbnNpdmU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnIzE0MTMwMSd9fT5vcHRpbWl6ZWQgbGF5b3V0cyBmb3IgYWxsIGRldmljZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogY3JlYXRpdmUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2Utc3R5bGVzJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWRMaWdodGJ1bGJPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnI0U1RTdFNicsIGZvbnRTaXplOiAnNnJlbScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjMDAwYzFmJywgZm9udFdlaWdodDogJ2JvbGRlcid9fT5DcmVhdGl2ZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMTQxMzAxJ319PmhpZ2hlc3QgcXVhbGl0eSBzb2x1dGlvbnMgcHJvdmlkZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogZHluYW1pYyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMgZHluYW1pYyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhR2xvYmVBbWVyaWNhcyBzdHlsZT17eyBjb2xvcjogJyNFNUU3RTYnLCBmb250U2l6ZTogJzZyZW0nIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjMDAwYzFmJywgZm9udFdlaWdodDogJ2JvbGRlcid9fT5EeW5hbWljPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMxNDEzMDEnfX0+cmVmbGVjdHMgcmVhbC10aW1lIGNoYW5nZXMgaW4gdmFsdWVzIHdpdGggYWN0aXZpdHkuICBCdWlsdCB3aXRoIERSWSwgcmV1c2FibGUgY29tcG9uZW50cy4gPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgICAgICAgPC8+fVxyXG5cclxuICAgICAgICAgICAge3BvcnRmb2xpbyAmJlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj0nZmFkZUluJyBkdXJhdGlvbj17Mn0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17ZGFyayA/IG51bGwgOiAnbGlnaHQtdGV4dCd9PlBPUlRGT0xJTyBDT05URU5UIFRFU1QgLSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3J1bSBxdWlidXNkYW0gcXVpZGVtIG1vZGksIGNvbW1vZGkgYWxpcXVhbSBmdWdhIHF1YWVyYXQsIGlwc3VtIG9wdGlvIG1vbGVzdGlhcyBkb2xvcmVzLCBhdXQgYWNjdXNhbnRpdW0gY29uc2VxdWF0dXIgZXhwZWRpdGEuIFZlcml0YXRpcywgcmVjdXNhbmRhZSBkb2xvcmUuIEFjY3VzYW11cywgZXJyb3IgZGVsZWN0dXMhXHJcbiAgICAgICAgICAgIENvbW1vZGkgbWFnbmkgdm9sdXB0YXMgbmVtbyBlYXJ1bSBwZXJmZXJlbmRpcyB2b2x1cHRhdHVtIG9kaW8gZGlnbmlzc2ltb3MgbW9sZXN0aWFlIGVzc2UgYXV0LiBOYW0gcXVhZSBiZWF0YWUgbWFnbmFtIGVhLCB2b2x1cHRhdGlidXMgbWludXMgZW5pbSB2aXRhZSBjdWxwYSwgY3VtIGV4cGVkaXRhIGZ1Z2EgbmVzY2l1bnQgbnVsbGEsIHV0IHNpbWlsaXF1ZSBjb3JydXB0aT9cclxuICAgICAgICAgICAgQ3VtcXVlIHF1aXMgaWxsbyBlaXVzIGRvbG9yZW1xdWUgYWNjdXNhbXVzIGFsaXF1aWQgYXJjaGl0ZWN0byEgUGFyaWF0dXIgcHJvdmlkZW50IGN1bXF1ZSBtaW5pbWEgY29ycG9yaXMgbWFpb3Jlcy4gQXNwZXJpb3JlcywgZGViaXRpcyBldmVuaWV0LiBRdWFlcmF0LCBwb3JybyB0ZW5ldHVyIHF1YW0gcmF0aW9uZSBzdXNjaXBpdCBub24gdm9sdXB0YXRlcyBjdXBpZGl0YXRlIHRvdGFtIHF1aXMgY29ycnVwdGkgb2ZmaWNpaXMhXHJcbiAgICAgICAgICAgIEFsaXF1YW0gZGljdGEgYXQgbW9sZXN0aWFzIGRpZ25pc3NpbW9zLCBpbGx1bSBhY2N1c2FtdXMsIHZpdGFlIHF1YWVyYXQgY29ycnVwdGkgcGVyZmVyZW5kaXMgYWQgb2JjYWVjYXRpIGhpYyBjdWxwYSBpdXN0byB0ZW1wb3JhIG1hZ25pIHNpdCBpbmNpZHVudCBtaW5pbWEgdGVtcG9yZSBhdHF1ZSBkdWNpbXVzIG5lcXVlIHF1YWUuIE5pc2kgZXhlcmNpdGF0aW9uZW0gcHJvdmlkZW50IGJsYW5kaXRpaXMhXHJcbiAgICAgICAgICAgIEVycm9yIGF1dGVtIG9mZmljaWEgdGVuZXR1ciBzb2x1dGEgbnVsbGEgaWxsdW0sIHZlcm8gY29tbW9kaSByZWN1c2FuZGFlLCBmdWdhIG5vYmlzIG5hbSBmYWNlcmUgaXRhcXVlIGhhcnVtIG9mZmljaWlzISBQZXJmZXJlbmRpcyBpcHNhbSBlc3NlIGxhYm9yaW9zYW0gbmVxdWUgZW5pbSBxdW9kIHNpdC4gQ29uc2VxdXVudHVyIG1haW9yZXMgc29sdXRhIG9iY2FlY2F0aSBhc3Blcm5hdHVyP1xyXG4gICAgICAgICAgICBBc3Blcm5hdHVyLCBuaWhpbCBvZmZpY2lhISBFeHBlZGl0YSBkb2xvciBuZW1vIGl0YXF1ZSByYXRpb25lIGFjY3VzYW50aXVtIHVuZGUgdmVsIGFyY2hpdGVjdG8gcXVvZCBhY2N1c2FtdXMsIHRlbmV0dXIgYmxhbmRpdGlpcyBlc3NlIGxpYmVybyBsYWJvcnVtIGFtZXQsIGZ1Z2EgYWRpcGlzY2kuIFJlaWNpZW5kaXMgbGFib3J1bSBuYW0gZWFxdWUgbm9uIGVhcnVtIHF1aXMgZmFjZXJlLlxyXG4gICAgICAgICAgICBGdWdpdCBhY2N1c2FtdXMgYXBlcmlhbSBsYWJvcmUgcXVpc3F1YW0gYXV0LiBEb2xvciByZWljaWVuZGlzIGFsaXF1YW0gcXVvZCBmdWdpdCBwb3NzaW11cyBlYXJ1bSBuZXF1ZSwgaXVzdG8gcmF0aW9uZSBleHBlZGl0YT8gUmVpY2llbmRpcyBxdWkgc2FwaWVudGUgcG9zc2ltdXMgbm9zdHJ1bSBzYWVwZSBzaXQgZGlzdGluY3RpbyBwYXJpYXR1ciBhdXRlbSwgY29tbW9kaSBpcHNhIGVhcnVtLlxyXG4gICAgICAgICAgICBPZGl0IHJlcGVsbGF0IGluIG1vZGkgdGVtcG9yYSEgUXVpYSBxdWlzcXVhbSByZXBlbGxlbmR1cyBzZWQgcXVhc2kgc2l0IHNvbHV0YSBzaW50IG1hZ25hbSBxdWFlIG1vZGkgcmVpY2llbmRpcyBwYXJpYXR1ciBuaXNpIGZ1Z2EgY3VscGEsIHNhcGllbnRlIHZlbCB0ZW1wb3JhIHNpbWlsaXF1ZT8gUXVvcyBvZmZpY2lpcyBwb3NzaW11cyBkaWduaXNzaW1vcyBhZGlwaXNjaS5cclxuICAgICAgICAgICAgRXZlbmlldCBleHBsaWNhYm8gdm9sdXB0YXRlIGVsaWdlbmRpIGRvbG9yZW1xdWUgZXQgc3VzY2lwaXQsIHJlcnVtLCBvZmZpY2lpcyBuZXNjaXVudCBzYXBpZW50ZSBpcHNhIG1hZ25pIG51bXF1YW0gcXVhbSBhYiByZWN1c2FuZGFlIGhhcnVtIGluY2lkdW50IGN1bXF1ZSBlcnJvciB2b2x1cHRhdGVtIHRlbXBvcmlidXMgcXVhZSBtb2RpLCBudWxsYSBleD8gUmF0aW9uZSwgbW9kaSBjb25zZXF1dW50dXIhXHJcbiAgICAgICAgICAgIEl0YXF1ZSBleHBlZGl0YSB2ZWwgZG9sb3JlIGV4ZXJjaXRhdGlvbmVtIG9kaW8gb2ZmaWNpYSwgZW9zIGZ1Z2lhdCBvYmNhZWNhdGkgaW1wZWRpdCBhZGlwaXNjaSBzaW50IHJlY3VzYW5kYWUgY29uc2VxdXVudHVyIHBvc3NpbXVzIGNvbnNlY3RldHVyIHN1bnQgbmlzaSByZXBlbGxhdCB2b2x1cHRhdGVzIHJlcGVsbGVuZHVzIHF1aXNxdWFtIGVzc2UgYXNwZXJpb3JlcyBtaW51cyBlYS4gRmFjaWxpcywgYmVhdGFlIG9wdGlvLlxyXG4gICAgICAgICAgICBDb3Jwb3JpcyBlc3NlIG1vZGkgbGFib3J1bSBkb2xvcnVtLCBuaXNpIGF1dGVtIHBhcmlhdHVyIG1vbGxpdGlhLiBJbGxvLCBhY2N1c2FtdXMgc2VkIHByYWVzZW50aXVtIGF0cXVlIGVvcyBtYWduaS4gSGFydW0gYXV0IHJlcGVsbGVuZHVzIGNvbnNlcXVhdHVyIGxhYm9ydW0sIHByYWVzZW50aXVtIGNvbnNlcXV1bnR1ciB2b2x1cHRhdGVzIGRvbG9yZW1xdWUgcHJvdmlkZW50IG5paGlsIGVhcnVtIHRlbXBvcmUgZXN0IVxyXG4gICAgICAgICAgICBJdXN0byBwb3JybyB1bGxhbSBuZWNlc3NpdGF0aWJ1cyBkZWxlbml0aSBvZmZpY2lhIHJlcnVtIGlkIGRpc3RpbmN0aW8hIE5vbiwgdmVyaXRhdGlzIGlwc2EgY29uc2VjdGV0dXIgYXJjaGl0ZWN0byBpbGxvIHBsYWNlYXQgZXQgZXJyb3IgdmVsIGludmVudG9yZT8gTW9sbGl0aWEgZGVzZXJ1bnQgbWludXMgdm9sdXB0YXRlcyBwcmFlc2VudGl1bSBhbmltaS4gUmVydW0gcHJvdmlkZW50IHN1bnQgcXVhcyFcclxuICAgICAgICAgICAgTGFib3J1bSBxdWlidXNkYW0gaXVyZSB0b3RhbSBleHBsaWNhYm8gY3VscGEgdGVtcG9yaWJ1cywgb3B0aW8gdm9sdXB0YXRlbSBuZW1vIGF0IGVvcyB2b2x1cHRhcyBuZWNlc3NpdGF0aWJ1cyBkdWNpbXVzIHF1aSBjb25zZXF1YXR1ciBxdWFtIG5hdHVzIGRvbG9yIGV4LCBuYW0gY3VtcXVlLiBNb2RpIG9wdGlvIGF1dGVtIGFkaXBpc2NpIGlsbG8sIGNvbnNlY3RldHVyIHByb3ZpZGVudC5cclxuICAgICAgICAgICAgRW5pbSBzdXNjaXBpdCBjdW1xdWUgYW1ldCBibGFuZGl0aWlzIHZlcml0YXRpcyBzZWQgdmVuaWFtIGVhcnVtIGNvbnNlY3RldHVyIG5lcXVlIG1pbmltYSBxdWlzcXVhbSBkZWxlbml0aSBjdWxwYSB1dCBpdXJlIGlwc2EsIG5lY2Vzc2l0YXRpYnVzIGRpc3RpbmN0aW8gcmVjdXNhbmRhZSBjb21tb2RpIHVsbGFtISBMYWJvcmlvc2FtIG1heGltZSBzdXNjaXBpdCBoaWMgaW5jaWR1bnQgdGVtcG9yYSBoYXJ1bS5cclxuICAgICAgICAgICAgTWludXMgYXJjaGl0ZWN0byB2ZXJpdGF0aXMgaXBzdW0gaW4gZW9zIHJlbSB2ZWxpdCBzZXF1aT8gSWxsbyBjb3Jwb3JpcyBkaXN0aW5jdGlvIHF1aXNxdWFtIGlwc2EgdmVsaXQgbWFnbmFtLCBldCBtYXhpbWUgYWQgdGVtcG9yZSBzb2x1dGEgcGFyaWF0dXIgaW52ZW50b3JlIHZvbHVwdGFzIGlsbHVtIHRvdGFtIHJlcnVtIHZvbHVwdGF0aWJ1cyBxdWlhIGF0cXVlP1xyXG4gICAgICAgICAgICBRdWkgY3VwaWRpdGF0ZSBlYSBtb2xlc3RpYXMgaWQgcXVpc3F1YW0gbnVsbGEgYSEgVWxsYW0gbnVsbGEgbW9sZXN0aWFlIGFjY3VzYW50aXVtIGFuaW1pIG9wdGlvIGluIGRvbG9ydW0gb2JjYWVjYXRpLCBwZXJmZXJlbmRpcyBiZWF0YWUgZG9sb3JlcyBlc3QgY3VscGEgZG9sb3JlbXF1ZSB1bmRlIGl1c3RvIG5lbW8gc2FlcGUgbmVxdWUgcmVwdWRpYW5kYWUgaXN0ZS5cclxuICAgICAgICAgICAgRXZlbmlldCBkb2xvcnVtIGluY2lkdW50IG9iY2FlY2F0aSBpcHNhIHZlcm8gZXJyb3Igb2ZmaWNpaXMgZG9sb3JlbXF1ZSBkaXN0aW5jdGlvLCB2b2x1cHRhcyBhdHF1ZSB0b3RhbSBvZmZpY2lhIGxhYm9yZSB2ZXJpdGF0aXMgbW9sbGl0aWEgbm9zdHJ1bSB1dCB0ZW1wb3JpYnVzIHZvbHVwdGF0ZXMgcGxhY2VhdCBzb2x1dGEsIHVuZGUgaGljIGNvcnJ1cHRpIG5hdHVzIHBhcmlhdHVyIHF1YXMuIEFtZXQhXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgICAgIHtyZXN1bWUgJiZcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49J2ZhZGVJbicgZHVyYXRpb249ezJ9PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2RhcmsgPyBudWxsIDogJ2xpZ2h0LXRleHQnfT5SRVNVTUUgQ09OVEVOVCBURVNUIC0gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9ydW0gcXVpYnVzZGFtIHF1aWRlbSBtb2RpLCBjb21tb2RpIGFsaXF1YW0gZnVnYSBxdWFlcmF0LCBpcHN1bSBvcHRpbyBtb2xlc3RpYXMgZG9sb3JlcywgYXV0IGFjY3VzYW50aXVtIGNvbnNlcXVhdHVyIGV4cGVkaXRhLiBWZXJpdGF0aXMsIHJlY3VzYW5kYWUgZG9sb3JlLiBBY2N1c2FtdXMsIGVycm9yIGRlbGVjdHVzIVxyXG4gICAgICAgICAgICBDb21tb2RpIG1hZ25pIHZvbHVwdGFzIG5lbW8gZWFydW0gcGVyZmVyZW5kaXMgdm9sdXB0YXR1bSBvZGlvIGRpZ25pc3NpbW9zIG1vbGVzdGlhZSBlc3NlIGF1dC4gTmFtIHF1YWUgYmVhdGFlIG1hZ25hbSBlYSwgdm9sdXB0YXRpYnVzIG1pbnVzIGVuaW0gdml0YWUgY3VscGEsIGN1bSBleHBlZGl0YSBmdWdhIG5lc2NpdW50IG51bGxhLCB1dCBzaW1pbGlxdWUgY29ycnVwdGk/XHJcbiAgICAgICAgICAgIEN1bXF1ZSBxdWlzIGlsbG8gZWl1cyBkb2xvcmVtcXVlIGFjY3VzYW11cyBhbGlxdWlkIGFyY2hpdGVjdG8hIFBhcmlhdHVyIHByb3ZpZGVudCBjdW1xdWUgbWluaW1hIGNvcnBvcmlzIG1haW9yZXMuIEFzcGVyaW9yZXMsIGRlYml0aXMgZXZlbmlldC4gUXVhZXJhdCwgcG9ycm8gdGVuZXR1ciBxdWFtIHJhdGlvbmUgc3VzY2lwaXQgbm9uIHZvbHVwdGF0ZXMgY3VwaWRpdGF0ZSB0b3RhbSBxdWlzIGNvcnJ1cHRpIG9mZmljaWlzIVxyXG4gICAgICAgICAgICBBbGlxdWFtIGRpY3RhIGF0IG1vbGVzdGlhcyBkaWduaXNzaW1vcywgaWxsdW0gYWNjdXNhbXVzLCB2aXRhZSBxdWFlcmF0IGNvcnJ1cHRpIHBlcmZlcmVuZGlzIGFkIG9iY2FlY2F0aSBoaWMgY3VscGEgaXVzdG8gdGVtcG9yYSBtYWduaSBzaXQgaW5jaWR1bnQgbWluaW1hIHRlbXBvcmUgYXRxdWUgZHVjaW11cyBuZXF1ZSBxdWFlLiBOaXNpIGV4ZXJjaXRhdGlvbmVtIHByb3ZpZGVudCBibGFuZGl0aWlzIVxyXG4gICAgICAgICAgICBFcnJvciBhdXRlbSBvZmZpY2lhIHRlbmV0dXIgc29sdXRhIG51bGxhIGlsbHVtLCB2ZXJvIGNvbW1vZGkgcmVjdXNhbmRhZSwgZnVnYSBub2JpcyBuYW0gZmFjZXJlIGl0YXF1ZSBoYXJ1bSBvZmZpY2lpcyEgUGVyZmVyZW5kaXMgaXBzYW0gZXNzZSBsYWJvcmlvc2FtIG5lcXVlIGVuaW0gcXVvZCBzaXQuIENvbnNlcXV1bnR1ciBtYWlvcmVzIHNvbHV0YSBvYmNhZWNhdGkgYXNwZXJuYXR1cj9cclxuICAgICAgICAgICAgQXNwZXJuYXR1ciwgbmloaWwgb2ZmaWNpYSEgRXhwZWRpdGEgZG9sb3IgbmVtbyBpdGFxdWUgcmF0aW9uZSBhY2N1c2FudGl1bSB1bmRlIHZlbCBhcmNoaXRlY3RvIHF1b2QgYWNjdXNhbXVzLCB0ZW5ldHVyIGJsYW5kaXRpaXMgZXNzZSBsaWJlcm8gbGFib3J1bSBhbWV0LCBmdWdhIGFkaXBpc2NpLiBSZWljaWVuZGlzIGxhYm9ydW0gbmFtIGVhcXVlIG5vbiBlYXJ1bSBxdWlzIGZhY2VyZS5cclxuICAgICAgICAgICAgRnVnaXQgYWNjdXNhbXVzIGFwZXJpYW0gbGFib3JlIHF1aXNxdWFtIGF1dC4gRG9sb3IgcmVpY2llbmRpcyBhbGlxdWFtIHF1b2QgZnVnaXQgcG9zc2ltdXMgZWFydW0gbmVxdWUsIGl1c3RvIHJhdGlvbmUgZXhwZWRpdGE/IFJlaWNpZW5kaXMgcXVpIHNhcGllbnRlIHBvc3NpbXVzIG5vc3RydW0gc2FlcGUgc2l0IGRpc3RpbmN0aW8gcGFyaWF0dXIgYXV0ZW0sIGNvbW1vZGkgaXBzYSBlYXJ1bS5cclxuICAgICAgICAgICAgT2RpdCByZXBlbGxhdCBpbiBtb2RpIHRlbXBvcmEhIFF1aWEgcXVpc3F1YW0gcmVwZWxsZW5kdXMgc2VkIHF1YXNpIHNpdCBzb2x1dGEgc2ludCBtYWduYW0gcXVhZSBtb2RpIHJlaWNpZW5kaXMgcGFyaWF0dXIgbmlzaSBmdWdhIGN1bHBhLCBzYXBpZW50ZSB2ZWwgdGVtcG9yYSBzaW1pbGlxdWU/IFF1b3Mgb2ZmaWNpaXMgcG9zc2ltdXMgZGlnbmlzc2ltb3MgYWRpcGlzY2kuXHJcbiAgICAgICAgICAgIEV2ZW5pZXQgZXhwbGljYWJvIHZvbHVwdGF0ZSBlbGlnZW5kaSBkb2xvcmVtcXVlIGV0IHN1c2NpcGl0LCByZXJ1bSwgb2ZmaWNpaXMgbmVzY2l1bnQgc2FwaWVudGUgaXBzYSBtYWduaSBudW1xdWFtIHF1YW0gYWIgcmVjdXNhbmRhZSBoYXJ1bSBpbmNpZHVudCBjdW1xdWUgZXJyb3Igdm9sdXB0YXRlbSB0ZW1wb3JpYnVzIHF1YWUgbW9kaSwgbnVsbGEgZXg/IFJhdGlvbmUsIG1vZGkgY29uc2VxdXVudHVyIVxyXG4gICAgICAgICAgICBJdGFxdWUgZXhwZWRpdGEgdmVsIGRvbG9yZSBleGVyY2l0YXRpb25lbSBvZGlvIG9mZmljaWEsIGVvcyBmdWdpYXQgb2JjYWVjYXRpIGltcGVkaXQgYWRpcGlzY2kgc2ludCByZWN1c2FuZGFlIGNvbnNlcXV1bnR1ciBwb3NzaW11cyBjb25zZWN0ZXR1ciBzdW50IG5pc2kgcmVwZWxsYXQgdm9sdXB0YXRlcyByZXBlbGxlbmR1cyBxdWlzcXVhbSBlc3NlIGFzcGVyaW9yZXMgbWludXMgZWEuIEZhY2lsaXMsIGJlYXRhZSBvcHRpby5cclxuICAgICAgICAgICAgQ29ycG9yaXMgZXNzZSBtb2RpIGxhYm9ydW0gZG9sb3J1bSwgbmlzaSBhdXRlbSBwYXJpYXR1ciBtb2xsaXRpYS4gSWxsbywgYWNjdXNhbXVzIHNlZCBwcmFlc2VudGl1bSBhdHF1ZSBlb3MgbWFnbmkuIEhhcnVtIGF1dCByZXBlbGxlbmR1cyBjb25zZXF1YXR1ciBsYWJvcnVtLCBwcmFlc2VudGl1bSBjb25zZXF1dW50dXIgdm9sdXB0YXRlcyBkb2xvcmVtcXVlIHByb3ZpZGVudCBuaWhpbCBlYXJ1bSB0ZW1wb3JlIGVzdCFcclxuICAgICAgICAgICAgSXVzdG8gcG9ycm8gdWxsYW0gbmVjZXNzaXRhdGlidXMgZGVsZW5pdGkgb2ZmaWNpYSByZXJ1bSBpZCBkaXN0aW5jdGlvISBOb24sIHZlcml0YXRpcyBpcHNhIGNvbnNlY3RldHVyIGFyY2hpdGVjdG8gaWxsbyBwbGFjZWF0IGV0IGVycm9yIHZlbCBpbnZlbnRvcmU/IE1vbGxpdGlhIGRlc2VydW50IG1pbnVzIHZvbHVwdGF0ZXMgcHJhZXNlbnRpdW0gYW5pbWkuIFJlcnVtIHByb3ZpZGVudCBzdW50IHF1YXMhXHJcbiAgICAgICAgICAgIExhYm9ydW0gcXVpYnVzZGFtIGl1cmUgdG90YW0gZXhwbGljYWJvIGN1bHBhIHRlbXBvcmlidXMsIG9wdGlvIHZvbHVwdGF0ZW0gbmVtbyBhdCBlb3Mgdm9sdXB0YXMgbmVjZXNzaXRhdGlidXMgZHVjaW11cyBxdWkgY29uc2VxdWF0dXIgcXVhbSBuYXR1cyBkb2xvciBleCwgbmFtIGN1bXF1ZS4gTW9kaSBvcHRpbyBhdXRlbSBhZGlwaXNjaSBpbGxvLCBjb25zZWN0ZXR1ciBwcm92aWRlbnQuXHJcbiAgICAgICAgICAgIEVuaW0gc3VzY2lwaXQgY3VtcXVlIGFtZXQgYmxhbmRpdGlpcyB2ZXJpdGF0aXMgc2VkIHZlbmlhbSBlYXJ1bSBjb25zZWN0ZXR1ciBuZXF1ZSBtaW5pbWEgcXVpc3F1YW0gZGVsZW5pdGkgY3VscGEgdXQgaXVyZSBpcHNhLCBuZWNlc3NpdGF0aWJ1cyBkaXN0aW5jdGlvIHJlY3VzYW5kYWUgY29tbW9kaSB1bGxhbSEgTGFib3Jpb3NhbSBtYXhpbWUgc3VzY2lwaXQgaGljIGluY2lkdW50IHRlbXBvcmEgaGFydW0uXHJcbiAgICAgICAgICAgIE1pbnVzIGFyY2hpdGVjdG8gdmVyaXRhdGlzIGlwc3VtIGluIGVvcyByZW0gdmVsaXQgc2VxdWk/IElsbG8gY29ycG9yaXMgZGlzdGluY3RpbyBxdWlzcXVhbSBpcHNhIHZlbGl0IG1hZ25hbSwgZXQgbWF4aW1lIGFkIHRlbXBvcmUgc29sdXRhIHBhcmlhdHVyIGludmVudG9yZSB2b2x1cHRhcyBpbGx1bSB0b3RhbSByZXJ1bSB2b2x1cHRhdGlidXMgcXVpYSBhdHF1ZT9cclxuICAgICAgICAgICAgUXVpIGN1cGlkaXRhdGUgZWEgbW9sZXN0aWFzIGlkIHF1aXNxdWFtIG51bGxhIGEhIFVsbGFtIG51bGxhIG1vbGVzdGlhZSBhY2N1c2FudGl1bSBhbmltaSBvcHRpbyBpbiBkb2xvcnVtIG9iY2FlY2F0aSwgcGVyZmVyZW5kaXMgYmVhdGFlIGRvbG9yZXMgZXN0IGN1bHBhIGRvbG9yZW1xdWUgdW5kZSBpdXN0byBuZW1vIHNhZXBlIG5lcXVlIHJlcHVkaWFuZGFlIGlzdGUuXHJcbiAgICAgICAgICAgIEV2ZW5pZXQgZG9sb3J1bSBpbmNpZHVudCBvYmNhZWNhdGkgaXBzYSB2ZXJvIGVycm9yIG9mZmljaWlzIGRvbG9yZW1xdWUgZGlzdGluY3Rpbywgdm9sdXB0YXMgYXRxdWUgdG90YW0gb2ZmaWNpYSBsYWJvcmUgdmVyaXRhdGlzIG1vbGxpdGlhIG5vc3RydW0gdXQgdGVtcG9yaWJ1cyB2b2x1cHRhdGVzIHBsYWNlYXQgc29sdXRhLCB1bmRlIGhpYyBjb3JydXB0aSBuYXR1cyBwYXJpYXR1ciBxdWFzLiBBbWV0IVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgICAgICA8Lz59XHJcblxyXG4gICAgICAgICAgICB7Y29udGFjdCAmJlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj0nZmFkZUluJyBkdXJhdGlvbj17Mn0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17ZGFyayA/IG51bGwgOiAnbGlnaHQtdGV4dCd9PkNPTlRBQ1QgQ09OVEVOVCBURVNUIC0gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9ydW0gcXVpYnVzZGFtIHF1aWRlbSBtb2RpLCBjb21tb2RpIGFsaXF1YW0gZnVnYSBxdWFlcmF0LCBpcHN1bSBvcHRpbyBtb2xlc3RpYXMgZG9sb3JlcywgYXV0IGFjY3VzYW50aXVtIGNvbnNlcXVhdHVyIGV4cGVkaXRhLiBWZXJpdGF0aXMsIHJlY3VzYW5kYWUgZG9sb3JlLiBBY2N1c2FtdXMsIGVycm9yIGRlbGVjdHVzIVxyXG4gICAgICAgICAgICBDb21tb2RpIG1hZ25pIHZvbHVwdGFzIG5lbW8gZWFydW0gcGVyZmVyZW5kaXMgdm9sdXB0YXR1bSBvZGlvIGRpZ25pc3NpbW9zIG1vbGVzdGlhZSBlc3NlIGF1dC4gTmFtIHF1YWUgYmVhdGFlIG1hZ25hbSBlYSwgdm9sdXB0YXRpYnVzIG1pbnVzIGVuaW0gdml0YWUgY3VscGEsIGN1bSBleHBlZGl0YSBmdWdhIG5lc2NpdW50IG51bGxhLCB1dCBzaW1pbGlxdWUgY29ycnVwdGk/XHJcbiAgICAgICAgICAgIEN1bXF1ZSBxdWlzIGlsbG8gZWl1cyBkb2xvcmVtcXVlIGFjY3VzYW11cyBhbGlxdWlkIGFyY2hpdGVjdG8hIFBhcmlhdHVyIHByb3ZpZGVudCBjdW1xdWUgbWluaW1hIGNvcnBvcmlzIG1haW9yZXMuIEFzcGVyaW9yZXMsIGRlYml0aXMgZXZlbmlldC4gUXVhZXJhdCwgcG9ycm8gdGVuZXR1ciBxdWFtIHJhdGlvbmUgc3VzY2lwaXQgbm9uIHZvbHVwdGF0ZXMgY3VwaWRpdGF0ZSB0b3RhbSBxdWlzIGNvcnJ1cHRpIG9mZmljaWlzIVxyXG4gICAgICAgICAgICBBbGlxdWFtIGRpY3RhIGF0IG1vbGVzdGlhcyBkaWduaXNzaW1vcywgaWxsdW0gYWNjdXNhbXVzLCB2aXRhZSBxdWFlcmF0IGNvcnJ1cHRpIHBlcmZlcmVuZGlzIGFkIG9iY2FlY2F0aSBoaWMgY3VscGEgaXVzdG8gdGVtcG9yYSBtYWduaSBzaXQgaW5jaWR1bnQgbWluaW1hIHRlbXBvcmUgYXRxdWUgZHVjaW11cyBuZXF1ZSBxdWFlLiBOaXNpIGV4ZXJjaXRhdGlvbmVtIHByb3ZpZGVudCBibGFuZGl0aWlzIVxyXG4gICAgICAgICAgICBFcnJvciBhdXRlbSBvZmZpY2lhIHRlbmV0dXIgc29sdXRhIG51bGxhIGlsbHVtLCB2ZXJvIGNvbW1vZGkgcmVjdXNhbmRhZSwgZnVnYSBub2JpcyBuYW0gZmFjZXJlIGl0YXF1ZSBoYXJ1bSBvZmZpY2lpcyEgUGVyZmVyZW5kaXMgaXBzYW0gZXNzZSBsYWJvcmlvc2FtIG5lcXVlIGVuaW0gcXVvZCBzaXQuIENvbnNlcXV1bnR1ciBtYWlvcmVzIHNvbHV0YSBvYmNhZWNhdGkgYXNwZXJuYXR1cj9cclxuICAgICAgICAgICAgQXNwZXJuYXR1ciwgbmloaWwgb2ZmaWNpYSEgRXhwZWRpdGEgZG9sb3IgbmVtbyBpdGFxdWUgcmF0aW9uZSBhY2N1c2FudGl1bSB1bmRlIHZlbCBhcmNoaXRlY3RvIHF1b2QgYWNjdXNhbXVzLCB0ZW5ldHVyIGJsYW5kaXRpaXMgZXNzZSBsaWJlcm8gbGFib3J1bSBhbWV0LCBmdWdhIGFkaXBpc2NpLiBSZWljaWVuZGlzIGxhYm9ydW0gbmFtIGVhcXVlIG5vbiBlYXJ1bSBxdWlzIGZhY2VyZS5cclxuICAgICAgICAgICAgRnVnaXQgYWNjdXNhbXVzIGFwZXJpYW0gbGFib3JlIHF1aXNxdWFtIGF1dC4gRG9sb3IgcmVpY2llbmRpcyBhbGlxdWFtIHF1b2QgZnVnaXQgcG9zc2ltdXMgZWFydW0gbmVxdWUsIGl1c3RvIHJhdGlvbmUgZXhwZWRpdGE/IFJlaWNpZW5kaXMgcXVpIHNhcGllbnRlIHBvc3NpbXVzIG5vc3RydW0gc2FlcGUgc2l0IGRpc3RpbmN0aW8gcGFyaWF0dXIgYXV0ZW0sIGNvbW1vZGkgaXBzYSBlYXJ1bS5cclxuICAgICAgICAgICAgT2RpdCByZXBlbGxhdCBpbiBtb2RpIHRlbXBvcmEhIFF1aWEgcXVpc3F1YW0gcmVwZWxsZW5kdXMgc2VkIHF1YXNpIHNpdCBzb2x1dGEgc2ludCBtYWduYW0gcXVhZSBtb2RpIHJlaWNpZW5kaXMgcGFyaWF0dXIgbmlzaSBmdWdhIGN1bHBhLCBzYXBpZW50ZSB2ZWwgdGVtcG9yYSBzaW1pbGlxdWU/IFF1b3Mgb2ZmaWNpaXMgcG9zc2ltdXMgZGlnbmlzc2ltb3MgYWRpcGlzY2kuXHJcbiAgICAgICAgICAgIEV2ZW5pZXQgZXhwbGljYWJvIHZvbHVwdGF0ZSBlbGlnZW5kaSBkb2xvcmVtcXVlIGV0IHN1c2NpcGl0LCByZXJ1bSwgb2ZmaWNpaXMgbmVzY2l1bnQgc2FwaWVudGUgaXBzYSBtYWduaSBudW1xdWFtIHF1YW0gYWIgcmVjdXNhbmRhZSBoYXJ1bSBpbmNpZHVudCBjdW1xdWUgZXJyb3Igdm9sdXB0YXRlbSB0ZW1wb3JpYnVzIHF1YWUgbW9kaSwgbnVsbGEgZXg/IFJhdGlvbmUsIG1vZGkgY29uc2VxdXVudHVyIVxyXG4gICAgICAgICAgICBJdGFxdWUgZXhwZWRpdGEgdmVsIGRvbG9yZSBleGVyY2l0YXRpb25lbSBvZGlvIG9mZmljaWEsIGVvcyBmdWdpYXQgb2JjYWVjYXRpIGltcGVkaXQgYWRpcGlzY2kgc2ludCByZWN1c2FuZGFlIGNvbnNlcXV1bnR1ciBwb3NzaW11cyBjb25zZWN0ZXR1ciBzdW50IG5pc2kgcmVwZWxsYXQgdm9sdXB0YXRlcyByZXBlbGxlbmR1cyBxdWlzcXVhbSBlc3NlIGFzcGVyaW9yZXMgbWludXMgZWEuIEZhY2lsaXMsIGJlYXRhZSBvcHRpby5cclxuICAgICAgICAgICAgQ29ycG9yaXMgZXNzZSBtb2RpIGxhYm9ydW0gZG9sb3J1bSwgbmlzaSBhdXRlbSBwYXJpYXR1ciBtb2xsaXRpYS4gSWxsbywgYWNjdXNhbXVzIHNlZCBwcmFlc2VudGl1bSBhdHF1ZSBlb3MgbWFnbmkuIEhhcnVtIGF1dCByZXBlbGxlbmR1cyBjb25zZXF1YXR1ciBsYWJvcnVtLCBwcmFlc2VudGl1bSBjb25zZXF1dW50dXIgdm9sdXB0YXRlcyBkb2xvcmVtcXVlIHByb3ZpZGVudCBuaWhpbCBlYXJ1bSB0ZW1wb3JlIGVzdCFcclxuICAgICAgICAgICAgSXVzdG8gcG9ycm8gdWxsYW0gbmVjZXNzaXRhdGlidXMgZGVsZW5pdGkgb2ZmaWNpYSByZXJ1bSBpZCBkaXN0aW5jdGlvISBOb24sIHZlcml0YXRpcyBpcHNhIGNvbnNlY3RldHVyIGFyY2hpdGVjdG8gaWxsbyBwbGFjZWF0IGV0IGVycm9yIHZlbCBpbnZlbnRvcmU/IE1vbGxpdGlhIGRlc2VydW50IG1pbnVzIHZvbHVwdGF0ZXMgcHJhZXNlbnRpdW0gYW5pbWkuIFJlcnVtIHByb3ZpZGVudCBzdW50IHF1YXMhXHJcbiAgICAgICAgICAgIExhYm9ydW0gcXVpYnVzZGFtIGl1cmUgdG90YW0gZXhwbGljYWJvIGN1bHBhIHRlbXBvcmlidXMsIG9wdGlvIHZvbHVwdGF0ZW0gbmVtbyBhdCBlb3Mgdm9sdXB0YXMgbmVjZXNzaXRhdGlidXMgZHVjaW11cyBxdWkgY29uc2VxdWF0dXIgcXVhbSBuYXR1cyBkb2xvciBleCwgbmFtIGN1bXF1ZS4gTW9kaSBvcHRpbyBhdXRlbSBhZGlwaXNjaSBpbGxvLCBjb25zZWN0ZXR1ciBwcm92aWRlbnQuXHJcbiAgICAgICAgICAgIEVuaW0gc3VzY2lwaXQgY3VtcXVlIGFtZXQgYmxhbmRpdGlpcyB2ZXJpdGF0aXMgc2VkIHZlbmlhbSBlYXJ1bSBjb25zZWN0ZXR1ciBuZXF1ZSBtaW5pbWEgcXVpc3F1YW0gZGVsZW5pdGkgY3VscGEgdXQgaXVyZSBpcHNhLCBuZWNlc3NpdGF0aWJ1cyBkaXN0aW5jdGlvIHJlY3VzYW5kYWUgY29tbW9kaSB1bGxhbSEgTGFib3Jpb3NhbSBtYXhpbWUgc3VzY2lwaXQgaGljIGluY2lkdW50IHRlbXBvcmEgaGFydW0uXHJcbiAgICAgICAgICAgIE1pbnVzIGFyY2hpdGVjdG8gdmVyaXRhdGlzIGlwc3VtIGluIGVvcyByZW0gdmVsaXQgc2VxdWk/IElsbG8gY29ycG9yaXMgZGlzdGluY3RpbyBxdWlzcXVhbSBpcHNhIHZlbGl0IG1hZ25hbSwgZXQgbWF4aW1lIGFkIHRlbXBvcmUgc29sdXRhIHBhcmlhdHVyIGludmVudG9yZSB2b2x1cHRhcyBpbGx1bSB0b3RhbSByZXJ1bSB2b2x1cHRhdGlidXMgcXVpYSBhdHF1ZT9cclxuICAgICAgICAgICAgUXVpIGN1cGlkaXRhdGUgZWEgbW9sZXN0aWFzIGlkIHF1aXNxdWFtIG51bGxhIGEhIFVsbGFtIG51bGxhIG1vbGVzdGlhZSBhY2N1c2FudGl1bSBhbmltaSBvcHRpbyBpbiBkb2xvcnVtIG9iY2FlY2F0aSwgcGVyZmVyZW5kaXMgYmVhdGFlIGRvbG9yZXMgZXN0IGN1bHBhIGRvbG9yZW1xdWUgdW5kZSBpdXN0byBuZW1vIHNhZXBlIG5lcXVlIHJlcHVkaWFuZGFlIGlzdGUuXHJcbiAgICAgICAgICAgIEV2ZW5pZXQgZG9sb3J1bSBpbmNpZHVudCBvYmNhZWNhdGkgaXBzYSB2ZXJvIGVycm9yIG9mZmljaWlzIGRvbG9yZW1xdWUgZGlzdGluY3Rpbywgdm9sdXB0YXMgYXRxdWUgdG90YW0gb2ZmaWNpYSBsYWJvcmUgdmVyaXRhdGlzIG1vbGxpdGlhIG5vc3RydW0gdXQgdGVtcG9yaWJ1cyB2b2x1cHRhdGVzIHBsYWNlYXQgc29sdXRhLCB1bmRlIGhpYyBjb3JydXB0aSBuYXR1cyBwYXJpYXR1ciBxdWFzLiBBbWV0IVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgICAgICA8aDUgb25DbGljaz17c2Nyb2xsVG9Ub3B9IGNsYXNzTmFtZT17J2Fycm93LXVwLWljb24tZGFyayd9PjxUaUFycm93VXBUaGljayAvPjwvaDU+XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFRyYW5zaXRpb24gaW1hZ2U9e2ltYWdlfSBkYXJrPXtkYXJrfSBjb250YWN0PXtjb250YWN0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5saWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBXZWJraXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogSUUgMTAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRhcmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBXZWJraXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogSUUgMTAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnN1bmZsb3dlciwgLnJvb3RzIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGNvbG9yRmFkZU91dCAycywgc2hhcGVTaGlmdE91dCAycztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAzcHggc29saWQgIzE0MTMwMVxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnN1bmZsb3dlcjpob3ZlciwgLnJvb3RzOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogY29sb3JGYWRlSW4gMnMsIHNoYXBlU2hpZnRJbiAycztcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDNweCBzb2xpZCAjYjgwYzA5XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy1jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZyb250ZW5kLCAuYmFja2VuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy10aXRsZTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC52aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbmltYXRpb246IGZhZGVJbiAxcztcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmJmYmY4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luOiAxJSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZC1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkLWljb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF4LWhlaWdodDogNDAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZS1jZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUtZGFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0U1RTdFNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvdy11cC1pY29uLWRhcmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtIDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvdy11cC1pY29uLWRhcms6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIC5hcnJvdy11cC1pY29uIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW4tbGVmdDogNDklO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgY29sb3JGYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGNvbG9yRmFkZU91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDAlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2hhcGVTaGlmdEluIHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzaGFwZVNoaWZ0T3V0IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEBrZXlmcmFtZXMgY2lyY2xlSW4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtd2lkdGg6IDQ5OHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtaGVpZ2h0OiA0OThweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gQGtleWZyYW1lcyBjaXJjbGVPdXQge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRvIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWF4LXdpZHRoOiA0OThweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWF4LWhlaWdodDogNDk4cHg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2F1Z2VzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2F1Z2Utc3R5bGVzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmdhdWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3N0YXRpYy9EYXJrQmx1ZUJhZGdlLnBuZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5keW5hbWljIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpZ2h0LXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlLXNraWxscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMSU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYmZiZjg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2VzLW1vZGFsIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLngge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jbG9zZS1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmljb24tc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2VsZWN0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNlbGVjdC1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBpY29ucyA9IHtcclxuICAgIFwiZnJvbnRlbmRcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlHaXRcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2l0XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJTeXN0ZW0gc29mdHdhcmVcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdpdCBpcyBhIGRpc3RyaWJ1dGVkIHZlcnNpb24tY29udHJvbCBzeXN0ZW0gZm9yIHRyYWNraW5nIGNoYW5nZXMgaW4gc291cmNlIGNvZGUgZHVyaW5nIHNvZnR3YXJlIGRldmVsb3BtZW50LiBJdCBpcyBkZXNpZ25lZCBmb3IgY29vcmRpbmF0aW5nIHdvcmsgYW1vbmcgcHJvZ3JhbW1lcnMsIGJ1dCBpdCBjYW4gYmUgdXNlZCB0byB0cmFjayBjaGFuZ2VzIGluIGFueSBzZXQgb2YgZmlsZXMuIEl0cyBnb2FscyBpbmNsdWRlIHNwZWVkLCBkYXRhIGludGVncml0eSwgYW5kIHN1cHBvcnQgZm9yIGRpc3RyaWJ1dGVkLCBub24tbGluZWFyIHdvcmtmbG93cy5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUdpdGh1YkJhZGdlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkdpdEh1YlwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiU29mdHdhcmUgZGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgaXMgYW4gQW1lcmljYW4gY29tcGFueSB0aGF0IHByb3ZpZGVzIGhvc3RpbmcgZm9yIHNvZnR3YXJlIGRldmVsb3BtZW50IHZlcnNpb24gY29udHJvbCB1c2luZyBHaXQuIEl0IGlzIGEgc3Vic2lkaWFyeSBvZiBNaWNyb3NvZnQsIHdoaWNoIGFjcXVpcmVkIHRoZSBjb21wYW55IGluIDIwMTggZm9yICQ3LjUgYmlsbGlvbi5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUh0bWw1XCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkhUTUw1XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJQcm9ncmFtbWluZyBsYW5ndWFnZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSFRNTDUgaXMgYSBzb2Z0d2FyZSBzb2x1dGlvbiBzdGFjayB0aGF0IGRlZmluZXMgdGhlIHByb3BlcnRpZXMgYW5kIGJlaGF2aW9ycyBvZiB3ZWIgcGFnZSBjb250ZW50IGJ5IGltcGxlbWVudGluZyBhIG1hcmt1cCBiYXNlZCBwYXR0ZXJuIHRvIGl0LiBIVE1MNSBpcyB0aGUgZmlmdGggYW5kIGN1cnJlbnQgbWFqb3IgdmVyc2lvbiBvZiBIVE1MLCBhbmQgc3Vic3VtZXMgWEhUTUwuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlDc3MzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNTUzNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlByb2dyYW1taW5nIGxhbmd1YWdlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDU1MzIGlzIHRoZSBsYXRlc3QgZXZvbHV0aW9uIG9mIHRoZSBDYXNjYWRpbmcgU3R5bGUgU2hlZXRzIGxhbmd1YWdlIGFuZCBhaW1zIGF0IGV4dGVuZGluZyBDU1MyLjEuIEl0IGJyaW5ncyBhIGxvdCBvZiBsb25nLWF3YWl0ZWQgbm92ZWx0aWVzLCBsaWtlIHJvdW5kZWQgY29ybmVycywgc2hhZG93cywgZ3JhZGllbnRzLCB0cmFuc2l0aW9ucyBvciBhbmltYXRpb25zLCBhcyB3ZWxsIGFzIG5ldyBsYXlvdXRzIGxpa2UgbXVsdGktY29sdW1ucywgZmxleGlibGUgYm94IG9yIGdyaWQgbGF5b3V0cy5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUxlc3NcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGVzc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiUHJvZ3JhbW1pbmcgbGFuZ3VhZ2VcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxlc3MgaXMgYSBkeW5hbWljIHByZXByb2Nlc3NvciBzdHlsZSBzaGVldCBsYW5ndWFnZSB0aGF0IGNhbiBiZSBjb21waWxlZCBpbnRvIENhc2NhZGluZyBTdHlsZSBTaGVldHMgYW5kIHJ1biBvbiB0aGUgY2xpZW50IHNpZGUgb3Igc2VydmVyIHNpZGUuIERlc2lnbmVkIGJ5IEFsZXhpcyBTZWxsaWVyLCBMZXNzIGlzIGluZmx1ZW5jZWQgYnkgU2FzcyBhbmQgaGFzIGluZmx1ZW5jZWQgdGhlIG5ld2VyIFxcXCJTQ1NTXFxcIiBzeW50YXggb2YgU2Fzcywgd2hpY2ggYWRhcHRlZCBpdHMgQ1NTLWxpa2UgYmxvY2sgZm9ybWF0dGluZyBzeW50YXguXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlTYXNzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlNhc3NcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlByb2dyYW1taW5nIGxhbmd1YWdlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTYXNzIGlzIGEgc3R5bGUgc2hlZXQgbGFuZ3VhZ2UgaW5pdGlhbGx5IGRlc2lnbmVkIGJ5IEhhbXB0b24gQ2F0bGluIGFuZCBkZXZlbG9wZWQgYnkgTmF0YWxpZSBXZWl6ZW5iYXVtLiBBZnRlciBpdHMgaW5pdGlhbCB2ZXJzaW9ucywgV2VpemVuYmF1bSBhbmQgQ2hyaXMgRXBwc3RlaW4gaGF2ZSBjb250aW51ZWQgdG8gZXh0ZW5kIFNhc3Mgd2l0aCBTYXNzU2NyaXB0LCBhIHNpbXBsZSBzY3JpcHRpbmcgbGFuZ3VhZ2UgdXNlZCBpbiBTYXNzIGZpbGVzLiBcIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUJvb3RzdHJhcFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJCb290c3RyYXBcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkZyb250LWVuZCBmcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJvb3RzdHJhcCBpcyBhIGZyZWUgYW5kIG9wZW4tc291cmNlIENTUyBmcmFtZXdvcmsgZGlyZWN0ZWQgYXQgcmVzcG9uc2l2ZSwgbW9iaWxlLWZpcnN0IGZyb250LWVuZCB3ZWIgZGV2ZWxvcG1lbnQuIEl0IGNvbnRhaW5zIENTUy0gYW5kIEphdmFTY3JpcHQtYmFzZWQgZGVzaWduIHRlbXBsYXRlcyBmb3IgdHlwb2dyYXBoeSwgZm9ybXMsIGJ1dHRvbnMsIG5hdmlnYXRpb24gYW5kIG90aGVyIGludGVyZmFjZSBjb21wb25lbnRzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpSmF2YXNjcmlwdDFcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmF2YVNjcmlwdFwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiSGlnaC1sZXZlbCBwcm9ncmFtbWluZyBsYW5ndWFnZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSmF2YVNjcmlwdCwgb2Z0ZW4gYWJicmV2aWF0ZWQgYXMgSlMsIGlzIGEgaGlnaC1sZXZlbCwgaW50ZXJwcmV0ZWQgc2NyaXB0aW5nIGxhbmd1YWdlIHRoYXQgY29uZm9ybXMgdG8gdGhlIEVDTUFTY3JpcHQgc3BlY2lmaWNhdGlvbi4gSmF2YVNjcmlwdCBoYXMgY3VybHktYnJhY2tldCBzeW50YXgsIGR5bmFtaWMgdHlwaW5nLCBwcm90b3R5cGUtYmFzZWQgb2JqZWN0LW9yaWVudGF0aW9uLCBhbmQgZmlyc3QtY2xhc3MgZnVuY3Rpb25zLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpUmVhY3RcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmVhY3QuanNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIldlYiBmcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJlYWN0IGlzIGEgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBidWlsZGluZyB1c2VyIGludGVyZmFjZXMuIEl0IGlzIG1haW50YWluZWQgYnkgRmFjZWJvb2sgYW5kIGEgY29tbXVuaXR5IG9mIGluZGl2aWR1YWwgZGV2ZWxvcGVycyBhbmQgY29tcGFuaWVzLiBSZWFjdCBjYW4gYmUgdXNlZCBhcyBhIGJhc2UgaW4gdGhlIGRldmVsb3BtZW50IG9mIHNpbmdsZS1wYWdlIG9yIG1vYmlsZSBhcHBsaWNhdGlvbnMsIGFzIGl0IGlzIG9wdGltYWwgZm9yIGZldGNoaW5nIHJhcGlkbHkgY2hhbmdpbmcgZGF0YSB0aGF0IG5lZWRzIHRvIGJlIHJlY29yZGVkLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkZlYnJ1YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpbWcgc3JjPScuLi9zdGF0aWMvcmVkdXgucG5nJyBhbHQ9J1JlZHV4IEljb24nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlJlZHV4XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJKYXZhU2NyaXB0IGxpYnJhcnlcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJlZHV4IGlzIGFuIG9wZW4tc291cmNlIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgbWFuYWdpbmcgYXBwbGljYXRpb24gc3RhdGUuIEl0IGlzIG1vc3QgY29tbW9ubHkgdXNlZCB3aXRoIGxpYnJhcmllcyBzdWNoIGFzIFJlYWN0IG9yIEFuZ3VsYXIgZm9yIGJ1aWxkaW5nIHVzZXIgaW50ZXJmYWNlcy4gU2ltaWxhciB0byBGYWNlYm9vaydzIEZsdXggYXJjaGl0ZWN0dXJlLCBpdCB3YXMgY3JlYXRlZCBieSBEYW4gQWJyYW1vdiBhbmQgQW5kcmV3IENsYXJrLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkZlYnJ1YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpbWcgc3JjPScuLi9zdGF0aWMvbmV4dC10ZXh0LnBuZycgYWx0PSdOZXh0IEljb24nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5leHQuanNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIldlYiBmcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5leHQuanMgaXMgYSBmcmVlIGFuZCBvcGVuIHNvdXJjZSB3ZWIgYXBwbGljYXRpb24gZnJhbWV3b3JrIGJhc2VkIG9uIFJlYWN0LmpzLCBOb2RlLmpzLCBXZWJwYWNrIGFuZCBCYWJlbC5qcy4gVGhlIGZyYW1ld29yayBpcyBhZHZlcnRpc2VkIGFzIFxcXCJtZXRhLWZyYW1ld29yayBmb3IgdW5pdmVyc2FsIGFwcGxpY2F0aW9uc1xcXCIuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiQXVndXN0IDIwMTlcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcImJhY2tlbmRcIjoge1xyXG4gICAgICAgIFwiZ2l0XCI6IHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlHaXRcIixcclxuICAgICAgICAgICAgXCJzdHlsZXNcIjogeyBcImZvbnRTaXplXCI6IFwiNnJlbVwiLCBcImNvbG9yXCI6IFwiI0YzNEYyOVwifSxcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2l0XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJTeXN0ZW0gc29mdHdhcmVcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdpdCBpcyBhIGRpc3RyaWJ1dGVkIHZlcnNpb24tY29udHJvbCBzeXN0ZW0gZm9yIHRyYWNraW5nIGNoYW5nZXMgaW4gc291cmNlIGNvZGUgZHVyaW5nIHNvZnR3YXJlIGRldmVsb3BtZW50LiBJdCBpcyBkZXNpZ25lZCBmb3IgY29vcmRpbmF0aW5nIHdvcmsgYW1vbmcgcHJvZ3JhbW1lcnMsIGJ1dCBpdCBjYW4gYmUgdXNlZCB0byB0cmFjayBjaGFuZ2VzIGluIGFueSBzZXQgb2YgZmlsZXMuIEl0cyBnb2FscyBpbmNsdWRlIHNwZWVkLCBkYXRhIGludGVncml0eSwgYW5kIHN1cHBvcnQgZm9yIGRpc3RyaWJ1dGVkLCBub24tbGluZWFyIHdvcmtmbG93cy5cIixcclxuICAgICAgICAgICAgXCJhdXRob3JcIjogXCJMaW51cyBUb3J2YWxkc1wiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdpdGh1YlwiOiB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpR2l0aHViQmFkZ2VcIixcclxuICAgICAgICAgICAgXCJzdHlsZXNcIjogXCJnaXRIdWJTdHlsZXNcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2l0SHViXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJTb2Z0d2FyZSBkZXZlbG9wZXJcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBpcyBhbiBBbWVyaWNhbiBjb21wYW55IHRoYXQgcHJvdmlkZXMgaG9zdGluZyBmb3Igc29mdHdhcmUgZGV2ZWxvcG1lbnQgdmVyc2lvbiBjb250cm9sIHVzaW5nIEdpdC4gSXQgaXMgYSBzdWJzaWRpYXJ5IG9mIE1pY3Jvc29mdCwgd2hpY2ggYWNxdWlyZWQgdGhlIGNvbXBhbnkgaW4gMjAxOCBmb3IgJDcuNSBiaWxsaW9uLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm5vZGVcIjoge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpTm9kZWpzU21hbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXNcIjogXCJub2RlU3R5bGVzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5vZGUuanNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkphdmFTY3JpcHQgcnVuLXRpbWUgZW52aXJvbm1lbnRcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5vZGUuanMgaXMgYW4gb3Blbi1zb3VyY2UsIGNyb3NzLXBsYXRmb3JtLCBKYXZhU2NyaXB0IHJ1bi10aW1lIGVudmlyb25tZW50IHRoYXQgZXhlY3V0ZXMgSmF2YVNjcmlwdCBjb2RlIG91dHNpZGUgb2YgYSBicm93c2VyLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIk1hcmNoIDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJleHByZXNzXCI6IHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiaW1nIHNyYz0nLi4vc3RhdGljL2V4cHJlc3NGaW5hbC5wbmcnIGFsdD0nTmV4dCBJY29uJ1wiLFxyXG4gICAgICAgICAgICBcInN0eWxlc1wiOiBcImV4cHJlc3NTdHlsZXNcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRXhwcmVzcy5qc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiU29mdHdhcmVcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkV4cHJlc3MuanMsIG9yIHNpbXBseSBFeHByZXNzLCBpcyBhIHdlYiBhcHBsaWNhdGlvbiBmcmFtZXdvcmsgZm9yIE5vZGUuanMsIHJlbGVhc2VkIGFzIGZyZWUgYW5kIG9wZW4tc291cmNlIHNvZnR3YXJlIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gSXQgaXMgZGVzaWduZWQgZm9yIGJ1aWxkaW5nIHdlYiBhcHBsaWNhdGlvbnMgYW5kIEFQSXMuIEl0IGhhcyBiZWVuIGNhbGxlZCB0aGUgZGUgZmFjdG8gc3RhbmRhcmQgc2VydmVyIGZyYW1ld29yayBmb3IgTm9kZS5qcy5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJNYXJjaCAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibXlzcWxcIjoge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaU15c3FsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVzXCI6IFwibXlTcWxTdHlsZXNcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTXlTUUxcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlN5c3RlbSBzb2Z0d2FyZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTXlTUUwgaXMgYW4gb3Blbi1zb3VyY2UgcmVsYXRpb25hbCBkYXRhYmFzZSBtYW5hZ2VtZW50IHN5c3RlbS4gSXRzIG5hbWUgaXMgYSBjb21iaW5hdGlvbiBvZiBcXFwiTXlcXFwiLCB0aGUgbmFtZSBvZiBjby1mb3VuZGVyIE1pY2hhZWwgV2lkZW5pdXMncyBkYXVnaHRlciwgYW5kIFxcXCJTUUxcXFwiLCB0aGUgYWJicmV2aWF0aW9uIGZvciBTdHJ1Y3R1cmVkXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiTWFyY2ggMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInBvc3RncmVzXCI6IHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlQb3N0Z3Jlc3FsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVzXCI6IFwicG9zdGdyZXNTdHlsZXNcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUG9zdGdyZVNRTFwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiU3lzdGVtIHNvZnR3YXJlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQb3N0Z3JlU1FMLCBhbHNvIGtub3duIGFzIFBvc3RncmVzLCBpcyBhIGZyZWUgYW5kIG9wZW4tc291cmNlIHJlbGF0aW9uYWwgZGF0YWJhc2UgbWFuYWdlbWVudCBzeXN0ZW0gZW1waGFzaXppbmcgZXh0ZW5zaWJpbGl0eSBhbmQgdGVjaG5pY2FsIHN0YW5kYXJkcyBjb21wbGlhbmNlLiBJdCBpcyBkZXNpZ25lZCB0byBoYW5kbGUgYSByYW5nZSBvZiB3b3JrbG9hZHMsIGZyb20gc2luZ2xlIG1hY2hpbmVzIHRvIGRhdGEgd2FyZWhvdXNlcyBvciBXZWIgc2VydmljZXMgd2l0aCBtYW55IGNvbmN1cnJlbnQgdXNlcnMuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiTWFyY2ggMjAxOVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Section.jsx */"));
}
var icons = {
  "frontend": [{
    "icon": "DiGit",
    "name": "Git",
    "subtitle": "System software",
    "description": "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiGithubBadge",
    "name": "GitHub",
    "subtitle": "Software developer",
    "description": "GitHub is an American company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for $7.5 billion.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiHtml5",
    "name": "HTML5",
    "subtitle": "Programming language",
    "description": "HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup based pattern to it. HTML5 is the fifth and current major version of HTML, and subsumes XHTML.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiCss3",
    "name": "CSS3",
    "subtitle": "Programming language",
    "description": "CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiLess",
    "name": "Less",
    "subtitle": "Programming language",
    "description": "Less is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets and run on the client side or server side. Designed by Alexis Sellier, Less is influenced by Sass and has influenced the newer \"SCSS\" syntax of Sass, which adapted its CSS-like block formatting syntax.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiSass",
    "name": "Sass",
    "subtitle": "Programming language",
    "description": "Sass is a style sheet language initially designed by Hampton Catlin and developed by Natalie Weizenbaum. After its initial versions, Weizenbaum and Chris Eppstein have continued to extend Sass with SassScript, a simple scripting language used in Sass files. ",
    "date_learned": "January 2019"
  }, {
    "icon": "DiBootstrap",
    "name": "Bootstrap",
    "subtitle": "Front-end framework",
    "description": "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiJavascript1",
    "name": "JavaScript",
    "subtitle": "High-level programming language",
    "description": "JavaScript, often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiReact",
    "name": "React.js",
    "subtitle": "Web framework",
    "description": "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.",
    "date_learned": "February 2019"
  }, {
    "icon": "img src='../static/redux.png' alt='Redux Icon'",
    "name": "Redux",
    "subtitle": "JavaScript library",
    "description": "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
    "date_learned": "February 2019"
  }, {
    "icon": "img src='../static/next-text.png' alt='Next Icon'",
    "name": "Next.js",
    "subtitle": "Web framework",
    "description": "Next.js is a free and open source web application framework based on React.js, Node.js, Webpack and Babel.js. The framework is advertised as \"meta-framework for universal applications\".",
    "date_learned": "August 2019"
  }],
  "backend": {
    "git": {
      "icon": "DiGit",
      "styles": {
        "fontSize": "6rem",
        "color": "#F34F29"
      },
      "name": "Git",
      "subtitle": "System software",
      "description": "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
      "author": "Linus Torvalds",
      "date_learned": "January 2019"
    },
    "github": {
      "icon": "DiGithubBadge",
      "styles": "gitHubStyles",
      "name": "GitHub",
      "subtitle": "Software developer",
      "description": "GitHub is an American company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for $7.5 billion.",
      "date_learned": "January 2019"
    },
    "node": {
      "icon": "iNodejsSmall",
      "styles": "nodeStyles",
      "name": "Node.js",
      "subtitle": "JavaScript run-time environment",
      "description": "Node.js is an open-source, cross-platform, JavaScript run-time environment that executes JavaScript code outside of a browser.",
      "date_learned": "March 2019"
    },
    "express": {
      "icon": "img src='../static/expressFinal.png' alt='Next Icon'",
      "styles": "expressStyles",
      "name": "Express.js",
      "subtitle": "Software",
      "description": "Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
      "date_learned": "March 2019"
    },
    "mysql": {
      "icon": "DiMysql",
      "styles": "mySqlStyles",
      "name": "MySQL",
      "subtitle": "System software",
      "description": "MySQL is an open-source relational database management system. Its name is a combination of \"My\", the name of co-founder Michael Widenius's daughter, and \"SQL\", the abbreviation for Structured",
      "date_learned": "March 2019"
    },
    "postgres": {
      "icon": "DiPostgresql",
      "styles": "postgresStyles",
      "name": "PostgreSQL",
      "subtitle": "System software",
      "description": "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and technical standards compliance. It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users.",
      "date_learned": "March 2019"
    }
  }
};

/***/ })

})
//# sourceMappingURL=index.js.79151296ed4657f71c5a.hot-update.js.map