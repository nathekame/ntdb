webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./components/profile/confirm.js":
/*!***************************************!*\
  !*** ./components/profile/confirm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentUtility/persistLocalToState */ "./components/componentUtility/persistLocalToState.js");
/* harmony import */ var _store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/contexts/profileContext */ "./store/contexts/profileContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_loading_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loading-io */ "./node_modules/react-loading-io/dist/esm/index.js");
/* harmony import */ var _layouts_navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/navbar */ "./components/layouts/navbar.js");
/* harmony import */ var _utility_axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility/axios */ "./utility/axios.js");
/* harmony import */ var _componentUtility_composeApiData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componentUtility/composeApiData */ "./components/componentUtility/composeApiData.js");
/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./success */ "./components/profile/success.js");



var _this = undefined,
    _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/profile/confirm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






 // import Staff from '../partials/profile/staff';
// import Corper from '../partials/profile/corper';
// import Student from '../partials/profile/student';
// import Worker from '../partials/profile/worker';



 //   const cropper = React.createRef(null);

var Confirm = function Confirm(props) {
  var _useState2;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var profileData = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_4__["ProfileContext"]); // console.log("this is the profile details from the COtext "+JSON.stringify(profileData));

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_4__["ProfileContext"]),
      dispatch = _useContext.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_useState2 = {
    profileStep: 8,
    isProfileComplete: 1,
    firstName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("bioInformation", "firstName"),
    otherName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("bioInformation", "otherName"),
    lastName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("bioInformation", "lastName"),
    gender: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("bioInformation", "gender"),
    dob: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("bioInformation", "dob"),
    placeOfBirth: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("bioInformation", "placeOfBirth"),
    stateOfOrigin: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("contactInformation", "stateOfOrigin"),
    lga: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("contactInformation", "lga"),
    address: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("contactInformation", "address"),
    controlNumber: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("contactInformation", "controlNumber"),
    mobileNumber: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("contactInformation", "mobileNumber"),
    fullName: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("nextOfKinInformation", "fullName"),
    relationship: Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("nextOfKinInformation", "relationship")
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState2, "address", Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("nextOfKinInformation", "address")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState2, "emailAddress", Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("nextOfKinInformation", "emailAddress")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState2, "mobileNumber", Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("nextOfKinInformation", "mobileNumber")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState2, "controlNumber", Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("employmentInformation", "controlNumber")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState2, "highestQualification", Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("employmentInformation", "highestQualification")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState2, "lgea", Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("employmentInformation", "lgea")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState2, "station", Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("employmentInformation", "station")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState2, "dateOfFirstAppointment", Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("employmentInformation", "dateOfFirstAppointment")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState2, "dateOfConfirmation", Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("employmentInformation", "dateOfConfirmation")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState2, "dateOfLastPromotion", Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("employmentInformation", "dateOfLastPromotion")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState2, "bankName", Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("paymentInformation", "bankName")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState2, "accountName", Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("paymentInformation", "accountName")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState2, "accountNumber", Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("paymentInformation", "accountNumber")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState2, "bvn", Object(_componentUtility_persistLocalToState__WEBPACK_IMPORTED_MODULE_3__["default"])("paymentInformation", "bvn")), _useState2)),
      myProfileDetails = _useState[0];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var handleSaveNow = function handleSaveNow(e) {
    var commonData, profilePicData, filesToCompose, dataToCompose, dataCompose, api;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSaveNow$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            setLoading(true);
            commonData = myProfileDetails;
            profilePicData = profileData.profile.profilePic.profilePicFile;
            filesToCompose = {
              profilePicFile: profilePicData
            }; // console.log("this i s the file to comeose "+JSON.stringify(filesToCompose));

            dataToCompose = commonData; //  dataToCompose.profilePic = profilePicData;

            dataCompose = _componentUtility_composeApiData__WEBPACK_IMPORTED_MODULE_10__["default"].composeFullProfileData(dataToCompose, filesToCompose); //  console.log("this is the data going out "+JSON.stringify(data));
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

            _context.next = 9;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utility_axios__WEBPACK_IMPORTED_MODULE_9__["default"].profilePost(dataCompose));

          case 9:
            api = _context.sent;
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


          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleBack = function handleBack(e) {
    e.preventDefault();
    var next = "B";
    var go = props.updatestep(next); // dispatch({type: 'DELETE_WORK_DETAILS', payload: "workerDetails"});

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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 5
      }
    }, __jsx(react_loading_io__WEBPACK_IMPORTED_MODULE_7__["Eclipse"], {
      size: 64,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 7
      }
    }), ";");
  } else {
    return __jsx("div", {
      className: "confirmationPage",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 5
      }
    }, __jsx(_layouts_navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 7
      }
    }), __jsx("div", {
      className: "innergrid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "profile-form",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "profileGroup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "one-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "profilePicPreview",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: profileData.profile.profilePic.profilePicUrl,
      alt: "profilePic",
      height: "70px",
      width: "200px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 64
      }
    })))), __jsx("div", {
      className: "one-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "profilePicPreview",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 29
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 32
      }
    }, "My Profile Preview"))))), __jsx("div", {
      className: "profileGroup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 21
      }
    }, "Bio Information"), __jsx("div", {
      className: "three-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "firstName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 27
      }
    }, "First Name: "), __jsx("span", {
      id: "firstName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 27
      }
    }, myProfileDetails.firstName)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "otherName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 27
      }
    }, "Other Name: "), __jsx("span", {
      id: "otherName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 27
      }
    }, myProfileDetails.otherName)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "lastName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 27
      }
    }, "Last Name: "), __jsx("span", {
      id: "lastName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 27
      }
    }, myProfileDetails.lastName))), __jsx("div", {
      className: "three-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "gender",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 27
      }
    }, "Gender: "), __jsx("span", {
      id: "gender",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 27
      }
    }, myProfileDetails.gender)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "dob",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 27
      }
    }, "Date Of Birth: "), __jsx("span", {
      id: "dob",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 27
      }
    }, myProfileDetails.dob)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "placeOfBirth",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 27
      }
    }, "Place Of Birth: "), __jsx("span", {
      id: "placeOfBirth",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 27
      }
    }, myProfileDetails.placeOfBirth)))), __jsx("div", {
      className: "profileGroup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 17
      }
    }, "Contact Information"), __jsx("div", {
      className: "three-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "column ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "stateOfOrigin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 31
      }
    }, "State of Origin: "), __jsx("span", {
      id: "stateOfOrigin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 31
      }
    }, myProfileDetails.stateOfOrigin)), __jsx("div", {
      className: "column ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "column ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "lga",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 31
      }
    }, "LGA: "), __jsx("span", {
      id: "lga",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 31
      }
    }, myProfileDetails.lga))), __jsx("div", {
      className: "three-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 19
      }
    }, __jsx("label", {
      htmlFor: "controlNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 31
      }
    }, "Control Number: "), __jsx("span", {
      id: "controlNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 31
      }
    }, myProfileDetails.controlNumber)), __jsx("div", {
      className: "column ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 19
      }
    }, __jsx("label", {
      htmlFor: "mobileNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 31
      }
    }, "Mobile Number: "), __jsx("span", {
      id: "mobileNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 31
      }
    }, myProfileDetails.mobileNumber))), __jsx("div", {
      className: "one-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 19
      }
    }, __jsx("label", {
      htmlFor: "address",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 31
      }
    }, "Address: "), __jsx("span", {
      id: "controlNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 31
      }
    }, myProfileDetails.address)))), __jsx("div", {
      className: "profileGroup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 15
      }
    }, "Next Of Kin Information"), __jsx("div", {
      className: "three-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 24
      }
    }, __jsx("label", {
      htmlFor: "fullName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 31
      }
    }, "Full Name: "), __jsx("span", {
      id: "fullName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 31
      }
    }, myProfileDetails.fullName)), __jsx("div", {
      className: "column ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 24
      }
    }), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 24
      }
    }, __jsx("label", {
      htmlFor: "relationship",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 31
      }
    }, "Relationship: "), __jsx("span", {
      id: "relationship",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 31
      }
    }, myProfileDetails.relationship))), __jsx("div", {
      className: "three-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 19
      }
    }, __jsx("label", {
      htmlFor: "emailAddress",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 27
      }
    }, "Email Address: "), __jsx("span", {
      id: "emailAddress",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 27
      }
    }, myProfileDetails.emailAddress)), __jsx("div", {
      className: "column ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 20
      }
    }), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 20
      }
    }, __jsx("label", {
      htmlFor: "mobileNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 25
      }
    }, "Mobile Number: "), __jsx("span", {
      id: "mobileNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 25
      }
    }, myProfileDetails.mobileNumber))), __jsx("div", {
      className: "one-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 20
      }
    }, __jsx("label", {
      htmlFor: "address",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 25
      }
    }, "Address: "), __jsx("span", {
      id: "address",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 25
      }
    }, myProfileDetails.address)))), __jsx("div", {
      className: "profileGroup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 16
      }
    }, "Employment information"), __jsx("div", {
      className: "three-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 16
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "controlNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 29
      }
    }, "Control Number: "), __jsx("span", {
      id: "controlNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 29
      }
    }, myProfileDetails.controlNumber)), __jsx("div", {
      className: "column ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "highestQualification",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 29
      }
    }, "Highest Qualification: "), __jsx("span", {
      id: "highestQualification",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 29
      }
    }, myProfileDetails.highestQualification))), __jsx("div", {
      className: "three-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "lgea",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 29
      }
    }, "LGEA: "), __jsx("span", {
      id: "lgea",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 29
      }
    }, myProfileDetails.lgea)), __jsx("div", {
      className: "column ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "station",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 29
      }
    }, "Station: "), __jsx("span", {
      id: "station",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 29
      }
    }, myProfileDetails.station))), __jsx("div", {
      className: "three-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "dateOfFirstAppointment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 29
      }
    }, "Highest Qualification: "), __jsx("span", {
      id: "dateOfFirstAppointment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 29
      }
    }, myProfileDetails.dateOfFirstAppointment)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "dateOfConfirmation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 29
      }
    }, "Date Of Confirmation: "), __jsx("span", {
      id: "dateOfConfirmation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 29
      }
    }, myProfileDetails.dateOfConfirmation)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "dateOfLastPromotion",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 29
      }
    }, "Date Of Last Promotion: "), __jsx("span", {
      id: "dateOfLastPromotion",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 29
      }
    }, myProfileDetails.dateOfLastPromotion)))), __jsx("div", {
      className: "profileGroup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 16
      }
    }, "Payment Information"), __jsx("div", {
      className: "four-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 31
      }
    }, __jsx("label", {
      htmlFor: "bankName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 33
      }
    }, "Bank Name: "), __jsx("span", {
      id: "bankName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 33
      }
    }, myProfileDetails.bankName)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 31
      }
    }, __jsx("label", {
      htmlFor: "accountName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 33
      }
    }, "Account Name: "), __jsx("span", {
      id: "accountName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 33
      }
    }, myProfileDetails.accountName)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 31
      }
    }, __jsx("label", {
      htmlFor: "accountNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 33
      }
    }, "Account Number: "), __jsx("span", {
      id: "accountNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 33
      }
    }, myProfileDetails.accountNumber)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 31
      }
    }, __jsx("label", {
      htmlFor: "bvn",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 33
      }
    }, "BVN: "), __jsx("span", {
      id: "bvn",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 33
      }
    }, myProfileDetails.bvn)))), __jsx("div", {
      className: "two-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 23
      }
    }, __jsx("button", {
      variant: "outlined",
      size: "small",
      color: "primary",
      onClick: handleBack,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 26
      }
    }, " Back ")), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437,
        columnNumber: 23
      }
    }, __jsx("button", {
      size: "small",
      color: "primary",
      onClick: handleSaveNow,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438,
        columnNumber: 26
      }
    }, "My Details Are Fine Save Now"))))));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Confirm);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/react-loading-io/dist/esm/Ball/Ball.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-loading-io/dist/esm/Ball/Ball.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./node_modules/react-loading-io/dist/esm/helpers.js");
