webpackHotUpdate("static/development/pages/success.js",{

/***/ "./components/profile/success.js":
/*!***************************************!*\
  !*** ./components/profile/success.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/contexts/profileContext */ "./store/contexts/profileContext.js");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/assets/style.scss */ "./public/assets/style.scss");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utility_logout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility/logout */ "./utility/logout.js");
/* harmony import */ var _layouts_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/navbar */ "./components/layouts/navbar.js");
var _this = undefined,
    _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/profile/success.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Success = function Success() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_1__["ProfileContext"]),
      dispatch = _useContext.dispatch;

  var handleClick = function handleClick() {
    dispatch({
      type: 'CLEAR_CONTEXT'
    });
    Object(_utility_logout__WEBPACK_IMPORTED_MODULE_3__["default"])();
  };

  return __jsx("div", {
    className: "pagegrid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "innergrid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "successContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/images/success.png",
    alt: "success",
    height: "100px",
    width: "100px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 28
    }
  }, "You Have Successfully completed ur profile"), __jsx("button", {
    size: "small",
    color: "primary",
    onClick: handleClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, "Logout"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Success);

/***/ })

})
//# sourceMappingURL=success.js.78fc93c2d6c8f0f38964.hot-update.js.map