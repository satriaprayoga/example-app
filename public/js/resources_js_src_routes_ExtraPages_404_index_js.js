"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_routes_ExtraPages_404_index_js"],{

/***/ "./resources/js/src/routes/ExtraPages/404/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/routes/ExtraPages/404/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _jumbo_utils_IntlMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@jumbo/utils/IntlMessages */ "./resources/js/src/@jumbo/utils/IntlMessages.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  var _searchRoot;

  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    },
    errorNumber: {
      color: theme.palette.text.primary,
      fontWeight: 800,
      lineHeight: 1,
      marginBottom: 30,
      textShadow: '10px 6px 8px hsla(0,0%,45.9%,.8)'
    },
    searchRoot: (_searchRoot = {
      position: 'relative',
      width: 260
    }, _defineProperty(_searchRoot, theme.breakpoints.up('md'), {
      width: 350
    }), _defineProperty(_searchRoot, '& .searchBtn', {
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1
    }), _defineProperty(_searchRoot, '& .MuiInputBase-root', {
      width: '100%'
    }), _defineProperty(_searchRoot, '& .MuiInputBase-input', {
      height: 48,
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      boxSizing: 'border-box',
      padding: '5px 50px 5px 15px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        boxShadow: "".concat((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.primary.main, 0.25), " 0 0 0 0.2rem"),
        borderColor: theme.palette.primary.main
      }
    }), _searchRoot)
  };
});

var Error404 = function Error404() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      fontSize: {
        xs: 100,
        sm: 160
      },
      className: classes.errorNumber,
      children: "404"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      fontSize: {
        xs: 16,
        sm: 24
      },
      mb: 8,
      color: "grey.500",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_jumbo_utils_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: "extraPages.404Msg"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.searchRoot,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
        placeholder: 'Search...',
        inputProps: {
          'aria-label': 'search'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "searchBtn",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__["default"], {})
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      mt: 8,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "contained",
        color: "primary",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_jumbo_utils_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
          id: "extraPages.goHome"
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404);

/***/ })

}]);