/* harmony import */ var _ball_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ball.css */ "./node_modules/react-loading-io/dist/esm/Ball/ball.css");
/* harmony import */ var _ball_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ball_css__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Ball = function Ball(_ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#ED4585' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 200 : _ref$size,
      _ref$speed = _ref.speed,
      speed = _ref$speed === void 0 ? 1 : _ref$speed,
      style = _ref.style;
  var scale = size / 200;
  var translate = size * scale;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["clsx"])('rl-ball', className),
    style: _objectSpread({
      '--rl-ball-size': "".concat(size, "px"),
      '--rl-ball-color': color,
      '--rl-ball-scale': scale,
      '--rl-ball-translate': "".concat(translate, "px"),
      '--rl-ball-speed': "".concat(speed, "s")
    }, style)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null));
};

 true ? Ball.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Ball);

/***/ }),

/***/ "./node_modules/react-loading-io/dist/esm/Ball/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-loading-io/dist/esm/Ball/index.js ***!
  \**************************************************************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ "./node_modules/react-loading-io/dist/esm/Ball/Ball.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ball", function() { return _Ball__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/react-loading-io/dist/esm/DualRing/DualRing.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-loading-io/dist/esm/DualRing/DualRing.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./node_modules/react-loading-io/dist/esm/helpers.js");
/* harmony import */ var _dualring_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dualring.css */ "./node_modules/react-loading-io/dist/esm/DualRing/dualring.css");
/* harmony import */ var _dualring_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dualring_css__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var DualRing = function DualRing(_ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#ED4585' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 200 : _ref$size,
      _ref$speed = _ref.speed,
      speed = _ref$speed === void 0 ? 1 : _ref$speed,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 4 : _ref$width,
      style = _ref.style;
  var scale = size / 200;
  var translate = size * scale;
  var border = width * 2;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["clsx"])('rl-dual-ring', className),
    style: _objectSpread({
      '--rl-dual-ring-size': "".concat(size, "px"),
      '--rl-dual-ring-color': color,
      '--rl-dual-ring-scale': scale,
      '--rl-dual-ring-translate': "".concat(translate, "px"),
      '--rl-dual-ring-speed': "".concat(speed, "s"),
      '--rl-dual-ring-border': "".concat(border, "px")
    }, style)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null));
};

 true ? DualRing.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (DualRing);

