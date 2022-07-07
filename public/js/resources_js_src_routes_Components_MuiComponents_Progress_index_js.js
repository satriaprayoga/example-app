(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_routes_Components_MuiComponents_Progress_index_js"],{

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

/***/ "./node_modules/@material-ui/core/esm/Fab/Fab.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Fab/Fab.js ***!
  \*******************************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/chainPropTypes.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.button, {
      boxSizing: 'border-box',
      minHeight: 36,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56,
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12]
      },
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        },
        textDecoration: 'none'
      },
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // assure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    primary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    secondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="extended"`. */
    extended: {
      borderRadius: 48 / 2,
      padding: '0 16px',
      width: 'auto',
      minHeight: 'auto',
      minWidth: 48,
      height: 48,
      '&$sizeSmall': {
        width: 'auto',
        padding: '0 8px',
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      },
      '&$sizeMedium': {
        width: 'auto',
        padding: '0 16px',
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    },

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `size="small"``. */
    sizeSmall: {
      width: 40,
      height: 40
    },

    /* Styles applied to the root element if `size="medium"``. */
    sizeMedium: {
      width: 48,
      height: 48
    }
  };
};
var Fab = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Fab(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$size = props.size,
      size = _props$size === void 0 ? 'large' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'circular' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "classes", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className, size !== 'large' && classes["size".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(size))], disabled && classes.disabled, variant === 'extended' && classes.extended, {
      'primary': classes.primary,
      'secondary': classes.secondary,
      'inherit': classes.colorInherit
    }[color]),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.focusVisible, focusVisibleClassName),
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: classes.label
  }, children));
});
 true ? Fab.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the button.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().elementType),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * @ignore
   */
  focusVisibleClassName: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(['large', 'medium', 'small']),

  /**
   * The variant to use.
   * 'round' is deprecated, use 'circular' instead.
   */
  variant: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_7__["default"])(prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(['extended', 'circular', 'round']), function (props) {
    if (props.variant === 'round') {
      throw new Error('Material-UI: variant="round" was renamed variant="circular" for consistency.');
    }

    return null;
  })
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiFab'
})(Fab));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js ***!
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");









var TRANSITION_DURATION = 4; // seconds

var styles = function styles(theme) {
  var getColor = function getColor(color) {
    return theme.palette.type === 'light' ? (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__.lighten)(color, 0.62) : (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__.darken)(color, 0.5);
  };

  var backgroundPrimary = getColor(theme.palette.primary.main);
  var backgroundSecondary = getColor(theme.palette.secondary.main);
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      overflow: 'hidden',
      height: 4,
      '@media print': {
        colorAdjust: 'exact'
      }
    },

    /* Styles applied to the root and bar2 element if `color="primary"`; bar2 if `variant="buffer"`. */
    colorPrimary: {
      backgroundColor: backgroundPrimary
    },

    /* Styles applied to the root and bar2 elements if `color="secondary"`; bar2 if `variant="buffer"`. */
    colorSecondary: {
      backgroundColor: backgroundSecondary
    },

    /* Styles applied to the root element if `variant="determinate"`. */
    determinate: {},

    /* Styles applied to the root element if `variant="indeterminate"`. */
    indeterminate: {},

    /* Styles applied to the root element if `variant="buffer"`. */
    buffer: {
      backgroundColor: 'transparent'
    },

    /* Styles applied to the root element if `variant="query"`. */
    query: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the additional bar element if `variant="buffer"`. */
    dashed: {
      position: 'absolute',
      marginTop: 0,
      height: '100%',
      width: '100%',
      animation: '$buffer 3s infinite linear'
    },

    /* Styles applied to the additional bar element if `variant="buffer"` and `color="primary"`. */
    dashedColorPrimary: {
      backgroundImage: "radial-gradient(".concat(backgroundPrimary, " 0%, ").concat(backgroundPrimary, " 16%, transparent 42%)"),
      backgroundSize: '10px 10px',
      backgroundPosition: '0 -23px'
    },

    /* Styles applied to the additional bar element if `variant="buffer"` and `color="secondary"`. */
    dashedColorSecondary: {
      backgroundImage: "radial-gradient(".concat(backgroundSecondary, " 0%, ").concat(backgroundSecondary, " 16%, transparent 42%)"),
      backgroundSize: '10px 10px',
      backgroundPosition: '0 -23px'
    },

    /* Styles applied to the layered bar1 and bar2 elements. */
    bar: {
      width: '100%',
      position: 'absolute',
      left: 0,
      bottom: 0,
      top: 0,
      transition: 'transform 0.2s linear',
      transformOrigin: 'left'
    },

    /* Styles applied to the bar elements if `color="primary"`; bar2 if `variant` not "buffer". */
    barColorPrimary: {
      backgroundColor: theme.palette.primary.main
    },

    /* Styles applied to the bar elements if `color="secondary"`; bar2 if `variant` not "buffer". */
    barColorSecondary: {
      backgroundColor: theme.palette.secondary.main
    },

    /* Styles applied to the bar1 element if `variant="indeterminate or query"`. */
    bar1Indeterminate: {
      width: 'auto',
      animation: '$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
    },

    /* Styles applied to the bar1 element if `variant="determinate"`. */
    bar1Determinate: {
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },

    /* Styles applied to the bar1 element if `variant="buffer"`. */
    bar1Buffer: {
      zIndex: 1,
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },

    /* Styles applied to the bar2 element if `variant="indeterminate or query"`. */
    bar2Indeterminate: {
      width: 'auto',
      animation: '$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite'
    },

    /* Styles applied to the bar2 element if `variant="buffer"`. */
    bar2Buffer: {
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },
    // Legends:
    // || represents the viewport
    // -  represents a light background
    // x  represents a dark background
    '@keyframes indeterminate1': {
      //  |-----|---x-||-----||-----|
      '0%': {
        left: '-35%',
        right: '100%'
      },
      //  |-----|-----||-----||xxxx-|
      '60%': {
        left: '100%',
        right: '-90%'
      },
      '100%': {
        left: '100%',
        right: '-90%'
      }
    },
    '@keyframes indeterminate2': {
      //  |xxxxx|xxxxx||-----||-----|
      '0%': {
        left: '-200%',
        right: '100%'
      },
      //  |-----|-----||-----||-x----|
      '60%': {
        left: '107%',
        right: '-8%'
      },
      '100%': {
        left: '107%',
        right: '-8%'
      }
    },
    '@keyframes buffer': {
      '0%': {
        opacity: 1,
        backgroundPosition: '0 -23px'
      },
      '50%': {
        opacity: 0,
        backgroundPosition: '0 -23px'
      },
      '100%': {
        opacity: 1,
        backgroundPosition: '-200px -23px'
      }
    }
  };
};
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */

var LinearProgress = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function LinearProgress(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      value = props.value,
      valueBuffer = props.valueBuffer,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'indeterminate' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "value", "valueBuffer", "variant"]);

  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var rootProps = {};
  var inlineStyles = {
    bar1: {},
    bar2: {}
  };

  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      rootProps['aria-valuenow'] = Math.round(value);
      rootProps['aria-valuemin'] = 0;
      rootProps['aria-valuemax'] = 100;
      var transform = value - 100;

      if (theme.direction === 'rtl') {
        transform = -transform;
      }

      inlineStyles.bar1.transform = "translateX(".concat(transform, "%)");
    } else if (true) {
      console.error('Material-UI: You need to provide a value prop ' + 'when using the determinate or buffer variant of LinearProgress .');
    }
  }

  if (variant === 'buffer') {
    if (valueBuffer !== undefined) {
      var _transform = (valueBuffer || 0) - 100;

      if (theme.direction === 'rtl') {
        _transform = -_transform;
      }

      inlineStyles.bar2.transform = "translateX(".concat(_transform, "%)");
    } else if (true) {
      console.error('Material-UI: You need to provide a valueBuffer prop ' + 'when using the buffer variant of LinearProgress.');
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color))], className, {
      'determinate': classes.determinate,
      'indeterminate': classes.indeterminate,
      'buffer': classes.buffer,
      'query': classes.query
    }[variant]),
    role: "progressbar"
  }, rootProps, {
    ref: ref
  }, other), variant === 'buffer' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.dashed, classes["dashedColor".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color))])
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.bar, classes["barColor".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color))], (variant === 'indeterminate' || variant === 'query') && classes.bar1Indeterminate, {
      'determinate': classes.bar1Determinate,
      'buffer': classes.bar1Buffer
    }[variant]),
    style: inlineStyles.bar1
  }), variant === 'determinate' ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.bar, (variant === 'indeterminate' || variant === 'query') && classes.bar2Indeterminate, variant === 'buffer' ? [classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color))], classes.bar2Buffer] : classes["barColor".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color))]),
    style: inlineStyles.bar2
  }));
});
 true ? LinearProgress.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(['primary', 'secondary']),

  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),

  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),

  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(['buffer', 'determinate', 'indeterminate', 'query'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiLinearProgress'
})(LinearProgress));

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

/***/ "./node_modules/@material-ui/icons/Save.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Save.js ***!
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
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
}), 'Save');

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

