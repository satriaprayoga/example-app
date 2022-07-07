(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_routes_Components_MuiComponents_Selects_index_js"],{

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

/***/ "./resources/js/src/routes/Components/MuiComponents/Selects/demos/ControlledOpenSelect.js":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Selects/demos/ControlledOpenSelect.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ControlledOpenSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/Select.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    button: {
      display: 'block',
      marginTop: theme.spacing(4)
    },
    formControl: {
      margin: theme.spacing(2),
      minWidth: 120
    }
  };
});
function ControlledOpenSelect() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      age = _React$useState2[0],
      setAge = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      open = _React$useState4[0],
      setOpen = _React$useState4[1];

  var handleChange = function handleChange(event) {
    setAge(event.target.value);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.button,
      onClick: handleOpen,
      children: "Open the select"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "demo-controlled-open-select-label",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__["default"], {
        labelId: "demo-controlled-open-select-label",
        id: "demo-controlled-open-select",
        open: open,
        onClose: handleClose,
        onOpen: handleOpen,
        value: age,
        onChange: handleChange,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          value: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          value: 30,
          children: "Thirty"
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Selects/demos/CustomizedSelects.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Selects/demos/CustomizedSelects.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomizedSelects)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/Select.js");
/* harmony import */ var _material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/NativeSelect */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












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
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
      }
    }
  };
})(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_3__["default"]);
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["default"])(function (theme) {
  return {
    margin: {
      margin: theme.spacing(2)
    }
  };
});
function CustomizedSelects() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      age = _React$useState2[0],
      setAge = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setAge(event.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.margin,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        htmlFor: "demo-customized-textbox",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BootstrapInput, {
        id: "demo-customized-textbox"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.margin,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "demo-customized-select-label",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        labelId: "demo-customized-select-label",
        id: "demo-customized-select",
        value: age,
        onChange: handleChange,
        input: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BootstrapInput, {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
          value: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
          value: 30,
          children: "Thirty"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.margin,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        htmlFor: "demo-customized-select-native",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "demo-customized-select-native",
        value: age,
        onChange: handleChange,
        input: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BootstrapInput, {}),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          "aria-label": "None",
          value: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 30,
          children: "Thirty"
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Selects/demos/DialogSelect.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Selects/demos/DialogSelect.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DialogSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/Input.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/Select.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    formControl: {
      margin: theme.spacing(2),
      minWidth: 120
    }
  };
});
function DialogSelect() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      age = _React$useState4[0],
      setAge = _React$useState4[1];

  var handleChange = function handleChange(event) {
    setAge(Number(event.target.value) || '');
  };

  var handleClickOpen = function handleClickOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: handleClickOpen,
      children: "Open select dialog"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
      disableBackdropClick: true,
      disableEscapeKeyDown: true,
      open: open,
      onClose: handleClose,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: "Fill the form"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
          className: classes.container,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: classes.formControl,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
              htmlFor: "demo-dialog-native",
              children: "Age"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
              "native": true,
              value: age,
              onChange: handleChange,
              input: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11__["default"], {
                id: "demo-dialog-native"
              }),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
                "aria-label": "None",
                value: ""
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
                value: 10,
                children: "Ten"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
                value: 20,
                children: "Twenty"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
                value: 30,
                children: "Thirty"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: classes.formControl,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
              id: "demo-dialog-select-label",
              children: "Age"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
              labelId: "demo-dialog-select-label",
              id: "demo-dialog-select",
              value: age,
              onChange: handleChange,
              input: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11__["default"], {}),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
                value: "",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em", {
                  children: "None"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
                value: 10,
                children: "Ten"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
                value: 20,
                children: "Twenty"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
                value: 30,
                children: "Thirty"
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_13__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClick: handleClose,
          color: "primary",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClick: handleClose,
          color: "primary",
          children: "Ok"
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Selects/demos/GroupedSelect.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Selects/demos/GroupedSelect.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GroupedSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/Select.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(2),
      minWidth: 120
    }
  };
});
function GroupedSelect() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        htmlFor: "grouped-native-select",
        children: "Grouping"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        "native": true,
        defaultValue: "",
        id: "grouped-native-select",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          "aria-label": "None",
          value: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("optgroup", {
          label: "Category 1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: 1,
            children: "Option 1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: 2,
            children: "Option 2"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("optgroup", {
          label: "Category 2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: 3,
            children: "Option 3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: 4,
            children: "Option 4"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        htmlFor: "grouped-select",
        children: "Grouping"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        defaultValue: "",
        id: "grouped-select",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8__["default"], {
          children: "Category 1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 1,
          children: "Option 1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 2,
          children: "Option 2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8__["default"], {
          children: "Category 2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 3,
          children: "Option 3"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 4,
          children: "Option 4"
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Selects/demos/MultipleSelect.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Selects/demos/MultipleSelect.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MultipleSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/Input.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/Select.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/Chip.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(2),
      minWidth: 120,
      maxWidth: 300
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    chip: {
      margin: 2
    },
    noLabel: {
      marginTop: theme.spacing(6)
    }
  };
});
var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
var names = ['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander', 'Carlos Abbott', 'Miriam Wagner', 'Bradley Wilkerson', 'Virginia Andrews', 'Kelly Snyder'];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  };
}