/***/ }),

/***/ "./node_modules/react-loading-io/dist/esm/DualRing/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-loading-io/dist/esm/DualRing/index.js ***!
  \******************************************************************/
/*! exports provided: DualRing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DualRing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DualRing */ "./node_modules/react-loading-io/dist/esm/DualRing/DualRing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DualRing", function() { return _DualRing__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/react-loading-io/dist/esm/Eclipse/Eclipse.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-loading-io/dist/esm/Eclipse/Eclipse.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./node_modules/react-loading-io/dist/esm/helpers.js");
/* harmony import */ var _eclipse_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eclipse.css */ "./node_modules/react-loading-io/dist/esm/Eclipse/eclipse.css");
/* harmony import */ var _eclipse_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eclipse_css__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Eclipse = function Eclipse(_ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#ED4585' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 200 : _ref$size,
      _ref$speed = _ref.speed,
      speed = _ref$speed === void 0 ? 1 : _ref$speed,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 2 : _ref$width,
      style = _ref.style;
  var scale = size / 200;
  var translate = size * scale;
  var thickness = width * 2;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["clsx"])('rl-eclipse', className),
    style: _objectSpread({
      '--rl-eclipse-size': "".concat(size, "px"),
      '--rl-eclipse-color': color,
      '--rl-eclipse-scale': scale,
      '--rl-eclipse-translate': "".concat(translate, "px"),
      '--rl-eclipse-speed': "".concat(speed, "s"),
      '--rl-eclipse-thickness': "".concat(thickness, "px")
    }, style)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null));
};

 true ? Eclipse.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Eclipse);

