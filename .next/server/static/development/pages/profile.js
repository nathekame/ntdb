module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/auth/login.js":
/*!**********************************!*\
  !*** ./components/auth/login.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utility_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility/jwt */ "./utility/jwt.js");
/* harmony import */ var _utility_localStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility/localStorage */ "./utility/localStorage.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! validatorjs */ "validatorjs");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(validatorjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/auth/login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Login = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    email: '',
    password: ''
  });
  let rules = {
    email: 'required|email',
    password: 'required'
  };
  let validation = new validatorjs__WEBPACK_IMPORTED_MODULE_8___default.a(user, rules, {
    required: 'required*'
  });
  validation.fails(); // true

  validation.passes(); // false

  const handleChange = e => {
    e.preventDefault();
    setUser(_objectSpread({}, user, {
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("the current state before submit state " + JSON.stringify(user));

    const localJWT = () => {
      const localCookie = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('auth');
      return localCookie ? localCookie : undefined; //    const localJWT = localStorage.getItem("jwt");
      //   return localJWT ? JSON.parse(localJWT) : '';
    };

    console.log("the local JWt " + localJWT()); // connect to the db via axios and the dispatch an action based on the server response

    const options = {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${localJWT}`
      }
    };
    const url = _config_config__WEBPACK_IMPORTED_MODULE_7__["default"].apiUrl + 'login';
    let apiCall = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, user);
    console.log("API response " + apiCall.data.userToken);
    const token = apiCall.data.userToken;

    if (token) {
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("auth", token);
      _utility_localStorage__WEBPACK_IMPORTED_MODULE_6__["default"].setItemInStorage("auth", token); // decode the token and return the users details

      let isProfileComplete = _utility_jwt__WEBPACK_IMPORTED_MODULE_5__["default"].jwtProfile(token); //let isProfileComplete = '"1"'

      console.log("this is the returned vaalue " + isProfileComplete);

      if (isProfileComplete === '"1"') {
        console.log("the token was decoded well so you are free to go"); //   router.push('/account')

        router.push('/success');
      }

      if (isProfileComplete === "null" || isProfileComplete === '"0"') {
        router.push('/profile');
      }
    }
  };

  return __jsx("div", {
    className: "pagegrid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "innergrid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 1
    }
  }, __jsx("form", {
    className: "form",
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "one-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/ubelogo.jpeg",
    alt: "logo",
    height: "200px",
    width: "600px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }, " Login "))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_9__["ToastContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "one-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, "Email ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 44
    }
  }, validation.errors.get("email"))), __jsx("input", {
    onChange: handleChange,
    name: "email",
    id: "email",
    type: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }, "Password ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 50
    }
  }, validation.errors.get("password"))), __jsx("input", {
    onChange: handleChange,
    name: "password",
    id: "password",
    type: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "two-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  }, "Don't have an account?    ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 44
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 59
    }
  }, "Register")))), __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 16
    }
  }, "submit")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login); //export default  withStyles(Login);

/***/ }),

/***/ "./components/componentUtility/composeApiData.js":
/*!*******************************************************!*\
  !*** ./components/componentUtility/composeApiData.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const composeFullProfileData = (data, files) => {
  console.log("the data to compose " + JSON.stringify(data));
  console.log("this is one of the filesdddddddd " + files.idCardFile); //  console.log("this is second of the filesdddddddd "+files.profilePicFile);

  const formData = new FormData();
  const dataEntries = Object.entries(data);

  try {
    for (const [key, value] of dataEntries) {
      if (key === "idCardFile") {
        console.log("i fond the data for idcard " + key);
        continue; //   res.status(500)
      }

      if (value !== "" || value !== undefined) {
        let fAppend = formData.append(key, value);

        if (fAppend === false) {
          break;
        } //   res.status(500)

      }
    }

    if (files !== undefined) {
      if (files.profilePicFile !== undefined) {
        formData.append('profilePic', files.profilePicFile);
      }

      if (files.idCardFile !== undefined) {
        formData.append('idCardFile', files.idCardFile);
      }
    }

    return formData;
  } catch (error) {
    console.log("this is the error " + error);
    return false;
  }
};

const composePartialProfileData = data => {
  console.log("the data to compose " + JSON.stringify(data)); // console.log("this is one of the filesdddddddd "+files.idCardFile);
  // console.log("this is second of the filesdddddddd "+files.profilePicFile);

  const formData = new FormData();
  const dataEntries = Object.entries(data);

  try {
    for (const [key, value] of dataEntries) {
      if (value !== "" || value !== undefined) {
        let fAppend = formData.append(key, value);

        if (fAppend === false) {
          break;
        } //   res.status(500)

      }
    }

    return formData;
  } catch (error) {
    console.log("this is the error " + error);
    return false;
  }
};

const composeApiData = {
  composeFullProfileData: composeFullProfileData,
  composePartialProfileData: composePartialProfileData
};
/* harmony default export */ __webpack_exports__["default"] = (composeApiData);

/***/ }),

/***/ "./components/componentUtility/persistLocalToState.js":
/*!************************************************************!*\
  !*** ./components/componentUtility/persistLocalToState.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility/localStorage */ "./utility/localStorage.js");


const checkInLocalStorage = (state, val) => {
  const getLocalItem = _utility_localStorage__WEBPACK_IMPORTED_MODULE_0__["default"].getItemFromStorage("profile");
  const localStorageValue = getLocalItem; // console.log("the persisted local storage value  --->>>  "+localStorageValue);

  if (localStorageValue !== undefined) {
    //  console.log("there is a value   -->>"+localValue);
    let localStateVal = localStorageValue[state];

    if (localStateVal !== undefined) {
      return localStateVal[val];
    }
  } else {
    return '';
  }
};

/* harmony default export */ __webpack_exports__["default"] = (checkInLocalStorage);

/***/ }),

/***/ "./components/layouts/menu.js":
/*!************************************!*\
  !*** ./components/layouts/menu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_menuLinks_AdminLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/menuLinks/AdminLinks */ "./components/partials/menuLinks/AdminLinks.js");
/* harmony import */ var _partials_menuLinks_UserLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/menuLinks/UserLinks */ "./components/partials/menuLinks/UserLinks.js");
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/layouts/menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Menu = () => {
  const userRole = "admin";

  const checkRole = role => {
    if (role === "admin") {
      return __jsx(_partials_menuLinks_AdminLinks__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 20
        }
      });
    }

    if (role === "user") {
      return __jsx(_partials_menuLinks_UserLinks__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 20
        }
      });
    }
  };

  return __jsx("div", {
    className: "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, checkRole(userRole)));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/layouts/navbar.js":
/*!**************************************!*\
  !*** ./components/layouts/navbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/assets/style.scss */ "./public/assets/style.scss");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_assets_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./components/layouts/menu.js");
/* harmony import */ var _store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/contexts/profileContext */ "./store/contexts/profileContext.js");
/* harmony import */ var _utility_logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility/logout */ "./utility/logout.js");
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/layouts/navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Navbar() {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_3__["ProfileContext"]);

  const handleLogout = () => {
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
  }, " ", __jsx("img", {
    src: "/images/logout.png",
    alt: "logo",
    height: "30px",
    width: "30px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 90
    }
  })))), __jsx("div", {
    id: "pageTitle",
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

/***/ }),

/***/ "./components/partials/menuLinks/AdminLinks.js":
/*!*****************************************************!*\
  !*** ./components/partials/menuLinks/AdminLinks.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/partials/menuLinks/AdminLinks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AdminLinks = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 16
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 20
    }
  }), "My Account"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 16
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 20
    }
  }), "Profile"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 16
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 20
    }
  }), "CBT"));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminLinks);

/***/ }),

/***/ "./components/partials/menuLinks/UserLinks.js":
/*!****************************************************!*\
  !*** ./components/partials/menuLinks/UserLinks.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/partials/menuLinks/UserLinks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const UserLinks = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 16
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 20
    }
  }), "My Account"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 16
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 20
    }
  }), "Profile"));
};

/* harmony default export */ __webpack_exports__["default"] = (UserLinks);

/***/ }),

/***/ "./components/profile/bioInformation.js":
/*!**********************************************!*\
  !*** ./components/profile/bioInformation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/contexts/profileContext */ "./store/contexts/profileContext.js");
/* harmony import */ var _utility_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility/jwt */ "./utility/jwt.js");
/* harmony import */ var _utility_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility/localStorage */ "./utility/localStorage.js");
/* harmony import */ var _utility_logout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility/logout */ "./utility/logout.js");
/* harmony import */ var _layouts_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layouts/navbar */ "./components/layouts/navbar.js");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/assets/style.scss */ "./public/assets/style.scss");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_style_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componentUtility/persistLocalToState */ "./components/componentUtility/persistLocalToState.js");
/* harmony import */ var _utility_axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utility/axios */ "./utility/axios.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! validatorjs */ "validatorjs");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(validatorjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-materialize */ "react-materialize");
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_materialize__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/profile/bioInformation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














 //   const cropper = React.createRef(null);
//  const buttonStyle = {
//   backgroundColor: 'blue',
//  // backgroundImage: 'url(' + imgUrl + ')',
// };

const BioInformation = props => {
  // console.log("this is the passed in props +"+JSON.stringify(props));
  //const localCookie = Cookie.get('auth'); 
  //console.log("this is the local cookie from Bio Information       nnnnnn    ----->>>>>>>>>>>>> "+localCookie);
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_3__["ProfileContext"]);
  const currentProfile = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_3__["ProfileContext"]);
  const profileValue = currentProfile.profile.bioInformation; //   const bioInformation = (val) => {
  //       if(val === undefined){
  //           return
  //       }else{
  //         return val
  //       }
  //     }

  console.log("this is the current contect =============>>>>>>>>>>> " + JSON.stringify(currentProfile)); // console.log("this is the current contect =============>>>>>>>>>>> "+currentProfile.profile.bioInformation.firstName);
  // const checkInLocalStorage = (val) => {
  //   const getLocalItem = localStorageFuncs.getItemFromStorage("profile");
  //   const localStorageValue = getLocalItem.bioInformation[val]
  //   if(localStorageValue !== undefined){
  //   //  console.log("there is a value   -->>"+localValue);
  //     return localStorageValue
  //   }else{
  //     return ''
  //   }
  // }

  const {
    0: bioInformation,
    1: setBioInformation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    //  nextProfileStep: 2,
    profileStep: 1,
    firstName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_9__["default"])("bioInformation", "firstName"),
    otherName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_9__["default"])("bioInformation", "otherName"),
    lastName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_9__["default"])("bioInformation", "lastName"),
    gender: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_9__["default"])("bioInformation", "gender"),
    dob: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_9__["default"])("bioInformation", "dob"),
    placeOfBirth: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_9__["default"])("bioInformation", "placeOfBirth")
  });
  const {
    0: buttonState,
    1: setButtonState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  let rules = {
    firstName: 'required',
    // otherName: 'required|email',
    lastName: 'required',
    gender: 'required',
    dob: 'required',
    placeOfBirth: 'required' //  email: 'required|email',
    //  age: 'min:18'

  };
  let validation = new validatorjs__WEBPACK_IMPORTED_MODULE_11___default.a(bioInformation, rules, {
    required: 'required*'
  });
  validation.fails(); // true

  validation.passes(); // false
  // if (validation.fails()) {
  //   console.log("the validation has failed thats why u see this "+validation.errors.get("firstNameame"));
  //   // Error messages
  // validation.errors.first('email'); // 'The email format is invalid.'
  // validation.errors.get('email');
  // }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (validation.passes()) {
      setButtonState(false); // console.log("the   buttonStete "+buttonState);  
    } else {
      setButtonState(true);
    }
  }, [bioInformation]);

  const handleDateChange = date => {
    //setSelectedDate(date);
    setBioInformation(_objectSpread({}, bioInformation, {
      dob: moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format('YYYY-MM-DD')
    }));
  };

  const handleChange = e => {
    e.preventDefault();
    setBioInformation(_objectSpread({}, bioInformation, {
      [e.target.id]: e.target.value
    }));
  };

  const handleForward = async e => {
    e.preventDefault();

    if (validation.passes()) {
      dispatch({
        type: 'ADD_PROFILE_DATA',
        payload: {
          bioInformation: bioInformation
        }
      });
      const next = "F";
      const go = await props.updatestep(next);
      dispatch({
        type: 'CURRENT_STEP',
        payload: bioInformation.profileStep + 1
      });

      if (go) {
        //  console.log("all has gone well with the profile update from the props--->>>> "+props.currentStep);
        return go;
      }
    }
  };

  const handleSaveNow = async e => {
    e.preventDefault(); // setBioInformation({ ...bioInformation, profileStep: bioInformation.profileStep+1 });

    const data = _objectSpread({}, bioInformation, {
      profileStep: bioInformation.profileStep + 1
    });

    console.log("the data  " + JSON.stringify(bioInformation));

    if (validation.passes()) {
      let api = await _utility_axios__WEBPACK_IMPORTED_MODULE_10__["default"].profilePost(data);

      if (api.data === "error") {
        console.log("the log is error");
      }

      if (api.data === "success") {
        console.log("the log is success" + api.status); // router.push('/account')
      }

      dispatch({
        type: 'CLEAR_CONTEXT'
      });
      Object(_utility_logout__WEBPACK_IMPORTED_MODULE_6__["default"])();
    } else {
      dispatch({
        type: 'CLEAR_CONTEXT'
      });
      Object(_utility_logout__WEBPACK_IMPORTED_MODULE_6__["default"])();
    } // props.createProfile(props.stateData);
    //  logout();

  };

  const persistToLocalStorage = () => {
    const getLocalItem = _utility_localStorage__WEBPACK_IMPORTED_MODULE_5__["default"].getItemFromStorage("profile");

    if (getLocalItem !== undefined) {} else {
      // console.log("i=the local storage is empty make i put something insidehinixdopd")
      //  const newData = {...getLocalItem, bioInformation };
      const setLocalItem = _utility_localStorage__WEBPACK_IMPORTED_MODULE_5__["default"].setItemInStorage("profile", bioInformation);
      return setLocalItem;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // set local storage
    //console.log("this is the use effect running up and downnnnnnn   nooooooooooooowwwwwwwwwwww")
    // dispatch({type: 'CLEAR_DATA'});
    persistToLocalStorage(); // persistToState();
    // checkLocalStorage("firstName");
  });
  return __jsx("div", {
    className: "pagegrid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 7
    }
  }, __jsx(_layouts_navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "innergrid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 11
    }
  }, __jsx(react_materialize__WEBPACK_IMPORTED_MODULE_12__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 11
    }
  }, __jsx(react_materialize__WEBPACK_IMPORTED_MODULE_12__["Col"], {
    m: 6,
    s: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 15
    }
  }, __jsx(react_materialize__WEBPACK_IMPORTED_MODULE_12__["CardPanel"], {
    className: "black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "white-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 17
    }
  }, "Bio Information For a simpler card with less markup, try using a card panel which just has padding and a shadow effect"), "I am a very simple card.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (BioInformation);

/***/ }),

/***/ "./components/profile/confirm.js":
/*!***************************************!*\
  !*** ./components/profile/confirm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componentUtility/persistLocalToState */ "./components/componentUtility/persistLocalToState.js");
/* harmony import */ var _store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/contexts/profileContext */ "./store/contexts/profileContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/navbar */ "./components/layouts/navbar.js");
/* harmony import */ var _utility_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility/axios */ "./utility/axios.js");
/* harmony import */ var _componentUtility_composeApiData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componentUtility/composeApiData */ "./components/componentUtility/composeApiData.js");
/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./success */ "./components/profile/success.js");
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/profile/confirm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 //import { Eclipse } from "react-loading-io";

 // import Staff from '../partials/profile/staff';
// import Corper from '../partials/profile/corper';
// import Student from '../partials/profile/student';
// import Worker from '../partials/profile/worker';



 //   const cropper = React.createRef(null);

const Confirm = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const profileData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_2__["ProfileContext"]); // console.log("this is the profile details from the COtext "+JSON.stringify(profileData));

  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_2__["ProfileContext"]);
  const {
    0: myProfileDetails
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    profileStep: 8,
    isProfileComplete: 1,
    firstName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("bioInformation", "firstName"),
    otherName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("bioInformation", "otherName"),
    lastName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("bioInformation", "lastName"),
    gender: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("bioInformation", "gender"),
    dob: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("bioInformation", "dob"),
    placeOfBirth: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("bioInformation", "placeOfBirth"),
    stateOfOrigin: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("contactInformation", "stateOfOrigin"),
    lga: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("contactInformation", "lga"),
    address: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("contactInformation", "address"),
    controlNumber: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("contactInformation", "controlNumber"),
    mobileNumber: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("contactInformation", "mobileNumber"),
    fullName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("nextOfKinInformation", "fullName"),
    relationship: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("nextOfKinInformation", "relationship"),
    address: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("nextOfKinInformation", "address"),
    emailAddress: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("nextOfKinInformation", "emailAddress"),
    mobileNumber: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("nextOfKinInformation", "mobileNumber"),
    controlNumber: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("employmentInformation", "controlNumber"),
    highestQualification: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("employmentInformation", "highestQualification"),
    lgea: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("employmentInformation", "lgea"),
    station: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("employmentInformation", "station"),
    dateOfFirstAppointment: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("employmentInformation", "dateOfFirstAppointment"),
    dateOfConfirmation: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("employmentInformation", "dateOfConfirmation"),
    dateOfLastPromotion: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("employmentInformation", "dateOfLastPromotion"),
    bankName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("paymentInformation", "bankName"),
    accountName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("paymentInformation", "accountName"),
    accountNumber: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("paymentInformation", "accountNumber"),
    bvn: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_1__["default"])("paymentInformation", "bvn")
  });
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleSaveNow = async e => {
    e.preventDefault();
    setLoading(true);
    const commonData = myProfileDetails;
    const profilePicData = profileData.profile.profilePic.profilePicFile;
    const filesToCompose = {
      profilePicFile: profilePicData
    }; // console.log("this i s the file to comeose "+JSON.stringify(filesToCompose));

    let dataToCompose = commonData; //  dataToCompose.profilePic = profilePicData;

    const dataCompose = _componentUtility_composeApiData__WEBPACK_IMPORTED_MODULE_7__["default"].composeFullProfileData(dataToCompose, filesToCompose); //  console.log("this is the data going out "+JSON.stringify(data));
    // const sData = JSON.stringify(data);
    // console.log("the data to send in to the db "+sData);
    // const fData = new FormData();
    // const dataValue = profileData.profile.profilePic.profilePicFile;
    // const idCardFile = uniqueData.idCardFile;
    // const profilePicFile = profileData.profile.profilePic.profilePicFile;
    // const dataToSend = fData.append('image', dataValue);
    // const formData = new FormData();   
    // formData.append('firstName', commonData.firstName);
    // formData.append('idCardFile', idCardFile);
    // formData.append('profilePic', profilePicFile);
    // var details = JSON.stringify({age: 12});
    // form.append('details', details);
    // console.log("this is the complete doen data "+idCardFile);
    // console.log("the for id card file "+formData.get("idCardFile"));
    // console.log("this is the profile pic "+formData.get("profiePic"));
    // let api = await axiosFuncs.profilePost(dataToSend);

    let api = await _utility_axios__WEBPACK_IMPORTED_MODULE_6__["default"].profilePost(dataCompose);
    console.log("this is the status " + api.status);

    if (api.data === "error") {
      console.log("the log is error");
      setLoading(false);
      router.push('/profile');
    }

    if (api.status === 201) {
      console.log("the log is success" + api.status); // const next = "END";
      // const go = await props.updatestep(next);
      // if(go){
      //   setLoading(false);
      // }

      router.push('/success');
    } //  console.log("this is the complete "+JSON.stringify(api));
    //console.log("this is the retunred status "+api.config.data);

  };

  const handleBack = e => {
    e.preventDefault();
    const next = "B";
    const go = props.updatestep(next); // dispatch({type: 'DELETE_WORK_DETAILS', payload: "workerDetails"});

    dispatch({
      type: 'CURRENT_STEP',
      payload: myProfileDetails.profileStep - 1
    });

    if (go) {
      return go;
    }
  };

  if (loading === true) {
    return __jsx("div", {
      className: "pagegrid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 10
      }
    }, __jsx("div", {
      className: "innergrid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "successContainer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 19
      }
    }, __jsx("h3", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 26
      }
    }, "Creating Your Profile..."))));
  } else {
    return __jsx("div", {
      className: "confirmationPage",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 5
      }
    }, __jsx(_layouts_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 7
      }
    }), __jsx("div", {
      className: "innergrid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "profile-form",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "profileGroup",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "one-column-row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "profilePicPreview",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: profileData.profile.profilePic.profilePicUrl,
      alt: "profilePic",
      height: "70px",
      width: "200px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 64
      }
    })))), __jsx("div", {
      className: "one-column-row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "profilePicPreview",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 29
      }
    }, __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 32
      }
    }, "My Profile Preview"))))), __jsx("div", {
      className: "profileGroup",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 21
      }
    }, "Bio Information"), __jsx("div", {
      className: "three-column-row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "firstName",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 27
      }
    }, "First Name: "), __jsx("span", {
      id: "firstName",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 27
      }
    }, myProfileDetails.firstName)), __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "otherName",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 27
      }
    }, "Other Name: "), __jsx("span", {
      id: "otherName",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 27
      }
    }, myProfileDetails.otherName)), __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "lastName",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 27
      }
    }, "Last Name: "), __jsx("span", {
      id: "lastName",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 27
      }
    }, myProfileDetails.lastName))), __jsx("div", {
      className: "three-column-row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "gender",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 27
      }
    }, "Gender: "), __jsx("span", {
      id: "gender",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 27
      }
    }, myProfileDetails.gender)), __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "dob",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 27
      }
    }, "Date Of Birth: "), __jsx("span", {
      id: "dob",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 27
      }
    }, myProfileDetails.dob)), __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "placeOfBirth",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 27
      }
    }, "Place Of Birth: "), __jsx("span", {
      id: "placeOfBirth",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 27
      }
    }, myProfileDetails.placeOfBirth)))), __jsx("div", {
      className: "profileGroup",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 17
      }
    }, "Contact Information"), __jsx("div", {
      className: "three-column-row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "column ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "stateOfOrigin",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 31
      }
    }, "State of Origin: "), __jsx("span", {
      id: "stateOfOrigin",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 31
      }
    }, myProfileDetails.stateOfOrigin)), __jsx("div", {
      className: "column ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "column ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "lga",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 31
      }
    }, "LGA: "), __jsx("span", {
      id: "lga",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 31
      }
    }, myProfileDetails.lga))), __jsx("div", {
      className: "three-column-row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 19
      }
    }, __jsx("label", {
      htmlFor: "controlNumber",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 31
      }
    }, "Control Number: "), __jsx("span", {
      id: "controlNumber",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 31
      }
    }, myProfileDetails.controlNumber)), __jsx("div", {
      className: "column ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 19
      }
    }, __jsx("label", {
      htmlFor: "mobileNumber",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 31
      }
    }, "Mobile Number: "), __jsx("span", {
      id: "mobileNumber",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 31
      }
    }, myProfileDetails.mobileNumber))), __jsx("div", {
      className: "one-column-row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 19
      }
    }, __jsx("label", {
      htmlFor: "address",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 31
      }
    }, "Address: "), __jsx("span", {
      id: "controlNumber",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 31
      }
    }, myProfileDetails.address)))), __jsx("div", {
      className: "profileGroup",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 15
      }
    }, "Next Of Kin Information"), __jsx("div", {
      className: "three-column-row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 24
      }
    }, __jsx("label", {
      htmlFor: "fullName",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 31
      }
    }, "Full Name: "), __jsx("span", {
      id: "fullName",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 31
      }
    }, myProfileDetails.fullName)), __jsx("div", {
      className: "column ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 24
      }
    }), __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 24
      }
    }, __jsx("label", {
      htmlFor: "relationship",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 31
      }
    }, "Relationship: "), __jsx("span", {
      id: "relationship",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 31
      }
    }, myProfileDetails.relationship))), __jsx("div", {
      className: "three-column-row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 19
      }
    }, __jsx("label", {
      htmlFor: "emailAddress",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 27
      }
    }, "Email Address: "), __jsx("span", {
      id: "emailAddress",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 27
      }
    }, myProfileDetails.emailAddress)), __jsx("div", {
      className: "column ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 20
      }
    }), __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 20
      }
    }, __jsx("label", {
      htmlFor: "mobileNumber",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 25
      }
    }, "Mobile Number: "), __jsx("span", {
      id: "mobileNumber",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 25
      }
    }, myProfileDetails.mobileNumber))), __jsx("div", {
      className: "one-column-row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 20
      }
    }, __jsx("label", {
      htmlFor: "address",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 25
      }
    }, "Address: "), __jsx("span", {
      id: "address",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 25
      }
    }, myProfileDetails.address)))), __jsx("div", {
      className: "profileGroup",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 16
      }
    }, "Employment information"), __jsx("div", {
      className: "three-column-row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 16
      }
    }, __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "controlNumber",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 29
      }
    }, "Control Number: "), __jsx("span", {
      id: "controlNumber",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 29
      }
    }, myProfileDetails.controlNumber)), __jsx("div", {
      className: "column ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "highestQualification",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 29
      }
    }, "Highest Qualification: "), __jsx("span", {
      id: "highestQualification",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 29
      }
    }, myProfileDetails.highestQualification))), __jsx("div", {
      className: "three-column-row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "lgea",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 29
      }
    }, "LGEA: "), __jsx("span", {
      id: "lgea",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 29
      }
    }, myProfileDetails.lgea)), __jsx("div", {
      className: "column ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "station",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 29
      }
    }, "Station: "), __jsx("span", {
      id: "station",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 29
      }
    }, myProfileDetails.station))), __jsx("div", {
      className: "three-column-row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "dateOfFirstAppointment",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 29
      }
    }, "Highest Qualification: "), __jsx("span", {
      id: "dateOfFirstAppointment",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 29
      }
    }, myProfileDetails.dateOfFirstAppointment)), __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "dateOfConfirmation",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 29
      }
    }, "Date Of Confirmation: "), __jsx("span", {
      id: "dateOfConfirmation",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 29
      }
    }, myProfileDetails.dateOfConfirmation)), __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "dateOfLastPromotion",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 29
      }
    }, "Date Of Last Promotion: "), __jsx("span", {
      id: "dateOfLastPromotion",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 29
      }
    }, myProfileDetails.dateOfLastPromotion)))), __jsx("div", {
      className: "profileGroup",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 16
      }
    }, "Payment Information"), __jsx("div", {
      className: "four-column-row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 31
      }
    }, __jsx("label", {
      htmlFor: "bankName",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 33
      }
    }, "Bank Name: "), __jsx("span", {
      id: "bankName",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 33
      }
    }, myProfileDetails.bankName)), __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 31
      }
    }, __jsx("label", {
      htmlFor: "accountName",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 33
      }
    }, "Account Name: "), __jsx("span", {
      id: "accountName",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 33
      }
    }, myProfileDetails.accountName)), __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 31
      }
    }, __jsx("label", {
      htmlFor: "accountNumber",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 33
      }
    }, "Account Number: "), __jsx("span", {
      id: "accountNumber",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 33
      }
    }, myProfileDetails.accountNumber)), __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 31
      }
    }, __jsx("label", {
      htmlFor: "bvn",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 33
      }
    }, "BVN: "), __jsx("span", {
      id: "bvn",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 33
      }
    }, myProfileDetails.bvn)))), __jsx("div", {
      className: "two-column-row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 23
      }
    }, __jsx("button", {
      variant: "outlined",
      size: "small",
      color: "primary",
      onClick: handleBack,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 443,
        columnNumber: 26
      }
    }, " Back ")), __jsx("div", {
      className: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 23
      }
    }, __jsx("button", {
      size: "small",
      color: "primary",
      onClick: handleSaveNow,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 26
      }
    }, "My Details Are Fine Save Now"))))));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Confirm);

/***/ }),

/***/ "./components/profile/contactInformation.js":
/*!**************************************************!*\
  !*** ./components/profile/contactInformation.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/contexts/profileContext */ "./store/contexts/profileContext.js");
/* harmony import */ var _layouts_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/navbar */ "./components/layouts/navbar.js");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/style.scss */ "./public/assets/style.scss");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utility_logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility/logout */ "./utility/logout.js");
/* harmony import */ var _componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentUtility/persistLocalToState */ "./components/componentUtility/persistLocalToState.js");
/* harmony import */ var _utility_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility/axios */ "./utility/axios.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! validatorjs */ "validatorjs");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(validatorjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utility_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility/jwt */ "./utility/jwt.js");
/* harmony import */ var _componentUtility_composeApiData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componentUtility/composeApiData */ "./components/componentUtility/composeApiData.js");
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/profile/contactInformation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 //import localStorageFuncs from '../../../utility/localStorage'
//   const cropper = React.createRef(null);

const ContactInformation = props => {
  //console.log("this is the passed in props +"+JSON.stringify(props));
  // console.log("this is the passed in props -"+props.stepremove);
  //const coVal = Cookie.get("auth");
  // const profileStep = (cookie) => {
  //     return cookie ? jwtFuncs.jwtProfileStep(cookie) : 1 
  //  }
  //const sessionProStep = profileStep(coVal);
  //console.log("the pro step "+sessionProStep);
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_1__["ProfileContext"]); //  const checkInLocalStorage = (val) => {
  //   const getLocalItem = localStorageFuncs.getItemFromStorage("profile");
  //   const localStorageValue = getLocalItem["contactInformation"][val]
  //   console.log(" i have to trouble shoot from here "+localStorageValue);
  //   if(localStorageValue !== undefined){
  //   //  console.log("there is a value   -->>"+localValue);
  //     return localStorageValue
  //   }else{
  //     return ''
  //   }
  // }

  const {
    0: contactInformation,
    1: setContactInformation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    // prevProfileStep:1,
    // nextProfileStep:3,
    profileStep: 2,
    stateOfOrigin: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("contactInformation", "stateOfOrigin"),
    lga: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("contactInformation", "lga"),
    address: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("contactInformation", "address"),
    controlNumber: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("contactInformation", "controlNumber"),
    mobileNumber: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("contactInformation", "mobileNumber")
  });
  const {
    0: buttonStateF,
    1: setButtonStateF
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: buttonStateB,
    1: setButtonStateB
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let rules = {
    stateOfOrigin: 'required',
    lga: 'required',
    address: 'required',
    mobileNumber: 'required|numeric|mobileNumberCount' //  email: 'required|email',
    //  age: 'min:18'

  };

  const checkMobileNumberSize = (mobileNumber, requirement, attribute) => {
    const requ = _.size(mobileNumber); //console.log("the requ from the size of the acc number ============ "+requ);


    if (requ === 11) {
      return true;
    }

    if (requ !== 11) {
      return false;
    }
  };

  validatorjs__WEBPACK_IMPORTED_MODULE_7___default.a.register('mobileNumberCount', checkMobileNumberSize, 'Mobile Numbers Must Be 11 Digits.');
  let validation = new validatorjs__WEBPACK_IMPORTED_MODULE_7___default.a(contactInformation, rules, {
    required: 'required*'
  });
  validation.fails(); // true

  validation.passes(); // false

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (validation.passes()) {
      setButtonStateF(false); // console.log("the   buttonStete "+buttonState);  
    } else {
      setButtonStateF(true);
    }
  }, [contactInformation]); // useEffect(() => {
  //       if (contactInformation.profileStep === sessionProStep ) {
  //               setButtonStateB(true);
  //             //  console.log("the   buttonStete "+contactInformation.profileStep);  
  //          }else{
  //               setButtonStateB(false);
  //      }
  // });
  // const updateState = () =>{
  //   console.log("i have reached this place for the user effct")
  // }
  //   useEffect(updateState, []);

  const handleChange = e => {
    e.preventDefault();
    setContactInformation(_objectSpread({}, contactInformation, {
      [e.target.id]: e.target.value
    }));
  };

  const handleForward = async e => {
    e.preventDefault(); //   dispatch({type: 'ADD_PROFILE_DATA', payload: contactInformation});

    if (validation.passes()) {
      dispatch({
        type: 'ADD_PROFILE_DATA',
        payload: {
          contactInformation: contactInformation
        }
      });
      const next = "F";
      const go = await props.updatestep(next);
      dispatch({
        type: 'CURRENT_STEP',
        payload: contactInformation.profileStep + 1
      });

      if (go) {
        return go;
      }
    }
  };

  const handleBack = async e => {
    e.preventDefault();
    const next = "B";
    const go = await props.updatestep(next);
    dispatch({
      type: 'CURRENT_STEP',
      payload: contactInformation.profileStep - 1
    });

    if (go) {
      return go;
    }
  };

  const handleSaveNow = async e => {
    //  console.log("i am here to save first foitiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    e.preventDefault(); //  const data = {...commonData, ...uniqueData};
    // setContactInformation({ ...contactInformation, profileStep: 3 });
    //console.log("the neww contact details J "+JSON.stringify(contactInformation));

    const data = _objectSpread({}, contactInformation, {
      profileStep: contactInformation.profileStep + 1
    }); // console.log("the neww contact details JJ "+JSON.stringify(data));


    if (validation.passes()) {
      const dataToPost = _componentUtility_composeApiData__WEBPACK_IMPORTED_MODULE_10__["default"].composeFullProfileData(data);
      let api = await _utility_axios__WEBPACK_IMPORTED_MODULE_6__["default"].profilePost(dataToPost);

      if (api.data === "error") {
        console.log("the log is error");
      }

      if (api.data === "success") {
        console.log("the log is success" + api.status); // router.push('/account')

        dispatch({
          type: 'CLEAR_CONTEXT'
        });
        Object(_utility_logout__WEBPACK_IMPORTED_MODULE_4__["default"])();
      }
    } else {
      dispatch({
        type: 'CLEAR_CONTEXT'
      });
      Object(_utility_logout__WEBPACK_IMPORTED_MODULE_4__["default"])();
    } //logout();

  }; // const persistToLocalStorage = () => {
  //   const getLocalItem = localStorageFuncs.getItemFromStorage("profile");
  //   if(getLocalItem !== undefined){
  //   }else{
  //    // console.log("i=the local storage is empty make i put something insidehinixdopd")
  //   //  const newData = {...getLocalItem, personalDetails };
  //     const setLocalItem = localStorageFuncs.setItemInStorage("profile", contactInformation);
  //     return setLocalItem;
  //   }
  // }
  // useEffect(() => {
  //   // set local storage
  //   //console.log("this is the use effect running up and downnnnnnn   nooooooooooooowwwwwwwwwwww")
  //  // dispatch({type: 'CLEAR_DATA'});
  //   persistToLocalStorage();
  //   // persistToState();
  //   // checkLocalStorage("firstName");
  // })


  return __jsx("div", {
    className: "pagegrid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 6
    }
  }, __jsx(_layouts_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "innergrid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "profile-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 13
    }
  }, "Contact Information"), __jsx("div", {
    className: "two-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "stateOfOrigin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 27
    }
  }, "State Of Origin  ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 75
    }
  }, validation.errors.get("stateOfOrigin"))), __jsx("select", {
    id: "stateOfOrigin",
    onChange: handleChange,
    value: contactInformation.stateOfOrigin,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 27
    }
  }, __jsx("option", {
    value: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 31
    }
  }), __jsx("option", {
    value: "NIGER",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 31
    }
  }, "NIGER"))), __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "lga",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 27
    }
  }, "LGA   ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 54
    }
  }, validation.errors.get("lga"))), __jsx("select", {
    id: "lga",
    onChange: handleChange,
    value: contactInformation.lga,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 27
    }
  }, __jsx("option", {
    value: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 31
    }
  }), __jsx("option", {
    value: "DELTA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 31
    }
  }, "DELTA"), __jsx("option", {
    value: "KANO",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 31
    }
  }, "KANO"), __jsx("option", {
    value: "RIVERS",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 31
    }
  }, "RIVERS")))), __jsx("div", {
    className: "one-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "mobileNumber",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 21
    }
  }, "Mobile Number   ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 67
    }
  }, validation.errors.get("mobileNumber"))), __jsx("input", {
    id: "mobileNumber",
    onChange: handleChange,
    value: contactInformation.mobileNumber,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "one-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "address",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 21
    }
  }, "Address   ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 56
    }
  }, validation.errors.get("address"))), __jsx("textarea", {
    id: "address",
    onChange: handleChange,
    value: contactInformation.address,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "two-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 23
    }
  }, __jsx("button", {
    variant: "outlined",
    size: "small",
    color: "primary",
    disabled: buttonStateB,
    onClick: handleBack,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 26
    }
  }, " Back ")), __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 23
    }
  }, __jsx("button", {
    size: "small",
    color: "primary",
    disabled: buttonStateF,
    onClick: handleForward,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 26
    }
  }, "Next"))), __jsx("div", {
    className: "one-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "column componentFooter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 23
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 26
    }
  }, "2/6"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactInformation);

/***/ }),

/***/ "./components/profile/employmentInformation.js":
/*!*****************************************************!*\
  !*** ./components/profile/employmentInformation.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/contexts/profileContext */ "./store/contexts/profileContext.js");
/* harmony import */ var _layouts_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/navbar */ "./components/layouts/navbar.js");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/style.scss */ "./public/assets/style.scss");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utility_logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility/logout */ "./utility/logout.js");
/* harmony import */ var _componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentUtility/persistLocalToState */ "./components/componentUtility/persistLocalToState.js");
/* harmony import */ var _utility_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility/axios */ "./utility/axios.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! validatorjs */ "validatorjs");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(validatorjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utility_jwt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utility/jwt */ "./utility/jwt.js");
/* harmony import */ var _componentUtility_composeApiData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../componentUtility/composeApiData */ "./components/componentUtility/composeApiData.js");
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/profile/employmentInformation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












 //import localStorageFuncs from '../../../utility/localStorage'
//   const cropper = React.createRef(null);

const EmploymentInformation = props => {
  //console.log("this is the passed in props +"+JSON.stringify(props));
  // console.log("this is the passed in props -"+props.stepremove);
  // const coVal = Cookie.get("auth");
  // const profileStep = (cookie) => {
  //     return cookie ? jwtFuncs.jwtProfileStep(cookie) : 1 
  //  }
  // const sessionProStep = profileStep(coVal);
  //console.log("the pro step "+sessionProStep);
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_1__["ProfileContext"]); //  const checkInLocalStorage = (val) => {
  //   const getLocalItem = localStorageFuncs.getItemFromStorage("profile");
  //   const localStorageValue = getLocalItem["employmentInformation"][val]
  //   console.log(" i have to trouble shoot from here "+localStorageValue);
  //   if(localStorageValue !== undefined){
  //   //  console.log("there is a value   -->>"+localValue);
  //     return localStorageValue
  //   }else{
  //     return ''
  //   }
  // }

  const {
    0: employmentInformation,
    1: setEmploymentInformation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    // prevProfileStep:1,
    // nextProfileStep:3,
    profileStep: 4,
    controlNumber: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("employmentInformation", "controlNumber"),
    highestQualification: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("employmentInformation", "highestQualification"),
    lgea: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("employmentInformation", "lgea"),
    station: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("employmentInformation", "station"),
    staffCategory: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("employmentInformation", "staffCategory"),
    dateOfFirstAppointment: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("employmentInformation", "dateOfFirstAppointment"),
    dateOfConfirmation: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("employmentInformation", "dateOfConfirmation"),
    dateOfLastPromotion: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("employmentInformation", "dateOfLastPromotion")
  });
  const {
    0: buttonStateF,
    1: setButtonStateF
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: buttonStateB,
    1: setButtonStateB
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let rules = {
    controlNumber: 'required|alpha_num',
    highestQualification: 'required',
    lgea: 'required',
    station: 'required',
    dateOfFirstAppointment: 'required',
    dateOfConfirmation: 'required',
    dateOfLastPromotion: 'required' //  email: 'required|email',
    //  age: 'min:18'

  };
  let validation = new validatorjs__WEBPACK_IMPORTED_MODULE_8___default.a(employmentInformation, rules, {
    required: 'required*'
  });
  validation.fails(); // true

  validation.passes(); // false

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (validation.passes()) {
      console.log("the validation has assed ");
      setButtonStateF(false);
    } else {
      setButtonStateF(true);
    }
  }, [employmentInformation]); // useEffect(() => {
  //       if (employmentInformation.profileStep === sessionProStep ) {
  //               setButtonStateB(true);
  //             //  console.log("the   buttonStete "+employmentInformation.profileStep);  
  //          }else{
  //               setButtonStateB(false);
  //      }
  // });
  // const updateState = () =>{
  //   console.log("i have reached this place for the user effct")
  // }
  //   useEffect(updateState, []);

  const handleChange = e => {
    e.preventDefault();
    setEmploymentInformation(_objectSpread({}, employmentInformation, {
      [e.target.id]: e.target.value
    }));
  };

  const handleDateChange = (e, date) => {
    //setSelectedDate(date);
    setEmploymentInformation(_objectSpread({}, employmentInformation, {
      [e.target.id]: moment__WEBPACK_IMPORTED_MODULE_7___default()(date).format('YYYY-MM-DD')
    }));
  };

  const handleForward = async e => {
    e.preventDefault(); //   dispatch({type: 'ADD_PROFILE_DATA', payload: employmentInformation});

    if (validation.passes()) {
      dispatch({
        type: 'ADD_PROFILE_DATA',
        payload: {
          employmentInformation: employmentInformation
        }
      });
      const next = "F";
      const go = await props.updatestep(next);
      dispatch({
        type: 'CURRENT_STEP',
        payload: employmentInformation.profileStep + 1
      });

      if (go) {
        return go;
      }
    }
  };

  const handleBack = async e => {
    e.preventDefault();
    const next = "B";
    const go = await props.updatestep(next);
    dispatch({
      type: 'CURRENT_STEP',
      payload: employmentInformation.profileStep - 1
    });

    if (go) {
      return go;
    }
  }; // const handleSaveNow = async e => {
  //     e.preventDefault();
  //   //  const data = {...commonData, ...uniqueData};
  //     const data = {...employmentInformation,  profileStep: employmentInformation.profileStep+1};
  //    // console.log("the neww contact details JJ "+JSON.stringify(data));
  //    if (validation.passes()) {  
  //      const dataToPost = composeApiData.composeFullProfileData(data);
  //     let api = await axiosFuncs.profilePost(dataToPost);
  //     if(api.data === "error" ){
  //       console.log("the log is error");
  //     }
  //     if (api.data === "success") {
  //       console.log("the log is success"+api.status);
  //       // router.push('/account')
  //       dispatch({type: 'CLEAR_CONTEXT'});
  //       Logout();
  //     }
  //   }else{
  //     dispatch({type: 'CLEAR_CONTEXT'});
  //     Logout();
  //   }
  //     //logout();
  //   }
  // const persistToLocalStorage = () => {
  //   const getLocalItem = localStorageFuncs.getItemFromStorage("profile");
  //   if(getLocalItem !== undefined){
  //   }else{
  //    // console.log("i=the local storage is empty make i put something insidehinixdopd")
  //   //  const newData = {...getLocalItem, personalDetails };
  //     const setLocalItem = localStorageFuncs.setItemInStorage("profile", employmentInformation);
  //     return setLocalItem;
  //   }
  // }
  // useEffect(() => {
  //   // set local storage
  //   //console.log("this is the use effect running up and downnnnnnn   nooooooooooooowwwwwwwwwwww")
  //  // dispatch({type: 'CLEAR_DATA'});
  //   persistToLocalStorage();
  //   // persistToState();
  //   // checkLocalStorage("firstName");
  // })


  return __jsx("div", {
    className: "pagegrid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 6
    }
  }, __jsx(_layouts_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "innergrid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "profile-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }
  }, " Employment Information "), __jsx("div", {
    className: "two-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "controlNumber",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 21
    }
  }, "Address   ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 62
    }
  }, validation.errors.get("controlNumber"))), __jsx("input", {
    id: "controlNumber",
    onChange: handleChange,
    value: employmentInformation.controlNumber,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "highestQualification",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 27
    }
  }, "Highest Qualification ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 87
    }
  }, validation.errors.get("highestQualification"))), __jsx("input", {
    id: "highestQualification",
    onChange: handleChange,
    value: employmentInformation.highestQualification,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 27
    }
  }))), __jsx("div", {
    className: "three-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "lgea",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 27
    }
  }, "LGEA   ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 56
    }
  }, validation.errors.get("lgea"))), __jsx("select", {
    id: "lgea",
    onChange: handleChange,
    value: employmentInformation.lgea,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 27
    }
  }, __jsx("option", {
    value: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 31
    }
  }), __jsx("option", {
    value: "DELTA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 31
    }
  }, "DELTA"), __jsx("option", {
    value: "KANO",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 31
    }
  }, "KANO"), __jsx("option", {
    value: "RIVERS",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 31
    }
  }, "RIVERS"))), __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "station",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 27
    }
  }, "Station/School Name  ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 73
    }
  }, validation.errors.get("station"))), __jsx("select", {
    id: "station",
    onChange: handleChange,
    value: employmentInformation.station,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 27
    }
  }, __jsx("option", {
    value: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 31
    }
  }), __jsx("option", {
    value: "DELTA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 31
    }
  }, "DELTA"), __jsx("option", {
    value: "KANO",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 31
    }
  }, "KANO"), __jsx("option", {
    value: "RIVERS",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 31
    }
  }, "RIVERS"))), __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "staffCategory",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 27
    }
  }, "Staff Category ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 73
    }
  }, validation.errors.get("staffCategory"))), __jsx("select", {
    id: "staffCategory",
    onChange: handleChange,
    value: employmentInformation.staffCategory,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 27
    }
  }, __jsx("option", {
    value: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 31
    }
  }), __jsx("option", {
    value: "Teaching",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 31
    }
  }, "Teaching"), __jsx("option", {
    value: "Non-Teaching",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 31
    }
  }, "No Teaching")))), __jsx("div", {
    className: "three-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 22
    }
  }, __jsx("label", {
    htmlFor: "dateOfFirstAppointment",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 27
    }
  }, "Date of First Appointment  ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 94
    }
  }, validation.errors.get("dateOfFirstAppointment"))), __jsx("input", {
    id: "dateOfFirstAppointment",
    type: "date",
    onChange: handleDateChange,
    value: employmentInformation.dateOfFirstAppointment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "dateOfConfirmation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 27
    }
  }, "Date of Confirmation ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 84
    }
  }, validation.errors.get("dateOfConfirmation"))), __jsx("input", {
    id: "dateOfConfirmation",
    type: "date",
    onChange: handleDateChange,
    value: employmentInformation.dateOfConfirmation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "dateOfLastPromotion",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 27
    }
  }, "Date Of Last Promotion  ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 88
    }
  }, validation.errors.get("dateOfLastPromotion"))), __jsx("input", {
    id: "dateOfLastPromotion",
    type: "date",
    onChange: handleDateChange,
    value: employmentInformation.dateOfLastPromotion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 27
    }
  }))), __jsx("div", {
    className: "two-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 18
    }
  }, __jsx("button", {
    variant: "outlined",
    size: "small",
    color: "primary",
    disabled: buttonStateB,
    onClick: handleBack,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 26
    }
  }, " Back ")), __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 23
    }
  }, __jsx("button", {
    size: "small",
    color: "primary",
    disabled: buttonStateF,
    onClick: handleForward,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 26
    }
  }, "Next"))), __jsx("div", {
    className: "one-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "column componentFooter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 23
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 26
    }
  }, "4/6"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (EmploymentInformation);

/***/ }),

/***/ "./components/profile/fileUtility.js":
/*!*******************************************!*\
  !*** ./components/profile/fileUtility.js ***!
  \*******************************************/
/*! exports provided: downloadBase64File, base64StringtoFile, extractImageFileExtensionFromBase64, image64toCanvasRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadBase64File", function() { return downloadBase64File; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64StringtoFile", function() { return base64StringtoFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractImageFileExtensionFromBase64", function() { return extractImageFileExtensionFromBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "image64toCanvasRef", function() { return image64toCanvasRef; });
// Download a Base64-encoded file
function downloadBase64File(base64Data, filename) {
  var element = document.createElement('a');
  element.setAttribute('href', base64Data);
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
} // Convert a Base64-encoded string to a File object

function base64StringtoFile(base64String, filename) {
  var arr = base64String.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, {
    type: mime
  });
} //Extract an Base64 Image's File Extension

function extractImageFileExtensionFromBase64(base64Data) {
  return base64Data.substring("data:image/".length, base64Data.indexOf(";base64"));
} //Base64 Image to Canvas with a Crop
//This will crop your passed Base64 image to fit on to a canvas of the same exact crop.

function image64toCanvasRef(canvasRef, image64, pixelCrop) {
  const canvas = canvasRef; // document.createElement('canvas');

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  const ctx = canvas.getContext('2d');
  const image = new Image();
  image.src = image64;

  image.onload = function () {
    ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
  };
}

/***/ }),

/***/ "./components/profile/nextOfKinInformation.js":
/*!****************************************************!*\
  !*** ./components/profile/nextOfKinInformation.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/contexts/profileContext */ "./store/contexts/profileContext.js");
/* harmony import */ var _layouts_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/navbar */ "./components/layouts/navbar.js");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/style.scss */ "./public/assets/style.scss");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utility_logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility/logout */ "./utility/logout.js");
/* harmony import */ var _componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentUtility/persistLocalToState */ "./components/componentUtility/persistLocalToState.js");
/* harmony import */ var _utility_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility/axios */ "./utility/axios.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! validatorjs */ "validatorjs");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(validatorjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utility_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility/jwt */ "./utility/jwt.js");
/* harmony import */ var _componentUtility_composeApiData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componentUtility/composeApiData */ "./components/componentUtility/composeApiData.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/profile/nextOfKinInformation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












 //import localStorageFuncs from '../../../utility/localStorage'
//   const cropper = React.createRef(null);

const NextOfKinInformation = props => {
  //console.log("this is the passed in props +"+JSON.stringify(props));
  // console.log("this is the passed in props -"+props.stepremove);
  // const coVal = Cookie.get("auth");
  // const profileStep = (cookie) => {
  //     return cookie ? jwtFuncs.jwtProfileStep(cookie) : 1 
  //  }
  // const sessionProStep = profileStep(coVal);
  //console.log("the pro step "+sessionProStep);
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_1__["ProfileContext"]); //  const checkInLocalStorage = (val) => {
  //   const getLocalItem = localStorageFuncs.getItemFromStorage("profile");
  //   const localStorageValue = getLocalItem["nextOfKinInformation"][val]
  //   console.log(" i have to trouble shoot from here "+localStorageValue);
  //   if(localStorageValue !== undefined){
  //   //  console.log("there is a value   -->>"+localValue);
  //     return localStorageValue
  //   }else{
  //     return ''
  //   }
  // }

  const {
    0: nextOfKinInformation,
    1: setContectInformation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    // prevProfileStep:1,
    // nextProfileStep:3,
    profileStep: 3,
    fullName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("nextOfKinInformation", "fullName"),
    relationship: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("nextOfKinInformation", "relationship"),
    address: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("nextOfKinInformation", "address"),
    emailAddress: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("nextOfKinInformation", "emailAddress"),
    mobileNumber: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("nextOfKinInformation", "mobileNumber")
  });
  const {
    0: buttonStateF,
    1: setButtonStateF
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: buttonStateB,
    1: setButtonStateB
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let rules = {
    fullName: 'required',
    relationship: 'required',
    address: 'required',
    emailAddress: 'email',
    mobileNumber: 'required|numeric|mobileNumberCount' //  email: 'required|email',
    //  age: 'min:18'

  };

  const checkMobileNumberSize = (mobileNumber, requirement, attribute) => {
    const requ = lodash__WEBPACK_IMPORTED_MODULE_11___default.a.size(mobileNumber); //console.log("the requ from the size of the acc number ============ "+requ);


    if (requ === 11) {
      return true;
    }

    if (requ !== 11) {
      return false;
    }
  };

  validatorjs__WEBPACK_IMPORTED_MODULE_7___default.a.register('mobileNumberCount', checkMobileNumberSize, 'Mobile Numbers Must Be 11 Digits.');
  let validation = new validatorjs__WEBPACK_IMPORTED_MODULE_7___default.a(nextOfKinInformation, rules, {
    required: 'required*'
  });
  validation.fails(); // true

  validation.passes(); // false

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (validation.passes()) {
      setButtonStateF(false); // console.log("the   buttonStete "+buttonState);  
    } else {
      setButtonStateF(true);
    }
  }, [nextOfKinInformation]); // useEffect(() => {
  //       if (nextOfKinInformation.profileStep === sessionProStep ) {
  //               setButtonStateB(true);
  //             //  console.log("the   buttonStete "+nextOfKinInformation.profileStep);  
  //          }else{
  //               setButtonStateB(false);
  //      }
  // });
  // const updateState = () =>{
  //   console.log("i have reached this place for the user effct")
  // }
  //   useEffect(updateState, []);

  const handleChange = e => {
    e.preventDefault();
    setContectInformation(_objectSpread({}, nextOfKinInformation, {
      [e.target.id]: e.target.value
    }));
  };

  const handleForward = async e => {
    e.preventDefault(); //   dispatch({type: 'ADD_PROFILE_DATA', payload: nextOfKinInformation});

    if (validation.passes()) {
      dispatch({
        type: 'ADD_PROFILE_DATA',
        payload: {
          nextOfKinInformation: nextOfKinInformation
        }
      });
      const next = "F";
      const go = await props.updatestep(next);
      dispatch({
        type: 'CURRENT_STEP',
        payload: nextOfKinInformation.profileStep + 1
      });

      if (go) {
        return go;
      }
    }
  };

  const handleBack = async e => {
    e.preventDefault();
    const next = "B";
    const go = await props.updatestep(next);
    dispatch({
      type: 'CURRENT_STEP',
      payload: nextOfKinInformation.profileStep - 1
    });

    if (go) {
      return go;
    }
  }; // const handleSaveNow = async e => {
  //     e.preventDefault();
  //   //  const data = {...commonData, ...uniqueData};
  //     const data = {...nextOfKinInformation,  profileStep: nextOfKinInformation.profileStep+1};
  //    // console.log("the neww contact details JJ "+JSON.stringify(data));
  //    if (validation.passes()) {  
  //      const dataToPost = composeApiData.composeFullProfileData(data);
  //     let api = await axiosFuncs.profilePost(dataToPost);
  //     if(api.data === "error" ){
  //       console.log("the log is error");
  //     }
  //     if (api.data === "success") {
  //       console.log("the log is success"+api.status);
  //       // router.push('/account')
  //       dispatch({type: 'CLEAR_CONTEXT'});
  //       Logout();
  //     }
  //   }else{
  //     dispatch({type: 'CLEAR_CONTEXT'});
  //     Logout();
  //   }
  //     //logout();
  //   }
  // const persistToLocalStorage = () => {
  //   const getLocalItem = localStorageFuncs.getItemFromStorage("profile");
  //   if(getLocalItem !== undefined){
  //   }else{
  //    // console.log("i=the local storage is empty make i put something insidehinixdopd")
  //   //  const newData = {...getLocalItem, personalDetails };
  //     const setLocalItem = localStorageFuncs.setItemInStorage("profile", nextOfKinInformation);
  //     return setLocalItem;
  //   }
  // }
  // useEffect(() => {
  //   // set local storage
  //   //console.log("this is the use effect running up and downnnnnnn   nooooooooooooowwwwwwwwwwww")
  //  // dispatch({type: 'CLEAR_DATA'});
  //   persistToLocalStorage();
  //   // persistToState();
  //   // checkLocalStorage("firstName");
  // })


  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 1
    }
  }, __jsx("div", {
    className: "pagegrid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 6
    }
  }, __jsx(_layouts_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "innergrid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "profile-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 13
    }
  }, "Next Of Kin Information "), __jsx("div", {
    className: "two-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "fullName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 27
    }
  }, "Full Name  ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 64
    }
  }, validation.errors.get("fullName"))), __jsx("input", {
    id: "fullName",
    onChange: handleChange,
    value: nextOfKinInformation.fullName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "relationship",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 27
    }
  }, "Relationship ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 70
    }
  }, validation.errors.get("relationship"))), __jsx("input", {
    id: "relationship",
    onChange: handleChange,
    value: nextOfKinInformation.relationship,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 27
    }
  }))), __jsx("div", {
    className: "two-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "emailAddress",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 21
    }
  }, "Email Address   ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 67
    }
  }, validation.errors.get("emailAddress"))), __jsx("input", {
    id: "emailAddress",
    onChange: handleChange,
    value: nextOfKinInformation.emailAddress,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "mobileNumber",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 21
    }
  }, "Mobile Number   ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 67
    }
  }, validation.errors.get("mobileNumber"))), __jsx("input", {
    id: "mobileNumber",
    onChange: handleChange,
    value: nextOfKinInformation.mobileNumber,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "one-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "address",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 21
    }
  }, "Address   ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 56
    }
  }, validation.errors.get("address"))), __jsx("textarea", {
    id: "address",
    onChange: handleChange,
    value: nextOfKinInformation.address,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "two-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 23
    }
  }, __jsx("button", {
    variant: "outlined",
    size: "small",
    color: "primary",
    disabled: buttonStateB,
    onClick: handleBack,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 26
    }
  }, " Back ")), __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 23
    }
  }, __jsx("button", {
    size: "small",
    color: "primary",
    disabled: buttonStateF,
    onClick: handleForward,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 26
    }
  }, "Next"))), __jsx("div", {
    className: "one-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "column componentFooter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 23
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 26
    }
  }, "3/6")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NextOfKinInformation);

/***/ }),

/***/ "./components/profile/paymentInformation.js":
/*!**************************************************!*\
  !*** ./components/profile/paymentInformation.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/contexts/profileContext */ "./store/contexts/profileContext.js");
/* harmony import */ var _layouts_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/navbar */ "./components/layouts/navbar.js");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/style.scss */ "./public/assets/style.scss");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utility_logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility/logout */ "./utility/logout.js");
/* harmony import */ var _componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentUtility/persistLocalToState */ "./components/componentUtility/persistLocalToState.js");
/* harmony import */ var _utility_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility/axios */ "./utility/axios.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! validatorjs */ "validatorjs");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(validatorjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utility_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility/jwt */ "./utility/jwt.js");
/* harmony import */ var _componentUtility_composeApiData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componentUtility/composeApiData */ "./components/componentUtility/composeApiData.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/profile/paymentInformation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












 //   const cropper = React.createRef(null);

const PaymentInformation = props => {
  //   const coVal = Cookie.get("auth");
  //   const profileStep = (cookie) => {
  //       return cookie ? jwtFuncs.jwtProfileStep(cookie) : 1 
  //   }
  //   const sessionProStep = profileStep(coVal);
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_1__["ProfileContext"]);
  const {
    0: paymentInformation,
    1: setPaymentInformation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    // prevProfileStep:3,
    // nextProfileStep:5,
    profileStep: 5,
    bankName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("paymentInformation", "bankName"),
    accountName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("paymentInformation", "accountName"),
    accountNumber: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("paymentInformation", "accountNumber"),
    bvn: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_5__["default"])("paymentInformation", "bvn") //   isBvnUnique: checkInLocalStorage("paymentInformation", "isBvnUnique")

  });
  const {
    0: buttonStateF,
    1: setButtonStateF
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: buttonStateB,
    1: setButtonStateB
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isUnique,
    1: setIsUnique
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  let rules = {
    bankName: 'required',
    accountName: 'required',
    accountNumber: 'required|numeric|accNumberCount',
    bvn: 'required|numeric|bvnCount' // isBvnUnique:'bvnC'
    //  email: 'required|email',
    //  age: 'min:18'

  }; //   const checkBVN = (bvn, requirement, attribute)=>{
  //     console.log("i am checking the bvn  for validation "+bvn);
  //     console.log("i am checking the bvn  for requirement "+requirement);
  //     console.log("i am checking the bvn  for attribute "+attribute);
  //     //return value.match(/^\d{3}-\d{3}-\d{4}$/);
  //     //const requ = _.isEmpty({name:12});
  //     const requ =  isUnique;
  //     console.log("the requ "+requ);
  //     return requ;
  //   //  return false
  // }

  const checkBVNSize = (bvn, requirement, attribute) => {
    // console.log("i am checking the bvn  for validation "+bvn);
    // console.log("i am checking the bvn  for requirement "+requirement);
    // console.log("i am checking the bvn  for attribute "+attribute);
    const requ = lodash__WEBPACK_IMPORTED_MODULE_11___default.a.size(bvn);

    console.log("the requ from the size of the bvn ============ " + requ);

    if (requ === 11) {
      return true;
    }

    if (requ !== 11) {
      return false;
    }
  };

  const checkAccNumberSize = (accNumber, requirement, attribute) => {
    const requ = lodash__WEBPACK_IMPORTED_MODULE_11___default.a.size(accNumber); //console.log("the requ from the size of the acc number ============ "+requ);


    if (requ === 10) {
      return true;
    }

    if (requ !== 10) {
      return false;
    }
  }; //Validator.register('bvnC',checkBVN , 'Your :attribute is not unique.');


  validatorjs__WEBPACK_IMPORTED_MODULE_7___default.a.register('bvnCount', checkBVNSize, 'Your BVN must be 11 digits.');
  validatorjs__WEBPACK_IMPORTED_MODULE_7___default.a.register('accNumberCount', checkAccNumberSize, 'Your Account Number must be 10 digits.');
  let validation = new validatorjs__WEBPACK_IMPORTED_MODULE_7___default.a(paymentInformation, rules, {
    required: 'required*'
  });
  validation.fails(); // true

  validation.passes(); // false

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (validation.passes()) {
      setButtonStateF(false); // console.log("the   buttonStete "+buttonState);  
    } else {
      setButtonStateF(true);
    }
  }, [paymentInformation]);

  const handleChange = e => {
    e.preventDefault();
    setPaymentInformation(_objectSpread({}, paymentInformation, {
      [e.target.id]: e.target.value
    }));
  };

  const handleForward = async e => {
    e.preventDefault(); //   dispatch({type: 'ADD_PROFILE_DATA', payload: paymentInformation});

    if (validation.passes()) {
      dispatch({
        type: 'ADD_PROFILE_DATA',
        payload: {
          paymentInformation: paymentInformation
        }
      });
      const next = "F";
      const go = await props.updatestep(next);
      dispatch({
        type: 'CURRENT_STEP',
        payload: paymentInformation.profileStep + 1
      });

      if (go) {
        return go;
      }
    }
  };

  const handleBack = e => {
    e.preventDefault();
    const next = "B";
    const go = props.updatestep(next);
    dispatch({
      type: 'CURRENT_STEP',
      payload: paymentInformation.profileStep - 1
    });

    if (go) {
      return go;
    }
  };

  const handleBVNValidation = async () => {
    const currentBVN = paymentInformation.bvn;
    const confirm = checkBVNSize(currentBVN);
    console.log(" thi confirmation if it is reall on " + confirm);

    if (confirm === true) {
      const output = await _utility_axios__WEBPACK_IMPORTED_MODULE_6__["default"].checkBVN(currentBVN);
      const status = output.status;

      if (status === 200) {
        setIsUnique(false);
        setIsUnique(false);
      }

      if (status === 201) {
        setButtonStateF(false);
        setIsUnique(true);
      }
    } // console.log(" the out put of the externaal check "+JSON.stringify(output));
    // return output

  };

  const validationCheck = () => {
    if (isUnique === true) {
      return __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "fieldSuccess",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 9
        }
      }, "Validation Passed"));
    }

    if (isUnique === false) {
      return __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "fieldError",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 9
        }
      }, "Validation Failed"));
    }
  };

  const handleSaveNow = async e => {
    //  console.log("i am here to save first foitiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    e.preventDefault();

    const data = _objectSpread({}, paymentInformation, {
      profileStep: paymentInformation.profileStep + 1
    });

    if (validation.passes()) {
      const dataToPost = _componentUtility_composeApiData__WEBPACK_IMPORTED_MODULE_10__["default"].composeFullProfileData(data);
      let api = await _utility_axios__WEBPACK_IMPORTED_MODULE_6__["default"].profilePost(dataToPost);

      if (api.data === "error") {
        console.log("the log is error");
      }

      if (api.data === "success") {
        console.log("the log is success" + api.status); // router.push('/account')

        dispatch({
          type: 'CLEAR_CONTEXT'
        });
        Object(_utility_logout__WEBPACK_IMPORTED_MODULE_4__["default"])();
      }
    } else {
      dispatch({
        type: 'CLEAR_CONTEXT'
      });
      Object(_utility_logout__WEBPACK_IMPORTED_MODULE_4__["default"])();
    } //logout();

  };

  return __jsx("div", {
    className: "pagegrid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 5
    }
  }, __jsx(_layouts_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "innergrid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "profile-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }
  }, "Payment Information"), __jsx("div", {
    className: "one-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "bankName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 21
    }
  }, "Bank Name ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 57
    }
  }, validation.errors.get("bankName"))), __jsx("select", {
    id: "bankName",
    onChange: handleChange,
    value: paymentInformation.bankName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 25
    }
  }), __jsx("option", {
    value: "UBA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 25
    }
  }, "UBA"), __jsx("option", {
    value: "GTB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 25
    }
  }, "GTB"), __jsx("option", {
    value: "FCMB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 25
    }
  }, "FCMB")))), __jsx("div", {
    className: "one-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "accountName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 21
    }
  }, "Account Name   ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 65
    }
  }, validation.errors.get("accountName"))), __jsx("input", {
    id: "accountName",
    onChange: handleChange,
    value: paymentInformation.accountName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "one-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "accountNumber",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 21
    }
  }, "Account Number   ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 69
    }
  }, validation.errors.get("accountNumber"))), __jsx("input", {
    id: "accountNumber",
    onChange: handleChange,
    value: paymentInformation.accountNumber,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "one-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "bvn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 21
    }
  }, "Bank Verification Number(bvn)  ", validationCheck(), "  ", __jsx("span", {
    className: "fieldError",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 94
    }
  }, validation.errors.get("bvn"))), __jsx("input", {
    id: "bvn",
    onChange: handleChange,
    value: paymentInformation.bvn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 21
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: handleBVNValidation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 28
    }
  }, "Verify BVN")))), __jsx("div", {
    className: "two-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 23
    }
  }, __jsx("button", {
    disabled: buttonStateB,
    size: "small",
    color: "primary",
    onClick: handleBack,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 26
    }
  }, "Back")), __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 23
    }
  }, __jsx("button", {
    disabled: buttonStateF,
    size: "small",
    color: "primary",
    onClick: handleForward,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 26
    }
  }, "Next"))), __jsx("div", {
    className: "one-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "column componentFooter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 23
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 26
    }
  }, "5/6"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PaymentInformation);

/***/ }),

/***/ "./components/profile/profilePic.js":
/*!******************************************!*\
  !*** ./components/profile/profilePic.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/contexts/profileContext */ "./store/contexts/profileContext.js");
/* harmony import */ var _layouts_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/navbar */ "./components/layouts/navbar.js");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/style.scss */ "./public/assets/style.scss");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utility_logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility/logout */ "./utility/logout.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-image-crop */ "react-image-crop");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-image-crop/dist/ReactCrop.css */ "./node_modules/react-image-crop/dist/ReactCrop.css");
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fileUtility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fileUtility */ "./components/profile/fileUtility.js");
/* harmony import */ var _utility_axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utility/axios */ "./utility/axios.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! validatorjs */ "validatorjs");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(validatorjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/profile/profilePic.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 //   const cropper = React.createRef(null);

const ProfilePic = props => {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_1__["ProfileContext"]);
  const imagePreviewCanvasRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  const {
    0: profilePic,
    1: setProfilePic
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    profileStep: 7,
    profilePicUrl: '',
    profilePicFile: '',
    crop: {
      // unit: 'px',
      aspect: 1 / 1 //    width: 50,

    }
  });
  const {
    0: buttonStateF,
    1: setButtonStateF
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: buttonStateB,
    1: setButtonStateB
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let rules = {
    profilePicUrl: 'required',
    profilePicFile: 'required' //  email: 'required|email',
    //  age: 'min:18'

  };
  let validation = new validatorjs__WEBPACK_IMPORTED_MODULE_9___default.a(profilePic, rules, {
    required: 'required*'
  });
  validation.fails(); // true

  validation.passes(); // false

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (validation.passes()) {
      setButtonStateF(false); // console.log("the   buttonStete "+buttonState);  
    } else {
      setButtonStateF(true);
    }
  }, [profilePic]);

  const handleImageChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let profilePicFile = e.target.files[0]; //   console.log("this is the imagfe check view ===================>>>>>>>>>>>>>" +profilePicFile);

    reader.onloadend = () => {
      setProfilePic(_objectSpread({}, profilePic, {
        profilePicFile: profilePicFile,
        profilePicUrl: reader.result
      }));
    };

    reader.readAsDataURL(profilePicFile);
  }; // from here


  const handleCrop = (crop, percentCrop) => {
    console.log("this is the crop " + JSON.stringify(crop));
    console.log("this is the percent crop " + JSON.stringify(percentCrop)); //onComplete(crop, percentCrop)

    setProfilePic(_objectSpread({}, profilePic, {
      crop: percentCrop
    }));
  };

  const handleImageLoaded = image => {
    console.log("the image that is loaded" + image);
  };

  const handleCompleteCrop = (crop, pixelCrop) => {
    console.log("the crop and the pixel " + JSON.stringify(crop) + JSON.stringify(pixelCrop));
    const canvasRef = imagePreviewCanvasRef.current;
    const imgSrc = profilePic.profilePicUrl; // image64toCanvasRef(canvasRef, imgSrc, crop)
  }; // save the successfully cropped image to state 


  const handleImageSaveWithCrop = e => {
    e.preventDefault();
    const canvasRef = imagePreviewCanvasRef.current;
    const imgSrc = profilePic.profilePicUrl;
    const fileExtension = Object(_fileUtility__WEBPACK_IMPORTED_MODULE_7__["extractImageFileExtensionFromBase64"])(imgSrc);
    const imageDate64 = canvasRef.toDataURL('image/' + fileExtension);
    console.log("the profilePicFile extension is this ===>> " + fileExtension);
    const newFileName = "nomalevo." + fileExtension;
    console.log("the new profilePicFile name " + newFileName); // profilePicFile to be uploaded

    const newCroppedFile = Object(_fileUtility__WEBPACK_IMPORTED_MODULE_7__["base64StringtoFile"])(imageDate64, newFileName); //   console.log("this si the final cropped "+JSON.stringify(newCroppedFile));
    //  console.log("this is the imagfe check view cropped profilePicFile ===================>>>>>>>>>>>>>" +newCroppedFile);

    setProfilePic(_objectSpread({}, profilePic, {
      profilePicFile: newCroppedFile
    }));
    const stateObj = {
      profileStep: 8,
      profilePicUrl: profilePic.profilePicUrl,
      profilePicFile: newCroppedFile
    }; //     this.props.fileStateUpdate(profilePic);
    //props.fileStateUpdate(stateObj);
    //download the profilePicFile
    // downloadBase64File(imageDate64, newFileName)
  }; // save the image  to state without cropping it


  const handleImageSaveWithoutCrop = e => {
    e.preventDefault(); // setProfilePic({ ...profilePic, profilePicFile: newCroppedFile })  
    // this.setState({
    //   profileStep: 8
    //  // profilePicFile: newCroppedFile   
    //   })
    //   const stateObj = {
    //     profileStep:8,
    //     profilePicUrl: profilePic.profilePicUrl,
    //     profilePicFile: profilePic.profilePicFile,
    //   }
    //   //   this.props.fileStateUpdate(profilePicj);
    // this.props.fileStateUpdate(stateObj);
  };

  const checkToSkipCrop = () => {
    if (profilePic.profilePicUrl) {
      return "inline";
    } else {
      return "none";
    }
  };

  const checkToUpladCropped = () => {
    if (profilePic.crop.height) {
      return "inline";
    } else {
      return "none";
    }
  };

  const styles = {
    // height: '50vh',
    //   minHeight: '93vh'
    width: "200",
    height: "500"
  };
  const conStyle = {
    // height: '50vh',
    //   minHeight: '93vh'
    //   display:"inline"
    cropped: {
      display: checkToUpladCropped()
    },
    notCropped: {
      display: checkToSkipCrop()
    }
  }; // to here
  // const  handleChange =(e) => {
  //         e.preventDefault(); 
  //         setProfilePic({ ...profilePic, [e.target.id]: e.target.value })
  //       }

  const handleForward = async e => {
    e.preventDefault(); //   dispatch({type: 'ADD_PROFILE_DATA', payload: profilePic});

    dispatch({
      type: 'ADD_PROFILE_DATA',
      payload: {
        profilePic: profilePic
      }
    });
    const next = "F";
    const go = await props.updatestep(next);
    dispatch({
      type: 'CURRENT_STEP',
      payload: profilePic.profileStep + 1
    });

    if (go) {
      return go;
    }
  };

  const handleBack = async e => {
    e.preventDefault();
    const next = "B";
    const go = await props.updatestep(next);
    dispatch({
      type: 'CURRENT_STEP',
      payload: profilePic.profileStep - 1
    });

    if (go) {
      return go;
    }
  };

  const checkForImage = () => {
    const em = lodash__WEBPACK_IMPORTED_MODULE_10___default.a.isEmpty(profilePic.profilePicUrl);

    if (!em) {
      return __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 7
        }
      }, __jsx("img", {
        src: profilePic.profilePicUrl,
        alt: "logo",
        height: "170px",
        width: "200px",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 10
        }
      }));
    }
  };

  const handleSaveNow = async e => {
    //  console.log("i am here to save first foitiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    e.preventDefault(); // const data =  {...profilePic,  profileStep: profilePic.profileStep+1};

    dispatch({
      type: 'CLEAR_CONTEXT'
    });
    Object(_utility_logout__WEBPACK_IMPORTED_MODULE_4__["default"])(); //logout();
  };

  return __jsx("div", {
    className: "pagegrid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 5
    }
  }, __jsx(_layouts_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "innergrid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "profile-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 13
    }
  }, "Profile Pic"), __jsx("div", {
    className: "one-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 19
    }
  }, __jsx("div", {
    style: conStyle.notCropped,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 21
    }
  }, "Drag you mouse over the image to crop or click the button below to skip"), __jsx("input", {
    type: "file",
    id: "profilePic",
    onChange: e => handleImageChange(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "column profilePicPreview",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 19
    }
  }, checkForImage())), __jsx("div", {
    className: "two-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 23
    }
  }, __jsx("button", {
    disabled: buttonStateB,
    size: "small",
    color: "primary",
    onClick: handleBack,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 26
    }
  }, "Back")), __jsx("div", {
    className: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 23
    }
  }, __jsx("button", {
    disabled: buttonStateF,
    size: "small",
    color: "primary",
    onClick: handleForward,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 26
    }
  }, "Next"))), __jsx("div", {
    className: "one-column-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "column componentFooter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 23
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 26
    }
  }, "6/6"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfilePic);

/***/ }),

/***/ "./components/profile/success.js":
/*!***************************************!*\
  !*** ./components/profile/success.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/contexts/profileContext */ "./store/contexts/profileContext.js");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/assets/style.scss */ "./public/assets/style.scss");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utility_logout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility/logout */ "./utility/logout.js");
/* harmony import */ var _layouts_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/navbar */ "./components/layouts/navbar.js");
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/profile/success.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Success = () => {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_1__["ProfileContext"]);

  const handleClick = () => {
    dispatch({
      type: 'CLEAR_CONTEXT'
    });
    Object(_utility_logout__WEBPACK_IMPORTED_MODULE_3__["default"])();
  };

  return __jsx("div", {
    className: "pagegrid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "innergrid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "successContainer",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 28
    }
  }, "You Have Successfully completed ur profile"), __jsx("button", {
    size: "small",
    color: "primary",
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, "Logout"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Success);

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const config = {
  apiUrl: "http://localhost:5000/" // testEnv : "this is a test string"

};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-image-crop/dist/ReactCrop.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-image-crop/dist/ReactCrop.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_reducers_profileReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/reducers/profileReducer */ "./store/reducers/profileReducer.js");
/* harmony import */ var _components_profile_bioInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/profile/bioInformation */ "./components/profile/bioInformation.js");
/* harmony import */ var _components_profile_contactInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/profile/contactInformation */ "./components/profile/contactInformation.js");
/* harmony import */ var _components_profile_nextOfKinInformation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/profile/nextOfKinInformation */ "./components/profile/nextOfKinInformation.js");
/* harmony import */ var _components_profile_paymentInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/profile/paymentInformation */ "./components/profile/paymentInformation.js");
/* harmony import */ var _components_profile_employmentInformation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/profile/employmentInformation */ "./components/profile/employmentInformation.js");
/* harmony import */ var _components_profile_profilePic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/profile/profilePic */ "./components/profile/profilePic.js");
/* harmony import */ var _components_profile_confirm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/profile/confirm */ "./components/profile/confirm.js");
/* harmony import */ var _utility_localStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utility/localStorage */ "./utility/localStorage.js");
/* harmony import */ var _utility_jwt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utility/jwt */ "./utility/jwt.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/contexts/profileContext */ "./store/contexts/profileContext.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _store_contexts_authContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/contexts/authContext */ "./store/contexts/authContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_auth_login__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/auth/login */ "./components/auth/login.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../public/assets/style.scss */ "./public/assets/style.scss");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_assets_style_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_profile_success__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/profile/success */ "./components/profile/success.js");
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/pages/profile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








 //import Navbar from '../components/layouts/navbar'


 //import { withRouter } from 'next/router'










 //const token = localStorage.getItem("jwt");

const Profile = props => {
  //   const router = useRouter();
  const lCookie = js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('auth');
  console.log("the l cookie " + lCookie); //   const localStorageAuth = localStorageFuncs.getItemFromStorage("auth");

  if (lCookie == undefined) {
    //   console.log("no cookie founnd ");
    //      const router = useRouter();
    // router.push("/");
    return __jsx(_components_auth_login__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 10
      }
    });
  } // console.log("this is he lCookie "+lCookie);


  const profileStep = token => {
    console.log("the tokne " + token);
    return token ? _utility_jwt__WEBPACK_IMPORTED_MODULE_10__["default"].jwtProfileStep(token) : 1;
  };

  const getinitialState = () => {
    const profileFromStorage = _utility_localStorage__WEBPACK_IMPORTED_MODULE_9__["default"].getItemFromStorage("profile"); //  const authFromStorage = localStorageFuncs.getItemFromStorage("auth");
    //  const profileFromStorageStep = profileFromStorage.currentStep;
    //      console.log("the profile from Storage "+JSON.stringify(profileFromStorage));
    // const stepFromCookie = profileStep(lCookie);

    const stepFromCookie = 1;
    console.log("this i sthe step from cookie " + stepFromCookie); //  const stepFromStorage = profileStep(localStorageAuth);
    //   console.log("the profile from Storage from cookiesss testtststststs "+stepFromCookie);
    //  const stepFromStorage  = profileFromStorage.currentStep;
    //    const stepFromStorage  = {};

    let proCheck = lodash__WEBPACK_IMPORTED_MODULE_17___default.a.isEmpty(profileFromStorage); // true


    if (proCheck) {
      //   console.log("you are seeing this cos of the stepfrom reducer---------")
      return stepFromCookie;
    } else {
      // console.log("you are seeing this cos of the stepfrom cookie")
      const stepFromStorageCurrentStep = profileFromStorage.currentStep;
      return stepFromStorageCurrentStep;
    }
  }; //  const initialState = profileStep(lCookie);


  const initialState = getinitialState(); //  const initialState = 1;

  console.log("the initial state of the matter " + initialState);
  const {
    0: profileStepState,
    1: setProfileStepState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {//  console.log("this is the state of the profile step====> "+profileStepState);
    // currentStep(profileStepState);
  }, [profileStepState]);

  const localJWT = () => {
    const localCookie = js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('auth'); //   console.log("this is the local cookie "+localCookie);

    return localCookie ? localCookie : undefined; //    const localJWT = localStorage.getItem("jwt");
    //   return localJWT ? JSON.parse(localJWT) : '';
  };

  const token = localJWT();

  const proStep = step => {
    //   console.log("this is the proStep functionnnn ========>>>>> "+step);
    return step === "F" ? setProfileStepState(profileStepState + 1) : setProfileStepState(profileStepState - 1);
  };

  const finishStep = step => {
    //   console.log("this is the proStep functionnnn ========>>>>> "+step);
    return step === "END" ? setProfileStepState(8) : setProfileStepState(7);
  }; //  const profileStep = jwtFuncs.jwtProfileStep(token);


  switch (profileStepState) {
    case 1:
      //  console.log("i dey case 1 now i wan render");
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }
      }, __jsx(_components_profile_bioInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentStep: profileStepState,
        updatestep: proStep,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 25
        }
      }));

    case 2:
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }
      }, __jsx(_components_profile_contactInformation__WEBPACK_IMPORTED_MODULE_3__["default"], {
        currentStep: profileStepState,
        updatestep: proStep,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 25
        }
      }));

    case 3:
      //  console.log("i dey case 3 now i wan render");
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }
      }, __jsx(_components_profile_nextOfKinInformation__WEBPACK_IMPORTED_MODULE_4__["default"], {
        currentStep: profileStepState,
        updatestep: proStep,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 25
        }
      }));

    case 4:
      // console.log("i dey case 4 now i wan render");
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 21
        }
      }, __jsx(_components_profile_employmentInformation__WEBPACK_IMPORTED_MODULE_6__["default"], {
        updatestep: proStep,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 25
        }
      }));

    case 5:
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 22
        }
      }, __jsx(_components_profile_paymentInformation__WEBPACK_IMPORTED_MODULE_5__["default"], {
        updatestep: proStep,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 25
        }
      }));

    case 6:
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 26
        }
      }, __jsx(_components_profile_profilePic__WEBPACK_IMPORTED_MODULE_7__["default"], {
        updatestep: proStep,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 29
        }
      }));

    case 7:
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 29
        }
      }, __jsx(_components_profile_confirm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        updatestep: proStep,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 33
        }
      }));

    case 8:
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 29
        }
      }, __jsx(_components_profile_success__WEBPACK_IMPORTED_MODULE_19__["default"], {
        updatestep: finishStep,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 33
        }
      }));

    default:
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 21
        }
      }, __jsx(_components_profile_bioInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentStep: profileStepState,
        updatestep: proStep,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 25
        }
      }));
  }
  /*
    
  
         return (
                
                  <div className="container">
                    <Head>
                    
                    </Head>
                
                    <main>
                    <h1>this is the account page</h1>
                    </main>
                
                    <footer>
                  
                    </footer>
                
                    <style jsx>{`
                    
                    `}</style>
                
                    <style jsx global>{`
                
                    `}</style>
                  </div>
                
          )   */

}; //export default withRouter(Profile)


/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./public/assets/style.scss":
/*!**********************************!*\
  !*** ./public/assets/style.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./store/contexts/authContext.js":
/*!***************************************!*\
  !*** ./store/contexts/authContext.js ***!
  \***************************************/
/*! exports provided: AuthContext, AuthContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContextProvider", function() { return AuthContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_authReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/authReducer */ "./store/reducers/authReducer.js");
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/store/contexts/authContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const AuthContextProvider = props => {
  //     const state = {}
  //     const { auth, dispatch } = useReducer( authReducer, state, localState )
  //      const { auth, dispatch } = useReducer( authReducer, state )
  const initialState = {};
  const {
    0: auth,
    1: dispatchh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_authReducer__WEBPACK_IMPORTED_MODULE_1__["authReducer"], initialState);
  /*     useEffect(() => {
         //  localStorage.setItem('auth', JSON.stringify(auth))
         return true
       }, [auth]) */
  //  console.log("this is the context from the client side "+ localData);
  //<AuthContext.Provider value={{auth, dispatch}}>

  return __jsx(AuthContext.Provider, {
    value: {
      auth,
      dispatchh
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, props.children);
}; //export default AuthContextProvider;

/***/ }),

/***/ "./store/contexts/profileContext.js":
/*!******************************************!*\
  !*** ./store/contexts/profileContext.js ***!
  \******************************************/
/*! exports provided: ProfileContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileContext", function() { return ProfileContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_profileReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/profileReducer */ "./store/reducers/profileReducer.js");
var _jsxFileName = "/home/noa/ntdbProject/app/NTDB/store/contexts/profileContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ProfileContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

const localStorageTest = () => {
  var test = 'test';

  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

const ProfileContextProvider = props => {
  const initialState = {};

  const localState = () => {
    if (localStorageTest() === true) {
      // available
      const localData = localStorage.getItem("profile");
      return localData ? JSON.parse(localData) : initialState;
    } else {
      // unavailable
      return initialState;
    }
  };

  const {
    0: profile,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_profileReducer__WEBPACK_IMPORTED_MODULE_1__["profileReducer"], initialState, localState); //   const [ profile, dispatch ] = useReducer( profileReducer, initialState )

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (localStorageTest() == true) {
      // available
      localStorage.setItem('profile', JSON.stringify(profile));
    }
  }, [profile]);
  return __jsx(ProfileContext.Provider, {
    value: {
      profile,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileContextProvider);

/***/ }),

/***/ "./store/reducers/authReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/authReducer.js ***!
  \***************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
const rmLoginError = (state) => {
    if (state.loginError){
        delete state.loginError;
    }
        return
}
*/
const authReducer = (state, action) => {
  switch (action.type) {
    case 'TEST':
      console.log('TESTING A NES CPMNTESTCNONONKN '); //    rmLoginError(state);
      //    return {...state, userID:action.userDetails.userID, userToken: action.userDetails.userToken, isProfileComplete: action.userDetails.isProfileComplete };

      return _objectSpread({}, state, {
        jwt: action.userDetails.userID
      });

    case 'LOGIN':
      console.log('login credentials', action.userDetails); //    rmLoginError(state);
      //    return {...state, userID:action.userDetails.userID, userToken: action.userDetails.userToken, isProfileComplete: action.userDetails.isProfileComplete };

      return _objectSpread({}, state, {
        jwt: action.userDetails.userID
      });

    case 'LOGIN_FAILED':
      console.log('login failed with this info', action.errDetail);
      return _objectSpread({}, state, {
        loginError: action.errDetail
      });

    case 'LOGOUT':
      console.log('logout has been triggered');
      return _objectSpread({}, state, {
        userToken: null
      });

    case 'REGISTER':
      console.log('this is the registration credentials', action.userDetails);
      return _objectSpread({}, state, {
        userID: action.userDetails.userID,
        userToken: action.userDetails.userToken,
        isProfileComplete: action.userDetails.isProfileComplete
      });

    default:
      return _objectSpread({}, state, {
        auth: "testin jwt"
      });
    //  return state
  }
};

/***/ }),

/***/ "./store/reducers/profileReducer.js":
/*!******************************************!*\
  !*** ./store/reducers/profileReducer.js ***!
  \******************************************/
/*! exports provided: profileReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileReducer", function() { return profileReducer; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const profileReducer = (state, action) => {
  //  _.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
  //   var array = [1, 2, 3, 4, 5, 6];
  // var evens = _.remove(array, function(num) { return num % 2 == 0; });
  switch (action.type) {
    case 'ADD_PROFILE_DATA':
      console.log('Profile data waiting to be added', JSON.stringify(action.payload));
      console.log('Profile data waiting to be added stattettattatttat --> ', JSON.stringify(state));
      return _objectSpread({}, state, {}, action.payload);

    case 'ADD_WORK_DATA':
      console.log('Profile data waiting to be added', JSON.stringify(action.payload));
      return _objectSpread({}, state, {
        userWorkDetails: action.payload
      });

    case 'CLEAR_CONTEXT':
      //    console.log('Profile data waiting to be added', JSON.stringify(action.payload));
      return {};

    case 'CURRENT_STEP':
      console.log('I just added the current PROFILE', JSON.stringify(action.payload));
      console.log('Profile data waiting to be added stattettattatttat 22222 --> ', JSON.stringify(state)); //  console.log('I just added the current PROFILE', JSON.stringify(state.profile));
      //  state.profileStep = action.payload;

      return _objectSpread({}, state, {
        currentStep: action.payload
      });

    case 'DELETE_WORK_DETAILS':
      //   console.log('TESTING A NES CPMNTESTCNONONKN '+JSON.stringify(action.payload));
      //const toDelete = delete state[action.payload]
      let checkWorkdetails = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(state, action.payload);

      if (checkWorkdetails) {
        delete state[action.payload]; // _.remove(state, action.payload);
      } // console.log("test acttttttttttttt new STTATATATA  "+JSON.stringify(state));         


      return state;

    case 'INSTANT_UPDATE_PROFILE':
      //  console.log('Profile data has been added', action.payload);
      return _objectSpread({}, state, {}, action.payload);

    case 'CURRENT_PROFILE_STEP':
      //   console.log("this is the profile step from the database "+ JSON.stringify(action));
      return _objectSpread({}, state, {}, {
        profileStep: action.profileStep
      });

    case 'PROFILE_STEP_BACK':
      //     console.log('we are going a step back in the profile', action.payload);
      return _objectSpread({}, state, {}, {
        profileStep: action.payload.profileStep
      });

    case 'CREATE_PROFILE':
      //    console.log('Profile Has Been Created', action.resDetails.isProfileComplete);
      //    console.log("this is the action output state "+ JSON.stringify(state));
      return _objectSpread({}, state, {
        isProfileComplete: 1
      });

    case 'CREATE_PROFILE_ERROR':
      //    console.log('there was an error creating the profile', action.errDetail);
      return _objectSpread({}, state, {
        profileError: true
      });
      ;

    case 'EDIT_PROFILE':
      //    console.log('Profile Edited Successfully', action.userDetails);
      return _objectSpread({}, state, {
        isProfileComplete: action.userDetails
      });

    case 'DELETE_PROFILE':
      //     console.log('Profile Deleted');
      return _objectSpread({}, state, {
        isProfileComplete: null
      });

    default:
      return state;
  } //return state

};

/***/ }),

/***/ "./utility/axios.js":
/*!**************************!*\
  !*** ./utility/axios.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);

 //import cookieFuncs from './cookies';



const userRegister = async data => {
  const url = _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].apiUrl + "register";

  try {
    const postReq = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data).then(function (response) {
      // console.log(response);
      // console.log(response.data);
      console.log(response.status);
      return response;
    }).catch(function (error) {
      console.log("this is the error that occurred " + error); //return error

      return;
    });
    return postReq;
  } catch (error) {}
};

const userLogin = async () => {
  const options = {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${currentUserAuthToken}`
    }
  }; // Make a request for a user with a given ID

  const url = _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].apiUrl;
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, options).then(function (response) {
    // handle success
    console.log("this is the response " + response);
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    return response;
  }).catch(function (error) {
    // //                                                               // handle error
    console.log("this is the error " + error); //   console.log("this is the error "+response);

    return null;
  });
  return res;
};

