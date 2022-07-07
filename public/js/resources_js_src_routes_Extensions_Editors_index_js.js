"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_routes_Extensions_Editors_index_js"],{

/***/ "./resources/js/src/routes/Extensions/Editors/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/routes/Extensions/Editors/index.js ***!
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






var Editors = function Editors(_ref) {
  var match = _ref.match;
  var requestedUrl = match.url.replace(/\/$/, '');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_jumbo_components_PageComponents_PageLoader__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_3__.Switch, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_3__.Redirect, {
        exact: true,
        from: "".concat(requestedUrl, "/"),
        to: "".concat(requestedUrl, "/ck")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, {
        path: "".concat(requestedUrl, "/ck"),
        component: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
          return __webpack_require__.e(/*! import() */ "resources_js_src_routes_Extensions_Editors_CkEditor_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ./CkEditor */ "./resources/js/src/routes/Extensions/Editors/CkEditor/index.js"));
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, {
        path: "".concat(requestedUrl, "/wysiwyg"),
        component: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
          return __webpack_require__.e(/*! import() */ "resources_js_src_routes_Extensions_Editors_WysiwygEditor_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ./WysiwygEditor */ "./resources/js/src/routes/Extensions/Editors/WysiwygEditor/index.js"));
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, {
        component: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
          return __webpack_require__.e(/*! import() */ "resources_js_src_routes_ExtraPages_404_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../ExtraPages/404 */ "./resources/js/src/routes/ExtraPages/404/index.js"));
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editors);

/***/ })

}]);