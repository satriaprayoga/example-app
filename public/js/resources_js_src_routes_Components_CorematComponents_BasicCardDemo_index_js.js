"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_routes_Components_CorematComponents_BasicCardDemo_index_js"],{

/***/ "./node_modules/@material-ui/core/esm/Breadcrumbs/BreadcrumbCollapsed.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Breadcrumbs/BreadcrumbCollapsed.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/chainPropTypes.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  /* Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
  media: {
    width: '100%'
  },

  /* Styles applied to the root element if `component="picture or img"`. */
  img: {
    // ?????? object-fit is not supported by IE 11.
    objectFit: 'cover'
  }
};
var MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
var CardMedia = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function CardMedia(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      image = props.image,
      src = props.src,
      style = props.style,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "component", "image", "src", "style"]);

  var isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
  var composedStyle = !isMediaComponent && image ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundImage: "url(\"".concat(image, "\")")
  }, style) : style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className, isMediaComponent && classes.media, "picture img".indexOf(Component) !== -1 && classes.img),
    ref: ref,
    style: composedStyle,
    src: isMediaComponent ? image || src : undefined
  }, other), children);
});
 true ? CardMedia.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_4__["default"])((prop_types__WEBPACK_IMPORTED_MODULE_5___default().node), function (props) {
    if (!props.children && !props.image && !props.src && !props.component) {
      return new Error('Material-UI: Either `children`, `image`, `src` or `component` prop must be specified.');
    }

    return null;
  }),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().elementType),

  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),

  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiCardMedia'
})(CardMedia));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Fab/Fab.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Fab/Fab.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/MoreHoriz.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/MoreHoriz.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/@material-ui/icons/AllInclusive.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/icons/AllInclusive.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"
}), 'AllInclusive');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Info.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Info.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
}), 'Info');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/AvatarGroup/AvatarGroup.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/AvatarGroup/AvatarGroup.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/Avatar.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/chainPropTypes.js");









var SPACINGS = {
  small: -16,
  medium: null
};
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex'
    },

    /* Styles applied to the avatar elements. */
    avatar: {
      border: "2px solid ".concat(theme.palette.background.default),
      marginLeft: -8,
      '&:first-child': {
        marginLeft: 0
      }
    }
  };
};
var AvatarGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function AvatarGroup(props, ref) {
  var childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$max = props.max,
      max = _props$max === void 0 ? 5 : _props$max,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 'medium' : _props$spacing,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "max", "spacing"]);

  var clampedMax = max < 2 ? 2 : max;
  var children = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(childrenProp).filter(function (child) {
    if (true) {
      if ((0,react_is__WEBPACK_IMPORTED_MODULE_3__.isFragment)(child)) {
        console.error(["Material-UI: The AvatarGroup component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(child);
  });
  var extraAvatars = children.length > clampedMax ? children.length - clampedMax + 1 : 0;
  var marginLeft = spacing && SPACINGS[spacing] !== undefined ? SPACINGS[spacing] : -spacing;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    ref: ref
  }, other), children.slice(0, children.length - extraAvatars).map(function (child, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(child, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(child.props.className, classes.avatar),
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        zIndex: children.length - index,
        marginLeft: index === 0 ? undefined : marginLeft
      }, child.props.style)
    });
  }), extraAvatars ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.avatar,
    style: {
      zIndex: 0,
      marginLeft: marginLeft
    }
  }, "+", extraAvatars) : null);
});
 true ? AvatarGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The avatars to stack.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),

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
   * Max avatars to show before +x.
   */
  max: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_7__["default"])((prop_types__WEBPACK_IMPORTED_MODULE_6___default().number), function (props) {
    if (props.max < 2) {
      throw new Error(['Material-UI: The prop `max` should be equal to 2 or above.', 'A value below is clamped to 2.'].join('\n'));
    }
  }),

  /**
   * Spacing between avatars.
   */
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(['medium', 'small']), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiAvatarGroup'
})(AvatarGroup));

/***/ }),

/***/ "./resources/js/src/@coremat/CmtAvatarGroup/index.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/@coremat/CmtAvatarGroup/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/AvatarGroup/AvatarGroup.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/ClickAwayListener/ClickAwayListener.js");
/* harmony import */ var _CmtAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CmtAvatar */ "./resources/js/src/@coremat/CmtAvatar/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["items", "max", "srcKey", "titleKey", "phCharLength", "avatarSize", "onItemClick", "onMoreClick", "spacing", "expandable", "renderItemSummary", "renderMore", "moreVisibleOn", "itemStyle", "activeItemStyle", "tooltipProps"];

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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









