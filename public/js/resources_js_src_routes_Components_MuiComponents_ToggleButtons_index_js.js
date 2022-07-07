(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_routes_Components_MuiComponents_ToggleButtons_index_js"],{

/***/ "./node_modules/@material-ui/core/esm/Breadcrumbs/BreadcrumbCollapsed.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Breadcrumbs/BreadcrumbCollapsed.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _internal_svg_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/svg-icons/MoreHoriz */ "./node_modules/@material-ui/core/esm/internal/svg-icons/MoreHoriz.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js");









var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.grey[700],
      borderRadius: 2,
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: theme.palette.grey[200]
      },
      '&:active': {
        boxShadow: theme.shadows[0],
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_3__.emphasize)(theme.palette.grey[200], 0.12)
      }
    },
    icon: {
      width: 24,
      height: 16
    }
  };
};
/**
 * @ignore - internal component.
 */


function BreadcrumbCollapsed(props) {
  var classes = props.classes,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: "li",
    className: classes.root,
    focusRipple: true
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.icon
  }));
}

 true ? BreadcrumbCollapsed.propTypes = {
  /**
   * @ignore
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object.isRequired)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'PrivateBreadcrumbCollapsed'
})(BreadcrumbCollapsed));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Breadcrumbs/Breadcrumbs.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Breadcrumbs/Breadcrumbs.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "styles": () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _BreadcrumbCollapsed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BreadcrumbCollapsed */ "./node_modules/@material-ui/core/esm/Breadcrumbs/BreadcrumbCollapsed.js");










var styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the ol element. */
  ol: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    listStyle: 'none'
  },

  /* Styles applied to the li element. */
  li: {},

  /* Styles applied to the separator element. */
  separator: {
    display: 'flex',
    userSelect: 'none',
    marginLeft: 8,
    marginRight: 8
  }
};

function insertSeparators(items, className, separator) {
  return items.reduce(function (acc, current, index) {
    if (index < items.length - 1) {
      acc = acc.concat(current, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("li", {
        "aria-hidden": true,
        key: "separator-".concat(index),
        className: className
      }, separator));
    } else {
      acc.push(current);
    }

    return acc;
  }, []);
}

var Breadcrumbs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Breadcrumbs(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'nav' : _props$component,
      _props$expandText = props.expandText,
      expandText = _props$expandText === void 0 ? 'Show path' : _props$expandText,
      _props$itemsAfterColl = props.itemsAfterCollapse,
      itemsAfterCollapse = _props$itemsAfterColl === void 0 ? 1 : _props$itemsAfterColl,
      _props$itemsBeforeCol = props.itemsBeforeCollapse,
      itemsBeforeCollapse = _props$itemsBeforeCol === void 0 ? 1 : _props$itemsBeforeCol,
      _props$maxItems = props.maxItems,
      maxItems = _props$maxItems === void 0 ? 8 : _props$maxItems,
      _props$separator = props.separator,
      separator = _props$separator === void 0 ? '/' : _props$separator,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "classes", "className", "component", "expandText", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "separator"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(false),
      expanded = _React$useState[0],
      setExpanded = _React$useState[1];

  var renderItemsBeforeAndAfter = function renderItemsBeforeAndAfter(allItems) {
    var handleClickExpand = function handleClickExpand(event) {
      setExpanded(true); // The clicked element received the focus but gets removed from the DOM.
      // Let's keep the focus in the component after expanding.

      var focusable = event.currentTarget.parentNode.querySelector('a[href],button,[tabindex]');

      if (focusable) {
        focusable.focus();
      }
    }; // This defends against someone passing weird input, to ensure that if all
    // items would be shown anyway, we just show all items without the EllipsisItem


    if (itemsBeforeCollapse + itemsAfterCollapse >= allItems.length) {
      if (true) {
        console.error(['Material-UI: You have provided an invalid combination of props to the Breadcrumbs.', "itemsAfterCollapse={".concat(itemsAfterCollapse, "} + itemsBeforeCollapse={").concat(itemsBeforeCollapse, "} >= maxItems={").concat(maxItems, "}")].join('\n'));
      }

      return allItems;
    }

    return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allItems.slice(0, itemsBeforeCollapse)), [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_BreadcrumbCollapsed__WEBPACK_IMPORTED_MODULE_6__["default"], {
      "aria-label": expandText,
      key: "ellipsis",
      onClick: handleClickExpand
    })], (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allItems.slice(allItems.length - itemsAfterCollapse, allItems.length)));
  };

  var allItems = react__WEBPACK_IMPORTED_MODULE_3__.Children.toArray(children).filter(function (child) {
    if (true) {
      if ((0,react_is__WEBPACK_IMPORTED_MODULE_4__.isFragment)(child)) {
        console.error(["Material-UI: The Breadcrumbs component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.isValidElement(child);
  }).map(function (child, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("li", {
      className: classes.li,
      key: "child-".concat(index)
    }, child);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    component: Component,
    color: "textSecondary",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className)
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("ol", {
    className: classes.ol
  }, insertSeparators(expanded || maxItems && allItems.length <= maxItems ? allItems : renderItemsBeforeAndAfter(allItems), classes.separator, separator)));
});
 true ? Breadcrumbs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The breadcrumb children.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().elementType),

  /**
   * Override the default label for the expand button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  expandText: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),

  /**
   * If max items is exceeded, the number of items to show after the ellipsis.
   */
  itemsAfterCollapse: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),

  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   */
  itemsBeforeCollapse: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),

  /**
   * Specifies the maximum number of breadcrumbs to display. When there are more
   * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
   * will be shown, with an ellipsis in between.
   */
  maxItems: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),

  /**
   * Custom separator node.
   */
  separator: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__["default"])(styles, {
  name: 'MuiBreadcrumbs'
})(Breadcrumbs));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/MoreHoriz.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/MoreHoriz.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreHoriz'));

/***/ }),

