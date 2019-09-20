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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _MediaCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MediaCard */ "./components/projects/MediaCard.jsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");

var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\projects\\CustomizedDialogs.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;













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
  return __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disableTypography: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, children), onClose ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
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
})(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__["default"]);
var DialogActions = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(function (theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  };
})(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"]);
function CustomizedDialogs(_ref) {
  var image = _ref.image,
      title = _ref.title,
      icons = _ref.icons,
      description = _ref.description,
      one = _ref.one,
      two = _ref.two,
      three = _ref.three,
      four = _ref.four;

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
    className: "jsx-2080026153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    style: {
      maxWidth: '345px'
    },
    className: "jsx-2080026153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, one && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    one: one,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), two && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    two: two,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), three && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    three: three,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), four && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    four: four,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClose: handleClose,
    "aria-labelledby": "customized-dialog-title",
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(DialogTitle, {
    id: "customized-dialog-title",
    onClose: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, one && __jsx("h2", {
    className: "jsx-2080026153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "WellDone International \u2022 Dashboard"), two && __jsx("h2", {
    className: "jsx-2080026153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Project 2 Title"), three && __jsx("h2", {
    className: "jsx-2080026153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Project 3 Title"), four && __jsx("h2", {
    className: "jsx-2080026153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Project 4 Title")), __jsx(DialogContent, {
    dividers: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, one && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("img", {
    src: picture === 0 ? '../static/IndexModal.png' : picture === 1 ? '../static/DashboardFinal.png' : picture === 2 ? '../static/monitorsFinal.png' : picture === 3 ? '../static/reportsPage.png' : null,
    alt: "WellDone International \u2022 Dashboard Screenshot",
    width: "575px",
    className: "jsx-2080026153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2080026153" + " " + 'arrow-icons',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("div", {
    onClick: selectPictureLeft,
    className: "jsx-2080026153" + " " + 'arrow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaAngleLeft"], {
    style: {
      fontSize: '3rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })), __jsx("div", {
    onClick: selectPictureRight,
    className: "jsx-2080026153" + " " + 'arrow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaAngleRight"], {
    style: {
      fontSize: '3rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })))), two && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), three && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), four && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.")), __jsx(DialogActions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2080026153",
    __self: this
  }, ".arrow-icons.jsx-2080026153{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.arrow.jsx-2080026153{color:#1f2a44;-webkit-transition:0.4s;transition:0.4s;}.arrow.jsx-2080026153:hover{color:#b7b5b3;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xccHJvamVjdHNcXEN1c3RvbWl6ZWREaWFsb2dzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSmdCLEFBR2tDLEFBSUMsQUFJQSxjQUhFLEFBSUQsZUFDbkIseUJBSkEsb0JBTGtDLG1IQUNsQyIsImZpbGUiOiJDOlxcVXNlcnNcXGRpYW1vXFxEZXNrdG9wXFxHaXRGaWxlc1xcUG9ydGZvbGlvXFxjbGllbnRcXGNvbXBvbmVudHNcXHByb2plY3RzXFxDdXN0b21pemVkRGlhbG9ncy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IE11aURpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IE11aURpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XHJcbmltcG9ydCBNdWlEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IE1lZGlhQ2FyZCBmcm9tICcuL01lZGlhQ2FyZCdcclxuaW1wb3J0IHsgRmFBbmdsZVJpZ2h0LCBGYUFuZ2xlTGVmdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW46IDAsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgY2xvc2VCdXR0b246IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzUwMF0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBEaWFsb2dUaXRsZSA9IHdpdGhTdHlsZXMoc3R5bGVzKShwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3Nlcywgb25DbG9zZSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNdWlEaWFsb2dUaXRsZSBkaXNhYmxlVHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgIHtvbkNsb3NlID8gKFxyXG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjbG9zZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJ1dHRvbn0gb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvTXVpRGlhbG9nVGl0bGU+XHJcbiAgKTtcclxufSk7XHJcblxyXG5jb25zdCBEaWFsb2dDb250ZW50ID0gd2l0aFN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpKE11aURpYWxvZ0NvbnRlbnQpO1xyXG5cclxuY29uc3QgRGlhbG9nQWN0aW9ucyA9IHdpdGhTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW46IDAsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKShNdWlEaWFsb2dBY3Rpb25zKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZWREaWFsb2dzKHtpbWFnZSwgdGl0bGUsIGljb25zLCBkZXNjcmlwdGlvbiwgb25lLCB0d28sIHRocmVlLCBmb3VyfSkge1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BpY3R1cmUsIHNldFBpY3R1cmVdID0gdXNlU3RhdGUoMClcclxuICBcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0UGljdHVyZVJpZ2h0ID0gKCkgPT4ge1xyXG4gICAgICBpZiAocGljdHVyZSA8IDQpIHtcclxuICAgICAgICAgIHNldFBpY3R1cmUocGljdHVyZSsxKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChwaWN0dXJlID09PSAzKSB7XHJcbiAgICAgICAgICBzZXRQaWN0dXJlKDApXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHNlbGVjdFBpY3R1cmVMZWZ0ID0gKCkgPT4ge1xyXG4gICAgICBpZiAocGljdHVyZSA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0UGljdHVyZSgzKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChwaWN0dXJlID4gMCkge1xyXG4gICAgICAgICAgc2V0UGljdHVyZShwaWN0dXJlLTEpXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICB7LyogPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbn0+XHJcbiAgICAgICAgT3BlbiBkaWFsb2dcclxuICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiAnMzQ1cHgnfX0+XHJcbiAgICAgIHtvbmUgJiYgPE1lZGlhQ2FyZCBoYW5kbGVDbGlja09wZW49e2hhbmRsZUNsaWNrT3Blbn0gaW1hZ2U9e2ltYWdlfSBvbmU9e29uZX0gdGl0bGU9e3RpdGxlfSAvPn1cclxuICAgICAge3R3byAmJiA8TWVkaWFDYXJkIGhhbmRsZUNsaWNrT3Blbj17aGFuZGxlQ2xpY2tPcGVufSBpbWFnZT17aW1hZ2V9IHR3bz17dHdvfSB0aXRsZT17dGl0bGV9IC8+fVxyXG4gICAgICB7dGhyZWUgJiYgPE1lZGlhQ2FyZCBoYW5kbGVDbGlja09wZW49e2hhbmRsZUNsaWNrT3Blbn0gaW1hZ2U9e2ltYWdlfSB0aHJlZT17dGhyZWV9IHRpdGxlPXt0aXRsZX0gLz59XHJcbiAgICAgIHtmb3VyICYmIDxNZWRpYUNhcmQgaGFuZGxlQ2xpY2tPcGVuPXtoYW5kbGVDbGlja09wZW59IGltYWdlPXtpbWFnZX0gZm91cj17Zm91cn0gdGl0bGU9e3RpdGxlfSAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxEaWFsb2cgb25DbG9zZT17aGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cImN1c3RvbWl6ZWQtZGlhbG9nLXRpdGxlXCIgb3Blbj17b3Blbn0+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiY3VzdG9taXplZC1kaWFsb2ctdGl0bGVcIiBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICB7b25lICYmIDxoMj5XZWxsRG9uZSBJbnRlcm5hdGlvbmFsIOKAoiBEYXNoYm9hcmQ8L2gyPn1cclxuICAgICAgICAgIHt0d28gJiYgPGgyPlByb2plY3QgMiBUaXRsZTwvaDI+fVxyXG4gICAgICAgICAge3RocmVlICYmIDxoMj5Qcm9qZWN0IDMgVGl0bGU8L2gyPn1cclxuICAgICAgICAgIHtmb3VyICYmIDxoMj5Qcm9qZWN0IDQgVGl0bGU8L2gyPn1cclxuICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50IGRpdmlkZXJzPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAge29uZSAmJiBcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGljdHVyZSA9PT0gMCA/ICcuLi9zdGF0aWMvSW5kZXhNb2RhbC5wbmcnIDpcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlID09PSAxID8gJy4uL3N0YXRpYy9EYXNoYm9hcmRGaW5hbC5wbmcnIDpcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlID09PSAyID8gJy4uL3N0YXRpYy9tb25pdG9yc0ZpbmFsLnBuZycgOlxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPT09IDMgPyAnLi4vc3RhdGljL3JlcG9ydHNQYWdlLnBuZycgOlxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICBhbHQ9J1dlbGxEb25lIEludGVybmF0aW9uYWwg4oCiIERhc2hib2FyZCBTY3JlZW5zaG90J1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD0nNTc1cHgnIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJyb3ctaWNvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17c2VsZWN0UGljdHVyZUxlZnR9IGNsYXNzTmFtZT0nYXJyb3cnID48RmFBbmdsZUxlZnQgc3R5bGU9e3sgZm9udFNpemU6ICczcmVtJ319IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtzZWxlY3RQaWN0dXJlUmlnaHR9IGNsYXNzTmFtZT0nYXJyb3cnID48RmFBbmdsZVJpZ2h0IHN0eWxlPXt7IGZvbnRTaXplOiAnM3JlbSd9fSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz59IFxyXG4gICAgICAgICAgICB7dHdvICYmIFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAge3RocmVlICYmIFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAge2ZvdXIgJiYgXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICBQcmFlc2VudCBjb21tb2RvIGN1cnN1cyBtYWduYSwgdmVsIHNjZWxlcmlzcXVlIG5pc2wgY29uc2VjdGV0dXIgZXQuIFZpdmFtdXMgc2FnaXR0aXNcclxuICAgICAgICAgICAgbGFjdXMgdmVsIGF1Z3VlIGxhb3JlZXQgcnV0cnVtIGZhdWNpYnVzIGRvbG9yIGF1Y3Rvci5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgQWVuZWFuIGxhY2luaWEgYmliZW5kdW0gbnVsbGEgc2VkIGNvbnNlY3RldHVyLiBQcmFlc2VudCBjb21tb2RvIGN1cnN1cyBtYWduYSwgdmVsXHJcbiAgICAgICAgICAgIHNjZWxlcmlzcXVlIG5pc2wgY29uc2VjdGV0dXIgZXQuIERvbmVjIHNlZCBvZGlvIGR1aS4gRG9uZWMgdWxsYW1jb3JwZXIgbnVsbGEgbm9uIG1ldHVzXHJcbiAgICAgICAgICAgIGF1Y3RvciBmcmluZ2lsbGEuXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgey8qIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBTYXZlIGNoYW5nZXNcclxuICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuYXJyb3ctaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFmMmE0NDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93OmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2I3YjViMztcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\projects\\CustomizedDialogs.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.5c7b0fb9cdebc68a883c.hot-update.js.map