webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/contexts/profileContext */ "./store/contexts/profileContext.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _store_contexts_authContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/contexts/authContext */ "./store/contexts/authContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_auth_login__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/auth/login */ "./components/auth/login.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../public/assets/style.scss */ "./public/assets/style.scss");
/* harmony import */ var _public_assets_style_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_assets_style_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_profile_success__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/profile/success */ "./components/profile/success.js");
var _this = undefined,
    _jsxFileName = "/home/noa/ntdbProject/app/NTDB/pages/profile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








 //import Navbar from '../components/layouts/navbar'


 //import { withRouter } from 'next/router'










 //const token = localStorage.getItem("jwt");

var Profile = function Profile(props) {
  //   const router = useRouter();
  var lCookie = js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('auth');
  console.log("the l cookie " + lCookie); //   const localStorageAuth = localStorageFuncs.getItemFromStorage("auth");

  if (lCookie == undefined) {
    //   console.log("no cookie founnd ");
    //      const router = useRouter();
    // router.push("/");
    return __jsx(_components_auth_login__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 10
      }
    });
  } // console.log("this is he lCookie "+lCookie);


  var profileStep = function profileStep(token) {
    console.log("the tokne " + token);
    return token ? _utility_jwt__WEBPACK_IMPORTED_MODULE_10__["default"].jwtProfileStep(token) : 1;
  };

  var getinitialState = function getinitialState() {
    var profileFromStorage = _utility_localStorage__WEBPACK_IMPORTED_MODULE_9__["default"].getItemFromStorage("profile"); //  const authFromStorage = localStorageFuncs.getItemFromStorage("auth");
    //  const profileFromStorageStep = profileFromStorage.currentStep;
    //      console.log("the profile from Storage "+JSON.stringify(profileFromStorage));
    // const stepFromCookie = profileStep(lCookie);

    var stepFromCookie = 1;
    console.log("this i sthe step from cookie " + stepFromCookie); //  const stepFromStorage = profileStep(localStorageAuth);
    //   console.log("the profile from Storage from cookiesss testtststststs "+stepFromCookie);
    //  const stepFromStorage  = profileFromStorage.currentStep;
    //    const stepFromStorage  = {};

    var proCheck = lodash__WEBPACK_IMPORTED_MODULE_17___default.a.isEmpty(profileFromStorage); // true


    if (proCheck) {
      //   console.log("you are seeing this cos of the stepfrom reducer---------")
      return stepFromCookie;
    } else {
      // console.log("you are seeing this cos of the stepfrom cookie")
      var stepFromStorageCurrentStep = profileFromStorage.currentStep;
      return stepFromStorageCurrentStep;
    }
  }; //  const initialState = profileStep(lCookie);


  var initialState = getinitialState(); //  const initialState = 1;

  console.log("the initial state of the matter " + initialState);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState),
      profileStepState = _useState[0],
      setProfileStepState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {//  console.log("this is the state of the profile step====> "+profileStepState);
    // currentStep(profileStepState);
  }, [profileStepState]);

  var localJWT = function localJWT() {
    var localCookie = js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('auth'); //   console.log("this is the local cookie "+localCookie);

    return localCookie ? localCookie : undefined; //    const localJWT = localStorage.getItem("jwt");
    //   return localJWT ? JSON.parse(localJWT) : '';
  };

  var token = localJWT();

  var proStep = function proStep(step) {
    //   console.log("this is the proStep functionnnn ========>>>>> "+step);
    return step === "F" ? setProfileStepState(profileStepState + 1) : setProfileStepState(profileStepState - 1);
  };

  var finishStep = function finishStep(step) {
    //   console.log("this is the proStep functionnnn ========>>>>> "+step);
    return step === "END" ? setProfileStepState(8) : setProfileStepState(7);
  }; //  const profileStep = jwtFuncs.jwtProfileStep(token);


  switch (profileStepState) {
    case 1:
      //  console.log("i dey case 1 now i wan render");
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }
      }, __jsx(_components_profile_bioInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentStep: profileStepState,
        updatestep: proStep,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 25
        }
      }));

    case 2:
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }
      }, __jsx(_components_profile_contactInformation__WEBPACK_IMPORTED_MODULE_3__["default"], {
        currentStep: profileStepState,
        updatestep: proStep,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 25
        }
      }));

    case 3:
      //  console.log("i dey case 3 now i wan render");
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }
      }, __jsx(_components_profile_nextOfKinInformation__WEBPACK_IMPORTED_MODULE_4__["default"], {
        currentStep: profileStepState,
        updatestep: proStep,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 25
        }
      }));

    case 4:
      // console.log("i dey case 4 now i wan render");
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 21
        }
      }, __jsx(_components_profile_employmentInformation__WEBPACK_IMPORTED_MODULE_6__["default"], {
        updatestep: proStep,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 25
        }
      }));

    case 5:
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 22
        }
      }, __jsx(_components_profile_paymentInformation__WEBPACK_IMPORTED_MODULE_5__["default"], {
        updatestep: proStep,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 25
        }
      }));

    case 6:
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 26
        }
      }, __jsx(_components_profile_profilePic__WEBPACK_IMPORTED_MODULE_7__["default"], {
        updatestep: proStep,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 29
        }
      }));

    case 7:
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 29
        }
      }, __jsx(_components_profile_confirm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        updatestep: proStep,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 33
        }
      }));

    case 8:
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 29
        }
      }, __jsx(_components_profile_success__WEBPACK_IMPORTED_MODULE_19__["default"], {
        updatestep: finishStep,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 33
        }
      }));

    default:
      return __jsx(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 21
        }
      }, __jsx(_components_profile_bioInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
        currentStep: profileStepState,
        updatestep: proStep,
        __self: _this,
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

/***/ })

})
//# sourceMappingURL=profile.js.0b9e76a43fd3252d632a.hot-update.js.map