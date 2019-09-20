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
      lineNumber: 29
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, children), onClose ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    style: {
      maxWidth: '345px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, one && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    one: one,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), two && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    two: two,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), three && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    three: three,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), four && __jsx(_MediaCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
    handleClickOpen: handleClickOpen,
    image: image,
    four: four,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClose: handleClose,
    "aria-labelledby": "customized-dialog-title",
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "WellDone International \u2022 Dashboard"), two && __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Project 2 Title"), three && __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Project 3 Title"), four && __jsx("h2", {
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
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, one && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("img", {
    src: picture === 0 ? '../static/IndexModal.png' : picture === 1 ? '../static/DashboardFinal.png' : picture === 2 ? '../static/monitorsFinal.png' : picture === 3 ? '../static/reportsPage.png' : null,
    alt: "WellDone International \u2022 Dashboard Screenshot",
    width: '100px',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), two && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), three && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), four && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.c1eb76b258a20c8384a1.hot-update.js.map