const profilePost = async data => {
  // console.log("this s the data that we want to put in the databasev  ooooooooooooooo "+JSON.stringify(data));
  // console.log("this is a test of the JNIJNIOI CONFIG "+config.testEnv);
  //   const cookies = cookieFuncs.getCookie();
  const cookies = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('auth'); //   const currentUserAuthToken = cookies.auth
  //  console.log("this is thr current auto header for the post method of thee profile ooo ->>> "+cookies);

  const url = _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].apiUrl + "profile";
  const options = {
    //  withCredentials: true,
    headers: {
      'Authorization': `Bearer ${cookies}`,
      'Content-Type': 'multipart/form-data'
    }
  };

  try {
    const postReq = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data, options).then(function (response) {
      // console.log(response);
      // console.log(response.data);
      console.log(response.status);
      return response;
    }).catch(function (error) {
      console.log("this is the error that occurred " + error); //return error

      return;
    }); //  console.log("this is the outcome of postRep "+JSON.stringify(postReq));

    return postReq;
  } catch (error) {
    console.log("an error occurd " + error);
  }
}; // const setItemInStorage  = (key, value) => {
//     const setLocalItem = localStorage.setItem(key, JSON.stringify(value));
//     if(setLocalItem == true){
//         return true
//     }
// }


const checkBVN = async bvn => {
  const url = _config_config__WEBPACK_IMPORTED_MODULE_1__["default"].apiUrl + "bvn/" + bvn;
  console.log("the final url to check " + url);

  try {
    const getReq = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (response) {
      // console.log(response);
      // console.log(response.data);
      console.log("this is the response satus " + response.status);
      return response;
    }).catch(function (error) {
      console.log("this is the error that occurred " + error); //return error

      return;
    });
    return getReq;
  } catch (error) {}
};