var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])(function (theme) {
  return {
    rootAvatarGroup: function rootAvatarGroup(props) {
      return {
        '& .MuiAvatar-root': {
          borderColor: props.avatarStyle.outlineColor,
          borderWidth: props.avatarStyle.outlineThickness,
          marginLeft: -props.spacing,
          transition: 'all 0.30s ease',
          '&:first-child': {
            marginLeft: 0
          },
          '&:hover': {
            borderColor: props.avatarActiveStyle.outlineColor ? props.avatarActiveStyle.outlineColor : theme.palette.primary.main,
            borderWidth: props.avatarActiveStyle.outlineThickness,
            boxShadow: "rgba(0,0,0,0.2) 0px 2px ".concat(props.avatarActiveStyle.elevation, "px -1px"),
            zIndex: "".concat(props.totalRecords, " !important")
          }
        },
        '&:hover .Cmt-hoverEffect': {
          marginLeft: 0
        }
      };
    }
  };
});

var getPlaceholderChar = function getPlaceholderChar(str, phCharLength) {
  if (str && phCharLength > 0) {
    return str.substr(0, phCharLength).toUpperCase();
  }
};

var CmtAvatarGroup = function CmtAvatarGroup(_ref) {
  var items = _ref.items,
      max = _ref.max,
      srcKey = _ref.srcKey,
      titleKey = _ref.titleKey,
      phCharLength = _ref.phCharLength,
      avatarSize = _ref.avatarSize,
      onItemClick = _ref.onItemClick,
      onMoreClick = _ref.onMoreClick,
      spacing = _ref.spacing,
      expandable = _ref.expandable,
      renderItemSummary = _ref.renderItemSummary,
      renderMore = _ref.renderMore,
      moreVisibleOn = _ref.moreVisibleOn,
      itemStyle = _ref.itemStyle,
      activeItemStyle = _ref.activeItemStyle,
      tooltipProps = _ref.tooltipProps,
      rest = _objectWithoutProperties(_ref, _excluded);

  var avatarStyle = function avatarStyle() {
    return _objectSpread({
      outlineColor: '#fafafa',
      outlineThickness: 2
    }, itemStyle);
  };

  var avatarActiveStyle = function avatarActiveStyle() {
    return _objectSpread({
      outlineColor: '',
      outlineThickness: 2,
      elevation: 3
    }, activeItemStyle);
  };

  var totalRecords = items.length;
  var visibleItems = items.slice(0, max < totalRecords ? max - 1 : max);
  var restItems = max < totalRecords ? items.slice(max - 1, totalRecords) : [];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openMoreTooltip = _useState2[0],
      setOpenMoreTooltip = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(moreVisibleOn && moreVisibleOn !== 'click' && restItems.length && renderMore ? renderMore(restItems) : ''),
      _useState4 = _slicedToArray(_useState3, 2),
      renderedMoreItems = _useState4[0],
      setRenderedMoreItems = _useState4[1];

  var ttProps = moreVisibleOn === 'click' ? {
    open: openMoreTooltip
  } : {};
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (openMoreTooltip) {
      setRenderedMoreItems(renderMore(restItems));
    } else if (moreVisibleOn === 'click') {
      setRenderedMoreItems('');
    } //eslint-disable-next-line react-hooks/exhaustive-deps

  }, [openMoreTooltip]);
  var classes = useStyles({
    spacing: spacing,
    avatarStyle: avatarStyle,
    avatarActiveStyle: avatarActiveStyle,
    totalRecords: totalRecords
  });

  var handleItemClick = function handleItemClick(item, index, event) {
    if (onItemClick) onItemClick(item, index, event);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.rootAvatarGroup, 'Cmt-root-avatar-group'),
    max: max
  }, rest), {}, {
    children: [visibleItems.map(function (item, index) {
      return renderItemSummary ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({
        title: renderItemSummary(item, index)
      }, tooltipProps), {}, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_CmtAvatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: expandable ? 'Cmt-hoverEffect' : '',
          alt: item[titleKey],
          src: item[srcKey],
          size: avatarSize,
          onClick: function onClick(event) {
            return handleItemClick(item, index, event);
          },
          style: {
            cursor: 'pointer',
            zIndex: index
          },
          children: getPlaceholderChar(item[titleKey], phCharLength)
        })
      }), index) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_CmtAvatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: expandable ? 'Cmt-hoverEffect' : '',
        alt: item[titleKey],
        src: item[srcKey],
        size: avatarSize,
        onClick: function onClick(event) {
          return handleItemClick(item, index, event);
        },
        style: {
          cursor: 'pointer',
          zIndex: index
        },
        children: getPlaceholderChar(item[titleKey], phCharLength)
      }, index);
    }), max < totalRecords && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({
      title: renderedMoreItems
    }, ttProps), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_CmtAvatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('Cmt-avatar-more', expandable ? 'Cmt-hoverEffect' : ''),
        alt: restItems.length.toString(),
        size: avatarSize,
        style: {
          cursor: 'pointer',
          zIndex: max
        },
        onClick: function onClick(event) {
          if ((onMoreClick && _typeof(onMoreClick)) === 'function') onMoreClick(event);

          if (moreVisibleOn === 'click') {
            setOpenMoreTooltip(!openMoreTooltip);
          }
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onClickAway: function onClickAway() {
            return setOpenMoreTooltip(false);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: ["+", restItems.length]
          })
        })
      })
    }))]
  }));
};

