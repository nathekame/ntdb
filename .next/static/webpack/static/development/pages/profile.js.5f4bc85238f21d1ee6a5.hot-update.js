webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./components/profile/contactInformation.js":
/*!**************************************************!*\
  !*** ./components/profile/contactInformation.js ***!
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
    _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/profile/contactInformation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











 //import localStorageFuncs from '../../../utility/localStorage'
//   const cropper = React.createRef(null);

var ContactInformation = function ContactInformation(props) {
  //console.log("this is the passed in props +"+JSON.stringify(props));
  // console.log("this is the passed in props -"+props.stepremove);
  //const coVal = Cookie.get("auth");
  // const profileStep = (cookie) => {
  //     return cookie ? jwtFuncs.jwtProfileStep(cookie) : 1 
  //  }
  //const sessionProStep = profileStep(coVal);
  //console.log("the pro step "+sessionProStep);
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_3__["ProfileContext"]),
      dispatch = _useContext.dispatch; //  const checkInLocalStorage = (val) => {
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


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    // prevProfileStep:1,
    // nextProfileStep:3,
    profileStep: 2,
    stateOfOrigin: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__["default"])("contactInformation", "stateOfOrigin"),
    lga: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__["default"])("contactInformation", "lga"),
    address: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__["default"])("contactInformation", "address"),
    controlNumber: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__["default"])("contactInformation", "controlNumber"),
    mobileNumber: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__["default"])("contactInformation", "mobileNumber")
  }),
      contactInformation = _useState[0],
      setContactInformation = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      buttonStateF = _useState2[0],
      setButtonStateF = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      buttonStateB = _useState3[0],
      setButtonStateB = _useState3[1];

  var rules = {
    stateOfOrigin: 'required',
    lga: 'required',
    address: 'required',
    mobileNumber: 'required' //  email: 'required|email',
    //  age: 'min:18'

  };
  var validation = new validatorjs__WEBPACK_IMPORTED_MODULE_9___default.a(contactInformation, rules, {
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

  var handleChange = function handleChange(e) {
    e.preventDefault();
    setContactInformation(_objectSpread({}, contactInformation, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.id, e.target.value)));
  };

  var handleForward = function handleForward(e) {
    var next, go;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleForward$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault(); //   dispatch({type: 'ADD_PROFILE_DATA', payload: contactInformation});

            if (!validation.passes()) {
              _context.next = 10;
              break;
            }

            dispatch({
              type: 'ADD_PROFILE_DATA',
              payload: {
                contactInformation: contactInformation
              }
            });
            next = "F";
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(props.updatestep(next));

          case 6:
            go = _context.sent;
            dispatch({
              type: 'CURRENT_STEP',
              payload: contactInformation.profileStep + 1
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
    var next, go;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleBack$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            next = "B";
            _context2.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(props.updatestep(next));

          case 4:
            go = _context2.sent;
            dispatch({
              type: 'CURRENT_STEP',
              payload: contactInformation.profileStep - 1
            });

            if (!go) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", go);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleSaveNow = function handleSaveNow(e) {
    var data, dataToPost, api;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSaveNow$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //  console.log("i am here to save first foitiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
            e.preventDefault(); //  const data = {...commonData, ...uniqueData};
            // setContactInformation({ ...contactInformation, profileStep: 3 });
            //console.log("the neww contact details J "+JSON.stringify(contactInformation));

            data = _objectSpread({}, contactInformation, {
              profileStep: contactInformation.profileStep + 1
            }); // console.log("the neww contact details JJ "+JSON.stringify(data));

            if (!validation.passes()) {
              _context3.next = 11;
              break;
            }

            dataToPost = _componentUtility_composeApiData__WEBPACK_IMPORTED_MODULE_12__["default"].composeFullProfileData(data);
            _context3.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utility_axios__WEBPACK_IMPORTED_MODULE_8__["default"].profilePost(dataToPost));

          case 6:
            api = _context3.sent;

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

            _context3.next = 13;
            break;

          case 11:
            dispatch({
              type: 'CLEAR_CONTEXT'
            });
            Object(_utility_logout__WEBPACK_IMPORTED_MODULE_6__["default"])();

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 6
    }
  }, __jsx(_layouts_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "innergrid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "profile-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  }, "Contact Information"), __jsx("div", {
    className: "two-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "stateOfOrigin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 27
    }
  }, "State Of Origin  ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 75
    }
  }, validation.errors.get("stateOfOrigin"))), __jsx("select", {
    id: "stateOfOrigin",
    onChange: handleChange,
    value: contactInformation.stateOfOrigin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 27
    }
  }, __jsx("option", {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 31
    }
  }), __jsx("option", {
    value: "NIGER",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 31
    }
  }, "NIGER"))), __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "lga",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 27
    }
  }, "LGA   ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 54
    }
  }, validation.errors.get("lga"))), __jsx("select", {
    id: "lga",
    onChange: handleChange,
    value: contactInformation.lga,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 27
    }
  }, __jsx("option", {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 31
    }
  }), __jsx("option", {
    value: "DELTA",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 31
    }
  }, "DELTA"), __jsx("option", {
    value: "KANO",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 31
    }
  }, "KANO"), __jsx("option", {
    value: "RIVERS",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 31
    }
  }, "RIVERS")))), __jsx("div", {
    className: "two-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "controlNumber",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 21
    }
  }, "Address   ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 62
    }
  }, validation.errors.get("controlNumber")))), __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "mobileNumber",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 21
    }
  }, "Mobile Number   ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 67
    }
  }, validation.errors.get("mobileNumber"))), __jsx("input", {
    id: "mobileNumber",
    onChange: handleChange,
    value: contactInformation.mobileNumber,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "one-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "address",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 21
    }
  }, "Address   ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 56
    }
  }, validation.errors.get("address"))), __jsx("textarea", {
    id: "address",
    onChange: handleChange,
    value: contactInformation.address,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "two-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 23
    }
  }, __jsx("button", {
    variant: "outlined",
    size: "small",
    color: "primary",
    disabled: buttonStateB,
    onClick: handleBack,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 26
    }
  }, " Back ")), __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 23
    }
  }, __jsx("button", {
    size: "small",
    color: "primary",
    disabled: buttonStateF,
    onClick: handleForward,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 26
    }
  }, "Next"))), __jsx("div", {
    className: "one-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "column componentFooter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 23
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 26
    }
  }, "2/6"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactInformation);

/***/ })

})
//# sourceMappingURL=profile.js.5f4bc85238f21d1ee6a5.hot-update.js.map