/***/ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/CircularIndeterminate.js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Progress/demo/CircularIndeterminate.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CircularIndeterminate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(4)
      }
    }
  };
});
function CircularIndeterminate() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: "secondary"
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/CircularIntegration.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Progress/demo/CircularIntegration.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CircularIntegration)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/green.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/Fab.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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
      alignItems: 'center'
    },
    wrapper: {
      margin: theme.spacing(2),
      position: 'relative'
    },
    buttonSuccess: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__["default"][500],
      '&:hover': {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__["default"][700]
      }
    },
    fabProgress: {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__["default"][500],
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1
    },
    buttonProgress: {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__["default"][500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12
    }
  };
});
function CircularIntegration() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      success = _React$useState4[0],
      setSuccess = _React$useState4[1];

  var timer = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var buttonClassname = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_defineProperty({}, classes.buttonSuccess, success));
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);

  var handleButtonClick = function handleButtonClick() {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(function () {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__["default"], {
        "aria-label": "save",
        color: "primary",
        className: buttonClassname,
        onClick: handleButtonClick,
        children: success ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8__["default"], {})
      }), loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__["default"], {
        size: 68,
        className: classes.fabProgress
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.wrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "contained",
        color: "primary",
        className: buttonClassname,
        disabled: loading,
        onClick: handleButtonClick,
        children: "Accept terms"
      }), loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__["default"], {
        size: 24,
        className: classes.buttonProgress
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/CircularStatic.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Progress/demo/CircularStatic.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CircularStatic)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
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
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(4)
      }
    }
  };
});
function CircularStatic() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      progress = _React$useState2[0],
      setProgress = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var timer = setInterval(function () {
      setProgress(function (prevProgress) {
        return prevProgress >= 100 ? 0 : prevProgress + 10;
      });
    }, 800);
    return function () {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "determinate",
      value: 25
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "determinate",
      value: 50
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "determinate",
      value: 75
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "determinate",
      value: 100
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "determinate",
      value: progress
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/CircularUnderLoad.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Progress/demo/CircularUnderLoad.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CircularUnderLoad)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function CircularUnderLoad() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__["default"], {
    disableShrink: true
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/CircularWithValueLabel.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Progress/demo/CircularWithValueLabel.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CircularWithValueLabel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function CircularProgressWithLabel(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "relative",
    display: "inline-flex",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
      variant: "determinate"
    }, props)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "caption",
        component: "div",
        color: "textSecondary",
        children: "".concat(Math.round(props.value), "%")
      })
    })]
  });
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number.isRequired)
};
function CircularWithValueLabel() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(10),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      progress = _React$useState2[0],
      setProgress = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var timer = setInterval(function () {
      setProgress(function (prevProgress) {
        return prevProgress >= 100 ? 10 : prevProgress + 10;
      });
    }, 800);
    return function () {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CircularProgressWithLabel, {
    value: progress
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/CustomizedProgressBars.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Progress/demo/CustomizedProgressBars.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomizedProgressBars)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var BorderLinearProgress = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      height: 10,
      borderRadius: 5
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff'
    }
  };
})(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_3__["default"]); // Inspired by the former Facebook spinners.

var useStylesFacebook = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["default"])(function (theme) {
  return {
    root: {
      position: 'relative'
    },
    bottom: {
      color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
    },
    top: {
      color: '#1a90ff',
      animationDuration: '550ms',
      position: 'absolute',
      left: 0
    },
    circle: {
      strokeLinecap: 'round'
    }
  };
});