CmtAvatarGroup.prototype = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().array.isRequired),
  max: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
  spacing: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
  srcKey: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  titleKey: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  phCharLength: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
  avatarSize: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOf(['small', 'medium', 'large']), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number)]),
  onItemClick: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onMoreClick: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  expandable: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  renderItemSummary: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  renderMore: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  moreVisibleOn: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOf(['hover', 'click']),
  itemStyle: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  activeItemStyle: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  tooltipProps: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)
};
CmtAvatarGroup.defaultProps = {
  items: [],
  max: 5,
  spacing: 8,
  srcKey: 'src',
  titleKey: 'title',
  phCharLength: 1,
  avatarSize: 'medium',
  expandable: false,
  moreVisibleOn: 'hover',
  itemStyle: {
    outlineColor: '#fafafa',
    outlineThickness: 2
  },
  activeItemStyle: {
    outlineColor: '',
    outlineThickness: 2,
    elevation: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CmtAvatarGroup);

/***/ }),

/***/ "./resources/js/src/@coremat/CmtCard/CmtCardMedia.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/@coremat/CmtCard/CmtCardMedia.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Fab/Fab.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["icon", "size"],
    _excluded2 = ["cardTitle", "cardTitleProps", "fabButton", "className", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return {
    media: {
      position: 'relative',
      zIndex: 2,
      height: 0,
      paddingTop: '56.25%',
      // 16:9
      '&.Cmt-media-children': {
        height: 'auto',
        minHeight: 150,
        paddingTop: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& $mediaTitle': {
          position: 'relative',
          bottom: 'auto',
          left: 'auto'
        }
      }
    },
    mediaTitle: {
      fontSize: 24,
      fontWeight: 300,
      position: 'absolute',
      bottom: 0,
      left: 0,
      padding: 16,
      maxWidth: '100%'
    },
    fabButton: {
      cursor: 'pointer',
      position: 'absolute',
      right: theme.spacing(4),
      zIndex: 1
    },
    smallSizeFabButton: {
      height: 40,
      width: 40,
      bottom: -20
    },
    mediumSizeFabButton: {
      height: 48,
      width: 48,
      bottom: -24
    },
    largeSizeFabButton: {
      height: 56,
      width: 56,
      bottom: -28
    }
  };
});

var RenderFabButton = function RenderFabButton(_ref) {
  var fabButton = _ref.fabButton;
  var classes = useStyles();
  if (!fabButton) return null;
  if ( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(fabButton)) return fabButton;

  var icon = fabButton.icon,
      size = fabButton.size,
      rest = _objectWithoutProperties(fabButton, _excluded);

  var btnSize = size ? size : 'small';
  return icon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.fabButton, 'fab-button', classes["".concat(btnSize, "SizeFabButton")]),
    color: "secondary"
  }, rest), {}, {
    children: icon
  })) : null;
};

var CmtCardMedia = function CmtCardMedia(_ref2) {
  var cardTitle = _ref2.cardTitle,
      cardTitleProps = _ref2.cardTitleProps,
      fabButton = _ref2.fabButton,
      className = _ref2.className,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.media, children ? 'Cmt-media-children' : '', className, 'Cmt-card-media'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [cardTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({
        component: "h3",
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.mediaTitle),
        color: "primary"
      }, cardTitleProps), {}, {
        children: cardTitle
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RenderFabButton, {
        fabButton: fabButton
      }), children]
    })
  }, rest));
};

CmtCardMedia.propTypes = {
  cardTitle: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  cardTitleProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  fabButton: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)
};
CmtCardMedia.defaultProps = {
  cardTitleProps: {},
  fabButton: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CmtCardMedia);

/***/ }),

/***/ "./resources/js/src/@jumbo/components/PageComponents/PageBreadcrumbs/index.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/@jumbo/components/PageComponents/PageBreadcrumbs/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/src/@jumbo/utils/corematDemoHelper.js":
/*!************************************************************!*\
  !*** ./resources/js/src/@jumbo/utils/corematDemoHelper.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBackground": () => (/* binding */ getBackground),
