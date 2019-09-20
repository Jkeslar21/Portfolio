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
    className: "jsx-843444527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    style: {
      maxWidth: '345px'
    },
    className: "jsx-843444527",
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
    className: "jsx-843444527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "WellDone International \u2022 Dashboard"), two && __jsx("h2", {
    className: "jsx-843444527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Project 2 Title"), three && __jsx("h2", {
    className: "jsx-843444527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Project 3 Title"), four && __jsx("h2", {
    className: "jsx-843444527",
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
    className: "jsx-843444527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-843444527" + " " + 'arrow-icons',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("div", {
    onClick: selectPictureLeft,
    className: "jsx-843444527" + " " + 'arrow',
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
    className: "jsx-843444527" + " " + 'arrow',
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
    id: "843444527",
    __self: this
  }, ".arrow-icons.jsx-843444527{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#1f2a44;-webkit-transition:0.3s;transition:0.3s;}.arrow.jsx-843444527:hover{color:#b7b5b3;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xccHJvamVjdHNcXEN1c3RvbWl6ZWREaWFsb2dzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSmdCLEFBR2tDLEFBTUMsY0FDQyxlQUNuQiw2Q0FQa0MsbUhBQ2hCLGNBQ0Usd0NBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xccHJvamVjdHNcXEN1c3RvbWl6ZWREaWFsb2dzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xyXG5pbXBvcnQgTXVpRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgTXVpRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcclxuaW1wb3J0IE11aURpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTWVkaWFDYXJkIGZyb20gJy4vTWVkaWFDYXJkJ1xyXG5pbXBvcnQgeyBGYUFuZ2xlUmlnaHQsIEZhQW5nbGVMZWZ0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpbjogMCxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBjbG9zZUJ1dHRvbjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICByaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIHRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmdyZXlbNTAwXSxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IERpYWxvZ1RpdGxlID0gd2l0aFN0eWxlcyhzdHlsZXMpKHByb3BzID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc2VzLCBvbkNsb3NlIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPE11aURpYWxvZ1RpdGxlIGRpc2FibGVUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuICAgICAge29uQ2xvc2UgPyAoXHJcbiAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImNsb3NlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlQnV0dG9ufSBvbkNsaWNrPXtvbkNsb3NlfT5cclxuICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9NdWlEaWFsb2dUaXRsZT5cclxuICApO1xyXG59KTtcclxuXHJcbmNvbnN0IERpYWxvZ0NvbnRlbnQgPSB3aXRoU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSkoTXVpRGlhbG9nQ29udGVudCk7XHJcblxyXG5jb25zdCBEaWFsb2dBY3Rpb25zID0gd2l0aFN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpbjogMCxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpKE11aURpYWxvZ0FjdGlvbnMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9taXplZERpYWxvZ3Moe2ltYWdlLCB0aXRsZSwgaWNvbnMsIGRlc2NyaXB0aW9uLCBvbmUsIHR3bywgdGhyZWUsIGZvdXJ9KSB7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGljdHVyZSwgc2V0UGljdHVyZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIFxyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja09wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY3RQaWN0dXJlUmlnaHQgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChwaWN0dXJlIDwgNCkge1xyXG4gICAgICAgICAgc2V0UGljdHVyZShwaWN0dXJlKzEpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBpY3R1cmUgPT09IDMpIHtcclxuICAgICAgICAgIHNldFBpY3R1cmUoMClcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VsZWN0UGljdHVyZUxlZnQgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChwaWN0dXJlID09PSAwKSB7XHJcbiAgICAgICAgICBzZXRQaWN0dXJlKDMpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBpY3R1cmUgPiAwKSB7XHJcbiAgICAgICAgICBzZXRQaWN0dXJlKHBpY3R1cmUtMSlcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xpY2tPcGVufT5cclxuICAgICAgICBPcGVuIGRpYWxvZ1xyXG4gICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6ICczNDVweCd9fT5cclxuICAgICAge29uZSAmJiA8TWVkaWFDYXJkIGhhbmRsZUNsaWNrT3Blbj17aGFuZGxlQ2xpY2tPcGVufSBpbWFnZT17aW1hZ2V9IG9uZT17b25lfSB0aXRsZT17dGl0bGV9IC8+fVxyXG4gICAgICB7dHdvICYmIDxNZWRpYUNhcmQgaGFuZGxlQ2xpY2tPcGVuPXtoYW5kbGVDbGlja09wZW59IGltYWdlPXtpbWFnZX0gdHdvPXt0d299IHRpdGxlPXt0aXRsZX0gLz59XHJcbiAgICAgIHt0aHJlZSAmJiA8TWVkaWFDYXJkIGhhbmRsZUNsaWNrT3Blbj17aGFuZGxlQ2xpY2tPcGVufSBpbWFnZT17aW1hZ2V9IHRocmVlPXt0aHJlZX0gdGl0bGU9e3RpdGxlfSAvPn1cclxuICAgICAge2ZvdXIgJiYgPE1lZGlhQ2FyZCBoYW5kbGVDbGlja09wZW49e2hhbmRsZUNsaWNrT3Blbn0gaW1hZ2U9e2ltYWdlfSBmb3VyPXtmb3VyfSB0aXRsZT17dGl0bGV9IC8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERpYWxvZyBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PVwiY3VzdG9taXplZC1kaWFsb2ctdGl0bGVcIiBvcGVuPXtvcGVufT5cclxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJjdXN0b21pemVkLWRpYWxvZy10aXRsZVwiIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgIHtvbmUgJiYgPGgyPldlbGxEb25lIEludGVybmF0aW9uYWwg4oCiIERhc2hib2FyZDwvaDI+fVxyXG4gICAgICAgICAge3R3byAmJiA8aDI+UHJvamVjdCAyIFRpdGxlPC9oMj59XHJcbiAgICAgICAgICB7dGhyZWUgJiYgPGgyPlByb2plY3QgMyBUaXRsZTwvaDI+fVxyXG4gICAgICAgICAge2ZvdXIgJiYgPGgyPlByb2plY3QgNCBUaXRsZTwvaDI+fVxyXG4gICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgZGl2aWRlcnM+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICB7b25lICYmIFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwaWN0dXJlID09PSAwID8gJy4uL3N0YXRpYy9JbmRleE1vZGFsLnBuZycgOlxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPT09IDEgPyAnLi4vc3RhdGljL0Rhc2hib2FyZEZpbmFsLnBuZycgOlxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPT09IDIgPyAnLi4vc3RhdGljL21vbml0b3JzRmluYWwucG5nJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSA9PT0gMyA/ICcuLi9zdGF0aWMvcmVwb3J0c1BhZ2UucG5nJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgIGFsdD0nV2VsbERvbmUgSW50ZXJuYXRpb25hbCDigKIgRGFzaGJvYXJkIFNjcmVlbnNob3QnXHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoPSc1NzVweCcgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcnJvdy1pY29ucyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtzZWxlY3RQaWN0dXJlTGVmdH0gY2xhc3NOYW1lPSdhcnJvdycgPjxGYUFuZ2xlTGVmdCBzdHlsZT17eyBmb250U2l6ZTogJzNyZW0nfX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3NlbGVjdFBpY3R1cmVSaWdodH0gY2xhc3NOYW1lPSdhcnJvdycgPjxGYUFuZ2xlUmlnaHQgc3R5bGU9e3sgZm9udFNpemU6ICczcmVtJ319IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPn0gXHJcbiAgICAgICAgICAgIHt0d28gJiYgXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICB7dGhyZWUgJiYgXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICB7Zm91ciAmJiBcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgIFByYWVzZW50IGNvbW1vZG8gY3Vyc3VzIG1hZ25hLCB2ZWwgc2NlbGVyaXNxdWUgbmlzbCBjb25zZWN0ZXR1ciBldC4gVml2YW11cyBzYWdpdHRpc1xyXG4gICAgICAgICAgICBsYWN1cyB2ZWwgYXVndWUgbGFvcmVldCBydXRydW0gZmF1Y2lidXMgZG9sb3IgYXVjdG9yLlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICBBZW5lYW4gbGFjaW5pYSBiaWJlbmR1bSBudWxsYSBzZWQgY29uc2VjdGV0dXIuIFByYWVzZW50IGNvbW1vZG8gY3Vyc3VzIG1hZ25hLCB2ZWxcclxuICAgICAgICAgICAgc2NlbGVyaXNxdWUgbmlzbCBjb25zZWN0ZXR1ciBldC4gRG9uZWMgc2VkIG9kaW8gZHVpLiBEb25lYyB1bGxhbWNvcnBlciBudWxsYSBub24gbWV0dXNcclxuICAgICAgICAgICAgYXVjdG9yIGZyaW5naWxsYS5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICB7LyogPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIFNhdmUgY2hhbmdlc1xyXG4gICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgPC9EaWFsb2c+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5hcnJvdy1pY29ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxZjJhNDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvdzpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiN2I1YjM7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\projects\\CustomizedDialogs.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.d84083cc1a18bf7a0e53.hot-update.js.map