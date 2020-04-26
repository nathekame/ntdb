webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./components/profile/paymentInformation.js":
/*!**************************************************!*\
  !*** ./components/profile/paymentInformation.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/contexts/profileContext */ "./store/contexts/profileContext.js");
/* harmony import */ var _layouts_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/navbar */ "./components/layouts/navbar.js");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/assets/style.scss */ "./public/assets/style.scss");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utility_logout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility/logout */ "./utility/logout.js");
/* harmony import */ var _componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componentUtility/persistLocalToState */ "./components/componentUtility/persistLocalToState.js");
/* harmony import */ var _utility_axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utility/axios */ "./utility/axios.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! validatorjs */ "./node_modules/validatorjs/src/validator.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(validatorjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utility_jwt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utility/jwt */ "./utility/jwt.js");
/* harmony import */ var _componentUtility_composeApiData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../componentUtility/composeApiData */ "./components/componentUtility/composeApiData.js");



var _this = undefined,
    _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/profile/paymentInformation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











 //   const cropper = React.createRef(null);

var PaymentInformation = function PaymentInformation(props) {
  //   const coVal = Cookie.get("auth");
  //   const profileStep = (cookie) => {
  //       return cookie ? jwtFuncs.jwtProfileStep(cookie) : 1 
  //   }
  //   const sessionProStep = profileStep(coVal);
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_3__["ProfileContext"]),
      dispatch = _useContext.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    // prevProfileStep:3,
    // nextProfileStep:5,
    profileStep: 5,
    bankName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__["default"])("paymentInformation", "bankName"),
    accountName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__["default"])("paymentInformation", "accountName"),
    accountNumber: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__["default"])("paymentInformation", "accountNumber"),
    bvn: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__["default"])("paymentInformation", "bvn")
  }),
      paymentInformation = _useState[0],
      setPaymentInformation = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      buttonStateF = _useState2[0],
      setButtonStateF = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      buttonStateB = _useState3[0],
      setButtonStateB = _useState3[1];

  var rules = {
    bankName: 'required',
    accountName: 'required',
    accountNumber: 'required',
    bvn: 'required' //  email: 'required|email',
    //  age: 'min:18'

  };
  var validation = new validatorjs__WEBPACK_IMPORTED_MODULE_9___default.a(paymentInformation, rules, {
    required: 'required*'
  });
  validation.fails(); // true

  validation.passes(); // false

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (validation.passes()) {
      setButtonStateF(false); // console.log("the   buttonStete "+buttonState);  
    } else {
      setButtonStateF(true);
    }
  }, [paymentInformation]); //   useEffect(() => {
  //         if (paymentInformation.profileStep === sessionProStep ) {
  //                 setButtonStateB(true);
  //               //  console.log("the   buttonStete "+paymentInformation.profileStep);  
  //           }else{
  //                 setButtonStateB(false);
  //       }
  //   });

  var handleChange = function handleChange(e) {
    e.preventDefault();
    setPaymentInformation(_objectSpread({}, paymentInformation, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.id, e.target.value)));
  };

  var handleForward = function handleForward(e) {
    var next, go;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleForward$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault(); //   dispatch({type: 'ADD_PROFILE_DATA', payload: paymentInformation});

            if (!validation.passes()) {
              _context.next = 10;
              break;
            }

            dispatch({
              type: 'ADD_PROFILE_DATA',
              payload: {
                paymentInformation: paymentInformation
              }
            });
            next = "F";
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(props.updatestep(next));

          case 6:
            go = _context.sent;
            dispatch({
              type: 'CURRENT_STEP',
              payload: paymentInformation.profileStep + 1
            });

            if (!go) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", go);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleBack = function handleBack(e) {
    e.preventDefault();
    var next = "B";
    var go = props.updatestep(next);
    dispatch({
      type: 'CURRENT_STEP',
      payload: paymentInformation.profileStep - 1
    });

    if (go) {
      return go;
    }
  };

  var handleSaveNow = function handleSaveNow(e) {
    var data, dataToPost, api;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSaveNow$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //  console.log("i am here to save first foitiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
            e.preventDefault();
            data = _objectSpread({}, paymentInformation, {
              profileStep: paymentInformation.profileStep + 1
            });

            if (!validation.passes()) {
              _context2.next = 11;
              break;
            }

            dataToPost = _componentUtility_composeApiData__WEBPACK_IMPORTED_MODULE_12__["default"].composeFullProfileData(data);
            _context2.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utility_axios__WEBPACK_IMPORTED_MODULE_8__["default"].profilePost(dataToPost));

          case 6:
            api = _context2.sent;

            if (api.data === "error") {
              console.log("the log is error");
            }

            if (api.data === "success") {
              console.log("the log is success" + api.status); // router.push('/account')

              dispatch({
                type: 'CLEAR_CONTEXT'
              });
              Object(_utility_logout__WEBPACK_IMPORTED_MODULE_6__["default"])();
            }

            _context2.next = 13;
            break;

          case 11:
            dispatch({
              type: 'CLEAR_CONTEXT'
            });
            Object(_utility_logout__WEBPACK_IMPORTED_MODULE_6__["default"])();

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx("div", {
    className: "pagegrid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 5
    }
  }, __jsx(_layouts_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "innergrid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "profile-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }, "Payment Information"), __jsx("div", {
    className: "one-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "bankName",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 21
    }
  }, "Bank Name ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 57
    }
  }, validation.errors.get("bankName"))), __jsx("select", {
    id: "bankName",
    onChange: handleChange,
    value: paymentInformation.bankName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 25
    }
  }), __jsx("option", {
    value: "UBA",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 25
    }
  }, "UBA"), __jsx("option", {
    value: "GTB",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 25
    }
  }, "GTB"), __jsx("option", {
    value: "FCMB",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 25
    }
  }, "FCMB")))), __jsx("div", {
    className: "one-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "accountName",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }, "Account Name   ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 65
    }
  }, validation.errors.get("accountName"))), __jsx("input", {
    id: "accountName",
    onChange: handleChange,
    value: paymentInformation.accountName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "one-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "accountNumber",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  }, "Account Number   ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 69
    }
  }, validation.errors.get("accountNumber"))), __jsx("input", {
    id: "accountNumber",
    onChange: handleChange,
    value: paymentInformation.accountNumber,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "one-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "bvn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 21
    }
  }, "Bank Verification Number(bvn)   ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 74
    }
  }, validation.errors.get("bvn"))), __jsx("input", {
    id: "bvn",
    onChange: handleChange,
    value: paymentInformation.bvn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "two-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 23
    }
  }, __jsx("button", {
    disabled: buttonStateB,
    size: "small",
    color: "primary",
    onClick: handleBack,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 26
    }
  }, "Back")), __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 23
    }
  }, __jsx("button", {
    disabled: buttonStateF,
    size: "small",
    color: "primary",
    onClick: handleForward,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 26
    }
  }, "Next"))), __jsx("div", {
    className: "one-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "column componentFooter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 23
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 26
    }
  }, "5/6"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PaymentInformation);

/***/ })

})
//# sourceMappingURL=profile.js.c9947e8a07dd66923db5.hot-update.js.map