/* harmony export */   "getBackgroundSourceCode": () => (/* binding */ getBackgroundSourceCode),
/* harmony export */   "getOverlay": () => (/* binding */ getOverlay),
/* harmony export */   "getOverlaySourceCode": () => (/* binding */ getOverlaySourceCode)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getBackground = function getBackground(showBackground, backgroundStyle, background) {
  if (showBackground) {
    if (backgroundStyle === 'color') {
      return {
        backgroundColor: background.color
      };
    } else if (backgroundStyle === 'gradient') {
      return {
        backgroundColor: background.gradientColors
      };
    } else if (backgroundStyle === 'image') {
      return {
        backgroundImage: background.image
      };
    }
  }

  return {};
};
var getOverlay = function getOverlay(showOverlay, overlayStyle, overlay) {
  if (showOverlay) {
    if (overlayStyle === 'color') {
      return {
        overlay: {
          colors: overlay.color,
          opacity: overlay.opacity
        }
      };
    } else if (overlayStyle === 'gradient') {
      return {
        overlay: {
          colors: overlay.gradientColors,
          opacity: overlay.opacity
        }
      };
    }
  }

  return {};
};
var getBackgroundSourceCode = function getBackgroundSourceCode(showBackground, backgroundStyle, background) {
  if (showBackground) {
    if (backgroundStyle === 'color') {
      return " backgroundColor={'".concat(background.color, "'}");
    } else if (backgroundStyle === 'gradient') {
      var _background$gradientC = _slicedToArray(background.gradientColors, 2),
          bgColor1 = _background$gradientC[0],
          bgColor2 = _background$gradientC[1];

      return " backgroundColor={['".concat(bgColor1, "','").concat(bgColor2, "']}");
    } else if (backgroundStyle === 'image') {
      return " backgroundImage={'".concat(background.image, "'}");
    }
  }

  return '';
};
var getOverlaySourceCode = function getOverlaySourceCode(showOverlay, overlayStyle, overlay) {
  if (showOverlay) {
    if (overlayStyle === 'color') {
      return " overlay={{ colors: '".concat(overlay.color, "', opacity: ").concat(overlay.opacity, " }}");
    } else if (overlayStyle === 'gradient') {
      var _overlay$gradientColo = _slicedToArray(overlay.gradientColors, 2),
          bgColor1 = _overlay$gradientColo[0],
          bgColor2 = _overlay$gradientColo[1];

      return " overlay={{ colors: ['".concat(bgColor1, "','").concat(bgColor2, "'], opacity: ").concat(overlay.opacity, " }}");
    }
  }

  return '';
};

/***/ }),

/***/ "./resources/js/src/routes/Components/CorematComponents/BasicCardDemo/BasicCardView.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/CorematComponents/BasicCardDemo/BasicCardView.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coremat_CmtCard_CmtCardHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@coremat/CmtCard/CmtCardHeader */ "./resources/js/src/@coremat/CmtCard/CmtCardHeader.js");
/* harmony import */ var _coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@coremat/CmtAvatar */ "./resources/js/src/@coremat/CmtAvatar/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _coremat_CmtCard_CmtCardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@coremat/CmtCard/CmtCardContent */ "./resources/js/src/@coremat/CmtCard/CmtCardContent.js");
/* harmony import */ var _coremat_CmtCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@coremat/CmtCard */ "./resources/js/src/@coremat/CmtCard/index.js");
/* harmony import */ var _jumbo_components_contextProvider_CorematContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@jumbo/components/contextProvider/CorematContext */ "./resources/js/src/@jumbo/components/contextProvider/CorematContext/index.js");
/* harmony import */ var _fake_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@fake-db */ "./resources/js/src/@fake-db/index.js");
/* harmony import */ var _jumbo_utils_corematDemoHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@jumbo/utils/corematDemoHelper */ "./resources/js/src/@jumbo/utils/corematDemoHelper.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _coremat_CmtCard_CmtCardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@coremat/CmtCard/CmtCardMedia */ "./resources/js/src/@coremat/CmtCard/CmtCardMedia.js");
/* harmony import */ var _coremat_CmtCard_CmtCardFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../@coremat/CmtCard/CmtCardFooter */ "./resources/js/src/@coremat/CmtCard/CmtCardFooter.js");
/* harmony import */ var _material_ui_icons_AllInclusive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/AllInclusive */ "./node_modules/@material-ui/icons/AllInclusive.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _coremat_CmtAvatarGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../@coremat/CmtAvatarGroup */ "./resources/js/src/@coremat/CmtAvatarGroup/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