function FacebookCircularProgress(props) {
  var classes = useStylesFacebook();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({
      variant: "determinate",
      className: classes.bottom,
      size: 40,
      thickness: 4
    }, props), {}, {
      value: 100
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread({
      variant: "indeterminate",
      disableShrink: true,
      className: classes.top,
      classes: {
        circle: classes.circle
      },
      size: 40,
      thickness: 4
    }, props))]
  });
}

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["default"])({
  root: {
    flexGrow: 1
  }
});
function CustomizedProgressBars() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FacebookCircularProgress, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BorderLinearProgress, {
      variant: "determinate",
      value: 50
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/DelayingAppearance.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Progress/demo/DelayingAppearance.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DelayingAppearance)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/Fade.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
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
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    button: {
      margin: theme.spacing(4)
    },
    placeholder: {
      height: 40
    }
  };
});
function DelayingAppearance() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState('idle'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      query = _React$useState4[0],
      setQuery = _React$useState4[1];

  var timerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    return function () {
      clearTimeout(timerRef.current);
    };
  }, []);

  var handleClickLoading = function handleClickLoading() {
    setLoading(function (prevLoading) {
      return !prevLoading;
    });
  };

  var handleClickQuery = function handleClickQuery() {
    clearTimeout(timerRef.current);

    if (query !== 'idle') {
      setQuery('idle');
      return;
    }

    setQuery('progress');
    timerRef.current = setTimeout(function () {
      setQuery('success');
    }, 2000);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.placeholder,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4__["default"], {
        "in": loading,
        style: {
          transitionDelay: loading ? '800ms' : '0ms'
        },
        unmountOnExit: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__["default"], {})
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: handleClickLoading,
      className: classes.button,
      children: loading ? 'Stop loading' : 'Loading'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.placeholder,
      children: query === 'success' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        children: "Success!"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4__["default"], {
        "in": query === 'progress',
        style: {
          transitionDelay: query === 'progress' ? '800ms' : '0ms'
        },
        unmountOnExit: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__["default"], {})
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: handleClickQuery,
      className: classes.button,
      children: query !== 'idle' ? 'Reset' : 'Simulate a load'
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/LinearBuffer.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Progress/demo/LinearBuffer.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LinearBuffer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])({
  root: {
    width: '100%'
  }
});
function LinearBuffer() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      progress = _React$useState2[0],
      setProgress = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(10),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      buffer = _React$useState4[0],
      setBuffer = _React$useState4[1];

  var progressRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(function () {});
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    progressRef.current = function () {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        var diff = Math.random() * 10;
        var diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var timer = setInterval(function () {
      progressRef.current();
    }, 500);
    return function () {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "buffer",
      value: progress,
      valueBuffer: buffer
    })
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/LinearDeterminate.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Progress/demo/LinearDeterminate.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LinearDeterminate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])({
  root: {
    width: '100%'
  }
});
function LinearDeterminate() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      progress = _React$useState2[0],
      setProgress = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var timer = setInterval(function () {
      setProgress(function (oldProgress) {
        if (oldProgress === 100) {
          return 0;
        }

        var diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return function () {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "determinate",
      value: progress
    })
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/LinearIndeterminate.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Progress/demo/LinearIndeterminate.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LinearIndeterminate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(4)
      }
    }
  };
});
function LinearIndeterminate() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: "secondary"
    })]
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/LinearWithValueLabel.js":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Progress/demo/LinearWithValueLabel.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LinearWithValueLabel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function LinearProgressWithLabel(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "flex",
    alignItems: "center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
      width: "100%",
      mr: 1,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
        variant: "determinate"
      }, props))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
      minWidth: 35,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "body2",
        color: "textSecondary",
        children: "".concat(Math.round(props.value), "%")
      })
    })]
  });
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number.isRequired)
};
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["default"])({
  root: {
    width: '100%'
  }
});
function LinearWithValueLabel() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(10),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      progress = _React$useState2[0],
      setProgress = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var timer = setInterval(function () {
      setProgress(function (prevProgress) {
        return prevProgress >= 100 ? 10 : prevProgress + 10;
      });
    }, 800);
    return function () {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LinearProgressWithLabel, {
      value: progress
    })
  });
}

/***/ }),

/***/ "./resources/js/src/routes/Components/MuiComponents/Progress/index.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/routes/Components/MuiComponents/Progress/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Progress)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _jumbo_components_PageComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@jumbo/components/PageComponents */ "./resources/js/src/@jumbo/components/PageComponents/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js");
/* harmony import */ var _jumbo_components_Common_CodeViewerCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@jumbo/components/Common/CodeViewerCard */ "./resources/js/src/@jumbo/components/Common/CodeViewerCard/index.js");
/* harmony import */ var _demo_CircularIndeterminate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo/CircularIndeterminate */ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/CircularIndeterminate.js");
/* harmony import */ var _demo_CircularStatic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo/CircularStatic */ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/CircularStatic.js");
/* harmony import */ var _demo_CircularIntegration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo/CircularIntegration */ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/CircularIntegration.js");
/* harmony import */ var _demo_CircularWithValueLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/CircularWithValueLabel */ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/CircularWithValueLabel.js");
/* harmony import */ var _demo_LinearIndeterminate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/LinearIndeterminate */ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/LinearIndeterminate.js");
/* harmony import */ var _demo_LinearDeterminate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo/LinearDeterminate */ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/LinearDeterminate.js");
/* harmony import */ var _demo_LinearBuffer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo/LinearBuffer */ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/LinearBuffer.js");
/* harmony import */ var _demo_LinearWithValueLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demo/LinearWithValueLabel */ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/LinearWithValueLabel.js");
/* harmony import */ var _demo_CustomizedProgressBars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo/CustomizedProgressBars */ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/CustomizedProgressBars.js");
/* harmony import */ var _demo_DelayingAppearance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demo/DelayingAppearance */ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/DelayingAppearance.js");
/* harmony import */ var _demo_CircularUnderLoad__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./demo/CircularUnderLoad */ "./resources/js/src/routes/Components/MuiComponents/Progress/demo/CircularUnderLoad.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


















