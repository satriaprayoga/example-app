(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_routes_Components_MuiComponents_Drawer_index_js"],{

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

/***/ "./node_modules/@material-ui/core/esm/SwipeableDrawer/SwipeArea.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/SwipeableDrawer/SwipeArea.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "styles": () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _Drawer_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Drawer/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: theme.zIndex.drawer - 1
    },
    anchorLeft: {
      right: 'auto'
    },
    anchorRight: {
      left: 'auto',
      right: 0
    },
    anchorTop: {
      bottom: 'auto',
      right: 0
    },
    anchorBottom: {
      top: 'auto',
      bottom: 0,
      right: 0
    }
  };
};
/**
 * @ignore - internal component.
 */

var SwipeArea = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function SwipeArea(props, ref) {
  var anchor = props.anchor,
      classes = props.classes,
      className = props.className,
      width = props.width,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["anchor", "classes", "className", "width"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["anchor".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(anchor))], className),
    ref: ref,
    style: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, (0,_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_6__.isHorizontal)(anchor) ? 'width' : 'height', width)
  }, other));
});
 true ? SwipeArea.propTypes = {
  /**
   * Side on which to attach the discovery area.
   */
  anchor: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(['left', 'top', 'right', 'bottom']).isRequired,

  /**
   * @ignore
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),

  /**
   * The width of the left most (or right most) area in pixels where the
   * drawer can be swiped open from.
   */
  width: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number.isRequired)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'PrivateSwipeArea'
})(SwipeArea));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/SwipeableDrawer/SwipeableDrawer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/SwipeableDrawer/SwipeableDrawer.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "reset": () => (/* binding */ reset)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js");
/* harmony import */ var _Drawer_Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Drawer/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@material-ui/core/esm/transitions/utils.js");
/* harmony import */ var _NoSsr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../NoSsr */ "./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js");
/* harmony import */ var _SwipeArea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SwipeArea */ "./node_modules/@material-ui/core/esm/SwipeableDrawer/SwipeArea.js");














 // This value is closed to what browsers are using internally to
// trigger a native scroll.

var UNCERTAINTY_THRESHOLD = 3; // px
// We can only have one node at the time claiming ownership for handling the swipe.
// Otherwise, the UX would be confusing.
// That's why we use a singleton here.

var nodeThatClaimedTheSwipe = null; // Exported for test purposes.

function reset() {
  nodeThatClaimedTheSwipe = null;
}

function calculateCurrentX(anchor, touches) {
  return anchor === 'right' ? document.body.offsetWidth - touches[0].pageX : touches[0].pageX;
}

function calculateCurrentY(anchor, touches) {
  return anchor === 'bottom' ? window.innerHeight - touches[0].clientY : touches[0].clientY;
}

function getMaxTranslate(horizontalSwipe, paperInstance) {
  return horizontalSwipe ? paperInstance.clientWidth : paperInstance.clientHeight;
}

function getTranslate(currentTranslate, startLocation, open, maxTranslate) {
  return Math.min(Math.max(open ? startLocation - currentTranslate : maxTranslate + startLocation - currentTranslate, 0), maxTranslate);
}

function getDomTreeShapes(element, rootNode) {
  // Adapted from https://github.com/oliviertassinari/react-swipeable-views/blob/7666de1dba253b896911adf2790ce51467670856/packages/react-swipeable-views/src/SwipeableViews.js#L129
  var domTreeShapes = [];

  while (element && element !== rootNode) {
    var style = window.getComputedStyle(element);

    if ( // Ignore the scroll children if the element is absolute positioned.
    style.getPropertyValue('position') === 'absolute' || // Ignore the scroll children if the element has an overflowX hidden
    style.getPropertyValue('overflow-x') === 'hidden') {
      domTreeShapes = [];
    } else if (element.clientWidth > 0 && element.scrollWidth > element.clientWidth || element.clientHeight > 0 && element.scrollHeight > element.clientHeight) {
      // Ignore the nodes that have no width.
      // Keep elements with a scroll
      domTreeShapes.push(element);
    }

    element = element.parentElement;
  }

  return domTreeShapes;
}

function findNativeHandler(_ref) {
  var domTreeShapes = _ref.domTreeShapes,
      start = _ref.start,
      current = _ref.current,
      anchor = _ref.anchor;
  // Adapted from https://github.com/oliviertassinari/react-swipeable-views/blob/7666de1dba253b896911adf2790ce51467670856/packages/react-swipeable-views/src/SwipeableViews.js#L175
  var axisProperties = {
    scrollPosition: {
      x: 'scrollLeft',
      y: 'scrollTop'
    },
    scrollLength: {
      x: 'scrollWidth',
      y: 'scrollHeight'
    },
    clientLength: {
      x: 'clientWidth',
      y: 'clientHeight'
    }
  };
  return domTreeShapes.some(function (shape) {
    // Determine if we are going backward or forward.
    var goingForward = current >= start;

    if (anchor === 'top' || anchor === 'left') {
      goingForward = !goingForward;
    }

    var axis = anchor === 'left' || anchor === 'right' ? 'x' : 'y';
    var scrollPosition = shape[axisProperties.scrollPosition[axis]];
    var areNotAtStart = scrollPosition > 0;
    var areNotAtEnd = scrollPosition + shape[axisProperties.clientLength[axis]] < shape[axisProperties.scrollLength[axis]];

    if (goingForward && areNotAtEnd || !goingForward && areNotAtStart) {
      return shape;
    }

    return null;
  });
}

var iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
var transitionDurationDefault = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_4__.duration.enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_4__.duration.leavingScreen
};
var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_2__.useEffect;
var SwipeableDrawer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function SwipeableDrawer(inProps, ref) {
  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var props = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["default"])({
    name: 'MuiSwipeableDrawer',
    props: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, inProps),
    theme: theme
  });
  var _props$anchor = props.anchor,
      anchor = _props$anchor === void 0 ? 'left' : _props$anchor,
      _props$disableBackdro = props.disableBackdropTransition,
      disableBackdropTransition = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableDiscove = props.disableDiscovery,
      disableDiscovery = _props$disableDiscove === void 0 ? false : _props$disableDiscove,
      _props$disableSwipeTo = props.disableSwipeToOpen,
      disableSwipeToOpen = _props$disableSwipeTo === void 0 ? iOS : _props$disableSwipeTo,
      hideBackdrop = props.hideBackdrop,
      _props$hysteresis = props.hysteresis,
      hysteresis = _props$hysteresis === void 0 ? 0.52 : _props$hysteresis,
      _props$minFlingVeloci = props.minFlingVelocity,
      minFlingVelocity = _props$minFlingVeloci === void 0 ? 450 : _props$minFlingVeloci,
      _props$ModalProps = props.ModalProps;
  _props$ModalProps = _props$ModalProps === void 0 ? {} : _props$ModalProps;

  var BackdropProps = _props$ModalProps.BackdropProps,
      ModalPropsProp = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_props$ModalProps, ["BackdropProps"]),
      onClose = props.onClose,
      onOpen = props.onOpen,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      SwipeAreaProps = props.SwipeAreaProps,
      _props$swipeAreaWidth = props.swipeAreaWidth,
      swipeAreaWidth = _props$swipeAreaWidth === void 0 ? 20 : _props$swipeAreaWidth,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? transitionDurationDefault : _props$transitionDura,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'temporary' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["anchor", "disableBackdropTransition", "disableDiscovery", "disableSwipeToOpen", "hideBackdrop", "hysteresis", "minFlingVelocity", "ModalProps", "onClose", "onOpen", "open", "PaperProps", "SwipeAreaProps", "swipeAreaWidth", "transitionDuration", "variant"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),
      maybeSwiping = _React$useState[0],
      setMaybeSwiping = _React$useState[1];

  var swipeInstance = react__WEBPACK_IMPORTED_MODULE_2__.useRef({
    isSwiping: null
  });
  var swipeAreaRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var backdropRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var paperRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var touchDetected = react__WEBPACK_IMPORTED_MODULE_2__.useRef(false); // Ref for transition duration based on / to match swipe speed

  var calculatedDurationRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(); // Use a ref so the open value used is always up to date inside useCallback.

  useEnhancedEffect(function () {
    calculatedDurationRef.current = null;
  }, [open]);
  var setPosition = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (translate) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$mode = options.mode,
        mode = _options$mode === void 0 ? null : _options$mode,
        _options$changeTransi = options.changeTransition,
        changeTransition = _options$changeTransi === void 0 ? true : _options$changeTransi;
    var anchorRtl = (0,_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_7__.getAnchor)(theme, anchor);
    var rtlTranslateMultiplier = ['right', 'bottom'].indexOf(anchorRtl) !== -1 ? 1 : -1;
    var horizontalSwipe = (0,_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_7__.isHorizontal)(anchor);
    var transform = horizontalSwipe ? "translate(".concat(rtlTranslateMultiplier * translate, "px, 0)") : "translate(0, ".concat(rtlTranslateMultiplier * translate, "px)");
    var drawerStyle = paperRef.current.style;
    drawerStyle.webkitTransform = transform;
    drawerStyle.transform = transform;
    var transition = '';

    if (mode) {
      transition = theme.transitions.create('all', (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_8__.getTransitionProps)({
        timeout: transitionDuration
      }, {
        mode: mode
      }));
    }

    if (changeTransition) {
      drawerStyle.webkitTransition = transition;
      drawerStyle.transition = transition;
    }

    if (!disableBackdropTransition && !hideBackdrop) {
      var backdropStyle = backdropRef.current.style;
      backdropStyle.opacity = 1 - translate / getMaxTranslate(horizontalSwipe, paperRef.current);

      if (changeTransition) {
        backdropStyle.webkitTransition = transition;
        backdropStyle.transition = transition;
      }
    }
  }, [anchor, disableBackdropTransition, hideBackdrop, theme, transitionDuration]);
  var handleBodyTouchEnd = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(function (event) {
    if (!touchDetected.current) {
      return;
    }

    nodeThatClaimedTheSwipe = null;
    touchDetected.current = false;
    setMaybeSwiping(false); // The swipe wasn't started.

    if (!swipeInstance.current.isSwiping) {
      swipeInstance.current.isSwiping = null;
      return;
    }

    swipeInstance.current.isSwiping = null;
    var anchorRtl = (0,_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_7__.getAnchor)(theme, anchor);
    var horizontal = (0,_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_7__.isHorizontal)(anchor);
    var current;

    if (horizontal) {
      current = calculateCurrentX(anchorRtl, event.changedTouches);
    } else {
      current = calculateCurrentY(anchorRtl, event.changedTouches);
    }

    var startLocation = horizontal ? swipeInstance.current.startX : swipeInstance.current.startY;
    var maxTranslate = getMaxTranslate(horizontal, paperRef.current);
    var currentTranslate = getTranslate(current, startLocation, open, maxTranslate);
    var translateRatio = currentTranslate / maxTranslate;

    if (Math.abs(swipeInstance.current.velocity) > minFlingVelocity) {
      // Calculate transition duration to match swipe speed
      calculatedDurationRef.current = Math.abs((maxTranslate - currentTranslate) / swipeInstance.current.velocity) * 1000;
    }

    if (open) {
      if (swipeInstance.current.velocity > minFlingVelocity || translateRatio > hysteresis) {
        onClose();
      } else {
        // Reset the position, the swipe was aborted.
        setPosition(0, {
          mode: 'exit'
        });
      }

      return;
    }

    if (swipeInstance.current.velocity < -minFlingVelocity || 1 - translateRatio > hysteresis) {
      onOpen();
    } else {
      // Reset the position, the swipe was aborted.
      setPosition(getMaxTranslate(horizontal, paperRef.current), {
        mode: 'enter'
      });
    }
  });
  var handleBodyTouchMove = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(function (event) {
    // the ref may be null when a parent component updates while swiping
    if (!paperRef.current || !touchDetected.current) {
      return;
    } // We are not supposed to handle this touch move because the swipe was started in a scrollable container in the drawer


    if (nodeThatClaimedTheSwipe != null && nodeThatClaimedTheSwipe !== swipeInstance.current) {
      return;
    }

    var anchorRtl = (0,_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_7__.getAnchor)(theme, anchor);
    var horizontalSwipe = (0,_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_7__.isHorizontal)(anchor);
    var currentX = calculateCurrentX(anchorRtl, event.touches);
    var currentY = calculateCurrentY(anchorRtl, event.touches);

    if (open && paperRef.current.contains(event.target) && nodeThatClaimedTheSwipe == null) {
      var domTreeShapes = getDomTreeShapes(event.target, paperRef.current);
      var nativeHandler = findNativeHandler({
        domTreeShapes: domTreeShapes,
        start: horizontalSwipe ? swipeInstance.current.startX : swipeInstance.current.startY,
        current: horizontalSwipe ? currentX : currentY,
        anchor: anchor
      });

      if (nativeHandler) {
        nodeThatClaimedTheSwipe = nativeHandler;
        return;
      }

      nodeThatClaimedTheSwipe = swipeInstance.current;
    } // We don't know yet.


    if (swipeInstance.current.isSwiping == null) {
      var dx = Math.abs(currentX - swipeInstance.current.startX);
      var dy = Math.abs(currentY - swipeInstance.current.startY); // We are likely to be swiping, let's prevent the scroll event on iOS.

      if (dx > dy) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }

      var definitelySwiping = horizontalSwipe ? dx > dy && dx > UNCERTAINTY_THRESHOLD : dy > dx && dy > UNCERTAINTY_THRESHOLD;

      if (definitelySwiping === true || (horizontalSwipe ? dy > UNCERTAINTY_THRESHOLD : dx > UNCERTAINTY_THRESHOLD)) {
        swipeInstance.current.isSwiping = definitelySwiping;

        if (!definitelySwiping) {
          handleBodyTouchEnd(event);
          return;
        } // Shift the starting point.


        swipeInstance.current.startX = currentX;
        swipeInstance.current.startY = currentY; // Compensate for the part of the drawer displayed on touch start.

        if (!disableDiscovery && !open) {
          if (horizontalSwipe) {
            swipeInstance.current.startX -= swipeAreaWidth;
          } else {
            swipeInstance.current.startY -= swipeAreaWidth;
          }
        }
      }
    }

    if (!swipeInstance.current.isSwiping) {
      return;
    }

    var maxTranslate = getMaxTranslate(horizontalSwipe, paperRef.current);
    var startLocation = horizontalSwipe ? swipeInstance.current.startX : swipeInstance.current.startY;

    if (open && !swipeInstance.current.paperHit) {
      startLocation = Math.min(startLocation, maxTranslate);
    }

    var translate = getTranslate(horizontalSwipe ? currentX : currentY, startLocation, open, maxTranslate);

    if (open) {
      if (!swipeInstance.current.paperHit) {
        var paperHit = horizontalSwipe ? currentX < maxTranslate : currentY < maxTranslate;

        if (paperHit) {
          swipeInstance.current.paperHit = true;
          swipeInstance.current.startX = currentX;
          swipeInstance.current.startY = currentY;
        } else {
          return;
        }
      } else if (translate === 0) {
        swipeInstance.current.startX = currentX;
        swipeInstance.current.startY = currentY;
      }
    }

    if (swipeInstance.current.lastTranslate === null) {
      swipeInstance.current.lastTranslate = translate;
      swipeInstance.current.lastTime = performance.now() + 1;
    }

    var velocity = (translate - swipeInstance.current.lastTranslate) / (performance.now() - swipeInstance.current.lastTime) * 1e3; // Low Pass filter.

    swipeInstance.current.velocity = swipeInstance.current.velocity * 0.4 + velocity * 0.6;
    swipeInstance.current.lastTranslate = translate;
    swipeInstance.current.lastTime = performance.now(); // We are swiping, let's prevent the scroll event on iOS.

    if (event.cancelable) {
      event.preventDefault();
    }

    setPosition(translate);
  });
  var handleBodyTouchStart = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(function (event) {
    // We are not supposed to handle this touch move.
    // Example of use case: ignore the event if there is a Slider.
    if (event.defaultPrevented) {
      return;
    } // We can only have one node at the time claiming ownership for handling the swipe.


    if (event.muiHandled) {
      return;
    } // At least one element clogs the drawer interaction zone.


    if (open && !backdropRef.current.contains(event.target) && !paperRef.current.contains(event.target)) {
      return;
    }

    var anchorRtl = (0,_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_7__.getAnchor)(theme, anchor);
    var horizontalSwipe = (0,_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_7__.isHorizontal)(anchor);
    var currentX = calculateCurrentX(anchorRtl, event.touches);
    var currentY = calculateCurrentY(anchorRtl, event.touches);

    if (!open) {
      if (disableSwipeToOpen || event.target !== swipeAreaRef.current) {
        return;
      }

      if (horizontalSwipe) {
        if (currentX > swipeAreaWidth) {
          return;
        }
      } else if (currentY > swipeAreaWidth) {
        return;
      }
    }

    event.muiHandled = true;
    nodeThatClaimedTheSwipe = null;
    swipeInstance.current.startX = currentX;
    swipeInstance.current.startY = currentY;
    setMaybeSwiping(true);

    if (!open && paperRef.current) {
      // The ref may be null when a parent component updates while swiping.
      setPosition(getMaxTranslate(horizontalSwipe, paperRef.current) + (disableDiscovery ? 20 : -swipeAreaWidth), {
        changeTransition: false
      });
    }

    swipeInstance.current.velocity = 0;
    swipeInstance.current.lastTime = null;
    swipeInstance.current.lastTranslate = null;
    swipeInstance.current.paperHit = false;
    touchDetected.current = true;
  });
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (variant === 'temporary') {
      var doc = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_10__["default"])(paperRef.current);
      doc.addEventListener('touchstart', handleBodyTouchStart);
      doc.addEventListener('touchmove', handleBodyTouchMove, {
        passive: false
      });
      doc.addEventListener('touchend', handleBodyTouchEnd);
      return function () {
        doc.removeEventListener('touchstart', handleBodyTouchStart);
        doc.removeEventListener('touchmove', handleBodyTouchMove, {
          passive: false
        });
        doc.removeEventListener('touchend', handleBodyTouchEnd);
      };
    }

    return undefined;
  }, [variant, handleBodyTouchStart, handleBodyTouchMove, handleBodyTouchEnd]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    return function () {
      // We need to release the lock.
      if (nodeThatClaimedTheSwipe === swipeInstance.current) {
        nodeThatClaimedTheSwipe = null;
      }
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (!open) {
      setMaybeSwiping(false);
    }
  }, [open]);
  var handleBackdropRef = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (instance) {
    // #StrictMode ready
    backdropRef.current = react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode(instance);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    open: variant === 'temporary' && maybeSwiping ? true : open,
    variant: variant,
    ModalProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      BackdropProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, BackdropProps, {
        ref: handleBackdropRef
      })
    }, ModalPropsProp),
    PaperProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, PaperProps, {
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        pointerEvents: variant === 'temporary' && !open ? 'none' : ''
      }, PaperProps.style),
      ref: paperRef
    }),
    anchor: anchor,
    transitionDuration: calculatedDurationRef.current || transitionDuration,
    onClose: onClose,
    ref: ref
  }, other)), !disableSwipeToOpen && variant === 'temporary' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_NoSsr__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_SwipeArea__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    anchor: anchor,
    ref: swipeAreaRef,
    width: swipeAreaWidth
  }, SwipeAreaProps))));
});
 true ? SwipeableDrawer.propTypes = {
  /**
   * @ignore
   */
  anchor: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOf(['left', 'top', 'right', 'bottom']),

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().node),

  /**
   * Disable the backdrop transition.
   * This can improve the FPS on low-end devices.
   */
  disableBackdropTransition: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * If `true`, touching the screen near the edge of the drawer will not slide in the drawer a bit
   * to promote accidental discovery of the swipe gesture.
   */
  disableDiscovery: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * If `true`, swipe to open is disabled. This is useful in browsers where swiping triggers
   * navigation actions. Swipe to open is disabled on iOS browsers by default.
   */
  disableSwipeToOpen: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * @ignore
   */
  hideBackdrop: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /**
   * Affects how far the drawer must be opened/closed to change his state.
   * Specified as percent (0-1) of the width of the drawer
   */
  hysteresis: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().number),

  /**
   * Defines, from which (average) velocity on, the swipe is
   * defined as complete although hysteresis isn't reached.
   * Good threshold is between 250 - 1000 px/s
   */
  minFlingVelocity: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().number),

  /**
   * @ignore
   */
  ModalProps: prop_types__WEBPACK_IMPORTED_MODULE_13___default().shape({
    BackdropProps: prop_types__WEBPACK_IMPORTED_MODULE_13___default().shape({
      component: _material_ui_utils__WEBPACK_IMPORTED_MODULE_14__["default"]
    })
  }),

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func.isRequired),

  /**
   * Callback fired when the component requests to be opened.
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func.isRequired),

  /**
   * If `true`, the drawer is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool.isRequired),

  /**
   * @ignore
   */
  PaperProps: prop_types__WEBPACK_IMPORTED_MODULE_13___default().shape({
    component: _material_ui_utils__WEBPACK_IMPORTED_MODULE_14__["default"],
    style: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object)
  }),

  /**
   * The element is used to intercept the touch events on the edge.
   */
  SwipeAreaProps: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object),

  /**
   * The width of the left most (or right most) area in pixels where the
   * drawer can be swiped open from.
   */
  swipeAreaWidth: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().number),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_13___default().number), prop_types__WEBPACK_IMPORTED_MODULE_13___default().shape({
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().number)
  })]),

  /**
   * @ignore
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOf(['permanent', 'persistent', 'temporary'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwipeableDrawer);

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

/***/ "./node_modules/@material-ui/icons/ChevronLeft.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/icons/ChevronLeft.js ***!
  \********************************************************/
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
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'ChevronLeft');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/ChevronRight.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/icons/ChevronRight.js ***!
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
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'ChevronRight');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Mail.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Mail.js ***!
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
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
}), 'Mail');

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