/***/ }),

/***/ "./node_modules/react-loading-io/dist/esm/Eclipse/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-loading-io/dist/esm/Eclipse/index.js ***!
  \*****************************************************************/
/*! exports provided: Eclipse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Eclipse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Eclipse */ "./node_modules/react-loading-io/dist/esm/Eclipse/Eclipse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Eclipse", function() { return _Eclipse__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/react-loading-io/dist/esm/Rolling/Rolling.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-loading-io/dist/esm/Rolling/Rolling.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./node_modules/react-loading-io/dist/esm/helpers.js");
/* harmony import */ var _rolling_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rolling.css */ "./node_modules/react-loading-io/dist/esm/Rolling/rolling.css");
/* harmony import */ var _rolling_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_rolling_css__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Rolling = function Rolling(_ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#ED4585' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 200 : _ref$size,
      _ref$speed = _ref.speed,
      speed = _ref$speed === void 0 ? 1 : _ref$speed,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 10 : _ref$width,
      style = _ref.style;
  var scale = size / 200;
  var translate = size * scale;
  var border = width * 2;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["clsx"])('rl-rolling', className),
    style: _objectSpread({
      '--rl-rolling-size': "".concat(size, "px"),
      '--rl-rolling-color': color,
      '--rl-rolling-scale': scale,
      '--rl-rolling-translate': "".concat(translate, "px"),
      '--rl-rolling-speed': "".concat(speed, "s"),
      '--rl-rolling-border': "".concat(border, "px")
    }, style)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null));
};

 true ? Rolling.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Rolling);

/***/ }),

/***/ "./node_modules/react-loading-io/dist/esm/Rolling/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-loading-io/dist/esm/Rolling/index.js ***!
  \*****************************************************************/
