webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./components/profile/bioInformation.js":
/*!**********************************************!*\
  !*** ./components/profile/bioInformation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/contexts/profileContext */ "./store/contexts/profileContext.js");
/* harmony import */ var _utility_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility/jwt */ "./utility/jwt.js");
/* harmony import */ var _utility_localStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utility/localStorage */ "./utility/localStorage.js");
/* harmony import */ var _utility_logout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utility/logout */ "./utility/logout.js");
/* harmony import */ var _layouts_navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts/navbar */ "./components/layouts/navbar.js");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/assets/style.scss */ "./public/assets/style.scss");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_style_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../componentUtility/persistLocalToState */ "./components/componentUtility/persistLocalToState.js");
/* harmony import */ var _utility_axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utility/axios */ "./utility/axios.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! validatorjs */ "./node_modules/validatorjs/src/validator.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(validatorjs__WEBPACK_IMPORTED_MODULE_13__);



var _this = undefined,
    _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/profile/bioInformation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













 //   const cropper = React.createRef(null);
//  const buttonStyle = {
//   backgroundColor: 'blue',
//  // backgroundImage: 'url(' + imgUrl + ')',
// };

var BioInformation = function BioInformation(props) {
  // console.log("this is the passed in props +"+JSON.stringify(props));
  //const localCookie = Cookie.get('auth'); 
  //console.log("this is the local cookie from Bio Information       nnnnnn    ----->>>>>>>>>>>>> "+localCookie);
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_5__["ProfileContext"]),
      dispatch = _useContext.dispatch;

  var currentProfile = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_5__["ProfileContext"]);
  var profileValue = currentProfile.profile.bioInformation; //   const bioInformation = (val) => {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    //  nextProfileStep: 2,
    profileStep: 1,
    firstName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_11__["default"])("bioInformation", "firstName"),
    otherName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_11__["default"])("bioInformation", "otherName"),
    lastName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_11__["default"])("bioInformation", "lastName"),
    gender: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_11__["default"])("bioInformation", "gender"),
    dob: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_11__["default"])("bioInformation", "dob"),
    placeOfBirth: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_11__["default"])("bioInformation", "placeOfBirth")
  }),
      bioInformation = _useState[0],
      setBioInformation = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      buttonState = _useState2[0],
      setButtonState = _useState2[1];

  var rules = {
    firstName: 'required',
    // otherName: 'required|email',
    lastName: 'required',
    gender: 'required',
    dob: 'required',
    placeOfBirth: 'required' //  email: 'required|email',
    //  age: 'min:18'

  };
  var validation = new validatorjs__WEBPACK_IMPORTED_MODULE_13___default.a(bioInformation, rules, {
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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (validation.passes()) {
      setButtonState(false); // console.log("the   buttonStete "+buttonState);  
    } else {
      setButtonState(true);
    }
  }, [bioInformation]);

  var handleDateChange = function handleDateChange(date) {
    //setSelectedDate(date);
    setBioInformation(_objectSpread({}, bioInformation, {
      dob: moment__WEBPACK_IMPORTED_MODULE_3___default()(date).format('YYYY-MM-DD')
    }));
  };

  var handleChange = function handleChange(e) {
    e.preventDefault();
    setBioInformation(_objectSpread({}, bioInformation, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.id, e.target.value)));
  };

  var handleForward = function handleForward(e) {
    var next, go;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleForward$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();

            if (!validation.passes()) {
              _context.next = 10;
              break;
            }

            dispatch({
              type: 'ADD_PROFILE_DATA',
              payload: {
                bioInformation: bioInformation
              }
            });
            next = "F";
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(props.updatestep(next));

          case 6:
            go = _context.sent;
            dispatch({
              type: 'CURRENT_STEP',
              payload: bioInformation.profileStep + 1
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

  var handleSaveNow = function handleSaveNow(e) {
    var data, api;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSaveNow$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault(); // setBioInformation({ ...bioInformation, profileStep: bioInformation.profileStep+1 });

            data = _objectSpread({}, bioInformation, {
              profileStep: bioInformation.profileStep + 1
            });
            console.log("the data  " + JSON.stringify(bioInformation));

            if (!validation.passes()) {
              _context2.next = 13;
              break;
            }

            _context2.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utility_axios__WEBPACK_IMPORTED_MODULE_12__["default"].profilePost(data));

          case 6:
            api = _context2.sent;

            if (api.data === "error") {
              console.log("the log is error");
            }

            if (api.data === "success") {
              console.log("the log is success" + api.status); // router.push('/account')
            }

            dispatch({
              type: 'CLEAR_CONTEXT'
            });
            Object(_utility_logout__WEBPACK_IMPORTED_MODULE_8__["default"])();
            _context2.next = 15;
            break;

          case 13:
            dispatch({
              type: 'CLEAR_CONTEXT'
            });
            Object(_utility_logout__WEBPACK_IMPORTED_MODULE_8__["default"])();

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var persistToLocalStorage = function persistToLocalStorage() {
    var getLocalItem = _utility_localStorage__WEBPACK_IMPORTED_MODULE_7__["default"].getItemFromStorage("profile");

    if (getLocalItem !== undefined) {} else {
      // console.log("i=the local storage is empty make i put something insidehinixdopd")
      //  const newData = {...getLocalItem, bioInformation };
      var setLocalItem = _utility_localStorage__WEBPACK_IMPORTED_MODULE_7__["default"].setItemInStorage("profile", bioInformation);
      return setLocalItem;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // set local storage
    //console.log("this is the use effect running up and downnnnnnn   nooooooooooooowwwwwwwwwwww")
    // dispatch({type: 'CLEAR_DATA'});
    persistToLocalStorage(); // persistToState();
    // checkLocalStorage("firstName");
  });
  return __jsx("div", {
    className: "pagegrid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 5
    }
  }, __jsx(_layouts_navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "innergrid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "profile-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 19
    }
  }, "Bio Information "), __jsx("div", {
    className: "three-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "firstName",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 27
    }
  }, "First Name  ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 66
    }
  }, validation.errors.get("firstName"))), __jsx("input", {
    className: "firstName",
    id: "firstName",
    onChange: handleChange,
    value: bioInformation.firstName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "otherName",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 27
    }
  }, "Other Name "), __jsx("input", {
    id: "otherName",
    onChange: handleChange,
    value: bioInformation.otherName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "lastName",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 27
    }
  }, "Last Name  ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 64
    }
  }, validation.errors.get("lastName"))), __jsx("input", {
    id: "lastName",
    onChange: handleChange,
    value: bioInformation.lastName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 27
    }
  }))), __jsx("div", {
    className: "three-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "gender",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 27
    }
  }, "Gender  ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 59
    }
  }, validation.errors.get("gender"))), __jsx("select", {
    id: "gender",
    onChange: handleChange,
    value: bioInformation.gender,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 27
    }
  }, __jsx("option", {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 31
    }
  }), __jsx("option", {
    value: "Male",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 31
    }
  }, "Male"), __jsx("option", {
    value: "Female",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 31
    }
  }, "Female"))), __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "dob",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 27
    }
  }, "Date Of Birth  ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 63
    }
  }, validation.errors.get("dob"))), __jsx("input", {
    id: "dob",
    type: "date",
    onChange: handleDateChange,
    value: bioInformation.dob,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "placeOfBirth",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 27
    }
  }, "Place Of Birth  ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 73
    }
  }, validation.errors.get("placeOfBirth"))), __jsx("input", {
    id: "placeOfBirth",
    onChange: handleChange,
    value: bioInformation.placeOfBirth,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 27
    }
  }))), __jsx("div", {
    className: "one-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 23
    }
  }, __jsx("button", {
    size: "small",
    color: "primary",
    disabled: buttonState,
    onClick: handleForward,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 26
    }
  }, "Next"))), __jsx("div", {
    className: "one-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "column componentFooter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 23
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 26
    }
  }, "1/6"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (BioInformation);

/***/ })

})
//# sourceMappingURL=profile.js.199a4283ecda7e2dfe81.hot-update.js.map