/***/ "./node_modules/@material-ui/icons/Check.js":
/*!**************************************************!*\
  !*** ./node_modules/@material-ui/icons/Check.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/FormatAlignCenter.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/icons/FormatAlignCenter.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"
}), 'FormatAlignCenter');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/FormatAlignJustify.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/icons/FormatAlignJustify.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"
}), 'FormatAlignJustify');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/FormatAlignLeft.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/icons/FormatAlignLeft.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"
}), 'FormatAlignLeft');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/FormatAlignRight.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/icons/FormatAlignRight.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"
}), 'FormatAlignRight');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/FormatBold.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/FormatBold.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
}), 'FormatBold');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/FormatColorFill.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/icons/FormatColorFill.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
  d: "M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z"
}), /*#__PURE__*/_react.default.createElement("path", {
  fillOpacity: ".36",
  d: "M0 20h24v4H0z"
})), 'FormatColorFill');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/FormatItalic.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/icons/FormatItalic.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
}), 'FormatItalic');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/FormatUnderlined.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/icons/FormatUnderlined.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"
}), 'FormatUnderlined');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Laptop.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Laptop.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
}), 'Laptop');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/PhoneAndroid.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/icons/PhoneAndroid.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"
}), 'PhoneAndroid');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Tv.js":
/*!***********************************************!*\
  !*** ./node_modules/@material-ui/icons/Tv.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"
}), 'Tv');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/ViewList.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/ViewList.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"
}), 'ViewList');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/ViewModule.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/ViewModule.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"
}), 'ViewModule');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/ViewQuilt.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/ViewQuilt.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"
}), 'ViewQuilt');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/ToggleButtonGroup.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/ToggleButtonGroup/ToggleButtonGroup.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "styles": () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _isValueSelected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isValueSelected */ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/isValueSelected.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      flexDirection: 'column'
    },

    /* Styles applied to the children. */
    grouped: {},

    /* Styles applied to the children if `orientation="horizontal"`. */
    groupedHorizontal: {
      '&:not(:first-child)': {
        marginLeft: -1,
        borderLeft: '1px solid transparent',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      '&:not(:last-child)': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }
    },

    /* Styles applied to the children if `orientation="vertical"`. */
    groupedVertical: {
      '&:not(:first-child)': {
        marginTop: -1,
        borderTop: '1px solid transparent',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      },
      '&:not(:last-child)': {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }
    }
  };
};
var ToggleButtonGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function ToggleButton(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$exclusive = props.exclusive,
      exclusive = _props$exclusive === void 0 ? false : _props$exclusive,
      onChange = props.onChange,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      value = props.value,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "exclusive", "onChange", "orientation", "size", "value"]);

  var handleChange = function handleChange(event, buttonValue) {
    if (!onChange) {
      return;
    }

    var index = value && value.indexOf(buttonValue);
    var newValue;

    if (value && index >= 0) {
      newValue = value.slice();
      newValue.splice(index, 1);
    } else {
      newValue = value ? value.concat(buttonValue) : [buttonValue];
    }

    onChange(event, newValue);
  };

  var handleExclusiveChange = function handleExclusiveChange(event, buttonValue) {
    if (!onChange) {
      return;
    }

    onChange(event, value === buttonValue ? null : buttonValue);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "group",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, orientation === 'vertical' && classes.vertical),
    ref: ref
  }, other), react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(child)) {
      return null;
    }

    if (true) {
      if ((0,react_is__WEBPACK_IMPORTED_MODULE_3__.isFragment)(child)) {
        console.error(["Material-UI: The ToggleButtonGroup component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(child, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.grouped, classes["grouped".concat((0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(orientation))], child.props.className),
      onChange: exclusive ? handleExclusiveChange : handleChange,
      selected: child.props.selected === undefined ? (0,_isValueSelected__WEBPACK_IMPORTED_MODULE_6__["default"])(child.props.value, value) : child.props.selected,
      size: child.props.size || size
    });
  }));
});
 true ? ToggleButtonGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the button.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),

  /**
   * If `true`, only allow one of the child ToggleButton values to be selected.
   */
  exclusive: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {any} value of the selected buttons. When `exclusive` is true
   * this is a single value; when false an array of selected values. If no value
   * is selected and `exclusive` is true the value is null; when false an empty array.
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * The group orientation (layout flow direction).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(['horizontal', 'vertical']),

  /**
   * The size of the buttons.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(['large', 'medium', 'small']),

  /**
   * The currently selected value within the group or an array of selected
   * values when `exclusive` is false.
   *
   * The value must have reference equality with the option in order to be selected.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiToggleButtonGroup'
})(ToggleButtonGroup));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/isValueSelected.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/ToggleButtonGroup/isValueSelected.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValueSelected)
/* harmony export */ });
// Determine if the toggle button value matches, or is contained in, the
// candidate group value.
function isValueSelected(value, candidate) {
  if (candidate === undefined || value === undefined) {
    return false;
  }

  if (Array.isArray(candidate)) {
    return candidate.indexOf(value) >= 0;
  }

  return value === candidate;
}

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/ToggleButton/ToggleButton.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/ToggleButton/ToggleButton.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "styles": () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");


// @inheritedComponent ButtonBase






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.button, {
      boxSizing: 'border-box',
      borderRadius: theme.shape.borderRadius,
      padding: 11,
      border: "1px solid ".concat((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.action.active, 0.12)),
      color: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.action.active, 0.38),
      '&$selected': {
        color: theme.palette.action.active,
        backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.action.active, 0.12),
        '&:hover': {
          backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.action.active, 0.15)
        },
        '& + &': {
          borderLeft: 0,
          marginLeft: 0
        }
      },
      '&$disabled': {
        color: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.action.disabled, 0.12)
      },
      '&:hover': {
        textDecoration: 'none',
        // Reset on mouse devices
        backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.text.primary, 0.05),
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      }
    }),

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {},

    /* Styles applied to the `label` wrapper element. */
    label: {
      width: '100%',
      // Ensure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: 7,
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {
      padding: 15,
      fontSize: theme.typography.pxToRem(15)
    }
  };
};
var ToggleButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function ToggleButton(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      onChange = props.onChange,
      onClick = props.onClick,
      selected = props.selected,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      value = props.value,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "classes", "className", "disabled", "disableFocusRipple", "onChange", "onClick", "selected", "size", "value"]);

  var handleChange = function handleChange(event) {
    if (onClick) {
      onClick(event, value);

      if (event.isDefaultPrevented()) {
        return;
      }
    }

    if (onChange) {
      onChange(event, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className, disabled && classes.disabled, selected && classes.selected, size !== 'medium' && classes["size".concat((0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(size))]),
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    ref: ref,
    onClick: handleChange,
    onChange: onChange,
    value: value,
    "aria-pressed": selected
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: classes.label
  }, children));
});
 true ? ToggleButton.propTypes = {
  /**
   * The content of the button.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node.isRequired),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * @ignore
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * @ignore
   */
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * If `true`, the button will be rendered in an active state.
   */
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * @ignore
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(['small', 'medium', 'large']),

  /**
   * The value to associate with the button when selected in a
   * ToggleButtonGroup.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any.isRequired)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiToggleButton'
})(ToggleButton));

/***/ }),

/***/ "./resources/js/src/@jumbo/components/PageComponents/PageBreadcrumbs/index.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/@jumbo/components/PageComponents/PageBreadcrumbs/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Breadcrumbs/Breadcrumbs.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["items"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
  return {
    textSm: {
      fontSize: 12
    },
    linkBlock: {
      display: 'block',
      color: 'inherit'
    }
  };
});

