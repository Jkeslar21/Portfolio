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
/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Transition */ "./components/Transition.jsx");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-card-flip */ "./node_modules/react-card-flip/lib/react-card-flip.js");
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_card_flip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Section.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import { animateScroll as scroll } from 'react-scroll'

 // import { TiArrowUpThick } from "react-icons/ti";






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
      setFrontend = _useState4[1]; // const scrollToTop = () => {
  //     scroll.scrollToTop()
  // }


  var clickMe = function clickMe() {
    setFrontend(!frontend);
    setIsFlipped(!isFlipped);
  };

  var clickMeBack = function clickMeBack() {
    setBackend(!backend);
    setIsFlipped2(!isFlipped2);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2932813256" + " " + (classNameProp || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    id: id,
    className: "jsx-2932813256" + " " + "section-content",
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
    className: "jsx-2932813256" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2932813256" + " " + ((dark ? 'title-dark title-skills' : 'title title-skills') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, title)) : __jsx("h2", {
    className: "jsx-2932813256" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2932813256" + " " + ((dark ? 'title-dark' : 'title') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, title)), skills && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2932813256" + " " + 'images',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2932813256" + " " + 'frontend',
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
    className: "jsx-2932813256" + " " + 'sunflower',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("div", {
    onClick: clickMe,
    key: "back",
    className: "jsx-2932813256" + " " + 'view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2932813256" + " " + 'card-back',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2932813256" + " " + "skills-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Front End"), __jsx("div", {
    className: "jsx-2932813256" + " " + 'card-icons',
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
    className: "jsx-2932813256",
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
    className: "jsx-2932813256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })))))), __jsx("div", {
    onClick: function onClick() {
      return setBackend(!backend);
    },
    className: "jsx-2932813256" + " " + 'backend',
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
    className: "jsx-2932813256" + " " + 'roots',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx("div", {
    onClick: clickMeBack,
    key: "back",
    className: "jsx-2932813256" + " " + 'view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2932813256" + " " + 'card-back',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2932813256" + " " + 'skills-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Back End"), __jsx("div", {
    className: "jsx-2932813256" + " " + 'card-icons',
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
    className: "jsx-2932813256",
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
    className: "jsx-2932813256" + " " + 'gauges',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2932813256" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2932813256" + " " + 'gauge',
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
    className: "jsx-2932813256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Efficient"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-2932813256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "maximum productivity; well-organized")), __jsx("div", {
    className: "jsx-2932813256" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2932813256" + " " + 'gauge',
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
    className: "jsx-2932813256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Responsive"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-2932813256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "optimized layouts for all devices")), __jsx("div", {
    className: "jsx-2932813256" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2932813256" + " " + 'gauge',
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
    className: "jsx-2932813256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Creative"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-2932813256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "highest quality solutions provided")), __jsx("div", {
    className: "jsx-2932813256" + " " + 'gauge-styles dynamic',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2932813256" + " " + 'gauge',
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
    className: "jsx-2932813256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Dynamic"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-2932813256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "reflects real-time changes in values with activity.  Built with DRY, reusable components. ")))), portfolio && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
    className: "jsx-2932813256" + " " + ((dark ? null : 'light-text') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "PORTFOLIO CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus! Commodi magni voluptas nemo earum perferendis voluptatum odio dignissimos molestiae esse aut. Nam quae beatae magnam ea, voluptatibus minus enim vitae culpa, cum expedita fuga nesciunt nulla, ut similique corrupti? Cumque quis illo eius doloremque accusamus aliquid architecto! Pariatur provident cumque minima corporis maiores. Asperiores, debitis eveniet. Quaerat, porro tenetur quam ratione suscipit non voluptates cupiditate totam quis corrupti officiis! Aliquam dicta at molestias dignissimos, illum accusamus, vitae quaerat corrupti perferendis ad obcaecati hic culpa iusto tempora magni sit incidunt minima tempore atque ducimus neque quae. Nisi exercitationem provident blanditiis! Error autem officia tenetur soluta nulla illum, vero commodi recusandae, fuga nobis nam facere itaque harum officiis! Perferendis ipsam esse laboriosam neque enim quod sit. Consequuntur maiores soluta obcaecati aspernatur? Aspernatur, nihil officia! Expedita dolor nemo itaque ratione accusantium unde vel architecto quod accusamus, tenetur blanditiis esse libero laborum amet, fuga adipisci. Reiciendis laborum nam eaque non earum quis facere. Fugit accusamus aperiam labore quisquam aut. Dolor reiciendis aliquam quod fugit possimus earum neque, iusto ratione expedita? Reiciendis qui sapiente possimus nostrum saepe sit distinctio pariatur autem, commodi ipsa earum. Odit repellat in modi tempora! Quia quisquam repellendus sed quasi sit soluta sint magnam quae modi reiciendis pariatur nisi fuga culpa, sapiente vel tempora similique? Quos officiis possimus dignissimos adipisci. Eveniet explicabo voluptate eligendi doloremque et suscipit, rerum, officiis nesciunt sapiente ipsa magni numquam quam ab recusandae harum incidunt cumque error voluptatem temporibus quae modi, nulla ex? Ratione, modi consequuntur! Itaque expedita vel dolore exercitationem odio officia, eos fugiat obcaecati impedit adipisci sint recusandae consequuntur possimus consectetur sunt nisi repellat voluptates repellendus quisquam esse asperiores minus ea. Facilis, beatae optio. Corporis esse modi laborum dolorum, nisi autem pariatur mollitia. Illo, accusamus sed praesentium atque eos magni. Harum aut repellendus consequatur laborum, praesentium consequuntur voluptates doloremque provident nihil earum tempore est! Iusto porro ullam necessitatibus deleniti officia rerum id distinctio! Non, veritatis ipsa consectetur architecto illo placeat et error vel inventore? Mollitia deserunt minus voluptates praesentium animi. Rerum provident sunt quas! Laborum quibusdam iure totam explicabo culpa temporibus, optio voluptatem nemo at eos voluptas necessitatibus ducimus qui consequatur quam natus dolor ex, nam cumque. Modi optio autem adipisci illo, consectetur provident. Enim suscipit cumque amet blanditiis veritatis sed veniam earum consectetur neque minima quisquam deleniti culpa ut iure ipsa, necessitatibus distinctio recusandae commodi ullam! Laboriosam maxime suscipit hic incidunt tempora harum. Minus architecto veritatis ipsum in eos rem velit sequi? Illo corporis distinctio quisquam ipsa velit magnam, et maxime ad tempore soluta pariatur inventore voluptas illum totam rerum voluptatibus quia atque? Qui cupiditate ea molestias id quisquam nulla a! Ullam nulla molestiae accusantium animi optio in dolorum obcaecati, perferendis beatae dolores est culpa doloremque unde iusto nemo saepe neque repudiandae iste. Eveniet dolorum incidunt obcaecati ipsa vero error officiis doloremque distinctio, voluptas atque totam officia labore veritatis mollitia nostrum ut temporibus voluptates placeat soluta, unde hic corrupti natus pariatur quas. Amet!")), resume && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
    className: "jsx-2932813256" + " " + ((dark ? null : 'light-text') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "RESUME CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus! Commodi magni voluptas nemo earum perferendis voluptatum odio dignissimos molestiae esse aut. Nam quae beatae magnam ea, voluptatibus minus enim vitae culpa, cum expedita fuga nesciunt nulla, ut similique corrupti? Cumque quis illo eius doloremque accusamus aliquid architecto! Pariatur provident cumque minima corporis maiores. Asperiores, debitis eveniet. Quaerat, porro tenetur quam ratione suscipit non voluptates cupiditate totam quis corrupti officiis! Aliquam dicta at molestias dignissimos, illum accusamus, vitae quaerat corrupti perferendis ad obcaecati hic culpa iusto tempora magni sit incidunt minima tempore atque ducimus neque quae. Nisi exercitationem provident blanditiis! Error autem officia tenetur soluta nulla illum, vero commodi recusandae, fuga nobis nam facere itaque harum officiis! Perferendis ipsam esse laboriosam neque enim quod sit. Consequuntur maiores soluta obcaecati aspernatur? Aspernatur, nihil officia! Expedita dolor nemo itaque ratione accusantium unde vel architecto quod accusamus, tenetur blanditiis esse libero laborum amet, fuga adipisci. Reiciendis laborum nam eaque non earum quis facere. Fugit accusamus aperiam labore quisquam aut. Dolor reiciendis aliquam quod fugit possimus earum neque, iusto ratione expedita? Reiciendis qui sapiente possimus nostrum saepe sit distinctio pariatur autem, commodi ipsa earum. Odit repellat in modi tempora! Quia quisquam repellendus sed quasi sit soluta sint magnam quae modi reiciendis pariatur nisi fuga culpa, sapiente vel tempora similique? Quos officiis possimus dignissimos adipisci. Eveniet explicabo voluptate eligendi doloremque et suscipit, rerum, officiis nesciunt sapiente ipsa magni numquam quam ab recusandae harum incidunt cumque error voluptatem temporibus quae modi, nulla ex? Ratione, modi consequuntur! Itaque expedita vel dolore exercitationem odio officia, eos fugiat obcaecati impedit adipisci sint recusandae consequuntur possimus consectetur sunt nisi repellat voluptates repellendus quisquam esse asperiores minus ea. Facilis, beatae optio. Corporis esse modi laborum dolorum, nisi autem pariatur mollitia. Illo, accusamus sed praesentium atque eos magni. Harum aut repellendus consequatur laborum, praesentium consequuntur voluptates doloremque provident nihil earum tempore est! Iusto porro ullam necessitatibus deleniti officia rerum id distinctio! Non, veritatis ipsa consectetur architecto illo placeat et error vel inventore? Mollitia deserunt minus voluptates praesentium animi. Rerum provident sunt quas! Laborum quibusdam iure totam explicabo culpa temporibus, optio voluptatem nemo at eos voluptas necessitatibus ducimus qui consequatur quam natus dolor ex, nam cumque. Modi optio autem adipisci illo, consectetur provident. Enim suscipit cumque amet blanditiis veritatis sed veniam earum consectetur neque minima quisquam deleniti culpa ut iure ipsa, necessitatibus distinctio recusandae commodi ullam! Laboriosam maxime suscipit hic incidunt tempora harum. Minus architecto veritatis ipsum in eos rem velit sequi? Illo corporis distinctio quisquam ipsa velit magnam, et maxime ad tempore soluta pariatur inventore voluptas illum totam rerum voluptatibus quia atque? Qui cupiditate ea molestias id quisquam nulla a! Ullam nulla molestiae accusantium animi optio in dolorum obcaecati, perferendis beatae dolores est culpa doloremque unde iusto nemo saepe neque repudiandae iste. Eveniet dolorum incidunt obcaecati ipsa vero error officiis doloremque distinctio, voluptas atque totam officia labore veritatis mollitia nostrum ut temporibus voluptates placeat soluta, unde hic corrupti natus pariatur quas. Amet!")), contact && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
    className: "jsx-2932813256" + " " + ((dark ? null : 'light-text') || ""),
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
    id: "2932813256",
    __self: this
  }, ".light.jsx-2932813256{background-color:#e5e7e6;margin-top:-5px;font-family:'Raleway',sans-serif;}.dark.jsx-2932813256{background-color:#000c1f;margin-top:-5px;color:#e5e7e6;font-family:'Raleway',sans-serif;}.images.jsx-2932813256{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1%;padding-top:2%;}.sunflower.jsx-2932813256,.roots.jsx-2932813256{max-width:600px;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-animation:colorFadeOut-jsx-2932813256 2s,shapeShiftOut-jsx-2932813256 2s;animation:colorFadeOut-jsx-2932813256 2s,shapeShiftOut-jsx-2932813256 2s;border-radius:50%;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.sunflower.jsx-2932813256:hover,.roots.jsx-2932813256:hover{cursor:pointer;-webkit-animation:colorFadeIn-jsx-2932813256 2s,shapeShiftIn-jsx-2932813256 2s;animation:colorFadeIn-jsx-2932813256 2s,shapeShiftIn-jsx-2932813256 2s;-webkit-filter:grayscale(0%);filter:grayscale(0%);border-radius:50px;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.skills-card.jsx-2932813256{width:33%;height:420px;}.frontend.jsx-2932813256,.backend.jsx-2932813256{width:35%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.titles.jsx-2932813256{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border:1px solid red;padding:2%;}.skills-title.jsx-2932813256{font-size:2.1rem;margin-bottom:5%;}.skills-title.jsx-2932813256:hover{cursor:pointer;}.view.jsx-2932813256{-webkit-animation:fadeIn-jsx-2932813256 1s;animation:fadeIn-jsx-2932813256 1s;opacity:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;max-width:600px;max-height:400px;height:350px;width:550px;background:#fbfbf8;border-radius:50px;padding:2%;margin:3%;cursor:pointer;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.card-back.jsx-2932813256{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.card-icons.jsx-2932813256{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;max-width:600px;max-height:400px;}h2.jsx-2932813256{font-size:4rem;padding-top:2%;padding-bottom:2%;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding-left:2%;}p.jsx-2932813256{padding-left:2%;line-height:1.8;padding-top:2%;}.title-center.jsx-2932813256{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.title.jsx-2932813256{color:#000c1f;margin-right:2%;margin-top:5%;}.title-dark.jsx-2932813256{margin-right:2%;color:#E5E7E6;margin-top:7%;}@-webkit-keyframes colorFadeIn-jsx-2932813256{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@keyframes colorFadeIn-jsx-2932813256{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@-webkit-keyframes colorFadeOut-jsx-2932813256{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@keyframes colorFadeOut-jsx-2932813256{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@-webkit-keyframes shapeShiftIn-jsx-2932813256{from{border-radius:50%;}to{border-radius:50px;}}@keyframes shapeShiftIn-jsx-2932813256{from{border-radius:50%;}to{border-radius:50px;}}@-webkit-keyframes shapeShiftOut-jsx-2932813256{from{border-radius:50px;}to{border-radius:50%;}}@keyframes shapeShiftOut-jsx-2932813256{from{border-radius:50px;}to{border-radius:50%;}}@-webkit-keyframes fadeIn-jsx-2932813256{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-2932813256{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadeOut-jsx-2932813256{from{opacity:1;}to{opacity:0;}}@keyframes fadeOut-jsx-2932813256{from{opacity:1;}to{opacity:0;}}.animate.jsx-2932813256{opacity:1;}.gauges.jsx-2932813256{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:5%;}.gauge-styles.jsx-2932813256{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:200px;}.gauge.jsx-2932813256{background-image:url('../static/DarkBlueBadge.png');background-size:cover;width:200px;height:175px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.dynamic.jsx-2932813256{margin-top:55px;}.light-text.jsx-2932813256{color:#000c1f;}.title-skills.jsx-2932813256{margin;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcU2VjdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMk9vQixBQUc4QyxBQUtBLEFBTVosQUFVRyxBQVdELEFBVUwsQUFNQSxBQVFHLEFBT0ksQUFLRixBQUlLLEFBcUJQLEFBTUEsQUFVRSxBQVFDLEFBS0gsQUFJQyxBQUtFLEFBa0JXLEFBSTVCLEFBSTBCLEFBSTFCLEFBSXVCLEFBR0MsQUFLQSxBQUdELEFBS1IsQUFHQSxBQUtBLEFBR0EsQUFJSixBQUdHLEFBU0EsQUFPdUMsQUFTcEMsQUFHRixBQUluQixPQUFDLEdBNUxpQixBQVFBLEFBbUliLEFBR0EsQUFLQSxBQUdBLEFBSUosSUF0RW9CLEFBcUdwQixDQW5NOEMsQUFxQzlDLEFBd0NtQixDQXhGUSxBQWdHUCxBQWNGLEFBNkZsQixDQWpLcUIsQ0FzR2pCLEFBV0EsQ0FSQSxBQUtBLElBaElKLEVBN0NvQixBQUtBLEtBeUdFLEFBaUJKLEFBS0EsRUFkQyxFQXJEbkIsT0FoRXNDLEFBS3BCLEdBMEhsQixBQUtBLEdBZEEsQ0FSdUIsRUF5Q25CLEFBS0EsRUEwRHNCLEVBbEV0QixBQVdBLENBekprQyxlQWVVLElBcEJoRCxBQVMwQixBQTZDTyxBQXFDUCxBQU1ILEFBdUJJLEFBNkVKLEFBU1UsQUFRakIsSUFoSkYsTUFyQlksRUFzS1QsRUFqTmpCLEFBaUVpQixXQWlKQSwwQ0ExR0csRUFaRCxBQW9HQSxTQTVMSSxBQWtGSSxLQW1CM0IsS0E3RHVCLEFBc0JKLEdBekNNLFFBMEZ6QixBQWdHMkIsd0JBbEtGLEFBd0pDLEdBNUdRLEFBb0duQixXQUNrQixJQXhLVixHQTBCeEIsQ0Fld0IsS0FwREQsS0FxQ3RCLEtBeEI4RCxRQVhBLEdBVi9DLE1BZ0ZRLElBMUN2QixDQXJDbUIsZUFDbkIsQ0EyTXVCLEdBVkgsYUF0SWMsR0F3SWxDLENBL0syRCxRQVhBLGVBNEU1QyxXQUNLLFFBb0dHLFFBbkdGLEVBUnJCLEdBMURzRCxRQVhBLElBK0V0RCxNQW1IQSxnQ0F0TEEsTUFzQ2UsRUFqRGYsU0FrRG9CLGFBOEhGLEdBN0hHLFdBOEhyQixNQTdIaUIsYUFDRCxZQUNPLG1CQUNBLG1CQUNSLFdBQ0QsVUFDSyxlQUMyQywwREFDSCx1REFDTCxrREFDdEQiLCJmaWxlIjoiQzpcXFVzZXJzXFxkaWFtb1xcRGVza3RvcFxcR2l0RmlsZXNcXFBvcnRmb2xpb1xcY2xpZW50XFxjb21wb25lbnRzXFxTZWN0aW9uLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgeyBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcclxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9UcmFuc2l0aW9uJ1xyXG4vLyBpbXBvcnQgeyBUaUFycm93VXBUaGljayB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuaW1wb3J0IFJlYWN0Q2FyZEZsaXAgZnJvbSAncmVhY3QtY2FyZC1mbGlwJztcclxuaW1wb3J0IHsgRGlSZWFjdCwgRGlKYXZhc2NyaXB0MSwgRGlCb290c3RyYXAsIERpU2FzcywgRGlMZXNzLCBEaUNzczMsIERpSHRtbDUsIERpR2l0aHViQmFkZ2UsIERpR2l0LCBEaU5vZGVqc1NtYWxsLCBEaU15c3FsLCBEaVBvc3RncmVzcWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvZGlcIjtcclxuaW1wb3J0IHsgRmFDaGFydExpbmUsIEZhR2xvYmVBbWVyaWNhcyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBNZFBob25lbGluaywgTWRMaWdodGJ1bGJPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbih7dGl0bGUsIGlkLCBpbWFnZSwgY2xhc3NOYW1lUHJvcCwgZGFyaywgc2tpbGxzLCBwb3J0Zm9saW8sIHJlc3VtZSwgY29udGFjdH0pIHtcclxuICAgIGNvbnN0IFtpc0ZsaXBwZWQsIHNldElzRmxpcHBlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc0ZsaXBwZWQyLCBzZXRJc0ZsaXBwZWQyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2JhY2tlbmQsIHNldEJhY2tlbmRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZnJvbnRlbmQsIHNldEZyb250ZW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIC8vIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHNjcm9sbC5zY3JvbGxUb1RvcCgpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgY2xpY2tNZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRGcm9udGVuZCghZnJvbnRlbmQpXHJcbiAgICAgICAgc2V0SXNGbGlwcGVkKCFpc0ZsaXBwZWQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja01lQmFjayA9ICgpID0+IHtcclxuICAgICAgICBzZXRCYWNrZW5kKCFiYWNrZW5kKVxyXG4gICAgICAgIHNldElzRmxpcHBlZDIoIWlzRmxpcHBlZDIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lUHJvcH0+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17XCJzZWN0aW9uXCIgKyAoZGFyayA/IFwiIHNlY3Rpb24tZGFya1wiIDogXCJcIil9PiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudFwiIGlkPXtpZH0+XHJcbiAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAge3NraWxscyA/IDxoMiBjbGFzc05hbWU9J3RpdGxlLWNlbnRlcic+PHNwYW4gY2xhc3NOYW1lPXtkYXJrID8gJ3RpdGxlLWRhcmsgdGl0bGUtc2tpbGxzJyA6ICd0aXRsZSB0aXRsZS1za2lsbHMnfT57dGl0bGV9PC9zcGFuPjwvaDI+IDogPGgyIGNsYXNzTmFtZT0ndGl0bGUtY2VudGVyJz48c3BhbiBjbGFzc05hbWU9e2RhcmsgPyAndGl0bGUtZGFyaycgOiAndGl0bGUnfT57dGl0bGV9PC9zcGFuPjwvaDI+fVxyXG5cclxuICAgICAgICAgICAgey8qIDwvU2Nyb2xsQW5pbWF0aW9uPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgey8qIER5bmFtaWMgU2VjdGlvbnMgKi99XHJcblxyXG4gICAgICAgICAgICB7c2tpbGxzICYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZXMnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zyb250ZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RDYXJkRmxpcCBpc0ZsaXBwZWQ9e2lzRmxpcHBlZH0gZmxpcERpcmVjdGlvbj0naG9yaXpvbnRhbCcgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgIGNsYXNzTmFtZT17J3N1bmZsb3dlcid9IHNyYz0nLi4vc3RhdGljL3RyZWVUb3BGaW5hbGwucG5nJyBhbHQ9J1N1bmZsb3dlciBJbWFnZScga2V5PXtmcm9udGVuZCA/IG51bGwgOiAnZnJvbnQnfSBvbkNsaWNrPXtjbGlja01lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndmlldyd9IG9uQ2xpY2s9e2NsaWNrTWV9IGtleT0nYmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJza2lsbHMtdGl0bGVcIj5Gcm9udCBFbmQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaWNvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBHaXQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpR2l0IHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnI0YzNEYyOSd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBHaXRIdWIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpR2l0aHViQmFkZ2Ugc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjMTgxNjE2J319IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBIVE1MNSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlIdG1sNSBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNFNTREMjYnfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIENTUzMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpQ3NzMyBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMzRDhGQzYnfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIExFU1MgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpTGVzcyBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMyQTREODAnfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNBU1MgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpU2FzcyBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNDQzY2OTknfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJvb3RzdHJhcCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlCb290c3RyYXAgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjNUI0MjgyJ319IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBKYXZhU2NyaXB0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaUphdmFzY3JpcHQxIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnI0YwREI0Rid9fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUmVhY3QgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpUmVhY3Qgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjNjFEQUZCJ319IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBSZWR1eCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi4vc3RhdGljL3JlZHV4LnBuZycgYWx0PSdSZWR1eCBJY29uJyBzdHlsZT17eyB3aWR0aDogJzc1cHgnLCBtYXhIZWlnaHQ6ICc3MHB4JywgbWFyZ2luOiAnMSUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE5leHQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4uL3N0YXRpYy9uZXh0LXRleHQucG5nJyBhbHQ9J05leHQgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc3NXB4JywgbWF4SGVpZ2h0OiAnNzVweCcsIG1hcmdpbkxlZnQ6ICcxJScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3RDYXJkRmxpcD4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tlbmQnIG9uQ2xpY2s9eygpID0+IHNldEJhY2tlbmQoIWJhY2tlbmQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RDYXJkRmxpcCBpc0ZsaXBwZWQ9e2lzRmxpcHBlZDJ9IGZsaXBEaXJlY3Rpb249J2hvcml6b250YWwnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3Jvb3RzJyBzcmM9Jy4uL3N0YXRpYy90cmVlUm9vdHNGaW5hbC5wbmcnIGFsdD0nUm9vdHMgSW1hZ2UnIGtleT17YmFja2VuZCA/IG51bGwgOiAnZnJvbnQnfSBvbkNsaWNrPXtjbGlja01lQmFja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd2aWV3J30gb25DbGljaz17Y2xpY2tNZUJhY2t9IGtleT0nYmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJhY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nc2tpbGxzLXRpdGxlJz5CYWNrIEVuZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaWNvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogR2l0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlHaXQgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjRjM0RjI5J319IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogR2l0SHViICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlHaXRodWJCYWRnZSBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMxODE2MTYnfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBOb2RlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlOb2RlanNTbWFsbCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyM4M0NEMjknfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFeHByZXNzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi4vc3RhdGljL2V4cHJlc3NGaW5hbC5wbmcnIGFsdD0nTmV4dCBJY29uJyBzdHlsZT17eyB3aWR0aDogJzc1cHgnLCBoZWlnaHQ6ICc3NXB4JywgbWFyZ2luVG9wOiAnMiUnLCBwYWRkaW5nTGVmdDogJzIlJyB9fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE15U1FMICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlNeXNxbCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMwMDYxOEEnfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQb3N0Z3JlU1FMICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlQb3N0Z3Jlc3FsIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzMzNjc5MSd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdENhcmRGbGlwPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlcyc+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIGVmZmljaWVudCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nLi4vc3RhdGljL0RhcmtCYWRnZS5wbmcnIHdpZHRoPXsxNzV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGFydExpbmUgc3R5bGU9e3sgY29sb3I6ICcjRTVFN0U2JywgZm9udFNpemU6ICc2cmVtJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJyMwMDBjMWYnLCBmb250V2VpZ2h0OiAnYm9sZGVyJ319PkVmZmljaWVudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgIHN0eWxlPXt7IGNvbG9yOiAnIzE0MTMwMSd9fT5tYXhpbXVtIHByb2R1Y3Rpdml0eTsgd2VsbC1vcmdhbml6ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogcmVzcG9uc2l2ZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZFBob25lbGluayBzdHlsZT17eyBjb2xvcjogJyNFNUU3RTYnLCBmb250U2l6ZTogJzZyZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJyMwMDBjMWYnLCBmb250V2VpZ2h0OiAnYm9sZGVyJ319PlJlc3BvbnNpdmU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnIzE0MTMwMSd9fT5vcHRpbWl6ZWQgbGF5b3V0cyBmb3IgYWxsIGRldmljZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogY3JlYXRpdmUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2Utc3R5bGVzJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWRMaWdodGJ1bGJPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnI0U1RTdFNicsIGZvbnRTaXplOiAnNnJlbScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjMDAwYzFmJywgZm9udFdlaWdodDogJ2JvbGRlcid9fT5DcmVhdGl2ZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMTQxMzAxJ319PmhpZ2hlc3QgcXVhbGl0eSBzb2x1dGlvbnMgcHJvdmlkZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogZHluYW1pYyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMgZHluYW1pYyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhR2xvYmVBbWVyaWNhcyBzdHlsZT17eyBjb2xvcjogJyNFNUU3RTYnLCBmb250U2l6ZTogJzZyZW0nIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjMDAwYzFmJywgZm9udFdlaWdodDogJ2JvbGRlcid9fT5EeW5hbWljPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMxNDEzMDEnfX0+cmVmbGVjdHMgcmVhbC10aW1lIGNoYW5nZXMgaW4gdmFsdWVzIHdpdGggYWN0aXZpdHkuICBCdWlsdCB3aXRoIERSWSwgcmV1c2FibGUgY29tcG9uZW50cy4gPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+fVxyXG5cclxuICAgICAgICAgICAge3BvcnRmb2xpbyAmJlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2RhcmsgPyBudWxsIDogJ2xpZ2h0LXRleHQnfT5QT1JURk9MSU8gQ09OVEVOVCBURVNUIC0gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9ydW0gcXVpYnVzZGFtIHF1aWRlbSBtb2RpLCBjb21tb2RpIGFsaXF1YW0gZnVnYSBxdWFlcmF0LCBpcHN1bSBvcHRpbyBtb2xlc3RpYXMgZG9sb3JlcywgYXV0IGFjY3VzYW50aXVtIGNvbnNlcXVhdHVyIGV4cGVkaXRhLiBWZXJpdGF0aXMsIHJlY3VzYW5kYWUgZG9sb3JlLiBBY2N1c2FtdXMsIGVycm9yIGRlbGVjdHVzIVxyXG4gICAgICAgICAgICBDb21tb2RpIG1hZ25pIHZvbHVwdGFzIG5lbW8gZWFydW0gcGVyZmVyZW5kaXMgdm9sdXB0YXR1bSBvZGlvIGRpZ25pc3NpbW9zIG1vbGVzdGlhZSBlc3NlIGF1dC4gTmFtIHF1YWUgYmVhdGFlIG1hZ25hbSBlYSwgdm9sdXB0YXRpYnVzIG1pbnVzIGVuaW0gdml0YWUgY3VscGEsIGN1bSBleHBlZGl0YSBmdWdhIG5lc2NpdW50IG51bGxhLCB1dCBzaW1pbGlxdWUgY29ycnVwdGk/XHJcbiAgICAgICAgICAgIEN1bXF1ZSBxdWlzIGlsbG8gZWl1cyBkb2xvcmVtcXVlIGFjY3VzYW11cyBhbGlxdWlkIGFyY2hpdGVjdG8hIFBhcmlhdHVyIHByb3ZpZGVudCBjdW1xdWUgbWluaW1hIGNvcnBvcmlzIG1haW9yZXMuIEFzcGVyaW9yZXMsIGRlYml0aXMgZXZlbmlldC4gUXVhZXJhdCwgcG9ycm8gdGVuZXR1ciBxdWFtIHJhdGlvbmUgc3VzY2lwaXQgbm9uIHZvbHVwdGF0ZXMgY3VwaWRpdGF0ZSB0b3RhbSBxdWlzIGNvcnJ1cHRpIG9mZmljaWlzIVxyXG4gICAgICAgICAgICBBbGlxdWFtIGRpY3RhIGF0IG1vbGVzdGlhcyBkaWduaXNzaW1vcywgaWxsdW0gYWNjdXNhbXVzLCB2aXRhZSBxdWFlcmF0IGNvcnJ1cHRpIHBlcmZlcmVuZGlzIGFkIG9iY2FlY2F0aSBoaWMgY3VscGEgaXVzdG8gdGVtcG9yYSBtYWduaSBzaXQgaW5jaWR1bnQgbWluaW1hIHRlbXBvcmUgYXRxdWUgZHVjaW11cyBuZXF1ZSBxdWFlLiBOaXNpIGV4ZXJjaXRhdGlvbmVtIHByb3ZpZGVudCBibGFuZGl0aWlzIVxyXG4gICAgICAgICAgICBFcnJvciBhdXRlbSBvZmZpY2lhIHRlbmV0dXIgc29sdXRhIG51bGxhIGlsbHVtLCB2ZXJvIGNvbW1vZGkgcmVjdXNhbmRhZSwgZnVnYSBub2JpcyBuYW0gZmFjZXJlIGl0YXF1ZSBoYXJ1bSBvZmZpY2lpcyEgUGVyZmVyZW5kaXMgaXBzYW0gZXNzZSBsYWJvcmlvc2FtIG5lcXVlIGVuaW0gcXVvZCBzaXQuIENvbnNlcXV1bnR1ciBtYWlvcmVzIHNvbHV0YSBvYmNhZWNhdGkgYXNwZXJuYXR1cj9cclxuICAgICAgICAgICAgQXNwZXJuYXR1ciwgbmloaWwgb2ZmaWNpYSEgRXhwZWRpdGEgZG9sb3IgbmVtbyBpdGFxdWUgcmF0aW9uZSBhY2N1c2FudGl1bSB1bmRlIHZlbCBhcmNoaXRlY3RvIHF1b2QgYWNjdXNhbXVzLCB0ZW5ldHVyIGJsYW5kaXRpaXMgZXNzZSBsaWJlcm8gbGFib3J1bSBhbWV0LCBmdWdhIGFkaXBpc2NpLiBSZWljaWVuZGlzIGxhYm9ydW0gbmFtIGVhcXVlIG5vbiBlYXJ1bSBxdWlzIGZhY2VyZS5cclxuICAgICAgICAgICAgRnVnaXQgYWNjdXNhbXVzIGFwZXJpYW0gbGFib3JlIHF1aXNxdWFtIGF1dC4gRG9sb3IgcmVpY2llbmRpcyBhbGlxdWFtIHF1b2QgZnVnaXQgcG9zc2ltdXMgZWFydW0gbmVxdWUsIGl1c3RvIHJhdGlvbmUgZXhwZWRpdGE/IFJlaWNpZW5kaXMgcXVpIHNhcGllbnRlIHBvc3NpbXVzIG5vc3RydW0gc2FlcGUgc2l0IGRpc3RpbmN0aW8gcGFyaWF0dXIgYXV0ZW0sIGNvbW1vZGkgaXBzYSBlYXJ1bS5cclxuICAgICAgICAgICAgT2RpdCByZXBlbGxhdCBpbiBtb2RpIHRlbXBvcmEhIFF1aWEgcXVpc3F1YW0gcmVwZWxsZW5kdXMgc2VkIHF1YXNpIHNpdCBzb2x1dGEgc2ludCBtYWduYW0gcXVhZSBtb2RpIHJlaWNpZW5kaXMgcGFyaWF0dXIgbmlzaSBmdWdhIGN1bHBhLCBzYXBpZW50ZSB2ZWwgdGVtcG9yYSBzaW1pbGlxdWU/IFF1b3Mgb2ZmaWNpaXMgcG9zc2ltdXMgZGlnbmlzc2ltb3MgYWRpcGlzY2kuXHJcbiAgICAgICAgICAgIEV2ZW5pZXQgZXhwbGljYWJvIHZvbHVwdGF0ZSBlbGlnZW5kaSBkb2xvcmVtcXVlIGV0IHN1c2NpcGl0LCByZXJ1bSwgb2ZmaWNpaXMgbmVzY2l1bnQgc2FwaWVudGUgaXBzYSBtYWduaSBudW1xdWFtIHF1YW0gYWIgcmVjdXNhbmRhZSBoYXJ1bSBpbmNpZHVudCBjdW1xdWUgZXJyb3Igdm9sdXB0YXRlbSB0ZW1wb3JpYnVzIHF1YWUgbW9kaSwgbnVsbGEgZXg/IFJhdGlvbmUsIG1vZGkgY29uc2VxdXVudHVyIVxyXG4gICAgICAgICAgICBJdGFxdWUgZXhwZWRpdGEgdmVsIGRvbG9yZSBleGVyY2l0YXRpb25lbSBvZGlvIG9mZmljaWEsIGVvcyBmdWdpYXQgb2JjYWVjYXRpIGltcGVkaXQgYWRpcGlzY2kgc2ludCByZWN1c2FuZGFlIGNvbnNlcXV1bnR1ciBwb3NzaW11cyBjb25zZWN0ZXR1ciBzdW50IG5pc2kgcmVwZWxsYXQgdm9sdXB0YXRlcyByZXBlbGxlbmR1cyBxdWlzcXVhbSBlc3NlIGFzcGVyaW9yZXMgbWludXMgZWEuIEZhY2lsaXMsIGJlYXRhZSBvcHRpby5cclxuICAgICAgICAgICAgQ29ycG9yaXMgZXNzZSBtb2RpIGxhYm9ydW0gZG9sb3J1bSwgbmlzaSBhdXRlbSBwYXJpYXR1ciBtb2xsaXRpYS4gSWxsbywgYWNjdXNhbXVzIHNlZCBwcmFlc2VudGl1bSBhdHF1ZSBlb3MgbWFnbmkuIEhhcnVtIGF1dCByZXBlbGxlbmR1cyBjb25zZXF1YXR1ciBsYWJvcnVtLCBwcmFlc2VudGl1bSBjb25zZXF1dW50dXIgdm9sdXB0YXRlcyBkb2xvcmVtcXVlIHByb3ZpZGVudCBuaWhpbCBlYXJ1bSB0ZW1wb3JlIGVzdCFcclxuICAgICAgICAgICAgSXVzdG8gcG9ycm8gdWxsYW0gbmVjZXNzaXRhdGlidXMgZGVsZW5pdGkgb2ZmaWNpYSByZXJ1bSBpZCBkaXN0aW5jdGlvISBOb24sIHZlcml0YXRpcyBpcHNhIGNvbnNlY3RldHVyIGFyY2hpdGVjdG8gaWxsbyBwbGFjZWF0IGV0IGVycm9yIHZlbCBpbnZlbnRvcmU/IE1vbGxpdGlhIGRlc2VydW50IG1pbnVzIHZvbHVwdGF0ZXMgcHJhZXNlbnRpdW0gYW5pbWkuIFJlcnVtIHByb3ZpZGVudCBzdW50IHF1YXMhXHJcbiAgICAgICAgICAgIExhYm9ydW0gcXVpYnVzZGFtIGl1cmUgdG90YW0gZXhwbGljYWJvIGN1bHBhIHRlbXBvcmlidXMsIG9wdGlvIHZvbHVwdGF0ZW0gbmVtbyBhdCBlb3Mgdm9sdXB0YXMgbmVjZXNzaXRhdGlidXMgZHVjaW11cyBxdWkgY29uc2VxdWF0dXIgcXVhbSBuYXR1cyBkb2xvciBleCwgbmFtIGN1bXF1ZS4gTW9kaSBvcHRpbyBhdXRlbSBhZGlwaXNjaSBpbGxvLCBjb25zZWN0ZXR1ciBwcm92aWRlbnQuXHJcbiAgICAgICAgICAgIEVuaW0gc3VzY2lwaXQgY3VtcXVlIGFtZXQgYmxhbmRpdGlpcyB2ZXJpdGF0aXMgc2VkIHZlbmlhbSBlYXJ1bSBjb25zZWN0ZXR1ciBuZXF1ZSBtaW5pbWEgcXVpc3F1YW0gZGVsZW5pdGkgY3VscGEgdXQgaXVyZSBpcHNhLCBuZWNlc3NpdGF0aWJ1cyBkaXN0aW5jdGlvIHJlY3VzYW5kYWUgY29tbW9kaSB1bGxhbSEgTGFib3Jpb3NhbSBtYXhpbWUgc3VzY2lwaXQgaGljIGluY2lkdW50IHRlbXBvcmEgaGFydW0uXHJcbiAgICAgICAgICAgIE1pbnVzIGFyY2hpdGVjdG8gdmVyaXRhdGlzIGlwc3VtIGluIGVvcyByZW0gdmVsaXQgc2VxdWk/IElsbG8gY29ycG9yaXMgZGlzdGluY3RpbyBxdWlzcXVhbSBpcHNhIHZlbGl0IG1hZ25hbSwgZXQgbWF4aW1lIGFkIHRlbXBvcmUgc29sdXRhIHBhcmlhdHVyIGludmVudG9yZSB2b2x1cHRhcyBpbGx1bSB0b3RhbSByZXJ1bSB2b2x1cHRhdGlidXMgcXVpYSBhdHF1ZT9cclxuICAgICAgICAgICAgUXVpIGN1cGlkaXRhdGUgZWEgbW9sZXN0aWFzIGlkIHF1aXNxdWFtIG51bGxhIGEhIFVsbGFtIG51bGxhIG1vbGVzdGlhZSBhY2N1c2FudGl1bSBhbmltaSBvcHRpbyBpbiBkb2xvcnVtIG9iY2FlY2F0aSwgcGVyZmVyZW5kaXMgYmVhdGFlIGRvbG9yZXMgZXN0IGN1bHBhIGRvbG9yZW1xdWUgdW5kZSBpdXN0byBuZW1vIHNhZXBlIG5lcXVlIHJlcHVkaWFuZGFlIGlzdGUuXHJcbiAgICAgICAgICAgIEV2ZW5pZXQgZG9sb3J1bSBpbmNpZHVudCBvYmNhZWNhdGkgaXBzYSB2ZXJvIGVycm9yIG9mZmljaWlzIGRvbG9yZW1xdWUgZGlzdGluY3Rpbywgdm9sdXB0YXMgYXRxdWUgdG90YW0gb2ZmaWNpYSBsYWJvcmUgdmVyaXRhdGlzIG1vbGxpdGlhIG5vc3RydW0gdXQgdGVtcG9yaWJ1cyB2b2x1cHRhdGVzIHBsYWNlYXQgc29sdXRhLCB1bmRlIGhpYyBjb3JydXB0aSBuYXR1cyBwYXJpYXR1ciBxdWFzLiBBbWV0IVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgICAgIHtyZXN1bWUgJiZcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtkYXJrID8gbnVsbCA6ICdsaWdodC10ZXh0J30+UkVTVU1FIENPTlRFTlQgVEVTVCAtIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvcnVtIHF1aWJ1c2RhbSBxdWlkZW0gbW9kaSwgY29tbW9kaSBhbGlxdWFtIGZ1Z2EgcXVhZXJhdCwgaXBzdW0gb3B0aW8gbW9sZXN0aWFzIGRvbG9yZXMsIGF1dCBhY2N1c2FudGl1bSBjb25zZXF1YXR1ciBleHBlZGl0YS4gVmVyaXRhdGlzLCByZWN1c2FuZGFlIGRvbG9yZS4gQWNjdXNhbXVzLCBlcnJvciBkZWxlY3R1cyFcclxuICAgICAgICAgICAgQ29tbW9kaSBtYWduaSB2b2x1cHRhcyBuZW1vIGVhcnVtIHBlcmZlcmVuZGlzIHZvbHVwdGF0dW0gb2RpbyBkaWduaXNzaW1vcyBtb2xlc3RpYWUgZXNzZSBhdXQuIE5hbSBxdWFlIGJlYXRhZSBtYWduYW0gZWEsIHZvbHVwdGF0aWJ1cyBtaW51cyBlbmltIHZpdGFlIGN1bHBhLCBjdW0gZXhwZWRpdGEgZnVnYSBuZXNjaXVudCBudWxsYSwgdXQgc2ltaWxpcXVlIGNvcnJ1cHRpP1xyXG4gICAgICAgICAgICBDdW1xdWUgcXVpcyBpbGxvIGVpdXMgZG9sb3JlbXF1ZSBhY2N1c2FtdXMgYWxpcXVpZCBhcmNoaXRlY3RvISBQYXJpYXR1ciBwcm92aWRlbnQgY3VtcXVlIG1pbmltYSBjb3Jwb3JpcyBtYWlvcmVzLiBBc3BlcmlvcmVzLCBkZWJpdGlzIGV2ZW5pZXQuIFF1YWVyYXQsIHBvcnJvIHRlbmV0dXIgcXVhbSByYXRpb25lIHN1c2NpcGl0IG5vbiB2b2x1cHRhdGVzIGN1cGlkaXRhdGUgdG90YW0gcXVpcyBjb3JydXB0aSBvZmZpY2lpcyFcclxuICAgICAgICAgICAgQWxpcXVhbSBkaWN0YSBhdCBtb2xlc3RpYXMgZGlnbmlzc2ltb3MsIGlsbHVtIGFjY3VzYW11cywgdml0YWUgcXVhZXJhdCBjb3JydXB0aSBwZXJmZXJlbmRpcyBhZCBvYmNhZWNhdGkgaGljIGN1bHBhIGl1c3RvIHRlbXBvcmEgbWFnbmkgc2l0IGluY2lkdW50IG1pbmltYSB0ZW1wb3JlIGF0cXVlIGR1Y2ltdXMgbmVxdWUgcXVhZS4gTmlzaSBleGVyY2l0YXRpb25lbSBwcm92aWRlbnQgYmxhbmRpdGlpcyFcclxuICAgICAgICAgICAgRXJyb3IgYXV0ZW0gb2ZmaWNpYSB0ZW5ldHVyIHNvbHV0YSBudWxsYSBpbGx1bSwgdmVybyBjb21tb2RpIHJlY3VzYW5kYWUsIGZ1Z2Egbm9iaXMgbmFtIGZhY2VyZSBpdGFxdWUgaGFydW0gb2ZmaWNpaXMhIFBlcmZlcmVuZGlzIGlwc2FtIGVzc2UgbGFib3Jpb3NhbSBuZXF1ZSBlbmltIHF1b2Qgc2l0LiBDb25zZXF1dW50dXIgbWFpb3JlcyBzb2x1dGEgb2JjYWVjYXRpIGFzcGVybmF0dXI/XHJcbiAgICAgICAgICAgIEFzcGVybmF0dXIsIG5paGlsIG9mZmljaWEhIEV4cGVkaXRhIGRvbG9yIG5lbW8gaXRhcXVlIHJhdGlvbmUgYWNjdXNhbnRpdW0gdW5kZSB2ZWwgYXJjaGl0ZWN0byBxdW9kIGFjY3VzYW11cywgdGVuZXR1ciBibGFuZGl0aWlzIGVzc2UgbGliZXJvIGxhYm9ydW0gYW1ldCwgZnVnYSBhZGlwaXNjaS4gUmVpY2llbmRpcyBsYWJvcnVtIG5hbSBlYXF1ZSBub24gZWFydW0gcXVpcyBmYWNlcmUuXHJcbiAgICAgICAgICAgIEZ1Z2l0IGFjY3VzYW11cyBhcGVyaWFtIGxhYm9yZSBxdWlzcXVhbSBhdXQuIERvbG9yIHJlaWNpZW5kaXMgYWxpcXVhbSBxdW9kIGZ1Z2l0IHBvc3NpbXVzIGVhcnVtIG5lcXVlLCBpdXN0byByYXRpb25lIGV4cGVkaXRhPyBSZWljaWVuZGlzIHF1aSBzYXBpZW50ZSBwb3NzaW11cyBub3N0cnVtIHNhZXBlIHNpdCBkaXN0aW5jdGlvIHBhcmlhdHVyIGF1dGVtLCBjb21tb2RpIGlwc2EgZWFydW0uXHJcbiAgICAgICAgICAgIE9kaXQgcmVwZWxsYXQgaW4gbW9kaSB0ZW1wb3JhISBRdWlhIHF1aXNxdWFtIHJlcGVsbGVuZHVzIHNlZCBxdWFzaSBzaXQgc29sdXRhIHNpbnQgbWFnbmFtIHF1YWUgbW9kaSByZWljaWVuZGlzIHBhcmlhdHVyIG5pc2kgZnVnYSBjdWxwYSwgc2FwaWVudGUgdmVsIHRlbXBvcmEgc2ltaWxpcXVlPyBRdW9zIG9mZmljaWlzIHBvc3NpbXVzIGRpZ25pc3NpbW9zIGFkaXBpc2NpLlxyXG4gICAgICAgICAgICBFdmVuaWV0IGV4cGxpY2FibyB2b2x1cHRhdGUgZWxpZ2VuZGkgZG9sb3JlbXF1ZSBldCBzdXNjaXBpdCwgcmVydW0sIG9mZmljaWlzIG5lc2NpdW50IHNhcGllbnRlIGlwc2EgbWFnbmkgbnVtcXVhbSBxdWFtIGFiIHJlY3VzYW5kYWUgaGFydW0gaW5jaWR1bnQgY3VtcXVlIGVycm9yIHZvbHVwdGF0ZW0gdGVtcG9yaWJ1cyBxdWFlIG1vZGksIG51bGxhIGV4PyBSYXRpb25lLCBtb2RpIGNvbnNlcXV1bnR1ciFcclxuICAgICAgICAgICAgSXRhcXVlIGV4cGVkaXRhIHZlbCBkb2xvcmUgZXhlcmNpdGF0aW9uZW0gb2RpbyBvZmZpY2lhLCBlb3MgZnVnaWF0IG9iY2FlY2F0aSBpbXBlZGl0IGFkaXBpc2NpIHNpbnQgcmVjdXNhbmRhZSBjb25zZXF1dW50dXIgcG9zc2ltdXMgY29uc2VjdGV0dXIgc3VudCBuaXNpIHJlcGVsbGF0IHZvbHVwdGF0ZXMgcmVwZWxsZW5kdXMgcXVpc3F1YW0gZXNzZSBhc3BlcmlvcmVzIG1pbnVzIGVhLiBGYWNpbGlzLCBiZWF0YWUgb3B0aW8uXHJcbiAgICAgICAgICAgIENvcnBvcmlzIGVzc2UgbW9kaSBsYWJvcnVtIGRvbG9ydW0sIG5pc2kgYXV0ZW0gcGFyaWF0dXIgbW9sbGl0aWEuIElsbG8sIGFjY3VzYW11cyBzZWQgcHJhZXNlbnRpdW0gYXRxdWUgZW9zIG1hZ25pLiBIYXJ1bSBhdXQgcmVwZWxsZW5kdXMgY29uc2VxdWF0dXIgbGFib3J1bSwgcHJhZXNlbnRpdW0gY29uc2VxdXVudHVyIHZvbHVwdGF0ZXMgZG9sb3JlbXF1ZSBwcm92aWRlbnQgbmloaWwgZWFydW0gdGVtcG9yZSBlc3QhXHJcbiAgICAgICAgICAgIEl1c3RvIHBvcnJvIHVsbGFtIG5lY2Vzc2l0YXRpYnVzIGRlbGVuaXRpIG9mZmljaWEgcmVydW0gaWQgZGlzdGluY3RpbyEgTm9uLCB2ZXJpdGF0aXMgaXBzYSBjb25zZWN0ZXR1ciBhcmNoaXRlY3RvIGlsbG8gcGxhY2VhdCBldCBlcnJvciB2ZWwgaW52ZW50b3JlPyBNb2xsaXRpYSBkZXNlcnVudCBtaW51cyB2b2x1cHRhdGVzIHByYWVzZW50aXVtIGFuaW1pLiBSZXJ1bSBwcm92aWRlbnQgc3VudCBxdWFzIVxyXG4gICAgICAgICAgICBMYWJvcnVtIHF1aWJ1c2RhbSBpdXJlIHRvdGFtIGV4cGxpY2FibyBjdWxwYSB0ZW1wb3JpYnVzLCBvcHRpbyB2b2x1cHRhdGVtIG5lbW8gYXQgZW9zIHZvbHVwdGFzIG5lY2Vzc2l0YXRpYnVzIGR1Y2ltdXMgcXVpIGNvbnNlcXVhdHVyIHF1YW0gbmF0dXMgZG9sb3IgZXgsIG5hbSBjdW1xdWUuIE1vZGkgb3B0aW8gYXV0ZW0gYWRpcGlzY2kgaWxsbywgY29uc2VjdGV0dXIgcHJvdmlkZW50LlxyXG4gICAgICAgICAgICBFbmltIHN1c2NpcGl0IGN1bXF1ZSBhbWV0IGJsYW5kaXRpaXMgdmVyaXRhdGlzIHNlZCB2ZW5pYW0gZWFydW0gY29uc2VjdGV0dXIgbmVxdWUgbWluaW1hIHF1aXNxdWFtIGRlbGVuaXRpIGN1bHBhIHV0IGl1cmUgaXBzYSwgbmVjZXNzaXRhdGlidXMgZGlzdGluY3RpbyByZWN1c2FuZGFlIGNvbW1vZGkgdWxsYW0hIExhYm9yaW9zYW0gbWF4aW1lIHN1c2NpcGl0IGhpYyBpbmNpZHVudCB0ZW1wb3JhIGhhcnVtLlxyXG4gICAgICAgICAgICBNaW51cyBhcmNoaXRlY3RvIHZlcml0YXRpcyBpcHN1bSBpbiBlb3MgcmVtIHZlbGl0IHNlcXVpPyBJbGxvIGNvcnBvcmlzIGRpc3RpbmN0aW8gcXVpc3F1YW0gaXBzYSB2ZWxpdCBtYWduYW0sIGV0IG1heGltZSBhZCB0ZW1wb3JlIHNvbHV0YSBwYXJpYXR1ciBpbnZlbnRvcmUgdm9sdXB0YXMgaWxsdW0gdG90YW0gcmVydW0gdm9sdXB0YXRpYnVzIHF1aWEgYXRxdWU/XHJcbiAgICAgICAgICAgIFF1aSBjdXBpZGl0YXRlIGVhIG1vbGVzdGlhcyBpZCBxdWlzcXVhbSBudWxsYSBhISBVbGxhbSBudWxsYSBtb2xlc3RpYWUgYWNjdXNhbnRpdW0gYW5pbWkgb3B0aW8gaW4gZG9sb3J1bSBvYmNhZWNhdGksIHBlcmZlcmVuZGlzIGJlYXRhZSBkb2xvcmVzIGVzdCBjdWxwYSBkb2xvcmVtcXVlIHVuZGUgaXVzdG8gbmVtbyBzYWVwZSBuZXF1ZSByZXB1ZGlhbmRhZSBpc3RlLlxyXG4gICAgICAgICAgICBFdmVuaWV0IGRvbG9ydW0gaW5jaWR1bnQgb2JjYWVjYXRpIGlwc2EgdmVybyBlcnJvciBvZmZpY2lpcyBkb2xvcmVtcXVlIGRpc3RpbmN0aW8sIHZvbHVwdGFzIGF0cXVlIHRvdGFtIG9mZmljaWEgbGFib3JlIHZlcml0YXRpcyBtb2xsaXRpYSBub3N0cnVtIHV0IHRlbXBvcmlidXMgdm9sdXB0YXRlcyBwbGFjZWF0IHNvbHV0YSwgdW5kZSBoaWMgY29ycnVwdGkgbmF0dXMgcGFyaWF0dXIgcXVhcy4gQW1ldCFcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8Lz59XHJcblxyXG4gICAgICAgICAgICB7Y29udGFjdCAmJlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2RhcmsgPyBudWxsIDogJ2xpZ2h0LXRleHQnfT5DT05UQUNUIENPTlRFTlQgVEVTVCAtIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvcnVtIHF1aWJ1c2RhbSBxdWlkZW0gbW9kaSwgY29tbW9kaSBhbGlxdWFtIGZ1Z2EgcXVhZXJhdCwgaXBzdW0gb3B0aW8gbW9sZXN0aWFzIGRvbG9yZXMsIGF1dCBhY2N1c2FudGl1bSBjb25zZXF1YXR1ciBleHBlZGl0YS4gVmVyaXRhdGlzLCByZWN1c2FuZGFlIGRvbG9yZS4gQWNjdXNhbXVzLCBlcnJvciBkZWxlY3R1cyFcclxuICAgICAgICAgICAgQ29tbW9kaSBtYWduaSB2b2x1cHRhcyBuZW1vIGVhcnVtIHBlcmZlcmVuZGlzIHZvbHVwdGF0dW0gb2RpbyBkaWduaXNzaW1vcyBtb2xlc3RpYWUgZXNzZSBhdXQuIE5hbSBxdWFlIGJlYXRhZSBtYWduYW0gZWEsIHZvbHVwdGF0aWJ1cyBtaW51cyBlbmltIHZpdGFlIGN1bHBhLCBjdW0gZXhwZWRpdGEgZnVnYSBuZXNjaXVudCBudWxsYSwgdXQgc2ltaWxpcXVlIGNvcnJ1cHRpP1xyXG4gICAgICAgICAgICBDdW1xdWUgcXVpcyBpbGxvIGVpdXMgZG9sb3JlbXF1ZSBhY2N1c2FtdXMgYWxpcXVpZCBhcmNoaXRlY3RvISBQYXJpYXR1ciBwcm92aWRlbnQgY3VtcXVlIG1pbmltYSBjb3Jwb3JpcyBtYWlvcmVzLiBBc3BlcmlvcmVzLCBkZWJpdGlzIGV2ZW5pZXQuIFF1YWVyYXQsIHBvcnJvIHRlbmV0dXIgcXVhbSByYXRpb25lIHN1c2NpcGl0IG5vbiB2b2x1cHRhdGVzIGN1cGlkaXRhdGUgdG90YW0gcXVpcyBjb3JydXB0aSBvZmZpY2lpcyFcclxuICAgICAgICAgICAgQWxpcXVhbSBkaWN0YSBhdCBtb2xlc3RpYXMgZGlnbmlzc2ltb3MsIGlsbHVtIGFjY3VzYW11cywgdml0YWUgcXVhZXJhdCBjb3JydXB0aSBwZXJmZXJlbmRpcyBhZCBvYmNhZWNhdGkgaGljIGN1bHBhIGl1c3RvIHRlbXBvcmEgbWFnbmkgc2l0IGluY2lkdW50IG1pbmltYSB0ZW1wb3JlIGF0cXVlIGR1Y2ltdXMgbmVxdWUgcXVhZS4gTmlzaSBleGVyY2l0YXRpb25lbSBwcm92aWRlbnQgYmxhbmRpdGlpcyFcclxuICAgICAgICAgICAgRXJyb3IgYXV0ZW0gb2ZmaWNpYSB0ZW5ldHVyIHNvbHV0YSBudWxsYSBpbGx1bSwgdmVybyBjb21tb2RpIHJlY3VzYW5kYWUsIGZ1Z2Egbm9iaXMgbmFtIGZhY2VyZSBpdGFxdWUgaGFydW0gb2ZmaWNpaXMhIFBlcmZlcmVuZGlzIGlwc2FtIGVzc2UgbGFib3Jpb3NhbSBuZXF1ZSBlbmltIHF1b2Qgc2l0LiBDb25zZXF1dW50dXIgbWFpb3JlcyBzb2x1dGEgb2JjYWVjYXRpIGFzcGVybmF0dXI/XHJcbiAgICAgICAgICAgIEFzcGVybmF0dXIsIG5paGlsIG9mZmljaWEhIEV4cGVkaXRhIGRvbG9yIG5lbW8gaXRhcXVlIHJhdGlvbmUgYWNjdXNhbnRpdW0gdW5kZSB2ZWwgYXJjaGl0ZWN0byBxdW9kIGFjY3VzYW11cywgdGVuZXR1ciBibGFuZGl0aWlzIGVzc2UgbGliZXJvIGxhYm9ydW0gYW1ldCwgZnVnYSBhZGlwaXNjaS4gUmVpY2llbmRpcyBsYWJvcnVtIG5hbSBlYXF1ZSBub24gZWFydW0gcXVpcyBmYWNlcmUuXHJcbiAgICAgICAgICAgIEZ1Z2l0IGFjY3VzYW11cyBhcGVyaWFtIGxhYm9yZSBxdWlzcXVhbSBhdXQuIERvbG9yIHJlaWNpZW5kaXMgYWxpcXVhbSBxdW9kIGZ1Z2l0IHBvc3NpbXVzIGVhcnVtIG5lcXVlLCBpdXN0byByYXRpb25lIGV4cGVkaXRhPyBSZWljaWVuZGlzIHF1aSBzYXBpZW50ZSBwb3NzaW11cyBub3N0cnVtIHNhZXBlIHNpdCBkaXN0aW5jdGlvIHBhcmlhdHVyIGF1dGVtLCBjb21tb2RpIGlwc2EgZWFydW0uXHJcbiAgICAgICAgICAgIE9kaXQgcmVwZWxsYXQgaW4gbW9kaSB0ZW1wb3JhISBRdWlhIHF1aXNxdWFtIHJlcGVsbGVuZHVzIHNlZCBxdWFzaSBzaXQgc29sdXRhIHNpbnQgbWFnbmFtIHF1YWUgbW9kaSByZWljaWVuZGlzIHBhcmlhdHVyIG5pc2kgZnVnYSBjdWxwYSwgc2FwaWVudGUgdmVsIHRlbXBvcmEgc2ltaWxpcXVlPyBRdW9zIG9mZmljaWlzIHBvc3NpbXVzIGRpZ25pc3NpbW9zIGFkaXBpc2NpLlxyXG4gICAgICAgICAgICBFdmVuaWV0IGV4cGxpY2FibyB2b2x1cHRhdGUgZWxpZ2VuZGkgZG9sb3JlbXF1ZSBldCBzdXNjaXBpdCwgcmVydW0sIG9mZmljaWlzIG5lc2NpdW50IHNhcGllbnRlIGlwc2EgbWFnbmkgbnVtcXVhbSBxdWFtIGFiIHJlY3VzYW5kYWUgaGFydW0gaW5jaWR1bnQgY3VtcXVlIGVycm9yIHZvbHVwdGF0ZW0gdGVtcG9yaWJ1cyBxdWFlIG1vZGksIG51bGxhIGV4PyBSYXRpb25lLCBtb2RpIGNvbnNlcXV1bnR1ciFcclxuICAgICAgICAgICAgSXRhcXVlIGV4cGVkaXRhIHZlbCBkb2xvcmUgZXhlcmNpdGF0aW9uZW0gb2RpbyBvZmZpY2lhLCBlb3MgZnVnaWF0IG9iY2FlY2F0aSBpbXBlZGl0IGFkaXBpc2NpIHNpbnQgcmVjdXNhbmRhZSBjb25zZXF1dW50dXIgcG9zc2ltdXMgY29uc2VjdGV0dXIgc3VudCBuaXNpIHJlcGVsbGF0IHZvbHVwdGF0ZXMgcmVwZWxsZW5kdXMgcXVpc3F1YW0gZXNzZSBhc3BlcmlvcmVzIG1pbnVzIGVhLiBGYWNpbGlzLCBiZWF0YWUgb3B0aW8uXHJcbiAgICAgICAgICAgIENvcnBvcmlzIGVzc2UgbW9kaSBsYWJvcnVtIGRvbG9ydW0sIG5pc2kgYXV0ZW0gcGFyaWF0dXIgbW9sbGl0aWEuIElsbG8sIGFjY3VzYW11cyBzZWQgcHJhZXNlbnRpdW0gYXRxdWUgZW9zIG1hZ25pLiBIYXJ1bSBhdXQgcmVwZWxsZW5kdXMgY29uc2VxdWF0dXIgbGFib3J1bSwgcHJhZXNlbnRpdW0gY29uc2VxdXVudHVyIHZvbHVwdGF0ZXMgZG9sb3JlbXF1ZSBwcm92aWRlbnQgbmloaWwgZWFydW0gdGVtcG9yZSBlc3QhXHJcbiAgICAgICAgICAgIEl1c3RvIHBvcnJvIHVsbGFtIG5lY2Vzc2l0YXRpYnVzIGRlbGVuaXRpIG9mZmljaWEgcmVydW0gaWQgZGlzdGluY3RpbyEgTm9uLCB2ZXJpdGF0aXMgaXBzYSBjb25zZWN0ZXR1ciBhcmNoaXRlY3RvIGlsbG8gcGxhY2VhdCBldCBlcnJvciB2ZWwgaW52ZW50b3JlPyBNb2xsaXRpYSBkZXNlcnVudCBtaW51cyB2b2x1cHRhdGVzIHByYWVzZW50aXVtIGFuaW1pLiBSZXJ1bSBwcm92aWRlbnQgc3VudCBxdWFzIVxyXG4gICAgICAgICAgICBMYWJvcnVtIHF1aWJ1c2RhbSBpdXJlIHRvdGFtIGV4cGxpY2FibyBjdWxwYSB0ZW1wb3JpYnVzLCBvcHRpbyB2b2x1cHRhdGVtIG5lbW8gYXQgZW9zIHZvbHVwdGFzIG5lY2Vzc2l0YXRpYnVzIGR1Y2ltdXMgcXVpIGNvbnNlcXVhdHVyIHF1YW0gbmF0dXMgZG9sb3IgZXgsIG5hbSBjdW1xdWUuIE1vZGkgb3B0aW8gYXV0ZW0gYWRpcGlzY2kgaWxsbywgY29uc2VjdGV0dXIgcHJvdmlkZW50LlxyXG4gICAgICAgICAgICBFbmltIHN1c2NpcGl0IGN1bXF1ZSBhbWV0IGJsYW5kaXRpaXMgdmVyaXRhdGlzIHNlZCB2ZW5pYW0gZWFydW0gY29uc2VjdGV0dXIgbmVxdWUgbWluaW1hIHF1aXNxdWFtIGRlbGVuaXRpIGN1bHBhIHV0IGl1cmUgaXBzYSwgbmVjZXNzaXRhdGlidXMgZGlzdGluY3RpbyByZWN1c2FuZGFlIGNvbW1vZGkgdWxsYW0hIExhYm9yaW9zYW0gbWF4aW1lIHN1c2NpcGl0IGhpYyBpbmNpZHVudCB0ZW1wb3JhIGhhcnVtLlxyXG4gICAgICAgICAgICBNaW51cyBhcmNoaXRlY3RvIHZlcml0YXRpcyBpcHN1bSBpbiBlb3MgcmVtIHZlbGl0IHNlcXVpPyBJbGxvIGNvcnBvcmlzIGRpc3RpbmN0aW8gcXVpc3F1YW0gaXBzYSB2ZWxpdCBtYWduYW0sIGV0IG1heGltZSBhZCB0ZW1wb3JlIHNvbHV0YSBwYXJpYXR1ciBpbnZlbnRvcmUgdm9sdXB0YXMgaWxsdW0gdG90YW0gcmVydW0gdm9sdXB0YXRpYnVzIHF1aWEgYXRxdWU/XHJcbiAgICAgICAgICAgIFF1aSBjdXBpZGl0YXRlIGVhIG1vbGVzdGlhcyBpZCBxdWlzcXVhbSBudWxsYSBhISBVbGxhbSBudWxsYSBtb2xlc3RpYWUgYWNjdXNhbnRpdW0gYW5pbWkgb3B0aW8gaW4gZG9sb3J1bSBvYmNhZWNhdGksIHBlcmZlcmVuZGlzIGJlYXRhZSBkb2xvcmVzIGVzdCBjdWxwYSBkb2xvcmVtcXVlIHVuZGUgaXVzdG8gbmVtbyBzYWVwZSBuZXF1ZSByZXB1ZGlhbmRhZSBpc3RlLlxyXG4gICAgICAgICAgICBFdmVuaWV0IGRvbG9ydW0gaW5jaWR1bnQgb2JjYWVjYXRpIGlwc2EgdmVybyBlcnJvciBvZmZpY2lpcyBkb2xvcmVtcXVlIGRpc3RpbmN0aW8sIHZvbHVwdGFzIGF0cXVlIHRvdGFtIG9mZmljaWEgbGFib3JlIHZlcml0YXRpcyBtb2xsaXRpYSBub3N0cnVtIHV0IHRlbXBvcmlidXMgdm9sdXB0YXRlcyBwbGFjZWF0IHNvbHV0YSwgdW5kZSBoaWMgY29ycnVwdGkgbmF0dXMgcGFyaWF0dXIgcXVhcy4gQW1ldCFcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8VHJhbnNpdGlvbiBpbWFnZT17aW1hZ2V9IGRhcms9e2Rhcmt9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmxpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kYXJrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWFnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnN1bmZsb3dlciwgLnJvb3RzIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogY29sb3JGYWRlT3V0IDJzLCBzaGFwZVNoaWZ0T3V0IDJzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDNweCBzb2xpZCAjMTQxMzAxXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuc3VuZmxvd2VyOmhvdmVyLCAucm9vdHM6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGNvbG9yRmFkZUluIDJzLCBzaGFwZVNoaWZ0SW4gMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAzcHggc29saWQgI2I4MGMwOVxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5za2lsbHMtY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mcm9udGVuZCwgLmJhY2tlbmQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2tpbGxzLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy10aXRsZTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC52aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAxcztcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZiZmJmODtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZS1jZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUtZGFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0U1RTdFNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIC5hcnJvdy11cC1pY29uLWRhcmsge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbi1sZWZ0OiA0OSU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gLmFycm93LXVwLWljb24ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbi1sZWZ0OiA0OSU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBjb2xvckZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDAlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgY29sb3JGYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzaGFwZVNoaWZ0SW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNoYXBlU2hpZnRPdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2F1Z2VzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2F1Z2Utc3R5bGVzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmdhdWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3N0YXRpYy9EYXJrQmx1ZUJhZGdlLnBuZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmR5bmFtaWMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlnaHQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUtc2tpbGxzIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4vLyBkYXJrIGJsYWNrICMxNDEzMDFcclxuLy8gbWVkaXVtIGdyZXkgI2I3YjViMyJdfQ== */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Section.jsx */"));
} // dark black #141301
// medium grey #b7b5b3

/***/ })

})
//# sourceMappingURL=index.js.e307df540f5eb8a5eaaf.hot-update.js.map