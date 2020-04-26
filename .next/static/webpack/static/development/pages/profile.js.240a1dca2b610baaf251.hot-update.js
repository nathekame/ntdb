webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./components/layouts/navbar.js":
/*!**************************************!*\
  !*** ./components/layouts/navbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/assets/style.scss */ "./public/assets/style.scss");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_assets_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./components/layouts/menu.js");
/* harmony import */ var _store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/contexts/profileContext */ "./store/contexts/profileContext.js");
/* harmony import */ var _utility_logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility/logout */ "./utility/logout.js");
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/layouts/navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Navbar() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_3__["ProfileContext"]),
      dispatch = _useContext.dispatch;

  var handleLogout = function handleLogout() {
    dispatch({
      type: 'CLEAR_CONTEXT'
    });
    Object(_utility_logout__WEBPACK_IMPORTED_MODULE_4__["default"])();
  };

  return __jsx("nav", {
    className: "navbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "two-column-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, " ", __jsx("img", {
    src: "/images/ubelogo.jpeg",
    alt: "logo",
    height: "70px",
    width: "200px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 46
    }
  })), __jsx("div", {
    id: "navLogout",
    className: "navLogout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("a", {
    onClick: handleLogout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 63
    }
  }, __jsx("i", {
    "class": "fas fa-sign-out-alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 89
    }
  }), "Logout"))), __jsx("div", {
    className: "one-column-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "navTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, " ", __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 48
    }
  }, "NIGER STATE UNIVERSAL BASIC EDUCATION TEACHERS DATABASE"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=profile.js.240a1dca2b610baaf251.hot-update.js.map