var PageBreadcrumbs = function PageBreadcrumbs(_ref) {
  var items = _ref.items,
      rest = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "bread-crumbs",
    "aria-label": "breadcrumb {...rest}",
    children: items.map(function (item, index) {
      return item.isActive ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.textSm,
        color: "textPrimary",
        children: item.label
      }, index) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.textSm, classes.linkBlock),
        color: "inherit",
        to: item.link || '/',
        children: item.label
      }, index);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageBreadcrumbs);

/***/ }),

/***/ "./resources/js/src/@jumbo/components/PageComponents/PageHeader.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/@jumbo/components/PageComponents/PageHeader.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["heading", "breadcrumbComponent", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return {
    pageHeaderRoot: _defineProperty({
      display: 'flex',
      flexDirection: 'column'
    }, theme.breakpoints.up('sm'), {
      alignItems: 'center',
      flexDirection: 'row'
    }),
    titleRoot: _defineProperty({}, theme.breakpoints.down('xs'), {
      marginBottom: 10
    })
  };
});

var PageHeader = function PageHeader(_ref) {
  var heading = _ref.heading,
      breadcrumbComponent = _ref.breadcrumbComponent,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.pageHeaderRoot, 'page-header'),
    mb: {
      xs: 5,
      md: 6,
      lg: 8
    }
  }, rest), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
      component: "div",
      variant: "h1",
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.titleRoot, 'title'),
      children: heading
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ml: {
        sm: 'auto'
      },
      children: breadcrumbComponent
    }), children]
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

/***/ }),

/***/ "./resources/js/src/@jumbo/components/PageComponents/index.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/@jumbo/components/PageComponents/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorematComponentDemo": () => (/* reexport safe */ _layouts_CorematComponentDemo__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "MuiComponentDemo": () => (/* reexport safe */ _layouts_MuiComponentDemo__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "PageBreadcrumbs": () => (/* reexport safe */ _PageBreadcrumbs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "PageHeader": () => (/* reexport safe */ _PageHeader__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PageHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageHeader */ "./resources/js/src/@jumbo/components/PageComponents/PageHeader.js");
/* harmony import */ var _PageBreadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageBreadcrumbs */ "./resources/js/src/@jumbo/components/PageComponents/PageBreadcrumbs/index.js");
/* harmony import */ var _layouts_CorematComponentDemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/CorematComponentDemo */ "./resources/js/src/@jumbo/components/PageComponents/layouts/CorematComponentDemo.js");
/* harmony import */ var _layouts_MuiComponentDemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/MuiComponentDemo */ "./resources/js/src/@jumbo/components/PageComponents/layouts/MuiComponentDemo.js");






/***/ }),

/***/ "./resources/js/src/@jumbo/components/PageComponents/layouts/ComponentsDemo.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/@jumbo/components/PageComponents/layouts/ComponentsDemo.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Hidden/Hidden.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _PageContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageContainer */ "./resources/js/src/@jumbo/components/PageComponents/layouts/PageContainer.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  var _contentArea;

  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    contentArea: (_contentArea = {
      width: '100%'
    }, _defineProperty(_contentArea, theme.breakpoints.up('sm'), {
      paddingRight: theme.typography.pxToRem(30),
      width: "calc(100% - ".concat(theme.typography.pxToRem(175), ")")
    }), _defineProperty(_contentArea, theme.breakpoints.up('lg'), {
      paddingRight: theme.typography.pxToRem(54)
    }), _contentArea),
    contentSidebar: {
      width: theme.typography.pxToRem(175),
      height: "calc(100vh - ".concat(theme.typography.pxToRem(102), ")"),
      position: 'sticky',
      top: 30,
      overflowY: 'auto',
      flexShrink: 0
    }
  };
});

var ComponentsDemo = function ComponentsDemo(_ref) {
  var pageTitle = _ref.pageTitle,
      menus = _ref.menus,
      breadcrumbs = _ref.breadcrumbs,
      children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PageContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    heading: pageTitle,
    breadcrumbs: breadcrumbs,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.root,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: classes.contentArea,
        children: children
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
        xsDown: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: classes.contentSidebar,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
            component: "h4",
            variant: "h4",
            children: "Contents"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: menus.map(function (menu, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
                dense: true,
                button: true,
                component: "a",
                href: "#".concat(menu.link),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  primary: menu.label
                })
              }, index);
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentsDemo);

/***/ }),

/***/ "./resources/js/src/@jumbo/components/PageComponents/layouts/CorematComponentDemo.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/@jumbo/components/PageComponents/layouts/CorematComponentDemo.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _coremat_CmtCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@coremat/CmtCard */ "./resources/js/src/@coremat/CmtCard/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./resources/js/src/@jumbo/components/PageComponents/index.js");
/* harmony import */ var _GridContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../GridContainer */ "./resources/js/src/@jumbo/components/GridContainer/index.js");
/* harmony import */ var _PageContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageContainer */ "./resources/js/src/@jumbo/components/PageComponents/layouts/PageContainer.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var CorematComponentDemo = function CorematComponentDemo(_ref) {
  var SourceCodeComponent = _ref.SourceCodeComponent,
      SettingsComponent = _ref.SettingsComponent,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PageContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_GridContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: true,
        xs: 12,
        md: 7,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.PageHeader, {
          heading: "Preview"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
          mb: 8,
          children: children
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coremat_CmtCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          children: SourceCodeComponent
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: true,
        xs: 12,
        md: 5,
        children: SettingsComponent
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CorematComponentDemo);

/***/ }),

/***/ "./resources/js/src/@jumbo/components/PageComponents/layouts/MuiComponentDemo.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/@jumbo/components/PageComponents/layouts/MuiComponentDemo.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ComponentsDemo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentsDemo */ "./resources/js/src/@jumbo/components/PageComponents/layouts/ComponentsDemo.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var MuiComponentDemo = function MuiComponentDemo(_ref) {
  var pageTitle = _ref.pageTitle,
      menus = _ref.menus,
      children = _ref.children;
  var breadcrumbs = [{
    label: 'Home',
    link: '/'
  }, {
    label: 'Material UI Components',
    link: '/components/mui'
  }, {
    label: pageTitle,
    isActive: true
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ComponentsDemo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageTitle: pageTitle,
    breadcrumbs: breadcrumbs,
    menus: menus,
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MuiComponentDemo);

/***/ }),

/***/ "./resources/js/src/@jumbo/components/PageComponents/layouts/PageContainer.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/@jumbo/components/PageComponents/layouts/PageContainer.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./resources/js/src/@jumbo/components/PageComponents/index.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/Slide.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var useStyles = (0,_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
  return {
    pageFull: {
      width: '100%'
    }
  };
});

