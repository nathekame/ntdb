webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./components/profile/employmentInformation.js":
/*!*****************************************************!*\
  !*** ./components/profile/employmentInformation.js ***!
  \*****************************************************/
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! validatorjs */ "./node_modules/validatorjs/src/validator.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(validatorjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utility_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utility/jwt */ "./utility/jwt.js");
/* harmony import */ var _componentUtility_composeApiData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../componentUtility/composeApiData */ "./components/componentUtility/composeApiData.js");



var _this = undefined,
    _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/profile/employmentInformation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












 //import localStorageFuncs from '../../../utility/localStorage'
//   const cropper = React.createRef(null);

var EmploymentInformation = function EmploymentInformation(props) {
  //console.log("this is the passed in props +"+JSON.stringify(props));
  // console.log("this is the passed in props -"+props.stepremove);
  // const coVal = Cookie.get("auth");
  // const profileStep = (cookie) => {
  //     return cookie ? jwtFuncs.jwtProfileStep(cookie) : 1 
  //  }
  // const sessionProStep = profileStep(coVal);
  //console.log("the pro step "+sessionProStep);
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_3__["ProfileContext"]),
      dispatch = _useContext.dispatch; //  const checkInLocalStorage = (val) => {
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


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    // prevProfileStep:1,
    // nextProfileStep:3,
    profileStep: 4,
    controlNumber: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__["default"])("employmentInformation", "controlNumber"),
    highestQualification: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__["default"])("employmentInformation", "highestQualification"),
    lgea: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__["default"])("employmentInformation", "lgea"),
    station: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__["default"])("employmentInformation", "station"),
    dateOfFirstAppointment: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__["default"])("employmentInformation", "dateOfFirstAppointment"),
    dateOfConfirmation: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__["default"])("employmentInformation", "dateOfConfirmation"),
    dateOfLastPromotion: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_7__["default"])("employmentInformation", "dateOfLastPromotion")
  }),
      employmentInformation = _useState[0],
      setEmploymentInformation = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      buttonStateF = _useState2[0],
      setButtonStateF = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      buttonStateB = _useState3[0],
      setButtonStateB = _useState3[1];

  var rules = {
    controlNumber: 'required',
    highestQualification: 'required',
    lgea: 'required',
    station: 'required',
    dateOfFirstAppointment: 'required',
    dateOfConfirmation: 'required',
    dateOfLastPromotion: 'required' //  email: 'required|email',
    //  age: 'min:18'

  };
  var validation = new validatorjs__WEBPACK_IMPORTED_MODULE_10___default.a(employmentInformation, rules, {
    required: 'required*'
  });
  validation.fails(); // true

  validation.passes(); // false

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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

  var handleChange = function handleChange(e) {
    e.preventDefault();
    setEmploymentInformation(_objectSpread({}, employmentInformation, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.id, e.target.value)));
  };

  var handleDateChange = function handleDateChange(e, date) {
    //setSelectedDate(date);
    setEmploymentInformation(_objectSpread({}, employmentInformation, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.id, moment__WEBPACK_IMPORTED_MODULE_9___default()(date).format('YYYY-MM-DD'))));
  };

  var handleForward = function handleForward(e) {
    var next, go;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleForward$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault(); //   dispatch({type: 'ADD_PROFILE_DATA', payload: employmentInformation});

            if (!validation.passes()) {
              _context.next = 10;
              break;
            }

            dispatch({
              type: 'ADD_PROFILE_DATA',
              payload: {
                employmentInformation: employmentInformation
              }
            });
            next = "F";
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(props.updatestep(next));

          case 6:
            go = _context.sent;
            dispatch({
              type: 'CURRENT_STEP',
              payload: employmentInformation.profileStep + 1
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
              payload: employmentInformation.profileStep - 1
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 6
    }
  }, __jsx(_layouts_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "innergrid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "profile-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 13
    }
  }, " Employment Information "), __jsx("div", {
    className: "two-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "controlNumber",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 21
    }
  }, "Address   ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 62
    }
  }, validation.errors.get("controlNumber"))), __jsx("input", {
    id: "controlNumber",
    onChange: handleChange,
    value: employmentInformation.controlNumber,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "highestQualification",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 27
    }
  }, "Highest Qualification ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 87
    }
  }, validation.errors.get("highestQualification"))), __jsx("input", {
    id: "highestQualification",
    onChange: handleChange,
    value: employmentInformation.highestQualification,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 27
    }
  }))), __jsx("div", {
    className: "two-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "lgea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 27
    }
  }, "LGEA   ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 56
    }
  }, validation.errors.get("lgea"))), __jsx("select", {
    id: "lgea",
    onChange: handleChange,
    value: employmentInformation.lgea,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 27
    }
  }, __jsx("option", {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 31
    }
  }), __jsx("option", {
    value: "DELTA",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 31
    }
  }, "DELTA"), __jsx("option", {
    value: "KANO",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 31
    }
  }, "KANO"), __jsx("option", {
    value: "RIVERS",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 31
    }
  }, "RIVERS"))), __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "station",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 27
    }
  }, "Station/School Name  ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 73
    }
  }, validation.errors.get("station"))), __jsx("select", {
    id: "station",
    onChange: handleChange,
    value: employmentInformation.station,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 27
    }
  }, __jsx("option", {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 31
    }
  }), __jsx("option", {
    value: "DELTA",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 31
    }
  }, "DELTA"), __jsx("option", {
    value: "KANO",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 31
    }
  }, "KANO"), __jsx("option", {
    value: "RIVERS",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 31
    }
  }, "RIVERS")))), __jsx("div", {
    className: "three-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 22
    }
  }, __jsx("label", {
    htmlFor: "dateOfFirstAppointment",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 27
    }
  }, "Date of First Appointment  ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 94
    }
  }, validation.errors.get("dateOfFirstAppointment"))), __jsx("input", {
    id: "dateOfFirstAppointment",
    type: "date",
    onChange: handleDateChange,
    value: employmentInformation.dateOfFirstAppointment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "dateOfConfirmation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 27
    }
  }, "Date of Confirmation ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 84
    }
  }, validation.errors.get("dateOfConfirmation"))), __jsx("input", {
    id: "dateOfConfirmation",
    type: "date",
    onChange: handleDateChange,
    value: employmentInformation.dateOfConfirmation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 23
    }
  }, __jsx("label", {
    htmlFor: "dateOfLastPromotion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 27
    }
  }, "Date Of Last Promotion  ", __jsx("span", {
    className: "fieldError",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 88
    }
  }, validation.errors.get("dateOfLastPromotion"))), __jsx("input", {
    id: "dateOfLastPromotion",
    type: "date",
    onChange: handleDateChange,
    value: employmentInformation.dateOfLastPromotion,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 27
    }
  }))), __jsx("div", {
    className: "two-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 18
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
      lineNumber: 324,
      columnNumber: 26
    }
  }, " Back ")), __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
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
      lineNumber: 328,
      columnNumber: 26
    }
  }, "Next"))), __jsx("div", {
    className: "one-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "column componentFooter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 23
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 26
    }
  }, "4/6"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (EmploymentInformation);

/***/ })

})
//# sourceMappingURL=profile.js.2609517e80526cdcf74e.hot-update.js.map