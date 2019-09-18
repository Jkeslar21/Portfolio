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
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Section.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










 // import { Document, Page } from 'react-pdf';

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
      isFlipped3 = _useState3[0],
      setIsFlipped3 = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      backend = _useState4[0],
      setBackend = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      frontend = _useState5[0],
      setFrontend = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      devops = _useState6[0],
      setDevops = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeSkill = _useState7[0],
      setActiveSkill = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      resumeView = _useState8[0],
      setResumeView = _useState8[1]; // const scrollToTop = () => {
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

  var clickMeDev = function clickMeDev() {
    setDevops(true);
    setIsFlipped3(true);
  };

  var clickMeDevBack = function clickMeDevBack() {
    setDevops(false);
    setIsFlipped3(false);
    setActiveSkill(null);
  };

  var scrollToTop = function scrollToTop() {
    react_scroll__WEBPACK_IMPORTED_MODULE_2__["animateScroll"].scrollToTop();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3777555497" + " " + (classNameProp || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    id: id,
    className: "jsx-3777555497" + " " + "section-content",
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
    className: "jsx-3777555497" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3777555497" + " " + ((dark ? 'title-dark title-skills' : 'title title-skills') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, title)) : __jsx("h2", {
    className: "jsx-3777555497" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3777555497" + " " + ((dark ? 'title-dark' : 'title') || ""),
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
    className: "jsx-3777555497" + " " + 'images-modal',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3777555497" + " " + 'images',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3777555497" + " " + 'frontend',
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
    className: "jsx-3777555497" + " " + 'sunflower',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-3777555497" + " " + 'view canopy-view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3777555497" + " " + 'card-back card-back-canopy ',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3777555497" + " " + 'canopy-header margin',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3777555497" + " " + "skills-title opacity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Front End"), __jsx("div", {
    className: "jsx-3777555497" + " " + 'x opacity',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeFrontBack,
    className: "jsx-3777555497" + " " + 'close-button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "X"))), __jsx("div", {
    className: "jsx-3777555497" + " " + 'card-icons card-icons-canopy',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, icons.frontend.map(function (icon) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiHtml5" ? __jsx("div", {
      className: "jsx-3777555497" + " " + 'icon-hover front',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), " ") : icon.icon === "DiCss3" ? __jsx("div", {
      className: "jsx-3777555497" + " " + 'icon-hover front',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }), " ") : icon.icon === "DiLess" ? __jsx("div", {
      className: "jsx-3777555497" + " " + 'icon-hover front',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }), " ") : icon.icon === "DiSass" ? __jsx("div", {
      className: "jsx-3777555497" + " " + 'icon-hover front',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), " ") : icon.icon === "DiBootstrap" ? __jsx("div", {
      className: "jsx-3777555497" + " " + 'icon-hover front',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), " ") : icon.icon === "DiJavascript1" ? __jsx("div", {
      className: "jsx-3777555497" + " " + 'icon-hover front',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), " ") : icon.icon === "DiReact" ? __jsx("div", {
      className: "jsx-3777555497" + " " + 'icon-hover front',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      className: "jsx-3777555497" + " " + 'icon-hover front',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      className: "jsx-3777555497" + " " + 'icon-hover front',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }) : null);
  })))))), __jsx("div", {
    className: "jsx-3777555497" + " " + 'devOps',
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
    className: "jsx-3777555497" + " " + 'devops',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-3777555497" + " " + 'view dev-view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3777555497" + " " + 'card-back-dev card-back-devops',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3777555497" + " " + 'dev-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3777555497" + " " + "skills-title-dev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "DevOps"), __jsx("div", {
    className: "jsx-3777555497" + " " + 'x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeDevBack,
    className: "jsx-3777555497" + " " + 'close-button-dev',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "X"))), __jsx("div", {
    className: "jsx-3777555497" + " " + 'card-icons-dev',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, icons.devops.map(function (icon) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiGit" ? __jsx("div", {
      className: "jsx-3777555497" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }), " ") : icon.icon === "DiGithubBadge" ? __jsx("div", {
      className: "jsx-3777555497" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      className: "jsx-3777555497" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      className: "jsx-3777555497" + " " + 'heroku icon-hover',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }) : null);
  })))))), __jsx("div", {
    className: "jsx-3777555497" + " " + 'backend',
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
    className: "jsx-3777555497" + " " + 'roots',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-3777555497" + " " + 'view canopy-view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3777555497" + " " + 'card-back card-back-canopy ',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3777555497" + " " + 'canopy-header margin-back',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3777555497" + " " + 'skills-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Back End"), __jsx("div", {
    className: "jsx-3777555497" + " " + 'x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeBackFront,
    className: "jsx-3777555497" + " " + 'close-button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "X"))), __jsx("div", {
    className: "jsx-3777555497" + " " + 'card-icons',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, icons.backend.map(function (icon) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiGit" ? __jsx("div", {
      className: "jsx-3777555497" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }), " ") : icon.icon === "DiGithubBadge" ? __jsx("div", {
      className: "jsx-3777555497" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }), " ") : icon.icon === "iNodejsSmall" ? __jsx("div", {
      className: "jsx-3777555497" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      className: "jsx-3777555497" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      className: "jsx-3777555497" + " " + 'icon-hover',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }) : icon.icon === "DiMysql" ? __jsx("div", {
      className: "jsx-3777555497" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }), " ") : icon.icon === "DiPostgresql" ? __jsx("div", {
      className: "jsx-3777555497" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }), " ") : null);
  }))))))), __jsx("div", {
    className: "jsx-3777555497" + " " + 'modal',
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
    className: "jsx-3777555497" + " " + ((activeSkill ? "icon-selected" : "select-icon") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Select an Icon") : __jsx("h6", {
    className: "jsx-3777555497" + " " + 'select-image',
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
    className: "jsx-3777555497" + " " + 'gauges',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3777555497" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3777555497" + " " + 'gauge',
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
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Efficient"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "maximum productivity; well-organized")), __jsx("div", {
    className: "jsx-3777555497" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3777555497" + " " + 'gauge',
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
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Responsive"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "optimized layouts for all devices")), __jsx("div", {
    className: "jsx-3777555497" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3777555497" + " " + 'gauge',
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
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "Creative"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "highest quality solutions provided")), __jsx("div", {
    className: "jsx-3777555497" + " " + 'gauge-styles dynamic',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3777555497" + " " + 'gauge',
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
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Dynamic"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-3777555497",
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
    className: "jsx-3777555497" + " " + ((dark ? null : 'light-text') || ""),
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
    className: "jsx-3777555497" + " " + 'resume-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx("a", {
    href: "../static/resume.pdf",
    download: true,
    className: "jsx-3777555497",
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
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, __jsx("summary", {
    onClick: function onClick() {
      return setResumeView(!resumeView);
    },
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, resumeView ? __jsx("div", {
    className: "jsx-3777555497" + " " + 'resume-imgs',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx("img", {
    src: "../static/resume-header.png",
    alt: "resume-header",
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }), __jsx("img", {
    src: "../static/resumeTop.png",
    alt: "resume-bottom",
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }), __jsx("img", {
    src: "../static/resumeBottom.png",
    alt: "resume-top",
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("img", {
    src: "../static/resume-header.png",
    alt: "resume-header",
    className: "jsx-3777555497" + " " + 'resume-header',
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
  }, __jsx("form", {
    action: "https://formcarry.com/s/bN9Y1F-wrzW",
    method: "POST",
    "accept-charset": "UTF-8",
    className: "jsx-3777555497" + " " + 'form-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "name",
    required: true,
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }), __jsx("input", {
    type: "email",
    name: "email",
    required: true,
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    name: "message",
    required: true,
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }), __jsx("input", {
    type: "hidden",
    name: "_gotcha",
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }), __jsx("button", {
    className: "jsx-3777555497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, "Submit"))), __jsx("h5", {
    onClick: scrollToTop,
    className: "jsx-3777555497" + " " + 'arrow-up-icon-dark',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_4__["TiArrowUpThick"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  })))), __jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: image,
    dark: dark,
    contact: contact,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3777555497",
    __self: this
  }, ".light.jsx-3777555497{background-color:#e5e7e6;margin-top:-5px;font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.dark.jsx-3777555497{background-color:#000c1f;margin-top:-5px;color:#e5e7e6;font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.images.jsx-3777555497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1%;padding-top:2%;}.sunflower.jsx-3777555497,.roots.jsx-3777555497,.devops.jsx-3777555497{max-width:100%;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-animation:colorFadeOut-jsx-3777555497 2s,shapeShiftOut-jsx-3777555497 2s;animation:colorFadeOut-jsx-3777555497 2s,shapeShiftOut-jsx-3777555497 2s;border-radius:50%;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.sunflower.jsx-3777555497:hover,.roots.jsx-3777555497:hover,.devops.jsx-3777555497:hover{width:100%;height:100%;cursor:pointer;-webkit-animation:colorFadeIn-jsx-3777555497 2s,shapeShiftIn-jsx-3777555497 2s;animation:colorFadeIn-jsx-3777555497 2s,shapeShiftIn-jsx-3777555497 2s;-webkit-filter:grayscale(0%);filter:grayscale(0%);border-radius:12px;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.skills-card.jsx-3777555497{width:33%;height:420px;}.frontend.jsx-3777555497,.backend.jsx-3777555497{max-width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.titles.jsx-3777555497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border:1px solid red;padding:2%;}.skills-title.jsx-3777555497{font-size:2.1rem;}.skills-title.jsx-3777555497:hover{cursor:pointer;}.view.jsx-3777555497{opacity:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:100%;background:#fbfbf8;border-radius:12px;padding:2% 4%;cursor:pointer;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.canopy-view.jsx-3777555497{width:680px;height:350px;}.dev-view.jsx-3777555497{width:680px;height:75px;}.roots-view.jsx-3777555497{width:670px;height:350px;}.card-back.jsx-3777555497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:100%;max-height:100%;}.card-back-canopy.jsx-3777555497{max-width:100%;max-height:100%;color:black;border-radius:12px;}.card-back-devops.jsx-3777555497{color:#e5e7e6;max-width:100%;max-height:100%;width:680px;height:75px;border-radius:12px;}.card-back-roots.jsx-3777555497{color:#e5e7e6;max-width:100%;max-height:100%;width:670px;height:350px;border-radius:12px;}.card-icons.jsx-3777555497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;max-width:100%;}.card-icons-canopy.jsx-3777555497{padding:2%;}.icon-hover.jsx-3777555497{opacity:.5;}.icon-hover.jsx-3777555497:hover{opacity:1;}.card-icons-dev.jsx-3777555497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;max-width:100%;margin:-6% 5%;}.dev-header.jsx-3777555497{color:#000c1f;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-weight:bolder;}.canopy-header.jsx-3777555497{color:#000c1f;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:680px;margin-top:-65px;}.skills-title-dev.jsx-3777555497{color:#000c1f;}.close-button-dev.jsx-3777555497{color:#000c1f;margin:none;padding:none;}h2.jsx-3777555497{font-size:4rem;padding-top:2%;padding-bottom:2%;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding-left:2%;}p.jsx-3777555497{padding-left:2%;line-height:1.8;padding-top:2%;}.title-center.jsx-3777555497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.title.jsx-3777555497{color:#000c1f;margin-right:2%;margin-top:6%;}.title-dark.jsx-3777555497{margin-right:2%;color:#E5E7E6;margin-top:6%;}.arrow-up-icon-dark.jsx-3777555497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#e5e7e6;font-size:4rem;position:relative;top:300px;}.arrow-up-icon-dark.jsx-3777555497:hover{cursor:pointer;}@-webkit-keyframes colorFadeIn-jsx-3777555497{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@keyframes colorFadeIn-jsx-3777555497{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@-webkit-keyframes colorFadeOut-jsx-3777555497{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@keyframes colorFadeOut-jsx-3777555497{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@-webkit-keyframes shapeShiftIn-jsx-3777555497{from{border-radius:50%;}to{border-radius:12px;}}@keyframes shapeShiftIn-jsx-3777555497{from{border-radius:50%;}to{border-radius:12px;}}@-webkit-keyframes shapeShiftOut-jsx-3777555497{from{border-radius:12px;}to{border-radius:50%;}}@keyframes shapeShiftOut-jsx-3777555497{from{border-radius:12px;}to{border-radius:50%;}}@-webkit-keyframes fadeIn-jsx-3777555497{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-3777555497{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadeOut-jsx-3777555497{from{opacity:1;}to{opacity:0;}}@keyframes fadeOut-jsx-3777555497{from{opacity:1;}to{opacity:0;}}.animate.jsx-3777555497{opacity:1;}.gauges.jsx-3777555497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:5%;}.gauge-styles.jsx-3777555497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:200px;}.gauge.jsx-3777555497{background-image:url('../static/DarkBlueBadge.png');background-size:cover;max-width:100%;width:200px;height:175px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.dynamic.jsx-3777555497{margin-top:55px;}.light-text.jsx-3777555497{color:#000c1f;}.title-skills.jsx-3777555497{margin-top:1%;}.section-content.jsx-3777555497{margin-bottom:2%;}.modal.jsx-3777555497{width:450px;max-height:270px;margin-top:17%;max-width:100%;border-radius:12px;padding:2%;}.images-modal.jsx-3777555497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.close-button.jsx-3777555497{font-size:2.1rem;font-weight:bolder;}.icon-selected.jsx-3777555497{display:none;}.select-icon.jsx-3777555497{text-align:center;vertical-align:center;margin-top:25%;font-size:2rem;color:#000c1f;-webkit-animation:fadeIn-jsx-3777555497 2s;animation:fadeIn-jsx-3777555497 2s;}.select-image.jsx-3777555497{text-align:center;vertical-align:center;margin-top:25%;font-size:2rem;color:#000c1f;-webkit-animation:fadeIn-jsx-3777555497 2s;animation:fadeIn-jsx-3777555497 2s;}.front.jsx-3777555497{margin:0 2%;}.margin.jsx-3777555497{margin:2% 0;}.margin-back.jsx-3777555497{margin-top:-25px;margin-bottom:2%;}.resume-container.jsx-3777555497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.resume-imgs.jsx-3777555497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.resume-header.jsx-3777555497{-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}summary.jsx-3777555497{outline:none;cursor:pointer;}summary.jsx-3777555497::-webkit-details-marker{display:none;}a.jsx-3777555497{color:#b7b5b3;}a.jsx-3777555497:hover{border-bottom:2px solid #4ad5ff;cursor:pointer;color:#000c1f;}.form-container.jsx-3777555497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:2px solid white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcU2VjdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaVVvQixBQUc4QyxBQVlBLEFBWVosQUFVRSxBQVdKLEFBWUQsQUFNSyxBQVVGLEFBT0ksQUFNRixBQUtMLEFBa0JFLEFBSUEsQUFJQSxBQUlDLEFBV0UsQUFPRCxBQVNBLEFBUUQsQUFVRixBQUdBLEFBR0QsQUFHRyxBQU9DLEFBU0EsQUFVQSxBQUdBLEFBS0MsQUFRQyxBQUtILEFBSUMsQUFLRSxBQUtILEFBUUUsQUFVWSxBQUk1QixBQUkwQixBQUkxQixBQUl1QixBQUdDLEFBS0EsQUFHRCxBQUtSLEFBR0EsQUFLQSxBQUdBLEFBd0JKLEFBR0csQUFTQSxBQU91QyxBQVVwQyxBQUdGLEFBR0EsQUFHRyxBQUdMLEFBWUMsQUFXSSxBQUlKLEFBR0ssQUFRQSxBQWNOLEFBR0EsQUFHSyxBQUlKLEFBT0EsQUFRNkMsQUFLN0MsQUFNbEIsQUFFbUIsQUFJa0IsQUFLbkIsVUFuWkEsQUFrQ0EsQUFpRmpCLEFBa0hJLEFBR0EsQUFLQSxBQUdBLEFBd0JKLENBcFJnQixBQXlIaEIsQUFHQSxDQTVEaUIsQUFJRCxBQUlDLEFBcVBJLEFBb0RyQixBQUdBLENBNUJBLEFBdURtQixBQUtuQixDQXRUbUIsQUFTQSxBQWtDRixBQVNBLEFBVWpCLEFBR2dCLEFBc0JJLEFBK0hwQixBQUdBLEFBaUdBLENBbmEyQixBQWlDVixBQW9CakIsQUE2Q29CLEFBNkVELEFBbUNuQixDQTNCb0IsQUFjRixBQXVIbEIsQ0EzUUEsQUFvUkEsQUEwQnVCLEFBbUNGLENBdEpqQixBQVdBLEFBK0dzQixBQVFBLENBL0h0QixBQUtBLElBeE9lLEFBY25CLENBc0RBLENBbEhvQixBQVlBLEFBa0dwQixBQVFBLENBdUZpQixFQWlQakIsQ0FsVG9CLEFBU0EsQUFzTkQsQ0F6SkcsQUFpQkosQUFLQSxDQW5HRixDQXFGRyxBQThPQSxFQW5DbkIsRUFuQ0EsRUFuVjhDLENBK0o5QyxDQTJMbUIsQUFRQSxDQWhabUIsQUFZcEIsRUF5SEssQ0E4RnZCLEFBS0EsQUFtSW1CLENBL05ILEFBU0EsRUFxRWhCLEFBOE9rQixDQXRQSyxFQThDbkIsQUFLQSxFQThFc0IsRUF0RnRCLEFBV0EsQ0EzUGtDLEFBNFhuQixBQVFBLEVBcFFILEFBU0MsQ0FnUzBDLENBekVwQyxFQTRGdkIsQ0FuVUEsT0FwR2dELEFBNEd6QixDQVNBLEFBbVBMLEFBUUEsSUEvWVcsQUFvQkgsQUFpRE8sQUFnRFAsQUFtQ0gsQUFtQkosQUErQ1EsQUFjQSxBQXdGSixBQVNVLEFBUWQsQUFpQ2MsQUFrRFAsQUFPQSxBQThCQyxJQTlGWixNQW5SSSxBQWdUSyxBQVFBLElBcFlLLEFBZ0k3QixBQXVDdUIsQUFTQSxDQTVIRyxBQXFGMUIsQUE2TGdCLEFBNkJoQixVQTlXMEIsRUFrVlQsWUF0VVMsQUF1YTRCLENBaEdyQyxPQWxWUSxVQTBLUSxJQTlKUixNQTJFRixBQXVISCxDQTdNSSxDQXNKTCxBQXdLQSxTQTVTSSxBQWlHSSxBQStTSixBQVF1QyxJQTladEMsQ0FxS0QsQUFTQSxBQW9CdkIsS0E3TXFCLEFBcVlyQixBQVFBLENBb0NBLElBcFh1QixNQTBKdkIsQUFja0IsQUFpT1EsR0ExYkwsV0EwTkQsQ0E5TEssQUF5U0UsU0EvUUYsQUFvUUMsQUF5QzFCLEdBek5rQyxBQXdLbkIsRUF2Rk8sUUFqSlksQUFvVnlCLENBM0cxQixPQTFQbEMsRUFtS2UsR0E1TVEsTUF5Q3RCLENBb0tBLFFBaE11QixHQVh1QyxJQVgvQyxBQStZWSxFQWphM0IsR0FnTGtDLEFBU0EsQ0F2RVgsQUFvVkksR0E5UlIsRUFySkEsQ0F1QjJDLEdBbUI5RCxDQWpEQSxJQThac0QsSUFqUXBDLEVBckpsQixHQW1iQSxDQWpJb0IsUUE1SnBCLElBdUt1QixJQVR2QixRQTFTMkQsZ0JBYUEsQUEyRzVDLEFBcVJmLFVBclZtQixDQWlFQSxRQXdLSSxNQXhPQSxDQW1FdkIsR0FyQ21CLEFBNlNuQixVQW5Zc0QsS0F5RC9CLEFBOEJILE1BNERHLEFBUVAsS0E5SXNDLEtBMkV0RCxFQXFFcUIsQ0FuR0gsRUF5UGxCLElBL0pBLFFBeEZtQixFQWtHbkIsVUE3SkEsR0E0RDhELGFBL0M5RCxPQW1Sa0IsY0FDbEIsd0JBcE8yRCx1REFDTCxrREFHdEQiLCJmaWxlIjoiQzpcXFVzZXJzXFxkaWFtb1xcRGVza3RvcFxcR2l0RmlsZXNcXFBvcnRmb2xpb1xcY2xpZW50XFxjb21wb25lbnRzXFxTZWN0aW9uLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcclxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9UcmFuc2l0aW9uJ1xyXG5pbXBvcnQgeyBUaUFycm93VXBUaGljayB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuaW1wb3J0IFJlYWN0Q2FyZEZsaXAgZnJvbSAncmVhY3QtY2FyZC1mbGlwJztcclxuaW1wb3J0IHsgRGlSZWFjdCwgRGlKYXZhc2NyaXB0MSwgRGlCb290c3RyYXAsIERpU2FzcywgRGlMZXNzLCBEaUNzczMsIERpSHRtbDUsIERpR2l0aHViQmFkZ2UsIERpR2l0LCBEaU5vZGVqc1NtYWxsLCBEaU15c3FsLCBEaVBvc3RncmVzcWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvZGlcIjtcclxuaW1wb3J0IHsgRmFDaGFydExpbmUsIEZhR2xvYmVBbWVyaWNhcyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBNZFBob25lbGluaywgTWRMaWdodGJ1bGJPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCBBY3RpdmVDYXJkIGZyb20gJy4vaWNvbi9BY3RpdmVDYXJkJ1xyXG5pbXBvcnQgeyBGaURvd25sb2FkIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbi8vIGltcG9ydCB7IERvY3VtZW50LCBQYWdlIH0gZnJvbSAncmVhY3QtcGRmJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3Rpb24oe3RpdGxlLCBpZCwgaW1hZ2UsIGNsYXNzTmFtZVByb3AsIGRhcmssIHNraWxscywgcG9ydGZvbGlvLCByZXN1bWUsIGNvbnRhY3R9KSB7XHJcbiAgICBjb25zdCBbaXNGbGlwcGVkLCBzZXRJc0ZsaXBwZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNGbGlwcGVkMiwgc2V0SXNGbGlwcGVkMl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc0ZsaXBwZWQzLCBzZXRJc0ZsaXBwZWQzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2JhY2tlbmQsIHNldEJhY2tlbmRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZnJvbnRlbmQsIHNldEZyb250ZW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2Rldm9wcywgc2V0RGV2b3BzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2FjdGl2ZVNraWxsLCBzZXRBY3RpdmVTa2lsbF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW3Jlc3VtZVZpZXcsIHNldFJlc3VtZVZpZXddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgLy8gY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgc2Nyb2xsLnNjcm9sbFRvVG9wKClcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBjbGlja01lRnJvbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RnJvbnRlbmQodHJ1ZSlcclxuICAgICAgICBzZXRJc0ZsaXBwZWQodHJ1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrTWVGcm9udEJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RnJvbnRlbmQoZmFsc2UpXHJcbiAgICAgICAgc2V0SXNGbGlwcGVkKGZhbHNlKVxyXG4gICAgICAgIHNldEFjdGl2ZVNraWxsKG51bGwpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja01lQmFjayA9ICgpID0+IHtcclxuICAgICAgICBzZXRCYWNrZW5kKHRydWUpXHJcbiAgICAgICAgc2V0SXNGbGlwcGVkMih0cnVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tNZUJhY2tGcm9udCA9ICgpID0+IHtcclxuICAgICAgICBzZXRCYWNrZW5kKGZhbHNlKVxyXG4gICAgICAgIHNldElzRmxpcHBlZDIoZmFsc2UpXHJcbiAgICAgICAgc2V0QWN0aXZlU2tpbGwobnVsbClcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrTWVEZXYgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RGV2b3BzKHRydWUpXHJcbiAgICAgICAgc2V0SXNGbGlwcGVkMyh0cnVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tNZURldkJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RGV2b3BzKGZhbHNlKVxyXG4gICAgICAgIHNldElzRmxpcHBlZDMoZmFsc2UpXHJcbiAgICAgICAgc2V0QWN0aXZlU2tpbGwobnVsbClcclxuICAgIH1cclxuICAgIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHNjcm9sbC5zY3JvbGxUb1RvcCgpXHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVQcm9wfT5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtcInNlY3Rpb25cIiArIChkYXJrID8gXCIgc2VjdGlvbi1kYXJrXCIgOiBcIlwiKX0+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50XCIgaWQ9e2lkfT5cclxuICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49J2ZhZGVJbicgZHVyYXRpb249ezJ9PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB7c2tpbGxzID8gPGgyIGNsYXNzTmFtZT0ndGl0bGUtY2VudGVyJz48c3BhbiBjbGFzc05hbWU9e2RhcmsgPyAndGl0bGUtZGFyayB0aXRsZS1za2lsbHMnIDogJ3RpdGxlIHRpdGxlLXNraWxscyd9Pnt0aXRsZX08L3NwYW4+PC9oMj4gOiA8aDIgY2xhc3NOYW1lPSd0aXRsZS1jZW50ZXInPjxzcGFuIGNsYXNzTmFtZT17ZGFyayA/ICd0aXRsZS1kYXJrJyA6ICd0aXRsZSd9Pnt0aXRsZX08L3NwYW4+PC9oMj59XHJcblxyXG4gICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgey8qIER5bmFtaWMgU2VjdGlvbnMgKi99XHJcblxyXG4gICAgICAgICAgICB7c2tpbGxzICYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlcy1tb2RhbCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2VzJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZnJvbnRlbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RDYXJkRmxpcCBpc0ZsaXBwZWQ9e2lzRmxpcHBlZH0gZmxpcERpcmVjdGlvbj0naG9yaXpvbnRhbCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGNsYXNzTmFtZT17J3N1bmZsb3dlcid9IHNyYz0nLi4vc3RhdGljL3RyZWVGSU5BTC5wbmcnIGFsdD0nVHJlZSBDYW5vcHkgSW1hZ2UnIGtleT17ZnJvbnRlbmQgPyBudWxsIDogJ2Zyb250J30gb25DbGljaz17Y2xpY2tNZUZyb250fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGgyIGtleT0nZnJvbnQnIHN0eWxlPXt7IGNvbG9yOiAncGluaycsIHpJbmRleDogODB9fT5Gcm9udCBFbmQ8L2gyPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndmlldyBjYW5vcHktdmlldyd9IGtleT0nYmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJhY2sgY2FyZC1iYWNrLWNhbm9weSAnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYW5vcHktaGVhZGVyIG1hcmdpbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNraWxscy10aXRsZSBvcGFjaXR5XCI+RnJvbnQgRW5kPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0neCBvcGFjaXR5Jz48cCBjbGFzc05hbWU9J2Nsb3NlLWJ1dHRvbicgb25DbGljaz17Y2xpY2tNZUZyb250QmFja30+WDwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1pY29ucyBjYXJkLWljb25zLWNhbm9weSc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbnMuZnJvbnRlbmQubWFwKGljb24gPT4gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uLmljb24gPT09IFwiRGlIdG1sNVwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnPjxEaUh0bWw1IHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnI0U1NEQyNid9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpQ3NzM1wiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnPjxEaUNzczMgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjM0Q4RkM2J319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlMZXNzXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3ZlciBmcm9udCc+PERpTGVzcyBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMyQTREODAnfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaVNhc3NcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250Jz48RGlTYXNzIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnI0NDNjY5OSd9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpQm9vdHN0cmFwXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3ZlciBmcm9udCc+PERpQm9vdHN0cmFwIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzVCNDI4Mid9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpSmF2YXNjcmlwdDFcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250Jz48RGlKYXZhc2NyaXB0MSBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNGMERCNEYnfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaVJlYWN0XCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3ZlciBmcm9udCc+PERpUmVhY3Qgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjNjFEQUZCJ319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiaW1nIHNyYz0nLi4vc3RhdGljL3JlZHV4LnBuZycgYWx0PSdSZWR1eCBJY29uJ1wiID8gPGltZyBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnIHNyYz0nLi4vc3RhdGljL3JlZHV4LnBuZycgYWx0PSdSZWR1eCBJY29uJyBzdHlsZT17eyB3aWR0aDogJzc1cHgnLCBtYXhIZWlnaHQ6ICc3MHB4JywgbWFyZ2luOiAnMSUnIH19IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiaW1nIHNyYz0nLi4vc3RhdGljL25leHQtdGV4dC5wbmcnIGFsdD0nTmV4dCBJY29uJ1wiID8gPGltZyBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnIHNyYz0nLi4vc3RhdGljL25leHQtdGV4dC5wbmcnIGFsdD0nTmV4dCBJY29uJyBzdHlsZT17eyB3aWR0aDogJzc1cHgnLCBtYXhIZWlnaHQ6ICc3NXB4JywgbWFyZ2luUmlnaHQ6ICc1JScgfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gLz4gIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0Q2FyZEZsaXA+ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rldk9wcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdENhcmRGbGlwIGlzRmxpcHBlZD17aXNGbGlwcGVkM30gZmxpcERpcmVjdGlvbj0naG9yaXpvbnRhbCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBjbGFzc05hbWU9eydkZXZvcHMnfSBzcmM9Jy4uL3N0YXRpYy9kZXZvcHMucG5nJyBhbHQ9J1RyZWUgQ2Fub3B5IEltYWdlJyBrZXk9e2Rldm9wcyA/IG51bGwgOiAnZnJvbnQnfSBvbkNsaWNrPXtjbGlja01lRGV2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3ZpZXcgZGV2LXZpZXcnfSBrZXk9J2JhY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1iYWNrLWRldiBjYXJkLWJhY2stZGV2b3BzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rldi1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJza2lsbHMtdGl0bGUtZGV2XCI+RGV2T3BzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0neCc+PHAgY2xhc3NOYW1lPSdjbG9zZS1idXR0b24tZGV2JyBvbkNsaWNrPXtjbGlja01lRGV2QmFja30+WDwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWljb25zLWRldic+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbnMuZGV2b3BzLm1hcChpY29uID0+IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbi5pY29uID09PSBcIkRpR2l0XCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3Zlcic+PERpR2l0IHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnI0YzNEYyOSd9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpR2l0aHViQmFkZ2VcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyJz48RGlHaXRodWJCYWRnZSBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMxODE2MTYnfX0gIG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiTmV0bGlmeVwiID8gPGltZyBjbGFzc05hbWU9J2ljb24taG92ZXInIHNyYz0nLi4vc3RhdGljL25ldGxpZnkucG5nJyBhbHQ9J05ldGxpZnkgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc3NXB4JywgaGVpZ2h0OiAnNzVweCcsIG1hcmdpblRvcDogJzIuMjUlJywgcGFkZGluZ0xlZnQ6ICcyJScgfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJIZXJva3VcIiA/IDxpbWcgY2xhc3NOYW1lPSdoZXJva3UgaWNvbi1ob3Zlcicgc3JjPScuLi9zdGF0aWMvaGVyb2t1dS5wbmcnIGFsdD0nSGVyb2t1IEljb24nIHN0eWxlPXt7IHdpZHRoOiAnOTBweCcsIGhlaWdodDogJzkwcHgnLCBtYXJnaW5Ub3A6ICcxJScsIHBhZGRpbmdMZWZ0OiAnMiUnfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPil9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3RDYXJkRmxpcD4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFja2VuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdENhcmRGbGlwIGlzRmxpcHBlZD17aXNGbGlwcGVkMn0gZmxpcERpcmVjdGlvbj0naG9yaXpvbnRhbCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3Jvb3RzJyBzcmM9Jy4uL3N0YXRpYy9yb290cy5wbmcnIGFsdD0nUm9vdHMgSW1hZ2UnIGtleT17YmFja2VuZCA/IG51bGwgOiAnZnJvbnQnfSBvbkNsaWNrPXtjbGlja01lQmFja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndmlldyBjYW5vcHktdmlldyd9IGtleT0nYmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1iYWNrIGNhcmQtYmFjay1jYW5vcHkgJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2Fub3B5LWhlYWRlciBtYXJnaW4tYmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3NraWxscy10aXRsZSc+QmFjayBFbmQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0neCc+PHAgY2xhc3NOYW1lPSdjbG9zZS1idXR0b24nIG9uQ2xpY2s9e2NsaWNrTWVCYWNrRnJvbnR9Plg8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWljb25zJz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ucy5iYWNrZW5kLm1hcChpY29uID0+IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uLmljb24gPT09IFwiRGlHaXRcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyJz48RGlHaXQgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjRjM0RjI5J319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlHaXRodWJCYWRnZVwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXInPjxEaUdpdGh1YkJhZGdlIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzE4MTYxNid9fSAgb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJpTm9kZWpzU21hbGxcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyJz48RGlOb2RlanNTbWFsbCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyM4M0NEMjknfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJpbWcgc3JjPScuLi9zdGF0aWMvZXhwcmVzc0ZpbmFsLnBuZycgYWx0PSdFeHByZXNzIEljb24nXCIgPyA8aW1nIGNsYXNzTmFtZT0naWNvbi1ob3Zlcicgc3JjPScuLi9zdGF0aWMvZXhwcmVzc0ZpbmFsLnBuZycgYWx0PSdFeHByZXNzIEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNzVweCcsIGhlaWdodDogJzc1cHgnLCBtYXJnaW5Ub3A6ICcyJScsIHBhZGRpbmdMZWZ0OiAnMiUnIH19IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiaW1nIHNyYz0nLi4vc3RhdGljL2tuZXhqcy5wbmcnIGFsdD0nS25leC5qcyBJY29uJ1wiID8gPGltZyBjbGFzc05hbWU9J2ljb24taG92ZXInIHNyYz0nLi4vc3RhdGljL2tuZXhqcy5wbmcnIGFsdD0nS25leC5qcyBJY29uJyBzdHlsZT17eyB3aWR0aDogJzc1cHgnLCBoZWlnaHQ6ICc3NXB4JywgbWFyZ2luVG9wOiAnMiUnLCBwYWRkaW5nTGVmdDogJzIlJyB9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpTXlzcWxcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyJz48RGlNeXNxbCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMwMDYxOEEnLCBtYXJnaW5MZWZ0OiAnMTQlJ319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlQb3N0Z3Jlc3FsXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3Zlcic+PERpUG9zdGdyZXNxbCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMzMzY3OTEnLCBtYXJnaW5SaWdodDogJzEyJSd9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0Q2FyZEZsaXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbCc+XHJcbiAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj0nZmFkZUluJyBkdXJhdGlvbj17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHtmcm9udGVuZCB8fCBiYWNrZW5kIHx8IGRldm9wcyA/IDxoNiBjbGFzc05hbWU9e2FjdGl2ZVNraWxsID8gXCJpY29uLXNlbGVjdGVkXCIgOiBcInNlbGVjdC1pY29uXCJ9PlNlbGVjdCBhbiBJY29uPC9oNj4gOiA8aDYgY2xhc3NOYW1lPSdzZWxlY3QtaW1hZ2UnPlNlbGVjdCBhbiBJbWFnZTwvaDY+fVxyXG4gICAgICAgICAgICAgICAgICAgICB7YWN0aXZlU2tpbGwgJiYgPEFjdGl2ZUNhcmQgYWN0aXZlU2tpbGw9e2FjdGl2ZVNraWxsfSAvPiB9XHJcbiAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZXMnPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBlZmZpY2llbnQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2Utc3R5bGVzJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9Jy4uL3N0YXRpYy9EYXJrQmFkZ2UucG5nJyB3aWR0aD17MTc1fSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhQ2hhcnRMaW5lIHN0eWxlPXt7IGNvbG9yOiAnI0U1RTdFNicsIGZvbnRTaXplOiAnNnJlbScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjMDAwYzFmJywgZm9udFdlaWdodDogJ2JvbGRlcid9fT5FZmZpY2llbnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwICBzdHlsZT17eyBjb2xvcjogJyMxNDEzMDEnfX0+bWF4aW11bSBwcm9kdWN0aXZpdHk7IHdlbGwtb3JnYW5pemVkPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIHJlc3BvbnNpdmUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2Utc3R5bGVzJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWRQaG9uZWxpbmsgc3R5bGU9e3sgY29sb3I6ICcjRTVFN0U2JywgZm9udFNpemU6ICc2cmVtJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjMDAwYzFmJywgZm9udFdlaWdodDogJ2JvbGRlcid9fT5SZXNwb25zaXZlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMxNDEzMDEnfX0+b3B0aW1pemVkIGxheW91dHMgZm9yIGFsbCBkZXZpY2VzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIGNyZWF0aXZlICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlLXN0eWxlcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1kTGlnaHRidWxiT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyNFNUU3RTYnLCBmb250U2l6ZTogJzZyZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiAnIzAwMGMxZicsIGZvbnRXZWlnaHQ6ICdib2xkZXInfX0+Q3JlYXRpdmU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnIzE0MTMwMSd9fT5oaWdoZXN0IHF1YWxpdHkgc29sdXRpb25zIHByb3ZpZGVkPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIGR5bmFtaWMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2Utc3R5bGVzIGR5bmFtaWMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYUdsb2JlQW1lcmljYXMgc3R5bGU9e3sgY29sb3I6ICcjRTVFN0U2JywgZm9udFNpemU6ICc2cmVtJyB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiAnIzAwMGMxZicsIGZvbnRXZWlnaHQ6ICdib2xkZXInfX0+RHluYW1pYzwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMTQxMzAxJ319PnJlZmxlY3RzIHJlYWwtdGltZSBjaGFuZ2VzIGluIHZhbHVlcyB3aXRoIGFjdGl2aXR5LiAgQnVpbHQgd2l0aCBEUlksIHJldXNhYmxlIGNvbXBvbmVudHMuIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgICAgIHtwb3J0Zm9saW8gJiZcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49J2ZhZGVJbicgZHVyYXRpb249ezJ9PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2RhcmsgPyBudWxsIDogJ2xpZ2h0LXRleHQnfT5QT1JURk9MSU8gQ09OVEVOVCBURVNUIC0gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9ydW0gcXVpYnVzZGFtIHF1aWRlbSBtb2RpLCBjb21tb2RpIGFsaXF1YW0gZnVnYSBxdWFlcmF0LCBpcHN1bSBvcHRpbyBtb2xlc3RpYXMgZG9sb3JlcywgYXV0IGFjY3VzYW50aXVtIGNvbnNlcXVhdHVyIGV4cGVkaXRhLiBWZXJpdGF0aXMsIHJlY3VzYW5kYWUgZG9sb3JlLiBBY2N1c2FtdXMsIGVycm9yIGRlbGVjdHVzIVxyXG4gICAgICAgICAgICBDb21tb2RpIG1hZ25pIHZvbHVwdGFzIG5lbW8gZWFydW0gcGVyZmVyZW5kaXMgdm9sdXB0YXR1bSBvZGlvIGRpZ25pc3NpbW9zIG1vbGVzdGlhZSBlc3NlIGF1dC4gTmFtIHF1YWUgYmVhdGFlIG1hZ25hbSBlYSwgdm9sdXB0YXRpYnVzIG1pbnVzIGVuaW0gdml0YWUgY3VscGEsIGN1bSBleHBlZGl0YSBmdWdhIG5lc2NpdW50IG51bGxhLCB1dCBzaW1pbGlxdWUgY29ycnVwdGk/XHJcbiAgICAgICAgICAgIEN1bXF1ZSBxdWlzIGlsbG8gZWl1cyBkb2xvcmVtcXVlIGFjY3VzYW11cyBhbGlxdWlkIGFyY2hpdGVjdG8hIFBhcmlhdHVyIHByb3ZpZGVudCBjdW1xdWUgbWluaW1hIGNvcnBvcmlzIG1haW9yZXMuIEFzcGVyaW9yZXMsIGRlYml0aXMgZXZlbmlldC4gUXVhZXJhdCwgcG9ycm8gdGVuZXR1ciBxdWFtIHJhdGlvbmUgc3VzY2lwaXQgbm9uIHZvbHVwdGF0ZXMgY3VwaWRpdGF0ZSB0b3RhbSBxdWlzIGNvcnJ1cHRpIG9mZmljaWlzIVxyXG4gICAgICAgICAgICBBbGlxdWFtIGRpY3RhIGF0IG1vbGVzdGlhcyBkaWduaXNzaW1vcywgaWxsdW0gYWNjdXNhbXVzLCB2aXRhZSBxdWFlcmF0IGNvcnJ1cHRpIHBlcmZlcmVuZGlzIGFkIG9iY2FlY2F0aSBoaWMgY3VscGEgaXVzdG8gdGVtcG9yYSBtYWduaSBzaXQgaW5jaWR1bnQgbWluaW1hIHRlbXBvcmUgYXRxdWUgZHVjaW11cyBuZXF1ZSBxdWFlLiBOaXNpIGV4ZXJjaXRhdGlvbmVtIHByb3ZpZGVudCBibGFuZGl0aWlzIVxyXG4gICAgICAgICAgICBFcnJvciBhdXRlbSBvZmZpY2lhIHRlbmV0dXIgc29sdXRhIG51bGxhIGlsbHVtLCB2ZXJvIGNvbW1vZGkgcmVjdXNhbmRhZSwgZnVnYSBub2JpcyBuYW0gZmFjZXJlIGl0YXF1ZSBoYXJ1bSBvZmZpY2lpcyEgUGVyZmVyZW5kaXMgaXBzYW0gZXNzZSBsYWJvcmlvc2FtIG5lcXVlIGVuaW0gcXVvZCBzaXQuIENvbnNlcXV1bnR1ciBtYWlvcmVzIHNvbHV0YSBvYmNhZWNhdGkgYXNwZXJuYXR1cj9cclxuICAgICAgICAgICAgQXNwZXJuYXR1ciwgbmloaWwgb2ZmaWNpYSEgRXhwZWRpdGEgZG9sb3IgbmVtbyBpdGFxdWUgcmF0aW9uZSBhY2N1c2FudGl1bSB1bmRlIHZlbCBhcmNoaXRlY3RvIHF1b2QgYWNjdXNhbXVzLCB0ZW5ldHVyIGJsYW5kaXRpaXMgZXNzZSBsaWJlcm8gbGFib3J1bSBhbWV0LCBmdWdhIGFkaXBpc2NpLiBSZWljaWVuZGlzIGxhYm9ydW0gbmFtIGVhcXVlIG5vbiBlYXJ1bSBxdWlzIGZhY2VyZS5cclxuICAgICAgICAgICAgRnVnaXQgYWNjdXNhbXVzIGFwZXJpYW0gbGFib3JlIHF1aXNxdWFtIGF1dC4gRG9sb3IgcmVpY2llbmRpcyBhbGlxdWFtIHF1b2QgZnVnaXQgcG9zc2ltdXMgZWFydW0gbmVxdWUsIGl1c3RvIHJhdGlvbmUgZXhwZWRpdGE/IFJlaWNpZW5kaXMgcXVpIHNhcGllbnRlIHBvc3NpbXVzIG5vc3RydW0gc2FlcGUgc2l0IGRpc3RpbmN0aW8gcGFyaWF0dXIgYXV0ZW0sIGNvbW1vZGkgaXBzYSBlYXJ1bS5cclxuICAgICAgICAgICAgT2RpdCByZXBlbGxhdCBpbiBtb2RpIHRlbXBvcmEhIFF1aWEgcXVpc3F1YW0gcmVwZWxsZW5kdXMgc2VkIHF1YXNpIHNpdCBzb2x1dGEgc2ludCBtYWduYW0gcXVhZSBtb2RpIHJlaWNpZW5kaXMgcGFyaWF0dXIgbmlzaSBmdWdhIGN1bHBhLCBzYXBpZW50ZSB2ZWwgdGVtcG9yYSBzaW1pbGlxdWU/IFF1b3Mgb2ZmaWNpaXMgcG9zc2ltdXMgZGlnbmlzc2ltb3MgYWRpcGlzY2kuXHJcbiAgICAgICAgICAgIEV2ZW5pZXQgZXhwbGljYWJvIHZvbHVwdGF0ZSBlbGlnZW5kaSBkb2xvcmVtcXVlIGV0IHN1c2NpcGl0LCByZXJ1bSwgb2ZmaWNpaXMgbmVzY2l1bnQgc2FwaWVudGUgaXBzYSBtYWduaSBudW1xdWFtIHF1YW0gYWIgcmVjdXNhbmRhZSBoYXJ1bSBpbmNpZHVudCBjdW1xdWUgZXJyb3Igdm9sdXB0YXRlbSB0ZW1wb3JpYnVzIHF1YWUgbW9kaSwgbnVsbGEgZXg/IFJhdGlvbmUsIG1vZGkgY29uc2VxdXVudHVyIVxyXG4gICAgICAgICAgICBJdGFxdWUgZXhwZWRpdGEgdmVsIGRvbG9yZSBleGVyY2l0YXRpb25lbSBvZGlvIG9mZmljaWEsIGVvcyBmdWdpYXQgb2JjYWVjYXRpIGltcGVkaXQgYWRpcGlzY2kgc2ludCByZWN1c2FuZGFlIGNvbnNlcXV1bnR1ciBwb3NzaW11cyBjb25zZWN0ZXR1ciBzdW50IG5pc2kgcmVwZWxsYXQgdm9sdXB0YXRlcyByZXBlbGxlbmR1cyBxdWlzcXVhbSBlc3NlIGFzcGVyaW9yZXMgbWludXMgZWEuIEZhY2lsaXMsIGJlYXRhZSBvcHRpby5cclxuICAgICAgICAgICAgQ29ycG9yaXMgZXNzZSBtb2RpIGxhYm9ydW0gZG9sb3J1bSwgbmlzaSBhdXRlbSBwYXJpYXR1ciBtb2xsaXRpYS4gSWxsbywgYWNjdXNhbXVzIHNlZCBwcmFlc2VudGl1bSBhdHF1ZSBlb3MgbWFnbmkuIEhhcnVtIGF1dCByZXBlbGxlbmR1cyBjb25zZXF1YXR1ciBsYWJvcnVtLCBwcmFlc2VudGl1bSBjb25zZXF1dW50dXIgdm9sdXB0YXRlcyBkb2xvcmVtcXVlIHByb3ZpZGVudCBuaWhpbCBlYXJ1bSB0ZW1wb3JlIGVzdCFcclxuICAgICAgICAgICAgSXVzdG8gcG9ycm8gdWxsYW0gbmVjZXNzaXRhdGlidXMgZGVsZW5pdGkgb2ZmaWNpYSByZXJ1bSBpZCBkaXN0aW5jdGlvISBOb24sIHZlcml0YXRpcyBpcHNhIGNvbnNlY3RldHVyIGFyY2hpdGVjdG8gaWxsbyBwbGFjZWF0IGV0IGVycm9yIHZlbCBpbnZlbnRvcmU/IE1vbGxpdGlhIGRlc2VydW50IG1pbnVzIHZvbHVwdGF0ZXMgcHJhZXNlbnRpdW0gYW5pbWkuIFJlcnVtIHByb3ZpZGVudCBzdW50IHF1YXMhXHJcbiAgICAgICAgICAgIExhYm9ydW0gcXVpYnVzZGFtIGl1cmUgdG90YW0gZXhwbGljYWJvIGN1bHBhIHRlbXBvcmlidXMsIG9wdGlvIHZvbHVwdGF0ZW0gbmVtbyBhdCBlb3Mgdm9sdXB0YXMgbmVjZXNzaXRhdGlidXMgZHVjaW11cyBxdWkgY29uc2VxdWF0dXIgcXVhbSBuYXR1cyBkb2xvciBleCwgbmFtIGN1bXF1ZS4gTW9kaSBvcHRpbyBhdXRlbSBhZGlwaXNjaSBpbGxvLCBjb25zZWN0ZXR1ciBwcm92aWRlbnQuXHJcbiAgICAgICAgICAgIEVuaW0gc3VzY2lwaXQgY3VtcXVlIGFtZXQgYmxhbmRpdGlpcyB2ZXJpdGF0aXMgc2VkIHZlbmlhbSBlYXJ1bSBjb25zZWN0ZXR1ciBuZXF1ZSBtaW5pbWEgcXVpc3F1YW0gZGVsZW5pdGkgY3VscGEgdXQgaXVyZSBpcHNhLCBuZWNlc3NpdGF0aWJ1cyBkaXN0aW5jdGlvIHJlY3VzYW5kYWUgY29tbW9kaSB1bGxhbSEgTGFib3Jpb3NhbSBtYXhpbWUgc3VzY2lwaXQgaGljIGluY2lkdW50IHRlbXBvcmEgaGFydW0uXHJcbiAgICAgICAgICAgIE1pbnVzIGFyY2hpdGVjdG8gdmVyaXRhdGlzIGlwc3VtIGluIGVvcyByZW0gdmVsaXQgc2VxdWk/IElsbG8gY29ycG9yaXMgZGlzdGluY3RpbyBxdWlzcXVhbSBpcHNhIHZlbGl0IG1hZ25hbSwgZXQgbWF4aW1lIGFkIHRlbXBvcmUgc29sdXRhIHBhcmlhdHVyIGludmVudG9yZSB2b2x1cHRhcyBpbGx1bSB0b3RhbSByZXJ1bSB2b2x1cHRhdGlidXMgcXVpYSBhdHF1ZT9cclxuICAgICAgICAgICAgUXVpIGN1cGlkaXRhdGUgZWEgbW9sZXN0aWFzIGlkIHF1aXNxdWFtIG51bGxhIGEhIFVsbGFtIG51bGxhIG1vbGVzdGlhZSBhY2N1c2FudGl1bSBhbmltaSBvcHRpbyBpbiBkb2xvcnVtIG9iY2FlY2F0aSwgcGVyZmVyZW5kaXMgYmVhdGFlIGRvbG9yZXMgZXN0IGN1bHBhIGRvbG9yZW1xdWUgdW5kZSBpdXN0byBuZW1vIHNhZXBlIG5lcXVlIHJlcHVkaWFuZGFlIGlzdGUuXHJcbiAgICAgICAgICAgIEV2ZW5pZXQgZG9sb3J1bSBpbmNpZHVudCBvYmNhZWNhdGkgaXBzYSB2ZXJvIGVycm9yIG9mZmljaWlzIGRvbG9yZW1xdWUgZGlzdGluY3Rpbywgdm9sdXB0YXMgYXRxdWUgdG90YW0gb2ZmaWNpYSBsYWJvcmUgdmVyaXRhdGlzIG1vbGxpdGlhIG5vc3RydW0gdXQgdGVtcG9yaWJ1cyB2b2x1cHRhdGVzIHBsYWNlYXQgc29sdXRhLCB1bmRlIGhpYyBjb3JydXB0aSBuYXR1cyBwYXJpYXR1ciBxdWFzLiBBbWV0IVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgICAgICA8Lz59XHJcblxyXG4gICAgICAgICAgICB7cmVzdW1lICYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXN1bWUtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy4uL3N0YXRpYy9yZXN1bWUucGRmJyBkb3dubG9hZD48RmlEb3dubG9hZCBzdHlsZT17eyBmb250U2l6ZTogJzIuNXJlbSd9fSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGV0YWlscyBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnkgb25DbGljaz17KCk9PiBzZXRSZXN1bWVWaWV3KCFyZXN1bWVWaWV3KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge3Jlc3VtZVZpZXcgPyA8aDU+Q2xpY2sgdG8gSGlkZTwvaDU+IDogPGg1PkNsaWNrIEZvciBNb3JlIEluZm88L2g1Pn0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzdW1lVmlldyA/IDxkaXYgY2xhc3NOYW1lPSdyZXN1bWUtaW1ncyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi4vc3RhdGljL3Jlc3VtZS1oZWFkZXIucG5nJyBhbHQ9J3Jlc3VtZS1oZWFkZXInLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuLi9zdGF0aWMvcmVzdW1lVG9wLnBuZycgYWx0PSdyZXN1bWUtYm90dG9tJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi4vc3RhdGljL3Jlc3VtZUJvdHRvbS5wbmcnIGFsdD0ncmVzdW1lLXRvcCcvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ncmVzdW1lLWhlYWRlcicgc3JjPScuLi9zdGF0aWMvcmVzdW1lLWhlYWRlci5wbmcnIGFsdD0ncmVzdW1lLWhlYWRlcicvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT17ZGFyayA/IG51bGwgOiAnbGlnaHQtdGV4dCd9PlJFU1VNRSBDT05URU5UIFRFU1QgLSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3J1bSBxdWlidXNkYW0gcXVpZGVtIG1vZGksIGNvbW1vZGkgYWxpcXVhbSBmdWdhIHF1YWVyYXQsIGlwc3VtIG9wdGlvIG1vbGVzdGlhcyBkb2xvcmVzLCBhdXQgYWNjdXNhbnRpdW0gY29uc2VxdWF0dXIgZXhwZWRpdGEuIFZlcml0YXRpcywgcmVjdXNhbmRhZSBkb2xvcmUuIEFjY3VzYW11cywgZXJyb3IgZGVsZWN0dXMhXHJcbiAgICAgICAgICAgIENvbW1vZGkgbWFnbmkgdm9sdXB0YXMgbmVtbyBlYXJ1bSBwZXJmZXJlbmRpcyB2b2x1cHRhdHVtIG9kaW8gZGlnbmlzc2ltb3MgbW9sZXN0aWFlIGVzc2UgYXV0LiBOYW0gcXVhZSBiZWF0YWUgbWFnbmFtIGVhLCB2b2x1cHRhdGlidXMgbWludXMgZW5pbSB2aXRhZSBjdWxwYSwgY3VtIGV4cGVkaXRhIGZ1Z2EgbmVzY2l1bnQgbnVsbGEsIHV0IHNpbWlsaXF1ZSBjb3JydXB0aT9cclxuICAgICAgICAgICAgQ3VtcXVlIHF1aXMgaWxsbyBlaXVzIGRvbG9yZW1xdWUgYWNjdXNhbXVzIGFsaXF1aWQgYXJjaGl0ZWN0byEgUGFyaWF0dXIgcHJvdmlkZW50IGN1bXF1ZSBtaW5pbWEgY29ycG9yaXMgbWFpb3Jlcy4gQXNwZXJpb3JlcywgZGViaXRpcyBldmVuaWV0LiBRdWFlcmF0LCBwb3JybyB0ZW5ldHVyIHF1YW0gcmF0aW9uZSBzdXNjaXBpdCBub24gdm9sdXB0YXRlcyBjdXBpZGl0YXRlIHRvdGFtIHF1aXMgY29ycnVwdGkgb2ZmaWNpaXMhXHJcbiAgICAgICAgICAgIEFsaXF1YW0gZGljdGEgYXQgbW9sZXN0aWFzIGRpZ25pc3NpbW9zLCBpbGx1bSBhY2N1c2FtdXMsIHZpdGFlIHF1YWVyYXQgY29ycnVwdGkgcGVyZmVyZW5kaXMgYWQgb2JjYWVjYXRpIGhpYyBjdWxwYSBpdXN0byB0ZW1wb3JhIG1hZ25pIHNpdCBpbmNpZHVudCBtaW5pbWEgdGVtcG9yZSBhdHF1ZSBkdWNpbXVzIG5lcXVlIHF1YWUuIE5pc2kgZXhlcmNpdGF0aW9uZW0gcHJvdmlkZW50IGJsYW5kaXRpaXMhXHJcbiAgICAgICAgICAgIEVycm9yIGF1dGVtIG9mZmljaWEgdGVuZXR1ciBzb2x1dGEgbnVsbGEgaWxsdW0sIHZlcm8gY29tbW9kaSByZWN1c2FuZGFlLCBmdWdhIG5vYmlzIG5hbSBmYWNlcmUgaXRhcXVlIGhhcnVtIG9mZmljaWlzISBQZXJmZXJlbmRpcyBpcHNhbSBlc3NlIGxhYm9yaW9zYW0gbmVxdWUgZW5pbSBxdW9kIHNpdC4gQ29uc2VxdXVudHVyIG1haW9yZXMgc29sdXRhIG9iY2FlY2F0aSBhc3Blcm5hdHVyP1xyXG4gICAgICAgICAgICBBc3Blcm5hdHVyLCBuaWhpbCBvZmZpY2lhISBFeHBlZGl0YSBkb2xvciBuZW1vIGl0YXF1ZSByYXRpb25lIGFjY3VzYW50aXVtIHVuZGUgdmVsIGFyY2hpdGVjdG8gcXVvZCBhY2N1c2FtdXMsIHRlbmV0dXIgYmxhbmRpdGlpcyBlc3NlIGxpYmVybyBsYWJvcnVtIGFtZXQsIGZ1Z2EgYWRpcGlzY2kuIFJlaWNpZW5kaXMgbGFib3J1bSBuYW0gZWFxdWUgbm9uIGVhcnVtIHF1aXMgZmFjZXJlLlxyXG4gICAgICAgICAgICBGdWdpdCBhY2N1c2FtdXMgYXBlcmlhbSBsYWJvcmUgcXVpc3F1YW0gYXV0LiBEb2xvciByZWljaWVuZGlzIGFsaXF1YW0gcXVvZCBmdWdpdCBwb3NzaW11cyBlYXJ1bSBuZXF1ZSwgaXVzdG8gcmF0aW9uZSBleHBlZGl0YT8gUmVpY2llbmRpcyBxdWkgc2FwaWVudGUgcG9zc2ltdXMgbm9zdHJ1bSBzYWVwZSBzaXQgZGlzdGluY3RpbyBwYXJpYXR1ciBhdXRlbSwgY29tbW9kaSBpcHNhIGVhcnVtLlxyXG4gICAgICAgICAgICBPZGl0IHJlcGVsbGF0IGluIG1vZGkgdGVtcG9yYSEgUXVpYSBxdWlzcXVhbSByZXBlbGxlbmR1cyBzZWQgcXVhc2kgc2l0IHNvbHV0YSBzaW50IG1hZ25hbSBxdWFlIG1vZGkgcmVpY2llbmRpcyBwYXJpYXR1ciBuaXNpIGZ1Z2EgY3VscGEsIHNhcGllbnRlIHZlbCB0ZW1wb3JhIHNpbWlsaXF1ZT8gUXVvcyBvZmZpY2lpcyBwb3NzaW11cyBkaWduaXNzaW1vcyBhZGlwaXNjaS5cclxuICAgICAgICAgICAgRXZlbmlldCBleHBsaWNhYm8gdm9sdXB0YXRlIGVsaWdlbmRpIGRvbG9yZW1xdWUgZXQgc3VzY2lwaXQsIHJlcnVtLCBvZmZpY2lpcyBuZXNjaXVudCBzYXBpZW50ZSBpcHNhIG1hZ25pIG51bXF1YW0gcXVhbSBhYiByZWN1c2FuZGFlIGhhcnVtIGluY2lkdW50IGN1bXF1ZSBlcnJvciB2b2x1cHRhdGVtIHRlbXBvcmlidXMgcXVhZSBtb2RpLCBudWxsYSBleD8gUmF0aW9uZSwgbW9kaSBjb25zZXF1dW50dXIhXHJcbiAgICAgICAgICAgIEl0YXF1ZSBleHBlZGl0YSB2ZWwgZG9sb3JlIGV4ZXJjaXRhdGlvbmVtIG9kaW8gb2ZmaWNpYSwgZW9zIGZ1Z2lhdCBvYmNhZWNhdGkgaW1wZWRpdCBhZGlwaXNjaSBzaW50IHJlY3VzYW5kYWUgY29uc2VxdXVudHVyIHBvc3NpbXVzIGNvbnNlY3RldHVyIHN1bnQgbmlzaSByZXBlbGxhdCB2b2x1cHRhdGVzIHJlcGVsbGVuZHVzIHF1aXNxdWFtIGVzc2UgYXNwZXJpb3JlcyBtaW51cyBlYS4gRmFjaWxpcywgYmVhdGFlIG9wdGlvLlxyXG4gICAgICAgICAgICBDb3Jwb3JpcyBlc3NlIG1vZGkgbGFib3J1bSBkb2xvcnVtLCBuaXNpIGF1dGVtIHBhcmlhdHVyIG1vbGxpdGlhLiBJbGxvLCBhY2N1c2FtdXMgc2VkIHByYWVzZW50aXVtIGF0cXVlIGVvcyBtYWduaS4gSGFydW0gYXV0IHJlcGVsbGVuZHVzIGNvbnNlcXVhdHVyIGxhYm9ydW0sIHByYWVzZW50aXVtIGNvbnNlcXV1bnR1ciB2b2x1cHRhdGVzIGRvbG9yZW1xdWUgcHJvdmlkZW50IG5paGlsIGVhcnVtIHRlbXBvcmUgZXN0IVxyXG4gICAgICAgICAgICBJdXN0byBwb3JybyB1bGxhbSBuZWNlc3NpdGF0aWJ1cyBkZWxlbml0aSBvZmZpY2lhIHJlcnVtIGlkIGRpc3RpbmN0aW8hIE5vbiwgdmVyaXRhdGlzIGlwc2EgY29uc2VjdGV0dXIgYXJjaGl0ZWN0byBpbGxvIHBsYWNlYXQgZXQgZXJyb3IgdmVsIGludmVudG9yZT8gTW9sbGl0aWEgZGVzZXJ1bnQgbWludXMgdm9sdXB0YXRlcyBwcmFlc2VudGl1bSBhbmltaS4gUmVydW0gcHJvdmlkZW50IHN1bnQgcXVhcyFcclxuICAgICAgICAgICAgTGFib3J1bSBxdWlidXNkYW0gaXVyZSB0b3RhbSBleHBsaWNhYm8gY3VscGEgdGVtcG9yaWJ1cywgb3B0aW8gdm9sdXB0YXRlbSBuZW1vIGF0IGVvcyB2b2x1cHRhcyBuZWNlc3NpdGF0aWJ1cyBkdWNpbXVzIHF1aSBjb25zZXF1YXR1ciBxdWFtIG5hdHVzIGRvbG9yIGV4LCBuYW0gY3VtcXVlLiBNb2RpIG9wdGlvIGF1dGVtIGFkaXBpc2NpIGlsbG8sIGNvbnNlY3RldHVyIHByb3ZpZGVudC5cclxuICAgICAgICAgICAgRW5pbSBzdXNjaXBpdCBjdW1xdWUgYW1ldCBibGFuZGl0aWlzIHZlcml0YXRpcyBzZWQgdmVuaWFtIGVhcnVtIGNvbnNlY3RldHVyIG5lcXVlIG1pbmltYSBxdWlzcXVhbSBkZWxlbml0aSBjdWxwYSB1dCBpdXJlIGlwc2EsIG5lY2Vzc2l0YXRpYnVzIGRpc3RpbmN0aW8gcmVjdXNhbmRhZSBjb21tb2RpIHVsbGFtISBMYWJvcmlvc2FtIG1heGltZSBzdXNjaXBpdCBoaWMgaW5jaWR1bnQgdGVtcG9yYSBoYXJ1bS5cclxuICAgICAgICAgICAgTWludXMgYXJjaGl0ZWN0byB2ZXJpdGF0aXMgaXBzdW0gaW4gZW9zIHJlbSB2ZWxpdCBzZXF1aT8gSWxsbyBjb3Jwb3JpcyBkaXN0aW5jdGlvIHF1aXNxdWFtIGlwc2EgdmVsaXQgbWFnbmFtLCBldCBtYXhpbWUgYWQgdGVtcG9yZSBzb2x1dGEgcGFyaWF0dXIgaW52ZW50b3JlIHZvbHVwdGFzIGlsbHVtIHRvdGFtIHJlcnVtIHZvbHVwdGF0aWJ1cyBxdWlhIGF0cXVlP1xyXG4gICAgICAgICAgICBRdWkgY3VwaWRpdGF0ZSBlYSBtb2xlc3RpYXMgaWQgcXVpc3F1YW0gbnVsbGEgYSEgVWxsYW0gbnVsbGEgbW9sZXN0aWFlIGFjY3VzYW50aXVtIGFuaW1pIG9wdGlvIGluIGRvbG9ydW0gb2JjYWVjYXRpLCBwZXJmZXJlbmRpcyBiZWF0YWUgZG9sb3JlcyBlc3QgY3VscGEgZG9sb3JlbXF1ZSB1bmRlIGl1c3RvIG5lbW8gc2FlcGUgbmVxdWUgcmVwdWRpYW5kYWUgaXN0ZS5cclxuICAgICAgICAgICAgRXZlbmlldCBkb2xvcnVtIGluY2lkdW50IG9iY2FlY2F0aSBpcHNhIHZlcm8gZXJyb3Igb2ZmaWNpaXMgZG9sb3JlbXF1ZSBkaXN0aW5jdGlvLCB2b2x1cHRhcyBhdHF1ZSB0b3RhbSBvZmZpY2lhIGxhYm9yZSB2ZXJpdGF0aXMgbW9sbGl0aWEgbm9zdHJ1bSB1dCB0ZW1wb3JpYnVzIHZvbHVwdGF0ZXMgcGxhY2VhdCBzb2x1dGEsIHVuZGUgaGljIGNvcnJ1cHRpIG5hdHVzIHBhcmlhdHVyIHF1YXMuIEFtZXQhXHJcbiAgICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgICAgICA8Lz59XHJcblxyXG4gICAgICAgICAgICB7Y29udGFjdCAmJlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj0nZmFkZUluJyBkdXJhdGlvbj17Mn0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmb3JtLWNvbnRhaW5lcicgYWN0aW9uPVwiaHR0cHM6Ly9mb3JtY2FycnkuY29tL3MvYk45WTFGLXdyeldcIiBtZXRob2Q9XCJQT1NUXCIgYWNjZXB0LWNoYXJzZXQ9XCJVVEYtOFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1lc3NhZ2VcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfZ290Y2hhXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9e2RhcmsgPyBudWxsIDogJ2xpZ2h0LXRleHQnfT5DT05UQUNUIENPTlRFTlQgVEVTVCAtIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvcnVtIHF1aWJ1c2RhbSBxdWlkZW0gbW9kaSwgY29tbW9kaSBhbGlxdWFtIGZ1Z2EgcXVhZXJhdCwgaXBzdW0gb3B0aW8gbW9sZXN0aWFzIGRvbG9yZXMsIGF1dCBhY2N1c2FudGl1bSBjb25zZXF1YXR1ciBleHBlZGl0YS4gVmVyaXRhdGlzLCByZWN1c2FuZGFlIGRvbG9yZS4gQWNjdXNhbXVzLCBlcnJvciBkZWxlY3R1cyFcclxuICAgICAgICAgICAgQ29tbW9kaSBtYWduaSB2b2x1cHRhcyBuZW1vIGVhcnVtIHBlcmZlcmVuZGlzIHZvbHVwdGF0dW0gb2RpbyBkaWduaXNzaW1vcyBtb2xlc3RpYWUgZXNzZSBhdXQuIE5hbSBxdWFlIGJlYXRhZSBtYWduYW0gZWEsIHZvbHVwdGF0aWJ1cyBtaW51cyBlbmltIHZpdGFlIGN1bHBhLCBjdW0gZXhwZWRpdGEgZnVnYSBuZXNjaXVudCBudWxsYSwgdXQgc2ltaWxpcXVlIGNvcnJ1cHRpP1xyXG4gICAgICAgICAgICBDdW1xdWUgcXVpcyBpbGxvIGVpdXMgZG9sb3JlbXF1ZSBhY2N1c2FtdXMgYWxpcXVpZCBhcmNoaXRlY3RvISBQYXJpYXR1ciBwcm92aWRlbnQgY3VtcXVlIG1pbmltYSBjb3Jwb3JpcyBtYWlvcmVzLiBBc3BlcmlvcmVzLCBkZWJpdGlzIGV2ZW5pZXQuIFF1YWVyYXQsIHBvcnJvIHRlbmV0dXIgcXVhbSByYXRpb25lIHN1c2NpcGl0IG5vbiB2b2x1cHRhdGVzIGN1cGlkaXRhdGUgdG90YW0gcXVpcyBjb3JydXB0aSBvZmZpY2lpcyFcclxuICAgICAgICAgICAgQWxpcXVhbSBkaWN0YSBhdCBtb2xlc3RpYXMgZGlnbmlzc2ltb3MsIGlsbHVtIGFjY3VzYW11cywgdml0YWUgcXVhZXJhdCBjb3JydXB0aSBwZXJmZXJlbmRpcyBhZCBvYmNhZWNhdGkgaGljIGN1bHBhIGl1c3RvIHRlbXBvcmEgbWFnbmkgc2l0IGluY2lkdW50IG1pbmltYSB0ZW1wb3JlIGF0cXVlIGR1Y2ltdXMgbmVxdWUgcXVhZS4gTmlzaSBleGVyY2l0YXRpb25lbSBwcm92aWRlbnQgYmxhbmRpdGlpcyFcclxuICAgICAgICAgICAgRXJyb3IgYXV0ZW0gb2ZmaWNpYSB0ZW5ldHVyIHNvbHV0YSBudWxsYSBpbGx1bSwgdmVybyBjb21tb2RpIHJlY3VzYW5kYWUsIGZ1Z2Egbm9iaXMgbmFtIGZhY2VyZSBpdGFxdWUgaGFydW0gb2ZmaWNpaXMhIFBlcmZlcmVuZGlzIGlwc2FtIGVzc2UgbGFib3Jpb3NhbSBuZXF1ZSBlbmltIHF1b2Qgc2l0LiBDb25zZXF1dW50dXIgbWFpb3JlcyBzb2x1dGEgb2JjYWVjYXRpIGFzcGVybmF0dXI/XHJcbiAgICAgICAgICAgIEFzcGVybmF0dXIsIG5paGlsIG9mZmljaWEhIEV4cGVkaXRhIGRvbG9yIG5lbW8gaXRhcXVlIHJhdGlvbmUgYWNjdXNhbnRpdW0gdW5kZSB2ZWwgYXJjaGl0ZWN0byBxdW9kIGFjY3VzYW11cywgdGVuZXR1ciBibGFuZGl0aWlzIGVzc2UgbGliZXJvIGxhYm9ydW0gYW1ldCwgZnVnYSBhZGlwaXNjaS4gUmVpY2llbmRpcyBsYWJvcnVtIG5hbSBlYXF1ZSBub24gZWFydW0gcXVpcyBmYWNlcmUuXHJcbiAgICAgICAgICAgIEZ1Z2l0IGFjY3VzYW11cyBhcGVyaWFtIGxhYm9yZSBxdWlzcXVhbSBhdXQuIERvbG9yIHJlaWNpZW5kaXMgYWxpcXVhbSBxdW9kIGZ1Z2l0IHBvc3NpbXVzIGVhcnVtIG5lcXVlLCBpdXN0byByYXRpb25lIGV4cGVkaXRhPyBSZWljaWVuZGlzIHF1aSBzYXBpZW50ZSBwb3NzaW11cyBub3N0cnVtIHNhZXBlIHNpdCBkaXN0aW5jdGlvIHBhcmlhdHVyIGF1dGVtLCBjb21tb2RpIGlwc2EgZWFydW0uXHJcbiAgICAgICAgICAgIE9kaXQgcmVwZWxsYXQgaW4gbW9kaSB0ZW1wb3JhISBRdWlhIHF1aXNxdWFtIHJlcGVsbGVuZHVzIHNlZCBxdWFzaSBzaXQgc29sdXRhIHNpbnQgbWFnbmFtIHF1YWUgbW9kaSByZWljaWVuZGlzIHBhcmlhdHVyIG5pc2kgZnVnYSBjdWxwYSwgc2FwaWVudGUgdmVsIHRlbXBvcmEgc2ltaWxpcXVlPyBRdW9zIG9mZmljaWlzIHBvc3NpbXVzIGRpZ25pc3NpbW9zIGFkaXBpc2NpLlxyXG4gICAgICAgICAgICBFdmVuaWV0IGV4cGxpY2FibyB2b2x1cHRhdGUgZWxpZ2VuZGkgZG9sb3JlbXF1ZSBldCBzdXNjaXBpdCwgcmVydW0sIG9mZmljaWlzIG5lc2NpdW50IHNhcGllbnRlIGlwc2EgbWFnbmkgbnVtcXVhbSBxdWFtIGFiIHJlY3VzYW5kYWUgaGFydW0gaW5jaWR1bnQgY3VtcXVlIGVycm9yIHZvbHVwdGF0ZW0gdGVtcG9yaWJ1cyBxdWFlIG1vZGksIG51bGxhIGV4PyBSYXRpb25lLCBtb2RpIGNvbnNlcXV1bnR1ciFcclxuICAgICAgICAgICAgSXRhcXVlIGV4cGVkaXRhIHZlbCBkb2xvcmUgZXhlcmNpdGF0aW9uZW0gb2RpbyBvZmZpY2lhLCBlb3MgZnVnaWF0IG9iY2FlY2F0aSBpbXBlZGl0IGFkaXBpc2NpIHNpbnQgcmVjdXNhbmRhZSBjb25zZXF1dW50dXIgcG9zc2ltdXMgY29uc2VjdGV0dXIgc3VudCBuaXNpIHJlcGVsbGF0IHZvbHVwdGF0ZXMgcmVwZWxsZW5kdXMgcXVpc3F1YW0gZXNzZSBhc3BlcmlvcmVzIG1pbnVzIGVhLiBGYWNpbGlzLCBiZWF0YWUgb3B0aW8uXHJcbiAgICAgICAgICAgIENvcnBvcmlzIGVzc2UgbW9kaSBsYWJvcnVtIGRvbG9ydW0sIG5pc2kgYXV0ZW0gcGFyaWF0dXIgbW9sbGl0aWEuIElsbG8sIGFjY3VzYW11cyBzZWQgcHJhZXNlbnRpdW0gYXRxdWUgZW9zIG1hZ25pLiBIYXJ1bSBhdXQgcmVwZWxsZW5kdXMgY29uc2VxdWF0dXIgbGFib3J1bSwgcHJhZXNlbnRpdW0gY29uc2VxdXVudHVyIHZvbHVwdGF0ZXMgZG9sb3JlbXF1ZSBwcm92aWRlbnQgbmloaWwgZWFydW0gdGVtcG9yZSBlc3QhXHJcbiAgICAgICAgICAgIEl1c3RvIHBvcnJvIHVsbGFtIG5lY2Vzc2l0YXRpYnVzIGRlbGVuaXRpIG9mZmljaWEgcmVydW0gaWQgZGlzdGluY3RpbyEgTm9uLCB2ZXJpdGF0aXMgaXBzYSBjb25zZWN0ZXR1ciBhcmNoaXRlY3RvIGlsbG8gcGxhY2VhdCBldCBlcnJvciB2ZWwgaW52ZW50b3JlPyBNb2xsaXRpYSBkZXNlcnVudCBtaW51cyB2b2x1cHRhdGVzIHByYWVzZW50aXVtIGFuaW1pLiBSZXJ1bSBwcm92aWRlbnQgc3VudCBxdWFzIVxyXG4gICAgICAgICAgICBMYWJvcnVtIHF1aWJ1c2RhbSBpdXJlIHRvdGFtIGV4cGxpY2FibyBjdWxwYSB0ZW1wb3JpYnVzLCBvcHRpbyB2b2x1cHRhdGVtIG5lbW8gYXQgZW9zIHZvbHVwdGFzIG5lY2Vzc2l0YXRpYnVzIGR1Y2ltdXMgcXVpIGNvbnNlcXVhdHVyIHF1YW0gbmF0dXMgZG9sb3IgZXgsIG5hbSBjdW1xdWUuIE1vZGkgb3B0aW8gYXV0ZW0gYWRpcGlzY2kgaWxsbywgY29uc2VjdGV0dXIgcHJvdmlkZW50LlxyXG4gICAgICAgICAgICBFbmltIHN1c2NpcGl0IGN1bXF1ZSBhbWV0IGJsYW5kaXRpaXMgdmVyaXRhdGlzIHNlZCB2ZW5pYW0gZWFydW0gY29uc2VjdGV0dXIgbmVxdWUgbWluaW1hIHF1aXNxdWFtIGRlbGVuaXRpIGN1bHBhIHV0IGl1cmUgaXBzYSwgbmVjZXNzaXRhdGlidXMgZGlzdGluY3RpbyByZWN1c2FuZGFlIGNvbW1vZGkgdWxsYW0hIExhYm9yaW9zYW0gbWF4aW1lIHN1c2NpcGl0IGhpYyBpbmNpZHVudCB0ZW1wb3JhIGhhcnVtLlxyXG4gICAgICAgICAgICBNaW51cyBhcmNoaXRlY3RvIHZlcml0YXRpcyBpcHN1bSBpbiBlb3MgcmVtIHZlbGl0IHNlcXVpPyBJbGxvIGNvcnBvcmlzIGRpc3RpbmN0aW8gcXVpc3F1YW0gaXBzYSB2ZWxpdCBtYWduYW0sIGV0IG1heGltZSBhZCB0ZW1wb3JlIHNvbHV0YSBwYXJpYXR1ciBpbnZlbnRvcmUgdm9sdXB0YXMgaWxsdW0gdG90YW0gcmVydW0gdm9sdXB0YXRpYnVzIHF1aWEgYXRxdWU/XHJcbiAgICAgICAgICAgIFF1aSBjdXBpZGl0YXRlIGVhIG1vbGVzdGlhcyBpZCBxdWlzcXVhbSBudWxsYSBhISBVbGxhbSBudWxsYSBtb2xlc3RpYWUgYWNjdXNhbnRpdW0gYW5pbWkgb3B0aW8gaW4gZG9sb3J1bSBvYmNhZWNhdGksIHBlcmZlcmVuZGlzIGJlYXRhZSBkb2xvcmVzIGVzdCBjdWxwYSBkb2xvcmVtcXVlIHVuZGUgaXVzdG8gbmVtbyBzYWVwZSBuZXF1ZSByZXB1ZGlhbmRhZSBpc3RlLlxyXG4gICAgICAgICAgICBFdmVuaWV0IGRvbG9ydW0gaW5jaWR1bnQgb2JjYWVjYXRpIGlwc2EgdmVybyBlcnJvciBvZmZpY2lpcyBkb2xvcmVtcXVlIGRpc3RpbmN0aW8sIHZvbHVwdGFzIGF0cXVlIHRvdGFtIG9mZmljaWEgbGFib3JlIHZlcml0YXRpcyBtb2xsaXRpYSBub3N0cnVtIHV0IHRlbXBvcmlidXMgdm9sdXB0YXRlcyBwbGFjZWF0IHNvbHV0YSwgdW5kZSBoaWMgY29ycnVwdGkgbmF0dXMgcGFyaWF0dXIgcXVhcy4gQW1ldCFcclxuICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgICAgIDxoNSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0gY2xhc3NOYW1lPXsnYXJyb3ctdXAtaWNvbi1kYXJrJ30+PFRpQXJyb3dVcFRoaWNrIC8+PC9oNT5cclxuICAgICAgICAgICAgPC8+fVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8VHJhbnNpdGlvbiBpbWFnZT17aW1hZ2V9IGRhcms9e2Rhcmt9IGNvbnRhY3Q9e2NvbnRhY3R9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmxpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFdlYmtpdCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAvKiBJRSAxMCAgKi9cclxuICAgICAgICAgICAgICAgICAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFdlYmtpdCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAvKiBJRSAxMCAgKi9cclxuICAgICAgICAgICAgICAgICAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWFnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc3VuZmxvd2VyLCAucm9vdHMsIC5kZXZvcHMge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogY29sb3JGYWRlT3V0IDJzLCBzaGFwZVNoaWZ0T3V0IDJzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDNweCBzb2xpZCAjMTQxMzAxXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuc3VuZmxvd2VyOmhvdmVyLCAucm9vdHM6aG92ZXIsIC5kZXZvcHM6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjb2xvckZhZGVJbiAycywgc2hhcGVTaGlmdEluIDJzO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDAlKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogM3B4IHNvbGlkICNiODBjMDlcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2tpbGxzLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCBwdXJwbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZnJvbnRlbmQsIC5iYWNrZW5kIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMSU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2tpbGxzLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAtMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2tpbGxzLXRpdGxlOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnZpZXcge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbjogZmFkZUluIDFzO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYmZiZjg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJSA0JTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW46IDElIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogNDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiA0MjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYW5vcHktdmlldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGV2LXZpZXcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2ODBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucm9vdHMtdmlldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZC1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkLWJhY2stY2Fub3B5IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBVUkwoJy4uL3N0YXRpYy9jYW5vcHlUcmFuc3BhcmVudC5wbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkLWJhY2stZGV2b3BzIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBVUkwoJy4uL3N0YXRpYy9kZXZvcHNUcmFuc3BhcmVudC5wbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZC1iYWNrLXJvb3RzIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBVUkwoJy4uL3N0YXRpYy9yb290c1RyYW5zcGFyZW50LnBuZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZC1pY29ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZC1pY29ucy1jYW5vcHkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmljb24taG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmljb24taG92ZXI6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZC1pY29ucy1kZXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC02JSA1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kZXYtaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiAwIDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2Fub3B5LWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2ODBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTY1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2tpbGxzLXRpdGxlLWRldiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2xvc2UtYnV0dG9uLWRldiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlLWNlbnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZS1kYXJrIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRTVFN0U2O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93LXVwLWljb24tZGFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW0gO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93LXVwLWljb24tZGFyazpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gLmFycm93LXVwLWljb24ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbi1sZWZ0OiA0OSU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBjb2xvckZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDAlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgY29sb3JGYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzaGFwZVNoaWZ0SW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNoYXBlU2hpZnRPdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQGtleWZyYW1lcyBjaXJjbGVJbiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC13aWR0aDogNDk4cHg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC1oZWlnaHQ6IDQ5OHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBAa2V5ZnJhbWVzIGNpcmNsZU91dCB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtd2lkdGg6IDQ5OHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtaGVpZ2h0OiA0OThweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAuYW5pbWF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5nYXVnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5nYXVnZS1zdHlsZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2F1Z2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3RhdGljL0RhcmtCbHVlQmFkZ2UucG5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmR5bmFtaWMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlnaHQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUtc2tpbGxzIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTclO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZmJmYmY4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltYWdlcy1tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIC54IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAuY2xvc2UtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pY29uLXNlbGVjdGVkIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNlbGVjdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDJzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNlbGVjdC1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAycztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIC5zZWxlY3Rvcjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyOiAycHggc29saWQgIzFmMmE0NDtcclxuICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAuZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tYXJnaW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMiUgMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tYXJnaW4tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgICAgICAgICAucmVzdW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAucmVzdW1lLWltZ3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJlc3VtZS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN1bW1hcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3VtbWFyeTo6LXdlYmtpdC1kZXRhaWxzLW1hcmtlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiN2I1YjM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzRhZDVmZjtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGljb25zID0ge1xyXG4gICAgXCJmcm9udGVuZFwiOiBbXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBcImljb25cIjogXCJEaUdpdFwiLFxyXG4gICAgICAgIC8vICAgICBcIm5hbWVcIjogXCJHaXRcIixcclxuICAgICAgICAvLyAgICAgXCJzdWJ0aXRsZVwiOiBcIlN5c3RlbSBTb2Z0d2FyZVwiLFxyXG4gICAgICAgIC8vICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR2l0IGlzIGEgZGlzdHJpYnV0ZWQgdmVyc2lvbi1jb250cm9sIHN5c3RlbSBmb3IgdHJhY2tpbmcgY2hhbmdlcyBpbiBzb3VyY2UgY29kZSBkdXJpbmcgc29mdHdhcmUgZGV2ZWxvcG1lbnQuIEl0IGlzIGRlc2lnbmVkIGZvciBjb29yZGluYXRpbmcgd29yayBhbW9uZyBwcm9ncmFtbWVycywgYnV0IGl0IGNhbiBiZSB1c2VkIHRvIHRyYWNrIGNoYW5nZXMgaW4gYW55IHNldCBvZiBmaWxlcy4gSXRzIGdvYWxzIGluY2x1ZGUgc3BlZWQsIGRhdGEgaW50ZWdyaXR5LCBhbmQgc3VwcG9ydCBmb3IgZGlzdHJpYnV0ZWQsIG5vbi1saW5lYXIgd29ya2Zsb3dzLlwiLFxyXG4gICAgICAgIC8vICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiaWNvblwiOiBcIkRpR2l0aHViQmFkZ2VcIixcclxuICAgICAgICAvLyAgICAgXCJuYW1lXCI6IFwiR2l0SHViXCIsXHJcbiAgICAgICAgLy8gICAgIFwic3VidGl0bGVcIjogXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIixcclxuICAgICAgICAvLyAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBpcyBhbiBBbWVyaWNhbiBjb21wYW55IHRoYXQgcHJvdmlkZXMgaG9zdGluZyBmb3Igc29mdHdhcmUgZGV2ZWxvcG1lbnQgdmVyc2lvbiBjb250cm9sIHVzaW5nIEdpdC4gSXQgaXMgYSBzdWJzaWRpYXJ5IG9mIE1pY3Jvc29mdCwgd2hpY2ggYWNxdWlyZWQgdGhlIGNvbXBhbnkgaW4gMjAxOCBmb3IgJDcuNSBiaWxsaW9uLlwiLFxyXG4gICAgICAgIC8vICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpSHRtbDVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSFRNTDVcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlByb2dyYW1taW5nIExhbmd1YWdlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJIVE1MNSBpcyBhIHNvZnR3YXJlIHNvbHV0aW9uIHN0YWNrIHRoYXQgZGVmaW5lcyB0aGUgcHJvcGVydGllcyBhbmQgYmVoYXZpb3JzIG9mIHdlYiBwYWdlIGNvbnRlbnQgYnkgaW1wbGVtZW50aW5nIGEgbWFya3VwIGJhc2VkIHBhdHRlcm4gdG8gaXQuIEhUTUw1IGlzIHRoZSBmaWZ0aCBhbmQgY3VycmVudCBtYWpvciB2ZXJzaW9uIG9mIEhUTUwsIGFuZCBzdWJzdW1lcyBYSFRNTC5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUNzczNcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ1NTM1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNTUzMgaXMgdGhlIGxhdGVzdCBldm9sdXRpb24gb2YgdGhlIENhc2NhZGluZyBTdHlsZSBTaGVldHMgbGFuZ3VhZ2UgYW5kIGFpbXMgYXQgZXh0ZW5kaW5nIENTUzIuMS4gSXQgYnJpbmdzIGEgbG90IG9mIGxvbmctYXdhaXRlZCBub3ZlbHRpZXMsIGxpa2Ugcm91bmRlZCBjb3JuZXJzLCBzaGFkb3dzLCBncmFkaWVudHMsIHRyYW5zaXRpb25zIG9yIGFuaW1hdGlvbnMsIGFzIHdlbGwgYXMgbmV3IGxheW91dHMgbGlrZSBtdWx0aS1jb2x1bW5zLCBmbGV4aWJsZSBib3ggb3IgZ3JpZCBsYXlvdXRzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpTGVzc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJMZXNzXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJQcm9ncmFtbWluZyBMYW5ndWFnZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTGVzcyBpcyBhIGR5bmFtaWMgcHJlcHJvY2Vzc29yIHN0eWxlIHNoZWV0IGxhbmd1YWdlIHRoYXQgY2FuIGJlIGNvbXBpbGVkIGludG8gQ2FzY2FkaW5nIFN0eWxlIFNoZWV0cyBhbmQgcnVuIG9uIHRoZSBjbGllbnQgc2lkZSBvciBzZXJ2ZXIgc2lkZS4gRGVzaWduZWQgYnkgQWxleGlzIFNlbGxpZXIsIExlc3MgaXMgaW5mbHVlbmNlZCBieSBTYXNzIGFuZCBoYXMgaW5mbHVlbmNlZCB0aGUgbmV3ZXIgXFxcIlNDU1NcXFwiIHN5bnRheCBvZiBTYXNzLCB3aGljaCBhZGFwdGVkIGl0cyBDU1MtbGlrZSBibG9jayBmb3JtYXR0aW5nIHN5bnRheC5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaVNhc3NcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2Fzc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNhc3MgaXMgYSBzdHlsZSBzaGVldCBsYW5ndWFnZSBpbml0aWFsbHkgZGVzaWduZWQgYnkgSGFtcHRvbiBDYXRsaW4gYW5kIGRldmVsb3BlZCBieSBOYXRhbGllIFdlaXplbmJhdW0uIEFmdGVyIGl0cyBpbml0aWFsIHZlcnNpb25zLCBXZWl6ZW5iYXVtIGFuZCBDaHJpcyBFcHBzdGVpbiBoYXZlIGNvbnRpbnVlZCB0byBleHRlbmQgU2FzcyB3aXRoIFNhc3NTY3JpcHQsIGEgc2ltcGxlIHNjcmlwdGluZyBsYW5ndWFnZSB1c2VkIGluIFNhc3MgZmlsZXMuIFwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpQm9vdHN0cmFwXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkJvb3RzdHJhcFwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiRnJvbnQtZW5kIEZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQm9vdHN0cmFwIGlzIGEgZnJlZSBhbmQgb3Blbi1zb3VyY2UgQ1NTIGZyYW1ld29yayBkaXJlY3RlZCBhdCByZXNwb25zaXZlLCBtb2JpbGUtZmlyc3QgZnJvbnQtZW5kIHdlYiBkZXZlbG9wbWVudC4gSXQgY29udGFpbnMgQ1NTLSBhbmQgSmF2YVNjcmlwdC1iYXNlZCBkZXNpZ24gdGVtcGxhdGVzIGZvciB0eXBvZ3JhcGh5LCBmb3JtcywgYnV0dG9ucywgbmF2aWdhdGlvbiBhbmQgb3RoZXIgaW50ZXJmYWNlIGNvbXBvbmVudHMuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlKYXZhc2NyaXB0MVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJKYXZhU2NyaXB0XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJIaWdoLWxldmVsIFByb2dyYW1taW5nIExhbmd1YWdlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJKYXZhU2NyaXB0LCBvZnRlbiBhYmJyZXZpYXRlZCBhcyBKUywgaXMgYSBoaWdoLWxldmVsLCBpbnRlcnByZXRlZCBzY3JpcHRpbmcgbGFuZ3VhZ2UgdGhhdCBjb25mb3JtcyB0byB0aGUgRUNNQVNjcmlwdCBzcGVjaWZpY2F0aW9uLiBKYXZhU2NyaXB0IGhhcyBjdXJseS1icmFja2V0IHN5bnRheCwgZHluYW1pYyB0eXBpbmcsIHByb3RvdHlwZS1iYXNlZCBvYmplY3Qtb3JpZW50YXRpb24sIGFuZCBmaXJzdC1jbGFzcyBmdW5jdGlvbnMuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlSZWFjdFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJSZWFjdC5qc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiV2ViIEZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUmVhY3QgaXMgYSBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGJ1aWxkaW5nIHVzZXIgaW50ZXJmYWNlcy4gSXQgaXMgbWFpbnRhaW5lZCBieSBGYWNlYm9vayBhbmQgYSBjb21tdW5pdHkgb2YgaW5kaXZpZHVhbCBkZXZlbG9wZXJzIGFuZCBjb21wYW5pZXMuIFJlYWN0IGNhbiBiZSB1c2VkIGFzIGEgYmFzZSBpbiB0aGUgZGV2ZWxvcG1lbnQgb2Ygc2luZ2xlLXBhZ2Ugb3IgbW9iaWxlIGFwcGxpY2F0aW9ucywgYXMgaXQgaXMgb3B0aW1hbCBmb3IgZmV0Y2hpbmcgcmFwaWRseSBjaGFuZ2luZyBkYXRhIHRoYXQgbmVlZHMgdG8gYmUgcmVjb3JkZWQuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiRmVicnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImltZyBzcmM9Jy4uL3N0YXRpYy9yZWR1eC5wbmcnIGFsdD0nUmVkdXggSWNvbidcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmVkdXhcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkphdmFTY3JpcHQgTGlicmFyeVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUmVkdXggaXMgYW4gb3Blbi1zb3VyY2UgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBtYW5hZ2luZyBhcHBsaWNhdGlvbiBzdGF0ZS4gSXQgaXMgbW9zdCBjb21tb25seSB1c2VkIHdpdGggbGlicmFyaWVzIHN1Y2ggYXMgUmVhY3Qgb3IgQW5ndWxhciBmb3IgYnVpbGRpbmcgdXNlciBpbnRlcmZhY2VzLiBTaW1pbGFyIHRvIEZhY2Vib29rJ3MgRmx1eCBhcmNoaXRlY3R1cmUsIGl0IHdhcyBjcmVhdGVkIGJ5IERhbiBBYnJhbW92IGFuZCBBbmRyZXcgQ2xhcmsuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiRmVicnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImltZyBzcmM9Jy4uL3N0YXRpYy9uZXh0LXRleHQucG5nJyBhbHQ9J05leHQgSWNvbidcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmV4dC5qc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiV2ViIEZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTmV4dC5qcyBpcyBhIGZyZWUgYW5kIG9wZW4gc291cmNlIHdlYiBhcHBsaWNhdGlvbiBmcmFtZXdvcmsgYmFzZWQgb24gUmVhY3QuanMsIE5vZGUuanMsIFdlYnBhY2sgYW5kIEJhYmVsLmpzLiBUaGUgZnJhbWV3b3JrIGlzIGFkdmVydGlzZWQgYXMgXFxcIm1ldGEtZnJhbWV3b3JrIGZvciB1bml2ZXJzYWwgYXBwbGljYXRpb25zXFxcIi5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJBdWd1c3QgMjAxOVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiZGV2b3BzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpR2l0XCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkdpdFwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiU3lzdGVtIFNvZnR3YXJlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHaXQgaXMgYSBkaXN0cmlidXRlZCB2ZXJzaW9uLWNvbnRyb2wgc3lzdGVtIGZvciB0cmFja2luZyBjaGFuZ2VzIGluIHNvdXJjZSBjb2RlIGR1cmluZyBzb2Z0d2FyZSBkZXZlbG9wbWVudC4gSXQgaXMgZGVzaWduZWQgZm9yIGNvb3JkaW5hdGluZyB3b3JrIGFtb25nIHByb2dyYW1tZXJzLCBidXQgaXQgY2FuIGJlIHVzZWQgdG8gdHJhY2sgY2hhbmdlcyBpbiBhbnkgc2V0IG9mIGZpbGVzLiBJdHMgZ29hbHMgaW5jbHVkZSBzcGVlZCwgZGF0YSBpbnRlZ3JpdHksIGFuZCBzdXBwb3J0IGZvciBkaXN0cmlidXRlZCwgbm9uLWxpbmVhciB3b3JrZmxvd3MuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlHaXRodWJCYWRnZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJHaXRIdWJcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlNvZnR3YXJlIERldmVsb3BlciBQbGF0Zm9ybVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIGlzIGFuIEFtZXJpY2FuIGNvbXBhbnkgdGhhdCBwcm92aWRlcyBob3N0aW5nIGZvciBzb2Z0d2FyZSBkZXZlbG9wbWVudCB2ZXJzaW9uIGNvbnRyb2wgdXNpbmcgR2l0LiBJdCBpcyBhIHN1YnNpZGlhcnkgb2YgTWljcm9zb2Z0LCB3aGljaCBhY3F1aXJlZCB0aGUgY29tcGFueSBpbiAyMDE4IGZvciAkNy41IGJpbGxpb24uXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiTmV0bGlmeVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOZXRsaWZ5XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJQbGF0Zm9ybVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTmV0bGlmeSBpcyBhIFNhbiBGcmFuY2lzY28tYmFzZWQgY2xvdWQgY29tcHV0aW5nIGNvbXBhbnkgdGhhdCBvZmZlcnMgaG9zdGluZyBhbmQgc2VydmVybGVzcyBiYWNrZW5kIHNlcnZpY2VzIGZvciBzdGF0aWMgd2Vic2l0ZXMuIEl0IGZlYXR1cmVzIGNvbnRpbnVvdXMgZGVwbG95bWVudCBmcm9tIEdpdCBhY3Jvc3MgYSBnbG9iYWwgYXBwbGljYXRpb24gZGVsaXZlcnkgbmV0d29yaywgc2VydmVybGVzcyBmb3JtIGhhbmRsaW5nLCBzdXBwb3J0IGZvciBBV1MgTGFtYmRhIGZ1bmN0aW9ucywgYW5kIGZ1bGwgaW50ZWdyYXRpb24gd2l0aCBMZXQncyBFbmNyeXB0LlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkZlYnJ1YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJIZXJva3VcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGVyb2t1XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJQbGF0Zm9ybVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSGVyb2t1IGlzIGEgY2xvdWQgcGxhdGZvcm0gYXMgYSBzZXJ2aWNlIHN1cHBvcnRpbmcgc2V2ZXJhbCBwcm9ncmFtbWluZyBsYW5ndWFnZXMuIE9uZSBvZiB0aGUgZmlyc3QgY2xvdWQgcGxhdGZvcm1zLCBIZXJva3UgaGFzIGJlZW4gaW4gZGV2ZWxvcG1lbnQgc2luY2UgSnVuZSAyMDA3LCB3aGVuIGl0IHN1cHBvcnRlZCBvbmx5IHRoZSBSdWJ5IHByb2dyYW1taW5nIGxhbmd1YWdlLCBidXQgbm93IHN1cHBvcnRzIEphdmEsIE5vZGUuanMsIFNjYWxhLCBDbG9qdXJlLCBQeXRob24sIFBIUCwgYW5kIEdvLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIk1hcmNoIDIwMTlcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcImJhY2tlbmRcIjogW1xyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJpY29uXCI6IFwiRGlHaXRcIixcclxuICAgICAgICAvLyAgICAgXCJzdHlsZXNcIjogeyBcImZvbnRTaXplXCI6IFwiNnJlbVwiLCBcImNvbG9yXCI6IFwiI0YzNEYyOVwifSxcclxuICAgICAgICAvLyAgICAgXCJuYW1lXCI6IFwiR2l0XCIsXHJcbiAgICAgICAgLy8gICAgIFwic3VidGl0bGVcIjogXCJTeXN0ZW0gU29mdHdhcmVcIixcclxuICAgICAgICAvLyAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdpdCBpcyBhIGRpc3RyaWJ1dGVkIHZlcnNpb24tY29udHJvbCBzeXN0ZW0gZm9yIHRyYWNraW5nIGNoYW5nZXMgaW4gc291cmNlIGNvZGUgZHVyaW5nIHNvZnR3YXJlIGRldmVsb3BtZW50LiBJdCBpcyBkZXNpZ25lZCBmb3IgY29vcmRpbmF0aW5nIHdvcmsgYW1vbmcgcHJvZ3JhbW1lcnMsIGJ1dCBpdCBjYW4gYmUgdXNlZCB0byB0cmFjayBjaGFuZ2VzIGluIGFueSBzZXQgb2YgZmlsZXMuIEl0cyBnb2FscyBpbmNsdWRlIHNwZWVkLCBkYXRhIGludGVncml0eSwgYW5kIHN1cHBvcnQgZm9yIGRpc3RyaWJ1dGVkLCBub24tbGluZWFyIHdvcmtmbG93cy5cIixcclxuICAgICAgICAvLyAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBcImljb25cIjogXCJEaUdpdGh1YkJhZGdlXCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVzXCI6IFwiZ2l0SHViU3R5bGVzXCIsXHJcbiAgICAgICAgLy8gICAgIFwibmFtZVwiOiBcIkdpdEh1YlwiLFxyXG4gICAgICAgIC8vICAgICBcInN1YnRpdGxlXCI6IFwiU29mdHdhcmUgRGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgaXMgYW4gQW1lcmljYW4gY29tcGFueSB0aGF0IHByb3ZpZGVzIGhvc3RpbmcgZm9yIHNvZnR3YXJlIGRldmVsb3BtZW50IHZlcnNpb24gY29udHJvbCB1c2luZyBHaXQuIEl0IGlzIGEgc3Vic2lkaWFyeSBvZiBNaWNyb3NvZnQsIHdoaWNoIGFjcXVpcmVkIHRoZSBjb21wYW55IGluIDIwMTggZm9yICQ3LjUgYmlsbGlvbi5cIixcclxuICAgICAgICAvLyAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpTm9kZWpzU21hbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXNcIjogXCJub2RlU3R5bGVzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5vZGUuanNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkphdmFTY3JpcHQgUnVuLXRpbWUgRW52aXJvbm1lbnRcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5vZGUuanMgaXMgYW4gb3Blbi1zb3VyY2UsIGNyb3NzLXBsYXRmb3JtLCBKYXZhU2NyaXB0IHJ1bi10aW1lIGVudmlyb25tZW50IHRoYXQgZXhlY3V0ZXMgSmF2YVNjcmlwdCBjb2RlIG91dHNpZGUgb2YgYSBicm93c2VyLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIk1hcmNoIDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpbWcgc3JjPScuLi9zdGF0aWMvZXhwcmVzc0ZpbmFsLnBuZycgYWx0PSdFeHByZXNzIEljb24nXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVzXCI6IFwiZXhwcmVzc1N0eWxlc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJFeHByZXNzLmpzXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJXZWIgRnJhbWV3b3JrXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJFeHByZXNzLmpzLCBvciBzaW1wbHkgRXhwcmVzcywgaXMgYSB3ZWIgYXBwbGljYXRpb24gZnJhbWV3b3JrIGZvciBOb2RlLmpzLCByZWxlYXNlZCBhcyBmcmVlIGFuZCBvcGVuLXNvdXJjZSBzb2Z0d2FyZSB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIEl0IGlzIGRlc2lnbmVkIGZvciBidWlsZGluZyB3ZWIgYXBwbGljYXRpb25zIGFuZCBBUElzLiBJdCBoYXMgYmVlbiBjYWxsZWQgdGhlIGRlIGZhY3RvIHN0YW5kYXJkIHNlcnZlciBmcmFtZXdvcmsgZm9yIE5vZGUuanMuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiTWFyY2ggMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImltZyBzcmM9Jy4uL3N0YXRpYy9rbmV4anMucG5nJyBhbHQ9J0tuZXguanMgSWNvbidcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiS25leC5qc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiSmF2YVNjcmlwdCBRdWVyeSBCdWlsZGVyXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCIgS25leC5qcyBpcyBhIEphdmFTY3JpcHQgcXVlcnkgYnVpbGRlciBmb3IgcmVsYXRpb25hbCBkYXRhYmFzZXMgaW5jbHVkaW5nIFBvc3RncmVTUUwsIE15U1FMLCBTUUxpdGUzLCBhbmQgT3JhY2xlLiBJdCBjYW4gYmUgdXNlZCB3aXRoIGNhbGxiYWNrcyBhbmQgcHJvbWlzZXMuIEl0IHN1cHBvcnRzIHRyYW5zYWN0aW9ucyBhbmQgY29ubmVjdGlvbiBwb29saW5nLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIk1hcmNoIDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaU15c3FsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVzXCI6IFwibXlTcWxTdHlsZXNcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTXlTUUxcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlN5c3RlbSBTb2Z0d2FyZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTXlTUUwgaXMgYW4gb3Blbi1zb3VyY2UgcmVsYXRpb25hbCBkYXRhYmFzZSBtYW5hZ2VtZW50IHN5c3RlbS4gSXRzIG5hbWUgaXMgYSBjb21iaW5hdGlvbiBvZiBcXFwiTXlcXFwiLCB0aGUgbmFtZSBvZiBjby1mb3VuZGVyIE1pY2hhZWwgV2lkZW5pdXMncyBkYXVnaHRlciwgYW5kIFxcXCJTUUxcXFwiLCB0aGUgYWJicmV2aWF0aW9uIGZvciBTdHJ1Y3R1cmVkXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiTWFyY2ggMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpUG9zdGdyZXNxbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlc1wiOiBcInBvc3RncmVzU3R5bGVzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlBvc3RncmVTUUxcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlN5c3RlbSBTb2Z0d2FyZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUG9zdGdyZVNRTCwgYWxzbyBrbm93biBhcyBQb3N0Z3JlcywgaXMgYSBmcmVlIGFuZCBvcGVuLXNvdXJjZSByZWxhdGlvbmFsIGRhdGFiYXNlIG1hbmFnZW1lbnQgc3lzdGVtIGVtcGhhc2l6aW5nIGV4dGVuc2liaWxpdHkgYW5kIHRlY2huaWNhbCBzdGFuZGFyZHMgY29tcGxpYW5jZS4gSXQgaXMgZGVzaWduZWQgdG8gaGFuZGxlIGEgcmFuZ2Ugb2Ygd29ya2xvYWRzLCBmcm9tIHNpbmdsZSBtYWNoaW5lcyB0byBkYXRhIHdhcmVob3VzZXMgb3IgV2ViIHNlcnZpY2VzIHdpdGggbWFueSBjb25jdXJyZW50IHVzZXJzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIk1hcmNoIDIwMTlcIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Section.jsx */"));
}
var icons = {
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

/***/ })

})
//# sourceMappingURL=index.js.915c758ca4cebe47b037.hot-update.js.map