var useStyles = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_15__["default"])(function (theme) {
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

var requireRaw = __webpack_require__("./resources/js/src/@fake-db/mui-components/progress sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$");

var demos = [{
  label: 'Circular indeterminate',
  link: 'circular-indeterminate',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_demo_CircularIndeterminate__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
  filename: './CircularIndeterminate.txt'
}, {
  label: 'Circular determinate',
  link: 'circular-determinate',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_demo_CircularStatic__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
  filename: './CircularStatic.txt'
}, {
  label: 'Interactive integration',
  link: 'interactive-integration',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_demo_CircularIntegration__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
  filename: './CircularIntegration.txt'
}, {
  label: 'Circular with label',
  link: 'circular-with-label',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_demo_CircularWithValueLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
  filename: './CircularWithValueLabel.txt'
}, {
  label: 'Linear indeterminate',
  link: 'linear-indeterminate',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_demo_LinearIndeterminate__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
  filename: './LinearIndeterminate.txt'
}, {
  label: 'Linear determinate',
  link: 'linear-determinate',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_demo_LinearDeterminate__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
  filename: './LinearDeterminate.txt'
}, {
  label: 'Linear buffer',
  link: 'linear-buffer',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_demo_LinearBuffer__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
  filename: './LinearBuffer.txt'
}, {
  label: 'Linear with label',
  link: 'linear-with-label',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_demo_LinearWithValueLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {}),
  filename: './LinearWithValueLabel.txt'
}, {
  label: 'Customized progress',
  link: 'customized-progress',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_demo_CustomizedProgressBars__WEBPACK_IMPORTED_MODULE_11__["default"], {}),
  filename: './CustomizedProgressBars.txt'
}, {
  label: 'Delaying appearance',
  link: 'delaying-appearance',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_demo_DelayingAppearance__WEBPACK_IMPORTED_MODULE_12__["default"], {}),
  filename: './DelayingAppearance.txt'
}, {
  label: 'Limitations',
  link: 'limitations',
  component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_demo_CircularUnderLoad__WEBPACK_IMPORTED_MODULE_13__["default"], {}),
  filename: './CircularUnderLoad.txt'
}];
function Progress() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_jumbo_components_PageComponents__WEBPACK_IMPORTED_MODULE_1__.MuiComponentDemo, {
    pageTitle: "Progress",
    menus: demos,
    children: demos.map(function (menu, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
        id: menu.link,
        className: classes.section,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["default"], {
          component: "h3",
          variant: "inherit",
          className: classes.sectionHeading,
          children: menu.label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_jumbo_components_Common_CodeViewerCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          code: requireRaw(menu.filename)["default"],
          language: "jsx",
          children: menu.component
        })]
      }, index);
    })
  });
}

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CircularIndeterminate.txt":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CircularIndeterminate.txt ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport CircularProgress from '@material-ui/core/CircularProgress';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n    '& > * + *': {\r\n      marginLeft: theme.spacing(4),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function CircularIndeterminate() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <CircularProgress />\r\n      <CircularProgress color=\"secondary\" />\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CircularIntegration.txt":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CircularIntegration.txt ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport clsx from 'clsx';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport CircularProgress from '@material-ui/core/CircularProgress';\r\nimport { green } from '@material-ui/core/colors';\r\nimport Button from '@material-ui/core/Button';\r\nimport Fab from '@material-ui/core/Fab';\r\nimport CheckIcon from '@material-ui/icons/Check';\r\nimport SaveIcon from '@material-ui/icons/Save';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n    alignItems: 'center',\r\n  },\r\n  wrapper: {\r\n    margin: theme.spacing(2),\r\n    position: 'relative',\r\n  },\r\n  buttonSuccess: {\r\n    backgroundColor: green[500],\r\n    '&:hover': {\r\n      backgroundColor: green[700],\r\n    },\r\n  },\r\n  fabProgress: {\r\n    color: green[500],\r\n    position: 'absolute',\r\n    top: -6,\r\n    left: -6,\r\n    zIndex: 1,\r\n  },\r\n  buttonProgress: {\r\n    color: green[500],\r\n    position: 'absolute',\r\n    top: '50%',\r\n    left: '50%',\r\n    marginTop: -12,\r\n    marginLeft: -12,\r\n  },\r\n}));\r\n\r\nexport default function CircularIntegration() {\r\n  const classes = useStyles();\r\n  const [loading, setLoading] = React.useState(false);\r\n  const [success, setSuccess] = React.useState(false);\r\n  const timer = React.useRef();\r\n\r\n  const buttonClassname = clsx({\r\n    [classes.buttonSuccess]: success,\r\n  });\r\n\r\n  React.useEffect(() => {\r\n    return () => {\r\n      clearTimeout(timer.current);\r\n    };\r\n  }, []);\r\n\r\n  const handleButtonClick = () => {\r\n    if (!loading) {\r\n      setSuccess(false);\r\n      setLoading(true);\r\n      timer.current = setTimeout(() => {\r\n        setSuccess(true);\r\n        setLoading(false);\r\n      }, 2000);\r\n    }\r\n  };\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <Box className={classes.wrapper}>\r\n        <Fab aria-label=\"save\" color=\"primary\" className={buttonClassname} onClick={handleButtonClick}>\r\n          {success ? <CheckIcon /> : <SaveIcon />}\r\n        </Fab>\r\n        {loading && <CircularProgress size={68} className={classes.fabProgress} />}\r\n      </Box>\r\n      <Box className={classes.wrapper}>\r\n        <Button\r\n          variant=\"contained\"\r\n          color=\"primary\"\r\n          className={buttonClassname}\r\n          disabled={loading}\r\n          onClick={handleButtonClick}>\r\n          Accept terms\r\n        </Button>\r\n        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}\r\n      </Box>\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CircularStatic.txt":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CircularStatic.txt ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport CircularProgress from '@material-ui/core/CircularProgress';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n    '& > * + *': {\r\n      marginLeft: theme.spacing(4),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function CircularStatic() {\r\n  const classes = useStyles();\r\n  const [progress, setProgress] = React.useState(0);\r\n\r\n  React.useEffect(() => {\r\n    const timer = setInterval(() => {\r\n      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10));\r\n    }, 800);\r\n\r\n    return () => {\r\n      clearInterval(timer);\r\n    };\r\n  }, []);\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <CircularProgress variant=\"determinate\" value={25} />\r\n      <CircularProgress variant=\"determinate\" value={50} />\r\n      <CircularProgress variant=\"determinate\" value={75} />\r\n      <CircularProgress variant=\"determinate\" value={100} />\r\n      <CircularProgress variant=\"determinate\" value={progress} />\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CircularUnderLoad.txt":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CircularUnderLoad.txt ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport CircularProgress from '@material-ui/core/CircularProgress';\r\n\r\nexport default function CircularUnderLoad() {\r\n  return <CircularProgress disableShrink />;\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CircularWithValueLabel.txt":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CircularWithValueLabel.txt ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport CircularProgress from '@material-ui/core/CircularProgress';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport Box from '@material-ui/core/Box';\r\n\r\nfunction CircularProgressWithLabel(props) {\r\n  return (\r\n    <Box position=\"relative\" display=\"inline-flex\">\r\n      <CircularProgress variant=\"determinate\" {...props} />\r\n      <Box\r\n        top={0}\r\n        left={0}\r\n        bottom={0}\r\n        right={0}\r\n        position=\"absolute\"\r\n        display=\"flex\"\r\n        alignItems=\"center\"\r\n        justifyContent=\"center\">\r\n        <Typography variant=\"caption\" component=\"div\" color=\"textSecondary\">{`${Math.round(props.value)}%`}</Typography>\r\n      </Box>\r\n    </Box>\r\n  );\r\n}\r\n\r\nCircularProgressWithLabel.propTypes = {\r\n  /**\r\n   * The value of the progress indicator for the determinate and static variants.\r\n   * Value between 0 and 100.\r\n   */\r\n  value: PropTypes.number.isRequired,\r\n};\r\n\r\nexport default function CircularWithValueLabel() {\r\n  const [progress, setProgress] = React.useState(10);\r\n\r\n  React.useEffect(() => {\r\n    const timer = setInterval(() => {\r\n      setProgress(prevProgress => (prevProgress >= 100 ? 10 : prevProgress + 10));\r\n    }, 800);\r\n    return () => {\r\n      clearInterval(timer);\r\n    };\r\n  }, []);\r\n\r\n  return <CircularProgressWithLabel value={progress} />;\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CustomizedProgressBars.txt":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CustomizedProgressBars.txt ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles, withStyles } from '@material-ui/core/styles';\r\nimport CircularProgress from '@material-ui/core/CircularProgress';\r\nimport LinearProgress from '@material-ui/core/LinearProgress';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst BorderLinearProgress = withStyles(theme => ({\r\n  root: {\r\n    height: 10,\r\n    borderRadius: 5,\r\n  },\r\n  colorPrimary: {\r\n    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],\r\n  },\r\n  bar: {\r\n    borderRadius: 5,\r\n    backgroundColor: '#1a90ff',\r\n  },\r\n}))(LinearProgress);\r\n\r\n// Inspired by the former Facebook spinners.\r\nconst useStylesFacebook = makeStyles(theme => ({\r\n  root: {\r\n    position: 'relative',\r\n  },\r\n  bottom: {\r\n    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],\r\n  },\r\n  top: {\r\n    color: '#1a90ff',\r\n    animationDuration: '550ms',\r\n    position: 'absolute',\r\n    left: 0,\r\n  },\r\n  circle: {\r\n    strokeLinecap: 'round',\r\n  },\r\n}));\r\n\r\nfunction FacebookCircularProgress(props) {\r\n  const classes = useStylesFacebook();\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <CircularProgress variant=\"determinate\" className={classes.bottom} size={40} thickness={4} {...props} value={100} />\r\n      <CircularProgress\r\n        variant=\"indeterminate\"\r\n        disableShrink\r\n        className={classes.top}\r\n        classes={{\r\n          circle: classes.circle,\r\n        }}\r\n        size={40}\r\n        thickness={4}\r\n        {...props}\r\n      />\r\n    </Box>\r\n  );\r\n}\r\n\r\nconst useStyles = makeStyles({\r\n  root: {\r\n    flexGrow: 1,\r\n  },\r\n});\r\n\r\nexport default function CustomizedProgressBars() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <FacebookCircularProgress />\r\n      <br />\r\n      <BorderLinearProgress variant=\"determinate\" value={50} />\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/DelayingAppearance.txt":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/DelayingAppearance.txt ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Fade from '@material-ui/core/Fade';\r\nimport Button from '@material-ui/core/Button';\r\nimport CircularProgress from '@material-ui/core/CircularProgress';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n    flexDirection: 'column',\r\n    alignItems: 'center',\r\n  },\r\n  button: {\r\n    margin: theme.spacing(4),\r\n  },\r\n  placeholder: {\r\n    height: 40,\r\n  },\r\n}));\r\n\r\nexport default function DelayingAppearance() {\r\n  const classes = useStyles();\r\n  const [loading, setLoading] = React.useState(false);\r\n  const [query, setQuery] = React.useState('idle');\r\n  const timerRef = React.useRef();\r\n\r\n  React.useEffect(\r\n    () => () => {\r\n      clearTimeout(timerRef.current);\r\n    },\r\n    [],\r\n  );\r\n\r\n  const handleClickLoading = () => {\r\n    setLoading(prevLoading => !prevLoading);\r\n  };\r\n\r\n  const handleClickQuery = () => {\r\n    clearTimeout(timerRef.current);\r\n\r\n    if (query !== 'idle') {\r\n      setQuery('idle');\r\n      return;\r\n    }\r\n\r\n    setQuery('progress');\r\n    timerRef.current = setTimeout(() => {\r\n      setQuery('success');\r\n    }, 2000);\r\n  };\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <Box className={classes.placeholder}>\r\n        <Fade\r\n          in={loading}\r\n          style={{\r\n            transitionDelay: loading ? '800ms' : '0ms',\r\n          }}\r\n          unmountOnExit>\r\n          <CircularProgress />\r\n        </Fade>\r\n      </Box>\r\n      <Button onClick={handleClickLoading} className={classes.button}>\r\n        {loading ? 'Stop loading' : 'Loading'}\r\n      </Button>\r\n      <Box className={classes.placeholder}>\r\n        {query === 'success' ? (\r\n          <Typography>Success!</Typography>\r\n        ) : (\r\n          <Fade\r\n            in={query === 'progress'}\r\n            style={{\r\n              transitionDelay: query === 'progress' ? '800ms' : '0ms',\r\n            }}\r\n            unmountOnExit>\r\n            <CircularProgress />\r\n          </Fade>\r\n        )}\r\n      </Box>\r\n      <Button onClick={handleClickQuery} className={classes.button}>\r\n        {query !== 'idle' ? 'Reset' : 'Simulate a load'}\r\n      </Button>\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/LinearBuffer.txt":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/LinearBuffer.txt ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport LinearProgress from '@material-ui/core/LinearProgress';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles({\r\n  root: {\r\n    width: '100%',\r\n  },\r\n});\r\n\r\nexport default function LinearBuffer() {\r\n  const classes = useStyles();\r\n  const [progress, setProgress] = React.useState(0);\r\n  const [buffer, setBuffer] = React.useState(10);\r\n\r\n  const progressRef = React.useRef(() => {});\r\n  React.useEffect(() => {\r\n    progressRef.current = () => {\r\n      if (progress > 100) {\r\n        setProgress(0);\r\n        setBuffer(10);\r\n      } else {\r\n        const diff = Math.random() * 10;\r\n        const diff2 = Math.random() * 10;\r\n        setProgress(progress + diff);\r\n        setBuffer(progress + diff + diff2);\r\n      }\r\n    };\r\n  });\r\n\r\n  React.useEffect(() => {\r\n    const timer = setInterval(() => {\r\n      progressRef.current();\r\n    }, 500);\r\n\r\n    return () => {\r\n      clearInterval(timer);\r\n    };\r\n  }, []);\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <LinearProgress variant=\"buffer\" value={progress} valueBuffer={buffer} />\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/LinearDeterminate.txt":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/LinearDeterminate.txt ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport LinearProgress from '@material-ui/core/LinearProgress';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles({\r\n  root: {\r\n    width: '100%',\r\n  },\r\n});\r\n\r\nexport default function LinearDeterminate() {\r\n  const classes = useStyles();\r\n  const [progress, setProgress] = React.useState(0);\r\n\r\n  React.useEffect(() => {\r\n    const timer = setInterval(() => {\r\n      setProgress(oldProgress => {\r\n        if (oldProgress === 100) {\r\n          return 0;\r\n        }\r\n        const diff = Math.random() * 10;\r\n        return Math.min(oldProgress + diff, 100);\r\n      });\r\n    }, 500);\r\n\r\n    return () => {\r\n      clearInterval(timer);\r\n    };\r\n  }, []);\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <LinearProgress variant=\"determinate\" value={progress} />\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/LinearIndeterminate.txt":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/LinearIndeterminate.txt ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport LinearProgress from '@material-ui/core/LinearProgress';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    width: '100%',\r\n    '& > * + *': {\r\n      marginTop: theme.spacing(4),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function LinearIndeterminate() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <LinearProgress />\r\n      <LinearProgress color=\"secondary\" />\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/LinearWithValueLabel.txt":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/LinearWithValueLabel.txt ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport LinearProgress from '@material-ui/core/LinearProgress';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport Box from '@material-ui/core/Box';\r\n\r\nfunction LinearProgressWithLabel(props) {\r\n  return (\r\n    <Box display=\"flex\" alignItems=\"center\">\r\n      <Box width=\"100%\" mr={1}>\r\n        <LinearProgress variant=\"determinate\" {...props} />\r\n      </Box>\r\n      <Box minWidth={35}>\r\n        <Typography variant=\"body2\" color=\"textSecondary\">{`${Math.round(props.value)}%`}</Typography>\r\n      </Box>\r\n    </Box>\r\n  );\r\n}\r\n\r\nLinearProgressWithLabel.propTypes = {\r\n  /**\r\n   * The value of the progress indicator for the determinate and buffer variants.\r\n   * Value between 0 and 100.\r\n   */\r\n  value: PropTypes.number.isRequired,\r\n};\r\n\r\nconst useStyles = makeStyles({\r\n  root: {\r\n    width: '100%',\r\n  },\r\n});\r\n\r\nexport default function LinearWithValueLabel() {\r\n  const classes = useStyles();\r\n  const [progress, setProgress] = React.useState(10);\r\n\r\n  React.useEffect(() => {\r\n    const timer = setInterval(() => {\r\n      setProgress(prevProgress => (prevProgress >= 100 ? 10 : prevProgress + 10));\r\n    }, 800);\r\n    return () => {\r\n      clearInterval(timer);\r\n    };\r\n  }, []);\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <LinearProgressWithLabel value={progress} />\r\n    </Box>\r\n  );\r\n}\r\n");