/*! exports provided: Rolling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rolling */ "./node_modules/react-loading-io/dist/esm/Rolling/Rolling.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rolling", function() { return _Rolling__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/react-loading-io/dist/esm/Spin/Spin.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-loading-io/dist/esm/Spin/Spin.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./node_modules/react-loading-io/dist/esm/helpers.js");
/* harmony import */ var _spin_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spin.css */ "./node_modules/react-loading-io/dist/esm/Spin/spin.css");
/* harmony import */ var _spin_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_spin_css__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Spin = function Spin(_ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#ED4585' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 200 : _ref$size,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 10 : _ref$width,
      _ref$speed = _ref.speed,
      speed = _ref$speed === void 0 ? 1 : _ref$speed,
      style = _ref.style;
  var scale = size / 200;
  var translate = size * scale;
  var border = width * 4;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["clsx"])('rl-spin', className),
    style: _objectSpread({
      '--rl-spin-size': "".concat(size, "px"),
      '--rl-spin-color': color,
      '--rl-spin-scale': scale,
      '--rl-spin-translate': "".concat(translate, "px"),
      '--rl-spin-speed': "".concat(speed, "s"),
      '--rl-spin-border': "".concat(border, "px")
    }, style)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)));
};

 true ? Spin.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Spin);

/***/ }),

/***/ "./node_modules/react-loading-io/dist/esm/Spin/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-loading-io/dist/esm/Spin/index.js ***!
  \**************************************************************/
/*! exports provided: Spin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spin */ "./node_modules/react-loading-io/dist/esm/Spin/Spin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spin", function() { return _Spin__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/react-loading-io/dist/esm/Spinner/Spinner.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-loading-io/dist/esm/Spinner/Spinner.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./node_modules/react-loading-io/dist/esm/helpers.js");
/* harmony import */ var _spinner_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner.css */ "./node_modules/react-loading-io/dist/esm/Spinner/spinner.css");
/* harmony import */ var _spinner_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_spinner_css__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Spinner = function Spinner(_ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#ED4585' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 200 : _ref$size,
      _ref$speed = _ref.speed,
      speed = _ref$speed === void 0 ? 1 : _ref$speed,
      style = _ref.style;
  var scale = size / 200;
  var translate = size * scale;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["clsx"])('rl-spinner', className),
    style: _objectSpread({
      '--rl-spinner-size': "".concat(size, "px"),
      '--rl-spinner-color': color,
      '--rl-spinner-scale': scale,
      '--rl-spinner-translate': "".concat(translate, "px"),
      '--rl-spinner-speed': "".concat(speed, "s")
    }, style)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null));
};

 true ? Spinner.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./node_modules/react-loading-io/dist/esm/Spinner/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-loading-io/dist/esm/Spinner/index.js ***!
  \*****************************************************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spinner */ "./node_modules/react-loading-io/dist/esm/Spinner/Spinner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return _Spinner__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/react-loading-io/dist/esm/helpers.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-loading-io/dist/esm/helpers.js ***!
  \***********************************************************/
/*! exports provided: convertToPx, rotateDegree, clsx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToPx", function() { return convertToPx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateDegree", function() { return rotateDegree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clsx", function() { return clsx; });
var convertToPx = function convertToPx(size) {
  var px = size * 16;
  return px;
};
var rotateDegree = function rotateDegree(count) {
  var rotate = 360 / count;
  return rotate;
};
var clsx = function clsx() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
};

/***/ }),

/***/ "./node_modules/react-loading-io/dist/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-loading-io/dist/esm/index.js ***!
  \*********************************************************/
/*! exports provided: Ball, DualRing, Eclipse, Rolling, Spinner, Spin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ "./node_modules/react-loading-io/dist/esm/Ball/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ball", function() { return _Ball__WEBPACK_IMPORTED_MODULE_0__["Ball"]; });

/* harmony import */ var _DualRing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DualRing */ "./node_modules/react-loading-io/dist/esm/DualRing/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DualRing", function() { return _DualRing__WEBPACK_IMPORTED_MODULE_1__["DualRing"]; });

/* harmony import */ var _Eclipse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Eclipse */ "./node_modules/react-loading-io/dist/esm/Eclipse/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Eclipse", function() { return _Eclipse__WEBPACK_IMPORTED_MODULE_2__["Eclipse"]; });

/* harmony import */ var _Rolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rolling */ "./node_modules/react-loading-io/dist/esm/Rolling/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rolling", function() { return _Rolling__WEBPACK_IMPORTED_MODULE_3__["Rolling"]; });

/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Spinner */ "./node_modules/react-loading-io/dist/esm/Spinner/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return _Spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"]; });

/* harmony import */ var _Spin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spin */ "./node_modules/react-loading-io/dist/esm/Spin/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spin", function() { return _Spin__WEBPACK_IMPORTED_MODULE_5__["Spin"]; });








/***/ })

})
//# sourceMappingURL=profile.js.a3feac827b90c6c544a5.hot-update.js.map