(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_routes_Components_MuiComponents_TextFields_index_js"],{

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

/***/ "./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js ***!
  \*****************************************************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FormControl/FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");








var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    height: '0.01em',
    // Fix IE 11 flexbox alignment. To remove at some point.
    maxHeight: '2em',
    alignItems: 'center',
    whiteSpace: 'nowrap'
  },

  /* Styles applied to the root element if `variant="filled"`. */
  filled: {
    '&$positionStart:not($hiddenLabel)': {
      marginTop: 16
    }
  },

  /* Styles applied to the root element if `position="start"`. */
  positionStart: {
    marginRight: 8
  },

  /* Styles applied to the root element if `position="end"`. */
  positionEnd: {
    marginLeft: 8
  },

  /* Styles applied to the root element if `disablePointerEvents=true`. */
  disablePointerEvents: {
    pointerEvents: 'none'
  },

  /* Styles applied if the adornment is used inside <FormControl hiddenLabel />. */
  hiddenLabel: {},

  /* Styles applied if the adornment is used inside <FormControl margin="dense" />. */
  marginDense: {}
};
var InputAdornment = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function InputAdornment(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disablePointer = props.disablePointerEvents,
      disablePointerEvents = _props$disablePointer === void 0 ? false : _props$disablePointer,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      position = props.position,
      variantProp = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"]);

  var muiFormControl = (0,_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_4__.useFormControl)() || {};
  var variant = variantProp;

  if (variantProp && muiFormControl.variant) {
    if (true) {
      if (variantProp === muiFormControl.variant) {
        console.error('Material-UI: The `InputAdornment` variant infers the variant prop ' + 'you do not have to provide one.');
      }
    }
  }

  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className, position === 'end' ? classes.positionEnd : classes.positionStart, disablePointerEvents && classes.disablePointerEvents, muiFormControl.hiddenLabel && classes.hiddenLabel, variant === 'filled' && classes.filled, muiFormControl.margin === 'dense' && classes.marginDense),
    ref: ref
  }, other), typeof children === 'string' && !disableTypography ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "textSecondary"
  }, children) : children));
});
 true ? InputAdornment.propTypes = {
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().elementType),

  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the input on click.
   */
  disablePointerEvents: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * If children is a string then disable wrapping in a Typography component.
   */
  disableTypography: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * @ignore
   */
  muiFormControl: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),

  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(['start', 'end']).isRequired,

  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(['standard', 'outlined', 'filled'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiInputAdornment'
})(InputAdornment));

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

/***/ "./node_modules/@material-ui/icons/AccountCircle.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/icons/AccountCircle.js ***!
  \**********************************************************/
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
}), 'AccountCircle');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Directions.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/Directions.js ***!
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
  d: "M21.71 11.29l-9-9a.9959.9959 0 00-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"
}), 'Directions');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Visibility.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/Visibility.js ***!
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
  d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
}), 'Visibility');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/VisibilityOff.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/icons/VisibilityOff.js ***!
  \**********************************************************/
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
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
}), 'VisibilityOff');

exports["default"] = _default;

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

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/BasicTextFields.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/demos/BasicTextFields.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BasicTextFields)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    }
  };
});
function BasicTextFields() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "standard-basic",
      label: "Standard"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "filled-basic",
      label: "Filled",
      variant: "filled"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "outlined-basic",
      label: "Outlined",
      variant: "outlined"
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/ColorTextFields.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/demos/ColorTextFields.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColorTextFields)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    }
  };
});
function ColorTextFields() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "standard-secondary",
      label: "Standard secondary",
      color: "secondary"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "filled-secondary",
      label: "Filled secondary",
      variant: "filled",
      color: "secondary"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "outlined-secondary",
      label: "Outlined secondary",
      variant: "outlined",
      color: "secondary"
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/ComposedTextField.js":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/demos/ComposedTextField.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComposedTextField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_FilledInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/Input.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  };
});
function ComposedTextField() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState('Composed TextField'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      name = _React$useState2[0],
      setName = _React$useState2[1];

  var classes = useStyles();

  var handleChange = function handleChange(event) {
    setName(event.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
        htmlFor: "component-simple",
        children: "Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "component-simple",
        value: name,
        onChange: handleChange
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
        htmlFor: "component-helper",
        children: "Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "component-helper",
        value: name,
        onChange: handleChange,
        "aria-describedby": "component-helper-text"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "component-helper-text",
        children: "Some important helper text"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      disabled: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
        htmlFor: "component-disabled",
        children: "Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "component-disabled",
        value: name,
        onChange: handleChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: "Disabled"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
        htmlFor: "component-error",
        children: "Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "component-error",
        value: name,
        onChange: handleChange,
        "aria-describedby": "component-error-text"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "component-error-text",
        children: "Error"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "outlined",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
        htmlFor: "component-outlined",
        children: "Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "component-outlined",
        value: name,
        onChange: handleChange,
        label: "Name"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "filled",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
        htmlFor: "component-filled",
        children: "Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FilledInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "component-filled",
        value: name,
        onChange: handleChange
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/CustomizedInputBase.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/demos/CustomizedInputBase.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomizedInputBase)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Directions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Directions */ "./node_modules/@material-ui/icons/Directions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.palette.background["default"],
      width: 400
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    }
  };
});
function CustomizedInputBase() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "form",
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.iconButton,
      "aria-label": "menu",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.input,
      placeholder: "Search Google Maps",
      inputProps: {
        'aria-label': 'search google maps'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "submit",
      className: classes.iconButton,
      "aria-label": "search",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.divider,
      orientation: "vertical"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: "primary",
      className: classes.iconButton,
      "aria-label": "directions",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Directions__WEBPACK_IMPORTED_MODULE_9__["default"], {})
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/CustomizedInputs.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/demos/CustomizedInputs.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomizedInputs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/green.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var CssTextField = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])({
  root: {
    '& label.Mui-focused': {
      color: 'green'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red'
      },
      '&:hover fieldset': {
        borderColor: 'yellow'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green'
      }
    }
  }
})(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"]);
var BootstrapInput = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      'label + &': {
        marginTop: theme.spacing(6)
      }
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
      '&:focus': {
        boxShadow: "".concat((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.primary.main, 0.25), " 0 0 0 0.2rem"),
        borderColor: theme.palette.primary.main
      }
    }
  };
})(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_5__["default"]);
var useStylesReddit = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["default"])(function (theme) {
  return {
    root: {
      border: "1px solid ".concat(theme.palette.borderColor.main),
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: theme.palette.background.paper,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: theme.palette.background.paper
      },
      '&$focused': {
        backgroundColor: theme.palette.background.paper,
        boxShadow: "".concat((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.primary.main, 0.25), " 0 0 0 2px"),
        borderColor: theme.palette.primary.main
      }
    },
    focused: {}
  };
});

function RedditTextField(props) {
  var classes = useStylesReddit();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
    InputProps: {
      classes: classes,
      disableUnderline: true
    }
  }, props));
}

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["default"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing(1)
    }
  };
});
var ValidationTextField = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important' // override inline-style

    }
  }
})(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"]);
var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["default"])({
  palette: {
    primary: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["default"]
  }
});
function CustomizedInputs() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CssTextField, {
      className: classes.margin,
      id: "custom-css-standard-input",
      label: "Custom CSS"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CssTextField, {
      className: classes.margin,
      label: "Custom CSS",
      variant: "outlined",
      id: "custom-css-outlined-input"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["default"], {
      theme: theme,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.margin,
        label: "ThemeProvider",
        id: "mui-theme-provider-standard-input"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.margin,
        label: "ThemeProvider",
        variant: "outlined",
        id: "mui-theme-provider-outlined-input"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: classes.margin,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
        shrink: true,
        htmlFor: "bootstrap-input",
        children: "Bootstrap"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BootstrapInput, {
        defaultValue: "react-bootstrap",
        id: "bootstrap-input"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RedditTextField, {
      label: "Reddit",
      className: classes.margin,
      defaultValue: "react-reddit",
      variant: "filled",
      id: "reddit-input"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.margin,
      defaultValue: "Naked input",
      inputProps: {
        'aria-label': 'naked'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ValidationTextField, {
      className: classes.margin,
      label: "CSS validation style",
      required: true,
      variant: "outlined",
      defaultValue: "Success",
      id: "validation-outlined-input"
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/FormPropsTextFields.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/demos/FormPropsTextFields.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormPropsTextFields)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    }
  };
});
function FormPropsTextFields() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        required: true,
        id: "standard-required",
        label: "Required",
        defaultValue: "Hello World"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        disabled: true,
        id: "standard-disabled",
        label: "Disabled",
        defaultValue: "Hello World"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "standard-password-input",
        label: "Password",
        type: "password",
        autoComplete: "current-password"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "standard-read-only-input",
        label: "Read Only",
        defaultValue: "Hello World",
        InputProps: {
          readOnly: true
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "standard-number",
        label: "Number",
        type: "number",
        InputLabelProps: {
          shrink: true
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "standard-search",
        label: "Search field",
        type: "search"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "standard-helperText",
        label: "Helper text",
        defaultValue: "Default Value",
        helperText: "Some important text"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        required: true,
        id: "filled-required",
        label: "Required",
        defaultValue: "Hello World",
        variant: "filled"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        disabled: true,
        id: "filled-disabled",
        label: "Disabled",
        defaultValue: "Hello World",
        variant: "filled"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "filled-password-input",
        label: "Password",
        type: "password",
        autoComplete: "current-password",
        variant: "filled"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "filled-read-only-input",
        label: "Read Only",
        defaultValue: "Hello World",
        InputProps: {
          readOnly: true
        },
        variant: "filled"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "filled-number",
        label: "Number",
        type: "number",
        InputLabelProps: {
          shrink: true
        },
        variant: "filled"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "filled-search",
        label: "Search field",
        type: "search",
        variant: "filled"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "filled-helperText",
        label: "Helper text",
        defaultValue: "Default Value",
        helperText: "Some important text",
        variant: "filled"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        required: true,
        id: "outlined-required",
        label: "Required",
        defaultValue: "Hello World",
        variant: "outlined"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        disabled: true,
        id: "outlined-disabled",
        label: "Disabled",
        defaultValue: "Hello World",
        variant: "outlined"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-password-input",
        label: "Password",
        type: "password",
        autoComplete: "current-password",
        variant: "outlined"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-read-only-input",
        label: "Read Only",
        defaultValue: "Hello World",
        InputProps: {
          readOnly: true
        },
        variant: "outlined"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-number",
        label: "Number",
        type: "number",
        InputLabelProps: {
          shrink: true
        },
        variant: "outlined"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-search",
        label: "Search field",
        type: "search",
        variant: "outlined"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-helperText",
        label: "Helper text",
        defaultValue: "Default Value",
        helperText: "Some important text",
        variant: "outlined"
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/FormattedInputs.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/demos/FormattedInputs.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormattedInputs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/Input.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["inputRef"],
    _excluded2 = ["inputRef", "onChange"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["default"])(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(2)
      }
    }
  };
});

