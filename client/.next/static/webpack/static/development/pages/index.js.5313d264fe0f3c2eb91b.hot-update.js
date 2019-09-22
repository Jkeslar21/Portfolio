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
  })), __jsx("div", {
    onClick: selectPictureRight,
    className: "jsx-3471083296" + " " + 'arrow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaAngleRight"], {
    style: {
      fontSize: '3rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })))), two && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), three && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), four && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, one && __jsx("div", {
    className: "jsx-3471083296" + " " + 'tech-stack',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3471083296" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "React.js"), __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "|"), __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Next.js"), __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "|"), __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Node.js"), __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "|"), __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Express.js"), __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "|"), __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Netlify")), __jsx("span", {
    className: "jsx-3471083296" + " " + 'row-2',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
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
      lineNumber: 147
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
      lineNumber: 148
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
      lineNumber: 149
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
      lineNumber: 150
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
      lineNumber: 151
    },
    __self: this
  })), " "), two && __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Project 2 Title"), three && __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Project 3 Title"), four && __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Project 4 Title")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, one && __jsx("p", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, picture === 0 ? __jsx("p", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Index Page displays a hero image with a dashboard greeting and a \"View Dashboard\" link.  There is also an \"About\" section to describe the company, as well as a guided tour, to break down the content you will find by visiting each page in the dashboard.  Additionally, this page is fully customizable through Prismic, a content management system which allows an admin the ability to add new, update existing, or remove content from the dashboard.") : picture === 1 ? __jsx("p", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Dashboard Page showcases sensor statuses, an interactive map, as well as sensor specific details all available at-a-glance.") : picture === 2 ? 'Monitors Page description here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem soluta impedit illo excepturi ea ipsam cum earum obcaecati nisi aliquid! Possimus expedita ratione eum necessitatibus? Laudantium architecto perferendis quidem.Expedita nisi eum, aspernatur nostrum' : picture === 3 ? 'Reports Page description here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem soluta impedit illo excepturi ea ipsam cum earum obcaecati nisi aliquid! Possimus expedita ratione eum necessitatibus? Laudantium architecto perferendis quidem.Expedita nisi eum, aspernatur nostrum' : null), two && __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Project 2 Description"), three && __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Project 3 Description"), four && __jsx("h2", {
    className: "jsx-3471083296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Project 4 Description"))), __jsx(DialogActions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3471083296",
    __self: this
  }, "*.jsx-3471083296{font-family:'Raleway',sans-serif;}.arrow-icons.jsx-3471083296{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.arrow.jsx-3471083296{color:#1f2a44;-webkit-transition:0.4s;transition:0.4s;}.arrow.jsx-3471083296:hover{color:#b7b5b3;cursor:pointer;}.tech-stack.jsx-3471083296{width:100%;}.row.jsx-3471083296{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:1%;}.row-2.jsx-3471083296{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.invisible.jsx-3471083296{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xccHJvamVjdHNcXEN1c3RvbWl6ZWREaWFsb2dzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpTGdCLEFBR3FELEFBR25CLEFBSUMsQUFJQSxBQUlILEFBR0UsQUFNQSxBQU1BLFdBZGpCLEVBZUEsQ0F2Qm9CLEFBSUQsZUFDbkIsSUFaQSxxQkFRQSxvQkFMa0MsQUFlRCxBQU1BLG1IQXBCakMsUUFldUIsQUFNQSw2RkFMRixBQU9yQixpQkFOQSIsImZpbGUiOiJDOlxcVXNlcnNcXGRpYW1vXFxEZXNrdG9wXFxHaXRGaWxlc1xcUG9ydGZvbGlvXFxjbGllbnRcXGNvbXBvbmVudHNcXHByb2plY3RzXFxDdXN0b21pemVkRGlhbG9ncy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCBNdWlEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBNdWlEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xyXG5pbXBvcnQgTXVpRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBNZWRpYUNhcmQgZnJvbSAnLi9NZWRpYUNhcmQnXHJcbmltcG9ydCB7IEZhQW5nbGVSaWdodCwgRmFBbmdsZUxlZnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgRGlSZWFjdCwgRGlOb2RlanNTbWFsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9kaVwiO1xyXG5pbXBvcnQgeyBJb0lvc1JhZGlvQnV0dG9uT2ZmLCBJb0lvc1JhZGlvQnV0dG9uT24gfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIlxyXG5cclxuLy8gY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbi8vICAgY2FyZDoge1xyXG4vLyAgICAgYmFja2dyb3VuZDogJ3BpbmsnXHJcbi8vICAgfVxyXG4vLyB9KTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKVxyXG4gIH0sXHJcbiAgY2xvc2VCdXR0b246IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzUwMF0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBEaWFsb2dUaXRsZSA9IHdpdGhTdHlsZXMoc3R5bGVzKShwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3Nlcywgb25DbG9zZSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNdWlEaWFsb2dUaXRsZSBkaXNhYmxlVHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgIHtvbkNsb3NlID8gKFxyXG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjbG9zZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJ1dHRvbn0gb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvTXVpRGlhbG9nVGl0bGU+XHJcbiAgKTtcclxufSk7XHJcblxyXG5jb25zdCBEaWFsb2dDb250ZW50ID0gd2l0aFN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpKE11aURpYWxvZ0NvbnRlbnQpO1xyXG5cclxuY29uc3QgRGlhbG9nQWN0aW9ucyA9IHdpdGhTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW46IDAsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKShNdWlEaWFsb2dBY3Rpb25zKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZWREaWFsb2dzKHtpbWFnZSwgdGl0bGUsIGljb25zLCBkZXNjcmlwdGlvbiwgb25lLCB0d28sIHRocmVlLCBmb3VyfSkge1xyXG4gICAgLy8gY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BpY3R1cmUsIHNldFBpY3R1cmVdID0gdXNlU3RhdGUoMClcclxuICBcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0UGljdHVyZVJpZ2h0ID0gKCkgPT4ge1xyXG4gICAgICBpZiAocGljdHVyZSA8IDQpIHtcclxuICAgICAgICAgIHNldFBpY3R1cmUocGljdHVyZSsxKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChwaWN0dXJlID09PSAzKSB7XHJcbiAgICAgICAgICBzZXRQaWN0dXJlKDApXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHNlbGVjdFBpY3R1cmVMZWZ0ID0gKCkgPT4ge1xyXG4gICAgICBpZiAocGljdHVyZSA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0UGljdHVyZSgzKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChwaWN0dXJlID4gMCkge1xyXG4gICAgICAgICAgc2V0UGljdHVyZShwaWN0dXJlLTEpXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICB7LyogPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbn0+XHJcbiAgICAgICAgT3BlbiBkaWFsb2dcclxuICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiAnMzQ1cHgnfX0+XHJcbiAgICAgIHtvbmUgJiYgPE1lZGlhQ2FyZCBoYW5kbGVDbGlja09wZW49e2hhbmRsZUNsaWNrT3Blbn0gaW1hZ2U9e2ltYWdlfSBvbmU9e29uZX0gdGl0bGU9e3RpdGxlfSAvPn1cclxuICAgICAge3R3byAmJiA8TWVkaWFDYXJkIGhhbmRsZUNsaWNrT3Blbj17aGFuZGxlQ2xpY2tPcGVufSBpbWFnZT17aW1hZ2V9IHR3bz17dHdvfSB0aXRsZT17dGl0bGV9IC8+fVxyXG4gICAgICB7dGhyZWUgJiYgPE1lZGlhQ2FyZCBoYW5kbGVDbGlja09wZW49e2hhbmRsZUNsaWNrT3Blbn0gaW1hZ2U9e2ltYWdlfSB0aHJlZT17dGhyZWV9IHRpdGxlPXt0aXRsZX0gLz59XHJcbiAgICAgIHtmb3VyICYmIDxNZWRpYUNhcmQgaGFuZGxlQ2xpY2tPcGVuPXtoYW5kbGVDbGlja09wZW59IGltYWdlPXtpbWFnZX0gZm91cj17Zm91cn0gdGl0bGU9e3RpdGxlfSAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDxEaWFsb2cgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJjdXN0b21pemVkLWRpYWxvZy10aXRsZVwiIG9wZW49e29wZW59PlxyXG5cclxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJjdXN0b21pemVkLWRpYWxvZy10aXRsZVwiIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgIHtvbmUgJiYgPGgyPntwaWN0dXJlID09PSAwID8gJ1dlbGxEb25lIEludGVybmF0aW9uYWwg4oCiIEluZGV4JyA6XHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSA9PT0gMSA/ICdXZWxsRG9uZSBJbnRlcm5hdGlvbmFsIOKAoiBEYXNoYm9hcmQnIDpcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlID09PSAyID8gJ1dlbGxEb25lIEludGVybmF0aW9uYWwg4oCiIE1vbml0b3JzJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSA9PT0gMyA/ICdXZWxsRG9uZSBJbnRlcm5hdGlvbmFsIOKAoiBSZXBvcnRzJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCB9PC9oMj59XHJcbiAgICAgICAgICB7dHdvICYmIDxoMj5Qcm9qZWN0IDIgVGl0bGU8L2gyPn1cclxuICAgICAgICAgIHt0aHJlZSAmJiA8aDI+UHJvamVjdCAzIFRpdGxlPC9oMj59XHJcbiAgICAgICAgICB7Zm91ciAmJiA8aDI+UHJvamVjdCA0IFRpdGxlPC9oMj59XHJcbiAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8RGlhbG9nQ29udGVudCBkaXZpZGVycz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgIHtvbmUgJiYgXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3BpY3R1cmUgPT09IDAgPyAnLi4vc3RhdGljL0luZGV4TW9kYWwucG5nJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSA9PT0gMSA/ICcuLi9zdGF0aWMvRGFzaGJvYXJkRmluYWwucG5nJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSA9PT0gMiA/ICcuLi9zdGF0aWMvbW9uaXRvcnNGaW5hbC5wbmcnIDpcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlID09PSAzID8gJy4uL3N0YXRpYy9yZXBvcnRzUGFnZS5wbmcnIDpcclxuICAgICAgICAgICAgICAgICAgICBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICAgYWx0PSdXZWxsRG9uZSBJbnRlcm5hdGlvbmFsIOKAoiBEYXNoYm9hcmQgU2NyZWVuc2hvdCdcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzEwMCUnIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJyb3ctaWNvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17c2VsZWN0UGljdHVyZUxlZnR9IGNsYXNzTmFtZT0nYXJyb3cnID48RmFBbmdsZUxlZnQgc3R5bGU9e3sgZm9udFNpemU6ICczcmVtJ319IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtzZWxlY3RQaWN0dXJlUmlnaHR9IGNsYXNzTmFtZT0nYXJyb3cnID48RmFBbmdsZVJpZ2h0IHN0eWxlPXt7IGZvbnRTaXplOiAnM3JlbSd9fSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz59IFxyXG4gICAgICAgICAgICB7dHdvICYmIFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAge3RocmVlICYmIFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAge2ZvdXIgJiYgXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgIHsvKiBUZWNoLVN0YWNrICovfVxyXG4gICAgICAgICAge29uZSAmJiA8ZGl2IGNsYXNzTmFtZT0ndGVjaC1zdGFjayc+PHNwYW4gY2xhc3NOYW1lPSdyb3cnPjxoMj5SZWFjdC5qczwvaDI+PGgyPnw8L2gyPjxoMj5OZXh0LmpzPC9oMj48aDI+fDwvaDI+PGgyPk5vZGUuanM8L2gyPjxoMj58PC9oMj48aDI+RXhwcmVzcy5qczwvaDI+PGgyPnw8L2gyPjxoMj5OZXRsaWZ5PC9oMj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncm93LTInPjxEaVJlYWN0IHN0eWxlPXt7IGZvbnRTaXplOiAnM3JlbScsIGNvbG9yOiAnIzYxREFGQicsIG1hcmdpbkxlZnQ6ICctNXB4JywgbWFyZ2luVG9wOiAnLTdweCd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbi1ob3ZlciBmcm9udCcgc3JjPScuLi9zdGF0aWMvbmV4dC10ZXh0LnBuZycgYWx0PSdOZXh0IEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNTBweCcsIG1heEhlaWdodDogJzUwcHgnLCBtYXJnaW5MZWZ0OiAnLTEycHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaU5vZGVqc1NtYWxsIHN0eWxlPXt7IGZvbnRTaXplOiAnM3JlbScsIGNvbG9yOiAnIzgzQ0QyOScsIG1hcmdpbkxlZnQ6ICctMTVweCd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbi1ob3Zlcicgc3JjPScuLi9zdGF0aWMvZXhwcmVzc0ZpbmFsLnBuZycgYWx0PSdFeHByZXNzIEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNDBweCcsIGhlaWdodDogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uLWhvdmVyJyBzcmM9Jy4uL3N0YXRpYy9uZXRsaWZ5LnBuZycgYWx0PSdOZXRsaWZ5IEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNDBweCcsIGhlaWdodDogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICA8L3NwYW4+IDwvZGl2Pn1cclxuICAgICAgICAgIHt0d28gJiYgPGgyPlByb2plY3QgMiBUaXRsZTwvaDI+fVxyXG4gICAgICAgICAge3RocmVlICYmIDxoMj5Qcm9qZWN0IDMgVGl0bGU8L2gyPn1cclxuICAgICAgICAgIHtmb3VyICYmIDxoMj5Qcm9qZWN0IDQgVGl0bGU8L2gyPn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICB7LyogRGVzY3JpcHRpb24gKi99XHJcbiAgICAgICAgICB7b25lICYmIDxwPntwaWN0dXJlID09PSAwID8gPHA+SW5kZXggUGFnZSBkaXNwbGF5cyBhIGhlcm8gaW1hZ2Ugd2l0aCBhIGRhc2hib2FyZCBncmVldGluZyBhbmQgYSBcIlZpZXcgRGFzaGJvYXJkXCIgbGluay4gIFRoZXJlIGlzIGFsc28gYW4gXCJBYm91dFwiIHNlY3Rpb24gdG8gZGVzY3JpYmUgdGhlIGNvbXBhbnksIGFzIHdlbGwgYXMgYSBndWlkZWQgdG91ciwgdG8gYnJlYWsgZG93biB0aGUgY29udGVudCB5b3Ugd2lsbCBmaW5kIGJ5IHZpc2l0aW5nIGVhY2ggcGFnZSBpbiB0aGUgZGFzaGJvYXJkLiAgQWRkaXRpb25hbGx5LCB0aGlzIHBhZ2UgaXMgZnVsbHkgY3VzdG9taXphYmxlIHRocm91Z2ggUHJpc21pYywgYSBjb250ZW50IG1hbmFnZW1lbnQgc3lzdGVtIHdoaWNoIGFsbG93cyBhbiBhZG1pbiB0aGUgYWJpbGl0eSB0byBhZGQgbmV3LCB1cGRhdGUgZXhpc3RpbmcsIG9yIHJlbW92ZSBjb250ZW50IGZyb20gdGhlIGRhc2hib2FyZC48L3A+IDpcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlID09PSAxID8gPHA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIERhc2hib2FyZCBQYWdlIHNob3djYXNlcyBzZW5zb3Igc3RhdHVzZXMsIGFuIGludGVyYWN0aXZlIG1hcCwgYXMgd2VsbCBhcyBzZW5zb3Igc3BlY2lmaWMgZGV0YWlscyBhbGwgYXZhaWxhYmxlIGF0LWEtZ2xhbmNlLjwvcD4gOlxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPT09IDIgPyAnTW9uaXRvcnMgUGFnZSBkZXNjcmlwdGlvbiBoZXJlIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBPZmZpY2lhLCBleGVyY2l0YXRpb25lbSBzb2x1dGEgaW1wZWRpdCBpbGxvIGV4Y2VwdHVyaSBlYSBpcHNhbSBjdW0gZWFydW0gb2JjYWVjYXRpIG5pc2kgYWxpcXVpZCEgUG9zc2ltdXMgZXhwZWRpdGEgcmF0aW9uZSBldW0gbmVjZXNzaXRhdGlidXM/IExhdWRhbnRpdW0gYXJjaGl0ZWN0byBwZXJmZXJlbmRpcyBxdWlkZW0uRXhwZWRpdGEgbmlzaSBldW0sIGFzcGVybmF0dXIgbm9zdHJ1bScgOlxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPT09IDMgPyAnUmVwb3J0cyBQYWdlIGRlc2NyaXB0aW9uIGhlcmUgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE9mZmljaWEsIGV4ZXJjaXRhdGlvbmVtIHNvbHV0YSBpbXBlZGl0IGlsbG8gZXhjZXB0dXJpIGVhIGlwc2FtIGN1bSBlYXJ1bSBvYmNhZWNhdGkgbmlzaSBhbGlxdWlkISBQb3NzaW11cyBleHBlZGl0YSByYXRpb25lIGV1bSBuZWNlc3NpdGF0aWJ1cz8gTGF1ZGFudGl1bSBhcmNoaXRlY3RvIHBlcmZlcmVuZGlzIHF1aWRlbS5FeHBlZGl0YSBuaXNpIGV1bSwgYXNwZXJuYXR1ciBub3N0cnVtJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCB9PC9wPn1cclxuICAgICAgICAgIHt0d28gJiYgPGgyPlByb2plY3QgMiBEZXNjcmlwdGlvbjwvaDI+fVxyXG4gICAgICAgICAge3RocmVlICYmIDxoMj5Qcm9qZWN0IDMgRGVzY3JpcHRpb248L2gyPn1cclxuICAgICAgICAgIHtmb3VyICYmIDxoMj5Qcm9qZWN0IDQgRGVzY3JpcHRpb248L2gyPn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICB7LyogPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIFNhdmUgY2hhbmdlc1xyXG4gICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgPC9EaWFsb2c+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICoge1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93LWljb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxZjJhNDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvdzpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiN2I1YjM7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRlY2gtc3RhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJvdy0yIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbnZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAuTXVpRGlhbG9nLXBhcGVyV2lkdGhTbSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgIG1heC13aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\projects\\CustomizedDialogs.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.5313d264fe0f3c2eb91b.hot-update.js.map