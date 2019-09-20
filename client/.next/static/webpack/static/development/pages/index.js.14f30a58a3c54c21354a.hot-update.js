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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _MediaCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MediaCard */ "./components/projects/MediaCard.jsx");


var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\projects\\CustomizedDialogs.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;












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

var DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose;
  return __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disableTypography: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, children), onClose ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })) : null);
});
var DialogContent = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(2)
    }
  };
})(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__["default"]);
var DialogActions = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(function (theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  };
})(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9__["default"]);
function CustomizedDialogs(_ref) {
  var image = _ref.image,
      title = _ref.title,
      icons = _ref.icons,
      description = _ref.description,
      one = _ref.one,
      two = _ref.two,
      three = _ref.three,
      four = _ref.four;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
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
      setPicture((Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("picture"), picture++));
    }

    if (picture === 3) {
      setPicture(0);
    }
  };

  var selectPictureLeft = function selectPictureLeft() {
    if (picture === 0) {
      setPicture(3);
    }

    if (picture < 0) {
      setPicture((Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("picture"), picture--));
    }
  };

  return __jsx("div", {
    className: "jsx-2676468524",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    style: {
      maxWidth: '345px'
    },
    className: "jsx-2676468524",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, one && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    one: one,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), two && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    two: two,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), three && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    three: three,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), four && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    four: four,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClose: handleClose,
    "aria-labelledby": "customized-dialog-title",
    className: "modal-test",
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(DialogTitle, {
    id: "customized-dialog-title",
    onClose: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, one && __jsx("h2", {
    className: "jsx-2676468524",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "WellDone International \u2022 Dashboard"), two && __jsx("h2", {
    className: "jsx-2676468524",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Project 2 Title"), three && __jsx("h2", {
    className: "jsx-2676468524",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Project 3 Title"), four && __jsx("h2", {
    className: "jsx-2676468524",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Project 4 Title")), __jsx(DialogContent, {
    dividers: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, one && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("img", {
    src: picture === 0 ? '../static/IndexModal.png' : picture === 1 ? '../static/DashboardFinal.png' : picture === 2 ? '../static/monitorsFinal.png' : picture === 3 ? '../static/reportsPage.png' : null,
    alt: "WellDone International \u2022 Dashboard Screenshot",
    className: "jsx-2676468524",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), two && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null), three && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null), four && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.")), __jsx(DialogActions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2676468524",
    __self: this
  }, ".nav-items.jsx-2676468524{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed;top:0;left:0;z-index:9999;width:100%;padding:1%;color:#b7b5b3;background-color:#1f2a44;border-bottom:2px solid #b7b5b3;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.nav-item.jsx-2676468524{margin-right:50px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:'Raleway',sans-serif;}.nav-item.jsx-2676468524:hover{border-bottom:1px solid #4ad5ff;cursor:pointer;color:#e5e7e6;font-family:'Raleway',sans-serif;}.active.jsx-2676468524{border-bottom:1px solid #4ad5ff !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xccHJvamVjdHNcXEN1c3RvbWl6ZWREaWFsb2dzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SWtCLEFBR2tDLEFBb0JLLEFBS2MsQUFNVyxrQkFWeEIsY0FLSixXQU1uQixJQUxrQixjQUNvQixhQTNCWCxvQkE0QjNCLGlCQVBzQyxpQ0FDdEMsNkJBckJtQixlQUNULE1BQ0MsT0FDTSxhQUNGLFdBQ0EsV0FDRyxjQUNXLHlCQUNPLGdDQUVQLHlCQUNILHNCQUNELHFCQUVELG9CQUNILHFGQUNyQiIsImZpbGUiOiJDOlxcVXNlcnNcXGRpYW1vXFxEZXNrdG9wXFxHaXRGaWxlc1xcUG9ydGZvbGlvXFxjbGllbnRcXGNvbXBvbmVudHNcXHByb2plY3RzXFxDdXN0b21pemVkRGlhbG9ncy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IE11aURpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IE11aURpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XHJcbmltcG9ydCBNdWlEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IE1lZGlhQ2FyZCBmcm9tICcuL01lZGlhQ2FyZCdcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIGNsb3NlQnV0dG9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgdG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgRGlhbG9nVGl0bGUgPSB3aXRoU3R5bGVzKHN0eWxlcykocHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzZXMsIG9uQ2xvc2UgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TXVpRGlhbG9nVGl0bGUgZGlzYWJsZVR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG4gICAgICB7b25DbG9zZSA/IChcclxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VCdXR0b259IG9uQ2xpY2s9e29uQ2xvc2V9PlxyXG4gICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L011aURpYWxvZ1RpdGxlPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuY29uc3QgRGlhbG9nQ29udGVudCA9IHdpdGhTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKShNdWlEaWFsb2dDb250ZW50KTtcclxuXHJcbmNvbnN0IERpYWxvZ0FjdGlvbnMgPSB3aXRoU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSkoTXVpRGlhbG9nQWN0aW9ucyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21pemVkRGlhbG9ncyh7aW1hZ2UsIHRpdGxlLCBpY29ucywgZGVzY3JpcHRpb24sIG9uZSwgdHdvLCB0aHJlZSwgZm91cn0pIHtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwaWN0dXJlLCBzZXRQaWN0dXJlXSA9IHVzZVN0YXRlKDApXHJcbiAgXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbGVjdFBpY3R1cmVSaWdodCA9ICgpID0+IHtcclxuICAgICAgaWYgKHBpY3R1cmUgPCA0KSB7XHJcbiAgICAgICAgICBzZXRQaWN0dXJlKHBpY3R1cmUrKylcclxuICAgICAgfVxyXG4gICAgICBpZiAocGljdHVyZSA9PT0gMykge1xyXG4gICAgICAgICAgc2V0UGljdHVyZSgwKVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBzZWxlY3RQaWN0dXJlTGVmdCA9ICgpID0+IHtcclxuICAgICAgaWYgKHBpY3R1cmUgPT09IDApIHtcclxuICAgICAgICAgIHNldFBpY3R1cmUoMylcclxuICAgICAgfVxyXG4gICAgICBpZiAocGljdHVyZSA8IDApIHtcclxuICAgICAgICAgIHNldFBpY3R1cmUocGljdHVyZS0tKVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbGlja09wZW59PlxyXG4gICAgICAgIE9wZW4gZGlhbG9nXHJcbiAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogJzM0NXB4J319PlxyXG4gICAgICB7b25lICYmIDxNZWRpYUNhcmQgaGFuZGxlQ2xpY2tPcGVuPXtoYW5kbGVDbGlja09wZW59IGltYWdlPXtpbWFnZX0gb25lPXtvbmV9IHRpdGxlPXt0aXRsZX0gLz59XHJcbiAgICAgIHt0d28gJiYgPE1lZGlhQ2FyZCBoYW5kbGVDbGlja09wZW49e2hhbmRsZUNsaWNrT3Blbn0gaW1hZ2U9e2ltYWdlfSB0d289e3R3b30gdGl0bGU9e3RpdGxlfSAvPn1cclxuICAgICAge3RocmVlICYmIDxNZWRpYUNhcmQgaGFuZGxlQ2xpY2tPcGVuPXtoYW5kbGVDbGlja09wZW59IGltYWdlPXtpbWFnZX0gdGhyZWU9e3RocmVlfSB0aXRsZT17dGl0bGV9IC8+fVxyXG4gICAgICB7Zm91ciAmJiA8TWVkaWFDYXJkIGhhbmRsZUNsaWNrT3Blbj17aGFuZGxlQ2xpY2tPcGVufSBpbWFnZT17aW1hZ2V9IGZvdXI9e2ZvdXJ9IHRpdGxlPXt0aXRsZX0gLz59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RGlhbG9nIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJjdXN0b21pemVkLWRpYWxvZy10aXRsZVwiIGNsYXNzTmFtZT0nbW9kYWwtdGVzdCcgb3Blbj17b3Blbn0+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiY3VzdG9taXplZC1kaWFsb2ctdGl0bGVcIiBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICB7b25lICYmIDxoMj5XZWxsRG9uZSBJbnRlcm5hdGlvbmFsIOKAoiBEYXNoYm9hcmQ8L2gyPn1cclxuICAgICAgICAgIHt0d28gJiYgPGgyPlByb2plY3QgMiBUaXRsZTwvaDI+fVxyXG4gICAgICAgICAge3RocmVlICYmIDxoMj5Qcm9qZWN0IDMgVGl0bGU8L2gyPn1cclxuICAgICAgICAgIHtmb3VyICYmIDxoMj5Qcm9qZWN0IDQgVGl0bGU8L2gyPn1cclxuICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50IGRpdmlkZXJzPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAge29uZSAmJiBcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGljdHVyZSA9PT0gMCA/ICcuLi9zdGF0aWMvSW5kZXhNb2RhbC5wbmcnIDpcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlID09PSAxID8gJy4uL3N0YXRpYy9EYXNoYm9hcmRGaW5hbC5wbmcnIDpcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlID09PSAyID8gJy4uL3N0YXRpYy9tb25pdG9yc0ZpbmFsLnBuZycgOlxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPT09IDMgPyAnLi4vc3RhdGljL3JlcG9ydHNQYWdlLnBuZycgOlxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICBhbHQ9J1dlbGxEb25lIEludGVybmF0aW9uYWwg4oCiIERhc2hib2FyZCBTY3JlZW5zaG90JyAvPlxyXG4gICAgICAgICAgICAgICAgPC8+fSBcclxuICAgICAgICAgICAge3R3byAmJiBcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgIHt0aHJlZSAmJiBcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgIHtmb3VyICYmIFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgUHJhZXNlbnQgY29tbW9kbyBjdXJzdXMgbWFnbmEsIHZlbCBzY2VsZXJpc3F1ZSBuaXNsIGNvbnNlY3RldHVyIGV0LiBWaXZhbXVzIHNhZ2l0dGlzXHJcbiAgICAgICAgICAgIGxhY3VzIHZlbCBhdWd1ZSBsYW9yZWV0IHJ1dHJ1bSBmYXVjaWJ1cyBkb2xvciBhdWN0b3IuXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgIEFlbmVhbiBsYWNpbmlhIGJpYmVuZHVtIG51bGxhIHNlZCBjb25zZWN0ZXR1ci4gUHJhZXNlbnQgY29tbW9kbyBjdXJzdXMgbWFnbmEsIHZlbFxyXG4gICAgICAgICAgICBzY2VsZXJpc3F1ZSBuaXNsIGNvbnNlY3RldHVyIGV0LiBEb25lYyBzZWQgb2RpbyBkdWkuIERvbmVjIHVsbGFtY29ycGVyIG51bGxhIG5vbiBtZXR1c1xyXG4gICAgICAgICAgICBhdWN0b3IgZnJpbmdpbGxhLlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgIHsvKiA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgU2F2ZSBjaGFuZ2VzXHJcbiAgICAgICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICA8L0RpYWxvZz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm5hdi1pdGVtcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2I3YjViMztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyYTQ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjdiNWIzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBXZWJraXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogSUUgMTAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgLyogQ3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgaW4gT3BlcmEgYnV0IHdpbGwgYmUgc29vbiAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdi1pdGVtOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRhZDVmZjtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGFkNWZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\projects\\CustomizedDialogs.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.14f30a58a3c54c21354a.hot-update.js.map