/***/ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/ClippedDrawer.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Drawer/demo/ClippedDrawer.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClippedDrawer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

















var drawerWidth = 240;
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      display: 'flex',
      position: 'relative'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      position: 'absolute'
    },
    drawerContainer: {
      overflow: 'auto'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(6)
    }
  };
});
function ClippedDrawer() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      position: "absolute",
      className: classes.appBar,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "h6",
          noWrap: true,
          children: "Clipped drawer"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.drawer,
      variant: "permanent",
      classes: {
        paper: classes.drawerPaper
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.drawerContainer,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              button: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_12__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13__["default"], {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14__["default"], {
                primary: text
              })]
            }, text);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: ['All mail', 'Trash', 'Spam'].map(function (text, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
              button: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_12__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13__["default"], {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14__["default"], {
                primary: text
              })]
            }, text);
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
      component: "main",
      className: classes.content,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        paragraph: true,
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        paragraph: true,
        children: "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/MiniDrawer.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Drawer/demo/MiniDrawer.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MiniDrawer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























var drawerWidth = 240;
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return {
    root: {
      display: 'flex',
      position: 'relative'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      position: 'relative',
      whiteSpace: 'nowrap'
    },
    drawerPaper: {
      position: 'absolute'
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: _defineProperty({
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: theme.spacing(14) + 1
    }, theme.breakpoints.up('sm'), {
      width: theme.spacing(18) + 1
    }),
    toolbar: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 2)
    }, theme.mixins.toolbar),
    content: {
      flexGrow: 1,
      padding: theme.spacing(6),
      overflow: 'auto'
    }
  };
});
function MiniDrawer() {
  var _clsx3, _clsx4;

  var classes = useStyles();
  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleDrawerOpen = function handleDrawerOpen() {
    setOpen(true);
  };

  var handleDrawerClose = function handleDrawerClose() {
    setOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      position: "absolute",
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.appBar, _defineProperty({}, classes.appBarShift, open)),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerOpen,
          edge: "start",
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.menuButton, _defineProperty({}, classes.hide, open)),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
          variant: "h6",
          noWrap: true,
          children: "Mini variant drawer"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__["default"], {
      variant: "permanent",
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.drawer, (_clsx3 = {}, _defineProperty(_clsx3, classes.drawerOpen, open), _defineProperty(_clsx3, classes.drawerClose, !open), _clsx3)),
      classes: {
        paper: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.drawerPaper, (_clsx4 = {}, _defineProperty(_clsx4, classes.drawerOpen, open), _defineProperty(_clsx4, classes.drawerClose, !open), _clsx4))
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.toolbar,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          onClick: handleDrawerClose,
          children: theme.direction === 'rtl' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_13__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_14__["default"], {})
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__["default"], {
        children: ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
            button: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
              children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_19__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_20__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__["default"], {
              primary: text
            })]
          }, text);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__["default"], {
        children: ['All mail', 'Trash', 'Spam'].map(function (text, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
            button: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
              children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_19__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_20__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__["default"], {
              primary: text
            })]
          }, text);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
      component: "main",
      className: classes.content,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.toolbar
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        paragraph: true,
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        paragraph: true,
        children: "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/PermanentDrawerLeft.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Drawer/demo/PermanentDrawerLeft.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PermanentDrawerLeft)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

















var drawerWidth = 240;
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      display: 'flex',
      position: 'relative'
    },
    appBar: {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      position: 'absolute'
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background["default"],
      padding: theme.spacing(6)
    }
  };
});
function PermanentDrawerLeft() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      position: "absolute",
      className: classes.appBar,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "h6",
          noWrap: true,
          children: "Permanent drawer"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.drawer,
      variant: "permanent",
      classes: {
        paper: classes.drawerPaper
      },
      anchor: "left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.toolbar
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
            button: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__["default"], {
              children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_13__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__["default"], {
              primary: text
            })]
          }, text);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: ['All mail', 'Trash', 'Spam'].map(function (text, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
            button: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__["default"], {
              children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_13__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__["default"], {
              primary: text
            })]
          }, text);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
      component: "main",
      className: classes.content,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.toolbar
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        paragraph: true,
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        paragraph: true,
        children: "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/PermanentDrawerRight.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Drawer/demo/PermanentDrawerRight.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PermanentDrawerRight)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

















var drawerWidth = 240;
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      display: 'flex',
      position: 'relative'
    },
    appBar: {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginRight: drawerWidth
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      position: 'absolute'
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background["default"],
      padding: theme.spacing(6)
    }
  };
});
function PermanentDrawerRight() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      position: "absolute",
      className: classes.appBar,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "h6",
          noWrap: true,
          children: "Permanent drawer"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
      component: "main",
      className: classes.content,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.toolbar
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        paragraph: true,
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        paragraph: true,
        children: "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.drawer,
      variant: "permanent",
      classes: {
        paper: classes.drawerPaper
      },
      anchor: "right",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.toolbar
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
            button: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__["default"], {
              children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_13__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__["default"], {
              primary: text
            })]
          }, text);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: ['All mail', 'Trash', 'Spam'].map(function (text, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
            button: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__["default"], {
              children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_13__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_14__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__["default"], {
              primary: text
            })]
          }, text);
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/PersistentDrawerLeft.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Drawer/demo/PersistentDrawerLeft.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PersistentDrawerLeft)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























var drawerWidth = 240;
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return {
    root: {
      display: 'flex',
      position: 'relative'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(4)
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      position: 'absolute'
    },
    drawerHeader: _objectSpread(_objectSpread({
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 2)
    }, theme.mixins.toolbar), {}, {
      justifyContent: 'flex-end'
    }),
    content: {
      flexGrow: 1,
      padding: theme.spacing(6),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  };
});
function PersistentDrawerLeft() {
  var classes = useStyles();
  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleDrawerOpen = function handleDrawerOpen() {
    setOpen(true);
  };

  var handleDrawerClose = function handleDrawerClose() {
    setOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      position: "absolute",
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.appBar, _defineProperty({}, classes.appBarShift, open)),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerOpen,
          edge: "start",
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.menuButton, open && classes.hide),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
          variant: "h6",
          noWrap: true,
          children: "Persistent drawer"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.drawer,
      variant: "persistent",
      anchor: "left",
      open: open,
      classes: {
        paper: classes.drawerPaper
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.drawerHeader,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          onClick: handleDrawerClose,
          children: theme.direction === 'ltr' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_13__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_14__["default"], {})
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__["default"], {
        children: ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
            button: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
              children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_19__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_20__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__["default"], {
              primary: text
            })]
          }, text);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__["default"], {
        children: ['All mail', 'Trash', 'Spam'].map(function (text, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
            button: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
              children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_19__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_20__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__["default"], {
              primary: text
            })]
          }, text);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
      component: "main",
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.content, _defineProperty({}, classes.contentShift, open)),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.drawerHeader
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        paragraph: true,
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        paragraph: true,
        children: "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/PersistentDrawerRight.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Drawer/demo/PersistentDrawerRight.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PersistentDrawerRight)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























