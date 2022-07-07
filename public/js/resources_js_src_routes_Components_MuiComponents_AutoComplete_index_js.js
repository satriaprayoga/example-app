(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_routes_Components_MuiComponents_AutoComplete_index_js"],{

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

/***/ "./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js ***!
  \***************************************************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      boxSizing: 'border-box',
      lineHeight: '48px',
      listStyle: 'none',
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the root element if `inset={true}`. */
    inset: {
      paddingLeft: 72
    },

    /* Styles applied to the root element if `disableSticky={false}`. */
    sticky: {
      position: 'sticky',
      top: 0,
      zIndex: 1,
      backgroundColor: 'inherit'
    }
  };
};
var ListSubheader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function ListSubheader(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'li' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$disableSticky = props.disableSticky,
      disableSticky = _props$disableSticky === void 0 ? false : _props$disableSticky,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "component", "disableGutters", "disableSticky", "inset"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className, color !== 'default' && classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__["default"])(color))], inset && classes.inset, !disableSticky && classes.sticky, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 true ? ListSubheader.propTypes = {
  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(['default', 'primary', 'inherit']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().elementType),

  /**
   * If `true`, the List Subheader will not have gutters.
   */
  disableGutters: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),

  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   */
  disableSticky: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),

  /**
   * If `true`, the List Subheader will be indented.
   */
  inset: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiListSubheader'
})(ListSubheader));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/exactProp.js");



var useEnhancedEffect = typeof window !== 'undefined' && "development" !== 'test' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/**
 * NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
 *
 * This component can be useful in a variety of situations:
 * - Escape hatch for broken dependencies not supporting SSR.
 * - Improve the time-to-first paint on the client by only rendering above the fold.
 * - Reduce the rendering time on the server.
 * - Under too heavy server load, you can turn on service degradation.
 */

function NoSsr(props) {
  var children = props.children,
      _props$defer = props.defer,
      defer = _props$defer === void 0 ? false : _props$defer,
      _props$fallback = props.fallback,
      fallback = _props$fallback === void 0 ? null : _props$fallback;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      mountedState = _React$useState[0],
      setMountedState = _React$useState[1];

  useEnhancedEffect(function () {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]); // We need the Fragment here to force react-docgen to recognise NoSsr as a component.

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, mountedState ? children : fallback);
}

 true ? NoSsr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * You can wrap a node.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),

  /**
   * If `true`, the component will not only prevent server-side rendering.
   * It will also defer the rendering of the children into a different screen frame.
   */
  defer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * The fallback content to display.
   */
  fallback: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
} : 0;

if (true) {
  // eslint-disable-next-line
  NoSsr['propTypes' + ''] = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["default"])(NoSsr.propTypes);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoSsr);

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

/***/ "./node_modules/@material-ui/icons/CheckBox.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/CheckBox.js ***!
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
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckBox');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/CheckBoxOutlineBlank.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/icons/CheckBoxOutlineBlank.js ***!
  \*****************************************************************/
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
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), 'CheckBoxOutlineBlank');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Done.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Done.js ***!
  \*************************************************/
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
  d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
}), 'Done');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/LocationOn.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/LocationOn.js ***!
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
  d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
}), 'LocationOn');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilterOptions": () => (/* reexport safe */ _useAutocomplete__WEBPACK_IMPORTED_MODULE_5__.createFilterOptions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "styles": () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/Popper.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/Chip.js");
/* harmony import */ var _internal_svg_icons_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/svg-icons/Close */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _useAutocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useAutocomplete */ "./node_modules/@material-ui/lab/esm/useAutocomplete/useAutocomplete.js");
















var styles = function styles(theme) {
  var _option;

  return {
    /* Styles applied to the root element. */
    root: {
      '&$focused $clearIndicatorDirty': {
        visibility: 'visible'
      },

      /* Avoid double tap issue on iOS */
      '@media (pointer: fine)': {
        '&:hover $clearIndicatorDirty': {
          visibility: 'visible'
        }
      }
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Pseudo-class applied to the root element if focused. */
    focused: {},

    /* Styles applied to the tag elements, e.g. the chips. */
    tag: {
      margin: 3,
      maxWidth: 'calc(100% - 6px)'
    },

    /* Styles applied to the tag elements, e.g. the chips if `size="small"`. */
    tagSizeSmall: {
      margin: 2,
      maxWidth: 'calc(100% - 4px)'
    },

    /* Styles applied when the popup icon is rendered. */
    hasPopupIcon: {},

    /* Styles applied when the clear icon is rendered. */
    hasClearIcon: {},

    /* Styles applied to the Input element. */
    inputRoot: {
      flexWrap: 'wrap',
      '$hasPopupIcon &, $hasClearIcon &': {
        paddingRight: 26 + 4
      },
      '$hasPopupIcon$hasClearIcon &': {
        paddingRight: 52 + 4
      },
      '& $input': {
        width: 0,
        minWidth: 30
      },
      '&[class*="MuiInput-root"]': {
        paddingBottom: 1,
        '& $input': {
          padding: 4
        },
        '& $input:first-child': {
          padding: '6px 0'
        }
      },
      '&[class*="MuiInput-root"][class*="MuiInput-marginDense"]': {
        '& $input': {
          padding: '4px 4px 5px'
        },
        '& $input:first-child': {
          padding: '3px 0 6px'
        }
      },
      '&[class*="MuiOutlinedInput-root"]': {
        padding: 9,
        '$hasPopupIcon &, $hasClearIcon &': {
          paddingRight: 26 + 4 + 9
        },
        '$hasPopupIcon$hasClearIcon &': {
          paddingRight: 52 + 4 + 9
        },
        '& $input': {
          padding: '9.5px 4px'
        },
        '& $input:first-child': {
          paddingLeft: 6
        },
        '& $endAdornment': {
          right: 9
        }
      },
      '&[class*="MuiOutlinedInput-root"][class*="MuiOutlinedInput-marginDense"]': {
        padding: 6,
        '& $input': {
          padding: '4.5px 4px'
        }
      },
      '&[class*="MuiFilledInput-root"]': {
        paddingTop: 19,
        paddingLeft: 8,
        '$hasPopupIcon &, $hasClearIcon &': {
          paddingRight: 26 + 4 + 9
        },
        '$hasPopupIcon$hasClearIcon &': {
          paddingRight: 52 + 4 + 9
        },
        '& $input': {
          padding: '9px 4px'
        },
        '& $endAdornment': {
          right: 9
        }
      },
      '&[class*="MuiFilledInput-root"][class*="MuiFilledInput-marginDense"]': {
        paddingBottom: 1,
        '& $input': {
          padding: '4.5px 4px'
        }
      }
    },

    /* Styles applied to the input element. */
    input: {
      flexGrow: 1,
      textOverflow: 'ellipsis',
      opacity: 0
    },

    /* Styles applied to the input element if tag focused. */
    inputFocused: {
      opacity: 1
    },

    /* Styles applied to the endAdornment element. */
    endAdornment: {
      // We use a position absolute to support wrapping tags.
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 14px)' // Center vertically

    },

    /* Styles applied to the clear indicator. */
    clearIndicator: {
      marginRight: -2,
      padding: 4,
      visibility: 'hidden'
    },

    /* Styles applied to the clear indicator if the input is dirty. */
    clearIndicatorDirty: {},

    /* Styles applied to the popup indicator. */
    popupIndicator: {
      padding: 2,
      marginRight: -2
    },

    /* Styles applied to the popup indicator if the popup is open. */
    popupIndicatorOpen: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the popper element. */
    popper: {
      zIndex: theme.zIndex.modal
    },

    /* Styles applied to the popper element if `disablePortal={true}`. */
    popperDisablePortal: {
      position: 'absolute'
    },

    /* Styles applied to the `Paper` component. */
    paper: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.typography.body1, {
      overflow: 'hidden',
      margin: '4px 0'
    }),

    /* Styles applied to the `listbox` component. */
    listbox: {
      listStyle: 'none',
      margin: 0,
      padding: '8px 0',
      maxHeight: '40vh',
      overflow: 'auto'
    },

    /* Styles applied to the loading wrapper. */
    loading: {
      color: theme.palette.text.secondary,
      padding: '14px 16px'
    },

    /* Styles applied to the no option wrapper. */
    noOptions: {
      color: theme.palette.text.secondary,
      padding: '14px 16px'
    },

    /* Styles applied to the option elements. */
    option: (_option = {
      minHeight: 48,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
      paddingTop: 6,
      boxSizing: 'border-box',
      outline: '0',
      WebkitTapHighlightColor: 'transparent',
      paddingBottom: 6,
      paddingLeft: 16,
      paddingRight: 16
    }, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_option, theme.breakpoints.up('sm'), {
      minHeight: 'auto'
    }), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_option, '&[aria-selected="true"]', {
      backgroundColor: theme.palette.action.selected
    }), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_option, '&[data-focus="true"]', {
      backgroundColor: theme.palette.action.hover
    }), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_option, '&:active', {
      backgroundColor: theme.palette.action.selected
    }), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_option, '&[aria-disabled="true"]', {
      opacity: theme.palette.action.disabledOpacity,
      pointerEvents: 'none'
    }), _option),

    /* Styles applied to the group's label elements. */
    groupLabel: {
      backgroundColor: theme.palette.background.paper,
      top: -8
    },

    /* Styles applied to the group's ul elements. */
    groupUl: {
      padding: 0,
      '& $option': {
        paddingLeft: 24
      }
    }
  };
};

function DisablePortal(props) {
  // eslint-disable-next-line react/prop-types
  var anchorEl = props.anchorEl,
      open = props.open,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["anchorEl", "open"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", other);
}

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_internal_svg_icons_Close__WEBPACK_IMPORTED_MODULE_6__["default"], {
  fontSize: "small"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_7__["default"], null);

var Autocomplete = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Autocomplete(props, ref) {
  /* eslint-disable no-unused-vars */
  var _props$autoComplete = props.autoComplete,
      autoComplete = _props$autoComplete === void 0 ? false : _props$autoComplete,
      _props$autoHighlight = props.autoHighlight,
      autoHighlight = _props$autoHighlight === void 0 ? false : _props$autoHighlight,
      _props$autoSelect = props.autoSelect,
      autoSelect = _props$autoSelect === void 0 ? false : _props$autoSelect,
      _props$blurOnSelect = props.blurOnSelect,
      blurOnSelect = _props$blurOnSelect === void 0 ? false : _props$blurOnSelect,
      ChipProps = props.ChipProps,
      classes = props.classes,
      className = props.className,
      _props$clearOnBlur = props.clearOnBlur,
      clearOnBlur = _props$clearOnBlur === void 0 ? !props.freeSolo : _props$clearOnBlur,
      _props$clearOnEscape = props.clearOnEscape,
      clearOnEscape = _props$clearOnEscape === void 0 ? false : _props$clearOnEscape,
      _props$clearText = props.clearText,
      clearText = _props$clearText === void 0 ? 'Clear' : _props$clearText,
      _props$closeIcon = props.closeIcon,
      closeIcon = _props$closeIcon === void 0 ? _ref : _props$closeIcon,
      _props$closeText = props.closeText,
      closeText = _props$closeText === void 0 ? 'Close' : _props$closeText,
      _props$debug = props.debug,
      debug = _props$debug === void 0 ? false : _props$debug,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? props.multiple ? [] : null : _props$defaultValue,
      _props$disableClearab = props.disableClearable,
      disableClearable = _props$disableClearab === void 0 ? false : _props$disableClearab,
      _props$disableCloseOn = props.disableCloseOnSelect,
      disableCloseOnSelect = _props$disableCloseOn === void 0 ? false : _props$disableCloseOn,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      filterOptions = props.filterOptions,
      _props$filterSelected = props.filterSelectedOptions,
      filterSelectedOptions = _props$filterSelected === void 0 ? false : _props$filterSelected,
      _props$forcePopupIcon = props.forcePopupIcon,
      forcePopupIcon = _props$forcePopupIcon === void 0 ? 'auto' : _props$forcePopupIcon,
      _props$freeSolo = props.freeSolo,
      freeSolo = _props$freeSolo === void 0 ? false : _props$freeSolo,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$getLimitTagsTe = props.getLimitTagsText,
      getLimitTagsText = _props$getLimitTagsTe === void 0 ? function (more) {
    return "+".concat(more);
  } : _props$getLimitTagsTe,
      getOptionDisabled = props.getOptionDisabled,
      _props$getOptionLabel = props.getOptionLabel,
      getOptionLabel = _props$getOptionLabel === void 0 ? function (x) {
    return x;
  } : _props$getOptionLabel,
      getOptionSelected = props.getOptionSelected,
      groupBy = props.groupBy,
      _props$handleHomeEndK = props.handleHomeEndKeys,
      handleHomeEndKeys = _props$handleHomeEndK === void 0 ? !props.freeSolo : _props$handleHomeEndK,
      idProp = props.id,
      _props$includeInputIn = props.includeInputInList,
      includeInputInList = _props$includeInputIn === void 0 ? false : _props$includeInputIn,
      inputValueProp = props.inputValue,
      _props$limitTags = props.limitTags,
      limitTags = _props$limitTags === void 0 ? -1 : _props$limitTags,
      _props$ListboxCompone = props.ListboxComponent,
      ListboxComponent = _props$ListboxCompone === void 0 ? 'ul' : _props$ListboxCompone,
      ListboxProps = props.ListboxProps,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      _props$loadingText = props.loadingText,
      loadingText = _props$loadingText === void 0 ? 'Loading…' : _props$loadingText,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      _props$noOptionsText = props.noOptionsText,
      noOptionsText = _props$noOptionsText === void 0 ? 'No options' : _props$noOptionsText,
      onChange = props.onChange,
      onClose = props.onClose,
      onHighlightChange = props.onHighlightChange,
      onInputChange = props.onInputChange,
      onOpen = props.onOpen,
      open = props.open,
      _props$openOnFocus = props.openOnFocus,
      openOnFocus = _props$openOnFocus === void 0 ? false : _props$openOnFocus,
      _props$openText = props.openText,
      openText = _props$openText === void 0 ? 'Open' : _props$openText,
      options = props.options,
      _props$PaperComponent = props.PaperComponent,
      PaperComponent = _props$PaperComponent === void 0 ? _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"] : _props$PaperComponent,
      _props$PopperComponen = props.PopperComponent,
      PopperComponentProp = _props$PopperComponen === void 0 ? _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_9__["default"] : _props$PopperComponen,
      _props$popupIcon = props.popupIcon,
      popupIcon = _props$popupIcon === void 0 ? _ref2 : _props$popupIcon,
      renderGroupProp = props.renderGroup,
      renderInput = props.renderInput,
      renderOptionProp = props.renderOption,
      renderTags = props.renderTags,
      _props$selectOnFocus = props.selectOnFocus,
      selectOnFocus = _props$selectOnFocus === void 0 ? !props.freeSolo : _props$selectOnFocus,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      valueProp = props.value,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "classes", "className", "clearOnBlur", "clearOnEscape", "clearText", "closeIcon", "closeText", "debug", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "getOptionSelected", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "value"]);
  /* eslint-enable no-unused-vars */


  var PopperComponent = disablePortal ? DisablePortal : PopperComponentProp;

  var _useAutocomplete = (0,_useAutocomplete__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    componentName: 'Autocomplete'
  })),
      getRootProps = _useAutocomplete.getRootProps,
      getInputProps = _useAutocomplete.getInputProps,
      getInputLabelProps = _useAutocomplete.getInputLabelProps,
      getPopupIndicatorProps = _useAutocomplete.getPopupIndicatorProps,
      getClearProps = _useAutocomplete.getClearProps,
      getTagProps = _useAutocomplete.getTagProps,
      getListboxProps = _useAutocomplete.getListboxProps,
      getOptionProps = _useAutocomplete.getOptionProps,
      value = _useAutocomplete.value,
      dirty = _useAutocomplete.dirty,
      id = _useAutocomplete.id,
      popupOpen = _useAutocomplete.popupOpen,
      focused = _useAutocomplete.focused,
      focusedTag = _useAutocomplete.focusedTag,
      anchorEl = _useAutocomplete.anchorEl,
      setAnchorEl = _useAutocomplete.setAnchorEl,
      inputValue = _useAutocomplete.inputValue,
      groupedOptions = _useAutocomplete.groupedOptions;

  var startAdornment;

  if (multiple && value.length > 0) {
    var getCustomizedTagProps = function getCustomizedTagProps(params) {
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.tag, size === 'small' && classes.tagSizeSmall),
        disabled: disabled
      }, getTagProps(params));
    };

    if (renderTags) {
      startAdornment = renderTags(value, getCustomizedTagProps);
    } else {
      startAdornment = value.map(function (option, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
          label: getOptionLabel(option),
          size: size
        }, getCustomizedTagProps({
          index: index
        }), ChipProps));
      });
    }
  }

  if (limitTags > -1 && Array.isArray(startAdornment)) {
    var more = startAdornment.length - limitTags;

    if (!focused && more > 0) {
      startAdornment = startAdornment.splice(0, limitTags);
      startAdornment.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: classes.tag,
        key: startAdornment.length
      }, getLimitTagsText(more)));
    }
  }

  var defaultRenderGroup = function defaultRenderGroup(params) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("li", {
      key: params.key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: classes.groupLabel,
      component: "div"
    }, params.group), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("ul", {
      className: classes.groupUl
    }, params.children));
  };

  var renderGroup = renderGroupProp || defaultRenderGroup;
  var renderOption = renderOptionProp || getOptionLabel;

  var renderListOption = function renderListOption(option, index) {
    var optionProps = getOptionProps({
      option: option,
      index: index
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("li", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, optionProps, {
      className: classes.option
    }), renderOption(option, {
      selected: optionProps['aria-selected'],
      inputValue: inputValue
    }));
  };

  var hasClearIcon = !disableClearable && !disabled;
  var hasPopupIcon = (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, focused && classes.focused, fullWidth && classes.fullWidth, hasClearIcon && classes.hasClearIcon, hasPopupIcon && classes.hasPopupIcon)
  }, getRootProps(other)), renderInput({
    id: id,
    disabled: disabled,
    fullWidth: true,
    size: size === 'small' ? 'small' : undefined,
    InputLabelProps: getInputLabelProps(),
    InputProps: {
      ref: setAnchorEl,
      className: classes.inputRoot,
      startAdornment: startAdornment,
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: classes.endAdornment
      }, hasClearIcon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getClearProps(), {
        "aria-label": clearText,
        title: clearText,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.clearIndicator, dirty && classes.clearIndicatorDirty)
      }), closeIcon) : null, hasPopupIcon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getPopupIndicatorProps(), {
        disabled: disabled,
        "aria-label": popupOpen ? closeText : openText,
        title: popupOpen ? closeText : openText,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.popupIndicator, popupOpen && classes.popupIndicatorOpen)
      }), popupIcon) : null)
    },
    inputProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.input, focusedTag === -1 && classes.inputFocused),
      disabled: disabled
    }, getInputProps())
  })), popupOpen && anchorEl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PopperComponent, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.popper, disablePortal && classes.popperDisablePortal),
    style: {
      width: anchorEl ? anchorEl.clientWidth : null
    },
    role: "presentation",
    anchorEl: anchorEl,
    open: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PaperComponent, {
    className: classes.paper
  }, loading && groupedOptions.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: classes.loading
  }, loadingText) : null, groupedOptions.length === 0 && !freeSolo && !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: classes.noOptions
  }, noOptionsText) : null, groupedOptions.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ListboxComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: classes.listbox
  }, getListboxProps(), ListboxProps), groupedOptions.map(function (option, index) {
    if (groupBy) {
      return renderGroup({
        key: option.key,
        group: option.group,
        children: option.options.map(function (option2, index2) {
          return renderListOption(option2, option.index + index2);
        })
      });
    }

    return renderListOption(option, index);
  })) : null)) : null);
});
 true ? Autocomplete.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the portion of the selected suggestion that has not been typed by the user,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * If `true`, the first option is automatically highlighted.
   */
  autoHighlight: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   */
  autoSelect: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   */
  blurOnSelect: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOf(['mouse', 'touch']), (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool)]),

  /**
   * Props applied to the [`Chip`](/api/chip/) element.
   */
  ChipProps: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string),

  /**
   * If `true`, the input's text will be cleared on blur if no value is selected.
   *
   * Set to `true` if you want to help the user enter a new value.
   * Set to `false` if you want to help the user resume his search.
   */
  clearOnBlur: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   */
  clearOnEscape: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  clearText: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string),

  /**
   * The icon to display in place of the default close icon.
   */
  closeIcon: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().node),

  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  closeText: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string),

  /**
   * If `true`, the popup will ignore the blur event if the input is filled.
   * You can inspect the popup markup with your browser tools.
   * Consider this option when you need to customize the component.
   */
  debug: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * The default input value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().any),

  /**
   * If `true`, the input can't be cleared.
   */
  disableClearable: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * If `true`, the popup won't close when a value is selected.
   */
  disableCloseOnSelect: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * If `true`, the input will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * If `true`, will allow focus on disabled items.
   */
  disabledItemsFocusable: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * If `true`, the list box in the popup will not wrap focus.
   */
  disableListWrap: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * A filter function that determines the options that are eligible.
   *
   * @param {T[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {T[]}
   */
  filterOptions: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),

  /**
   * If `true`, hide the selected options from the list box.
   */
  filterSelectedOptions: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * Force the visibility display of the popup icon.
   */
  forcePopupIcon: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool)]),

  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   */
  freeSolo: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   */
  getLimitTagsText: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),

  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {T} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),

  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * @param {T} option
   * @returns {string}
   */
  getOptionLabel: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),

  /**
   * Used to determine if an option is selected, considering the current value.
   * Uses strict equality by default.
   *
   * @param {T} option The option to test.
   * @param {T} value The value to test against.
   * @returns {boolean}
   */
  getOptionSelected: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),

  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {T} options The options to group.
   * @returns {string}
   */
  groupBy: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),

  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   */
  handleHomeEndKeys: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string),

  /**
   * If `true`, the highlight can move to the input.
   */
  includeInputInList: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * The input value.
   */
  inputValue: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string),

  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   */
  limitTags: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().number),

  /**
   * The component used to render the listbox.
   */
  ListboxComponent: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().elementType),

  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object),

  /**
   * If `true`, the component is in a loading state.
   */
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  loadingText: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().node),

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  noOptionsText: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().node),

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {T|T[]} value The new value of the component.
   * @param {string} reason One of "create-option", "select-option", "remove-option", "blur" or "clear".
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),

  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"select-option"`, `"blur"`.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),

  /**
   * Callback fired when the highlight option changes.
   *
   * @param {object} event The event source of the callback.
   * @param {T} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`.
   */
  onHighlightChange: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),

  /**
   * Callback fired when the input value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),

  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),

  /**
   * Control the popup` open state.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * If `true`, the popup will open on input focus.
   */
  openOnFocus: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  openText: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string),

  /**
   * Array of options.
   */
  options: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().array.isRequired),

  /**
   * The component used to render the body of the popup.
   */
  PaperComponent: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().elementType),

  /**
   * The component used to position the popup.
   */
  PopperComponent: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().elementType),

  /**
   * The icon to display in place of the default popup icon.
   */
  popupIcon: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().node),

  /**
   * Render the group.
   *
   * @param {any} option The group to render.
   * @returns {ReactNode}
   */
  renderGroup: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),

  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func.isRequired),

  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {T} option The option to render.
   * @param {object} state The state of the component.
   * @returns {ReactNode}
   */
  renderOption: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),

  /**
   * Render the selected value.
   *
   * @param {T[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @returns {ReactNode}
   */
  renderTags: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),

  /**
   * If `true`, the input's text will be selected on focus.
   * It helps the user clear the selected value.
   */
  selectOnFocus: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * The size of the autocomplete.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOf(['medium', 'small']),

  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `getOptionSelected` prop.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().any)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["default"])(styles, {
  name: 'MuiAutocomplete'
})(Autocomplete));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/ArrowDropDown.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/ArrowDropDown.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/useAutocomplete/useAutocomplete.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/useAutocomplete/useAutocomplete.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilterOptions": () => (/* binding */ createFilterOptions),
/* harmony export */   "default": () => (/* binding */ useAutocomplete)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/unstable_useId.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/useControlled.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/setRef.js");




/* eslint-disable no-constant-condition */

 // https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
// Give up on IE 11 support for this feature

function stripDiacritics(string) {
  return typeof string.normalize !== 'undefined' ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : string;
}

function createFilterOptions() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$ignoreAccents = config.ignoreAccents,
      ignoreAccents = _config$ignoreAccents === void 0 ? true : _config$ignoreAccents,
      _config$ignoreCase = config.ignoreCase,
      ignoreCase = _config$ignoreCase === void 0 ? true : _config$ignoreCase,
      limit = config.limit,
      _config$matchFrom = config.matchFrom,
      matchFrom = _config$matchFrom === void 0 ? 'any' : _config$matchFrom,
      stringify = config.stringify,
      _config$trim = config.trim,
      trim = _config$trim === void 0 ? false : _config$trim;
  return function (options, _ref) {
    var inputValue = _ref.inputValue,
        getOptionLabel = _ref.getOptionLabel;
    var input = trim ? inputValue.trim() : inputValue;

    if (ignoreCase) {
      input = input.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
    }

    var filteredOptions = options.filter(function (option) {
      var candidate = (stringify || getOptionLabel)(option);

      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }

      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }

      return matchFrom === 'start' ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
    });
    return typeof limit === 'number' ? filteredOptions.slice(0, limit) : filteredOptions;
  };
} // To replace with .findIndex() once we stop IE 11 support.

function findIndex(array, comp) {
  for (var i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }

  return -1;
}

var defaultFilterOptions = createFilterOptions(); // Number of options to jump in list box when pageup and pagedown keys are used.

var pageSize = 5;
function useAutocomplete(props) {
  var _props$autoComplete = props.autoComplete,
      autoComplete = _props$autoComplete === void 0 ? false : _props$autoComplete,
      _props$autoHighlight = props.autoHighlight,
      autoHighlight = _props$autoHighlight === void 0 ? false : _props$autoHighlight,
      _props$autoSelect = props.autoSelect,
      autoSelect = _props$autoSelect === void 0 ? false : _props$autoSelect,
      _props$blurOnSelect = props.blurOnSelect,
      blurOnSelect = _props$blurOnSelect === void 0 ? false : _props$blurOnSelect,
      _props$clearOnBlur = props.clearOnBlur,
      clearOnBlur = _props$clearOnBlur === void 0 ? !props.freeSolo : _props$clearOnBlur,
      _props$clearOnEscape = props.clearOnEscape,
      clearOnEscape = _props$clearOnEscape === void 0 ? false : _props$clearOnEscape,
      _props$componentName = props.componentName,
      componentName = _props$componentName === void 0 ? 'useAutocomplete' : _props$componentName,
      _props$debug = props.debug,
      debug = _props$debug === void 0 ? false : _props$debug,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? props.multiple ? [] : null : _props$defaultValue,
      _props$disableClearab = props.disableClearable,
      disableClearable = _props$disableClearab === void 0 ? false : _props$disableClearab,
      _props$disableCloseOn = props.disableCloseOnSelect,
      disableCloseOnSelect = _props$disableCloseOn === void 0 ? false : _props$disableCloseOn,
      _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      _props$filterOptions = props.filterOptions,
      filterOptions = _props$filterOptions === void 0 ? defaultFilterOptions : _props$filterOptions,
      _props$filterSelected = props.filterSelectedOptions,
      filterSelectedOptions = _props$filterSelected === void 0 ? false : _props$filterSelected,
      _props$freeSolo = props.freeSolo,
      freeSolo = _props$freeSolo === void 0 ? false : _props$freeSolo,
      getOptionDisabled = props.getOptionDisabled,
      _props$getOptionLabel = props.getOptionLabel,
      getOptionLabelProp = _props$getOptionLabel === void 0 ? function (option) {
    return option;
  } : _props$getOptionLabel,
      _props$getOptionSelec = props.getOptionSelected,
      getOptionSelected = _props$getOptionSelec === void 0 ? function (option, value) {
    return option === value;
  } : _props$getOptionSelec,
      groupBy = props.groupBy,
      _props$handleHomeEndK = props.handleHomeEndKeys,
      handleHomeEndKeys = _props$handleHomeEndK === void 0 ? !props.freeSolo : _props$handleHomeEndK,
      idProp = props.id,
      _props$includeInputIn = props.includeInputInList,
      includeInputInList = _props$includeInputIn === void 0 ? false : _props$includeInputIn,
      inputValueProp = props.inputValue,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      onChange = props.onChange,
      onClose = props.onClose,
      onHighlightChange = props.onHighlightChange,
      onInputChange = props.onInputChange,
      onOpen = props.onOpen,
      openProp = props.open,
      _props$openOnFocus = props.openOnFocus,
      openOnFocus = _props$openOnFocus === void 0 ? false : _props$openOnFocus,
      options = props.options,
      _props$selectOnFocus = props.selectOnFocus,
      selectOnFocus = _props$selectOnFocus === void 0 ? !props.freeSolo : _props$selectOnFocus,
      valueProp = props.value;
  var id = (0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(idProp);
  var getOptionLabel = getOptionLabelProp;

  if (true) {
    getOptionLabel = function getOptionLabel(option) {
      var optionLabel = getOptionLabelProp(option);

      if (typeof optionLabel !== 'string') {
        var erroneousReturn = optionLabel === undefined ? 'undefined' : "".concat((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(optionLabel), " (").concat(optionLabel, ")");
        console.error("Material-UI: The `getOptionLabel` method of ".concat(componentName, " returned ").concat(erroneousReturn, " instead of a string for ").concat(JSON.stringify(option), "."));
      }

      return optionLabel;
    };
  }

  var ignoreFocus = react__WEBPACK_IMPORTED_MODULE_3__.useRef(false);
  var firstFocus = react__WEBPACK_IMPORTED_MODULE_3__.useRef(true);
  var inputRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);
  var listboxRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_3__.useState(-1),
      focusedTag = _React$useState2[0],
      setFocusedTag = _React$useState2[1];

  var defaultHighlighted = autoHighlight ? 0 : -1;
  var highlightedIndexRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(defaultHighlighted);

  var _useControlled = (0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__["default"])({
    controlled: valueProp,
    default: defaultValue,
    name: componentName
  }),
      _useControlled2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled, 2),
      value = _useControlled2[0],
      setValue = _useControlled2[1];

  var _useControlled3 = (0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__["default"])({
    controlled: inputValueProp,
    default: '',
    name: componentName,
    state: 'inputValue'
  }),
      _useControlled4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled3, 2),
      inputValue = _useControlled4[0],
      setInputValue = _useControlled4[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__.useState(false),
      focused = _React$useState3[0],
      setFocused = _React$useState3[1];

  var resetInputValue = (0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(function (event, newValue) {
    var newInputValue;

    if (multiple) {
      newInputValue = '';
    } else if (newValue == null) {
      newInputValue = '';
    } else {
      var optionLabel = getOptionLabel(newValue);
      newInputValue = typeof optionLabel === 'string' ? optionLabel : '';
    }

    if (inputValue === newInputValue) {
      return;
    }

    setInputValue(newInputValue);

    if (onInputChange) {
      onInputChange(event, newInputValue, 'reset');
    }
  });
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    resetInputValue(null, value);
  }, [value, resetInputValue]);

  var _useControlled5 = (0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__["default"])({
    controlled: openProp,
    default: false,
    name: componentName,
    state: 'open'
  }),
      _useControlled6 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled5, 2),
      open = _useControlled6[0],
      setOpenState = _useControlled6[1];

  var inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value);
  var popupOpen = open;
  var filteredOptions = popupOpen ? filterOptions(options.filter(function (option) {
    if (filterSelectedOptions && (multiple ? value : [value]).some(function (value2) {
      return value2 !== null && getOptionSelected(option, value2);
    })) {
      return false;
    }

    return true;
  }), // we use the empty string to manipulate `filterOptions` to not filter any options
  // i.e. the filter predicate always returns true
  {
    inputValue: inputValueIsSelectedValue ? '' : inputValue,
    getOptionLabel: getOptionLabel
  }) : [];

  if (true) {
    if (value !== null && !freeSolo && options.length > 0) {
      var missingValue = (multiple ? value : [value]).filter(function (value2) {
        return !options.some(function (option) {
          return getOptionSelected(option, value2);
        });
      });

      if (missingValue.length > 0) {
        console.warn(["Material-UI: The value provided to ".concat(componentName, " is invalid."), "None of the options match with `".concat(missingValue.length > 1 ? JSON.stringify(missingValue) : JSON.stringify(missingValue[0]), "`."), 'You can use the `getOptionSelected` prop to customize the equality test.'].join('\n'));
      }
    }
  }

  var focusTag = (0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(function (tagToFocus) {
    if (tagToFocus === -1) {
      inputRef.current.focus();
    } else {
      anchorEl.querySelector("[data-tag-index=\"".concat(tagToFocus, "\"]")).focus();
    }
  }); // Ensure the focusedTag is never inconsistent

  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    if (multiple && focusedTag > value.length - 1) {
      setFocusedTag(-1);
      focusTag(-1);
    }
  }, [value, multiple, focusedTag, focusTag]);

  function validOptionIndex(index, direction) {
    if (!listboxRef.current || index === -1) {
      return -1;
    }

    var nextFocus = index;

    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === filteredOptions.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }

      var option = listboxRef.current.querySelector("[data-option-index=\"".concat(nextFocus, "\"]")); // Same logic as MenuList.js

      var nextFocusDisabled = disabledItemsFocusable ? false : option && (option.disabled || option.getAttribute('aria-disabled') === 'true');

      if (option && !option.hasAttribute('tabindex') || nextFocusDisabled) {
        // Move to the next element.
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  var setHighlightedIndex = (0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(function (_ref2) {
    var event = _ref2.event,
        index = _ref2.index,
        _ref2$reason = _ref2.reason,
        reason = _ref2$reason === void 0 ? 'auto' : _ref2$reason;
    highlightedIndexRef.current = index; // does the index exist?

    if (index === -1) {
      inputRef.current.removeAttribute('aria-activedescendant');
    } else {
      inputRef.current.setAttribute('aria-activedescendant', "".concat(id, "-option-").concat(index));
    }

    if (onHighlightChange) {
      onHighlightChange(event, index === -1 ? null : filteredOptions[index], reason);
    }

    if (!listboxRef.current) {
      return;
    }

    var prev = listboxRef.current.querySelector('[data-focus]');

    if (prev) {
      prev.removeAttribute('data-focus');
    }

    var listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]'); // "No results"

    if (!listboxNode) {
      return;
    }

    if (index === -1) {
      listboxNode.scrollTop = 0;
      return;
    }

    var option = listboxRef.current.querySelector("[data-option-index=\"".concat(index, "\"]"));

    if (!option) {
      return;
    }

    option.setAttribute('data-focus', 'true'); // Scroll active descendant into view.
    // Logic copied from https://www.w3.org/TR/wai-aria-practices/examples/listbox/js/listbox.js
    //
    // Consider this API instead once it has a better browser support:
    // .scrollIntoView({ scrollMode: 'if-needed', block: 'nearest' });

    if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== 'mouse') {
      var element = option;
      var scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      var elementBottom = element.offsetTop + element.offsetHeight;

      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop) {
        listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
      }
    }
  });
  var changeHighlightedIndex = (0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(function (_ref3) {
    var event = _ref3.event,
        diff = _ref3.diff,
        _ref3$direction = _ref3.direction,
        direction = _ref3$direction === void 0 ? 'next' : _ref3$direction,
        _ref3$reason = _ref3.reason,
        reason = _ref3$reason === void 0 ? 'auto' : _ref3$reason;

    if (!popupOpen) {
      return;
    }

    var getNextIndex = function getNextIndex() {
      var maxIndex = filteredOptions.length - 1;

      if (diff === 'reset') {
        return defaultHighlighted;
      }

      if (diff === 'start') {
        return 0;
      }

      if (diff === 'end') {
        return maxIndex;
      }

      var newIndex = highlightedIndexRef.current + diff;

      if (newIndex < 0) {
        if (newIndex === -1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1) {
          return 0;
        }

        return maxIndex;
      }

      if (newIndex > maxIndex) {
        if (newIndex === maxIndex + 1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap || Math.abs(diff) > 1) {
          return maxIndex;
        }

        return 0;
      }

      return newIndex;
    };

    var nextIndex = validOptionIndex(getNextIndex(), direction);
    setHighlightedIndex({
      index: nextIndex,
      reason: reason,
      event: event
    }); // Sync the content of the input with the highlighted option.

    if (autoComplete && diff !== 'reset') {
      if (nextIndex === -1) {
        inputRef.current.value = inputValue;
      } else {
        var option = getOptionLabel(filteredOptions[nextIndex]);
        inputRef.current.value = option; // The portion of the selected suggestion that has not been typed by the user,
        // a completion string, appears inline after the input cursor in the textbox.

        var index = option.toLowerCase().indexOf(inputValue.toLowerCase());

        if (index === 0 && inputValue.length > 0) {
          inputRef.current.setSelectionRange(inputValue.length, option.length);
        }
      }
    }
  });
  var syncHighlightedIndex = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function () {
    if (!popupOpen) {
      return;
    }

    var valueItem = multiple ? value[0] : value; // The popup is empty, reset

    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex({
        diff: 'reset'
      });
      return;
    }

    if (!listboxRef.current) {
      return;
    } // Synchronize the value with the highlighted index


    if (!filterSelectedOptions && valueItem != null) {
      var currentOption = filteredOptions[highlightedIndexRef.current]; // Keep the current highlighted index if possible

      if (multiple && currentOption && findIndex(value, function (val) {
        return getOptionSelected(currentOption, val);
      }) !== -1) {
        return;
      }

      var itemIndex = findIndex(filteredOptions, function (optionItem) {
        return getOptionSelected(optionItem, valueItem);
      });

      if (itemIndex === -1) {
        changeHighlightedIndex({
          diff: 'reset'
        });
      } else {
        setHighlightedIndex({
          index: itemIndex
        });
      }

      return;
    } // Prevent the highlighted index to leak outside the boundaries.


    if (highlightedIndexRef.current >= filteredOptions.length - 1) {
      setHighlightedIndex({
        index: filteredOptions.length - 1
      });
      return;
    } // Restore the focus to the previous index.


    setHighlightedIndex({
      index: highlightedIndexRef.current
    }); // Ignore filteredOptions (and options, getOptionSelected, getOptionLabel) not to break the scroll position
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [// Only sync the highlighted index when the option switch between empty and not
  // eslint-disable-next-line react-hooks/exhaustive-deps
  filteredOptions.length === 0, // Don't sync the highlighted index with the value when multiple
  // eslint-disable-next-line react-hooks/exhaustive-deps
  multiple ? false : value, filterSelectedOptions, changeHighlightedIndex, setHighlightedIndex, popupOpen, inputValue, multiple]);
  var handleListboxRef = (0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(function (node) {
    (0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_7__["default"])(listboxRef, node);

    if (!node) {
      return;
    }

    syncHighlightedIndex();
  });
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);

  var handleOpen = function handleOpen(event) {
    if (open) {
      return;
    }

    setOpenState(true);

    if (onOpen) {
      onOpen(event);
    }
  };

  var handleClose = function handleClose(event, reason) {
    if (!open) {
      return;
    }

    setOpenState(false);

    if (onClose) {
      onClose(event, reason);
    }
  };

  var handleValue = function handleValue(event, newValue, reason, details) {
    if (value === newValue) {
      return;
    }

    if (onChange) {
      onChange(event, newValue, reason, details);
    }

    setValue(newValue);
  };

  var isTouch = react__WEBPACK_IMPORTED_MODULE_3__.useRef(false);

  var selectNewValue = function selectNewValue(event, option) {
    var reasonProp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'select-option';
    var origin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'options';
    var reason = reasonProp;
    var newValue = option;

    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];

      if (true) {
        var matches = newValue.filter(function (val) {
          return getOptionSelected(option, val);
        });

        if (matches.length > 1) {
          console.error(["Material-UI: The `getOptionSelected` method of ".concat(componentName, " do not handle the arguments correctly."), "The component expects a single value to match a given option but found ".concat(matches.length, " matches.")].join('\n'));
        }
      }

      var itemIndex = findIndex(newValue, function (valueItem) {
        return getOptionSelected(option, valueItem);
      });

      if (itemIndex === -1) {
        newValue.push(option);
      } else if (origin !== 'freeSolo') {
        newValue.splice(itemIndex, 1);
        reason = 'remove-option';
      }
    }

    resetInputValue(event, newValue);
    handleValue(event, newValue, reason, {
      option: option
    });

    if (!disableCloseOnSelect) {
      handleClose(event, reason);
    }

    if (blurOnSelect === true || blurOnSelect === 'touch' && isTouch.current || blurOnSelect === 'mouse' && !isTouch.current) {
      inputRef.current.blur();
    }
  };

  function validTagIndex(index, direction) {
    if (index === -1) {
      return -1;
    }

    var nextFocus = index;

    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === value.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }

      var option = anchorEl.querySelector("[data-tag-index=\"".concat(nextFocus, "\"]")); // Same logic as MenuList.js

      if (option && (!option.hasAttribute('tabindex') || option.disabled || option.getAttribute('aria-disabled') === 'true')) {
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  var handleFocusTag = function handleFocusTag(event, direction) {
    if (!multiple) {
      return;
    }

    handleClose(event, 'toggleInput');
    var nextTag = focusedTag;

    if (focusedTag === -1) {
      if (inputValue === '' && direction === 'previous') {
        nextTag = value.length - 1;
      }
    } else {
      nextTag += direction === 'next' ? 1 : -1;

      if (nextTag < 0) {
        nextTag = 0;
      }

      if (nextTag === value.length) {
        nextTag = -1;
      }
    }

    nextTag = validTagIndex(nextTag, direction);
    setFocusedTag(nextTag);
    focusTag(nextTag);
  };

  var handleClear = function handleClear(event) {
    ignoreFocus.current = true;
    setInputValue('');

    if (onInputChange) {
      onInputChange(event, '', 'clear');
    }

    handleValue(event, multiple ? [] : null, 'clear');
  };

  var handleKeyDown = function handleKeyDown(other) {
    return function (event) {
      if (focusedTag !== -1 && ['ArrowLeft', 'ArrowRight'].indexOf(event.key) === -1) {
        setFocusedTag(-1);
        focusTag(-1);
      }

      switch (event.key) {
        case 'Home':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'start',
              direction: 'next',
              reason: 'keyboard',
              event: event
            });
          }

          break;

        case 'End':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'end',
              direction: 'previous',
              reason: 'keyboard',
              event: event
            });
          }

          break;

        case 'PageUp':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: -pageSize,
            direction: 'previous',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'PageDown':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: pageSize,
            direction: 'next',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'ArrowDown':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: 1,
            direction: 'next',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'ArrowUp':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: -1,
            direction: 'previous',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'ArrowLeft':
          handleFocusTag(event, 'previous');
          break;

        case 'ArrowRight':
          handleFocusTag(event, 'next');
          break;

        case 'Enter':
          // Wait until IME is settled.
          if (event.which === 229) {
            break;
          }

          if (highlightedIndexRef.current !== -1 && popupOpen) {
            var option = filteredOptions[highlightedIndexRef.current];
            var disabled = getOptionDisabled ? getOptionDisabled(option) : false; // We don't want to validate the form.

            event.preventDefault();

            if (disabled) {
              return;
            }

            selectNewValue(event, option, 'select-option'); // Move the selection to the end.

            if (autoComplete) {
              inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
            }
          } else if (freeSolo && inputValue !== '' && inputValueIsSelectedValue === false) {
            if (multiple) {
              // Allow people to add new values before they submit the form.
              event.preventDefault();
            }

            selectNewValue(event, inputValue, 'create-option', 'freeSolo');
          }

          break;

        case 'Escape':
          if (popupOpen) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClose(event, 'escape');
          } else if (clearOnEscape && (inputValue !== '' || multiple && value.length > 0)) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClear(event);
          }

          break;

        case 'Backspace':
          if (multiple && inputValue === '' && value.length > 0) {
            var index = focusedTag === -1 ? value.length - 1 : focusedTag;
            var newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, 'remove-option', {
              option: value[index]
            });
          }

          break;

        default:
      }

      if (other.onKeyDown) {
        other.onKeyDown(event);
      }
    };
  };

  var handleFocus = function handleFocus(event) {
    setFocused(true);

    if (openOnFocus && !ignoreFocus.current) {
      handleOpen(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    // Ignore the event when using the scrollbar with IE 11
    if (listboxRef.current !== null && document.activeElement === listboxRef.current.parentElement) {
      inputRef.current.focus();
      return;
    }

    setFocused(false);
    firstFocus.current = true;
    ignoreFocus.current = false;

    if (debug && inputValue !== '') {
      return;
    }

    if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
      selectNewValue(event, filteredOptions[highlightedIndexRef.current], 'blur');
    } else if (autoSelect && freeSolo && inputValue !== '') {
      selectNewValue(event, inputValue, 'blur', 'freeSolo');
    } else if (clearOnBlur) {
      resetInputValue(event, value);
    }

    handleClose(event, 'blur');
  };

  var handleInputChange = function handleInputChange(event) {
    var newValue = event.target.value;

    if (inputValue !== newValue) {
      setInputValue(newValue);

      if (onInputChange) {
        onInputChange(event, newValue, 'input');
      }
    }

    if (newValue === '') {
      if (!disableClearable && !multiple) {
        handleValue(event, null, 'clear');
      }
    } else {
      handleOpen(event);
    }
  };

  var handleOptionMouseOver = function handleOptionMouseOver(event) {
    setHighlightedIndex({
      event: event,
      index: Number(event.currentTarget.getAttribute('data-option-index')),
      reason: 'mouse'
    });
  };

  var handleOptionTouchStart = function handleOptionTouchStart() {
    isTouch.current = true;
  };

  var handleOptionClick = function handleOptionClick(event) {
    var index = Number(event.currentTarget.getAttribute('data-option-index'));
    selectNewValue(event, filteredOptions[index], 'select-option');
    isTouch.current = false;
  };

  var handleTagDelete = function handleTagDelete(index) {
    return function (event) {
      var newValue = value.slice();
      newValue.splice(index, 1);
      handleValue(event, newValue, 'remove-option', {
        option: value[index]
      });
    };
  };

  var handlePopupIndicator = function handlePopupIndicator(event) {
    if (open) {
      handleClose(event, 'toggleInput');
    } else {
      handleOpen(event);
    }
  }; // Prevent input blur when interacting with the combobox


  var handleMouseDown = function handleMouseDown(event) {
    if (event.target.getAttribute('id') !== id) {
      event.preventDefault();
    }
  }; // Focus the input when interacting with the combobox


  var handleClick = function handleClick() {
    inputRef.current.focus();

    if (selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0) {
      inputRef.current.select();
    }

    firstFocus.current = false;
  };

  var handleInputMouseDown = function handleInputMouseDown(event) {
    if (inputValue === '' || !open) {
      handlePopupIndicator(event);
    }
  };

  var dirty = freeSolo && inputValue.length > 0;
  dirty = dirty || (multiple ? value.length > 0 : value !== null);
  var groupedOptions = filteredOptions;

  if (groupBy) {
    // used to keep track of key and indexes in the result array
    var indexBy = new Map();
    var warn = false;
    groupedOptions = filteredOptions.reduce(function (acc, option, index) {
      var group = groupBy(option);

      if (acc.length > 0 && acc[acc.length - 1].group === group) {
        acc[acc.length - 1].options.push(option);
      } else {
        if (true) {
          if (indexBy.get(group) && !warn) {
            console.warn("Material-UI: The options provided combined with the `groupBy` method of ".concat(componentName, " returns duplicated headers."), 'You can solve the issue by sorting the options with the output of `groupBy`.');
            warn = true;
          }

          indexBy.set(group, true);
        }

        acc.push({
          key: index,
          index: index,
          group: group,
          options: [option]
        });
      }

      return acc;
    }, []);
  }

  return {
    getRootProps: function getRootProps() {
      var other = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        'aria-owns': popupOpen ? "".concat(id, "-popup") : null,
        role: 'combobox',
        'aria-expanded': popupOpen
      }, other, {
        onKeyDown: handleKeyDown(other),
        onMouseDown: handleMouseDown,
        onClick: handleClick
      });
    },
    getInputLabelProps: function getInputLabelProps() {
      return {
        id: "".concat(id, "-label"),
        htmlFor: id
      };
    },
    getInputProps: function getInputProps() {
      return {
        id: id,
        value: inputValue,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onChange: handleInputChange,
        onMouseDown: handleInputMouseDown,
        // if open then this is handled imperativeley so don't let react override
        // only have an opinion about this when closed
        'aria-activedescendant': popupOpen ? '' : null,
        'aria-autocomplete': autoComplete ? 'both' : 'list',
        'aria-controls': popupOpen ? "".concat(id, "-popup") : null,
        // Disable browser's suggestion that might overlap with the popup.
        // Handle autocomplete but not autofill.
        autoComplete: 'off',
        ref: inputRef,
        autoCapitalize: 'none',
        spellCheck: 'false'
      };
    },
    getClearProps: function getClearProps() {
      return {
        tabIndex: -1,
        onClick: handleClear
      };
    },
    getPopupIndicatorProps: function getPopupIndicatorProps() {
      return {
        tabIndex: -1,
        onClick: handlePopupIndicator
      };
    },
    getTagProps: function getTagProps(_ref4) {
      var index = _ref4.index;
      return {
        key: index,
        'data-tag-index': index,
        tabIndex: -1,
        onDelete: handleTagDelete(index)
      };
    },
    getListboxProps: function getListboxProps() {
      return {
        role: 'listbox',
        id: "".concat(id, "-popup"),
        'aria-labelledby': "".concat(id, "-label"),
        ref: handleListboxRef,
        onMouseDown: function onMouseDown(event) {
          // Prevent blur
          event.preventDefault();
        }
      };
    },
    getOptionProps: function getOptionProps(_ref5) {
      var index = _ref5.index,
          option = _ref5.option;
      var selected = (multiple ? value : [value]).some(function (value2) {
        return value2 != null && getOptionSelected(option, value2);
      });
      var disabled = getOptionDisabled ? getOptionDisabled(option) : false;
      return {
        key: index,
        tabIndex: -1,
        role: 'option',
        id: "".concat(id, "-option-").concat(index),
        onMouseOver: handleOptionMouseOver,
        onClick: handleOptionClick,
        onTouchStart: handleOptionTouchStart,
        'data-option-index': index,
        'aria-disabled': disabled,
        'aria-selected': selected
      };
    },
    id: id,
    inputValue: inputValue,
    value: value,
    dirty: dirty,
    popupOpen: popupOpen,
    focused: focused || focusedTag !== -1,
    anchorEl: anchorEl,
    setAnchorEl: setAnchorEl,
    focusedTag: focusedTag,
    groupedOptions: groupedOptions
  };
}

/***/ }),

/***/ "./node_modules/autosuggest-highlight/match/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/autosuggest-highlight/match/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const removeDiacritics = (__webpack_require__(/*! remove-accents */ "./node_modules/remove-accents/index.js").remove);

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_special_characters
const specialCharsRegex = /[.*+?^${}()|[\]\\]/g;

// http://www.ecma-international.org/ecma-262/5.1/#sec-15.10.2.6
const wordCharacterRegex = /[a-z0-9_]/i;

const whitespacesRegex = /\s+/;

function escapeRegexCharacters(str) {
  return str.replace(specialCharsRegex, '\\$&');
}

function extend(subject, baseObject) {
  subject = subject || {};
  Object.keys(subject).forEach((key) => {
    baseObject[key] = !!subject[key];
  });
  return baseObject;
}

module.exports = function match(text, query, options) {
  options = extend(options, {
    insideWords: false,
    findAllOccurrences: false,
    requireMatchAll: false
  });

  const cleanedTextArray = Array.from(text).map((x) => removeDiacritics(x));
  let cleanedText = cleanedTextArray.join('');

  query = removeDiacritics(query);

  return (
    query
      .trim()
      .split(whitespacesRegex)
      // If query is blank, we'll get empty string here, so let's filter it out.
      .filter((word) => word.length > 0)
      .reduce((result, word) => {
        const wordLen = word.length;
        const prefix =
          !options.insideWords && wordCharacterRegex.test(word[0]) ? '\\b' : '';
        const regex = new RegExp(prefix + escapeRegexCharacters(word), 'i');
        let occurrence;
        let index;

        occurrence = regex.exec(cleanedText);
        if (options.requireMatchAll && occurrence === null) {
          cleanedText = '';
          return [];
        }

        while (occurrence) {
          index = occurrence.index;

          const cleanedLength = cleanedTextArray
            .slice(index, index + wordLen)
            .join('').length;
          const offset = wordLen - cleanedLength;

          const initialOffset =
            index - cleanedTextArray.slice(0, index).join('').length;

          const indexes = [
            index + initialOffset,
            index + wordLen + initialOffset + offset
          ];

          if (indexes[0] !== indexes[1]) {
            result.push(indexes);
          }

          // Replace what we just found with spaces so we don't find it again.
          cleanedText =
            cleanedText.slice(0, index) +
            new Array(wordLen + 1).join(' ') +
            cleanedText.slice(index + wordLen);

          if (!options.findAllOccurrences) {
            break;
          }

          occurrence = regex.exec(cleanedText);
        }

        return result;
      }, [])
      .sort((match1, match2) => match1[0] - match2[0])
  );
};


/***/ }),

/***/ "./node_modules/autosuggest-highlight/parse/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/autosuggest-highlight/parse/index.js ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = function parse(text, matches) {
  const result = [];

  if (matches.length === 0) {
    result.push({
      text,
      highlight: false
    });
  } else if (matches[0][0] > 0) {
    result.push({
      text: text.slice(0, matches[0][0]),
      highlight: false
    });
  }

  matches.forEach((match, i) => {
    const startIndex = match[0];
    const endIndex = match[1];

    result.push({
      text: text.slice(startIndex, endIndex),
      highlight: true
    });

    if (i === matches.length - 1) {
      if (endIndex < text.length) {
        result.push({
          text: text.slice(endIndex, text.length),
          highlight: false
        });
      }
    } else if (endIndex < matches[i + 1][0]) {
      result.push({
        text: text.slice(endIndex, matches[i + 1][0]),
        highlight: false
      });
    }
  });

  return result;
};


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

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Asynchronous.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Asynchronous.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Asynchronous)
/* harmony export */ });
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// *https://www.registers.service.gov.uk/registers/country/use-the-api*








function sleep() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}

function Asynchronous() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      options = _React$useState4[0],
      setOptions = _React$useState4[1];

  var loading = open && options.length === 0;
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    var active = true;

    if (!loading) {
      return undefined;
    }

    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, countries;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()('https://country.register.gov.uk/records.json?page-size=5000');

            case 2:
              response = _context.sent;
              _context.next = 5;
              return sleep(1e3);

            case 5:
              _context.next = 7;
              return response.json();

            case 7:
              countries = _context.sent;

              if (active) {
                setOptions(Object.keys(countries).map(function (key) {
                  return countries[key].item[0];
                }));
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();

    return function () {
      active = false;
    };
  }, [loading]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "asynchronous-demo",
    style: {
      width: 300
    },
    open: open,
    onOpen: function onOpen() {
      setOpen(true);
    },
    onClose: function onClose() {
      setOpen(false);
    },
    getOptionSelected: function getOptionSelected(option, value) {
      return option.name === value.name;
    },
    getOptionLabel: function getOptionLabel(option) {
      return option.name;
    },
    options: options,
    loading: loading,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
        label: "Asynchronous",
        variant: "outlined",
        InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
          endAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: [loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__["default"], {
              color: "inherit",
              size: 20
            }) : null, params.InputProps.endAdornment]
          })
        })
      }));
    }
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/CheckboxesTags.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/CheckboxesTags.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckboxesTags)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var _material_ui_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/CheckBoxOutlineBlank */ "./node_modules/@material-ui/icons/CheckBoxOutlineBlank.js");
/* harmony import */ var _material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/CheckBox */ "./node_modules/@material-ui/icons/CheckBox.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-use-before-define */









var icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_2__["default"], {
  fontSize: "small"
});

var checkedIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
  fontSize: "small"
});

function CheckboxesTags() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    multiple: true,
    id: "checkboxes-tags-demo",
    options: top100Films,
    disableCloseOnSelect: true,
    getOptionLabel: function getOptionLabel(option) {
      return option.title;
    },
    renderOption: function renderOption(option, _ref) {
      var selected = _ref.selected;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
          icon: icon,
          checkedIcon: checkedIcon,
          style: {
            marginRight: 8
          },
          checked: selected
        }), option.title]
      });
    },
    style: {
      width: 500
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, params), {}, {
        variant: "outlined",
        label: "Checkboxes",
        placeholder: "Favorites"
      }));
    }
  });
} // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

var top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/ComboBox.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/ComboBox.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComboBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-use-before-define */




function ComboBox() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "combo-box-demo",
    options: top100Films,
    getOptionLabel: function getOptionLabel(option) {
      return option.title;
    },
    style: {
      width: 300
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
        label: "Combo box",
        variant: "outlined"
      }));
    }
  });
} // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

var top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}, {
  title: 'Casablanca',
  year: 1942
}, {
  title: 'City Lights',
  year: 1931
}, {
  title: 'Psycho',
  year: 1960
}, {
  title: 'The Green Mile',
  year: 1999
}, {
  title: 'The Intouchables',
  year: 2011
}, {
  title: 'Modern Times',
  year: 1936
}, {
  title: 'Raiders of the Lost Ark',
  year: 1981
}, {
  title: 'Rear Window',
  year: 1954
}, {
  title: 'The Pianist',
  year: 2002
}, {
  title: 'The Departed',
  year: 2006
}, {
  title: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  title: 'Back to the Future',
  year: 1985
}, {
  title: 'Whiplash',
  year: 2014
}, {
  title: 'Gladiator',
  year: 2000
}, {
  title: 'Memento',
  year: 2000
}, {
  title: 'The Prestige',
  year: 2006
}, {
  title: 'The Lion King',
  year: 1994
}, {
  title: 'Apocalypse Now',
  year: 1979
}, {
  title: 'Alien',
  year: 1979
}, {
  title: 'Sunset Boulevard',
  year: 1950
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  title: 'The Great Dictator',
  year: 1940
}, {
  title: 'Cinema Paradiso',
  year: 1988
}, {
  title: 'The Lives of Others',
  year: 2006
}, {
  title: 'Grave of the Fireflies',
  year: 1988
}, {
  title: 'Paths of Glory',
  year: 1957
}, {
  title: 'Django Unchained',
  year: 2012
}, {
  title: 'The Shining',
  year: 1980
}, {
  title: 'WALL·E',
  year: 2008
}, {
  title: 'American Beauty',
  year: 1999
}, {
  title: 'The Dark Knight Rises',
  year: 2012
}, {
  title: 'Princess Mononoke',
  year: 1997
}, {
  title: 'Aliens',
  year: 1986
}, {
  title: 'Oldboy',
  year: 2003
}, {
  title: 'Once Upon a Time in America',
  year: 1984
}, {
  title: 'Witness for the Prosecution',
  year: 1957
}, {
  title: 'Das Boot',
  year: 1981
}, {
  title: 'Citizen Kane',
  year: 1941
}, {
  title: 'North by Northwest',
  year: 1959
}, {
  title: 'Vertigo',
  year: 1958
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  title: 'Reservoir Dogs',
  year: 1992
}, {
  title: 'Braveheart',
  year: 1995
}, {
  title: 'M',
  year: 1931
}, {
  title: 'Requiem for a Dream',
  year: 2000
}, {
  title: 'Amélie',
  year: 2001
}, {
  title: 'A Clockwork Orange',
  year: 1971
}, {
  title: 'Like Stars on Earth',
  year: 2007
}, {
  title: 'Taxi Driver',
  year: 1976
}, {
  title: 'Lawrence of Arabia',
  year: 1962
}, {
  title: 'Double Indemnity',
  year: 1944
}, {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  title: 'Amadeus',
  year: 1984
}, {
  title: 'To Kill a Mockingbird',
  year: 1962
}, {
  title: 'Toy Story 3',
  year: 2010
}, {
  title: 'Logan',
  year: 2017
}, {
  title: 'Full Metal Jacket',
  year: 1987
}, {
  title: 'Dangal',
  year: 2016
}, {
  title: 'The Sting',
  year: 1973
}, {
  title: '2001: A Space Odyssey',
  year: 1968
}, {
  title: "Singin' in the Rain",
  year: 1952
}, {
  title: 'Toy Story',
  year: 1995
}, {
  title: 'Bicycle Thieves',
  year: 1948
}, {
  title: 'The Kid',
  year: 1921
}, {
  title: 'Inglourious Basterds',
  year: 2009
}, {
  title: 'Snatch',
  year: 2000
}, {
  title: '3 Idiots',
  year: 2009
}, {
  title: 'Monty Python and the Holy Grail',
  year: 1975
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/ControllableStates.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/ControllableStates.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ControllableStates)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var options = ['Option 1', 'Option 2'];
function ControllableStates() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(options[0]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      inputValue = _React$useState4[0],
      setInputValue = _React$useState4[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      children: "value: ".concat(value !== null ? "'".concat(value, "'") : 'null')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      children: "inputValue: '".concat(inputValue, "'")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: value,
      onChange: function onChange(event, newValue) {
        setValue(newValue);
      },
      inputValue: inputValue,
      onInputChange: function onInputChange(event, newInputValue) {
        setInputValue(newInputValue);
      },
      id: "controllable-states-demo",
      options: options,
      style: {
        width: 300
      },
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "Controllable",
          variant: "outlined"
        }));
      }
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/CountrySelect.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/CountrySelect.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CountrySelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-use-before-define */



 // ISO 3166-1 alpha-2
// ⚠️ No support for IE 11




function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined' ? isoCode.toUpperCase().replace(/./g, function (_char) {
    return String.fromCodePoint(_char.charCodeAt(0) + 127397);
  }) : isoCode;
}

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18
    }
  }
});
function CountrySelect() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "country-select-demo",
    style: {
      width: 300
    },
    options: countries,
    classes: {
      option: classes.option
    },
    autoHighlight: true,
    getOptionLabel: function getOptionLabel(option) {
      return option.label;
    },
    renderOption: function renderOption(option) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: countryToFlag(option.code)
        }), option.label, " (", option.code, ") +", option.phone]
      });
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
        label: "Choose a country",
        variant: "outlined",
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          autoComplete: 'new-password' // disable autocomplete and autofill

        })
      }));
    }
  });
} // From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js

var countries = [{
  code: 'AD',
  label: 'Andorra',
  phone: '376'
}, {
  code: 'AE',
  label: 'United Arab Emirates',
  phone: '971'
}, {
  code: 'AF',
  label: 'Afghanistan',
  phone: '93'
}, {
  code: 'AG',
  label: 'Antigua and Barbuda',
  phone: '1-268'
}, {
  code: 'AI',
  label: 'Anguilla',
  phone: '1-264'
}, {
  code: 'AL',
  label: 'Albania',
  phone: '355'
}, {
  code: 'AM',
  label: 'Armenia',
  phone: '374'
}, {
  code: 'AO',
  label: 'Angola',
  phone: '244'
}, {
  code: 'AQ',
  label: 'Antarctica',
  phone: '672'
}, {
  code: 'AR',
  label: 'Argentina',
  phone: '54'
}, {
  code: 'AS',
  label: 'American Samoa',
  phone: '1-684'
}, {
  code: 'AT',
  label: 'Austria',
  phone: '43'
}, {
  code: 'AU',
  label: 'Australia',
  phone: '61',
  suggested: true
}, {
  code: 'AW',
  label: 'Aruba',
  phone: '297'
}, {
  code: 'AX',
  label: 'Alland Islands',
  phone: '358'
}, {
  code: 'AZ',
  label: 'Azerbaijan',
  phone: '994'
}, {
  code: 'BA',
  label: 'Bosnia and Herzegovina',
  phone: '387'
}, {
  code: 'BB',
  label: 'Barbados',
  phone: '1-246'
}, {
  code: 'BD',
  label: 'Bangladesh',
  phone: '880'
}, {
  code: 'BE',
  label: 'Belgium',
  phone: '32'
}, {
  code: 'BF',
  label: 'Burkina Faso',
  phone: '226'
}, {
  code: 'BG',
  label: 'Bulgaria',
  phone: '359'
}, {
  code: 'BH',
  label: 'Bahrain',
  phone: '973'
}, {
  code: 'BI',
  label: 'Burundi',
  phone: '257'
}, {
  code: 'BJ',
  label: 'Benin',
  phone: '229'
}, {
  code: 'BL',
  label: 'Saint Barthelemy',
  phone: '590'
}, {
  code: 'BM',
  label: 'Bermuda',
  phone: '1-441'
}, {
  code: 'BN',
  label: 'Brunei Darussalam',
  phone: '673'
}, {
  code: 'BO',
  label: 'Bolivia',
  phone: '591'
}, {
  code: 'BR',
  label: 'Brazil',
  phone: '55'
}, {
  code: 'BS',
  label: 'Bahamas',
  phone: '1-242'
}, {
  code: 'BT',
  label: 'Bhutan',
  phone: '975'
}, {
  code: 'BV',
  label: 'Bouvet Island',
  phone: '47'
}, {
  code: 'BW',
  label: 'Botswana',
  phone: '267'
}, {
  code: 'BY',
  label: 'Belarus',
  phone: '375'
}, {
  code: 'BZ',
  label: 'Belize',
  phone: '501'
}, {
  code: 'CA',
  label: 'Canada',
  phone: '1',
  suggested: true
}, {
  code: 'CC',
  label: 'Cocos (Keeling) Islands',
  phone: '61'
}, {
  code: 'CD',
  label: 'Congo, Democratic Republic of the',
  phone: '243'
}, {
  code: 'CF',
  label: 'Central African Republic',
  phone: '236'
}, {
  code: 'CG',
  label: 'Congo, Republic of the',
  phone: '242'
}, {
  code: 'CH',
  label: 'Switzerland',
  phone: '41'
}, {
  code: 'CI',
  label: "Cote d'Ivoire",
  phone: '225'
}, {
  code: 'CK',
  label: 'Cook Islands',
  phone: '682'
}, {
  code: 'CL',
  label: 'Chile',
  phone: '56'
}, {
  code: 'CM',
  label: 'Cameroon',
  phone: '237'
}, {
  code: 'CN',
  label: 'China',
  phone: '86'
}, {
  code: 'CO',
  label: 'Colombia',
  phone: '57'
}, {
  code: 'CR',
  label: 'Costa Rica',
  phone: '506'
}, {
  code: 'CU',
  label: 'Cuba',
  phone: '53'
}, {
  code: 'CV',
  label: 'Cape Verde',
  phone: '238'
}, {
  code: 'CW',
  label: 'Curacao',
  phone: '599'
}, {
  code: 'CX',
  label: 'Christmas Island',
  phone: '61'
}, {
  code: 'CY',
  label: 'Cyprus',
  phone: '357'
}, {
  code: 'CZ',
  label: 'Czech Republic',
  phone: '420'
}, {
  code: 'DE',
  label: 'Germany',
  phone: '49',
  suggested: true
}, {
  code: 'DJ',
  label: 'Djibouti',
  phone: '253'
}, {
  code: 'DK',
  label: 'Denmark',
  phone: '45'
}, {
  code: 'DM',
  label: 'Dominica',
  phone: '1-767'
}, {
  code: 'DO',
  label: 'Dominican Republic',
  phone: '1-809'
}, {
  code: 'DZ',
  label: 'Algeria',
  phone: '213'
}, {
  code: 'EC',
  label: 'Ecuador',
  phone: '593'
}, {
  code: 'EE',
  label: 'Estonia',
  phone: '372'
}, {
  code: 'EG',
  label: 'Egypt',
  phone: '20'
}, {
  code: 'EH',
  label: 'Western Sahara',
  phone: '212'
}, {
  code: 'ER',
  label: 'Eritrea',
  phone: '291'
}, {
  code: 'ES',
  label: 'Spain',
  phone: '34'
}, {
  code: 'ET',
  label: 'Ethiopia',
  phone: '251'
}, {
  code: 'FI',
  label: 'Finland',
  phone: '358'
}, {
  code: 'FJ',
  label: 'Fiji',
  phone: '679'
}, {
  code: 'FK',
  label: 'Falkland Islands (Malvinas)',
  phone: '500'
}, {
  code: 'FM',
  label: 'Micronesia, Federated States of',
  phone: '691'
}, {
  code: 'FO',
  label: 'Faroe Islands',
  phone: '298'
}, {
  code: 'FR',
  label: 'France',
  phone: '33',
  suggested: true
}, {
  code: 'GA',
  label: 'Gabon',
  phone: '241'
}, {
  code: 'GB',
  label: 'United Kingdom',
  phone: '44'
}, {
  code: 'GD',
  label: 'Grenada',
  phone: '1-473'
}, {
  code: 'GE',
  label: 'Georgia',
  phone: '995'
}, {
  code: 'GF',
  label: 'French Guiana',
  phone: '594'
}, {
  code: 'GG',
  label: 'Guernsey',
  phone: '44'
}, {
  code: 'GH',
  label: 'Ghana',
  phone: '233'
}, {
  code: 'GI',
  label: 'Gibraltar',
  phone: '350'
}, {
  code: 'GL',
  label: 'Greenland',
  phone: '299'
}, {
  code: 'GM',
  label: 'Gambia',
  phone: '220'
}, {
  code: 'GN',
  label: 'Guinea',
  phone: '224'
}, {
  code: 'GP',
  label: 'Guadeloupe',
  phone: '590'
}, {
  code: 'GQ',
  label: 'Equatorial Guinea',
  phone: '240'
}, {
  code: 'GR',
  label: 'Greece',
  phone: '30'
}, {
  code: 'GS',
  label: 'South Georgia and the South Sandwich Islands',
  phone: '500'
}, {
  code: 'GT',
  label: 'Guatemala',
  phone: '502'
}, {
  code: 'GU',
  label: 'Guam',
  phone: '1-671'
}, {
  code: 'GW',
  label: 'Guinea-Bissau',
  phone: '245'
}, {
  code: 'GY',
  label: 'Guyana',
  phone: '592'
}, {
  code: 'HK',
  label: 'Hong Kong',
  phone: '852'
}, {
  code: 'HM',
  label: 'Heard Island and McDonald Islands',
  phone: '672'
}, {
  code: 'HN',
  label: 'Honduras',
  phone: '504'
}, {
  code: 'HR',
  label: 'Croatia',
  phone: '385'
}, {
  code: 'HT',
  label: 'Haiti',
  phone: '509'
}, {
  code: 'HU',
  label: 'Hungary',
  phone: '36'
}, {
  code: 'ID',
  label: 'Indonesia',
  phone: '62'
}, {
  code: 'IE',
  label: 'Ireland',
  phone: '353'
}, {
  code: 'IL',
  label: 'Israel',
  phone: '972'
}, {
  code: 'IM',
  label: 'Isle of Man',
  phone: '44'
}, {
  code: 'IN',
  label: 'India',
  phone: '91'
}, {
  code: 'IO',
  label: 'British Indian Ocean Territory',
  phone: '246'
}, {
  code: 'IQ',
  label: 'Iraq',
  phone: '964'
}, {
  code: 'IR',
  label: 'Iran, Islamic Republic of',
  phone: '98'
}, {
  code: 'IS',
  label: 'Iceland',
  phone: '354'
}, {
  code: 'IT',
  label: 'Italy',
  phone: '39'
}, {
  code: 'JE',
  label: 'Jersey',
  phone: '44'
}, {
  code: 'JM',
  label: 'Jamaica',
  phone: '1-876'
}, {
  code: 'JO',
  label: 'Jordan',
  phone: '962'
}, {
  code: 'JP',
  label: 'Japan',
  phone: '81',
  suggested: true
}, {
  code: 'KE',
  label: 'Kenya',
  phone: '254'
}, {
  code: 'KG',
  label: 'Kyrgyzstan',
  phone: '996'
}, {
  code: 'KH',
  label: 'Cambodia',
  phone: '855'
}, {
  code: 'KI',
  label: 'Kiribati',
  phone: '686'
}, {
  code: 'KM',
  label: 'Comoros',
  phone: '269'
}, {
  code: 'KN',
  label: 'Saint Kitts and Nevis',
  phone: '1-869'
}, {
  code: 'KP',
  label: "Korea, Democratic People's Republic of",
  phone: '850'
}, {
  code: 'KR',
  label: 'Korea, Republic of',
  phone: '82'
}, {
  code: 'KW',
  label: 'Kuwait',
  phone: '965'
}, {
  code: 'KY',
  label: 'Cayman Islands',
  phone: '1-345'
}, {
  code: 'KZ',
  label: 'Kazakhstan',
  phone: '7'
}, {
  code: 'LA',
  label: "Lao People's Democratic Republic",
  phone: '856'
}, {
  code: 'LB',
  label: 'Lebanon',
  phone: '961'
}, {
  code: 'LC',
  label: 'Saint Lucia',
  phone: '1-758'
}, {
  code: 'LI',
  label: 'Liechtenstein',
  phone: '423'
}, {
  code: 'LK',
  label: 'Sri Lanka',
  phone: '94'
}, {
  code: 'LR',
  label: 'Liberia',
  phone: '231'
}, {
  code: 'LS',
  label: 'Lesotho',
  phone: '266'
}, {
  code: 'LT',
  label: 'Lithuania',
  phone: '370'
}, {
  code: 'LU',
  label: 'Luxembourg',
  phone: '352'
}, {
  code: 'LV',
  label: 'Latvia',
  phone: '371'
}, {
  code: 'LY',
  label: 'Libya',
  phone: '218'
}, {
  code: 'MA',
  label: 'Morocco',
  phone: '212'
}, {
  code: 'MC',
  label: 'Monaco',
  phone: '377'
}, {
  code: 'MD',
  label: 'Moldova, Republic of',
  phone: '373'
}, {
  code: 'ME',
  label: 'Montenegro',
  phone: '382'
}, {
  code: 'MF',
  label: 'Saint Martin (French part)',
  phone: '590'
}, {
  code: 'MG',
  label: 'Madagascar',
  phone: '261'
}, {
  code: 'MH',
  label: 'Marshall Islands',
  phone: '692'
}, {
  code: 'MK',
  label: 'Macedonia, the Former Yugoslav Republic of',
  phone: '389'
}, {
  code: 'ML',
  label: 'Mali',
  phone: '223'
}, {
  code: 'MM',
  label: 'Myanmar',
  phone: '95'
}, {
  code: 'MN',
  label: 'Mongolia',
  phone: '976'
}, {
  code: 'MO',
  label: 'Macao',
  phone: '853'
}, {
  code: 'MP',
  label: 'Northern Mariana Islands',
  phone: '1-670'
}, {
  code: 'MQ',
  label: 'Martinique',
  phone: '596'
}, {
  code: 'MR',
  label: 'Mauritania',
  phone: '222'
}, {
  code: 'MS',
  label: 'Montserrat',
  phone: '1-664'
}, {
  code: 'MT',
  label: 'Malta',
  phone: '356'
}, {
  code: 'MU',
  label: 'Mauritius',
  phone: '230'
}, {
  code: 'MV',
  label: 'Maldives',
  phone: '960'
}, {
  code: 'MW',
  label: 'Malawi',
  phone: '265'
}, {
  code: 'MX',
  label: 'Mexico',
  phone: '52'
}, {
  code: 'MY',
  label: 'Malaysia',
  phone: '60'
}, {
  code: 'MZ',
  label: 'Mozambique',
  phone: '258'
}, {
  code: 'NA',
  label: 'Namibia',
  phone: '264'
}, {
  code: 'NC',
  label: 'New Caledonia',
  phone: '687'
}, {
  code: 'NE',
  label: 'Niger',
  phone: '227'
}, {
  code: 'NF',
  label: 'Norfolk Island',
  phone: '672'
}, {
  code: 'NG',
  label: 'Nigeria',
  phone: '234'
}, {
  code: 'NI',
  label: 'Nicaragua',
  phone: '505'
}, {
  code: 'NL',
  label: 'Netherlands',
  phone: '31'
}, {
  code: 'NO',
  label: 'Norway',
  phone: '47'
}, {
  code: 'NP',
  label: 'Nepal',
  phone: '977'
}, {
  code: 'NR',
  label: 'Nauru',
  phone: '674'
}, {
  code: 'NU',
  label: 'Niue',
  phone: '683'
}, {
  code: 'NZ',
  label: 'New Zealand',
  phone: '64'
}, {
  code: 'OM',
  label: 'Oman',
  phone: '968'
}, {
  code: 'PA',
  label: 'Panama',
  phone: '507'
}, {
  code: 'PE',
  label: 'Peru',
  phone: '51'
}, {
  code: 'PF',
  label: 'French Polynesia',
  phone: '689'
}, {
  code: 'PG',
  label: 'Papua New Guinea',
  phone: '675'
}, {
  code: 'PH',
  label: 'Philippines',
  phone: '63'
}, {
  code: 'PK',
  label: 'Pakistan',
  phone: '92'
}, {
  code: 'PL',
  label: 'Poland',
  phone: '48'
}, {
  code: 'PM',
  label: 'Saint Pierre and Miquelon',
  phone: '508'
}, {
  code: 'PN',
  label: 'Pitcairn',
  phone: '870'
}, {
  code: 'PR',
  label: 'Puerto Rico',
  phone: '1'
}, {
  code: 'PS',
  label: 'Palestine, State of',
  phone: '970'
}, {
  code: 'PT',
  label: 'Portugal',
  phone: '351'
}, {
  code: 'PW',
  label: 'Palau',
  phone: '680'
}, {
  code: 'PY',
  label: 'Paraguay',
  phone: '595'
}, {
  code: 'QA',
  label: 'Qatar',
  phone: '974'
}, {
  code: 'RE',
  label: 'Reunion',
  phone: '262'
}, {
  code: 'RO',
  label: 'Romania',
  phone: '40'
}, {
  code: 'RS',
  label: 'Serbia',
  phone: '381'
}, {
  code: 'RU',
  label: 'Russian Federation',
  phone: '7'
}, {
  code: 'RW',
  label: 'Rwanda',
  phone: '250'
}, {
  code: 'SA',
  label: 'Saudi Arabia',
  phone: '966'
}, {
  code: 'SB',
  label: 'Solomon Islands',
  phone: '677'
}, {
  code: 'SC',
  label: 'Seychelles',
  phone: '248'
}, {
  code: 'SD',
  label: 'Sudan',
  phone: '249'
}, {
  code: 'SE',
  label: 'Sweden',
  phone: '46'
}, {
  code: 'SG',
  label: 'Singapore',
  phone: '65'
}, {
  code: 'SH',
  label: 'Saint Helena',
  phone: '290'
}, {
  code: 'SI',
  label: 'Slovenia',
  phone: '386'
}, {
  code: 'SJ',
  label: 'Svalbard and Jan Mayen',
  phone: '47'
}, {
  code: 'SK',
  label: 'Slovakia',
  phone: '421'
}, {
  code: 'SL',
  label: 'Sierra Leone',
  phone: '232'
}, {
  code: 'SM',
  label: 'San Marino',
  phone: '378'
}, {
  code: 'SN',
  label: 'Senegal',
  phone: '221'
}, {
  code: 'SO',
  label: 'Somalia',
  phone: '252'
}, {
  code: 'SR',
  label: 'Suriname',
  phone: '597'
}, {
  code: 'SS',
  label: 'South Sudan',
  phone: '211'
}, {
  code: 'ST',
  label: 'Sao Tome and Principe',
  phone: '239'
}, {
  code: 'SV',
  label: 'El Salvador',
  phone: '503'
}, {
  code: 'SX',
  label: 'Sint Maarten (Dutch part)',
  phone: '1-721'
}, {
  code: 'SY',
  label: 'Syrian Arab Republic',
  phone: '963'
}, {
  code: 'SZ',
  label: 'Swaziland',
  phone: '268'
}, {
  code: 'TC',
  label: 'Turks and Caicos Islands',
  phone: '1-649'
}, {
  code: 'TD',
  label: 'Chad',
  phone: '235'
}, {
  code: 'TF',
  label: 'French Southern Territories',
  phone: '262'
}, {
  code: 'TG',
  label: 'Togo',
  phone: '228'
}, {
  code: 'TH',
  label: 'Thailand',
  phone: '66'
}, {
  code: 'TJ',
  label: 'Tajikistan',
  phone: '992'
}, {
  code: 'TK',
  label: 'Tokelau',
  phone: '690'
}, {
  code: 'TL',
  label: 'Timor-Leste',
  phone: '670'
}, {
  code: 'TM',
  label: 'Turkmenistan',
  phone: '993'
}, {
  code: 'TN',
  label: 'Tunisia',
  phone: '216'
}, {
  code: 'TO',
  label: 'Tonga',
  phone: '676'
}, {
  code: 'TR',
  label: 'Turkey',
  phone: '90'
}, {
  code: 'TT',
  label: 'Trinidad and Tobago',
  phone: '1-868'
}, {
  code: 'TV',
  label: 'Tuvalu',
  phone: '688'
}, {
  code: 'TW',
  label: 'Taiwan, Province of China',
  phone: '886'
}, {
  code: 'TZ',
  label: 'United Republic of Tanzania',
  phone: '255'
}, {
  code: 'UA',
  label: 'Ukraine',
  phone: '380'
}, {
  code: 'UG',
  label: 'Uganda',
  phone: '256'
}, {
  code: 'US',
  label: 'United States',
  phone: '1',
  suggested: true
}, {
  code: 'UY',
  label: 'Uruguay',
  phone: '598'
}, {
  code: 'UZ',
  label: 'Uzbekistan',
  phone: '998'
}, {
  code: 'VA',
  label: 'Holy See (Vatican City State)',
  phone: '379'
}, {
  code: 'VC',
  label: 'Saint Vincent and the Grenadines',
  phone: '1-784'
}, {
  code: 'VE',
  label: 'Venezuela',
  phone: '58'
}, {
  code: 'VG',
  label: 'British Virgin Islands',
  phone: '1-284'
}, {
  code: 'VI',
  label: 'US Virgin Islands',
  phone: '1-340'
}, {
  code: 'VN',
  label: 'Vietnam',
  phone: '84'
}, {
  code: 'VU',
  label: 'Vanuatu',
  phone: '678'
}, {
  code: 'WF',
  label: 'Wallis and Futuna',
  phone: '681'
}, {
  code: 'WS',
  label: 'Samoa',
  phone: '685'
}, {
  code: 'XK',
  label: 'Kosovo',
  phone: '383'
}, {
  code: 'YE',
  label: 'Yemen',
  phone: '967'
}, {
  code: 'YT',
  label: 'Mayotte',
  phone: '262'
}, {
  code: 'ZA',
  label: 'South Africa',
  phone: '27'
}, {
  code: 'ZM',
  label: 'Zambia',
  phone: '260'
}, {
  code: 'ZW',
  label: 'Zimbabwe',
  phone: '263'
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/CustomInputAutocomplete.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/CustomInputAutocomplete.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomInputAutocomplete)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var options = ['Option 1', 'Option 2'];
function CustomInputAutocomplete() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "custom-input-demo",
    options: options,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        ref: params.InputProps.ref,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", _objectSpread({
          style: {
            width: 200
          },
          type: "text"
        }, params.inputProps))
      });
    }
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/CustomizedHook.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/CustomizedHook.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomizedHook)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_lab_useAutocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/useAutocomplete */ "./node_modules/@material-ui/lab/esm/useAutocomplete/useAutocomplete.js");
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/NoSsr */ "./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["label", "onDelete"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint-disable no-use-before-define */








var Label = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('label')(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 0 0 4px;\n  line-height: 1.5;\n  display: block;\n"])));
var InputWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 300px;\n  border: 1px solid #d9d9d9;\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 1px;\n  display: flex;\n  flex-wrap: wrap;\n\n  &:hover {\n    border-color: #40a9ff;\n  }\n\n  &.focused {\n    border-color: #40a9ff;\n    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n  }\n\n  & input {\n    font-size: 14px;\n    height: 30px;\n    box-sizing: border-box;\n    padding: 4px 6px;\n    width: 0;\n    min-width: 30px;\n    flex-grow: 1;\n    border: 0;\n    margin: 0;\n    outline: 0;\n  }\n"])));
var Tag = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(function (_ref) {
  var label = _ref.label,
      onDelete = _ref.onDelete,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: onDelete
    })]
  }));
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: 24px;\n  margin: 2px;\n  line-height: 22px;\n  background-color: #fafafa;\n  border: 1px solid #e8e8e8;\n  border-radius: 2px;\n  box-sizing: content-box;\n  padding: 0 4px 0 10px;\n  outline: 0;\n  overflow: hidden;\n\n  &:focus {\n    border-color: #40a9ff;\n    background-color: #e6f7ff;\n  }\n\n  & span {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n  & svg {\n    font-size: 12px;\n    cursor: pointer;\n    padding: 4px;\n  }\n"])));
var Listbox = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('ul')(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 300px;\n  margin: 2px 0 0;\n  padding: 0;\n  position: absolute;\n  list-style: none;\n  background-color: #fff;\n  overflow: auto;\n  max-height: 250px;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  z-index: 1;\n\n  & li {\n    padding: 5px 12px;\n    display: flex;\n\n    & span {\n      flex-grow: 1;\n    }\n\n    & svg {\n      color: transparent;\n    }\n  }\n\n  & li[aria-selected='true'] {\n    background-color: #fafafa;\n    font-weight: 600;\n\n    & svg {\n      color: #1890ff;\n    }\n  }\n\n  & li[data-focus='true'] {\n    background-color: #e6f7ff;\n    cursor: pointer;\n\n    & svg {\n      color: #000;\n    }\n  }\n"])));
function CustomizedHook() {
  var _useAutocomplete = (0,_material_ui_lab_useAutocomplete__WEBPACK_IMPORTED_MODULE_4__["default"])({
    id: 'customized-hook-demo',
    defaultValue: [top100Films[1]],
    multiple: true,
    options: top100Films,
    getOptionLabel: function getOptionLabel(option) {
      return option.title;
    }
  }),
      getRootProps = _useAutocomplete.getRootProps,
      getInputLabelProps = _useAutocomplete.getInputLabelProps,
      getInputProps = _useAutocomplete.getInputProps,
      getTagProps = _useAutocomplete.getTagProps,
      getListboxProps = _useAutocomplete.getListboxProps,
      getOptionProps = _useAutocomplete.getOptionProps,
      groupedOptions = _useAutocomplete.groupedOptions,
      value = _useAutocomplete.value,
      focused = _useAutocomplete.focused,
      setAnchorEl = _useAutocomplete.setAnchorEl;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", _objectSpread(_objectSpread({}, getRootProps()), {}, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Label, _objectSpread(_objectSpread({}, getInputLabelProps()), {}, {
          children: "Customized hook"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(InputWrapper, {
          ref: setAnchorEl,
          className: focused ? 'focused' : '',
          children: [value.map(function (option, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Tag, _objectSpread({
              label: option.title
            }, getTagProps({
              index: index
            })));
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", _objectSpread({}, getInputProps()))]
        })]
      })), groupedOptions.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Listbox, _objectSpread(_objectSpread({}, getListboxProps()), {}, {
        children: groupedOptions.map(function (option, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", _objectSpread(_objectSpread({}, getOptionProps({
            option: option,
            index: index
          })), {}, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: option.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6__["default"], {
              fontSize: "small"
            })]
          }));
        })
      })) : null]
    })
  });
} // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

var top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}, {
  title: 'Casablanca',
  year: 1942
}, {
  title: 'City Lights',
  year: 1931
}, {
  title: 'Psycho',
  year: 1960
}, {
  title: 'The Green Mile',
  year: 1999
}, {
  title: 'The Intouchables',
  year: 2011
}, {
  title: 'Modern Times',
  year: 1936
}, {
  title: 'Raiders of the Lost Ark',
  year: 1981
}, {
  title: 'Rear Window',
  year: 1954
}, {
  title: 'The Pianist',
  year: 2002
}, {
  title: 'The Departed',
  year: 2006
}, {
  title: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  title: 'Back to the Future',
  year: 1985
}, {
  title: 'Whiplash',
  year: 2014
}, {
  title: 'Gladiator',
  year: 2000
}, {
  title: 'Memento',
  year: 2000
}, {
  title: 'The Prestige',
  year: 2006
}, {
  title: 'The Lion King',
  year: 1994
}, {
  title: 'Apocalypse Now',
  year: 1979
}, {
  title: 'Alien',
  year: 1979
}, {
  title: 'Sunset Boulevard',
  year: 1950
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  title: 'The Great Dictator',
  year: 1940
}, {
  title: 'Cinema Paradiso',
  year: 1988
}, {
  title: 'The Lives of Others',
  year: 2006
}, {
  title: 'Grave of the Fireflies',
  year: 1988
}, {
  title: 'Paths of Glory',
  year: 1957
}, {
  title: 'Django Unchained',
  year: 2012
}, {
  title: 'The Shining',
  year: 1980
}, {
  title: 'WALL·E',
  year: 2008
}, {
  title: 'American Beauty',
  year: 1999
}, {
  title: 'The Dark Knight Rises',
  year: 2012
}, {
  title: 'Princess Mononoke',
  year: 1997
}, {
  title: 'Aliens',
  year: 1986
}, {
  title: 'Oldboy',
  year: 2003
}, {
  title: 'Once Upon a Time in America',
  year: 1984
}, {
  title: 'Witness for the Prosecution',
  year: 1957
}, {
  title: 'Das Boot',
  year: 1981
}, {
  title: 'Citizen Kane',
  year: 1941
}, {
  title: 'North by Northwest',
  year: 1959
}, {
  title: 'Vertigo',
  year: 1958
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  title: 'Reservoir Dogs',
  year: 1992
}, {
  title: 'Braveheart',
  year: 1995
}, {
  title: 'M',
  year: 1931
}, {
  title: 'Requiem for a Dream',
  year: 2000
}, {
  title: 'Amélie',
  year: 2001
}, {
  title: 'A Clockwork Orange',
  year: 1971
}, {
  title: 'Like Stars on Earth',
  year: 2007
}, {
  title: 'Taxi Driver',
  year: 1976
}, {
  title: 'Lawrence of Arabia',
  year: 1962
}, {
  title: 'Double Indemnity',
  year: 1944
}, {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  title: 'Amadeus',
  year: 1984
}, {
  title: 'To Kill a Mockingbird',
  year: 1962
}, {
  title: 'Toy Story 3',
  year: 2010
}, {
  title: 'Logan',
  year: 2017
}, {
  title: 'Full Metal Jacket',
  year: 1987
}, {
  title: 'Dangal',
  year: 2016
}, {
  title: 'The Sting',
  year: 1973
}, {
  title: '2001: A Space Odyssey',
  year: 1968
}, {
  title: "Singin' in the Rain",
  year: 1952
}, {
  title: 'Toy Story',
  year: 1995
}, {
  title: 'Bicycle Thieves',
  year: 1948
}, {
  title: 'The Kid',
  year: 1921
}, {
  title: 'Inglourious Basterds',
  year: 2009
}, {
  title: 'Snatch',
  year: 2000
}, {
  title: '3 Idiots',
  year: 2009
}, {
  title: 'Monty Python and the Holy Grail',
  year: 1975
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/DisabledOptions.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/DisabledOptions.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DisabledOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-use-before-define */




function DisabledOptions() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "disabled-options-demo",
    options: timeSlots,
    getOptionDisabled: function getOptionDisabled(option) {
      return option === timeSlots[0] || option === timeSlots[2];
    },
    style: {
      width: 300
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
        label: "Disabled options",
        variant: "outlined"
      }));
    }
  });
} // One time slot every 30 minutes.

var timeSlots = Array.from(new Array(24 * 2)).map(function (_, index) {
  return "".concat(index < 20 ? '0' : '').concat(Math.floor(index / 2), ":").concat(index % 2 === 0 ? '00' : '30');
});

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Filter.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Filter.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Filter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/useAutocomplete/useAutocomplete.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-use-before-define */




var filterOptions = (0,_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__.createFilterOptions)({
  matchFrom: 'start',
  stringify: function stringify(option) {
    return option.title;
  }
});
function Filter() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "filter-demo",
    options: top100Films,
    getOptionLabel: function getOptionLabel(option) {
      return option.title;
    },
    filterOptions: filterOptions,
    style: {
      width: 300
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
        label: "Custom filter",
        variant: "outlined"
      }));
    }
  });
} // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

var top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}, {
  title: 'Casablanca',
  year: 1942
}, {
  title: 'City Lights',
  year: 1931
}, {
  title: 'Psycho',
  year: 1960
}, {
  title: 'The Green Mile',
  year: 1999
}, {
  title: 'The Intouchables',
  year: 2011
}, {
  title: 'Modern Times',
  year: 1936
}, {
  title: 'Raiders of the Lost Ark',
  year: 1981
}, {
  title: 'Rear Window',
  year: 1954
}, {
  title: 'The Pianist',
  year: 2002
}, {
  title: 'The Departed',
  year: 2006
}, {
  title: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  title: 'Back to the Future',
  year: 1985
}, {
  title: 'Whiplash',
  year: 2014
}, {
  title: 'Gladiator',
  year: 2000
}, {
  title: 'Memento',
  year: 2000
}, {
  title: 'The Prestige',
  year: 2006
}, {
  title: 'The Lion King',
  year: 1994
}, {
  title: 'Apocalypse Now',
  year: 1979
}, {
  title: 'Alien',
  year: 1979
}, {
  title: 'Sunset Boulevard',
  year: 1950
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  title: 'The Great Dictator',
  year: 1940
}, {
  title: 'Cinema Paradiso',
  year: 1988
}, {
  title: 'The Lives of Others',
  year: 2006
}, {
  title: 'Grave of the Fireflies',
  year: 1988
}, {
  title: 'Paths of Glory',
  year: 1957
}, {
  title: 'Django Unchained',
  year: 2012
}, {
  title: 'The Shining',
  year: 1980
}, {
  title: 'WALL·E',
  year: 2008
}, {
  title: 'American Beauty',
  year: 1999
}, {
  title: 'The Dark Knight Rises',
  year: 2012
}, {
  title: 'Princess Mononoke',
  year: 1997
}, {
  title: 'Aliens',
  year: 1986
}, {
  title: 'Oldboy',
  year: 2003
}, {
  title: 'Once Upon a Time in America',
  year: 1984
}, {
  title: 'Witness for the Prosecution',
  year: 1957
}, {
  title: 'Das Boot',
  year: 1981
}, {
  title: 'Citizen Kane',
  year: 1941
}, {
  title: 'North by Northwest',
  year: 1959
}, {
  title: 'Vertigo',
  year: 1958
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  title: 'Reservoir Dogs',
  year: 1992
}, {
  title: 'Braveheart',
  year: 1995
}, {
  title: 'M',
  year: 1931
}, {
  title: 'Requiem for a Dream',
  year: 2000
}, {
  title: 'Amélie',
  year: 2001
}, {
  title: 'A Clockwork Orange',
  year: 1971
}, {
  title: 'Like Stars on Earth',
  year: 2007
}, {
  title: 'Taxi Driver',
  year: 1976
}, {
  title: 'Lawrence of Arabia',
  year: 1962
}, {
  title: 'Double Indemnity',
  year: 1944
}, {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  title: 'Amadeus',
  year: 1984
}, {
  title: 'To Kill a Mockingbird',
  year: 1962
}, {
  title: 'Toy Story 3',
  year: 2010
}, {
  title: 'Logan',
  year: 2017
}, {
  title: 'Full Metal Jacket',
  year: 1987
}, {
  title: 'Dangal',
  year: 2016
}, {
  title: 'The Sting',
  year: 1973
}, {
  title: '2001: A Space Odyssey',
  year: 1968
}, {
  title: "Singin' in the Rain",
  year: 1952
}, {
  title: 'Toy Story',
  year: 1995
}, {
  title: 'Bicycle Thieves',
  year: 1948
}, {
  title: 'The Kid',
  year: 1921
}, {
  title: 'Inglourious Basterds',
  year: 2009
}, {
  title: 'Snatch',
  year: 2000
}, {
  title: '3 Idiots',
  year: 2009
}, {
  title: 'Monty Python and the Holy Grail',
  year: 1975
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/FixedTags.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/FixedTags.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FixedTags)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/Chip.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-use-before-define */





function FixedTags() {
  var fixedOptions = [top100Films[6]];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState([].concat(fixedOptions, [top100Films[13]])),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], {
    multiple: true,
    id: "fixed-tags-demo",
    value: value,
    onChange: function onChange(event, newValue) {
      setValue([].concat(fixedOptions, _toConsumableArray(newValue.filter(function (option) {
        return fixedOptions.indexOf(option) === -1;
      }))));
    },
    options: top100Films,
    getOptionLabel: function getOptionLabel(option) {
      return option.title;
    },
    renderTags: function renderTags(tagValue, getTagProps) {
      return tagValue.map(function (option, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({
          label: option.title
        }, getTagProps({
          index: index
        })), {}, {
          disabled: fixedOptions.indexOf(option) !== -1
        }));
      });
    },
    style: {
      width: 500
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
        label: "Fixed tag",
        variant: "outlined",
        placeholder: "Favorites"
      }));
    }
  });
} // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

var top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}, {
  title: 'Casablanca',
  year: 1942
}, {
  title: 'City Lights',
  year: 1931
}, {
  title: 'Psycho',
  year: 1960
}, {
  title: 'The Green Mile',
  year: 1999
}, {
  title: 'The Intouchables',
  year: 2011
}, {
  title: 'Modern Times',
  year: 1936
}, {
  title: 'Raiders of the Lost Ark',
  year: 1981
}, {
  title: 'Rear Window',
  year: 1954
}, {
  title: 'The Pianist',
  year: 2002
}, {
  title: 'The Departed',
  year: 2006
}, {
  title: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  title: 'Back to the Future',
  year: 1985
}, {
  title: 'Whiplash',
  year: 2014
}, {
  title: 'Gladiator',
  year: 2000
}, {
  title: 'Memento',
  year: 2000
}, {
  title: 'The Prestige',
  year: 2006
}, {
  title: 'The Lion King',
  year: 1994
}, {
  title: 'Apocalypse Now',
  year: 1979
}, {
  title: 'Alien',
  year: 1979
}, {
  title: 'Sunset Boulevard',
  year: 1950
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  title: 'The Great Dictator',
  year: 1940
}, {
  title: 'Cinema Paradiso',
  year: 1988
}, {
  title: 'The Lives of Others',
  year: 2006
}, {
  title: 'Grave of the Fireflies',
  year: 1988
}, {
  title: 'Paths of Glory',
  year: 1957
}, {
  title: 'Django Unchained',
  year: 2012
}, {
  title: 'The Shining',
  year: 1980
}, {
  title: 'WALL·E',
  year: 2008
}, {
  title: 'American Beauty',
  year: 1999
}, {
  title: 'The Dark Knight Rises',
  year: 2012
}, {
  title: 'Princess Mononoke',
  year: 1997
}, {
  title: 'Aliens',
  year: 1986
}, {
  title: 'Oldboy',
  year: 2003
}, {
  title: 'Once Upon a Time in America',
  year: 1984
}, {
  title: 'Witness for the Prosecution',
  year: 1957
}, {
  title: 'Das Boot',
  year: 1981
}, {
  title: 'Citizen Kane',
  year: 1941
}, {
  title: 'North by Northwest',
  year: 1959
}, {
  title: 'Vertigo',
  year: 1958
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  title: 'Reservoir Dogs',
  year: 1992
}, {
  title: 'Braveheart',
  year: 1995
}, {
  title: 'M',
  year: 1931
}, {
  title: 'Requiem for a Dream',
  year: 2000
}, {
  title: 'Amélie',
  year: 2001
}, {
  title: 'A Clockwork Orange',
  year: 1971
}, {
  title: 'Like Stars on Earth',
  year: 2007
}, {
  title: 'Taxi Driver',
  year: 1976
}, {
  title: 'Lawrence of Arabia',
  year: 1962
}, {
  title: 'Double Indemnity',
  year: 1944
}, {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  title: 'Amadeus',
  year: 1984
}, {
  title: 'To Kill a Mockingbird',
  year: 1962
}, {
  title: 'Toy Story 3',
  year: 2010
}, {
  title: 'Logan',
  year: 2017
}, {
  title: 'Full Metal Jacket',
  year: 1987
}, {
  title: 'Dangal',
  year: 2016
}, {
  title: 'The Sting',
  year: 1973
}, {
  title: '2001: A Space Odyssey',
  year: 1968
}, {
  title: "Singin' in the Rain",
  year: 1952
}, {
  title: 'Toy Story',
  year: 1995
}, {
  title: 'Bicycle Thieves',
  year: 1948
}, {
  title: 'The Kid',
  year: 1921
}, {
  title: 'Inglourious Basterds',
  year: 2009
}, {
  title: 'Snatch',
  year: 2000
}, {
  title: '3 Idiots',
  year: 2009
}, {
  title: 'Monty Python and the Holy Grail',
  year: 1975
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/FreeSolo.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/FreeSolo.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FreeSolo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-use-before-define */





function FreeSolo() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    style: {
      width: 300
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "free-solo-demo",
      freeSolo: true,
      options: top100Films.map(function (option) {
        return option.title;
      }),
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "freeSolo",
          margin: "normal",
          variant: "outlined"
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], {
      freeSolo: true,
      id: "free-solo-2-demo",
      disableClearable: true,
      options: top100Films.map(function (option) {
        return option.title;
      }),
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "Search input",
          margin: "normal",
          variant: "outlined",
          InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
            type: 'search'
          })
        }));
      }
    })]
  });
} // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

var top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}, {
  title: 'Casablanca',
  year: 1942
}, {
  title: 'City Lights',
  year: 1931
}, {
  title: 'Psycho',
  year: 1960
}, {
  title: 'The Green Mile',
  year: 1999
}, {
  title: 'The Intouchables',
  year: 2011
}, {
  title: 'Modern Times',
  year: 1936
}, {
  title: 'Raiders of the Lost Ark',
  year: 1981
}, {
  title: 'Rear Window',
  year: 1954
}, {
  title: 'The Pianist',
  year: 2002
}, {
  title: 'The Departed',
  year: 2006
}, {
  title: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  title: 'Back to the Future',
  year: 1985
}, {
  title: 'Whiplash',
  year: 2014
}, {
  title: 'Gladiator',
  year: 2000
}, {
  title: 'Memento',
  year: 2000
}, {
  title: 'The Prestige',
  year: 2006
}, {
  title: 'The Lion King',
  year: 1994
}, {
  title: 'Apocalypse Now',
  year: 1979
}, {
  title: 'Alien',
  year: 1979
}, {
  title: 'Sunset Boulevard',
  year: 1950
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  title: 'The Great Dictator',
  year: 1940
}, {
  title: 'Cinema Paradiso',
  year: 1988
}, {
  title: 'The Lives of Others',
  year: 2006
}, {
  title: 'Grave of the Fireflies',
  year: 1988
}, {
  title: 'Paths of Glory',
  year: 1957
}, {
  title: 'Django Unchained',
  year: 2012
}, {
  title: 'The Shining',
  year: 1980
}, {
  title: 'WALL·E',
  year: 2008
}, {
  title: 'American Beauty',
  year: 1999
}, {
  title: 'The Dark Knight Rises',
  year: 2012
}, {
  title: 'Princess Mononoke',
  year: 1997
}, {
  title: 'Aliens',
  year: 1986
}, {
  title: 'Oldboy',
  year: 2003
}, {
  title: 'Once Upon a Time in America',
  year: 1984
}, {
  title: 'Witness for the Prosecution',
  year: 1957
}, {
  title: 'Das Boot',
  year: 1981
}, {
  title: 'Citizen Kane',
  year: 1941
}, {
  title: 'North by Northwest',
  year: 1959
}, {
  title: 'Vertigo',
  year: 1958
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  title: 'Reservoir Dogs',
  year: 1992
}, {
  title: 'Braveheart',
  year: 1995
}, {
  title: 'M',
  year: 1931
}, {
  title: 'Requiem for a Dream',
  year: 2000
}, {
  title: 'Amélie',
  year: 2001
}, {
  title: 'A Clockwork Orange',
  year: 1971
}, {
  title: 'Like Stars on Earth',
  year: 2007
}, {
  title: 'Taxi Driver',
  year: 1976
}, {
  title: 'Lawrence of Arabia',
  year: 1962
}, {
  title: 'Double Indemnity',
  year: 1944
}, {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  title: 'Amadeus',
  year: 1984
}, {
  title: 'To Kill a Mockingbird',
  year: 1962
}, {
  title: 'Toy Story 3',
  year: 2010
}, {
  title: 'Logan',
  year: 2017
}, {
  title: 'Full Metal Jacket',
  year: 1987
}, {
  title: 'Dangal',
  year: 2016
}, {
  title: 'The Sting',
  year: 1973
}, {
  title: '2001: A Space Odyssey',
  year: 1968
}, {
  title: "Singin' in the Rain",
  year: 1952
}, {
  title: 'Toy Story',
  year: 1995
}, {
  title: 'Bicycle Thieves',
  year: 1948
}, {
  title: 'The Kid',
  year: 1921
}, {
  title: 'Inglourious Basterds',
  year: 2009
}, {
  title: 'Snatch',
  year: 2000
}, {
  title: '3 Idiots',
  year: 2009
}, {
  title: 'Monty Python and the Holy Grail',
  year: 1975
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/FreeSoloCreateOption.js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/FreeSoloCreateOption.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FreeSoloCreateOption)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/useAutocomplete/useAutocomplete.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-use-before-define */




var filter = (0,_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__.createFilterOptions)();
function FreeSoloCreateOption() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: value,
    onChange: function onChange(event, newValue) {
      if (typeof newValue === 'string') {
        setValue({
          title: newValue
        });
      } else if (newValue && newValue.inputValue) {
        // Create a new value from the user input
        setValue({
          title: newValue.inputValue
        });
      } else {
        setValue(newValue);
      }
    },
    filterOptions: function filterOptions(options, params) {
      var filtered = filter(options, params); // Suggest the creation of a new value

      if (params.inputValue !== '') {
        filtered.push({
          inputValue: params.inputValue,
          title: "Add \"".concat(params.inputValue, "\"")
        });
      }

      return filtered;
    },
    selectOnFocus: true,
    clearOnBlur: true,
    handleHomeEndKeys: true,
    id: "free-solo-with-text-demo",
    options: top100Films,
    getOptionLabel: function getOptionLabel(option) {
      // Value selected with enter, right from the input
      if (typeof option === 'string') {
        return option;
      } // Add "xxx" option created dynamically


      if (option.inputValue) {
        return option.inputValue;
      } // Regular option


      return option.title;
    },
    renderOption: function renderOption(option) {
      return option.title;
    },
    style: {
      width: 300
    },
    freeSolo: true,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
        label: "Free solo with text demo",
        variant: "outlined"
      }));
    }
  });
} // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

var top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}, {
  title: 'Casablanca',
  year: 1942
}, {
  title: 'City Lights',
  year: 1931
}, {
  title: 'Psycho',
  year: 1960
}, {
  title: 'The Green Mile',
  year: 1999
}, {
  title: 'The Intouchables',
  year: 2011
}, {
  title: 'Modern Times',
  year: 1936
}, {
  title: 'Raiders of the Lost Ark',
  year: 1981
}, {
  title: 'Rear Window',
  year: 1954
}, {
  title: 'The Pianist',
  year: 2002
}, {
  title: 'The Departed',
  year: 2006
}, {
  title: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  title: 'Back to the Future',
  year: 1985
}, {
  title: 'Whiplash',
  year: 2014
}, {
  title: 'Gladiator',
  year: 2000
}, {
  title: 'Memento',
  year: 2000
}, {
  title: 'The Prestige',
  year: 2006
}, {
  title: 'The Lion King',
  year: 1994
}, {
  title: 'Apocalypse Now',
  year: 1979
}, {
  title: 'Alien',
  year: 1979
}, {
  title: 'Sunset Boulevard',
  year: 1950
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  title: 'The Great Dictator',
  year: 1940
}, {
  title: 'Cinema Paradiso',
  year: 1988
}, {
  title: 'The Lives of Others',
  year: 2006
}, {
  title: 'Grave of the Fireflies',
  year: 1988
}, {
  title: 'Paths of Glory',
  year: 1957
}, {
  title: 'Django Unchained',
  year: 2012
}, {
  title: 'The Shining',
  year: 1980
}, {
  title: 'WALL·E',
  year: 2008
}, {
  title: 'American Beauty',
  year: 1999
}, {
  title: 'The Dark Knight Rises',
  year: 2012
}, {
  title: 'Princess Mononoke',
  year: 1997
}, {
  title: 'Aliens',
  year: 1986
}, {
  title: 'Oldboy',
  year: 2003
}, {
  title: 'Once Upon a Time in America',
  year: 1984
}, {
  title: 'Witness for the Prosecution',
  year: 1957
}, {
  title: 'Das Boot',
  year: 1981
}, {
  title: 'Citizen Kane',
  year: 1941
}, {
  title: 'North by Northwest',
  year: 1959
}, {
  title: 'Vertigo',
  year: 1958
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  title: 'Reservoir Dogs',
  year: 1992
}, {
  title: 'Braveheart',
  year: 1995
}, {
  title: 'M',
  year: 1931
}, {
  title: 'Requiem for a Dream',
  year: 2000
}, {
  title: 'Amélie',
  year: 2001
}, {
  title: 'A Clockwork Orange',
  year: 1971
}, {
  title: 'Like Stars on Earth',
  year: 2007
}, {
  title: 'Taxi Driver',
  year: 1976
}, {
  title: 'Lawrence of Arabia',
  year: 1962
}, {
  title: 'Double Indemnity',
  year: 1944
}, {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  title: 'Amadeus',
  year: 1984
}, {
  title: 'To Kill a Mockingbird',
  year: 1962
}, {
  title: 'Toy Story 3',
  year: 2010
}, {
  title: 'Logan',
  year: 2017
}, {
  title: 'Full Metal Jacket',
  year: 1987
}, {
  title: 'Dangal',
  year: 2016
}, {
  title: 'The Sting',
  year: 1973
}, {
  title: '2001: A Space Odyssey',
  year: 1968
}, {
  title: "Singin' in the Rain",
  year: 1952
}, {
  title: 'Toy Story',
  year: 1995
}, {
  title: 'Bicycle Thieves',
  year: 1948
}, {
  title: 'The Kid',
  year: 1921
}, {
  title: 'Inglourious Basterds',
  year: 2009
}, {
  title: 'Snatch',
  year: 2000
}, {
  title: '3 Idiots',
  year: 2009
}, {
  title: 'Monty Python and the Holy Grail',
  year: 1975
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/FreeSoloCreateOptionDialog.js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/FreeSoloCreateOptionDialog.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FreeSoloCreateOptionDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/useAutocomplete/useAutocomplete.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-use-before-define */











var filter = (0,_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__.createFilterOptions)();
function FreeSoloCreateOptionDialog() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      open = _React$useState4[0],
      toggleOpen = _React$useState4[1];

  var handleClose = function handleClose() {
    setDialogValue({
      title: '',
      year: ''
    });
    toggleOpen(false);
  };

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    title: '',
    year: ''
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      dialogValue = _React$useState6[0],
      setDialogValue = _React$useState6[1];

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setValue({
      title: dialogValue.title,
      year: parseInt(dialogValue.year, 10)
    });
    handleClose();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: value,
      onChange: function onChange(event, newValue) {
        if (typeof newValue === 'string') {
          // timeout to avoid instant validation of the dialog's form.
          setTimeout(function () {
            toggleOpen(true);
            setDialogValue({
              title: newValue,
              year: ''
            });
          });
        } else if (newValue && newValue.inputValue) {
          toggleOpen(true);
          setDialogValue({
            title: newValue.inputValue,
            year: ''
          });
        } else {
          setValue(newValue);
        }
      },
      filterOptions: function filterOptions(options, params) {
        var filtered = filter(options, params);

        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: "Add \"".concat(params.inputValue, "\"")
          });
        }

        return filtered;
      },
      id: "free-solo-dialog-demo",
      options: top100Films,
      getOptionLabel: function getOptionLabel(option) {
        // e.g value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }

        if (option.inputValue) {
          return option.inputValue;
        }

        return option.title;
      },
      selectOnFocus: true,
      clearOnBlur: true,
      handleHomeEndKeys: true,
      renderOption: function renderOption(option) {
        return option.title;
      },
      style: {
        width: 300
      },
      freeSolo: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "Free solo dialog",
          variant: "outlined"
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "form-dialog-title",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
          id: "form-dialog-title",
          children: "Add a new film"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: "Did you miss any film in our list? Please, add it!"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
            autoFocus: true,
            margin: "dense",
            id: "name",
            value: dialogValue.title,
            onChange: function onChange(event) {
              return setDialogValue(_objectSpread(_objectSpread({}, dialogValue), {}, {
                title: event.target.value
              }));
            },
            label: "title",
            type: "text"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
            margin: "dense",
            id: "name",
            value: dialogValue.year,
            onChange: function onChange(event) {
              return setDialogValue(_objectSpread(_objectSpread({}, dialogValue), {}, {
                year: event.target.value
              }));
            },
            label: "year",
            type: "number"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
            onClick: handleClose,
            color: "primary",
            children: "Cancel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
            type: "submit",
            color: "primary",
            children: "Add"
          })]
        })]
      })
    })]
  });
} // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

var top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}, {
  title: 'Casablanca',
  year: 1942
}, {
  title: 'City Lights',
  year: 1931
}, {
  title: 'Psycho',
  year: 1960
}, {
  title: 'The Green Mile',
  year: 1999
}, {
  title: 'The Intouchables',
  year: 2011
}, {
  title: 'Modern Times',
  year: 1936
}, {
  title: 'Raiders of the Lost Ark',
  year: 1981
}, {
  title: 'Rear Window',
  year: 1954
}, {
  title: 'The Pianist',
  year: 2002
}, {
  title: 'The Departed',
  year: 2006
}, {
  title: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  title: 'Back to the Future',
  year: 1985
}, {
  title: 'Whiplash',
  year: 2014
}, {
  title: 'Gladiator',
  year: 2000
}, {
  title: 'Memento',
  year: 2000
}, {
  title: 'The Prestige',
  year: 2006
}, {
  title: 'The Lion King',
  year: 1994
}, {
  title: 'Apocalypse Now',
  year: 1979
}, {
  title: 'Alien',
  year: 1979
}, {
  title: 'Sunset Boulevard',
  year: 1950
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  title: 'The Great Dictator',
  year: 1940
}, {
  title: 'Cinema Paradiso',
  year: 1988
}, {
  title: 'The Lives of Others',
  year: 2006
}, {
  title: 'Grave of the Fireflies',
  year: 1988
}, {
  title: 'Paths of Glory',
  year: 1957
}, {
  title: 'Django Unchained',
  year: 2012
}, {
  title: 'The Shining',
  year: 1980
}, {
  title: 'WALL·E',
  year: 2008
}, {
  title: 'American Beauty',
  year: 1999
}, {
  title: 'The Dark Knight Rises',
  year: 2012
}, {
  title: 'Princess Mononoke',
  year: 1997
}, {
  title: 'Aliens',
  year: 1986
}, {
  title: 'Oldboy',
  year: 2003
}, {
  title: 'Once Upon a Time in America',
  year: 1984
}, {
  title: 'Witness for the Prosecution',
  year: 1957
}, {
  title: 'Das Boot',
  year: 1981
}, {
  title: 'Citizen Kane',
  year: 1941
}, {
  title: 'North by Northwest',
  year: 1959
}, {
  title: 'Vertigo',
  year: 1958
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  title: 'Reservoir Dogs',
  year: 1992
}, {
  title: 'Braveheart',
  year: 1995
}, {
  title: 'M',
  year: 1931
}, {
  title: 'Requiem for a Dream',
  year: 2000
}, {
  title: 'Amélie',
  year: 2001
}, {
  title: 'A Clockwork Orange',
  year: 1971
}, {
  title: 'Like Stars on Earth',
  year: 2007
}, {
  title: 'Taxi Driver',
  year: 1976
}, {
  title: 'Lawrence of Arabia',
  year: 1962
}, {
  title: 'Double Indemnity',
  year: 1944
}, {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  title: 'Amadeus',
  year: 1984
}, {
  title: 'To Kill a Mockingbird',
  year: 1962
}, {
  title: 'Toy Story 3',
  year: 2010
}, {
  title: 'Logan',
  year: 2017
}, {
  title: 'Full Metal Jacket',
  year: 1987
}, {
  title: 'Dangal',
  year: 2016
}, {
  title: 'The Sting',
  year: 1973
}, {
  title: '2001: A Space Odyssey',
  year: 1968
}, {
  title: "Singin' in the Rain",
  year: 1952
}, {
  title: 'Toy Story',
  year: 1995
}, {
  title: 'Bicycle Thieves',
  year: 1948
}, {
  title: 'The Kid',
  year: 1921
}, {
  title: 'Inglourious Basterds',
  year: 2009
}, {
  title: 'Snatch',
  year: 2000
}, {
  title: '3 Idiots',
  year: 2009
}, {
  title: 'Monty Python and the Holy Grail',
  year: 1975
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/GitHubLabel.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/GitHubLabel.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GitHubLabel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/Popper.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-use-before-define */












var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      width: 221,
      fontSize: 13
    },
    button: {
      fontSize: 13,
      width: '100%',
      textAlign: 'left',
      paddingBottom: 8,
      color: '#586069',
      fontWeight: 600,
      '&:hover,&:focus': {
        color: '#0366d6'
      },
      '& span': {
        width: '100%'
      },
      '& svg': {
        width: 16,
        height: 16
      }
    },
    tag: {
      marginTop: 3,
      height: 20,
      padding: '.15em 4px',
      fontWeight: 600,
      lineHeight: '15px',
      borderRadius: 2
    },
    popper: {
      border: '1px solid rgba(27,31,35,.15)',
      boxShadow: '0 3px 12px rgba(27,31,35,.15)',
      borderRadius: 3,
      width: 300,
      zIndex: 1,
      fontSize: 13,
      color: '#586069',
      backgroundColor: '#f6f8fa'
    },
    header: {
      borderBottom: '1px solid #e1e4e8',
      padding: '8px 10px',
      fontWeight: 600
    },
    inputBase: {
      padding: 10,
      width: '100%',
      borderBottom: '1px solid #dfe2e5',
      '& input': {
        borderRadius: 4,
        backgroundColor: theme.palette.background.paper,
        padding: 8,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        border: '1px solid #ced4da',
        fontSize: 14,
        '&:focus': {
          boxShadow: "".concat((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.palette.primary.main, 0.25), " 0 0 0 0.2rem"),
          borderColor: theme.palette.primary.main
        }
      }
    },
    paper: {
      boxShadow: 'none',
      margin: 0,
      color: '#586069',
      fontSize: 13
    },
    option: {
      minHeight: 'auto',
      alignItems: 'flex-start',
      padding: 8,
      '&[aria-selected="true"]': {
        backgroundColor: 'transparent'
      },
      '&[data-focus="true"]': {
        backgroundColor: theme.palette.action.hover
      }
    },
    popperDisablePortal: {
      position: 'relative'
    },
    iconSelected: {
      width: 17,
      height: 17,
      marginRight: 5,
      marginLeft: -2
    },
    color: {
      width: 14,
      height: 14,
      flexShrink: 0,
      borderRadius: 3,
      marginRight: 8,
      marginTop: 2
    },
    text: {
      flexGrow: 1
    },
    close: {
      opacity: 0.6,
      width: 18,
      height: 18
    }
  };
});
function GitHubLabel() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState([labels[1], labels[11]]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      pendingValue = _React$useState6[0],
      setPendingValue = _React$useState6[1];

  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var handleClick = function handleClick(event) {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose(event, reason) {
    if (reason === 'toggleInput') {
      return;
    }

    setValue(pendingValue);

    if (anchorEl) {
      anchorEl.focus();
    }

    setAnchorEl(null);
  };

  var open = Boolean(anchorEl);
  var id = open ? 'github-label' : undefined;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: classes.root,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5__["default"], {
        disableRipple: true,
        className: classes.button,
        "aria-describedby": id,
        onClick: handleClick,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: "Labels"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
      }), value.map(function (label) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: classes.tag,
          style: {
            backgroundColor: label.color,
            color: theme.palette.getContrastText(label.color)
          },
          children: label.name
        }, label.name);
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: id,
      open: open,
      anchorEl: anchorEl,
      placement: "bottom-start",
      className: classes.popper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: classes.header,
        children: "Apply labels to this pull request"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_8__["default"], {
        open: true,
        onClose: handleClose,
        multiple: true,
        classes: {
          paper: classes.paper,
          option: classes.option,
          popperDisablePortal: classes.popperDisablePortal
        },
        value: pendingValue,
        onChange: function onChange(event, newValue) {
          setPendingValue(newValue);
        },
        disableCloseOnSelect: true,
        disablePortal: true,
        renderTags: function renderTags() {
          return null;
        },
        noOptionsText: "No labels",
        renderOption: function renderOption(option, _ref) {
          var selected = _ref.selected;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_9__["default"], {
              className: classes.iconSelected,
              style: {
                visibility: selected ? 'visible' : 'hidden'
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: classes.color,
              style: {
                backgroundColor: option.color
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: classes.text,
              children: [option.name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), option.description]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_10__["default"], {
              className: classes.close,
              style: {
                visibility: selected ? 'visible' : 'hidden'
              }
            })]
          });
        },
        options: [].concat(labels).sort(function (a, b) {
          // Display the selected labels first.
          var ai = value.indexOf(a);
          ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
          var bi = value.indexOf(b);
          bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
          return ai - bi;
        }),
        getOptionLabel: function getOptionLabel(option) {
          return option.name;
        },
        renderInput: function renderInput(params) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_11__["default"], {
            ref: params.InputProps.ref,
            inputProps: params.inputProps,
            autoFocus: true,
            className: classes.inputBase
          });
        }
      })]
    })]
  });
} // From https://github.com/abdonrd/github-labels

var labels = [{
  name: 'good first issue',
  color: '#7057ff',
  description: 'Good for newcomers'
}, {
  name: 'help wanted',
  color: '#008672',
  description: 'Extra attention is needed'
}, {
  name: 'priority: critical',
  color: '#b60205',
  description: ''
}, {
  name: 'priority: high',
  color: '#d93f0b',
  description: ''
}, {
  name: 'priority: low',
  color: '#0e8a16',
  description: ''
}, {
  name: 'priority: medium',
  color: '#fbca04',
  description: ''
}, {
  name: "status: can't reproduce",
  color: '#fec1c1',
  description: ''
}, {
  name: 'status: confirmed',
  color: '#215cea',
  description: ''
}, {
  name: 'status: duplicate',
  color: '#cfd3d7',
  description: 'This issue or pull request already exists'
}, {
  name: 'status: needs information',
  color: '#fef2c0',
  description: ''
}, {
  name: 'status: wont do/fix',
  color: '#eeeeee',
  description: 'This will not be worked on'
}, {
  name: 'type: bug',
  color: '#d73a4a',
  description: "Something isn't working"
}, {
  name: 'type: discussion',
  color: '#d4c5f9',
  description: ''
}, {
  name: 'type: documentation',
  color: '#006b75',
  description: ''
}, {
  name: 'type: enhancement',
  color: '#84b6eb',
  description: ''
}, {
  name: 'type: epic',
  color: '#3e4b9e',
  description: 'A theme of work that contain sub-tasks'
}, {
  name: 'type: feature request',
  color: '#fbca04',
  description: 'New feature or request'
}, {
  name: 'type: question',
  color: '#d876e3',
  description: 'Further information is requested'
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/GoogleMaps.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/GoogleMaps.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoogleMaps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "./node_modules/@material-ui/icons/LocationOn.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autosuggest-highlight/parse */ "./node_modules/autosuggest-highlight/parse/index.js");
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jumbo_components_GridContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@jumbo/components/GridContainer */ "./resources/js/src/@jumbo/components/GridContainer/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  var script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

var autocompleteService = {
  current: null
};
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["default"])(function (theme) {
  return {
    icon: {
      color: theme.palette.text.secondary,
      marginRight: theme.spacing(2)
    }
  };
});
function GoogleMaps() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      inputValue = _React$useState4[0],
      setInputValue = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      options = _React$useState6[0],
      setOptions = _React$useState6[1];

  var loaded = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBwRp1e12ec1vOTtGiA4fcCt2sCUS78UYc&libraries=places', document.querySelector('head'), 'google-maps');
    }

    loaded.current = true;
  }

  var fetch = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(function (request, callback) {
      autocompleteService.current.getPlacePredictions(request, callback);
    }, 200);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }

    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({
      input: inputValue
    }, function (results) {
      if (active) {
        var newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [].concat(_toConsumableArray(newOptions), _toConsumableArray(results));
        }

        setOptions(newOptions);
      }
    });
    return function () {
      active = false;
    };
  }, [value, inputValue, fetch]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "google-map-demo",
    style: {
      width: 300
    },
    getOptionLabel: function getOptionLabel(option) {
      return typeof option === 'string' ? option : option.description;
    },
    filterOptions: function filterOptions(x) {
      return x;
    },
    options: options,
    autoComplete: true,
    includeInputInList: true,
    filterSelectedOptions: true,
    value: value,
    onChange: function onChange(event, newValue) {
      setOptions(newValue ? [newValue].concat(_toConsumableArray(options)) : options);
      setValue(newValue);
    },
    onInputChange: function onInputChange(event, newInputValue) {
      setInputValue(newInputValue);
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread({}, params), {}, {
        label: "Add a location",
        variant: "outlined",
        fullWidth: true
      }));
    },
    renderOption: function renderOption(option) {
      var matches = option.structured_formatting.main_text_matched_substrings;
      var parts = autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_1___default()(option.structured_formatting.main_text, matches.map(function (match) {
        return [match.offset, match.offset + match.length];
      }));
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_jumbo_components_GridContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
          item: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_9__["default"], {
            className: classes.icon
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
          item: true,
          xs: true,
          children: [parts.map(function (part, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              style: {
                fontWeight: part.highlight ? 700 : 400
              },
              children: part.text
            }, index);
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
            variant: "body2",
            color: "textSecondary",
            children: option.structured_formatting.secondary_text
          })]
        })]
      });
    }
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Grouped.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Grouped.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grouped)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-use-before-define */




function Grouped() {
  var options = top100Films.map(function (option) {
    var firstLetter = option.title[0].toUpperCase();
    return _objectSpread({
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter
    }, option);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "grouped-demo",
    options: options.sort(function (a, b) {
      return -b.firstLetter.localeCompare(a.firstLetter);
    }),
    groupBy: function groupBy(option) {
      return option.firstLetter;
    },
    getOptionLabel: function getOptionLabel(option) {
      return option.title;
    },
    style: {
      width: 300
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
        label: "With categories",
        variant: "outlined"
      }));
    }
  });
} // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

var top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}, {
  title: 'Casablanca',
  year: 1942
}, {
  title: 'City Lights',
  year: 1931
}, {
  title: 'Psycho',
  year: 1960
}, {
  title: 'The Green Mile',
  year: 1999
}, {
  title: 'The Intouchables',
  year: 2011
}, {
  title: 'Modern Times',
  year: 1936
}, {
  title: 'Raiders of the Lost Ark',
  year: 1981
}, {
  title: 'Rear Window',
  year: 1954
}, {
  title: 'The Pianist',
  year: 2002
}, {
  title: 'The Departed',
  year: 2006
}, {
  title: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  title: 'Back to the Future',
  year: 1985
}, {
  title: 'Whiplash',
  year: 2014
}, {
  title: 'Gladiator',
  year: 2000
}, {
  title: 'Memento',
  year: 2000
}, {
  title: 'The Prestige',
  year: 2006
}, {
  title: 'The Lion King',
  year: 1994
}, {
  title: 'Apocalypse Now',
  year: 1979
}, {
  title: 'Alien',
  year: 1979
}, {
  title: 'Sunset Boulevard',
  year: 1950
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  title: 'The Great Dictator',
  year: 1940
}, {
  title: 'Cinema Paradiso',
  year: 1988
}, {
  title: 'The Lives of Others',
  year: 2006
}, {
  title: 'Grave of the Fireflies',
  year: 1988
}, {
  title: 'Paths of Glory',
  year: 1957
}, {
  title: 'Django Unchained',
  year: 2012
}, {
  title: 'The Shining',
  year: 1980
}, {
  title: 'WALL·E',
  year: 2008
}, {
  title: 'American Beauty',
  year: 1999
}, {
  title: 'The Dark Knight Rises',
  year: 2012
}, {
  title: 'Princess Mononoke',
  year: 1997
}, {
  title: 'Aliens',
  year: 1986
}, {
  title: 'Oldboy',
  year: 2003
}, {
  title: 'Once Upon a Time in America',
  year: 1984
}, {
  title: 'Witness for the Prosecution',
  year: 1957
}, {
  title: 'Das Boot',
  year: 1981
}, {
  title: 'Citizen Kane',
  year: 1941
}, {
  title: 'North by Northwest',
  year: 1959
}, {
  title: 'Vertigo',
  year: 1958
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  title: 'Reservoir Dogs',
  year: 1992
}, {
  title: 'Braveheart',
  year: 1995
}, {
  title: 'M',
  year: 1931
}, {
  title: 'Requiem for a Dream',
  year: 2000
}, {
  title: 'Amélie',
  year: 2001
}, {
  title: 'A Clockwork Orange',
  year: 1971
}, {
  title: 'Like Stars on Earth',
  year: 2007
}, {
  title: 'Taxi Driver',
  year: 1976
}, {
  title: 'Lawrence of Arabia',
  year: 1962
}, {
  title: 'Double Indemnity',
  year: 1944
}, {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  title: 'Amadeus',
  year: 1984
}, {
  title: 'To Kill a Mockingbird',
  year: 1962
}, {
  title: 'Toy Story 3',
  year: 2010
}, {
  title: 'Logan',
  year: 2017
}, {
  title: 'Full Metal Jacket',
  year: 1987
}, {
  title: 'Dangal',
  year: 2016
}, {
  title: 'The Sting',
  year: 1973
}, {
  title: '2001: A Space Odyssey',
  year: 1968
}, {
  title: "Singin' in the Rain",
  year: 1952
}, {
  title: 'Toy Story',
  year: 1995
}, {
  title: 'Bicycle Thieves',
  year: 1948
}, {
  title: 'The Kid',
  year: 1921
}, {
  title: 'Inglourious Basterds',
  year: 2009
}, {
  title: 'Snatch',
  year: 2000
}, {
  title: '3 Idiots',
  year: 2009
}, {
  title: 'Monty Python and the Holy Grail',
  year: 1975
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Highlights.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Highlights.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Highlights)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autosuggest-highlight/parse */ "./node_modules/autosuggest-highlight/parse/index.js");
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! autosuggest-highlight/match */ "./node_modules/autosuggest-highlight/match/index.js");
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-use-before-define */






function Highlights() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "highlights-demo",
    style: {
      width: 300
    },
    options: top100Films,
    getOptionLabel: function getOptionLabel(option) {
      return option.title;
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, params), {}, {
        label: "Highlights",
        variant: "outlined",
        margin: "normal"
      }));
    },
    renderOption: function renderOption(option, _ref) {
      var inputValue = _ref.inputValue;
      var matches = autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_2___default()(option.title, inputValue);
      var parts = autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_1___default()(option.title, matches);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        children: parts.map(function (part, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            style: {
              fontWeight: part.highlight ? 700 : 400
            },
            children: part.text
          }, index);
        })
      });
    }
  });
} // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

var top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}, {
  title: 'Casablanca',
  year: 1942
}, {
  title: 'City Lights',
  year: 1931
}, {
  title: 'Psycho',
  year: 1960
}, {
  title: 'The Green Mile',
  year: 1999
}, {
  title: 'The Intouchables',
  year: 2011
}, {
  title: 'Modern Times',
  year: 1936
}, {
  title: 'Raiders of the Lost Ark',
  year: 1981
}, {
  title: 'Rear Window',
  year: 1954
}, {
  title: 'The Pianist',
  year: 2002
}, {
  title: 'The Departed',
  year: 2006
}, {
  title: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  title: 'Back to the Future',
  year: 1985
}, {
  title: 'Whiplash',
  year: 2014
}, {
  title: 'Gladiator',
  year: 2000
}, {
  title: 'Memento',
  year: 2000
}, {
  title: 'The Prestige',
  year: 2006
}, {
  title: 'The Lion King',
  year: 1994
}, {
  title: 'Apocalypse Now',
  year: 1979
}, {
  title: 'Alien',
  year: 1979
}, {
  title: 'Sunset Boulevard',
  year: 1950
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  title: 'The Great Dictator',
  year: 1940
}, {
  title: 'Cinema Paradiso',
  year: 1988
}, {
  title: 'The Lives of Others',
  year: 2006
}, {
  title: 'Grave of the Fireflies',
  year: 1988
}, {
  title: 'Paths of Glory',
  year: 1957
}, {
  title: 'Django Unchained',
  year: 2012
}, {
  title: 'The Shining',
  year: 1980
}, {
  title: 'WALL·E',
  year: 2008
}, {
  title: 'American Beauty',
  year: 1999
}, {
  title: 'The Dark Knight Rises',
  year: 2012
}, {
  title: 'Princess Mononoke',
  year: 1997
}, {
  title: 'Aliens',
  year: 1986
}, {
  title: 'Oldboy',
  year: 2003
}, {
  title: 'Once Upon a Time in America',
  year: 1984
}, {
  title: 'Witness for the Prosecution',
  year: 1957
}, {
  title: 'Das Boot',
  year: 1981
}, {
  title: 'Citizen Kane',
  year: 1941
}, {
  title: 'North by Northwest',
  year: 1959
}, {
  title: 'Vertigo',
  year: 1958
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  title: 'Reservoir Dogs',
  year: 1992
}, {
  title: 'Braveheart',
  year: 1995
}, {
  title: 'M',
  year: 1931
}, {
  title: 'Requiem for a Dream',
  year: 2000
}, {
  title: 'Amélie',
  year: 2001
}, {
  title: 'A Clockwork Orange',
  year: 1971
}, {
  title: 'Like Stars on Earth',
  year: 2007
}, {
  title: 'Taxi Driver',
  year: 1976
}, {
  title: 'Lawrence of Arabia',
  year: 1962
}, {
  title: 'Double Indemnity',
  year: 1944
}, {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  title: 'Amadeus',
  year: 1984
}, {
  title: 'To Kill a Mockingbird',
  year: 1962
}, {
  title: 'Toy Story 3',
  year: 2010
}, {
  title: 'Logan',
  year: 2017
}, {
  title: 'Full Metal Jacket',
  year: 1987
}, {
  title: 'Dangal',
  year: 2016
}, {
  title: 'The Sting',
  year: 1973
}, {
  title: '2001: A Space Odyssey',
  year: 1968
}, {
  title: "Singin' in the Rain",
  year: 1952
}, {
  title: 'Toy Story',
  year: 1995
}, {
  title: 'Bicycle Thieves',
  year: 1948
}, {
  title: 'The Kid',
  year: 1921
}, {
  title: 'Inglourious Basterds',
  year: 2009
}, {
  title: 'Snatch',
  year: 2000
}, {
  title: '3 Idiots',
  year: 2009
}, {
  title: 'Monty Python and the Holy Grail',
  year: 1975
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/LimitTags.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/LimitTags.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LimitTags)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-use-before-define */





var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      width: 500,
      '& > * + *': {
        marginTop: theme.spacing(3)
      }
    }
  };
});
function LimitTags() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
      multiple: true,
      limitTags: 2,
      id: "multiple-limit-tags",
      options: top100Films,
      getOptionLabel: function getOptionLabel(option) {
        return option.title;
      },
      defaultValue: [top100Films[13], top100Films[12], top100Films[11]],
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
          variant: "outlined",
          label: "limitTags",
          placeholder: "Favorites"
        }));
      }
    })
  });
} // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

var top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}, {
  title: 'Casablanca',
  year: 1942
}, {
  title: 'City Lights',
  year: 1931
}, {
  title: 'Psycho',
  year: 1960
}, {
  title: 'The Green Mile',
  year: 1999
}, {
  title: 'The Intouchables',
  year: 2011
}, {
  title: 'Modern Times',
  year: 1936
}, {
  title: 'Raiders of the Lost Ark',
  year: 1981
}, {
  title: 'Rear Window',
  year: 1954
}, {
  title: 'The Pianist',
  year: 2002
}, {
  title: 'The Departed',
  year: 2006
}, {
  title: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  title: 'Back to the Future',
  year: 1985
}, {
  title: 'Whiplash',
  year: 2014
}, {
  title: 'Gladiator',
  year: 2000
}, {
  title: 'Memento',
  year: 2000
}, {
  title: 'The Prestige',
  year: 2006
}, {
  title: 'The Lion King',
  year: 1994
}, {
  title: 'Apocalypse Now',
  year: 1979
}, {
  title: 'Alien',
  year: 1979
}, {
  title: 'Sunset Boulevard',
  year: 1950
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  title: 'The Great Dictator',
  year: 1940
}, {
  title: 'Cinema Paradiso',
  year: 1988
}, {
  title: 'The Lives of Others',
  year: 2006
}, {
  title: 'Grave of the Fireflies',
  year: 1988
}, {
  title: 'Paths of Glory',
  year: 1957
}, {
  title: 'Django Unchained',
  year: 2012
}, {
  title: 'The Shining',
  year: 1980
}, {
  title: 'WALL·E',
  year: 2008
}, {
  title: 'American Beauty',
  year: 1999
}, {
  title: 'The Dark Knight Rises',
  year: 2012
}, {
  title: 'Princess Mononoke',
  year: 1997
}, {
  title: 'Aliens',
  year: 1986
}, {
  title: 'Oldboy',
  year: 2003
}, {
  title: 'Once Upon a Time in America',
  year: 1984
}, {
  title: 'Witness for the Prosecution',
  year: 1957
}, {
  title: 'Das Boot',
  year: 1981
}, {
  title: 'Citizen Kane',
  year: 1941
}, {
  title: 'North by Northwest',
  year: 1959
}, {
  title: 'Vertigo',
  year: 1958
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  title: 'Reservoir Dogs',
  year: 1992
}, {
  title: 'Braveheart',
  year: 1995
}, {
  title: 'M',
  year: 1931
}, {
  title: 'Requiem for a Dream',
  year: 2000
}, {
  title: 'Amélie',
  year: 2001
}, {
  title: 'A Clockwork Orange',
  year: 1971
}, {
  title: 'Like Stars on Earth',
  year: 2007
}, {
  title: 'Taxi Driver',
  year: 1976
}, {
  title: 'Lawrence of Arabia',
  year: 1962
}, {
  title: 'Double Indemnity',
  year: 1944
}, {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  title: 'Amadeus',
  year: 1984
}, {
  title: 'To Kill a Mockingbird',
  year: 1962
}, {
  title: 'Toy Story 3',
  year: 2010
}, {
  title: 'Logan',
  year: 2017
}, {
  title: 'Full Metal Jacket',
  year: 1987
}, {
  title: 'Dangal',
  year: 2016
}, {
  title: 'The Sting',
  year: 1973
}, {
  title: '2001: A Space Odyssey',
  year: 1968
}, {
  title: "Singin' in the Rain",
  year: 1952
}, {
  title: 'Toy Story',
  year: 1995
}, {
  title: 'Bicycle Thieves',
  year: 1948
}, {
  title: 'The Kid',
  year: 1921
}, {
  title: 'Inglourious Basterds',
  year: 2009
}, {
  title: 'Snatch',
  year: 2000
}, {
  title: '3 Idiots',
  year: 2009
}, {
  title: 'Monty Python and the Holy Grail',
  year: 1975
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Playground.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Playground.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Playground)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-use-before-define */





function Playground() {
  var defaultProps = {
    options: top100Films,
    getOptionLabel: function getOptionLabel(option) {
      return option.title;
    }
  };
  var flatProps = {
    options: top100Films.map(function (option) {
      return option.title;
    })
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    style: {
      width: 300
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "debug",
      debug: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "debug",
          margin: "normal"
        }));
      }
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "disable-close-on-select",
      disableCloseOnSelect: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "disableCloseOnSelect",
          margin: "normal"
        }));
      }
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "clear-on-escape",
      clearOnEscape: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "clearOnEscape",
          margin: "normal"
        }));
      }
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "disable-clearable",
      disableClearable: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "disableClearable",
          margin: "normal"
        }));
      }
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "include-input-in-list",
      includeInputInList: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "includeInputInList",
          margin: "normal"
        }));
      }
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, flatProps), {}, {
      id: "flat-demo",
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "flat",
          margin: "normal"
        }));
      }
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "controlled-demo",
      value: value,
      onChange: function onChange(event, newValue) {
        setValue(newValue);
      },
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "controlled",
          margin: "normal"
        }));
      }
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "auto-complete",
      autoComplete: true,
      includeInputInList: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "autoComplete",
          margin: "normal"
        }));
      }
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "disable-list-wrap",
      disableListWrap: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "disableListWrap",
          margin: "normal"
        }));
      }
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "open-on-focus",
      openOnFocus: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "openOnFocus",
          margin: "normal"
        }));
      }
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "auto-highlight",
      autoHighlight: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "autoHighlight",
          margin: "normal"
        }));
      }
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "auto-select",
      autoSelect: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "autoSelect",
          margin: "normal"
        }));
      }
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "disabled",
      disabled: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "disabled",
          margin: "normal"
        }));
      }
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "disable-portal",
      disablePortal: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "disablePortal",
          margin: "normal"
        }));
      }
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "blur-on-select",
      blurOnSelect: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "blurOnSelect",
          margin: "normal"
        }));
      }
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "clear-on-blur",
      clearOnBlur: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "clearOnBlur",
          margin: "normal"
        }));
      }
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "select-on-focus",
      selectOnFocus: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "selectOnFocus",
          margin: "normal"
        }));
      }
    }))]
  });
} // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

var top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}, {
  title: 'Casablanca',
  year: 1942
}, {
  title: 'City Lights',
  year: 1931
}, {
  title: 'Psycho',
  year: 1960
}, {
  title: 'The Green Mile',
  year: 1999
}, {
  title: 'The Intouchables',
  year: 2011
}, {
  title: 'Modern Times',
  year: 1936
}, {
  title: 'Raiders of the Lost Ark',
  year: 1981
}, {
  title: 'Rear Window',
  year: 1954
}, {
  title: 'The Pianist',
  year: 2002
}, {
  title: 'The Departed',
  year: 2006
}, {
  title: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  title: 'Back to the Future',
  year: 1985
}, {
  title: 'Whiplash',
  year: 2014
}, {
  title: 'Gladiator',
  year: 2000
}, {
  title: 'Memento',
  year: 2000
}, {
  title: 'The Prestige',
  year: 2006
}, {
  title: 'The Lion King',
  year: 1994
}, {
  title: 'Apocalypse Now',
  year: 1979
}, {
  title: 'Alien',
  year: 1979
}, {
  title: 'Sunset Boulevard',
  year: 1950
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  title: 'The Great Dictator',
  year: 1940
}, {
  title: 'Cinema Paradiso',
  year: 1988
}, {
  title: 'The Lives of Others',
  year: 2006
}, {
  title: 'Grave of the Fireflies',
  year: 1988
}, {
  title: 'Paths of Glory',
  year: 1957
}, {
  title: 'Django Unchained',
  year: 2012
}, {
  title: 'The Shining',
  year: 1980
}, {
  title: 'WALL·E',
  year: 2008
}, {
  title: 'American Beauty',
  year: 1999
}, {
  title: 'The Dark Knight Rises',
  year: 2012
}, {
  title: 'Princess Mononoke',
  year: 1997
}, {
  title: 'Aliens',
  year: 1986
}, {
  title: 'Oldboy',
  year: 2003
}, {
  title: 'Once Upon a Time in America',
  year: 1984
}, {
  title: 'Witness for the Prosecution',
  year: 1957
}, {
  title: 'Das Boot',
  year: 1981
}, {
  title: 'Citizen Kane',
  year: 1941
}, {
  title: 'North by Northwest',
  year: 1959
}, {
  title: 'Vertigo',
  year: 1958
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  title: 'Reservoir Dogs',
  year: 1992
}, {
  title: 'Braveheart',
  year: 1995
}, {
  title: 'M',
  year: 1931
}, {
  title: 'Requiem for a Dream',
  year: 2000
}, {
  title: 'Amélie',
  year: 2001
}, {
  title: 'A Clockwork Orange',
  year: 1971
}, {
  title: 'Like Stars on Earth',
  year: 2007
}, {
  title: 'Taxi Driver',
  year: 1976
}, {
  title: 'Lawrence of Arabia',
  year: 1962
}, {
  title: 'Double Indemnity',
  year: 1944
}, {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  title: 'Amadeus',
  year: 1984
}, {
  title: 'To Kill a Mockingbird',
  year: 1962
}, {
  title: 'Toy Story 3',
  year: 2010
}, {
  title: 'Logan',
  year: 2017
}, {
  title: 'Full Metal Jacket',
  year: 1987
}, {
  title: 'Dangal',
  year: 2016
}, {
  title: 'The Sting',
  year: 1973
}, {
  title: '2001: A Space Odyssey',
  year: 1968
}, {
  title: "Singin' in the Rain",
  year: 1952
}, {
  title: 'Toy Story',
  year: 1995
}, {
  title: 'Bicycle Thieves',
  year: 1948
}, {
  title: 'The Kid',
  year: 1921
}, {
  title: 'Inglourious Basterds',
  year: 2009
}, {
  title: 'Snatch',
  year: 2000
}, {
  title: '3 Idiots',
  year: 2009
}, {
  title: 'Monty Python and the Holy Grail',
  year: 1975
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Sizes.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Sizes.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sizes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/Chip.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-use-before-define */







var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      width: 500,
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  };
});
function Sizes() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "size-small-standard",
      size: "small",
      options: top100Films,
      getOptionLabel: function getOptionLabel(option) {
        return option.title;
      },
      defaultValue: top100Films[13],
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
          variant: "standard",
          label: "Size small",
          placeholder: "Favorites"
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
      multiple: true,
      id: "size-small-standard-multi",
      size: "small",
      options: top100Films,
      getOptionLabel: function getOptionLabel(option) {
        return option.title;
      },
      defaultValue: [top100Films[13]],
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
          variant: "standard",
          label: "Size small",
          placeholder: "Favorites"
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "size-small-outlined",
      size: "small",
      options: top100Films,
      getOptionLabel: function getOptionLabel(option) {
        return option.title;
      },
      defaultValue: top100Films[13],
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
          variant: "outlined",
          label: "Size small",
          placeholder: "Favorites"
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
      multiple: true,
      id: "size-small-outlined-multi",
      size: "small",
      options: top100Films,
      getOptionLabel: function getOptionLabel(option) {
        return option.title;
      },
      defaultValue: [top100Films[13]],
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
          variant: "outlined",
          label: "Size small",
          placeholder: "Favorites"
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "size-small-filled",
      size: "small",
      options: top100Films,
      getOptionLabel: function getOptionLabel(option) {
        return option.title;
      },
      defaultValue: top100Films[13],
      renderTags: function renderTags(value, getTagProps) {
        return value.map(function (option, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({
            variant: "outlined",
            label: option.title,
            size: "small"
          }, getTagProps({
            index: index
          })));
        });
      },
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
          variant: "filled",
          label: "Size small",
          placeholder: "Favorites"
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
      multiple: true,
      id: "size-small-filled-multi",
      size: "small",
      options: top100Films,
      getOptionLabel: function getOptionLabel(option) {
        return option.title;
      },
      defaultValue: [top100Films[13]],
      renderTags: function renderTags(value, getTagProps) {
        return value.map(function (option, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({
            variant: "outlined",
            label: option.title,
            size: "small"
          }, getTagProps({
            index: index
          })));
        });
      },
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
          variant: "filled",
          label: "Size small",
          placeholder: "Favorites"
        }));
      }
    })]
  });
} // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

var top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}, {
  title: 'Casablanca',
  year: 1942
}, {
  title: 'City Lights',
  year: 1931
}, {
  title: 'Psycho',
  year: 1960
}, {
  title: 'The Green Mile',
  year: 1999
}, {
  title: 'The Intouchables',
  year: 2011
}, {
  title: 'Modern Times',
  year: 1936
}, {
  title: 'Raiders of the Lost Ark',
  year: 1981
}, {
  title: 'Rear Window',
  year: 1954
}, {
  title: 'The Pianist',
  year: 2002
}, {
  title: 'The Departed',
  year: 2006
}, {
  title: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  title: 'Back to the Future',
  year: 1985
}, {
  title: 'Whiplash',
  year: 2014
}, {
  title: 'Gladiator',
  year: 2000
}, {
  title: 'Memento',
  year: 2000
}, {
  title: 'The Prestige',
  year: 2006
}, {
  title: 'The Lion King',
  year: 1994
}, {
  title: 'Apocalypse Now',
  year: 1979
}, {
  title: 'Alien',
  year: 1979
}, {
  title: 'Sunset Boulevard',
  year: 1950
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  title: 'The Great Dictator',
  year: 1940
}, {
  title: 'Cinema Paradiso',
  year: 1988
}, {
  title: 'The Lives of Others',
  year: 2006
}, {
  title: 'Grave of the Fireflies',
  year: 1988
}, {
  title: 'Paths of Glory',
  year: 1957
}, {
  title: 'Django Unchained',
  year: 2012
}, {
  title: 'The Shining',
  year: 1980
}, {
  title: 'WALL·E',
  year: 2008
}, {
  title: 'American Beauty',
  year: 1999
}, {
  title: 'The Dark Knight Rises',
  year: 2012
}, {
  title: 'Princess Mononoke',
  year: 1997
}, {
  title: 'Aliens',
  year: 1986
}, {
  title: 'Oldboy',
  year: 2003
}, {
  title: 'Once Upon a Time in America',
  year: 1984
}, {
  title: 'Witness for the Prosecution',
  year: 1957
}, {
  title: 'Das Boot',
  year: 1981
}, {
  title: 'Citizen Kane',
  year: 1941
}, {
  title: 'North by Northwest',
  year: 1959
}, {
  title: 'Vertigo',
  year: 1958
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  title: 'Reservoir Dogs',
  year: 1992
}, {
  title: 'Braveheart',
  year: 1995
}, {
  title: 'M',
  year: 1931
}, {
  title: 'Requiem for a Dream',
  year: 2000
}, {
  title: 'Amélie',
  year: 2001
}, {
  title: 'A Clockwork Orange',
  year: 1971
}, {
  title: 'Like Stars on Earth',
  year: 2007
}, {
  title: 'Taxi Driver',
  year: 1976
}, {
  title: 'Lawrence of Arabia',
  year: 1962
}, {
  title: 'Double Indemnity',
  year: 1944
}, {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  title: 'Amadeus',
  year: 1984
}, {
  title: 'To Kill a Mockingbird',
  year: 1962
}, {
  title: 'Toy Story 3',
  year: 2010
}, {
  title: 'Logan',
  year: 2017
}, {
  title: 'Full Metal Jacket',
  year: 1987
}, {
  title: 'Dangal',
  year: 2016
}, {
  title: 'The Sting',
  year: 1973
}, {
  title: '2001: A Space Odyssey',
  year: 1968
}, {
  title: "Singin' in the Rain",
  year: 1952
}, {
  title: 'Toy Story',
  year: 1995
}, {
  title: 'Bicycle Thieves',
  year: 1948
}, {
  title: 'The Kid',
  year: 1921
}, {
  title: 'Inglourious Basterds',
  year: 2009
}, {
  title: 'Snatch',
  year: 2000
}, {
  title: '3 Idiots',
  year: 2009
}, {
  title: 'Monty Python and the Holy Grail',
  year: 1975
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Tags.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Tags.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tags)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/Chip.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-use-before-define */







var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      width: 500,
      '& > * + *': {
        marginTop: theme.spacing(3)
      }
    }
  };
});
function Tags() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
      multiple: true,
      id: "tags-standard",
      options: top100Films,
      getOptionLabel: function getOptionLabel(option) {
        return option.title;
      },
      defaultValue: [top100Films[13]],
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
          variant: "standard",
          label: "Multiple values",
          placeholder: "Favorites"
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
      multiple: true,
      id: "tags-outlined",
      options: top100Films,
      getOptionLabel: function getOptionLabel(option) {
        return option.title;
      },
      defaultValue: [top100Films[13]],
      filterSelectedOptions: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
          variant: "outlined",
          label: "filterSelectedOptions",
          placeholder: "Favorites"
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
      multiple: true,
      id: "tags-filled",
      options: top100Films.map(function (option) {
        return option.title;
      }),
      defaultValue: [top100Films[13].title],
      freeSolo: true,
      renderTags: function renderTags(value, getTagProps) {
        return value.map(function (option, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({
            variant: "outlined",
            label: option
          }, getTagProps({
            index: index
          })));
        });
      },
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
          variant: "filled",
          label: "freeSolo",
          placeholder: "Favorites"
        }));
      }
    })]
  });
} // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

var top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}, {
  title: 'Casablanca',
  year: 1942
}, {
  title: 'City Lights',
  year: 1931
}, {
  title: 'Psycho',
  year: 1960
}, {
  title: 'The Green Mile',
  year: 1999
}, {
  title: 'The Intouchables',
  year: 2011
}, {
  title: 'Modern Times',
  year: 1936
}, {
  title: 'Raiders of the Lost Ark',
  year: 1981
}, {
  title: 'Rear Window',
  year: 1954
}, {
  title: 'The Pianist',
  year: 2002
}, {
  title: 'The Departed',
  year: 2006
}, {
  title: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  title: 'Back to the Future',
  year: 1985
}, {
  title: 'Whiplash',
  year: 2014
}, {
  title: 'Gladiator',
  year: 2000
}, {
  title: 'Memento',
  year: 2000
}, {
  title: 'The Prestige',
  year: 2006
}, {
  title: 'The Lion King',
  year: 1994
}, {
  title: 'Apocalypse Now',
  year: 1979
}, {
  title: 'Alien',
  year: 1979
}, {
  title: 'Sunset Boulevard',
  year: 1950
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  title: 'The Great Dictator',
  year: 1940
}, {
  title: 'Cinema Paradiso',
  year: 1988
}, {
  title: 'The Lives of Others',
  year: 2006
}, {
  title: 'Grave of the Fireflies',
  year: 1988
}, {
  title: 'Paths of Glory',
  year: 1957
}, {
  title: 'Django Unchained',
  year: 2012
}, {
  title: 'The Shining',
  year: 1980
}, {
  title: 'WALL·E',
  year: 2008
}, {
  title: 'American Beauty',
  year: 1999
}, {
  title: 'The Dark Knight Rises',
  year: 2012
}, {
  title: 'Princess Mononoke',
  year: 1997
}, {
  title: 'Aliens',
  year: 1986
}, {
  title: 'Oldboy',
  year: 2003
}, {
  title: 'Once Upon a Time in America',
  year: 1984
}, {
  title: 'Witness for the Prosecution',
  year: 1957
}, {
  title: 'Das Boot',
  year: 1981
}, {
  title: 'Citizen Kane',
  year: 1941
}, {
  title: 'North by Northwest',
  year: 1959
}, {
  title: 'Vertigo',
  year: 1958
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  title: 'Reservoir Dogs',
  year: 1992
}, {
  title: 'Braveheart',
  year: 1995
}, {
  title: 'M',
  year: 1931
}, {
  title: 'Requiem for a Dream',
  year: 2000
}, {
  title: 'Amélie',
  year: 2001
}, {
  title: 'A Clockwork Orange',
  year: 1971
}, {
  title: 'Like Stars on Earth',
  year: 2007
}, {
  title: 'Taxi Driver',
  year: 1976
}, {
  title: 'Lawrence of Arabia',
  year: 1962
}, {
  title: 'Double Indemnity',
  year: 1944
}, {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  title: 'Amadeus',
  year: 1984
}, {
  title: 'To Kill a Mockingbird',
  year: 1962
}, {
  title: 'Toy Story 3',
  year: 2010
}, {
  title: 'Logan',
  year: 2017
}, {
  title: 'Full Metal Jacket',
  year: 1987
}, {
  title: 'Dangal',
  year: 2016
}, {
  title: 'The Sting',
  year: 1973
}, {
  title: '2001: A Space Odyssey',
  year: 1968
}, {
  title: "Singin' in the Rain",
  year: 1952
}, {
  title: 'Toy Story',
  year: 1995
}, {
  title: 'Bicycle Thieves',
  year: 1948
}, {
  title: 'The Kid',
  year: 1921
}, {
  title: 'Inglourious Basterds',
  year: 2009
}, {
  title: 'Snatch',
  year: 2000
}, {
  title: '3 Idiots',
  year: 2009
}, {
  title: 'Monty Python and the Holy Grail',
  year: 1975
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/UseAutocomplete.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/UseAutocomplete.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UseAutocomplete)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_lab_useAutocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/useAutocomplete */ "./node_modules/@material-ui/lab/esm/useAutocomplete/useAutocomplete.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-use-before-define */





var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    label: {
      display: 'block'
    },
    input: {
      width: 200
    },
    listbox: {
      width: 200,
      margin: 0,
      padding: 0,
      zIndex: 1,
      position: 'absolute',
      listStyle: 'none',
      backgroundColor: theme.palette.background.paper,
      overflow: 'auto',
      maxHeight: 200,
      border: '1px solid rgba(0,0,0,.25)',
      '& li[data-focus="true"]': {
        backgroundColor: '#4a8df6',
        color: 'white',
        cursor: 'pointer'
      },
      '& li:active': {
        backgroundColor: '#2977f5',
        color: 'white'
      }
    }
  };
});
function UseAutocomplete() {
  var classes = useStyles();

  var _useAutocomplete = (0,_material_ui_lab_useAutocomplete__WEBPACK_IMPORTED_MODULE_3__["default"])({
    id: 'use-autocomplete-demo',
    options: top100Films,
    getOptionLabel: function getOptionLabel(option) {
      return option.title;
    }
  }),
      getRootProps = _useAutocomplete.getRootProps,
      getInputLabelProps = _useAutocomplete.getInputLabelProps,
      getInputProps = _useAutocomplete.getInputProps,
      getListboxProps = _useAutocomplete.getListboxProps,
      getOptionProps = _useAutocomplete.getOptionProps,
      groupedOptions = _useAutocomplete.groupedOptions;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", _objectSpread(_objectSpread({}, getRootProps()), {}, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", _objectSpread(_objectSpread({
        className: classes.label
      }, getInputLabelProps()), {}, {
        children: "useAutocomplete"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", _objectSpread({
        className: classes.input
      }, getInputProps()))]
    })), groupedOptions.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", _objectSpread(_objectSpread({
      className: classes.listbox
    }, getListboxProps()), {}, {
      children: groupedOptions.map(function (option, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", _objectSpread(_objectSpread({}, getOptionProps({
          option: option,
          index: index
        })), {}, {
          children: option.title
        }));
      })
    })) : null]
  });
} // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

var top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}, {
  title: 'Casablanca',
  year: 1942
}, {
  title: 'City Lights',
  year: 1931
}, {
  title: 'Psycho',
  year: 1960
}, {
  title: 'The Green Mile',
  year: 1999
}, {
  title: 'The Intouchables',
  year: 2011
}, {
  title: 'Modern Times',
  year: 1936
}, {
  title: 'Raiders of the Lost Ark',
  year: 1981
}, {
  title: 'Rear Window',
  year: 1954
}, {
  title: 'The Pianist',
  year: 2002
}, {
  title: 'The Departed',
  year: 2006
}, {
  title: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  title: 'Back to the Future',
  year: 1985
}, {
  title: 'Whiplash',
  year: 2014
}, {
  title: 'Gladiator',
  year: 2000
}, {
  title: 'Memento',
  year: 2000
}, {
  title: 'The Prestige',
  year: 2006
}, {
  title: 'The Lion King',
  year: 1994
}, {
  title: 'Apocalypse Now',
  year: 1979
}, {
  title: 'Alien',
  year: 1979
}, {
  title: 'Sunset Boulevard',
  year: 1950
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  title: 'The Great Dictator',
  year: 1940
}, {
  title: 'Cinema Paradiso',
  year: 1988
}, {
  title: 'The Lives of Others',
  year: 2006
}, {
  title: 'Grave of the Fireflies',
  year: 1988
}, {
  title: 'Paths of Glory',
  year: 1957
}, {
  title: 'Django Unchained',
  year: 2012
}, {
  title: 'The Shining',
  year: 1980
}, {
  title: 'WALL·E',
  year: 2008
}, {
  title: 'American Beauty',
  year: 1999
}, {
  title: 'The Dark Knight Rises',
  year: 2012
}, {
  title: 'Princess Mononoke',
  year: 1997
}, {
  title: 'Aliens',
  year: 1986
}, {
  title: 'Oldboy',
  year: 2003
}, {
  title: 'Once Upon a Time in America',
  year: 1984
}, {
  title: 'Witness for the Prosecution',
  year: 1957
}, {
  title: 'Das Boot',
  year: 1981
}, {
  title: 'Citizen Kane',
  year: 1941
}, {
  title: 'North by Northwest',
  year: 1959
}, {
  title: 'Vertigo',
  year: 1958
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  title: 'Reservoir Dogs',
  year: 1992
}, {
  title: 'Braveheart',
  year: 1995
}, {
  title: 'M',
  year: 1931
}, {
  title: 'Requiem for a Dream',
  year: 2000
}, {
  title: 'Amélie',
  year: 2001
}, {
  title: 'A Clockwork Orange',
  year: 1971
}, {
  title: 'Like Stars on Earth',
  year: 2007
}, {
  title: 'Taxi Driver',
  year: 1976
}, {
  title: 'Lawrence of Arabia',
  year: 1962
}, {
  title: 'Double Indemnity',
  year: 1944
}, {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  title: 'Amadeus',
  year: 1984
}, {
  title: 'To Kill a Mockingbird',
  year: 1962
}, {
  title: 'Toy Story 3',
  year: 2010
}, {
  title: 'Logan',
  year: 2017
}, {
  title: 'Full Metal Jacket',
  year: 1987
}, {
  title: 'Dangal',
  year: 2016
}, {
  title: 'The Sting',
  year: 1973
}, {
  title: '2001: A Space Odyssey',
  year: 1968
}, {
  title: "Singin' in the Rain",
  year: 1952
}, {
  title: 'Toy Story',
  year: 1995
}, {
  title: 'Bicycle Thieves',
  year: 1948
}, {
  title: 'The Kid',
  year: 1921
}, {
  title: 'Inglourious Basterds',
  year: 2009
}, {
  title: 'Snatch',
  year: 2000
}, {
  title: '3 Idiots',
  year: 2009
}, {
  title: 'Monty Python and the Holy Grail',
  year: 1975
}];

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Virtualize.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Virtualize.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Virtualize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var LISTBOX_PADDING = 8; // px

function renderRow(props) {
  var data = props.data,
      index = props.index,
      style = props.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(data[index], {
    style: _objectSpread(_objectSpread({}, style), {}, {
      top: style.top + LISTBOX_PADDING
    })
  });
}

var OuterElementContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var OuterElementType = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var outerProps = react__WEBPACK_IMPORTED_MODULE_0__.useContext(OuterElementContext);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", _objectSpread(_objectSpread({
    ref: ref
  }, props), outerProps));
});

function useResetCache(data) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
} // Adapter for react-window


var ListboxComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ListboxComponent(props, ref) {
  var children = props.children,
      other = _objectWithoutProperties(props, _excluded);

  var itemData = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children);
  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var smUp = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__["default"])(theme.breakpoints.up('sm'), {
    noSsr: true
  });
  var itemCount = itemData.length;
  var itemSize = smUp ? 36 : 48;

  var getChildSize = function getChildSize(child) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) && child.type === _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_4__["default"]) {
      return 48;
    }

    return itemSize;
  };

  var getHeight = function getHeight() {
    if (itemCount > 8) {
      return 8 * itemSize;
    }

    return itemData.map(getChildSize).reduce(function (a, b) {
      return a + b;
    }, 0);
  };

  var gridRef = useResetCache(itemCount);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ref: ref,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(OuterElementContext.Provider, {
      value: other,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_window__WEBPACK_IMPORTED_MODULE_5__.VariableSizeList, {
        itemData: itemData,
        height: getHeight() + 2 * LISTBOX_PADDING,
        width: "100%",
        ref: gridRef,
        outerElementType: OuterElementType,
        innerElementType: "ul",
        itemSize: function itemSize(index) {
          return getChildSize(itemData[index]);
        },
        overscanCount: 5,
        itemCount: itemCount,
        children: renderRow
      })
    })
  });
});
ListboxComponent.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node)
};

function random(length) {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';

  for (var i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["default"])({
  listbox: {
    boxSizing: 'border-box',
    '& ul': {
      padding: 0,
      margin: 0
    }
  }
});
var OPTIONS = Array.from(new Array(10000)).map(function () {
  return random(10 + Math.ceil(Math.random() * 20));
}).sort(function (a, b) {
  return a.toUpperCase().localeCompare(b.toUpperCase());
});

var renderGroup = function renderGroup(params) {
  return [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "div",
    children: params.group
  }, params.key), params.children];
};

function Virtualize() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "virtualize-demo",
    style: {
      width: 300
    },
    disableListWrap: true,
    classes: classes,
    ListboxComponent: ListboxComponent,
    renderGroup: renderGroup,
    options: OPTIONS,
    groupBy: function groupBy(option) {
      return option[0].toUpperCase();
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread(_objectSpread({}, params), {}, {
        variant: "outlined",
        label: "10,000 options"
      }));
    },
    renderOption: function renderOption(option) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
        noWrap: true,
        children: option
      });
    }
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/index.js":
/*!********************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/AutoComplete/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AutoComplete)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _jumbo_components_PageComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@jumbo/components/PageComponents */ "./resources/js/src/@jumbo/components/PageComponents/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js");
/* harmony import */ var _jumbo_components_Common_CodeViewerCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@jumbo/components/Common/CodeViewerCard */ "./resources/js/src/@jumbo/components/Common/CodeViewerCard/index.js");
/* harmony import */ var _demo_ComboBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo/ComboBox */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/ComboBox.js");
/* harmony import */ var _demo_Playground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo/Playground */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Playground.js");
/* harmony import */ var _demo_CountrySelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo/CountrySelect */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/CountrySelect.js");
/* harmony import */ var _demo_ControllableStates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/ControllableStates */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/ControllableStates.js");
/* harmony import */ var _demo_FreeSolo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/FreeSolo */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/FreeSolo.js");
/* harmony import */ var _demo_FreeSoloCreateOption__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo/FreeSoloCreateOption */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/FreeSoloCreateOption.js");
/* harmony import */ var _demo_FreeSoloCreateOptionDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo/FreeSoloCreateOptionDialog */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/FreeSoloCreateOptionDialog.js");
/* harmony import */ var _demo_Grouped__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demo/Grouped */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Grouped.js");
/* harmony import */ var _demo_DisabledOptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo/DisabledOptions */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/DisabledOptions.js");
/* harmony import */ var _demo_UseAutocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demo/UseAutocomplete */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/UseAutocomplete.js");
/* harmony import */ var _demo_CustomizedHook__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./demo/CustomizedHook */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/CustomizedHook.js");
/* harmony import */ var _demo_Asynchronous__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./demo/Asynchronous */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Asynchronous.js");
/* harmony import */ var _demo_GoogleMaps__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./demo/GoogleMaps */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/GoogleMaps.js");
/* harmony import */ var _demo_Tags__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./demo/Tags */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Tags.js");
/* harmony import */ var _demo_FixedTags__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./demo/FixedTags */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/FixedTags.js");
/* harmony import */ var _demo_CheckboxesTags__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./demo/CheckboxesTags */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/CheckboxesTags.js");
/* harmony import */ var _demo_LimitTags__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./demo/LimitTags */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/LimitTags.js");
/* harmony import */ var _demo_Sizes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./demo/Sizes */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Sizes.js");
/* harmony import */ var _demo_CustomInputAutocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./demo/CustomInputAutocomplete */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/CustomInputAutocomplete.js");
/* harmony import */ var _demo_GitHubLabel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./demo/GitHubLabel */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/GitHubLabel.js");
/* harmony import */ var _demo_Highlights__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./demo/Highlights */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Highlights.js");
/* harmony import */ var _demo_Filter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./demo/Filter */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Filter.js");
/* harmony import */ var _demo_Virtualize__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./demo/Virtualize */ "./resources/js/src/routes/Components/MuiComponents/AutoComplete/demo/Virtualize.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






























var useStyles = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_27__["default"])(function (theme) {
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

var requireRaw = __webpack_require__("./resources/js/src/@fake-db/mui-components/auto-complete sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$");

var demos = [{
  label: 'Combo Box',
  link: 'combo-box',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_ComboBox__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
  filename: './ComboBox.txt'
}, {
  label: 'Playground',
  link: 'playground',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_Playground__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
  filename: './Playground.txt'
}, {
  label: 'Country select',
  link: 'country-select',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_CountrySelect__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
  filename: './CountrySelect.txt'
}, {
  label: 'Controllable states',
  link: 'controllable-states',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_ControllableStates__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
  filename: './ControllableStates.txt'
}, {
  label: 'Free Solo Search input',
  link: 'free-solo-search-input',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_FreeSolo__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
  filename: './FreeSolo.txt'
}, {
  label: 'Free Solo Creatable',
  link: 'free-solo-creatable',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_FreeSoloCreateOption__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
  filename: './FreeSoloCreateOption.txt'
}, {
  label: 'Free Solo Creatable Dialog',
  link: 'free-solo-creatable-dialog',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_FreeSoloCreateOptionDialog__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
  filename: './FreeSoloCreateOptionDialog.txt'
}, {
  label: 'Grouped',
  link: 'grouped',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_Grouped__WEBPACK_IMPORTED_MODULE_10__["default"], {}),
  filename: './Grouped.txt'
}, {
  label: 'Disabled options',
  link: 'disabled-options',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_DisabledOptions__WEBPACK_IMPORTED_MODULE_11__["default"], {}),
  filename: './DisabledOptions.txt'
}, {
  label: 'useAutocomplete',
  link: 'use-autocomplete',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_UseAutocomplete__WEBPACK_IMPORTED_MODULE_12__["default"], {}),
  filename: './UseAutocomplete.txt'
}, {
  label: 'Customized hook',
  link: 'customized-hook',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_CustomizedHook__WEBPACK_IMPORTED_MODULE_13__["default"], {}),
  filename: './CustomizedHook.txt'
}, {
  label: 'Asynchronous requests',
  link: 'asynchronous-requests',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_Asynchronous__WEBPACK_IMPORTED_MODULE_14__["default"], {}),
  filename: './Asynchronous.txt'
}, {
  label: 'Google Maps place',
  link: 'google-maps-place',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_GoogleMaps__WEBPACK_IMPORTED_MODULE_15__["default"], {}),
  filename: './GoogleMaps.txt'
}, {
  label: 'Multiple values',
  link: 'multiple-values',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_Tags__WEBPACK_IMPORTED_MODULE_16__["default"], {}),
  filename: './Tags.txt'
}, {
  label: 'Fixed options',
  link: 'Fixed options',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_FixedTags__WEBPACK_IMPORTED_MODULE_17__["default"], {}),
  filename: './FixedTags.txt'
}, {
  label: 'Checkboxes',
  link: 'checkboxes',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_CheckboxesTags__WEBPACK_IMPORTED_MODULE_18__["default"], {}),
  filename: './CheckboxesTags.txt'
}, {
  label: 'Limit tags',
  link: 'limit-tags',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_LimitTags__WEBPACK_IMPORTED_MODULE_19__["default"], {}),
  filename: './LimitTags.txt'
}, {
  label: 'Sizes',
  link: 'sizes',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_Sizes__WEBPACK_IMPORTED_MODULE_20__["default"], {}),
  filename: './Sizes.txt'
}, {
  label: 'Custom input',
  link: 'custom-input',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_CustomInputAutocomplete__WEBPACK_IMPORTED_MODULE_21__["default"], {}),
  filename: './CustomInputAutocomplete.txt'
}, {
  label: "GitHub's picker",
  link: 'githubs-picker',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_GitHubLabel__WEBPACK_IMPORTED_MODULE_22__["default"], {}),
  filename: './GitHubLabel.txt'
}, {
  label: 'Highlights',
  link: 'highlights',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_Highlights__WEBPACK_IMPORTED_MODULE_23__["default"], {}),
  filename: './Highlights.txt'
}, {
  label: 'Custom filter',
  link: 'custom-filter',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_Filter__WEBPACK_IMPORTED_MODULE_24__["default"], {}),
  filename: './Filter.txt'
}, {
  label: 'Virtualization',
  link: 'virtualization',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_demo_Virtualize__WEBPACK_IMPORTED_MODULE_25__["default"], {}),
  filename: './Virtualize.txt'
}];
function AutoComplete() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_jumbo_components_PageComponents__WEBPACK_IMPORTED_MODULE_1__.MuiComponentDemo, {
    pageTitle: "Autocomplete",
    menus: demos,
    children: demos.map(function (menu, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__["default"], {
        id: menu.link,
        className: classes.section,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_29__["default"], {
          component: "h3",
          variant: "inherit",
          className: classes.sectionHeading,
          children: menu.label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_jumbo_components_Common_CodeViewerCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          code: requireRaw(menu.filename)["default"],
          language: "jsx",
          children: menu.component
        })]
      }, index);
    })
  });
}

/***/ }),

/***/ "./node_modules/cross-fetch/dist/browser-ponyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \***********************************************************/
/***/ (function(module, exports) {

var global = typeof self !== 'undefined' ? self : this;
var __self__ = (function () {
function F() {
this.fetch = false;
this.DOMException = global.DOMException
}
F.prototype = global;
return new F();
})();
(function(self) {

var irrelevant = (function (exports) {

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
exports["default"] = ctx.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers
exports.Request = ctx.Request
exports.Response = ctx.Response
module.exports = exports


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeOne);


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Asynchronous.txt":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Asynchronous.txt ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// *https://www.registers.service.gov.uk/registers/country/use-the-api*\r\nimport fetch from 'cross-fetch';\r\nimport React from 'react';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\nimport CircularProgress from '@material-ui/core/CircularProgress';\r\n\r\nfunction sleep(delay = 0) {\r\n  return new Promise(resolve => {\r\n    setTimeout(resolve, delay);\r\n  });\r\n}\r\n\r\nexport default function Asynchronous() {\r\n  const [open, setOpen] = React.useState(false);\r\n  const [options, setOptions] = React.useState([]);\r\n  const loading = open && options.length === 0;\r\n\r\n  React.useEffect(() => {\r\n    let active = true;\r\n\r\n    if (!loading) {\r\n      return undefined;\r\n    }\r\n\r\n    (async () => {\r\n      const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');\r\n      await sleep(1e3); // For demo purposes.\r\n      const countries = await response.json();\r\n\r\n      if (active) {\r\n        setOptions(Object.keys(countries).map(key => countries[key].item[0]));\r\n      }\r\n    })();\r\n\r\n    return () => {\r\n      active = false;\r\n    };\r\n  }, [loading]);\r\n\r\n  React.useEffect(() => {\r\n    if (!open) {\r\n      setOptions([]);\r\n    }\r\n  }, [open]);\r\n\r\n  return (\r\n    <Autocomplete\r\n      id=\"asynchronous-demo\"\r\n      style={{ width: 300 }}\r\n      open={open}\r\n      onOpen={() => {\r\n        setOpen(true);\r\n      }}\r\n      onClose={() => {\r\n        setOpen(false);\r\n      }}\r\n      getOptionSelected={(option, value) => option.name === value.name}\r\n      getOptionLabel={option => option.name}\r\n      options={options}\r\n      loading={loading}\r\n      renderInput={params => (\r\n        <TextField\r\n          {...params}\r\n          label=\"Asynchronous\"\r\n          variant=\"outlined\"\r\n          InputProps={{\r\n            ...params.InputProps,\r\n            endAdornment: (\r\n              <React.Fragment>\r\n                {loading ? <CircularProgress color=\"inherit\" size={20} /> : null}\r\n                {params.InputProps.endAdornment}\r\n              </React.Fragment>\r\n            ),\r\n          }}\r\n        />\r\n      )}\r\n    />\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/CheckboxesTags.txt":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/CheckboxesTags.txt ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\n\r\nimport React from 'react';\r\nimport Checkbox from '@material-ui/core/Checkbox';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\nimport CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';\r\nimport CheckBoxIcon from '@material-ui/icons/CheckBox';\r\n\r\nconst icon = <CheckBoxOutlineBlankIcon fontSize=\"small\" />;\r\nconst checkedIcon = <CheckBoxIcon fontSize=\"small\" />;\r\n\r\nexport default function CheckboxesTags() {\r\n  return (\r\n    <Autocomplete\r\n      multiple\r\n      id=\"checkboxes-tags-demo\"\r\n      options={top100Films}\r\n      disableCloseOnSelect\r\n      getOptionLabel={option => option.title}\r\n      renderOption={(option, { selected }) => (\r\n        <React.Fragment>\r\n          <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />\r\n          {option.title}\r\n        </React.Fragment>\r\n      )}\r\n      style={{ width: 500 }}\r\n      renderInput={params => <TextField {...params} variant=\"outlined\" label=\"Checkboxes\" placeholder=\"Favorites\" />}\r\n    />\r\n  );\r\n}\r\n\r\n// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top\r\nconst top100Films = [\r\n  { title: 'The Shawshank Redemption', year: 1994 },\r\n  { title: 'The Godfather', year: 1972 },\r\n  { title: 'The Godfather: Part II', year: 1974 },\r\n  { title: 'The Dark Knight', year: 2008 },\r\n  { title: '12 Angry Men', year: 1957 },\r\n  { title: \"Schindler's List\", year: 1993 },\r\n  { title: 'Pulp Fiction', year: 1994 },\r\n  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },\r\n  { title: 'The Good, the Bad and the Ugly', year: 1966 },\r\n  { title: 'Fight Club', year: 1999 },\r\n  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },\r\n  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },\r\n  { title: 'Forrest Gump', year: 1994 },\r\n  { title: 'Inception', year: 2010 },\r\n  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },\r\n  { title: \"One Flew Over the Cuckoo's Nest\", year: 1975 },\r\n  { title: 'Goodfellas', year: 1990 },\r\n  { title: 'The Matrix', year: 1999 },\r\n  { title: 'Seven Samurai', year: 1954 },\r\n  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },\r\n  { title: 'City of God', year: 2002 },\r\n  { title: 'Se7en', year: 1995 },\r\n  { title: 'The Silence of the Lambs', year: 1991 },\r\n  { title: \"It's a Wonderful Life\", year: 1946 },\r\n  { title: 'Life Is Beautiful', year: 1997 },\r\n  { title: 'The Usual Suspects', year: 1995 },\r\n  { title: 'Léon: The Professional', year: 1994 },\r\n  { title: 'Spirited Away', year: 2001 },\r\n  { title: 'Saving Private Ryan', year: 1998 },\r\n  { title: 'Once Upon a Time in the West', year: 1968 },\r\n  { title: 'American History X', year: 1998 },\r\n  { title: 'Interstellar', year: 2014 },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/ComboBox.txt":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/ComboBox.txt ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\n\r\nexport default function ComboBox() {\r\n  return (\r\n    <Autocomplete\r\n      id=\"combo-box-demo\"\r\n      options={top100Films}\r\n      getOptionLabel={option => option.title}\r\n      style={{ width: 300 }}\r\n      renderInput={params => <TextField {...params} label=\"Combo box\" variant=\"outlined\" />}\r\n    />\r\n  );\r\n}\r\n\r\n// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top\r\nconst top100Films = [\r\n  { title: 'The Shawshank Redemption', year: 1994 },\r\n  { title: 'The Godfather', year: 1972 },\r\n  { title: 'The Godfather: Part II', year: 1974 },\r\n  { title: 'The Dark Knight', year: 2008 },\r\n  { title: '12 Angry Men', year: 1957 },\r\n  { title: \"Schindler's List\", year: 1993 },\r\n  { title: 'Pulp Fiction', year: 1994 },\r\n  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },\r\n  { title: 'The Good, the Bad and the Ugly', year: 1966 },\r\n  { title: 'Fight Club', year: 1999 },\r\n  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },\r\n  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },\r\n  { title: 'Forrest Gump', year: 1994 },\r\n  { title: 'Inception', year: 2010 },\r\n  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },\r\n  { title: \"One Flew Over the Cuckoo's Nest\", year: 1975 },\r\n  { title: 'Goodfellas', year: 1990 },\r\n  { title: 'The Matrix', year: 1999 },\r\n  { title: 'Seven Samurai', year: 1954 },\r\n  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },\r\n  { title: 'City of God', year: 2002 },\r\n  { title: 'Se7en', year: 1995 },\r\n  { title: 'The Silence of the Lambs', year: 1991 },\r\n  { title: \"It's a Wonderful Life\", year: 1946 },\r\n  { title: 'Life Is Beautiful', year: 1997 },\r\n  { title: 'The Usual Suspects', year: 1995 },\r\n  { title: 'Léon: The Professional', year: 1994 },\r\n  { title: 'Spirited Away', year: 2001 },\r\n  { title: 'Saving Private Ryan', year: 1998 },\r\n  { title: 'Once Upon a Time in the West', year: 1968 },\r\n  { title: 'American History X', year: 1998 },\r\n  { title: 'Interstellar', year: 2014 },\r\n  { title: 'Casablanca', year: 1942 },\r\n  { title: 'City Lights', year: 1931 },\r\n  { title: 'Psycho', year: 1960 },\r\n  { title: 'The Green Mile', year: 1999 },\r\n  { title: 'The Intouchables', year: 2011 },\r\n  { title: 'Modern Times', year: 1936 },\r\n  { title: 'Raiders of the Lost Ark', year: 1981 },\r\n  { title: 'Rear Window', year: 1954 },\r\n  { title: 'The Pianist', year: 2002 },\r\n  { title: 'The Departed', year: 2006 },\r\n  { title: 'Terminator 2: Judgment Day', year: 1991 },\r\n  { title: 'Back to the Future', year: 1985 },\r\n  { title: 'Whiplash', year: 2014 },\r\n  { title: 'Gladiator', year: 2000 },\r\n  { title: 'Memento', year: 2000 },\r\n  { title: 'The Prestige', year: 2006 },\r\n  { title: 'The Lion King', year: 1994 },\r\n  { title: 'Apocalypse Now', year: 1979 },\r\n  { title: 'Alien', year: 1979 },\r\n  { title: 'Sunset Boulevard', year: 1950 },\r\n  {\r\n    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',\r\n    year: 1964,\r\n  },\r\n  { title: 'The Great Dictator', year: 1940 },\r\n  { title: 'Cinema Paradiso', year: 1988 },\r\n  { title: 'The Lives of Others', year: 2006 },\r\n  { title: 'Grave of the Fireflies', year: 1988 },\r\n  { title: 'Paths of Glory', year: 1957 },\r\n  { title: 'Django Unchained', year: 2012 },\r\n  { title: 'The Shining', year: 1980 },\r\n  { title: 'WALL·E', year: 2008 },\r\n  { title: 'American Beauty', year: 1999 },\r\n  { title: 'The Dark Knight Rises', year: 2012 },\r\n  { title: 'Princess Mononoke', year: 1997 },\r\n  { title: 'Aliens', year: 1986 },\r\n  { title: 'Oldboy', year: 2003 },\r\n  { title: 'Once Upon a Time in America', year: 1984 },\r\n  { title: 'Witness for the Prosecution', year: 1957 },\r\n  { title: 'Das Boot', year: 1981 },\r\n  { title: 'Citizen Kane', year: 1941 },\r\n  { title: 'North by Northwest', year: 1959 },\r\n  { title: 'Vertigo', year: 1958 },\r\n  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },\r\n  { title: 'Reservoir Dogs', year: 1992 },\r\n  { title: 'Braveheart', year: 1995 },\r\n  { title: 'M', year: 1931 },\r\n  { title: 'Requiem for a Dream', year: 2000 },\r\n  { title: 'Amélie', year: 2001 },\r\n  { title: 'A Clockwork Orange', year: 1971 },\r\n  { title: 'Like Stars on Earth', year: 2007 },\r\n  { title: 'Taxi Driver', year: 1976 },\r\n  { title: 'Lawrence of Arabia', year: 1962 },\r\n  { title: 'Double Indemnity', year: 1944 },\r\n  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },\r\n  { title: 'Amadeus', year: 1984 },\r\n  { title: 'To Kill a Mockingbird', year: 1962 },\r\n  { title: 'Toy Story 3', year: 2010 },\r\n  { title: 'Logan', year: 2017 },\r\n  { title: 'Full Metal Jacket', year: 1987 },\r\n  { title: 'Dangal', year: 2016 },\r\n  { title: 'The Sting', year: 1973 },\r\n  { title: '2001: A Space Odyssey', year: 1968 },\r\n  { title: \"Singin' in the Rain\", year: 1952 },\r\n  { title: 'Toy Story', year: 1995 },\r\n  { title: 'Bicycle Thieves', year: 1948 },\r\n  { title: 'The Kid', year: 1921 },\r\n  { title: 'Inglourious Basterds', year: 2009 },\r\n  { title: 'Snatch', year: 2000 },\r\n  { title: '3 Idiots', year: 2009 },\r\n  { title: 'Monty Python and the Holy Grail', year: 1975 },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/ControllableStates.txt":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/ControllableStates.txt ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\n\r\nconst options = ['Option 1', 'Option 2'];\r\n\r\nexport default function ControllableStates() {\r\n  const [value, setValue] = React.useState(options[0]);\r\n  const [inputValue, setInputValue] = React.useState('');\r\n\r\n  return (\r\n    <div>\r\n      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>\r\n      <div>{`inputValue: '${inputValue}'`}</div>\r\n      <br />\r\n      <Autocomplete\r\n        value={value}\r\n        onChange={(event, newValue) => {\r\n          setValue(newValue);\r\n        }}\r\n        inputValue={inputValue}\r\n        onInputChange={(event, newInputValue) => {\r\n          setInputValue(newInputValue);\r\n        }}\r\n        id=\"controllable-states-demo\"\r\n        options={options}\r\n        style={{ width: 300 }}\r\n        renderInput={params => <TextField {...params} label=\"Controllable\" variant=\"outlined\" />}\r\n      />\r\n    </div>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/CountrySelect.txt":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/CountrySelect.txt ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\n\r\n// ISO 3166-1 alpha-2\r\n// ⚠️ No support for IE 11\r\nfunction countryToFlag(isoCode) {\r\n  return typeof String.fromCodePoint !== 'undefined'\r\n    ? isoCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))\r\n    : isoCode;\r\n}\r\n\r\nconst useStyles = makeStyles({\r\n  option: {\r\n    fontSize: 15,\r\n    '& > span': {\r\n      marginRight: 10,\r\n      fontSize: 18,\r\n    },\r\n  },\r\n});\r\n\r\nexport default function CountrySelect() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Autocomplete\r\n      id=\"country-select-demo\"\r\n      style={{ width: 300 }}\r\n      options={countries}\r\n      classes={{\r\n        option: classes.option,\r\n      }}\r\n      autoHighlight\r\n      getOptionLabel={option => option.label}\r\n      renderOption={option => (\r\n        <React.Fragment>\r\n          <span>{countryToFlag(option.code)}</span>\r\n          {option.label} ({option.code}) +{option.phone}\r\n        </React.Fragment>\r\n      )}\r\n      renderInput={params => (\r\n        <TextField\r\n          {...params}\r\n          label=\"Choose a country\"\r\n          variant=\"outlined\"\r\n          inputProps={{\r\n            ...params.inputProps,\r\n            autoComplete: 'new-password', // disable autocomplete and autofill\r\n          }}\r\n        />\r\n      )}\r\n    />\r\n  );\r\n}\r\n\r\n// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js\r\nconst countries = [\r\n  { code: 'AD', label: 'Andorra', phone: '376' },\r\n  { code: 'AE', label: 'United Arab Emirates', phone: '971' },\r\n  { code: 'AF', label: 'Afghanistan', phone: '93' },\r\n  { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },\r\n  { code: 'AI', label: 'Anguilla', phone: '1-264' },\r\n  { code: 'AL', label: 'Albania', phone: '355' },\r\n  { code: 'AM', label: 'Armenia', phone: '374' },\r\n  { code: 'AO', label: 'Angola', phone: '244' },\r\n  { code: 'AQ', label: 'Antarctica', phone: '672' },\r\n  { code: 'AR', label: 'Argentina', phone: '54' },\r\n  { code: 'AS', label: 'American Samoa', phone: '1-684' },\r\n  { code: 'AT', label: 'Austria', phone: '43' },\r\n  { code: 'AU', label: 'Australia', phone: '61', suggested: true },\r\n  { code: 'AW', label: 'Aruba', phone: '297' },\r\n  { code: 'AX', label: 'Alland Islands', phone: '358' },\r\n  { code: 'AZ', label: 'Azerbaijan', phone: '994' },\r\n  { code: 'BA', label: 'Bosnia and Herzegovina', phone: '387' },\r\n  { code: 'BB', label: 'Barbados', phone: '1-246' },\r\n  { code: 'BD', label: 'Bangladesh', phone: '880' },\r\n  { code: 'BE', label: 'Belgium', phone: '32' },\r\n  { code: 'BF', label: 'Burkina Faso', phone: '226' },\r\n  { code: 'BG', label: 'Bulgaria', phone: '359' },\r\n  { code: 'BH', label: 'Bahrain', phone: '973' },\r\n  { code: 'BI', label: 'Burundi', phone: '257' },\r\n  { code: 'BJ', label: 'Benin', phone: '229' },\r\n  { code: 'BL', label: 'Saint Barthelemy', phone: '590' },\r\n  { code: 'BM', label: 'Bermuda', phone: '1-441' },\r\n  { code: 'BN', label: 'Brunei Darussalam', phone: '673' },\r\n  { code: 'BO', label: 'Bolivia', phone: '591' },\r\n  { code: 'BR', label: 'Brazil', phone: '55' },\r\n  { code: 'BS', label: 'Bahamas', phone: '1-242' },\r\n  { code: 'BT', label: 'Bhutan', phone: '975' },\r\n  { code: 'BV', label: 'Bouvet Island', phone: '47' },\r\n  { code: 'BW', label: 'Botswana', phone: '267' },\r\n  { code: 'BY', label: 'Belarus', phone: '375' },\r\n  { code: 'BZ', label: 'Belize', phone: '501' },\r\n  { code: 'CA', label: 'Canada', phone: '1', suggested: true },\r\n  { code: 'CC', label: 'Cocos (Keeling) Islands', phone: '61' },\r\n  { code: 'CD', label: 'Congo, Democratic Republic of the', phone: '243' },\r\n  { code: 'CF', label: 'Central African Republic', phone: '236' },\r\n  { code: 'CG', label: 'Congo, Republic of the', phone: '242' },\r\n  { code: 'CH', label: 'Switzerland', phone: '41' },\r\n  { code: 'CI', label: \"Cote d'Ivoire\", phone: '225' },\r\n  { code: 'CK', label: 'Cook Islands', phone: '682' },\r\n  { code: 'CL', label: 'Chile', phone: '56' },\r\n  { code: 'CM', label: 'Cameroon', phone: '237' },\r\n  { code: 'CN', label: 'China', phone: '86' },\r\n  { code: 'CO', label: 'Colombia', phone: '57' },\r\n  { code: 'CR', label: 'Costa Rica', phone: '506' },\r\n  { code: 'CU', label: 'Cuba', phone: '53' },\r\n  { code: 'CV', label: 'Cape Verde', phone: '238' },\r\n  { code: 'CW', label: 'Curacao', phone: '599' },\r\n  { code: 'CX', label: 'Christmas Island', phone: '61' },\r\n  { code: 'CY', label: 'Cyprus', phone: '357' },\r\n  { code: 'CZ', label: 'Czech Republic', phone: '420' },\r\n  { code: 'DE', label: 'Germany', phone: '49', suggested: true },\r\n  { code: 'DJ', label: 'Djibouti', phone: '253' },\r\n  { code: 'DK', label: 'Denmark', phone: '45' },\r\n  { code: 'DM', label: 'Dominica', phone: '1-767' },\r\n  { code: 'DO', label: 'Dominican Republic', phone: '1-809' },\r\n  { code: 'DZ', label: 'Algeria', phone: '213' },\r\n  { code: 'EC', label: 'Ecuador', phone: '593' },\r\n  { code: 'EE', label: 'Estonia', phone: '372' },\r\n  { code: 'EG', label: 'Egypt', phone: '20' },\r\n  { code: 'EH', label: 'Western Sahara', phone: '212' },\r\n  { code: 'ER', label: 'Eritrea', phone: '291' },\r\n  { code: 'ES', label: 'Spain', phone: '34' },\r\n  { code: 'ET', label: 'Ethiopia', phone: '251' },\r\n  { code: 'FI', label: 'Finland', phone: '358' },\r\n  { code: 'FJ', label: 'Fiji', phone: '679' },\r\n  { code: 'FK', label: 'Falkland Islands (Malvinas)', phone: '500' },\r\n  { code: 'FM', label: 'Micronesia, Federated States of', phone: '691' },\r\n  { code: 'FO', label: 'Faroe Islands', phone: '298' },\r\n  { code: 'FR', label: 'France', phone: '33', suggested: true },\r\n  { code: 'GA', label: 'Gabon', phone: '241' },\r\n  { code: 'GB', label: 'United Kingdom', phone: '44' },\r\n  { code: 'GD', label: 'Grenada', phone: '1-473' },\r\n  { code: 'GE', label: 'Georgia', phone: '995' },\r\n  { code: 'GF', label: 'French Guiana', phone: '594' },\r\n  { code: 'GG', label: 'Guernsey', phone: '44' },\r\n  { code: 'GH', label: 'Ghana', phone: '233' },\r\n  { code: 'GI', label: 'Gibraltar', phone: '350' },\r\n  { code: 'GL', label: 'Greenland', phone: '299' },\r\n  { code: 'GM', label: 'Gambia', phone: '220' },\r\n  { code: 'GN', label: 'Guinea', phone: '224' },\r\n  { code: 'GP', label: 'Guadeloupe', phone: '590' },\r\n  { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },\r\n  { code: 'GR', label: 'Greece', phone: '30' },\r\n  {\r\n    code: 'GS',\r\n    label: 'South Georgia and the South Sandwich Islands',\r\n    phone: '500',\r\n  },\r\n  { code: 'GT', label: 'Guatemala', phone: '502' },\r\n  { code: 'GU', label: 'Guam', phone: '1-671' },\r\n  { code: 'GW', label: 'Guinea-Bissau', phone: '245' },\r\n  { code: 'GY', label: 'Guyana', phone: '592' },\r\n  { code: 'HK', label: 'Hong Kong', phone: '852' },\r\n  { code: 'HM', label: 'Heard Island and McDonald Islands', phone: '672' },\r\n  { code: 'HN', label: 'Honduras', phone: '504' },\r\n  { code: 'HR', label: 'Croatia', phone: '385' },\r\n  { code: 'HT', label: 'Haiti', phone: '509' },\r\n  { code: 'HU', label: 'Hungary', phone: '36' },\r\n  { code: 'ID', label: 'Indonesia', phone: '62' },\r\n  { code: 'IE', label: 'Ireland', phone: '353' },\r\n  { code: 'IL', label: 'Israel', phone: '972' },\r\n  { code: 'IM', label: 'Isle of Man', phone: '44' },\r\n  { code: 'IN', label: 'India', phone: '91' },\r\n  { code: 'IO', label: 'British Indian Ocean Territory', phone: '246' },\r\n  { code: 'IQ', label: 'Iraq', phone: '964' },\r\n  { code: 'IR', label: 'Iran, Islamic Republic of', phone: '98' },\r\n  { code: 'IS', label: 'Iceland', phone: '354' },\r\n  { code: 'IT', label: 'Italy', phone: '39' },\r\n  { code: 'JE', label: 'Jersey', phone: '44' },\r\n  { code: 'JM', label: 'Jamaica', phone: '1-876' },\r\n  { code: 'JO', label: 'Jordan', phone: '962' },\r\n  { code: 'JP', label: 'Japan', phone: '81', suggested: true },\r\n  { code: 'KE', label: 'Kenya', phone: '254' },\r\n  { code: 'KG', label: 'Kyrgyzstan', phone: '996' },\r\n  { code: 'KH', label: 'Cambodia', phone: '855' },\r\n  { code: 'KI', label: 'Kiribati', phone: '686' },\r\n  { code: 'KM', label: 'Comoros', phone: '269' },\r\n  { code: 'KN', label: 'Saint Kitts and Nevis', phone: '1-869' },\r\n  { code: 'KP', label: \"Korea, Democratic People's Republic of\", phone: '850' },\r\n  { code: 'KR', label: 'Korea, Republic of', phone: '82' },\r\n  { code: 'KW', label: 'Kuwait', phone: '965' },\r\n  { code: 'KY', label: 'Cayman Islands', phone: '1-345' },\r\n  { code: 'KZ', label: 'Kazakhstan', phone: '7' },\r\n  { code: 'LA', label: \"Lao People's Democratic Republic\", phone: '856' },\r\n  { code: 'LB', label: 'Lebanon', phone: '961' },\r\n  { code: 'LC', label: 'Saint Lucia', phone: '1-758' },\r\n  { code: 'LI', label: 'Liechtenstein', phone: '423' },\r\n  { code: 'LK', label: 'Sri Lanka', phone: '94' },\r\n  { code: 'LR', label: 'Liberia', phone: '231' },\r\n  { code: 'LS', label: 'Lesotho', phone: '266' },\r\n  { code: 'LT', label: 'Lithuania', phone: '370' },\r\n  { code: 'LU', label: 'Luxembourg', phone: '352' },\r\n  { code: 'LV', label: 'Latvia', phone: '371' },\r\n  { code: 'LY', label: 'Libya', phone: '218' },\r\n  { code: 'MA', label: 'Morocco', phone: '212' },\r\n  { code: 'MC', label: 'Monaco', phone: '377' },\r\n  { code: 'MD', label: 'Moldova, Republic of', phone: '373' },\r\n  { code: 'ME', label: 'Montenegro', phone: '382' },\r\n  { code: 'MF', label: 'Saint Martin (French part)', phone: '590' },\r\n  { code: 'MG', label: 'Madagascar', phone: '261' },\r\n  { code: 'MH', label: 'Marshall Islands', phone: '692' },\r\n  {\r\n    code: 'MK',\r\n    label: 'Macedonia, the Former Yugoslav Republic of',\r\n    phone: '389',\r\n  },\r\n  { code: 'ML', label: 'Mali', phone: '223' },\r\n  { code: 'MM', label: 'Myanmar', phone: '95' },\r\n  { code: 'MN', label: 'Mongolia', phone: '976' },\r\n  { code: 'MO', label: 'Macao', phone: '853' },\r\n  { code: 'MP', label: 'Northern Mariana Islands', phone: '1-670' },\r\n  { code: 'MQ', label: 'Martinique', phone: '596' },\r\n  { code: 'MR', label: 'Mauritania', phone: '222' },\r\n  { code: 'MS', label: 'Montserrat', phone: '1-664' },\r\n  { code: 'MT', label: 'Malta', phone: '356' },\r\n  { code: 'MU', label: 'Mauritius', phone: '230' },\r\n  { code: 'MV', label: 'Maldives', phone: '960' },\r\n  { code: 'MW', label: 'Malawi', phone: '265' },\r\n  { code: 'MX', label: 'Mexico', phone: '52' },\r\n  { code: 'MY', label: 'Malaysia', phone: '60' },\r\n  { code: 'MZ', label: 'Mozambique', phone: '258' },\r\n  { code: 'NA', label: 'Namibia', phone: '264' },\r\n  { code: 'NC', label: 'New Caledonia', phone: '687' },\r\n  { code: 'NE', label: 'Niger', phone: '227' },\r\n  { code: 'NF', label: 'Norfolk Island', phone: '672' },\r\n  { code: 'NG', label: 'Nigeria', phone: '234' },\r\n  { code: 'NI', label: 'Nicaragua', phone: '505' },\r\n  { code: 'NL', label: 'Netherlands', phone: '31' },\r\n  { code: 'NO', label: 'Norway', phone: '47' },\r\n  { code: 'NP', label: 'Nepal', phone: '977' },\r\n  { code: 'NR', label: 'Nauru', phone: '674' },\r\n  { code: 'NU', label: 'Niue', phone: '683' },\r\n  { code: 'NZ', label: 'New Zealand', phone: '64' },\r\n  { code: 'OM', label: 'Oman', phone: '968' },\r\n  { code: 'PA', label: 'Panama', phone: '507' },\r\n  { code: 'PE', label: 'Peru', phone: '51' },\r\n  { code: 'PF', label: 'French Polynesia', phone: '689' },\r\n  { code: 'PG', label: 'Papua New Guinea', phone: '675' },\r\n  { code: 'PH', label: 'Philippines', phone: '63' },\r\n  { code: 'PK', label: 'Pakistan', phone: '92' },\r\n  { code: 'PL', label: 'Poland', phone: '48' },\r\n  { code: 'PM', label: 'Saint Pierre and Miquelon', phone: '508' },\r\n  { code: 'PN', label: 'Pitcairn', phone: '870' },\r\n  { code: 'PR', label: 'Puerto Rico', phone: '1' },\r\n  { code: 'PS', label: 'Palestine, State of', phone: '970' },\r\n  { code: 'PT', label: 'Portugal', phone: '351' },\r\n  { code: 'PW', label: 'Palau', phone: '680' },\r\n  { code: 'PY', label: 'Paraguay', phone: '595' },\r\n  { code: 'QA', label: 'Qatar', phone: '974' },\r\n  { code: 'RE', label: 'Reunion', phone: '262' },\r\n  { code: 'RO', label: 'Romania', phone: '40' },\r\n  { code: 'RS', label: 'Serbia', phone: '381' },\r\n  { code: 'RU', label: 'Russian Federation', phone: '7' },\r\n  { code: 'RW', label: 'Rwanda', phone: '250' },\r\n  { code: 'SA', label: 'Saudi Arabia', phone: '966' },\r\n  { code: 'SB', label: 'Solomon Islands', phone: '677' },\r\n  { code: 'SC', label: 'Seychelles', phone: '248' },\r\n  { code: 'SD', label: 'Sudan', phone: '249' },\r\n  { code: 'SE', label: 'Sweden', phone: '46' },\r\n  { code: 'SG', label: 'Singapore', phone: '65' },\r\n  { code: 'SH', label: 'Saint Helena', phone: '290' },\r\n  { code: 'SI', label: 'Slovenia', phone: '386' },\r\n  { code: 'SJ', label: 'Svalbard and Jan Mayen', phone: '47' },\r\n  { code: 'SK', label: 'Slovakia', phone: '421' },\r\n  { code: 'SL', label: 'Sierra Leone', phone: '232' },\r\n  { code: 'SM', label: 'San Marino', phone: '378' },\r\n  { code: 'SN', label: 'Senegal', phone: '221' },\r\n  { code: 'SO', label: 'Somalia', phone: '252' },\r\n  { code: 'SR', label: 'Suriname', phone: '597' },\r\n  { code: 'SS', label: 'South Sudan', phone: '211' },\r\n  { code: 'ST', label: 'Sao Tome and Principe', phone: '239' },\r\n  { code: 'SV', label: 'El Salvador', phone: '503' },\r\n  { code: 'SX', label: 'Sint Maarten (Dutch part)', phone: '1-721' },\r\n  { code: 'SY', label: 'Syrian Arab Republic', phone: '963' },\r\n  { code: 'SZ', label: 'Swaziland', phone: '268' },\r\n  { code: 'TC', label: 'Turks and Caicos Islands', phone: '1-649' },\r\n  { code: 'TD', label: 'Chad', phone: '235' },\r\n  { code: 'TF', label: 'French Southern Territories', phone: '262' },\r\n  { code: 'TG', label: 'Togo', phone: '228' },\r\n  { code: 'TH', label: 'Thailand', phone: '66' },\r\n  { code: 'TJ', label: 'Tajikistan', phone: '992' },\r\n  { code: 'TK', label: 'Tokelau', phone: '690' },\r\n  { code: 'TL', label: 'Timor-Leste', phone: '670' },\r\n  { code: 'TM', label: 'Turkmenistan', phone: '993' },\r\n  { code: 'TN', label: 'Tunisia', phone: '216' },\r\n  { code: 'TO', label: 'Tonga', phone: '676' },\r\n  { code: 'TR', label: 'Turkey', phone: '90' },\r\n  { code: 'TT', label: 'Trinidad and Tobago', phone: '1-868' },\r\n  { code: 'TV', label: 'Tuvalu', phone: '688' },\r\n  { code: 'TW', label: 'Taiwan, Province of China', phone: '886' },\r\n  { code: 'TZ', label: 'United Republic of Tanzania', phone: '255' },\r\n  { code: 'UA', label: 'Ukraine', phone: '380' },\r\n  { code: 'UG', label: 'Uganda', phone: '256' },\r\n  { code: 'US', label: 'United States', phone: '1', suggested: true },\r\n  { code: 'UY', label: 'Uruguay', phone: '598' },\r\n  { code: 'UZ', label: 'Uzbekistan', phone: '998' },\r\n  { code: 'VA', label: 'Holy See (Vatican City State)', phone: '379' },\r\n  { code: 'VC', label: 'Saint Vincent and the Grenadines', phone: '1-784' },\r\n  { code: 'VE', label: 'Venezuela', phone: '58' },\r\n  { code: 'VG', label: 'British Virgin Islands', phone: '1-284' },\r\n  { code: 'VI', label: 'US Virgin Islands', phone: '1-340' },\r\n  { code: 'VN', label: 'Vietnam', phone: '84' },\r\n  { code: 'VU', label: 'Vanuatu', phone: '678' },\r\n  { code: 'WF', label: 'Wallis and Futuna', phone: '681' },\r\n  { code: 'WS', label: 'Samoa', phone: '685' },\r\n  { code: 'XK', label: 'Kosovo', phone: '383' },\r\n  { code: 'YE', label: 'Yemen', phone: '967' },\r\n  { code: 'YT', label: 'Mayotte', phone: '262' },\r\n  { code: 'ZA', label: 'South Africa', phone: '27' },\r\n  { code: 'ZM', label: 'Zambia', phone: '260' },\r\n  { code: 'ZW', label: 'Zimbabwe', phone: '263' },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/CustomInputAutocomplete.txt":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/CustomInputAutocomplete.txt ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\n\r\nconst options = ['Option 1', 'Option 2'];\r\n\r\nexport default function CustomInputAutocomplete() {\r\n  return (\r\n    <Autocomplete\r\n      id=\"custom-input-demo\"\r\n      options={options}\r\n      renderInput={params => (\r\n        <div ref={params.InputProps.ref}>\r\n          <input style={{ width: 200 }} type=\"text\" {...params.inputProps} />\r\n        </div>\r\n      )}\r\n    />\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/CustomizedHook.txt":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/CustomizedHook.txt ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport useAutocomplete from '@material-ui/lab/useAutocomplete';\r\nimport NoSsr from '@material-ui/core/NoSsr';\r\nimport CheckIcon from '@material-ui/icons/Check';\r\nimport CloseIcon from '@material-ui/icons/Close';\r\nimport styled from 'styled-components';\r\n\r\nconst Label = styled('label')`\r\n  padding: 0 0 4px;\r\n  line-height: 1.5;\r\n  display: block;\r\n`;\r\n\r\nconst InputWrapper = styled('div')`\r\n  width: 300px;\r\n  border: 1px solid #d9d9d9;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  padding: 1px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n\r\n  &:hover {\r\n    border-color: #40a9ff;\r\n  }\r\n\r\n  &.focused {\r\n    border-color: #40a9ff;\r\n    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\r\n  }\r\n\r\n  & input {\r\n    font-size: 14px;\r\n    height: 30px;\r\n    box-sizing: border-box;\r\n    padding: 4px 6px;\r\n    width: 0;\r\n    min-width: 30px;\r\n    flex-grow: 1;\r\n    border: 0;\r\n    margin: 0;\r\n    outline: 0;\r\n  }\r\n`;\r\n\r\nconst Tag = styled(({ label, onDelete, ...props }) => (\r\n  <div {...props}>\r\n    <span>{label}</span>\r\n    <CloseIcon onClick={onDelete} />\r\n  </div>\r\n))`\r\n  display: flex;\r\n  align-items: center;\r\n  height: 24px;\r\n  margin: 2px;\r\n  line-height: 22px;\r\n  background-color: #fafafa;\r\n  border: 1px solid #e8e8e8;\r\n  border-radius: 2px;\r\n  box-sizing: content-box;\r\n  padding: 0 4px 0 10px;\r\n  outline: 0;\r\n  overflow: hidden;\r\n\r\n  &:focus {\r\n    border-color: #40a9ff;\r\n    background-color: #e6f7ff;\r\n  }\r\n\r\n  & span {\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n  }\r\n\r\n  & svg {\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    padding: 4px;\r\n  }\r\n`;\r\n\r\nconst Listbox = styled('ul')`\r\n  width: 300px;\r\n  margin: 2px 0 0;\r\n  padding: 0;\r\n  position: absolute;\r\n  list-style: none;\r\n  background-color: #fff;\r\n  overflow: auto;\r\n  max-height: 250px;\r\n  border-radius: 4px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n\r\n  & li {\r\n    padding: 5px 12px;\r\n    display: flex;\r\n\r\n    & span {\r\n      flex-grow: 1;\r\n    }\r\n\r\n    & svg {\r\n      color: transparent;\r\n    }\r\n  }\r\n\r\n  & li[aria-selected='true'] {\r\n    background-color: #fafafa;\r\n    font-weight: 600;\r\n\r\n    & svg {\r\n      color: #1890ff;\r\n    }\r\n  }\r\n\r\n  & li[data-focus='true'] {\r\n    background-color: #e6f7ff;\r\n    cursor: pointer;\r\n\r\n    & svg {\r\n      color: #000;\r\n    }\r\n  }\r\n`;\r\n\r\nexport default function CustomizedHook() {\r\n  const {\r\n    getRootProps,\r\n    getInputLabelProps,\r\n    getInputProps,\r\n    getTagProps,\r\n    getListboxProps,\r\n    getOptionProps,\r\n    groupedOptions,\r\n    value,\r\n    focused,\r\n    setAnchorEl,\r\n  } = useAutocomplete({\r\n    id: 'customized-hook-demo',\r\n    defaultValue: [top100Films[1]],\r\n    multiple: true,\r\n    options: top100Films,\r\n    getOptionLabel: option => option.title,\r\n  });\r\n\r\n  return (\r\n    <NoSsr>\r\n      <div>\r\n        <div {...getRootProps()}>\r\n          <Label {...getInputLabelProps()}>Customized hook</Label>\r\n          <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>\r\n            {value.map((option, index) => (\r\n              <Tag label={option.title} {...getTagProps({ index })} />\r\n            ))}\r\n\r\n            <input {...getInputProps()} />\r\n          </InputWrapper>\r\n        </div>\r\n        {groupedOptions.length > 0 ? (\r\n          <Listbox {...getListboxProps()}>\r\n            {groupedOptions.map((option, index) => (\r\n              <li {...getOptionProps({ option, index })}>\r\n                <span>{option.title}</span>\r\n                <CheckIcon fontSize=\"small\" />\r\n              </li>\r\n            ))}\r\n          </Listbox>\r\n        ) : null}\r\n      </div>\r\n    </NoSsr>\r\n  );\r\n}\r\n\r\n// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top\r\nconst top100Films = [\r\n  { title: 'The Shawshank Redemption', year: 1994 },\r\n  { title: 'The Godfather', year: 1972 },\r\n  { title: 'The Godfather: Part II', year: 1974 },\r\n  { title: 'The Dark Knight', year: 2008 },\r\n  { title: '12 Angry Men', year: 1957 },\r\n  { title: \"Schindler's List\", year: 1993 },\r\n  { title: 'Pulp Fiction', year: 1994 },\r\n  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },\r\n  { title: 'The Good, the Bad and the Ugly', year: 1966 },\r\n  { title: 'Fight Club', year: 1999 },\r\n  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },\r\n  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },\r\n  { title: 'Forrest Gump', year: 1994 },\r\n  { title: 'Inception', year: 2010 },\r\n  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },\r\n  { title: \"One Flew Over the Cuckoo's Nest\", year: 1975 },\r\n  { title: 'Goodfellas', year: 1990 },\r\n  { title: 'The Matrix', year: 1999 },\r\n  { title: 'Seven Samurai', year: 1954 },\r\n  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },\r\n  { title: 'City of God', year: 2002 },\r\n  { title: 'Se7en', year: 1995 },\r\n  { title: 'The Silence of the Lambs', year: 1991 },\r\n  { title: \"It's a Wonderful Life\", year: 1946 },\r\n  { title: 'Life Is Beautiful', year: 1997 },\r\n  { title: 'The Usual Suspects', year: 1995 },\r\n  { title: 'Léon: The Professional', year: 1994 },\r\n  { title: 'Spirited Away', year: 2001 },\r\n  { title: 'Saving Private Ryan', year: 1998 },\r\n  { title: 'Once Upon a Time in the West', year: 1968 },\r\n  { title: 'American History X', year: 1998 },\r\n  { title: 'Interstellar', year: 2014 },\r\n  { title: 'Casablanca', year: 1942 },\r\n  { title: 'City Lights', year: 1931 },\r\n  { title: 'Psycho', year: 1960 },\r\n  { title: 'The Green Mile', year: 1999 },\r\n  { title: 'The Intouchables', year: 2011 },\r\n  { title: 'Modern Times', year: 1936 },\r\n  { title: 'Raiders of the Lost Ark', year: 1981 },\r\n  { title: 'Rear Window', year: 1954 },\r\n  { title: 'The Pianist', year: 2002 },\r\n  { title: 'The Departed', year: 2006 },\r\n  { title: 'Terminator 2: Judgment Day', year: 1991 },\r\n  { title: 'Back to the Future', year: 1985 },\r\n  { title: 'Whiplash', year: 2014 },\r\n  { title: 'Gladiator', year: 2000 },\r\n  { title: 'Memento', year: 2000 },\r\n  { title: 'The Prestige', year: 2006 },\r\n  { title: 'The Lion King', year: 1994 },\r\n  { title: 'Apocalypse Now', year: 1979 },\r\n  { title: 'Alien', year: 1979 },\r\n  { title: 'Sunset Boulevard', year: 1950 },\r\n  {\r\n    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',\r\n    year: 1964,\r\n  },\r\n  { title: 'The Great Dictator', year: 1940 },\r\n  { title: 'Cinema Paradiso', year: 1988 },\r\n  { title: 'The Lives of Others', year: 2006 },\r\n  { title: 'Grave of the Fireflies', year: 1988 },\r\n  { title: 'Paths of Glory', year: 1957 },\r\n  { title: 'Django Unchained', year: 2012 },\r\n  { title: 'The Shining', year: 1980 },\r\n  { title: 'WALL·E', year: 2008 },\r\n  { title: 'American Beauty', year: 1999 },\r\n  { title: 'The Dark Knight Rises', year: 2012 },\r\n  { title: 'Princess Mononoke', year: 1997 },\r\n  { title: 'Aliens', year: 1986 },\r\n  { title: 'Oldboy', year: 2003 },\r\n  { title: 'Once Upon a Time in America', year: 1984 },\r\n  { title: 'Witness for the Prosecution', year: 1957 },\r\n  { title: 'Das Boot', year: 1981 },\r\n  { title: 'Citizen Kane', year: 1941 },\r\n  { title: 'North by Northwest', year: 1959 },\r\n  { title: 'Vertigo', year: 1958 },\r\n  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },\r\n  { title: 'Reservoir Dogs', year: 1992 },\r\n  { title: 'Braveheart', year: 1995 },\r\n  { title: 'M', year: 1931 },\r\n  { title: 'Requiem for a Dream', year: 2000 },\r\n  { title: 'Amélie', year: 2001 },\r\n  { title: 'A Clockwork Orange', year: 1971 },\r\n  { title: 'Like Stars on Earth', year: 2007 },\r\n  { title: 'Taxi Driver', year: 1976 },\r\n  { title: 'Lawrence of Arabia', year: 1962 },\r\n  { title: 'Double Indemnity', year: 1944 },\r\n  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },\r\n  { title: 'Amadeus', year: 1984 },\r\n  { title: 'To Kill a Mockingbird', year: 1962 },\r\n  { title: 'Toy Story 3', year: 2010 },\r\n  { title: 'Logan', year: 2017 },\r\n  { title: 'Full Metal Jacket', year: 1987 },\r\n  { title: 'Dangal', year: 2016 },\r\n  { title: 'The Sting', year: 1973 },\r\n  { title: '2001: A Space Odyssey', year: 1968 },\r\n  { title: \"Singin' in the Rain\", year: 1952 },\r\n  { title: 'Toy Story', year: 1995 },\r\n  { title: 'Bicycle Thieves', year: 1948 },\r\n  { title: 'The Kid', year: 1921 },\r\n  { title: 'Inglourious Basterds', year: 2009 },\r\n  { title: 'Snatch', year: 2000 },\r\n  { title: '3 Idiots', year: 2009 },\r\n  { title: 'Monty Python and the Holy Grail', year: 1975 },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/DisabledOptions.txt":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/DisabledOptions.txt ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\n\r\nexport default function DisabledOptions() {\r\n  return (\r\n    <Autocomplete\r\n      id=\"disabled-options-demo\"\r\n      options={timeSlots}\r\n      getOptionDisabled={option => option === timeSlots[0] || option === timeSlots[2]}\r\n      style={{ width: 300 }}\r\n      renderInput={params => <TextField {...params} label=\"Disabled options\" variant=\"outlined\" />}\r\n    />\r\n  );\r\n}\r\n\r\n// One time slot every 30 minutes.\r\nconst timeSlots = Array.from(new Array(24 * 2)).map(\r\n  (_, index) => `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${index % 2 === 0 ? '00' : '30'}`,\r\n);\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Filter.txt":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Filter.txt ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';\r\n\r\nconst filterOptions = createFilterOptions({\r\n  matchFrom: 'start',\r\n  stringify: option => option.title,\r\n});\r\n\r\nexport default function Filter() {\r\n  return (\r\n    <Autocomplete\r\n      id=\"filter-demo\"\r\n      options={top100Films}\r\n      getOptionLabel={option => option.title}\r\n      filterOptions={filterOptions}\r\n      style={{ width: 300 }}\r\n      renderInput={params => <TextField {...params} label=\"Custom filter\" variant=\"outlined\" />}\r\n    />\r\n  );\r\n}\r\n\r\n// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top\r\nconst top100Films = [\r\n  { title: 'The Shawshank Redemption', year: 1994 },\r\n  { title: 'The Godfather', year: 1972 },\r\n  { title: 'The Godfather: Part II', year: 1974 },\r\n  { title: 'The Dark Knight', year: 2008 },\r\n  { title: '12 Angry Men', year: 1957 },\r\n  { title: \"Schindler's List\", year: 1993 },\r\n  { title: 'Pulp Fiction', year: 1994 },\r\n  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },\r\n  { title: 'The Good, the Bad and the Ugly', year: 1966 },\r\n  { title: 'Fight Club', year: 1999 },\r\n  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },\r\n  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },\r\n  { title: 'Forrest Gump', year: 1994 },\r\n  { title: 'Inception', year: 2010 },\r\n  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },\r\n  { title: \"One Flew Over the Cuckoo's Nest\", year: 1975 },\r\n  { title: 'Goodfellas', year: 1990 },\r\n  { title: 'The Matrix', year: 1999 },\r\n  { title: 'Seven Samurai', year: 1954 },\r\n  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },\r\n  { title: 'City of God', year: 2002 },\r\n  { title: 'Se7en', year: 1995 },\r\n  { title: 'The Silence of the Lambs', year: 1991 },\r\n  { title: \"It's a Wonderful Life\", year: 1946 },\r\n  { title: 'Life Is Beautiful', year: 1997 },\r\n  { title: 'The Usual Suspects', year: 1995 },\r\n  { title: 'Léon: The Professional', year: 1994 },\r\n  { title: 'Spirited Away', year: 2001 },\r\n  { title: 'Saving Private Ryan', year: 1998 },\r\n  { title: 'Once Upon a Time in the West', year: 1968 },\r\n  { title: 'American History X', year: 1998 },\r\n  { title: 'Interstellar', year: 2014 },\r\n  { title: 'Casablanca', year: 1942 },\r\n  { title: 'City Lights', year: 1931 },\r\n  { title: 'Psycho', year: 1960 },\r\n  { title: 'The Green Mile', year: 1999 },\r\n  { title: 'The Intouchables', year: 2011 },\r\n  { title: 'Modern Times', year: 1936 },\r\n  { title: 'Raiders of the Lost Ark', year: 1981 },\r\n  { title: 'Rear Window', year: 1954 },\r\n  { title: 'The Pianist', year: 2002 },\r\n  { title: 'The Departed', year: 2006 },\r\n  { title: 'Terminator 2: Judgment Day', year: 1991 },\r\n  { title: 'Back to the Future', year: 1985 },\r\n  { title: 'Whiplash', year: 2014 },\r\n  { title: 'Gladiator', year: 2000 },\r\n  { title: 'Memento', year: 2000 },\r\n  { title: 'The Prestige', year: 2006 },\r\n  { title: 'The Lion King', year: 1994 },\r\n  { title: 'Apocalypse Now', year: 1979 },\r\n  { title: 'Alien', year: 1979 },\r\n  { title: 'Sunset Boulevard', year: 1950 },\r\n  {\r\n    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',\r\n    year: 1964,\r\n  },\r\n  { title: 'The Great Dictator', year: 1940 },\r\n  { title: 'Cinema Paradiso', year: 1988 },\r\n  { title: 'The Lives of Others', year: 2006 },\r\n  { title: 'Grave of the Fireflies', year: 1988 },\r\n  { title: 'Paths of Glory', year: 1957 },\r\n  { title: 'Django Unchained', year: 2012 },\r\n  { title: 'The Shining', year: 1980 },\r\n  { title: 'WALL·E', year: 2008 },\r\n  { title: 'American Beauty', year: 1999 },\r\n  { title: 'The Dark Knight Rises', year: 2012 },\r\n  { title: 'Princess Mononoke', year: 1997 },\r\n  { title: 'Aliens', year: 1986 },\r\n  { title: 'Oldboy', year: 2003 },\r\n  { title: 'Once Upon a Time in America', year: 1984 },\r\n  { title: 'Witness for the Prosecution', year: 1957 },\r\n  { title: 'Das Boot', year: 1981 },\r\n  { title: 'Citizen Kane', year: 1941 },\r\n  { title: 'North by Northwest', year: 1959 },\r\n  { title: 'Vertigo', year: 1958 },\r\n  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },\r\n  { title: 'Reservoir Dogs', year: 1992 },\r\n  { title: 'Braveheart', year: 1995 },\r\n  { title: 'M', year: 1931 },\r\n  { title: 'Requiem for a Dream', year: 2000 },\r\n  { title: 'Amélie', year: 2001 },\r\n  { title: 'A Clockwork Orange', year: 1971 },\r\n  { title: 'Like Stars on Earth', year: 2007 },\r\n  { title: 'Taxi Driver', year: 1976 },\r\n  { title: 'Lawrence of Arabia', year: 1962 },\r\n  { title: 'Double Indemnity', year: 1944 },\r\n  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },\r\n  { title: 'Amadeus', year: 1984 },\r\n  { title: 'To Kill a Mockingbird', year: 1962 },\r\n  { title: 'Toy Story 3', year: 2010 },\r\n  { title: 'Logan', year: 2017 },\r\n  { title: 'Full Metal Jacket', year: 1987 },\r\n  { title: 'Dangal', year: 2016 },\r\n  { title: 'The Sting', year: 1973 },\r\n  { title: '2001: A Space Odyssey', year: 1968 },\r\n  { title: \"Singin' in the Rain\", year: 1952 },\r\n  { title: 'Toy Story', year: 1995 },\r\n  { title: 'Bicycle Thieves', year: 1948 },\r\n  { title: 'The Kid', year: 1921 },\r\n  { title: 'Inglourious Basterds', year: 2009 },\r\n  { title: 'Snatch', year: 2000 },\r\n  { title: '3 Idiots', year: 2009 },\r\n  { title: 'Monty Python and the Holy Grail', year: 1975 },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/FixedTags.txt":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/FixedTags.txt ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport Chip from '@material-ui/core/Chip';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\n\r\nexport default function FixedTags() {\r\n  const fixedOptions = [top100Films[6]];\r\n  const [value, setValue] = React.useState([...fixedOptions, top100Films[13]]);\r\n\r\n  return (\r\n    <Autocomplete\r\n      multiple\r\n      id=\"fixed-tags-demo\"\r\n      value={value}\r\n      onChange={(event, newValue) => {\r\n        setValue([...fixedOptions, ...newValue.filter(option => fixedOptions.indexOf(option) === -1)]);\r\n      }}\r\n      options={top100Films}\r\n      getOptionLabel={option => option.title}\r\n      renderTags={(tagValue, getTagProps) =>\r\n        tagValue.map((option, index) => (\r\n          <Chip label={option.title} {...getTagProps({ index })} disabled={fixedOptions.indexOf(option) !== -1} />\r\n        ))\r\n      }\r\n      style={{ width: 500 }}\r\n      renderInput={params => <TextField {...params} label=\"Fixed tag\" variant=\"outlined\" placeholder=\"Favorites\" />}\r\n    />\r\n  );\r\n}\r\n\r\n// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top\r\nconst top100Films = [\r\n  { title: 'The Shawshank Redemption', year: 1994 },\r\n  { title: 'The Godfather', year: 1972 },\r\n  { title: 'The Godfather: Part II', year: 1974 },\r\n  { title: 'The Dark Knight', year: 2008 },\r\n  { title: '12 Angry Men', year: 1957 },\r\n  { title: \"Schindler's List\", year: 1993 },\r\n  { title: 'Pulp Fiction', year: 1994 },\r\n  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },\r\n  { title: 'The Good, the Bad and the Ugly', year: 1966 },\r\n  { title: 'Fight Club', year: 1999 },\r\n  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },\r\n  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },\r\n  { title: 'Forrest Gump', year: 1994 },\r\n  { title: 'Inception', year: 2010 },\r\n  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },\r\n  { title: \"One Flew Over the Cuckoo's Nest\", year: 1975 },\r\n  { title: 'Goodfellas', year: 1990 },\r\n  { title: 'The Matrix', year: 1999 },\r\n  { title: 'Seven Samurai', year: 1954 },\r\n  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },\r\n  { title: 'City of God', year: 2002 },\r\n  { title: 'Se7en', year: 1995 },\r\n  { title: 'The Silence of the Lambs', year: 1991 },\r\n  { title: \"It's a Wonderful Life\", year: 1946 },\r\n  { title: 'Life Is Beautiful', year: 1997 },\r\n  { title: 'The Usual Suspects', year: 1995 },\r\n  { title: 'Léon: The Professional', year: 1994 },\r\n  { title: 'Spirited Away', year: 2001 },\r\n  { title: 'Saving Private Ryan', year: 1998 },\r\n  { title: 'Once Upon a Time in the West', year: 1968 },\r\n  { title: 'American History X', year: 1998 },\r\n  { title: 'Interstellar', year: 2014 },\r\n  { title: 'Casablanca', year: 1942 },\r\n  { title: 'City Lights', year: 1931 },\r\n  { title: 'Psycho', year: 1960 },\r\n  { title: 'The Green Mile', year: 1999 },\r\n  { title: 'The Intouchables', year: 2011 },\r\n  { title: 'Modern Times', year: 1936 },\r\n  { title: 'Raiders of the Lost Ark', year: 1981 },\r\n  { title: 'Rear Window', year: 1954 },\r\n  { title: 'The Pianist', year: 2002 },\r\n  { title: 'The Departed', year: 2006 },\r\n  { title: 'Terminator 2: Judgment Day', year: 1991 },\r\n  { title: 'Back to the Future', year: 1985 },\r\n  { title: 'Whiplash', year: 2014 },\r\n  { title: 'Gladiator', year: 2000 },\r\n  { title: 'Memento', year: 2000 },\r\n  { title: 'The Prestige', year: 2006 },\r\n  { title: 'The Lion King', year: 1994 },\r\n  { title: 'Apocalypse Now', year: 1979 },\r\n  { title: 'Alien', year: 1979 },\r\n  { title: 'Sunset Boulevard', year: 1950 },\r\n  {\r\n    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',\r\n    year: 1964,\r\n  },\r\n  { title: 'The Great Dictator', year: 1940 },\r\n  { title: 'Cinema Paradiso', year: 1988 },\r\n  { title: 'The Lives of Others', year: 2006 },\r\n  { title: 'Grave of the Fireflies', year: 1988 },\r\n  { title: 'Paths of Glory', year: 1957 },\r\n  { title: 'Django Unchained', year: 2012 },\r\n  { title: 'The Shining', year: 1980 },\r\n  { title: 'WALL·E', year: 2008 },\r\n  { title: 'American Beauty', year: 1999 },\r\n  { title: 'The Dark Knight Rises', year: 2012 },\r\n  { title: 'Princess Mononoke', year: 1997 },\r\n  { title: 'Aliens', year: 1986 },\r\n  { title: 'Oldboy', year: 2003 },\r\n  { title: 'Once Upon a Time in America', year: 1984 },\r\n  { title: 'Witness for the Prosecution', year: 1957 },\r\n  { title: 'Das Boot', year: 1981 },\r\n  { title: 'Citizen Kane', year: 1941 },\r\n  { title: 'North by Northwest', year: 1959 },\r\n  { title: 'Vertigo', year: 1958 },\r\n  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },\r\n  { title: 'Reservoir Dogs', year: 1992 },\r\n  { title: 'Braveheart', year: 1995 },\r\n  { title: 'M', year: 1931 },\r\n  { title: 'Requiem for a Dream', year: 2000 },\r\n  { title: 'Amélie', year: 2001 },\r\n  { title: 'A Clockwork Orange', year: 1971 },\r\n  { title: 'Like Stars on Earth', year: 2007 },\r\n  { title: 'Taxi Driver', year: 1976 },\r\n  { title: 'Lawrence of Arabia', year: 1962 },\r\n  { title: 'Double Indemnity', year: 1944 },\r\n  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },\r\n  { title: 'Amadeus', year: 1984 },\r\n  { title: 'To Kill a Mockingbird', year: 1962 },\r\n  { title: 'Toy Story 3', year: 2010 },\r\n  { title: 'Logan', year: 2017 },\r\n  { title: 'Full Metal Jacket', year: 1987 },\r\n  { title: 'Dangal', year: 2016 },\r\n  { title: 'The Sting', year: 1973 },\r\n  { title: '2001: A Space Odyssey', year: 1968 },\r\n  { title: \"Singin' in the Rain\", year: 1952 },\r\n  { title: 'Toy Story', year: 1995 },\r\n  { title: 'Bicycle Thieves', year: 1948 },\r\n  { title: 'The Kid', year: 1921 },\r\n  { title: 'Inglourious Basterds', year: 2009 },\r\n  { title: 'Snatch', year: 2000 },\r\n  { title: '3 Idiots', year: 2009 },\r\n  { title: 'Monty Python and the Holy Grail', year: 1975 },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/FreeSolo.txt":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/FreeSolo.txt ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\n\r\nexport default function FreeSolo() {\r\n  return (\r\n    <div style={{ width: 300 }}>\r\n      <Autocomplete\r\n        id=\"free-solo-demo\"\r\n        freeSolo\r\n        options={top100Films.map(option => option.title)}\r\n        renderInput={params => <TextField {...params} label=\"freeSolo\" margin=\"normal\" variant=\"outlined\" />}\r\n      />\r\n      <Autocomplete\r\n        freeSolo\r\n        id=\"free-solo-2-demo\"\r\n        disableClearable\r\n        options={top100Films.map(option => option.title)}\r\n        renderInput={params => (\r\n          <TextField\r\n            {...params}\r\n            label=\"Search input\"\r\n            margin=\"normal\"\r\n            variant=\"outlined\"\r\n            InputProps={{ ...params.InputProps, type: 'search' }}\r\n          />\r\n        )}\r\n      />\r\n    </div>\r\n  );\r\n}\r\n\r\n// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top\r\nconst top100Films = [\r\n  { title: 'The Shawshank Redemption', year: 1994 },\r\n  { title: 'The Godfather', year: 1972 },\r\n  { title: 'The Godfather: Part II', year: 1974 },\r\n  { title: 'The Dark Knight', year: 2008 },\r\n  { title: '12 Angry Men', year: 1957 },\r\n  { title: \"Schindler's List\", year: 1993 },\r\n  { title: 'Pulp Fiction', year: 1994 },\r\n  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },\r\n  { title: 'The Good, the Bad and the Ugly', year: 1966 },\r\n  { title: 'Fight Club', year: 1999 },\r\n  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },\r\n  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },\r\n  { title: 'Forrest Gump', year: 1994 },\r\n  { title: 'Inception', year: 2010 },\r\n  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },\r\n  { title: \"One Flew Over the Cuckoo's Nest\", year: 1975 },\r\n  { title: 'Goodfellas', year: 1990 },\r\n  { title: 'The Matrix', year: 1999 },\r\n  { title: 'Seven Samurai', year: 1954 },\r\n  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },\r\n  { title: 'City of God', year: 2002 },\r\n  { title: 'Se7en', year: 1995 },\r\n  { title: 'The Silence of the Lambs', year: 1991 },\r\n  { title: \"It's a Wonderful Life\", year: 1946 },\r\n  { title: 'Life Is Beautiful', year: 1997 },\r\n  { title: 'The Usual Suspects', year: 1995 },\r\n  { title: 'Léon: The Professional', year: 1994 },\r\n  { title: 'Spirited Away', year: 2001 },\r\n  { title: 'Saving Private Ryan', year: 1998 },\r\n  { title: 'Once Upon a Time in the West', year: 1968 },\r\n  { title: 'American History X', year: 1998 },\r\n  { title: 'Interstellar', year: 2014 },\r\n  { title: 'Casablanca', year: 1942 },\r\n  { title: 'City Lights', year: 1931 },\r\n  { title: 'Psycho', year: 1960 },\r\n  { title: 'The Green Mile', year: 1999 },\r\n  { title: 'The Intouchables', year: 2011 },\r\n  { title: 'Modern Times', year: 1936 },\r\n  { title: 'Raiders of the Lost Ark', year: 1981 },\r\n  { title: 'Rear Window', year: 1954 },\r\n  { title: 'The Pianist', year: 2002 },\r\n  { title: 'The Departed', year: 2006 },\r\n  { title: 'Terminator 2: Judgment Day', year: 1991 },\r\n  { title: 'Back to the Future', year: 1985 },\r\n  { title: 'Whiplash', year: 2014 },\r\n  { title: 'Gladiator', year: 2000 },\r\n  { title: 'Memento', year: 2000 },\r\n  { title: 'The Prestige', year: 2006 },\r\n  { title: 'The Lion King', year: 1994 },\r\n  { title: 'Apocalypse Now', year: 1979 },\r\n  { title: 'Alien', year: 1979 },\r\n  { title: 'Sunset Boulevard', year: 1950 },\r\n  {\r\n    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',\r\n    year: 1964,\r\n  },\r\n  { title: 'The Great Dictator', year: 1940 },\r\n  { title: 'Cinema Paradiso', year: 1988 },\r\n  { title: 'The Lives of Others', year: 2006 },\r\n  { title: 'Grave of the Fireflies', year: 1988 },\r\n  { title: 'Paths of Glory', year: 1957 },\r\n  { title: 'Django Unchained', year: 2012 },\r\n  { title: 'The Shining', year: 1980 },\r\n  { title: 'WALL·E', year: 2008 },\r\n  { title: 'American Beauty', year: 1999 },\r\n  { title: 'The Dark Knight Rises', year: 2012 },\r\n  { title: 'Princess Mononoke', year: 1997 },\r\n  { title: 'Aliens', year: 1986 },\r\n  { title: 'Oldboy', year: 2003 },\r\n  { title: 'Once Upon a Time in America', year: 1984 },\r\n  { title: 'Witness for the Prosecution', year: 1957 },\r\n  { title: 'Das Boot', year: 1981 },\r\n  { title: 'Citizen Kane', year: 1941 },\r\n  { title: 'North by Northwest', year: 1959 },\r\n  { title: 'Vertigo', year: 1958 },\r\n  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },\r\n  { title: 'Reservoir Dogs', year: 1992 },\r\n  { title: 'Braveheart', year: 1995 },\r\n  { title: 'M', year: 1931 },\r\n  { title: 'Requiem for a Dream', year: 2000 },\r\n  { title: 'Amélie', year: 2001 },\r\n  { title: 'A Clockwork Orange', year: 1971 },\r\n  { title: 'Like Stars on Earth', year: 2007 },\r\n  { title: 'Taxi Driver', year: 1976 },\r\n  { title: 'Lawrence of Arabia', year: 1962 },\r\n  { title: 'Double Indemnity', year: 1944 },\r\n  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },\r\n  { title: 'Amadeus', year: 1984 },\r\n  { title: 'To Kill a Mockingbird', year: 1962 },\r\n  { title: 'Toy Story 3', year: 2010 },\r\n  { title: 'Logan', year: 2017 },\r\n  { title: 'Full Metal Jacket', year: 1987 },\r\n  { title: 'Dangal', year: 2016 },\r\n  { title: 'The Sting', year: 1973 },\r\n  { title: '2001: A Space Odyssey', year: 1968 },\r\n  { title: \"Singin' in the Rain\", year: 1952 },\r\n  { title: 'Toy Story', year: 1995 },\r\n  { title: 'Bicycle Thieves', year: 1948 },\r\n  { title: 'The Kid', year: 1921 },\r\n  { title: 'Inglourious Basterds', year: 2009 },\r\n  { title: 'Snatch', year: 2000 },\r\n  { title: '3 Idiots', year: 2009 },\r\n  { title: 'Monty Python and the Holy Grail', year: 1975 },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/FreeSoloCreateOption.txt":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/FreeSoloCreateOption.txt ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';\r\n\r\nconst filter = createFilterOptions();\r\n\r\nexport default function FreeSoloCreateOption() {\r\n  const [value, setValue] = React.useState(null);\r\n\r\n  return (\r\n    <Autocomplete\r\n      value={value}\r\n      onChange={(event, newValue) => {\r\n        if (typeof newValue === 'string') {\r\n          setValue({\r\n            title: newValue,\r\n          });\r\n        } else if (newValue && newValue.inputValue) {\r\n          // Create a new value from the user input\r\n          setValue({\r\n            title: newValue.inputValue,\r\n          });\r\n        } else {\r\n          setValue(newValue);\r\n        }\r\n      }}\r\n      filterOptions={(options, params) => {\r\n        const filtered = filter(options, params);\r\n\r\n        // Suggest the creation of a new value\r\n        if (params.inputValue !== '') {\r\n          filtered.push({\r\n            inputValue: params.inputValue,\r\n            title: `Add \"${params.inputValue}\"`,\r\n          });\r\n        }\r\n\r\n        return filtered;\r\n      }}\r\n      selectOnFocus\r\n      clearOnBlur\r\n      handleHomeEndKeys\r\n      id=\"free-solo-with-text-demo\"\r\n      options={top100Films}\r\n      getOptionLabel={option => {\r\n        // Value selected with enter, right from the input\r\n        if (typeof option === 'string') {\r\n          return option;\r\n        }\r\n        // Add \"xxx\" option created dynamically\r\n        if (option.inputValue) {\r\n          return option.inputValue;\r\n        }\r\n        // Regular option\r\n        return option.title;\r\n      }}\r\n      renderOption={option => option.title}\r\n      style={{ width: 300 }}\r\n      freeSolo\r\n      renderInput={params => <TextField {...params} label=\"Free solo with text demo\" variant=\"outlined\" />}\r\n    />\r\n  );\r\n}\r\n\r\n// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top\r\nconst top100Films = [\r\n  { title: 'The Shawshank Redemption', year: 1994 },\r\n  { title: 'The Godfather', year: 1972 },\r\n  { title: 'The Godfather: Part II', year: 1974 },\r\n  { title: 'The Dark Knight', year: 2008 },\r\n  { title: '12 Angry Men', year: 1957 },\r\n  { title: \"Schindler's List\", year: 1993 },\r\n  { title: 'Pulp Fiction', year: 1994 },\r\n  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },\r\n  { title: 'The Good, the Bad and the Ugly', year: 1966 },\r\n  { title: 'Fight Club', year: 1999 },\r\n  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },\r\n  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },\r\n  { title: 'Forrest Gump', year: 1994 },\r\n  { title: 'Inception', year: 2010 },\r\n  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },\r\n  { title: \"One Flew Over the Cuckoo's Nest\", year: 1975 },\r\n  { title: 'Goodfellas', year: 1990 },\r\n  { title: 'The Matrix', year: 1999 },\r\n  { title: 'Seven Samurai', year: 1954 },\r\n  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },\r\n  { title: 'City of God', year: 2002 },\r\n  { title: 'Se7en', year: 1995 },\r\n  { title: 'The Silence of the Lambs', year: 1991 },\r\n  { title: \"It's a Wonderful Life\", year: 1946 },\r\n  { title: 'Life Is Beautiful', year: 1997 },\r\n  { title: 'The Usual Suspects', year: 1995 },\r\n  { title: 'Léon: The Professional', year: 1994 },\r\n  { title: 'Spirited Away', year: 2001 },\r\n  { title: 'Saving Private Ryan', year: 1998 },\r\n  { title: 'Once Upon a Time in the West', year: 1968 },\r\n  { title: 'American History X', year: 1998 },\r\n  { title: 'Interstellar', year: 2014 },\r\n  { title: 'Casablanca', year: 1942 },\r\n  { title: 'City Lights', year: 1931 },\r\n  { title: 'Psycho', year: 1960 },\r\n  { title: 'The Green Mile', year: 1999 },\r\n  { title: 'The Intouchables', year: 2011 },\r\n  { title: 'Modern Times', year: 1936 },\r\n  { title: 'Raiders of the Lost Ark', year: 1981 },\r\n  { title: 'Rear Window', year: 1954 },\r\n  { title: 'The Pianist', year: 2002 },\r\n  { title: 'The Departed', year: 2006 },\r\n  { title: 'Terminator 2: Judgment Day', year: 1991 },\r\n  { title: 'Back to the Future', year: 1985 },\r\n  { title: 'Whiplash', year: 2014 },\r\n  { title: 'Gladiator', year: 2000 },\r\n  { title: 'Memento', year: 2000 },\r\n  { title: 'The Prestige', year: 2006 },\r\n  { title: 'The Lion King', year: 1994 },\r\n  { title: 'Apocalypse Now', year: 1979 },\r\n  { title: 'Alien', year: 1979 },\r\n  { title: 'Sunset Boulevard', year: 1950 },\r\n  {\r\n    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',\r\n    year: 1964,\r\n  },\r\n  { title: 'The Great Dictator', year: 1940 },\r\n  { title: 'Cinema Paradiso', year: 1988 },\r\n  { title: 'The Lives of Others', year: 2006 },\r\n  { title: 'Grave of the Fireflies', year: 1988 },\r\n  { title: 'Paths of Glory', year: 1957 },\r\n  { title: 'Django Unchained', year: 2012 },\r\n  { title: 'The Shining', year: 1980 },\r\n  { title: 'WALL·E', year: 2008 },\r\n  { title: 'American Beauty', year: 1999 },\r\n  { title: 'The Dark Knight Rises', year: 2012 },\r\n  { title: 'Princess Mononoke', year: 1997 },\r\n  { title: 'Aliens', year: 1986 },\r\n  { title: 'Oldboy', year: 2003 },\r\n  { title: 'Once Upon a Time in America', year: 1984 },\r\n  { title: 'Witness for the Prosecution', year: 1957 },\r\n  { title: 'Das Boot', year: 1981 },\r\n  { title: 'Citizen Kane', year: 1941 },\r\n  { title: 'North by Northwest', year: 1959 },\r\n  { title: 'Vertigo', year: 1958 },\r\n  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },\r\n  { title: 'Reservoir Dogs', year: 1992 },\r\n  { title: 'Braveheart', year: 1995 },\r\n  { title: 'M', year: 1931 },\r\n  { title: 'Requiem for a Dream', year: 2000 },\r\n  { title: 'Amélie', year: 2001 },\r\n  { title: 'A Clockwork Orange', year: 1971 },\r\n  { title: 'Like Stars on Earth', year: 2007 },\r\n  { title: 'Taxi Driver', year: 1976 },\r\n  { title: 'Lawrence of Arabia', year: 1962 },\r\n  { title: 'Double Indemnity', year: 1944 },\r\n  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },\r\n  { title: 'Amadeus', year: 1984 },\r\n  { title: 'To Kill a Mockingbird', year: 1962 },\r\n  { title: 'Toy Story 3', year: 2010 },\r\n  { title: 'Logan', year: 2017 },\r\n  { title: 'Full Metal Jacket', year: 1987 },\r\n  { title: 'Dangal', year: 2016 },\r\n  { title: 'The Sting', year: 1973 },\r\n  { title: '2001: A Space Odyssey', year: 1968 },\r\n  { title: \"Singin' in the Rain\", year: 1952 },\r\n  { title: 'Toy Story', year: 1995 },\r\n  { title: 'Bicycle Thieves', year: 1948 },\r\n  { title: 'The Kid', year: 1921 },\r\n  { title: 'Inglourious Basterds', year: 2009 },\r\n  { title: 'Snatch', year: 2000 },\r\n  { title: '3 Idiots', year: 2009 },\r\n  { title: 'Monty Python and the Holy Grail', year: 1975 },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/FreeSoloCreateOptionDialog.txt":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/FreeSoloCreateOptionDialog.txt ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Dialog from '@material-ui/core/Dialog';\r\nimport DialogTitle from '@material-ui/core/DialogTitle';\r\nimport DialogContent from '@material-ui/core/DialogContent';\r\nimport DialogContentText from '@material-ui/core/DialogContentText';\r\nimport DialogActions from '@material-ui/core/DialogActions';\r\nimport Button from '@material-ui/core/Button';\r\nimport Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';\r\n\r\nconst filter = createFilterOptions();\r\n\r\nexport default function FreeSoloCreateOptionDialog() {\r\n  const [value, setValue] = React.useState(null);\r\n  const [open, toggleOpen] = React.useState(false);\r\n\r\n  const handleClose = () => {\r\n    setDialogValue({\r\n      title: '',\r\n      year: '',\r\n    });\r\n\r\n    toggleOpen(false);\r\n  };\r\n\r\n  const [dialogValue, setDialogValue] = React.useState({\r\n    title: '',\r\n    year: '',\r\n  });\r\n\r\n  const handleSubmit = event => {\r\n    event.preventDefault();\r\n    setValue({\r\n      title: dialogValue.title,\r\n      year: parseInt(dialogValue.year, 10),\r\n    });\r\n\r\n    handleClose();\r\n  };\r\n\r\n  return (\r\n    <React.Fragment>\r\n      <Autocomplete\r\n        value={value}\r\n        onChange={(event, newValue) => {\r\n          if (typeof newValue === 'string') {\r\n            // timeout to avoid instant validation of the dialog's form.\r\n            setTimeout(() => {\r\n              toggleOpen(true);\r\n              setDialogValue({\r\n                title: newValue,\r\n                year: '',\r\n              });\r\n            });\r\n          } else if (newValue && newValue.inputValue) {\r\n            toggleOpen(true);\r\n            setDialogValue({\r\n              title: newValue.inputValue,\r\n              year: '',\r\n            });\r\n          } else {\r\n            setValue(newValue);\r\n          }\r\n        }}\r\n        filterOptions={(options, params) => {\r\n          const filtered = filter(options, params);\r\n\r\n          if (params.inputValue !== '') {\r\n            filtered.push({\r\n              inputValue: params.inputValue,\r\n              title: `Add \"${params.inputValue}\"`,\r\n            });\r\n          }\r\n\r\n          return filtered;\r\n        }}\r\n        id=\"free-solo-dialog-demo\"\r\n        options={top100Films}\r\n        getOptionLabel={option => {\r\n          // e.g value selected with enter, right from the input\r\n          if (typeof option === 'string') {\r\n            return option;\r\n          }\r\n          if (option.inputValue) {\r\n            return option.inputValue;\r\n          }\r\n          return option.title;\r\n        }}\r\n        selectOnFocus\r\n        clearOnBlur\r\n        handleHomeEndKeys\r\n        renderOption={option => option.title}\r\n        style={{ width: 300 }}\r\n        freeSolo\r\n        renderInput={params => <TextField {...params} label=\"Free solo dialog\" variant=\"outlined\" />}\r\n      />\r\n      <Dialog open={open} onClose={handleClose} aria-labelledby=\"form-dialog-title\">\r\n        <form onSubmit={handleSubmit}>\r\n          <DialogTitle id=\"form-dialog-title\">Add a new film</DialogTitle>\r\n          <DialogContent>\r\n            <DialogContentText>Did you miss any film in our list? Please, add it!</DialogContentText>\r\n            <TextField\r\n              autoFocus\r\n              margin=\"dense\"\r\n              id=\"name\"\r\n              value={dialogValue.title}\r\n              onChange={event => setDialogValue({ ...dialogValue, title: event.target.value })}\r\n              label=\"title\"\r\n              type=\"text\"\r\n            />\r\n            <TextField\r\n              margin=\"dense\"\r\n              id=\"name\"\r\n              value={dialogValue.year}\r\n              onChange={event => setDialogValue({ ...dialogValue, year: event.target.value })}\r\n              label=\"year\"\r\n              type=\"number\"\r\n            />\r\n          </DialogContent>\r\n          <DialogActions>\r\n            <Button onClick={handleClose} color=\"primary\">\r\n              Cancel\r\n            </Button>\r\n            <Button type=\"submit\" color=\"primary\">\r\n              Add\r\n            </Button>\r\n          </DialogActions>\r\n        </form>\r\n      </Dialog>\r\n    </React.Fragment>\r\n  );\r\n}\r\n\r\n// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top\r\nconst top100Films = [\r\n  { title: 'The Shawshank Redemption', year: 1994 },\r\n  { title: 'The Godfather', year: 1972 },\r\n  { title: 'The Godfather: Part II', year: 1974 },\r\n  { title: 'The Dark Knight', year: 2008 },\r\n  { title: '12 Angry Men', year: 1957 },\r\n  { title: \"Schindler's List\", year: 1993 },\r\n  { title: 'Pulp Fiction', year: 1994 },\r\n  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },\r\n  { title: 'The Good, the Bad and the Ugly', year: 1966 },\r\n  { title: 'Fight Club', year: 1999 },\r\n  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },\r\n  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },\r\n  { title: 'Forrest Gump', year: 1994 },\r\n  { title: 'Inception', year: 2010 },\r\n  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },\r\n  { title: \"One Flew Over the Cuckoo's Nest\", year: 1975 },\r\n  { title: 'Goodfellas', year: 1990 },\r\n  { title: 'The Matrix', year: 1999 },\r\n  { title: 'Seven Samurai', year: 1954 },\r\n  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },\r\n  { title: 'City of God', year: 2002 },\r\n  { title: 'Se7en', year: 1995 },\r\n  { title: 'The Silence of the Lambs', year: 1991 },\r\n  { title: \"It's a Wonderful Life\", year: 1946 },\r\n  { title: 'Life Is Beautiful', year: 1997 },\r\n  { title: 'The Usual Suspects', year: 1995 },\r\n  { title: 'Léon: The Professional', year: 1994 },\r\n  { title: 'Spirited Away', year: 2001 },\r\n  { title: 'Saving Private Ryan', year: 1998 },\r\n  { title: 'Once Upon a Time in the West', year: 1968 },\r\n  { title: 'American History X', year: 1998 },\r\n  { title: 'Interstellar', year: 2014 },\r\n  { title: 'Casablanca', year: 1942 },\r\n  { title: 'City Lights', year: 1931 },\r\n  { title: 'Psycho', year: 1960 },\r\n  { title: 'The Green Mile', year: 1999 },\r\n  { title: 'The Intouchables', year: 2011 },\r\n  { title: 'Modern Times', year: 1936 },\r\n  { title: 'Raiders of the Lost Ark', year: 1981 },\r\n  { title: 'Rear Window', year: 1954 },\r\n  { title: 'The Pianist', year: 2002 },\r\n  { title: 'The Departed', year: 2006 },\r\n  { title: 'Terminator 2: Judgment Day', year: 1991 },\r\n  { title: 'Back to the Future', year: 1985 },\r\n  { title: 'Whiplash', year: 2014 },\r\n  { title: 'Gladiator', year: 2000 },\r\n  { title: 'Memento', year: 2000 },\r\n  { title: 'The Prestige', year: 2006 },\r\n  { title: 'The Lion King', year: 1994 },\r\n  { title: 'Apocalypse Now', year: 1979 },\r\n  { title: 'Alien', year: 1979 },\r\n  { title: 'Sunset Boulevard', year: 1950 },\r\n  {\r\n    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',\r\n    year: 1964,\r\n  },\r\n  { title: 'The Great Dictator', year: 1940 },\r\n  { title: 'Cinema Paradiso', year: 1988 },\r\n  { title: 'The Lives of Others', year: 2006 },\r\n  { title: 'Grave of the Fireflies', year: 1988 },\r\n  { title: 'Paths of Glory', year: 1957 },\r\n  { title: 'Django Unchained', year: 2012 },\r\n  { title: 'The Shining', year: 1980 },\r\n  { title: 'WALL·E', year: 2008 },\r\n  { title: 'American Beauty', year: 1999 },\r\n  { title: 'The Dark Knight Rises', year: 2012 },\r\n  { title: 'Princess Mononoke', year: 1997 },\r\n  { title: 'Aliens', year: 1986 },\r\n  { title: 'Oldboy', year: 2003 },\r\n  { title: 'Once Upon a Time in America', year: 1984 },\r\n  { title: 'Witness for the Prosecution', year: 1957 },\r\n  { title: 'Das Boot', year: 1981 },\r\n  { title: 'Citizen Kane', year: 1941 },\r\n  { title: 'North by Northwest', year: 1959 },\r\n  { title: 'Vertigo', year: 1958 },\r\n  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },\r\n  { title: 'Reservoir Dogs', year: 1992 },\r\n  { title: 'Braveheart', year: 1995 },\r\n  { title: 'M', year: 1931 },\r\n  { title: 'Requiem for a Dream', year: 2000 },\r\n  { title: 'Amélie', year: 2001 },\r\n  { title: 'A Clockwork Orange', year: 1971 },\r\n  { title: 'Like Stars on Earth', year: 2007 },\r\n  { title: 'Taxi Driver', year: 1976 },\r\n  { title: 'Lawrence of Arabia', year: 1962 },\r\n  { title: 'Double Indemnity', year: 1944 },\r\n  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },\r\n  { title: 'Amadeus', year: 1984 },\r\n  { title: 'To Kill a Mockingbird', year: 1962 },\r\n  { title: 'Toy Story 3', year: 2010 },\r\n  { title: 'Logan', year: 2017 },\r\n  { title: 'Full Metal Jacket', year: 1987 },\r\n  { title: 'Dangal', year: 2016 },\r\n  { title: 'The Sting', year: 1973 },\r\n  { title: '2001: A Space Odyssey', year: 1968 },\r\n  { title: \"Singin' in the Rain\", year: 1952 },\r\n  { title: 'Toy Story', year: 1995 },\r\n  { title: 'Bicycle Thieves', year: 1948 },\r\n  { title: 'The Kid', year: 1921 },\r\n  { title: 'Inglourious Basterds', year: 2009 },\r\n  { title: 'Snatch', year: 2000 },\r\n  { title: '3 Idiots', year: 2009 },\r\n  { title: 'Monty Python and the Holy Grail', year: 1975 },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/GitHubLabel.txt":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/GitHubLabel.txt ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport { useTheme, alpha, makeStyles } from '@material-ui/core/styles';\r\nimport Popper from '@material-ui/core/Popper';\r\nimport SettingsIcon from '@material-ui/icons/Settings';\r\nimport CloseIcon from '@material-ui/icons/Close';\r\nimport DoneIcon from '@material-ui/icons/Done';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\nimport ButtonBase from '@material-ui/core/ButtonBase';\r\nimport InputBase from '@material-ui/core/InputBase';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    width: 221,\r\n    fontSize: 13,\r\n  },\r\n  button: {\r\n    fontSize: 13,\r\n    width: '100%',\r\n    textAlign: 'left',\r\n    paddingBottom: 8,\r\n    color: '#586069',\r\n    fontWeight: 600,\r\n    '&:hover,&:focus': {\r\n      color: '#0366d6',\r\n    },\r\n    '& span': {\r\n      width: '100%',\r\n    },\r\n    '& svg': {\r\n      width: 16,\r\n      height: 16,\r\n    },\r\n  },\r\n  tag: {\r\n    marginTop: 3,\r\n    height: 20,\r\n    padding: '.15em 4px',\r\n    fontWeight: 600,\r\n    lineHeight: '15px',\r\n    borderRadius: 2,\r\n  },\r\n  popper: {\r\n    border: '1px solid rgba(27,31,35,.15)',\r\n    boxShadow: '0 3px 12px rgba(27,31,35,.15)',\r\n    borderRadius: 3,\r\n    width: 300,\r\n    zIndex: 1,\r\n    fontSize: 13,\r\n    color: '#586069',\r\n    backgroundColor: '#f6f8fa',\r\n  },\r\n  header: {\r\n    borderBottom: '1px solid #e1e4e8',\r\n    padding: '8px 10px',\r\n    fontWeight: 600,\r\n  },\r\n  inputBase: {\r\n    padding: 10,\r\n    width: '100%',\r\n    borderBottom: '1px solid #dfe2e5',\r\n    '& input': {\r\n      borderRadius: 4,\r\n      backgroundColor: theme.palette.background.paper,\r\n      padding: 8,\r\n      transition: theme.transitions.create(['border-color', 'box-shadow']),\r\n      border: '1px solid #ced4da',\r\n      fontSize: 14,\r\n      '&:focus': {\r\n        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,\r\n        borderColor: theme.palette.primary.main,\r\n      },\r\n    },\r\n  },\r\n  paper: {\r\n    boxShadow: 'none',\r\n    margin: 0,\r\n    color: '#586069',\r\n    fontSize: 13,\r\n  },\r\n  option: {\r\n    minHeight: 'auto',\r\n    alignItems: 'flex-start',\r\n    padding: 8,\r\n    '&[aria-selected=\"true\"]': {\r\n      backgroundColor: 'transparent',\r\n    },\r\n    '&[data-focus=\"true\"]': {\r\n      backgroundColor: theme.palette.action.hover,\r\n    },\r\n  },\r\n  popperDisablePortal: {\r\n    position: 'relative',\r\n  },\r\n  iconSelected: {\r\n    width: 17,\r\n    height: 17,\r\n    marginRight: 5,\r\n    marginLeft: -2,\r\n  },\r\n  color: {\r\n    width: 14,\r\n    height: 14,\r\n    flexShrink: 0,\r\n    borderRadius: 3,\r\n    marginRight: 8,\r\n    marginTop: 2,\r\n  },\r\n  text: {\r\n    flexGrow: 1,\r\n  },\r\n  close: {\r\n    opacity: 0.6,\r\n    width: 18,\r\n    height: 18,\r\n  },\r\n}));\r\n\r\nexport default function GitHubLabel() {\r\n  const classes = useStyles();\r\n  const [anchorEl, setAnchorEl] = React.useState(null);\r\n  const [value, setValue] = React.useState([labels[1], labels[11]]);\r\n  const [pendingValue, setPendingValue] = React.useState([]);\r\n  const theme = useTheme();\r\n\r\n  const handleClick = event => {\r\n    setPendingValue(value);\r\n    setAnchorEl(event.currentTarget);\r\n  };\r\n\r\n  const handleClose = (event, reason) => {\r\n    if (reason === 'toggleInput') {\r\n      return;\r\n    }\r\n    setValue(pendingValue);\r\n    if (anchorEl) {\r\n      anchorEl.focus();\r\n    }\r\n    setAnchorEl(null);\r\n  };\r\n\r\n  const open = Boolean(anchorEl);\r\n  const id = open ? 'github-label' : undefined;\r\n\r\n  return (\r\n    <React.Fragment>\r\n      <div className={classes.root}>\r\n        <ButtonBase disableRipple className={classes.button} aria-describedby={id} onClick={handleClick}>\r\n          <span>Labels</span>\r\n          <SettingsIcon />\r\n        </ButtonBase>\r\n        {value.map(label => (\r\n          <div\r\n            key={label.name}\r\n            className={classes.tag}\r\n            style={{\r\n              backgroundColor: label.color,\r\n              color: theme.palette.getContrastText(label.color),\r\n            }}>\r\n            {label.name}\r\n          </div>\r\n        ))}\r\n      </div>\r\n      <Popper id={id} open={open} anchorEl={anchorEl} placement=\"bottom-start\" className={classes.popper}>\r\n        <div className={classes.header}>Apply labels to this pull request</div>\r\n        <Autocomplete\r\n          open\r\n          onClose={handleClose}\r\n          multiple\r\n          classes={{\r\n            paper: classes.paper,\r\n            option: classes.option,\r\n            popperDisablePortal: classes.popperDisablePortal,\r\n          }}\r\n          value={pendingValue}\r\n          onChange={(event, newValue) => {\r\n            setPendingValue(newValue);\r\n          }}\r\n          disableCloseOnSelect\r\n          disablePortal\r\n          renderTags={() => null}\r\n          noOptionsText=\"No labels\"\r\n          renderOption={(option, { selected }) => (\r\n            <React.Fragment>\r\n              <DoneIcon className={classes.iconSelected} style={{ visibility: selected ? 'visible' : 'hidden' }} />\r\n              <span className={classes.color} style={{ backgroundColor: option.color }} />\r\n              <div className={classes.text}>\r\n                {option.name}\r\n                <br />\r\n                {option.description}\r\n              </div>\r\n              <CloseIcon className={classes.close} style={{ visibility: selected ? 'visible' : 'hidden' }} />\r\n            </React.Fragment>\r\n          )}\r\n          options={[...labels].sort((a, b) => {\r\n            // Display the selected labels first.\r\n            let ai = value.indexOf(a);\r\n            ai = ai === -1 ? value.length + labels.indexOf(a) : ai;\r\n            let bi = value.indexOf(b);\r\n            bi = bi === -1 ? value.length + labels.indexOf(b) : bi;\r\n            return ai - bi;\r\n          })}\r\n          getOptionLabel={option => option.name}\r\n          renderInput={params => (\r\n            <InputBase ref={params.InputProps.ref} inputProps={params.inputProps} autoFocus className={classes.inputBase} />\r\n          )}\r\n        />\r\n      </Popper>\r\n    </React.Fragment>\r\n  );\r\n}\r\n\r\n// From https://github.com/abdonrd/github-labels\r\nconst labels = [\r\n  {\r\n    name: 'good first issue',\r\n    color: '#7057ff',\r\n    description: 'Good for newcomers',\r\n  },\r\n  {\r\n    name: 'help wanted',\r\n    color: '#008672',\r\n    description: 'Extra attention is needed',\r\n  },\r\n  {\r\n    name: 'priority: critical',\r\n    color: '#b60205',\r\n    description: '',\r\n  },\r\n  {\r\n    name: 'priority: high',\r\n    color: '#d93f0b',\r\n    description: '',\r\n  },\r\n  {\r\n    name: 'priority: low',\r\n    color: '#0e8a16',\r\n    description: '',\r\n  },\r\n  {\r\n    name: 'priority: medium',\r\n    color: '#fbca04',\r\n    description: '',\r\n  },\r\n  {\r\n    name: \"status: can't reproduce\",\r\n    color: '#fec1c1',\r\n    description: '',\r\n  },\r\n  {\r\n    name: 'status: confirmed',\r\n    color: '#215cea',\r\n    description: '',\r\n  },\r\n  {\r\n    name: 'status: duplicate',\r\n    color: '#cfd3d7',\r\n    description: 'This issue or pull request already exists',\r\n  },\r\n  {\r\n    name: 'status: needs information',\r\n    color: '#fef2c0',\r\n    description: '',\r\n  },\r\n  {\r\n    name: 'status: wont do/fix',\r\n    color: '#eeeeee',\r\n    description: 'This will not be worked on',\r\n  },\r\n  {\r\n    name: 'type: bug',\r\n    color: '#d73a4a',\r\n    description: \"Something isn't working\",\r\n  },\r\n  {\r\n    name: 'type: discussion',\r\n    color: '#d4c5f9',\r\n    description: '',\r\n  },\r\n  {\r\n    name: 'type: documentation',\r\n    color: '#006b75',\r\n    description: '',\r\n  },\r\n  {\r\n    name: 'type: enhancement',\r\n    color: '#84b6eb',\r\n    description: '',\r\n  },\r\n  {\r\n    name: 'type: epic',\r\n    color: '#3e4b9e',\r\n    description: 'A theme of work that contain sub-tasks',\r\n  },\r\n  {\r\n    name: 'type: feature request',\r\n    color: '#fbca04',\r\n    description: 'New feature or request',\r\n  },\r\n  {\r\n    name: 'type: question',\r\n    color: '#d876e3',\r\n    description: 'Further information is requested',\r\n  },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/GoogleMaps.txt":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/GoogleMaps.txt ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\nimport LocationOnIcon from '@material-ui/icons/LocationOn';\r\nimport Grid from '@material-ui/core/Grid';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport parse from 'autosuggest-highlight/parse';\r\nimport throttle from 'lodash/throttle';\r\n\r\nfunction loadScript(src, position, id) {\r\n  if (!position) {\r\n    return;\r\n  }\r\n\r\n  const script = document.createElement('script');\r\n  script.setAttribute('async', '');\r\n  script.setAttribute('id', id);\r\n  script.src = src;\r\n  position.appendChild(script);\r\n}\r\n\r\nconst autocompleteService = { current: null };\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  icon: {\r\n    color: theme.palette.text.secondary,\r\n    marginRight: theme.spacing(2),\r\n  },\r\n}));\r\n\r\nexport default function GoogleMaps() {\r\n  const classes = useStyles();\r\n  const [value, setValue] = React.useState(null);\r\n  const [inputValue, setInputValue] = React.useState('');\r\n  const [options, setOptions] = React.useState([]);\r\n  const loaded = React.useRef(false);\r\n\r\n  if (typeof window !== 'undefined' && !loaded.current) {\r\n    if (!document.querySelector('#google-maps')) {\r\n      loadScript(\r\n        'https://maps.googleapis.com/maps/api/js?key=AIzaSyBwRp1e12ec1vOTtGiA4fcCt2sCUS78UYc&libraries=places',\r\n        document.querySelector('head'),\r\n        'google-maps',\r\n      );\r\n    }\r\n\r\n    loaded.current = true;\r\n  }\r\n\r\n  const fetch = React.useMemo(\r\n    () =>\r\n      throttle((request, callback) => {\r\n        autocompleteService.current.getPlacePredictions(request, callback);\r\n      }, 200),\r\n    [],\r\n  );\r\n\r\n  React.useEffect(() => {\r\n    let active = true;\r\n\r\n    if (!autocompleteService.current && window.google) {\r\n      autocompleteService.current = new window.google.maps.places.AutocompleteService();\r\n    }\r\n    if (!autocompleteService.current) {\r\n      return undefined;\r\n    }\r\n\r\n    if (inputValue === '') {\r\n      setOptions(value ? [value] : []);\r\n      return undefined;\r\n    }\r\n\r\n    fetch({ input: inputValue }, results => {\r\n      if (active) {\r\n        let newOptions = [];\r\n\r\n        if (value) {\r\n          newOptions = [value];\r\n        }\r\n\r\n        if (results) {\r\n          newOptions = [...newOptions, ...results];\r\n        }\r\n\r\n        setOptions(newOptions);\r\n      }\r\n    });\r\n\r\n    return () => {\r\n      active = false;\r\n    };\r\n  }, [value, inputValue, fetch]);\r\n\r\n  return (\r\n    <Autocomplete\r\n      id=\"google-map-demo\"\r\n      style={{ width: 300 }}\r\n      getOptionLabel={option => (typeof option === 'string' ? option : option.description)}\r\n      filterOptions={x => x}\r\n      options={options}\r\n      autoComplete\r\n      includeInputInList\r\n      filterSelectedOptions\r\n      value={value}\r\n      onChange={(event, newValue) => {\r\n        setOptions(newValue ? [newValue, ...options] : options);\r\n        setValue(newValue);\r\n      }}\r\n      onInputChange={(event, newInputValue) => {\r\n        setInputValue(newInputValue);\r\n      }}\r\n      renderInput={params => <TextField {...params} label=\"Add a location\" variant=\"outlined\" fullWidth />}\r\n      renderOption={option => {\r\n        const matches = option.structured_formatting.main_text_matched_substrings;\r\n        const parts = parse(\r\n          option.structured_formatting.main_text,\r\n          matches.map(match => [match.offset, match.offset + match.length]),\r\n        );\r\n\r\n        return (\r\n          <Grid container alignItems=\"center\">\r\n            <Grid item>\r\n              <LocationOnIcon className={classes.icon} />\r\n            </Grid>\r\n            <Grid item xs>\r\n              {parts.map((part, index) => (\r\n                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>\r\n                  {part.text}\r\n                </span>\r\n              ))}\r\n\r\n              <Typography variant=\"body2\" color=\"textSecondary\">\r\n                {option.structured_formatting.secondary_text}\r\n              </Typography>\r\n            </Grid>\r\n          </Grid>\r\n        );\r\n      }}\r\n    />\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Grouped.txt":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Grouped.txt ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\n\r\nexport default function Grouped() {\r\n  const options = top100Films.map(option => {\r\n    const firstLetter = option.title[0].toUpperCase();\r\n    return {\r\n      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,\r\n      ...option,\r\n    };\r\n  });\r\n\r\n  return (\r\n    <Autocomplete\r\n      id=\"grouped-demo\"\r\n      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}\r\n      groupBy={option => option.firstLetter}\r\n      getOptionLabel={option => option.title}\r\n      style={{ width: 300 }}\r\n      renderInput={params => <TextField {...params} label=\"With categories\" variant=\"outlined\" />}\r\n    />\r\n  );\r\n}\r\n\r\n// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top\r\nconst top100Films = [\r\n  { title: 'The Shawshank Redemption', year: 1994 },\r\n  { title: 'The Godfather', year: 1972 },\r\n  { title: 'The Godfather: Part II', year: 1974 },\r\n  { title: 'The Dark Knight', year: 2008 },\r\n  { title: '12 Angry Men', year: 1957 },\r\n  { title: \"Schindler's List\", year: 1993 },\r\n  { title: 'Pulp Fiction', year: 1994 },\r\n  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },\r\n  { title: 'The Good, the Bad and the Ugly', year: 1966 },\r\n  { title: 'Fight Club', year: 1999 },\r\n  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },\r\n  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },\r\n  { title: 'Forrest Gump', year: 1994 },\r\n  { title: 'Inception', year: 2010 },\r\n  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },\r\n  { title: \"One Flew Over the Cuckoo's Nest\", year: 1975 },\r\n  { title: 'Goodfellas', year: 1990 },\r\n  { title: 'The Matrix', year: 1999 },\r\n  { title: 'Seven Samurai', year: 1954 },\r\n  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },\r\n  { title: 'City of God', year: 2002 },\r\n  { title: 'Se7en', year: 1995 },\r\n  { title: 'The Silence of the Lambs', year: 1991 },\r\n  { title: \"It's a Wonderful Life\", year: 1946 },\r\n  { title: 'Life Is Beautiful', year: 1997 },\r\n  { title: 'The Usual Suspects', year: 1995 },\r\n  { title: 'Léon: The Professional', year: 1994 },\r\n  { title: 'Spirited Away', year: 2001 },\r\n  { title: 'Saving Private Ryan', year: 1998 },\r\n  { title: 'Once Upon a Time in the West', year: 1968 },\r\n  { title: 'American History X', year: 1998 },\r\n  { title: 'Interstellar', year: 2014 },\r\n  { title: 'Casablanca', year: 1942 },\r\n  { title: 'City Lights', year: 1931 },\r\n  { title: 'Psycho', year: 1960 },\r\n  { title: 'The Green Mile', year: 1999 },\r\n  { title: 'The Intouchables', year: 2011 },\r\n  { title: 'Modern Times', year: 1936 },\r\n  { title: 'Raiders of the Lost Ark', year: 1981 },\r\n  { title: 'Rear Window', year: 1954 },\r\n  { title: 'The Pianist', year: 2002 },\r\n  { title: 'The Departed', year: 2006 },\r\n  { title: 'Terminator 2: Judgment Day', year: 1991 },\r\n  { title: 'Back to the Future', year: 1985 },\r\n  { title: 'Whiplash', year: 2014 },\r\n  { title: 'Gladiator', year: 2000 },\r\n  { title: 'Memento', year: 2000 },\r\n  { title: 'The Prestige', year: 2006 },\r\n  { title: 'The Lion King', year: 1994 },\r\n  { title: 'Apocalypse Now', year: 1979 },\r\n  { title: 'Alien', year: 1979 },\r\n  { title: 'Sunset Boulevard', year: 1950 },\r\n  {\r\n    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',\r\n    year: 1964,\r\n  },\r\n  { title: 'The Great Dictator', year: 1940 },\r\n  { title: 'Cinema Paradiso', year: 1988 },\r\n  { title: 'The Lives of Others', year: 2006 },\r\n  { title: 'Grave of the Fireflies', year: 1988 },\r\n  { title: 'Paths of Glory', year: 1957 },\r\n  { title: 'Django Unchained', year: 2012 },\r\n  { title: 'The Shining', year: 1980 },\r\n  { title: 'WALL·E', year: 2008 },\r\n  { title: 'American Beauty', year: 1999 },\r\n  { title: 'The Dark Knight Rises', year: 2012 },\r\n  { title: 'Princess Mononoke', year: 1997 },\r\n  { title: 'Aliens', year: 1986 },\r\n  { title: 'Oldboy', year: 2003 },\r\n  { title: 'Once Upon a Time in America', year: 1984 },\r\n  { title: 'Witness for the Prosecution', year: 1957 },\r\n  { title: 'Das Boot', year: 1981 },\r\n  { title: 'Citizen Kane', year: 1941 },\r\n  { title: 'North by Northwest', year: 1959 },\r\n  { title: 'Vertigo', year: 1958 },\r\n  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },\r\n  { title: 'Reservoir Dogs', year: 1992 },\r\n  { title: 'Braveheart', year: 1995 },\r\n  { title: 'M', year: 1931 },\r\n  { title: 'Requiem for a Dream', year: 2000 },\r\n  { title: 'Amélie', year: 2001 },\r\n  { title: 'A Clockwork Orange', year: 1971 },\r\n  { title: 'Like Stars on Earth', year: 2007 },\r\n  { title: 'Taxi Driver', year: 1976 },\r\n  { title: 'Lawrence of Arabia', year: 1962 },\r\n  { title: 'Double Indemnity', year: 1944 },\r\n  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },\r\n  { title: 'Amadeus', year: 1984 },\r\n  { title: 'To Kill a Mockingbird', year: 1962 },\r\n  { title: 'Toy Story 3', year: 2010 },\r\n  { title: 'Logan', year: 2017 },\r\n  { title: 'Full Metal Jacket', year: 1987 },\r\n  { title: 'Dangal', year: 2016 },\r\n  { title: 'The Sting', year: 1973 },\r\n  { title: '2001: A Space Odyssey', year: 1968 },\r\n  { title: \"Singin' in the Rain\", year: 1952 },\r\n  { title: 'Toy Story', year: 1995 },\r\n  { title: 'Bicycle Thieves', year: 1948 },\r\n  { title: 'The Kid', year: 1921 },\r\n  { title: 'Inglourious Basterds', year: 2009 },\r\n  { title: 'Snatch', year: 2000 },\r\n  { title: '3 Idiots', year: 2009 },\r\n  { title: 'Monty Python and the Holy Grail', year: 1975 },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Highlights.txt":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Highlights.txt ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\nimport parse from 'autosuggest-highlight/parse';\r\nimport match from 'autosuggest-highlight/match';\r\n\r\nexport default function Highlights() {\r\n  return (\r\n    <Autocomplete\r\n      id=\"highlights-demo\"\r\n      style={{ width: 300 }}\r\n      options={top100Films}\r\n      getOptionLabel={option => option.title}\r\n      renderInput={params => <TextField {...params} label=\"Highlights\" variant=\"outlined\" margin=\"normal\" />}\r\n      renderOption={(option, { inputValue }) => {\r\n        const matches = match(option.title, inputValue);\r\n        const parts = parse(option.title, matches);\r\n\r\n        return (\r\n          <div>\r\n            {parts.map((part, index) => (\r\n              <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>\r\n                {part.text}\r\n              </span>\r\n            ))}\r\n          </div>\r\n        );\r\n      }}\r\n    />\r\n  );\r\n}\r\n\r\n// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top\r\nconst top100Films = [\r\n  { title: 'The Shawshank Redemption', year: 1994 },\r\n  { title: 'The Godfather', year: 1972 },\r\n  { title: 'The Godfather: Part II', year: 1974 },\r\n  { title: 'The Dark Knight', year: 2008 },\r\n  { title: '12 Angry Men', year: 1957 },\r\n  { title: \"Schindler's List\", year: 1993 },\r\n  { title: 'Pulp Fiction', year: 1994 },\r\n  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },\r\n  { title: 'The Good, the Bad and the Ugly', year: 1966 },\r\n  { title: 'Fight Club', year: 1999 },\r\n  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },\r\n  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },\r\n  { title: 'Forrest Gump', year: 1994 },\r\n  { title: 'Inception', year: 2010 },\r\n  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },\r\n  { title: \"One Flew Over the Cuckoo's Nest\", year: 1975 },\r\n  { title: 'Goodfellas', year: 1990 },\r\n  { title: 'The Matrix', year: 1999 },\r\n  { title: 'Seven Samurai', year: 1954 },\r\n  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },\r\n  { title: 'City of God', year: 2002 },\r\n  { title: 'Se7en', year: 1995 },\r\n  { title: 'The Silence of the Lambs', year: 1991 },\r\n  { title: \"It's a Wonderful Life\", year: 1946 },\r\n  { title: 'Life Is Beautiful', year: 1997 },\r\n  { title: 'The Usual Suspects', year: 1995 },\r\n  { title: 'Léon: The Professional', year: 1994 },\r\n  { title: 'Spirited Away', year: 2001 },\r\n  { title: 'Saving Private Ryan', year: 1998 },\r\n  { title: 'Once Upon a Time in the West', year: 1968 },\r\n  { title: 'American History X', year: 1998 },\r\n  { title: 'Interstellar', year: 2014 },\r\n  { title: 'Casablanca', year: 1942 },\r\n  { title: 'City Lights', year: 1931 },\r\n  { title: 'Psycho', year: 1960 },\r\n  { title: 'The Green Mile', year: 1999 },\r\n  { title: 'The Intouchables', year: 2011 },\r\n  { title: 'Modern Times', year: 1936 },\r\n  { title: 'Raiders of the Lost Ark', year: 1981 },\r\n  { title: 'Rear Window', year: 1954 },\r\n  { title: 'The Pianist', year: 2002 },\r\n  { title: 'The Departed', year: 2006 },\r\n  { title: 'Terminator 2: Judgment Day', year: 1991 },\r\n  { title: 'Back to the Future', year: 1985 },\r\n  { title: 'Whiplash', year: 2014 },\r\n  { title: 'Gladiator', year: 2000 },\r\n  { title: 'Memento', year: 2000 },\r\n  { title: 'The Prestige', year: 2006 },\r\n  { title: 'The Lion King', year: 1994 },\r\n  { title: 'Apocalypse Now', year: 1979 },\r\n  { title: 'Alien', year: 1979 },\r\n  { title: 'Sunset Boulevard', year: 1950 },\r\n  {\r\n    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',\r\n    year: 1964,\r\n  },\r\n  { title: 'The Great Dictator', year: 1940 },\r\n  { title: 'Cinema Paradiso', year: 1988 },\r\n  { title: 'The Lives of Others', year: 2006 },\r\n  { title: 'Grave of the Fireflies', year: 1988 },\r\n  { title: 'Paths of Glory', year: 1957 },\r\n  { title: 'Django Unchained', year: 2012 },\r\n  { title: 'The Shining', year: 1980 },\r\n  { title: 'WALL·E', year: 2008 },\r\n  { title: 'American Beauty', year: 1999 },\r\n  { title: 'The Dark Knight Rises', year: 2012 },\r\n  { title: 'Princess Mononoke', year: 1997 },\r\n  { title: 'Aliens', year: 1986 },\r\n  { title: 'Oldboy', year: 2003 },\r\n  { title: 'Once Upon a Time in America', year: 1984 },\r\n  { title: 'Witness for the Prosecution', year: 1957 },\r\n  { title: 'Das Boot', year: 1981 },\r\n  { title: 'Citizen Kane', year: 1941 },\r\n  { title: 'North by Northwest', year: 1959 },\r\n  { title: 'Vertigo', year: 1958 },\r\n  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },\r\n  { title: 'Reservoir Dogs', year: 1992 },\r\n  { title: 'Braveheart', year: 1995 },\r\n  { title: 'M', year: 1931 },\r\n  { title: 'Requiem for a Dream', year: 2000 },\r\n  { title: 'Amélie', year: 2001 },\r\n  { title: 'A Clockwork Orange', year: 1971 },\r\n  { title: 'Like Stars on Earth', year: 2007 },\r\n  { title: 'Taxi Driver', year: 1976 },\r\n  { title: 'Lawrence of Arabia', year: 1962 },\r\n  { title: 'Double Indemnity', year: 1944 },\r\n  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },\r\n  { title: 'Amadeus', year: 1984 },\r\n  { title: 'To Kill a Mockingbird', year: 1962 },\r\n  { title: 'Toy Story 3', year: 2010 },\r\n  { title: 'Logan', year: 2017 },\r\n  { title: 'Full Metal Jacket', year: 1987 },\r\n  { title: 'Dangal', year: 2016 },\r\n  { title: 'The Sting', year: 1973 },\r\n  { title: '2001: A Space Odyssey', year: 1968 },\r\n  { title: \"Singin' in the Rain\", year: 1952 },\r\n  { title: 'Toy Story', year: 1995 },\r\n  { title: 'Bicycle Thieves', year: 1948 },\r\n  { title: 'The Kid', year: 1921 },\r\n  { title: 'Inglourious Basterds', year: 2009 },\r\n  { title: 'Snatch', year: 2000 },\r\n  { title: '3 Idiots', year: 2009 },\r\n  { title: 'Monty Python and the Holy Grail', year: 1975 },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/LimitTags.txt":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/LimitTags.txt ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport TextField from '@material-ui/core/TextField';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    width: 500,\r\n    '& > * + *': {\r\n      marginTop: theme.spacing(3),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function LimitTags() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <Autocomplete\r\n        multiple\r\n        limitTags={2}\r\n        id=\"multiple-limit-tags\"\r\n        options={top100Films}\r\n        getOptionLabel={option => option.title}\r\n        defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}\r\n        renderInput={params => <TextField {...params} variant=\"outlined\" label=\"limitTags\" placeholder=\"Favorites\" />}\r\n      />\r\n    </div>\r\n  );\r\n}\r\n\r\n// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top\r\nconst top100Films = [\r\n  { title: 'The Shawshank Redemption', year: 1994 },\r\n  { title: 'The Godfather', year: 1972 },\r\n  { title: 'The Godfather: Part II', year: 1974 },\r\n  { title: 'The Dark Knight', year: 2008 },\r\n  { title: '12 Angry Men', year: 1957 },\r\n  { title: \"Schindler's List\", year: 1993 },\r\n  { title: 'Pulp Fiction', year: 1994 },\r\n  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },\r\n  { title: 'The Good, the Bad and the Ugly', year: 1966 },\r\n  { title: 'Fight Club', year: 1999 },\r\n  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },\r\n  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },\r\n  { title: 'Forrest Gump', year: 1994 },\r\n  { title: 'Inception', year: 2010 },\r\n  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },\r\n  { title: \"One Flew Over the Cuckoo's Nest\", year: 1975 },\r\n  { title: 'Goodfellas', year: 1990 },\r\n  { title: 'The Matrix', year: 1999 },\r\n  { title: 'Seven Samurai', year: 1954 },\r\n  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },\r\n  { title: 'City of God', year: 2002 },\r\n  { title: 'Se7en', year: 1995 },\r\n  { title: 'The Silence of the Lambs', year: 1991 },\r\n  { title: \"It's a Wonderful Life\", year: 1946 },\r\n  { title: 'Life Is Beautiful', year: 1997 },\r\n  { title: 'The Usual Suspects', year: 1995 },\r\n  { title: 'Léon: The Professional', year: 1994 },\r\n  { title: 'Spirited Away', year: 2001 },\r\n  { title: 'Saving Private Ryan', year: 1998 },\r\n  { title: 'Once Upon a Time in the West', year: 1968 },\r\n  { title: 'American History X', year: 1998 },\r\n  { title: 'Interstellar', year: 2014 },\r\n  { title: 'Casablanca', year: 1942 },\r\n  { title: 'City Lights', year: 1931 },\r\n  { title: 'Psycho', year: 1960 },\r\n  { title: 'The Green Mile', year: 1999 },\r\n  { title: 'The Intouchables', year: 2011 },\r\n  { title: 'Modern Times', year: 1936 },\r\n  { title: 'Raiders of the Lost Ark', year: 1981 },\r\n  { title: 'Rear Window', year: 1954 },\r\n  { title: 'The Pianist', year: 2002 },\r\n  { title: 'The Departed', year: 2006 },\r\n  { title: 'Terminator 2: Judgment Day', year: 1991 },\r\n  { title: 'Back to the Future', year: 1985 },\r\n  { title: 'Whiplash', year: 2014 },\r\n  { title: 'Gladiator', year: 2000 },\r\n  { title: 'Memento', year: 2000 },\r\n  { title: 'The Prestige', year: 2006 },\r\n  { title: 'The Lion King', year: 1994 },\r\n  { title: 'Apocalypse Now', year: 1979 },\r\n  { title: 'Alien', year: 1979 },\r\n  { title: 'Sunset Boulevard', year: 1950 },\r\n  {\r\n    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',\r\n    year: 1964,\r\n  },\r\n  { title: 'The Great Dictator', year: 1940 },\r\n  { title: 'Cinema Paradiso', year: 1988 },\r\n  { title: 'The Lives of Others', year: 2006 },\r\n  { title: 'Grave of the Fireflies', year: 1988 },\r\n  { title: 'Paths of Glory', year: 1957 },\r\n  { title: 'Django Unchained', year: 2012 },\r\n  { title: 'The Shining', year: 1980 },\r\n  { title: 'WALL·E', year: 2008 },\r\n  { title: 'American Beauty', year: 1999 },\r\n  { title: 'The Dark Knight Rises', year: 2012 },\r\n  { title: 'Princess Mononoke', year: 1997 },\r\n  { title: 'Aliens', year: 1986 },\r\n  { title: 'Oldboy', year: 2003 },\r\n  { title: 'Once Upon a Time in America', year: 1984 },\r\n  { title: 'Witness for the Prosecution', year: 1957 },\r\n  { title: 'Das Boot', year: 1981 },\r\n  { title: 'Citizen Kane', year: 1941 },\r\n  { title: 'North by Northwest', year: 1959 },\r\n  { title: 'Vertigo', year: 1958 },\r\n  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },\r\n  { title: 'Reservoir Dogs', year: 1992 },\r\n  { title: 'Braveheart', year: 1995 },\r\n  { title: 'M', year: 1931 },\r\n  { title: 'Requiem for a Dream', year: 2000 },\r\n  { title: 'Amélie', year: 2001 },\r\n  { title: 'A Clockwork Orange', year: 1971 },\r\n  { title: 'Like Stars on Earth', year: 2007 },\r\n  { title: 'Taxi Driver', year: 1976 },\r\n  { title: 'Lawrence of Arabia', year: 1962 },\r\n  { title: 'Double Indemnity', year: 1944 },\r\n  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },\r\n  { title: 'Amadeus', year: 1984 },\r\n  { title: 'To Kill a Mockingbird', year: 1962 },\r\n  { title: 'Toy Story 3', year: 2010 },\r\n  { title: 'Logan', year: 2017 },\r\n  { title: 'Full Metal Jacket', year: 1987 },\r\n  { title: 'Dangal', year: 2016 },\r\n  { title: 'The Sting', year: 1973 },\r\n  { title: '2001: A Space Odyssey', year: 1968 },\r\n  { title: \"Singin' in the Rain\", year: 1952 },\r\n  { title: 'Toy Story', year: 1995 },\r\n  { title: 'Bicycle Thieves', year: 1948 },\r\n  { title: 'The Kid', year: 1921 },\r\n  { title: 'Inglourious Basterds', year: 2009 },\r\n  { title: 'Snatch', year: 2000 },\r\n  { title: '3 Idiots', year: 2009 },\r\n  { title: 'Monty Python and the Holy Grail', year: 1975 },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Playground.txt":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Playground.txt ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\n\r\nexport default function Playground() {\r\n  const defaultProps = {\r\n    options: top100Films,\r\n    getOptionLabel: option => option.title,\r\n  };\r\n\r\n  const flatProps = {\r\n    options: top100Films.map(option => option.title),\r\n  };\r\n\r\n  const [value, setValue] = React.useState(null);\r\n\r\n  return (\r\n    <div style={{ width: 300 }}>\r\n      <Autocomplete\r\n        {...defaultProps}\r\n        id=\"debug\"\r\n        debug\r\n        renderInput={params => <TextField {...params} label=\"debug\" margin=\"normal\" />}\r\n      />\r\n      <Autocomplete\r\n        {...defaultProps}\r\n        id=\"disable-close-on-select\"\r\n        disableCloseOnSelect\r\n        renderInput={params => <TextField {...params} label=\"disableCloseOnSelect\" margin=\"normal\" />}\r\n      />\r\n      <Autocomplete\r\n        {...defaultProps}\r\n        id=\"clear-on-escape\"\r\n        clearOnEscape\r\n        renderInput={params => <TextField {...params} label=\"clearOnEscape\" margin=\"normal\" />}\r\n      />\r\n      <Autocomplete\r\n        {...defaultProps}\r\n        id=\"disable-clearable\"\r\n        disableClearable\r\n        renderInput={params => <TextField {...params} label=\"disableClearable\" margin=\"normal\" />}\r\n      />\r\n      <Autocomplete\r\n        {...defaultProps}\r\n        id=\"include-input-in-list\"\r\n        includeInputInList\r\n        renderInput={params => <TextField {...params} label=\"includeInputInList\" margin=\"normal\" />}\r\n      />\r\n      <Autocomplete\r\n        {...flatProps}\r\n        id=\"flat-demo\"\r\n        renderInput={params => <TextField {...params} label=\"flat\" margin=\"normal\" />}\r\n      />\r\n      <Autocomplete\r\n        {...defaultProps}\r\n        id=\"controlled-demo\"\r\n        value={value}\r\n        onChange={(event, newValue) => {\r\n          setValue(newValue);\r\n        }}\r\n        renderInput={params => <TextField {...params} label=\"controlled\" margin=\"normal\" />}\r\n      />\r\n      <Autocomplete\r\n        {...defaultProps}\r\n        id=\"auto-complete\"\r\n        autoComplete\r\n        includeInputInList\r\n        renderInput={params => <TextField {...params} label=\"autoComplete\" margin=\"normal\" />}\r\n      />\r\n      <Autocomplete\r\n        {...defaultProps}\r\n        id=\"disable-list-wrap\"\r\n        disableListWrap\r\n        renderInput={params => <TextField {...params} label=\"disableListWrap\" margin=\"normal\" />}\r\n      />\r\n      <Autocomplete\r\n        {...defaultProps}\r\n        id=\"open-on-focus\"\r\n        openOnFocus\r\n        renderInput={params => <TextField {...params} label=\"openOnFocus\" margin=\"normal\" />}\r\n      />\r\n      <Autocomplete\r\n        {...defaultProps}\r\n        id=\"auto-highlight\"\r\n        autoHighlight\r\n        renderInput={params => <TextField {...params} label=\"autoHighlight\" margin=\"normal\" />}\r\n      />\r\n      <Autocomplete\r\n        {...defaultProps}\r\n        id=\"auto-select\"\r\n        autoSelect\r\n        renderInput={params => <TextField {...params} label=\"autoSelect\" margin=\"normal\" />}\r\n      />\r\n      <Autocomplete\r\n        {...defaultProps}\r\n        id=\"disabled\"\r\n        disabled\r\n        renderInput={params => <TextField {...params} label=\"disabled\" margin=\"normal\" />}\r\n      />\r\n      <Autocomplete\r\n        {...defaultProps}\r\n        id=\"disable-portal\"\r\n        disablePortal\r\n        renderInput={params => <TextField {...params} label=\"disablePortal\" margin=\"normal\" />}\r\n      />\r\n      <Autocomplete\r\n        {...defaultProps}\r\n        id=\"blur-on-select\"\r\n        blurOnSelect\r\n        renderInput={params => <TextField {...params} label=\"blurOnSelect\" margin=\"normal\" />}\r\n      />\r\n      <Autocomplete\r\n        {...defaultProps}\r\n        id=\"clear-on-blur\"\r\n        clearOnBlur\r\n        renderInput={params => <TextField {...params} label=\"clearOnBlur\" margin=\"normal\" />}\r\n      />\r\n      <Autocomplete\r\n        {...defaultProps}\r\n        id=\"select-on-focus\"\r\n        selectOnFocus\r\n        renderInput={params => <TextField {...params} label=\"selectOnFocus\" margin=\"normal\" />}\r\n      />\r\n    </div>\r\n  );\r\n}\r\n\r\n// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top\r\nconst top100Films = [\r\n  { title: 'The Shawshank Redemption', year: 1994 },\r\n  { title: 'The Godfather', year: 1972 },\r\n  { title: 'The Godfather: Part II', year: 1974 },\r\n  { title: 'The Dark Knight', year: 2008 },\r\n  { title: '12 Angry Men', year: 1957 },\r\n  { title: \"Schindler's List\", year: 1993 },\r\n  { title: 'Pulp Fiction', year: 1994 },\r\n  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },\r\n  { title: 'The Good, the Bad and the Ugly', year: 1966 },\r\n  { title: 'Fight Club', year: 1999 },\r\n  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },\r\n  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },\r\n  { title: 'Forrest Gump', year: 1994 },\r\n  { title: 'Inception', year: 2010 },\r\n  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },\r\n  { title: \"One Flew Over the Cuckoo's Nest\", year: 1975 },\r\n  { title: 'Goodfellas', year: 1990 },\r\n  { title: 'The Matrix', year: 1999 },\r\n  { title: 'Seven Samurai', year: 1954 },\r\n  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },\r\n  { title: 'City of God', year: 2002 },\r\n  { title: 'Se7en', year: 1995 },\r\n  { title: 'The Silence of the Lambs', year: 1991 },\r\n  { title: \"It's a Wonderful Life\", year: 1946 },\r\n  { title: 'Life Is Beautiful', year: 1997 },\r\n  { title: 'The Usual Suspects', year: 1995 },\r\n  { title: 'Léon: The Professional', year: 1994 },\r\n  { title: 'Spirited Away', year: 2001 },\r\n  { title: 'Saving Private Ryan', year: 1998 },\r\n  { title: 'Once Upon a Time in the West', year: 1968 },\r\n  { title: 'American History X', year: 1998 },\r\n  { title: 'Interstellar', year: 2014 },\r\n  { title: 'Casablanca', year: 1942 },\r\n  { title: 'City Lights', year: 1931 },\r\n  { title: 'Psycho', year: 1960 },\r\n  { title: 'The Green Mile', year: 1999 },\r\n  { title: 'The Intouchables', year: 2011 },\r\n  { title: 'Modern Times', year: 1936 },\r\n  { title: 'Raiders of the Lost Ark', year: 1981 },\r\n  { title: 'Rear Window', year: 1954 },\r\n  { title: 'The Pianist', year: 2002 },\r\n  { title: 'The Departed', year: 2006 },\r\n  { title: 'Terminator 2: Judgment Day', year: 1991 },\r\n  { title: 'Back to the Future', year: 1985 },\r\n  { title: 'Whiplash', year: 2014 },\r\n  { title: 'Gladiator', year: 2000 },\r\n  { title: 'Memento', year: 2000 },\r\n  { title: 'The Prestige', year: 2006 },\r\n  { title: 'The Lion King', year: 1994 },\r\n  { title: 'Apocalypse Now', year: 1979 },\r\n  { title: 'Alien', year: 1979 },\r\n  { title: 'Sunset Boulevard', year: 1950 },\r\n  {\r\n    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',\r\n    year: 1964,\r\n  },\r\n  { title: 'The Great Dictator', year: 1940 },\r\n  { title: 'Cinema Paradiso', year: 1988 },\r\n  { title: 'The Lives of Others', year: 2006 },\r\n  { title: 'Grave of the Fireflies', year: 1988 },\r\n  { title: 'Paths of Glory', year: 1957 },\r\n  { title: 'Django Unchained', year: 2012 },\r\n  { title: 'The Shining', year: 1980 },\r\n  { title: 'WALL·E', year: 2008 },\r\n  { title: 'American Beauty', year: 1999 },\r\n  { title: 'The Dark Knight Rises', year: 2012 },\r\n  { title: 'Princess Mononoke', year: 1997 },\r\n  { title: 'Aliens', year: 1986 },\r\n  { title: 'Oldboy', year: 2003 },\r\n  { title: 'Once Upon a Time in America', year: 1984 },\r\n  { title: 'Witness for the Prosecution', year: 1957 },\r\n  { title: 'Das Boot', year: 1981 },\r\n  { title: 'Citizen Kane', year: 1941 },\r\n  { title: 'North by Northwest', year: 1959 },\r\n  { title: 'Vertigo', year: 1958 },\r\n  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },\r\n  { title: 'Reservoir Dogs', year: 1992 },\r\n  { title: 'Braveheart', year: 1995 },\r\n  { title: 'M', year: 1931 },\r\n  { title: 'Requiem for a Dream', year: 2000 },\r\n  { title: 'Amélie', year: 2001 },\r\n  { title: 'A Clockwork Orange', year: 1971 },\r\n  { title: 'Like Stars on Earth', year: 2007 },\r\n  { title: 'Taxi Driver', year: 1976 },\r\n  { title: 'Lawrence of Arabia', year: 1962 },\r\n  { title: 'Double Indemnity', year: 1944 },\r\n  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },\r\n  { title: 'Amadeus', year: 1984 },\r\n  { title: 'To Kill a Mockingbird', year: 1962 },\r\n  { title: 'Toy Story 3', year: 2010 },\r\n  { title: 'Logan', year: 2017 },\r\n  { title: 'Full Metal Jacket', year: 1987 },\r\n  { title: 'Dangal', year: 2016 },\r\n  { title: 'The Sting', year: 1973 },\r\n  { title: '2001: A Space Odyssey', year: 1968 },\r\n  { title: \"Singin' in the Rain\", year: 1952 },\r\n  { title: 'Toy Story', year: 1995 },\r\n  { title: 'Bicycle Thieves', year: 1948 },\r\n  { title: 'The Kid', year: 1921 },\r\n  { title: 'Inglourious Basterds', year: 2009 },\r\n  { title: 'Snatch', year: 2000 },\r\n  { title: '3 Idiots', year: 2009 },\r\n  { title: 'Monty Python and the Holy Grail', year: 1975 },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Sizes.txt":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Sizes.txt ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport Chip from '@material-ui/core/Chip';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport TextField from '@material-ui/core/TextField';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    width: 500,\r\n    '& > * + *': {\r\n      marginTop: theme.spacing(2),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function Sizes() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <Autocomplete\r\n        id=\"size-small-standard\"\r\n        size=\"small\"\r\n        options={top100Films}\r\n        getOptionLabel={option => option.title}\r\n        defaultValue={top100Films[13]}\r\n        renderInput={params => <TextField {...params} variant=\"standard\" label=\"Size small\" placeholder=\"Favorites\" />}\r\n      />\r\n      <Autocomplete\r\n        multiple\r\n        id=\"size-small-standard-multi\"\r\n        size=\"small\"\r\n        options={top100Films}\r\n        getOptionLabel={option => option.title}\r\n        defaultValue={[top100Films[13]]}\r\n        renderInput={params => <TextField {...params} variant=\"standard\" label=\"Size small\" placeholder=\"Favorites\" />}\r\n      />\r\n      <Autocomplete\r\n        id=\"size-small-outlined\"\r\n        size=\"small\"\r\n        options={top100Films}\r\n        getOptionLabel={option => option.title}\r\n        defaultValue={top100Films[13]}\r\n        renderInput={params => <TextField {...params} variant=\"outlined\" label=\"Size small\" placeholder=\"Favorites\" />}\r\n      />\r\n      <Autocomplete\r\n        multiple\r\n        id=\"size-small-outlined-multi\"\r\n        size=\"small\"\r\n        options={top100Films}\r\n        getOptionLabel={option => option.title}\r\n        defaultValue={[top100Films[13]]}\r\n        renderInput={params => <TextField {...params} variant=\"outlined\" label=\"Size small\" placeholder=\"Favorites\" />}\r\n      />\r\n      <Autocomplete\r\n        id=\"size-small-filled\"\r\n        size=\"small\"\r\n        options={top100Films}\r\n        getOptionLabel={option => option.title}\r\n        defaultValue={top100Films[13]}\r\n        renderTags={(value, getTagProps) =>\r\n          value.map((option, index) => (\r\n            <Chip variant=\"outlined\" label={option.title} size=\"small\" {...getTagProps({ index })} />\r\n          ))\r\n        }\r\n        renderInput={params => <TextField {...params} variant=\"filled\" label=\"Size small\" placeholder=\"Favorites\" />}\r\n      />\r\n      <Autocomplete\r\n        multiple\r\n        id=\"size-small-filled-multi\"\r\n        size=\"small\"\r\n        options={top100Films}\r\n        getOptionLabel={option => option.title}\r\n        defaultValue={[top100Films[13]]}\r\n        renderTags={(value, getTagProps) =>\r\n          value.map((option, index) => (\r\n            <Chip variant=\"outlined\" label={option.title} size=\"small\" {...getTagProps({ index })} />\r\n          ))\r\n        }\r\n        renderInput={params => <TextField {...params} variant=\"filled\" label=\"Size small\" placeholder=\"Favorites\" />}\r\n      />\r\n    </div>\r\n  );\r\n}\r\n\r\n// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top\r\nconst top100Films = [\r\n  { title: 'The Shawshank Redemption', year: 1994 },\r\n  { title: 'The Godfather', year: 1972 },\r\n  { title: 'The Godfather: Part II', year: 1974 },\r\n  { title: 'The Dark Knight', year: 2008 },\r\n  { title: '12 Angry Men', year: 1957 },\r\n  { title: \"Schindler's List\", year: 1993 },\r\n  { title: 'Pulp Fiction', year: 1994 },\r\n  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },\r\n  { title: 'The Good, the Bad and the Ugly', year: 1966 },\r\n  { title: 'Fight Club', year: 1999 },\r\n  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },\r\n  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },\r\n  { title: 'Forrest Gump', year: 1994 },\r\n  { title: 'Inception', year: 2010 },\r\n  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },\r\n  { title: \"One Flew Over the Cuckoo's Nest\", year: 1975 },\r\n  { title: 'Goodfellas', year: 1990 },\r\n  { title: 'The Matrix', year: 1999 },\r\n  { title: 'Seven Samurai', year: 1954 },\r\n  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },\r\n  { title: 'City of God', year: 2002 },\r\n  { title: 'Se7en', year: 1995 },\r\n  { title: 'The Silence of the Lambs', year: 1991 },\r\n  { title: \"It's a Wonderful Life\", year: 1946 },\r\n  { title: 'Life Is Beautiful', year: 1997 },\r\n  { title: 'The Usual Suspects', year: 1995 },\r\n  { title: 'Léon: The Professional', year: 1994 },\r\n  { title: 'Spirited Away', year: 2001 },\r\n  { title: 'Saving Private Ryan', year: 1998 },\r\n  { title: 'Once Upon a Time in the West', year: 1968 },\r\n  { title: 'American History X', year: 1998 },\r\n  { title: 'Interstellar', year: 2014 },\r\n  { title: 'Casablanca', year: 1942 },\r\n  { title: 'City Lights', year: 1931 },\r\n  { title: 'Psycho', year: 1960 },\r\n  { title: 'The Green Mile', year: 1999 },\r\n  { title: 'The Intouchables', year: 2011 },\r\n  { title: 'Modern Times', year: 1936 },\r\n  { title: 'Raiders of the Lost Ark', year: 1981 },\r\n  { title: 'Rear Window', year: 1954 },\r\n  { title: 'The Pianist', year: 2002 },\r\n  { title: 'The Departed', year: 2006 },\r\n  { title: 'Terminator 2: Judgment Day', year: 1991 },\r\n  { title: 'Back to the Future', year: 1985 },\r\n  { title: 'Whiplash', year: 2014 },\r\n  { title: 'Gladiator', year: 2000 },\r\n  { title: 'Memento', year: 2000 },\r\n  { title: 'The Prestige', year: 2006 },\r\n  { title: 'The Lion King', year: 1994 },\r\n  { title: 'Apocalypse Now', year: 1979 },\r\n  { title: 'Alien', year: 1979 },\r\n  { title: 'Sunset Boulevard', year: 1950 },\r\n  {\r\n    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',\r\n    year: 1964,\r\n  },\r\n  { title: 'The Great Dictator', year: 1940 },\r\n  { title: 'Cinema Paradiso', year: 1988 },\r\n  { title: 'The Lives of Others', year: 2006 },\r\n  { title: 'Grave of the Fireflies', year: 1988 },\r\n  { title: 'Paths of Glory', year: 1957 },\r\n  { title: 'Django Unchained', year: 2012 },\r\n  { title: 'The Shining', year: 1980 },\r\n  { title: 'WALL·E', year: 2008 },\r\n  { title: 'American Beauty', year: 1999 },\r\n  { title: 'The Dark Knight Rises', year: 2012 },\r\n  { title: 'Princess Mononoke', year: 1997 },\r\n  { title: 'Aliens', year: 1986 },\r\n  { title: 'Oldboy', year: 2003 },\r\n  { title: 'Once Upon a Time in America', year: 1984 },\r\n  { title: 'Witness for the Prosecution', year: 1957 },\r\n  { title: 'Das Boot', year: 1981 },\r\n  { title: 'Citizen Kane', year: 1941 },\r\n  { title: 'North by Northwest', year: 1959 },\r\n  { title: 'Vertigo', year: 1958 },\r\n  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },\r\n  { title: 'Reservoir Dogs', year: 1992 },\r\n  { title: 'Braveheart', year: 1995 },\r\n  { title: 'M', year: 1931 },\r\n  { title: 'Requiem for a Dream', year: 2000 },\r\n  { title: 'Amélie', year: 2001 },\r\n  { title: 'A Clockwork Orange', year: 1971 },\r\n  { title: 'Like Stars on Earth', year: 2007 },\r\n  { title: 'Taxi Driver', year: 1976 },\r\n  { title: 'Lawrence of Arabia', year: 1962 },\r\n  { title: 'Double Indemnity', year: 1944 },\r\n  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },\r\n  { title: 'Amadeus', year: 1984 },\r\n  { title: 'To Kill a Mockingbird', year: 1962 },\r\n  { title: 'Toy Story 3', year: 2010 },\r\n  { title: 'Logan', year: 2017 },\r\n  { title: 'Full Metal Jacket', year: 1987 },\r\n  { title: 'Dangal', year: 2016 },\r\n  { title: 'The Sting', year: 1973 },\r\n  { title: '2001: A Space Odyssey', year: 1968 },\r\n  { title: \"Singin' in the Rain\", year: 1952 },\r\n  { title: 'Toy Story', year: 1995 },\r\n  { title: 'Bicycle Thieves', year: 1948 },\r\n  { title: 'The Kid', year: 1921 },\r\n  { title: 'Inglourious Basterds', year: 2009 },\r\n  { title: 'Snatch', year: 2000 },\r\n  { title: '3 Idiots', year: 2009 },\r\n  { title: 'Monty Python and the Holy Grail', year: 1975 },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Tags.txt":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Tags.txt ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport Chip from '@material-ui/core/Chip';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport TextField from '@material-ui/core/TextField';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    width: 500,\r\n    '& > * + *': {\r\n      marginTop: theme.spacing(3),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function Tags() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <Autocomplete\r\n        multiple\r\n        id=\"tags-standard\"\r\n        options={top100Films}\r\n        getOptionLabel={option => option.title}\r\n        defaultValue={[top100Films[13]]}\r\n        renderInput={params => <TextField {...params} variant=\"standard\" label=\"Multiple values\" placeholder=\"Favorites\" />}\r\n      />\r\n      <Autocomplete\r\n        multiple\r\n        id=\"tags-outlined\"\r\n        options={top100Films}\r\n        getOptionLabel={option => option.title}\r\n        defaultValue={[top100Films[13]]}\r\n        filterSelectedOptions\r\n        renderInput={params => (\r\n          <TextField {...params} variant=\"outlined\" label=\"filterSelectedOptions\" placeholder=\"Favorites\" />\r\n        )}\r\n      />\r\n      <Autocomplete\r\n        multiple\r\n        id=\"tags-filled\"\r\n        options={top100Films.map(option => option.title)}\r\n        defaultValue={[top100Films[13].title]}\r\n        freeSolo\r\n        renderTags={(value, getTagProps) =>\r\n          value.map((option, index) => <Chip variant=\"outlined\" label={option} {...getTagProps({ index })} />)\r\n        }\r\n        renderInput={params => <TextField {...params} variant=\"filled\" label=\"freeSolo\" placeholder=\"Favorites\" />}\r\n      />\r\n    </div>\r\n  );\r\n}\r\n\r\n// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top\r\nconst top100Films = [\r\n  { title: 'The Shawshank Redemption', year: 1994 },\r\n  { title: 'The Godfather', year: 1972 },\r\n  { title: 'The Godfather: Part II', year: 1974 },\r\n  { title: 'The Dark Knight', year: 2008 },\r\n  { title: '12 Angry Men', year: 1957 },\r\n  { title: \"Schindler's List\", year: 1993 },\r\n  { title: 'Pulp Fiction', year: 1994 },\r\n  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },\r\n  { title: 'The Good, the Bad and the Ugly', year: 1966 },\r\n  { title: 'Fight Club', year: 1999 },\r\n  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },\r\n  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },\r\n  { title: 'Forrest Gump', year: 1994 },\r\n  { title: 'Inception', year: 2010 },\r\n  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },\r\n  { title: \"One Flew Over the Cuckoo's Nest\", year: 1975 },\r\n  { title: 'Goodfellas', year: 1990 },\r\n  { title: 'The Matrix', year: 1999 },\r\n  { title: 'Seven Samurai', year: 1954 },\r\n  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },\r\n  { title: 'City of God', year: 2002 },\r\n  { title: 'Se7en', year: 1995 },\r\n  { title: 'The Silence of the Lambs', year: 1991 },\r\n  { title: \"It's a Wonderful Life\", year: 1946 },\r\n  { title: 'Life Is Beautiful', year: 1997 },\r\n  { title: 'The Usual Suspects', year: 1995 },\r\n  { title: 'Léon: The Professional', year: 1994 },\r\n  { title: 'Spirited Away', year: 2001 },\r\n  { title: 'Saving Private Ryan', year: 1998 },\r\n  { title: 'Once Upon a Time in the West', year: 1968 },\r\n  { title: 'American History X', year: 1998 },\r\n  { title: 'Interstellar', year: 2014 },\r\n  { title: 'Casablanca', year: 1942 },\r\n  { title: 'City Lights', year: 1931 },\r\n  { title: 'Psycho', year: 1960 },\r\n  { title: 'The Green Mile', year: 1999 },\r\n  { title: 'The Intouchables', year: 2011 },\r\n  { title: 'Modern Times', year: 1936 },\r\n  { title: 'Raiders of the Lost Ark', year: 1981 },\r\n  { title: 'Rear Window', year: 1954 },\r\n  { title: 'The Pianist', year: 2002 },\r\n  { title: 'The Departed', year: 2006 },\r\n  { title: 'Terminator 2: Judgment Day', year: 1991 },\r\n  { title: 'Back to the Future', year: 1985 },\r\n  { title: 'Whiplash', year: 2014 },\r\n  { title: 'Gladiator', year: 2000 },\r\n  { title: 'Memento', year: 2000 },\r\n  { title: 'The Prestige', year: 2006 },\r\n  { title: 'The Lion King', year: 1994 },\r\n  { title: 'Apocalypse Now', year: 1979 },\r\n  { title: 'Alien', year: 1979 },\r\n  { title: 'Sunset Boulevard', year: 1950 },\r\n  {\r\n    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',\r\n    year: 1964,\r\n  },\r\n  { title: 'The Great Dictator', year: 1940 },\r\n  { title: 'Cinema Paradiso', year: 1988 },\r\n  { title: 'The Lives of Others', year: 2006 },\r\n  { title: 'Grave of the Fireflies', year: 1988 },\r\n  { title: 'Paths of Glory', year: 1957 },\r\n  { title: 'Django Unchained', year: 2012 },\r\n  { title: 'The Shining', year: 1980 },\r\n  { title: 'WALL·E', year: 2008 },\r\n  { title: 'American Beauty', year: 1999 },\r\n  { title: 'The Dark Knight Rises', year: 2012 },\r\n  { title: 'Princess Mononoke', year: 1997 },\r\n  { title: 'Aliens', year: 1986 },\r\n  { title: 'Oldboy', year: 2003 },\r\n  { title: 'Once Upon a Time in America', year: 1984 },\r\n  { title: 'Witness for the Prosecution', year: 1957 },\r\n  { title: 'Das Boot', year: 1981 },\r\n  { title: 'Citizen Kane', year: 1941 },\r\n  { title: 'North by Northwest', year: 1959 },\r\n  { title: 'Vertigo', year: 1958 },\r\n  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },\r\n  { title: 'Reservoir Dogs', year: 1992 },\r\n  { title: 'Braveheart', year: 1995 },\r\n  { title: 'M', year: 1931 },\r\n  { title: 'Requiem for a Dream', year: 2000 },\r\n  { title: 'Amélie', year: 2001 },\r\n  { title: 'A Clockwork Orange', year: 1971 },\r\n  { title: 'Like Stars on Earth', year: 2007 },\r\n  { title: 'Taxi Driver', year: 1976 },\r\n  { title: 'Lawrence of Arabia', year: 1962 },\r\n  { title: 'Double Indemnity', year: 1944 },\r\n  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },\r\n  { title: 'Amadeus', year: 1984 },\r\n  { title: 'To Kill a Mockingbird', year: 1962 },\r\n  { title: 'Toy Story 3', year: 2010 },\r\n  { title: 'Logan', year: 2017 },\r\n  { title: 'Full Metal Jacket', year: 1987 },\r\n  { title: 'Dangal', year: 2016 },\r\n  { title: 'The Sting', year: 1973 },\r\n  { title: '2001: A Space Odyssey', year: 1968 },\r\n  { title: \"Singin' in the Rain\", year: 1952 },\r\n  { title: 'Toy Story', year: 1995 },\r\n  { title: 'Bicycle Thieves', year: 1948 },\r\n  { title: 'The Kid', year: 1921 },\r\n  { title: 'Inglourious Basterds', year: 2009 },\r\n  { title: 'Snatch', year: 2000 },\r\n  { title: '3 Idiots', year: 2009 },\r\n  { title: 'Monty Python and the Holy Grail', year: 1975 },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/UseAutocomplete.txt":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/UseAutocomplete.txt ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable no-use-before-define */\r\nimport React from 'react';\r\nimport useAutocomplete from '@material-ui/lab/useAutocomplete';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  label: {\r\n    display: 'block',\r\n  },\r\n  input: {\r\n    width: 200,\r\n  },\r\n  listbox: {\r\n    width: 200,\r\n    margin: 0,\r\n    padding: 0,\r\n    zIndex: 1,\r\n    position: 'absolute',\r\n    listStyle: 'none',\r\n    backgroundColor: theme.palette.background.paper,\r\n    overflow: 'auto',\r\n    maxHeight: 200,\r\n    border: '1px solid rgba(0,0,0,.25)',\r\n    '& li[data-focus=\"true\"]': {\r\n      backgroundColor: '#4a8df6',\r\n      color: 'white',\r\n      cursor: 'pointer',\r\n    },\r\n    '& li:active': {\r\n      backgroundColor: '#2977f5',\r\n      color: 'white',\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function UseAutocomplete() {\r\n  const classes = useStyles();\r\n  const {\r\n    getRootProps,\r\n    getInputLabelProps,\r\n    getInputProps,\r\n    getListboxProps,\r\n    getOptionProps,\r\n    groupedOptions,\r\n  } = useAutocomplete({\r\n    id: 'use-autocomplete-demo',\r\n    options: top100Films,\r\n    getOptionLabel: option => option.title,\r\n  });\r\n\r\n  return (\r\n    <div>\r\n      <div {...getRootProps()}>\r\n        <label className={classes.label} {...getInputLabelProps()}>\r\n          useAutocomplete\r\n        </label>\r\n        <input className={classes.input} {...getInputProps()} />\r\n      </div>\r\n      {groupedOptions.length > 0 ? (\r\n        <ul className={classes.listbox} {...getListboxProps()}>\r\n          {groupedOptions.map((option, index) => (\r\n            <li {...getOptionProps({ option, index })}>{option.title}</li>\r\n          ))}\r\n        </ul>\r\n      ) : null}\r\n    </div>\r\n  );\r\n}\r\n\r\n// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top\r\nconst top100Films = [\r\n  { title: 'The Shawshank Redemption', year: 1994 },\r\n  { title: 'The Godfather', year: 1972 },\r\n  { title: 'The Godfather: Part II', year: 1974 },\r\n  { title: 'The Dark Knight', year: 2008 },\r\n  { title: '12 Angry Men', year: 1957 },\r\n  { title: \"Schindler's List\", year: 1993 },\r\n  { title: 'Pulp Fiction', year: 1994 },\r\n  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },\r\n  { title: 'The Good, the Bad and the Ugly', year: 1966 },\r\n  { title: 'Fight Club', year: 1999 },\r\n  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },\r\n  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },\r\n  { title: 'Forrest Gump', year: 1994 },\r\n  { title: 'Inception', year: 2010 },\r\n  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },\r\n  { title: \"One Flew Over the Cuckoo's Nest\", year: 1975 },\r\n  { title: 'Goodfellas', year: 1990 },\r\n  { title: 'The Matrix', year: 1999 },\r\n  { title: 'Seven Samurai', year: 1954 },\r\n  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },\r\n  { title: 'City of God', year: 2002 },\r\n  { title: 'Se7en', year: 1995 },\r\n  { title: 'The Silence of the Lambs', year: 1991 },\r\n  { title: \"It's a Wonderful Life\", year: 1946 },\r\n  { title: 'Life Is Beautiful', year: 1997 },\r\n  { title: 'The Usual Suspects', year: 1995 },\r\n  { title: 'Léon: The Professional', year: 1994 },\r\n  { title: 'Spirited Away', year: 2001 },\r\n  { title: 'Saving Private Ryan', year: 1998 },\r\n  { title: 'Once Upon a Time in the West', year: 1968 },\r\n  { title: 'American History X', year: 1998 },\r\n  { title: 'Interstellar', year: 2014 },\r\n  { title: 'Casablanca', year: 1942 },\r\n  { title: 'City Lights', year: 1931 },\r\n  { title: 'Psycho', year: 1960 },\r\n  { title: 'The Green Mile', year: 1999 },\r\n  { title: 'The Intouchables', year: 2011 },\r\n  { title: 'Modern Times', year: 1936 },\r\n  { title: 'Raiders of the Lost Ark', year: 1981 },\r\n  { title: 'Rear Window', year: 1954 },\r\n  { title: 'The Pianist', year: 2002 },\r\n  { title: 'The Departed', year: 2006 },\r\n  { title: 'Terminator 2: Judgment Day', year: 1991 },\r\n  { title: 'Back to the Future', year: 1985 },\r\n  { title: 'Whiplash', year: 2014 },\r\n  { title: 'Gladiator', year: 2000 },\r\n  { title: 'Memento', year: 2000 },\r\n  { title: 'The Prestige', year: 2006 },\r\n  { title: 'The Lion King', year: 1994 },\r\n  { title: 'Apocalypse Now', year: 1979 },\r\n  { title: 'Alien', year: 1979 },\r\n  { title: 'Sunset Boulevard', year: 1950 },\r\n  {\r\n    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',\r\n    year: 1964,\r\n  },\r\n  { title: 'The Great Dictator', year: 1940 },\r\n  { title: 'Cinema Paradiso', year: 1988 },\r\n  { title: 'The Lives of Others', year: 2006 },\r\n  { title: 'Grave of the Fireflies', year: 1988 },\r\n  { title: 'Paths of Glory', year: 1957 },\r\n  { title: 'Django Unchained', year: 2012 },\r\n  { title: 'The Shining', year: 1980 },\r\n  { title: 'WALL·E', year: 2008 },\r\n  { title: 'American Beauty', year: 1999 },\r\n  { title: 'The Dark Knight Rises', year: 2012 },\r\n  { title: 'Princess Mononoke', year: 1997 },\r\n  { title: 'Aliens', year: 1986 },\r\n  { title: 'Oldboy', year: 2003 },\r\n  { title: 'Once Upon a Time in America', year: 1984 },\r\n  { title: 'Witness for the Prosecution', year: 1957 },\r\n  { title: 'Das Boot', year: 1981 },\r\n  { title: 'Citizen Kane', year: 1941 },\r\n  { title: 'North by Northwest', year: 1959 },\r\n  { title: 'Vertigo', year: 1958 },\r\n  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },\r\n  { title: 'Reservoir Dogs', year: 1992 },\r\n  { title: 'Braveheart', year: 1995 },\r\n  { title: 'M', year: 1931 },\r\n  { title: 'Requiem for a Dream', year: 2000 },\r\n  { title: 'Amélie', year: 2001 },\r\n  { title: 'A Clockwork Orange', year: 1971 },\r\n  { title: 'Like Stars on Earth', year: 2007 },\r\n  { title: 'Taxi Driver', year: 1976 },\r\n  { title: 'Lawrence of Arabia', year: 1962 },\r\n  { title: 'Double Indemnity', year: 1944 },\r\n  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },\r\n  { title: 'Amadeus', year: 1984 },\r\n  { title: 'To Kill a Mockingbird', year: 1962 },\r\n  { title: 'Toy Story 3', year: 2010 },\r\n  { title: 'Logan', year: 2017 },\r\n  { title: 'Full Metal Jacket', year: 1987 },\r\n  { title: 'Dangal', year: 2016 },\r\n  { title: 'The Sting', year: 1973 },\r\n  { title: '2001: A Space Odyssey', year: 1968 },\r\n  { title: \"Singin' in the Rain\", year: 1952 },\r\n  { title: 'Toy Story', year: 1995 },\r\n  { title: 'Bicycle Thieves', year: 1948 },\r\n  { title: 'The Kid', year: 1921 },\r\n  { title: 'Inglourious Basterds', year: 2009 },\r\n  { title: 'Snatch', year: 2000 },\r\n  { title: '3 Idiots', year: 2009 },\r\n  { title: 'Monty Python and the Holy Grail', year: 1975 },\r\n];\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Virtualize.txt":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Virtualize.txt ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport TextField from '@material-ui/core/TextField';\r\nimport Autocomplete from '@material-ui/lab/Autocomplete';\r\nimport useMediaQuery from '@material-ui/core/useMediaQuery';\r\nimport ListSubheader from '@material-ui/core/ListSubheader';\r\nimport { useTheme, makeStyles } from '@material-ui/core/styles';\r\nimport { VariableSizeList } from 'react-window';\r\nimport { Typography } from '@material-ui/core';\r\n\r\nconst LISTBOX_PADDING = 8; // px\r\n\r\nfunction renderRow(props) {\r\n  const { data, index, style } = props;\r\n  return React.cloneElement(data[index], {\r\n    style: {\r\n      ...style,\r\n      top: style.top + LISTBOX_PADDING,\r\n    },\r\n  });\r\n}\r\n\r\nconst OuterElementContext = React.createContext({});\r\n\r\nconst OuterElementType = React.forwardRef((props, ref) => {\r\n  const outerProps = React.useContext(OuterElementContext);\r\n  return <div ref={ref} {...props} {...outerProps} />;\r\n});\r\n\r\nfunction useResetCache(data) {\r\n  const ref = React.useRef(null);\r\n  React.useEffect(() => {\r\n    if (ref.current != null) {\r\n      ref.current.resetAfterIndex(0, true);\r\n    }\r\n  }, [data]);\r\n  return ref;\r\n}\r\n\r\n// Adapter for react-window\r\nconst ListboxComponent = React.forwardRef(function ListboxComponent(props, ref) {\r\n  const { children, ...other } = props;\r\n  const itemData = React.Children.toArray(children);\r\n  const theme = useTheme();\r\n  const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });\r\n  const itemCount = itemData.length;\r\n  const itemSize = smUp ? 36 : 48;\r\n\r\n  const getChildSize = child => {\r\n    if (React.isValidElement(child) && child.type === ListSubheader) {\r\n      return 48;\r\n    }\r\n\r\n    return itemSize;\r\n  };\r\n\r\n  const getHeight = () => {\r\n    if (itemCount > 8) {\r\n      return 8 * itemSize;\r\n    }\r\n    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);\r\n  };\r\n\r\n  const gridRef = useResetCache(itemCount);\r\n\r\n  return (\r\n    <div ref={ref}>\r\n      <OuterElementContext.Provider value={other}>\r\n        <VariableSizeList\r\n          itemData={itemData}\r\n          height={getHeight() + 2 * LISTBOX_PADDING}\r\n          width=\"100%\"\r\n          ref={gridRef}\r\n          outerElementType={OuterElementType}\r\n          innerElementType=\"ul\"\r\n          itemSize={index => getChildSize(itemData[index])}\r\n          overscanCount={5}\r\n          itemCount={itemCount}>\r\n          {renderRow}\r\n        </VariableSizeList>\r\n      </OuterElementContext.Provider>\r\n    </div>\r\n  );\r\n});\r\n\r\nListboxComponent.propTypes = {\r\n  children: PropTypes.node,\r\n};\r\n\r\nfunction random(length) {\r\n  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\r\n  let result = '';\r\n\r\n  for (let i = 0; i < length; i += 1) {\r\n    result += characters.charAt(Math.floor(Math.random() * characters.length));\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nconst useStyles = makeStyles({\r\n  listbox: {\r\n    boxSizing: 'border-box',\r\n    '& ul': {\r\n      padding: 0,\r\n      margin: 0,\r\n    },\r\n  },\r\n});\r\n\r\nconst OPTIONS = Array.from(new Array(10000))\r\n  .map(() => random(10 + Math.ceil(Math.random() * 20)))\r\n  .sort((a, b) => a.toUpperCase().localeCompare(b.toUpperCase()));\r\n\r\nconst renderGroup = params => [\r\n  <ListSubheader key={params.key} component=\"div\">\r\n    {params.group}\r\n  </ListSubheader>,\r\n  params.children,\r\n];\r\n\r\nexport default function Virtualize() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Autocomplete\r\n      id=\"virtualize-demo\"\r\n      style={{ width: 300 }}\r\n      disableListWrap\r\n      classes={classes}\r\n      ListboxComponent={ListboxComponent}\r\n      renderGroup={renderGroup}\r\n      options={OPTIONS}\r\n      groupBy={option => option[0].toUpperCase()}\r\n      renderInput={params => <TextField {...params} variant=\"outlined\" label=\"10,000 options\" />}\r\n      renderOption={option => <Typography noWrap>{option}</Typography>}\r\n    />\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/react-window/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-window/dist/index.esm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FixedSizeGrid": () => (/* binding */ FixedSizeGrid),
/* harmony export */   "FixedSizeList": () => (/* binding */ FixedSizeList),
/* harmony export */   "VariableSizeGrid": () => (/* binding */ VariableSizeGrid),
/* harmony export */   "VariableSizeList": () => (/* binding */ VariableSizeList),
/* harmony export */   "areEqual": () => (/* binding */ areEqual),
/* harmony export */   "shouldComponentUpdate": () => (/* binding */ shouldComponentUpdate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");







// Animation frame based implementation of setTimeout.
// Inspired by Joe Lambert, https://gist.github.com/joelambert/1002116#file-requesttimeout-js
var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
var now = hasNativePerformanceNow ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();

  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }

  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}

var size = -1; // This utility copied from "dom-helpers" package.

function getScrollbarSize(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (size === -1 || recalculate) {
    var div = document.createElement('div');
    var style = div.style;
    style.width = '50px';
    style.height = '50px';
    style.overflow = 'scroll';
    document.body.appendChild(div);
    size = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }

  return size;
}
var cachedRTLResult = null; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
// Chrome does not seem to adhere; its scrollLeft values are positive (measured relative to the left).
// Safari's elastic bounce makes detecting this even more complicated wrt potential false positives.
// The safest way to check this is to intentionally set a negative offset,
// and then verify that the subsequent "scroll" event matches the negative offset.
// If it does not match, then we can assume a non-standard RTL scroll implementation.

function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement('div');
    var outerStyle = outerDiv.style;
    outerStyle.width = '50px';
    outerStyle.height = '50px';
    outerStyle.overflow = 'scroll';
    outerStyle.direction = 'rtl';
    var innerDiv = document.createElement('div');
    var innerStyle = innerDiv.style;
    innerStyle.width = '100px';
    innerStyle.height = '100px';
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);

    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = 'positive-descending';
    } else {
      outerDiv.scrollLeft = 1;

      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = 'negative';
      } else {
        cachedRTLResult = 'positive-ascending';
      }
    }

    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }

  return cachedRTLResult;
}

var IS_SCROLLING_DEBOUNCE_INTERVAL = 150;

var defaultItemKey = function defaultItemKey(_ref) {
  var columnIndex = _ref.columnIndex,
      data = _ref.data,
      rowIndex = _ref.rowIndex;
  return rowIndex + ":" + columnIndex;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsOverscanCount = null;
var devWarningsOverscanRowsColumnsCount = null;
var devWarningsTagName = null;

if (true) {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsOverscanCount = /*#__PURE__*/new WeakSet();
    devWarningsOverscanRowsColumnsCount = /*#__PURE__*/new WeakSet();
    devWarningsTagName = /*#__PURE__*/new WeakSet();
  }
}

function createGridComponent(_ref2) {
  var _class;

  var getColumnOffset = _ref2.getColumnOffset,
      getColumnStartIndexForOffset = _ref2.getColumnStartIndexForOffset,
      getColumnStopIndexForStartIndex = _ref2.getColumnStopIndexForStartIndex,
      getColumnWidth = _ref2.getColumnWidth,
      getEstimatedTotalHeight = _ref2.getEstimatedTotalHeight,
      getEstimatedTotalWidth = _ref2.getEstimatedTotalWidth,
      getOffsetForColumnAndAlignment = _ref2.getOffsetForColumnAndAlignment,
      getOffsetForRowAndAlignment = _ref2.getOffsetForRowAndAlignment,
      getRowHeight = _ref2.getRowHeight,
      getRowOffset = _ref2.getRowOffset,
      getRowStartIndexForOffset = _ref2.getRowStartIndexForOffset,
      getRowStopIndexForStartIndex = _ref2.getRowStopIndexForStartIndex,
      initInstanceProps = _ref2.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref2.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref2.validateProps;
  return _class = /*#__PURE__*/function (_PureComponent) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Grid, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function Grid(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this));
      _this._resetIsScrollingTimeoutId = null;
      _this._outerRef = void 0;
      _this.state = {
        instance: (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this),
        isScrolling: false,
        horizontalScrollDirection: 'forward',
        scrollLeft: typeof _this.props.initialScrollLeft === 'number' ? _this.props.initialScrollLeft : 0,
        scrollTop: typeof _this.props.initialScrollTop === 'number' ? _this.props.initialScrollTop : 0,
        scrollUpdateWasRequested: false,
        verticalScrollDirection: 'forward'
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (overscanColumnStartIndex, overscanColumnStopIndex, overscanRowStartIndex, overscanRowStopIndex, visibleColumnStartIndex, visibleColumnStopIndex, visibleRowStartIndex, visibleRowStopIndex) {
        return _this.props.onItemsRendered({
          overscanColumnStartIndex: overscanColumnStartIndex,
          overscanColumnStopIndex: overscanColumnStopIndex,
          overscanRowStartIndex: overscanRowStartIndex,
          overscanRowStopIndex: overscanRowStopIndex,
          visibleColumnStartIndex: visibleColumnStartIndex,
          visibleColumnStopIndex: visibleColumnStopIndex,
          visibleRowStartIndex: visibleRowStartIndex,
          visibleRowStopIndex: visibleRowStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (scrollLeft, scrollTop, horizontalScrollDirection, verticalScrollDirection, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          horizontalScrollDirection: horizontalScrollDirection,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          verticalScrollDirection: verticalScrollDirection,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (rowIndex, columnIndex) {
        var _this$props = _this.props,
            columnWidth = _this$props.columnWidth,
            direction = _this$props.direction,
            rowHeight = _this$props.rowHeight;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && columnWidth, shouldResetStyleCacheOnItemSizeChange && direction, shouldResetStyleCacheOnItemSizeChange && rowHeight);

        var key = rowIndex + ":" + columnIndex;
        var style;

        if (itemStyleCache.hasOwnProperty(key)) {
          style = itemStyleCache[key];
        } else {
          var _offset = getColumnOffset(_this.props, columnIndex, _this._instanceProps);

          var isRtl = direction === 'rtl';
          itemStyleCache[key] = style = {
            position: 'absolute',
            left: isRtl ? undefined : _offset,
            right: isRtl ? _offset : undefined,
            top: getRowOffset(_this.props, rowIndex, _this._instanceProps),
            height: getRowHeight(_this.props, rowIndex, _this._instanceProps),
            width: getColumnWidth(_this.props, columnIndex, _this._instanceProps)
          };
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (_, __, ___) {
        return {};
      });

      _this._onScroll = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientHeight = _event$currentTarget.clientHeight,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollTop = _event$currentTarget.scrollTop,
            scrollHeight = _event$currentTarget.scrollHeight,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
          // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
          // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
          // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.

          var calculatedScrollLeft = scrollLeft;

          if (direction === 'rtl') {
            switch (getRTLOffsetType()) {
              case 'negative':
                calculatedScrollLeft = -scrollLeft;
                break;

              case 'positive-descending':
                calculatedScrollLeft = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          calculatedScrollLeft = Math.max(0, Math.min(calculatedScrollLeft, scrollWidth - clientWidth));
          var calculatedScrollTop = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
            scrollLeft: calculatedScrollLeft,
            scrollTop: calculatedScrollTop,
            verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward',
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1);
        });
      };

      return _this;
    }

    Grid.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = Grid.prototype;

    _proto.scrollTo = function scrollTo(_ref3) {
      var scrollLeft = _ref3.scrollLeft,
          scrollTop = _ref3.scrollTop;

      if (scrollLeft !== undefined) {
        scrollLeft = Math.max(0, scrollLeft);
      }

      if (scrollTop !== undefined) {
        scrollTop = Math.max(0, scrollTop);
      }

      this.setState(function (prevState) {
        if (scrollLeft === undefined) {
          scrollLeft = prevState.scrollLeft;
        }

        if (scrollTop === undefined) {
          scrollTop = prevState.scrollTop;
        }

        if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
          return null;
        }

        return {
          horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          scrollUpdateWasRequested: true,
          verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward'
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(_ref4) {
      var _ref4$align = _ref4.align,
          align = _ref4$align === void 0 ? 'auto' : _ref4$align,
          columnIndex = _ref4.columnIndex,
          rowIndex = _ref4.rowIndex;
      var _this$props2 = this.props,
          columnCount = _this$props2.columnCount,
          height = _this$props2.height,
          rowCount = _this$props2.rowCount,
          width = _this$props2.width;
      var _this$state = this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop;
      var scrollbarSize = getScrollbarSize();

      if (columnIndex !== undefined) {
        columnIndex = Math.max(0, Math.min(columnIndex, columnCount - 1));
      }

      if (rowIndex !== undefined) {
        rowIndex = Math.max(0, Math.min(rowIndex, rowCount - 1));
      }

      var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps); // The scrollbar size should be considered when scrolling an item into view,
      // to ensure it's fully visible.
      // But we only need to account for its size when it's actually visible.

      var horizontalScrollbarSize = estimatedTotalWidth > width ? scrollbarSize : 0;
      var verticalScrollbarSize = estimatedTotalHeight > height ? scrollbarSize : 0;
      this.scrollTo({
        scrollLeft: columnIndex !== undefined ? getOffsetForColumnAndAlignment(this.props, columnIndex, align, scrollLeft, this._instanceProps, verticalScrollbarSize) : scrollLeft,
        scrollTop: rowIndex !== undefined ? getOffsetForRowAndAlignment(this.props, rowIndex, align, scrollTop, this._instanceProps, horizontalScrollbarSize) : scrollTop
      });
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props,
          initialScrollLeft = _this$props3.initialScrollLeft,
          initialScrollTop = _this$props3.initialScrollTop;

      if (this._outerRef != null) {
        var outerRef = this._outerRef;

        if (typeof initialScrollLeft === 'number') {
          outerRef.scrollLeft = initialScrollLeft;
        }

        if (typeof initialScrollTop === 'number') {
          outerRef.scrollTop = initialScrollTop;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var direction = this.props.direction;
      var _this$state2 = this.state,
          scrollLeft = _this$state2.scrollLeft,
          scrollTop = _this$state2.scrollTop,
          scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
        // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
        // So we need to determine which browser behavior we're dealing with, and mimic it.
        var outerRef = this._outerRef;

        if (direction === 'rtl') {
          switch (getRTLOffsetType()) {
            case 'negative':
              outerRef.scrollLeft = -scrollLeft;
              break;

            case 'positive-ascending':
              outerRef.scrollLeft = scrollLeft;
              break;

            default:
              var clientWidth = outerRef.clientWidth,
                  scrollWidth = outerRef.scrollWidth;
              outerRef.scrollLeft = scrollWidth - clientWidth - scrollLeft;
              break;
          }
        } else {
          outerRef.scrollLeft = Math.max(0, scrollLeft);
        }

        outerRef.scrollTop = Math.max(0, scrollTop);
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          columnCount = _this$props4.columnCount,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey : _this$props4$itemKey,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          rowCount = _this$props4.rowCount,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling;

      var _this$_getHorizontalR = this._getHorizontalRangeToRender(),
          columnStartIndex = _this$_getHorizontalR[0],
          columnStopIndex = _this$_getHorizontalR[1];

      var _this$_getVerticalRan = this._getVerticalRangeToRender(),
          rowStartIndex = _this$_getVerticalRan[0],
          rowStopIndex = _this$_getVerticalRan[1];

      var items = [];

      if (columnCount > 0 && rowCount) {
        for (var _rowIndex = rowStartIndex; _rowIndex <= rowStopIndex; _rowIndex++) {
          for (var _columnIndex = columnStartIndex; _columnIndex <= columnStopIndex; _columnIndex++) {
            items.push((0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(children, {
              columnIndex: _columnIndex,
              data: itemData,
              isScrolling: useIsScrolling ? isScrolling : undefined,
              key: itemKey({
                columnIndex: _columnIndex,
                data: itemData,
                rowIndex: _rowIndex
              }),
              rowIndex: _rowIndex,
              style: this._getItemStyle(_rowIndex, _columnIndex)
            }));
          }
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps);
      return (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: this._onScroll,
        ref: this._outerRefSetter,
        style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: estimatedTotalHeight,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: estimatedTotalWidth
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      var _this$props5 = this.props,
          columnCount = _this$props5.columnCount,
          onItemsRendered = _this$props5.onItemsRendered,
          onScroll = _this$props5.onScroll,
          rowCount = _this$props5.rowCount;

      if (typeof onItemsRendered === 'function') {
        if (columnCount > 0 && rowCount > 0) {
          var _this$_getHorizontalR2 = this._getHorizontalRangeToRender(),
              _overscanColumnStartIndex = _this$_getHorizontalR2[0],
              _overscanColumnStopIndex = _this$_getHorizontalR2[1],
              _visibleColumnStartIndex = _this$_getHorizontalR2[2],
              _visibleColumnStopIndex = _this$_getHorizontalR2[3];

          var _this$_getVerticalRan2 = this._getVerticalRangeToRender(),
              _overscanRowStartIndex = _this$_getVerticalRan2[0],
              _overscanRowStopIndex = _this$_getVerticalRan2[1],
              _visibleRowStartIndex = _this$_getVerticalRan2[2],
              _visibleRowStopIndex = _this$_getVerticalRan2[3];

          this._callOnItemsRendered(_overscanColumnStartIndex, _overscanColumnStopIndex, _overscanRowStartIndex, _overscanRowStopIndex, _visibleColumnStartIndex, _visibleColumnStopIndex, _visibleRowStartIndex, _visibleRowStopIndex);
        }
      }

      if (typeof onScroll === 'function') {
        var _this$state3 = this.state,
            _horizontalScrollDirection = _this$state3.horizontalScrollDirection,
            _scrollLeft = _this$state3.scrollLeft,
            _scrollTop = _this$state3.scrollTop,
            _scrollUpdateWasRequested = _this$state3.scrollUpdateWasRequested,
            _verticalScrollDirection = _this$state3.verticalScrollDirection;

        this._callOnScroll(_scrollLeft, _scrollTop, _horizontalScrollDirection, _verticalScrollDirection, _scrollUpdateWasRequested);
      }
    } // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.
    ;

    _proto._getHorizontalRangeToRender = function _getHorizontalRangeToRender() {
      var _this$props6 = this.props,
          columnCount = _this$props6.columnCount,
          overscanColumnCount = _this$props6.overscanColumnCount,
          overscanColumnsCount = _this$props6.overscanColumnsCount,
          overscanCount = _this$props6.overscanCount,
          rowCount = _this$props6.rowCount;
      var _this$state4 = this.state,
          horizontalScrollDirection = _this$state4.horizontalScrollDirection,
          isScrolling = _this$state4.isScrolling,
          scrollLeft = _this$state4.scrollLeft;
      var overscanCountResolved = overscanColumnCount || overscanColumnsCount || overscanCount || 1;

      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getColumnStartIndexForOffset(this.props, scrollLeft, this._instanceProps);
      var stopIndex = getColumnStopIndexForStartIndex(this.props, startIndex, scrollLeft, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || horizontalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || horizontalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(columnCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    _proto._getVerticalRangeToRender = function _getVerticalRangeToRender() {
      var _this$props7 = this.props,
          columnCount = _this$props7.columnCount,
          overscanCount = _this$props7.overscanCount,
          overscanRowCount = _this$props7.overscanRowCount,
          overscanRowsCount = _this$props7.overscanRowsCount,
          rowCount = _this$props7.rowCount;
      var _this$state5 = this.state,
          isScrolling = _this$state5.isScrolling,
          verticalScrollDirection = _this$state5.verticalScrollDirection,
          scrollTop = _this$state5.scrollTop;
      var overscanCountResolved = overscanRowCount || overscanRowsCount || overscanCount || 1;

      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getRowStartIndexForOffset(this.props, scrollTop, this._instanceProps);
      var stopIndex = getRowStopIndexForStartIndex(this.props, startIndex, scrollTop, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || verticalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || verticalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(rowCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return Grid;
  }(react__WEBPACK_IMPORTED_MODULE_3__.PureComponent), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    useIsScrolling: false
  }, _class;
}

var validateSharedProps = function validateSharedProps(_ref5, _ref6) {
  var children = _ref5.children,
      direction = _ref5.direction,
      height = _ref5.height,
      innerTagName = _ref5.innerTagName,
      outerTagName = _ref5.outerTagName,
      overscanColumnsCount = _ref5.overscanColumnsCount,
      overscanCount = _ref5.overscanCount,
      overscanRowsCount = _ref5.overscanRowsCount,
      width = _ref5.width;
  var instance = _ref6.instance;

  if (true) {
    if (typeof overscanCount === 'number') {
      if (devWarningsOverscanCount && !devWarningsOverscanCount.has(instance)) {
        devWarningsOverscanCount.add(instance);
        console.warn('The overscanCount prop has been deprecated. ' + 'Please use the overscanColumnCount and overscanRowCount props instead.');
      }
    }

    if (typeof overscanColumnsCount === 'number' || typeof overscanRowsCount === 'number') {
      if (devWarningsOverscanRowsColumnsCount && !devWarningsOverscanRowsColumnsCount.has(instance)) {
        devWarningsOverscanRowsColumnsCount.add(instance);
        console.warn('The overscanColumnsCount and overscanRowsCount props have been deprecated. ' + 'Please use the overscanColumnCount and overscanRowCount props instead.');
      }
    }

    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName && !devWarningsTagName.has(instance)) {
        devWarningsTagName.add(instance);
        console.warn('The innerTagName and outerTagName props have been deprecated. ' + 'Please use the innerElementType and outerElementType props instead.');
      }
    }

    if (children == null) {
      throw Error('An invalid "children" prop has been specified. ' + 'Value should be a React component. ' + ("\"" + (children === null ? 'null' : typeof children) + "\" was specified."));
    }

    switch (direction) {
      case 'ltr':
      case 'rtl':
        // Valid values
        break;

      default:
        throw Error('An invalid "direction" prop has been specified. ' + 'Value should be either "ltr" or "rtl". ' + ("\"" + direction + "\" was specified."));
    }

    if (typeof width !== 'number') {
      throw Error('An invalid "width" prop has been specified. ' + 'Grids must specify a number for width. ' + ("\"" + (width === null ? 'null' : typeof width) + "\" was specified."));
    }

    if (typeof height !== 'number') {
      throw Error('An invalid "height" prop has been specified. ' + 'Grids must specify a number for height. ' + ("\"" + (height === null ? 'null' : typeof height) + "\" was specified."));
    }
  }
};

var DEFAULT_ESTIMATED_ITEM_SIZE = 50;

var getEstimatedTotalHeight = function getEstimatedTotalHeight(_ref, _ref2) {
  var rowCount = _ref.rowCount;
  var rowMetadataMap = _ref2.rowMetadataMap,
      estimatedRowHeight = _ref2.estimatedRowHeight,
      lastMeasuredRowIndex = _ref2.lastMeasuredRowIndex;
  var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredRowIndex >= rowCount) {
    lastMeasuredRowIndex = rowCount - 1;
  }

  if (lastMeasuredRowIndex >= 0) {
    var itemMetadata = rowMetadataMap[lastMeasuredRowIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = rowCount - lastMeasuredRowIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedRowHeight;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};

var getEstimatedTotalWidth = function getEstimatedTotalWidth(_ref3, _ref4) {
  var columnCount = _ref3.columnCount;
  var columnMetadataMap = _ref4.columnMetadataMap,
      estimatedColumnWidth = _ref4.estimatedColumnWidth,
      lastMeasuredColumnIndex = _ref4.lastMeasuredColumnIndex;
  var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredColumnIndex >= columnCount) {
    lastMeasuredColumnIndex = columnCount - 1;
  }

  if (lastMeasuredColumnIndex >= 0) {
    var itemMetadata = columnMetadataMap[lastMeasuredColumnIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = columnCount - lastMeasuredColumnIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedColumnWidth;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};

var getItemMetadata = function getItemMetadata(itemType, props, index, instanceProps) {
  var itemMetadataMap, itemSize, lastMeasuredIndex;

  if (itemType === 'column') {
    itemMetadataMap = instanceProps.columnMetadataMap;
    itemSize = props.columnWidth;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    itemSize = props.rowHeight;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    if (itemType === 'column') {
      instanceProps.lastMeasuredColumnIndex = index;
    } else {
      instanceProps.lastMeasuredRowIndex = index;
    }
  }

  return itemMetadataMap[index];
};

var findNearestItem = function findNearestItem(itemType, props, instanceProps, offset) {
  var itemMetadataMap, lastMeasuredIndex;

  if (itemType === 'column') {
    itemMetadataMap = instanceProps.columnMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }

  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch(itemType, props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch(itemType, props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch = function findNearestItemBinarySearch(itemType, props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata(itemType, props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch = function findNearestItemExponentialSearch(itemType, props, instanceProps, index, offset) {
  var itemCount = itemType === 'column' ? props.columnCount : props.rowCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata(itemType, props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch(itemType, props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var getOffsetForIndexAndAlignment = function getOffsetForIndexAndAlignment(itemType, props, index, align, scrollOffset, instanceProps, scrollbarSize) {
  var size = itemType === 'column' ? props.width : props.height;
  var itemMetadata = getItemMetadata(itemType, props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
  // To ensure it reflects actual measurements instead of just estimates.

  var estimatedTotalSize = itemType === 'column' ? getEstimatedTotalWidth(props, instanceProps) : getEstimatedTotalHeight(props, instanceProps);
  var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
  var minOffset = Math.max(0, itemMetadata.offset - size + scrollbarSize + itemMetadata.size);

  if (align === 'smart') {
    if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
      align = 'auto';
    } else {
      align = 'center';
    }
  }

  switch (align) {
    case 'start':
      return maxOffset;

    case 'end':
      return minOffset;

    case 'center':
      return Math.round(minOffset + (maxOffset - minOffset) / 2);

    case 'auto':
    default:
      if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
        return scrollOffset;
      } else if (minOffset > maxOffset) {
        // Because we only take into account the scrollbar size when calculating minOffset
        // this value can be larger than maxOffset when at the end of the list
        return minOffset;
      } else if (scrollOffset < minOffset) {
        return minOffset;
      } else {
        return maxOffset;
      }

  }
};

var VariableSizeGrid = /*#__PURE__*/createGridComponent({
  getColumnOffset: function getColumnOffset(props, index, instanceProps) {
    return getItemMetadata('column', props, index, instanceProps).offset;
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(props, scrollLeft, instanceProps) {
    return findNearestItem('column', props, instanceProps, scrollLeft);
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(props, startIndex, scrollLeft, instanceProps) {
    var columnCount = props.columnCount,
        width = props.width;
    var itemMetadata = getItemMetadata('column', props, startIndex, instanceProps);
    var maxOffset = scrollLeft + width;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < columnCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata('column', props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  getColumnWidth: function getColumnWidth(props, index, instanceProps) {
    return instanceProps.columnMetadataMap[index].size;
  },
  getEstimatedTotalHeight: getEstimatedTotalHeight,
  getEstimatedTotalWidth: getEstimatedTotalWidth,
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    return getOffsetForIndexAndAlignment('column', props, index, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    return getOffsetForIndexAndAlignment('row', props, index, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getRowOffset: function getRowOffset(props, index, instanceProps) {
    return getItemMetadata('row', props, index, instanceProps).offset;
  },
  getRowHeight: function getRowHeight(props, index, instanceProps) {
    return instanceProps.rowMetadataMap[index].size;
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(props, scrollTop, instanceProps) {
    return findNearestItem('row', props, instanceProps, scrollTop);
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(props, startIndex, scrollTop, instanceProps) {
    var rowCount = props.rowCount,
        height = props.height;
    var itemMetadata = getItemMetadata('row', props, startIndex, instanceProps);
    var maxOffset = scrollTop + height;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < rowCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata('row', props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref5 = props,
        estimatedColumnWidth = _ref5.estimatedColumnWidth,
        estimatedRowHeight = _ref5.estimatedRowHeight;
    var instanceProps = {
      columnMetadataMap: {},
      estimatedColumnWidth: estimatedColumnWidth || DEFAULT_ESTIMATED_ITEM_SIZE,
      estimatedRowHeight: estimatedRowHeight || DEFAULT_ESTIMATED_ITEM_SIZE,
      lastMeasuredColumnIndex: -1,
      lastMeasuredRowIndex: -1,
      rowMetadataMap: {}
    };

    instance.resetAfterColumnIndex = function (columnIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instance.resetAfterIndices({
        columnIndex: columnIndex,
        shouldForceUpdate: shouldForceUpdate
      });
    };

    instance.resetAfterRowIndex = function (rowIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instance.resetAfterIndices({
        rowIndex: rowIndex,
        shouldForceUpdate: shouldForceUpdate
      });
    };

    instance.resetAfterIndices = function (_ref6) {
      var columnIndex = _ref6.columnIndex,
          rowIndex = _ref6.rowIndex,
          _ref6$shouldForceUpda = _ref6.shouldForceUpdate,
          shouldForceUpdate = _ref6$shouldForceUpda === void 0 ? true : _ref6$shouldForceUpda;

      if (typeof columnIndex === 'number') {
        instanceProps.lastMeasuredColumnIndex = Math.min(instanceProps.lastMeasuredColumnIndex, columnIndex - 1);
      }

      if (typeof rowIndex === 'number') {
        instanceProps.lastMeasuredRowIndex = Math.min(instanceProps.lastMeasuredRowIndex, rowIndex - 1);
      } // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.


      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref7) {
    var columnWidth = _ref7.columnWidth,
        rowHeight = _ref7.rowHeight;

    if (true) {
      if (typeof columnWidth !== 'function') {
        throw Error('An invalid "columnWidth" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (columnWidth === null ? 'null' : typeof columnWidth) + "\" was specified."));
      } else if (typeof rowHeight !== 'function') {
        throw Error('An invalid "rowHeight" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (rowHeight === null ? 'null' : typeof rowHeight) + "\" was specified."));
      }
    }
  }
});

var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;

var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsDirection = null;
var devWarningsTagName$1 = null;

if (true) {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsDirection = /*#__PURE__*/new WeakSet();
    devWarningsTagName$1 = /*#__PURE__*/new WeakSet();
  }
}

function createListComponent(_ref) {
  var _class;

  var getItemOffset = _ref.getItemOffset,
      getEstimatedTotalSize = _ref.getEstimatedTotalSize,
      getItemSize = _ref.getItemSize,
      getOffsetForIndexAndAlignment = _ref.getOffsetForIndexAndAlignment,
      getStartIndexForOffset = _ref.getStartIndexForOffset,
      getStopIndexForStartIndex = _ref.getStopIndexForStartIndex,
      initInstanceProps = _ref.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref.validateProps;
  return _class = /*#__PURE__*/function (_PureComponent) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(List, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function List(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this),
        isScrolling: false,
        scrollDirection: 'forward',
        scrollOffset: typeof _this.props.initialScrollOffset === 'number' ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex: overscanStartIndex,
          overscanStopIndex: overscanStopIndex,
          visibleStartIndex: visibleStartIndex,
          visibleStopIndex: visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection: scrollDirection,
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (index) {
        var _this$props = _this.props,
            direction = _this$props.direction,
            itemSize = _this$props.itemSize,
            layout = _this$props.layout;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);

        var style;

        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _offset = getItemOffset(_this.props, index, _this._instanceProps);

          var size = getItemSize(_this.props, index, _this._instanceProps); // TODO Deprecate direction "horizontal"

          var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
          var isRtl = direction === 'rtl';
          var offsetHorizontal = isHorizontal ? _offset : 0;
          itemStyleCache[index] = style = {
            position: 'absolute',
            left: isRtl ? undefined : offsetHorizontal,
            right: isRtl ? offsetHorizontal : undefined,
            top: !isHorizontal ? _offset : 0,
            height: !isHorizontal ? size : '100%',
            width: isHorizontal ? size : '100%'
          };
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (_, __, ___) {
        return {};
      });

      _this._onScrollHorizontal = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;

          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
            // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
            switch (getRTLOffsetType()) {
              case 'negative':
                scrollOffset = -scrollLeft;
                break;

              case 'positive-descending':
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollLeft ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._onScrollVertical = function (event) {
        var _event$currentTarget2 = event.currentTarget,
            clientHeight = _event$currentTarget2.clientHeight,
            scrollHeight = _event$currentTarget2.scrollHeight,
            scrollTop = _event$currentTarget2.scrollTop;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1, null);
        });
      };

      return _this;
    }

    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = List.prototype;

    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function (prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }

        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = 'auto';
      }

      var itemCount = this.props.itemCount;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1));
      this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps));
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props2 = this.props,
          direction = _this$props2.direction,
          initialScrollOffset = _this$props2.initialScrollOffset,
          layout = _this$props2.layout;

      if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props3 = this.props,
          direction = _this$props3.direction,
          layout = _this$props3.layout;
      var _this$state = this.state,
          scrollOffset = _this$state.scrollOffset,
          scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // So we need to determine which browser behavior we're dealing with, and mimic it.
            switch (getRTLOffsetType()) {
              case 'negative':
                outerRef.scrollLeft = -scrollOffset;
                break;

              case 'positive-ascending':
                outerRef.scrollLeft = scrollOffset;
                break;

              default:
                var clientWidth = outerRef.clientWidth,
                    scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemCount = _this$props4.itemCount,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey$1 : _this$props4$itemKey,
          layout = _this$props4.layout,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling; // TODO Deprecate direction "horizontal"

      var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;

      var _this$_getRangeToRend = this._getRangeToRender(),
          startIndex = _this$_getRangeToRend[0],
          stopIndex = _this$_getRangeToRend[1];

      var items = [];

      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push((0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : undefined,
            style: this._getItemStyle(_index)
          }));
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalSize = getEstimatedTotalSize(this.props, this._instanceProps);
      return (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: onScroll,
        ref: this._outerRefSetter,
        style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? '100%' : estimatedTotalSize,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: isHorizontal ? estimatedTotalSize : '100%'
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === 'function') {
        var itemCount = this.props.itemCount;

        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(),
              _overscanStartIndex = _this$_getRangeToRend2[0],
              _overscanStopIndex = _this$_getRangeToRend2[1],
              _visibleStartIndex = _this$_getRangeToRend2[2],
              _visibleStopIndex = _this$_getRangeToRend2[3];

          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }

      if (typeof this.props.onScroll === 'function') {
        var _this$state2 = this.state,
            _scrollDirection = _this$state2.scrollDirection,
            _scrollOffset = _this$state2.scrollOffset,
            _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    } // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.
    ;

    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props5 = this.props,
          itemCount = _this$props5.itemCount,
          overscanCount = _this$props5.overscanCount;
      var _this$state3 = this.state,
          isScrolling = _this$state3.isScrolling,
          scrollDirection = _this$state3.scrollDirection,
          scrollOffset = _this$state3.scrollOffset;

      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || scrollDirection === 'backward' ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === 'forward' ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return List;
  }(react__WEBPACK_IMPORTED_MODULE_3__.PureComponent), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    layout: 'vertical',
    overscanCount: 2,
    useIsScrolling: false
  }, _class;
} // NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.

var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  var children = _ref2.children,
      direction = _ref2.direction,
      height = _ref2.height,
      layout = _ref2.layout,
      innerTagName = _ref2.innerTagName,
      outerTagName = _ref2.outerTagName,
      width = _ref2.width;
  var instance = _ref3.instance;

  if (true) {
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName$1 && !devWarningsTagName$1.has(instance)) {
        devWarningsTagName$1.add(instance);
        console.warn('The innerTagName and outerTagName props have been deprecated. ' + 'Please use the innerElementType and outerElementType props instead.');
      }
    } // TODO Deprecate direction "horizontal"


    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';

    switch (direction) {
      case 'horizontal':
      case 'vertical':
        if (devWarningsDirection && !devWarningsDirection.has(instance)) {
          devWarningsDirection.add(instance);
          console.warn('The direction prop should be either "ltr" (default) or "rtl". ' + 'Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.');
        }

        break;

      case 'ltr':
      case 'rtl':
        // Valid values
        break;

      default:
        throw Error('An invalid "direction" prop has been specified. ' + 'Value should be either "ltr" or "rtl". ' + ("\"" + direction + "\" was specified."));
    }

    switch (layout) {
      case 'horizontal':
      case 'vertical':
        // Valid values
        break;

      default:
        throw Error('An invalid "layout" prop has been specified. ' + 'Value should be either "horizontal" or "vertical". ' + ("\"" + layout + "\" was specified."));
    }

    if (children == null) {
      throw Error('An invalid "children" prop has been specified. ' + 'Value should be a React component. ' + ("\"" + (children === null ? 'null' : typeof children) + "\" was specified."));
    }

    if (isHorizontal && typeof width !== 'number') {
      throw Error('An invalid "width" prop has been specified. ' + 'Horizontal lists must specify a number for width. ' + ("\"" + (width === null ? 'null' : typeof width) + "\" was specified."));
    } else if (!isHorizontal && typeof height !== 'number') {
      throw Error('An invalid "height" prop has been specified. ' + 'Vertical lists must specify a number for height. ' + ("\"" + (height === null ? 'null' : typeof height) + "\" was specified."));
    }
  }
};

var DEFAULT_ESTIMATED_ITEM_SIZE$1 = 50;

var getItemMetadata$1 = function getItemMetadata(props, index, instanceProps) {
  var _ref = props,
      itemSize = _ref.itemSize;
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    instanceProps.lastMeasuredIndex = index;
  }

  return itemMetadataMap[index];
};

var findNearestItem$1 = function findNearestItem(props, instanceProps, offset) {
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;
  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch$1(props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch$1(props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch$1 = function findNearestItemBinarySearch(props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata$1(props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch$1 = function findNearestItemExponentialSearch(props, instanceProps, index, offset) {
  var itemCount = props.itemCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata$1(props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch$1(props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var getEstimatedTotalSize = function getEstimatedTotalSize(_ref2, _ref3) {
  var itemCount = _ref2.itemCount;
  var itemMetadataMap = _ref3.itemMetadataMap,
      estimatedItemSize = _ref3.estimatedItemSize,
      lastMeasuredIndex = _ref3.lastMeasuredIndex;
  var totalSizeOfMeasuredItems = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredIndex >= itemCount) {
    lastMeasuredIndex = itemCount - 1;
  }

  if (lastMeasuredIndex >= 0) {
    var itemMetadata = itemMetadataMap[lastMeasuredIndex];
    totalSizeOfMeasuredItems = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = itemCount - lastMeasuredIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedItemSize;
  return totalSizeOfMeasuredItems + totalSizeOfUnmeasuredItems;
};

var VariableSizeList = /*#__PURE__*/createListComponent({
  getItemOffset: function getItemOffset(props, index, instanceProps) {
    return getItemMetadata$1(props, index, instanceProps).offset;
  },
  getItemSize: function getItemSize(props, index, instanceProps) {
    return instanceProps.itemMetadataMap[index].size;
  },
  getEstimatedTotalSize: getEstimatedTotalSize,
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(props, index, align, scrollOffset, instanceProps) {
    var direction = props.direction,
        height = props.height,
        layout = props.layout,
        width = props.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
    // To ensure it reflects actual measurements instead of just estimates.

    var estimatedTotalSize = getEstimatedTotalSize(props, instanceProps);
    var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
    var minOffset = Math.max(0, itemMetadata.offset - size + itemMetadata.size);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        return Math.round(minOffset + (maxOffset - minOffset) / 2);

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(props, offset, instanceProps) {
    return findNearestItem$1(props, instanceProps, offset);
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(props, startIndex, scrollOffset, instanceProps) {
    var direction = props.direction,
        height = props.height,
        itemCount = props.itemCount,
        layout = props.layout,
        width = props.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, startIndex, instanceProps);
    var maxOffset = scrollOffset + size;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < itemCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata$1(props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref4 = props,
        estimatedItemSize = _ref4.estimatedItemSize;
    var instanceProps = {
      itemMetadataMap: {},
      estimatedItemSize: estimatedItemSize || DEFAULT_ESTIMATED_ITEM_SIZE$1,
      lastMeasuredIndex: -1
    };

    instance.resetAfterIndex = function (index, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instanceProps.lastMeasuredIndex = Math.min(instanceProps.lastMeasuredIndex, index - 1); // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.

      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref5) {
    var itemSize = _ref5.itemSize;

    if (true) {
      if (typeof itemSize !== 'function') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (itemSize === null ? 'null' : typeof itemSize) + "\" was specified."));
      }
    }
  }
});

var FixedSizeGrid = /*#__PURE__*/createGridComponent({
  getColumnOffset: function getColumnOffset(_ref, index) {
    var columnWidth = _ref.columnWidth;
    return index * columnWidth;
  },
  getColumnWidth: function getColumnWidth(_ref2, index) {
    var columnWidth = _ref2.columnWidth;
    return columnWidth;
  },
  getRowOffset: function getRowOffset(_ref3, index) {
    var rowHeight = _ref3.rowHeight;
    return index * rowHeight;
  },
  getRowHeight: function getRowHeight(_ref4, index) {
    var rowHeight = _ref4.rowHeight;
    return rowHeight;
  },
  getEstimatedTotalHeight: function getEstimatedTotalHeight(_ref5) {
    var rowCount = _ref5.rowCount,
        rowHeight = _ref5.rowHeight;
    return rowHeight * rowCount;
  },
  getEstimatedTotalWidth: function getEstimatedTotalWidth(_ref6) {
    var columnCount = _ref6.columnCount,
        columnWidth = _ref6.columnWidth;
    return columnWidth * columnCount;
  },
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(_ref7, columnIndex, align, scrollLeft, instanceProps, scrollbarSize) {
    var columnCount = _ref7.columnCount,
        columnWidth = _ref7.columnWidth,
        width = _ref7.width;
    var lastColumnOffset = Math.max(0, columnCount * columnWidth - width);
    var maxOffset = Math.min(lastColumnOffset, columnIndex * columnWidth);
    var minOffset = Math.max(0, columnIndex * columnWidth - width + scrollbarSize + columnWidth);

    if (align === 'smart') {
      if (scrollLeft >= minOffset - width && scrollLeft <= maxOffset + width) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

        if (middleOffset < Math.ceil(width / 2)) {
          return 0; // near the beginning
        } else if (middleOffset > lastColumnOffset + Math.floor(width / 2)) {
          return lastColumnOffset; // near the end
        } else {
          return middleOffset;
        }

      case 'auto':
      default:
        if (scrollLeft >= minOffset && scrollLeft <= maxOffset) {
          return scrollLeft;
        } else if (minOffset > maxOffset) {
          // Because we only take into account the scrollbar size when calculating minOffset
          // this value can be larger than maxOffset when at the end of the list
          return minOffset;
        } else if (scrollLeft < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(_ref8, rowIndex, align, scrollTop, instanceProps, scrollbarSize) {
    var rowHeight = _ref8.rowHeight,
        height = _ref8.height,
        rowCount = _ref8.rowCount;
    var lastRowOffset = Math.max(0, rowCount * rowHeight - height);
    var maxOffset = Math.min(lastRowOffset, rowIndex * rowHeight);
    var minOffset = Math.max(0, rowIndex * rowHeight - height + scrollbarSize + rowHeight);

    if (align === 'smart') {
      if (scrollTop >= minOffset - height && scrollTop <= maxOffset + height) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

        if (middleOffset < Math.ceil(height / 2)) {
          return 0; // near the beginning
        } else if (middleOffset > lastRowOffset + Math.floor(height / 2)) {
          return lastRowOffset; // near the end
        } else {
          return middleOffset;
        }

      case 'auto':
      default:
        if (scrollTop >= minOffset && scrollTop <= maxOffset) {
          return scrollTop;
        } else if (minOffset > maxOffset) {
          // Because we only take into account the scrollbar size when calculating minOffset
          // this value can be larger than maxOffset when at the end of the list
          return minOffset;
        } else if (scrollTop < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(_ref9, scrollLeft) {
    var columnWidth = _ref9.columnWidth,
        columnCount = _ref9.columnCount;
    return Math.max(0, Math.min(columnCount - 1, Math.floor(scrollLeft / columnWidth)));
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(_ref10, startIndex, scrollLeft) {
    var columnWidth = _ref10.columnWidth,
        columnCount = _ref10.columnCount,
        width = _ref10.width;
    var left = startIndex * columnWidth;
    var numVisibleColumns = Math.ceil((width + scrollLeft - left) / columnWidth);
    return Math.max(0, Math.min(columnCount - 1, startIndex + numVisibleColumns - 1 // -1 is because stop index is inclusive
    ));
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(_ref11, scrollTop) {
    var rowHeight = _ref11.rowHeight,
        rowCount = _ref11.rowCount;
    return Math.max(0, Math.min(rowCount - 1, Math.floor(scrollTop / rowHeight)));
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(_ref12, startIndex, scrollTop) {
    var rowHeight = _ref12.rowHeight,
        rowCount = _ref12.rowCount,
        height = _ref12.height;
    var top = startIndex * rowHeight;
    var numVisibleRows = Math.ceil((height + scrollTop - top) / rowHeight);
    return Math.max(0, Math.min(rowCount - 1, startIndex + numVisibleRows - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref13) {
    var columnWidth = _ref13.columnWidth,
        rowHeight = _ref13.rowHeight;

    if (true) {
      if (typeof columnWidth !== 'number') {
        throw Error('An invalid "columnWidth" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (columnWidth === null ? 'null' : typeof columnWidth) + "\" was specified."));
      }

      if (typeof rowHeight !== 'number') {
        throw Error('An invalid "rowHeight" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (rowHeight === null ? 'null' : typeof rowHeight) + "\" was specified."));
      }
    }
  }
});

var FixedSizeList = /*#__PURE__*/createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount,
        itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset) {
    var direction = _ref4.direction,
        height = _ref4.height,
        itemCount = _ref4.itemCount,
        itemSize = _ref4.itemSize,
        layout = _ref4.layout,
        width = _ref4.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size + itemSize);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        {
          // "Centered" offset is usually the average of the min and max.
          // But near the edges of the list, this doesn't hold true.
          var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

          if (middleOffset < Math.ceil(size / 2)) {
            return 0; // near the beginning
          } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
            return lastItemOffset; // near the end
          } else {
            return middleOffset;
          }
        }

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount,
        itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction,
        height = _ref6.height,
        itemCount = _ref6.itemCount,
        itemSize = _ref6.itemSize,
        layout = _ref6.layout,
        width = _ref6.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var offset = startIndex * itemSize;
    var size = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    var itemSize = _ref7.itemSize;

    if (true) {
      if (typeof itemSize !== 'number') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (itemSize === null ? 'null' : typeof itemSize) + "\" was specified."));
      }
    }
  }
});

// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(prev, next) {
  for (var attribute in prev) {
    if (!(attribute in next)) {
      return true;
    }
  }

  for (var _attribute in next) {
    if (prev[_attribute] !== next[_attribute]) {
      return true;
    }
  }

  return false;
}

var _excluded = ["style"],
    _excluded2 = ["style"];
// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-api.html#reactmemo

function areEqual(prevProps, nextProps) {
  var prevStyle = prevProps.style,
      prevRest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(prevProps, _excluded);

  var nextStyle = nextProps.style,
      nextRest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(nextProps, _excluded2);

  return !shallowDiffers(prevStyle, nextStyle) && !shallowDiffers(prevRest, nextRest);
}

// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-component.html#shouldcomponentupdate

function shouldComponentUpdate(nextProps, nextState) {
  return !areEqual(this.props, nextProps) || shallowDiffers(this.state, nextState);
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/remove-accents/index.js":
/*!**********************************************!*\
  !*** ./node_modules/remove-accents/index.js ***!
  \**********************************************/
/***/ ((module) => {

var characterMap = {
	"À": "A",
	"Á": "A",
	"Â": "A",
	"Ã": "A",
	"Ä": "A",
	"Å": "A",
	"Ấ": "A",
	"Ắ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",
	"Æ": "AE",
	"Ầ": "A",
	"Ằ": "A",
	"Ȃ": "A",
	"Ç": "C",
	"Ḉ": "C",
	"È": "E",
	"É": "E",
	"Ê": "E",
	"Ë": "E",
	"Ế": "E",
	"Ḗ": "E",
	"Ề": "E",
	"Ḕ": "E",
	"Ḝ": "E",
	"Ȇ": "E",
	"Ì": "I",
	"Í": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"Ȋ": "I",
	"Ð": "D",
	"Ñ": "N",
	"Ò": "O",
	"Ó": "O",
	"Ô": "O",
	"Õ": "O",
	"Ö": "O",
	"Ø": "O",
	"Ố": "O",
	"Ṍ": "O",
	"Ṓ": "O",
	"Ȏ": "O",
	"Ù": "U",
	"Ú": "U",
	"Û": "U",
	"Ü": "U",
	"Ý": "Y",
	"à": "a",
	"á": "a",
	"â": "a",
	"ã": "a",
	"ä": "a",
	"å": "a",
	"ấ": "a",
	"ắ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",
	"æ": "ae",
	"ầ": "a",
	"ằ": "a",
	"ȃ": "a",
	"ç": "c",
	"ḉ": "c",
	"è": "e",
	"é": "e",
	"ê": "e",
	"ë": "e",
	"ế": "e",
	"ḗ": "e",
	"ề": "e",
	"ḕ": "e",
	"ḝ": "e",
	"ȇ": "e",
	"ì": "i",
	"í": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ȋ": "i",
	"ð": "d",
	"ñ": "n",
	"ò": "o",
	"ó": "o",
	"ô": "o",
	"õ": "o",
	"ö": "o",
	"ø": "o",
	"ố": "o",
	"ṍ": "o",
	"ṓ": "o",
	"ȏ": "o",
	"ù": "u",
	"ú": "u",
	"û": "u",
	"ü": "u",
	"ý": "y",
	"ÿ": "y",
	"Ā": "A",
	"ā": "a",
	"Ă": "A",
	"ă": "a",
	"Ą": "A",
	"ą": "a",
	"Ć": "C",
	"ć": "c",
	"Ĉ": "C",
	"ĉ": "c",
	"Ċ": "C",
	"ċ": "c",
	"Č": "C",
	"č": "c",
	"C̆": "C",
	"c̆": "c",
	"Ď": "D",
	"ď": "d",
	"Đ": "D",
	"đ": "d",
	"Ē": "E",
	"ē": "e",
	"Ĕ": "E",
	"ĕ": "e",
	"Ė": "E",
	"ė": "e",
	"Ę": "E",
	"ę": "e",
	"Ě": "E",
	"ě": "e",
	"Ĝ": "G",
	"Ǵ": "G",
	"ĝ": "g",
	"ǵ": "g",
	"Ğ": "G",
	"ğ": "g",
	"Ġ": "G",
	"ġ": "g",
	"Ģ": "G",
	"ģ": "g",
	"Ĥ": "H",
	"ĥ": "h",
	"Ħ": "H",
	"ħ": "h",
	"Ḫ": "H",
	"ḫ": "h",
	"Ĩ": "I",
	"ĩ": "i",
	"Ī": "I",
	"ī": "i",
	"Ĭ": "I",
	"ĭ": "i",
	"Į": "I",
	"į": "i",
	"İ": "I",
	"ı": "i",
	"Ĳ": "IJ",
	"ĳ": "ij",
	"Ĵ": "J",
	"ĵ": "j",
	"Ķ": "K",
	"ķ": "k",
	"Ḱ": "K",
	"ḱ": "k",
	"K̆": "K",
	"k̆": "k",
	"Ĺ": "L",
	"ĺ": "l",
	"Ļ": "L",
	"ļ": "l",
	"Ľ": "L",
	"ľ": "l",
	"Ŀ": "L",
	"ŀ": "l",
	"Ł": "l",
	"ł": "l",
	"Ḿ": "M",
	"ḿ": "m",
	"M̆": "M",
	"m̆": "m",
	"Ń": "N",
	"ń": "n",
	"Ņ": "N",
	"ņ": "n",
	"Ň": "N",
	"ň": "n",
	"ŉ": "n",
	"N̆": "N",
	"n̆": "n",
	"Ō": "O",
	"ō": "o",
	"Ŏ": "O",
	"ŏ": "o",
	"Ő": "O",
	"ő": "o",
	"Œ": "OE",
	"œ": "oe",
	"P̆": "P",
	"p̆": "p",
	"Ŕ": "R",
	"ŕ": "r",
	"Ŗ": "R",
	"ŗ": "r",
	"Ř": "R",
	"ř": "r",
	"R̆": "R",
	"r̆": "r",
	"Ȓ": "R",
	"ȓ": "r",
	"Ś": "S",
	"ś": "s",
	"Ŝ": "S",
	"ŝ": "s",
	"Ş": "S",
	"Ș": "S",
	"ș": "s",
	"ş": "s",
	"Š": "S",
	"š": "s",
	"Ţ": "T",
	"ţ": "t",
	"ț": "t",
	"Ț": "T",
	"Ť": "T",
	"ť": "t",
	"Ŧ": "T",
	"ŧ": "t",
	"T̆": "T",
	"t̆": "t",
	"Ũ": "U",
	"ũ": "u",
	"Ū": "U",
	"ū": "u",
	"Ŭ": "U",
	"ŭ": "u",
	"Ů": "U",
	"ů": "u",
	"Ű": "U",
	"ű": "u",
	"Ų": "U",
	"ų": "u",
	"Ȗ": "U",
	"ȗ": "u",
	"V̆": "V",
	"v̆": "v",
	"Ŵ": "W",
	"ŵ": "w",
	"Ẃ": "W",
	"ẃ": "w",
	"X̆": "X",
	"x̆": "x",
	"Ŷ": "Y",
	"ŷ": "y",
	"Ÿ": "Y",
	"Y̆": "Y",
	"y̆": "y",
	"Ź": "Z",
	"ź": "z",
	"Ż": "Z",
	"ż": "z",
	"Ž": "Z",
	"ž": "z",
	"ſ": "s",
	"ƒ": "f",
	"Ơ": "O",
	"ơ": "o",
	"Ư": "U",
	"ư": "u",
	"Ǎ": "A",
	"ǎ": "a",
	"Ǐ": "I",
	"ǐ": "i",
	"Ǒ": "O",
	"ǒ": "o",
	"Ǔ": "U",
	"ǔ": "u",
	"Ǖ": "U",
	"ǖ": "u",
	"Ǘ": "U",
	"ǘ": "u",
	"Ǚ": "U",
	"ǚ": "u",
	"Ǜ": "U",
	"ǜ": "u",
	"Ứ": "U",
	"ứ": "u",
	"Ṹ": "U",
	"ṹ": "u",
	"Ǻ": "A",
	"ǻ": "a",
	"Ǽ": "AE",
	"ǽ": "ae",
	"Ǿ": "O",
	"ǿ": "o",
	"Þ": "TH",
	"þ": "th",
	"Ṕ": "P",
	"ṕ": "p",
	"Ṥ": "S",
	"ṥ": "s",
	"X́": "X",
	"x́": "x",
	"Ѓ": "Г",
	"ѓ": "г",
	"Ќ": "К",
	"ќ": "к",
	"A̋": "A",
	"a̋": "a",
	"E̋": "E",
	"e̋": "e",
	"I̋": "I",
	"i̋": "i",
	"Ǹ": "N",
	"ǹ": "n",
	"Ồ": "O",
	"ồ": "o",
	"Ṑ": "O",
	"ṑ": "o",
	"Ừ": "U",
	"ừ": "u",
	"Ẁ": "W",
	"ẁ": "w",
	"Ỳ": "Y",
	"ỳ": "y",
	"Ȁ": "A",
	"ȁ": "a",
	"Ȅ": "E",
	"ȅ": "e",
	"Ȉ": "I",
	"ȉ": "i",
	"Ȍ": "O",
	"ȍ": "o",
	"Ȑ": "R",
	"ȑ": "r",
	"Ȕ": "U",
	"ȕ": "u",
	"B̌": "B",
	"b̌": "b",
	"Č̣": "C",
	"č̣": "c",
	"Ê̌": "E",
	"ê̌": "e",
	"F̌": "F",
	"f̌": "f",
	"Ǧ": "G",
	"ǧ": "g",
	"Ȟ": "H",
	"ȟ": "h",
	"J̌": "J",
	"ǰ": "j",
	"Ǩ": "K",
	"ǩ": "k",
	"M̌": "M",
	"m̌": "m",
	"P̌": "P",
	"p̌": "p",
	"Q̌": "Q",
	"q̌": "q",
	"Ř̩": "R",
	"ř̩": "r",
	"Ṧ": "S",
	"ṧ": "s",
	"V̌": "V",
	"v̌": "v",
	"W̌": "W",
	"w̌": "w",
	"X̌": "X",
	"x̌": "x",
	"Y̌": "Y",
	"y̌": "y",
	"A̧": "A",
	"a̧": "a",
	"B̧": "B",
	"b̧": "b",
	"Ḑ": "D",
	"ḑ": "d",
	"Ȩ": "E",
	"ȩ": "e",
	"Ɛ̧": "E",
	"ɛ̧": "e",
	"Ḩ": "H",
	"ḩ": "h",
	"I̧": "I",
	"i̧": "i",
	"Ɨ̧": "I",
	"ɨ̧": "i",
	"M̧": "M",
	"m̧": "m",
	"O̧": "O",
	"o̧": "o",
	"Q̧": "Q",
	"q̧": "q",
	"U̧": "U",
	"u̧": "u",
	"X̧": "X",
	"x̧": "x",
	"Z̧": "Z",
	"z̧": "z",
};

var chars = Object.keys(characterMap).join('|');
var allAccents = new RegExp(chars, 'g');
var firstAccent = new RegExp(chars, '');

var removeAccents = function(string) {	
	return string.replace(allAccents, function(match) {
		return characterMap[match];
	});
};

var hasAccents = function(string) {
	return !!string.match(firstAccent);
};

module.exports = removeAccents;
module.exports.has = hasAccents;
module.exports.remove = removeAccents;


/***/ }),

/***/ "./resources/js/src/@fake-db/mui-components/auto-complete sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$":
/*!****************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@fake-db/mui-components/auto-complete/ sync nonrecursive !./node_modules/raw-loader/dist/cjs.js! \.(txt%7Cjs%7Cmd%7Ctsx)$ ***!
  \****************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Asynchronous.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Asynchronous.txt",
	"./CheckboxesTags.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/CheckboxesTags.txt",
	"./ComboBox.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/ComboBox.txt",
	"./ControllableStates.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/ControllableStates.txt",
	"./CountrySelect.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/CountrySelect.txt",
	"./CustomInputAutocomplete.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/CustomInputAutocomplete.txt",
	"./CustomizedHook.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/CustomizedHook.txt",
	"./DisabledOptions.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/DisabledOptions.txt",
	"./Filter.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Filter.txt",
	"./FixedTags.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/FixedTags.txt",
	"./FreeSolo.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/FreeSolo.txt",
	"./FreeSoloCreateOption.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/FreeSoloCreateOption.txt",
	"./FreeSoloCreateOptionDialog.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/FreeSoloCreateOptionDialog.txt",
	"./GitHubLabel.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/GitHubLabel.txt",
	"./GoogleMaps.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/GoogleMaps.txt",
	"./Grouped.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Grouped.txt",
	"./Highlights.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Highlights.txt",
	"./LimitTags.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/LimitTags.txt",
	"./Playground.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Playground.txt",
	"./Sizes.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Sizes.txt",
	"./Tags.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Tags.txt",
	"./UseAutocomplete.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/UseAutocomplete.txt",
	"./Virtualize.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/auto-complete/Virtualize.txt"
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
webpackContext.id = "./resources/js/src/@fake-db/mui-components/auto-complete sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$";

/***/ })

}]);