var useStyles = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_13__["default"])(function (theme) {
  return {
    cardRoot: {
      color: theme.palette.text.secondary,
      '& .Cmt-title': {
        color: theme.palette.text.primary
      },
      '& .MuiCollapse-entered': {
        borderTop: "solid 1px ".concat(theme.palette.borderColor.dark)
      }
    },
    textWhite: {
      color: theme.palette.common.white,
      '& .Cmt-sub-title, & .Cmt-title, & .MuiIconButton-root': {
        color: theme.palette.common.white
      },
      '& .MuiCollapse-entered': {
        borderTop: 'solid 1px rgba(255, 255, 255, 0.12)'
      },
      '& .Cmtfooter-root': {
        borderTopColor: 'rgba(255, 255, 255, 0.12)'
      }
    }
  };
});
var actions = [{
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_14__["default"], {}),
  label: 'More Detail'
}, {
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__["default"], {}),
  label: 'Close'
}];

var BasicCardView = function BasicCardView() {
  var classes = useStyles();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jumbo_components_contextProvider_CorematContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      extraActions = _useContext.extraActions,
      avatarType = _useContext.avatarType,
      showAvatar = _useContext.showAvatar,
      showBackground = _useContext.showBackground,
      backgroundStyle = _useContext.backgroundStyle,
      showOverlay = _useContext.showOverlay,
      overlayStyle = _useContext.overlayStyle,
      overlayOpacity = _useContext.overlayOpacity,
      showCardMedia = _useContext.showCardMedia,
      showMainContent = _useContext.showMainContent,
      showFooter = _useContext.showFooter;

  var basicCard = _fake_db__WEBPACK_IMPORTED_MODULE_6__.coremat.basicCard,
      background = _fake_db__WEBPACK_IMPORTED_MODULE_6__.coremat.background,
      overlay = _fake_db__WEBPACK_IMPORTED_MODULE_6__.coremat.overlay,
      avatars = _fake_db__WEBPACK_IMPORTED_MODULE_6__.coremat.avatars;
  var header = basicCard.header,
      content = basicCard.content;
  overlay.opacity = overlayOpacity;
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"])();

  var textDyanimicClass = function textDyanimicClass() {
    if (showBackground && backgroundStyle !== 'color' || showOverlay && overlayOpacity > 0.5) {
      return classes.textWhite;
    }
  };

  var headerView = function headerView() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_coremat_CmtCard_CmtCardHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      avatar: showAvatar && avatarType === 'icon-avatar' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        color: "primary",
        size: "large",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_icons_AllInclusive__WEBPACK_IMPORTED_MODULE_17__["default"], {
          fontSize: "small"
        })
      }) : showAvatar && avatarType === 'avatar' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        src: header.avatar,
        alt: "Avatar",
        size: "large"
      }) : null,
      icon: showAvatar && avatarType === 'icon' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_icons_AllInclusive__WEBPACK_IMPORTED_MODULE_17__["default"], {}) : null,
      title: header.title,
      subTitle: header.subTitle,
      actions: actions,
      actionHandleIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_18__["default"], {}),
      children: extraActions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
        color: "primary",
        children: "View Demo"
      })
    });
  };

  var footerView = function footerView() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_coremat_CmtCard_CmtCardFooter__WEBPACK_IMPORTED_MODULE_9__["default"], {
      separator: {
        color: theme.palette.borderColor.dark,
        borderWidth: 1,
        borderStyle: 'solid'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_20__["default"], {
        display: "flex",
        alignItems: "center",
        width: 1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_20__["default"], {
          mr: 4,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
            variant: "contained",
            color: "primary",
            children: "Buy Now"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
            variant: "contained",
            color: "secondary",
            style: {
              marginLeft: 14
            },
            children: "View Demo"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_coremat_CmtAvatarGroup__WEBPACK_IMPORTED_MODULE_10__["default"], {
          items: avatars,
          srcKey: "profile_pic",
          max: 5,
          avatarSize: 34
        })]
      })
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_coremat_CmtCard__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread(_objectSpread({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_11__["default"])(classes.cardRoot, textDyanimicClass())
  }, (0,_jumbo_utils_corematDemoHelper__WEBPACK_IMPORTED_MODULE_7__.getBackground)(showBackground, backgroundStyle, background)), (0,_jumbo_utils_corematDemoHelper__WEBPACK_IMPORTED_MODULE_7__.getOverlay)(showOverlay, overlayStyle, overlay)), {}, {
    children: [headerView(), showCardMedia && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_coremat_CmtCard_CmtCardMedia__WEBPACK_IMPORTED_MODULE_8__["default"], {
      image: basicCard.media
    }), showMainContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_coremat_CmtCard_CmtCardContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_21__["default"], {
        variant: "body2",
        component: "p",
        children: content.description
      })
    }), showFooter && footerView()]
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasicCardView);