function MultipleSelect() {
  var classes = useStyles();
  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      personName = _React$useState2[0],
      setPersonName = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setPersonName(event.target.value);
  };

  var handleChangeMultiple = function handleChangeMultiple(event) {
    var options = event.target.options;
    var value = [];

    for (var i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setPersonName(value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "demo-multiple-name-label",
        children: "Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        labelId: "demo-multiple-name-label",
        id: "demo-multiple-name",
        multiple: true,
        value: personName,
        onChange: handleChange,
        input: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
        MenuProps: MenuProps,
        children: names.map(function (name) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
            value: name,
            style: getStyles(name, personName, theme),
            children: name
          }, name);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "demo-multiple-checkbox-label",
        children: "Tag"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        labelId: "demo-multiple-checkbox-label",
        id: "demo-multiple-checkbox",
        multiple: true,
        value: personName,
        onChange: handleChange,
        input: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
        renderValue: function renderValue(selected) {
          return selected.join(', ');
        },
        MenuProps: MenuProps,
        children: names.map(function (name) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
            value: name,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__["default"], {
              checked: personName.indexOf(name) > -1
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"], {
              primary: name
            })]
          }, name);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "demo-multiple-chip-label",
        children: "Chip"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        labelId: "demo-multiple-chip-label",
        id: "demo-multiple-chip",
        multiple: true,
        value: personName,
        onChange: handleChange,
        input: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "select-multiple-chip"
        }),
        renderValue: function renderValue(selected) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classes.chips,
            children: selected.map(function (value) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13__["default"], {
                label: value,
                className: classes.chip
              }, value);
            })
          });
        },
        MenuProps: MenuProps,
        children: names.map(function (name) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
            value: name,
            style: getStyles(name, personName, theme),
            children: name
          }, name);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.formControl, classes.noLabel),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        multiple: true,
        displayEmpty: true,
        value: personName,
        onChange: handleChange,
        input: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
        renderValue: function renderValue(selected) {
          if (selected.length === 0) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("em", {
              children: "Placeholder"
            });
          }

          return selected.join(', ');
        },
        MenuProps: MenuProps,
        inputProps: {
          'aria-label': 'Without label'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
          disabled: true,
          value: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("em", {
            children: "Placeholder"
          })
        }), names.map(function (name) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
            value: name,
            style: getStyles(name, personName, theme),
            children: name
          }, name);
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        shrink: true,
        htmlFor: "select-multiple-native",
        children: "Native"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        multiple: true,
        "native": true,
        value: personName,
        onChange: handleChangeMultiple,
        inputProps: {
          id: 'select-multiple-native'
        },
        children: names.map(function (name) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
            value: name,
            children: name
          }, name);
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Selects/demos/NativeSelects.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Selects/demos/NativeSelects.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NativeSelects)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/Select.js");
/* harmony import */ var _material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/NativeSelect */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
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











