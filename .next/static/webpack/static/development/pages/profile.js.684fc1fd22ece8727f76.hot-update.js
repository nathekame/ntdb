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
/* harmony import */ var _layouts_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layouts/navbar */ "./components/layouts/navbar.js");
/* harmony import */ var _utility_axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utility/axios */ "./utility/axios.js");
/* harmony import */ var _componentUtility_composeApiData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componentUtility/composeApiData */ "./components/componentUtility/composeApiData.js");



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

            dataCompose = _componentUtility_composeApiData__WEBPACK_IMPORTED_MODULE_9__["default"].composeFullProfileData(dataToCompose, filesToCompose); //  console.log("this is the data going out "+JSON.stringify(data));
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
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utility_axios__WEBPACK_IMPORTED_MODULE_8__["default"].profilePost(dataCompose));

          case 9:
            api = _context.sent;
            console.log("this is the status " + api.status);

            if (api.data === "error") {
              console.log("the log is error");
              setLoading(false);
              router.push('/profile');
            }

            if (api.status === 201) {
              console.log("the log is success" + api.status);
              router.push('/success');
              setLoading(false);
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
        lineNumber: 178,
        columnNumber: 5
      }
    }, "this is the loading...");
  } else {
    return __jsx("div", {
      className: "pagegrid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 5
      }
    }, __jsx(_layouts_navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 7
      }
    }), __jsx("div", {
      className: "innergrid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "profile-form",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "profileGroup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "one-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "profilePicPreview",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
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
        lineNumber: 201,
        columnNumber: 64
      }
    })))), __jsx("div", {
      className: "one-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "profilePicPreview",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 29
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 32
      }
    }, "My Complete Profile"))))), __jsx("div", {
      className: "profileGroup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 21
      }
    }, "Bio Information"), __jsx("div", {
      className: "three-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "firstName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 27
      }
    }, "First Name"), __jsx("h4", {
      id: "firstName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 27
      }
    }, myProfileDetails.firstName)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "otherName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 27
      }
    }, "Other Name"), __jsx("h4", {
      id: "otherName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 27
      }
    }, myProfileDetails.otherName)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "lastName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 27
      }
    }, "Last Name"), __jsx("h4", {
      id: "lastName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 27
      }
    }, myProfileDetails.lastName))), __jsx("div", {
      className: "three-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "gender",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 27
      }
    }, "Gender"), __jsx("h4", {
      id: "gender",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 27
      }
    }, myProfileDetails.gender)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "dob",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 27
      }
    }, "Date Of Birth"), __jsx("h4", {
      id: "dob",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 27
      }
    }, myProfileDetails.dob)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: "placeOfBirth",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 27
      }
    }, "Place Of Birth"), __jsx("h4", {
      id: "placeOfBirth",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 27
      }
    }, myProfileDetails.placeOfBirth)))), __jsx("div", {
      className: "profileGroup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 17
      }
    }, "Contact Information"), __jsx("div", {
      className: "two-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "stateOfOrigin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 31
      }
    }, "State of Origin"), __jsx("h4", {
      id: "stateOfOrigin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 31
      }
    }, myProfileDetails.stateOfOrigin)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "lga",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 31
      }
    }, "LGA"), __jsx("h4", {
      id: "lga",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 31
      }
    }, myProfileDetails.lga))), __jsx("div", {
      className: "two-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 19
      }
    }, __jsx("label", {
      htmlFor: "controlNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 31
      }
    }, "Control Number"), __jsx("h4", {
      id: "controlNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 31
      }
    }, myProfileDetails.controlNumber)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 19
      }
    }, __jsx("label", {
      htmlFor: "mobileNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 31
      }
    }, "Mobile Number"), __jsx("h4", {
      id: "mobileNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 31
      }
    }, myProfileDetails.mobileNumber))), __jsx("div", {
      className: "one-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 19
      }
    }, __jsx("label", {
      htmlFor: "address",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 31
      }
    }, "Address"), __jsx("h4", {
      id: "controlNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 31
      }
    }, myProfileDetails.address)))), __jsx("div", {
      className: "profileGroup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 15
      }
    }, "Next Of Kin Information"), __jsx("div", {
      className: "two-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 24
      }
    }, __jsx("label", {
      htmlFor: "fullName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 31
      }
    }, "Full Name"), __jsx("h4", {
      id: "fullName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 31
      }
    }, myProfileDetails.fullName)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 24
      }
    }, __jsx("label", {
      htmlFor: "relationship",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 31
      }
    }, "Relationship"), __jsx("h4", {
      id: "relationship",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 31
      }
    }, myProfileDetails.relationship))), __jsx("div", {
      className: "two-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 19
      }
    }, __jsx("label", {
      htmlFor: "emailAddress",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 27
      }
    }, "Email Address"), __jsx("h4", {
      id: "emailAddress",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 27
      }
    }, myProfileDetails.emailAddress)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 20
      }
    }, __jsx("label", {
      htmlFor: "mobileNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 25
      }
    }, "Mobile Number"), __jsx("h4", {
      id: "mobileNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 25
      }
    }, myProfileDetails.mobileNumber))), __jsx("div", {
      className: "one-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 20
      }
    }, __jsx("label", {
      htmlFor: "address",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 25
      }
    }, "Address"), __jsx("h4", {
      id: "address",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 25
      }
    }, myProfileDetails.address)))), __jsx("div", {
      className: "profileGroup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 16
      }
    }, "Employment information"), __jsx("div", {
      className: "two-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 16
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "controlNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 29
      }
    }, "Control Number"), __jsx("h4", {
      id: "controlNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 29
      }
    }, myProfileDetails.controlNumber)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "highestQualification",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 29
      }
    }, "Highest Qualification"), __jsx("h4", {
      id: "highestQualification",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 29
      }
    }, myProfileDetails.highestQualification))), __jsx("div", {
      className: "two-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "lgea",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 29
      }
    }, "LGEA"), __jsx("h4", {
      id: "lgea",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 29
      }
    }, myProfileDetails.lgea)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "station",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 29
      }
    }, "Station"), __jsx("h4", {
      id: "station",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 29
      }
    }, myProfileDetails.station))), __jsx("div", {
      className: "three-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "dateOfFirstAppointment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 29
      }
    }, "Highest Qualification"), __jsx("h4", {
      id: "dateOfFirstAppointment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 29
      }
    }, myProfileDetails.dateOfFirstAppointment)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "dateOfConfirmation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 29
      }
    }, "Date Of Confirmation"), __jsx("h4", {
      id: "dateOfConfirmation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 29
      }
    }, myProfileDetails.dateOfConfirmation)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 23
      }
    }, __jsx("label", {
      htmlFor: "dateOfLastPromotion",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 29
      }
    }, "Date Of Last Promotion"), __jsx("h4", {
      id: "dateOfLastPromotion",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 29
      }
    }, myProfileDetails.dateOfLastPromotion)))), __jsx("div", {
      className: "profileGroup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 16
      }
    }, "Payment Information"), __jsx("div", {
      className: "four-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 31
      }
    }, __jsx("label", {
      htmlFor: "bankName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 33
      }
    }, "Bank Name"), __jsx("h4", {
      id: "bankName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 33
      }
    }, myProfileDetails.bankName)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 31
      }
    }, __jsx("label", {
      htmlFor: "accountName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 33
      }
    }, "Account Name"), __jsx("h4", {
      id: "accountName",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 33
      }
    }, myProfileDetails.accountName)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 31
      }
    }, __jsx("label", {
      htmlFor: "accountNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 33
      }
    }, "Account Number"), __jsx("h4", {
      id: "accountNumber",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 33
      }
    }, myProfileDetails.accountNumber)), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 31
      }
    }, __jsx("label", {
      htmlFor: "bvn",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 33
      }
    }, "BVN"), __jsx("h4", {
      id: "bvn",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 33
      }
    }, myProfileDetails.bvn)))), __jsx("div", {
      className: "two-column-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
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
        lineNumber: 407,
        columnNumber: 26
      }
    }, " Back ")), __jsx("div", {
      className: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 23
      }
    }, __jsx("button", {
      size: "small",
      color: "primary",
      onClick: handleSaveNow,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 26
      }
    }, "My Details Are Fine Save Now"))))));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Confirm);

/***/ })

})
//# sourceMappingURL=profile.js.684fc1fd22ece8727f76.hot-update.js.map