/***/ }),

/***/ "./resources/js/src/routes/Components/CorematComponents/BasicCardDemo/CardContextProvider.js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/CorematComponents/BasicCardDemo/CardContextProvider.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _jumbo_components_contextProvider_CorematContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@jumbo/components/contextProvider/CorematContext */ "./resources/js/src/@jumbo/components/contextProvider/CorematContext/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var CardContextProvider = function CardContextProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      showAvatar = _useState2[0],
      setShowAvatar = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('avatar'),
      _useState4 = _slicedToArray(_useState3, 2),
      avatarType = _useState4[0],
      setAvatarType = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showBackground = _useState6[0],
      setBackgroundVisibility = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('color'),
      _useState8 = _slicedToArray(_useState7, 2),
      backgroundStyle = _useState8[0],
      setBackgroundStyle = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      showOverlay = _useState10[0],
      setOverlayVisibility = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('color'),
      _useState12 = _slicedToArray(_useState11, 2),
      overlayStyle = _useState12[0],
      setOverlayStyle = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0.3),
      _useState14 = _slicedToArray(_useState13, 2),
      overlayOpacity = _useState14[0],
      setOverlayOpacity = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      extraActions = _useState16[0],
      setExtraActions = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      showCardMedia = _useState18[0],
      setCardMedia = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState20 = _slicedToArray(_useState19, 2),
      showMainContent = _useState20[0],
      setMainContent = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState22 = _slicedToArray(_useState21, 2),
      showFooter = _useState22[0],
      setFooterVisibility = _useState22[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_jumbo_components_contextProvider_CorematContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      showAvatar: showAvatar,
      setShowAvatar: setShowAvatar,
      avatarType: avatarType,
      setAvatarType: setAvatarType,
      showBackground: showBackground,
      setBackgroundVisibility: setBackgroundVisibility,
      backgroundStyle: backgroundStyle,
      setBackgroundStyle: setBackgroundStyle,
      showOverlay: showOverlay,
      setOverlayVisibility: setOverlayVisibility,
      overlayStyle: overlayStyle,
      setOverlayStyle: setOverlayStyle,
      overlayOpacity: overlayOpacity,
      setOverlayOpacity: setOverlayOpacity,
      extraActions: extraActions,
      setExtraActions: setExtraActions,
      showCardMedia: showCardMedia,
      setCardMedia: setCardMedia,
      showMainContent: showMainContent,
      setMainContent: setMainContent,
      showFooter: showFooter,
      setFooterVisibility: setFooterVisibility
    },
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardContextProvider);

/***/ }),

