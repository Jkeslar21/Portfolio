webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/projects/CustomizedDialogs.jsx":
/*!***************************************************!*\
  !*** ./components/projects/CustomizedDialogs.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedDialogs; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _MediaCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MediaCard */ "./components/projects/MediaCard.jsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");

var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\projects\\CustomizedDialogs.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












 // const useStyles = makeStyles({
//   card: {
//     background: 'pink'
//   }
// });

var styles = function styles(theme) {
  return {
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
  };
};

var DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose;
  return __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disableTypography: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, children), onClose ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })) : null);
});
var DialogContent = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(2)
    }
  };
})(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__["default"]);
var DialogActions = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(function (theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  };
})(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__["default"]);
function CustomizedDialogs(_ref) {
  var image = _ref.image,
      title = _ref.title,
      icons = _ref.icons,
      description = _ref.description,
      one = _ref.one,
      two = _ref.two,
      three = _ref.three,
      four = _ref.four;

  // const classes = useStyles();
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      picture = _useState[0],
      setPicture = _useState[1];

  var handleClickOpen = function handleClickOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var selectPictureRight = function selectPictureRight() {
    if (picture < 4) {
      setPicture(picture + 1);
    }

    if (picture === 3) {
      setPicture(0);
    }
  };

  var selectPictureLeft = function selectPictureLeft() {
    if (picture === 0) {
      setPicture(3);
    }

    if (picture > 0) {
      setPicture(picture - 1);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    style: {
      maxWidth: '345px'
    },
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, one && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    one: one,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), two && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    two: two,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), three && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    three: three,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), four && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    four: four,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClose: handleClose,
    "aria-labelledby": "customized-dialog-title",
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(DialogTitle, {
    id: "customized-dialog-title",
    onClose: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, one && __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, picture === 0 ? 'WellDone International • Index' : picture === 1 ? 'WellDone International • Dashboard' : picture === 2 ? 'WellDone International • Monitors' : picture === 3 ? 'WellDone International • Reports' : null), two && __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Project 2 Title"), three && __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Project 3 Title"), four && __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Project 4 Title")), __jsx(DialogContent, {
    dividers: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, one && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("img", {
    src: picture === 0 ? '../static/IndexModal.png' : picture === 1 ? '../static/DashboardFinal.png' : picture === 2 ? '../static/monitorsFinal.png' : picture === 3 ? '../static/reportsPage.png' : null,
    alt: "WellDone International \u2022 Dashboard Screenshot",
    width: "100%",
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3471083296" + " " + 'arrow-icons',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("div", {
    onClick: selectPictureLeft,
    className: "jsx-3471083296" + " " + 'arrow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaAngleLeft"], {
    style: {
      fontSize: '3rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  })), picture === 0 ? 'WellDone International • Index' : picture === 1 ? 'WellDone International • Dashboard' : picture === 2 ? 'WellDone International • Monitors' : picture === 3 ? 'WellDone International • Reports' : null, __jsx("div", {
    onClick: selectPictureRight,
    className: "jsx-3471083296" + " " + 'arrow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaAngleRight"], {
    style: {
      fontSize: '3rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })))), two && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), three && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), four && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, one && __jsx("div", {
    className: "jsx-3471083296" + " " + 'tech-stack',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3471083296" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "React.js"), __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "|"), __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Next.js"), __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "|"), __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Node.js"), __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "|"), __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Express.js"), __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "|"), __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Netlify")), __jsx("span", {
    className: "jsx-3471083296" + " " + 'row-2',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_13__["DiReact"], {
    style: {
      fontSize: '3rem',
      color: '#61DAFB',
      marginLeft: '-5px',
      marginTop: '-7px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
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
    className: "jsx-3471083296" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_13__["DiNodejsSmall"], {
    style: {
      fontSize: '3rem',
      color: '#83CD29',
      marginLeft: '-15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), __jsx("img", {
    src: "../static/expressFinal.png",
    alt: "Express Icon",
    style: {
      width: '40px',
      height: '40px'
    },
    className: "jsx-3471083296" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx("img", {
    src: "../static/netlify.png",
    alt: "Netlify Icon",
    style: {
      width: '40px',
      height: '40px'
    },
    className: "jsx-3471083296" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })), " "), two && __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Project 2 Title"), three && __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Project 3 Title"), four && __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Project 4 Title")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, one && __jsx("p", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, picture === 0 ? __jsx("p", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Index Page displays a hero image with a dashboard greeting and a \"View Dashboard\" link.  There is also an \"About\" section to describe the company, as well as a guided tour, to break down the content you will find by visiting each page in the dashboard.  Additionally, this page is fully customizable through Prismic, a content management system which allows an admin the ability to add new, update existing, or remove content from the dashboard.") : picture === 1 ? __jsx("p", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Dashboard Page showcases sensor statuses, an interactive map, as well as sensor specific details all available at-a-glance.") : picture === 2 ? 'Monitors Page description here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem soluta impedit illo excepturi ea ipsam cum earum obcaecati nisi aliquid! Possimus expedita ratione eum necessitatibus? Laudantium architecto perferendis quidem.Expedita nisi eum, aspernatur nostrum' : picture === 3 ? 'Reports Page description here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem soluta impedit illo excepturi ea ipsam cum earum obcaecati nisi aliquid! Possimus expedita ratione eum necessitatibus? Laudantium architecto perferendis quidem.Expedita nisi eum, aspernatur nostrum' : null), two && __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Project 2 Description"), three && __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Project 3 Description"), four && __jsx("h2", {
    className: "jsx-3471083296",
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
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3471083296",
    __self: this
  }, "*.jsx-3471083296{font-family:'Raleway',sans-serif;}.arrow-icons.jsx-3471083296{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.arrow.jsx-3471083296{color:#1f2a44;-webkit-transition:0.4s;transition:0.4s;}.arrow.jsx-3471083296:hover{color:#b7b5b3;cursor:pointer;}.tech-stack.jsx-3471083296{width:100%;}.row.jsx-3471083296{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:1%;}.row-2.jsx-3471083296{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.invisible.jsx-3471083296{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xccHJvamVjdHNcXEN1c3RvbWl6ZWREaWFsb2dzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxTGdCLEFBR3FELEFBR25CLEFBSUMsQUFJQSxBQUlILEFBR0UsQUFNQSxBQU1BLFdBZGpCLEVBZUEsQ0F2Qm9CLEFBSUQsZUFDbkIsSUFaQSxxQkFRQSxvQkFMa0MsQUFlRCxBQU1BLG1IQXBCakMsUUFldUIsQUFNQSw2RkFMRixBQU9yQixpQkFOQSIsImZpbGUiOiJDOlxcVXNlcnNcXGRpYW1vXFxEZXNrdG9wXFxHaXRGaWxlc1xcUG9ydGZvbGlvXFxjbGllbnRcXGNvbXBvbmVudHNcXHByb2plY3RzXFxDdXN0b21pemVkRGlhbG9ncy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCBNdWlEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBNdWlEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xyXG5pbXBvcnQgTXVpRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBNZWRpYUNhcmQgZnJvbSAnLi9NZWRpYUNhcmQnXHJcbmltcG9ydCB7IEZhQW5nbGVSaWdodCwgRmFBbmdsZUxlZnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgRGlSZWFjdCwgRGlOb2RlanNTbWFsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9kaVwiO1xyXG5pbXBvcnQgeyBJb0lvc1JhZGlvQnV0dG9uT2ZmLCBJb0lvc1JhZGlvQnV0dG9uT24gfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIlxyXG5cclxuLy8gY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbi8vICAgY2FyZDoge1xyXG4vLyAgICAgYmFja2dyb3VuZDogJ3BpbmsnXHJcbi8vICAgfVxyXG4vLyB9KTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKVxyXG4gIH0sXHJcbiAgY2xvc2VCdXR0b246IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzUwMF0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBEaWFsb2dUaXRsZSA9IHdpdGhTdHlsZXMoc3R5bGVzKShwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3Nlcywgb25DbG9zZSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNdWlEaWFsb2dUaXRsZSBkaXNhYmxlVHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgIHtvbkNsb3NlID8gKFxyXG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjbG9zZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJ1dHRvbn0gb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvTXVpRGlhbG9nVGl0bGU+XHJcbiAgKTtcclxufSk7XHJcblxyXG5jb25zdCBEaWFsb2dDb250ZW50ID0gd2l0aFN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpKE11aURpYWxvZ0NvbnRlbnQpO1xyXG5cclxuY29uc3QgRGlhbG9nQWN0aW9ucyA9IHdpdGhTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW46IDAsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKShNdWlEaWFsb2dBY3Rpb25zKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZWREaWFsb2dzKHtpbWFnZSwgdGl0bGUsIGljb25zLCBkZXNjcmlwdGlvbiwgb25lLCB0d28sIHRocmVlLCBmb3VyfSkge1xyXG4gICAgLy8gY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BpY3R1cmUsIHNldFBpY3R1cmVdID0gdXNlU3RhdGUoMClcclxuICBcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0UGljdHVyZVJpZ2h0ID0gKCkgPT4ge1xyXG4gICAgICBpZiAocGljdHVyZSA8IDQpIHtcclxuICAgICAgICAgIHNldFBpY3R1cmUocGljdHVyZSsxKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChwaWN0dXJlID09PSAzKSB7XHJcbiAgICAgICAgICBzZXRQaWN0dXJlKDApXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHNlbGVjdFBpY3R1cmVMZWZ0ID0gKCkgPT4ge1xyXG4gICAgICBpZiAocGljdHVyZSA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0UGljdHVyZSgzKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChwaWN0dXJlID4gMCkge1xyXG4gICAgICAgICAgc2V0UGljdHVyZShwaWN0dXJlLTEpXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICB7LyogPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbn0+XHJcbiAgICAgICAgT3BlbiBkaWFsb2dcclxuICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiAnMzQ1cHgnfX0+XHJcbiAgICAgIHtvbmUgJiYgPE1lZGlhQ2FyZCBoYW5kbGVDbGlja09wZW49e2hhbmRsZUNsaWNrT3Blbn0gaW1hZ2U9e2ltYWdlfSBvbmU9e29uZX0gdGl0bGU9e3RpdGxlfSAvPn1cclxuICAgICAge3R3byAmJiA8TWVkaWFDYXJkIGhhbmRsZUNsaWNrT3Blbj17aGFuZGxlQ2xpY2tPcGVufSBpbWFnZT17aW1hZ2V9IHR3bz17dHdvfSB0aXRsZT17dGl0bGV9IC8+fVxyXG4gICAgICB7dGhyZWUgJiYgPE1lZGlhQ2FyZCBoYW5kbGVDbGlja09wZW49e2hhbmRsZUNsaWNrT3Blbn0gaW1hZ2U9e2ltYWdlfSB0aHJlZT17dGhyZWV9IHRpdGxlPXt0aXRsZX0gLz59XHJcbiAgICAgIHtmb3VyICYmIDxNZWRpYUNhcmQgaGFuZGxlQ2xpY2tPcGVuPXtoYW5kbGVDbGlja09wZW59IGltYWdlPXtpbWFnZX0gZm91cj17Zm91cn0gdGl0bGU9e3RpdGxlfSAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDxEaWFsb2cgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJjdXN0b21pemVkLWRpYWxvZy10aXRsZVwiIG9wZW49e29wZW59PlxyXG5cclxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJjdXN0b21pemVkLWRpYWxvZy10aXRsZVwiIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgIHtvbmUgJiYgPGgyPntwaWN0dXJlID09PSAwID8gJ1dlbGxEb25lIEludGVybmF0aW9uYWwg4oCiIEluZGV4JyA6XHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSA9PT0gMSA/ICdXZWxsRG9uZSBJbnRlcm5hdGlvbmFsIOKAoiBEYXNoYm9hcmQnIDpcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlID09PSAyID8gJ1dlbGxEb25lIEludGVybmF0aW9uYWwg4oCiIE1vbml0b3JzJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSA9PT0gMyA/ICdXZWxsRG9uZSBJbnRlcm5hdGlvbmFsIOKAoiBSZXBvcnRzJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCB9PC9oMj59XHJcbiAgICAgICAgICB7dHdvICYmIDxoMj5Qcm9qZWN0IDIgVGl0bGU8L2gyPn1cclxuICAgICAgICAgIHt0aHJlZSAmJiA8aDI+UHJvamVjdCAzIFRpdGxlPC9oMj59XHJcbiAgICAgICAgICB7Zm91ciAmJiA8aDI+UHJvamVjdCA0IFRpdGxlPC9oMj59XHJcbiAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8RGlhbG9nQ29udGVudCBkaXZpZGVycz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgIHtvbmUgJiYgXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3BpY3R1cmUgPT09IDAgPyAnLi4vc3RhdGljL0luZGV4TW9kYWwucG5nJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSA9PT0gMSA/ICcuLi9zdGF0aWMvRGFzaGJvYXJkRmluYWwucG5nJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSA9PT0gMiA/ICcuLi9zdGF0aWMvbW9uaXRvcnNGaW5hbC5wbmcnIDpcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlID09PSAzID8gJy4uL3N0YXRpYy9yZXBvcnRzUGFnZS5wbmcnIDpcclxuICAgICAgICAgICAgICAgICAgICBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICAgYWx0PSdXZWxsRG9uZSBJbnRlcm5hdGlvbmFsIOKAoiBEYXNoYm9hcmQgU2NyZWVuc2hvdCdcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzEwMCUnIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJyb3ctaWNvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17c2VsZWN0UGljdHVyZUxlZnR9IGNsYXNzTmFtZT0nYXJyb3cnID48RmFBbmdsZUxlZnQgc3R5bGU9e3sgZm9udFNpemU6ICczcmVtJ319IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3BpY3R1cmUgPT09IDAgPyAnV2VsbERvbmUgSW50ZXJuYXRpb25hbCDigKIgSW5kZXgnIDpcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlID09PSAxID8gJ1dlbGxEb25lIEludGVybmF0aW9uYWwg4oCiIERhc2hib2FyZCcgOlxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPT09IDIgPyAnV2VsbERvbmUgSW50ZXJuYXRpb25hbCDigKIgTW9uaXRvcnMnIDpcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlID09PSAzID8gJ1dlbGxEb25lIEludGVybmF0aW9uYWwg4oCiIFJlcG9ydHMnIDpcclxuICAgICAgICAgICAgICAgICAgICBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3NlbGVjdFBpY3R1cmVSaWdodH0gY2xhc3NOYW1lPSdhcnJvdycgPjxGYUFuZ2xlUmlnaHQgc3R5bGU9e3sgZm9udFNpemU6ICczcmVtJ319IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPn0gXHJcbiAgICAgICAgICAgIHt0d28gJiYgXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICB7dGhyZWUgJiYgXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICB7Zm91ciAmJiBcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgey8qIFRlY2gtU3RhY2sgKi99XHJcbiAgICAgICAgICB7b25lICYmIDxkaXYgY2xhc3NOYW1lPSd0ZWNoLXN0YWNrJz48c3BhbiBjbGFzc05hbWU9J3Jvdyc+PGgyPlJlYWN0LmpzPC9oMj48aDI+fDwvaDI+PGgyPk5leHQuanM8L2gyPjxoMj58PC9oMj48aDI+Tm9kZS5qczwvaDI+PGgyPnw8L2gyPjxoMj5FeHByZXNzLmpzPC9oMj48aDI+fDwvaDI+PGgyPk5ldGxpZnk8L2gyPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdyb3ctMic+PERpUmVhY3Qgc3R5bGU9e3sgZm9udFNpemU6ICczcmVtJywgY29sb3I6ICcjNjFEQUZCJywgbWFyZ2luTGVmdDogJy01cHgnLCBtYXJnaW5Ub3A6ICctN3B4J319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250JyBzcmM9Jy4uL3N0YXRpYy9uZXh0LXRleHQucG5nJyBhbHQ9J05leHQgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgbWF4SGVpZ2h0OiAnNTBweCcsIG1hcmdpbkxlZnQ6ICctMTJweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpTm9kZWpzU21hbGwgc3R5bGU9e3sgZm9udFNpemU6ICczcmVtJywgY29sb3I6ICcjODNDRDI5JywgbWFyZ2luTGVmdDogJy0xNXB4J319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uLWhvdmVyJyBzcmM9Jy4uL3N0YXRpYy9leHByZXNzRmluYWwucG5nJyBhbHQ9J0V4cHJlc3MgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc0MHB4JywgaGVpZ2h0OiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ljb24taG92ZXInIHNyYz0nLi4vc3RhdGljL25ldGxpZnkucG5nJyBhbHQ9J05ldGxpZnkgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc0MHB4JywgaGVpZ2h0OiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gPC9kaXY+fVxyXG4gICAgICAgICAge3R3byAmJiA8aDI+UHJvamVjdCAyIFRpdGxlPC9oMj59XHJcbiAgICAgICAgICB7dGhyZWUgJiYgPGgyPlByb2plY3QgMyBUaXRsZTwvaDI+fVxyXG4gICAgICAgICAge2ZvdXIgJiYgPGgyPlByb2plY3QgNCBUaXRsZTwvaDI+fVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgIHsvKiBEZXNjcmlwdGlvbiAqL31cclxuICAgICAgICAgIHtvbmUgJiYgPHA+e3BpY3R1cmUgPT09IDAgPyA8cD5JbmRleCBQYWdlIGRpc3BsYXlzIGEgaGVybyBpbWFnZSB3aXRoIGEgZGFzaGJvYXJkIGdyZWV0aW5nIGFuZCBhIFwiVmlldyBEYXNoYm9hcmRcIiBsaW5rLiAgVGhlcmUgaXMgYWxzbyBhbiBcIkFib3V0XCIgc2VjdGlvbiB0byBkZXNjcmliZSB0aGUgY29tcGFueSwgYXMgd2VsbCBhcyBhIGd1aWRlZCB0b3VyLCB0byBicmVhayBkb3duIHRoZSBjb250ZW50IHlvdSB3aWxsIGZpbmQgYnkgdmlzaXRpbmcgZWFjaCBwYWdlIGluIHRoZSBkYXNoYm9hcmQuICBBZGRpdGlvbmFsbHksIHRoaXMgcGFnZSBpcyBmdWxseSBjdXN0b21pemFibGUgdGhyb3VnaCBQcmlzbWljLCBhIGNvbnRlbnQgbWFuYWdlbWVudCBzeXN0ZW0gd2hpY2ggYWxsb3dzIGFuIGFkbWluIHRoZSBhYmlsaXR5IHRvIGFkZCBuZXcsIHVwZGF0ZSBleGlzdGluZywgb3IgcmVtb3ZlIGNvbnRlbnQgZnJvbSB0aGUgZGFzaGJvYXJkLjwvcD4gOlxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPT09IDEgPyA8cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkIFBhZ2Ugc2hvd2Nhc2VzIHNlbnNvciBzdGF0dXNlcywgYW4gaW50ZXJhY3RpdmUgbWFwLCBhcyB3ZWxsIGFzIHNlbnNvciBzcGVjaWZpYyBkZXRhaWxzIGFsbCBhdmFpbGFibGUgYXQtYS1nbGFuY2UuPC9wPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSA9PT0gMiA/ICdNb25pdG9ycyBQYWdlIGRlc2NyaXB0aW9uIGhlcmUgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE9mZmljaWEsIGV4ZXJjaXRhdGlvbmVtIHNvbHV0YSBpbXBlZGl0IGlsbG8gZXhjZXB0dXJpIGVhIGlwc2FtIGN1bSBlYXJ1bSBvYmNhZWNhdGkgbmlzaSBhbGlxdWlkISBQb3NzaW11cyBleHBlZGl0YSByYXRpb25lIGV1bSBuZWNlc3NpdGF0aWJ1cz8gTGF1ZGFudGl1bSBhcmNoaXRlY3RvIHBlcmZlcmVuZGlzIHF1aWRlbS5FeHBlZGl0YSBuaXNpIGV1bSwgYXNwZXJuYXR1ciBub3N0cnVtJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSA9PT0gMyA/ICdSZXBvcnRzIFBhZ2UgZGVzY3JpcHRpb24gaGVyZSBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gT2ZmaWNpYSwgZXhlcmNpdGF0aW9uZW0gc29sdXRhIGltcGVkaXQgaWxsbyBleGNlcHR1cmkgZWEgaXBzYW0gY3VtIGVhcnVtIG9iY2FlY2F0aSBuaXNpIGFsaXF1aWQhIFBvc3NpbXVzIGV4cGVkaXRhIHJhdGlvbmUgZXVtIG5lY2Vzc2l0YXRpYnVzPyBMYXVkYW50aXVtIGFyY2hpdGVjdG8gcGVyZmVyZW5kaXMgcXVpZGVtLkV4cGVkaXRhIG5pc2kgZXVtLCBhc3Blcm5hdHVyIG5vc3RydW0nIDpcclxuICAgICAgICAgICAgICAgICAgICBudWxsIH08L3A+fVxyXG4gICAgICAgICAge3R3byAmJiA8aDI+UHJvamVjdCAyIERlc2NyaXB0aW9uPC9oMj59XHJcbiAgICAgICAgICB7dGhyZWUgJiYgPGgyPlByb2plY3QgMyBEZXNjcmlwdGlvbjwvaDI+fVxyXG4gICAgICAgICAge2ZvdXIgJiYgPGgyPlByb2plY3QgNCBEZXNjcmlwdGlvbjwvaDI+fVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgIHsvKiA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgU2F2ZSBjaGFuZ2VzXHJcbiAgICAgICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICA8L0RpYWxvZz5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYXJyb3ctaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFmMmE0NDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93OmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2I3YjViMztcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGVjaC1zdGFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucm93LTIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmludmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIC5NdWlEaWFsb2ctcGFwZXJXaWR0aFNtIHtcclxuICAgICAgICAgICAgICAgIC8vICAgbWF4LXdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\projects\\CustomizedDialogs.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.5df14d860c760afd9fa2.hot-update.js.map