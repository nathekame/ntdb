webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./components/profile/profilePic.js":
/*!******************************************!*\
  !*** ./components/profile/profilePic.js ***!
  \******************************************/
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
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-image-crop */ "./node_modules/react-image-crop/dist/ReactCrop.min.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-image-crop/dist/ReactCrop.css */ "./node_modules/react-image-crop/dist/ReactCrop.css");
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fileUtility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fileUtility */ "./components/profile/fileUtility.js");
/* harmony import */ var _utility_axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utility/axios */ "./utility/axios.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! validatorjs */ "./node_modules/validatorjs/src/validator.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(validatorjs__WEBPACK_IMPORTED_MODULE_11__);



var _this = undefined,
    _jsxFileName = "/home/noa/ntdbProject/app/NTDB/components/profile/profilePic.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










 //   const cropper = React.createRef(null);

var ProfilePic = function ProfilePic(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_contexts_profileContext__WEBPACK_IMPORTED_MODULE_3__["ProfileContext"]),
      dispatch = _useContext.dispatch;

  var imagePreviewCanvasRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    profileStep: 7,
    profilePicUrl: '',
    profilePicFile: '',
    crop: {
      // unit: 'px',
      aspect: 1 / 1 //    width: 50,

    }
  }),
      profilePic = _useState[0],
      setProfilePic = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      buttonStateF = _useState2[0],
      setButtonStateF = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      buttonStateB = _useState3[0],
      setButtonStateB = _useState3[1];

  var rules = {
    profilePicUrl: 'required',
    profilePicFile: 'required' //  email: 'required|email',
    //  age: 'min:18'

  };
  var validation = new validatorjs__WEBPACK_IMPORTED_MODULE_11___default.a(profilePic, rules, {
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
  }, [profilePic]);

  var handleImageChange = function handleImageChange(e) {
    e.preventDefault();
    var reader = new FileReader();
    var profilePicFile = e.target.files[0]; //   console.log("this is the imagfe check view ===================>>>>>>>>>>>>>" +profilePicFile);

    reader.onloadend = function () {
      setProfilePic(_objectSpread({}, profilePic, {
        profilePicFile: profilePicFile,
        profilePicUrl: reader.result
      }));
    };

    reader.readAsDataURL(profilePicFile);
  }; // from here


  var handleCrop = function handleCrop(crop, percentCrop) {
    console.log("this is the crop " + JSON.stringify(crop));
    console.log("this is the percent crop " + JSON.stringify(percentCrop)); //onComplete(crop, percentCrop)

    setProfilePic(_objectSpread({}, profilePic, {
      crop: percentCrop
    }));
  };

  var handleImageLoaded = function handleImageLoaded(image) {
    console.log("the image that is loaded" + image);
  };

  var handleCompleteCrop = function handleCompleteCrop(crop, pixelCrop) {
    console.log("the crop and the pixel " + JSON.stringify(crop) + JSON.stringify(pixelCrop));
    var canvasRef = imagePreviewCanvasRef.current;
    var imgSrc = profilePic.profilePicUrl;
    Object(_fileUtility__WEBPACK_IMPORTED_MODULE_9__["image64toCanvasRef"])(canvasRef, imgSrc, crop);
  }; // save the successfully cropped image to state 


  var handleImageSaveWithCrop = function handleImageSaveWithCrop(e) {
    e.preventDefault();
    var canvasRef = imagePreviewCanvasRef.current;
    var imgSrc = profilePic.profilePicUrl;
    var fileExtension = Object(_fileUtility__WEBPACK_IMPORTED_MODULE_9__["extractImageFileExtensionFromBase64"])(imgSrc);
    var imageDate64 = canvasRef.toDataURL('image/' + fileExtension);
    console.log("the profilePicFile extension is this ===>> " + fileExtension);
    var newFileName = "nomalevo." + fileExtension;
    console.log("the new profilePicFile name " + newFileName); // profilePicFile to be uploaded

    var newCroppedFile = Object(_fileUtility__WEBPACK_IMPORTED_MODULE_9__["base64StringtoFile"])(imageDate64, newFileName); //   console.log("this si the final cropped "+JSON.stringify(newCroppedFile));
    //  console.log("this is the imagfe check view cropped profilePicFile ===================>>>>>>>>>>>>>" +newCroppedFile);

    setProfilePic(_objectSpread({}, profilePic, {
      profilePicFile: newCroppedFile
    }));
    var stateObj = {
      profileStep: 8,
      profilePicUrl: profilePic.profilePicUrl,
      profilePicFile: newCroppedFile
    }; //     this.props.fileStateUpdate(profilePic);
    //props.fileStateUpdate(stateObj);
    //download the profilePicFile
    // downloadBase64File(imageDate64, newFileName)
  }; // save the image  to state without cropping it


  var handleImageSaveWithoutCrop = function handleImageSaveWithoutCrop(e) {
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

  var checkToSkipCrop = function checkToSkipCrop() {
    if (profilePic.profilePicUrl) {
      return "inline";
    } else {
      return "none";
    }
  };

  var checkToUpladCropped = function checkToUpladCropped() {
    if (profilePic.crop.height) {
      return "inline";
    } else {
      return "none";
    }
  };

  var styles = {
    // height: '50vh',
    //   minHeight: '93vh'
    width: "200",
    height: "500"
  };
  var conStyle = {
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

  var handleForward = function handleForward(e) {
    var next, go;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleForward$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault(); //   dispatch({type: 'ADD_PROFILE_DATA', payload: profilePic});

            dispatch({
              type: 'ADD_PROFILE_DATA',
              payload: {
                profilePic: profilePic
              }
            });
            next = "F";
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(props.updatestep(next));

          case 5:
            go = _context.sent;
            dispatch({
              type: 'CURRENT_STEP',
              payload: profilePic.profileStep + 1
            });

            if (!go) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", go);

          case 9:
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
              payload: profilePic.profileStep - 1
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
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSaveNow$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //  console.log("i am here to save first foitiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
            e.preventDefault(); // const data =  {...profilePic,  profileStep: profilePic.profileStep+1};

            dispatch({
              type: 'CLEAR_CONTEXT'
            });
            Object(_utility_logout__WEBPACK_IMPORTED_MODULE_6__["default"])(); //logout();

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx("div", {
    className: "pagegrid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 5
    }
  }, __jsx(_layouts_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "innergrid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "profile-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 13
    }
  }, "Profile Pic"), __jsx("div", {
    className: "one-column-row",
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
  }, __jsx("div", {
    style: conStyle.notCropped,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 21
    }
  }, "Drag you mouse over the image to crop or click the button below to skip"), __jsx("input", {
    type: "file",
    id: "profilePic",
    onChange: function onChange(e) {
      return handleImageChange(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "two-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 19
    }
  }, __jsx(react_image_crop__WEBPACK_IMPORTED_MODULE_7___default.a, {
    src: profilePic.profilePicUrl,
    onImageLoaded: handleImageLoaded,
    onComplete: handleCompleteCrop,
    circularCrop: "true",
    crop: profilePic.crop,
    onChange: handleCrop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 23
    }
  }), __jsx("button", {
    style: conStyle.notCropped,
    onClick: handleImageSaveWithoutCrop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 23
    }
  }, " Skip Cropping And Upload Image ")), __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 19
    }
  }, __jsx("canvas", {
    ref: imagePreviewCanvasRef,
    style: styles,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 21
    }
  }), __jsx("button", {
    style: conStyle.cropped,
    onClick: handleImageSaveWithCrop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 21
    }
  }, " Upload  Cropped Image "))), __jsx("div", {
    className: "two-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
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
      lineNumber: 363,
      columnNumber: 26
    }
  }, "Back")), __jsx("div", {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
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
      lineNumber: 367,
      columnNumber: 26
    }
  }, "Next"))), __jsx("div", {
    className: "one-column-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "column componentFooter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 23
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 26
    }
  }, "6/6"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfilePic);

/***/ })

})
//# sourceMappingURL=profile.js.fa4d8874f1b211db576d.hot-update.js.map