/***/ }),

/***/ "./resources/js/src/@fake-db/mui-components/progress sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/src/@fake-db/mui-components/progress/ sync nonrecursive !./node_modules/raw-loader/dist/cjs.js! \.(txt%7Cjs%7Cmd%7Ctsx)$ ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./CircularIndeterminate.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CircularIndeterminate.txt",
	"./CircularIntegration.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CircularIntegration.txt",
	"./CircularStatic.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CircularStatic.txt",
	"./CircularUnderLoad.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CircularUnderLoad.txt",
	"./CircularWithValueLabel.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CircularWithValueLabel.txt",
	"./CustomizedProgressBars.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/CustomizedProgressBars.txt",
	"./DelayingAppearance.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/DelayingAppearance.txt",
	"./LinearBuffer.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/LinearBuffer.txt",
	"./LinearDeterminate.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/LinearDeterminate.txt",
	"./LinearIndeterminate.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/LinearIndeterminate.txt",
	"./LinearWithValueLabel.txt": "./node_modules/raw-loader/dist/cjs.js!./resources/js/src/@fake-db/mui-components/progress/LinearWithValueLabel.txt"
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
webpackContext.id = "./resources/js/src/@fake-db/mui-components/progress sync !./node_modules/raw-loader/dist/cjs.js! \\.(txt%7Cjs%7Cmd%7Ctsx)$";

/***/ })

}]);