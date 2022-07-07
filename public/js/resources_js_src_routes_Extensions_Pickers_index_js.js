"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_routes_Extensions_Pickers_index_js"],{

/***/ "./resources/js/src/routes/Extensions/Pickers/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/routes/Extensions/Pickers/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _jumbo_components_PageComponents_PageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@jumbo/components/PageComponents/PageLoader */ "./resources/js/src/@jumbo/components/PageComponents/PageLoader.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Pickers = function Pickers(_ref) {
  var match = _ref.match;
  var requestedUrl = match.url.replace(/\/$/, '');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_jumbo_components_PageComponents_PageLoader__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_3__.Switch, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_3__.Redirect, {
        exact: true,
        from: "".concat(requestedUrl, "/"),
        to: "".concat(requestedUrl, "/date")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, {
        path: "".concat(requestedUrl, "/date"),
        component: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
          return __webpack_require__.e(/*! import() */ "resources_js_src_routes_Extensions_Pickers_Date_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Date */ "./resources/js/src/routes/Extensions/Pickers/Date/index.js"));
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, {
        path: "".concat(requestedUrl, "/time"),
        component: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
          return __webpack_require__.e(/*! import() */ "resources_js_src_routes_Extensions_Pickers_Time_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Time */ "./resources/js/src/routes/Extensions/Pickers/Time/index.js"));
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, {
        path: "".concat(requestedUrl, "/date-time"),
        component: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
          return __webpack_require__.e(/*! import() */ "resources_js_src_routes_Extensions_Pickers_DateTime_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ./DateTime */ "./resources/js/src/routes/Extensions/Pickers/DateTime/index.js"));
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, {
        path: "".concat(requestedUrl, "/color"),
        component: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
          return __webpack_require__.e(/*! import() */ "resources_js_src_routes_Extensions_Pickers_ReactColor_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ReactColor */ "./resources/js/src/routes/Extensions/Pickers/ReactColor/index.js"));
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, {
        component: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
          return __webpack_require__.e(/*! import() */ "resources_js_src_routes_ExtraPages_404_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../ExtraPages/404 */ "./resources/js/src/routes/ExtraPages/404/index.js"));
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pickers);

/***/ })

}]);