function TextMaskCustom(props) {
  var inputRef = props.inputRef,
      other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((react_text_mask__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, other), {}, {
    ref: function ref(_ref) {
      inputRef(_ref ? _ref.inputElement : null);
    },
    mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    placeholderChar: "\u2000",
    showMask: true
  }));
}

TextMaskCustom.propTypes = {
  inputRef: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired)
};

function NumberFormatCustom(props) {
  var inputRef = props.inputRef,
      onChange = props.onChange,
      other = _objectWithoutProperties(props, _excluded2);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_number_format__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, other), {}, {
    getInputRef: inputRef,
    onValueChange: function onValueChange(values) {
      onChange({
        target: {
          name: props.name,
          value: values.value
        }
      });
    },
    thousandSeparator: true,
    isNumericString: true,
    prefix: "$"
  }));
}

NumberFormatCustom.propTypes = {
  inputRef: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired)
};
function FormattedInputs() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    textmask: '(1  )    -    ',
    numberformat: '1320'
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, event.target.name, event.target.value)));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        htmlFor: "formatted-text-mask-input",
        children: "react-text-mask"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: values.textmask,
        onChange: handleChange,
        name: "textmask",
        id: "formatted-text-mask-input",
        inputComponent: TextMaskCustom
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: "react-number-format",
      value: values.numberformat,
      onChange: handleChange,
      name: "numberformat",
      id: "formatted-numberformat-input",
      InputProps: {
        inputComponent: NumberFormatCustom
      }
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/InputAdornments.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/demos/InputAdornments.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputAdornments)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/Input.js");
/* harmony import */ var _material_ui_core_FilledInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "./node_modules/@material-ui/icons/VisibilityOff.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing(1)
    },
    withoutLabel: {
      marginTop: theme.spacing(3)
    },
    textField: {
      width: '25ch'
    }
  };
});
function InputAdornments() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  var handleChange = function handleChange(prop) {
    return function (event) {
      setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, prop, event.target.value)));
    };
  };

  var handleClickShowPassword = function handleClickShowPassword() {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      showPassword: !values.showPassword
    }));
  };

  var handleMouseDownPassword = function handleMouseDownPassword(event) {
    event.preventDefault();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: "With normal TextField",
        id: "standard-start-adornment",
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.margin, classes.textField),
        InputProps: {
          startAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__["default"], {
            position: "start",
            children: "Kg"
          })
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.margin, classes.withoutLabel, classes.textField),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: "standard-adornment-weight",
          value: values.weight,
          onChange: handleChange('weight'),
          endAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__["default"], {
            position: "end",
            children: "Kg"
          }),
          "aria-describedby": "standard-weight-helper-text",
          inputProps: {
            'aria-label': 'weight'
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "standard-weight-helper-text",
          children: "Weight"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.margin, classes.textField),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          htmlFor: "standard-adornment-password",
          children: "Password"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: "standard-adornment-password",
          type: values.showPassword ? 'text' : 'password',
          value: values.password,
          onChange: handleChange('password'),
          endAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__["default"], {
            position: "end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
              "aria-label": "toggle password visibility",
              onClick: handleClickShowPassword,
              onMouseDown: handleMouseDownPassword,
              children: values.showPassword ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_12__["default"], {})
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fullWidth: true,
        className: classes.margin,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          htmlFor: "standard-adornment-amount",
          children: "Amount"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: "standard-adornment-amount",
          value: values.amount,
          onChange: handleChange('amount'),
          startAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__["default"], {
            position: "start",
            children: "$"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: "With normal TextField",
        id: "filled-start-adornment",
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.margin, classes.textField),
        InputProps: {
          startAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__["default"], {
            position: "start",
            children: "Kg"
          })
        },
        variant: "filled"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.margin, classes.textField),
        variant: "filled",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_FilledInput__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: "filled-adornment-weight",
          value: values.weight,
          onChange: handleChange('weight'),
          endAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__["default"], {
            position: "end",
            children: "Kg"
          }),
          "aria-describedby": "filled-weight-helper-text",
          inputProps: {
            'aria-label': 'weight'
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "filled-weight-helper-text",
          children: "Weight"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.margin, classes.textField),
        variant: "filled",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          htmlFor: "filled-adornment-password",
          children: "Password"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_FilledInput__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: "filled-adornment-password",
          type: values.showPassword ? 'text' : 'password',
          value: values.password,
          onChange: handleChange('password'),
          endAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__["default"], {
            position: "end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
              "aria-label": "toggle password visibility",
              onClick: handleClickShowPassword,
              onMouseDown: handleMouseDownPassword,
              edge: "end",
              children: values.showPassword ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_12__["default"], {})
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fullWidth: true,
        className: classes.margin,
        variant: "filled",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          htmlFor: "filled-adornment-amount",
          children: "Amount"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_FilledInput__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: "filled-adornment-amount",
          value: values.amount,
          onChange: handleChange('amount'),
          startAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__["default"], {
            position: "start",
            children: "$"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: "With normal TextField",
        id: "outlined-start-adornment",
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.margin, classes.textField),
        InputProps: {
          startAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__["default"], {
            position: "start",
            children: "Kg"
          })
        },
        variant: "outlined"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.margin, classes.textField),
        variant: "outlined",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
          id: "outlined-adornment-weight",
          value: values.weight,
          onChange: handleChange('weight'),
          endAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__["default"], {
            position: "end",
            children: "Kg"
          }),
          "aria-describedby": "outlined-weight-helper-text",
          inputProps: {
            'aria-label': 'weight'
          },
          labelWidth: 0
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: "outlined-weight-helper-text",
          children: "Weight"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.margin, classes.textField),
        variant: "outlined",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          htmlFor: "outlined-adornment-password",
          children: "Password"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
          id: "outlined-adornment-password",
          type: values.showPassword ? 'text' : 'password',
          value: values.password,
          onChange: handleChange('password'),
          endAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__["default"], {
            position: "end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
              "aria-label": "toggle password visibility",
              onClick: handleClickShowPassword,
              onMouseDown: handleMouseDownPassword,
              edge: "end",
              children: values.showPassword ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_12__["default"], {})
            })
          }),
          labelWidth: 70
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fullWidth: true,
        className: classes.margin,
        variant: "outlined",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          htmlFor: "outlined-adornment-amount",
          children: "Amount"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
          id: "outlined-adornment-amount",
          value: values.amount,
          onChange: handleChange('amount'),
          startAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__["default"], {
            position: "start",
            children: "$"
          }),
          labelWidth: 60
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/InputWithIcon.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/demos/InputWithIcon.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputWithIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/Input.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _jumbo_components_GridContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@jumbo/components/GridContainer */ "./resources/js/src/@jumbo/components/GridContainer/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return {
    margin: {
      margin: theme.spacing(1)
    }
  };
});
function InputWithIcon() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.margin,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        htmlFor: "input-with-icon-adornment",
        children: "With a start adornment"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "input-with-icon-adornment",
        startAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_7__["default"], {
          position: "start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__["default"], {})
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: classes.margin,
      id: "input-with-icon-textfield",
      label: "TextField",
      InputProps: {
        startAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_7__["default"], {
          position: "start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__["default"], {})
        })
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: classes.margin,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_jumbo_components_GridContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
        spacing: 1,
        alignItems: "flex-end",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "input-with-icon-grid",
            label: "With a grid"
          })
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/Inputs.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/demos/Inputs.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Inputs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/Input.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  };
});
function Inputs() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      defaultValue: "Hello world",
      inputProps: {
        'aria-label': 'description'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      placeholder: "Placeholder",
      inputProps: {
        'aria-label': 'description'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      defaultValue: "Disabled",
      disabled: true,
      inputProps: {
        'aria-label': 'description'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      defaultValue: "Error",
      error: true,
      inputProps: {
        'aria-label': 'description'
      }
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/LayoutTextFields.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/demos/LayoutTextFields.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LayoutTextFields)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch'
    }
  };
});
function LayoutTextFields() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "standard-full-width",
        label: "Label",
        style: {
          margin: 8
        },
        placeholder: "Placeholder",
        helperText: "Full width!",
        fullWidth: true,
        margin: "normal",
        InputLabelProps: {
          shrink: true
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "None",
        id: "margin-none",
        defaultValue: "Default Value",
        className: classes.textField,
        helperText: "Some important text"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Dense",
        id: "margin-dense",
        defaultValue: "Default Value",
        className: classes.textField,
        helperText: "Some important text",
        margin: "dense"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Normal",
        id: "margin-normal",
        defaultValue: "Default Value",
        className: classes.textField,
        helperText: "Some important text",
        margin: "normal"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "filled-full-width",
        label: "Label",
        style: {
          margin: 8
        },
        placeholder: "Placeholder",
        helperText: "Full width!",
        fullWidth: true,
        margin: "normal",
        InputLabelProps: {
          shrink: true
        },
        variant: "filled"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "None",
        id: "filled-margin-none",
        defaultValue: "Default Value",
        className: classes.textField,
        helperText: "Some important text",
        variant: "filled"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Dense",
        id: "filled-margin-dense",
        defaultValue: "Default Value",
        className: classes.textField,
        helperText: "Some important text",
        margin: "dense",
        variant: "filled"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Normal",
        id: "filled-margin-normal",
        defaultValue: "Default Value",
        className: classes.textField,
        helperText: "Some important text",
        margin: "normal",
        variant: "filled"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-full-width",
        label: "Label",
        style: {
          margin: 8
        },
        placeholder: "Placeholder",
        helperText: "Full width!",
        fullWidth: true,
        margin: "normal",
        InputLabelProps: {
          shrink: true
        },
        variant: "outlined"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "None",
        id: "outlined-margin-none",
        defaultValue: "Default Value",
        className: classes.textField,
        helperText: "Some important text",
        variant: "outlined"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Dense",
        id: "outlined-margin-dense",
        defaultValue: "Default Value",
        className: classes.textField,
        helperText: "Some important text",
        margin: "dense",
        variant: "outlined"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Normal",
        id: "outlined-margin-normal",
        defaultValue: "Default Value",
        className: classes.textField,
        helperText: "Some important text",
        margin: "normal",
        variant: "outlined"
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/MultilineTextFields.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/demos/MultilineTextFields.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MultilineTextFields)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    }
  };
});
function MultilineTextFields() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState('Controlled'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setValue(event.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "standard-multiline-flexible",
        label: "Multiline",
        multiline: true,
        maxRows: 4,
        value: value,
        onChange: handleChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "standard-textarea",
        label: "Multiline Placeholder",
        placeholder: "Placeholder",
        multiline: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "standard-multiline-static",
        label: "Multiline",
        multiline: true,
        rows: 4,
        defaultValue: "Default Value"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "filled-multiline-flexible",
        label: "Multiline",
        multiline: true,
        maxRows: 4,
        value: value,
        onChange: handleChange,
        variant: "filled"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "filled-textarea",
        label: "Multiline Placeholder",
        placeholder: "Placeholder",
        multiline: true,
        variant: "filled"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "filled-multiline-static",
        label: "Multiline",
        multiline: true,
        rows: 4,
        defaultValue: "Default Value",
        variant: "filled"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-multiline-flexible",
        label: "Multiline",
        multiline: true,
        maxRows: 4,
        value: value,
        onChange: handleChange,
        variant: "outlined"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-textarea",
        label: "Multiline Placeholder",
        placeholder: "Placeholder",
        multiline: true,
        variant: "outlined"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-multiline-static",
        label: "Multiline",
        multiline: true,
        rows: 4,
        defaultValue: "Default Value",
        variant: "outlined"
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/SelectTextFields.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/demos/SelectTextFields.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MultilineTextFields)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var currencies = [{
  value: 'USD',
  label: '$'
}, {
  value: 'EUR',
  label: '€'
}, {
  value: 'BTC',
  label: '฿'
}, {
  value: 'JPY',
  label: '¥'
}];
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    }
  };
});
function MultilineTextFields() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState('EUR'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currency = _React$useState2[0],
      setCurrency = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setCurrency(event.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "standard-select-currency",
        select: true,
        label: "Select",
        value: currency,
        onChange: handleChange,
        helperText: "Please select your currency",
        children: currencies.map(function (option) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            value: option.value,
            children: option.label
          }, option.value);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "standard-select-currency-native",
        select: true,
        label: "Native select",
        value: currency,
        onChange: handleChange,
        SelectProps: {
          "native": true
        },
        helperText: "Please select your currency",
        children: currencies.map(function (option) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: option.value,
            children: option.label
          }, option.value);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "filled-select-currency",
        select: true,
        label: "Select",
        value: currency,
        onChange: handleChange,
        helperText: "Please select your currency",
        variant: "filled",
        children: currencies.map(function (option) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            value: option.value,
            children: option.label
          }, option.value);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "filled-select-currency-native",
        select: true,
        label: "Native select",
        value: currency,
        onChange: handleChange,
        SelectProps: {
          "native": true
        },
        helperText: "Please select your currency",
        variant: "filled",
        children: currencies.map(function (option) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: option.value,
            children: option.label
          }, option.value);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-select-currency",
        select: true,
        label: "Select",
        value: currency,
        onChange: handleChange,
        helperText: "Please select your currency",
        variant: "outlined",
        children: currencies.map(function (option) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            value: option.value,
            children: option.label
          }, option.value);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-select-currency-native",
        select: true,
        label: "Native select",
        value: currency,
        onChange: handleChange,
        SelectProps: {
          "native": true
        },
        helperText: "Please select your currency",
        variant: "outlined",
        children: currencies.map(function (option) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: option.value,
            children: option.label
          }, option.value);
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/StateTextFields.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/demos/StateTextFields.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StateTextFields)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    }
  };
});
function StateTextFields() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState('Cat in the Hat'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      name = _React$useState2[0],
      setName = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setName(event.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "standard-name",
        label: "Name",
        value: name,
        onChange: handleChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "standard-uncontrolled",
        label: "Uncontrolled",
        defaultValue: "foo"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "filled-name",
        label: "Name",
        value: name,
        onChange: handleChange,
        variant: "filled"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "filled-uncontrolled",
        label: "Uncontrolled",
        defaultValue: "foo",
        variant: "filled"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-name",
        label: "Name",
        value: name,
        onChange: handleChange,
        variant: "outlined"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-uncontrolled",
        label: "Uncontrolled",
        defaultValue: "foo",
        variant: "outlined"
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/TextFieldSizes.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/demos/TextFieldSizes.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextFieldSizes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200
      }
    }
  };
});
function TextFieldSizes() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Size",
        id: "standard-size-small",
        defaultValue: "Small",
        size: "small"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Size",
        id: "standard-size-normal",
        defaultValue: "Normal"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Size",
        id: "filled-size-small",
        defaultValue: "Small",
        variant: "filled",
        size: "small"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Size",
        id: "filled-size-normal",
        defaultValue: "Normal",
        variant: "filled"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Size",
        id: "outlined-size-small",
        defaultValue: "Small",
        variant: "outlined",
        size: "small"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Size",
        id: "outlined-size-normal",
        defaultValue: "Normal",
        variant: "outlined"
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/ValidationTextFields.js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/demos/ValidationTextFields.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidationTextFields)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200
      }
    }
  };
});
function ValidationTextFields() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        error: true,
        id: "standard-error",
        label: "Error",
        defaultValue: "Hello World"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        error: true,
        id: "standard-error-helper-text",
        label: "Error",
        defaultValue: "Hello World",
        helperText: "Incorrect entry."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        error: true,
        id: "filled-error",
        label: "Error",
        defaultValue: "Hello World",
        variant: "filled"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        error: true,
        id: "filled-error-helper-text",
        label: "Error",
        defaultValue: "Hello World",
        helperText: "Incorrect entry.",
        variant: "filled"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        error: true,
        id: "outlined-error",
        label: "Error",
        defaultValue: "Hello World",
        variant: "outlined"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        error: true,
        id: "outlined-error-helper-text",
        label: "Error",
        defaultValue: "Hello World",
        helperText: "Incorrect entry.",
        variant: "outlined"
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/TextFields/index.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/TextFields/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextFields)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _jumbo_components_PageComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@jumbo/components/PageComponents */ "./resources/js/src/@jumbo/components/PageComponents/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js");
/* harmony import */ var _jumbo_components_Common_CodeViewerCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@jumbo/components/Common/CodeViewerCard */ "./resources/js/src/@jumbo/components/Common/CodeViewerCard/index.js");
/* harmony import */ var _demos_BasicTextFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demos/BasicTextFields */ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/BasicTextFields.js");
/* harmony import */ var _demos_FormPropsTextFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demos/FormPropsTextFields */ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/FormPropsTextFields.js");
/* harmony import */ var _demos_ValidationTextFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demos/ValidationTextFields */ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/ValidationTextFields.js");
/* harmony import */ var _demos_MultilineTextFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demos/MultilineTextFields */ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/MultilineTextFields.js");
/* harmony import */ var _demos_InputWithIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demos/InputWithIcon */ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/InputWithIcon.js");
/* harmony import */ var _demos_InputAdornments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demos/InputAdornments */ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/InputAdornments.js");
/* harmony import */ var _demos_TextFieldSizes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demos/TextFieldSizes */ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/TextFieldSizes.js");
/* harmony import */ var _demos_LayoutTextFields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demos/LayoutTextFields */ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/LayoutTextFields.js");
/* harmony import */ var _demos_StateTextFields__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demos/StateTextFields */ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/StateTextFields.js");
/* harmony import */ var _demos_ComposedTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demos/ComposedTextField */ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/ComposedTextField.js");
/* harmony import */ var _demos_Inputs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./demos/Inputs */ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/Inputs.js");
/* harmony import */ var _demos_ColorTextFields__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./demos/ColorTextFields */ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/ColorTextFields.js");
/* harmony import */ var _demos_CustomizedInputs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./demos/CustomizedInputs */ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/CustomizedInputs.js");
/* harmony import */ var _demos_CustomizedInputBase__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./demos/CustomizedInputBase */ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/CustomizedInputBase.js");
/* harmony import */ var _demos_FormattedInputs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./demos/FormattedInputs */ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/FormattedInputs.js");
/* harmony import */ var _demos_SelectTextFields__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./demos/SelectTextFields */ "./resources/js/src/routes/Components/MuiComponents/TextFields/demos/SelectTextFields.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");