const axiosFuncs = {
  userRegister: userRegister,
  userLogin: userLogin,
  profilePost: profilePost,
  checkBVN: checkBVN // setItemInStorage : setItemInStorage
  // end of the module export bracket

};
/* harmony default export */ __webpack_exports__["default"] = (axiosFuncs);

/***/ }),

/***/ "./utility/jwt.js":
/*!************************!*\
  !*** ./utility/jwt.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);
 // this takes two arguments first is the token second is the value requested

const jwtUID = token => {
  console.log("the NAV user token  " + token);

  if (token) {
    const newTok = JSON.stringify(jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token).userID); //    console.log("this is the decoded from here ooo " + newTok);

    return newTok;
  }
};

const jwtEmail = token => {
  console.log("the NAV user token  " + token);

  if (token) {
    const newTok = JSON.stringify(jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token).email); //  console.log("this is the decoded from here ooo " + newTok);

    return newTok;
  }
};

const jwtRole = token => {
  console.log("the NAV user token  " + token);

  if (token) {
    const newTok = JSON.stringify(jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token).role); // console.log("this is the decoded from here ooo " + newTok);

    return newTok;
  }
};

const jwtProfile = token => {
  console.log("the NAV user token  " + token);

  if (token) {
    const newTok = JSON.stringify(jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token).isProfileComplete); // console.log("this is the decoded from here ooo " + newTok);

    return newTok;
  }
}; //const jwtProfileStep = (token) => {
// console.log("the toke i am using to fined the profiule step  "+token);
//  if(token){
// const newTok =  JSON.stringify(jwt(token).profileStep);
//   console.log("this is the decoded profile step from the tokeno " + newTok);
//  stripeMarks = (profileStepValue) => {
//  const profileStepString = newTok.replace(/"/g, '');
// const stepToReturn = Number(profileStepString);
//    console.log("this is the decoded profile step from the tokeno After STRIIIPIN  " + stepToReturn);
//   return profileStepString;
//  }
//  return newTok
//   return stepToReturn
// }
//}


const jwtFuncs = {
  jwtUID: jwtUID,
  jwtEmail: jwtEmail,
  jwtRole: jwtRole,
  jwtProfile: jwtProfile // jwtProfileStep: jwtProfileStep
  // end of the module export bracket

};
/* harmony default export */ __webpack_exports__["default"] = (jwtFuncs);