var PageContainer = function PageContainer(_ref) {
  var heading = _ref.heading,
      breadcrumbs = _ref.breadcrumbs,
      children = _ref.children,
      className = _ref.className,
      restProps = _ref.restProps;
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "in": true,
    direction: "up",
    mountOnEnter: true,
    unmountOnExit: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.pageFull, className)
    }, restProps), {}, {
      children: [(heading || breadcrumbs) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.PageHeader, {
        heading: heading,
        breadcrumbComponent: breadcrumbs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.PageBreadcrumbs, {
          items: breadcrumbs
        })
      }), children]
    }))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageContainer);

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/CustomizedDividers.js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/CustomizedDividers.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomizedDividers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_icons_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/FormatAlignLeft */ "./node_modules/@material-ui/icons/FormatAlignLeft.js");
/* harmony import */ var _material_ui_icons_FormatAlignCenter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/FormatAlignCenter */ "./node_modules/@material-ui/icons/FormatAlignCenter.js");
/* harmony import */ var _material_ui_icons_FormatAlignRight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/FormatAlignRight */ "./node_modules/@material-ui/icons/FormatAlignRight.js");
/* harmony import */ var _material_ui_icons_FormatAlignJustify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/FormatAlignJustify */ "./node_modules/@material-ui/icons/FormatAlignJustify.js");
/* harmony import */ var _material_ui_icons_FormatBold__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/FormatBold */ "./node_modules/@material-ui/icons/FormatBold.js");
/* harmony import */ var _material_ui_icons_FormatItalic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/FormatItalic */ "./node_modules/@material-ui/icons/FormatItalic.js");
/* harmony import */ var _material_ui_icons_FormatUnderlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/FormatUnderlined */ "./node_modules/@material-ui/icons/FormatUnderlined.js");
/* harmony import */ var _material_ui_icons_FormatColorFill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/FormatColorFill */ "./node_modules/@material-ui/icons/FormatColorFill.js");
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ArrowDropDown */ "./node_modules/@material-ui/icons/ArrowDropDown.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/ToggleButton */ "./node_modules/@material-ui/lab/esm/ToggleButton/ToggleButton.js");
/* harmony import */ var _material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/ToggleButtonGroup */ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/ToggleButtonGroup.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    paper: {
      display: 'flex',
      border: "1px solid ".concat(theme.palette.divider),
      flexWrap: 'wrap'
    },
    divider: {
      margin: theme.spacing(1, 0.5)
    }
  };
});
var StyledToggleButtonGroup = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return {
    grouped: {
      margin: theme.spacing(0.5),
      border: 'none',
      '&:not(:first-child)': {
        borderRadius: theme.shape.borderRadius
      },
      '&:first-child': {
        borderRadius: theme.shape.borderRadius
      }
    }
  };
})(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_4__["default"]);
function CustomizedDividers() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState('left'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      alignment = _React$useState2[0],
      setAlignment = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(function () {
    return ['italic'];
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      formats = _React$useState4[0],
      setFormats = _React$useState4[1];

  var handleFormat = function handleFormat(event, newFormats) {
    setFormats(newFormats);
  };

  var handleAlignment = function handleAlignment(event, newAlignment) {
    setAlignment(newAlignment);
  };

  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
      elevation: 0,
      className: classes.paper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(StyledToggleButtonGroup, {
        size: "small",
        value: alignment,
        exclusive: true,
        onChange: handleAlignment,
        "aria-label": "text alignment",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "left",
          "aria-label": "left aligned",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_7__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "center",
          "aria-label": "centered",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_FormatAlignCenter__WEBPACK_IMPORTED_MODULE_8__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "right",
          "aria-label": "right aligned",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_FormatAlignRight__WEBPACK_IMPORTED_MODULE_9__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "justify",
          "aria-label": "justified",
          disabled: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_FormatAlignJustify__WEBPACK_IMPORTED_MODULE_10__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__["default"], {
        flexItem: true,
        orientation: "vertical",
        className: classes.divider
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(StyledToggleButtonGroup, {
        size: "small",
        value: formats,
        onChange: handleFormat,
        "aria-label": "text formatting",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "bold",
          "aria-label": "bold",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_FormatBold__WEBPACK_IMPORTED_MODULE_12__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "italic",
          "aria-label": "italic",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_FormatItalic__WEBPACK_IMPORTED_MODULE_13__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "underlined",
          "aria-label": "underlined",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_FormatUnderlined__WEBPACK_IMPORTED_MODULE_14__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "color",
          "aria-label": "color",
          disabled: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_FormatColorFill__WEBPACK_IMPORTED_MODULE_15__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_16__["default"], {})]
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/StandaloneToggleButton.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/StandaloneToggleButton.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StandaloneToggleButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/ToggleButton */ "./node_modules/@material-ui/lab/esm/ToggleButton/ToggleButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function StandaloneToggleButton() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selected = _React$useState2[0],
      setSelected = _React$useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "check",
    selected: selected,
    onChange: function onChange() {
      setSelected(!selected);
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3__["default"], {})
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/ToggleButtonNotEmpty.js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/ToggleButtonNotEmpty.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleButtonNotEmpty)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_icons_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/FormatAlignLeft */ "./node_modules/@material-ui/icons/FormatAlignLeft.js");
/* harmony import */ var _material_ui_icons_FormatAlignCenter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/FormatAlignCenter */ "./node_modules/@material-ui/icons/FormatAlignCenter.js");
/* harmony import */ var _material_ui_icons_FormatAlignRight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/FormatAlignRight */ "./node_modules/@material-ui/icons/FormatAlignRight.js");
/* harmony import */ var _material_ui_icons_FormatAlignJustify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/FormatAlignJustify */ "./node_modules/@material-ui/icons/FormatAlignJustify.js");
/* harmony import */ var _material_ui_icons_Laptop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Laptop */ "./node_modules/@material-ui/icons/Laptop.js");
/* harmony import */ var _material_ui_icons_Tv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Tv */ "./node_modules/@material-ui/icons/Tv.js");
/* harmony import */ var _material_ui_icons_PhoneAndroid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/PhoneAndroid */ "./node_modules/@material-ui/icons/PhoneAndroid.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/ToggleButton */ "./node_modules/@material-ui/lab/esm/ToggleButton/ToggleButton.js");
/* harmony import */ var _material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/ToggleButtonGroup */ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/ToggleButtonGroup.js");
/* harmony import */ var _jumbo_components_GridContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@jumbo/components/GridContainer */ "./resources/js/src/@jumbo/components/GridContainer/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return {
    toggleContainer: {
      margin: theme.spacing(2, 0)
    }
  };
});
function ToggleButtonNotEmpty() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState('left'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      alignment = _React$useState2[0],
      setAlignment = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(function () {
    return ['phone'];
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      formats = _React$useState4[0],
      setFormats = _React$useState4[1];

  var handleFormat = function handleFormat(event, newFormats) {
    if (newFormats.length) {
      setFormats(newFormats);
    }
  };

  var handleAlignment = function handleAlignment(event, newAlignment) {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_jumbo_components_GridContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    spacing: 2,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      sm: 12,
      md: 6,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: classes.toggleContainer,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: alignment,
          exclusive: true,
          onChange: handleAlignment,
          "aria-label": "text alignment",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            value: "left",
            "aria-label": "left aligned",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_7__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            value: "center",
            "aria-label": "centered",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_FormatAlignCenter__WEBPACK_IMPORTED_MODULE_8__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            value: "right",
            "aria-label": "right aligned",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_FormatAlignRight__WEBPACK_IMPORTED_MODULE_9__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            value: "justify",
            "aria-label": "justified",
            disabled: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_FormatAlignJustify__WEBPACK_IMPORTED_MODULE_10__["default"], {})
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      sm: 12,
      md: 6,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: classes.toggleContainer,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: formats,
          onChange: handleFormat,
          "aria-label": "device",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            value: "laptop",
            "aria-label": "laptop",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Laptop__WEBPACK_IMPORTED_MODULE_11__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            value: "tv",
            "aria-label": "tv",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Tv__WEBPACK_IMPORTED_MODULE_12__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            value: "phone",
            "aria-label": "phone",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_PhoneAndroid__WEBPACK_IMPORTED_MODULE_13__["default"], {})
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/ToggleButtonSizes.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/ToggleButtonSizes.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleButtonSizes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/FormatAlignLeft */ "./node_modules/@material-ui/icons/FormatAlignLeft.js");
/* harmony import */ var _material_ui_icons_FormatAlignCenter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/FormatAlignCenter */ "./node_modules/@material-ui/icons/FormatAlignCenter.js");
/* harmony import */ var _material_ui_icons_FormatAlignRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/FormatAlignRight */ "./node_modules/@material-ui/icons/FormatAlignRight.js");
/* harmony import */ var _material_ui_icons_FormatAlignJustify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/FormatAlignJustify */ "./node_modules/@material-ui/icons/FormatAlignJustify.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/ToggleButton */ "./node_modules/@material-ui/lab/esm/ToggleButton/ToggleButton.js");
/* harmony import */ var _material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/ToggleButtonGroup */ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/ToggleButtonGroup.js");
/* harmony import */ var _jumbo_components_GridContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@jumbo/components/GridContainer */ "./resources/js/src/@jumbo/components/GridContainer/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function ToggleButtonSizes() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState('left'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      alignment = _React$useState2[0],
      setAlignment = _React$useState2[1];

  var handleChange = function handleChange(event, newAlignment) {
    setAlignment(newAlignment);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_jumbo_components_GridContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    spacing: 2,
    direction: "column",
    alignItems: "center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      item: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "small",
        value: alignment,
        exclusive: true,
        onChange: handleChange,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: "left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_6__["default"], {
            fontSize: "small"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_FormatAlignCenter__WEBPACK_IMPORTED_MODULE_7__["default"], {
            fontSize: "small"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: "right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_FormatAlignRight__WEBPACK_IMPORTED_MODULE_8__["default"], {
            fontSize: "small"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: "justify",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_FormatAlignJustify__WEBPACK_IMPORTED_MODULE_9__["default"], {
            fontSize: "small"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      item: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "medium",
        value: alignment,
        exclusive: true,
        onChange: handleChange,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: "left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_FormatAlignCenter__WEBPACK_IMPORTED_MODULE_7__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: "right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_FormatAlignRight__WEBPACK_IMPORTED_MODULE_8__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: "justify",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_FormatAlignJustify__WEBPACK_IMPORTED_MODULE_9__["default"], {})
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      item: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "large",
        value: alignment,
        exclusive: true,
        onChange: handleChange,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: "left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_FormatAlignCenter__WEBPACK_IMPORTED_MODULE_7__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: "right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_FormatAlignRight__WEBPACK_IMPORTED_MODULE_8__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: "justify",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_FormatAlignJustify__WEBPACK_IMPORTED_MODULE_9__["default"], {})
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/ToggleButtonsExclusive.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/ToggleButtonsExclusive.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleButtonsExclusive)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/FormatAlignLeft */ "./node_modules/@material-ui/icons/FormatAlignLeft.js");
/* harmony import */ var _material_ui_icons_FormatAlignCenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/FormatAlignCenter */ "./node_modules/@material-ui/icons/FormatAlignCenter.js");
/* harmony import */ var _material_ui_icons_FormatAlignRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/FormatAlignRight */ "./node_modules/@material-ui/icons/FormatAlignRight.js");
/* harmony import */ var _material_ui_icons_FormatAlignJustify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/FormatAlignJustify */ "./node_modules/@material-ui/icons/FormatAlignJustify.js");
/* harmony import */ var _material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/ToggleButton */ "./node_modules/@material-ui/lab/esm/ToggleButton/ToggleButton.js");
/* harmony import */ var _material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/ToggleButtonGroup */ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/ToggleButtonGroup.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function ToggleButtonsExclusive() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState('left'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      alignment = _React$useState2[0],
      setAlignment = _React$useState2[1];

  var handleAlignment = function handleAlignment(event, newAlignment) {
    setAlignment(newAlignment);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: alignment,
    exclusive: true,
    onChange: handleAlignment,
    "aria-label": "text alignment",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: "left",
      "aria-label": "left aligned",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_4__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: "center",
      "aria-label": "centered",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_FormatAlignCenter__WEBPACK_IMPORTED_MODULE_5__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: "right",
      "aria-label": "right aligned",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_FormatAlignRight__WEBPACK_IMPORTED_MODULE_6__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: "justify",
      "aria-label": "justified",
      disabled: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_FormatAlignJustify__WEBPACK_IMPORTED_MODULE_7__["default"], {})
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/ToggleButtonsMultiple.js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/ToggleButtonsMultiple.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleButtonsMultiple)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_FormatBold__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/FormatBold */ "./node_modules/@material-ui/icons/FormatBold.js");
/* harmony import */ var _material_ui_icons_FormatItalic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/FormatItalic */ "./node_modules/@material-ui/icons/FormatItalic.js");
/* harmony import */ var _material_ui_icons_FormatUnderlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/FormatUnderlined */ "./node_modules/@material-ui/icons/FormatUnderlined.js");
/* harmony import */ var _material_ui_icons_FormatColorFill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/FormatColorFill */ "./node_modules/@material-ui/icons/FormatColorFill.js");
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ArrowDropDown */ "./node_modules/@material-ui/icons/ArrowDropDown.js");
/* harmony import */ var _material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/ToggleButton */ "./node_modules/@material-ui/lab/esm/ToggleButton/ToggleButton.js");
/* harmony import */ var _material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/ToggleButtonGroup */ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/ToggleButtonGroup.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function ToggleButtonsMultiple() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(function () {
    return ['bold', 'italic'];
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      formats = _React$useState2[0],
      setFormats = _React$useState2[1];

  var handleFormat = function handleFormat(event, newFormats) {
    setFormats(newFormats);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: formats,
    onChange: handleFormat,
    "aria-label": "text formatting",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: "bold",
      "aria-label": "bold",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_FormatBold__WEBPACK_IMPORTED_MODULE_4__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: "italic",
      "aria-label": "italic",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_FormatItalic__WEBPACK_IMPORTED_MODULE_5__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: "underlined",
      "aria-label": "underlined",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_FormatUnderlined__WEBPACK_IMPORTED_MODULE_6__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: "color",
      "aria-label": "color",
      disabled: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_FormatColorFill__WEBPACK_IMPORTED_MODULE_7__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_8__["default"], {})]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/VerticalToggleButtons.js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/VerticalToggleButtons.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VerticalToggleButtons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ViewList */ "./node_modules/@material-ui/icons/ViewList.js");