var drawerWidth = 240;
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return {
    root: {
      display: 'flex',
      position: 'relative'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: drawerWidth
    },
    title: {
      flexGrow: 1
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      position: 'absolute'
    },
    drawerHeader: _objectSpread(_objectSpread({
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 2)
    }, theme.mixins.toolbar), {}, {
      justifyContent: 'flex-start'
    }),
    content: {
      flexGrow: 1,
      padding: theme.spacing(6),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginRight: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: 0
    }
  };
});
function PersistentDrawerRight() {
  var classes = useStyles();
  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleDrawerOpen = function handleDrawerOpen() {
    setOpen(true);
  };

  var handleDrawerClose = function handleDrawerClose() {
    setOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      position: "absolute",
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.appBar, _defineProperty({}, classes.appBarShift, open)),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "h6",
          noWrap: true,
          className: classes.title,
          children: "Persistent drawer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          color: "inherit",
          "aria-label": "open drawer",
          edge: "end",
          onClick: handleDrawerOpen,
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(open && classes.hide),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__["default"], {})
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
      component: "main",
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.content, _defineProperty({}, classes.contentShift, open)),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.drawerHeader
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        paragraph: true,
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        paragraph: true,
        children: "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.drawer,
      variant: "persistent",
      anchor: "right",
      open: open,
      classes: {
        paper: classes.drawerPaper
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.drawerHeader,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onClick: handleDrawerClose,
          children: theme.direction === 'rtl' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_13__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_14__["default"], {})
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__["default"], {
        children: ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
            button: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
              children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_19__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_20__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__["default"], {
              primary: text
            })]
          }, text);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__["default"], {
        children: ['All mail', 'Trash', 'Spam'].map(function (text, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
            button: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_18__["default"], {
              children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_19__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_20__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__["default"], {
              primary: text
            })]
          }, text);
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/ResponsiveDrawer.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Drawer/demo/ResponsiveDrawer.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/Hidden.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















var drawerWidth = 240;
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      display: 'flex',
      position: 'relative'
    },
    drawer: _defineProperty({}, theme.breakpoints.up('sm'), {
      width: drawerWidth,
      flexShrink: 0
    }),
    appBar: _defineProperty({}, theme.breakpoints.up('sm'), {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth
    }),
    menuButton: _defineProperty({
      marginRight: theme.spacing(4)
    }, theme.breakpoints.up('sm'), {
      display: 'none'
    }),
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      position: 'absolute'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(6)
    }
  };
});

function ResponsiveDrawer(props) {
  var window = props.window;
  var classes = useStyles();
  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mobileOpen = _React$useState2[0],
      setMobileOpen = _React$useState2[1];

  var handleDrawerToggle = function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  };

  var drawer = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.toolbar
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          button: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_9__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_10__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
            primary: text
          })]
        }, text);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: ['All mail', 'Trash', 'Spam'].map(function (text, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          button: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_9__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_10__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
            primary: text
          })]
        }, text);
      })
    })]
  });

  var container = window !== undefined ? function () {
    return window().document.body;
  } : undefined;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_13__["default"], {
      position: "absolute",
      className: classes.appBar,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
          color: "inherit",
          "aria-label": "open drawer",
          edge: "start",
          onClick: handleDrawerToggle,
          className: classes.menuButton,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_16__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
          variant: "h6",
          noWrap: true,
          children: "Responsive drawer"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
      className: classes.drawer,
      "aria-label": "mailbox folders",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_18__["default"], {
        smUp: true,
        implementation: "css",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_19__["default"], {
          container: container,
          variant: "temporary",
          anchor: theme.direction === 'rtl' ? 'right' : 'left',
          open: mobileOpen,
          onClose: handleDrawerToggle,
          classes: {
            paper: classes.drawerPaper
          },
          ModalProps: {
            keepMounted: true // Better open performance on mobile.

          },
          children: drawer
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_18__["default"], {
        xsDown: true,
        implementation: "css",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_19__["default"], {
          classes: {
            paper: classes.drawerPaper
          },
          variant: "permanent",
          open: true,
          children: drawer
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
      component: "main",
      className: classes.content,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: classes.toolbar
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
        paragraph: true,
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
        paragraph: true,
        children: "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."
      })]
    })]
  });
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveDrawer);

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/SwipeableTemporaryDrawer.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Drawer/demo/SwipeableTemporaryDrawer.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SwipeableTemporaryDrawer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/SwipeableDrawer */ "./node_modules/@material-ui/core/esm/SwipeableDrawer/SwipeableDrawer.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
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
















var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["default"])({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});
function SwipeableTemporaryDrawer() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var toggleDrawer = function toggleDrawer(anchor, open) {
    return function (event) {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, anchor, open)));
    };
  };

  var list = function list(anchor) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.list, _defineProperty({}, classes.fullList, anchor === 'top' || anchor === 'bottom')),
      role: "presentation",
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
            button: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
              children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_8__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_9__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: text
            })]
          }, text);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: ['All mail', 'Trash', 'Spam'].map(function (text, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
            button: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
              children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_8__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_9__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: text
            })]
          }, text);
        })
      })]
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: ['left', 'right', 'top', 'bottom'].map(function (anchor) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
          onClick: toggleDrawer(anchor, true),
          children: anchor
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_13__["default"], {
          anchor: anchor,
          open: state[anchor],
          onClose: toggleDrawer(anchor, false),
          onOpen: toggleDrawer(anchor, true),
          children: list(anchor)
        })]
      }, anchor);
    })
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/TemporaryDrawer.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Drawer/demo/TemporaryDrawer.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TemporaryDrawer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
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
















var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["default"])({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});
function TemporaryDrawer() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var toggleDrawer = function toggleDrawer(anchor, open) {
    return function (event) {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, anchor, open)));
    };
  };

  var list = function list(anchor) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.list, _defineProperty({}, classes.fullList, anchor === 'top' || anchor === 'bottom')),
      role: "presentation",
      onClick: toggleDrawer(anchor, false),
      onKeyDown: toggleDrawer(anchor, false),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
            button: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
              children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_8__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_9__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: text
            })]
          }, text);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: ['All mail', 'Trash', 'Spam'].map(function (text, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
            button: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
              children: index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_8__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_9__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: text
            })]
          }, text);
        })
      })]
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: ['left', 'right', 'top', 'bottom'].map(function (anchor) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
          onClick: toggleDrawer(anchor, true),
          children: anchor
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13__["default"], {
          anchor: anchor,
          open: state[anchor],
          onClose: toggleDrawer(anchor, false),
          children: list(anchor)
        })]
      }, anchor);
    })
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Drawer/index.js":
/*!**************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Drawer/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Drawer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _jumbo_components_PageComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@jumbo/components/PageComponents */ "./resources/js/src/@jumbo/components/PageComponents/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js");
/* harmony import */ var _jumbo_components_Common_CodeViewerCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@jumbo/components/Common/CodeViewerCard */ "./resources/js/src/@jumbo/components/Common/CodeViewerCard/index.js");
/* harmony import */ var _demo_TemporaryDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo/TemporaryDrawer */ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/TemporaryDrawer.js");
/* harmony import */ var _demo_SwipeableTemporaryDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo/SwipeableTemporaryDrawer */ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/SwipeableTemporaryDrawer.js");
/* harmony import */ var _demo_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo/ResponsiveDrawer */ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/ResponsiveDrawer.js");
/* harmony import */ var _demo_PersistentDrawerLeft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/PersistentDrawerLeft */ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/PersistentDrawerLeft.js");
/* harmony import */ var _demo_PersistentDrawerRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/PersistentDrawerRight */ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/PersistentDrawerRight.js");
/* harmony import */ var _demo_MiniDrawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo/MiniDrawer */ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/MiniDrawer.js");
/* harmony import */ var _demo_PermanentDrawerLeft__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo/PermanentDrawerLeft */ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/PermanentDrawerLeft.js");
/* harmony import */ var _demo_PermanentDrawerRight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demo/PermanentDrawerRight */ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/PermanentDrawerRight.js");
/* harmony import */ var _demo_ClippedDrawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo/ClippedDrawer */ "./resources/js/src/routes/Components/MuiComponents/Drawer/demo/ClippedDrawer.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
















var useStyles = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_13__["default"])(function (theme) {
  return {
    section: {
      position: 'relative',
      zIndex: 1,
      '&:not(:last-child)': {
        marginBottom: theme.typography.pxToRem(32)
      },
      '& .Cmt-card-content': {
        overflow: 'hidden'
      }
    },
    sectionHeading: {
      marginBottom: theme.typography.pxToRem(16)
    }
  };
});

var requireRaw = __webpack_require__("./resources/js/src/@fake-db/mui-components/drawer sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$");