/***/ }),

/***/ "./utility/localStorage.js":
/*!*********************************!*\
  !*** ./utility/localStorage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getItemFromStorage = key => {
  const getlocalItem = localStorage.getItem(key);
  return getlocalItem ? JSON.parse(getlocalItem) : undefined;
};

const setItemInStorage = (key, value) => {
  const setLocalItem = localStorage.setItem(key, JSON.stringify(value));

  if (setLocalItem == true) {
    return true;
  }
};

const localStorageFuncs = {
  getItemFromStorage: getItemFromStorage,
  setItemInStorage: setItemInStorage // end of the module export bracket

};
/* harmony default export */ __webpack_exports__["default"] = (localStorageFuncs);

/***/ }),

/***/ "./utility/logout.js":
/*!***************************!*\
  !*** ./utility/logout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);



const Logout = () => {
  //  const router = useRouter()
  localStorage.removeItem('profile');
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('auth');
  window.location = "/"; // localStorage.removeItem('currentUser');
};

/* harmony default export */ __webpack_exports__["default"] = (Logout);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/noa/ntdbProject/app/NTDB/pages/profile.js */"./pages/profile.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-image-crop":
/*!***********************************!*\
  !*** external "react-image-crop" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image-crop");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-materialize":
/*!************************************!*\
  !*** external "react-materialize" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-materialize");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "validatorjs":
/*!******************************!*\
  !*** external "validatorjs" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validatorjs");

/***/ })

/******/ });
//# sourceMappingURL=profile.js.map