/* harmony import */ var _material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ViewModule */ "./node_modules/@material-ui/icons/ViewModule.js");
/* harmony import */ var _material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ViewQuilt */ "./node_modules/@material-ui/icons/ViewQuilt.js");
/* harmony import */ var _material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/ToggleButton */ "./node_modules/@material-ui/lab/esm/ToggleButton/ToggleButton.js");
/* harmony import */ var _material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/ToggleButtonGroup */ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/ToggleButtonGroup.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function VerticalToggleButtons() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState('list'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      view = _React$useState2[0],
      setView = _React$useState2[1];

  var handleChange = function handleChange(event, nextView) {
    setView(nextView);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    orientation: "vertical",
    value: view,
    exclusive: true,
    onChange: handleChange,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: "list",
      "aria-label": "list",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_4__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: "module",
      "aria-label": "module",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_5__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: "quilt",
      "aria-label": "quilt",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_6__["default"], {})
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/ToggleButtons/index.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/ToggleButtons/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleButtons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _jumbo_components_PageComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@jumbo/components/PageComponents */ "./resources/js/src/@jumbo/components/PageComponents/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js");
/* harmony import */ var _jumbo_components_Common_CodeViewerCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@jumbo/components/Common/CodeViewerCard */ "./resources/js/src/@jumbo/components/Common/CodeViewerCard/index.js");
/* harmony import */ var _demo_ToggleButtonsExclusive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo/ToggleButtonsExclusive */ "./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/ToggleButtonsExclusive.js");
/* harmony import */ var _demo_ToggleButtonsMultiple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo/ToggleButtonsMultiple */ "./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/ToggleButtonsMultiple.js");
/* harmony import */ var _demo_ToggleButtonSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo/ToggleButtonSizes */ "./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/ToggleButtonSizes.js");
/* harmony import */ var _demo_VerticalToggleButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/VerticalToggleButtons */ "./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/VerticalToggleButtons.js");
/* harmony import */ var _demo_ToggleButtonNotEmpty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/ToggleButtonNotEmpty */ "./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/ToggleButtonNotEmpty.js");
/* harmony import */ var _demo_StandaloneToggleButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo/StandaloneToggleButton */ "./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/StandaloneToggleButton.js");
/* harmony import */ var _demo_CustomizedDividers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo/CustomizedDividers */ "./resources/js/src/routes/Components/MuiComponents/ToggleButtons/demo/CustomizedDividers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