var useStyles = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_20__["default"])(function (theme) {
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

var requireRaw = __webpack_require__("./resources/js/src/@fake-db/mui-components/text-fields sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$");

var demos = [{
  label: 'Basic TextFields',
  link: 'basic-text-fields',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_demos_BasicTextFields__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
  filename: './BasicTextFields.txt'
}, {
  label: 'Form props',
  link: 'form-props',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_demos_FormPropsTextFields__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
  filename: './FormPropsTextFields.txt'
}, {
  label: 'Validation',
  link: 'validation',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_demos_ValidationTextFields__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
  filename: './ValidationTextFields.txt'
}, {
  label: 'Multiline',
  link: 'multiline',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_demos_MultilineTextFields__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
  filename: './MultilineTextFields.txt'
}, {
  label: 'Select',
  link: 'select',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_demos_SelectTextFields__WEBPACK_IMPORTED_MODULE_18__["default"], {}),
  filename: './SelectTextFields.txt'
}, {
  label: 'Icons',
  link: 'icons',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_demos_InputWithIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
  filename: './InputWithIcon.txt'
}, {
  label: 'Input Adornments',
  link: 'input-adornments',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_demos_InputAdornments__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
  filename: './InputWithIcon.txt'
}, {
  label: 'Sizes',
  link: 'sizes',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_demos_TextFieldSizes__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
  filename: './TextFieldSizes.txt'
}, {
  label: 'Layout',
  link: 'Layout',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_demos_LayoutTextFields__WEBPACK_IMPORTED_MODULE_10__["default"], {}),
  filename: './LayoutTextFields.txt'
}, {
  label: 'Uncontrolled vs Controlled',
  link: 'uncontrolled-vs-controlled',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_demos_StateTextFields__WEBPACK_IMPORTED_MODULE_11__["default"], {}),
  filename: './StateTextFields.txt'
}, {
  label: 'Components',
  link: 'components',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_demos_ComposedTextField__WEBPACK_IMPORTED_MODULE_12__["default"], {}),
  filename: './ComposedTextField.txt'
}, {
  label: 'Inputs',
  link: 'inputs',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_demos_Inputs__WEBPACK_IMPORTED_MODULE_13__["default"], {}),
  filename: './Inputs.txt'
}, {
  label: 'Color',
  link: 'color',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_demos_ColorTextFields__WEBPACK_IMPORTED_MODULE_14__["default"], {}),
  filename: './ColorTextFields.txt'
}, {
  label: 'Customized inputs',
  link: 'customized-inputs',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_demos_CustomizedInputs__WEBPACK_IMPORTED_MODULE_15__["default"], {}),
  filename: './CustomizedInputs.txt'
}, {
  label: 'Customized input base',
  link: 'customized-input-base',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_demos_CustomizedInputBase__WEBPACK_IMPORTED_MODULE_16__["default"], {}),
  filename: './CustomizedInputBase.txt'
}, {
  label: 'Integration with 3rd party input libraries',
  link: 'integration-with-3rd-party-input-libraries',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_demos_FormattedInputs__WEBPACK_IMPORTED_MODULE_17__["default"], {}),
  filename: './FormattedInputs.txt'
}];
function TextFields() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_jumbo_components_PageComponents__WEBPACK_IMPORTED_MODULE_1__.MuiComponentDemo, {
    pageTitle: "Text Fields",
    menus: demos,
    children: demos.map(function (menu, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["default"], {
        id: menu.link,
        className: classes.section,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["default"], {
          component: "h3",
          variant: "inherit",
          className: classes.sectionHeading,
          children: menu.label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_jumbo_components_Common_CodeViewerCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          code: requireRaw(menu.filename)["default"],
          language: "jsx",
          children: menu.component
        })]
      }, index);
    })
  });
}

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/BasicTextFields.txt":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/BasicTextFields.txt ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport TextField from '@material-ui/core/TextField';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    '& > *': {\r\n      margin: theme.spacing(1),\r\n      width: '25ch',\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function BasicTextFields() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <form className={classes.root} noValidate autoComplete=\"off\">\r\n      <TextField id=\"standard-basic\" label=\"Standard\" />\r\n      <TextField id=\"filled-basic\" label=\"Filled\" variant=\"filled\" />\r\n      <TextField id=\"outlined-basic\" label=\"Outlined\" variant=\"outlined\" />\r\n    </form>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/ColorTextFields.txt":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/ColorTextFields.txt ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport TextField from '@material-ui/core/TextField';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    '& > *': {\r\n      margin: theme.spacing(1),\r\n      width: '25ch',\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function ColorTextFields() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <form className={classes.root} noValidate autoComplete=\"off\">\r\n      <TextField id=\"standard-secondary\" label=\"Standard secondary\" color=\"secondary\" />\r\n      <TextField id=\"filled-secondary\" label=\"Filled secondary\" variant=\"filled\" color=\"secondary\" />\r\n      <TextField id=\"outlined-secondary\" label=\"Outlined secondary\" variant=\"outlined\" color=\"secondary\" />\r\n    </form>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/ComposedTextField.txt":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/ComposedTextField.txt ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport FilledInput from '@material-ui/core/FilledInput';\r\nimport FormControl from '@material-ui/core/FormControl';\r\nimport FormHelperText from '@material-ui/core/FormHelperText';\r\nimport Input from '@material-ui/core/Input';\r\nimport InputLabel from '@material-ui/core/InputLabel';\r\nimport OutlinedInput from '@material-ui/core/OutlinedInput';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    '& > *': {\r\n      margin: theme.spacing(1),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function ComposedTextField() {\r\n  const [name, setName] = React.useState('Composed TextField');\r\n  const classes = useStyles();\r\n\r\n  const handleChange = event => {\r\n    setName(event.target.value);\r\n  };\r\n\r\n  return (\r\n    <form className={classes.root} noValidate autoComplete=\"off\">\r\n      <FormControl>\r\n        <InputLabel htmlFor=\"component-simple\">Name</InputLabel>\r\n        <Input id=\"component-simple\" value={name} onChange={handleChange} />\r\n      </FormControl>\r\n      <FormControl>\r\n        <InputLabel htmlFor=\"component-helper\">Name</InputLabel>\r\n        <Input id=\"component-helper\" value={name} onChange={handleChange} aria-describedby=\"component-helper-text\" />\r\n        <FormHelperText id=\"component-helper-text\">Some important helper text</FormHelperText>\r\n      </FormControl>\r\n      <FormControl disabled>\r\n        <InputLabel htmlFor=\"component-disabled\">Name</InputLabel>\r\n        <Input id=\"component-disabled\" value={name} onChange={handleChange} />\r\n        <FormHelperText>Disabled</FormHelperText>\r\n      </FormControl>\r\n      <FormControl error>\r\n        <InputLabel htmlFor=\"component-error\">Name</InputLabel>\r\n        <Input id=\"component-error\" value={name} onChange={handleChange} aria-describedby=\"component-error-text\" />\r\n        <FormHelperText id=\"component-error-text\">Error</FormHelperText>\r\n      </FormControl>\r\n      <FormControl variant=\"outlined\">\r\n        <InputLabel htmlFor=\"component-outlined\">Name</InputLabel>\r\n        <OutlinedInput id=\"component-outlined\" value={name} onChange={handleChange} label=\"Name\" />\r\n      </FormControl>\r\n      <FormControl variant=\"filled\">\r\n        <InputLabel htmlFor=\"component-filled\">Name</InputLabel>\r\n        <FilledInput id=\"component-filled\" value={name} onChange={handleChange} />\r\n      </FormControl>\r\n    </form>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/CustomizedInputBase.txt":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/CustomizedInputBase.txt ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Paper from '@material-ui/core/Paper';\r\nimport InputBase from '@material-ui/core/InputBase';\r\nimport Divider from '@material-ui/core/Divider';\r\nimport IconButton from '@material-ui/core/IconButton';\r\nimport MenuIcon from '@material-ui/icons/Menu';\r\nimport SearchIcon from '@material-ui/icons/Search';\r\nimport DirectionsIcon from '@material-ui/icons/Directions';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    padding: '2px 4px',\r\n    display: 'flex',\r\n    alignItems: 'center',\r\n    backgroundColor: theme.palette.background.default,\r\n    width: 400,\r\n  },\r\n  input: {\r\n    marginLeft: theme.spacing(1),\r\n    flex: 1,\r\n  },\r\n  iconButton: {\r\n    padding: 10,\r\n  },\r\n  divider: {\r\n    height: 28,\r\n    margin: 4,\r\n  },\r\n}));\r\n\r\nexport default function CustomizedInputBase() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Paper component=\"form\" className={classes.root}>\r\n      <IconButton className={classes.iconButton} aria-label=\"menu\">\r\n        <MenuIcon />\r\n      </IconButton>\r\n      <InputBase\r\n        className={classes.input}\r\n        placeholder=\"Search Google Maps\"\r\n        inputProps={{ 'aria-label': 'search google maps' }}\r\n      />\r\n      <IconButton type=\"submit\" className={classes.iconButton} aria-label=\"search\">\r\n        <SearchIcon />\r\n      </IconButton>\r\n      <Divider className={classes.divider} orientation=\"vertical\" />\r\n      <IconButton color=\"primary\" className={classes.iconButton} aria-label=\"directions\">\r\n        <DirectionsIcon />\r\n      </IconButton>\r\n    </Paper>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/CustomizedInputs.txt":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/CustomizedInputs.txt ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { alpha, ThemeProvider, withStyles, makeStyles, createTheme } from '@material-ui/core/styles';\r\nimport InputBase from '@material-ui/core/InputBase';\r\nimport InputLabel from '@material-ui/core/InputLabel';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport FormControl from '@material-ui/core/FormControl';\r\nimport { green } from '@material-ui/core/colors';\r\n\r\nconst CssTextField = withStyles({\r\n  root: {\r\n    '& label.Mui-focused': {\r\n      color: 'green',\r\n    },\r\n    '& .MuiInput-underline:after': {\r\n      borderBottomColor: 'green',\r\n    },\r\n    '& .MuiOutlinedInput-root': {\r\n      '& fieldset': {\r\n        borderColor: 'red',\r\n      },\r\n      '&:hover fieldset': {\r\n        borderColor: 'yellow',\r\n      },\r\n      '&.Mui-focused fieldset': {\r\n        borderColor: 'green',\r\n      },\r\n    },\r\n  },\r\n})(TextField);\r\n\r\nconst BootstrapInput = withStyles(theme => ({\r\n  root: {\r\n    'label + &': {\r\n      marginTop: theme.spacing(6),\r\n    },\r\n  },\r\n  input: {\r\n    borderRadius: 4,\r\n    position: 'relative',\r\n    backgroundColor: theme.palette.background.paper,\r\n    border: '1px solid #ced4da',\r\n    fontSize: 16,\r\n    width: 'auto',\r\n    padding: '10px 12px',\r\n    transition: theme.transitions.create(['border-color', 'box-shadow']),\r\n    // Use the system font instead of the default Roboto font.\r\n    fontFamily: [\r\n      '-apple-system',\r\n      'BlinkMacSystemFont',\r\n      '\"Segoe UI\"',\r\n      'Roboto',\r\n      '\"Helvetica Neue\"',\r\n      'Arial',\r\n      'sans-serif',\r\n      '\"Apple Color Emoji\"',\r\n      '\"Segoe UI Emoji\"',\r\n      '\"Segoe UI Symbol\"',\r\n    ].join(','),\r\n    '&:focus': {\r\n      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,\r\n      borderColor: theme.palette.primary.main,\r\n    },\r\n  },\r\n}))(InputBase);\r\n\r\nconst useStylesReddit = makeStyles(theme => ({\r\n  root: {\r\n    border: `1px solid ${theme.palette.borderColor.main}`,\r\n    overflow: 'hidden',\r\n    borderRadius: 4,\r\n    backgroundColor: theme.palette.background.paper,\r\n    transition: theme.transitions.create(['border-color', 'box-shadow']),\r\n    '&:hover': {\r\n      backgroundColor: theme.palette.background.paper,\r\n    },\r\n    '&$focused': {\r\n      backgroundColor: theme.palette.background.paper,\r\n      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,\r\n      borderColor: theme.palette.primary.main,\r\n    },\r\n  },\r\n  focused: {},\r\n}));\r\n\r\nfunction RedditTextField(props) {\r\n  const classes = useStylesReddit();\r\n\r\n  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;\r\n}\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n    flexWrap: 'wrap',\r\n  },\r\n  margin: {\r\n    margin: theme.spacing(1),\r\n  },\r\n}));\r\n\r\nconst ValidationTextField = withStyles({\r\n  root: {\r\n    '& input:valid + fieldset': {\r\n      borderColor: 'green',\r\n      borderWidth: 2,\r\n    },\r\n    '& input:invalid + fieldset': {\r\n      borderColor: 'red',\r\n      borderWidth: 2,\r\n    },\r\n    '& input:valid:focus + fieldset': {\r\n      borderLeftWidth: 6,\r\n      padding: '4px !important', // override inline-style\r\n    },\r\n  },\r\n})(TextField);\r\n\r\nconst theme = createTheme({\r\n  palette: {\r\n    primary: green,\r\n  },\r\n});\r\n\r\nexport default function CustomizedInputs() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <form className={classes.root} noValidate>\r\n      <CssTextField className={classes.margin} id=\"custom-css-standard-input\" label=\"Custom CSS\" />\r\n      <CssTextField className={classes.margin} label=\"Custom CSS\" variant=\"outlined\" id=\"custom-css-outlined-input\" />\r\n      <ThemeProvider theme={theme}>\r\n        <TextField className={classes.margin} label=\"ThemeProvider\" id=\"mui-theme-provider-standard-input\" />\r\n        <TextField\r\n          className={classes.margin}\r\n          label=\"ThemeProvider\"\r\n          variant=\"outlined\"\r\n          id=\"mui-theme-provider-outlined-input\"\r\n        />\r\n      </ThemeProvider>\r\n      <FormControl className={classes.margin}>\r\n        <InputLabel shrink htmlFor=\"bootstrap-input\">\r\n          Bootstrap\r\n        </InputLabel>\r\n        <BootstrapInput defaultValue=\"react-bootstrap\" id=\"bootstrap-input\" />\r\n      </FormControl>\r\n      <RedditTextField\r\n        label=\"Reddit\"\r\n        className={classes.margin}\r\n        defaultValue=\"react-reddit\"\r\n        variant=\"filled\"\r\n        id=\"reddit-input\"\r\n      />\r\n      <InputBase className={classes.margin} defaultValue=\"Naked input\" inputProps={{ 'aria-label': 'naked' }} />\r\n      <ValidationTextField\r\n        className={classes.margin}\r\n        label=\"CSS validation style\"\r\n        required\r\n        variant=\"outlined\"\r\n        defaultValue=\"Success\"\r\n        id=\"validation-outlined-input\"\r\n      />\r\n    </form>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/FormPropsTextFields.txt":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/FormPropsTextFields.txt ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    '& .MuiTextField-root': {\r\n      margin: theme.spacing(1),\r\n      width: '25ch',\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function FormPropsTextFields() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <form className={classes.root} noValidate autoComplete=\"off\">\r\n      <div>\r\n        <TextField required id=\"standard-required\" label=\"Required\" defaultValue=\"Hello World\" />\r\n        <TextField disabled id=\"standard-disabled\" label=\"Disabled\" defaultValue=\"Hello World\" />\r\n        <TextField id=\"standard-password-input\" label=\"Password\" type=\"password\" autoComplete=\"current-password\" />\r\n        <TextField\r\n          id=\"standard-read-only-input\"\r\n          label=\"Read Only\"\r\n          defaultValue=\"Hello World\"\r\n          InputProps={{\r\n            readOnly: true,\r\n          }}\r\n        />\r\n        <TextField\r\n          id=\"standard-number\"\r\n          label=\"Number\"\r\n          type=\"number\"\r\n          InputLabelProps={{\r\n            shrink: true,\r\n          }}\r\n        />\r\n        <TextField id=\"standard-search\" label=\"Search field\" type=\"search\" />\r\n        <TextField\r\n          id=\"standard-helperText\"\r\n          label=\"Helper text\"\r\n          defaultValue=\"Default Value\"\r\n          helperText=\"Some important text\"\r\n        />\r\n      </div>\r\n      <div>\r\n        <TextField required id=\"filled-required\" label=\"Required\" defaultValue=\"Hello World\" variant=\"filled\" />\r\n        <TextField disabled id=\"filled-disabled\" label=\"Disabled\" defaultValue=\"Hello World\" variant=\"filled\" />\r\n        <TextField\r\n          id=\"filled-password-input\"\r\n          label=\"Password\"\r\n          type=\"password\"\r\n          autoComplete=\"current-password\"\r\n          variant=\"filled\"\r\n        />\r\n        <TextField\r\n          id=\"filled-read-only-input\"\r\n          label=\"Read Only\"\r\n          defaultValue=\"Hello World\"\r\n          InputProps={{\r\n            readOnly: true,\r\n          }}\r\n          variant=\"filled\"\r\n        />\r\n        <TextField\r\n          id=\"filled-number\"\r\n          label=\"Number\"\r\n          type=\"number\"\r\n          InputLabelProps={{\r\n            shrink: true,\r\n          }}\r\n          variant=\"filled\"\r\n        />\r\n        <TextField id=\"filled-search\" label=\"Search field\" type=\"search\" variant=\"filled\" />\r\n        <TextField\r\n          id=\"filled-helperText\"\r\n          label=\"Helper text\"\r\n          defaultValue=\"Default Value\"\r\n          helperText=\"Some important text\"\r\n          variant=\"filled\"\r\n        />\r\n      </div>\r\n      <div>\r\n        <TextField required id=\"outlined-required\" label=\"Required\" defaultValue=\"Hello World\" variant=\"outlined\" />\r\n        <TextField disabled id=\"outlined-disabled\" label=\"Disabled\" defaultValue=\"Hello World\" variant=\"outlined\" />\r\n        <TextField\r\n          id=\"outlined-password-input\"\r\n          label=\"Password\"\r\n          type=\"password\"\r\n          autoComplete=\"current-password\"\r\n          variant=\"outlined\"\r\n        />\r\n        <TextField\r\n          id=\"outlined-read-only-input\"\r\n          label=\"Read Only\"\r\n          defaultValue=\"Hello World\"\r\n          InputProps={{\r\n            readOnly: true,\r\n          }}\r\n          variant=\"outlined\"\r\n        />\r\n        <TextField\r\n          id=\"outlined-number\"\r\n          label=\"Number\"\r\n          type=\"number\"\r\n          InputLabelProps={{\r\n            shrink: true,\r\n          }}\r\n          variant=\"outlined\"\r\n        />\r\n        <TextField id=\"outlined-search\" label=\"Search field\" type=\"search\" variant=\"outlined\" />\r\n        <TextField\r\n          id=\"outlined-helperText\"\r\n          label=\"Helper text\"\r\n          defaultValue=\"Default Value\"\r\n          helperText=\"Some important text\"\r\n          variant=\"outlined\"\r\n        />\r\n      </div>\r\n    </form>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/FormattedInputs.txt":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/FormattedInputs.txt ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport MaskedInput from 'react-text-mask';\r\nimport NumberFormat from 'react-number-format';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Input from '@material-ui/core/Input';\r\nimport InputLabel from '@material-ui/core/InputLabel';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport FormControl from '@material-ui/core/FormControl';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    '& > *': {\r\n      margin: theme.spacing(1),\r\n    },\r\n  },\r\n}));\r\n\r\nfunction TextMaskCustom(props) {\r\n  const { inputRef, ...other } = props;\r\n\r\n  return (\r\n    <MaskedInput\r\n      {...other}\r\n      ref={ref => {\r\n        inputRef(ref ? ref.inputElement : null);\r\n      }}\r\n      mask={['(', /[1-9]/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]}\r\n      placeholderChar={'\\u2000'}\r\n      showMask\r\n    />\r\n  );\r\n}\r\n\r\nTextMaskCustom.propTypes = {\r\n  inputRef: PropTypes.func.isRequired,\r\n};\r\n\r\nfunction NumberFormatCustom(props) {\r\n  const { inputRef, onChange, ...other } = props;\r\n\r\n  return (\r\n    <NumberFormat\r\n      {...other}\r\n      getInputRef={inputRef}\r\n      onValueChange={values => {\r\n        onChange({\r\n          target: {\r\n            name: props.name,\r\n            value: values.value,\r\n          },\r\n        });\r\n      }}\r\n      thousandSeparator\r\n      isNumericString\r\n      prefix=\"$\"\r\n    />\r\n  );\r\n}\r\n\r\nNumberFormatCustom.propTypes = {\r\n  inputRef: PropTypes.func.isRequired,\r\n  name: PropTypes.string.isRequired,\r\n  onChange: PropTypes.func.isRequired,\r\n};\r\n\r\nexport default function FormattedInputs() {\r\n  const classes = useStyles();\r\n  const [values, setValues] = React.useState({\r\n    textmask: '(1  )    -    ',\r\n    numberformat: '1320',\r\n  });\r\n\r\n  const handleChange = event => {\r\n    setValues({\r\n      ...values,\r\n      [event.target.name]: event.target.value,\r\n    });\r\n  };\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <FormControl>\r\n        <InputLabel htmlFor=\"formatted-text-mask-input\">react-text-mask</InputLabel>\r\n        <Input\r\n          value={values.textmask}\r\n          onChange={handleChange}\r\n          name=\"textmask\"\r\n          id=\"formatted-text-mask-input\"\r\n          inputComponent={TextMaskCustom}\r\n        />\r\n      </FormControl>\r\n      <TextField\r\n        label=\"react-number-format\"\r\n        value={values.numberformat}\r\n        onChange={handleChange}\r\n        name=\"numberformat\"\r\n        id=\"formatted-numberformat-input\"\r\n        InputProps={{\r\n          inputComponent: NumberFormatCustom,\r\n        }}\r\n      />\r\n    </div>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/InputAdornments.txt":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/InputAdornments.txt ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport clsx from 'clsx';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport IconButton from '@material-ui/core/IconButton';\r\nimport Input from '@material-ui/core/Input';\r\nimport FilledInput from '@material-ui/core/FilledInput';\r\nimport OutlinedInput from '@material-ui/core/OutlinedInput';\r\nimport InputLabel from '@material-ui/core/InputLabel';\r\nimport InputAdornment from '@material-ui/core/InputAdornment';\r\nimport FormHelperText from '@material-ui/core/FormHelperText';\r\nimport FormControl from '@material-ui/core/FormControl';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Visibility from '@material-ui/icons/Visibility';\r\nimport VisibilityOff from '@material-ui/icons/VisibilityOff';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n    flexWrap: 'wrap',\r\n  },\r\n  margin: {\r\n    margin: theme.spacing(1),\r\n  },\r\n  withoutLabel: {\r\n    marginTop: theme.spacing(3),\r\n  },\r\n  textField: {\r\n    width: '25ch',\r\n  },\r\n}));\r\n\r\nexport default function InputAdornments() {\r\n  const classes = useStyles();\r\n  const [values, setValues] = React.useState({\r\n    amount: '',\r\n    password: '',\r\n    weight: '',\r\n    weightRange: '',\r\n    showPassword: false,\r\n  });\r\n\r\n  const handleChange = prop => event => {\r\n    setValues({ ...values, [prop]: event.target.value });\r\n  };\r\n\r\n  const handleClickShowPassword = () => {\r\n    setValues({\r\n      ...values,\r\n      showPassword: !values.showPassword,\r\n    });\r\n  };\r\n\r\n  const handleMouseDownPassword = event => {\r\n    event.preventDefault();\r\n  };\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <div>\r\n        <TextField\r\n          label=\"With normal TextField\"\r\n          id=\"standard-start-adornment\"\r\n          className={clsx(classes.margin, classes.textField)}\r\n          InputProps={{\r\n            startAdornment: <InputAdornment position=\"start\">Kg</InputAdornment>,\r\n          }}\r\n        />\r\n        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>\r\n          <Input\r\n            id=\"standard-adornment-weight\"\r\n            value={values.weight}\r\n            onChange={handleChange('weight')}\r\n            endAdornment={<InputAdornment position=\"end\">Kg</InputAdornment>}\r\n            aria-describedby=\"standard-weight-helper-text\"\r\n            inputProps={{\r\n              'aria-label': 'weight',\r\n            }}\r\n          />\r\n          <FormHelperText id=\"standard-weight-helper-text\">Weight</FormHelperText>\r\n        </FormControl>\r\n        <FormControl className={clsx(classes.margin, classes.textField)}>\r\n          <InputLabel htmlFor=\"standard-adornment-password\">Password</InputLabel>\r\n          <Input\r\n            id=\"standard-adornment-password\"\r\n            type={values.showPassword ? 'text' : 'password'}\r\n            value={values.password}\r\n            onChange={handleChange('password')}\r\n            endAdornment={\r\n              <InputAdornment position=\"end\">\r\n                <IconButton\r\n                  aria-label=\"toggle password visibility\"\r\n                  onClick={handleClickShowPassword}\r\n                  onMouseDown={handleMouseDownPassword}>\r\n                  {values.showPassword ? <Visibility /> : <VisibilityOff />}\r\n                </IconButton>\r\n              </InputAdornment>\r\n            }\r\n          />\r\n        </FormControl>\r\n        <FormControl fullWidth className={classes.margin}>\r\n          <InputLabel htmlFor=\"standard-adornment-amount\">Amount</InputLabel>\r\n          <Input\r\n            id=\"standard-adornment-amount\"\r\n            value={values.amount}\r\n            onChange={handleChange('amount')}\r\n            startAdornment={<InputAdornment position=\"start\">$</InputAdornment>}\r\n          />\r\n        </FormControl>\r\n      </div>\r\n      <div>\r\n        <TextField\r\n          label=\"With normal TextField\"\r\n          id=\"filled-start-adornment\"\r\n          className={clsx(classes.margin, classes.textField)}\r\n          InputProps={{\r\n            startAdornment: <InputAdornment position=\"start\">Kg</InputAdornment>,\r\n          }}\r\n          variant=\"filled\"\r\n        />\r\n        <FormControl className={clsx(classes.margin, classes.textField)} variant=\"filled\">\r\n          <FilledInput\r\n            id=\"filled-adornment-weight\"\r\n            value={values.weight}\r\n            onChange={handleChange('weight')}\r\n            endAdornment={<InputAdornment position=\"end\">Kg</InputAdornment>}\r\n            aria-describedby=\"filled-weight-helper-text\"\r\n            inputProps={{\r\n              'aria-label': 'weight',\r\n            }}\r\n          />\r\n          <FormHelperText id=\"filled-weight-helper-text\">Weight</FormHelperText>\r\n        </FormControl>\r\n        <FormControl className={clsx(classes.margin, classes.textField)} variant=\"filled\">\r\n          <InputLabel htmlFor=\"filled-adornment-password\">Password</InputLabel>\r\n          <FilledInput\r\n            id=\"filled-adornment-password\"\r\n            type={values.showPassword ? 'text' : 'password'}\r\n            value={values.password}\r\n            onChange={handleChange('password')}\r\n            endAdornment={\r\n              <InputAdornment position=\"end\">\r\n                <IconButton\r\n                  aria-label=\"toggle password visibility\"\r\n                  onClick={handleClickShowPassword}\r\n                  onMouseDown={handleMouseDownPassword}\r\n                  edge=\"end\">\r\n                  {values.showPassword ? <Visibility /> : <VisibilityOff />}\r\n                </IconButton>\r\n              </InputAdornment>\r\n            }\r\n          />\r\n        </FormControl>\r\n        <FormControl fullWidth className={classes.margin} variant=\"filled\">\r\n          <InputLabel htmlFor=\"filled-adornment-amount\">Amount</InputLabel>\r\n          <FilledInput\r\n            id=\"filled-adornment-amount\"\r\n            value={values.amount}\r\n            onChange={handleChange('amount')}\r\n            startAdornment={<InputAdornment position=\"start\">$</InputAdornment>}\r\n          />\r\n        </FormControl>\r\n      </div>\r\n      <div>\r\n        <TextField\r\n          label=\"With normal TextField\"\r\n          id=\"outlined-start-adornment\"\r\n          className={clsx(classes.margin, classes.textField)}\r\n          InputProps={{\r\n            startAdornment: <InputAdornment position=\"start\">Kg</InputAdornment>,\r\n          }}\r\n          variant=\"outlined\"\r\n        />\r\n        <FormControl className={clsx(classes.margin, classes.textField)} variant=\"outlined\">\r\n          <OutlinedInput\r\n            id=\"outlined-adornment-weight\"\r\n            value={values.weight}\r\n            onChange={handleChange('weight')}\r\n            endAdornment={<InputAdornment position=\"end\">Kg</InputAdornment>}\r\n            aria-describedby=\"outlined-weight-helper-text\"\r\n            inputProps={{\r\n              'aria-label': 'weight',\r\n            }}\r\n            labelWidth={0}\r\n          />\r\n          <FormHelperText id=\"outlined-weight-helper-text\">Weight</FormHelperText>\r\n        </FormControl>\r\n        <FormControl className={clsx(classes.margin, classes.textField)} variant=\"outlined\">\r\n          <InputLabel htmlFor=\"outlined-adornment-password\">Password</InputLabel>\r\n          <OutlinedInput\r\n            id=\"outlined-adornment-password\"\r\n            type={values.showPassword ? 'text' : 'password'}\r\n            value={values.password}\r\n            onChange={handleChange('password')}\r\n            endAdornment={\r\n              <InputAdornment position=\"end\">\r\n                <IconButton\r\n                  aria-label=\"toggle password visibility\"\r\n                  onClick={handleClickShowPassword}\r\n                  onMouseDown={handleMouseDownPassword}\r\n                  edge=\"end\">\r\n                  {values.showPassword ? <Visibility /> : <VisibilityOff />}\r\n                </IconButton>\r\n              </InputAdornment>\r\n            }\r\n            labelWidth={70}\r\n          />\r\n        </FormControl>\r\n        <FormControl fullWidth className={classes.margin} variant=\"outlined\">\r\n          <InputLabel htmlFor=\"outlined-adornment-amount\">Amount</InputLabel>\r\n          <OutlinedInput\r\n            id=\"outlined-adornment-amount\"\r\n            value={values.amount}\r\n            onChange={handleChange('amount')}\r\n            startAdornment={<InputAdornment position=\"start\">$</InputAdornment>}\r\n            labelWidth={60}\r\n          />\r\n        </FormControl>\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/InputWithIcon.txt":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/InputWithIcon.txt ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Input from '@material-ui/core/Input';\r\nimport InputLabel from '@material-ui/core/InputLabel';\r\nimport InputAdornment from '@material-ui/core/InputAdornment';\r\nimport FormControl from '@material-ui/core/FormControl';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Grid from '@material-ui/core/Grid';\r\nimport AccountCircle from '@material-ui/icons/AccountCircle';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  margin: {\r\n    margin: theme.spacing(1),\r\n  },\r\n}));\r\n\r\nexport default function InputWithIcon() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div>\r\n      <FormControl className={classes.margin}>\r\n        <InputLabel htmlFor=\"input-with-icon-adornment\">With a start adornment</InputLabel>\r\n        <Input\r\n          id=\"input-with-icon-adornment\"\r\n          startAdornment={\r\n            <InputAdornment position=\"start\">\r\n              <AccountCircle />\r\n            </InputAdornment>\r\n          }\r\n        />\r\n      </FormControl>\r\n      <TextField\r\n        className={classes.margin}\r\n        id=\"input-with-icon-textfield\"\r\n        label=\"TextField\"\r\n        InputProps={{\r\n          startAdornment: (\r\n            <InputAdornment position=\"start\">\r\n              <AccountCircle />\r\n            </InputAdornment>\r\n          ),\r\n        }}\r\n      />\r\n      <div className={classes.margin}>\r\n        <Grid container spacing={1} alignItems=\"flex-end\">\r\n          <Grid item>\r\n            <AccountCircle />\r\n          </Grid>\r\n          <Grid item>\r\n            <TextField id=\"input-with-icon-grid\" label=\"With a grid\" />\r\n          </Grid>\r\n        </Grid>\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/Inputs.txt":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/Inputs.txt ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Input from '@material-ui/core/Input';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    '& > *': {\r\n      margin: theme.spacing(1),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function Inputs() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <form className={classes.root} noValidate autoComplete=\"off\">\r\n      <Input defaultValue=\"Hello world\" inputProps={{ 'aria-label': 'description' }} />\r\n      <Input placeholder=\"Placeholder\" inputProps={{ 'aria-label': 'description' }} />\r\n      <Input defaultValue=\"Disabled\" disabled inputProps={{ 'aria-label': 'description' }} />\r\n      <Input defaultValue=\"Error\" error inputProps={{ 'aria-label': 'description' }} />\r\n    </form>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/LayoutTextFields.txt":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/LayoutTextFields.txt ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport TextField from '@material-ui/core/TextField';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n    flexWrap: 'wrap',\r\n  },\r\n  textField: {\r\n    marginLeft: theme.spacing(1),\r\n    marginRight: theme.spacing(1),\r\n    width: '25ch',\r\n  },\r\n}));\r\n\r\nexport default function LayoutTextFields() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <div>\r\n        <TextField\r\n          id=\"standard-full-width\"\r\n          label=\"Label\"\r\n          style={{ margin: 8 }}\r\n          placeholder=\"Placeholder\"\r\n          helperText=\"Full width!\"\r\n          fullWidth\r\n          margin=\"normal\"\r\n          InputLabelProps={{\r\n            shrink: true,\r\n          }}\r\n        />\r\n        <TextField\r\n          label=\"None\"\r\n          id=\"margin-none\"\r\n          defaultValue=\"Default Value\"\r\n          className={classes.textField}\r\n          helperText=\"Some important text\"\r\n        />\r\n        <TextField\r\n          label=\"Dense\"\r\n          id=\"margin-dense\"\r\n          defaultValue=\"Default Value\"\r\n          className={classes.textField}\r\n          helperText=\"Some important text\"\r\n          margin=\"dense\"\r\n        />\r\n        <TextField\r\n          label=\"Normal\"\r\n          id=\"margin-normal\"\r\n          defaultValue=\"Default Value\"\r\n          className={classes.textField}\r\n          helperText=\"Some important text\"\r\n          margin=\"normal\"\r\n        />\r\n      </div>\r\n      <div>\r\n        <TextField\r\n          id=\"filled-full-width\"\r\n          label=\"Label\"\r\n          style={{ margin: 8 }}\r\n          placeholder=\"Placeholder\"\r\n          helperText=\"Full width!\"\r\n          fullWidth\r\n          margin=\"normal\"\r\n          InputLabelProps={{\r\n            shrink: true,\r\n          }}\r\n          variant=\"filled\"\r\n        />\r\n        <TextField\r\n          label=\"None\"\r\n          id=\"filled-margin-none\"\r\n          defaultValue=\"Default Value\"\r\n          className={classes.textField}\r\n          helperText=\"Some important text\"\r\n          variant=\"filled\"\r\n        />\r\n        <TextField\r\n          label=\"Dense\"\r\n          id=\"filled-margin-dense\"\r\n          defaultValue=\"Default Value\"\r\n          className={classes.textField}\r\n          helperText=\"Some important text\"\r\n          margin=\"dense\"\r\n          variant=\"filled\"\r\n        />\r\n        <TextField\r\n          label=\"Normal\"\r\n          id=\"filled-margin-normal\"\r\n          defaultValue=\"Default Value\"\r\n          className={classes.textField}\r\n          helperText=\"Some important text\"\r\n          margin=\"normal\"\r\n          variant=\"filled\"\r\n        />\r\n      </div>\r\n      <div>\r\n        <TextField\r\n          id=\"outlined-full-width\"\r\n          label=\"Label\"\r\n          style={{ margin: 8 }}\r\n          placeholder=\"Placeholder\"\r\n          helperText=\"Full width!\"\r\n          fullWidth\r\n          margin=\"normal\"\r\n          InputLabelProps={{\r\n            shrink: true,\r\n          }}\r\n          variant=\"outlined\"\r\n        />\r\n        <TextField\r\n          label=\"None\"\r\n          id=\"outlined-margin-none\"\r\n          defaultValue=\"Default Value\"\r\n          className={classes.textField}\r\n          helperText=\"Some important text\"\r\n          variant=\"outlined\"\r\n        />\r\n        <TextField\r\n          label=\"Dense\"\r\n          id=\"outlined-margin-dense\"\r\n          defaultValue=\"Default Value\"\r\n          className={classes.textField}\r\n          helperText=\"Some important text\"\r\n          margin=\"dense\"\r\n          variant=\"outlined\"\r\n        />\r\n        <TextField\r\n          label=\"Normal\"\r\n          id=\"outlined-margin-normal\"\r\n          defaultValue=\"Default Value\"\r\n          className={classes.textField}\r\n          helperText=\"Some important text\"\r\n          margin=\"normal\"\r\n          variant=\"outlined\"\r\n        />\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/MultilineTextFields.txt":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/MultilineTextFields.txt ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport TextField from '@material-ui/core/TextField';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    '& .MuiTextField-root': {\r\n      margin: theme.spacing(1),\r\n      width: '25ch',\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function MultilineTextFields() {\r\n  const classes = useStyles();\r\n  const [value, setValue] = React.useState('Controlled');\r\n\r\n  const handleChange = event => {\r\n    setValue(event.target.value);\r\n  };\r\n\r\n  return (\r\n    <form className={classes.root} noValidate autoComplete=\"off\">\r\n      <div>\r\n        <TextField\r\n          id=\"standard-multiline-flexible\"\r\n          label=\"Multiline\"\r\n          multiline\r\n          maxRows={4}\r\n          value={value}\r\n          onChange={handleChange}\r\n        />\r\n        <TextField id=\"standard-textarea\" label=\"Multiline Placeholder\" placeholder=\"Placeholder\" multiline />\r\n        <TextField id=\"standard-multiline-static\" label=\"Multiline\" multiline rows={4} defaultValue=\"Default Value\" />\r\n      </div>\r\n      <div>\r\n        <TextField\r\n          id=\"filled-multiline-flexible\"\r\n          label=\"Multiline\"\r\n          multiline\r\n          maxRows={4}\r\n          value={value}\r\n          onChange={handleChange}\r\n          variant=\"filled\"\r\n        />\r\n        <TextField id=\"filled-textarea\" label=\"Multiline Placeholder\" placeholder=\"Placeholder\" multiline variant=\"filled\" />\r\n        <TextField\r\n          id=\"filled-multiline-static\"\r\n          label=\"Multiline\"\r\n          multiline\r\n          rows={4}\r\n          defaultValue=\"Default Value\"\r\n          variant=\"filled\"\r\n        />\r\n      </div>\r\n      <div>\r\n        <TextField\r\n          id=\"outlined-multiline-flexible\"\r\n          label=\"Multiline\"\r\n          multiline\r\n          maxRows={4}\r\n          value={value}\r\n          onChange={handleChange}\r\n          variant=\"outlined\"\r\n        />\r\n        <TextField\r\n          id=\"outlined-textarea\"\r\n          label=\"Multiline Placeholder\"\r\n          placeholder=\"Placeholder\"\r\n          multiline\r\n          variant=\"outlined\"\r\n        />\r\n        <TextField\r\n          id=\"outlined-multiline-static\"\r\n          label=\"Multiline\"\r\n          multiline\r\n          rows={4}\r\n          defaultValue=\"Default Value\"\r\n          variant=\"outlined\"\r\n        />\r\n      </div>\r\n    </form>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/SelectTextFields.txt":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/SelectTextFields.txt ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport MenuItem from '@material-ui/core/MenuItem';\r\n\r\nconst currencies = [\r\n  {\r\n    value: 'USD',\r\n    label: '$',\r\n  },\r\n  {\r\n    value: 'EUR',\r\n    label: '€',\r\n  },\r\n  {\r\n    value: 'BTC',\r\n    label: '฿',\r\n  },\r\n  {\r\n    value: 'JPY',\r\n    label: '¥',\r\n  },\r\n];\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    '& .MuiTextField-root': {\r\n      margin: theme.spacing(1),\r\n      width: '25ch',\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function MultilineTextFields() {\r\n  const classes = useStyles();\r\n  const [currency, setCurrency] = React.useState('EUR');\r\n\r\n  const handleChange = event => {\r\n    setCurrency(event.target.value);\r\n  };\r\n\r\n  return (\r\n    <form className={classes.root} noValidate autoComplete=\"off\">\r\n      <div>\r\n        <TextField\r\n          id=\"standard-select-currency\"\r\n          select\r\n          label=\"Select\"\r\n          value={currency}\r\n          onChange={handleChange}\r\n          helperText=\"Please select your currency\">\r\n          {currencies.map(option => (\r\n            <MenuItem key={option.value} value={option.value}>\r\n              {option.label}\r\n            </MenuItem>\r\n          ))}\r\n        </TextField>\r\n        <TextField\r\n          id=\"standard-select-currency-native\"\r\n          select\r\n          label=\"Native select\"\r\n          value={currency}\r\n          onChange={handleChange}\r\n          SelectProps={{\r\n            native: true,\r\n          }}\r\n          helperText=\"Please select your currency\">\r\n          {currencies.map(option => (\r\n            <option key={option.value} value={option.value}>\r\n              {option.label}\r\n            </option>\r\n          ))}\r\n        </TextField>\r\n      </div>\r\n      <div>\r\n        <TextField\r\n          id=\"filled-select-currency\"\r\n          select\r\n          label=\"Select\"\r\n          value={currency}\r\n          onChange={handleChange}\r\n          helperText=\"Please select your currency\"\r\n          variant=\"filled\">\r\n          {currencies.map(option => (\r\n            <MenuItem key={option.value} value={option.value}>\r\n              {option.label}\r\n            </MenuItem>\r\n          ))}\r\n        </TextField>\r\n        <TextField\r\n          id=\"filled-select-currency-native\"\r\n          select\r\n          label=\"Native select\"\r\n          value={currency}\r\n          onChange={handleChange}\r\n          SelectProps={{\r\n            native: true,\r\n          }}\r\n          helperText=\"Please select your currency\"\r\n          variant=\"filled\">\r\n          {currencies.map(option => (\r\n            <option key={option.value} value={option.value}>\r\n              {option.label}\r\n            </option>\r\n          ))}\r\n        </TextField>\r\n      </div>\r\n      <div>\r\n        <TextField\r\n          id=\"outlined-select-currency\"\r\n          select\r\n          label=\"Select\"\r\n          value={currency}\r\n          onChange={handleChange}\r\n          helperText=\"Please select your currency\"\r\n          variant=\"outlined\">\r\n          {currencies.map(option => (\r\n            <MenuItem key={option.value} value={option.value}>\r\n              {option.label}\r\n            </MenuItem>\r\n          ))}\r\n        </TextField>\r\n        <TextField\r\n          id=\"outlined-select-currency-native\"\r\n          select\r\n          label=\"Native select\"\r\n          value={currency}\r\n          onChange={handleChange}\r\n          SelectProps={{\r\n            native: true,\r\n          }}\r\n          helperText=\"Please select your currency\"\r\n          variant=\"outlined\">\r\n          {currencies.map(option => (\r\n            <option key={option.value} value={option.value}>\r\n              {option.label}\r\n            </option>\r\n          ))}\r\n        </TextField>\r\n      </div>\r\n    </form>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/StateTextFields.txt":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/StateTextFields.txt ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    '& .MuiTextField-root': {\r\n      margin: theme.spacing(1),\r\n      width: '25ch',\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function StateTextFields() {\r\n  const classes = useStyles();\r\n  const [name, setName] = React.useState('Cat in the Hat');\r\n  const handleChange = event => {\r\n    setName(event.target.value);\r\n  };\r\n\r\n  return (\r\n    <form className={classes.root} noValidate autoComplete=\"off\">\r\n      <div>\r\n        <TextField id=\"standard-name\" label=\"Name\" value={name} onChange={handleChange} />\r\n        <TextField id=\"standard-uncontrolled\" label=\"Uncontrolled\" defaultValue=\"foo\" />\r\n      </div>\r\n      <div>\r\n        <TextField id=\"filled-name\" label=\"Name\" value={name} onChange={handleChange} variant=\"filled\" />\r\n        <TextField id=\"filled-uncontrolled\" label=\"Uncontrolled\" defaultValue=\"foo\" variant=\"filled\" />\r\n      </div>\r\n      <div>\r\n        <TextField id=\"outlined-name\" label=\"Name\" value={name} onChange={handleChange} variant=\"outlined\" />\r\n        <TextField id=\"outlined-uncontrolled\" label=\"Uncontrolled\" defaultValue=\"foo\" variant=\"outlined\" />\r\n      </div>\r\n    </form>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/TextFieldSizes.txt":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/TextFieldSizes.txt ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport TextField from '@material-ui/core/TextField';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    '& .MuiTextField-root': {\r\n      margin: theme.spacing(1),\r\n      width: 200,\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function TextFieldSizes() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <form className={classes.root} noValidate autoComplete=\"off\">\r\n      <div>\r\n        <TextField label=\"Size\" id=\"standard-size-small\" defaultValue=\"Small\" size=\"small\" />\r\n        <TextField label=\"Size\" id=\"standard-size-normal\" defaultValue=\"Normal\" />\r\n      </div>\r\n      <div>\r\n        <TextField label=\"Size\" id=\"filled-size-small\" defaultValue=\"Small\" variant=\"filled\" size=\"small\" />\r\n        <TextField label=\"Size\" id=\"filled-size-normal\" defaultValue=\"Normal\" variant=\"filled\" />\r\n      </div>\r\n      <div>\r\n        <TextField label=\"Size\" id=\"outlined-size-small\" defaultValue=\"Small\" variant=\"outlined\" size=\"small\" />\r\n        <TextField label=\"Size\" id=\"outlined-size-normal\" defaultValue=\"Normal\" variant=\"outlined\" />\r\n      </div>\r\n    </form>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/ValidationTextFields.txt":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/ValidationTextFields.txt ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    '& .MuiTextField-root': {\r\n      margin: theme.spacing(1),\r\n      width: 200,\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function ValidationTextFields() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <form className={classes.root} noValidate autoComplete=\"off\">\r\n      <div>\r\n        <TextField error id=\"standard-error\" label=\"Error\" defaultValue=\"Hello World\" />\r\n        <TextField\r\n          error\r\n          id=\"standard-error-helper-text\"\r\n          label=\"Error\"\r\n          defaultValue=\"Hello World\"\r\n          helperText=\"Incorrect entry.\"\r\n        />\r\n      </div>\r\n      <div>\r\n        <TextField error id=\"filled-error\" label=\"Error\" defaultValue=\"Hello World\" variant=\"filled\" />\r\n        <TextField\r\n          error\r\n          id=\"filled-error-helper-text\"\r\n          label=\"Error\"\r\n          defaultValue=\"Hello World\"\r\n          helperText=\"Incorrect entry.\"\r\n          variant=\"filled\"\r\n        />\r\n      </div>\r\n      <div>\r\n        <TextField error id=\"outlined-error\" label=\"Error\" defaultValue=\"Hello World\" variant=\"outlined\" />\r\n        <TextField\r\n          error\r\n          id=\"outlined-error-helper-text\"\r\n          label=\"Error\"\r\n          defaultValue=\"Hello World\"\r\n          helperText=\"Incorrect entry.\"\r\n          variant=\"outlined\"\r\n        />\r\n      </div>\r\n    </form>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/react-text-mask/dist/reactTextMask.js":
/*!************************************************************!*\
  !*** ./node_modules/react-text-mask/dist/reactTextMask.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js")):0}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(3);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(f).default}});var c=r(11),p=n(c),d=r(9),h=n(d),v=r(5),y=n(v),m=r(2),b=function(e){function t(){var e;i(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var u=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return u.setRef=u.setRef.bind(u),u.onBlur=u.onBlur.bind(u),u.onChange=u.onChange.bind(u),u}return u(t,e),l(t,[{key:"setRef",value:function(e){this.inputElement=e}},{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0,y.default)(s({inputElement:this.inputElement},e)),this.textMaskInputElement.update(t)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.value,n=t.pipe,o=t.mask,i=t.guide,a=t.placeholderChar,u=t.showMask,s={guide:i,placeholderChar:a,showMask:u},l="function"==typeof n&&"function"==typeof e.pipe?n.toString()!==e.pipe.toString():(0,m.isNil)(n)&&!(0,m.isNil)(e.pipe)||!(0,m.isNil)(n)&&(0,m.isNil)(e.pipe),f=o.toString()!==e.mask.toString(),c=Object.keys(s).some(function(t){return s[t]!==e[t]})||f||l,p=r!==this.inputElement.value;(p||c)&&this.initTextMask()}},{key:"render",value:function e(){var t=this.props,e=t.render,r=o(t,["render"]);return delete r.mask,delete r.guide,delete r.pipe,delete r.placeholderChar,delete r.keepCharPositions,delete r.value,delete r.onBlur,delete r.onChange,delete r.showMask,e(this.setRef,s({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},r))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(),"function"==typeof this.props.onChange&&this.props.onChange(e)}},{key:"onBlur",value:function(e){"function"==typeof this.props.onBlur&&this.props.onBlur(e)}}]),t}(p.default.PureComponent);t.default=b,b.propTypes={mask:h.default.oneOfType([h.default.array,h.default.func,h.default.bool,h.default.shape({mask:h.default.oneOfType([h.default.array,h.default.func]),pipe:h.default.func})]).isRequired,guide:h.default.bool,value:h.default.oneOfType([h.default.string,h.default.number]),pipe:h.default.func,placeholderChar:h.default.string,keepCharPositions:h.default.bool,showMask:h.default.bool},b.defaultProps={render:function(e,t){return p.default.createElement("input",s({ref:e},t))}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function"},function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(t)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?t:e}).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){return"undefined"==typeof e||null===e}function s(e){for(var t=[],r=void 0;r=e.indexOf(c),r!==-1;)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.isArray=o,t.isString=i,t.isNumber=a,t.isNil=u,t.processCaretTraps=s;var l=r(1),f=[],c="[]"},function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,i.isArray)(t)){if(("undefined"==typeof t?"undefined":o(t))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=t(e,r),t=(0,i.processCaretTraps)(t).maskWithoutCaretTraps}var n=r.guide,l=void 0===n||n,f=r.previousConformedValue,c=void 0===f?s:f,p=r.placeholderChar,d=void 0===p?a.placeholderChar:p,h=r.placeholder,v=void 0===h?(0,i.convertMaskToPlaceholder)(t,d):h,y=r.currentCaretPosition,m=r.keepCharPositions,b=l===!1&&void 0!==c,g=e.length,k=c.length,C=v.length,O=t.length,T=g-k,P=T>0,x=y+(P?-T:0),w=x+Math.abs(T);if(m===!0&&!P){for(var S=s,_=x;_<w;_++)v[_]===d&&(S+=d);e=e.slice(0,x)+S+e.slice(x,g)}for(var M=e.split(s).map(function(e,t){return{char:e,isNew:t>=x&&t<w}}),j=g-1;j>=0;j--){var E=M[j].char;if(E!==d){var R=j>=x&&k===O;E===v[R?j-T:j]&&M.splice(j,1)}}var V=s,N=!1;e:for(var A=0;A<C;A++){var B=v[A];if(B===d){if(M.length>0)for(;M.length>0;){var I=M.shift(),F=I.char,q=I.isNew;if(F===d&&b!==!0){V+=d;continue e}if(t[A].test(F)){if(m===!0&&q!==!1&&c!==s&&l!==!1&&P){for(var D=M.length,L=null,W=0;W<D;W++){var J=M[W];if(J.char!==d&&J.isNew===!1)break;if(J.char===d){L=W;break}}null!==L?(V+=F,M.splice(L,1)):A--}else V+=F;continue e}N=!0}b===!1&&(V+=v.substr(A,C));break}V+=B}if(b&&P===!1){for(var U=null,H=0;H<V.length;H++)v[H]===d&&(U=H);V=null!==U?V.substr(0,U+1):s}return{conformedValue:V,meta:{someCharsRejected:N}}}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n;var i=r(2),a=r(1),u=[],s=""},function(e,t){"use strict";function r(e){var t=e.previousConformedValue,r=void 0===t?o:t,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,s=void 0===u?0:u,l=e.conformedValue,f=e.rawValue,c=e.placeholderChar,p=e.placeholder,d=e.indexesOfPipedChars,h=void 0===d?n:d,v=e.caretTrapIndexes,y=void 0===v?n:v;if(0===s||!f.length)return 0;var m=f.length,b=r.length,g=p.length,k=l.length,C=m-b,O=C>0,T=0===b,P=C>1&&!O&&!T;if(P)return s;var x=O&&(r===l||l===p),w=0,S=void 0,_=void 0;if(x)w=s-C;else{var M=l.toLowerCase(),j=f.toLowerCase(),E=j.substr(0,s).split(o),R=E.filter(function(e){return M.indexOf(e)!==-1});_=R[R.length-1];var V=a.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,N=p.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,A=N!==V,B=void 0!==a[R.length-1]&&void 0!==p[R.length-2]&&a[R.length-1]!==c&&a[R.length-1]!==p[R.length-1]&&a[R.length-1]===p[R.length-2];!O&&(A||B)&&V>0&&p.indexOf(_)>-1&&void 0!==f[s]&&(S=!0,_=f[s]);for(var I=h.map(function(e){return M[e]}),F=I.filter(function(e){return e===_}).length,q=R.filter(function(e){return e===_}).length,D=p.substr(0,p.indexOf(c)).split(o).filter(function(e,t){return e===_&&f[t]!==e}).length,L=D+q+F+(S?1:0),W=0,J=0;J<k;J++){var U=M[J];if(w=J+1,U===_&&W++,W>=L)break}}if(O){for(var H=w,Y=w;Y<=g;Y++)if(p[Y]===c&&(H=Y),p[Y]===c||y.indexOf(Y)!==-1||Y===g)return H}else if(S){for(var z=w-1;z>=0;z--)if(l[z]===_||y.indexOf(z)!==-1||0===z)return z}else for(var G=w;G>=0;G--)if(p[G-1]===c||y.indexOf(G)!==-1||0===G)return G}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=[],o=""},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,l=n.mask,c=n.guide,y=n.pipe,b=n.placeholderChar,g=void 0===b?h.placeholderChar:b,k=n.keepCharPositions,C=void 0!==k&&k,O=n.showMask,T=void 0!==O&&O;if("undefined"==typeof r&&(r=o.value),r!==t.previousConformedValue){("undefined"==typeof l?"undefined":s(l))===m&&void 0!==l.pipe&&void 0!==l.mask&&(y=l.pipe,l=l.mask);var P=void 0,x=void 0;if(l instanceof Array&&(P=(0,d.convertMaskToPlaceholder)(l,g)),l!==!1){var w=a(r),S=o.selectionEnd,_=t.previousConformedValue,M=t.previousPlaceholder,j=void 0;if(("undefined"==typeof l?"undefined":s(l))===h.strFunction){if(x=l(w,{currentCaretPosition:S,previousConformedValue:_,placeholderChar:g}),x===!1)return;var E=(0,d.processCaretTraps)(x),R=E.maskWithoutCaretTraps,V=E.indexes;x=R,j=V,P=(0,d.convertMaskToPlaceholder)(x,g)}else x=l;var N={previousConformedValue:_,guide:c,placeholderChar:g,pipe:y,placeholder:P,currentCaretPosition:S,keepCharPositions:C},A=(0,p.default)(w,x,N),B=A.conformedValue,I=("undefined"==typeof y?"undefined":s(y))===h.strFunction,F={};I&&(F=y(B,u({rawValue:w},N)),F===!1?F={value:_,rejected:!0}:(0,d.isString)(F)&&(F={value:F}));var q=I?F.value:B,D=(0,f.default)({previousConformedValue:_,previousPlaceholder:M,conformedValue:q,placeholder:P,rawValue:w,currentCaretPosition:S,placeholderChar:g,indexesOfPipedChars:F.indexesOfPipedChars,caretTrapIndexes:j}),L=q===P&&0===D,W=T?P:v,J=L?W:q;t.previousConformedValue=J,t.previousPlaceholder=P,o.value!==J&&(o.value=J,i(o,D))}}}}}function i(e,t){document.activeElement===e&&(b?g(function(){return e.setSelectionRange(t,t,y)},0):e.setSelectionRange(t,t,y))}function a(e){if((0,d.isString)(e))return e;if((0,d.isNumber)(e))return String(e);if(void 0===e||null===e)return v;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var l=r(4),f=n(l),c=r(3),p=n(c),d=r(2),h=r(1),v="",y="none",m="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),g="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout},function(e,t){"use strict";function r(e){return function(){return e}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,r){"use strict";function n(e,t,r,n,i,a,u,s){if(o(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,n,i,a,u,s],c=0;l=new Error(t.replace(/%s/g,function(){return f[c++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var o=function(e){};e.exports=n},function(e,t,r){"use strict";var n=r(6),o=r(7),i=r(10);e.exports=function(){function e(e,t,r,n,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){"use strict";"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports=r(8)()},function(e,t){"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r},function(t,r){t.exports=e}])});

/***/ }),

/***/ "./resources/js/src/@fake-db/mui-components/text-fields sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$":
/*!**************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@fake-db/mui-components/text-fields/ sync nonrecursive !./node_modules/raw-loader/dist/cjs.js! \.(txt%7Cjs%7Cmd%7Ctsx)$ ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./BasicTextFields.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/BasicTextFields.txt",
	"./ColorTextFields.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/ColorTextFields.txt",
	"./ComposedTextField.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/ComposedTextField.txt",
	"./CustomizedInputBase.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/CustomizedInputBase.txt",
	"./CustomizedInputs.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/CustomizedInputs.txt",
	"./FormPropsTextFields.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/FormPropsTextFields.txt",
	"./FormattedInputs.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/FormattedInputs.txt",
	"./InputAdornments.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/InputAdornments.txt",
	"./InputWithIcon.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/InputWithIcon.txt",
	"./Inputs.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/Inputs.txt",
	"./LayoutTextFields.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/LayoutTextFields.txt",
	"./MultilineTextFields.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/MultilineTextFields.txt",
	"./SelectTextFields.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/SelectTextFields.txt",
	"./StateTextFields.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/StateTextFields.txt",
	"./TextFieldSizes.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/TextFieldSizes.txt",
	"./ValidationTextFields.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/text-fields/ValidationTextFields.txt"
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
webpackContext.id = "./resources/js/src/@fake-db/mui-components/text-fields sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$";

/***/ })

}]);