var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(2),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(4)
    }
  };
});
function NativeSelects() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    age: '',
    name: 'hai'
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var handleChange = function handleChange(event) {
    var name = event.target.name;
    setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, name, event.target.value)));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        htmlFor: "age-native-simple",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        "native": true,
        value: state.age,
        onChange: handleChange,
        inputProps: {
          name: 'age',
          id: 'age-native-simple'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          "aria-label": "None",
          value: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 30,
          children: "Thirty"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        htmlFor: "age-native-helper",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
        value: state.age,
        onChange: handleChange,
        inputProps: {
          name: 'age',
          id: 'age-native-helper'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          "aria-label": "None",
          value: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Some important helper text"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
        value: state.age,
        onChange: handleChange,
        name: "age",
        className: classes.selectEmpty,
        inputProps: {
          'aria-label': 'age'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: "",
          children: "None"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "With visually hidden label"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        shrink: true,
        htmlFor: "age-native-label-placeholder",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
        value: state.age,
        onChange: handleChange,
        inputProps: {
          name: 'age',
          id: 'age-native-label-placeholder'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: "",
          children: "None"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Label + placeholder"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      disabled: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        htmlFor: "name-native-disabled",
        children: "Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
        value: state.name,
        onChange: handleChange,
        inputProps: {
          name: 'name',
          id: 'name-native-disabled'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: "",
          children: "None"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("optgroup", {
          label: "Author",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: "hai",
            children: "Hai"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("optgroup", {
          label: "Contributors",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: "olivier",
            children: "Olivier"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: "kevin",
            children: "Kevin"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Disabled"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      error: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        htmlFor: "name-native-error",
        children: "Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
        value: state.name,
        onChange: handleChange,
        name: "name",
        inputProps: {
          id: 'name-native-error'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("optgroup", {
          label: "Author",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: "hai",
            children: "Hai"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("optgroup", {
          label: "Contributors",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: "olivier",
            children: "Olivier"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: "kevin",
            children: "Kevin"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Error"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        htmlFor: "uncontrolled-native",
        children: "Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
        defaultValue: 30,
        inputProps: {
          name: 'name',
          id: 'uncontrolled-native'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Uncontrolled"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: classes.selectEmpty,
        value: state.age,
        name: "age",
        onChange: handleChange,
        inputProps: {
          'aria-label': 'age'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: "",
          disabled: true,
          children: "Placeholder"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Placeholder"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      required: true,
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        htmlFor: "age-native-required",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        "native": true,
        value: state.age,
        onChange: handleChange,
        name: "age",
        inputProps: {
          id: 'age-native-required'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          "aria-label": "None",
          value: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Required"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "outlined",
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        htmlFor: "outlined-age-native-simple",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        "native": true,
        value: state.age,
        onChange: handleChange,
        label: "Age",
        inputProps: {
          name: 'age',
          id: 'outlined-age-native-simple'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          "aria-label": "None",
          value: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 30,
          children: "Thirty"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "filled",
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        htmlFor: "filled-age-native-simple",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        "native": true,
        value: state.age,
        onChange: handleChange,
        inputProps: {
          name: 'age',
          id: 'filled-age-native-simple'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          "aria-label": "None",
          value: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: 30,
          children: "Thirty"
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Selects/demos/SimpleSelect.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Selects/demos/SimpleSelect.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/Select.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(2),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(4)
    }
  };
});
function SimpleSelect() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      age = _React$useState2[0],
      setAge = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setAge(event.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "demo-simple-select-label",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        labelId: "demo-simple-select-label",
        id: "demo-simple-select",
        value: age,
        onChange: handleChange,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 30,
          children: "Thirty"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "demo-simple-select-helper-label",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        labelId: "demo-simple-select-helper-label",
        id: "demo-simple-select-helper",
        value: age,
        onChange: handleChange,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Some important helper text"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        value: age,
        onChange: handleChange,
        displayEmpty: true,
        className: classes.selectEmpty,
        inputProps: {
          'aria-label': 'Without label'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Without label"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        shrink: true,
        id: "demo-simple-select-placeholder-label-label",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        labelId: "demo-simple-select-placeholder-label-label",
        id: "demo-simple-select-placeholder-label",
        value: age,
        onChange: handleChange,
        displayEmpty: true,
        className: classes.selectEmpty,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Label + placeholder"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      disabled: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "demo-simple-select-disabled-label",
        children: "Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        labelId: "demo-simple-select-disabled-label",
        id: "demo-simple-select-disabled",
        value: age,
        onChange: handleChange,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Disabled"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      error: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "demo-simple-select-error-label",
        children: "Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        labelId: "demo-simple-select-error-label",
        id: "demo-simple-select-error",
        value: age,
        onChange: handleChange,
        renderValue: function renderValue(value) {
          return "\u26A0\uFE0F  - ".concat(value);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Error"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "demo-simple-select-readonly-label",
        children: "Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        labelId: "demo-simple-select-readonly-label",
        id: "demo-simple-select-readonly",
        value: age,
        onChange: handleChange,
        inputProps: {
          readOnly: true
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Read only"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "demo-simple-select-autowidth-label",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        labelId: "demo-simple-select-autowidth-label",
        id: "demo-simple-select-autowidth",
        value: age,
        onChange: handleChange,
        autoWidth: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Auto width"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        value: age,
        onChange: handleChange,
        displayEmpty: true,
        className: classes.selectEmpty,
        inputProps: {
          'aria-label': 'Without label'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: "",
          disabled: true,
          children: "Placeholder"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Placeholder"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      required: true,
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "demo-simple-select-required-label",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        labelId: "demo-simple-select-required-label",
        id: "demo-simple-select-required",
        value: age,
        onChange: handleChange,
        className: classes.selectEmpty,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 30,
          children: "Thirty"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Required"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "outlined",
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "demo-simple-select-outlined-label",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        labelId: "demo-simple-select-outlined-label",
        id: "demo-simple-select-outlined",
        value: age,
        onChange: handleChange,
        label: "Age",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 30,
          children: "Thirty"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "filled",
      className: classes.formControl,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "demo-simple-select-filled-label",
        children: "Age"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        labelId: "demo-simple-select-filled-label",
        id: "demo-simple-select-filled",
        value: age,
        onChange: handleChange,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em", {
            children: "None"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 10,
          children: "Ten"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 20,
          children: "Twenty"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: 30,
          children: "Thirty"
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Selects/index.js":
/*!***************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Selects/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Selects)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _jumbo_components_PageComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@jumbo/components/PageComponents */ "./resources/js/src/@jumbo/components/PageComponents/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js");
/* harmony import */ var _demos_SimpleSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demos/SimpleSelect */ "./resources/js/src/routes/Components/MuiComponents/Selects/demos/SimpleSelect.js");
/* harmony import */ var _demos_NativeSelects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demos/NativeSelects */ "./resources/js/src/routes/Components/MuiComponents/Selects/demos/NativeSelects.js");
/* harmony import */ var _demos_CustomizedSelects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demos/CustomizedSelects */ "./resources/js/src/routes/Components/MuiComponents/Selects/demos/CustomizedSelects.js");
/* harmony import */ var _demos_MultipleSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demos/MultipleSelect */ "./resources/js/src/routes/Components/MuiComponents/Selects/demos/MultipleSelect.js");
/* harmony import */ var _demos_ControlledOpenSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demos/ControlledOpenSelect */ "./resources/js/src/routes/Components/MuiComponents/Selects/demos/ControlledOpenSelect.js");
/* harmony import */ var _demos_DialogSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demos/DialogSelect */ "./resources/js/src/routes/Components/MuiComponents/Selects/demos/DialogSelect.js");
/* harmony import */ var _demos_GroupedSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demos/GroupedSelect */ "./resources/js/src/routes/Components/MuiComponents/Selects/demos/GroupedSelect.js");
/* harmony import */ var _jumbo_components_Common_CodeViewerCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../@jumbo/components/Common/CodeViewerCard */ "./resources/js/src/@jumbo/components/Common/CodeViewerCard/index.js");
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

var requireRaw = __webpack_require__("./resources/js/src/@fake-db/mui-components/selects sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$");

var demos = [{
  label: 'Simple Select',
  link: 'simple-select',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_demos_SimpleSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
  filename: './SimpleSelect.txt'
}, {
  label: 'Native Select',
  link: 'native-select',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_demos_NativeSelects__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
  filename: './NativeSelects.txt'
}, {
  label: 'Customized selects',
  link: 'customized-selects',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_demos_CustomizedSelects__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
  filename: './CustomizedSelects.txt'
}, {
  label: 'Multiple Select',
  link: 'multiple-select',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_demos_MultipleSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
  filename: './MultipleSelect.txt'
}, {
  label: 'Controlled Open Select',
  link: 'controlled-open-select',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_demos_ControlledOpenSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
  filename: './ControlledOpenSelect.txt'
}, {
  label: 'With a Dialog',
  link: 'with-a-dialog',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_demos_DialogSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
  filename: './DialogSelect.txt'
}, {
  label: 'Grouping',
  link: 'grouping',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_demos_GroupedSelect__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
  filename: './GroupedSelect.txt'
}];
function Selects() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_jumbo_components_PageComponents__WEBPACK_IMPORTED_MODULE_1__.MuiComponentDemo, {
    pageTitle: "Select",
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_jumbo_components_Common_CodeViewerCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
          code: requireRaw(menu.filename)["default"],
          language: "jsx",
          children: menu.component
        })]
      }, index);
    })
  });
}

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/ControlledOpenSelect.txt":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/ControlledOpenSelect.txt ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport InputLabel from '@material-ui/core/InputLabel';\r\nimport MenuItem from '@material-ui/core/MenuItem';\r\nimport FormControl from '@material-ui/core/FormControl';\r\nimport Select from '@material-ui/core/Select';\r\nimport Button from '@material-ui/core/Button';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  button: {\r\n    display: 'block',\r\n    marginTop: theme.spacing(4),\r\n  },\r\n  formControl: {\r\n    margin: theme.spacing(2),\r\n    minWidth: 120,\r\n  },\r\n}));\r\n\r\nexport default function ControlledOpenSelect() {\r\n  const classes = useStyles();\r\n  const [age, setAge] = React.useState('');\r\n  const [open, setOpen] = React.useState(false);\r\n\r\n  const handleChange = event => {\r\n    setAge(event.target.value);\r\n  };\r\n\r\n  const handleClose = () => {\r\n    setOpen(false);\r\n  };\r\n\r\n  const handleOpen = () => {\r\n    setOpen(true);\r\n  };\r\n\r\n  return (\r\n    <Box>\r\n      <Button className={classes.button} onClick={handleOpen}>\r\n        Open the select\r\n      </Button>\r\n      <FormControl className={classes.formControl}>\r\n        <InputLabel id=\"demo-controlled-open-select-label\">Age</InputLabel>\r\n        <Select\r\n          labelId=\"demo-controlled-open-select-label\"\r\n          id=\"demo-controlled-open-select\"\r\n          open={open}\r\n          onClose={handleClose}\r\n          onOpen={handleOpen}\r\n          value={age}\r\n          onChange={handleChange}>\r\n          <MenuItem value=\"\">\r\n            <em>None</em>\r\n          </MenuItem>\r\n          <MenuItem value={10}>Ten</MenuItem>\r\n          <MenuItem value={20}>Twenty</MenuItem>\r\n          <MenuItem value={30}>Thirty</MenuItem>\r\n        </Select>\r\n      </FormControl>\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/CustomizedSelects.txt":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/CustomizedSelects.txt ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles, withStyles } from '@material-ui/core/styles';\r\nimport InputLabel from '@material-ui/core/InputLabel';\r\nimport MenuItem from '@material-ui/core/MenuItem';\r\nimport FormControl from '@material-ui/core/FormControl';\r\nimport Select from '@material-ui/core/Select';\r\nimport NativeSelect from '@material-ui/core/NativeSelect';\r\nimport InputBase from '@material-ui/core/InputBase';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst BootstrapInput = withStyles(theme => ({\r\n  root: {\r\n    'label + &': {\r\n      marginTop: theme.spacing(6),\r\n    },\r\n  },\r\n  input: {\r\n    borderRadius: 4,\r\n    position: 'relative',\r\n    backgroundColor: theme.palette.background.paper,\r\n    border: '1px solid #ced4da',\r\n    fontSize: 16,\r\n    padding: '10px 26px 10px 12px',\r\n    transition: theme.transitions.create(['border-color', 'box-shadow']),\r\n    // Use the system font instead of the default Roboto font.\r\n    fontFamily: [\r\n      '-apple-system',\r\n      'BlinkMacSystemFont',\r\n      '\"Segoe UI\"',\r\n      'Roboto',\r\n      '\"Helvetica Neue\"',\r\n      'Arial',\r\n      'sans-serif',\r\n      '\"Apple Color Emoji\"',\r\n      '\"Segoe UI Emoji\"',\r\n      '\"Segoe UI Symbol\"',\r\n    ].join(','),\r\n    '&:focus': {\r\n      borderRadius: 4,\r\n      borderColor: '#80bdff',\r\n      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',\r\n    },\r\n  },\r\n}))(InputBase);\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  margin: {\r\n    margin: theme.spacing(2),\r\n  },\r\n}));\r\n\r\nexport default function CustomizedSelects() {\r\n  const classes = useStyles();\r\n  const [age, setAge] = React.useState('');\r\n  const handleChange = event => {\r\n    setAge(event.target.value);\r\n  };\r\n  return (\r\n    <Box>\r\n      <FormControl className={classes.margin}>\r\n        <InputLabel htmlFor=\"demo-customized-textbox\">Age</InputLabel>\r\n        <BootstrapInput id=\"demo-customized-textbox\" />\r\n      </FormControl>\r\n      <FormControl className={classes.margin}>\r\n        <InputLabel id=\"demo-customized-select-label\">Age</InputLabel>\r\n        <Select\r\n          labelId=\"demo-customized-select-label\"\r\n          id=\"demo-customized-select\"\r\n          value={age}\r\n          onChange={handleChange}\r\n          input={<BootstrapInput />}>\r\n          <MenuItem value=\"\">\r\n            <em>None</em>\r\n          </MenuItem>\r\n          <MenuItem value={10}>Ten</MenuItem>\r\n          <MenuItem value={20}>Twenty</MenuItem>\r\n          <MenuItem value={30}>Thirty</MenuItem>\r\n        </Select>\r\n      </FormControl>\r\n      <FormControl className={classes.margin}>\r\n        <InputLabel htmlFor=\"demo-customized-select-native\">Age</InputLabel>\r\n        <NativeSelect id=\"demo-customized-select-native\" value={age} onChange={handleChange} input={<BootstrapInput />}>\r\n          <option aria-label=\"None\" value=\"\" />\r\n          <option value={10}>Ten</option>\r\n          <option value={20}>Twenty</option>\r\n          <option value={30}>Thirty</option>\r\n        </NativeSelect>\r\n      </FormControl>\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/DialogSelect.txt":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/DialogSelect.txt ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Button from '@material-ui/core/Button';\r\nimport Dialog from '@material-ui/core/Dialog';\r\nimport DialogActions from '@material-ui/core/DialogActions';\r\nimport DialogContent from '@material-ui/core/DialogContent';\r\nimport DialogTitle from '@material-ui/core/DialogTitle';\r\nimport InputLabel from '@material-ui/core/InputLabel';\r\nimport Input from '@material-ui/core/Input';\r\nimport MenuItem from '@material-ui/core/MenuItem';\r\nimport FormControl from '@material-ui/core/FormControl';\r\nimport Select from '@material-ui/core/Select';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  container: {\r\n    display: 'flex',\r\n    flexWrap: 'wrap',\r\n  },\r\n  formControl: {\r\n    margin: theme.spacing(2),\r\n    minWidth: 120,\r\n  },\r\n}));\r\n\r\nexport default function DialogSelect() {\r\n  const classes = useStyles();\r\n  const [open, setOpen] = React.useState(false);\r\n  const [age, setAge] = React.useState('');\r\n\r\n  const handleChange = event => {\r\n    setAge(Number(event.target.value) || '');\r\n  };\r\n\r\n  const handleClickOpen = () => {\r\n    setOpen(true);\r\n  };\r\n\r\n  const handleClose = () => {\r\n    setOpen(false);\r\n  };\r\n\r\n  return (\r\n    <Box>\r\n      <Button onClick={handleClickOpen}>Open select dialog</Button>\r\n      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>\r\n        <DialogTitle>Fill the form</DialogTitle>\r\n        <DialogContent>\r\n          <form className={classes.container}>\r\n            <FormControl className={classes.formControl}>\r\n              <InputLabel htmlFor=\"demo-dialog-native\">Age</InputLabel>\r\n              <Select native value={age} onChange={handleChange} input={<Input id=\"demo-dialog-native\" />}>\r\n                <option aria-label=\"None\" value=\"\" />\r\n                <option value={10}>Ten</option>\r\n                <option value={20}>Twenty</option>\r\n                <option value={30}>Thirty</option>\r\n              </Select>\r\n            </FormControl>\r\n            <FormControl className={classes.formControl}>\r\n              <InputLabel id=\"demo-dialog-select-label\">Age</InputLabel>\r\n              <Select\r\n                labelId=\"demo-dialog-select-label\"\r\n                id=\"demo-dialog-select\"\r\n                value={age}\r\n                onChange={handleChange}\r\n                input={<Input />}>\r\n                <MenuItem value=\"\">\r\n                  <em>None</em>\r\n                </MenuItem>\r\n                <MenuItem value={10}>Ten</MenuItem>\r\n                <MenuItem value={20}>Twenty</MenuItem>\r\n                <MenuItem value={30}>Thirty</MenuItem>\r\n              </Select>\r\n            </FormControl>\r\n          </form>\r\n        </DialogContent>\r\n        <DialogActions>\r\n          <Button onClick={handleClose} color=\"primary\">\r\n            Cancel\r\n          </Button>\r\n          <Button onClick={handleClose} color=\"primary\">\r\n            Ok\r\n          </Button>\r\n        </DialogActions>\r\n      </Dialog>\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/GroupedSelect.txt":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/GroupedSelect.txt ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport InputLabel from '@material-ui/core/InputLabel';\r\nimport MenuItem from '@material-ui/core/MenuItem';\r\nimport ListSubheader from '@material-ui/core/ListSubheader';\r\nimport FormControl from '@material-ui/core/FormControl';\r\nimport Select from '@material-ui/core/Select';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  formControl: {\r\n    margin: theme.spacing(2),\r\n    minWidth: 120,\r\n  },\r\n}));\r\n\r\nexport default function GroupedSelect() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Box>\r\n      <FormControl className={classes.formControl}>\r\n        <InputLabel htmlFor=\"grouped-native-select\">Grouping</InputLabel>\r\n        <Select native defaultValue=\"\" id=\"grouped-native-select\">\r\n          <option aria-label=\"None\" value=\"\" />\r\n          <optgroup label=\"Category 1\">\r\n            <option value={1}>Option 1</option>\r\n            <option value={2}>Option 2</option>\r\n          </optgroup>\r\n          <optgroup label=\"Category 2\">\r\n            <option value={3}>Option 3</option>\r\n            <option value={4}>Option 4</option>\r\n          </optgroup>\r\n        </Select>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl}>\r\n        <InputLabel htmlFor=\"grouped-select\">Grouping</InputLabel>\r\n        <Select defaultValue=\"\" id=\"grouped-select\">\r\n          <MenuItem value=\"\">\r\n            <em>None</em>\r\n          </MenuItem>\r\n          <ListSubheader>Category 1</ListSubheader>\r\n          <MenuItem value={1}>Option 1</MenuItem>\r\n          <MenuItem value={2}>Option 2</MenuItem>\r\n          <ListSubheader>Category 2</ListSubheader>\r\n          <MenuItem value={3}>Option 3</MenuItem>\r\n          <MenuItem value={4}>Option 4</MenuItem>\r\n        </Select>\r\n      </FormControl>\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/MultipleSelect.txt":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/MultipleSelect.txt ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport clsx from 'clsx';\r\nimport { makeStyles, useTheme } from '@material-ui/core/styles';\r\nimport Input from '@material-ui/core/Input';\r\nimport InputLabel from '@material-ui/core/InputLabel';\r\nimport MenuItem from '@material-ui/core/MenuItem';\r\nimport FormControl from '@material-ui/core/FormControl';\r\nimport ListItemText from '@material-ui/core/ListItemText';\r\nimport Select from '@material-ui/core/Select';\r\nimport Checkbox from '@material-ui/core/Checkbox';\r\nimport Chip from '@material-ui/core/Chip';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  formControl: {\r\n    margin: theme.spacing(2),\r\n    minWidth: 120,\r\n    maxWidth: 300,\r\n  },\r\n  chips: {\r\n    display: 'flex',\r\n    flexWrap: 'wrap',\r\n  },\r\n  chip: {\r\n    margin: 2,\r\n  },\r\n  noLabel: {\r\n    marginTop: theme.spacing(6),\r\n  },\r\n}));\r\n\r\nconst ITEM_HEIGHT = 48;\r\nconst ITEM_PADDING_TOP = 8;\r\nconst MenuProps = {\r\n  PaperProps: {\r\n    style: {\r\n      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,\r\n      width: 250,\r\n    },\r\n  },\r\n};\r\n\r\nconst names = [\r\n  'Oliver Hansen',\r\n  'Van Henry',\r\n  'April Tucker',\r\n  'Ralph Hubbard',\r\n  'Omar Alexander',\r\n  'Carlos Abbott',\r\n  'Miriam Wagner',\r\n  'Bradley Wilkerson',\r\n  'Virginia Andrews',\r\n  'Kelly Snyder',\r\n];\r\n\r\nfunction getStyles(name, personName, theme) {\r\n  return {\r\n    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,\r\n  };\r\n}\r\n\r\nexport default function MultipleSelect() {\r\n  const classes = useStyles();\r\n  const theme = useTheme();\r\n  const [personName, setPersonName] = React.useState([]);\r\n\r\n  const handleChange = event => {\r\n    setPersonName(event.target.value);\r\n  };\r\n\r\n  const handleChangeMultiple = event => {\r\n    const { options } = event.target;\r\n    const value = [];\r\n    for (let i = 0, l = options.length; i < l; i += 1) {\r\n      if (options[i].selected) {\r\n        value.push(options[i].value);\r\n      }\r\n    }\r\n    setPersonName(value);\r\n  };\r\n\r\n  return (\r\n    <Box>\r\n      <FormControl className={classes.formControl}>\r\n        <InputLabel id=\"demo-multiple-name-label\">Name</InputLabel>\r\n        <Select\r\n          labelId=\"demo-multiple-name-label\"\r\n          id=\"demo-multiple-name\"\r\n          multiple\r\n          value={personName}\r\n          onChange={handleChange}\r\n          input={<Input />}\r\n          MenuProps={MenuProps}>\r\n          {names.map(name => (\r\n            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>\r\n              {name}\r\n            </MenuItem>\r\n          ))}\r\n        </Select>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl}>\r\n        <InputLabel id=\"demo-multiple-checkbox-label\">Tag</InputLabel>\r\n        <Select\r\n          labelId=\"demo-multiple-checkbox-label\"\r\n          id=\"demo-multiple-checkbox\"\r\n          multiple\r\n          value={personName}\r\n          onChange={handleChange}\r\n          input={<Input />}\r\n          renderValue={selected => selected.join(', ')}\r\n          MenuProps={MenuProps}>\r\n          {names.map(name => (\r\n            <MenuItem key={name} value={name}>\r\n              <Checkbox checked={personName.indexOf(name) > -1} />\r\n              <ListItemText primary={name} />\r\n            </MenuItem>\r\n          ))}\r\n        </Select>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl}>\r\n        <InputLabel id=\"demo-multiple-chip-label\">Chip</InputLabel>\r\n        <Select\r\n          labelId=\"demo-multiple-chip-label\"\r\n          id=\"demo-multiple-chip\"\r\n          multiple\r\n          value={personName}\r\n          onChange={handleChange}\r\n          input={<Input id=\"select-multiple-chip\" />}\r\n          renderValue={selected => (\r\n            <div className={classes.chips}>\r\n              {selected.map(value => (\r\n                <Chip key={value} label={value} className={classes.chip} />\r\n              ))}\r\n            </div>\r\n          )}\r\n          MenuProps={MenuProps}>\r\n          {names.map(name => (\r\n            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>\r\n              {name}\r\n            </MenuItem>\r\n          ))}\r\n        </Select>\r\n      </FormControl>\r\n      <FormControl className={clsx(classes.formControl, classes.noLabel)}>\r\n        <Select\r\n          multiple\r\n          displayEmpty\r\n          value={personName}\r\n          onChange={handleChange}\r\n          input={<Input />}\r\n          renderValue={selected => {\r\n            if (selected.length === 0) {\r\n              return <em>Placeholder</em>;\r\n            }\r\n\r\n            return selected.join(', ');\r\n          }}\r\n          MenuProps={MenuProps}\r\n          inputProps={{ 'aria-label': 'Without label' }}>\r\n          <MenuItem disabled value=\"\">\r\n            <em>Placeholder</em>\r\n          </MenuItem>\r\n          {names.map(name => (\r\n            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>\r\n              {name}\r\n            </MenuItem>\r\n          ))}\r\n        </Select>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl}>\r\n        <InputLabel shrink htmlFor=\"select-multiple-native\">\r\n          Native\r\n        </InputLabel>\r\n        <Select\r\n          multiple\r\n          native\r\n          value={personName}\r\n          onChange={handleChangeMultiple}\r\n          inputProps={{\r\n            id: 'select-multiple-native',\r\n          }}>\r\n          {names.map(name => (\r\n            <option key={name} value={name}>\r\n              {name}\r\n            </option>\r\n          ))}\r\n        </Select>\r\n      </FormControl>\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/NativeSelects.txt":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/NativeSelects.txt ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport InputLabel from '@material-ui/core/InputLabel';\r\nimport FormHelperText from '@material-ui/core/FormHelperText';\r\nimport FormControl from '@material-ui/core/FormControl';\r\nimport Select from '@material-ui/core/Select';\r\nimport NativeSelect from '@material-ui/core/NativeSelect';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  formControl: {\r\n    margin: theme.spacing(2),\r\n    minWidth: 120,\r\n  },\r\n  selectEmpty: {\r\n    marginTop: theme.spacing(4),\r\n  },\r\n}));\r\n\r\nexport default function NativeSelects() {\r\n  const classes = useStyles();\r\n  const [state, setState] = React.useState({\r\n    age: '',\r\n    name: 'hai',\r\n  });\r\n\r\n  const handleChange = event => {\r\n    const name = event.target.name;\r\n    setState({\r\n      ...state,\r\n      [name]: event.target.value,\r\n    });\r\n  };\r\n\r\n  return (\r\n    <Box>\r\n      <FormControl className={classes.formControl}>\r\n        <InputLabel htmlFor=\"age-native-simple\">Age</InputLabel>\r\n        <Select\r\n          native\r\n          value={state.age}\r\n          onChange={handleChange}\r\n          inputProps={{\r\n            name: 'age',\r\n            id: 'age-native-simple',\r\n          }}>\r\n          <option aria-label=\"None\" value=\"\" />\r\n          <option value={10}>Ten</option>\r\n          <option value={20}>Twenty</option>\r\n          <option value={30}>Thirty</option>\r\n        </Select>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl}>\r\n        <InputLabel htmlFor=\"age-native-helper\">Age</InputLabel>\r\n        <NativeSelect\r\n          value={state.age}\r\n          onChange={handleChange}\r\n          inputProps={{\r\n            name: 'age',\r\n            id: 'age-native-helper',\r\n          }}>\r\n          <option aria-label=\"None\" value=\"\" />\r\n          <option value={10}>Ten</option>\r\n          <option value={20}>Twenty</option>\r\n          <option value={30}>Thirty</option>\r\n        </NativeSelect>\r\n        <FormHelperText>Some important helper text</FormHelperText>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl}>\r\n        <NativeSelect\r\n          value={state.age}\r\n          onChange={handleChange}\r\n          name=\"age\"\r\n          className={classes.selectEmpty}\r\n          inputProps={{ 'aria-label': 'age' }}>\r\n          <option value=\"\">None</option>\r\n          <option value={10}>Ten</option>\r\n          <option value={20}>Twenty</option>\r\n          <option value={30}>Thirty</option>\r\n        </NativeSelect>\r\n        <FormHelperText>With visually hidden label</FormHelperText>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl}>\r\n        <InputLabel shrink htmlFor=\"age-native-label-placeholder\">\r\n          Age\r\n        </InputLabel>\r\n        <NativeSelect\r\n          value={state.age}\r\n          onChange={handleChange}\r\n          inputProps={{\r\n            name: 'age',\r\n            id: 'age-native-label-placeholder',\r\n          }}>\r\n          <option value=\"\">None</option>\r\n          <option value={10}>Ten</option>\r\n          <option value={20}>Twenty</option>\r\n          <option value={30}>Thirty</option>\r\n        </NativeSelect>\r\n        <FormHelperText>Label + placeholder</FormHelperText>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl} disabled>\r\n        <InputLabel htmlFor=\"name-native-disabled\">Name</InputLabel>\r\n        <NativeSelect\r\n          value={state.name}\r\n          onChange={handleChange}\r\n          inputProps={{\r\n            name: 'name',\r\n            id: 'name-native-disabled',\r\n          }}>\r\n          <option value=\"\">None</option>\r\n          <optgroup label=\"Author\">\r\n            <option value=\"hai\">Hai</option>\r\n          </optgroup>\r\n          <optgroup label=\"Contributors\">\r\n            <option value=\"olivier\">Olivier</option>\r\n            <option value=\"kevin\">Kevin</option>\r\n          </optgroup>\r\n        </NativeSelect>\r\n        <FormHelperText>Disabled</FormHelperText>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl} error>\r\n        <InputLabel htmlFor=\"name-native-error\">Name</InputLabel>\r\n        <NativeSelect\r\n          value={state.name}\r\n          onChange={handleChange}\r\n          name=\"name\"\r\n          inputProps={{\r\n            id: 'name-native-error',\r\n          }}>\r\n          <optgroup label=\"Author\">\r\n            <option value=\"hai\">Hai</option>\r\n          </optgroup>\r\n          <optgroup label=\"Contributors\">\r\n            <option value=\"olivier\">Olivier</option>\r\n            <option value=\"kevin\">Kevin</option>\r\n          </optgroup>\r\n        </NativeSelect>\r\n        <FormHelperText>Error</FormHelperText>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl}>\r\n        <InputLabel htmlFor=\"uncontrolled-native\">Name</InputLabel>\r\n        <NativeSelect\r\n          defaultValue={30}\r\n          inputProps={{\r\n            name: 'name',\r\n            id: 'uncontrolled-native',\r\n          }}>\r\n          <option value={10}>Ten</option>\r\n          <option value={20}>Twenty</option>\r\n          <option value={30}>Thirty</option>\r\n        </NativeSelect>\r\n        <FormHelperText>Uncontrolled</FormHelperText>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl}>\r\n        <NativeSelect\r\n          className={classes.selectEmpty}\r\n          value={state.age}\r\n          name=\"age\"\r\n          onChange={handleChange}\r\n          inputProps={{ 'aria-label': 'age' }}>\r\n          <option value=\"\" disabled>\r\n            Placeholder\r\n          </option>\r\n          <option value={10}>Ten</option>\r\n          <option value={20}>Twenty</option>\r\n          <option value={30}>Thirty</option>\r\n        </NativeSelect>\r\n        <FormHelperText>Placeholder</FormHelperText>\r\n      </FormControl>\r\n      <FormControl required className={classes.formControl}>\r\n        <InputLabel htmlFor=\"age-native-required\">Age</InputLabel>\r\n        <Select\r\n          native\r\n          value={state.age}\r\n          onChange={handleChange}\r\n          name=\"age\"\r\n          inputProps={{\r\n            id: 'age-native-required',\r\n          }}>\r\n          <option aria-label=\"None\" value=\"\" />\r\n          <option value={10}>Ten</option>\r\n          <option value={20}>Twenty</option>\r\n          <option value={30}>Thirty</option>\r\n        </Select>\r\n        <FormHelperText>Required</FormHelperText>\r\n      </FormControl>\r\n      <FormControl variant=\"outlined\" className={classes.formControl}>\r\n        <InputLabel htmlFor=\"outlined-age-native-simple\">Age</InputLabel>\r\n        <Select\r\n          native\r\n          value={state.age}\r\n          onChange={handleChange}\r\n          label=\"Age\"\r\n          inputProps={{\r\n            name: 'age',\r\n            id: 'outlined-age-native-simple',\r\n          }}>\r\n          <option aria-label=\"None\" value=\"\" />\r\n          <option value={10}>Ten</option>\r\n          <option value={20}>Twenty</option>\r\n          <option value={30}>Thirty</option>\r\n        </Select>\r\n      </FormControl>\r\n      <FormControl variant=\"filled\" className={classes.formControl}>\r\n        <InputLabel htmlFor=\"filled-age-native-simple\">Age</InputLabel>\r\n        <Select\r\n          native\r\n          value={state.age}\r\n          onChange={handleChange}\r\n          inputProps={{\r\n            name: 'age',\r\n            id: 'filled-age-native-simple',\r\n          }}>\r\n          <option aria-label=\"None\" value=\"\" />\r\n          <option value={10}>Ten</option>\r\n          <option value={20}>Twenty</option>\r\n          <option value={30}>Thirty</option>\r\n        </Select>\r\n      </FormControl>\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/SimpleSelect.txt":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/SimpleSelect.txt ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport InputLabel from '@material-ui/core/InputLabel';\r\nimport MenuItem from '@material-ui/core/MenuItem';\r\nimport FormHelperText from '@material-ui/core/FormHelperText';\r\nimport FormControl from '@material-ui/core/FormControl';\r\nimport Select from '@material-ui/core/Select';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  formControl: {\r\n    margin: theme.spacing(2),\r\n    minWidth: 120,\r\n  },\r\n  selectEmpty: {\r\n    marginTop: theme.spacing(4),\r\n  },\r\n}));\r\n\r\nexport default function SimpleSelect() {\r\n  const classes = useStyles();\r\n  const [age, setAge] = React.useState('');\r\n\r\n  const handleChange = event => {\r\n    setAge(event.target.value);\r\n  };\r\n\r\n  return (\r\n    <Box>\r\n      <FormControl className={classes.formControl}>\r\n        <InputLabel id=\"demo-simple-select-label\">Age</InputLabel>\r\n        <Select labelId=\"demo-simple-select-label\" id=\"demo-simple-select\" value={age} onChange={handleChange}>\r\n          <MenuItem value={10}>Ten</MenuItem>\r\n          <MenuItem value={20}>Twenty</MenuItem>\r\n          <MenuItem value={30}>Thirty</MenuItem>\r\n        </Select>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl}>\r\n        <InputLabel id=\"demo-simple-select-helper-label\">Age</InputLabel>\r\n        <Select labelId=\"demo-simple-select-helper-label\" id=\"demo-simple-select-helper\" value={age} onChange={handleChange}>\r\n          <MenuItem value=\"\">\r\n            <em>None</em>\r\n          </MenuItem>\r\n          <MenuItem value={10}>Ten</MenuItem>\r\n          <MenuItem value={20}>Twenty</MenuItem>\r\n          <MenuItem value={30}>Thirty</MenuItem>\r\n        </Select>\r\n        <FormHelperText>Some important helper text</FormHelperText>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl}>\r\n        <Select\r\n          value={age}\r\n          onChange={handleChange}\r\n          displayEmpty\r\n          className={classes.selectEmpty}\r\n          inputProps={{ 'aria-label': 'Without label' }}>\r\n          <MenuItem value=\"\">\r\n            <em>None</em>\r\n          </MenuItem>\r\n          <MenuItem value={10}>Ten</MenuItem>\r\n          <MenuItem value={20}>Twenty</MenuItem>\r\n          <MenuItem value={30}>Thirty</MenuItem>\r\n        </Select>\r\n        <FormHelperText>Without label</FormHelperText>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl}>\r\n        <InputLabel shrink id=\"demo-simple-select-placeholder-label-label\">\r\n          Age\r\n        </InputLabel>\r\n        <Select\r\n          labelId=\"demo-simple-select-placeholder-label-label\"\r\n          id=\"demo-simple-select-placeholder-label\"\r\n          value={age}\r\n          onChange={handleChange}\r\n          displayEmpty\r\n          className={classes.selectEmpty}>\r\n          <MenuItem value=\"\">\r\n            <em>None</em>\r\n          </MenuItem>\r\n          <MenuItem value={10}>Ten</MenuItem>\r\n          <MenuItem value={20}>Twenty</MenuItem>\r\n          <MenuItem value={30}>Thirty</MenuItem>\r\n        </Select>\r\n        <FormHelperText>Label + placeholder</FormHelperText>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl} disabled>\r\n        <InputLabel id=\"demo-simple-select-disabled-label\">Name</InputLabel>\r\n        <Select\r\n          labelId=\"demo-simple-select-disabled-label\"\r\n          id=\"demo-simple-select-disabled\"\r\n          value={age}\r\n          onChange={handleChange}>\r\n          <MenuItem value=\"\">\r\n            <em>None</em>\r\n          </MenuItem>\r\n          <MenuItem value={10}>Ten</MenuItem>\r\n          <MenuItem value={20}>Twenty</MenuItem>\r\n          <MenuItem value={30}>Thirty</MenuItem>\r\n        </Select>\r\n        <FormHelperText>Disabled</FormHelperText>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl} error>\r\n        <InputLabel id=\"demo-simple-select-error-label\">Name</InputLabel>\r\n        <Select\r\n          labelId=\"demo-simple-select-error-label\"\r\n          id=\"demo-simple-select-error\"\r\n          value={age}\r\n          onChange={handleChange}\r\n          renderValue={value => `⚠️  - ${value}`}>\r\n          <MenuItem value=\"\">\r\n            <em>None</em>\r\n          </MenuItem>\r\n          <MenuItem value={10}>Ten</MenuItem>\r\n          <MenuItem value={20}>Twenty</MenuItem>\r\n          <MenuItem value={30}>Thirty</MenuItem>\r\n        </Select>\r\n        <FormHelperText>Error</FormHelperText>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl}>\r\n        <InputLabel id=\"demo-simple-select-readonly-label\">Name</InputLabel>\r\n        <Select\r\n          labelId=\"demo-simple-select-readonly-label\"\r\n          id=\"demo-simple-select-readonly\"\r\n          value={age}\r\n          onChange={handleChange}\r\n          inputProps={{ readOnly: true }}>\r\n          <MenuItem value=\"\">\r\n            <em>None</em>\r\n          </MenuItem>\r\n          <MenuItem value={10}>Ten</MenuItem>\r\n          <MenuItem value={20}>Twenty</MenuItem>\r\n          <MenuItem value={30}>Thirty</MenuItem>\r\n        </Select>\r\n        <FormHelperText>Read only</FormHelperText>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl}>\r\n        <InputLabel id=\"demo-simple-select-autowidth-label\">Age</InputLabel>\r\n        <Select\r\n          labelId=\"demo-simple-select-autowidth-label\"\r\n          id=\"demo-simple-select-autowidth\"\r\n          value={age}\r\n          onChange={handleChange}\r\n          autoWidth>\r\n          <MenuItem value=\"\">\r\n            <em>None</em>\r\n          </MenuItem>\r\n          <MenuItem value={10}>Ten</MenuItem>\r\n          <MenuItem value={20}>Twenty</MenuItem>\r\n          <MenuItem value={30}>Thirty</MenuItem>\r\n        </Select>\r\n        <FormHelperText>Auto width</FormHelperText>\r\n      </FormControl>\r\n      <FormControl className={classes.formControl}>\r\n        <Select\r\n          value={age}\r\n          onChange={handleChange}\r\n          displayEmpty\r\n          className={classes.selectEmpty}\r\n          inputProps={{ 'aria-label': 'Without label' }}>\r\n          <MenuItem value=\"\" disabled>\r\n            Placeholder\r\n          </MenuItem>\r\n          <MenuItem value={10}>Ten</MenuItem>\r\n          <MenuItem value={20}>Twenty</MenuItem>\r\n          <MenuItem value={30}>Thirty</MenuItem>\r\n        </Select>\r\n        <FormHelperText>Placeholder</FormHelperText>\r\n      </FormControl>\r\n      <FormControl required className={classes.formControl}>\r\n        <InputLabel id=\"demo-simple-select-required-label\">Age</InputLabel>\r\n        <Select\r\n          labelId=\"demo-simple-select-required-label\"\r\n          id=\"demo-simple-select-required\"\r\n          value={age}\r\n          onChange={handleChange}\r\n          className={classes.selectEmpty}>\r\n          <MenuItem value=\"\">\r\n            <em>None</em>\r\n          </MenuItem>\r\n          <MenuItem value={10}>Ten</MenuItem>\r\n          <MenuItem value={20}>Twenty</MenuItem>\r\n          <MenuItem value={30}>Thirty</MenuItem>\r\n        </Select>\r\n        <FormHelperText>Required</FormHelperText>\r\n      </FormControl>\r\n      <FormControl variant=\"outlined\" className={classes.formControl}>\r\n        <InputLabel id=\"demo-simple-select-outlined-label\">Age</InputLabel>\r\n        <Select\r\n          labelId=\"demo-simple-select-outlined-label\"\r\n          id=\"demo-simple-select-outlined\"\r\n          value={age}\r\n          onChange={handleChange}\r\n          label=\"Age\">\r\n          <MenuItem value=\"\">\r\n            <em>None</em>\r\n          </MenuItem>\r\n          <MenuItem value={10}>Ten</MenuItem>\r\n          <MenuItem value={20}>Twenty</MenuItem>\r\n          <MenuItem value={30}>Thirty</MenuItem>\r\n        </Select>\r\n      </FormControl>\r\n      <FormControl variant=\"filled\" className={classes.formControl}>\r\n        <InputLabel id=\"demo-simple-select-filled-label\">Age</InputLabel>\r\n        <Select labelId=\"demo-simple-select-filled-label\" id=\"demo-simple-select-filled\" value={age} onChange={handleChange}>\r\n          <MenuItem value=\"\">\r\n            <em>None</em>\r\n          </MenuItem>\r\n          <MenuItem value={10}>Ten</MenuItem>\r\n          <MenuItem value={20}>Twenty</MenuItem>\r\n          <MenuItem value={30}>Thirty</MenuItem>\r\n        </Select>\r\n      </FormControl>\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./resources/js/src/@fake-db/mui-components/selects sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/src/@fake-db/mui-components/selects/ sync nonrecursive !./node_modules/raw-loader/dist/cjs.js! \.(txt%7Cjs%7Cmd%7Ctsx)$ ***!
  \**********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ControlledOpenSelect.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/ControlledOpenSelect.txt",
	"./CustomizedSelects.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/CustomizedSelects.txt",
	"./DialogSelect.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/DialogSelect.txt",
	"./GroupedSelect.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/GroupedSelect.txt",
	"./MultipleSelect.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/MultipleSelect.txt",
	"./NativeSelects.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/NativeSelects.txt",
	"./SimpleSelect.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/selects/SimpleSelect.txt"
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
webpackContext.id = "./resources/js/src/@fake-db/mui-components/selects sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$";

/***/ })

}]);