/***/ "./resources/js/src/routes/Components/CorematComponents/BasicCardDemo/DemoSettings.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/CorematComponents/BasicCardDemo/DemoSettings.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _jumbo_components_contextProvider_CorematContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@jumbo/components/contextProvider/CorematContext */ "./resources/js/src/@jumbo/components/contextProvider/CorematContext/index.js");
/* harmony import */ var _jumbo_components_Common_formElements_AppRadioButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@jumbo/components/Common/formElements/AppRadioButton */ "./resources/js/src/@jumbo/components/Common/formElements/AppRadioButton.js");
/* harmony import */ var _jumbo_components_CorematDemosComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@jumbo/components/CorematDemosComponents */ "./resources/js/src/@jumbo/components/CorematDemosComponents/index.js");
/* harmony import */ var _jumbo_components_Common_formElements_AppSwitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@jumbo/components/Common/formElements/AppSwitch */ "./resources/js/src/@jumbo/components/Common/formElements/AppSwitch/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var DemoSettings = function DemoSettings() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jumbo_components_contextProvider_CorematContext__WEBPACK_IMPORTED_MODULE_1__["default"]),
      extraActions = _useContext.extraActions,
      setExtraActions = _useContext.setExtraActions,
      avatarType = _useContext.avatarType,
      setAvatarType = _useContext.setAvatarType,
      showAvatar = _useContext.showAvatar,
      setShowAvatar = _useContext.setShowAvatar,
      showCardMedia = _useContext.showCardMedia,
      setCardMedia = _useContext.setCardMedia,
      showMainContent = _useContext.showMainContent,
      setMainContent = _useContext.setMainContent,
      showFooter = _useContext.showFooter,
      setFooterVisibility = _useContext.setFooterVisibility;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_jumbo_components_CorematDemosComponents__WEBPACK_IMPORTED_MODULE_3__.SettingsComponent, {
    title: "Cmt Basic Card",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_jumbo_components_CorematDemosComponents__WEBPACK_IMPORTED_MODULE_3__.CollapsibleSection, {
      heading: "Header",
      open: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_CorematDemosComponents__WEBPACK_IMPORTED_MODULE_3__.SectionLegend, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_Common_formElements_AppSwitch__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: "Show Avatar or Icon",
          checked: showAvatar,
          onChange: function onChange(event) {
            return setShowAvatar(event.target.checked);
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_jumbo_components_CorematDemosComponents__WEBPACK_IMPORTED_MODULE_3__.SectionLegend, {
        title: "Avatar Style",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_Common_formElements_AppRadioButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          name: "avatar-type",
          label: "Avatar",
          checked: avatarType === 'avatar',
          value: "avatar",
          onChange: function onChange(event) {
            return setAvatarType(event.target.value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_Common_formElements_AppRadioButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          name: "avatar-type",
          label: "Icon",
          checked: avatarType === 'icon',
          value: "icon",
          onChange: function onChange(event) {
            return setAvatarType(event.target.value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_Common_formElements_AppRadioButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          name: "avatar-type",
          label: "Icon Avatar",
          checked: avatarType === 'icon-avatar',
          value: "icon-avatar",
          onChange: function onChange(event) {
            return setAvatarType(event.target.value);
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_CorematDemosComponents__WEBPACK_IMPORTED_MODULE_3__.SectionLegend, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_Common_formElements_AppSwitch__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: "Show Extra Actions",
          checked: extraActions,
          onChange: function onChange(event) {
            return setExtraActions(event.target.checked);
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_CorematDemosComponents__WEBPACK_IMPORTED_MODULE_3__.CollapsibleSection, {
      heading: "Content",
      open: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_jumbo_components_CorematDemosComponents__WEBPACK_IMPORTED_MODULE_3__.SectionLegend, {
        title: "Data",
        displayAsColumn: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_Common_formElements_AppSwitch__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: "Show Card Media",
          checked: showCardMedia,
          onChange: function onChange(event) {
            return setCardMedia(event.target.checked);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_Common_formElements_AppSwitch__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: "Show Main Content",
          checked: showMainContent,
          onChange: function onChange(event) {
            return setMainContent(event.target.checked);
          }
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_CorematDemosComponents__WEBPACK_IMPORTED_MODULE_3__.CollapsibleSection, {
      heading: "Footer",
      open: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_Common_formElements_AppSwitch__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: "Show Footer",
        checked: showFooter,
        onChange: function onChange(event) {
          return setFooterVisibility(event.target.checked);
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_CorematDemosComponents__WEBPACK_IMPORTED_MODULE_3__.BackgroundSettingSection, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_CorematDemosComponents__WEBPACK_IMPORTED_MODULE_3__.OverlaySettingSection, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DemoSettings);

/***/ }),

/***/ "./resources/js/src/routes/Components/CorematComponents/BasicCardDemo/DemoSourceCode.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/CorematComponents/BasicCardDemo/DemoSourceCode.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _jumbo_components_contextProvider_CorematContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@jumbo/components/contextProvider/CorematContext */ "./resources/js/src/@jumbo/components/contextProvider/CorematContext/index.js");
/* harmony import */ var _fake_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@fake-db */ "./resources/js/src/@fake-db/index.js");
/* harmony import */ var _jumbo_utils_corematDemoHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@jumbo/utils/corematDemoHelper */ "./resources/js/src/@jumbo/utils/corematDemoHelper.js");
/* harmony import */ var _jumbo_components_CorematDemosComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@jumbo/components/CorematDemosComponents */ "./resources/js/src/@jumbo/components/CorematDemosComponents/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var DemoSourceCode = function DemoSourceCode() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jumbo_components_contextProvider_CorematContext__WEBPACK_IMPORTED_MODULE_1__["default"]),
      extraActions = _useContext.extraActions,
      avatarType = _useContext.avatarType,
      showAvatar = _useContext.showAvatar,
      showBackground = _useContext.showBackground,
      backgroundStyle = _useContext.backgroundStyle,
      showOverlay = _useContext.showOverlay,
      overlayStyle = _useContext.overlayStyle,
      showCardMedia = _useContext.showCardMedia,
      showMainContent = _useContext.showMainContent,
      showFooter = _useContext.showFooter;

  var basicCard = _fake_db__WEBPACK_IMPORTED_MODULE_2__.coremat.basicCard,
      background = _fake_db__WEBPACK_IMPORTED_MODULE_2__.coremat.background,
      overlay = _fake_db__WEBPACK_IMPORTED_MODULE_2__.coremat.overlay;
  var header = basicCard.header,
      media = basicCard.media,
      content = basicCard.content;

  var getAvatarType = function getAvatarType() {
    if (showAvatar) {
      if (avatarType === 'icon') {
        return "icon={<AllInclusiveIcon fontSize=\"".concat('default', "\" />}\n    ");
      } else if (avatarType === 'icon-avatar') {
        return "avatar={\n      <CmtAvatar color=\"primary\" size=\"large\">\n        <AllInclusiveIcon fontSize=\"".concat('small', "\" />\n      </CmtAvatar>\n    }\n    ");
      } else if (avatarType === 'avatar') {
        return "avatar={<CmtAvatar src={'".concat(header.avatar, "'} size=\"large\" alt=\"Avatar\" />}\n    ");
      }
    }

    return '';
  };

  var headerSourceCode = function headerSourceCode() {
    return " <CmtCardHeader\n    " + getAvatarType() + "title={'".concat(header.title, "'}\n    subTitle={'").concat(header.subTitle, "'}\n    actions={actions}\n    actionHandleIcon={<MoreVertIcon fontSize=\"", 'default', "\" />}>").concat(extraActions ? "\n    <Button color=\"primary\">View Demo</Button>\n  " : '', "</CmtCardHeader>");
  };

  var mediaSourceCode = function mediaSourceCode() {
    if (showCardMedia) {
      return "\n  <CmtCardMedia image={'".concat(media, "'} />");
    }

    return '';
  };

  var contentSourceCode = function contentSourceCode() {
    if (showMainContent) {
      return "\n  <CmtCardContent>\n    <Typography variant=\"body2\" color=\"textSecondary\" component=\"p\">\n      ".concat(content.description, "\n    </Typography>\n  </CmtCardContent>");
    }

    return '';
  };

  var getSeparatorSourceCode = function getSeparatorSourceCode() {
    return " separator={{ color: '#bdbdbd', borderWidth: 1, borderStyle: 'solid' }}";
  };

  var footerSourceCode = function footerSourceCode() {
    if (showFooter) {
      return "\n  <CmtCardFooter" + getSeparatorSourceCode() + ">\n    <Box display=\"flex\" alignItems=\"center\" width={1}>\n      <Box mr={4}>\n        <Button variant=\"contained\" color=\"primary\">\n          Buy Now\n        </Button>\n        <Button variant=\"contained\" color=\"secondary\" style={{ marginLeft: 14 }}>\n          View Demo\n        </Button>\n      </Box>\n\n      <CmtAvatarGroup items={avatars} srcKey=\"profile_pic\" max={5} avatarSize={34} />\n    </Box>\n  </CmtCardFooter>";
    }

    return '';
  };

  var getSourceCode = function getSourceCode() {
    return "\n<CmtCard" + (0,_jumbo_utils_corematDemoHelper__WEBPACK_IMPORTED_MODULE_3__.getBackgroundSourceCode)(showBackground, backgroundStyle, background) + (0,_jumbo_utils_corematDemoHelper__WEBPACK_IMPORTED_MODULE_3__.getOverlaySourceCode)(showOverlay, overlayStyle, overlay) + ">\n " + headerSourceCode() + mediaSourceCode() + contentSourceCode() + footerSourceCode() + "  \n</CmtCard>\n";
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_CorematDemosComponents__WEBPACK_IMPORTED_MODULE_4__.SourceCodeComponent, {
    sourceCode: getSourceCode()
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DemoSourceCode);

/***/ }),

/***/ "./resources/js/src/routes/Components/CorematComponents/BasicCardDemo/index.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/routes/Components/CorematComponents/BasicCardDemo/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _jumbo_components_PageComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@jumbo/components/PageComponents */ "./resources/js/src/@jumbo/components/PageComponents/index.js");
/* harmony import */ var _DemoSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DemoSettings */ "./resources/js/src/routes/Components/CorematComponents/BasicCardDemo/DemoSettings.js");
/* harmony import */ var _BasicCardView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BasicCardView */ "./resources/js/src/routes/Components/CorematComponents/BasicCardDemo/BasicCardView.js");
/* harmony import */ var _CardContextProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardContextProvider */ "./resources/js/src/routes/Components/CorematComponents/BasicCardDemo/CardContextProvider.js");
/* harmony import */ var _DemoSourceCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DemoSourceCode */ "./resources/js/src/routes/Components/CorematComponents/BasicCardDemo/DemoSourceCode.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var CmtBasicCardDemo = function CmtBasicCardDemo() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CardContextProvider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_jumbo_components_PageComponents__WEBPACK_IMPORTED_MODULE_1__.CorematComponentDemo, {
      SourceCodeComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_DemoSourceCode__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
      SettingsComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_DemoSettings__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_BasicCardView__WEBPACK_IMPORTED_MODULE_3__["default"], {})
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CmtBasicCardDemo);

/***/ })

}]);