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
/* harmony import */ var _projects_MediaCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/MediaCard */ "./components/projects/MediaCard.jsx");
/* harmony import */ var _projects_CustomizedDialogs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects/CustomizedDialogs */ "./components/projects/CustomizedDialogs.jsx");
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
    className: "jsx-5945096" + " " + (classNameProp || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    id: id,
    className: "jsx-5945096" + " " + "section-content",
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
    className: "jsx-5945096" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-5945096" + " " + ((dark ? 'title-dark title-skills' : 'title title-skills') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, title)) : __jsx("h2", {
    className: "jsx-5945096" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-5945096" + " " + ((dark ? 'title-dark' : 'title') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, title))), skills && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-5945096" + " " + 'images-modal',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-5945096" + " " + 'images',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-5945096" + " " + 'frontend',
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
    className: "jsx-5945096" + " " + 'sunflower',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-5945096" + " " + 'view canopy-view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-5945096" + " " + 'card-back card-back-canopy ',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-5945096" + " " + 'canopy-header margin',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-5945096" + " " + "skills-title opacity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Front End"), __jsx("div", {
    className: "jsx-5945096" + " " + 'x opacity',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeFrontBack,
    className: "jsx-5945096" + " " + 'close-button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "X"))), __jsx("div", {
    className: "jsx-5945096" + " " + 'card-icons card-icons-canopy',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, icons.frontend.map(function (icon) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiHtml5" ? __jsx("div", {
      className: "jsx-5945096" + " " + 'icon-hover front',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }), " ") : icon.icon === "DiCss3" ? __jsx("div", {
      className: "jsx-5945096" + " " + 'icon-hover front',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), " ") : icon.icon === "DiLess" ? __jsx("div", {
      className: "jsx-5945096" + " " + 'icon-hover front',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), " ") : icon.icon === "DiSass" ? __jsx("div", {
      className: "jsx-5945096" + " " + 'icon-hover front',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), " ") : icon.icon === "DiBootstrap" ? __jsx("div", {
      className: "jsx-5945096" + " " + 'icon-hover front',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), " ") : icon.icon === "DiJavascript1" ? __jsx("div", {
      className: "jsx-5945096" + " " + 'icon-hover front',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }), " ") : icon.icon === "DiReact" ? __jsx("div", {
      className: "jsx-5945096" + " " + 'icon-hover front',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      className: "jsx-5945096" + " " + 'icon-hover front',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      className: "jsx-5945096" + " " + 'icon-hover front',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }) : null);
  })))))), __jsx("div", {
    className: "jsx-5945096" + " " + 'devOps',
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
    className: "jsx-5945096" + " " + 'devops',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-5945096" + " " + 'view dev-view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-5945096" + " " + 'card-back-dev card-back-devops',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-5945096" + " " + 'dev-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-5945096" + " " + "skills-title-dev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "DevOps"), __jsx("div", {
    className: "jsx-5945096" + " " + 'x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeDevBack,
    className: "jsx-5945096" + " " + 'close-button-dev',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "X"))), __jsx("div", {
    className: "jsx-5945096" + " " + 'card-icons-dev',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, icons.devops.map(function (icon) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiGit" ? __jsx("div", {
      className: "jsx-5945096" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }), " ") : icon.icon === "DiGithubBadge" ? __jsx("div", {
      className: "jsx-5945096" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      className: "jsx-5945096" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      className: "jsx-5945096" + " " + 'heroku icon-hover',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }) : null);
  })))))), __jsx("div", {
    className: "jsx-5945096" + " " + 'backend',
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
    className: "jsx-5945096" + " " + 'roots',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-5945096" + " " + 'view canopy-view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-5945096" + " " + 'card-back card-back-canopy ',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-5945096" + " " + 'canopy-header margin-back',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-5945096" + " " + 'skills-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Back End"), __jsx("div", {
    className: "jsx-5945096" + " " + 'x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeBackFront,
    className: "jsx-5945096" + " " + 'close-button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "X"))), __jsx("div", {
    className: "jsx-5945096" + " " + 'card-icons',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, icons.backend.map(function (icon) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiGit" ? __jsx("div", {
      className: "jsx-5945096" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }), " ") : icon.icon === "DiGithubBadge" ? __jsx("div", {
      className: "jsx-5945096" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }), " ") : icon.icon === "iNodejsSmall" ? __jsx("div", {
      className: "jsx-5945096" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      className: "jsx-5945096" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      className: "jsx-5945096" + " " + 'icon-hover',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }) : icon.icon === "DiMysql" ? __jsx("div", {
      className: "jsx-5945096" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }), " ") : icon.icon === "DiPostgresql" ? __jsx("div", {
      className: "jsx-5945096" + " " + 'icon-hover',
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
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }), " ") : null);
  }))))))), __jsx("div", {
    className: "jsx-5945096" + " " + 'modal',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, frontend || backend || devops ? __jsx("h6", {
    className: "jsx-5945096" + " " + ((activeSkill ? "icon-selected" : "select-icon") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Select an Icon") : __jsx("h6", {
    className: "jsx-5945096" + " " + 'select-image',
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
    className: "jsx-5945096" + " " + 'gauges',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-5945096" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-5945096" + " " + 'gauge',
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
    className: "jsx-5945096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "Efficient"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-5945096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "maximum productivity; well-organized")), __jsx("div", {
    className: "jsx-5945096" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-5945096" + " " + 'gauge',
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
    className: "jsx-5945096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Responsive"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-5945096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "optimized layouts for all devices")), __jsx("div", {
    className: "jsx-5945096" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-5945096" + " " + 'gauge',
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
    className: "jsx-5945096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "Creative"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-5945096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "highest quality solutions provided")), __jsx("div", {
    className: "jsx-5945096" + " " + 'gauge-styles dynamic',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-5945096" + " " + 'gauge',
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
    className: "jsx-5945096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Dynamic"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-5945096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "reflects real-time changes in values with activity.  Built with DRY, reusable components. ")))), portfolio && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-5945096" + " " + 'portfolio-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx(_projects_CustomizedDialogs__WEBPACK_IMPORTED_MODULE_13__["default"], {
    one: true,
    image: '../static/knexjs.png',
    title: "WellDone International",
    icons: "project icons here",
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
    className: "jsx-5945096" + " " + 'resume-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx("a", {
    href: "../static/resume.pdf",
    download: true,
    className: "jsx-5945096",
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
    className: "jsx-5945096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, __jsx("summary", {
    onClick: function onClick() {
      return setResumeView(!resumeView);
    },
    className: "jsx-5945096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, resumeView ? __jsx("div", {
    className: "jsx-5945096" + " " + 'resume-imgs resume-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, __jsx("img", {
    src: "../static/topFinalResume.png",
    alt: "resume-header",
    className: "jsx-5945096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }), __jsx("img", {
    src: "../static/middleFinalResume.png",
    alt: "resume-bottom",
    className: "jsx-5945096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }), __jsx("img", {
    src: "../static/bottomFinalResume.png",
    alt: "resume-top",
    className: "jsx-5945096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  })) : __jsx("div", {
    className: "jsx-5945096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, __jsx("img", {
    src: "../static/topFinalResume.png",
    alt: "resume-header",
    className: "jsx-5945096" + " " + 'resume-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  })))))), contact && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-5945096" + " " + 'form',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, __jsx("form", {
    action: "https://formcarry.com/s/bN9Y1F-wrzW",
    method: "POST",
    "accept-charset": "UTF-8",
    className: "jsx-5945096" + " " + 'form-container',
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
    className: "jsx-5945096",
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
    className: "jsx-5945096",
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
    className: "jsx-5945096" + " " + 'message',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }), __jsx("input", {
    type: "hidden",
    name: "_gotcha",
    className: "jsx-5945096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }), __jsx("button", {
    className: "jsx-5945096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-5945096" + " " + 'button',
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
    className: "jsx-5945096" + " " + 'arrow-up-icon-dark',
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
    id: "5945096",
    __self: this
  }, ".light.jsx-5945096{background-color:#e5e7e6;margin-top:-5px;font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.dark.jsx-5945096{background-color:#000c1f;margin-top:-5px;color:#e5e7e6;font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.images.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1%;padding-top:2%;}.sunflower.jsx-5945096,.roots.jsx-5945096,.devops.jsx-5945096{max-width:100%;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-animation:colorFadeOut-jsx-5945096 2s,shapeShiftOut-jsx-5945096 2s;animation:colorFadeOut-jsx-5945096 2s,shapeShiftOut-jsx-5945096 2s;border-radius:50%;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.sunflower.jsx-5945096:hover,.roots.jsx-5945096:hover,.devops.jsx-5945096:hover{width:100%;height:100%;cursor:pointer;-webkit-animation:colorFadeIn-jsx-5945096 2s,shapeShiftIn-jsx-5945096 2s;animation:colorFadeIn-jsx-5945096 2s,shapeShiftIn-jsx-5945096 2s;-webkit-filter:grayscale(0%);filter:grayscale(0%);border-radius:12px;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.skills-card.jsx-5945096{width:33%;height:420px;}.frontend.jsx-5945096,.backend.jsx-5945096{max-width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.titles.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border:1px solid red;padding:2%;}.skills-title.jsx-5945096{font-size:2.1rem;}.skills-title.jsx-5945096:hover{cursor:pointer;}.view.jsx-5945096{opacity:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:100%;background:#fbfbf8;border-radius:12px;padding:2% 4%;cursor:pointer;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.canopy-view.jsx-5945096{width:680px;height:350px;}.dev-view.jsx-5945096{width:680px;height:75px;}.roots-view.jsx-5945096{width:670px;height:350px;}.card-back.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:100%;max-height:100%;}.card-back-canopy.jsx-5945096{max-width:100%;max-height:100%;color:black;border-radius:12px;}.card-back-devops.jsx-5945096{color:#e5e7e6;max-width:100%;max-height:100%;width:680px;height:75px;border-radius:12px;}.card-back-roots.jsx-5945096{color:#e5e7e6;max-width:100%;max-height:100%;width:670px;height:350px;border-radius:12px;}.card-icons.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;max-width:100%;}.card-icons-canopy.jsx-5945096{padding:2%;}.icon-hover.jsx-5945096{opacity:.5;}.icon-hover.jsx-5945096:hover{opacity:1;}.card-icons-dev.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;max-width:100%;margin:-6% 5%;}.dev-header.jsx-5945096{color:#000c1f;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-weight:bolder;}.canopy-header.jsx-5945096{color:#000c1f;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:680px;margin-top:-65px;}.skills-title-dev.jsx-5945096{color:#000c1f;}.close-button-dev.jsx-5945096{color:#000c1f;margin:none;padding:none;}h2.jsx-5945096{font-size:4rem;padding-top:2%;padding-bottom:2%;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding-left:2%;}p.jsx-5945096{padding-left:2%;line-height:1.8;padding-top:2%;}.title-center.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.title.jsx-5945096{color:#000c1f;margin-right:2%;margin-top:6%;}.title-dark.jsx-5945096{margin-right:2%;color:#E5E7E6;margin-top:6%;}.arrow-up-icon-dark.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#e5e7e6;font-size:4rem;position:relative;top:300px;}.arrow-up-icon-dark.jsx-5945096:hover{cursor:pointer;}@-webkit-keyframes colorFadeIn-jsx-5945096{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@keyframes colorFadeIn-jsx-5945096{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@-webkit-keyframes colorFadeOut-jsx-5945096{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@keyframes colorFadeOut-jsx-5945096{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@-webkit-keyframes shapeShiftIn-jsx-5945096{from{border-radius:50%;}to{border-radius:12px;}}@keyframes shapeShiftIn-jsx-5945096{from{border-radius:50%;}to{border-radius:12px;}}@-webkit-keyframes shapeShiftOut-jsx-5945096{from{border-radius:12px;}to{border-radius:50%;}}@keyframes shapeShiftOut-jsx-5945096{from{border-radius:12px;}to{border-radius:50%;}}@-webkit-keyframes fadeIn-jsx-5945096{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-5945096{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadeOut-jsx-5945096{from{opacity:1;}to{opacity:0;}}@keyframes fadeOut-jsx-5945096{from{opacity:1;}to{opacity:0;}}.animate.jsx-5945096{opacity:1;}.gauges.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:5%;}.gauge-styles.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:200px;}.gauge.jsx-5945096{background-image:url('../static/DarkBlueBadge.png');background-size:cover;max-width:100%;width:200px;height:175px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.dynamic.jsx-5945096{margin-top:55px;}.light-text.jsx-5945096{color:#000c1f;}.title-skills.jsx-5945096{margin-top:1%;}.section-content.jsx-5945096{margin-bottom:2%;}.modal.jsx-5945096{width:450px;max-height:270px;margin-top:17%;max-width:100%;border-radius:12px;padding:2%;}.images-modal.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.close-button.jsx-5945096{font-size:2.1rem;font-weight:bolder;}.icon-selected.jsx-5945096{display:none;}.select-icon.jsx-5945096{text-align:center;vertical-align:center;margin-top:25%;font-size:2rem;color:#000c1f;}.select-image.jsx-5945096{text-align:center;vertical-align:center;margin-top:25%;font-size:2rem;color:#000c1f;}.front.jsx-5945096{margin:0 2%;}.margin.jsx-5945096{margin:2% 0;}.margin-back.jsx-5945096{margin-top:-25px;margin-bottom:2%;}.resume-container.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.resume-imgs.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.resume-header.jsx-5945096{-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}summary.jsx-5945096{width:100%: max-width:847px;outline:none;cursor:pointer;}summary.jsx-5945096::-webkit-details-marker{display:none;}a.jsx-5945096{color:#b7b5b3;}a.jsx-5945096:hover{border-bottom:2px solid #4ad5ff;cursor:pointer;color:#000c1f;}.form.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:30%;margin:0 auto;margin-top:3%;}.form-container.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}input.jsx-5945096{font-family:'Raleway',sans-serif;width:100%;background-color:#1f2a44;outline:none;font-weight:bold;color:#e5e7e6;margin:1% 0;padding:10px 15px;border:none;}textarea.jsx-5945096{font-family:'Raleway',sans-serif;width:100%;background-color:#1f2a44;outline:none;font-weight:bold;color:#e5e7e6;margin:1% 0;padding:10px 15px;border:none;height:100px;}button.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:'Raleway',sans-serif;width:25%;font-size:1.5rem;vertical-align:center;margin-top:5%;font-weight:bold;border-radius:12px;color:#000c1f;-webkit-transition:0.5s;transition:0.5s;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}button.jsx-5945096:hover{cursor:pointer;background-color:#1f2a44;color:#e5e7e6;}.button.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;}.portfolio-container.jsx-5945096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcU2VjdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc1NvQixBQU04QyxBQVlBLEFBWVosQUFVRSxBQVdKLEFBWUQsQUFNSyxBQVVGLEFBT0ksQUFNRixBQUtMLEFBa0JFLEFBSUEsQUFJQSxBQUlDLEFBV0UsQUFPRCxBQVNBLEFBUUQsQUFVRixBQUdBLEFBR0QsQUFHRyxBQU9DLEFBU0EsQUFTQSxBQUdBLEFBS0MsQUFRQyxBQUtILEFBSUMsQUFLRSxBQUtILEFBUUUsQUFVWSxBQUk1QixBQUkwQixBQUkxQixBQUl1QixBQUdDLEFBS0EsQUFHRCxBQUtSLEFBR0EsQUFLQSxBQUdBLEFBd0JKLEFBR0csQUFTQSxBQU91QyxBQVVwQyxBQUdGLEFBR0EsQUFHRyxBQUdMLEFBWUMsQUFXSSxBQUlKLEFBR0ssQUFRQSxBQWNOLEFBR0EsQUFHSyxBQUlKLEFBT0EsQUFRNkMsQUFNMUMsQUFPckIsQUFFbUIsQUFJa0IsQUFLbkIsQUFPQSxBQVFxQixBQVlBLEFBWXJCLEFBYUUsQUFLRixBQWdCQSxVQTdkQSxBQWtDQSxBQWlGakIsQUFpSEksQUFHQSxBQUtBLEFBR0EsQUF3QkosQ0FuUmdCLEFBeUhoQixBQUdBLENBNURpQixBQUlELEFBSUMsQUFvUEksQUFvRHJCLEFBR0EsQ0E1QkEsQUE4REEsQ0F2VG1CLEFBU0EsQUFrQ0YsQUFTQSxBQVNqQixBQUdnQixBQXNCSSxBQStIcEIsQUFHQSxBQW1HQSxDQXBhMkIsQUFpQ1YsQUFvQmpCLEFBNkNvQixBQTRFRCxBQW1DbkIsQUErUTZCLENBMVNULEFBY0YsQUF1SGxCLENBMVFBLEFBbVJBLEFBMEJ1QixBQW1DRixDQXRKakIsQUFXQSxBQStHc0IsQUFRQSxDQS9IdEIsQUFLQSxJQXZPZSxBQWNuQixDQXNEQSxDQWxIb0IsQUFZQSxBQWtHcEIsQUFRQSxDQXNGaUIsRUFnUEEsQ0FoVEcsQUFTQSxBQXFORCxDQXpKRyxBQWlCSixBQUtBLENBbEdGLENBb0ZHLEFBZ1BBLENBb0JKLEFBWUEsQ0FyRWYsRUFuQ0EsRUFsVjhDLENBOEo5QyxDQTJMbUIsQUFRQSxBQW1IRCxDQWxnQm9CLEFBWXBCLEFBZ2JDLEVBdlRJLENBNkZ2QixBQUtBLEFBbUltQixBQW1IVSxBQVlBLENBN1ZiLEFBU0EsRUFvRWhCLEFBZ1BrQixDQXhQSyxFQThDbkIsQUFLQSxFQThFc0IsRUF0RnRCLEFBV0EsQUE0UEosQ0F0ZnNDLEFBMlhuQixBQVFBLENBOENuQixDQWpUZ0IsQUFTQyxDQStSMEMsQ0F6RXBDLEVBOEZ2QixDQXBVQSxPQXBHZ0QsQUE0R3pCLEFBZ1ZOLEFBWUEsQ0FuVk0sQUFrUEwsQUFRQSxJQTlZVyxBQW9CSCxBQWlETyxBQWdEUCxBQW1DSCxBQW1CSixBQThDUSxBQWNBLEFBd0ZKLEFBU1UsQUFRZCxBQWlDYyxBQWtEUCxBQU9BLEFBZ0NSLEFBT1EsQUFnQ1ksQUFrQlgsQUFnQkEsSUF6S1osSUFrSE0sQUFZQSxFQWhaRixBQWdUbkIsQUFRQSxJQXBZNkIsQUFnSTdCLEFBdUN1QixBQVNBLEFBZ1JMLENBNVlRLEFBcUYxQixBQTRMZ0IsQUE2QmhCLFVBN1cwQixBQTRkUixBQVlBLEVBdkpELENBMkhDLEtBcUNKLE1BcmVZLEFBc2E0QixBQTJDdEMsQUFZQSxDQXZKQyxFQTJIakIsQ0FxQ3FCLElBamZJLElBNmRILEFBWUEsTUEvVFcsR0F3VVAsQ0F0ZUQsTUEyRUYsQUFzSEgsQ0E1TUksQ0FzSkwsQUF1S0EsQUFnS0gsQUFZQSxTQXZkTyxBQWlHSSxBQThTSixBQVF1QyxBQXVDL0MsR0FjZixBQVlpQixDQTlkTyxBQXNlTixDQWpVSyxBQVNBLEFBbUJ2QixLQTVNcUIsQ0FnYnJCLEFBZ0N1QixJQW5aQSxDQTZhdkIsRUFRcUIsR0E1UnJCLEFBY2tCLEFBNFJLLEFBZ0J2QixHQXBnQnFCLEFBNEJJLFdBNkxMLEFBOFFHLENBbktJLFNBOVFGLEFBbVFDLEFBeUMxQixHQXhOa0MsQUF1S25CLEVBdkZPLElBOFFKLElBOVpnQixBQW1WeUIsQ0E3WXJDLEFBa1NXLE9BelBsQyxFQWtLZSxBQThRTSxNQTVjRyxHQVh1QyxBQXVDOUQsQ0FtS0EsZUFyTmUsQUF3QitDLEFBc1huQyxFQWhhM0IsR0FnTGtDLEFBU0EsQ0F2RVgsR0FzREosRUFySkEsQUE4Ym5CLElBcFpBLEFBd2JpQyxDQXplakMsSUE2WnNELENBdUYvQixHQXZWTCxFQXJKbEIsSUFpVG9CLFFBM0pwQixJQTVJMkQsQUFrVHBDLElBVHZCLFlBNVIyRCxZQTJHNUMsQUFvUmYsVUFwVm1CLENBaUVBLFFBdUtJLE1Bdk9BLENBbUV2QixDQTNIc0QsRUFzRm5DLEFBNFNuQixjQXJYc0QsQ0E0Qy9CLEFBOEJILEFBMllwQixNQS9VdUIsQUFRUCxVQW5FaEIsRUFvRXFCLENBbEdILEVBd1BsQixHQXFLQSxDQW5VQSxRQW5KQSxBQTJEbUIsRUFpR25CLGFBaEc4RCxDQS9DOUQsbUJBa1JrQixjQUNsQix3QkFuTzJELHVEQUNMLGtEQUd0RCIsImZpbGUiOiJDOlxcVXNlcnNcXGRpYW1vXFxEZXNrdG9wXFxHaXRGaWxlc1xcUG9ydGZvbGlvXFxjbGllbnRcXGNvbXBvbmVudHNcXFNlY3Rpb24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xyXG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1RyYW5zaXRpb24nXHJcbmltcG9ydCB7IFRpQXJyb3dVcFRoaWNrIH0gZnJvbSBcInJlYWN0LWljb25zL3RpXCI7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xyXG5pbXBvcnQgUmVhY3RDYXJkRmxpcCBmcm9tICdyZWFjdC1jYXJkLWZsaXAnO1xyXG5pbXBvcnQgeyBEaVJlYWN0LCBEaUphdmFzY3JpcHQxLCBEaUJvb3RzdHJhcCwgRGlTYXNzLCBEaUxlc3MsIERpQ3NzMywgRGlIdG1sNSwgRGlHaXRodWJCYWRnZSwgRGlHaXQsIERpTm9kZWpzU21hbGwsIERpTXlzcWwsIERpUG9zdGdyZXNxbCB9IGZyb20gXCJyZWFjdC1pY29ucy9kaVwiO1xyXG5pbXBvcnQgeyBGYUNoYXJ0TGluZSwgRmFHbG9iZUFtZXJpY2FzLCBGYVBhcGVyUGxhbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgTWRQaG9uZWxpbmssIE1kTGlnaHRidWxiT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgQWN0aXZlQ2FyZCBmcm9tICcuL2ljb24vQWN0aXZlQ2FyZCdcclxuaW1wb3J0IHsgRmlEb3dubG9hZCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgTWVkaWFDYXJkIGZyb20gJy4vcHJvamVjdHMvTWVkaWFDYXJkJ1xyXG5pbXBvcnQgQ3VzdG9taXplZERpYWxvZ3MgZnJvbSAnLi9wcm9qZWN0cy9DdXN0b21pemVkRGlhbG9ncydcclxuLy8gaW1wb3J0IHsgRG9jdW1lbnQsIFBhZ2UgfSBmcm9tICdyZWFjdC1wZGYnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbih7dGl0bGUsIGlkLCBpbWFnZSwgY2xhc3NOYW1lUHJvcCwgZGFyaywgc2tpbGxzLCBwb3J0Zm9saW8sIHJlc3VtZSwgY29udGFjdH0pIHtcclxuICAgIGNvbnN0IFtpc0ZsaXBwZWQsIHNldElzRmxpcHBlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc0ZsaXBwZWQyLCBzZXRJc0ZsaXBwZWQyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzRmxpcHBlZDMsIHNldElzRmxpcHBlZDNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbYmFja2VuZCwgc2V0QmFja2VuZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtmcm9udGVuZCwgc2V0RnJvbnRlbmRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZGV2b3BzLCBzZXREZXZvcHNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbYWN0aXZlU2tpbGwsIHNldEFjdGl2ZVNraWxsXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbcmVzdW1lVmlldywgc2V0UmVzdW1lVmlld10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICAvLyBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgIC8vICAgICBzY3JvbGwuc2Nyb2xsVG9Ub3AoKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IGNsaWNrTWVGcm9udCA9ICgpID0+IHtcclxuICAgICAgICBzZXRGcm9udGVuZCh0cnVlKVxyXG4gICAgICAgIHNldElzRmxpcHBlZCh0cnVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tNZUZyb250QmFjayA9ICgpID0+IHtcclxuICAgICAgICBzZXRGcm9udGVuZChmYWxzZSlcclxuICAgICAgICBzZXRJc0ZsaXBwZWQoZmFsc2UpXHJcbiAgICAgICAgc2V0QWN0aXZlU2tpbGwobnVsbClcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrTWVCYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJhY2tlbmQodHJ1ZSlcclxuICAgICAgICBzZXRJc0ZsaXBwZWQyKHRydWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja01lQmFja0Zyb250ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJhY2tlbmQoZmFsc2UpXHJcbiAgICAgICAgc2V0SXNGbGlwcGVkMihmYWxzZSlcclxuICAgICAgICBzZXRBY3RpdmVTa2lsbChudWxsKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tNZURldiA9ICgpID0+IHtcclxuICAgICAgICBzZXREZXZvcHModHJ1ZSlcclxuICAgICAgICBzZXRJc0ZsaXBwZWQzKHRydWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja01lRGV2QmFjayA9ICgpID0+IHtcclxuICAgICAgICBzZXREZXZvcHMoZmFsc2UpXHJcbiAgICAgICAgc2V0SXNGbGlwcGVkMyhmYWxzZSlcclxuICAgICAgICBzZXRBY3RpdmVTa2lsbChudWxsKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvVG9wKClcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZVByb3B9PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e1wic2VjdGlvblwiICsgKGRhcmsgPyBcIiBzZWN0aW9uLWRhcmtcIiA6IFwiXCIpfT4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIiBpZD17aWR9PlxyXG4gICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj0nZmFkZUluJyBkdXJhdGlvbj17Mn0+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHtza2lsbHMgPyA8aDIgY2xhc3NOYW1lPSd0aXRsZS1jZW50ZXInPjxzcGFuIGNsYXNzTmFtZT17ZGFyayA/ICd0aXRsZS1kYXJrIHRpdGxlLXNraWxscycgOiAndGl0bGUgdGl0bGUtc2tpbGxzJ30+e3RpdGxlfTwvc3Bhbj48L2gyPiA6IDxoMiBjbGFzc05hbWU9J3RpdGxlLWNlbnRlcic+PHNwYW4gY2xhc3NOYW1lPXtkYXJrID8gJ3RpdGxlLWRhcmsnIDogJ3RpdGxlJ30+e3RpdGxlfTwvc3Bhbj48L2gyPn1cclxuXHJcbiAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICB7LyogRHluYW1pYyBTZWN0aW9ucyAqL31cclxuXHJcbiAgICAgICAgICAgIHtza2lsbHMgJiZcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgey8qIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZXMtbW9kYWwnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zyb250ZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0Q2FyZEZsaXAgaXNGbGlwcGVkPXtpc0ZsaXBwZWR9IGZsaXBEaXJlY3Rpb249J2hvcml6b250YWwnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBjbGFzc05hbWU9eydzdW5mbG93ZXInfSBzcmM9Jy4uL3N0YXRpYy90cmVlRklOQUwucG5nJyBhbHQ9J1RyZWUgQ2Fub3B5IEltYWdlJyBrZXk9e2Zyb250ZW5kID8gbnVsbCA6ICdmcm9udCd9IG9uQ2xpY2s9e2NsaWNrTWVGcm9udH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoMiBrZXk9J2Zyb250JyBzdHlsZT17eyBjb2xvcjogJ3BpbmsnLCB6SW5kZXg6IDgwfX0+RnJvbnQgRW5kPC9oMj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3ZpZXcgY2Fub3B5LXZpZXcnfSBrZXk9J2JhY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1iYWNrIGNhcmQtYmFjay1jYW5vcHkgJz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2Fub3B5LWhlYWRlciBtYXJnaW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJza2lsbHMtdGl0bGUgb3BhY2l0eVwiPkZyb250IEVuZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ggb3BhY2l0eSc+PHAgY2xhc3NOYW1lPSdjbG9zZS1idXR0b24nIG9uQ2xpY2s9e2NsaWNrTWVGcm9udEJhY2t9Plg8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaWNvbnMgY2FyZC1pY29ucy1jYW5vcHknPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25zLmZyb250ZW5kLm1hcChpY29uID0+IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbi5pY29uID09PSBcIkRpSHRtbDVcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250Jz48RGlIdG1sNSBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNFNTREMjYnfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaUNzczNcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250Jz48RGlDc3MzIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzNEOEZDNid9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpTGVzc1wiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnPjxEaUxlc3Mgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjMkE0RDgwJ319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlTYXNzXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3ZlciBmcm9udCc+PERpU2FzcyBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNDQzY2OTknfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaUJvb3RzdHJhcFwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnPjxEaUJvb3RzdHJhcCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyM1QjQyODInfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaUphdmFzY3JpcHQxXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3ZlciBmcm9udCc+PERpSmF2YXNjcmlwdDEgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjRjBEQjRGJ319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlSZWFjdFwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnPjxEaVJlYWN0IHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzYxREFGQid9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcImltZyBzcmM9Jy4uL3N0YXRpYy9yZWR1eC5wbmcnIGFsdD0nUmVkdXggSWNvbidcIiA/IDxpbWcgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250JyBzcmM9Jy4uL3N0YXRpYy9yZWR1eC5wbmcnIGFsdD0nUmVkdXggSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc3NXB4JywgbWF4SGVpZ2h0OiAnNzBweCcsIG1hcmdpbjogJzElJyB9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcImltZyBzcmM9Jy4uL3N0YXRpYy9uZXh0LXRleHQucG5nJyBhbHQ9J05leHQgSWNvbidcIiA/IDxpbWcgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250JyBzcmM9Jy4uL3N0YXRpYy9uZXh0LXRleHQucG5nJyBhbHQ9J05leHQgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc3NXB4JywgbWF4SGVpZ2h0OiAnNzVweCcsIG1hcmdpblJpZ2h0OiAnNSUnIH19IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IC8+ICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdENhcmRGbGlwPiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXZPcHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RDYXJkRmxpcCBpc0ZsaXBwZWQ9e2lzRmxpcHBlZDN9IGZsaXBEaXJlY3Rpb249J2hvcml6b250YWwnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgY2xhc3NOYW1lPXsnZGV2b3BzJ30gc3JjPScuLi9zdGF0aWMvZGV2b3BzLnBuZycgYWx0PSdUcmVlIENhbm9weSBJbWFnZScga2V5PXtkZXZvcHMgPyBudWxsIDogJ2Zyb250J30gb25DbGljaz17Y2xpY2tNZURldn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd2aWV3IGRldi12aWV3J30ga2V5PSdiYWNrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYmFjay1kZXYgY2FyZC1iYWNrLWRldm9wcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXYtaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2tpbGxzLXRpdGxlLWRldlwiPkRldk9wczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3gnPjxwIGNsYXNzTmFtZT0nY2xvc2UtYnV0dG9uLWRldicgb25DbGljaz17Y2xpY2tNZURldkJhY2t9Plg8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1pY29ucy1kZXYnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25zLmRldm9wcy5tYXAoaWNvbiA9PiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb24uaWNvbiA9PT0gXCJEaUdpdFwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXInPjxEaUdpdCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNGMzRGMjknfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaUdpdGh1YkJhZGdlXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3Zlcic+PERpR2l0aHViQmFkZ2Ugc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjMTgxNjE2J319ICBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIk5ldGxpZnlcIiA/IDxpbWcgY2xhc3NOYW1lPSdpY29uLWhvdmVyJyBzcmM9Jy4uL3N0YXRpYy9uZXRsaWZ5LnBuZycgYWx0PSdOZXRsaWZ5IEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNzVweCcsIGhlaWdodDogJzc1cHgnLCBtYXJnaW5Ub3A6ICcyLjI1JScsIHBhZGRpbmdMZWZ0OiAnMiUnIH19IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiSGVyb2t1XCIgPyA8aW1nIGNsYXNzTmFtZT0naGVyb2t1IGljb24taG92ZXInIHNyYz0nLi4vc3RhdGljL2hlcm9rdXUucG5nJyBhbHQ9J0hlcm9rdSBJY29uJyBzdHlsZT17eyB3aWR0aDogJzkwcHgnLCBoZWlnaHQ6ICc5MHB4JywgbWFyZ2luVG9wOiAnMSUnLCBwYWRkaW5nTGVmdDogJzIlJ319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0Q2FyZEZsaXA+ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tlbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RDYXJkRmxpcCBpc0ZsaXBwZWQ9e2lzRmxpcHBlZDJ9IGZsaXBEaXJlY3Rpb249J2hvcml6b250YWwnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdyb290cycgc3JjPScuLi9zdGF0aWMvcm9vdHMucG5nJyBhbHQ9J1Jvb3RzIEltYWdlJyBrZXk9e2JhY2tlbmQgPyBudWxsIDogJ2Zyb250J30gb25DbGljaz17Y2xpY2tNZUJhY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3ZpZXcgY2Fub3B5LXZpZXcnfSBrZXk9J2JhY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYmFjayBjYXJkLWJhY2stY2Fub3B5ICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Nhbm9weS1oZWFkZXIgbWFyZ2luLWJhY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdza2lsbHMtdGl0bGUnPkJhY2sgRW5kPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3gnPjxwIGNsYXNzTmFtZT0nY2xvc2UtYnV0dG9uJyBvbkNsaWNrPXtjbGlja01lQmFja0Zyb250fT5YPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1pY29ucyc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbnMuYmFja2VuZC5tYXAoaWNvbiA9PiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbi5pY29uID09PSBcIkRpR2l0XCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3Zlcic+PERpR2l0IHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnI0YzNEYyOSd9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpR2l0aHViQmFkZ2VcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyJz48RGlHaXRodWJCYWRnZSBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMxODE2MTYnfX0gIG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiaU5vZGVqc1NtYWxsXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3Zlcic+PERpTm9kZWpzU21hbGwgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjODNDRDI5J319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiaW1nIHNyYz0nLi4vc3RhdGljL2V4cHJlc3NGaW5hbC5wbmcnIGFsdD0nRXhwcmVzcyBJY29uJ1wiID8gPGltZyBjbGFzc05hbWU9J2ljb24taG92ZXInIHNyYz0nLi4vc3RhdGljL2V4cHJlc3NGaW5hbC5wbmcnIGFsdD0nRXhwcmVzcyBJY29uJyBzdHlsZT17eyB3aWR0aDogJzc1cHgnLCBoZWlnaHQ6ICc3NXB4JywgbWFyZ2luVG9wOiAnMiUnLCBwYWRkaW5nTGVmdDogJzIlJyB9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcImltZyBzcmM9Jy4uL3N0YXRpYy9rbmV4anMucG5nJyBhbHQ9J0tuZXguanMgSWNvbidcIiA/IDxpbWcgY2xhc3NOYW1lPSdpY29uLWhvdmVyJyBzcmM9Jy4uL3N0YXRpYy9rbmV4anMucG5nJyBhbHQ9J0tuZXguanMgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc3NXB4JywgaGVpZ2h0OiAnNzVweCcsIG1hcmdpblRvcDogJzIlJywgcGFkZGluZ0xlZnQ6ICcyJScgfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaU15c3FsXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3Zlcic+PERpTXlzcWwgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjMDA2MThBJywgbWFyZ2luTGVmdDogJzE0JSd9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpUG9zdGdyZXNxbFwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXInPjxEaVBvc3RncmVzcWwgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjMzM2NzkxJywgbWFyZ2luUmlnaHQ6ICcxMiUnfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdENhcmRGbGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwnPlxyXG4gICAgICAgICAgICAgICAgey8qIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgIHtmcm9udGVuZCB8fCBiYWNrZW5kIHx8IGRldm9wcyA/IDxoNiBjbGFzc05hbWU9e2FjdGl2ZVNraWxsID8gXCJpY29uLXNlbGVjdGVkXCIgOiBcInNlbGVjdC1pY29uXCJ9PlNlbGVjdCBhbiBJY29uPC9oNj4gOiA8aDYgY2xhc3NOYW1lPSdzZWxlY3QtaW1hZ2UnPlNlbGVjdCBhbiBJbWFnZTwvaDY+fVxyXG4gICAgICAgICAgICAgICAgICAgICB7YWN0aXZlU2tpbGwgJiYgPEFjdGl2ZUNhcmQgYWN0aXZlU2tpbGw9e2FjdGl2ZVNraWxsfSAvPiB9XHJcbiAgICAgICAgICAgICAgICB7LyogPC9TY3JvbGxBbmltYXRpb24+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlcyc+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIGVmZmljaWVudCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nLi4vc3RhdGljL0RhcmtCYWRnZS5wbmcnIHdpZHRoPXsxNzV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGFydExpbmUgc3R5bGU9e3sgY29sb3I6ICcjRTVFN0U2JywgZm9udFNpemU6ICc2cmVtJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJyMwMDBjMWYnLCBmb250V2VpZ2h0OiAnYm9sZGVyJ319PkVmZmljaWVudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgIHN0eWxlPXt7IGNvbG9yOiAnIzE0MTMwMSd9fT5tYXhpbXVtIHByb2R1Y3Rpdml0eTsgd2VsbC1vcmdhbml6ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogcmVzcG9uc2l2ZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZFBob25lbGluayBzdHlsZT17eyBjb2xvcjogJyNFNUU3RTYnLCBmb250U2l6ZTogJzZyZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJyMwMDBjMWYnLCBmb250V2VpZ2h0OiAnYm9sZGVyJ319PlJlc3BvbnNpdmU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnIzE0MTMwMSd9fT5vcHRpbWl6ZWQgbGF5b3V0cyBmb3IgYWxsIGRldmljZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogY3JlYXRpdmUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2Utc3R5bGVzJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWRMaWdodGJ1bGJPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnI0U1RTdFNicsIGZvbnRTaXplOiAnNnJlbScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjMDAwYzFmJywgZm9udFdlaWdodDogJ2JvbGRlcid9fT5DcmVhdGl2ZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMTQxMzAxJ319PmhpZ2hlc3QgcXVhbGl0eSBzb2x1dGlvbnMgcHJvdmlkZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogZHluYW1pYyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMgZHluYW1pYyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhR2xvYmVBbWVyaWNhcyBzdHlsZT17eyBjb2xvcjogJyNFNUU3RTYnLCBmb250U2l6ZTogJzZyZW0nIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjMDAwYzFmJywgZm9udFdlaWdodDogJ2JvbGRlcid9fT5EeW5hbWljPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMxNDEzMDEnfX0+cmVmbGVjdHMgcmVhbC10aW1lIGNoYW5nZXMgaW4gdmFsdWVzIHdpdGggYWN0aXZpdHkuICBCdWlsdCB3aXRoIERSWSwgcmV1c2FibGUgY29tcG9uZW50cy4gPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPC9TY3JvbGxBbmltYXRpb24+ICovfVxyXG4gICAgICAgICAgICA8Lz59XHJcblxyXG4gICAgICAgICAgICB7cG9ydGZvbGlvICYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3J0Zm9saW8tY29udGFpbmVyJz5cclxuICAgICAgICAgICAgey8qIDxNZWRpYUNhcmQgLz4gKi99XHJcbiAgICAgICAgICAgIDxDdXN0b21pemVkRGlhbG9ncyBvbmUgaW1hZ2U9eycuLi9zdGF0aWMva25leGpzLnBuZyd9IHRpdGxlPSdXZWxsRG9uZSBJbnRlcm5hdGlvbmFsJyBpY29ucz0ncHJvamVjdCBpY29ucyBoZXJlJyAvPlxyXG4gICAgICAgICAgICA8Q3VzdG9taXplZERpYWxvZ3MgdHdvIGltYWdlPXsnLi4vc3RhdGljL25ldGxpZnkucG5nJ30gdGl0bGU9J3RpdGxlIDIgaGVyZScgaWNvbnM9J3Byb2plY3QgaWNvbnMgaGVyZScgLz5cclxuICAgICAgICAgICAgPEN1c3RvbWl6ZWREaWFsb2dzIHRocmVlIGltYWdlPXsnLi4vc3RhdGljL3JlZHV4LnBuZyd9IHRpdGxlPSd0aXRsZSAzIGhlcmUnIGljb25zPSdwcm9qZWN0IGljb25zIGhlcmUnIC8+XHJcbiAgICAgICAgICAgIDxDdXN0b21pemVkRGlhbG9ncyBmb3VyIGltYWdlPXsnLi4vc3RhdGljL25leHQtdGV4dC5wbmcnfSB0aXRsZT0ndGl0bGUgNCBoZXJlJyBpY29ucz0ncHJvamVjdCBpY29ucyBoZXJlJyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9e2RhcmsgPyBudWxsIDogJ2xpZ2h0LXRleHQnfT5QT1JURk9MSU8gQ09OVEVOVCBURVNUIC0gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9ydW0gcXVpYnVzZGFtIHF1aWRlbSBtb2RpLCBjb21tb2RpIGFsaXF1YW0gZnVnYSBxdWFlcmF0LCBpcHN1bSBvcHRpbyBtb2xlc3RpYXMgZG9sb3JlcywgYXV0IGFjY3VzYW50aXVtIGNvbnNlcXVhdHVyIGV4cGVkaXRhLiBWZXJpdGF0aXMsIHJlY3VzYW5kYWUgZG9sb3JlLiBBY2N1c2FtdXMsIGVycm9yIGRlbGVjdHVzIVxyXG4gICAgICAgICAgICBDb21tb2RpIG1hZ25pIHZvbHVwdGFzIG5lbW8gZWFydW0gcGVyZmVyZW5kaXMgdm9sdXB0YXR1bSBvZGlvIGRpZ25pc3NpbW9zIG1vbGVzdGlhZSBlc3NlIGF1dC4gTmFtIHF1YWUgYmVhdGFlIG1hZ25hbSBlYSwgdm9sdXB0YXRpYnVzIG1pbnVzIGVuaW0gdml0YWUgY3VscGEsIGN1bSBleHBlZGl0YSBmdWdhIG5lc2NpdW50IG51bGxhLCB1dCBzaW1pbGlxdWUgY29ycnVwdGk/XHJcbiAgICAgICAgICAgIEN1bXF1ZSBxdWlzIGlsbG8gZWl1cyBkb2xvcmVtcXVlIGFjY3VzYW11cyBhbGlxdWlkIGFyY2hpdGVjdG8hIFBhcmlhdHVyIHByb3ZpZGVudCBjdW1xdWUgbWluaW1hIGNvcnBvcmlzIG1haW9yZXMuIEFzcGVyaW9yZXMsIGRlYml0aXMgZXZlbmlldC4gUXVhZXJhdCwgcG9ycm8gdGVuZXR1ciBxdWFtIHJhdGlvbmUgc3VzY2lwaXQgbm9uIHZvbHVwdGF0ZXMgY3VwaWRpdGF0ZSB0b3RhbSBxdWlzIGNvcnJ1cHRpIG9mZmljaWlzIVxyXG4gICAgICAgICAgICBBbGlxdWFtIGRpY3RhIGF0IG1vbGVzdGlhcyBkaWduaXNzaW1vcywgaWxsdW0gYWNjdXNhbXVzLCB2aXRhZSBxdWFlcmF0IGNvcnJ1cHRpIHBlcmZlcmVuZGlzIGFkIG9iY2FlY2F0aSBoaWMgY3VscGEgaXVzdG8gdGVtcG9yYSBtYWduaSBzaXQgaW5jaWR1bnQgbWluaW1hIHRlbXBvcmUgYXRxdWUgZHVjaW11cyBuZXF1ZSBxdWFlLiBOaXNpIGV4ZXJjaXRhdGlvbmVtIHByb3ZpZGVudCBibGFuZGl0aWlzIVxyXG4gICAgICAgICAgICBFcnJvciBhdXRlbSBvZmZpY2lhIHRlbmV0dXIgc29sdXRhIG51bGxhIGlsbHVtLCB2ZXJvIGNvbW1vZGkgcmVjdXNhbmRhZSwgZnVnYSBub2JpcyBuYW0gZmFjZXJlIGl0YXF1ZSBoYXJ1bSBvZmZpY2lpcyEgUGVyZmVyZW5kaXMgaXBzYW0gZXNzZSBsYWJvcmlvc2FtIG5lcXVlIGVuaW0gcXVvZCBzaXQuIENvbnNlcXV1bnR1ciBtYWlvcmVzIHNvbHV0YSBvYmNhZWNhdGkgYXNwZXJuYXR1cj9cclxuICAgICAgICAgICAgQXNwZXJuYXR1ciwgbmloaWwgb2ZmaWNpYSEgRXhwZWRpdGEgZG9sb3IgbmVtbyBpdGFxdWUgcmF0aW9uZSBhY2N1c2FudGl1bSB1bmRlIHZlbCBhcmNoaXRlY3RvIHF1b2QgYWNjdXNhbXVzLCB0ZW5ldHVyIGJsYW5kaXRpaXMgZXNzZSBsaWJlcm8gbGFib3J1bSBhbWV0LCBmdWdhIGFkaXBpc2NpLiBSZWljaWVuZGlzIGxhYm9ydW0gbmFtIGVhcXVlIG5vbiBlYXJ1bSBxdWlzIGZhY2VyZS5cclxuICAgICAgICAgICAgRnVnaXQgYWNjdXNhbXVzIGFwZXJpYW0gbGFib3JlIHF1aXNxdWFtIGF1dC4gRG9sb3IgcmVpY2llbmRpcyBhbGlxdWFtIHF1b2QgZnVnaXQgcG9zc2ltdXMgZWFydW0gbmVxdWUsIGl1c3RvIHJhdGlvbmUgZXhwZWRpdGE/IFJlaWNpZW5kaXMgcXVpIHNhcGllbnRlIHBvc3NpbXVzIG5vc3RydW0gc2FlcGUgc2l0IGRpc3RpbmN0aW8gcGFyaWF0dXIgYXV0ZW0sIGNvbW1vZGkgaXBzYSBlYXJ1bS5cclxuICAgICAgICAgICAgT2RpdCByZXBlbGxhdCBpbiBtb2RpIHRlbXBvcmEhIFF1aWEgcXVpc3F1YW0gcmVwZWxsZW5kdXMgc2VkIHF1YXNpIHNpdCBzb2x1dGEgc2ludCBtYWduYW0gcXVhZSBtb2RpIHJlaWNpZW5kaXMgcGFyaWF0dXIgbmlzaSBmdWdhIGN1bHBhLCBzYXBpZW50ZSB2ZWwgdGVtcG9yYSBzaW1pbGlxdWU/IFF1b3Mgb2ZmaWNpaXMgcG9zc2ltdXMgZGlnbmlzc2ltb3MgYWRpcGlzY2kuXHJcbiAgICAgICAgICAgIEV2ZW5pZXQgZXhwbGljYWJvIHZvbHVwdGF0ZSBlbGlnZW5kaSBkb2xvcmVtcXVlIGV0IHN1c2NpcGl0LCByZXJ1bSwgb2ZmaWNpaXMgbmVzY2l1bnQgc2FwaWVudGUgaXBzYSBtYWduaSBudW1xdWFtIHF1YW0gYWIgcmVjdXNhbmRhZSBoYXJ1bSBpbmNpZHVudCBjdW1xdWUgZXJyb3Igdm9sdXB0YXRlbSB0ZW1wb3JpYnVzIHF1YWUgbW9kaSwgbnVsbGEgZXg/IFJhdGlvbmUsIG1vZGkgY29uc2VxdXVudHVyIVxyXG4gICAgICAgICAgICBJdGFxdWUgZXhwZWRpdGEgdmVsIGRvbG9yZSBleGVyY2l0YXRpb25lbSBvZGlvIG9mZmljaWEsIGVvcyBmdWdpYXQgb2JjYWVjYXRpIGltcGVkaXQgYWRpcGlzY2kgc2ludCByZWN1c2FuZGFlIGNvbnNlcXV1bnR1ciBwb3NzaW11cyBjb25zZWN0ZXR1ciBzdW50IG5pc2kgcmVwZWxsYXQgdm9sdXB0YXRlcyByZXBlbGxlbmR1cyBxdWlzcXVhbSBlc3NlIGFzcGVyaW9yZXMgbWludXMgZWEuIEZhY2lsaXMsIGJlYXRhZSBvcHRpby5cclxuICAgICAgICAgICAgQ29ycG9yaXMgZXNzZSBtb2RpIGxhYm9ydW0gZG9sb3J1bSwgbmlzaSBhdXRlbSBwYXJpYXR1ciBtb2xsaXRpYS4gSWxsbywgYWNjdXNhbXVzIHNlZCBwcmFlc2VudGl1bSBhdHF1ZSBlb3MgbWFnbmkuIEhhcnVtIGF1dCByZXBlbGxlbmR1cyBjb25zZXF1YXR1ciBsYWJvcnVtLCBwcmFlc2VudGl1bSBjb25zZXF1dW50dXIgdm9sdXB0YXRlcyBkb2xvcmVtcXVlIHByb3ZpZGVudCBuaWhpbCBlYXJ1bSB0ZW1wb3JlIGVzdCFcclxuICAgICAgICAgICAgSXVzdG8gcG9ycm8gdWxsYW0gbmVjZXNzaXRhdGlidXMgZGVsZW5pdGkgb2ZmaWNpYSByZXJ1bSBpZCBkaXN0aW5jdGlvISBOb24sIHZlcml0YXRpcyBpcHNhIGNvbnNlY3RldHVyIGFyY2hpdGVjdG8gaWxsbyBwbGFjZWF0IGV0IGVycm9yIHZlbCBpbnZlbnRvcmU/IE1vbGxpdGlhIGRlc2VydW50IG1pbnVzIHZvbHVwdGF0ZXMgcHJhZXNlbnRpdW0gYW5pbWkuIFJlcnVtIHByb3ZpZGVudCBzdW50IHF1YXMhXHJcbiAgICAgICAgICAgIExhYm9ydW0gcXVpYnVzZGFtIGl1cmUgdG90YW0gZXhwbGljYWJvIGN1bHBhIHRlbXBvcmlidXMsIG9wdGlvIHZvbHVwdGF0ZW0gbmVtbyBhdCBlb3Mgdm9sdXB0YXMgbmVjZXNzaXRhdGlidXMgZHVjaW11cyBxdWkgY29uc2VxdWF0dXIgcXVhbSBuYXR1cyBkb2xvciBleCwgbmFtIGN1bXF1ZS4gTW9kaSBvcHRpbyBhdXRlbSBhZGlwaXNjaSBpbGxvLCBjb25zZWN0ZXR1ciBwcm92aWRlbnQuXHJcbiAgICAgICAgICAgIEVuaW0gc3VzY2lwaXQgY3VtcXVlIGFtZXQgYmxhbmRpdGlpcyB2ZXJpdGF0aXMgc2VkIHZlbmlhbSBlYXJ1bSBjb25zZWN0ZXR1ciBuZXF1ZSBtaW5pbWEgcXVpc3F1YW0gZGVsZW5pdGkgY3VscGEgdXQgaXVyZSBpcHNhLCBuZWNlc3NpdGF0aWJ1cyBkaXN0aW5jdGlvIHJlY3VzYW5kYWUgY29tbW9kaSB1bGxhbSEgTGFib3Jpb3NhbSBtYXhpbWUgc3VzY2lwaXQgaGljIGluY2lkdW50IHRlbXBvcmEgaGFydW0uXHJcbiAgICAgICAgICAgIE1pbnVzIGFyY2hpdGVjdG8gdmVyaXRhdGlzIGlwc3VtIGluIGVvcyByZW0gdmVsaXQgc2VxdWk/IElsbG8gY29ycG9yaXMgZGlzdGluY3RpbyBxdWlzcXVhbSBpcHNhIHZlbGl0IG1hZ25hbSwgZXQgbWF4aW1lIGFkIHRlbXBvcmUgc29sdXRhIHBhcmlhdHVyIGludmVudG9yZSB2b2x1cHRhcyBpbGx1bSB0b3RhbSByZXJ1bSB2b2x1cHRhdGlidXMgcXVpYSBhdHF1ZT9cclxuICAgICAgICAgICAgUXVpIGN1cGlkaXRhdGUgZWEgbW9sZXN0aWFzIGlkIHF1aXNxdWFtIG51bGxhIGEhIFVsbGFtIG51bGxhIG1vbGVzdGlhZSBhY2N1c2FudGl1bSBhbmltaSBvcHRpbyBpbiBkb2xvcnVtIG9iY2FlY2F0aSwgcGVyZmVyZW5kaXMgYmVhdGFlIGRvbG9yZXMgZXN0IGN1bHBhIGRvbG9yZW1xdWUgdW5kZSBpdXN0byBuZW1vIHNhZXBlIG5lcXVlIHJlcHVkaWFuZGFlIGlzdGUuXHJcbiAgICAgICAgICAgIEV2ZW5pZXQgZG9sb3J1bSBpbmNpZHVudCBvYmNhZWNhdGkgaXBzYSB2ZXJvIGVycm9yIG9mZmljaWlzIGRvbG9yZW1xdWUgZGlzdGluY3Rpbywgdm9sdXB0YXMgYXRxdWUgdG90YW0gb2ZmaWNpYSBsYWJvcmUgdmVyaXRhdGlzIG1vbGxpdGlhIG5vc3RydW0gdXQgdGVtcG9yaWJ1cyB2b2x1cHRhdGVzIHBsYWNlYXQgc29sdXRhLCB1bmRlIGhpYyBjb3JydXB0aSBuYXR1cyBwYXJpYXR1ciBxdWFzLiBBbWV0IVxyXG4gICAgICAgICAgICA8L3A+ICovfVxyXG4gICAgICAgICAgICB7LyogPC9TY3JvbGxBbmltYXRpb24+ICovfVxyXG4gICAgICAgICAgICA8Lz59XHJcblxyXG4gICAgICAgICAgICB7cmVzdW1lICYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsvKiA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj0nZmFkZUluJyBkdXJhdGlvbj17Mn0+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc3VtZS1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nLi4vc3RhdGljL3Jlc3VtZS5wZGYnIGRvd25sb2FkPjxGaURvd25sb2FkIHN0eWxlPXt7IGZvbnRTaXplOiAnMi41cmVtJ319IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZXRhaWxzIHN0eWxlPXt7IG1hcmdpblRvcDogJzIlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeSBvbkNsaWNrPXsoKT0+IHNldFJlc3VtZVZpZXcoIXJlc3VtZVZpZXcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7cmVzdW1lVmlldyA/IDxoNT5DbGljayB0byBIaWRlPC9oNT4gOiA8aDU+Q2xpY2sgRm9yIE1vcmUgSW5mbzwvaDU+fSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bWVWaWV3ID8gPGRpdiBjbGFzc05hbWU9J3Jlc3VtZS1pbWdzIHJlc3VtZS1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgc3JjPScuLi9zdGF0aWMvdG9wRmluYWxSZXN1bWUucG5nJyBhbHQ9J3Jlc3VtZS1oZWFkZXInLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIHNyYz0nLi4vc3RhdGljL21pZGRsZUZpbmFsUmVzdW1lLnBuZycgYWx0PSdyZXN1bWUtYm90dG9tJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBzcmM9Jy4uL3N0YXRpYy9ib3R0b21GaW5hbFJlc3VtZS5wbmcnIGFsdD0ncmVzdW1lLXRvcCcvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ncmVzdW1lLWhlYWRlcicgc3JjPScuLi9zdGF0aWMvdG9wRmluYWxSZXN1bWUucG5nJyBhbHQ9J3Jlc3VtZS1oZWFkZXInLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgICAgICA8L2RldGFpbHM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwvU2Nyb2xsQW5pbWF0aW9uPiAqL31cclxuICAgICAgICAgICAgPC8+fVxyXG5cclxuICAgICAgICAgICAge2NvbnRhY3QgJiZcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgey8qIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmb3JtLWNvbnRhaW5lcicgYWN0aW9uPVwiaHR0cHM6Ly9mb3JtY2FycnkuY29tL3MvYk45WTFGLXdyeldcIiBtZXRob2Q9XCJQT1NUXCIgYWNjZXB0LWNoYXJzZXQ9XCJVVEYtOFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj0nTmFtZScgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPSdFLW1haWwnIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIG5hbWU9XCJtZXNzYWdlXCIgcGxhY2Vob2xkZXI9J01lc3NhZ2UnIGNsYXNzTmFtZT0nbWVzc2FnZScgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX2dvdGNoYVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+PGRpdiBjbGFzc05hbWU9J2J1dHRvbicgPlNlbmQgPEZhUGFwZXJQbGFuZSBzdHlsZT17eyBmb250U2l6ZTogJzEuNXJlbSd9fSAvPjwvZGl2PjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPC9TY3JvbGxBbmltYXRpb24+ICovfVxyXG4gICAgICAgICAgICA8aDUgb25DbGljaz17c2Nyb2xsVG9Ub3B9IGNsYXNzTmFtZT17J2Fycm93LXVwLWljb24tZGFyayd9PjxUaUFycm93VXBUaGljayAvPjwvaDU+XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFRyYW5zaXRpb24gaW1hZ2U9e2ltYWdlfSBkYXJrPXtkYXJrfSBjb250YWN0PXtjb250YWN0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAvLyAqIHtcclxuICAgICAgICAvLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAubGlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIElFIDEwICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kYXJrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIElFIDEwICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltYWdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMSU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zdW5mbG93ZXIsIC5yb290cywgLmRldm9wcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjb2xvckZhZGVPdXQgMnMsIHNoYXBlU2hpZnRPdXQgMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogM3B4IHNvbGlkICMxNDEzMDFcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5zdW5mbG93ZXI6aG92ZXIsIC5yb290czpob3ZlciwgLmRldm9wczpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGNvbG9yRmFkZUluIDJzLCBzaGFwZVNoaWZ0SW4gMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAzcHggc29saWQgI2I4MGMwOVxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5za2lsbHMtY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mcm9udGVuZCwgLmJhY2tlbmQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAxJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGVzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMiVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5za2lsbHMtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IC0yMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5za2lsbHMtdGl0bGU6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudmlldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uOiBmYWRlSW4gMXM7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZiZmJmODtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlIDQlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbjogMSUgMDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA0MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDQyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhbm9weS12aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kZXYtdmlldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yb290cy12aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtYmFjay1jYW5vcHkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IFVSTCgnLi4vc3RhdGljL2Nhbm9weVRyYW5zcGFyZW50LnBuZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtYmFjay1kZXZvcHMge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IFVSTCgnLi4vc3RhdGljL2Rldm9wc1RyYW5zcGFyZW50LnBuZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2ODBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkLWJhY2stcm9vdHMge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IFVSTCgnLi4vc3RhdGljL3Jvb3RzVHJhbnNwYXJlbnQucG5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkLWljb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkLWljb25zLWNhbm9weSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaWNvbi1ob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaWNvbi1ob3Zlcjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkLWljb25zLWRldiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLTYlIDUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRldi1oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDAgMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYW5vcHktaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC02NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy10aXRsZS1kZXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNsb3NlLWJ1dHRvbi1kZXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZS1jZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUtZGFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0U1RTdFNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvdy11cC1pY29uLWRhcmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtIDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvdy11cC1pY29uLWRhcms6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIC5hcnJvdy11cC1pY29uIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW4tbGVmdDogNDklO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgY29sb3JGYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGNvbG9yRmFkZU91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDAlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2hhcGVTaGlmdEluIHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzaGFwZVNoaWZ0T3V0IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEBrZXlmcmFtZXMgY2lyY2xlSW4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtd2lkdGg6IDQ5OHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtaGVpZ2h0OiA0OThweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gQGtleWZyYW1lcyBjaXJjbGVPdXQge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRvIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWF4LXdpZHRoOiA0OThweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWF4LWhlaWdodDogNDk4cHg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2F1Z2VzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2F1Z2Utc3R5bGVzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmdhdWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3N0YXRpYy9EYXJrQmx1ZUJhZGdlLnBuZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5keW5hbWljIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpZ2h0LXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlLXNraWxscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE3JTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogI2ZiZmJmODtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWFnZXMtbW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAueCB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLmNsb3NlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaWNvbi1zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZWxlY3QtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbmltYXRpb246IGZhZGVJbiAycztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZWxlY3QtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uOiBmYWRlSW4gMnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAuc2VsZWN0b3I6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkICMxZjJhNDQ7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLmZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMiU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWFyZ2luIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIlIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWFyZ2luLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnJlc3VtZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLnJlc3VtZS1pbWdzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZXN1bWUtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdW1tYXJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTpcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDg0N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3VtbWFyeTo6LXdlYmtpdC1kZXRhaWxzLW1hcmtlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiN2I1YjM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzRhZDVmZjtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyYTQ0O1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxJSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMmE0NDtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMSUgMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMmE0NDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gKjpmb2N1c3tcclxuICAgICAgICAgICAgICAgIC8vICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIC5tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLnBvcnRmb2xpby1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBpY29ucyA9IHtcclxuICAgIFwiZnJvbnRlbmRcIjogW1xyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJpY29uXCI6IFwiRGlHaXRcIixcclxuICAgICAgICAvLyAgICAgXCJuYW1lXCI6IFwiR2l0XCIsXHJcbiAgICAgICAgLy8gICAgIFwic3VidGl0bGVcIjogXCJTeXN0ZW0gU29mdHdhcmVcIixcclxuICAgICAgICAvLyAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdpdCBpcyBhIGRpc3RyaWJ1dGVkIHZlcnNpb24tY29udHJvbCBzeXN0ZW0gZm9yIHRyYWNraW5nIGNoYW5nZXMgaW4gc291cmNlIGNvZGUgZHVyaW5nIHNvZnR3YXJlIGRldmVsb3BtZW50LiBJdCBpcyBkZXNpZ25lZCBmb3IgY29vcmRpbmF0aW5nIHdvcmsgYW1vbmcgcHJvZ3JhbW1lcnMsIGJ1dCBpdCBjYW4gYmUgdXNlZCB0byB0cmFjayBjaGFuZ2VzIGluIGFueSBzZXQgb2YgZmlsZXMuIEl0cyBnb2FscyBpbmNsdWRlIHNwZWVkLCBkYXRhIGludGVncml0eSwgYW5kIHN1cHBvcnQgZm9yIGRpc3RyaWJ1dGVkLCBub24tbGluZWFyIHdvcmtmbG93cy5cIixcclxuICAgICAgICAvLyAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBcImljb25cIjogXCJEaUdpdGh1YkJhZGdlXCIsXHJcbiAgICAgICAgLy8gICAgIFwibmFtZVwiOiBcIkdpdEh1YlwiLFxyXG4gICAgICAgIC8vICAgICBcInN1YnRpdGxlXCI6IFwiU29mdHdhcmUgRGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgaXMgYW4gQW1lcmljYW4gY29tcGFueSB0aGF0IHByb3ZpZGVzIGhvc3RpbmcgZm9yIHNvZnR3YXJlIGRldmVsb3BtZW50IHZlcnNpb24gY29udHJvbCB1c2luZyBHaXQuIEl0IGlzIGEgc3Vic2lkaWFyeSBvZiBNaWNyb3NvZnQsIHdoaWNoIGFjcXVpcmVkIHRoZSBjb21wYW55IGluIDIwMTggZm9yICQ3LjUgYmlsbGlvbi5cIixcclxuICAgICAgICAvLyAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUh0bWw1XCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkhUTUw1XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJQcm9ncmFtbWluZyBMYW5ndWFnZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSFRNTDUgaXMgYSBzb2Z0d2FyZSBzb2x1dGlvbiBzdGFjayB0aGF0IGRlZmluZXMgdGhlIHByb3BlcnRpZXMgYW5kIGJlaGF2aW9ycyBvZiB3ZWIgcGFnZSBjb250ZW50IGJ5IGltcGxlbWVudGluZyBhIG1hcmt1cCBiYXNlZCBwYXR0ZXJuIHRvIGl0LiBIVE1MNSBpcyB0aGUgZmlmdGggYW5kIGN1cnJlbnQgbWFqb3IgdmVyc2lvbiBvZiBIVE1MLCBhbmQgc3Vic3VtZXMgWEhUTUwuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlDc3MzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNTUzNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlByb2dyYW1taW5nIExhbmd1YWdlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDU1MzIGlzIHRoZSBsYXRlc3QgZXZvbHV0aW9uIG9mIHRoZSBDYXNjYWRpbmcgU3R5bGUgU2hlZXRzIGxhbmd1YWdlIGFuZCBhaW1zIGF0IGV4dGVuZGluZyBDU1MyLjEuIEl0IGJyaW5ncyBhIGxvdCBvZiBsb25nLWF3YWl0ZWQgbm92ZWx0aWVzLCBsaWtlIHJvdW5kZWQgY29ybmVycywgc2hhZG93cywgZ3JhZGllbnRzLCB0cmFuc2l0aW9ucyBvciBhbmltYXRpb25zLCBhcyB3ZWxsIGFzIG5ldyBsYXlvdXRzIGxpa2UgbXVsdGktY29sdW1ucywgZmxleGlibGUgYm94IG9yIGdyaWQgbGF5b3V0cy5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUxlc3NcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGVzc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxlc3MgaXMgYSBkeW5hbWljIHByZXByb2Nlc3NvciBzdHlsZSBzaGVldCBsYW5ndWFnZSB0aGF0IGNhbiBiZSBjb21waWxlZCBpbnRvIENhc2NhZGluZyBTdHlsZSBTaGVldHMgYW5kIHJ1biBvbiB0aGUgY2xpZW50IHNpZGUgb3Igc2VydmVyIHNpZGUuIERlc2lnbmVkIGJ5IEFsZXhpcyBTZWxsaWVyLCBMZXNzIGlzIGluZmx1ZW5jZWQgYnkgU2FzcyBhbmQgaGFzIGluZmx1ZW5jZWQgdGhlIG5ld2VyIFxcXCJTQ1NTXFxcIiBzeW50YXggb2YgU2Fzcywgd2hpY2ggYWRhcHRlZCBpdHMgQ1NTLWxpa2UgYmxvY2sgZm9ybWF0dGluZyBzeW50YXguXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlTYXNzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlNhc3NcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlByb2dyYW1taW5nIExhbmd1YWdlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTYXNzIGlzIGEgc3R5bGUgc2hlZXQgbGFuZ3VhZ2UgaW5pdGlhbGx5IGRlc2lnbmVkIGJ5IEhhbXB0b24gQ2F0bGluIGFuZCBkZXZlbG9wZWQgYnkgTmF0YWxpZSBXZWl6ZW5iYXVtLiBBZnRlciBpdHMgaW5pdGlhbCB2ZXJzaW9ucywgV2VpemVuYmF1bSBhbmQgQ2hyaXMgRXBwc3RlaW4gaGF2ZSBjb250aW51ZWQgdG8gZXh0ZW5kIFNhc3Mgd2l0aCBTYXNzU2NyaXB0LCBhIHNpbXBsZSBzY3JpcHRpbmcgbGFuZ3VhZ2UgdXNlZCBpbiBTYXNzIGZpbGVzLiBcIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUJvb3RzdHJhcFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJCb290c3RyYXBcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkZyb250LWVuZCBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJvb3RzdHJhcCBpcyBhIGZyZWUgYW5kIG9wZW4tc291cmNlIENTUyBmcmFtZXdvcmsgZGlyZWN0ZWQgYXQgcmVzcG9uc2l2ZSwgbW9iaWxlLWZpcnN0IGZyb250LWVuZCB3ZWIgZGV2ZWxvcG1lbnQuIEl0IGNvbnRhaW5zIENTUy0gYW5kIEphdmFTY3JpcHQtYmFzZWQgZGVzaWduIHRlbXBsYXRlcyBmb3IgdHlwb2dyYXBoeSwgZm9ybXMsIGJ1dHRvbnMsIG5hdmlnYXRpb24gYW5kIG90aGVyIGludGVyZmFjZSBjb21wb25lbnRzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpSmF2YXNjcmlwdDFcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmF2YVNjcmlwdFwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiSGlnaC1sZXZlbCBQcm9ncmFtbWluZyBMYW5ndWFnZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSmF2YVNjcmlwdCwgb2Z0ZW4gYWJicmV2aWF0ZWQgYXMgSlMsIGlzIGEgaGlnaC1sZXZlbCwgaW50ZXJwcmV0ZWQgc2NyaXB0aW5nIGxhbmd1YWdlIHRoYXQgY29uZm9ybXMgdG8gdGhlIEVDTUFTY3JpcHQgc3BlY2lmaWNhdGlvbi4gSmF2YVNjcmlwdCBoYXMgY3VybHktYnJhY2tldCBzeW50YXgsIGR5bmFtaWMgdHlwaW5nLCBwcm90b3R5cGUtYmFzZWQgb2JqZWN0LW9yaWVudGF0aW9uLCBhbmQgZmlyc3QtY2xhc3MgZnVuY3Rpb25zLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpUmVhY3RcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmVhY3QuanNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIldlYiBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJlYWN0IGlzIGEgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBidWlsZGluZyB1c2VyIGludGVyZmFjZXMuIEl0IGlzIG1haW50YWluZWQgYnkgRmFjZWJvb2sgYW5kIGEgY29tbXVuaXR5IG9mIGluZGl2aWR1YWwgZGV2ZWxvcGVycyBhbmQgY29tcGFuaWVzLiBSZWFjdCBjYW4gYmUgdXNlZCBhcyBhIGJhc2UgaW4gdGhlIGRldmVsb3BtZW50IG9mIHNpbmdsZS1wYWdlIG9yIG1vYmlsZSBhcHBsaWNhdGlvbnMsIGFzIGl0IGlzIG9wdGltYWwgZm9yIGZldGNoaW5nIHJhcGlkbHkgY2hhbmdpbmcgZGF0YSB0aGF0IG5lZWRzIHRvIGJlIHJlY29yZGVkLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkZlYnJ1YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpbWcgc3JjPScuLi9zdGF0aWMvcmVkdXgucG5nJyBhbHQ9J1JlZHV4IEljb24nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlJlZHV4XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJKYXZhU2NyaXB0IExpYnJhcnlcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJlZHV4IGlzIGFuIG9wZW4tc291cmNlIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgbWFuYWdpbmcgYXBwbGljYXRpb24gc3RhdGUuIEl0IGlzIG1vc3QgY29tbW9ubHkgdXNlZCB3aXRoIGxpYnJhcmllcyBzdWNoIGFzIFJlYWN0IG9yIEFuZ3VsYXIgZm9yIGJ1aWxkaW5nIHVzZXIgaW50ZXJmYWNlcy4gU2ltaWxhciB0byBGYWNlYm9vaydzIEZsdXggYXJjaGl0ZWN0dXJlLCBpdCB3YXMgY3JlYXRlZCBieSBEYW4gQWJyYW1vdiBhbmQgQW5kcmV3IENsYXJrLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkZlYnJ1YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpbWcgc3JjPScuLi9zdGF0aWMvbmV4dC10ZXh0LnBuZycgYWx0PSdOZXh0IEljb24nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5leHQuanNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIldlYiBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5leHQuanMgaXMgYSBmcmVlIGFuZCBvcGVuIHNvdXJjZSB3ZWIgYXBwbGljYXRpb24gZnJhbWV3b3JrIGJhc2VkIG9uIFJlYWN0LmpzLCBOb2RlLmpzLCBXZWJwYWNrIGFuZCBCYWJlbC5qcy4gVGhlIGZyYW1ld29yayBpcyBhZHZlcnRpc2VkIGFzIFxcXCJtZXRhLWZyYW1ld29yayBmb3IgdW5pdmVyc2FsIGFwcGxpY2F0aW9uc1xcXCIuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiQXVndXN0IDIwMTlcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcImRldm9wc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUdpdFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJHaXRcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlN5c3RlbSBTb2Z0d2FyZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR2l0IGlzIGEgZGlzdHJpYnV0ZWQgdmVyc2lvbi1jb250cm9sIHN5c3RlbSBmb3IgdHJhY2tpbmcgY2hhbmdlcyBpbiBzb3VyY2UgY29kZSBkdXJpbmcgc29mdHdhcmUgZGV2ZWxvcG1lbnQuIEl0IGlzIGRlc2lnbmVkIGZvciBjb29yZGluYXRpbmcgd29yayBhbW9uZyBwcm9ncmFtbWVycywgYnV0IGl0IGNhbiBiZSB1c2VkIHRvIHRyYWNrIGNoYW5nZXMgaW4gYW55IHNldCBvZiBmaWxlcy4gSXRzIGdvYWxzIGluY2x1ZGUgc3BlZWQsIGRhdGEgaW50ZWdyaXR5LCBhbmQgc3VwcG9ydCBmb3IgZGlzdHJpYnV0ZWQsIG5vbi1saW5lYXIgd29ya2Zsb3dzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpR2l0aHViQmFkZ2VcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2l0SHViXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJTb2Z0d2FyZSBEZXZlbG9wZXIgUGxhdGZvcm1cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBpcyBhbiBBbWVyaWNhbiBjb21wYW55IHRoYXQgcHJvdmlkZXMgaG9zdGluZyBmb3Igc29mdHdhcmUgZGV2ZWxvcG1lbnQgdmVyc2lvbiBjb250cm9sIHVzaW5nIEdpdC4gSXQgaXMgYSBzdWJzaWRpYXJ5IG9mIE1pY3Jvc29mdCwgd2hpY2ggYWNxdWlyZWQgdGhlIGNvbXBhbnkgaW4gMjAxOCBmb3IgJDcuNSBiaWxsaW9uLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIk5ldGxpZnlcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmV0bGlmeVwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiUGxhdGZvcm1cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ldGxpZnkgaXMgYSBTYW4gRnJhbmNpc2NvLWJhc2VkIGNsb3VkIGNvbXB1dGluZyBjb21wYW55IHRoYXQgb2ZmZXJzIGhvc3RpbmcgYW5kIHNlcnZlcmxlc3MgYmFja2VuZCBzZXJ2aWNlcyBmb3Igc3RhdGljIHdlYnNpdGVzLiBJdCBmZWF0dXJlcyBjb250aW51b3VzIGRlcGxveW1lbnQgZnJvbSBHaXQgYWNyb3NzIGEgZ2xvYmFsIGFwcGxpY2F0aW9uIGRlbGl2ZXJ5IG5ldHdvcmssIHNlcnZlcmxlc3MgZm9ybSBoYW5kbGluZywgc3VwcG9ydCBmb3IgQVdTIExhbWJkYSBmdW5jdGlvbnMsIGFuZCBmdWxsIGludGVncmF0aW9uIHdpdGggTGV0J3MgRW5jcnlwdC5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJGZWJydWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiSGVyb2t1XCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkhlcm9rdVwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiUGxhdGZvcm1cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkhlcm9rdSBpcyBhIGNsb3VkIHBsYXRmb3JtIGFzIGEgc2VydmljZSBzdXBwb3J0aW5nIHNldmVyYWwgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VzLiBPbmUgb2YgdGhlIGZpcnN0IGNsb3VkIHBsYXRmb3JtcywgSGVyb2t1IGhhcyBiZWVuIGluIGRldmVsb3BtZW50IHNpbmNlIEp1bmUgMjAwNywgd2hlbiBpdCBzdXBwb3J0ZWQgb25seSB0aGUgUnVieSBwcm9ncmFtbWluZyBsYW5ndWFnZSwgYnV0IG5vdyBzdXBwb3J0cyBKYXZhLCBOb2RlLmpzLCBTY2FsYSwgQ2xvanVyZSwgUHl0aG9uLCBQSFAsIGFuZCBHby5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJNYXJjaCAyMDE5XCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCJiYWNrZW5kXCI6IFtcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiaWNvblwiOiBcIkRpR2l0XCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVzXCI6IHsgXCJmb250U2l6ZVwiOiBcIjZyZW1cIiwgXCJjb2xvclwiOiBcIiNGMzRGMjlcIn0sXHJcbiAgICAgICAgLy8gICAgIFwibmFtZVwiOiBcIkdpdFwiLFxyXG4gICAgICAgIC8vICAgICBcInN1YnRpdGxlXCI6IFwiU3lzdGVtIFNvZnR3YXJlXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZGVzY3JpcHRpb25cIjogXCJHaXQgaXMgYSBkaXN0cmlidXRlZCB2ZXJzaW9uLWNvbnRyb2wgc3lzdGVtIGZvciB0cmFja2luZyBjaGFuZ2VzIGluIHNvdXJjZSBjb2RlIGR1cmluZyBzb2Z0d2FyZSBkZXZlbG9wbWVudC4gSXQgaXMgZGVzaWduZWQgZm9yIGNvb3JkaW5hdGluZyB3b3JrIGFtb25nIHByb2dyYW1tZXJzLCBidXQgaXQgY2FuIGJlIHVzZWQgdG8gdHJhY2sgY2hhbmdlcyBpbiBhbnkgc2V0IG9mIGZpbGVzLiBJdHMgZ29hbHMgaW5jbHVkZSBzcGVlZCwgZGF0YSBpbnRlZ3JpdHksIGFuZCBzdXBwb3J0IGZvciBkaXN0cmlidXRlZCwgbm9uLWxpbmVhciB3b3JrZmxvd3MuXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJpY29uXCI6IFwiRGlHaXRodWJCYWRnZVwiLFxyXG4gICAgICAgIC8vICAgICBcInN0eWxlc1wiOiBcImdpdEh1YlN0eWxlc1wiLFxyXG4gICAgICAgIC8vICAgICBcIm5hbWVcIjogXCJHaXRIdWJcIixcclxuICAgICAgICAvLyAgICAgXCJzdWJ0aXRsZVwiOiBcIlNvZnR3YXJlIERldmVsb3BlclwiLFxyXG4gICAgICAgIC8vICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIGlzIGFuIEFtZXJpY2FuIGNvbXBhbnkgdGhhdCBwcm92aWRlcyBob3N0aW5nIGZvciBzb2Z0d2FyZSBkZXZlbG9wbWVudCB2ZXJzaW9uIGNvbnRyb2wgdXNpbmcgR2l0LiBJdCBpcyBhIHN1YnNpZGlhcnkgb2YgTWljcm9zb2Z0LCB3aGljaCBhY3F1aXJlZCB0aGUgY29tcGFueSBpbiAyMDE4IGZvciAkNy41IGJpbGxpb24uXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiaU5vZGVqc1NtYWxsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVzXCI6IFwibm9kZVN0eWxlc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOb2RlLmpzXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJKYXZhU2NyaXB0IFJ1bi10aW1lIEVudmlyb25tZW50XCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOb2RlLmpzIGlzIGFuIG9wZW4tc291cmNlLCBjcm9zcy1wbGF0Zm9ybSwgSmF2YVNjcmlwdCBydW4tdGltZSBlbnZpcm9ubWVudCB0aGF0IGV4ZWN1dGVzIEphdmFTY3JpcHQgY29kZSBvdXRzaWRlIG9mIGEgYnJvd3Nlci5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJNYXJjaCAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiaW1nIHNyYz0nLi4vc3RhdGljL2V4cHJlc3NGaW5hbC5wbmcnIGFsdD0nRXhwcmVzcyBJY29uJ1wiLFxyXG4gICAgICAgICAgICBcInN0eWxlc1wiOiBcImV4cHJlc3NTdHlsZXNcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRXhwcmVzcy5qc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiV2ViIEZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRXhwcmVzcy5qcywgb3Igc2ltcGx5IEV4cHJlc3MsIGlzIGEgd2ViIGFwcGxpY2F0aW9uIGZyYW1ld29yayBmb3IgTm9kZS5qcywgcmVsZWFzZWQgYXMgZnJlZSBhbmQgb3Blbi1zb3VyY2Ugc29mdHdhcmUgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBJdCBpcyBkZXNpZ25lZCBmb3IgYnVpbGRpbmcgd2ViIGFwcGxpY2F0aW9ucyBhbmQgQVBJcy4gSXQgaGFzIGJlZW4gY2FsbGVkIHRoZSBkZSBmYWN0byBzdGFuZGFyZCBzZXJ2ZXIgZnJhbWV3b3JrIGZvciBOb2RlLmpzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIk1hcmNoIDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpbWcgc3JjPScuLi9zdGF0aWMva25leGpzLnBuZycgYWx0PSdLbmV4LmpzIEljb24nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIktuZXguanNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkphdmFTY3JpcHQgUXVlcnkgQnVpbGRlclwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiIEtuZXguanMgaXMgYSBKYXZhU2NyaXB0IHF1ZXJ5IGJ1aWxkZXIgZm9yIHJlbGF0aW9uYWwgZGF0YWJhc2VzIGluY2x1ZGluZyBQb3N0Z3JlU1FMLCBNeVNRTCwgU1FMaXRlMywgYW5kIE9yYWNsZS4gSXQgY2FuIGJlIHVzZWQgd2l0aCBjYWxsYmFja3MgYW5kIHByb21pc2VzLiBJdCBzdXBwb3J0cyB0cmFuc2FjdGlvbnMgYW5kIGNvbm5lY3Rpb24gcG9vbGluZy5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJNYXJjaCAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlNeXNxbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlc1wiOiBcIm15U3FsU3R5bGVzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk15U1FMXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJTeXN0ZW0gU29mdHdhcmVcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk15U1FMIGlzIGFuIG9wZW4tc291cmNlIHJlbGF0aW9uYWwgZGF0YWJhc2UgbWFuYWdlbWVudCBzeXN0ZW0uIEl0cyBuYW1lIGlzIGEgY29tYmluYXRpb24gb2YgXFxcIk15XFxcIiwgdGhlIG5hbWUgb2YgY28tZm91bmRlciBNaWNoYWVsIFdpZGVuaXVzJ3MgZGF1Z2h0ZXIsIGFuZCBcXFwiU1FMXFxcIiwgdGhlIGFiYnJldmlhdGlvbiBmb3IgU3RydWN0dXJlZFwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIk1hcmNoIDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaVBvc3RncmVzcWxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXNcIjogXCJwb3N0Z3Jlc1N0eWxlc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJQb3N0Z3JlU1FMXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJTeXN0ZW0gU29mdHdhcmVcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlBvc3RncmVTUUwsIGFsc28ga25vd24gYXMgUG9zdGdyZXMsIGlzIGEgZnJlZSBhbmQgb3Blbi1zb3VyY2UgcmVsYXRpb25hbCBkYXRhYmFzZSBtYW5hZ2VtZW50IHN5c3RlbSBlbXBoYXNpemluZyBleHRlbnNpYmlsaXR5IGFuZCB0ZWNobmljYWwgc3RhbmRhcmRzIGNvbXBsaWFuY2UuIEl0IGlzIGRlc2lnbmVkIHRvIGhhbmRsZSBhIHJhbmdlIG9mIHdvcmtsb2FkcywgZnJvbSBzaW5nbGUgbWFjaGluZXMgdG8gZGF0YSB3YXJlaG91c2VzIG9yIFdlYiBzZXJ2aWNlcyB3aXRoIG1hbnkgY29uY3VycmVudCB1c2Vycy5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJNYXJjaCAyMDE5XCJcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmNvbnN0IHdlbGxEb25lSW50ZXJuYXRpb25hbCA9IHtcclxuXHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Section.jsx */"));
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
var wellDoneInternational = {};

/***/ })

})
//# sourceMappingURL=index.js.8a5598ed434bfc5139f0.hot-update.js.map