var useStyles = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["default"])(function (theme) {
  return {
    section: {
      '&:not(:last-child)': {
        marginBottom: theme.typography.pxToRem(32)
      }
    },
    sectionHeading: {
      marginBottom: theme.typography.pxToRem(16)
    }
  };
});

var requireRaw = __webpack_require__("./resources/js/src/@fake-db/mui-components/toggle-buttons sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$");

var demos = [{
  label: 'Exclusive selection',
  link: 'exclusive-selection',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_demo_ToggleButtonsExclusive__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
  filename: './ToggleButtonsExclusive.txt'
}, {
  label: 'Multiple selection',
  link: 'multiple-selection',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_demo_ToggleButtonsMultiple__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
  filename: './ToggleButtonsMultiple.txt'
}, {
  label: 'Sizes',
  link: 'sizes',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_demo_ToggleButtonSizes__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
  filename: './ToggleButtonSizes.txt'
}, {
  label: 'Vertical buttons',
  link: 'vertical-buttons',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_demo_VerticalToggleButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
  filename: './VerticalToggleButtons.txt'
}, {
  label: 'Enforce value set',
  link: 'enforce-value-set',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_demo_ToggleButtonNotEmpty__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
  filename: './ToggleButtonNotEmpty.txt'
}, {
  label: 'Standalone toggle button',
  link: 'standalone-toggle-button',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_demo_StandaloneToggleButton__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
  filename: './StandaloneToggleButton.txt'
}, {
  label: 'Customized toggle button',
  link: 'customized-toggle-button',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_demo_CustomizedDividers__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
  filename: './CustomizedDividers.txt'
}];
function ToggleButtons() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_jumbo_components_PageComponents__WEBPACK_IMPORTED_MODULE_1__.MuiComponentDemo, {
    pageTitle: "Toggle Buttons",
    menus: demos,
    children: demos.map(function (menu, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: menu.link,
        className: classes.section,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
          component: "h3",
          variant: "inherit",
          className: classes.sectionHeading,
          children: menu.label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_jumbo_components_Common_CodeViewerCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          code: requireRaw(menu.filename)["default"],
          language: "jsx",
          children: menu.component
        })]
      }, index);
    })
  });
}

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/CustomizedDividers.txt":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/CustomizedDividers.txt ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles, withStyles } from '@material-ui/core/styles';\r\nimport FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';\r\nimport FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';\r\nimport FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';\r\nimport FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';\r\nimport FormatBoldIcon from '@material-ui/icons/FormatBold';\r\nimport FormatItalicIcon from '@material-ui/icons/FormatItalic';\r\nimport FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';\r\nimport FormatColorFillIcon from '@material-ui/icons/FormatColorFill';\r\nimport ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';\r\nimport Divider from '@material-ui/core/Divider';\r\nimport Paper from '@material-ui/core/Paper';\r\nimport ToggleButton from '@material-ui/lab/ToggleButton';\r\nimport ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  paper: {\r\n    display: 'flex',\r\n    border: `1px solid ${theme.palette.divider}`,\r\n    flexWrap: 'wrap',\r\n  },\r\n  divider: {\r\n    margin: theme.spacing(1, 0.5),\r\n  },\r\n}));\r\n\r\nconst StyledToggleButtonGroup = withStyles(theme => ({\r\n  grouped: {\r\n    margin: theme.spacing(0.5),\r\n    border: 'none',\r\n    '&:not(:first-child)': {\r\n      borderRadius: theme.shape.borderRadius,\r\n    },\r\n    '&:first-child': {\r\n      borderRadius: theme.shape.borderRadius,\r\n    },\r\n  },\r\n}))(ToggleButtonGroup);\r\n\r\nexport default function CustomizedDividers() {\r\n  const [alignment, setAlignment] = React.useState('left');\r\n  const [formats, setFormats] = React.useState(() => ['italic']);\r\n\r\n  const handleFormat = (event, newFormats) => {\r\n    setFormats(newFormats);\r\n  };\r\n\r\n  const handleAlignment = (event, newAlignment) => {\r\n    setAlignment(newAlignment);\r\n  };\r\n\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div>\r\n      <Paper elevation={0} className={classes.paper}>\r\n        <StyledToggleButtonGroup\r\n          size=\"small\"\r\n          value={alignment}\r\n          exclusive\r\n          onChange={handleAlignment}\r\n          aria-label=\"text alignment\">\r\n          <ToggleButton value=\"left\" aria-label=\"left aligned\">\r\n            <FormatAlignLeftIcon />\r\n          </ToggleButton>\r\n          <ToggleButton value=\"center\" aria-label=\"centered\">\r\n            <FormatAlignCenterIcon />\r\n          </ToggleButton>\r\n          <ToggleButton value=\"right\" aria-label=\"right aligned\">\r\n            <FormatAlignRightIcon />\r\n          </ToggleButton>\r\n          <ToggleButton value=\"justify\" aria-label=\"justified\" disabled>\r\n            <FormatAlignJustifyIcon />\r\n          </ToggleButton>\r\n        </StyledToggleButtonGroup>\r\n        <Divider flexItem orientation=\"vertical\" className={classes.divider} />\r\n        <StyledToggleButtonGroup size=\"small\" value={formats} onChange={handleFormat} aria-label=\"text formatting\">\r\n          <ToggleButton value=\"bold\" aria-label=\"bold\">\r\n            <FormatBoldIcon />\r\n          </ToggleButton>\r\n          <ToggleButton value=\"italic\" aria-label=\"italic\">\r\n            <FormatItalicIcon />\r\n          </ToggleButton>\r\n          <ToggleButton value=\"underlined\" aria-label=\"underlined\">\r\n            <FormatUnderlinedIcon />\r\n          </ToggleButton>\r\n          <ToggleButton value=\"color\" aria-label=\"color\" disabled>\r\n            <FormatColorFillIcon />\r\n            <ArrowDropDownIcon />\r\n          </ToggleButton>\r\n        </StyledToggleButtonGroup>\r\n      </Paper>\r\n    </div>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/StandaloneToggleButton.txt":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/StandaloneToggleButton.txt ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport CheckIcon from '@material-ui/icons/Check';\r\nimport ToggleButton from '@material-ui/lab/ToggleButton';\r\n\r\nexport default function StandaloneToggleButton() {\r\n  const [selected, setSelected] = React.useState(false);\r\n\r\n  return (\r\n    <ToggleButton\r\n      value=\"check\"\r\n      selected={selected}\r\n      onChange={() => {\r\n        setSelected(!selected);\r\n      }}>\r\n      <CheckIcon />\r\n    </ToggleButton>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/ToggleButtonNotEmpty.txt":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/ToggleButtonNotEmpty.txt ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';\r\nimport FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';\r\nimport FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';\r\nimport FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';\r\nimport LaptopIcon from '@material-ui/icons/Laptop';\r\nimport TvIcon from '@material-ui/icons/Tv';\r\nimport PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';\r\nimport Grid from '@material-ui/core/Grid';\r\nimport ToggleButton from '@material-ui/lab/ToggleButton';\r\nimport ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  toggleContainer: {\r\n    margin: theme.spacing(2, 0),\r\n  },\r\n}));\r\n\r\nexport default function ToggleButtonNotEmpty() {\r\n  const [alignment, setAlignment] = React.useState('left');\r\n  const [formats, setFormats] = React.useState(() => ['phone']);\r\n\r\n  const handleFormat = (event, newFormats) => {\r\n    if (newFormats.length) {\r\n      setFormats(newFormats);\r\n    }\r\n  };\r\n\r\n  const handleAlignment = (event, newAlignment) => {\r\n    if (newAlignment !== null) {\r\n      setAlignment(newAlignment);\r\n    }\r\n  };\r\n\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Grid container spacing={2}>\r\n      <Grid item sm={12} md={6}>\r\n        <div className={classes.toggleContainer}>\r\n          <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label=\"text alignment\">\r\n            <ToggleButton value=\"left\" aria-label=\"left aligned\">\r\n              <FormatAlignLeftIcon />\r\n            </ToggleButton>\r\n            <ToggleButton value=\"center\" aria-label=\"centered\">\r\n              <FormatAlignCenterIcon />\r\n            </ToggleButton>\r\n            <ToggleButton value=\"right\" aria-label=\"right aligned\">\r\n              <FormatAlignRightIcon />\r\n            </ToggleButton>\r\n            <ToggleButton value=\"justify\" aria-label=\"justified\" disabled>\r\n              <FormatAlignJustifyIcon />\r\n            </ToggleButton>\r\n          </ToggleButtonGroup>\r\n        </div>\r\n      </Grid>\r\n      <Grid item sm={12} md={6}>\r\n        <div className={classes.toggleContainer}>\r\n          <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label=\"device\">\r\n            <ToggleButton value=\"laptop\" aria-label=\"laptop\">\r\n              <LaptopIcon />\r\n            </ToggleButton>\r\n            <ToggleButton value=\"tv\" aria-label=\"tv\">\r\n              <TvIcon />\r\n            </ToggleButton>\r\n            <ToggleButton value=\"phone\" aria-label=\"phone\">\r\n              <PhoneAndroidIcon />\r\n            </ToggleButton>\r\n          </ToggleButtonGroup>\r\n        </div>\r\n      </Grid>\r\n    </Grid>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/ToggleButtonSizes.txt":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/ToggleButtonSizes.txt ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';\r\nimport FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';\r\nimport FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';\r\nimport FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';\r\nimport Grid from '@material-ui/core/Grid';\r\nimport ToggleButton from '@material-ui/lab/ToggleButton';\r\nimport ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';\r\n\r\nexport default function ToggleButtonSizes() {\r\n  const [alignment, setAlignment] = React.useState('left');\r\n\r\n  const handleChange = (event, newAlignment) => {\r\n    setAlignment(newAlignment);\r\n  };\r\n\r\n  return (\r\n    <Grid container spacing={2} direction=\"column\" alignItems=\"center\">\r\n      <Grid item>\r\n        <ToggleButtonGroup size=\"small\" value={alignment} exclusive onChange={handleChange}>\r\n          <ToggleButton value=\"left\">\r\n            <FormatAlignLeftIcon fontSize=\"small\" />\r\n          </ToggleButton>\r\n          <ToggleButton value=\"center\">\r\n            <FormatAlignCenterIcon fontSize=\"small\" />\r\n          </ToggleButton>\r\n          <ToggleButton value=\"right\">\r\n            <FormatAlignRightIcon fontSize=\"small\" />\r\n          </ToggleButton>\r\n          <ToggleButton value=\"justify\">\r\n            <FormatAlignJustifyIcon fontSize=\"small\" />\r\n          </ToggleButton>\r\n        </ToggleButtonGroup>\r\n      </Grid>\r\n      <Grid item>\r\n        <ToggleButtonGroup size=\"medium\" value={alignment} exclusive onChange={handleChange}>\r\n          <ToggleButton value=\"left\">\r\n            <FormatAlignLeftIcon />\r\n          </ToggleButton>\r\n          <ToggleButton value=\"center\">\r\n            <FormatAlignCenterIcon />\r\n          </ToggleButton>\r\n          <ToggleButton value=\"right\">\r\n            <FormatAlignRightIcon />\r\n          </ToggleButton>\r\n          <ToggleButton value=\"justify\">\r\n            <FormatAlignJustifyIcon />\r\n          </ToggleButton>\r\n        </ToggleButtonGroup>\r\n      </Grid>\r\n      <Grid item>\r\n        <ToggleButtonGroup size=\"large\" value={alignment} exclusive onChange={handleChange}>\r\n          <ToggleButton value=\"left\">\r\n            <FormatAlignLeftIcon />\r\n          </ToggleButton>\r\n          <ToggleButton value=\"center\">\r\n            <FormatAlignCenterIcon />\r\n          </ToggleButton>\r\n          <ToggleButton value=\"right\">\r\n            <FormatAlignRightIcon />\r\n          </ToggleButton>\r\n          <ToggleButton value=\"justify\">\r\n            <FormatAlignJustifyIcon />\r\n          </ToggleButton>\r\n        </ToggleButtonGroup>\r\n      </Grid>\r\n    </Grid>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/ToggleButtonsExclusive.txt":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/ToggleButtonsExclusive.txt ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';\r\nimport FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';\r\nimport FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';\r\nimport FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';\r\nimport ToggleButton from '@material-ui/lab/ToggleButton';\r\nimport ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';\r\n\r\nexport default function ToggleButtonsExclusive() {\r\n  const [alignment, setAlignment] = React.useState('left');\r\n\r\n  const handleAlignment = (event, newAlignment) => {\r\n    setAlignment(newAlignment);\r\n  };\r\n\r\n  return (\r\n    <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label=\"text alignment\">\r\n      <ToggleButton value=\"left\" aria-label=\"left aligned\">\r\n        <FormatAlignLeftIcon />\r\n      </ToggleButton>\r\n      <ToggleButton value=\"center\" aria-label=\"centered\">\r\n        <FormatAlignCenterIcon />\r\n      </ToggleButton>\r\n      <ToggleButton value=\"right\" aria-label=\"right aligned\">\r\n        <FormatAlignRightIcon />\r\n      </ToggleButton>\r\n      <ToggleButton value=\"justify\" aria-label=\"justified\" disabled>\r\n        <FormatAlignJustifyIcon />\r\n      </ToggleButton>\r\n    </ToggleButtonGroup>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/ToggleButtonsMultiple.txt":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/ToggleButtonsMultiple.txt ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport FormatBoldIcon from '@material-ui/icons/FormatBold';\r\nimport FormatItalicIcon from '@material-ui/icons/FormatItalic';\r\nimport FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';\r\nimport FormatColorFillIcon from '@material-ui/icons/FormatColorFill';\r\nimport ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';\r\nimport ToggleButton from '@material-ui/lab/ToggleButton';\r\nimport ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';\r\n\r\nexport default function ToggleButtonsMultiple() {\r\n  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);\r\n\r\n  const handleFormat = (event, newFormats) => {\r\n    setFormats(newFormats);\r\n  };\r\n\r\n  return (\r\n    <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label=\"text formatting\">\r\n      <ToggleButton value=\"bold\" aria-label=\"bold\">\r\n        <FormatBoldIcon />\r\n      </ToggleButton>\r\n      <ToggleButton value=\"italic\" aria-label=\"italic\">\r\n        <FormatItalicIcon />\r\n      </ToggleButton>\r\n      <ToggleButton value=\"underlined\" aria-label=\"underlined\">\r\n        <FormatUnderlinedIcon />\r\n      </ToggleButton>\r\n      <ToggleButton value=\"color\" aria-label=\"color\" disabled>\r\n        <FormatColorFillIcon />\r\n        <ArrowDropDownIcon />\r\n      </ToggleButton>\r\n    </ToggleButtonGroup>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/VerticalToggleButtons.txt":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/VerticalToggleButtons.txt ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport ViewListIcon from '@material-ui/icons/ViewList';\r\nimport ViewModuleIcon from '@material-ui/icons/ViewModule';\r\nimport ViewQuiltIcon from '@material-ui/icons/ViewQuilt';\r\nimport ToggleButton from '@material-ui/lab/ToggleButton';\r\nimport ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';\r\n\r\nexport default function VerticalToggleButtons() {\r\n  const [view, setView] = React.useState('list');\r\n\r\n  const handleChange = (event, nextView) => {\r\n    setView(nextView);\r\n  };\r\n\r\n  return (\r\n    <ToggleButtonGroup orientation=\"vertical\" value={view} exclusive onChange={handleChange}>\r\n      <ToggleButton value=\"list\" aria-label=\"list\">\r\n        <ViewListIcon />\r\n      </ToggleButton>\r\n      <ToggleButton value=\"module\" aria-label=\"module\">\r\n        <ViewModuleIcon />\r\n      </ToggleButton>\r\n      <ToggleButton value=\"quilt\" aria-label=\"quilt\">\r\n        <ViewQuiltIcon />\r\n      </ToggleButton>\r\n    </ToggleButtonGroup>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./resources/js/src/@fake-db/mui-components/toggle-buttons sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$":
/*!*****************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@fake-db/mui-components/toggle-buttons/ sync nonrecursive !./node_modules/raw-loader/dist/cjs.js! \.(txt%7Cjs%7Cmd%7Ctsx)$ ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./CustomizedDividers.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/CustomizedDividers.txt",
	"./StandaloneToggleButton.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/StandaloneToggleButton.txt",
	"./ToggleButtonNotEmpty.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/ToggleButtonNotEmpty.txt",
	"./ToggleButtonSizes.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/ToggleButtonSizes.txt",
	"./ToggleButtonsExclusive.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/ToggleButtonsExclusive.txt",
	"./ToggleButtonsMultiple.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/ToggleButtonsMultiple.txt",
	"./VerticalToggleButtons.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/toggle-buttons/VerticalToggleButtons.txt"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/src/@fake-db/mui-components/toggle-buttons sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$";

/***/ })

}]);