var demos = [{
  label: 'Temporary drawer',
  link: 'temporary-drawer',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_demo_TemporaryDrawer__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
  filename: './TemporaryDrawer.txt'
}, {
  label: 'Swipeable',
  link: 'Swipeable',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_demo_SwipeableTemporaryDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
  filename: './SwipeableTemporaryDrawer.txt'
}, {
  label: 'Responsive drawer',
  link: 'responsive-drawer',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_demo_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
  filename: './ResponsiveDrawer.txt'
}, {
  label: 'Persistent drawer left',
  link: 'persistent-drawer-left',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_demo_PersistentDrawerLeft__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
  filename: './PersistentDrawerLeft.txt'
}, {
  label: 'Persistent drawer right',
  link: 'persistent-drawer-right',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_demo_PersistentDrawerRight__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
  filename: './PersistentDrawerRight.txt'
}, {
  label: 'Mini variant drawer',
  link: 'mini-variant-drawer',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_demo_MiniDrawer__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
  filename: './MiniDrawer.txt'
}, {
  label: 'Permanent drawer left',
  link: 'permanent-drawer-left',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_demo_PermanentDrawerLeft__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
  filename: './PermanentDrawerLeft.txt'
}, {
  label: 'Permanent drawer right',
  link: 'permanent-drawer-right',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_demo_PermanentDrawerRight__WEBPACK_IMPORTED_MODULE_10__["default"], {}),
  filename: './PermanentDrawerRight.txt'
}, {
  label: 'Clipped under the app bar',
  link: 'clipped-under-the-app-bar',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_demo_ClippedDrawer__WEBPACK_IMPORTED_MODULE_11__["default"], {}),
  filename: './ClippedDrawer.txt'
}];
function Drawer() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_jumbo_components_PageComponents__WEBPACK_IMPORTED_MODULE_1__.MuiComponentDemo, {
    pageTitle: "Drawer",
    menus: demos,
    children: demos.map(function (menu, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: menu.link,
        className: classes.section,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["default"], {
          component: "h3",
          variant: "inherit",
          className: classes.sectionHeading,
          children: menu.label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_jumbo_components_Common_CodeViewerCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          code: requireRaw(menu.filename)["default"],
          language: "jsx",
          children: menu.component
        })]
      }, index);
    })
  });
}

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/ClippedDrawer.txt":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/ClippedDrawer.txt ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Drawer from '@material-ui/core/Drawer';\r\nimport AppBar from '@material-ui/core/AppBar';\r\nimport CssBaseline from '@material-ui/core/CssBaseline';\r\nimport Toolbar from '@material-ui/core/Toolbar';\r\nimport List from '@material-ui/core/List';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport Divider from '@material-ui/core/Divider';\r\nimport ListItem from '@material-ui/core/ListItem';\r\nimport ListItemIcon from '@material-ui/core/ListItemIcon';\r\nimport ListItemText from '@material-ui/core/ListItemText';\r\nimport InboxIcon from '@material-ui/icons/MoveToInbox';\r\nimport MailIcon from '@material-ui/icons/Mail';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst drawerWidth = 240;\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n    position: 'relative',\r\n  },\r\n  appBar: {\r\n    zIndex: theme.zIndex.drawer + 1,\r\n  },\r\n  drawer: {\r\n    width: drawerWidth,\r\n    flexShrink: 0,\r\n  },\r\n  drawerPaper: {\r\n    width: drawerWidth,\r\n    position: 'absolute',\r\n  },\r\n  drawerContainer: {\r\n    overflow: 'auto',\r\n  },\r\n  content: {\r\n    flexGrow: 1,\r\n    padding: theme.spacing(6),\r\n  },\r\n}));\r\n\r\nexport default function ClippedDrawer() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <CssBaseline />\r\n      <AppBar position=\"absolute\" className={classes.appBar}>\r\n        <Toolbar>\r\n          <Typography variant=\"h6\" noWrap>\r\n            Clipped drawer\r\n          </Typography>\r\n        </Toolbar>\r\n      </AppBar>\r\n      <Drawer\r\n        className={classes.drawer}\r\n        variant=\"permanent\"\r\n        classes={{\r\n          paper: classes.drawerPaper,\r\n        }}>\r\n        <Toolbar />\r\n        <Box className={classes.drawerContainer}>\r\n          <List>\r\n            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (\r\n              <ListItem button key={text}>\r\n                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n                <ListItemText primary={text} />\r\n              </ListItem>\r\n            ))}\r\n          </List>\r\n          <Divider />\r\n          <List>\r\n            {['All mail', 'Trash', 'Spam'].map((text, index) => (\r\n              <ListItem button key={text}>\r\n                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n                <ListItemText primary={text} />\r\n              </ListItem>\r\n            ))}\r\n          </List>\r\n        </Box>\r\n      </Drawer>\r\n      <Box component=\"main\" className={classes.content}>\r\n        <Toolbar />\r\n        <Typography paragraph>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n          aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.\r\n          Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet\r\n          id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est\r\n          ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin\r\n          fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At\r\n          augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa\r\n          sapien faucibus et molestie ac.\r\n        </Typography>\r\n        <Typography paragraph>\r\n          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim\r\n          diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra\r\n          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis\r\n          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida\r\n          rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus\r\n          et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend.\r\n          Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.\r\n        </Typography>\r\n      </Box>\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/MiniDrawer.txt":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/MiniDrawer.txt ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport clsx from 'clsx';\r\nimport { makeStyles, useTheme } from '@material-ui/core/styles';\r\nimport Drawer from '@material-ui/core/Drawer';\r\nimport AppBar from '@material-ui/core/AppBar';\r\nimport Toolbar from '@material-ui/core/Toolbar';\r\nimport List from '@material-ui/core/List';\r\nimport CssBaseline from '@material-ui/core/CssBaseline';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport Divider from '@material-ui/core/Divider';\r\nimport IconButton from '@material-ui/core/IconButton';\r\nimport MenuIcon from '@material-ui/icons/Menu';\r\nimport ChevronLeftIcon from '@material-ui/icons/ChevronLeft';\r\nimport ChevronRightIcon from '@material-ui/icons/ChevronRight';\r\nimport ListItem from '@material-ui/core/ListItem';\r\nimport ListItemIcon from '@material-ui/core/ListItemIcon';\r\nimport ListItemText from '@material-ui/core/ListItemText';\r\nimport InboxIcon from '@material-ui/icons/MoveToInbox';\r\nimport MailIcon from '@material-ui/icons/Mail';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst drawerWidth = 240;\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n    position: 'relative',\r\n  },\r\n  appBar: {\r\n    zIndex: theme.zIndex.drawer + 1,\r\n    transition: theme.transitions.create(['width', 'margin'], {\r\n      easing: theme.transitions.easing.sharp,\r\n      duration: theme.transitions.duration.leavingScreen,\r\n    }),\r\n  },\r\n  appBarShift: {\r\n    marginLeft: drawerWidth,\r\n    width: `calc(100% - ${drawerWidth}px)`,\r\n    transition: theme.transitions.create(['width', 'margin'], {\r\n      easing: theme.transitions.easing.sharp,\r\n      duration: theme.transitions.duration.enteringScreen,\r\n    }),\r\n  },\r\n  menuButton: {\r\n    marginRight: 36,\r\n  },\r\n  hide: {\r\n    display: 'none',\r\n  },\r\n  drawer: {\r\n    width: drawerWidth,\r\n    flexShrink: 0,\r\n    position: 'relative',\r\n    whiteSpace: 'nowrap',\r\n  },\r\n  drawerPaper: {\r\n    position: 'absolute',\r\n  },\r\n  drawerOpen: {\r\n    width: drawerWidth,\r\n    transition: theme.transitions.create('width', {\r\n      easing: theme.transitions.easing.sharp,\r\n      duration: theme.transitions.duration.enteringScreen,\r\n    }),\r\n  },\r\n  drawerClose: {\r\n    transition: theme.transitions.create('width', {\r\n      easing: theme.transitions.easing.sharp,\r\n      duration: theme.transitions.duration.leavingScreen,\r\n    }),\r\n    overflowX: 'hidden',\r\n    width: theme.spacing(14) + 1,\r\n    [theme.breakpoints.up('sm')]: {\r\n      width: theme.spacing(18) + 1,\r\n    },\r\n  },\r\n  toolbar: {\r\n    display: 'flex',\r\n    alignItems: 'center',\r\n    justifyContent: 'flex-end',\r\n    padding: theme.spacing(0, 2),\r\n    // necessary for content to be below app bar\r\n    ...theme.mixins.toolbar,\r\n  },\r\n  content: {\r\n    flexGrow: 1,\r\n    padding: theme.spacing(6),\r\n    overflow: 'auto',\r\n  },\r\n}));\r\n\r\nexport default function MiniDrawer() {\r\n  const classes = useStyles();\r\n  const theme = useTheme();\r\n  const [open, setOpen] = React.useState(false);\r\n\r\n  const handleDrawerOpen = () => {\r\n    setOpen(true);\r\n  };\r\n\r\n  const handleDrawerClose = () => {\r\n    setOpen(false);\r\n  };\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <CssBaseline />\r\n      <AppBar\r\n        position=\"absolute\"\r\n        className={clsx(classes.appBar, {\r\n          [classes.appBarShift]: open,\r\n        })}>\r\n        <Toolbar>\r\n          <IconButton\r\n            color=\"inherit\"\r\n            aria-label=\"open drawer\"\r\n            onClick={handleDrawerOpen}\r\n            edge=\"start\"\r\n            className={clsx(classes.menuButton, {\r\n              [classes.hide]: open,\r\n            })}>\r\n            <MenuIcon />\r\n          </IconButton>\r\n          <Typography variant=\"h6\" noWrap>\r\n            Mini variant drawer\r\n          </Typography>\r\n        </Toolbar>\r\n      </AppBar>\r\n      <Drawer\r\n        variant=\"permanent\"\r\n        className={clsx(classes.drawer, {\r\n          [classes.drawerOpen]: open,\r\n          [classes.drawerClose]: !open,\r\n        })}\r\n        classes={{\r\n          paper: clsx(classes.drawerPaper, {\r\n            [classes.drawerOpen]: open,\r\n            [classes.drawerClose]: !open,\r\n          }),\r\n        }}>\r\n        <Box className={classes.toolbar}>\r\n          <IconButton onClick={handleDrawerClose}>\r\n            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}\r\n          </IconButton>\r\n        </Box>\r\n        <Divider />\r\n        <List>\r\n          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (\r\n            <ListItem button key={text}>\r\n              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n              <ListItemText primary={text} />\r\n            </ListItem>\r\n          ))}\r\n        </List>\r\n        <Divider />\r\n        <List>\r\n          {['All mail', 'Trash', 'Spam'].map((text, index) => (\r\n            <ListItem button key={text}>\r\n              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n              <ListItemText primary={text} />\r\n            </ListItem>\r\n          ))}\r\n        </List>\r\n      </Drawer>\r\n      <Box component=\"main\" className={classes.content}>\r\n        <Box className={classes.toolbar} />\r\n        <Typography paragraph>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n          aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.\r\n          Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet\r\n          id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est\r\n          ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin\r\n          fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At\r\n          augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa\r\n          sapien faucibus et molestie ac.\r\n        </Typography>\r\n        <Typography paragraph>\r\n          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim\r\n          diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra\r\n          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis\r\n          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida\r\n          rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus\r\n          et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend.\r\n          Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.\r\n        </Typography>\r\n      </Box>\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/PermanentDrawerLeft.txt":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/PermanentDrawerLeft.txt ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Drawer from '@material-ui/core/Drawer';\r\nimport CssBaseline from '@material-ui/core/CssBaseline';\r\nimport AppBar from '@material-ui/core/AppBar';\r\nimport Toolbar from '@material-ui/core/Toolbar';\r\nimport List from '@material-ui/core/List';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport Divider from '@material-ui/core/Divider';\r\nimport ListItem from '@material-ui/core/ListItem';\r\nimport ListItemIcon from '@material-ui/core/ListItemIcon';\r\nimport ListItemText from '@material-ui/core/ListItemText';\r\nimport InboxIcon from '@material-ui/icons/MoveToInbox';\r\nimport MailIcon from '@material-ui/icons/Mail';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst drawerWidth = 240;\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n    position: 'relative',\r\n  },\r\n  appBar: {\r\n    width: `calc(100% - ${drawerWidth}px)`,\r\n    marginLeft: drawerWidth,\r\n  },\r\n  drawer: {\r\n    width: drawerWidth,\r\n    flexShrink: 0,\r\n  },\r\n  drawerPaper: {\r\n    width: drawerWidth,\r\n    position: 'absolute',\r\n  },\r\n  // necessary for content to be below app bar\r\n  toolbar: theme.mixins.toolbar,\r\n  content: {\r\n    flexGrow: 1,\r\n    backgroundColor: theme.palette.background.default,\r\n    padding: theme.spacing(6),\r\n  },\r\n}));\r\n\r\nexport default function PermanentDrawerLeft() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <CssBaseline />\r\n      <AppBar position=\"absolute\" className={classes.appBar}>\r\n        <Toolbar>\r\n          <Typography variant=\"h6\" noWrap>\r\n            Permanent drawer\r\n          </Typography>\r\n        </Toolbar>\r\n      </AppBar>\r\n      <Drawer\r\n        className={classes.drawer}\r\n        variant=\"permanent\"\r\n        classes={{\r\n          paper: classes.drawerPaper,\r\n        }}\r\n        anchor=\"left\">\r\n        <Box className={classes.toolbar} />\r\n        <Divider />\r\n        <List>\r\n          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (\r\n            <ListItem button key={text}>\r\n              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n              <ListItemText primary={text} />\r\n            </ListItem>\r\n          ))}\r\n        </List>\r\n        <Divider />\r\n        <List>\r\n          {['All mail', 'Trash', 'Spam'].map((text, index) => (\r\n            <ListItem button key={text}>\r\n              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n              <ListItemText primary={text} />\r\n            </ListItem>\r\n          ))}\r\n        </List>\r\n      </Drawer>\r\n      <Box component=\"main\" className={classes.content}>\r\n        <Box className={classes.toolbar} />\r\n        <Typography paragraph>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n          aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.\r\n          Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet\r\n          id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est\r\n          ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin\r\n          fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At\r\n          augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa\r\n          sapien faucibus et molestie ac.\r\n        </Typography>\r\n        <Typography paragraph>\r\n          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim\r\n          diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra\r\n          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis\r\n          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida\r\n          rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus\r\n          et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend.\r\n          Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.\r\n        </Typography>\r\n      </Box>\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/PermanentDrawerRight.txt":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/PermanentDrawerRight.txt ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Drawer from '@material-ui/core/Drawer';\r\nimport CssBaseline from '@material-ui/core/CssBaseline';\r\nimport AppBar from '@material-ui/core/AppBar';\r\nimport Toolbar from '@material-ui/core/Toolbar';\r\nimport List from '@material-ui/core/List';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport Divider from '@material-ui/core/Divider';\r\nimport ListItem from '@material-ui/core/ListItem';\r\nimport ListItemIcon from '@material-ui/core/ListItemIcon';\r\nimport ListItemText from '@material-ui/core/ListItemText';\r\nimport InboxIcon from '@material-ui/icons/MoveToInbox';\r\nimport MailIcon from '@material-ui/icons/Mail';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst drawerWidth = 240;\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n    position: 'relative',\r\n  },\r\n  appBar: {\r\n    width: `calc(100% - ${drawerWidth}px)`,\r\n    marginRight: drawerWidth,\r\n  },\r\n  drawer: {\r\n    width: drawerWidth,\r\n    flexShrink: 0,\r\n  },\r\n  drawerPaper: {\r\n    width: drawerWidth,\r\n    position: 'absolute',\r\n  },\r\n  // necessary for content to be below app bar\r\n  toolbar: theme.mixins.toolbar,\r\n  content: {\r\n    flexGrow: 1,\r\n    backgroundColor: theme.palette.background.default,\r\n    padding: theme.spacing(6),\r\n  },\r\n}));\r\n\r\nexport default function PermanentDrawerRight() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <CssBaseline />\r\n      <AppBar position=\"absolute\" className={classes.appBar}>\r\n        <Toolbar>\r\n          <Typography variant=\"h6\" noWrap>\r\n            Permanent drawer\r\n          </Typography>\r\n        </Toolbar>\r\n      </AppBar>\r\n      <Box component=\"main\" className={classes.content}>\r\n        <Box className={classes.toolbar} />\r\n        <Typography paragraph>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n          aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.\r\n          Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet\r\n          id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est\r\n          ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin\r\n          fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At\r\n          augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa\r\n          sapien faucibus et molestie ac.\r\n        </Typography>\r\n        <Typography paragraph>\r\n          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim\r\n          diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra\r\n          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis\r\n          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida\r\n          rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus\r\n          et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend.\r\n          Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.\r\n        </Typography>\r\n      </Box>\r\n      <Drawer\r\n        className={classes.drawer}\r\n        variant=\"permanent\"\r\n        classes={{\r\n          paper: classes.drawerPaper,\r\n        }}\r\n        anchor=\"right\">\r\n        <Box className={classes.toolbar} />\r\n        <Divider />\r\n        <List>\r\n          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (\r\n            <ListItem button key={text}>\r\n              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n              <ListItemText primary={text} />\r\n            </ListItem>\r\n          ))}\r\n        </List>\r\n        <Divider />\r\n        <List>\r\n          {['All mail', 'Trash', 'Spam'].map((text, index) => (\r\n            <ListItem button key={text}>\r\n              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n              <ListItemText primary={text} />\r\n            </ListItem>\r\n          ))}\r\n        </List>\r\n      </Drawer>\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/PersistentDrawerLeft.txt":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/PersistentDrawerLeft.txt ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport clsx from 'clsx';\r\nimport { makeStyles, useTheme } from '@material-ui/core/styles';\r\nimport Drawer from '@material-ui/core/Drawer';\r\nimport CssBaseline from '@material-ui/core/CssBaseline';\r\nimport AppBar from '@material-ui/core/AppBar';\r\nimport Toolbar from '@material-ui/core/Toolbar';\r\nimport List from '@material-ui/core/List';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport Divider from '@material-ui/core/Divider';\r\nimport IconButton from '@material-ui/core/IconButton';\r\nimport MenuIcon from '@material-ui/icons/Menu';\r\nimport ChevronLeftIcon from '@material-ui/icons/ChevronLeft';\r\nimport ChevronRightIcon from '@material-ui/icons/ChevronRight';\r\nimport ListItem from '@material-ui/core/ListItem';\r\nimport ListItemIcon from '@material-ui/core/ListItemIcon';\r\nimport ListItemText from '@material-ui/core/ListItemText';\r\nimport InboxIcon from '@material-ui/icons/MoveToInbox';\r\nimport MailIcon from '@material-ui/icons/Mail';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst drawerWidth = 240;\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n    position: 'relative',\r\n  },\r\n  appBar: {\r\n    transition: theme.transitions.create(['margin', 'width'], {\r\n      easing: theme.transitions.easing.sharp,\r\n      duration: theme.transitions.duration.leavingScreen,\r\n    }),\r\n  },\r\n  appBarShift: {\r\n    width: `calc(100% - ${drawerWidth}px)`,\r\n    marginLeft: drawerWidth,\r\n    transition: theme.transitions.create(['margin', 'width'], {\r\n      easing: theme.transitions.easing.easeOut,\r\n      duration: theme.transitions.duration.enteringScreen,\r\n    }),\r\n  },\r\n  menuButton: {\r\n    marginRight: theme.spacing(4),\r\n  },\r\n  hide: {\r\n    display: 'none',\r\n  },\r\n  drawer: {\r\n    width: drawerWidth,\r\n    flexShrink: 0,\r\n  },\r\n  drawerPaper: {\r\n    width: drawerWidth,\r\n    position: 'absolute',\r\n  },\r\n  drawerHeader: {\r\n    display: 'flex',\r\n    alignItems: 'center',\r\n    padding: theme.spacing(0, 2),\r\n    // necessary for content to be below app bar\r\n    ...theme.mixins.toolbar,\r\n    justifyContent: 'flex-end',\r\n  },\r\n  content: {\r\n    flexGrow: 1,\r\n    padding: theme.spacing(6),\r\n    transition: theme.transitions.create('margin', {\r\n      easing: theme.transitions.easing.sharp,\r\n      duration: theme.transitions.duration.leavingScreen,\r\n    }),\r\n    marginLeft: -drawerWidth,\r\n  },\r\n  contentShift: {\r\n    transition: theme.transitions.create('margin', {\r\n      easing: theme.transitions.easing.easeOut,\r\n      duration: theme.transitions.duration.enteringScreen,\r\n    }),\r\n    marginLeft: 0,\r\n  },\r\n}));\r\n\r\nexport default function PersistentDrawerLeft() {\r\n  const classes = useStyles();\r\n  const theme = useTheme();\r\n  const [open, setOpen] = React.useState(false);\r\n\r\n  const handleDrawerOpen = () => {\r\n    setOpen(true);\r\n  };\r\n\r\n  const handleDrawerClose = () => {\r\n    setOpen(false);\r\n  };\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <CssBaseline />\r\n      <AppBar\r\n        position=\"absolute\"\r\n        className={clsx(classes.appBar, {\r\n          [classes.appBarShift]: open,\r\n        })}>\r\n        <Toolbar>\r\n          <IconButton\r\n            color=\"inherit\"\r\n            aria-label=\"open drawer\"\r\n            onClick={handleDrawerOpen}\r\n            edge=\"start\"\r\n            className={clsx(classes.menuButton, open && classes.hide)}>\r\n            <MenuIcon />\r\n          </IconButton>\r\n          <Typography variant=\"h6\" noWrap>\r\n            Persistent drawer\r\n          </Typography>\r\n        </Toolbar>\r\n      </AppBar>\r\n      <Drawer\r\n        className={classes.drawer}\r\n        variant=\"persistent\"\r\n        anchor=\"left\"\r\n        open={open}\r\n        classes={{\r\n          paper: classes.drawerPaper,\r\n        }}>\r\n        <Box className={classes.drawerHeader}>\r\n          <IconButton onClick={handleDrawerClose}>\r\n            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}\r\n          </IconButton>\r\n        </Box>\r\n        <Divider />\r\n        <List>\r\n          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (\r\n            <ListItem button key={text}>\r\n              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n              <ListItemText primary={text} />\r\n            </ListItem>\r\n          ))}\r\n        </List>\r\n        <Divider />\r\n        <List>\r\n          {['All mail', 'Trash', 'Spam'].map((text, index) => (\r\n            <ListItem button key={text}>\r\n              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n              <ListItemText primary={text} />\r\n            </ListItem>\r\n          ))}\r\n        </List>\r\n      </Drawer>\r\n      <Box\r\n        component=\"main\"\r\n        className={clsx(classes.content, {\r\n          [classes.contentShift]: open,\r\n        })}>\r\n        <Box className={classes.drawerHeader} />\r\n        <Typography paragraph>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n          aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.\r\n          Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet\r\n          id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est\r\n          ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin\r\n          fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At\r\n          augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa\r\n          sapien faucibus et molestie ac.\r\n        </Typography>\r\n        <Typography paragraph>\r\n          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim\r\n          diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra\r\n          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis\r\n          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida\r\n          rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus\r\n          et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend.\r\n          Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.\r\n        </Typography>\r\n      </Box>\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/PersistentDrawerRight.txt":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/PersistentDrawerRight.txt ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport clsx from 'clsx';\r\nimport { makeStyles, useTheme } from '@material-ui/core/styles';\r\nimport Drawer from '@material-ui/core/Drawer';\r\nimport AppBar from '@material-ui/core/AppBar';\r\nimport Toolbar from '@material-ui/core/Toolbar';\r\nimport CssBaseline from '@material-ui/core/CssBaseline';\r\nimport List from '@material-ui/core/List';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport Divider from '@material-ui/core/Divider';\r\nimport IconButton from '@material-ui/core/IconButton';\r\nimport MenuIcon from '@material-ui/icons/Menu';\r\nimport ChevronLeftIcon from '@material-ui/icons/ChevronLeft';\r\nimport ChevronRightIcon from '@material-ui/icons/ChevronRight';\r\nimport ListItem from '@material-ui/core/ListItem';\r\nimport ListItemIcon from '@material-ui/core/ListItemIcon';\r\nimport ListItemText from '@material-ui/core/ListItemText';\r\nimport InboxIcon from '@material-ui/icons/MoveToInbox';\r\nimport MailIcon from '@material-ui/icons/Mail';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst drawerWidth = 240;\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n    position: 'relative',\r\n  },\r\n  appBar: {\r\n    transition: theme.transitions.create(['margin', 'width'], {\r\n      easing: theme.transitions.easing.sharp,\r\n      duration: theme.transitions.duration.leavingScreen,\r\n    }),\r\n  },\r\n  appBarShift: {\r\n    width: `calc(100% - ${drawerWidth}px)`,\r\n    transition: theme.transitions.create(['margin', 'width'], {\r\n      easing: theme.transitions.easing.easeOut,\r\n      duration: theme.transitions.duration.enteringScreen,\r\n    }),\r\n    marginRight: drawerWidth,\r\n  },\r\n  title: {\r\n    flexGrow: 1,\r\n  },\r\n  hide: {\r\n    display: 'none',\r\n  },\r\n  drawer: {\r\n    width: drawerWidth,\r\n    flexShrink: 0,\r\n  },\r\n  drawerPaper: {\r\n    width: drawerWidth,\r\n    position: 'absolute',\r\n  },\r\n  drawerHeader: {\r\n    display: 'flex',\r\n    alignItems: 'center',\r\n    padding: theme.spacing(0, 2),\r\n    // necessary for content to be below app bar\r\n    ...theme.mixins.toolbar,\r\n    justifyContent: 'flex-start',\r\n  },\r\n  content: {\r\n    flexGrow: 1,\r\n    padding: theme.spacing(6),\r\n    transition: theme.transitions.create('margin', {\r\n      easing: theme.transitions.easing.sharp,\r\n      duration: theme.transitions.duration.leavingScreen,\r\n    }),\r\n    marginRight: -drawerWidth,\r\n  },\r\n  contentShift: {\r\n    transition: theme.transitions.create('margin', {\r\n      easing: theme.transitions.easing.easeOut,\r\n      duration: theme.transitions.duration.enteringScreen,\r\n    }),\r\n    marginRight: 0,\r\n  },\r\n}));\r\n\r\nexport default function PersistentDrawerRight() {\r\n  const classes = useStyles();\r\n  const theme = useTheme();\r\n  const [open, setOpen] = React.useState(false);\r\n\r\n  const handleDrawerOpen = () => {\r\n    setOpen(true);\r\n  };\r\n\r\n  const handleDrawerClose = () => {\r\n    setOpen(false);\r\n  };\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <CssBaseline />\r\n      <AppBar\r\n        position=\"absolute\"\r\n        className={clsx(classes.appBar, {\r\n          [classes.appBarShift]: open,\r\n        })}>\r\n        <Toolbar>\r\n          <Typography variant=\"h6\" noWrap className={classes.title}>\r\n            Persistent drawer\r\n          </Typography>\r\n          <IconButton\r\n            color=\"inherit\"\r\n            aria-label=\"open drawer\"\r\n            edge=\"end\"\r\n            onClick={handleDrawerOpen}\r\n            className={clsx(open && classes.hide)}>\r\n            <MenuIcon />\r\n          </IconButton>\r\n        </Toolbar>\r\n      </AppBar>\r\n      <Box\r\n        component=\"main\"\r\n        className={clsx(classes.content, {\r\n          [classes.contentShift]: open,\r\n        })}>\r\n        <Box className={classes.drawerHeader} />\r\n        <Typography paragraph>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n          aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.\r\n          Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet\r\n          id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est\r\n          ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin\r\n          fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At\r\n          augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa\r\n          sapien faucibus et molestie ac.\r\n        </Typography>\r\n        <Typography paragraph>\r\n          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim\r\n          diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra\r\n          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis\r\n          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida\r\n          rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus\r\n          et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend.\r\n          Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.\r\n        </Typography>\r\n      </Box>\r\n      <Drawer\r\n        className={classes.drawer}\r\n        variant=\"persistent\"\r\n        anchor=\"right\"\r\n        open={open}\r\n        classes={{\r\n          paper: classes.drawerPaper,\r\n        }}>\r\n        <Box className={classes.drawerHeader}>\r\n          <IconButton onClick={handleDrawerClose}>\r\n            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}\r\n          </IconButton>\r\n        </Box>\r\n        <Divider />\r\n        <List>\r\n          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (\r\n            <ListItem button key={text}>\r\n              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n              <ListItemText primary={text} />\r\n            </ListItem>\r\n          ))}\r\n        </List>\r\n        <Divider />\r\n        <List>\r\n          {['All mail', 'Trash', 'Spam'].map((text, index) => (\r\n            <ListItem button key={text}>\r\n              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n              <ListItemText primary={text} />\r\n            </ListItem>\r\n          ))}\r\n        </List>\r\n      </Drawer>\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/ResponsiveDrawer.txt":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/ResponsiveDrawer.txt ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport AppBar from '@material-ui/core/AppBar';\r\nimport CssBaseline from '@material-ui/core/CssBaseline';\r\nimport Divider from '@material-ui/core/Divider';\r\nimport Drawer from '@material-ui/core/Drawer';\r\nimport Hidden from '@material-ui/core/Hidden';\r\nimport IconButton from '@material-ui/core/IconButton';\r\nimport InboxIcon from '@material-ui/icons/MoveToInbox';\r\nimport List from '@material-ui/core/List';\r\nimport ListItem from '@material-ui/core/ListItem';\r\nimport ListItemIcon from '@material-ui/core/ListItemIcon';\r\nimport ListItemText from '@material-ui/core/ListItemText';\r\nimport MailIcon from '@material-ui/icons/Mail';\r\nimport MenuIcon from '@material-ui/icons/Menu';\r\nimport Toolbar from '@material-ui/core/Toolbar';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport { makeStyles, useTheme } from '@material-ui/core/styles';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst drawerWidth = 240;\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n    position: 'relative',\r\n  },\r\n  drawer: {\r\n    [theme.breakpoints.up('sm')]: {\r\n      width: drawerWidth,\r\n      flexShrink: 0,\r\n    },\r\n  },\r\n  appBar: {\r\n    [theme.breakpoints.up('sm')]: {\r\n      width: `calc(100% - ${drawerWidth}px)`,\r\n      marginLeft: drawerWidth,\r\n    },\r\n  },\r\n  menuButton: {\r\n    marginRight: theme.spacing(4),\r\n    [theme.breakpoints.up('sm')]: {\r\n      display: 'none',\r\n    },\r\n  },\r\n  // necessary for content to be below app bar\r\n  toolbar: theme.mixins.toolbar,\r\n  drawerPaper: {\r\n    width: drawerWidth,\r\n    position: 'absolute',\r\n  },\r\n  content: {\r\n    flexGrow: 1,\r\n    padding: theme.spacing(6),\r\n  },\r\n}));\r\n\r\nfunction ResponsiveDrawer(props) {\r\n  const { window } = props;\r\n  const classes = useStyles();\r\n  const theme = useTheme();\r\n  const [mobileOpen, setMobileOpen] = React.useState(false);\r\n\r\n  const handleDrawerToggle = () => {\r\n    setMobileOpen(!mobileOpen);\r\n  };\r\n\r\n  const drawer = (\r\n    <Box>\r\n      <Box className={classes.toolbar} />\r\n      <Divider />\r\n      <List>\r\n        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (\r\n          <ListItem button key={text}>\r\n            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n            <ListItemText primary={text} />\r\n          </ListItem>\r\n        ))}\r\n      </List>\r\n      <Divider />\r\n      <List>\r\n        {['All mail', 'Trash', 'Spam'].map((text, index) => (\r\n          <ListItem button key={text}>\r\n            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n            <ListItemText primary={text} />\r\n          </ListItem>\r\n        ))}\r\n      </List>\r\n    </Box>\r\n  );\r\n\r\n  const container = window !== undefined ? () => window().document.body : undefined;\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <CssBaseline />\r\n      <AppBar position=\"absolute\" className={classes.appBar}>\r\n        <Toolbar>\r\n          <IconButton\r\n            color=\"inherit\"\r\n            aria-label=\"open drawer\"\r\n            edge=\"start\"\r\n            onClick={handleDrawerToggle}\r\n            className={classes.menuButton}>\r\n            <MenuIcon />\r\n          </IconButton>\r\n          <Typography variant=\"h6\" noWrap>\r\n            Responsive drawer\r\n          </Typography>\r\n        </Toolbar>\r\n      </AppBar>\r\n      <nav className={classes.drawer} aria-label=\"mailbox folders\">\r\n        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}\r\n        <Hidden smUp implementation=\"css\">\r\n          <Drawer\r\n            container={container}\r\n            variant=\"temporary\"\r\n            anchor={theme.direction === 'rtl' ? 'right' : 'left'}\r\n            open={mobileOpen}\r\n            onClose={handleDrawerToggle}\r\n            classes={{\r\n              paper: classes.drawerPaper,\r\n            }}\r\n            ModalProps={{\r\n              keepMounted: true, // Better open performance on mobile.\r\n            }}>\r\n            {drawer}\r\n          </Drawer>\r\n        </Hidden>\r\n        <Hidden xsDown implementation=\"css\">\r\n          <Drawer\r\n            classes={{\r\n              paper: classes.drawerPaper,\r\n            }}\r\n            variant=\"permanent\"\r\n            open>\r\n            {drawer}\r\n          </Drawer>\r\n        </Hidden>\r\n      </nav>\r\n      <Box component=\"main\" className={classes.content}>\r\n        <Box className={classes.toolbar} />\r\n        <Typography paragraph>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n          aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.\r\n          Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet\r\n          id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est\r\n          ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin\r\n          fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At\r\n          augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa\r\n          sapien faucibus et molestie ac.\r\n        </Typography>\r\n        <Typography paragraph>\r\n          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim\r\n          diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra\r\n          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis\r\n          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida\r\n          rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus\r\n          et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend.\r\n          Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.\r\n        </Typography>\r\n      </Box>\r\n    </Box>\r\n  );\r\n}\r\n\r\nResponsiveDrawer.propTypes = {\r\n  /**\r\n   * Injected by the documentation to work in an iframe.\r\n   * You won't need it on your project.\r\n   */\r\n  window: PropTypes.func,\r\n};\r\n\r\nexport default ResponsiveDrawer;\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/SwipeableTemporaryDrawer.txt":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/SwipeableTemporaryDrawer.txt ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport clsx from 'clsx';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport SwipeableDrawer from '@material-ui/core/SwipeableDrawer';\r\nimport Button from '@material-ui/core/Button';\r\nimport List from '@material-ui/core/List';\r\nimport Divider from '@material-ui/core/Divider';\r\nimport ListItem from '@material-ui/core/ListItem';\r\nimport ListItemIcon from '@material-ui/core/ListItemIcon';\r\nimport ListItemText from '@material-ui/core/ListItemText';\r\nimport InboxIcon from '@material-ui/icons/MoveToInbox';\r\nimport MailIcon from '@material-ui/icons/Mail';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles({\r\n  list: {\r\n    width: 250,\r\n  },\r\n  fullList: {\r\n    width: 'auto',\r\n  },\r\n});\r\n\r\nexport default function SwipeableTemporaryDrawer() {\r\n  const classes = useStyles();\r\n  const [state, setState] = React.useState({\r\n    top: false,\r\n    left: false,\r\n    bottom: false,\r\n    right: false,\r\n  });\r\n\r\n  const toggleDrawer = (anchor, open) => event => {\r\n    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {\r\n      return;\r\n    }\r\n\r\n    setState({ ...state, [anchor]: open });\r\n  };\r\n\r\n  const list = anchor => (\r\n    <Box\r\n      className={clsx(classes.list, {\r\n        [classes.fullList]: anchor === 'top' || anchor === 'bottom',\r\n      })}\r\n      role=\"presentation\"\r\n      onClick={toggleDrawer(anchor, false)}\r\n      onKeyDown={toggleDrawer(anchor, false)}>\r\n      <List>\r\n        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (\r\n          <ListItem button key={text}>\r\n            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n            <ListItemText primary={text} />\r\n          </ListItem>\r\n        ))}\r\n      </List>\r\n      <Divider />\r\n      <List>\r\n        {['All mail', 'Trash', 'Spam'].map((text, index) => (\r\n          <ListItem button key={text}>\r\n            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n            <ListItemText primary={text} />\r\n          </ListItem>\r\n        ))}\r\n      </List>\r\n    </Box>\r\n  );\r\n\r\n  return (\r\n    <Box>\r\n      {['left', 'right', 'top', 'bottom'].map(anchor => (\r\n        <React.Fragment key={anchor}>\r\n          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>\r\n          <SwipeableDrawer\r\n            anchor={anchor}\r\n            open={state[anchor]}\r\n            onClose={toggleDrawer(anchor, false)}\r\n            onOpen={toggleDrawer(anchor, true)}>\r\n            {list(anchor)}\r\n          </SwipeableDrawer>\r\n        </React.Fragment>\r\n      ))}\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/TemporaryDrawer.txt":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/TemporaryDrawer.txt ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport clsx from 'clsx';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Drawer from '@material-ui/core/Drawer';\r\nimport Button from '@material-ui/core/Button';\r\nimport List from '@material-ui/core/List';\r\nimport Divider from '@material-ui/core/Divider';\r\nimport ListItem from '@material-ui/core/ListItem';\r\nimport ListItemIcon from '@material-ui/core/ListItemIcon';\r\nimport ListItemText from '@material-ui/core/ListItemText';\r\nimport InboxIcon from '@material-ui/icons/MoveToInbox';\r\nimport MailIcon from '@material-ui/icons/Mail';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles({\r\n  list: {\r\n    width: 250,\r\n  },\r\n  fullList: {\r\n    width: 'auto',\r\n  },\r\n});\r\n\r\nexport default function TemporaryDrawer() {\r\n  const classes = useStyles();\r\n  const [state, setState] = React.useState({\r\n    top: false,\r\n    left: false,\r\n    bottom: false,\r\n    right: false,\r\n  });\r\n\r\n  const toggleDrawer = (anchor, open) => event => {\r\n    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {\r\n      return;\r\n    }\r\n\r\n    setState({ ...state, [anchor]: open });\r\n  };\r\n\r\n  const list = anchor => (\r\n    <Box\r\n      className={clsx(classes.list, {\r\n        [classes.fullList]: anchor === 'top' || anchor === 'bottom',\r\n      })}\r\n      role=\"presentation\"\r\n      onClick={toggleDrawer(anchor, false)}\r\n      onKeyDown={toggleDrawer(anchor, false)}>\r\n      <List>\r\n        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (\r\n          <ListItem button key={text}>\r\n            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n            <ListItemText primary={text} />\r\n          </ListItem>\r\n        ))}\r\n      </List>\r\n      <Divider />\r\n      <List>\r\n        {['All mail', 'Trash', 'Spam'].map((text, index) => (\r\n          <ListItem button key={text}>\r\n            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>\r\n            <ListItemText primary={text} />\r\n          </ListItem>\r\n        ))}\r\n      </List>\r\n    </Box>\r\n  );\r\n\r\n  return (\r\n    <Box>\r\n      {['left', 'right', 'top', 'bottom'].map(anchor => (\r\n        <React.Fragment key={anchor}>\r\n          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>\r\n          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>\r\n            {list(anchor)}\r\n          </Drawer>\r\n        </React.Fragment>\r\n      ))}\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./resources/js/src/@fake-db/mui-components/drawer sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/src/@fake-db/mui-components/drawer/ sync nonrecursive !./node_modules/raw-loader/dist/cjs.js! \.(txt%7Cjs%7Cmd%7Ctsx)$ ***!
  \*********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ClippedDrawer.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/ClippedDrawer.txt",
	"./MiniDrawer.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/MiniDrawer.txt",
	"./PermanentDrawerLeft.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/PermanentDrawerLeft.txt",
	"./PermanentDrawerRight.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/PermanentDrawerRight.txt",
	"./PersistentDrawerLeft.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/PersistentDrawerLeft.txt",
	"./PersistentDrawerRight.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/PersistentDrawerRight.txt",
	"./ResponsiveDrawer.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/ResponsiveDrawer.txt",
	"./SwipeableTemporaryDrawer.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/SwipeableTemporaryDrawer.txt",
	"./TemporaryDrawer.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/drawer/TemporaryDrawer.txt"
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
webpackContext.id = "./resources/js/src/@fake-db/mui-components/drawer sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$";

/***/ })

}]);