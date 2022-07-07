(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_routes_Apps_KanbanBoard_index_js"],{

/***/ "./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js ***!
  \*******************************************************************/
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
    // ⚠️ object-fit is not supported by IE 11.
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

/***/ "./node_modules/@material-ui/core/esm/styles/createStyles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createStyles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/createStyles/createStyles.js");
 // let warnOnce = false;
// To remove in v5

function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["default"])(styles);
}

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/Add.js":
/*!****************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/Add.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add'));

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/AttachFile.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/AttachFile.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
}), 'AttachFile'));

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/Attachment.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/Attachment.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"
}), 'Attachment'));

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/CalendarToday.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/CalendarToday.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"
}), 'CalendarToday'));

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/Cancel.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/Cancel.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/ChatBubbleOutline.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/ChatBubbleOutline.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
}), 'ChatBubbleOutline'));

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/Check.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/Check.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check'));

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/Close.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/Close.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close'));

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/DoneOutline.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/DoneOutline.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M19.77 5.03l1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 5.03m0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43 19.77 2.2z"
}), 'DoneOutline'));

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/List.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/List.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
}), 'List'));

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/MoreVert.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/MoreVert.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreVert'));

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/OpenInNew.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/OpenInNew.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
}), 'OpenInNew'));

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/VideoLabel.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/VideoLabel.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"
}), 'VideoLabel'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/AvatarGroup/AvatarGroup.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/AvatarGroup/AvatarGroup.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ Calendar),
/* harmony export */   "a": () => (/* binding */ Calendar$1),
/* harmony export */   "b": () => (/* binding */ isYearAndMonthViews),
/* harmony export */   "g": () => (/* binding */ getFormatByViews),
/* harmony export */   "i": () => (/* binding */ isYearOnlyView),
/* harmony export */   "s": () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Day_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Day.js */ "./node_modules/@material-ui/pickers/esm/Day.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");




















var findClosestEnabledDate = function findClosestEnabledDate(_ref) {
  var date = _ref.date,
      utils = _ref.utils,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disableFuture = _ref.disableFuture,
      disablePast = _ref.disablePast,
      shouldDisableDate = _ref.shouldDisableDate;
  var today = utils.startOfDay(utils.date());

  if (disablePast && utils.isBefore(minDate, today)) {
    minDate = today;
  }

  if (disableFuture && utils.isAfter(maxDate, today)) {
    maxDate = today;
  }

  var forward = date;
  var backward = date;

  if (utils.isBefore(date, minDate)) {
    forward = utils.date(minDate);
    backward = null;
  }

  if (utils.isAfter(date, maxDate)) {
    if (backward) {
      backward = utils.date(maxDate);
    }

    forward = null;
  }

  while (forward || backward) {
    if (forward && utils.isAfter(forward, maxDate)) {
      forward = null;
    }

    if (backward && utils.isBefore(backward, minDate)) {
      backward = null;
    }

    if (forward) {
      if (!shouldDisableDate(forward)) {
        return forward;
      }

      forward = utils.addDays(forward, 1);
    }

    if (backward) {
      if (!shouldDisableDate(backward)) {
        return backward;
      }

      backward = utils.addDays(backward, -1);
    }
  } // fallback to today if no enabled days


  return utils.date();
};
var isYearOnlyView = function isYearOnlyView(views) {
  return views.length === 1 && views[0] === 'year';
};
var isYearAndMonthViews = function isYearAndMonthViews(views) {
  return views.length === 2 && (0,_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__.a)(views, 'month') && (0,_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__.a)(views, 'year');
};
var getFormatByViews = function getFormatByViews(views, utils) {
  if (isYearOnlyView(views)) {
    return utils.yearFormat;
  }

  if (isYearAndMonthViews(views)) {
    return utils.yearMonthFormat;
  }

  return utils.dateFormat;
};

var DayWrapper = function DayWrapper(_ref) {
  var children = _ref.children,
      value = _ref.value,
      disabled = _ref.disabled,
      onSelect = _ref.onSelect,
      dayInCurrentMonth = _ref.dayInCurrentMonth,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["children", "value", "disabled", "onSelect", "dayInCurrentMonth"]);

  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return onSelect(value);
  }, [onSelect, value]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    role: "presentation",
    onClick: dayInCurrentMonth && !disabled ? handleClick : undefined,
    onKeyPress: dayInCurrentMonth && !disabled ? handleClick : undefined
  }, other), children);
};

var animationDuration = 350;
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["default"])(function (theme) {
  var slideTransition = theme.transitions.create('transform', {
    duration: animationDuration,
    easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
  });
  return {
    transitionContainer: {
      display: 'block',
      position: 'relative',
      '& > *': {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0
      }
    },
    'slideEnter-left': {
      willChange: 'transform',
      transform: 'translate(100%)'
    },
    'slideEnter-right': {
      willChange: 'transform',
      transform: 'translate(-100%)'
    },
    slideEnterActive: {
      transform: 'translate(0%)',
      transition: slideTransition
    },
    slideExit: {
      transform: 'translate(0%)'
    },
    'slideExitActiveLeft-left': {
      willChange: 'transform',
      transform: 'translate(-200%)',
      transition: slideTransition
    },
    'slideExitActiveLeft-right': {
      willChange: 'transform',
      transform: 'translate(200%)',
      transition: slideTransition
    }
  };
}, {
  name: 'MuiPickersSlideTransition'
});

var SlideTransition = function SlideTransition(_ref) {
  var children = _ref.children,
      transKey = _ref.transKey,
      slideDirection = _ref.slideDirection,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className;
  var classes = useStyles();
  var transitionClasses = {
    exit: classes.slideExit,
    enterActive: classes.slideEnterActive,
    // @ts-ignore
    enter: classes['slideEnter-' + slideDirection],
    // @ts-ignore
    exitActive: classes['slideExitActiveLeft-' + slideDirection]
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_transition_group__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.transitionContainer, className),
    childFactory: function childFactory(element) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
        classNames: transitionClasses
      });
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_transition_group__WEBPACK_IMPORTED_MODULE_12__["default"], {
    mountOnEnter: true,
    unmountOnExit: true,
    key: transKey + slideDirection,
    timeout: animationDuration,
    classNames: transitionClasses,
    children: children
  }));
};

var ArrowLeftIcon = function ArrowLeftIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_13__["default"], props, react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }));
};

var ArrowRightIcon = function ArrowRightIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_13__["default"], props, react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }));
};

var useStyles$1 = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["default"])(function (theme) {
  return {
    switchHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(1)
    },
    transitionContainer: {
      width: '100%',
      overflow: 'hidden',
      height: 23
    },
    iconButton: {
      zIndex: 1,
      backgroundColor: theme.palette.background.paper
    },
    daysHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: 16
    },
    dayLabel: {
      width: 36,
      margin: '0 2px',
      textAlign: 'center',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersCalendarHeader'
});
var CalendarHeader = function CalendarHeader(_ref) {
  var currentMonth = _ref.currentMonth,
      onMonthChange = _ref.onMonthChange,
      leftArrowIcon = _ref.leftArrowIcon,
      rightArrowIcon = _ref.rightArrowIcon,
      leftArrowButtonProps = _ref.leftArrowButtonProps,
      rightArrowButtonProps = _ref.rightArrowButtonProps,
      disablePrevMonth = _ref.disablePrevMonth,
      disableNextMonth = _ref.disableNextMonth,
      slideDirection = _ref.slideDirection;
  var utils = (0,_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_14__.u)();
  var classes = useStyles$1();
  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__["default"])();
  var rtl = theme.direction === 'rtl';

  var selectNextMonth = function selectNextMonth() {
    return onMonthChange(utils.getNextMonth(currentMonth), 'left');
  };

  var selectPreviousMonth = function selectPreviousMonth() {
    return onMonthChange(utils.getPreviousMonth(currentMonth), 'right');
  };

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes.switchHeader
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, leftArrowButtonProps, {
    disabled: disablePrevMonth,
    onClick: selectPreviousMonth,
    className: classes.iconButton
  }), rtl ? rightArrowIcon : leftArrowIcon), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SlideTransition, {
    slideDirection: slideDirection,
    transKey: currentMonth.toString(),
    className: classes.transitionContainer
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "center",
    variant: "body1"
  }, utils.getCalendarHeaderText(currentMonth))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, rightArrowButtonProps, {
    disabled: disableNextMonth,
    onClick: selectNextMonth,
    className: classes.iconButton
  }), rtl ? leftArrowIcon : rightArrowIcon)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes.daysHeader
  }, utils.getWeekdays().map(function (day, index) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
      key: index // eslint-disable-line react/no-array-index-key
      ,
      variant: "caption",
      className: classes.dayLabel
    }, day);
  })));
};
CalendarHeader.displayName = 'CalendarHeader';
 true ? CalendarHeader.propTypes = {
  leftArrowIcon: prop_types__WEBPACK_IMPORTED_MODULE_18__.node,
  rightArrowIcon: prop_types__WEBPACK_IMPORTED_MODULE_18__.node,
  disablePrevMonth: prop_types__WEBPACK_IMPORTED_MODULE_18__.bool,
  disableNextMonth: prop_types__WEBPACK_IMPORTED_MODULE_18__.bool
} : 0;
CalendarHeader.defaultProps = {
  leftArrowIcon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ArrowLeftIcon, null),
  rightArrowIcon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ArrowRightIcon, null),
  disablePrevMonth: false,
  disableNextMonth: false
};

var withUtils = function withUtils() {
  return function (Component) {
    var WithUtils = function WithUtils(props) {
      var utils = (0,_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_14__.u)();
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
        utils: utils
      }, props));
    };

    WithUtils.displayName = "WithUtils(".concat(Component.displayName || Component.name, ")");
    return WithUtils;
  };
};

var KeyDownListener = function KeyDownListener(_ref) {
  var onKeyDown = _ref.onKeyDown;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.addEventListener('keydown', onKeyDown);
    return function () {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
  return null;
};

var Calendar =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Calendar, _React$Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      slideDirection: 'left',
      currentMonth: _this.props.utils.startOfMonth(_this.props.date),
      loadingQueue: 0
    };

    _this.pushToLoadingQueue = function () {
      var loadingQueue = _this.state.loadingQueue + 1;

      _this.setState({
        loadingQueue: loadingQueue
      });
    };

    _this.popFromLoadingQueue = function () {
      var loadingQueue = _this.state.loadingQueue;
      loadingQueue = loadingQueue <= 0 ? 0 : loadingQueue - 1;

      _this.setState({
        loadingQueue: loadingQueue
      });
    };

    _this.handleChangeMonth = function (newMonth, slideDirection) {
      _this.setState({
        currentMonth: newMonth,
        slideDirection: slideDirection
      });

      if (_this.props.onMonthChange) {
        var returnVal = _this.props.onMonthChange(newMonth);

        if (returnVal) {
          _this.pushToLoadingQueue();

          returnVal.then(function () {
            _this.popFromLoadingQueue();
          });
        }
      }
    };

    _this.validateMinMaxDate = function (day) {
      var _this$props = _this.props,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate,
          utils = _this$props.utils,
          disableFuture = _this$props.disableFuture,
          disablePast = _this$props.disablePast;
      var now = utils.date();
      return Boolean(disableFuture && utils.isAfterDay(day, now) || disablePast && utils.isBeforeDay(day, now) || minDate && utils.isBeforeDay(day, utils.date(minDate)) || maxDate && utils.isAfterDay(day, utils.date(maxDate)));
    };

    _this.shouldDisablePrevMonth = function () {
      var _this$props2 = _this.props,
          utils = _this$props2.utils,
          disablePast = _this$props2.disablePast,
          minDate = _this$props2.minDate;
      var now = utils.date();
      var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utils.date(minDate)) ? now : utils.date(minDate));
      return !utils.isBefore(firstEnabledMonth, _this.state.currentMonth);
    };

    _this.shouldDisableNextMonth = function () {
      var _this$props3 = _this.props,
          utils = _this$props3.utils,
          disableFuture = _this$props3.disableFuture,
          maxDate = _this$props3.maxDate;
      var now = utils.date();
      var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utils.date(maxDate)) ? now : utils.date(maxDate));
      return !utils.isAfter(lastEnabledMonth, _this.state.currentMonth);
    };

    _this.shouldDisableDate = function (day) {
      var shouldDisableDate = _this.props.shouldDisableDate;
      return _this.validateMinMaxDate(day) || Boolean(shouldDisableDate && shouldDisableDate(day));
    };

    _this.handleDaySelect = function (day) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var _this$props4 = _this.props,
          date = _this$props4.date,
          utils = _this$props4.utils;

      _this.props.onChange(utils.mergeDateAndTime(day, date), isFinish);
    };

    _this.moveToDay = function (day) {
      var utils = _this.props.utils;

      if (day && !_this.shouldDisableDate(day)) {
        if (utils.getMonth(day) !== utils.getMonth(_this.state.currentMonth)) {
          _this.handleChangeMonth(utils.startOfMonth(day), 'left');
        }

        _this.handleDaySelect(day, false);
      }
    };

    _this.handleKeyDown = function (event) {
      var _this$props5 = _this.props,
          theme = _this$props5.theme,
          date = _this$props5.date,
          utils = _this$props5.utils;
      (0,_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__.r)(event, {
        ArrowUp: function ArrowUp() {
          return _this.moveToDay(utils.addDays(date, -7));
        },
        ArrowDown: function ArrowDown() {
          return _this.moveToDay(utils.addDays(date, 7));
        },
        ArrowLeft: function ArrowLeft() {
          return _this.moveToDay(utils.addDays(date, theme.direction === 'ltr' ? -1 : 1));
        },
        ArrowRight: function ArrowRight() {
          return _this.moveToDay(utils.addDays(date, theme.direction === 'ltr' ? 1 : -1));
        }
      });
    };

    _this.renderWeeks = function () {
      var _this$props6 = _this.props,
          utils = _this$props6.utils,
          classes = _this$props6.classes;
      var weeks = utils.getWeekArray(_this.state.currentMonth);
      return weeks.map(function (week) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          key: "week-".concat(week[0].toString()),
          className: classes.week
        }, _this.renderDays(week));
      });
    };

    _this.renderDays = function (week) {
      var _this$props7 = _this.props,
          date = _this$props7.date,
          renderDay = _this$props7.renderDay,
          utils = _this$props7.utils;
      var now = utils.date();
      var selectedDate = utils.startOfDay(date);
      var currentMonthNumber = utils.getMonth(_this.state.currentMonth);
      return week.map(function (day) {
        var disabled = _this.shouldDisableDate(day);

        var isDayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;
        var dayComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Day_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
          disabled: disabled,
          current: utils.isSameDay(day, now),
          hidden: !isDayInCurrentMonth,
          selected: utils.isSameDay(selectedDate, day)
        }, utils.getDayText(day));

        if (renderDay) {
          dayComponent = renderDay(day, selectedDate, isDayInCurrentMonth, dayComponent);
        }

        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DayWrapper, {
          value: day,
          key: day.toString(),
          disabled: disabled,
          dayInCurrentMonth: isDayInCurrentMonth,
          onSelect: _this.handleDaySelect
        }, dayComponent);
      });
    };

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props8 = this.props,
          date = _this$props8.date,
          minDate = _this$props8.minDate,
          maxDate = _this$props8.maxDate,
          utils = _this$props8.utils,
          disablePast = _this$props8.disablePast,
          disableFuture = _this$props8.disableFuture;

      if (this.shouldDisableDate(date)) {
        var closestEnabledDate = findClosestEnabledDate({
          date: date,
          utils: utils,
          minDate: utils.date(minDate),
          maxDate: utils.date(maxDate),
          disablePast: Boolean(disablePast),
          disableFuture: Boolean(disableFuture),
          shouldDisableDate: this.shouldDisableDate
        });
        this.handleDaySelect(closestEnabledDate, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          currentMonth = _this$state.currentMonth,
          slideDirection = _this$state.slideDirection;
      var _this$props9 = this.props,
          classes = _this$props9.classes,
          allowKeyboardControl = _this$props9.allowKeyboardControl,
          leftArrowButtonProps = _this$props9.leftArrowButtonProps,
          leftArrowIcon = _this$props9.leftArrowIcon,
          rightArrowButtonProps = _this$props9.rightArrowButtonProps,
          rightArrowIcon = _this$props9.rightArrowIcon,
          loadingIndicator = _this$props9.loadingIndicator;
      var loadingElement = loadingIndicator ? loadingIndicator : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_20__["default"], null);
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, allowKeyboardControl && this.context !== 'static' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(KeyDownListener, {
        onKeyDown: this.handleKeyDown
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CalendarHeader, {
        currentMonth: currentMonth,
        slideDirection: slideDirection,
        onMonthChange: this.handleChangeMonth,
        leftArrowIcon: leftArrowIcon,
        leftArrowButtonProps: leftArrowButtonProps,
        rightArrowIcon: rightArrowIcon,
        rightArrowButtonProps: rightArrowButtonProps,
        disablePrevMonth: this.shouldDisablePrevMonth(),
        disableNextMonth: this.shouldDisableNextMonth()
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SlideTransition, {
        slideDirection: slideDirection,
        transKey: currentMonth.toString(),
        className: classes.transitionContainer
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.state.loadingQueue > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: classes.progressContainer
      }, loadingElement) || (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, this.renderWeeks()))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      var utils = nextProps.utils,
          nextDate = nextProps.date;

      if (!utils.isEqual(nextDate, state.lastDate)) {
        var nextMonth = utils.getMonth(nextDate);
        var lastDate = state.lastDate || nextDate;
        var lastMonth = utils.getMonth(lastDate);
        return {
          lastDate: nextDate,
          currentMonth: nextProps.utils.startOfMonth(nextDate),
          // prettier-ignore
          slideDirection: nextMonth === lastMonth ? state.slideDirection : utils.isAfterDay(nextDate, lastDate) ? 'left' : 'right'
        };
      }

      return null;
    }
  }]);

  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
Calendar.contextType = _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__.V;
 true ? Calendar.propTypes = {
  renderDay: prop_types__WEBPACK_IMPORTED_MODULE_18__.func,
  shouldDisableDate: prop_types__WEBPACK_IMPORTED_MODULE_18__.func,
  allowKeyboardControl: prop_types__WEBPACK_IMPORTED_MODULE_18__.bool
} : 0;
Calendar.defaultProps = {
  minDate: new Date('1900-01-01'),
  maxDate: new Date('2100-01-01'),
  disablePast: false,
  disableFuture: false,
  allowKeyboardControl: true
};
var styles = function styles(theme) {
  return {
    transitionContainer: {
      minHeight: 36 * 6,
      marginTop: theme.spacing(1.5)
    },
    progressContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    week: {
      display: 'flex',
      justifyContent: 'center'
    }
  };
};
var Calendar$1 = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_21__["default"])(styles, {
  name: 'MuiPickersCalendar',
  withTheme: true
})(withUtils()(Calendar));


//# sourceMappingURL=Calendar-11ae61f6.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/Clock-48fde975.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/Clock-48fde975.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ Clock),
/* harmony export */   "a": () => (/* binding */ Clock$1),
/* harmony export */   "b": () => (/* binding */ ClockType$1),
/* harmony export */   "c": () => (/* binding */ convertToMeridiem),
/* harmony export */   "g": () => (/* binding */ getMeridiem),
/* harmony export */   "s": () => (/* binding */ styles$1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/createStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");










var ClockType;

(function (ClockType) {
  ClockType["HOURS"] = "hours";
  ClockType["MINUTES"] = "minutes";
  ClockType["SECONDS"] = "seconds";
})(ClockType || (ClockType = {}));

var ClockType$1 = ClockType;

var ClockPointer =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ClockPointer, _React$Component);

  function ClockPointer() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ClockPointer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ClockPointer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      toAnimateTransform: false,
      previousType: undefined
    };

    _this.getAngleStyle = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          isInner = _this$props.isInner,
          type = _this$props.type;
      var max = type === ClockType$1.HOURS ? 12 : 60;
      var angle = 360 / max * value;

      if (type === ClockType$1.HOURS && value > 12) {
        angle -= 360; // round up angle to max 360 degrees
      }

      return {
        height: isInner ? '26%' : '40%',
        transform: "rotateZ(".concat(angle, "deg)")
      };
    };

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ClockPointer, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          hasSelected = _this$props2.hasSelected;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: this.getAngleStyle(),
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.pointer, this.state.toAnimateTransform && classes.animateTransform)
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.thumb, hasSelected && classes.noPoint)
      }));
    }
  }]);

  return ClockPointer;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

ClockPointer.getDerivedStateFromProps = function (nextProps, state) {
  if (nextProps.type !== state.previousType) {
    return {
      toAnimateTransform: true,
      previousType: nextProps.type
    };
  }

  return {
    toAnimateTransform: false,
    previousType: nextProps.type
  };
};

var styles = function styles(theme) {
  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["default"])({
    pointer: {
      width: 2,
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      left: 'calc(50% - 1px)',
      bottom: '50%',
      transformOrigin: 'center bottom 0px'
    },
    animateTransform: {
      transition: theme.transitions.create(['transform', 'height'])
    },
    thumb: {
      width: 4,
      height: 4,
      backgroundColor: theme.palette.primary.contrastText,
      borderRadius: '100%',
      position: 'absolute',
      top: -21,
      left: -15,
      border: "14px solid ".concat(theme.palette.primary.main),
      boxSizing: 'content-box'
    },
    noPoint: {
      backgroundColor: theme.palette.primary.main
    }
  });
};
var ClockPointer$1 = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiPickersClockPointer'
})(ClockPointer);

var center = {
  x: 260 / 2,
  y: 260 / 2
};
var basePoint = {
  x: center.x,
  y: 0
};
var cx = basePoint.x - center.x;
var cy = basePoint.y - center.y;

var rad2deg = function rad2deg(rad) {
  return rad * 57.29577951308232;
};

var getAngleValue = function getAngleValue(step, offsetX, offsetY) {
  var x = offsetX - center.x;
  var y = offsetY - center.y;
  var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
  var deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;
  var value = Math.floor(deg / step) || 0;
  var delta = Math.pow(x, 2) + Math.pow(y, 2);
  var distance = Math.sqrt(delta);
  return {
    value: value,
    distance: distance
  };
};

var getHours = function getHours(offsetX, offsetY, ampm) {
  var _getAngleValue = getAngleValue(30, offsetX, offsetY),
      value = _getAngleValue.value,
      distance = _getAngleValue.distance;

  value = value || 12;

  if (!ampm) {
    if (distance < 90) {
      value += 12;
      value %= 24;
    }
  } else {
    value %= 12;
  }

  return value;
};
var getMinutes = function getMinutes(offsetX, offsetY) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var angleStep = step * 6;

  var _getAngleValue2 = getAngleValue(angleStep, offsetX, offsetY),
      value = _getAngleValue2.value;

  value = value * step % 60;
  return value;
};
var getMeridiem = function getMeridiem(date, utils) {
  return utils.getHours(date) >= 12 ? 'pm' : 'am';
};
var convertToMeridiem = function convertToMeridiem(time, meridiem, ampm, utils) {
  if (ampm) {
    var currentMeridiem = utils.getHours(time) >= 12 ? 'pm' : 'am';

    if (currentMeridiem !== meridiem) {
      var hours = meridiem === 'am' ? utils.getHours(time) - 12 : utils.getHours(time) + 12;
      return utils.setHours(time, hours);
    }
  }

  return time;
};

var Clock =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Clock, _React$Component);

  function Clock() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Clock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Clock)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.isMoving = false;

    _this.handleTouchMove = function (e) {
      _this.isMoving = true;

      _this.setTime(e);
    };

    _this.handleTouchEnd = function (e) {
      if (_this.isMoving) {
        _this.setTime(e, true);

        _this.isMoving = false;
      }
    };

    _this.handleMove = function (e) {
      e.preventDefault();
      e.stopPropagation(); // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari

      var isButtonPressed = typeof e.buttons === 'undefined' ? e.nativeEvent.which === 1 : e.buttons === 1;

      if (isButtonPressed) {
        _this.setTime(e.nativeEvent, false);
      }
    };

    _this.handleMouseUp = function (e) {
      if (_this.isMoving) {
        _this.isMoving = false;
      }

      _this.setTime(e.nativeEvent, true);
    };

    _this.hasSelected = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          value = _this$props.value;

      if (type === ClockType$1.HOURS) {
        return true;
      }

      return value % 5 === 0;
    };

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Clock, [{
    key: "setTime",
    value: function setTime(e) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var offsetX = e.offsetX,
          offsetY = e.offsetY;

      if (typeof offsetX === 'undefined') {
        var rect = e.target.getBoundingClientRect();
        offsetX = e.changedTouches[0].clientX - rect.left;
        offsetY = e.changedTouches[0].clientY - rect.top;
      }

      var value = this.props.type === ClockType$1.SECONDS || this.props.type === ClockType$1.MINUTES ? getMinutes(offsetX, offsetY, this.props.minutesStep) : getHours(offsetX, offsetY, Boolean(this.props.ampm));
      this.props.onChange(value, isFinish);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          value = _this$props2.value,
          children = _this$props2.children,
          type = _this$props2.type,
          ampm = _this$props2.ampm;
      var isPointerInner = !ampm && type === ClockType$1.HOURS && (value < 1 || value > 12);
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: classes.container
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: classes.clock
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        role: "menu",
        tabIndex: -1,
        className: classes.squareMask,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        onMouseUp: this.handleMouseUp,
        onMouseMove: this.handleMove
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: classes.pin
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ClockPointer$1, {
        type: type,
        value: value,
        isInner: isPointerInner,
        hasSelected: this.hasSelected()
      }), children));
    }
  }]);

  return Clock;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
 true ? Clock.propTypes = {
  type: (0,prop_types__WEBPACK_IMPORTED_MODULE_9__.oneOf)(Object.keys(ClockType$1).map(function (key) {
    return ClockType$1[key];
  })).isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_9__.number.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_9__.func.isRequired,
  children: (0,prop_types__WEBPACK_IMPORTED_MODULE_9__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_9__.node).isRequired,
  ampm: prop_types__WEBPACK_IMPORTED_MODULE_9__.bool,
  minutesStep: prop_types__WEBPACK_IMPORTED_MODULE_9__.number,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_9__.any
} : 0;
Clock.defaultProps = {
  ampm: false,
  minutesStep: 1
};
var styles$1 = function styles(theme) {
  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["default"])({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      margin: "".concat(theme.spacing(2), "px 0 ").concat(theme.spacing(1), "px")
    },
    clock: {
      backgroundColor: 'rgba(0,0,0,.07)',
      borderRadius: '50%',
      height: 260,
      width: 260,
      position: 'relative',
      pointerEvents: 'none'
    },
    squareMask: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'auto',
      outline: 'none',
      touchActions: 'none',
      userSelect: 'none',
      '&:active': {
        cursor: 'move'
      }
    },
    pin: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  });
};
var Clock$1 = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles$1, {
  name: 'MuiPickersClock'
})(Clock);


//# sourceMappingURL=Clock-48fde975.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/ClockView.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/ClockView.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClockView": () => (/* binding */ ClockView),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Clock-48fde975.js */ "./node_modules/@material-ui/pickers/esm/Clock-48fde975.js");














var positions = {
  0: [0, 40],
  1: [55, 19.6],
  2: [94.4, 59.5],
  3: [109, 114],
  4: [94.4, 168.5],
  5: [54.5, 208.4],
  6: [0, 223],
  7: [-54.5, 208.4],
  8: [-94.4, 168.5],
  9: [-109, 114],
  10: [-94.4, 59.5],
  11: [-54.5, 19.6],
  12: [0, 5],
  13: [36.9, 49.9],
  14: [64, 77],
  15: [74, 114],
  16: [64, 151],
  17: [37, 178],
  18: [0, 188],
  19: [-37, 178],
  20: [-64, 151],
  21: [-74, 114],
  22: [-64, 77],
  23: [-37, 50]
};
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["default"])(function (theme) {
  var size = theme.spacing(4);
  return {
    clockNumber: {
      width: size,
      height: 32,
      userSelect: 'none',
      position: 'absolute',
      left: "calc((100% - ".concat(typeof size === 'number' ? "".concat(size, "px") : size, ") / 2)"),
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.hint
    },
    clockNumberSelected: {
      color: theme.palette.primary.contrastText
    }
  };
}, {
  name: 'MuiPickersClockNumber'
});
var ClockNumber = function ClockNumber(_ref) {
  var selected = _ref.selected,
      label = _ref.label,
      index = _ref.index,
      isInner = _ref.isInner;
  var classes = useStyles();
  var className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.clockNumber, selected && classes.clockNumberSelected);
  var transformStyle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var position = positions[index];
    return {
      transform: "translate(".concat(position[0], "px, ").concat(position[1], "px")
    };
  }, [index]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "span",
    className: className,
    variant: isInner ? 'body2' : 'body1',
    style: transformStyle,
    children: label
  });
};

var getHourNumbers = function getHourNumbers(_ref) {
  var ampm = _ref.ampm,
      utils = _ref.utils,
      date = _ref.date;
  var currentHours = utils.getHours(date);
  var hourNumbers = [];
  var startHour = ampm ? 1 : 0;
  var endHour = ampm ? 12 : 23;

  var isSelected = function isSelected(hour) {
    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }

      return currentHours === hour || currentHours - 12 === hour;
    }

    return currentHours === hour;
  };

  for (var hour = startHour; hour <= endHour; hour += 1) {
    var label = hour.toString();

    if (hour === 0) {
      label = '00';
    }

    var props = {
      index: hour,
      label: utils.formatNumber(label),
      selected: isSelected(hour),
      isInner: !ampm && (hour === 0 || hour > 12)
    };
    hourNumbers.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ClockNumber, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      key: hour
    }, props)));
  }

  return hourNumbers;
};
var getMinutesNumbers = function getMinutesNumbers(_ref2) {
  var value = _ref2.value,
      utils = _ref2.utils;
  var f = utils.formatNumber;
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ClockNumber, {
    label: f('00'),
    selected: value === 0,
    index: 12,
    key: 12
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ClockNumber, {
    label: f('05'),
    selected: value === 5,
    index: 1,
    key: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ClockNumber, {
    label: f('10'),
    selected: value === 10,
    index: 2,
    key: 2
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ClockNumber, {
    label: f('15'),
    selected: value === 15,
    index: 3,
    key: 3
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ClockNumber, {
    label: f('20'),
    selected: value === 20,
    index: 4,
    key: 4
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ClockNumber, {
    label: f('25'),
    selected: value === 25,
    index: 5,
    key: 5
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ClockNumber, {
    label: f('30'),
    selected: value === 30,
    index: 6,
    key: 6
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ClockNumber, {
    label: f('35'),
    selected: value === 35,
    index: 7,
    key: 7
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ClockNumber, {
    label: f('40'),
    selected: value === 40,
    index: 8,
    key: 8
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ClockNumber, {
    label: f('45'),
    selected: value === 45,
    index: 9,
    key: 9
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ClockNumber, {
    label: f('50'),
    selected: value === 50,
    index: 10,
    key: 10
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ClockNumber, {
    label: f('55'),
    selected: value === 55,
    index: 11,
    key: 11
  })];
};

var ClockView = function ClockView(_ref) {
  var type = _ref.type,
      onHourChange = _ref.onHourChange,
      onMinutesChange = _ref.onMinutesChange,
      onSecondsChange = _ref.onSecondsChange,
      ampm = _ref.ampm,
      date = _ref.date,
      minutesStep = _ref.minutesStep;
  var utils = (0,_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_10__.u)();
  var viewProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    switch (type) {
      case _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_11__.b.HOURS:
        return {
          value: utils.getHours(date),
          children: getHourNumbers({
            date: date,
            utils: utils,
            ampm: Boolean(ampm)
          }),
          onChange: function onChange(value, isFinish) {
            var currentMeridiem = (0,_Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_11__.g)(date, utils);
            var updatedTimeWithMeridiem = (0,_Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_11__.c)(utils.setHours(date, value), currentMeridiem, Boolean(ampm), utils);
            onHourChange(updatedTimeWithMeridiem, isFinish);
          }
        };

      case _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_11__.b.MINUTES:
        var minutesValue = utils.getMinutes(date);
        return {
          value: minutesValue,
          children: getMinutesNumbers({
            value: minutesValue,
            utils: utils
          }),
          onChange: function onChange(value, isFinish) {
            var updatedTime = utils.setMinutes(date, value);
            onMinutesChange(updatedTime, isFinish);
          }
        };

      case _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_11__.b.SECONDS:
        var secondsValue = utils.getSeconds(date);
        return {
          value: secondsValue,
          children: getMinutesNumbers({
            value: secondsValue,
            utils: utils
          }),
          onChange: function onChange(value, isFinish) {
            var updatedTime = utils.setSeconds(date, value);
            onSecondsChange(updatedTime, isFinish);
          }
        };

      default:
        throw new Error('You must provide the type for TimePickerView');
    }
  }, [ampm, date, onHourChange, onMinutesChange, onSecondsChange, type, utils]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_11__.a, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    type: type,
    ampm: ampm,
    minutesStep: minutesStep
  }, viewProps));
};
ClockView.displayName = 'TimePickerView';
 true ? ClockView.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_12__.object.isRequired,
  onHourChange: prop_types__WEBPACK_IMPORTED_MODULE_12__.func.isRequired,
  onMinutesChange: prop_types__WEBPACK_IMPORTED_MODULE_12__.func.isRequired,
  onSecondsChange: prop_types__WEBPACK_IMPORTED_MODULE_12__.func.isRequired,
  ampm: prop_types__WEBPACK_IMPORTED_MODULE_12__.bool,
  minutesStep: prop_types__WEBPACK_IMPORTED_MODULE_12__.number,
  type: (0,prop_types__WEBPACK_IMPORTED_MODULE_12__.oneOf)(Object.keys(_Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_11__.b).map(function (key) {
    return _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_11__.b[key];
  })).isRequired
} : 0;
ClockView.defaultProps = {
  ampm: true,
  minutesStep: 1
};
var ClockView$1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(ClockView);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClockView$1);

//# sourceMappingURL=ClockView.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/DatePicker.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/DatePicker.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePicker": () => (/* binding */ DatePicker),
/* harmony export */   "KeyboardDatePicker": () => (/* binding */ KeyboardDatePicker)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./makePickerWithState-5a79cb8a.js */ "./node_modules/@material-ui/pickers/esm/makePickerWithState-5a79cb8a.js");
/* harmony import */ var _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Calendar-11ae61f6.js */ "./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js");
/* harmony import */ var rifm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rifm */ "./node_modules/rifm/dist/rifm.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Picker_ccd9ba90_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Picker-ccd9ba90.js */ "./node_modules/@material-ui/pickers/esm/Picker-ccd9ba90.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");




































var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["default"])({
  toolbar: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  toolbarLandscape: {
    padding: 16
  },
  dateLandscape: {
    marginRight: 16
  }
}, {
  name: 'MuiPickersDatePickerRoot'
});
var DatePickerToolbar = function DatePickerToolbar(_ref) {
  var date = _ref.date,
      views = _ref.views,
      setOpenView = _ref.setOpenView,
      isLandscape = _ref.isLandscape,
      openView = _ref.openView;
  var utils = (0,_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_13__.u)();
  var classes = useStyles();
  var isYearOnly = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return (0,_Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_14__.i)(views);
  }, [views]);
  var isYearAndMonth = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return (0,_Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_14__.b)(views);
  }, [views]);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_15__.P, {
    isLandscape: isLandscape,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(!isYearOnly && classes.toolbar, isLandscape && classes.toolbarLandscape)
  }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_15__.T, {
    variant: isYearOnly ? 'h3' : 'subtitle1',
    onClick: function onClick() {
      return setOpenView('year');
    },
    selected: openView === 'year',
    label: utils.getYearText(date)
  }), !isYearOnly && !isYearAndMonth && (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_15__.T, {
    variant: "h4",
    selected: openView === 'date',
    onClick: function onClick() {
      return setOpenView('date');
    },
    align: isLandscape ? 'left' : 'center',
    label: utils.getDatePickerHeaderText(date),
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(isLandscape && classes.dateLandscape)
  }), isYearAndMonth && (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_15__.T, {
    variant: "h4",
    onClick: function onClick() {
      return setOpenView('month');
    },
    selected: openView === 'month',
    label: utils.getMonthText(date)
  }));
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultProps = _objectSpread({}, _Picker_ccd9ba90_js__WEBPACK_IMPORTED_MODULE_16__.d, {
  openTo: 'date',
  views: ['year', 'date']
});

function useOptions(props) {
  var utils = (0,_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_13__.u)();
  return {
    getDefaultFormat: function getDefaultFormat() {
      return (0,_Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_14__.g)(props.views, utils);
    }
  };
}

var DatePicker = (0,_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_15__.m)({
  useOptions: useOptions,
  Input: _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_15__.a,
  useState: _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_15__.u,
  DefaultToolbarComponent: DatePickerToolbar
});
var KeyboardDatePicker = (0,_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_15__.m)({
  useOptions: useOptions,
  Input: _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_15__.K,
  useState: _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_15__.b,
  DefaultToolbarComponent: DatePickerToolbar
});
DatePicker.defaultProps = defaultProps;
KeyboardDatePicker.defaultProps = defaultProps;


//# sourceMappingURL=DatePicker.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/Day.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/Day.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Day": () => (/* binding */ Day),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useStyles": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");









var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["default"])(function (theme) {
  return {
    day: {
      width: 36,
      height: 36,
      fontSize: theme.typography.caption.fontSize,
      margin: '0 2px',
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium,
      padding: 0
    },
    hidden: {
      opacity: 0,
      pointerEvents: 'none'
    },
    current: {
      color: theme.palette.primary.main,
      fontWeight: 600
    },
    daySelected: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      '&:hover': {
        backgroundColor: theme.palette.primary.main
      }
    },
    dayDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersDay'
});
var Day = function Day(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      hidden = _ref.hidden,
      current = _ref.current,
      selected = _ref.selected,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["children", "disabled", "hidden", "current", "selected"]);

  var classes = useStyles();
  var className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.day, hidden && classes.hidden, current && classes.current, selected && classes.daySelected, disabled && classes.dayDisabled);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: className,
    tabIndex: hidden || disabled ? -1 : 0
  }, other), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body2",
    color: "inherit"
  }, children));
};
Day.displayName = 'Day';
 true ? Day.propTypes = {
  current: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  hidden: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool
} : 0;
Day.defaultProps = {
  disabled: false,
  hidden: false,
  current: false,
  selected: false
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Day);

//# sourceMappingURL=Day.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/Picker-ccd9ba90.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/Picker-ccd9ba90.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Picker),
/* harmony export */   "a": () => (/* binding */ dateTimePickerDefaultProps),
/* harmony export */   "d": () => (/* binding */ datePickerDefaultProps),
/* harmony export */   "t": () => (/* binding */ timePickerDefaultProps)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Calendar-11ae61f6.js */ "./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _ClockView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ClockView.js */ "./node_modules/@material-ui/pickers/esm/ClockView.js");














function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var date = (0,prop_types__WEBPACK_IMPORTED_MODULE_6__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_6__.object, prop_types__WEBPACK_IMPORTED_MODULE_6__.string, prop_types__WEBPACK_IMPORTED_MODULE_6__.number, (0,prop_types__WEBPACK_IMPORTED_MODULE_6__.instanceOf)(Date)]);
var datePickerView = (0,prop_types__WEBPACK_IMPORTED_MODULE_6__.oneOf)(['year', 'month', 'day']);
/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */

var timePickerDefaultProps = {
  ampm: true,
  invalidDateMessage: 'Invalid Time Format'
};
var datePickerDefaultProps = {
  minDate: new Date('1900-01-01'),
  maxDate: new Date('2100-01-01'),
  invalidDateMessage: 'Invalid Date Format',
  minDateMessage: 'Date should not be before minimal date',
  maxDateMessage: 'Date should not be after maximal date',
  allowKeyboardControl: true
};
var dateTimePickerDefaultProps = _objectSpread({}, timePickerDefaultProps, {}, datePickerDefaultProps, {
  showTabs: true
});

function useViews(views, openTo, onChange) {
  var _React$useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(openTo && (0,_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_7__.a)(views, openTo) ? openTo : views[0]),
      _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState, 2),
      openView = _React$useState2[0],
      setOpenView = _React$useState2[1];

  var handleChangeAndOpenNext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (date, isFinish) {
    var nextViewToOpen = views[views.indexOf(openView) + 1];

    if (isFinish && nextViewToOpen) {
      // do not close picker if needs to show next view
      onChange(date, false);
      setOpenView(nextViewToOpen);
      return;
    }

    onChange(date, Boolean(isFinish));
  }, [onChange, openView, views]);
  return {
    handleChangeAndOpenNext: handleChangeAndOpenNext,
    openView: openView,
    setOpenView: setOpenView
  };
}

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["default"])(function (theme) {
  return {
    root: {
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
      '&:focus': {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    yearSelected: {
      margin: '10px 0',
      fontWeight: theme.typography.fontWeightMedium
    },
    yearDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersYear'
});
var Year = function Year(_ref) {
  var onSelect = _ref.onSelect,
      forwardedRef = _ref.forwardedRef,
      value = _ref.value,
      selected = _ref.selected,
      disabled = _ref.disabled,
      children = _ref.children,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["onSelect", "forwardedRef", "value", "selected", "disabled", "children"]);

  var classes = useStyles();
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    return onSelect(value);
  }, [onSelect, value]);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    role: "button",
    component: "div",
    tabIndex: disabled ? -1 : 0,
    onClick: handleClick,
    onKeyPress: handleClick,
    color: selected ? 'primary' : undefined,
    variant: selected ? 'h5' : 'subtitle1',
    children: children,
    ref: forwardedRef,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, selected && classes.yearSelected, disabled && classes.yearDisabled)
  }, other));
};
Year.displayName = 'Year';
var Year$1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (props, ref) {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Year, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, props, {
    forwardedRef: ref
  }));
});

var useStyles$1 = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["default"])({
  container: {
    height: 300,
    overflowY: 'auto'
  }
}, {
  name: 'MuiPickersYearSelection'
});
var YearSelection = function YearSelection(_ref) {
  var date = _ref.date,
      onChange = _ref.onChange,
      onYearChange = _ref.onYearChange,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disablePast = _ref.disablePast,
      disableFuture = _ref.disableFuture,
      animateYearScrolling = _ref.animateYearScrolling;
  var utils = (0,_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_10__.u)();
  var classes = useStyles$1();
  var currentVariant = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_7__.V);
  var selectedYearRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (selectedYearRef.current && selectedYearRef.current.scrollIntoView) {
      try {
        selectedYearRef.current.scrollIntoView({
          block: currentVariant === 'static' ? 'nearest' : 'center',
          behavior: animateYearScrolling ? 'smooth' : 'auto'
        });
      } catch (e) {
        // call without arguments in case when scrollIntoView works improperly (e.g. Firefox 52-57)
        selectedYearRef.current.scrollIntoView();
      }
    }
  }, []); // eslint-disable-line

  var currentYear = utils.getYear(date);
  var onYearSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (year) {
    var newDate = utils.setYear(date, year);

    if (onYearChange) {
      onYearChange(newDate);
    }

    onChange(newDate, true);
  }, [date, onChange, onYearChange, utils]);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: classes.container
  }, utils.getYearRange(minDate, maxDate).map(function (year) {
    var yearNumber = utils.getYear(year);
    var selected = yearNumber === currentYear;
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Year$1, {
      key: utils.getYearText(year),
      selected: selected,
      value: yearNumber,
      onSelect: onYearSelect,
      ref: selected ? selectedYearRef : undefined,
      disabled: Boolean(disablePast && utils.isBeforeYear(year, utils.date()) || disableFuture && utils.isAfterYear(year, utils.date()))
    }, utils.getYearText(year));
  }));
};

var useStyles$2 = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["default"])(function (theme) {
  return {
    root: {
      flex: '1 0 33.33%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
      height: 75,
      transition: theme.transitions.create('font-size', {
        duration: '100ms'
      }),
      '&:focus': {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    monthSelected: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium
    },
    monthDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersMonth'
});
var Month = function Month(_ref) {
  var selected = _ref.selected,
      onSelect = _ref.onSelect,
      disabled = _ref.disabled,
      value = _ref.value,
      children = _ref.children,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["selected", "onSelect", "disabled", "value", "children"]);

  var classes = useStyles$2();
  var handleSelection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    onSelect(value);
  }, [onSelect, value]);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    role: "button",
    component: "div",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, selected && classes.monthSelected, disabled && classes.monthDisabled),
    tabIndex: disabled ? -1 : 0,
    onClick: handleSelection,
    onKeyPress: handleSelection,
    color: selected ? 'primary' : undefined,
    variant: selected ? 'h5' : 'subtitle1',
    children: children
  }, other));
};
Month.displayName = 'Month';

var useStyles$3 = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["default"])({
  container: {
    width: 310,
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'stretch'
  }
}, {
  name: 'MuiPickersMonthSelection'
});
var MonthSelection = function MonthSelection(_ref) {
  var disablePast = _ref.disablePast,
      disableFuture = _ref.disableFuture,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      date = _ref.date,
      onMonthChange = _ref.onMonthChange,
      onChange = _ref.onChange;
  var utils = (0,_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_10__.u)();
  var classes = useStyles$3();
  var currentMonth = utils.getMonth(date);

  var shouldDisableMonth = function shouldDisableMonth(month) {
    var now = utils.date();
    var utilMinDate = utils.date(minDate);
    var utilMaxDate = utils.date(maxDate);
    var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utilMinDate) ? now : utilMinDate);
    var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utilMaxDate) ? now : utilMaxDate);
    var isBeforeFirstEnabled = utils.isBefore(month, firstEnabledMonth);
    var isAfterLastEnabled = utils.isAfter(month, lastEnabledMonth);
    return isBeforeFirstEnabled || isAfterLastEnabled;
  };

  var onMonthSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (month) {
    var newDate = utils.setMonth(date, month);
    onChange(newDate, true);

    if (onMonthChange) {
      onMonthChange(newDate);
    }
  }, [date, onChange, onMonthChange, utils]);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: classes.container
  }, utils.getMonthArray(date).map(function (month) {
    var monthNumber = utils.getMonth(month);
    var monthText = utils.format(month, 'MMM');
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Month, {
      key: monthText,
      value: monthNumber,
      selected: monthNumber === currentMonth,
      onSelect: onMonthSelect,
      disabled: shouldDisableMonth(month)
    }, monthText);
  }));
};

var getOrientation = function getOrientation() {
  if (typeof window === 'undefined') {
    return 'portrait';
  }

  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? 'landscape' : 'portrait';
  } // Support IOS safari


  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? 'landscape' : 'portrait';
  }

  return 'portrait';
};

function useIsLandscape(customOrientation) {
  var _React$useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getOrientation()),
      _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState, 2),
      orientation = _React$useState2[0],
      setOrientation = _React$useState2[1];

  var eventHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    return setOrientation(getOrientation());
  }, []);
  (0,_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_7__.u)(function () {
    window.addEventListener('orientationchange', eventHandler);
    return function () {
      return window.removeEventListener('orientationchange', eventHandler);
    };
  }, [eventHandler]);
  var orientationToUse = customOrientation || orientation;
  return orientationToUse === 'landscape';
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var viewsMap = {
  year: YearSelection,
  month: MonthSelection,
  date: _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_11__.a,
  hours: _ClockView_js__WEBPACK_IMPORTED_MODULE_12__.ClockView,
  minutes: _ClockView_js__WEBPACK_IMPORTED_MODULE_12__.ClockView,
  seconds: _ClockView_js__WEBPACK_IMPORTED_MODULE_12__.ClockView
};
var useStyles$4 = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["default"])({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  containerLandscape: {
    flexDirection: 'row'
  },
  pickerView: {
    overflowX: 'hidden',
    minHeight: _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_7__.b,
    minWidth: _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_7__.D,
    maxWidth: _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_7__.c,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  pickerViewLandscape: {
    padding: '0 8px'
  }
}, {
  name: 'MuiPickersBasePicker'
});
var Picker = function Picker(_ref) {
  var date = _ref.date,
      views = _ref.views,
      disableToolbar = _ref.disableToolbar,
      onChange = _ref.onChange,
      openTo = _ref.openTo,
      unparsedMinDate = _ref.minDate,
      unparsedMaxDate = _ref.maxDate,
      ToolbarComponent = _ref.ToolbarComponent,
      orientation = _ref.orientation,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["date", "views", "disableToolbar", "onChange", "openTo", "minDate", "maxDate", "ToolbarComponent", "orientation"]);

  var utils = (0,_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_10__.u)();
  var classes = useStyles$4();
  var isLandscape = useIsLandscape(orientation);

  var _useViews = useViews(views, openTo, onChange),
      openView = _useViews.openView,
      setOpenView = _useViews.setOpenView,
      handleChangeAndOpenNext = _useViews.handleChangeAndOpenNext;

  var minDate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return utils.date(unparsedMinDate);
  }, [unparsedMinDate, utils]);
  var maxDate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return utils.date(unparsedMaxDate);
  }, [unparsedMaxDate, utils]);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.container, isLandscape && classes.containerLandscape)
  }, !disableToolbar && (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, rest, {
    views: views,
    isLandscape: isLandscape,
    date: date,
    onChange: onChange,
    setOpenView: setOpenView,
    openView: openView
  })), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.pickerView, isLandscape && classes.pickerViewLandscape)
  }, openView === 'year' && (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(YearSelection, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, rest, {
    date: date,
    onChange: handleChangeAndOpenNext,
    minDate: minDate,
    maxDate: maxDate
  })), openView === 'month' && (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(MonthSelection, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, rest, {
    date: date,
    onChange: handleChangeAndOpenNext,
    minDate: minDate,
    maxDate: maxDate
  })), openView === 'date' && (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_11__.a, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, rest, {
    date: date,
    onChange: handleChangeAndOpenNext,
    minDate: minDate,
    maxDate: maxDate
  })), (openView === 'hours' || openView === 'minutes' || openView === 'seconds') && (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_ClockView_js__WEBPACK_IMPORTED_MODULE_12__.ClockView, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, rest, {
    date: date,
    type: openView,
    onHourChange: handleChangeAndOpenNext,
    onMinutesChange: handleChangeAndOpenNext,
    onSecondsChange: handleChangeAndOpenNext
  }))));
};
Picker.defaultProps = _objectSpread$1({}, datePickerDefaultProps, {
  views: Object.keys(viewsMap)
});


//# sourceMappingURL=Picker-ccd9ba90.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ DIALOG_WIDTH),
/* harmony export */   "V": () => (/* binding */ VariantContext),
/* harmony export */   "W": () => (/* binding */ Wrapper),
/* harmony export */   "a": () => (/* binding */ arrayIncludes),
/* harmony export */   "b": () => (/* binding */ VIEW_HEIGHT),
/* harmony export */   "c": () => (/* binding */ DIALOG_WIDTH_WIDER),
/* harmony export */   "r": () => (/* binding */ runKeyHandler),
/* harmony export */   "u": () => (/* binding */ useIsomorphicEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/createStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/Popover.js");












/** Use it instead of .includes method for IE support */
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every(function (item) {
      return array.indexOf(item) !== -1;
    });
  }

  return array.indexOf(itemOrItems) !== -1;
}

var DIALOG_WIDTH = 310;
var DIALOG_WIDTH_WIDER = 325;
var VIEW_HEIGHT = 305;

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["default"])(function (theme) {
  return {
    staticWrapperRoot: {
      overflow: 'hidden',
      minWidth: DIALOG_WIDTH,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper
    }
  };
}, {
  name: 'MuiPickersStaticWrapper'
});
var StaticWrapper = function StaticWrapper(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes.staticWrapperRoot,
    children: children
  });
};

var ModalDialog = function ModalDialog(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      onAccept = _ref.onAccept,
      onDismiss = _ref.onDismiss,
      onClear = _ref.onClear,
      onSetToday = _ref.onSetToday,
      okLabel = _ref.okLabel,
      cancelLabel = _ref.cancelLabel,
      clearLabel = _ref.clearLabel,
      todayLabel = _ref.todayLabel,
      clearable = _ref.clearable,
      showTodayButton = _ref.showTodayButton,
      showTabs = _ref.showTabs,
      wider = _ref.wider,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["children", "classes", "onAccept", "onDismiss", "onClear", "onSetToday", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "clearable", "showTodayButton", "showTabs", "wider"]);

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    role: "dialog",
    onClose: onDismiss,
    classes: {
      paper: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.dialogRoot, wider && classes.dialogRootWider)
    }
  }, other), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: children,
    className: classes.dialog
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
    classes: {
      root: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])((clearable || showTodayButton) && classes.withAdditionalAction)
    }
  }, clearable && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "primary",
    onClick: onClear
  }, clearLabel), showTodayButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "primary",
    onClick: onSetToday
  }, todayLabel), cancelLabel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "primary",
    onClick: onDismiss
  }, cancelLabel), okLabel && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "primary",
    onClick: onAccept
  }, okLabel)));
};
ModalDialog.displayName = 'ModalDialog';
var styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["default"])({
  dialogRoot: {
    minWidth: DIALOG_WIDTH
  },
  dialogRootWider: {
    minWidth: DIALOG_WIDTH_WIDER
  },
  dialog: {
    '&:first-child': {
      padding: 0
    }
  },
  withAdditionalAction: {
    // set justifyContent to default value to fix IE11 layout bug
    // see https://github.com/dmtrKovalenko/material-ui-pickers/pull/267
    justifyContent: 'flex-start',
    '& > *:first-child': {
      marginRight: 'auto'
    }
  }
});
var ModalDialog$1 = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["default"])(styles, {
  name: 'MuiPickersModal'
})(ModalDialog);

var useIsomorphicEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;
function runKeyHandler(e, keyHandlers) {
  var handler = keyHandlers[e.key];

  if (handler) {
    handler(); // if event was handled prevent other side effects (e.g. page scroll)

    e.preventDefault();
  }
}
function useKeyDown(active, keyHandlers) {
  var keyHandlersRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(keyHandlers);
  keyHandlersRef.current = keyHandlers;
  useIsomorphicEffect(function () {
    if (active) {
      var handleKeyDown = function handleKeyDown(event) {
        runKeyHandler(event, keyHandlersRef.current);
      };

      window.addEventListener('keydown', handleKeyDown);
      return function () {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [active]);
}

var ModalWrapper = function ModalWrapper(_ref) {
  var open = _ref.open,
      children = _ref.children,
      okLabel = _ref.okLabel,
      cancelLabel = _ref.cancelLabel,
      clearLabel = _ref.clearLabel,
      todayLabel = _ref.todayLabel,
      showTodayButton = _ref.showTodayButton,
      clearable = _ref.clearable,
      DialogProps = _ref.DialogProps,
      showTabs = _ref.showTabs,
      wider = _ref.wider,
      InputComponent = _ref.InputComponent,
      DateInputProps = _ref.DateInputProps,
      onClear = _ref.onClear,
      onAccept = _ref.onAccept,
      onDismiss = _ref.onDismiss,
      onSetToday = _ref.onSetToday,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["open", "children", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps", "showTabs", "wider", "InputComponent", "DateInputProps", "onClear", "onAccept", "onDismiss", "onSetToday"]);

  useKeyDown(open, {
    Enter: onAccept
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InputComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, other, DateInputProps)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ModalDialog$1, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    wider: wider,
    showTabs: showTabs,
    open: open,
    onClear: onClear,
    onAccept: onAccept,
    onDismiss: onDismiss,
    onSetToday: onSetToday,
    clearLabel: clearLabel,
    todayLabel: todayLabel,
    okLabel: okLabel,
    cancelLabel: cancelLabel,
    clearable: clearable,
    showTodayButton: showTodayButton,
    children: children
  }, DialogProps)));
};
 true ? ModalWrapper.propTypes = {
  okLabel: prop_types__WEBPACK_IMPORTED_MODULE_11__.node,
  cancelLabel: prop_types__WEBPACK_IMPORTED_MODULE_11__.node,
  clearLabel: prop_types__WEBPACK_IMPORTED_MODULE_11__.node,
  clearable: prop_types__WEBPACK_IMPORTED_MODULE_11__.bool,
  todayLabel: prop_types__WEBPACK_IMPORTED_MODULE_11__.node,
  showTodayButton: prop_types__WEBPACK_IMPORTED_MODULE_11__.bool,
  DialogProps: prop_types__WEBPACK_IMPORTED_MODULE_11__.object
} : 0;
ModalWrapper.defaultProps = {
  okLabel: 'OK',
  cancelLabel: 'Cancel',
  clearLabel: 'Clear',
  todayLabel: 'Today',
  clearable: false,
  showTodayButton: false
};

var InlineWrapper = function InlineWrapper(_ref) {
  var open = _ref.open,
      wider = _ref.wider,
      children = _ref.children,
      PopoverProps = _ref.PopoverProps,
      onClear = _ref.onClear,
      onDismiss = _ref.onDismiss,
      onSetToday = _ref.onSetToday,
      onAccept = _ref.onAccept,
      showTabs = _ref.showTabs,
      DateInputProps = _ref.DateInputProps,
      InputComponent = _ref.InputComponent,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["open", "wider", "children", "PopoverProps", "onClear", "onDismiss", "onSetToday", "onAccept", "showTabs", "DateInputProps", "InputComponent"]);

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  useKeyDown(open, {
    Enter: onAccept
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InputComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, other, DateInputProps, {
    inputRef: ref
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    open: open,
    onClose: onDismiss,
    anchorEl: ref.current,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    children: children
  }, PopoverProps)));
};
 true ? InlineWrapper.propTypes = {
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_11__.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_11__.func,
  PopoverProps: prop_types__WEBPACK_IMPORTED_MODULE_11__.object
} : 0;

function getWrapperFromVariant(variant) {
  switch (variant) {
    case 'inline':
      return InlineWrapper;

    case 'static':
      return StaticWrapper;

    default:
      return ModalWrapper;
  }
}
var VariantContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var Wrapper = function Wrapper(_ref) {
  var variant = _ref.variant,
      props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["variant"]);

  var Component = getWrapperFromVariant(variant);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(VariantContext.Provider, {
    value: variant || 'dialog'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, props));
};


//# sourceMappingURL=Wrapper-241966d7.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/makePickerWithState-5a79cb8a.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/makePickerWithState-5a79cb8a.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ KeyboardDateInput),
/* harmony export */   "P": () => (/* binding */ PickerToolbar),
/* harmony export */   "T": () => (/* binding */ ToolbarButton$1),
/* harmony export */   "a": () => (/* binding */ PureDateInput),
/* harmony export */   "b": () => (/* binding */ useKeyboardPickerState),
/* harmony export */   "c": () => (/* binding */ ToolbarText),
/* harmony export */   "m": () => (/* binding */ makePickerWithState),
/* harmony export */   "p": () => (/* binding */ pick12hOr24hFormat),
/* harmony export */   "u": () => (/* binding */ usePickerState),
/* harmony export */   "v": () => (/* binding */ validate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/createStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js");
/* harmony import */ var rifm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rifm */ "./node_modules/rifm/dist/rifm.esm.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Picker_ccd9ba90_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Picker-ccd9ba90.js */ "./node_modules/@material-ui/pickers/esm/Picker-ccd9ba90.js");




















var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["default"])(function (theme) {
  var textColor = theme.palette.type === 'light' ? theme.palette.primary.contrastText : theme.palette.getContrastText(theme.palette.background["default"]);
  return {
    toolbarTxt: {
      color: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.fade)(textColor, 0.54)
    },
    toolbarBtnSelected: {
      color: textColor
    }
  };
}, {
  name: 'MuiPickersToolbarText'
});

var ToolbarText = function ToolbarText(_ref) {
  var selected = _ref.selected,
      label = _ref.label,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["selected", "label", "className"]);

  var classes = useStyles();
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    children: label,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.toolbarTxt, className, selected && classes.toolbarBtnSelected)
  }, other));
};

var ToolbarButton = function ToolbarButton(_ref) {
  var classes = _ref.classes,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      label = _ref.label,
      selected = _ref.selected,
      variant = _ref.variant,
      align = _ref.align,
      typographyClassName = _ref.typographyClassName,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["classes", "className", "label", "selected", "variant", "align", "typographyClassName"]);

  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    variant: "text",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.toolbarBtn, className)
  }, other), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarText, {
    align: align,
    className: typographyClassName,
    variant: variant,
    label: label,
    selected: selected
  }));
};

 true ? ToolbarButton.propTypes = {
  selected: prop_types__WEBPACK_IMPORTED_MODULE_11__.bool.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_11__.string.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_11__.any.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_11__.string,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_11__.any
} : 0;
ToolbarButton.defaultProps = {
  className: ''
};
var styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["default"])({
  toolbarBtn: {
    padding: 0,
    minWidth: '16px',
    textTransform: 'none'
  }
});
var ToolbarButton$1 = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["default"])(styles, {
  name: 'MuiPickersToolbarButton'
})(ToolbarButton);

var useStyles$1 = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["default"])(function (theme) {
  return {
    toolbar: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background["default"]
    },
    toolbarLandscape: {
      height: 'auto',
      maxWidth: 150,
      padding: 8,
      justifyContent: 'flex-start'
    }
  };
}, {
  name: 'MuiPickersToolbar'
});

var PickerToolbar = function PickerToolbar(_ref) {
  var children = _ref.children,
      isLandscape = _ref.isLandscape,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["children", "isLandscape", "className"]);

  var classes = useStyles$1();
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.toolbar, className, isLandscape && classes.toolbarLandscape)
  }, other), children);
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var PureDateInput = function PureDateInput(_ref) {
  var inputValue = _ref.inputValue,
      inputVariant = _ref.inputVariant,
      validationError = _ref.validationError,
      InputProps = _ref.InputProps,
      onOpen = _ref.openPicker,
      _ref$TextFieldCompone = _ref.TextFieldComponent,
      TextFieldComponent = _ref$TextFieldCompone === void 0 ? _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"] : _ref$TextFieldCompone,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["inputValue", "inputVariant", "validationError", "InputProps", "openPicker", "TextFieldComponent"]);

  var PureDateInputProps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return _objectSpread({}, InputProps, {
      readOnly: true
    });
  }, [InputProps]);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextFieldComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    error: Boolean(validationError),
    helperText: validationError
  }, other, {
    // do not overridable
    onClick: onOpen,
    value: inputValue,
    variant: inputVariant,
    InputProps: PureDateInputProps,
    onKeyDown: function onKeyDown(e) {
      // space
      if (e.keyCode === 32) {
        e.stopPropagation();
        onOpen();
      }
    }
  }));
};
PureDateInput.displayName = 'PureDateInput';

var KeyboardIcon = function KeyboardIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_16__["default"], props, react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
  }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }));
};

var getDisplayDate = function getDisplayDate(value, format, utils, isEmpty, _ref) {
  var invalidLabel = _ref.invalidLabel,
      emptyLabel = _ref.emptyLabel,
      labelFunc = _ref.labelFunc;
  var date = utils.date(value);

  if (labelFunc) {
    return labelFunc(isEmpty ? null : date, invalidLabel);
  }

  if (isEmpty) {
    return emptyLabel || '';
  }

  return utils.isValid(date) ? utils.format(date, format) : invalidLabel;
};

var getComparisonMaxDate = function getComparisonMaxDate(utils, strictCompareDates, date) {
  if (strictCompareDates) {
    return date;
  }

  return utils.endOfDay(date);
};

var getComparisonMinDate = function getComparisonMinDate(utils, strictCompareDates, date) {
  if (strictCompareDates) {
    return date;
  }

  return utils.startOfDay(date);
};

var validate = function validate(value, utils, _ref2) {
  var maxDate = _ref2.maxDate,
      minDate = _ref2.minDate,
      disablePast = _ref2.disablePast,
      disableFuture = _ref2.disableFuture,
      maxDateMessage = _ref2.maxDateMessage,
      minDateMessage = _ref2.minDateMessage,
      invalidDateMessage = _ref2.invalidDateMessage,
      strictCompareDates = _ref2.strictCompareDates;
  var parsedValue = utils.date(value); // if null - do not show error

  if (value === null) {
    return '';
  }

  if (!utils.isValid(value)) {
    return invalidDateMessage;
  }

  if (maxDate && utils.isAfter(parsedValue, getComparisonMaxDate(utils, !!strictCompareDates, utils.date(maxDate)))) {
    return maxDateMessage;
  }

  if (disableFuture && utils.isAfter(parsedValue, getComparisonMaxDate(utils, !!strictCompareDates, utils.date()))) {
    return maxDateMessage;
  }

  if (minDate && utils.isBefore(parsedValue, getComparisonMinDate(utils, !!strictCompareDates, utils.date(minDate)))) {
    return minDateMessage;
  }

  if (disablePast && utils.isBefore(parsedValue, getComparisonMinDate(utils, !!strictCompareDates, utils.date()))) {
    return minDateMessage;
  }

  return '';
};
function pick12hOr24hFormat(userFormat) {
  var ampm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var formats = arguments.length > 2 ? arguments[2] : undefined;

  if (userFormat) {
    return userFormat;
  }

  return ampm ? formats['12h'] : formats['24h'];
}
function makeMaskFromFormat(format, numberMaskChar) {
  return format.replace(/[a-z]/gi, numberMaskChar);
}
var maskedDateFormatter = function maskedDateFormatter(mask, numberMaskChar, refuse) {
  return function (value) {
    var result = '';
    var parsed = value.replace(refuse, '');

    if (parsed === '') {
      return parsed;
    }

    var i = 0;
    var n = 0;

    while (i < mask.length) {
      var maskChar = mask[i];

      if (maskChar === numberMaskChar && n < parsed.length) {
        var parsedChar = parsed[n];
        result += parsedChar;
        n += 1;
      } else {
        result += maskChar;
      }

      i += 1;
    }

    return result;
  };
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var KeyboardDateInput = function KeyboardDateInput(_ref) {
  var inputValue = _ref.inputValue,
      inputVariant = _ref.inputVariant,
      validationError = _ref.validationError,
      KeyboardButtonProps = _ref.KeyboardButtonProps,
      InputAdornmentProps = _ref.InputAdornmentProps,
      onOpen = _ref.openPicker,
      onChange = _ref.onChange,
      InputProps = _ref.InputProps,
      mask = _ref.mask,
      _ref$maskChar = _ref.maskChar,
      maskChar = _ref$maskChar === void 0 ? '_' : _ref$maskChar,
      _ref$refuse = _ref.refuse,
      refuse = _ref$refuse === void 0 ? /[^\d]+/gi : _ref$refuse,
      format = _ref.format,
      keyboardIcon = _ref.keyboardIcon,
      disabled = _ref.disabled,
      rifmFormatter = _ref.rifmFormatter,
      _ref$TextFieldCompone = _ref.TextFieldComponent,
      TextFieldComponent = _ref$TextFieldCompone === void 0 ? _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"] : _ref$TextFieldCompone,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["inputValue", "inputVariant", "validationError", "KeyboardButtonProps", "InputAdornmentProps", "openPicker", "onChange", "InputProps", "mask", "maskChar", "refuse", "format", "keyboardIcon", "disabled", "rifmFormatter", "TextFieldComponent"]);

  var inputMask = mask || makeMaskFromFormat(format, maskChar); // prettier-ignore

  var formatter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return maskedDateFormatter(inputMask, maskChar, refuse);
  }, [inputMask, maskChar, refuse]);
  var position = InputAdornmentProps && InputAdornmentProps.position ? InputAdornmentProps.position : 'end';

  var handleChange = function handleChange(text) {
    var finalString = text === '' || text === inputMask ? null : text;
    onChange(finalString);
  };

  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(rifm__WEBPACK_IMPORTED_MODULE_5__.Rifm, {
    key: inputMask,
    value: inputValue,
    onChange: handleChange,
    refuse: refuse,
    format: rifmFormatter || formatter
  }, function (_ref2) {
    var onChange = _ref2.onChange,
        value = _ref2.value;
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextFieldComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
      disabled: disabled,
      error: Boolean(validationError),
      helperText: validationError
    }, other, {
      value: value,
      onChange: onChange,
      variant: inputVariant,
      InputProps: _objectSpread$1({}, InputProps, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(position, "Adornment"), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
        position: position
      }, InputAdornmentProps), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
        disabled: disabled
      }, KeyboardButtonProps, {
        onClick: onOpen
      }), keyboardIcon))))
    }));
  });
};
KeyboardDateInput.defaultProps = {
  keyboardIcon: (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(KeyboardIcon, null)
};

function useOpenState(_ref) {
  var open = _ref.open,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose;
  var setIsOpenState = null;

  if (open === undefined || open === null) {
    // The component is uncontrolled, so we need to give it its own state.
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

    var _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2);

    open = _useState2[0];
    setIsOpenState = _useState2[1];
  } // prettier-ignore


  var setIsOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (newIsOpen) {
    setIsOpenState && setIsOpenState(newIsOpen);
    return newIsOpen ? onOpen && onOpen() : onClose && onClose();
  }, [onOpen, onClose, setIsOpenState]);
  return {
    isOpen: open,
    setIsOpen: setIsOpen
  };
}

var useValueToDate = function useValueToDate(utils, _ref) {
  var value = _ref.value,
      initialFocusedDate = _ref.initialFocusedDate;
  var nowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(utils.date());
  var date = utils.date(value || initialFocusedDate || nowRef.current);
  return date && utils.isValid(date) ? date : nowRef.current;
};

function useDateValues(props, options) {
  var utils = (0,_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_19__.u)();
  var date = useValueToDate(utils, props);
  var format = props.format || options.getDefaultFormat();
  return {
    date: date,
    format: format
  };
}

function usePickerState(props, options) {
  var autoOk = props.autoOk,
      disabled = props.disabled,
      readOnly = props.readOnly,
      onAccept = props.onAccept,
      _onChange = props.onChange,
      onError = props.onError,
      value = props.value,
      variant = props.variant;
  var utils = (0,_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_19__.u)();

  var _useOpenState = useOpenState(props),
      isOpen = _useOpenState.isOpen,
      setIsOpen = _useOpenState.setIsOpen;

  var _useDateValues = useDateValues(props, options),
      date = _useDateValues.date,
      format = _useDateValues.format;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(date),
      _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
      pickerDate = _useState2[0],
      setPickerDate = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // if value was changed in closed state - treat it as accepted
    if (!isOpen && !utils.isEqual(pickerDate, date)) {
      setPickerDate(date);
    }
  }, [date, isOpen, pickerDate, utils]);
  var acceptDate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (acceptedDate) {
    _onChange(acceptedDate);

    if (onAccept) {
      onAccept(acceptedDate);
    }

    setIsOpen(false);
  }, [onAccept, _onChange, setIsOpen]);
  var wrapperProps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return {
      format: format,
      open: isOpen,
      onClear: function onClear() {
        return acceptDate(null);
      },
      onAccept: function onAccept() {
        return acceptDate(pickerDate);
      },
      onSetToday: function onSetToday() {
        return setPickerDate(utils.date());
      },
      onDismiss: function onDismiss() {
        setIsOpen(false);
      }
    };
  }, [acceptDate, format, isOpen, pickerDate, setIsOpen, utils]);
  var pickerProps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return {
      date: pickerDate,
      onChange: function onChange(newDate) {
        var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        setPickerDate(newDate);

        if (isFinish && autoOk) {
          acceptDate(newDate);
          return;
        } // simulate autoOk, but do not close the modal


        if (variant === 'inline' || variant === 'static') {
          _onChange(newDate);

          onAccept && onAccept(newDate);
        }
      }
    };
  }, [acceptDate, autoOk, onAccept, _onChange, pickerDate, variant]);
  var validationError = validate(value, utils, props);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (onError) {
      onError(validationError, value);
    }
  }, [onError, validationError, value]);
  var inputValue = getDisplayDate(date, format, utils, value === null, props);
  var inputProps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return {
      inputValue: inputValue,
      validationError: validationError,
      openPicker: function openPicker() {
        return !readOnly && !disabled && setIsOpen(true);
      }
    };
  }, [disabled, inputValue, readOnly, setIsOpen, validationError]);
  var pickerState = {
    pickerProps: pickerProps,
    inputProps: inputProps,
    wrapperProps: wrapperProps
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(pickerState);
  return pickerState;
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function parseInputString(value, utils, format) {
  try {
    return utils.parse(value, format);
  } catch (_unused) {
    return null;
  }
}

function useKeyboardPickerState(props, options) {
  var _props$format = props.format,
      format = _props$format === void 0 ? options.getDefaultFormat() : _props$format,
      inputValue = props.inputValue,
      _onChange = props.onChange,
      value = props.value;
  var utils = (0,_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_19__.u)();
  var displayDate = getDisplayDate(value, format, utils, value === null, props);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(displayDate),
      _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
      innerInputValue = _useState2[0],
      setInnerInputValue = _useState2[1];

  var dateValue = inputValue ? parseInputString(inputValue, utils, format) : value;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (value === null || utils.isValid(value)) {
      setInnerInputValue(displayDate);
    }
  }, [displayDate, setInnerInputValue, utils, value]);
  var handleKeyboardChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (date) {
    _onChange(date, date === null ? null : utils.format(date, format));
  }, [format, _onChange, utils]);

  var _usePickerState = usePickerState( // Extend props interface
  _objectSpread$2({}, props, {
    value: dateValue,
    onChange: handleKeyboardChange
  }), options),
      innerInputProps = _usePickerState.inputProps,
      wrapperProps = _usePickerState.wrapperProps,
      pickerProps = _usePickerState.pickerProps;

  var inputProps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return _objectSpread$2({}, innerInputProps, {
      // reuse validation and open/close logic
      format: wrapperProps.format,
      inputValue: inputValue || innerInputValue,
      onChange: function onChange(value) {
        setInnerInputValue(value || '');
        var date = value === null ? null : utils.parse(value, wrapperProps.format);

        _onChange(date, value);
      }
    });
  }, [innerInputProps, innerInputValue, inputValue, _onChange, utils, wrapperProps.format]);
  return {
    inputProps: inputProps,
    wrapperProps: wrapperProps,
    pickerProps: pickerProps
  };
}

function makePickerWithState(_ref) {
  var Input = _ref.Input,
      useState = _ref.useState,
      useOptions = _ref.useOptions,
      getCustomProps = _ref.getCustomProps,
      DefaultToolbarComponent = _ref.DefaultToolbarComponent;

  function PickerWithState(props) {
    var allowKeyboardControl = props.allowKeyboardControl,
        ampm = props.ampm,
        animateYearScrolling = props.animateYearScrolling,
        autoOk = props.autoOk,
        dateRangeIcon = props.dateRangeIcon,
        disableFuture = props.disableFuture,
        disablePast = props.disablePast,
        disableToolbar = props.disableToolbar,
        emptyLabel = props.emptyLabel,
        format = props.format,
        forwardedRef = props.forwardedRef,
        hideTabs = props.hideTabs,
        initialFocusedDate = props.initialFocusedDate,
        invalidDateMessage = props.invalidDateMessage,
        invalidLabel = props.invalidLabel,
        labelFunc = props.labelFunc,
        leftArrowButtonProps = props.leftArrowButtonProps,
        leftArrowIcon = props.leftArrowIcon,
        loadingIndicator = props.loadingIndicator,
        maxDate = props.maxDate,
        maxDateMessage = props.maxDateMessage,
        minDate = props.minDate,
        minDateMessage = props.minDateMessage,
        minutesStep = props.minutesStep,
        onAccept = props.onAccept,
        onChange = props.onChange,
        onClose = props.onClose,
        onMonthChange = props.onMonthChange,
        onOpen = props.onOpen,
        onYearChange = props.onYearChange,
        openTo = props.openTo,
        orientation = props.orientation,
        renderDay = props.renderDay,
        rightArrowButtonProps = props.rightArrowButtonProps,
        rightArrowIcon = props.rightArrowIcon,
        shouldDisableDate = props.shouldDisableDate,
        strictCompareDates = props.strictCompareDates,
        timeIcon = props.timeIcon,
        _props$ToolbarCompone = props.ToolbarComponent,
        ToolbarComponent = _props$ToolbarCompone === void 0 ? DefaultToolbarComponent : _props$ToolbarCompone,
        value = props.value,
        variant = props.variant,
        views = props.views,
        other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(props, ["allowKeyboardControl", "ampm", "animateYearScrolling", "autoOk", "dateRangeIcon", "disableFuture", "disablePast", "disableToolbar", "emptyLabel", "format", "forwardedRef", "hideTabs", "initialFocusedDate", "invalidDateMessage", "invalidLabel", "labelFunc", "leftArrowButtonProps", "leftArrowIcon", "loadingIndicator", "maxDate", "maxDateMessage", "minDate", "minDateMessage", "minutesStep", "onAccept", "onChange", "onClose", "onMonthChange", "onOpen", "onYearChange", "openTo", "orientation", "renderDay", "rightArrowButtonProps", "rightArrowIcon", "shouldDisableDate", "strictCompareDates", "timeIcon", "ToolbarComponent", "value", "variant", "views"]);

    var injectedProps = getCustomProps ? getCustomProps(props) : {};
    var options = useOptions(props);

    var _useState = useState(props, options),
        pickerProps = _useState.pickerProps,
        inputProps = _useState.inputProps,
        wrapperProps = _useState.wrapperProps;

    return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_20__.W, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
      variant: variant,
      InputComponent: Input,
      DateInputProps: inputProps
    }, injectedProps, wrapperProps, other), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Picker_ccd9ba90_js__WEBPACK_IMPORTED_MODULE_21__.P, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, pickerProps, {
      allowKeyboardControl: allowKeyboardControl,
      ampm: ampm,
      animateYearScrolling: animateYearScrolling,
      dateRangeIcon: dateRangeIcon,
      disableFuture: disableFuture,
      disablePast: disablePast,
      disableToolbar: disableToolbar,
      hideTabs: hideTabs,
      leftArrowButtonProps: leftArrowButtonProps,
      leftArrowIcon: leftArrowIcon,
      loadingIndicator: loadingIndicator,
      maxDate: maxDate,
      minDate: minDate,
      minutesStep: minutesStep,
      onMonthChange: onMonthChange,
      onYearChange: onYearChange,
      openTo: openTo,
      orientation: orientation,
      renderDay: renderDay,
      rightArrowButtonProps: rightArrowButtonProps,
      rightArrowIcon: rightArrowIcon,
      shouldDisableDate: shouldDisableDate,
      strictCompareDates: strictCompareDates,
      timeIcon: timeIcon,
      ToolbarComponent: ToolbarComponent,
      views: views
    })));
  }

  return PickerWithState;
}


//# sourceMappingURL=makePickerWithState-5a79cb8a.js.map


/***/ }),

/***/ "./node_modules/autosize/dist/autosize.js":
/*!************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.js ***!
  \************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ "./resources/js/src/@coremat/CmtAvatarGroup/index.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/@coremat/CmtAvatarGroup/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./resources/js/src/@coremat/CmtObjectSummary/CmtObjectSummary.style.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/@coremat/CmtObjectSummary/CmtObjectSummary.style.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      '&.vertical': {
        flexDirection: 'column',
        textAlign: 'center'
      },
      '&.horizontal': {
        '& $userInfo': {
          marginLeft: 15,
          marginTop: 0
        }
      }
    },
    badgeRoot: {
      backgroundColor: 'white',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.15)',
      borderRadius: 30,
      padding: '4px',
      display: 'flex',
      alignItems: 'center'
    },
    badgeAvatarRoot: {
      position: 'relative',
      '&.top.center': {
        marginTop: 14
      },
      '&.top.center .MuiBadge-badge': {
        top: 0,
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
      '&.bottom.left, &.bottom.center, &.bottom.right': {
        marginBottom: 14,
        '& .vertical': {
          paddingBottom: 16
        }
      },
      '&.bottom.center .MuiBadge-badge': {
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%, 50%)'
      }
    },
    userInfo: {
      position: 'relative',
      marginTop: 6
    },
    title: {
      fontSize: 14,
      color: theme.palette.text.primary,
      margin: 0
    },
    subTitle: {
      fontSize: 12,
      color: theme.palette.text.secondary,
      margin: 0
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./resources/js/src/@coremat/CmtObjectSummary/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/@coremat/CmtObjectSummary/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Badge/Badge.js");
/* harmony import */ var _CmtAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CmtAvatar */ "./resources/js/src/@coremat/CmtAvatar/index.js");
/* harmony import */ var _CmtObjectSummary_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CmtObjectSummary.style */ "./resources/js/src/@coremat/CmtObjectSummary/CmtObjectSummary.style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var CmtObjectSummary = function CmtObjectSummary(_ref) {
  var align = _ref.align,
      anchorOrigin = _ref.anchorOrigin,
      showItemBadge = _ref.showItemBadge,
      avatar = _ref.avatar,
      avatarProps = _ref.avatarProps,
      badge = _ref.badge,
      badgeProps = _ref.badgeProps,
      title = _ref.title,
      titleProps = _ref.titleProps,
      subTitle = _ref.subTitle,
      subTitleProps = _ref.subTitleProps;
  var classes = (0,_CmtObjectSummary_style__WEBPACK_IMPORTED_MODULE_3__["default"])({
    align: align,
    anchorOrigin: anchorOrigin
  });

  var badgeContent = _objectSpread({
    badgeContent: badge,
    color: 'secondary'
  }, badgeProps);

  if (typeof badge !== 'string') {
    var node = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.badgeRoot, 'Cmt-badge'),
      children: badge
    });

    badgeContent = _objectSpread({
      badgeContent: node
    }, badgeProps);
  }

  var getAvatarComponent = function getAvatarComponent() {
    if (showItemBadge) {
      if (typeof avatar === 'string') {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CmtAvatar__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({
          src: avatar,
          alt: title
        }, avatarProps));
      }

      return avatar;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(RenderBadge, {
      badge: badge,
      anchorOrigin: anchorOrigin,
      badgeContent: badgeContent,
      classes: classes,
      children: typeof avatar === 'string' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CmtAvatar__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({
        src: avatar,
        alt: title
      }, avatarProps)) : avatar
    });
  };

  var componentContent = function componentContent() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.root, align),
      children: [getAvatarComponent(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.userInfo, 'Cmt-user-info'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({
          component: "p",
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.title, 'Cmt-title')
        }, titleProps), {}, {
          children: title
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({
          component: "p",
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.subTitle, 'Cmt-sub-title')
        }, subTitleProps), {}, {
          children: subTitle
        }))]
      })]
    });
  };

  var getComponent = function getComponent() {
    if (showItemBadge) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(RenderBadge, {
        badge: badge,
        anchorOrigin: anchorOrigin,
        badgeContent: badgeContent,
        classes: classes,
        children: componentContent()
      });
    }

    return componentContent();
  };

  return getComponent();
};

var RenderBadge = function RenderBadge(_ref2) {
  var badge = _ref2.badge,
      badgeContent = _ref2.badgeContent,
      anchorOrigin = _ref2.anchorOrigin,
      classes = _ref2.classes,
      children = _ref2.children;
  return badge ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.badgeAvatarRoot, 'Cmt-badge-avatar', anchorOrigin.vertical, anchorOrigin.horizontal)
  }, badgeContent), {}, {
    anchorOrigin: anchorOrigin,
    children: children
  })) : children;
};

CmtObjectSummary.prototype = {
  avatar: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().element)]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().element)]),
  badge: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().element)]),
  subTitle: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().element)]),
  avatarProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  badgeProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  showItemBadge: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  align: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  anchorOrigin: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  titleProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  subTitleProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)
};
CmtObjectSummary.defaultProps = {
  align: 'horizontal',
  showItemBadge: false,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(CmtObjectSummary));

/***/ }),

/***/ "./resources/js/src/@fake-db/apps/kanban-board.js":
/*!********************************************************!*\
  !*** ./resources/js/src/@fake-db/apps/kanban-board.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kanbanBoard": () => (/* binding */ kanbanBoard)
/* harmony export */ });
/* harmony import */ var _jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@jumbo/utils/dateHelper */ "./resources/js/src/@jumbo/utils/dateHelper.js");

var kanbanBoard = {
  boards: {
    lanes: [{
      currentPage: 1,
      id: 'board-tasks',
      title: 'Tasks',
      cards: [{
        id: 1,
        laneId: 'board-tasks',
        title: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random',
        description: '',
        memberIds: [1, 3],
        dueDate: new Date(2021, 6, 30),
        activities: [{
          id: 3,
          user: {
            id: 1,
            name: 'Albert Hall',
            profilePic: 'https://via.placeholder.com/150x150',
            email: 'albert-hall@example.com'
          },
          comment: 'This is my first comment',
          type: 'comment',
          isCover: true,
          createdAt: (0,_jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_0__.getCustomDateObject)(-1, 'day')
        }, {
          id: 2,
          user: {
            id: 1,
            name: 'Albert Hall',
            profilePic: 'https://via.placeholder.com/150x150/',
            email: 'albert-hall@example.com'
          },
          name: 'avatar3.jpg',
          thumbnail: 'https://via.placeholder.com/150x150',
          fullImage: 'https://via.placeholder.com/500x300',
          metaData: {
            type: 'image/jpg',
            size: 8637
          },
          type: 'attachment',
          isCover: true,
          createdAt: (0,_jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_0__.getCustomDateObject)(-1.16, 'day')
        }, {
          id: 1,
          user: {
            id: 1,
            name: 'Albert Hall',
            profilePic: 'https://via.placeholder.com/150x150',
            email: 'albert-hall@example.com'
          },
          content: 'added this card to Tasks.',
          type: 'activity',
          createdAt: (0,_jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_0__.getCustomDateObject)(-9, 'hours')
        }]
      }]
    }, {
      currentPage: 1,
      id: 'board-progress',
      title: 'In Progress',
      cards: []
    }, {
      currentPage: 1,
      id: 'board-done',
      title: 'Done',
      cards: []
    }]
  },
  members: [{
    id: 1,
    name: 'Albert Hall',
    profilePic: 'https://via.placeholder.com/150',
    email: 'albert-hall@example.com'
  }, {
    id: 2,
    name: 'John Lee',
    profilePic: 'https://via.placeholder.com/150',
    email: 'john-lee@example.com'
  }, {
    id: 3,
    name: 'Jackson Mucha',
    profilePic: 'https://via.placeholder.com/150',
    email: 'jackson-mucha@example.com'
  }, {
    id: 4,
    name: 'Jonty Rhodes',
    profilePic: 'https://via.placeholder.com/150',
    email: 'jonty-rhodese@example.com'
  }, {
    id: 5,
    name: 'Jonathan Twose',
    profilePic: 'https://via.placeholder.com/150',
    email: 'jonathan-twose@example.com'
  }, {
    id: 6,
    name: 'Shane Krypto',
    profilePic: 'https://via.placeholder.com/150',
    email: 'shane-krypto@example.com'
  }, {
    id: 7,
    name: 'Lisa Den',
    profilePic: 'https://via.placeholder.com/150',
    email: 'lisa-den@example.com'
  }, {
    id: 8,
    name: 'Cheeni Kam',
    profilePic: 'https://via.placeholder.com/150',
    email: 'cheeni-kam@example.com'
  }, {
    id: 9,
    name: 'Chilbram Putty',
    profilePic: 'https://via.placeholder.com/150',
    email: 'chilbran-putty@example.com'
  }, {
    id: 10,
    name: 'Danny Morris',
    profilePic: 'https://via.placeholder.com/150',
    email: 'banny-morris@example.com'
  }]
};

/***/ }),

/***/ "./resources/js/src/@jumbo/components/Common/CustomScrollbar/index.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/@jumbo/components/Common/CustomScrollbar/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var CustomScrollbar = function CustomScrollbar(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, restProps), {}, {
    children: children
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomScrollbar);

/***/ }),

/***/ "./resources/js/src/@jumbo/components/Common/TextToHtml/index.js":
/*!***********************************************************************!*\
  !*** ./resources/js/src/@jumbo/components/Common/TextToHtml/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _utils_commonHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/commonHelper */ "./resources/js/src/@jumbo/utils/commonHelper.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["content"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var TextToHtml = function TextToHtml(_ref) {
  var content = _ref.content,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({
    component: "p"
  }, restProps), {}, {
    dangerouslySetInnerHTML: {
      __html: (0,_utils_commonHelper__WEBPACK_IMPORTED_MODULE_1__.linkify)(content.replace(/(?:\r\n|\r|\n)/g, '<br />'))
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(TextToHtml));

/***/ }),

/***/ "./resources/js/src/@jumbo/components/Common/formElements/AppDatePicker.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/@jumbo/components/Common/formElements/AppDatePicker.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/DatePicker.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["name", "id", "fullWidth", "size", "value", "onChange", "helperText", "variant", "format", "inputVariant", "error"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var AppDatePicker = function AppDatePicker(_ref) {
  var name = _ref.name,
      id = _ref.id,
      fullWidth = _ref.fullWidth,
      size = _ref.size,
      value = _ref.value,
      onChange = _ref.onChange,
      helperText = _ref.helperText,
      variant = _ref.variant,
      format = _ref.format,
      inputVariant = _ref.inputVariant,
      error = _ref.error,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_2__.KeyboardDatePicker, _objectSpread(_objectSpread({
    variant: variant,
    inputVariant: inputVariant,
    format: format,
    name: name,
    id: id || name,
    fullWidth: fullWidth,
    size: size,
    value: value,
    onChange: onChange,
    helperText: helperText,
    error: error || helperText !== '',
    KeyboardButtonProps: {
      'aria-label': 'change date'
    }
  }, rest), {}, {
    className: "form-control"
  }));
};

AppDatePicker.prototype = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  variant: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  format: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  inputVariant: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  helperText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
AppDatePicker.defaultProps = {
  fullWidth: true,
  variant: 'dialog',
  inputVariant: 'standard',
  format: 'YYYY-MM-DD',
  size: 'small',
  error: false,
  helperText: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppDatePicker);

/***/ }),

/***/ "./resources/js/src/@jumbo/utils/fileHelper.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/@jumbo/utils/fileHelper.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "downloadFile": () => (/* binding */ downloadFile),
/* harmony export */   "getAssetsUrl": () => (/* binding */ getAssetsUrl),
/* harmony export */   "getFileExtension": () => (/* binding */ getFileExtension),
/* harmony export */   "getFileName": () => (/* binding */ getFileName)
/* harmony export */ });
var getFileExtension = function getFileExtension(filename) {
  if (filename) return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
  return null;
};
var getFileName = function getFileName(fileUrl) {
  var removeExt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var filename = fileUrl.split('/').pop();

  if (removeExt) {
    return filename.split('.').slice(0, -1).join('.');
  }

  return filename;
};
var downloadFile = function downloadFile(fileUrl) {
  var downloadFileName = getFileName(fileUrl);
  var link = document.createElement('a');
  link.href = fileUrl;
  link.target = '_blank';
  link.setAttribute('download', downloadFileName); //or any other extension

  document.body.appendChild(link);
  link.click();
  link.parentNode.removeChild(link);
};
var getAssetsUrl = function getAssetsUrl(fileUrl) {
  return "/images/".concat(fileUrl);
};

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/AddCardButton.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/AddCardButton.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Add.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var AddCardButton = function AddCardButton(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"], {
    mt: 2,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "primary",
      onClick: onClick,
      startIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
      children: "Add a card"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddCardButton);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/AddNewCard/index.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/AddNewCard/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Close.js");
/* harmony import */ var _jumbo_components_Common_formElements_AppTextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@jumbo/components/Common/formElements/AppTextInput */ "./resources/js/src/@jumbo/components/Common/formElements/AppTextInput.js");
/* harmony import */ var _jumbo_utils_commonHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@jumbo/utils/commonHelper */ "./resources/js/src/@jumbo/utils/commonHelper.js");
/* harmony import */ var _fake_db_apps_kanban_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fake-db/apps/kanban-board */ "./resources/js/src/@fake-db/apps/kanban-board.js");
/* harmony import */ var _coremat_CmtCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@coremat/CmtCard */ "./resources/js/src/@coremat/CmtCard/index.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.style */ "./resources/js/src/routes/Apps/KanbanBoard/AddNewCard/index.style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var user = _fake_db_apps_kanban_board__WEBPACK_IMPORTED_MODULE_3__.kanbanBoard.members[0];

var AddNewCard = function AddNewCard(_ref) {
  var onAdd = _ref.onAdd,
      onCancel = _ref.onCancel;
  var classes = (0,_index_style__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var onCardSave = function onCardSave() {
    if (title.trim()) {
      var card = {
        id: (0,_jumbo_utils_commonHelper__WEBPACK_IMPORTED_MODULE_2__.idGenerator)(),
        title: title,
        description: '',
        dueDate: null,
        memberIds: [],
        activities: [{
          id: (0,_jumbo_utils_commonHelper__WEBPACK_IMPORTED_MODULE_2__.idGenerator)(),
          user: user,
          content: 'added this card to Tasks.',
          type: 'activity',
          createdAt: new Date()
        }]
      };
      onAdd(card);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coremat_CmtCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
      p: 4,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        mb: 4,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_jumbo_components_Common_formElements_AppTextInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
          placeholder: "Enter a title...",
          fullWidth: true,
          multiline: true,
          value: title,
          onChange: function onChange(e) {
            return setTitle(e.target.value);
          },
          variant: "outlined"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        display: "flex",
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "contained",
          color: "primary",
          size: "small",
          onClick: onCardSave,
          children: "Add Card"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
          ml: 1,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], {
            size: "small",
            onClick: onCancel,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["default"], {
              fontSize: "medium"
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddNewCard);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/AddNewCard/index.style.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/AddNewCard/index.style.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return {
    root: {
      marginTop: 12
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/ActivityItem.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/ActivityItem.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.style */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/index.style.js");
/* harmony import */ var _coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@coremat/CmtAvatar */ "./resources/js/src/@coremat/CmtAvatar/index.js");
/* harmony import */ var _jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@jumbo/utils/dateHelper */ "./resources/js/src/@jumbo/utils/dateHelper.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var ActivityItem = function ActivityItem(_ref) {
  var activity = _ref.activity;
  var classes = (0,_index_style__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: classes.activityItemRoot,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: classes.avatarWrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: 32,
        src: activity.user.profilePic,
        alt: activity.user.name
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: classes.activityContentWrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: classes.activityContent,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: classes.username,
          children: activity.user.name
        }), activity.content]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: classes.dateTime,
        children: (0,_jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_3__.getTimeDiffString)(activity.createdAt, 'MMM DD, YYYY [at] h:ss A', 'ago')
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityItem);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/AttachmentItem.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/AttachmentItem.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.style */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/index.style.js");
/* harmony import */ var _coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@coremat/CmtAvatar */ "./resources/js/src/@coremat/CmtAvatar/index.js");
/* harmony import */ var _jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@jumbo/utils/dateHelper */ "./resources/js/src/@jumbo/utils/dateHelper.js");
/* harmony import */ var _coremat_CmtImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@coremat/CmtImage */ "./resources/js/src/@coremat/CmtImage/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var AttachmentItem = function AttachmentItem(_ref) {
  var activity = _ref.activity;
  var classes = (0,_index_style__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var isImage = activity.metaData.type.toLowerCase().includes('image');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: classes.activityItemRoot,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: classes.avatarWrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: 32,
        src: activity.user.profilePic,
        alt: activity.user.name
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: classes.activityContentWrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: classes.activityContent,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: classes.username,
          children: activity.user.name
        }), " attached ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
          href: activity.fullImage,
          children: activity.name
        }), " to this card ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: classes.dateTime,
          children: (0,_jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_3__.getTimeDiffString)(activity.createdAt, 'MMM DD, YYYY [at] h:ss A', 'ago')
        })]
      }), isImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: classes.attachmentWrapper,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coremat_CmtImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: classes.attachmentImage,
          src: activity.fullImage,
          alt: activity.name
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttachmentItem);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/CommentBox.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/CommentBox.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@coremat/CmtAvatar */ "./resources/js/src/@coremat/CmtAvatar/index.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.style */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/index.style.js");
/* harmony import */ var _jumbo_utils_commonHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@jumbo/utils/commonHelper */ "./resources/js/src/@jumbo/utils/commonHelper.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/ClickAwayListener/ClickAwayListener.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var CommentBox = function CommentBox(_ref) {
  var user = _ref.user,
      onSubmitComment = _ref.onSubmitComment;
  var classes = (0,_index_style__WEBPACK_IMPORTED_MODULE_2__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      comment = _useState2[0],
      setComment = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFocused = _useState4[0],
      setFocused = _useState4[1];

  var onCommentBoxFocus = function onCommentBoxFocus() {
    return setFocused(true);
  };

  var handleClickAway = function handleClickAway() {
    return setFocused(false);
  };

  var handleCommentSubmit = function handleCommentSubmit() {
    if (comment.trim()) {
      var newComment = {
        id: (0,_jumbo_utils_commonHelper__WEBPACK_IMPORTED_MODULE_3__.idGenerator)(),
        comment: comment,
        user: user,
        type: 'comment',
        createdAt: new Date()
      };
      onSubmitComment(newComment);
      setFocused(false);
      setComment('');
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: classes.commentBoxRoot,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: classes.avatarWrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        size: 32,
        src: user.profilePic,
        alt: user.name
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClickAway: handleClickAway,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.commentFrame, _defineProperty({}, classes.isFocused, isFocused || comment)),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: classes.commentBox,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
            placeholder: "Write a comment...",
            value: comment,
            onChange: function onChange(e) {
              return setComment(e.target.value);
            },
            onFocus: onCommentBoxFocus
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
            mt: 3,
            textAlign: "right",
            className: classes.commentControls,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
              variant: "contained",
              color: "primary",
              size: "small",
              disabled: !comment,
              onClick: handleCommentSubmit,
              children: "Save"
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentBox);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/CommentItem.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/CommentItem.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.style */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/index.style.js");
/* harmony import */ var _coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@coremat/CmtAvatar */ "./resources/js/src/@coremat/CmtAvatar/index.js");
/* harmony import */ var _jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@jumbo/utils/dateHelper */ "./resources/js/src/@jumbo/utils/dateHelper.js");
/* harmony import */ var _jumbo_components_Common_TextToHtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@jumbo/components/Common/TextToHtml */ "./resources/js/src/@jumbo/components/Common/TextToHtml/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var CommentItem = function CommentItem(_ref) {
  var activity = _ref.activity;
  var classes = (0,_index_style__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: classes.activityItemRoot,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: classes.avatarWrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: 32,
        src: activity.user.profilePic,
        alt: activity.user.name
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: classes.activityContentWrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: classes.activityContent,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: classes.username,
          children: activity.user.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: classes.dateTime,
          children: (0,_jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_3__.getTimeDiffString)(activity.createdAt, 'MMM DD, YYYY [at] h:ss A', 'ago')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_Common_TextToHtml__WEBPACK_IMPORTED_MODULE_4__["default"], {
        content: activity.comment,
        className: classes.commentWrapper
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentItem);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/index.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.style */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/index.style.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/List.js");
/* harmony import */ var _ActivityItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActivityItem */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/ActivityItem.js");
/* harmony import */ var _AttachmentItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttachmentItem */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/AttachmentItem.js");
/* harmony import */ var _CommentItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentItem */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/CommentItem.js");
/* harmony import */ var _CommentBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommentBox */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/CommentBox.js");
/* harmony import */ var _SectionHeading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SectionHeading */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/SectionHeading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










var ACTIVITY_COMPONENT = {
  activity: _ActivityItem__WEBPACK_IMPORTED_MODULE_2__["default"],
  attachment: _AttachmentItem__WEBPACK_IMPORTED_MODULE_3__["default"],
  comment: _CommentItem__WEBPACK_IMPORTED_MODULE_4__["default"]
};

var Activities = function Activities(_ref) {
  var data = _ref.data,
      user = _ref.user,
      onSubmitComment = _ref.onSubmitComment;
  var classes = (0,_index_style__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_SectionHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
      iconComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
      headingComponent: "Activity"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CommentBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
      user: user,
      onSubmitComment: onSubmitComment
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: classes.activitiesContainer,
      children: data.map(function (activity, index) {
        var Component = ACTIVITY_COMPONENT[activity.type];
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Component, {
          activity: activity
        }, index);
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Activities);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/index.style.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/index.style.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {
      position: 'relative',
      width: '100%'
    },
    activitiesContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
    activityItemRoot: {
      display: 'flex',
      marginBottom: 16,
      '&:last-child': {
        marginBottom: 0
      }
    },
    activityContentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    },
    activityContent: {
      marginBottom: 5,
      fontSize: 14,
      color: theme.palette.text.secondary,
      '& a': {
        color: theme.palette.text.primary
      }
    },
    username: {
      color: theme.palette.text.primary,
      fontWeight: 'bold',
      marginRight: 5
    },
    dateTime: {
      color: theme.palette.text.disabled,
      padding: '0 3px 0 0',
      letterSpacing: 0.4,
      fontSize: 12,
      width: 'auto'
    },
    avatarWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      marginRight: 8
    },
    attachmentWrapper: {
      width: '100%'
    },
    attachmentImage: {
      maxHeight: 500,
      maxWidth: '100%',
      borderRadius: 4
    },
    commentWrapper: {
      padding: '10.5px 12px',
      border: "1px solid ".concat(theme.palette.text.disabled),
      borderRadius: 4
    },
    commentBoxRoot: {
      display: 'flex',
      marginBottom: 16
    },
    commentFrame: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    },
    commentBox: {
      color: theme.palette.text.primary,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      border: "1px solid ".concat((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.common.dark, 0.23)),
      borderRadius: 4,
      padding: '10.5px 12px',
      position: 'relative',
      transition: 'padding-bottom 85ms ease',
      '&:hover': {
        borderColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.common.dark, 0.87)
      },
      '& textarea': {
        color: 'inherit',
        font: 'inherit',
        boxSizing: 'content-box',
        padding: 0,
        minWidth: 0,
        width: '100%',
        background: 'none',
        border: 0,
        display: 'block',
        margin: 0,
        resize: 'none',
        outline: 0,
        animationName: 'mui-auto-fill-cancel'
      }
    },
    commentControls: {
      opacity: 0,
      position: 'absolute',
      bottom: 10.5,
      left: 12,
      transform: 'translateY(48px)',
      transition: 'opacity,transform 85ms ease'
    },
    isFocused: {
      '& $commentBox': {
        paddingBottom: 56,
        borderWidth: 1,
        borderColor: theme.palette.primary.main
      },
      '& $commentControls': {
        opacity: 1,
        transform: 'translateY(0)'
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Attachments/AttachmentItem.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Attachments/AttachmentItem.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/AttachFile.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/OpenInNew.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/VideoLabel.js");
/* harmony import */ var _jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@jumbo/utils/dateHelper */ "./resources/js/src/@jumbo/utils/dateHelper.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.style */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Attachments/index.style.js");
/* harmony import */ var _jumbo_utils_fileHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@jumbo/utils/fileHelper */ "./resources/js/src/@jumbo/utils/fileHelper.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var AttachmentItem = function AttachmentItem(_ref) {
  var attachment = _ref.attachment,
      updateAttachment = _ref.updateAttachment;
  var classes = (0,_index_style__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var createdAt = (0,_jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_1__.getTimeDiffString)(attachment.createdAt, 'MMM DD, YYYY [at] h:ss A', 'ago');

  var disableDefaultEvent = function disableDefaultEvent(event) {
    return event.preventDefault();
  };

  var onCoverAdd = function onCoverAdd(event) {
    event.preventDefault();
    updateAttachment(_objectSpread(_objectSpread({}, attachment), {}, {
      isCover: true
    }), true);
  };

  var onCoverRemove = function onCoverRemove(event) {
    event.preventDefault();
    updateAttachment(_objectSpread(_objectSpread({}, attachment), {}, {
      isCover: false
    }));
  };

  var fileExtension = (0,_jumbo_utils_fileHelper__WEBPACK_IMPORTED_MODULE_3__.getFileExtension)(attachment.name);
  var isImage = attachment.metaData.type.toLowerCase().includes('image');
  var inlineStyle = isImage ? {
    backgroundImage: "url(".concat(attachment.fullImage, ")")
  } : null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: classes.thumbnailRoot,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
      className: classes.thumbnailPreview,
      href: attachment.fullImage,
      style: inlineStyle,
      onClick: disableDefaultEvent,
      children: !isImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: classes.thumbnailPreviewText,
        children: fileExtension || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["default"], {})
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: classes.thumbnailDetails,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: classes.thumbnailTitleInfo,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: classes.thumbnailTitle,
          children: attachment.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
          className: classes.thumbnailTitleAction,
          href: attachment.fullImage,
          target: "_blank",
          rel: "noreferrer nofollow noopener",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
        className: classes.thumbnailActionOptions,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          children: ["Added", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: classes.dateTime,
            title: createdAt,
            children: createdAt
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
            className: "options-item",
            href: 'comment',
            onClick: disableDefaultEvent,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "options-item-text",
              children: "Comment"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
            className: "options-item",
            href: 'delete',
            onClick: disableDefaultEvent,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "options-item-text",
              children: "Delete"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
            className: "options-item",
            href: 'edit',
            onClick: disableDefaultEvent,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "options-item-text",
              children: "Edit"
            })
          })
        })]
      }), isImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: classes.thumbnailActionOptions,
        children: attachment.isCover ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
          className: "options-item d-flex",
          href: 'remove-cover',
          onClick: onCoverRemove,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["default"], {
            fontSize: "small",
            className: "options-item-icon"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "options-item-text",
            children: "Remove cover"
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
          className: "options-item d-flex",
          href: 'make-cover',
          onClick: onCoverAdd,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["default"], {
            fontSize: "small",
            className: "options-item-icon"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "options-item-text",
            children: "Make cover"
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(AttachmentItem));

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Attachments/index.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Attachments/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Attachment.js");
/* harmony import */ var _coremat_CmtList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@coremat/CmtList */ "./resources/js/src/@coremat/CmtList/index.js");
/* harmony import */ var _SectionHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SectionHeading */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/SectionHeading.js");
/* harmony import */ var _AttachmentItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttachmentItem */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Attachments/AttachmentItem.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.style */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Attachments/index.style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var maxItemsShow = 4;

var Attachments = function Attachments(_ref) {
  var attachments = _ref.attachments,
      uploadRootProps = _ref.uploadRootProps,
      uploadInputProps = _ref.uploadInputProps,
      updateAttachment = _ref.updateAttachment;
  var classes = (0,_index_style__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(maxItemsShow),
      _useState2 = _slicedToArray(_useState, 2),
      maxVisibleItems = _useState2[0],
      setMaxVisibleItems = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showMoreLess = _useState4[0],
      setMoreLessStatus = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setMoreLessStatus(attachments.length > maxItemsShow);
  }, [attachments]);

  var onMoreClick = function onMoreClick(event) {
    event.preventDefault();
    setMaxVisibleItems(attachments.length);
  };

  var onLessClick = function onLessClick(event) {
    event.preventDefault();
    setMaxVisibleItems(maxItemsShow);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SectionHeading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      iconComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
      headingComponent: "Attachments"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
      pl: 10,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coremat_CmtList__WEBPACK_IMPORTED_MODULE_1__["default"], {
        data: attachments.slice(0, maxVisibleItems),
        renderRow: function renderRow(attachment) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AttachmentItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
            attachment: attachment,
            updateAttachment: updateAttachment
          }, attachment.id);
        }
      }), showMoreLess && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
        mb: 2,
        children: attachments.length > maxVisibleItems ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
          className: classes.buttonMoreLess,
          href: 'view-all',
          title: "View all attachments",
          onClick: onMoreClick,
          children: ["View all attachments (", attachments.length - maxVisibleItems, " hidden)"]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
          className: classes.buttonMoreLess,
          href: 'view-less',
          title: "Show fewer attachments",
          onClick: onLessClick,
          children: "Show fewer attachments"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread({}, uploadRootProps()), {}, {
        my: 2,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", _objectSpread({}, uploadInputProps())), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: classes.uploadButton,
          children: "Add an attachment"
        })]
      }))]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Attachments));

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Attachments/index.style.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Attachments/index.style.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {
      position: 'relative',
      width: '100%'
    },
    thumbnailRoot: {
      borderRadius: 4,
      minHeight: 80,
      margin: '0 0 8px',
      overflow: 'hidden',
      position: 'relative',
      '&:hover': {
        backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.04)
      }
    },
    thumbnailPreview: {
      backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.08),
      backgroundPosition: '50%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      borderRadius: 4,
      height: 80,
      marginTop: -40,
      position: 'absolute',
      top: '50%',
      left: 0,
      textAlign: 'center',
      textDecoration: 'none',
      zIndex: 1,
      width: 112
    },
    thumbnailPreviewText: {
      color: theme.palette.text.primary,
      display: 'flex',
      fontSize: 18,
      height: '100%',
      width: '100%',
      lineHeight: '80px',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      textTransform: 'uppercase'
    },
    thumbnailDetails: {
      boxSizing: 'border-box',
      cursor: 'pointer',
      fontSize: 14,
      color: theme.palette.text.secondary,
      padding: '8px 8px 8px 128px',
      minHeight: 80,
      margin: 0,
      zIndex: 0
    },
    thumbnailTitleInfo: {
      display: 'flex',
      alignItems: 'flex-end'
    },
    thumbnailTitle: {
      color: theme.palette.text.primary,
      fontWeight: 'bold'
    },
    thumbnailTitleAction: {
      color: theme.palette.text.secondary,
      display: 'flex',
      marginLeft: 8,
      '& .MuiSvgIcon-root': {
        fontSize: 16
      }
    },
    thumbnailActionOptions: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: 8,
      '& > span:not(:first-child)::before': {
        content: '" - "',
        marginLeft: 2
      },
      '& .options-item': {
        '&.d-flex': {
          display: 'flex',
          alignItems: 'flex-end'
        },
        '& .options-item-icon': {
          color: theme.palette.text.secondary,
          fontSize: 16,
          marginRight: 5
        },
        '& .options-item-text': {
          color: theme.palette.text.secondary,
          textDecoration: 'underline',
          '&:hover': {
            color: theme.palette.text.primary
          }
        }
      }
    },
    dateTime: {
      padding: '0 3px'
    },
    buttonMoreLess: {
      color: theme.palette.text.secondary,
      display: 'block',
      padding: '6px 8px',
      borderRadius: 4,
      textDecoration: 'underline',
      transition: 'background-color,border-color,box-shadow 85ms ease',
      '&:hover': {
        color: theme.palette.text.primary,
        backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.08),
        textDecoration: 'underline'
      }
    },
    uploadButton: {
      textTransform: 'none',
      backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.04),
      '&:hover': {
        backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.08)
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/SectionHeading.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/CardDetail/SectionHeading.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  return {
    root: {
      display: 'flex',
      marginBottom: 10
    },
    sectionAvatar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      marginRight: 8
    },
    sectionHeading: {
      display: 'flex',
      alignItems: 'center'
    }
  };
});

var SectionHeading = function SectionHeading(_ref) {
  var iconComponent = _ref.iconComponent,
      headingComponent = _ref.headingComponent;
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: classes.sectionAvatar,
      children: iconComponent
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: classes.sectionHeading,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "h3",
        component: "h3",
        children: headingComponent
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionHeading);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/index.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/CardDetail/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var _fake_db_apps_kanban_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@fake-db/apps/kanban-board */ "./resources/js/src/@fake-db/apps/kanban-board.js");
/* harmony import */ var _jumbo_components_Common_formElements_AppDatePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@jumbo/components/Common/formElements/AppDatePicker */ "./resources/js/src/@jumbo/components/Common/formElements/AppDatePicker.js");
/* harmony import */ var _jumbo_components_Common_formElements_AppTextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@jumbo/components/Common/formElements/AppTextInput */ "./resources/js/src/@jumbo/components/Common/formElements/AppTextInput.js");
/* harmony import */ var _jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@jumbo/utils/dateHelper */ "./resources/js/src/@jumbo/utils/dateHelper.js");
/* harmony import */ var _jumbo_utils_commonHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@jumbo/utils/commonHelper */ "./resources/js/src/@jumbo/utils/commonHelper.js");
/* harmony import */ var _coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@coremat/CmtAvatar */ "./resources/js/src/@coremat/CmtAvatar/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.style */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/index.style.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Close.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/AttachFile.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/DoneOutline.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/CalendarToday.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Cancel.js");
/* harmony import */ var _Activities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Activities */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Activities/index.js");
/* harmony import */ var _Attachments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Attachments */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/Attachments/index.js");
/* harmony import */ var _coremat_CmtAvatarGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../@coremat/CmtAvatarGroup */ "./resources/js/src/@coremat/CmtAvatarGroup/index.js");
/* harmony import */ var _coremat_CmtObjectSummary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../@coremat/CmtObjectSummary */ "./resources/js/src/@coremat/CmtObjectSummary/index.js");
/* harmony import */ var _components_MemberSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MemberSelector */ "./resources/js/src/routes/Apps/KanbanBoard/components/MemberSelector.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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





















var user = _fake_db_apps_kanban_board__WEBPACK_IMPORTED_MODULE_1__.kanbanBoard.members[0];

var CardDetail = function CardDetail(_ref) {
  var open = _ref.open,
      handleClose = _ref.handleClose,
      selectedCard = _ref.selectedCard,
      onCardUpdate = _ref.onCardUpdate,
      selectedLaneId = _ref.selectedLaneId;
  var classes = (0,_index_style__WEBPACK_IMPORTED_MODULE_7__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      dueDate = _useState6[0],
      setDueDate = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      memberIds = _useState8[0],
      setMemberIds = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      members = _useState10[0],
      setMembers = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      activities = _useState12[0],
      setActivities = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      attachments = _useState14[0],
      setAttachments = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      showDateInput = _useState16[0],
      setDateInputStatus = _useState16[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _useDropzone = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_14__.useDropzone)({
    multiple: true,
    onDrop: function onDrop(acceptedFiles) {
      var newCoverImage;
      var files = acceptedFiles.map(function (file) {
        var isImage = file.type.toLowerCase().includes('image');
        var newAttachment = {
          id: (0,_jumbo_utils_commonHelper__WEBPACK_IMPORTED_MODULE_5__.idGenerator)(),
          file: file,
          metaData: {
            type: file.type,
            size: file.size
          },
          name: file.name,
          thumbnail: URL.createObjectURL(file),
          fullImage: URL.createObjectURL(file),
          isCover: isImage,
          user: user,
          type: 'attachment',
          createdAt: new Date()
        };
        if (isImage) newCoverImage = newAttachment;
        return newAttachment;
      });
      setActivities(function (prevState) {
        var newState = [].concat(_toConsumableArray(files), _toConsumableArray(prevState));

        if (newCoverImage) {
          return newState.map(function (item) {
            return item.id === newCoverImage.id ? item : _objectSpread(_objectSpread({}, item), {}, {
              isCover: false
            });
          });
        }

        return newState;
      });
    }
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setTitle(selectedCard.title);
    setDescription(selectedCard.description);
    setDueDate(selectedCard.dueDate);
    setMemberIds(selectedCard.memberIds);
    setActivities(selectedCard.activities);
  }, [selectedCard]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setMembers(memberIds.map(function (id) {
      return _fake_db_apps_kanban_board__WEBPACK_IMPORTED_MODULE_1__.kanbanBoard.members.find(function (member) {
        return member.id === id;
      });
    }));
  }, [memberIds]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setAttachments(activities.filter(function (activity) {
      return activity.type === 'attachment';
    }));
  }, [activities]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    updateCardDetails();
  }, [dueDate, activities, members, title, description]);

  var onMembersClick = function onMembersClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var onMemberClick = function onMemberClick(member) {
    if (memberIds.includes(member.id)) {
      setMemberIds(function (prevState) {
        return prevState.filter(function (id) {
          return id !== member.id;
        });
      });
    } else {
      setMemberIds(function (prevState) {
        return [].concat(_toConsumableArray(prevState), [member.id]);
      });
    }
  };

  var handleMemberSelectorClose = function handleMemberSelectorClose() {
    setAnchorEl(null);
  };

  var updateCardDetails = function updateCardDetails() {
    onCardUpdate(_objectSpread(_objectSpread({}, selectedCard), {}, {
      title: title,
      description: description,
      dueDate: dueDate,
      memberIds: memberIds,
      activities: activities
    }), selectedLaneId);
  };

  var updateAttachment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (attachment, seCover) {
    if (seCover) {
      setActivities(activities.map(function (activity) {
        if (activity.type === 'attachment') {
          if (activity.id === attachment.id) {
            return attachment;
          }

          return _objectSpread(_objectSpread({}, activity), {}, {
            isCover: false
          });
        }

        return activity;
      }));
    } else {
      setActivities(function (prevState) {
        return prevState.map(function (activity) {
          return activity.id === attachment.id ? attachment : activity;
        });
      });
    }
  }, [activities]);

  var onSubmitComment = function onSubmitComment(newComment) {
    setActivities(function (prevState) {
      return [newComment].concat(_toConsumableArray(prevState));
    });
  };

  var coverImage = activities.find(function (activity) {
    return activity.type === 'attachment' && activity.isCover;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClose: handleClose,
    open: open,
    scroll: "body",
    maxWidth: "md",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
      className: classes.closeButton,
      onClick: handleClose,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_17__["default"], {})
    }), coverImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: classes.cardCover,
      style: {
        backgroundImage: "url(".concat(coverImage.fullImage, ")")
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: classes.root,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: classes.cardSection,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_jumbo_components_Common_formElements_AppTextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
          placeholder: "Title",
          multiline: true,
          fullWidth: true,
          value: title,
          onChange: function onChange(e) {
            return setTitle(e.target.value);
          },
          variant: "outlined",
          onMouseLeave: updateCardDetails
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_18__["default"], _objectSpread(_objectSpread({}, getRootProps()), {}, {
          className: "ml-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input", _objectSpread({}, getInputProps())), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
            edge: "end",
            style: {
              height: 40,
              width: 40
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_19__["default"], {})
          })]
        }))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: classes.cardSection,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: classes.rowLabelContainer,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label", {
            className: classes.rowLabel,
            children: "Members"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: classes.rowContent,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_18__["default"], {
            display: "flex",
            alignItems: "center",
            className: "pointer",
            onClick: onMembersClick,
            children: members.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_coremat_CmtAvatarGroup__WEBPACK_IMPORTED_MODULE_10__["default"], {
              items: members,
              srcKey: "profilePic",
              titleKey: "name",
              avatarSize: 34,
              tooltipProps: {
                classes: {
                  tooltip: classes.hoverMemberInfo
                }
              },
              renderItemSummary: function renderItemSummary(member) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_coremat_CmtObjectSummary__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  avatar: member.profilePic,
                  title: member.name,
                  subTitle: member.email,
                  avatarProps: {
                    variant: 'rounded',
                    size: 80
                  },
                  align: "horizontal"
                }, member.id);
              }
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
                src: null,
                size: 30,
                alt: "Member"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_18__["default"], {
                mx: 2,
                component: "span",
                children: "No Member"
              })]
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: classes.cardSection,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: classes.rowLabelContainer,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label", {
            className: classes.rowLabel,
            children: "Due Date"
          })
        }), showDateInput ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: classes.rowContent,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_jumbo_components_Common_formElements_AppDatePicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
            autoOk: true,
            format: "MMM DD, YYYY",
            placeholder: "Date",
            name: "date",
            value: dueDate,
            onChange: function onChange(value) {
              return setDueDate(value);
            },
            variant: "outlined",
            inputVariant: "outlined"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
            edge: "end",
            className: "ml-2",
            onClick: function onClick() {
              return setDateInputStatus(false);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_20__["default"], {
              fontSize: "small"
            })
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: classes.rowContent,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_21__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_18__["default"], {
            mx: 2,
            component: "span",
            title: "Click to edit",
            onClick: function onClick() {
              return setDateInputStatus(true);
            },
            children: dueDate ? (0,_jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_4__.getFormattedDate)(dueDate, 'MMM DD, YYYY') : 'No Due Date'
          }), dueDate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
            edge: "end",
            className: "clear-button",
            title: "Click to clear",
            onClick: function onClick() {
              return setDueDate(null);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_22__["default"], {
              fontSize: "small"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: classes.cardSection,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: classes.rowLabelContainer,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label", {
            className: classes.rowLabel,
            children: "Description"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: classes.rowContent,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_jumbo_components_Common_formElements_AppTextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
            placeholder: "Description",
            multiline: true,
            fullWidth: true,
            value: description,
            onChange: function onChange(e) {
              return setDescription(e.target.value);
            },
            variant: "outlined"
          })
        })]
      }), !!attachments.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: classes.cardSection,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Attachments__WEBPACK_IMPORTED_MODULE_9__["default"], {
          uploadRootProps: getRootProps,
          uploadInputProps: getInputProps,
          updateAttachment: updateAttachment,
          attachments: attachments
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: classes.cardSection,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Activities__WEBPACK_IMPORTED_MODULE_8__["default"], {
          data: activities,
          user: user,
          onSubmitComment: onSubmitComment
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_MemberSelector__WEBPACK_IMPORTED_MODULE_12__["default"], {
        anchorEl: anchorEl,
        memberIds: memberIds,
        onMemberClick: onMemberClick,
        onClose: handleMemberSelectorClose
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(CardDetail));

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/index.style.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/CardDetail/index.style.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {
      padding: 24,
      minHeight: 600,
      maxWidth: 750
    },
    closeButton: {
      position: 'absolute',
      top: 2,
      right: 2,
      padding: 5,
      zIndex: 2
    },
    cardCover: {
      backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.main, 0.08),
      backgroundPosition: 'center center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      cursor: 'pointer',
      padding: 0,
      position: 'relative',
      height: 160,
      transition: 'opacity 85ms',
      width: '100%',
      '&:hover': {
        opacity: 0.9
      }
    },
    cardSection: {
      display: 'flex',
      marginBottom: 20,
      width: '100%',
      '&:last-child': {
        marginBottom: 0
      }
    },
    rowLabelContainer: {
      display: 'flex',
      alignItems: 'center',
      height: 40
    },
    rowLabel: {
      width: 100
    },
    rowContent: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      '& .clear-button': {
        opacity: 0
      },
      '&:hover .clear-button': {
        opacity: 1
      }
    },
    hoverMemberInfo: {
      boxShadow: theme.shadows[4],
      padding: 5,
      marginTop: 4,
      marginBottom: 4,
      backgroundColor: theme.palette.background.paper,
      '& .horizontal .Cmt-user-info': {
        marginRight: 15
      },
      '& .Cmt-title': {
        marginBottom: 5
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/LaneCard/index.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/LaneCard/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.style */ "./resources/js/src/routes/Apps/KanbanBoard/LaneCard/index.style.js");
/* harmony import */ var _coremat_CmtCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@coremat/CmtCard */ "./resources/js/src/@coremat/CmtCard/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@jumbo/utils/dateHelper */ "./resources/js/src/@jumbo/utils/dateHelper.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/ChatBubbleOutline.js");
/* harmony import */ var _coremat_CmtCard_CmtCardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@coremat/CmtCard/CmtCardMedia */ "./resources/js/src/@coremat/CmtCard/CmtCardMedia.js");
/* harmony import */ var _components_DeleteConfirmation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DeleteConfirmation */ "./resources/js/src/routes/Apps/KanbanBoard/components/DeleteConfirmation.js");
/* harmony import */ var _coremat_CmtAvatarGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@coremat/CmtAvatarGroup */ "./resources/js/src/@coremat/CmtAvatarGroup/index.js");
/* harmony import */ var _coremat_CmtObjectSummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@coremat/CmtObjectSummary */ "./resources/js/src/@coremat/CmtObjectSummary/index.js");
/* harmony import */ var _fake_db_apps_kanban_board__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@fake-db/apps/kanban-board */ "./resources/js/src/@fake-db/apps/kanban-board.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var LaneCard = function LaneCard(_ref) {
  var onClick = _ref.onClick,
      showDeleteButton = _ref.showDeleteButton,
      onDelete = _ref.onDelete,
      title = _ref.title,
      memberIds = _ref.memberIds,
      dueDate = _ref.dueDate,
      activities = _ref.activities;
  var classes = (0,_index_style__WEBPACK_IMPORTED_MODULE_1__["default"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var attachment = activities.find(function (activity) {
    return activity.type === 'attachment' && activity.isCover;
  });
  var totalActivities = activities.length;
  var members = memberIds.map(function (id) {
    return _fake_db_apps_kanban_board__WEBPACK_IMPORTED_MODULE_8__.kanbanBoard.members.find(function (member) {
      return member.id === id;
    });
  });

  var onCardDelete = function onCardDelete(event) {
    event.stopPropagation();
    onDelete();
  };

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_coremat_CmtCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    children: [showDeleteButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: classes.deleteButton,
      onClick: handleClick,
      size: "small",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12__["default"], {
        fontSize: "small"
      })
    }), attachment && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_coremat_CmtCard_CmtCardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "pointer",
      image: attachment.fullImage,
      title: title,
      onClick: onClick
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
      p: 4,
      children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
        onClick: onClick,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_9__["default"])(classes.cardTitle, 'pointer'),
        children: title
      }), (dueDate || !!totalActivities || !!members.length) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: classes.footerRoot,
        children: [!!members.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_coremat_CmtAvatarGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
          items: members,
          srcKey: "profilePic",
          titleKey: "name",
          avatarSize: 30,
          max: 3,
          tooltipProps: {
            classes: {
              tooltip: classes.hoverMemberInfo
            }
          },
          onMoreClick: onClick,
          renderItemSummary: function renderItemSummary(member) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_coremat_CmtObjectSummary__WEBPACK_IMPORTED_MODULE_7__["default"], {
              avatar: member.profilePic,
              title: member.name,
              subTitle: member.email,
              avatarProps: {
                variant: 'rounded',
                size: 80
              },
              align: "horizontal"
            }, member.id);
          }
        }), dueDate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
          className: "card-date",
          children: (0,_jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_3__.getDateText)((0,_jumbo_utils_dateHelper__WEBPACK_IMPORTED_MODULE_3__.getFormattedDate)(dueDate, 'MMM DD, YYYY'))
        }), !!totalActivities && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: classes.commentCounter,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
            className: "counter",
            children: totalActivities
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fontSize: "small"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_DeleteConfirmation__WEBPACK_IMPORTED_MODULE_5__["default"], {
      anchorEl: anchorEl,
      onClose: handleClose,
      onConfirm: onCardDelete
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LaneCard);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/LaneCard/index.style.js":
/*!**************************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/LaneCard/index.style.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {
      marginTop: 12,
      '&:hover $deleteButton': {
        opacity: 1
      }
    },
    deleteButton: {
      position: 'absolute',
      top: 2,
      right: 2,
      padding: 5,
      width: 30,
      height: 30,
      zIndex: 3,
      opacity: 0,
      transition: 'opacity 85ms ease'
    },
    cardTitle: {
      wordBreak: 'break-all'
    },
    footerRoot: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 14,
      marginTop: 16
    },
    hoverMemberInfo: {
      boxShadow: theme.shadows[4],
      padding: 5,
      marginTop: 4,
      marginBottom: 4,
      backgroundColor: theme.palette.background.paper,
      '& .horizontal .Cmt-user-info': {
        marginRight: 15
      },
      '& .Cmt-title': {
        marginBottom: 5
      }
    },
    commentCounter: {
      display: 'flex',
      alignItems: 'center',
      '& > span.counter': {
        fontSize: 15,
        marginRight: 2
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/ListHeader.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/ListHeader.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/ClickAwayListener/ClickAwayListener.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _coremat_CmtDropdownMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@coremat/CmtDropdownMenu */ "./resources/js/src/@coremat/CmtDropdownMenu/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Edit.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Delete.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/MoreVert.js");
/* harmony import */ var _jumbo_components_Common_formElements_AppTextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@jumbo/components/Common/formElements/AppTextInput */ "./resources/js/src/@jumbo/components/Common/formElements/AppTextInput.js");
/* harmony import */ var _components_DeleteConfirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DeleteConfirmation */ "./resources/js/src/routes/Apps/KanbanBoard/components/DeleteConfirmation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["default"])(function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 0
    },
    inputBoxWrapper: {
      flex: 1
    },
    inputBox: {
      backgroundColor: theme.palette.background.paper,
      '& .MuiOutlinedInput-input': {
        padding: '5px 5px'
      }
    },
    listTitle: {
      cursor: 'pointer',
      color: theme.palette.text.primary,
      flex: 1,
      padding: '5px 5px'
    },
    menuHandle: {
      marginLeft: 4
    }
  };
});
var menus = [{
  action: 'edit',
  label: 'Edit',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fontSize: "small"
  })
}, {
  action: 'delete',
  label: 'Delete',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fontSize: "small"
  })
}];

var ListHeader = function ListHeader(_ref) {
  var updateTitle = _ref.updateTitle,
      canAddLanes = _ref.canAddLanes,
      onDelete = _ref.onDelete,
      label = _ref.label,
      title = _ref.title,
      titleStyle = _ref.titleStyle,
      labelStyle = _ref.labelStyle,
      laneDraggable = _ref.laneDraggable;
  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      edit = _useState2[0],
      setEdit = _useState2[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var headerRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();

  var onMenuItemClick = function onMenuItemClick(item) {
    switch (item.action) {
      case 'edit':
        setEdit(true);
        break;

      case 'delete':
        handleClick();
        break;

      default:
        break;
    }
  };

  var handleClick = function handleClick() {
    setAnchorEl(headerRef.current);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: classes.root,
    ref: headerRef,
    children: [edit ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClickAway: function onClickAway() {
        return setEdit(false);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: classes.inputBoxWrapper,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_jumbo_components_Common_formElements_AppTextInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: classes.inputBox,
          placeholder: "Enter a title...",
          variant: "outlined",
          fullWidth: true,
          value: title,
          onChange: function onChange(e) {
            return updateTitle(e.target.value);
          }
        })
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: classes.listTitle,
      draggable: laneDraggable,
      variant: "h3",
      component: "h3",
      onClick: function onClick() {
        return setEdit(true);
      },
      style: titleStyle,
      children: title
    }), label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      style: labelStyle,
      children: label
    }), canAddLanes && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coremat_CmtDropdownMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
      items: menus,
      onItemClick: onMenuItemClick,
      TriggerComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
        size: "small",
        className: classes.menuHandle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["default"], {})
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_DeleteConfirmation__WEBPACK_IMPORTED_MODULE_3__["default"], {
      anchorEl: anchorEl,
      onClose: handleClose,
      onConfirm: onDelete
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListHeader);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/NewListButton.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/NewListButton.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Add.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var NewListButton = function NewListButton(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      marginTop: 5
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "contained",
      color: "primary",
      onClick: onClick,
      startIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
      children: "Add another list"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewListButton);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/NewListForm.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/NewListForm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Close.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _jumbo_components_Common_formElements_AppTextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@jumbo/components/Common/formElements/AppTextInput */ "./resources/js/src/@jumbo/components/Common/formElements/AppTextInput.js");
/* harmony import */ var _coremat_CmtCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@coremat/CmtCard */ "./resources/js/src/@coremat/CmtCard/index.js");
/* harmony import */ var _jumbo_utils_commonHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@jumbo/utils/commonHelper */ "./resources/js/src/@jumbo/utils/commonHelper.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
  return {
    root: {
      marginTop: 5,
      width: 210
    }
  };
});

var NewListForm = function NewListForm(_ref) {
  var onCancel = _ref.onCancel,
      onAdd = _ref.onAdd;
  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var onListSave = function onListSave() {
    if (title) {
      onAdd({
        id: (0,_jumbo_utils_commonHelper__WEBPACK_IMPORTED_MODULE_3__.idGenerator)(),
        title: title
      });
    } else {
      onCancel();
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coremat_CmtCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
      p: 4,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
        mb: 4,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_jumbo_components_Common_formElements_AppTextInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
          placeholder: "Enter list title...",
          fullWidth: true,
          multiline: true,
          value: title,
          onChange: function onChange(e) {
            return setTitle(e.target.value);
          },
          variant: "outlined"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
        display: "flex",
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "contained",
          color: "primary",
          size: "small",
          onClick: onListSave,
          children: "Add List"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
          ml: 1,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
            size: "small",
            onClick: onCancel,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["default"], {
              fontSize: "medium"
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewListForm);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/components/DeleteConfirmation.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/components/DeleteConfirmation.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Popover/Popover.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Delete.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Cancel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["anchorEl", "content", "onClose", "onConfirm"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  return {
    confirmText: {
      padding: '8px 12px'
    },
    confirmActions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 12px 8px 12px',
      '& > button': {
        fontSize: 10
      },
      '& > :not(:first-child)': {
        marginLeft: 4
      }
    }
  };
});

var DeleteConfirmation = function DeleteConfirmation(_ref) {
  var anchorEl = _ref.anchorEl,
      content = _ref.content,
      onClose = _ref.onClose,
      onConfirm = _ref.onConfirm,
      rest = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({
    id: "confirm-popover",
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    onClose: onClose,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  }, rest), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: classes.confirmText,
      children: content || 'Are you confirm to delete?'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: classes.confirmActions,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "small",
        onClick: onConfirm,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["default"], {
          fontSize: "small",
          color: "primary"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "small",
        onClick: onClose,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
          fontSize: "small"
        })
      })]
    })]
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteConfirmation);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/components/MemberSelector.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/components/MemberSelector.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _jumbo_components_Common_CustomScrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@jumbo/components/Common/CustomScrollbar */ "./resources/js/src/@jumbo/components/Common/CustomScrollbar/index.js");
/* harmony import */ var _fake_db_apps_kanban_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@fake-db/apps/kanban-board */ "./resources/js/src/@fake-db/apps/kanban-board.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@coremat/CmtAvatar */ "./resources/js/src/@coremat/CmtAvatar/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Popover/Popover.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Close.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Check.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["default"])(function (theme) {
  return {
    memberHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 16px',
      borderBottom: "1px solid ".concat(theme.palette.borderColor.main)
    },
    memberScrollbar: {
      minHeight: 250,
      maxHeight: 300,
      overflowY: 'scroll',
      overflowX: 'hidden'
    },
    memberRoot: {
      color: theme.palette.text.secondary,
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      padding: 8,
      width: '100%',
      transition: 'all .2s',
      '&:hover, &.selected': {
        backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.alpha)(theme.palette.primary.main, 0.04)
      },
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: "0 3px 10px 0 ".concat((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.alpha)(theme.palette.common.dark, 0.2))
      }
    },
    memberFooter: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: 8,
      borderTop: "1px solid ".concat(theme.palette.borderColor.main)
    }
  };
});

var MemberSelector = function MemberSelector(_ref) {
  var memberIds = _ref.memberIds,
      anchorEl = _ref.anchorEl,
      onMemberClick = _ref.onMemberClick,
      onClose = _ref.onClose;
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "member-selector-popover",
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    onClose: onClose,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
      minWidth: 220,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: classes.memberHeader,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
          variant: "h4",
          component: "h4",
          children: "Select Member"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
          size: "small",
          onClick: onClose,
          edge: "end",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fontSize: "small"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_jumbo_components_Common_CustomScrollbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: classes.memberScrollbar,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
          padding: 2,
          children: _fake_db_apps_kanban_board__WEBPACK_IMPORTED_MODULE_2__.kanbanBoard.members.map(function (member, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
              className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.memberRoot, {
                selected: memberIds.includes(member.id)
              }),
              onClick: function onClick() {
                return onMemberClick(member);
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
                src: member.profilePic,
                size: 30,
                alt: member.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
                mx: 2,
                component: "span",
                flex: 1,
                children: member.name
              }), memberIds.includes(member.id) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_13__["default"], {
                fontSize: "small"
              })]
            }, index);
          })
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberSelector);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/index.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var react_trello__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-trello */ "./node_modules/react-trello/dist/index.js");
/* harmony import */ var _fake_db_apps_kanban_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fake-db/apps/kanban-board */ "./resources/js/src/@fake-db/apps/kanban-board.js");
/* harmony import */ var _CardDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardDetail */ "./resources/js/src/routes/Apps/KanbanBoard/CardDetail/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _AddNewCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddNewCard */ "./resources/js/src/routes/Apps/KanbanBoard/AddNewCard/index.js");
/* harmony import */ var _LaneCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LaneCard */ "./resources/js/src/routes/Apps/KanbanBoard/LaneCard/index.js");
/* harmony import */ var _jumbo_utils_commonHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@jumbo/utils/commonHelper */ "./resources/js/src/@jumbo/utils/commonHelper.js");
/* harmony import */ var _ListHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListHeader */ "./resources/js/src/routes/Apps/KanbanBoard/ListHeader.js");
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.style */ "./resources/js/src/routes/Apps/KanbanBoard/index.style.js");
/* harmony import */ var _AddCardButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddCardButton */ "./resources/js/src/routes/Apps/KanbanBoard/AddCardButton.js");
/* harmony import */ var _NewListForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NewListForm */ "./resources/js/src/routes/Apps/KanbanBoard/NewListForm.js");
/* harmony import */ var _NewListButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NewListButton */ "./resources/js/src/routes/Apps/KanbanBoard/NewListButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















 //Logged in user



var user = _fake_db_apps_kanban_board__WEBPACK_IMPORTED_MODULE_2__.kanbanBoard.members[0];

var KanbanBoard = function KanbanBoard() {
  var classes = (0,_index_style__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_fake_db_apps_kanban_board__WEBPACK_IMPORTED_MODULE_2__.kanbanBoard.boards),
      _useState2 = _slicedToArray(_useState, 2),
      boardData = _useState2[0],
      setBoardData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openDialog = _useState4[0],
      setOpenDialog = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedCard = _useState6[0],
      setSelectedCard = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedLaneId = _useState8[0],
      setSelectedLaneId = _useState8[1];

  var handleDialogOpen = function handleDialogOpen() {
    setOpenDialog(true);
  };

  var handleDialogClose = function handleDialogClose() {
    setOpenDialog(false);
    setSelectedCard(null);
    setSelectedLaneId(null);
  };

  var shouldReceiveNewData = function shouldReceiveNewData(nextData) {
    setBoardData(nextData);
  };

  var handleCardDelete = function handleCardDelete(cardId, laneId) {
    // eslint-disable-next-line no-console
    console.info('handleCardDelete', cardId, laneId);
  };

  var handleCardAdd = function handleCardAdd(card, laneId) {
    // eslint-disable-next-line no-console
    console.info('handleCardAdd', card, laneId);
  };

  var handleListAdd = function handleListAdd(list) {
    // eslint-disable-next-line no-console
    console.info('new Lane', list);
  };

  var getLaneById = function getLaneById(id) {
    return boardData.lanes.find(function (item) {
      return item.id === id;
    });
  };

  var getCardById = function getCardById(lane, cardId) {
    return lane.cards.find(function (item) {
      return item.id === cardId;
    });
  };

  var onCardClick = function onCardClick(cardId, metadata, laneId) {
    var lane = getLaneById(laneId);
    var card = getCardById(lane, cardId);
    setSelectedCard(card);
    setSelectedLaneId(laneId);
    handleDialogOpen();
  };

  var handleDragCard = function handleDragCard(cardId, sourceLaneId, targetLaneId, position, cardDetails) {
    if (sourceLaneId !== targetLaneId) {
      var sourceLane = getLaneById(sourceLaneId);
      var targetLane = getLaneById(targetLaneId);
      var activity = {
        id: (0,_jumbo_utils_commonHelper__WEBPACK_IMPORTED_MODULE_6__.idGenerator)(),
        user: user,
        content: "moved the card from \"".concat(sourceLane.title, "\" to \"").concat(targetLane.title, "\""),
        createdAt: new Date()
      };

      var updatedCard = _objectSpread(_objectSpread({}, cardDetails), {}, {
        activities: [].concat(_toConsumableArray(cardDetails.activities), [activity])
      });

      targetLane.cards.splice(position, 0, updatedCard);

      var updatedBoard = _objectSpread(_objectSpread({}, boardData), {}, {
        lanes: boardData.lanes.map(function (item) {
          return item.id === targetLane.id ? targetLane : item;
        })
      });

      setBoardData(updatedBoard);
    }
  };

  var onCardUpdate = function onCardUpdate(updatedCard, laneId) {
    var lane = getLaneById(laneId);

    var updatedLane = _objectSpread(_objectSpread({}, lane), {}, {
      cards: lane.cards.map(function (item) {
        return item.id === updatedCard.id ? updatedCard : item;
      })
    });

    var updatedBoard = _objectSpread(_objectSpread({}, boardData), {}, {
      lanes: boardData.lanes.map(function (item) {
        return item.id === updatedLane.id ? updatedLane : item;
      })
    });

    setBoardData(updatedBoard);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.paper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_trello__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: boardData,
      draggable: true,
      onDataChange: shouldReceiveNewData,
      onCardDelete: handleCardDelete,
      onCardAdd: handleCardAdd,
      onCardClick: onCardClick,
      editLaneTitle: true,
      editable: true,
      canAddLanes: true,
      onLaneAdd: handleListAdd,
      components: {
        LaneHeader: _ListHeader__WEBPACK_IMPORTED_MODULE_7__["default"],
        NewLaneForm: _NewListForm__WEBPACK_IMPORTED_MODULE_10__["default"],
        NewLaneSection: _NewListButton__WEBPACK_IMPORTED_MODULE_11__["default"],
        AddCardLink: _AddCardButton__WEBPACK_IMPORTED_MODULE_9__["default"],
        NewCardForm: _AddNewCard__WEBPACK_IMPORTED_MODULE_4__["default"],
        Card: _LaneCard__WEBPACK_IMPORTED_MODULE_5__["default"]
      },
      handleDragEnd: handleDragCard,
      style: {
        backgroundColor: 'transparent'
      },
      laneStyle: {
        backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__.alpha)(theme.palette.primary.main, 0.08),
        width: 280
      }
    }), openDialog && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_CardDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: openDialog,
      handleClose: handleDialogClose,
      selectedCard: selectedCard,
      onCardUpdate: onCardUpdate,
      selectedLaneId: selectedLaneId
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KanbanBoard);

/***/ }),

/***/ "./resources/js/src/routes/Apps/KanbanBoard/index.style.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/routes/Apps/KanbanBoard/index.style.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    paper: {
      width: '100%',
      marginBottom: theme.spacing(4),
      backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.lighten)(theme.palette.background.paper, 0.1),
      '& .smooth-dnd-container input': {
        boxSizing: 'content-box'
      }
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addClass)
/* harmony export */ });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0,_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hasClass)
/* harmony export */ });
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeClass)
/* harmony export */ });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/immutability-helper/index.js":
/*!***************************************************!*\
  !*** ./node_modules/immutability-helper/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");

var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;

var toString = Object.prototype.toString
var type = function(obj) {
  return toString.call(obj).slice(8, -1);
}

var assign = Object.assign || /* istanbul ignore next */ function assign(target, source) {
  getAllKeys(source).forEach(function(key) {
    if (hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  });
  return target;
};

var getAllKeys = typeof Object.getOwnPropertySymbols === 'function' ?
  function(obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)) } :
  /* istanbul ignore next */ function(obj) { return Object.keys(obj) };

/* istanbul ignore next */
function copy(object) {
  if (Array.isArray(object)) {
    return assign(object.constructor(object.length), object)
  } else if (type(object) === 'Map') {
    return new Map(object)
  } else if (type(object) === 'Set') {
    return new Set(object)
  } else if (object && typeof object === 'object') {
    var prototype = Object.getPrototypeOf(object);
    return assign(Object.create(prototype), object);
  } else {
    return object;
  }
}

function newContext() {
  var commands = assign({}, defaultCommands);
  update.extend = function(directive, fn) {
    commands[directive] = fn;
  };
  update.isEquals = function(a, b) { return a === b; };

  return update;

  function update(object, spec) {
    if (typeof spec === 'function') {
      spec = { $apply: spec };
    }

    if (!(Array.isArray(object) && Array.isArray(spec))) {
      invariant(
        !Array.isArray(spec),
        'update(): You provided an invalid spec to update(). The spec may ' +
        'not contain an array except as the value of $set, $push, $unshift, ' +
        '$splice or any custom command allowing an array value.'
      );
    }

    invariant(
      typeof spec === 'object' && spec !== null,
      'update(): You provided an invalid spec to update(). The spec and ' +
      'every included key path must be plain objects containing one of the ' +
      'following commands: %s.',
      Object.keys(commands).join(', ')
    );

    var nextObject = object;
    var index, key;
    getAllKeys(spec).forEach(function(key) {
      if (hasOwnProperty.call(commands, key)) {
        var objectWasNextObject = object === nextObject;
        nextObject = commands[key](spec[key], nextObject, spec, object);
        if (objectWasNextObject && update.isEquals(nextObject, object)) {
          nextObject = object;
        }
      } else {
        var nextValueForKey =
          type(object) === 'Map'
            ? update(object.get(key), spec[key])
            : update(object[key], spec[key]);
        var nextObjectValue =
          type(nextObject) === 'Map'
              ? nextObject.get(key)
              : nextObject[key];
        if (!update.isEquals(nextValueForKey, nextObjectValue) || typeof nextValueForKey === 'undefined' && !hasOwnProperty.call(object, key)) {
          if (nextObject === object) {
            nextObject = copy(object);
          }
          if (type(nextObject) === 'Map') {
            nextObject.set(key, nextValueForKey);
          } else {
            nextObject[key] = nextValueForKey;
          }
        }
      }
    })
    return nextObject;
  }

}

var defaultCommands = {
  $push: function(value, nextObject, spec) {
    invariantPushAndUnshift(nextObject, spec, '$push');
    return value.length ? nextObject.concat(value) : nextObject;
  },
  $unshift: function(value, nextObject, spec) {
    invariantPushAndUnshift(nextObject, spec, '$unshift');
    return value.length ? value.concat(nextObject) : nextObject;
  },
  $splice: function(value, nextObject, spec, originalObject) {
    invariantSplices(nextObject, spec);
    value.forEach(function(args) {
      invariantSplice(args);
      if (nextObject === originalObject && args.length) nextObject = copy(originalObject);
      splice.apply(nextObject, args);
    });
    return nextObject;
  },
  $set: function(value, nextObject, spec) {
    invariantSet(spec);
    return value;
  },
  $toggle: function(targets, nextObject) {
    invariantSpecArray(targets, '$toggle');
    var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;

    targets.forEach(function(target) {
      nextObjectCopy[target] = !nextObject[target];
    });

    return nextObjectCopy;
  },
  $unset: function(value, nextObject, spec, originalObject) {
    invariantSpecArray(value, '$unset');
    value.forEach(function(key) {
      if (Object.hasOwnProperty.call(nextObject, key)) {
        if (nextObject === originalObject) nextObject = copy(originalObject);
        delete nextObject[key];
      }
    });
    return nextObject;
  },
  $add: function(value, nextObject, spec, originalObject) {
    invariantMapOrSet(nextObject, '$add');
    invariantSpecArray(value, '$add');
    if (type(nextObject) === 'Map') {
      value.forEach(function(pair) {
        var key = pair[0];
        var value = pair[1];
        if (nextObject === originalObject && nextObject.get(key) !== value) nextObject = copy(originalObject);
        nextObject.set(key, value);
      });
    } else {
      value.forEach(function(value) {
        if (nextObject === originalObject && !nextObject.has(value)) nextObject = copy(originalObject);
        nextObject.add(value);
      });
    }
    return nextObject;
  },
  $remove: function(value, nextObject, spec, originalObject) {
    invariantMapOrSet(nextObject, '$remove');
    invariantSpecArray(value, '$remove');
    value.forEach(function(key) {
      if (nextObject === originalObject && nextObject.has(key)) nextObject = copy(originalObject);
      nextObject.delete(key);
    });
    return nextObject;
  },
  $merge: function(value, nextObject, spec, originalObject) {
    invariantMerge(nextObject, value);
    getAllKeys(value).forEach(function(key) {
      if (value[key] !== nextObject[key]) {
        if (nextObject === originalObject) nextObject = copy(originalObject);
        nextObject[key] = value[key];
      }
    });
    return nextObject;
  },
  $apply: function(value, original) {
    invariantApply(value);
    return value(original);
  }
};

var contextForExport = newContext();

module.exports = contextForExport;
module.exports["default"] = contextForExport;
module.exports.newContext = newContext;

// invariants

function invariantPushAndUnshift(value, spec, command) {
  invariant(
    Array.isArray(value),
    'update(): expected target of %s to be an array; got %s.',
    command,
    value
  );
  invariantSpecArray(spec[command], command)
}

function invariantSpecArray(spec, command) {
  invariant(
    Array.isArray(spec),
    'update(): expected spec of %s to be an array; got %s. ' +
    'Did you forget to wrap your parameter in an array?',
    command,
    spec
  );
}

function invariantSplices(value, spec) {
  invariant(
    Array.isArray(value),
    'Expected $splice target to be an array; got %s',
    value
  );
  invariantSplice(spec['$splice']);
}

function invariantSplice(value) {
  invariant(
    Array.isArray(value),
    'update(): expected spec of $splice to be an array of arrays; got %s. ' +
    'Did you forget to wrap your parameters in an array?',
    value
  );
}

function invariantApply(fn) {
  invariant(
    typeof fn === 'function',
    'update(): expected spec of $apply to be a function; got %s.',
    fn
  );
}

function invariantSet(spec) {
  invariant(
    Object.keys(spec).length === 1,
    'Cannot have more than one key in an object with $set'
  );
}

function invariantMerge(target, specValue) {
  invariant(
    specValue && typeof specValue === 'object',
    'update(): $merge expects a spec of type \'object\'; got %s',
    specValue
  );
  invariant(
    target && typeof target === 'object',
    'update(): $merge expects a target of type \'object\'; got %s',
    target
  );
}

function invariantMapOrSet(target, command) {
  var typeOfTarget = type(target);
  invariant(
    typeOfTarget === 'Map' || typeOfTarget === 'Set',
    'update(): %s expects a target of type Set or Map; got %s',
    command,
    typeOfTarget
  );
}


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/just-curry-it/index.js":
/*!*********************************************!*\
  !*** ./node_modules/just-curry-it/index.js ***!
  \*********************************************/
/***/ ((module) => {

module.exports = curry;

/*
  function add(a, b, c) {
    return a + b + c;
  }
  curry(add)(1)(2)(3); // 6
  curry(add)(1)(2)(2); // 5
  curry(add)(2)(4, 3); // 9

  function add(...args) {
    return args.reduce((sum, n) => sum + n, 0)
  }
  var curryAdd4 = curry(add, 4)
  curryAdd4(1)(2, 3)(4); // 10

  function converter(ratio, input) {
    return (input*ratio).toFixed(1);
  }
  const curriedConverter = curry(converter)
  const milesToKm = curriedConverter(1.62);
  milesToKm(35); // 56.7
  milesToKm(10); // 16.2
*/

function curry(fn, arity) {
  return function curried() {
    if (arity == null) {
      arity = fn.length;
    }
    var args = [].slice.call(arguments);
    if (args.length >= arity) {
      return fn.apply(this, args);
    } else {
      return function() {
        return curried.apply(this, args.concat([].slice.call(arguments)));
      };
    }
  };
}


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


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

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


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

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_basePick.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_basePick.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePickBy = __webpack_require__(/*! ./_basePickBy */ "./node_modules/lodash/_basePickBy.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js");

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ "./node_modules/lodash/_basePickBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePickBy.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_flatRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var flatten = __webpack_require__(/*! ./flatten */ "./node_modules/lodash/flatten.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


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

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


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

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


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

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


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

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


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

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


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

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/pick.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/pick.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePick = __webpack_require__(/*! ./_basePick */ "./node_modules/lodash/_basePick.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "./node_modules/lodash/_flatRest.js");

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/react-popopo/dist/Popover.js":
/*!***************************************************!*\
  !*** ./node_modules/react-popopo/dist/Popover.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _PopoverStore = __webpack_require__(/*! ./PopoverStore */ "./node_modules/react-popopo/dist/PopoverStore.js");

var _styles = __webpack_require__(/*! ./styles */ "./node_modules/react-popopo/dist/styles.js");

class Popover extends _react.default.PureComponent {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, "state", {
      isPopoverShown: false
    });
    (0, _defineProperty2.default)(this, "componentWillUnmount", () => {
      _PopoverStore.popoverStore.unregister(this.hide);
    });
    (0, _defineProperty2.default)(this, "show", e => {
      _PopoverStore.popoverStore.register(this.hide);

      this.setState({
        isPopoverShown: true
      });

      if (this.props.onShow) {
        this.props.onShow(e);
      }
    });
    (0, _defineProperty2.default)(this, "hide", e => {
      this.setState({
        isPopoverShown: false
      });

      if (this.props.onHide) {
        this.props.onHide(e);
      }
    });
    (0, _defineProperty2.default)(this, "toggle", e => {
      e.preventDefault();
      e.stopPropagation();

      if (this.state.isPopoverShown) {
        this.hide(e);

        _PopoverStore.popoverStore.unregister(this.hide);
      } else {
        this.show(e);
      }
    });
  }

  render() {
    var {
      position,
      trigger,
      PopoverContent,
      PopoverTrigger,
      PopoverContainer
    } = this.props;
    var {
      isPopoverShown
    } = this.state;
    return _react.default.createElement(PopoverContainer, {
      position: position,
      active: isPopoverShown
    }, _react.default.createElement(PopoverTrigger, {
      href: "",
      onClick: this.toggle
    }, trigger), _react.default.createElement(PopoverContent, {
      position: position,
      active: isPopoverShown
    }, this.props.children));
  }

}

exports["default"] = Popover;
(0, _defineProperty2.default)(Popover, "propTypes", {
  children: _propTypes.default.node,
  trigger: _propTypes.default.any.isRequired,
  position: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
  onShow: _propTypes.default.func,
  onHide: _propTypes.default.func,
  PopoverContainer: _propTypes.default.elementType,
  PopoverTrigger: _propTypes.default.elementType,
  PopoverContent: _propTypes.default.elementType
});
(0, _defineProperty2.default)(Popover, "defaultProps", {
  children: [],
  position: 'top',
  onShow: undefined,
  onHide: undefined,
  PopoverContainer: _styles.PopoverContainer,
  PopoverTrigger: _styles.PopoverTrigger,
  PopoverContent: _styles.PopoverContent
});

/***/ }),

/***/ "./node_modules/react-popopo/dist/PopoverStore.js":
/*!********************************************************!*\
  !*** ./node_modules/react-popopo/dist/PopoverStore.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.popoverStore = exports.PopoverStore = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

class PopoverStore {
  constructor() {
    (0, _defineProperty2.default)(this, "callback", null);
  }

  hide() {
    this.register(null);
  }

  register(cb) {
    if (this.callback) {
      this.callback();
    }

    this.callback = cb;
  }

  unregister(cb) {
    if (this.callback === cb) {
      this.callback = null;
    }
  }

}

exports.PopoverStore = PopoverStore;
var popoverStore = new PopoverStore();
exports.popoverStore = popoverStore;

/***/ }),

/***/ "./node_modules/react-popopo/dist/PopoverWrapper.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-popopo/dist/PopoverWrapper.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _PopoverStore = __webpack_require__(/*! ./PopoverStore */ "./node_modules/react-popopo/dist/PopoverStore.js");

class PopoverWrapper extends _react.default.PureComponent {
  hidePopovers() {
    _PopoverStore.popoverStore.hide();
  }

  render() {
    return _react.default.createElement("div", (0, _extends2.default)({
      onClick: this.hidePopovers,
      onTouchEnd: this.hidePopovers
    }, this.props), this.props.children);
  }

}

exports["default"] = PopoverWrapper;
(0, _defineProperty2.default)(PopoverWrapper, "propTypes", {
  children: _propTypes.default.node
});
(0, _defineProperty2.default)(PopoverWrapper, "defaultProps", {
  children: []
});

/***/ }),

/***/ "./node_modules/react-popopo/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-popopo/dist/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Popover", ({
  enumerable: true,
  get: function get() {
    return _Popover.default;
  }
}));
Object.defineProperty(exports, "PopoverWrapper", ({
  enumerable: true,
  get: function get() {
    return _PopoverWrapper.default;
  }
}));
Object.defineProperty(exports, "PopoverContainer", ({
  enumerable: true,
  get: function get() {
    return _styles.PopoverContainer;
  }
}));
Object.defineProperty(exports, "PopoverTrigger", ({
  enumerable: true,
  get: function get() {
    return _styles.PopoverTrigger;
  }
}));
Object.defineProperty(exports, "PopoverContent", ({
  enumerable: true,
  get: function get() {
    return _styles.PopoverContent;
  }
}));

var _Popover = _interopRequireDefault(__webpack_require__(/*! ./Popover */ "./node_modules/react-popopo/dist/Popover.js"));

var _PopoverWrapper = _interopRequireDefault(__webpack_require__(/*! ./PopoverWrapper */ "./node_modules/react-popopo/dist/PopoverWrapper.js"));

var _styles = __webpack_require__(/*! ./styles */ "./node_modules/react-popopo/dist/styles.js");

/***/ }),

/***/ "./node_modules/react-popopo/dist/styles.js":
/*!**************************************************!*\
  !*** ./node_modules/react-popopo/dist/styles.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PopoverContainer = exports.PopoverContent = exports.PopoverTrigger = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  display: inline-flex;\n  box-sizing: border-box;\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  box-sizing: border-box;\n  position: absolute;\n  z-index: 10;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease 0ms;\n  border-radius: 3px;\n  min-width: 7em;\n  flex-flow: column nowrap;\n  background-color: #000;\n  color: #fff;\n  padding: 5px;\n  visibility: hidden;\n  opacity: 0;\n\n  ", "\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    background: transparent none repeat scroll 0 0;\n    border: 6px solid transparent;\n    transition: all 0.3s ease 0ms;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var PopoverTrigger = _styledComponents.default.a(_templateObject());

exports.PopoverTrigger = PopoverTrigger;

var PopoverContent = _styledComponents.default.div(_templateObject2(), props => props.active && "\n    visibility: visible;\n    opacity: 1;\n    transition-delay: 100ms;\n  ");

exports.PopoverContent = PopoverContent;

var PopoverContainer = _styledComponents.default.div(_templateObject3(), props => props.position === 'top' && "\n    flex-flow: column-reverse nowrap;\n    ".concat(PopoverContent, " {\n      bottom: 0;\n      left: 50%;\n      transform: translateX(-50%) translateY(-50%) translateY(-6px);\n\n      &::before {\n        border-top-color: #000;\n        bottom: -4px;\n        transform: translateX(-50%) translateY(8px);\n        left: 50%;\n    }\n  "), props => props.position === 'bottom' && "\n    flex-flow: column nowrap;\n    ".concat(PopoverContent, " {\n      left: 50%;\n      transform: translateX(-50%) translateY(6px);\n\n      &::before {\n        border-bottom-color: #000;\n        top: -20px;\n        transform: translateX(-50%) translateY(8px);\n        left: 50%;\n      }\n    }\n  "), props => props.position === 'left' && "\n    flex-flow: row-reverse nowrap;\n    ".concat(PopoverContent, " {\n      top: 50%;\n      transform: translateY(-50%) translateX(-100%);\n\n      &::before {\n        border-left-color: #000;\n        right: -6px;\n        transform: translateX(50%) translateY(-6px);\n        top: 50%;\n      }\n    }\n  "), props => props.position === 'right' && "\n    flex-flow: row nowrap;\n    ".concat(PopoverContent, " {\n      top: 50%;\n      transform: translateY(-50%) translateX(6px);\n\n      &::before {\n        border-right-color: #000;\n        left: -6px;\n        transform: translateX(-50%) translateY(-6px);\n        top: 50%;\n      }\n    }\n  "));

exports.PopoverContainer = PopoverContainer;

/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_3__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_Transition__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_6__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_7__.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)
}) : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-trello/dist/actions/BoardActions.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-trello/dist/actions/BoardActions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addLane = exports.loadBoard = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "./node_modules/redux-actions/es/index.js");

const loadBoard = (0, _reduxActions.createAction)('LOAD_BOARD');
exports.loadBoard = loadBoard;
const addLane = (0, _reduxActions.createAction)('ADD_LANE');
exports.addLane = addLane;

/***/ }),

/***/ "./node_modules/react-trello/dist/actions/LaneActions.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-trello/dist/actions/LaneActions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removeLane = exports.moveLane = exports.paginateLane = exports.updateLane = exports.updateLanes = exports.updateCards = exports.moveCardAcrossLanes = exports.removeCard = exports.updateCard = exports.addCard = void 0;

var _reduxActions = __webpack_require__(/*! redux-actions */ "./node_modules/redux-actions/es/index.js");

const addCard = (0, _reduxActions.createAction)('ADD_CARD');
exports.addCard = addCard;
const updateCard = (0, _reduxActions.createAction)('UPDATE_CARD');
exports.updateCard = updateCard;
const removeCard = (0, _reduxActions.createAction)('REMOVE_CARD');
exports.removeCard = removeCard;
const moveCardAcrossLanes = (0, _reduxActions.createAction)('MOVE_CARD');
exports.moveCardAcrossLanes = moveCardAcrossLanes;
const updateCards = (0, _reduxActions.createAction)('UPDATE_CARDS');
exports.updateCards = updateCards;
const updateLanes = (0, _reduxActions.createAction)('UPDATE_LANES');
exports.updateLanes = updateLanes;
const updateLane = (0, _reduxActions.createAction)('UPDATE_LANE');
exports.updateLane = updateLane;
const paginateLane = (0, _reduxActions.createAction)('PAGINATE_LANE');
exports.paginateLane = paginateLane;
const moveLane = (0, _reduxActions.createAction)('MOVE_LANE');
exports.moveLane = moveLane;
const removeLane = (0, _reduxActions.createAction)('REMOVE_LANE');
exports.removeLane = removeLane;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/AddCardLink.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/AddCardLink.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Base = __webpack_require__(/*! ../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _default = ({
  onClick,
  t,
  laneId
}) => _react.default.createElement(_Base.AddCardLink, {
  onClick: onClick
}, t('Click to add card'));

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/Card.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-trello/dist/components/Card.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Base = __webpack_require__(/*! ../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _InlineInput = _interopRequireDefault(__webpack_require__(/*! ../widgets/InlineInput */ "./node_modules/react-trello/dist/widgets/InlineInput.js"));

var _Tag = _interopRequireDefault(__webpack_require__(/*! ./Card/Tag */ "./node_modules/react-trello/dist/components/Card/Tag.js"));

var _DeleteButton = _interopRequireDefault(__webpack_require__(/*! ../widgets/DeleteButton */ "./node_modules/react-trello/dist/widgets/DeleteButton.js"));

class Card extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "onDelete", e => {
      this.props.onDelete();
      e.stopPropagation();
    });
  }

  render() {
    const _this$props = this.props,
          showDeleteButton = _this$props.showDeleteButton,
          style = _this$props.style,
          tagStyle = _this$props.tagStyle,
          onClick = _this$props.onClick,
          onDelete = _this$props.onDelete,
          onChange = _this$props.onChange,
          className = _this$props.className,
          id = _this$props.id,
          title = _this$props.title,
          label = _this$props.label,
          description = _this$props.description,
          tags = _this$props.tags,
          cardDraggable = _this$props.cardDraggable,
          editable = _this$props.editable,
          t = _this$props.t;

    const updateCard = card => {
      onChange((0, _objectSpread2.default)({}, card, {
        id
      }));
    };

    return _react.default.createElement(_Base.MovableCardWrapper, {
      "data-id": id,
      onClick: onClick,
      style: style,
      className: className
    }, _react.default.createElement(_Base.CardHeader, null, _react.default.createElement(_Base.CardTitle, {
      draggable: cardDraggable
    }, editable ? _react.default.createElement(_InlineInput.default, {
      value: title,
      border: true,
      placeholder: t('placeholder.title'),
      resize: "vertical",
      onSave: value => updateCard({
        title: value
      })
    }) : title), _react.default.createElement(_Base.CardRightContent, null, editable ? _react.default.createElement(_InlineInput.default, {
      value: label,
      border: true,
      placeholder: t('placeholder.label'),
      resize: "vertical",
      onSave: value => updateCard({
        label: value
      })
    }) : label), showDeleteButton && _react.default.createElement(_DeleteButton.default, {
      onClick: this.onDelete
    })), _react.default.createElement(_Base.Detail, null, editable ? _react.default.createElement(_InlineInput.default, {
      value: description,
      border: true,
      placeholder: t('placeholder.description'),
      resize: "vertical",
      onSave: value => updateCard({
        description: value
      })
    }) : description), tags && tags.length > 0 && _react.default.createElement(_Base.Footer, null, tags.map(tag => _react.default.createElement(_Tag.default, (0, _extends2.default)({
      key: tag.title
    }, tag, {
      tagStyle: tagStyle
    })))));
  }

}

Card.propTypes = {
  showDeleteButton: _propTypes.default.bool,
  onDelete: _propTypes.default.func,
  onClick: _propTypes.default.func,
  style: _propTypes.default.object,
  tagStyle: _propTypes.default.object,
  className: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  description: _propTypes.default.string,
  tags: _propTypes.default.array
};
Card.defaultProps = {
  showDeleteButton: true,
  onDelete: () => {},
  onClick: () => {},
  style: {},
  tagStyle: {},
  title: 'no title',
  description: '',
  label: '',
  tags: [],
  className: ''
};
var _default = Card;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/Card/Tag.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/Card/Tag.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Base = __webpack_require__(/*! ../../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

class Tag extends _react.Component {
  render() {
    const _this$props = this.props,
          title = _this$props.title,
          color = _this$props.color,
          bgcolor = _this$props.bgcolor,
          tagStyle = _this$props.tagStyle,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["title", "color", "bgcolor", "tagStyle"]);
    const style = (0, _objectSpread2.default)({
      color: color || 'white',
      backgroundColor: bgcolor || 'orange'
    }, tagStyle);
    return _react.default.createElement(_Base.TagSpan, (0, _extends2.default)({
      style: style
    }, otherProps), title);
  }

}

Tag.propTypes = {
  title: _propTypes.default.string.isRequired,
  color: _propTypes.default.string,
  bgcolor: _propTypes.default.string,
  tagStyle: _propTypes.default.object
};
var _default = Tag;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/Lane/LaneFooter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/Lane/LaneFooter.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Base = __webpack_require__(/*! ../../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _Elements = __webpack_require__(/*! ../../styles/Elements */ "./node_modules/react-trello/dist/styles/Elements.js");

var _default = ({
  onClick,
  collapsed
}) => _react.default.createElement(_Base.LaneFooter, {
  onClick: onClick
}, collapsed ? _react.default.createElement(_Elements.ExpandBtn, null) : _react.default.createElement(_Elements.CollapseBtn, null));

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/Lane/LaneHeader.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/Lane/LaneHeader.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _InlineInput = _interopRequireDefault(__webpack_require__(/*! ../../widgets/InlineInput */ "./node_modules/react-trello/dist/widgets/InlineInput.js"));

var _Base = __webpack_require__(/*! ../../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _LaneMenu = _interopRequireDefault(__webpack_require__(/*! ./LaneHeader/LaneMenu */ "./node_modules/react-trello/dist/components/Lane/LaneHeader/LaneMenu.js"));

const LaneHeaderComponent = ({
  updateTitle,
  canAddLanes,
  onDelete,
  onDoubleClick,
  editLaneTitle,
  label,
  title,
  titleStyle,
  labelStyle,
  t,
  laneDraggable
}) => {
  return _react.default.createElement(_Base.LaneHeader, {
    onDoubleClick: onDoubleClick,
    editLaneTitle: editLaneTitle
  }, _react.default.createElement(_Base.Title, {
    draggable: laneDraggable,
    style: titleStyle
  }, editLaneTitle ? _react.default.createElement(_InlineInput.default, {
    value: title,
    border: true,
    placeholder: t('placeholder.title'),
    resize: "vertical",
    onSave: updateTitle
  }) : title), label && _react.default.createElement(_Base.RightContent, null, _react.default.createElement("span", {
    style: labelStyle
  }, label)), canAddLanes && _react.default.createElement(_LaneMenu.default, {
    t: t,
    onDelete: onDelete
  }));
};

LaneHeaderComponent.propTypes = {
  updateTitle: _propTypes.default.func,
  editLaneTitle: _propTypes.default.bool,
  canAddLanes: _propTypes.default.bool,
  laneDraggable: _propTypes.default.bool,
  label: _propTypes.default.string,
  title: _propTypes.default.string,
  onDelete: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func,
  t: _propTypes.default.func.isRequired
};
LaneHeaderComponent.defaultProps = {
  updateTitle: () => {},
  editLaneTitle: false,
  canAddLanes: false
};
var _default = LaneHeaderComponent;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/Lane/LaneHeader/LaneMenu.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/Lane/LaneHeader/LaneMenu.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactPopopo = __webpack_require__(/*! react-popopo */ "./node_modules/react-popopo/dist/index.js");

var _Base = __webpack_require__(/*! ../../../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _Elements = __webpack_require__(/*! ../../../styles/Elements */ "./node_modules/react-trello/dist/styles/Elements.js");

const TEST = _propTypes.default.elementType;

const LaneMenu = ({
  t,
  onDelete
}) => _react.default.createElement(_reactPopopo.Popover, {
  position: "bottom",
  PopoverContainer: _Base.CustomPopoverContainer,
  PopoverContent: _Base.CustomPopoverContent,
  trigger: _react.default.createElement(_Elements.MenuButton, null, "\u22EE")
}, _react.default.createElement(_Elements.LaneMenuHeader, null, _react.default.createElement(_Elements.LaneMenuTitle, null, t('Lane actions')), _react.default.createElement(_Elements.DeleteWrapper, null, _react.default.createElement(_Elements.GenDelButton, null, "\u2716"))), _react.default.createElement(_Elements.LaneMenuContent, null, _react.default.createElement(_Elements.LaneMenuItem, {
  onClick: onDelete
}, t('Delete lane'))));

var _default = LaneMenu;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/Loader.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/Loader.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Loader = __webpack_require__(/*! ../styles/Loader */ "./node_modules/react-trello/dist/styles/Loader.js");

const Loader = () => _react.default.createElement(_Loader.LoaderDiv, null, _react.default.createElement(_Loader.LoadingBar, null), _react.default.createElement(_Loader.LoadingBar, null), _react.default.createElement(_Loader.LoadingBar, null), _react.default.createElement(_Loader.LoadingBar, null));

var _default = Loader;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/NewCardForm.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/NewCardForm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Base = __webpack_require__(/*! ../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _Elements = __webpack_require__(/*! ../styles/Elements */ "./node_modules/react-trello/dist/styles/Elements.js");

var _EditableLabel = _interopRequireDefault(__webpack_require__(/*! ../widgets/EditableLabel */ "./node_modules/react-trello/dist/widgets/EditableLabel.js"));

class NewCardForm extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "updateField", (field, value) => {
      this.setState({
        [field]: value
      });
    });
    (0, _defineProperty2.default)(this, "handleAdd", () => {
      this.props.onAdd(this.state);
    });
  }

  render() {
    const _this$props = this.props,
          onCancel = _this$props.onCancel,
          t = _this$props.t;
    return _react.default.createElement(_Base.CardForm, null, _react.default.createElement(_Base.CardWrapper, null, _react.default.createElement(_Base.CardHeader, null, _react.default.createElement(_Base.CardTitle, null, _react.default.createElement(_EditableLabel.default, {
      placeholder: t('placeholder.title'),
      onChange: val => this.updateField('title', val),
      autoFocus: true
    })), _react.default.createElement(_Base.CardRightContent, null, _react.default.createElement(_EditableLabel.default, {
      placeholder: t('placeholder.label'),
      onChange: val => this.updateField('label', val)
    }))), _react.default.createElement(_Base.Detail, null, _react.default.createElement(_EditableLabel.default, {
      placeholder: t('placeholder.description'),
      onChange: val => this.updateField('description', val)
    }))), _react.default.createElement(_Elements.AddButton, {
      onClick: this.handleAdd
    }, t('button.Add card')), _react.default.createElement(_Elements.CancelButton, {
      onClick: onCancel
    }, t('button.Cancel')));
  }

}

NewCardForm.propTypes = {
  onCancel: _propTypes.default.func.isRequired,
  onAdd: _propTypes.default.func.isRequired,
  t: _propTypes.default.func.isRequired
};
NewCardForm.defaultProps = {};
var _default = NewCardForm;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/NewLaneForm.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/NewLaneForm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Base = __webpack_require__(/*! ../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _Elements = __webpack_require__(/*! ../styles/Elements */ "./node_modules/react-trello/dist/styles/Elements.js");

var _NewLaneTitleEditor = _interopRequireDefault(__webpack_require__(/*! ../widgets/NewLaneTitleEditor */ "./node_modules/react-trello/dist/widgets/NewLaneTitleEditor.js"));

var _v = _interopRequireDefault(__webpack_require__(/*! uuid/v1 */ "./node_modules/react-trello/node_modules/uuid/v1.js"));

class NewLane extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "handleSubmit", () => {
      this.props.onAdd({
        id: (0, _v.default)(),
        title: this.getValue()
      });
    });
    (0, _defineProperty2.default)(this, "getValue", () => this.refInput.getValue());
    (0, _defineProperty2.default)(this, "onClickOutside", (a, b, c) => {
      if (this.getValue().length > 0) {
        this.handleSubmit();
      } else {
        this.props.onCancel();
      }
    });
  }

  render() {
    const _this$props = this.props,
          onCancel = _this$props.onCancel,
          t = _this$props.t;
    return _react.default.createElement(_Base.Section, null, _react.default.createElement(_Base.LaneTitle, null, _react.default.createElement(_NewLaneTitleEditor.default, {
      ref: _ref => this.refInput = _ref,
      placeholder: t('placeholder.title'),
      onCancel: this.props.onCancel,
      onSave: this.handleSubmit,
      resize: "vertical",
      border: true,
      autoFocus: true
    })), _react.default.createElement(_Base.NewLaneButtons, null, _react.default.createElement(_Elements.AddButton, {
      onClick: this.handleSubmit
    }, t('button.Add lane')), _react.default.createElement(_Elements.CancelButton, {
      onClick: onCancel
    }, t('button.Cancel'))));
  }

}

NewLane.propTypes = {
  onCancel: _propTypes.default.func.isRequired,
  onAdd: _propTypes.default.func.isRequired,
  t: _propTypes.default.func.isRequired
};
NewLane.defaultProps = {};
var _default = NewLane;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/NewLaneSection.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/NewLaneSection.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Base = __webpack_require__(/*! ../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _Elements = __webpack_require__(/*! ../styles/Elements */ "./node_modules/react-trello/dist/styles/Elements.js");

var _default = ({
  t,
  onClick
}) => _react.default.createElement(_Base.NewLaneSection, null, _react.default.createElement(_Elements.AddLaneLink, {
  t: t,
  onClick: onClick
}, t('Add another lane')));

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/components/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-trello/dist/components/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _LaneHeader = _interopRequireDefault(__webpack_require__(/*! ./Lane/LaneHeader */ "./node_modules/react-trello/dist/components/Lane/LaneHeader.js"));

var _LaneFooter = _interopRequireDefault(__webpack_require__(/*! ./Lane/LaneFooter */ "./node_modules/react-trello/dist/components/Lane/LaneFooter.js"));

var _Card = _interopRequireDefault(__webpack_require__(/*! ./Card */ "./node_modules/react-trello/dist/components/Card.js"));

var _Loader = _interopRequireDefault(__webpack_require__(/*! ./Loader */ "./node_modules/react-trello/dist/components/Loader.js"));

var _NewLaneForm = _interopRequireDefault(__webpack_require__(/*! ./NewLaneForm */ "./node_modules/react-trello/dist/components/NewLaneForm.js"));

var _NewCardForm = _interopRequireDefault(__webpack_require__(/*! ./NewCardForm */ "./node_modules/react-trello/dist/components/NewCardForm.js"));

var _AddCardLink = _interopRequireDefault(__webpack_require__(/*! ./AddCardLink */ "./node_modules/react-trello/dist/components/AddCardLink.js"));

var _NewLaneSection = _interopRequireDefault(__webpack_require__(/*! ./NewLaneSection */ "./node_modules/react-trello/dist/components/NewLaneSection.js"));

var _Base = __webpack_require__(/*! ../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _default = {
  GlobalStyle: _Base.GlobalStyle,
  BoardWrapper: _Base.BoardWrapper,
  Loader: _Loader.default,
  ScrollableLane: _Base.ScrollableLane,
  LaneHeader: _LaneHeader.default,
  LaneFooter: _LaneFooter.default,
  Section: _Base.Section,
  NewLaneForm: _NewLaneForm.default,
  NewLaneSection: _NewLaneSection.default,
  NewCardForm: _NewCardForm.default,
  Card: _Card.default,
  AddCardLink: _AddCardLink.default
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/controllers/Board.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-trello/dist/controllers/Board.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-trello/node_modules/react-redux/es/index.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxLogger = _interopRequireDefault(__webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js"));

var _v = _interopRequireDefault(__webpack_require__(/*! uuid/v1 */ "./node_modules/react-trello/node_modules/uuid/v1.js"));

var _BoardContainer = _interopRequireDefault(__webpack_require__(/*! ./BoardContainer */ "./node_modules/react-trello/dist/controllers/BoardContainer.js"));

var _createTranslate = _interopRequireDefault(__webpack_require__(/*! ../helpers/createTranslate */ "./node_modules/react-trello/dist/helpers/createTranslate.js"));

var _BoardReducer = _interopRequireDefault(__webpack_require__(/*! ../reducers/BoardReducer */ "./node_modules/react-trello/dist/reducers/BoardReducer.js"));

const middlewares = process.env.REDUX_LOGGING ? [_reduxLogger.default] : [];

class Board extends _react.Component {
  constructor({
    id
  }) {
    super();
    (0, _defineProperty2.default)(this, "getStore", () => {
      //When you create multiple boards, unique stores are created for isolation
      return (0, _redux.createStore)(_BoardReducer.default, (0, _redux.applyMiddleware)(...middlewares));
    });
    this.store = this.getStore();
    this.id = id || (0, _v.default)();
  }

  render() {
    const _this$props = this.props,
          id = _this$props.id,
          className = _this$props.className,
          components = _this$props.components;
    const allClassNames = (0, _classnames.default)('react-trello-board', className || '');
    return _react.default.createElement(_reactRedux.Provider, {
      store: this.store
    }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(components.GlobalStyle, null), _react.default.createElement(_BoardContainer.default, (0, _extends2.default)({
      id: this.id
    }, this.props, {
      className: allClassNames
    }))));
  }

}

exports["default"] = Board;

/***/ }),

/***/ "./node_modules/react-trello/dist/controllers/BoardContainer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-trello/dist/controllers/BoardContainer.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-trello/node_modules/react-redux/es/index.js");

var _Container = _interopRequireDefault(__webpack_require__(/*! ../dnd/Container */ "./node_modules/react-trello/dist/dnd/Container.js"));

var _Draggable = _interopRequireDefault(__webpack_require__(/*! ../dnd/Draggable */ "./node_modules/react-trello/dist/dnd/Draggable.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _pick = _interopRequireDefault(__webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js"));

var _isEqual = _interopRequireDefault(__webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js"));

var _Lane = _interopRequireDefault(__webpack_require__(/*! ./Lane */ "./node_modules/react-trello/dist/controllers/Lane.js"));

var _reactPopopo = __webpack_require__(/*! react-popopo */ "./node_modules/react-popopo/dist/index.js");

var boardActions = _interopRequireWildcard(__webpack_require__(/*! ../actions/BoardActions */ "./node_modules/react-trello/dist/actions/BoardActions.js"));

var laneActions = _interopRequireWildcard(__webpack_require__(/*! ../actions/LaneActions */ "./node_modules/react-trello/dist/actions/LaneActions.js"));

class BoardContainer extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "state", {
      addLaneMode: false
    });
    (0, _defineProperty2.default)(this, "onDragStart", ({
      payload
    }) => {
      const handleLaneDragStart = this.props.handleLaneDragStart;
      handleLaneDragStart(payload.id);
    });
    (0, _defineProperty2.default)(this, "onLaneDrop", ({
      removedIndex,
      addedIndex,
      payload
    }) => {
      const _this$props = this.props,
            actions = _this$props.actions,
            handleLaneDragEnd = _this$props.handleLaneDragEnd;

      if (removedIndex !== addedIndex) {
        actions.moveLane({
          oldIndex: removedIndex,
          newIndex: addedIndex
        });
        handleLaneDragEnd(removedIndex, addedIndex, payload);
      }
    });
    (0, _defineProperty2.default)(this, "getCardDetails", (laneId, cardIndex) => {
      return this.props.reducerData.lanes.find(lane => lane.id === laneId).cards[cardIndex];
    });
    (0, _defineProperty2.default)(this, "getLaneDetails", index => {
      return this.props.reducerData.lanes[index];
    });
    (0, _defineProperty2.default)(this, "wireEventBus", () => {
      const _this$props2 = this.props,
            actions = _this$props2.actions,
            eventBusHandle = _this$props2.eventBusHandle;
      let eventBus = {
        publish: event => {
          switch (event.type) {
            case 'ADD_CARD':
              return actions.addCard({
                laneId: event.laneId,
                card: event.card
              });

            case 'UPDATE_CARD':
              return actions.updateCard({
                laneId: event.laneId,
                card: event.card
              });

            case 'REMOVE_CARD':
              return actions.removeCard({
                laneId: event.laneId,
                cardId: event.cardId
              });

            case 'REFRESH_BOARD':
              return actions.loadBoard(event.data);

            case 'MOVE_CARD':
              return actions.moveCardAcrossLanes({
                fromLaneId: event.fromLaneId,
                toLaneId: event.toLaneId,
                cardId: event.cardId,
                index: event.index
              });

            case 'UPDATE_CARDS':
              return actions.updateCards({
                laneId: event.laneId,
                cards: event.cards
              });

            case 'UPDATE_CARD':
              return actions.updateCard({
                laneId: event.laneId,
                updatedCard: event.card
              });

            case 'UPDATE_LANES':
              return actions.updateLanes(event.lanes);

            case 'UPDATE_LANE':
              return actions.updateLane(event.lane);
          }
        }
      };
      eventBusHandle(eventBus);
    });
    (0, _defineProperty2.default)(this, "hideEditableLane", () => {
      this.setState({
        addLaneMode: false
      });
    });
    (0, _defineProperty2.default)(this, "showEditableLane", () => {
      this.setState({
        addLaneMode: true
      });
    });
    (0, _defineProperty2.default)(this, "addNewLane", params => {
      this.hideEditableLane();
      this.props.actions.addLane(params);
      this.props.onLaneAdd(params);
    });
  }

  componentDidMount() {
    const _this$props3 = this.props,
          actions = _this$props3.actions,
          eventBusHandle = _this$props3.eventBusHandle;
    actions.loadBoard(this.props.data);

    if (eventBusHandle) {
      this.wireEventBus();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // nextProps.data changes when external Board input props change and nextProps.reducerData changes due to event bus or UI changes
    const _this$props4 = this.props,
          data = _this$props4.data,
          reducerData = _this$props4.reducerData,
          onDataChange = _this$props4.onDataChange;

    if (nextProps.reducerData && !(0, _isEqual.default)(reducerData, nextProps.reducerData)) {
      onDataChange(nextProps.reducerData);
    }

    if (nextProps.data && !(0, _isEqual.default)(nextProps.data, data)) {
      this.props.actions.loadBoard(nextProps.data);
      onDataChange(nextProps.data);
    }
  }

  get groupName() {
    const id = this.props.id;
    return "TrelloBoard".concat(id);
  }

  render() {
    const _this$props5 = this.props,
          id = _this$props5.id,
          components = _this$props5.components,
          reducerData = _this$props5.reducerData,
          draggable = _this$props5.draggable,
          laneDraggable = _this$props5.laneDraggable,
          laneDragClass = _this$props5.laneDragClass,
          laneDropClass = _this$props5.laneDropClass,
          style = _this$props5.style,
          onDataChange = _this$props5.onDataChange,
          onCardAdd = _this$props5.onCardAdd,
          onCardUpdate = _this$props5.onCardUpdate,
          onCardClick = _this$props5.onCardClick,
          onBeforeCardDelete = _this$props5.onBeforeCardDelete,
          onCardDelete = _this$props5.onCardDelete,
          onLaneScroll = _this$props5.onLaneScroll,
          onLaneClick = _this$props5.onLaneClick,
          onLaneAdd = _this$props5.onLaneAdd,
          onLaneDelete = _this$props5.onLaneDelete,
          onLaneUpdate = _this$props5.onLaneUpdate,
          editable = _this$props5.editable,
          canAddLanes = _this$props5.canAddLanes,
          laneStyle = _this$props5.laneStyle,
          onCardMoveAcrossLanes = _this$props5.onCardMoveAcrossLanes,
          t = _this$props5.t,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props5, ["id", "components", "reducerData", "draggable", "laneDraggable", "laneDragClass", "laneDropClass", "style", "onDataChange", "onCardAdd", "onCardUpdate", "onCardClick", "onBeforeCardDelete", "onCardDelete", "onLaneScroll", "onLaneClick", "onLaneAdd", "onLaneDelete", "onLaneUpdate", "editable", "canAddLanes", "laneStyle", "onCardMoveAcrossLanes", "t"]);
    const addLaneMode = this.state.addLaneMode; // Stick to whitelisting attributes to segregate board and lane props

    const passthroughProps = (0, _pick.default)(this.props, ['onCardMoveAcrossLanes', 'onLaneScroll', 'onLaneDelete', 'onLaneUpdate', 'onCardClick', 'onBeforeCardDelete', 'onCardDelete', 'onCardAdd', 'onCardUpdate', 'onLaneClick', 'laneSortFunction', 'draggable', 'laneDraggable', 'cardDraggable', 'collapsibleLanes', 'canAddLanes', 'hideCardDeleteIcon', 'tagStyle', 'handleDragStart', 'handleDragEnd', 'cardDragClass', 'editLaneTitle', 't']);
    return _react.default.createElement(components.BoardWrapper, (0, _extends2.default)({
      style: style
    }, otherProps, {
      draggable: false
    }), _react.default.createElement(_reactPopopo.PopoverWrapper, null, _react.default.createElement(_Container.default, {
      orientation: "horizontal",
      onDragStart: this.onDragStart,
      dragClass: laneDragClass,
      dropClass: laneDropClass,
      onDrop: this.onLaneDrop,
      lockAxis: "x",
      getChildPayload: index => this.getLaneDetails(index),
      groupName: this.groupName
    }, reducerData.lanes.map((lane, index) => {
      const id = lane.id,
            droppable = lane.droppable,
            otherProps = (0, _objectWithoutProperties2.default)(lane, ["id", "droppable"]);

      const laneToRender = _react.default.createElement(_Lane.default, (0, _extends2.default)({
        key: id,
        boardId: this.groupName,
        components: components,
        id: id,
        getCardDetails: this.getCardDetails,
        index: index,
        droppable: droppable === undefined ? true : droppable,
        style: laneStyle || lane.style || {},
        labelStyle: lane.labelStyle || {},
        cardStyle: this.props.cardStyle || lane.cardStyle,
        editable: editable && !lane.disallowAddingCard
      }, otherProps, passthroughProps));

      return draggable && laneDraggable ? _react.default.createElement(_Draggable.default, {
        key: lane.id
      }, laneToRender) : laneToRender;
    }))), canAddLanes && _react.default.createElement(_Container.default, {
      orientation: "horizontal"
    }, editable && !addLaneMode ? _react.default.createElement(components.NewLaneSection, {
      t: t,
      onClick: this.showEditableLane
    }) : addLaneMode && _react.default.createElement(components.NewLaneForm, {
      onCancel: this.hideEditableLane,
      onAdd: this.addNewLane,
      t: t
    })));
  }

}

BoardContainer.propTypes = {
  id: _propTypes.default.string,
  components: _propTypes.default.object,
  actions: _propTypes.default.object,
  data: _propTypes.default.object.isRequired,
  reducerData: _propTypes.default.object,
  onDataChange: _propTypes.default.func,
  eventBusHandle: _propTypes.default.func,
  onLaneScroll: _propTypes.default.func,
  onCardClick: _propTypes.default.func,
  onBeforeCardDelete: _propTypes.default.func,
  onCardDelete: _propTypes.default.func,
  onCardAdd: _propTypes.default.func,
  onCardUpdate: _propTypes.default.func,
  onLaneAdd: _propTypes.default.func,
  onLaneDelete: _propTypes.default.func,
  onLaneClick: _propTypes.default.func,
  onLaneUpdate: _propTypes.default.func,
  laneSortFunction: _propTypes.default.func,
  draggable: _propTypes.default.bool,
  collapsibleLanes: _propTypes.default.bool,
  editable: _propTypes.default.bool,
  canAddLanes: _propTypes.default.bool,
  hideCardDeleteIcon: _propTypes.default.bool,
  handleDragStart: _propTypes.default.func,
  handleDragEnd: _propTypes.default.func,
  handleLaneDragStart: _propTypes.default.func,
  handleLaneDragEnd: _propTypes.default.func,
  style: _propTypes.default.object,
  tagStyle: _propTypes.default.object,
  laneDraggable: _propTypes.default.bool,
  cardDraggable: _propTypes.default.bool,
  cardDragClass: _propTypes.default.string,
  laneDragClass: _propTypes.default.string,
  laneDropClass: _propTypes.default.string,
  onCardMoveAcrossLanes: _propTypes.default.func.isRequired,
  t: _propTypes.default.func.isRequired
};
BoardContainer.defaultProps = {
  t: v => v,
  onDataChange: () => {},
  handleDragStart: () => {},
  handleDragEnd: () => {},
  handleLaneDragStart: () => {},
  handleLaneDragEnd: () => {},
  onCardUpdate: () => {},
  onLaneAdd: () => {},
  onLaneDelete: () => {},
  onCardMoveAcrossLanes: () => {},
  onLaneUpdate: () => {},
  editable: false,
  canAddLanes: false,
  hideCardDeleteIcon: false,
  draggable: false,
  collapsibleLanes: false,
  laneDraggable: true,
  cardDraggable: true,
  cardDragClass: 'react_trello_dragClass',
  laneDragClass: 'react_trello_dragLaneClass',
  laneDropClass: ''
};

const mapStateToProps = state => {
  return state.lanes ? {
    reducerData: state
  } : {};
};

const mapDispatchToProps = dispatch => ({
  actions: (0, _redux.bindActionCreators)((0, _objectSpread2.default)({}, boardActions, laneActions), dispatch)
});

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BoardContainer);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/controllers/Lane.js":
/*!************************************************************!*\
  !*** ./node_modules/react-trello/dist/controllers/Lane.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-trello/node_modules/react-redux/es/index.js");

var _isEqual = _interopRequireDefault(__webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js"));

var _cloneDeep = _interopRequireDefault(__webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js"));

var _pick = _interopRequireDefault(__webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js"));

var _v = _interopRequireDefault(__webpack_require__(/*! uuid/v1 */ "./node_modules/react-trello/node_modules/uuid/v1.js"));

var _Container = _interopRequireDefault(__webpack_require__(/*! ../dnd/Container */ "./node_modules/react-trello/dist/dnd/Container.js"));

var _Draggable = _interopRequireDefault(__webpack_require__(/*! ../dnd/Draggable */ "./node_modules/react-trello/dist/dnd/Draggable.js"));

var laneActions = _interopRequireWildcard(__webpack_require__(/*! ../actions/LaneActions */ "./node_modules/react-trello/dist/actions/LaneActions.js"));

class Lane extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "state", {
      loading: false,
      currentPage: this.props.currentPage,
      addCardMode: false,
      collapsed: false,
      isDraggingOver: false
    });
    (0, _defineProperty2.default)(this, "handleScroll", evt => {
      const node = evt.target;
      const elemScrollPosition = node.scrollHeight - node.scrollTop - node.clientHeight;
      const onLaneScroll = this.props.onLaneScroll; // In some browsers and/or screen sizes a decimal rest value between 0 and 1 exists, so it should be checked on < 1 instead of < 0

      if (elemScrollPosition < 1 && onLaneScroll && !this.state.loading) {
        const currentPage = this.state.currentPage;
        this.setState({
          loading: true
        });
        const nextPage = currentPage + 1;
        onLaneScroll(nextPage, this.props.id).then(moreCards => {
          if ((moreCards || []).length > 0) {
            this.props.actions.paginateLane({
              laneId: this.props.id,
              newCards: moreCards,
              nextPage: nextPage
            });
          }

          this.setState({
            loading: false
          });
        });
      }
    });
    (0, _defineProperty2.default)(this, "laneDidMount", node => {
      if (node) {
        node.addEventListener('scroll', this.handleScroll);
      }
    });
    (0, _defineProperty2.default)(this, "removeCard", cardId => {
      if (this.props.onBeforeCardDelete && typeof this.props.onBeforeCardDelete === 'function') {
        this.props.onBeforeCardDelete(() => {
          this.props.onCardDelete && this.props.onCardDelete(cardId, this.props.id);
          this.props.actions.removeCard({
            laneId: this.props.id,
            cardId: cardId
          });
        });
      } else {
        this.props.onCardDelete && this.props.onCardDelete(cardId, this.props.id);
        this.props.actions.removeCard({
          laneId: this.props.id,
          cardId: cardId
        });
      }
    });
    (0, _defineProperty2.default)(this, "handleCardClick", (e, card) => {
      const onCardClick = this.props.onCardClick;
      onCardClick && onCardClick(card.id, card.metadata, card.laneId);
      e.stopPropagation();
    });
    (0, _defineProperty2.default)(this, "showEditableCard", () => {
      this.setState({
        addCardMode: true
      });
    });
    (0, _defineProperty2.default)(this, "hideEditableCard", () => {
      this.setState({
        addCardMode: false
      });
    });
    (0, _defineProperty2.default)(this, "addNewCard", params => {
      const laneId = this.props.id;
      const id = (0, _v.default)();
      this.hideEditableCard();
      let card = (0, _objectSpread2.default)({
        id
      }, params);
      this.props.actions.addCard({
        laneId,
        card
      });
      this.props.onCardAdd(card, laneId);
    });
    (0, _defineProperty2.default)(this, "onDragStart", ({
      payload
    }) => {
      const handleDragStart = this.props.handleDragStart;
      handleDragStart && handleDragStart(payload.id, payload.laneId);
    });
    (0, _defineProperty2.default)(this, "shouldAcceptDrop", sourceContainerOptions => {
      return this.props.droppable && sourceContainerOptions.groupName === this.groupName;
    });
    (0, _defineProperty2.default)(this, "onDragEnd", (laneId, result) => {
      const handleDragEnd = this.props.handleDragEnd;
      const addedIndex = result.addedIndex,
            payload = result.payload;

      if (this.state.isDraggingOver) {
        this.setState({
          isDraggingOver: false
        });
      }

      if (addedIndex != null) {
        const newCard = (0, _objectSpread2.default)({}, (0, _cloneDeep.default)(payload), {
          laneId
        });
        const response = handleDragEnd ? handleDragEnd(payload.id, payload.laneId, laneId, addedIndex, newCard) : true;

        if (response === undefined || !!response) {
          this.props.actions.moveCardAcrossLanes({
            fromLaneId: payload.laneId,
            toLaneId: laneId,
            cardId: payload.id,
            index: addedIndex
          });
          this.props.onCardMoveAcrossLanes(payload.laneId, laneId, payload.id, addedIndex);
        }

        return response;
      }
    });
    (0, _defineProperty2.default)(this, "updateCard", updatedCard => {
      this.props.actions.updateCard({
        laneId: this.props.id,
        card: updatedCard
      });
      this.props.onCardUpdate(this.props.id, updatedCard);
    });
    (0, _defineProperty2.default)(this, "renderDragContainer", isDraggingOver => {
      const _this$props = this.props,
            id = _this$props.id,
            cards = _this$props.cards,
            laneSortFunction = _this$props.laneSortFunction,
            editable = _this$props.editable,
            hideCardDeleteIcon = _this$props.hideCardDeleteIcon,
            cardDraggable = _this$props.cardDraggable,
            cardDragClass = _this$props.cardDragClass,
            cardDropClass = _this$props.cardDropClass,
            tagStyle = _this$props.tagStyle,
            cardStyle = _this$props.cardStyle,
            components = _this$props.components,
            t = _this$props.t;
      const _this$state = this.state,
            addCardMode = _this$state.addCardMode,
            collapsed = _this$state.collapsed;
      const showableCards = collapsed ? [] : cards;
      const cardList = this.sortCards(showableCards, laneSortFunction).map((card, idx) => {
        const onDeleteCard = () => this.removeCard(card.id);

        const cardToRender = _react.default.createElement(components.Card, (0, _extends2.default)({
          key: card.id,
          index: idx,
          style: card.style || cardStyle,
          className: "react-trello-card",
          onDelete: onDeleteCard,
          onClick: e => this.handleCardClick(e, card),
          onChange: updatedCard => this.updateCard(updatedCard),
          showDeleteButton: !hideCardDeleteIcon,
          tagStyle: tagStyle,
          cardDraggable: cardDraggable,
          editable: editable,
          t: t
        }, card));

        return cardDraggable && (!card.hasOwnProperty('draggable') || card.draggable) ? _react.default.createElement(_Draggable.default, {
          key: card.id
        }, cardToRender) : _react.default.createElement("span", {
          key: card.id
        }, cardToRender);
      });
      return _react.default.createElement(components.ScrollableLane, {
        ref: this.laneDidMount,
        isDraggingOver: isDraggingOver
      }, _react.default.createElement(_Container.default, {
        orientation: "vertical",
        groupName: this.groupName,
        dragClass: cardDragClass,
        dropClass: cardDropClass,
        onDragStart: this.onDragStart,
        onDrop: e => this.onDragEnd(id, e),
        onDragEnter: () => this.setState({
          isDraggingOver: true
        }),
        onDragLeave: () => this.setState({
          isDraggingOver: false
        }),
        shouldAcceptDrop: this.shouldAcceptDrop,
        getChildPayload: index => this.props.getCardDetails(id, index)
      }, cardList), editable && !addCardMode && _react.default.createElement(components.AddCardLink, {
        onClick: this.showEditableCard,
        t: t,
        laneId: id
      }), addCardMode && _react.default.createElement(components.NewCardForm, {
        onCancel: this.hideEditableCard,
        t: t,
        laneId: id,
        onAdd: this.addNewCard
      }));
    });
    (0, _defineProperty2.default)(this, "removeLane", () => {
      const id = this.props.id;
      this.props.actions.removeLane({
        laneId: id
      });
      this.props.onLaneDelete(id);
    });
    (0, _defineProperty2.default)(this, "updateTitle", value => {
      this.props.actions.updateLane({
        id: this.props.id,
        title: value
      });
      this.props.onLaneUpdate(this.props.id, {
        title: value
      });
    });
    (0, _defineProperty2.default)(this, "renderHeader", pickedProps => {
      const components = this.props.components;
      return _react.default.createElement(components.LaneHeader, (0, _extends2.default)({}, pickedProps, {
        onDelete: this.removeLane,
        onDoubleClick: this.toggleLaneCollapsed,
        updateTitle: this.updateTitle
      }));
    });
    (0, _defineProperty2.default)(this, "toggleLaneCollapsed", () => {
      this.props.collapsibleLanes && this.setState(state => ({
        collapsed: !state.collapsed
      }));
    });
  }

  sortCards(cards, sortFunction) {
    if (!cards) return [];
    if (!sortFunction) return cards;
    return cards.concat().sort(function (card1, card2) {
      return sortFunction(card1, card2);
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!(0, _isEqual.default)(this.props.cards, nextProps.cards)) {
      this.setState({
        currentPage: nextProps.currentPage
      });
    }
  }

  get groupName() {
    const boardId = this.props.boardId;
    return "TrelloBoard".concat(boardId, "Lane");
  }

  render() {
    const _this$state2 = this.state,
          loading = _this$state2.loading,
          isDraggingOver = _this$state2.isDraggingOver,
          collapsed = _this$state2.collapsed;
    const _this$props2 = this.props,
          id = _this$props2.id,
          cards = _this$props2.cards,
          collapsibleLanes = _this$props2.collapsibleLanes,
          components = _this$props2.components,
          onLaneClick = _this$props2.onLaneClick,
          onLaneScroll = _this$props2.onLaneScroll,
          onCardClick = _this$props2.onCardClick,
          onCardAdd = _this$props2.onCardAdd,
          onBeforeCardDelete = _this$props2.onBeforeCardDelete,
          onCardDelete = _this$props2.onCardDelete,
          onLaneDelete = _this$props2.onLaneDelete,
          onLaneUpdate = _this$props2.onLaneUpdate,
          onCardUpdate = _this$props2.onCardUpdate,
          onCardMoveAcrossLanes = _this$props2.onCardMoveAcrossLanes,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props2, ["id", "cards", "collapsibleLanes", "components", "onLaneClick", "onLaneScroll", "onCardClick", "onCardAdd", "onBeforeCardDelete", "onCardDelete", "onLaneDelete", "onLaneUpdate", "onCardUpdate", "onCardMoveAcrossLanes"]);
    const allClassNames = (0, _classnames.default)('react-trello-lane', this.props.className || '');
    const showFooter = collapsibleLanes && cards.length > 0;
    return _react.default.createElement(components.Section, (0, _extends2.default)({}, otherProps, {
      key: id,
      onClick: () => onLaneClick && onLaneClick(id),
      draggable: false,
      className: allClassNames
    }), this.renderHeader((0, _objectSpread2.default)({
      id,
      cards
    }, otherProps)), this.renderDragContainer(isDraggingOver), loading && _react.default.createElement(components.Loader, null), showFooter && _react.default.createElement(components.LaneFooter, {
      onClick: this.toggleLaneCollapsed,
      collapsed: collapsed
    }));
  }

}

Lane.propTypes = {
  actions: _propTypes.default.object,
  id: _propTypes.default.string.isRequired,
  boardId: _propTypes.default.string,
  title: _propTypes.default.node,
  index: _propTypes.default.number,
  laneSortFunction: _propTypes.default.func,
  style: _propTypes.default.object,
  cardStyle: _propTypes.default.object,
  tagStyle: _propTypes.default.object,
  titleStyle: _propTypes.default.object,
  labelStyle: _propTypes.default.object,
  cards: _propTypes.default.array,
  label: _propTypes.default.string,
  currentPage: _propTypes.default.number,
  draggable: _propTypes.default.bool,
  collapsibleLanes: _propTypes.default.bool,
  droppable: _propTypes.default.bool,
  onCardMoveAcrossLanes: _propTypes.default.func,
  onCardClick: _propTypes.default.func,
  onBeforeCardDelete: _propTypes.default.func,
  onCardDelete: _propTypes.default.func,
  onCardAdd: _propTypes.default.func,
  onCardUpdate: _propTypes.default.func,
  onLaneDelete: _propTypes.default.func,
  onLaneUpdate: _propTypes.default.func,
  onLaneClick: _propTypes.default.func,
  onLaneScroll: _propTypes.default.func,
  editable: _propTypes.default.bool,
  laneDraggable: _propTypes.default.bool,
  cardDraggable: _propTypes.default.bool,
  cardDragClass: _propTypes.default.string,
  cardDropClass: _propTypes.default.string,
  canAddLanes: _propTypes.default.bool,
  t: _propTypes.default.func.isRequired
};
Lane.defaultProps = {
  style: {},
  titleStyle: {},
  labelStyle: {},
  label: undefined,
  editable: false,
  onLaneUpdate: () => {},
  onCardAdd: () => {},
  onCardUpdate: () => {}
};

const mapDispatchToProps = dispatch => ({
  actions: (0, _redux.bindActionCreators)(laneActions, dispatch)
});

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Lane);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/dnd/Container.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-trello/dist/dnd/Container.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _trelloSmoothDnd = _interopRequireWildcard(__webpack_require__(/*! trello-smooth-dnd */ "./node_modules/trello-smooth-dnd/dist/index.js"));

_trelloSmoothDnd.default.dropHandler = _trelloSmoothDnd.dropHandlers.reactDropHandler().handler;

_trelloSmoothDnd.default.wrapChild = p => p; // dont wrap children they will already be wrapped


class Container extends _react.Component {
  constructor(props) {
    super(props);
    this.getContainerOptions = this.getContainerOptions.bind(this);
    this.setRef = this.setRef.bind(this);
    this.prevContainer = null;
  }

  componentDidMount() {
    this.containerDiv = this.containerDiv || _reactDom.default.findDOMNode(this);
    this.prevContainer = this.containerDiv;
    this.container = (0, _trelloSmoothDnd.default)(this.containerDiv, this.getContainerOptions());
  }

  componentWillUnmount() {
    this.container.dispose();
    this.container = null;
  }

  componentDidUpdate() {
    this.containerDiv = this.containerDiv || _reactDom.default.findDOMNode(this);

    if (this.containerDiv) {
      if (this.prevContainer && this.prevContainer !== this.containerDiv) {
        this.container.dispose();
        this.container = (0, _trelloSmoothDnd.default)(this.containerDiv, this.getContainerOptions());
        this.prevContainer = this.containerDiv;
      }
    }
  }

  render() {
    if (this.props.render) {
      return this.props.render(this.setRef);
    } else {
      return _react.default.createElement("div", {
        style: this.props.style,
        ref: this.setRef
      }, this.props.children);
    }
  }

  setRef(element) {
    this.containerDiv = element;
  }

  getContainerOptions() {
    const functionProps = {};

    if (this.props.onDragStart) {
      functionProps.onDragStart = (...p) => this.props.onDragStart(...p);
    }

    if (this.props.onDragEnd) {
      functionProps.onDragEnd = (...p) => this.props.onDragEnd(...p);
    }

    if (this.props.onDrop) {
      functionProps.onDrop = (...p) => this.props.onDrop(...p);
    }

    if (this.props.getChildPayload) {
      functionProps.getChildPayload = (...p) => this.props.getChildPayload(...p);
    }

    if (this.props.shouldAnimateDrop) {
      functionProps.shouldAnimateDrop = (...p) => this.props.shouldAnimateDrop(...p);
    }

    if (this.props.shouldAcceptDrop) {
      functionProps.shouldAcceptDrop = (...p) => this.props.shouldAcceptDrop(...p);
    }

    if (this.props.onDragEnter) {
      functionProps.onDragEnter = (...p) => this.props.onDragEnter(...p);
    }

    if (this.props.onDragLeave) {
      functionProps.onDragLeave = (...p) => this.props.onDragLeave(...p);
    }

    if (this.props.render) {
      functionProps.render = (...p) => this.props.render(...p);
    }

    if (this.props.onDropReady) {
      functionProps.onDropReady = (...p) => this.props.onDropReady(...p);
    }

    if (this.props.getGhostParent) {
      functionProps.getGhostParent = (...p) => this.props.getGhostParent(...p);
    }

    return Object.assign({}, this.props, functionProps);
  }

}

Container.propTypes = {
  behaviour: _propTypes.default.oneOf(["move", "copy", "drag-zone"]),
  groupName: _propTypes.default.string,
  orientation: _propTypes.default.oneOf(["horizontal", "vertical"]),
  style: _propTypes.default.object,
  dragHandleSelector: _propTypes.default.string,
  className: _propTypes.default.string,
  nonDragAreaSelector: _propTypes.default.string,
  dragBeginDelay: _propTypes.default.number,
  animationDuration: _propTypes.default.number,
  autoScrollEnabled: _propTypes.default.string,
  lockAxis: _propTypes.default.string,
  dragClass: _propTypes.default.string,
  dropClass: _propTypes.default.string,
  onDragStart: _propTypes.default.func,
  onDragEnd: _propTypes.default.func,
  onDrop: _propTypes.default.func,
  getChildPayload: _propTypes.default.func,
  shouldAnimateDrop: _propTypes.default.func,
  shouldAcceptDrop: _propTypes.default.func,
  onDragEnter: _propTypes.default.func,
  onDragLeave: _propTypes.default.func,
  render: _propTypes.default.func,
  getGhostParent: _propTypes.default.func,
  removeOnDropOut: _propTypes.default.bool
};
Container.defaultProps = {
  behaviour: 'move',
  orientation: 'vertical',
  className: 'reactTrelloBoard'
};
var _default = Container;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/dnd/Draggable.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-trello/dist/dnd/Draggable.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _trelloSmoothDnd = __webpack_require__(/*! trello-smooth-dnd */ "./node_modules/trello-smooth-dnd/dist/index.js");

const wrapperClass = _trelloSmoothDnd.constants.wrapperClass;

class Draggable extends _react.Component {
  render() {
    if (this.props.render) {
      return _react.default.cloneElement(this.props.render(), {
        className: wrapperClass
      });
    }

    const clsName = "".concat(this.props.className ? this.props.className + ' ' : '');
    return _react.default.createElement("div", (0, _extends2.default)({}, this.props, {
      className: "".concat(clsName).concat(wrapperClass)
    }), this.props.children);
  }

}

Draggable.propTypes = {
  render: _propTypes.default.func
};
var _default = Draggable;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/helpers/LaneHelper.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-trello/dist/helpers/LaneHelper.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _immutabilityHelper = _interopRequireDefault(__webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js"));

const LaneHelper = {
  initialiseLanes: (state, {
    lanes
  }) => {
    const newLanes = lanes.map(lane => {
      lane.currentPage = 1;
      lane.cards && lane.cards.forEach(c => c.laneId = lane.id);
      return lane;
    });
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: newLanes
      }
    });
  },
  paginateLane: (state, {
    laneId,
    newCards,
    nextPage
  }) => {
    const updatedLanes = LaneHelper.appendCardsToLane(state, {
      laneId: laneId,
      newCards: newCards
    });
    updatedLanes.find(lane => lane.id === laneId).currentPage = nextPage;
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: updatedLanes
      }
    });
  },
  appendCardsToLane: (state, {
    laneId,
    newCards,
    index
  }) => {
    const lane = state.lanes.find(lane => lane.id === laneId);
    newCards = newCards.map(c => (0, _immutabilityHelper.default)(c, {
      laneId: {
        $set: laneId
      }
    })).filter(c => lane.cards.find(card => card.id === c.id) == null);
    return state.lanes.map(lane => {
      if (lane.id === laneId) {
        if (index !== undefined) {
          return (0, _immutabilityHelper.default)(lane, {
            cards: {
              $splice: [[index, 0, ...newCards]]
            }
          });
        } else {
          const cardsToUpdate = [...lane.cards, ...newCards];
          return (0, _immutabilityHelper.default)(lane, {
            cards: {
              $set: cardsToUpdate
            }
          });
        }
      } else {
        return lane;
      }
    });
  },
  appendCardToLane: (state, {
    laneId,
    card,
    index
  }) => {
    const newLanes = LaneHelper.appendCardsToLane(state, {
      laneId: laneId,
      newCards: [card],
      index
    });
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: newLanes
      }
    });
  },
  addLane: (state, lane) => {
    const newLane = (0, _objectSpread2.default)({
      cards: []
    }, lane);
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $push: [newLane]
      }
    });
  },
  updateLane: (state, updatedLane) => {
    const newLanes = state.lanes.map(lane => {
      if (updatedLane.id == lane.id) {
        return (0, _objectSpread2.default)({}, lane, updatedLane);
      } else {
        return lane;
      }
    });
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: newLanes
      }
    });
  },
  removeCardFromLane: (state, {
    laneId,
    cardId
  }) => {
    const lanes = state.lanes.map(lane => {
      if (lane.id === laneId) {
        let newCards = lane.cards.filter(card => card.id !== cardId);
        return (0, _immutabilityHelper.default)(lane, {
          cards: {
            $set: newCards
          }
        });
      } else {
        return lane;
      }
    });
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: lanes
      }
    });
  },
  moveCardAcrossLanes: (state, {
    fromLaneId,
    toLaneId,
    cardId,
    index
  }) => {
    let cardToMove = null;
    const interimLanes = state.lanes.map(lane => {
      if (lane.id === fromLaneId) {
        cardToMove = lane.cards.find(card => card.id === cardId);
        const newCards = lane.cards.filter(card => card.id !== cardId);
        return (0, _immutabilityHelper.default)(lane, {
          cards: {
            $set: newCards
          }
        });
      } else {
        return lane;
      }
    });
    const updatedState = (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: interimLanes
      }
    });
    return LaneHelper.appendCardToLane(updatedState, {
      laneId: toLaneId,
      card: cardToMove,
      index: index
    });
  },
  updateCardsForLane: (state, {
    laneId,
    cards
  }) => {
    const lanes = state.lanes.map(lane => {
      if (lane.id === laneId) {
        return (0, _immutabilityHelper.default)(lane, {
          cards: {
            $set: cards
          }
        });
      } else {
        return lane;
      }
    });
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: lanes
      }
    });
  },
  updateCardForLane: (state, {
    laneId,
    card: updatedCard
  }) => {
    const lanes = state.lanes.map(lane => {
      if (lane.id === laneId) {
        const cards = lane.cards.map(card => {
          if (card.id === updatedCard.id) {
            return (0, _objectSpread2.default)({}, card, updatedCard);
          } else {
            return card;
          }
        });
        return (0, _immutabilityHelper.default)(lane, {
          cards: {
            $set: cards
          }
        });
      } else {
        return lane;
      }
    });
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: lanes
      }
    });
  },
  updateLanes: (state, lanes) => {
    return (0, _objectSpread2.default)({}, state, {
      lanes: lanes
    });
  },
  moveLane: (state, {
    oldIndex,
    newIndex
  }) => {
    const laneToMove = state.lanes[oldIndex];
    const tempState = (0, _immutabilityHelper.default)(state, {
      lanes: {
        $splice: [[oldIndex, 1]]
      }
    });
    return (0, _immutabilityHelper.default)(tempState, {
      lanes: {
        $splice: [[newIndex, 0, laneToMove]]
      }
    });
  },
  removeLane: (state, {
    laneId
  }) => {
    const updatedLanes = state.lanes.filter(lane => lane.id !== laneId);
    return (0, _immutabilityHelper.default)(state, {
      lanes: {
        $set: updatedLanes
      }
    });
  }
};
var _default = LaneHelper;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/helpers/createTranslate.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-trello/dist/helpers/createTranslate.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _default = TABLE => key => (0, _get.default)(TABLE, key);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/helpers/deprecationWarnings.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-trello/dist/helpers/deprecationWarnings.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const REPLACE_TABLE = {
  addCardLink: 'components.Card',
  customLaneHeader: 'components.LaneHeader',
  newLaneTemplate: 'components.NewLaneSection',
  newCardTemplate: 'components.NewCardForm',
  children: 'components.Card',
  customCardLayout: 'components.Card',
  addLaneTitle: '`t` function with key "Add another lane"',
  addCardLink: '`t` function with key "Click to add card"'
};

const warn = prop => {
  const use = REPLACE_TABLE[prop];
  console.warn("react-trello property '".concat(prop, "' is removed. Use '").concat(use, "' instead. More - https://github.com/rcdexta/react-trello/blob/master/UPGRADE.md"));
};

var _default = props => {
  Object.keys(REPLACE_TABLE).forEach(key => {
    if (props.hasOwnProperty(key)) {
      warn(key);
    }
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-trello/dist/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Draggable", ({
  enumerable: true,
  get: function get() {
    return _Draggable.default;
  }
}));
Object.defineProperty(exports, "Container", ({
  enumerable: true,
  get: function get() {
    return _Container.default;
  }
}));
Object.defineProperty(exports, "BoardContainer", ({
  enumerable: true,
  get: function get() {
    return _BoardContainer.default;
  }
}));
Object.defineProperty(exports, "Lane", ({
  enumerable: true,
  get: function get() {
    return _Lane.default;
  }
}));
Object.defineProperty(exports, "components", ({
  enumerable: true,
  get: function get() {
    return _components.default;
  }
}));
Object.defineProperty(exports, "locales", ({
  enumerable: true,
  get: function get() {
    return _locales.default;
  }
}));
Object.defineProperty(exports, "widgets", ({
  enumerable: true,
  get: function get() {
    return _widgets.default;
  }
}));
Object.defineProperty(exports, "createTranslate", ({
  enumerable: true,
  get: function get() {
    return _createTranslate.default;
  }
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Draggable = _interopRequireDefault(__webpack_require__(/*! ./dnd/Draggable */ "./node_modules/react-trello/dist/dnd/Draggable.js"));

var _Container = _interopRequireDefault(__webpack_require__(/*! ./dnd/Container */ "./node_modules/react-trello/dist/dnd/Container.js"));

var _BoardContainer = _interopRequireDefault(__webpack_require__(/*! ./controllers/BoardContainer */ "./node_modules/react-trello/dist/controllers/BoardContainer.js"));

var _Board = _interopRequireDefault(__webpack_require__(/*! ./controllers/Board */ "./node_modules/react-trello/dist/controllers/Board.js"));

var _Lane = _interopRequireDefault(__webpack_require__(/*! ./controllers/Lane */ "./node_modules/react-trello/dist/controllers/Lane.js"));

var _deprecationWarnings = _interopRequireDefault(__webpack_require__(/*! ./helpers/deprecationWarnings */ "./node_modules/react-trello/dist/helpers/deprecationWarnings.js"));

var _components = _interopRequireDefault(__webpack_require__(/*! ./components */ "./node_modules/react-trello/dist/components/index.js"));

var _locales = _interopRequireDefault(__webpack_require__(/*! ./locales */ "./node_modules/react-trello/dist/locales/index.js"));

var _widgets = _interopRequireDefault(__webpack_require__(/*! ./widgets */ "./node_modules/react-trello/dist/widgets/index.js"));

var _createTranslate = _interopRequireDefault(__webpack_require__(/*! ./helpers/createTranslate */ "./node_modules/react-trello/dist/helpers/createTranslate.js"));

const DEFAULT_LANG = 'en';

var _default = (_ref) => {
  let components = _ref.components,
      _ref$lang = _ref.lang,
      lang = _ref$lang === void 0 ? DEFAULT_LANG : _ref$lang,
      otherProps = (0, _objectWithoutProperties2.default)(_ref, ["components", "lang"]);
  (0, _deprecationWarnings.default)(otherProps);
  const translate = (0, _createTranslate.default)(_locales.default[lang].translation);
  return _react.default.createElement(_Board.default, (0, _extends2.default)({
    t: translate,
    components: (0, _objectSpread2.default)({}, _components.default, components)
  }, otherProps));
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/locales/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-trello/dist/locales/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
// i18next support structure
var _default = {
  en: {
    translation: __webpack_require__(/*! ./en/translation.json */ "./node_modules/react-trello/dist/locales/en/translation.json")
  },
  ru: {
    translation: __webpack_require__(/*! ./ru/translation.json */ "./node_modules/react-trello/dist/locales/ru/translation.json")
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/reducers/BoardReducer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-trello/dist/reducers/BoardReducer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _LaneHelper = _interopRequireDefault(__webpack_require__(/*! ../helpers/LaneHelper */ "./node_modules/react-trello/dist/helpers/LaneHelper.js"));

const boardReducer = (state = {
  lanes: []
}, action) => {
  const payload = action.payload,
        type = action.type;

  switch (type) {
    case 'LOAD_BOARD':
      return _LaneHelper.default.initialiseLanes(state, payload);

    case 'ADD_CARD':
      return _LaneHelper.default.appendCardToLane(state, payload);

    case 'REMOVE_CARD':
      return _LaneHelper.default.removeCardFromLane(state, payload);

    case 'MOVE_CARD':
      return _LaneHelper.default.moveCardAcrossLanes(state, payload);

    case 'UPDATE_CARDS':
      return _LaneHelper.default.updateCardsForLane(state, payload);

    case 'UPDATE_CARD':
      return _LaneHelper.default.updateCardForLane(state, payload);

    case 'UPDATE_LANES':
      return _LaneHelper.default.updateLanes(state, payload);

    case 'UPDATE_LANE':
      return _LaneHelper.default.updateLane(state, payload);

    case 'PAGINATE_LANE':
      return _LaneHelper.default.paginateLane(state, payload);

    case 'MOVE_LANE':
      return _LaneHelper.default.moveLane(state, payload);

    case 'REMOVE_LANE':
      return _LaneHelper.default.removeLane(state, payload);

    case 'ADD_LANE':
      return _LaneHelper.default.addLane(state, payload);

    default:
      return state;
  }
};

var _default = boardReducer;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/styles/Base.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-trello/dist/styles/Base.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.InlineInput = exports.CardForm = exports.NewLaneButtons = exports.NewLaneSection = exports.LaneSection = exports.LaneTitle = exports.AddCardLink = exports.TagSpan = exports.Footer = exports.Detail = exports.CardRightContent = exports.CardTitle = exports.CardHeader = exports.MovableCardWrapper = exports.CardWrapper = exports.RightContent = exports.Title = exports.ScrollableLane = exports.LaneFooter = exports.LaneHeader = exports.Section = exports.Header = exports.BoardWrapper = exports.CustomPopoverContent = exports.CustomPopoverContainer = exports.GlobalStyle = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"));

var _reactPopopo = __webpack_require__(/*! react-popopo */ "./node_modules/react-popopo/dist/index.js");

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

function _templateObject29() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n      &:focus {\n        box-shadow: inset 0 0 0 2px #0079bf;\n      }\n    "]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  overflow-x: hidden; /* for Firefox (issue #5) */\n  word-wrap: break-word;\n  min-height: 18px;\n  max-height: 112px; /* optional, but recommended */\n  resize: none;\n  width: 100%;\n  height: 18px;\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n  text-align: inherit;\n  background-color: transparent;\n  box-shadow: none;\n  box-sizing: border-box;\n  border-radius: 3px;\n  border: 0;\n  padding: 0 8px;\n  outline: 0;\n  ", " &:focus {\n    background-color: white;\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #e3e3e3;\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  margin-top: 10px;\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  width: 200px;\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #2b6aa3;\n  border-radius: 3px;\n  margin: 5px;\n  position: relative;\n  padding: 5px;\n  display: inline-flex;\n  height: auto;\n  flex-direction: column;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 15px;\n  width: 268px;\n  height: auto;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  border-radius: 0 0 3px 3px;\n  color: #838c91;\n  display: block;\n  padding: 5px 2px;\n  margin-top: 10px;\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover {\n    //background-color: #cdd2d4;\n    color: #4d4d4d;\n    text-decoration: underline;\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 2px 3px;\n  border-radius: 3px;\n  margin: 2px 5px;\n  font-size: 70%;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  border-top: 1px solid #eee;\n  padding-top: 6px;\n  text-align: right;\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 12px;\n  color: #4d4d4d;\n  white-space: pre-wrap;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 10px;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 14px;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  border-bottom: 1px solid #eee;\n  padding-bottom: 6px;\n  color: #000;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  &:hover {\n    background-color: #f0f0f0;\n    color: #000;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  border-radius: 3px;\n  border-bottom: 1px solid #ccc;\n  background-color: #fff;\n  position: relative;\n  padding: 10px;\n  cursor: pointer;\n  max-width: 250px;\n  margin-bottom: 7px;\n  min-width: 230px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  width: 38%;\n  text-align: right;\n  padding-right: 10px;\n  font-size: 13px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 18px;\n  cursor: ", ";\n  width: 70%;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  flex: 1;\n  overflow-y: auto;\n  min-width: 250px;\n  overflow-x: hidden;\n  align-self: center;\n  max-height: 90vh;\n  margin-top: 10px;\n  flex-direction: column;\n  justify-content: space-between;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  height: 10px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n      padding: 0px 5px;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n      padding: 0px;\n      line-height: 30px;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  margin-bottom: 0px;\n  ", " ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #e3e3e3;\n  border-radius: 3px;\n  margin: 5px 5px;\n  position: relative;\n  padding: 10px;\n  display: inline-flex;\n  height: auto;\n  max-height: 90%;\n  flex-direction: column;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #3179ba;\n  overflow-y: hidden;\n  padding: 5px;\n  color: #393939;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  height: 100vh;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  visibility: hidden;\n  margin-top: -5px;\n  opacity: 0;\n  position: absolute;\n  z-index: 10;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease 0ms;\n  border-radius: 3px;\n  min-width: 7em;\n  flex-flow: column nowrap;\n  background-color: #fff;\n  color: #000;\n  padding: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n  ", " &::before {\n    visibility: hidden;\n  }\n  a {\n    color: rgba(255, 255, 255, 0.56);\n    padding: 0.5em 1em;\n    margin: 0;\n    text-decoration: none;\n    &:hover {\n      background-color: #00bcd4 !important;\n      color: #37474f;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  position: absolute;\n  right: 10px;\n  flex-flow: column nowrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  .comPlainTextContentEditable {\n    -webkit-user-modify: read-write-plaintext-only;\n    cursor: text;\n  }\n\n  .comPlainTextContentEditable--has-placeholder::before {\n    content: attr(placeholder);\n    opacity: 0.5;\n    color: inherit;\n    cursor: text;\n  }\n\n  .react_trello_dragClass {\n    transform: rotate(3deg);\n  }\n\n  .react_trello_dragLaneClass {\n    transform: rotate(3deg);\n  }\n\n  .icon-overflow-menu-horizontal:before {\n    content: \"\\E91F\";\n  }\n  .icon-lg, .icon-sm {\n    color: #798d99;\n  }\n  .icon-lg {\n    height: 32px;\n    font-size: 16px;\n    line-height: 32px;\n    width: 32px;\n  }\n"], ["\n  .comPlainTextContentEditable {\n    -webkit-user-modify: read-write-plaintext-only;\n    cursor: text;\n  }\n\n  .comPlainTextContentEditable--has-placeholder::before {\n    content: attr(placeholder);\n    opacity: 0.5;\n    color: inherit;\n    cursor: text;\n  }\n\n  .react_trello_dragClass {\n    transform: rotate(3deg);\n  }\n\n  .react_trello_dragLaneClass {\n    transform: rotate(3deg);\n  }\n\n  .icon-overflow-menu-horizontal:before {\n    content: \"\\\\E91F\";\n  }\n  .icon-lg, .icon-sm {\n    color: #798d99;\n  }\n  .icon-lg {\n    height: 32px;\n    font-size: 16px;\n    line-height: 32px;\n    width: 32px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());
exports.GlobalStyle = GlobalStyle;
const CustomPopoverContainer = (0, _styledComponents.default)(_reactPopopo.PopoverContainer)(_templateObject2());
exports.CustomPopoverContainer = CustomPopoverContainer;
const CustomPopoverContent = (0, _styledComponents.default)(_reactPopopo.PopoverContent)(_templateObject3(), props => props.active && "\n    visibility: visible;\n    opacity: 1;\n    transition-delay: 100ms;\n  ");
exports.CustomPopoverContent = CustomPopoverContent;

const BoardWrapper = _styledComponents.default.div(_templateObject4());

exports.BoardWrapper = BoardWrapper;

const Header = _styledComponents.default.header(_templateObject5());

exports.Header = Header;

const Section = _styledComponents.default.section(_templateObject6());

exports.Section = Section;
const LaneHeader = (0, _styledComponents.default)(Header)(_templateObject7(), props => props.editLaneTitle && (0, _styledComponents.css)(_templateObject8()), props => !props.editLaneTitle && (0, _styledComponents.css)(_templateObject9()));
exports.LaneHeader = LaneHeader;

const LaneFooter = _styledComponents.default.div(_templateObject10());

exports.LaneFooter = LaneFooter;

const ScrollableLane = _styledComponents.default.div(_templateObject11());

exports.ScrollableLane = ScrollableLane;

const Title = _styledComponents.default.span(_templateObject12(), props => props.draggable ? 'grab' : "auto");

exports.Title = Title;

const RightContent = _styledComponents.default.span(_templateObject13());

exports.RightContent = RightContent;

const CardWrapper = _styledComponents.default.article(_templateObject14());

exports.CardWrapper = CardWrapper;
const MovableCardWrapper = (0, _styledComponents.default)(CardWrapper)(_templateObject15());
exports.MovableCardWrapper = MovableCardWrapper;
const CardHeader = (0, _styledComponents.default)(Header)(_templateObject16());
exports.CardHeader = CardHeader;
const CardTitle = (0, _styledComponents.default)(Title)(_templateObject17());
exports.CardTitle = CardTitle;
const CardRightContent = (0, _styledComponents.default)(RightContent)(_templateObject18());
exports.CardRightContent = CardRightContent;

const Detail = _styledComponents.default.div(_templateObject19());

exports.Detail = Detail;

const Footer = _styledComponents.default.div(_templateObject20());

exports.Footer = Footer;

const TagSpan = _styledComponents.default.span(_templateObject21());

exports.TagSpan = TagSpan;

const AddCardLink = _styledComponents.default.a(_templateObject22());

exports.AddCardLink = AddCardLink;

const LaneTitle = _styledComponents.default.div(_templateObject23());

exports.LaneTitle = LaneTitle;

const LaneSection = _styledComponents.default.section(_templateObject24());

exports.LaneSection = LaneSection;
const NewLaneSection = (0, _styledComponents.default)(LaneSection)(_templateObject25());
exports.NewLaneSection = NewLaneSection;

const NewLaneButtons = _styledComponents.default.div(_templateObject26());

exports.NewLaneButtons = NewLaneButtons;

const CardForm = _styledComponents.default.div(_templateObject27());

exports.CardForm = CardForm;

const InlineInput = _styledComponents.default.textarea(_templateObject28(), props => props.border && (0, _styledComponents.css)(_templateObject29()));

exports.InlineInput = InlineInput;

/***/ }),

/***/ "./node_modules/react-trello/dist/styles/Elements.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-trello/dist/styles/Elements.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AddLaneLink = exports.CancelButton = exports.AddButton = exports.ExpandBtn = exports.CollapseBtn = exports.ExpandCollapseBase = exports.DeleteIcon = exports.LaneMenuTitle = exports.LaneMenuItem = exports.LaneMenuContent = exports.LaneMenuHeader = exports.MenuButton = exports.DelButton = exports.GenDelButton = exports.DeleteWrapper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _Base = __webpack_require__(/*! ./Base */ "./node_modules/react-trello/dist/styles/Base.js");

function _templateObject15() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background: #2b6aa3;\n  border: none;\n  color: #fff;\n  transition: background 0.3s ease;\n  min-height: 32px;\n  padding: 4px 16px;\n  vertical-align: top;\n  margin-top: 0;\n  margin-right: 0px;\n  border-radius: 4px;\n  font-size: 13px;\n  cursor: pointer;\n  margin-bottom: 0;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background: #999999;\n  color: #fff;\n  transition: background 0.3s ease;\n  min-height: 32px;\n  padding: 4px 16px;\n  vertical-align: top;\n  margin-top: 0;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 0;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background: #5aac44;\n  color: #fff;\n  transition: background 0.3s ease;\n  min-height: 32px;\n  padding: 4px 16px;\n  vertical-align: top;\n  margin-top: 0;\n  margin-right: 8px;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 0;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-top: 7px solid #444;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-radius: 6px;\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    left: 4px;\n    top: 0px;\n    border-top: 3px solid #e3e3e3;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-bottom: 7px solid #444;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-radius: 6px;\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    left: 4px;\n    top: 4px;\n    border-bottom: 3px solid #e3e3e3;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  width: 36px;\n  margin: 0 auto;\n  font-size: 14px;\n  position: relative;\n  cursor: pointer;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  display: inline-block;\n  width: 4px;\n  height: 4px;\n  opacity: 1;\n  overflow: hidden;\n  border: 1px solid #83bd42;\n  border-radius: 50%;\n  padding: 4px;\n  background-color: #83bd42;\n\n  ", ":hover & {\n    opacity: 1;\n  }\n\n  &:hover::before,\n  &:hover::after {\n    background: red;\n  }\n\n  &:before,\n  &:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 60%;\n    top: 45%;\n    left: 20%;\n    background: #fff;\n    border-radius: 5px;\n  }\n\n  &:before {\n    -webkit-transform: rotate(45deg);\n    -moz-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n  &:after {\n    -webkit-transform: rotate(-45deg);\n    -moz-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n    box-sizing: border-box;\n    color: #6b808c;\n    display: block;\n    line-height: 30px;\n    border-bottom: 1px solid rgba(9,45,66,.13);\n    margin: 0 6px;\n    overflow: hidden;\n    padding: 0 32px;\n    position: relative;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    z-index: 1;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n    cursor: pointer;\n    display: block;\n    font-weight: 700;\n    padding: 6px 12px;\n    position: relative;\n    margin: 0 -12px;\n    text-decoration: none;\n\n    &:hover {\n      background-color: #3179BA;\n      color: #fff;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n    overflow-x: hidden;\n    overflow-y: auto;\n    padding: 0 12px 12px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n    position: relative;\n    margin-bottom: 4px;\n    text-align: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  transition: all 0.5s ease;\n  display: inline-block;\n  border: none;\n  outline: none;\n  font-size: 16px;\n  font-weight: bold;\n  height: 15px;\n  line-height: 1px;\n  margin: 0 0 8px;\n  padding: 0;\n  text-align: center;\n  width: 15px;\n  background: inherit;\n  cursor: pointer;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  transition: all 0.5s ease;\n  display: inline-block;\n  border: none;\n  font-size: 8px;\n  height: 15px;\n  line-height: 1px;\n  margin: 0 0 8px;\n  padding: 0;\n  text-align: center;\n  width: 15px;\n  background: inherit;\n  cursor: pointer;\n  opacity: 0;\n  ", ":hover & {\n    opacity: 1;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  transition: all 0.5s ease;\n  display: inline-block;\n  border: none;\n  font-size: 15px;\n  height: 15px;\n  padding: 0;\n  margin-top: 5px;\n  text-align: center;\n  width: 15px;\n  background: inherit;\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  text-align: center;\n  position: absolute;\n  top: -1px;\n  right: 2px;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const DeleteWrapper = _styledComponents.default.div(_templateObject());

exports.DeleteWrapper = DeleteWrapper;

const GenDelButton = _styledComponents.default.button(_templateObject2());

exports.GenDelButton = GenDelButton;

const DelButton = _styledComponents.default.button(_templateObject3(), _Base.MovableCardWrapper);

exports.DelButton = DelButton;

const MenuButton = _styledComponents.default.button(_templateObject4());

exports.MenuButton = MenuButton;

const LaneMenuHeader = _styledComponents.default.div(_templateObject5());

exports.LaneMenuHeader = LaneMenuHeader;

const LaneMenuContent = _styledComponents.default.div(_templateObject6());

exports.LaneMenuContent = LaneMenuContent;

const LaneMenuItem = _styledComponents.default.div(_templateObject7());

exports.LaneMenuItem = LaneMenuItem;

const LaneMenuTitle = _styledComponents.default.span(_templateObject8());

exports.LaneMenuTitle = LaneMenuTitle;

const DeleteIcon = _styledComponents.default.span(_templateObject9(), _Base.CardWrapper);

exports.DeleteIcon = DeleteIcon;

const ExpandCollapseBase = _styledComponents.default.span(_templateObject10());

exports.ExpandCollapseBase = ExpandCollapseBase;
const CollapseBtn = (0, _styledComponents.default)(ExpandCollapseBase)(_templateObject11());
exports.CollapseBtn = CollapseBtn;
const ExpandBtn = (0, _styledComponents.default)(ExpandCollapseBase)(_templateObject12());
exports.ExpandBtn = ExpandBtn;

const AddButton = _styledComponents.default.button(_templateObject13());

exports.AddButton = AddButton;

const CancelButton = _styledComponents.default.button(_templateObject14());

exports.CancelButton = CancelButton;

const AddLaneLink = _styledComponents.default.button(_templateObject15());

exports.AddLaneLink = AddLaneLink;

/***/ }),

/***/ "./node_modules/react-trello/dist/styles/Loader.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-trello/dist/styles/Loader.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LoadingBar = exports.LoaderDiv = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"));

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

function _templateObject3() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  margin: 0 2px;\n  width: 4px;\n  height: 18px;\n  border-radius: 4px;\n  animation: ", " 1s ease-in-out infinite;\n  background-color: #777;\n\n  &:nth-child(1) {\n    animation-delay: 0.0001s;\n  }\n  &:nth-child(2) {\n    animation-delay: 0.09s;\n  }\n  &:nth-child(3) {\n    animation-delay: 0.18s;\n  }\n  &:nth-child(4) {\n    animation-delay: 0.27s;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  text-align: center;\n  margin: 15px 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n    0% {\n      transform: scale(1);\n    }\n    20% {\n      transform: scale(1, 2.2);\n    }\n    40% {\n      transform: scale(1);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const keyframeAnimation = (0, _styledComponents.keyframes)(_templateObject());

const LoaderDiv = _styledComponents.default.div(_templateObject2());

exports.LoaderDiv = LoaderDiv;

const LoadingBar = _styledComponents.default.div(_templateObject3(), keyframeAnimation);

exports.LoadingBar = LoadingBar;

/***/ }),

/***/ "./node_modules/react-trello/dist/widgets/DeleteButton.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-trello/dist/widgets/DeleteButton.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Elements = __webpack_require__(/*! ../styles/Elements */ "./node_modules/react-trello/dist/styles/Elements.js");

const DeleteButton = props => {
  return _react.default.createElement(_Elements.DeleteWrapper, props, _react.default.createElement(_Elements.DelButton, null, "\u2716"));
};

var _default = DeleteButton;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/widgets/EditableLabel.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-trello/dist/widgets/EditableLabel.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

class EditableLabel extends _react.default.Component {
  constructor({
    value: _value
  }) {
    super();
    (0, _defineProperty2.default)(this, "getText", el => {
      return el.innerText;
    });
    (0, _defineProperty2.default)(this, "onTextChange", ev => {
      const value = this.getText(ev.target);
      this.setState({
        value: value
      });
    });
    (0, _defineProperty2.default)(this, "onBlur", () => {
      this.props.onChange(this.state.value);
    });
    (0, _defineProperty2.default)(this, "onPaste", ev => {
      ev.preventDefault();
      const value = ev.clipboardData.getData('text');
      document.execCommand('insertText', false, value);
    });
    (0, _defineProperty2.default)(this, "getClassName", () => {
      const placeholder = this.state.value === '' ? 'comPlainTextContentEditable--has-placeholder' : '';
      return "comPlainTextContentEditable ".concat(placeholder);
    });
    (0, _defineProperty2.default)(this, "onKeyDown", e => {
      if (e.keyCode === 13) {
        this.props.onChange(this.state.value);
        this.refDiv.blur();
        e.preventDefault();
      }

      if (e.keyCode === 27) {
        this.refDiv.value = this.props.value;
        this.setState({
          value: this.props.value
        }); // this.refDiv.blur()

        e.preventDefault();
        e.stopPropagation();
      }
    });
    this.state = {
      value: _value
    };
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.refDiv.focus();
    }
  }

  render() {
    const placeholder = this.props.value.length > 0 ? false : this.props.placeholder;
    return _react.default.createElement("div", {
      ref: _ref => this.refDiv = _ref,
      contentEditable: "true",
      className: this.getClassName(),
      onPaste: this.onPaste,
      onBlur: this.onBlur,
      onInput: this.onTextChange,
      onKeyDown: this.onKeyDown,
      placeholder: placeholder
    });
  }

}

EditableLabel.propTypes = {
  onChange: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  autoFocus: _propTypes.default.bool,
  inline: _propTypes.default.bool,
  value: _propTypes.default.string
};
EditableLabel.defaultProps = {
  onChange: () => {},
  placeholder: '',
  autoFocus: false,
  inline: false,
  value: ''
};
var _default = EditableLabel;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/widgets/InlineInput.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-trello/dist/widgets/InlineInput.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Base = __webpack_require__(/*! ../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _autosize = _interopRequireDefault(__webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js"));

class InlineInputController extends _react.default.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "onFocus", e => e.target.select());
    (0, _defineProperty2.default)(this, "onMouseDown", e => {
      if (document.activeElement != e.target) {
        e.preventDefault();
        this.refInput.focus();
      }
    });
    (0, _defineProperty2.default)(this, "onBlur", () => {
      this.updateValue();
    });
    (0, _defineProperty2.default)(this, "onKeyDown", e => {
      if (e.keyCode == 13) {
        this.refInput.blur();
        e.preventDefault();
      }

      if (e.keyCode == 27) {
        this.setValue(this.props.value);
        this.refInput.blur();
        e.preventDefault();
      }

      if (e.keyCode == 9) {
        if (this.getValue().length == 0) {
          this.props.onCancel();
        }

        this.refInput.blur();
        e.preventDefault();
      }
    });
    (0, _defineProperty2.default)(this, "getValue", () => this.refInput.value);
    (0, _defineProperty2.default)(this, "setValue", value => this.refInput.value = value);
    (0, _defineProperty2.default)(this, "updateValue", () => {
      if (this.getValue() != this.props.value) {
        this.props.onSave(this.getValue());
      }
    });
    (0, _defineProperty2.default)(this, "setRef", ref => {
      this.refInput = ref;

      if (this.props.resize != 'none') {
        (0, _autosize.default)(this.refInput);
      }
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setValue(nextProps.value);
  }

  render() {
    const _this$props = this.props,
          autoFocus = _this$props.autoFocus,
          border = _this$props.border,
          value = _this$props.value,
          placeholder = _this$props.placeholder;
    return _react.default.createElement(_Base.InlineInput, {
      ref: this.setRef,
      border: border,
      onMouseDown: this.onMouseDown,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      placeholder: value.length == 0 ? undefined : placeholder,
      defaultValue: value,
      autoComplete: "off",
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: "false",
      dataGramm: "false",
      rows: 1,
      autoFocus: autoFocus
    });
  }

}

InlineInputController.propTypes = {
  onSave: _propTypes.default.func,
  border: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  autoFocus: _propTypes.default.bool,
  resize: _propTypes.default.oneOf(['none', 'vertical', 'horizontal'])
};
InlineInputController.defaultProps = {
  onSave: () => {},
  placeholder: '',
  value: '',
  border: false,
  autoFocus: false,
  resize: 'none'
};
var _default = InlineInputController;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/widgets/NewLaneTitleEditor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-trello/dist/widgets/NewLaneTitleEditor.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Base = __webpack_require__(/*! ../styles/Base */ "./node_modules/react-trello/dist/styles/Base.js");

var _autosize = _interopRequireDefault(__webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js"));

class NewLaneTitleEditor extends _react.default.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "onKeyDown", e => {
      if (e.keyCode == 13) {
        this.refInput.blur();
        this.props.onSave();
        e.preventDefault();
      }

      if (e.keyCode == 27) {
        this.cancel();
        e.preventDefault();
      }

      if (e.keyCode == 9) {
        if (this.getValue().length == 0) {
          this.cancel();
        } else {
          this.props.onSave();
        }

        e.preventDefault();
      }
    });
    (0, _defineProperty2.default)(this, "cancel", () => {
      this.setValue('');
      this.props.onCancel();
      this.refInput.blur();
    });
    (0, _defineProperty2.default)(this, "getValue", () => this.refInput.value);
    (0, _defineProperty2.default)(this, "setValue", value => this.refInput.value = value);
    (0, _defineProperty2.default)(this, "saveValue", () => {
      if (this.getValue() != this.props.value) {
        this.props.onSave(this.getValue());
      }
    });
    (0, _defineProperty2.default)(this, "focus", () => this.refInput.focus());
    (0, _defineProperty2.default)(this, "setRef", ref => {
      this.refInput = ref;

      if (this.props.resize != 'none') {
        (0, _autosize.default)(this.refInput);
      }
    });
  }

  render() {
    const _this$props = this.props,
          autoFocus = _this$props.autoFocus,
          resize = _this$props.resize,
          border = _this$props.border,
          autoResize = _this$props.autoResize,
          value = _this$props.value,
          placeholder = _this$props.placeholder;
    return _react.default.createElement(_Base.InlineInput, {
      style: {
        resize: resize
      },
      ref: this.setRef,
      border: border,
      onKeyDown: this.onKeyDown,
      placeholder: value.length == 0 ? undefined : placeholder,
      defaultValue: value,
      rows: 3,
      autoResize: autoResize,
      autoFocus: autoFocus
    });
  }

}

NewLaneTitleEditor.propTypes = {
  onSave: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  border: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  autoFocus: _propTypes.default.bool,
  autoResize: _propTypes.default.bool,
  resize: _propTypes.default.oneOf(['none', 'vertical', 'horizontal'])
};
NewLaneTitleEditor.defaultProps = {
  inputRef: () => {},
  onSave: () => {},
  onCancel: () => {},
  placeholder: '',
  value: '',
  border: false,
  autoFocus: false,
  autoResize: false,
  resize: 'none'
};
var _default = NewLaneTitleEditor;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/dist/widgets/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-trello/dist/widgets/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _DeleteButton = _interopRequireDefault(__webpack_require__(/*! ./DeleteButton */ "./node_modules/react-trello/dist/widgets/DeleteButton.js"));

var _EditableLabel = _interopRequireDefault(__webpack_require__(/*! ./EditableLabel */ "./node_modules/react-trello/dist/widgets/EditableLabel.js"));

var _InlineInput = _interopRequireDefault(__webpack_require__(/*! ./InlineInput */ "./node_modules/react-trello/dist/widgets/InlineInput.js"));

var _default = {
  DeleteButton: _DeleteButton.default,
  EditableLabel: _EditableLabel.default,
  InlineInput: _InlineInput.default
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-is/cjs/react-is.development.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-is/cjs/react-is.development.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-is/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-is/index.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-trello/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/components/Provider.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/components/Provider.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProvider": () => (/* binding */ createProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/PropTypes */ "./node_modules/react-trello/node_modules/react-redux/es/utils/PropTypes.js");
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-trello/node_modules/react-redux/es/utils/warning.js");





var prefixUnsafeLifecycleMethods = typeof react__WEBPACK_IMPORTED_MODULE_1__.forwardRef !== "undefined";
var didWarnAboutReceivingStore = false;

function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }

  didWarnAboutReceivingStore = true;
  (0,_utils_warning__WEBPACK_IMPORTED_MODULE_3__["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reduxjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider(storeKey) {
  var _Provider$childContex;

  if (storeKey === void 0) {
    storeKey = 'store';
  }

  var subscriptionKey = storeKey + "Subscription";

  var Provider =
  /*#__PURE__*/
  function (_Component) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Provider, _Component);

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      var _this;

      _this = _Component.call(this, props, context) || this;
      _this[storeKey] = props.store;
      return _this;
    }

    _proto.render = function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__.Children.only(this.props.children);
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_1__.Component);

  if (true) {
    // Use UNSAFE_ event name where supported
    var eventName = prefixUnsafeLifecycleMethods ? 'UNSAFE_componentWillReceiveProps' : 'componentWillReceiveProps';

    Provider.prototype[eventName] = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_2__.storeShape.isRequired,
    children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().element.isRequired)
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_2__.storeShape.isRequired, _Provider$childContex[subscriptionKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_2__.subscriptionShape, _Provider$childContex);
  return Provider;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProvider());

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/components/connectAdvanced.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ connectAdvanced)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-is */ "./node_modules/react-trello/node_modules/react-is/index.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-trello/node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/PropTypes */ "./node_modules/react-trello/node_modules/react-redux/es/utils/PropTypes.js");










var prefixUnsafeLifecycleMethods = typeof react__WEBPACK_IMPORTED_MODULE_6__.forwardRef !== "undefined";
var hotReloadingVersion = 0;
var dummyState = {};

function noop() {}

function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);

        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };
  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  var _contextTypes, _childContextTypes;

  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      connectOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;
  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_9__.storeShape, _contextTypes[subscriptionKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_9__.subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_9__.subscriptionShape, _childContextTypes);
  return function wrapWithConnect(WrappedComponent) {
    invariant__WEBPACK_IMPORTED_MODULE_5___default()((0,react_is__WEBPACK_IMPORTED_MODULE_7__.isValidElementType)(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent // TODO Actually fix our use of componentWillReceiveProps

      /* eslint-disable react/no-deprecated */

    });

    var Connect =
    /*#__PURE__*/
    function (_Component) {
      (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Connect, _Component);

      function Connect(props, context) {
        var _this;

        _this = _Component.call(this, props, context) || this;
        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)));
        invariant__WEBPACK_IMPORTED_MODULE_5___default()(_this.store, "Could not find \"" + storeKey + "\" in either the context or props of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + ("or explicitly pass \"" + storeKey + "\" as a prop to \"" + displayName + "\"."));

        _this.initSelector();

        _this.initSubscription();

        return _this;
      }

      var _proto = Connect.prototype;

      _proto.getChildContext = function getChildContext() {
        var _ref3;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref3 = {}, _ref3[subscriptionKey] = subscription || this.context[subscriptionKey], _ref3;
      };

      _proto.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return; // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.

        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      }; // Note: this is renamed below to the UNSAFE_ version in React >=16.3.0


      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      _proto.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      _proto.getWrappedInstance = function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_5___default()(withRef, "To access the wrapped instance, you need to specify " + ("{ withRef: true } in the options argument of the " + methodName + "() call."));
        return this.wrappedInstance;
      };

      _proto.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      _proto.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      _proto.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return; // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_8__["default"](this.store, parentSub, this.onStateChange.bind(this)); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.

        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      _proto.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      _proto.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      _proto.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      _proto.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props; // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad

        var withExtras = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props);

        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      _proto.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return (0,react__WEBPACK_IMPORTED_MODULE_6__.createElement)(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(react__WEBPACK_IMPORTED_MODULE_6__.Component);

    if (prefixUnsafeLifecycleMethods) {
      // Use UNSAFE_ event name where supported
      Connect.prototype.UNSAFE_componentWillReceiveProps = Connect.prototype.componentWillReceiveProps;
      delete Connect.prototype.componentWillReceiveProps;
    }
    /* eslint-enable react/no-deprecated */


    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (true) {
      // Use UNSAFE_ event name where supported
      var eventName = prefixUnsafeLifecycleMethods ? 'UNSAFE_componentWillUpdate' : 'componentWillUpdate';

      Connect.prototype[eventName] = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector(); // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.

          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }

          this.initSubscription();

          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/connect/connect.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/connect/connect.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createConnect": () => (/* binding */ createConnect),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-trello/node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-trello/node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-trello/node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-trello/node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-trello/node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-trello/node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createConnect());

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "whenMapDispatchToPropsIsFunction": () => (/* binding */ whenMapDispatchToPropsIsFunction),
/* harmony export */   "whenMapDispatchToPropsIsMissing": () => (/* binding */ whenMapDispatchToPropsIsMissing),
/* harmony export */   "whenMapDispatchToPropsIsObject": () => (/* binding */ whenMapDispatchToPropsIsObject)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-trello/node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(function (dispatch) {
    return (0,redux__WEBPACK_IMPORTED_MODULE_1__.bindActionCreators)(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/connect/mapStateToProps.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "whenMapStateToPropsIsFunction": () => (/* binding */ whenMapStateToPropsIsFunction),
/* harmony export */   "whenMapStateToPropsIsMissing": () => (/* binding */ whenMapStateToPropsIsMissing)
/* harmony export */ });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-trello/node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/connect/mergeProps.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/connect/mergeProps.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defaultMergeProps": () => (/* binding */ defaultMergeProps),
/* harmony export */   "whenMergePropsIsFunction": () => (/* binding */ whenMergePropsIsFunction),
/* harmony export */   "whenMergePropsIsOmitted": () => (/* binding */ whenMergePropsIsOmitted),
/* harmony export */   "wrapMergePropsFunc": () => (/* binding */ wrapMergePropsFunc)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-trello/node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/connect/selectorFactory.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/connect/selectorFactory.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ finalPropsSelectorFactory),
/* harmony export */   "impureFinalPropsSelectorFactory": () => (/* binding */ impureFinalPropsSelectorFactory),
/* harmony export */   "pureFinalPropsSelectorFactory": () => (/* binding */ pureFinalPropsSelectorFactory)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-trello/node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    (0,_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifySubselectors)
/* harmony export */ });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-trello/node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      (0,_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDependsOnOwnProps": () => (/* binding */ getDependsOnOwnProps),
/* harmony export */   "wrapMapToPropsConstant": () => (/* binding */ wrapMapToPropsConstant),
/* harmony export */   "wrapMapToPropsFunc": () => (/* binding */ wrapMapToPropsFunc)
/* harmony export */ });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-trello/node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Provider": () => (/* reexport safe */ _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "connect": () => (/* reexport safe */ _connect_connect__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "connectAdvanced": () => (/* reexport safe */ _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "createProvider": () => (/* reexport safe */ _components_Provider__WEBPACK_IMPORTED_MODULE_0__.createProvider)
/* harmony export */ });
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-trello/node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-trello/node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-trello/node_modules/react-redux/es/connect/connect.js");





/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/utils/PropTypes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/utils/PropTypes.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storeShape": () => (/* binding */ storeShape),
/* harmony export */   "subscriptionShape": () => (/* binding */ subscriptionShape)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var subscriptionShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  trySubscribe: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func.isRequired),
  tryUnsubscribe: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func.isRequired),
  notifyNestedSubs: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func.isRequired),
  isSubscribed: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func.isRequired)
});
var storeShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  subscribe: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func.isRequired),
  dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func.isRequired),
  getState: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func.isRequired)
});

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/utils/Subscription.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/utils/Subscription.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Subscription)
/* harmony export */ });
// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants
var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];
  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;

      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);
      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;
        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub, onStateChange) {
    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/utils/isPlainObject.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/utils/isPlainObject.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPlainObject)
/* harmony export */ });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/utils/shallowEqual.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/utils/shallowEqual.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shallowEqual)
/* harmony export */ });
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifyPlainObject)
/* harmony export */ });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-trello/node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-trello/node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!(0,_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    (0,_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-trello/node_modules/react-redux/es/utils/warning.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/react-redux/es/utils/warning.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ warning)
/* harmony export */ });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react-trello/node_modules/uuid/lib/bytesToUuid.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/uuid/lib/bytesToUuid.js ***!
  \************************************************************************/
/***/ ((module) => {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/react-trello/node_modules/uuid/lib/rng-browser.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-trello/node_modules/uuid/lib/rng-browser.js ***!
  \************************************************************************/
/***/ ((module) => {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/react-trello/node_modules/uuid/v1.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-trello/node_modules/uuid/v1.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/react-trello/node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/react-trello/node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/reduce-reducers/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/reduce-reducers/es/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var initialState = typeof args[args.length - 1] !== 'function' && args.pop();
  var reducers = args;

  if (typeof initialState === 'undefined') {
    throw new TypeError('The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.');
  }

  return function (prevState, value) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    var prevStateIsUndefined = typeof prevState === 'undefined';
    var valueIsUndefined = typeof value === 'undefined';

    if (prevStateIsUndefined && valueIsUndefined && initialState) {
      return initialState;
    }

    return reducers.reduce(function (newState, reducer) {
      return reducer.apply(undefined, [newState, value].concat(args));
    }, prevStateIsUndefined && !valueIsUndefined && initialState ? initialState : prevState);
  };
});

/***/ }),

/***/ "./node_modules/redux-actions/es/combineActions.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-actions/es/combineActions.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ combineActions)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/isFunction */ "./node_modules/redux-actions/es/utils/isFunction.js");
/* harmony import */ var _utils_isSymbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isSymbol */ "./node_modules/redux-actions/es/utils/isSymbol.js");
/* harmony import */ var _utils_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/isEmpty */ "./node_modules/redux-actions/es/utils/isEmpty.js");
/* harmony import */ var _utils_toString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/toString */ "./node_modules/redux-actions/es/utils/toString.js");
/* harmony import */ var _utils_isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/isString */ "./node_modules/redux-actions/es/utils/isString.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-actions/es/constants.js");








function isValidActionType(type) {
  return (0,_utils_isString__WEBPACK_IMPORTED_MODULE_1__["default"])(type) || (0,_utils_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(type) || (0,_utils_isSymbol__WEBPACK_IMPORTED_MODULE_3__["default"])(type);
}

function isValidActionTypes(types) {
  if ((0,_utils_isEmpty__WEBPACK_IMPORTED_MODULE_4__["default"])(types)) {
    return false;
  }

  return types.every(isValidActionType);
}

function combineActions() {
  for (var _len = arguments.length, actionsTypes = new Array(_len), _key = 0; _key < _len; _key++) {
    actionsTypes[_key] = arguments[_key];
  }

  invariant__WEBPACK_IMPORTED_MODULE_0___default()(isValidActionTypes(actionsTypes), 'Expected action types to be strings, symbols, or action creators');
  var combinedActionType = actionsTypes.map(_utils_toString__WEBPACK_IMPORTED_MODULE_5__["default"]).join(_constants__WEBPACK_IMPORTED_MODULE_6__.ACTION_TYPE_DELIMITER);
  return {
    toString: function toString() {
      return combinedActionType;
    }
  };
}

/***/ }),

/***/ "./node_modules/redux-actions/es/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/redux-actions/es/constants.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPE_DELIMITER": () => (/* binding */ ACTION_TYPE_DELIMITER),
/* harmony export */   "DEFAULT_NAMESPACE": () => (/* binding */ DEFAULT_NAMESPACE)
/* harmony export */ });
var DEFAULT_NAMESPACE = '/';
var ACTION_TYPE_DELIMITER = '||';

/***/ }),

/***/ "./node_modules/redux-actions/es/createAction.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-actions/es/createAction.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAction)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/isFunction */ "./node_modules/redux-actions/es/utils/isFunction.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/identity */ "./node_modules/redux-actions/es/utils/identity.js");
/* harmony import */ var _utils_isNull__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isNull */ "./node_modules/redux-actions/es/utils/isNull.js");




function createAction(type, payloadCreator, metaCreator) {
  if (payloadCreator === void 0) {
    payloadCreator = _utils_identity__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  invariant__WEBPACK_IMPORTED_MODULE_0___default()((0,_utils_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(payloadCreator) || (0,_utils_isNull__WEBPACK_IMPORTED_MODULE_3__["default"])(payloadCreator), 'Expected payloadCreator to be a function, undefined or null');
  var finalPayloadCreator = (0,_utils_isNull__WEBPACK_IMPORTED_MODULE_3__["default"])(payloadCreator) || payloadCreator === _utils_identity__WEBPACK_IMPORTED_MODULE_1__["default"] ? _utils_identity__WEBPACK_IMPORTED_MODULE_1__["default"] : function (head) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return head instanceof Error ? head : payloadCreator.apply(void 0, [head].concat(args));
  };
  var hasMeta = (0,_utils_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(metaCreator);
  var typeString = type.toString();

  var actionCreator = function actionCreator() {
    var payload = finalPayloadCreator.apply(void 0, arguments);
    var action = {
      type: type
    };

    if (payload instanceof Error) {
      action.error = true;
    }

    if (payload !== undefined) {
      action.payload = payload;
    }

    if (hasMeta) {
      action.meta = metaCreator.apply(void 0, arguments);
    }

    return action;
  };

  actionCreator.toString = function () {
    return typeString;
  };

  return actionCreator;
}

/***/ }),

/***/ "./node_modules/redux-actions/es/createActions.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-actions/es/createActions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createActions)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/isPlainObject */ "./node_modules/redux-actions/es/utils/isPlainObject.js");
/* harmony import */ var _utils_isFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/isFunction */ "./node_modules/redux-actions/es/utils/isFunction.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/identity */ "./node_modules/redux-actions/es/utils/identity.js");
/* harmony import */ var _utils_isArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/isArray */ "./node_modules/redux-actions/es/utils/isArray.js");
/* harmony import */ var _utils_isString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isString */ "./node_modules/redux-actions/es/utils/isString.js");
/* harmony import */ var _utils_isNil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/isNil */ "./node_modules/redux-actions/es/utils/isNil.js");
/* harmony import */ var _utils_getLastElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/getLastElement */ "./node_modules/redux-actions/es/utils/getLastElement.js");
/* harmony import */ var _utils_camelCase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/camelCase */ "./node_modules/redux-actions/es/utils/camelCase.js");
/* harmony import */ var _utils_arrayToObject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/arrayToObject */ "./node_modules/redux-actions/es/utils/arrayToObject.js");
/* harmony import */ var _utils_flattenActionMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/flattenActionMap */ "./node_modules/redux-actions/es/utils/flattenActionMap.js");
/* harmony import */ var _utils_unflattenActionCreators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/unflattenActionCreators */ "./node_modules/redux-actions/es/utils/unflattenActionCreators.js");
/* harmony import */ var _createAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./createAction */ "./node_modules/redux-actions/es/createAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-actions/es/constants.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function createActions(actionMap) {
  for (var _len = arguments.length, identityActions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    identityActions[_key - 1] = arguments[_key];
  }

  var options = (0,_utils_isPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_utils_getLastElement__WEBPACK_IMPORTED_MODULE_2__["default"])(identityActions)) ? identityActions.pop() : {};
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(identityActions.every(_utils_isString__WEBPACK_IMPORTED_MODULE_3__["default"]) && ((0,_utils_isString__WEBPACK_IMPORTED_MODULE_3__["default"])(actionMap) || (0,_utils_isPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(actionMap)), 'Expected optional object followed by string action types');

  if ((0,_utils_isString__WEBPACK_IMPORTED_MODULE_3__["default"])(actionMap)) {
    return actionCreatorsFromIdentityActions([actionMap].concat(identityActions), options);
  }

  return _objectSpread({}, actionCreatorsFromActionMap(actionMap, options), actionCreatorsFromIdentityActions(identityActions, options));
}

function actionCreatorsFromActionMap(actionMap, options) {
  var flatActionMap = (0,_utils_flattenActionMap__WEBPACK_IMPORTED_MODULE_4__["default"])(actionMap, options);
  var flatActionCreators = actionMapToActionCreators(flatActionMap);
  return (0,_utils_unflattenActionCreators__WEBPACK_IMPORTED_MODULE_5__["default"])(flatActionCreators, options);
}

function actionMapToActionCreators(actionMap, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      prefix = _ref.prefix,
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_NAMESPACE : _ref$namespace;

  function isValidActionMapValue(actionMapValue) {
    if ((0,_utils_isFunction__WEBPACK_IMPORTED_MODULE_7__["default"])(actionMapValue) || (0,_utils_isNil__WEBPACK_IMPORTED_MODULE_8__["default"])(actionMapValue)) {
      return true;
    }

    if ((0,_utils_isArray__WEBPACK_IMPORTED_MODULE_9__["default"])(actionMapValue)) {
      var _actionMapValue$ = actionMapValue[0],
          payload = _actionMapValue$ === void 0 ? _utils_identity__WEBPACK_IMPORTED_MODULE_10__["default"] : _actionMapValue$,
          meta = actionMapValue[1];
      return (0,_utils_isFunction__WEBPACK_IMPORTED_MODULE_7__["default"])(payload) && (0,_utils_isFunction__WEBPACK_IMPORTED_MODULE_7__["default"])(meta);
    }

    return false;
  }

  return (0,_utils_arrayToObject__WEBPACK_IMPORTED_MODULE_11__["default"])(Object.keys(actionMap), function (partialActionCreators, type) {
    var _objectSpread2;

    var actionMapValue = actionMap[type];
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(isValidActionMapValue(actionMapValue), 'Expected function, undefined, null, or array with payload and meta ' + ("functions for " + type));
    var prefixedType = prefix ? "" + prefix + namespace + type : type;
    var actionCreator = (0,_utils_isArray__WEBPACK_IMPORTED_MODULE_9__["default"])(actionMapValue) ? _createAction__WEBPACK_IMPORTED_MODULE_12__["default"].apply(void 0, [prefixedType].concat(actionMapValue)) : (0,_createAction__WEBPACK_IMPORTED_MODULE_12__["default"])(prefixedType, actionMapValue);
    return _objectSpread({}, partialActionCreators, (_objectSpread2 = {}, _objectSpread2[type] = actionCreator, _objectSpread2));
  });
}

function actionCreatorsFromIdentityActions(identityActions, options) {
  var actionMap = (0,_utils_arrayToObject__WEBPACK_IMPORTED_MODULE_11__["default"])(identityActions, function (partialActionMap, type) {
    var _objectSpread3;

    return _objectSpread({}, partialActionMap, (_objectSpread3 = {}, _objectSpread3[type] = _utils_identity__WEBPACK_IMPORTED_MODULE_10__["default"], _objectSpread3));
  });
  var actionCreators = actionMapToActionCreators(actionMap, options);
  return (0,_utils_arrayToObject__WEBPACK_IMPORTED_MODULE_11__["default"])(Object.keys(actionCreators), function (partialActionCreators, type) {
    var _objectSpread4;

    return _objectSpread({}, partialActionCreators, (_objectSpread4 = {}, _objectSpread4[(0,_utils_camelCase__WEBPACK_IMPORTED_MODULE_13__["default"])(type)] = actionCreators[type], _objectSpread4));
  });
}

/***/ }),

/***/ "./node_modules/redux-actions/es/createCurriedAction.js":
/*!**************************************************************!*\
  !*** ./node_modules/redux-actions/es/createCurriedAction.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var just_curry_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! just-curry-it */ "./node_modules/just-curry-it/index.js");
/* harmony import */ var just_curry_it__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(just_curry_it__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createAction */ "./node_modules/redux-actions/es/createAction.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (type, payloadCreator) {
  return just_curry_it__WEBPACK_IMPORTED_MODULE_0___default()((0,_createAction__WEBPACK_IMPORTED_MODULE_1__["default"])(type, payloadCreator), payloadCreator.length);
});

/***/ }),

/***/ "./node_modules/redux-actions/es/handleAction.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-actions/es/handleAction.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleAction)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/isFunction */ "./node_modules/redux-actions/es/utils/isFunction.js");
/* harmony import */ var _utils_isPlainObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/isPlainObject */ "./node_modules/redux-actions/es/utils/isPlainObject.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/identity */ "./node_modules/redux-actions/es/utils/identity.js");
/* harmony import */ var _utils_isNil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/isNil */ "./node_modules/redux-actions/es/utils/isNil.js");
/* harmony import */ var _utils_isUndefined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/isUndefined */ "./node_modules/redux-actions/es/utils/isUndefined.js");
/* harmony import */ var _utils_toString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/toString */ "./node_modules/redux-actions/es/utils/toString.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/redux-actions/es/constants.js");








function handleAction(type, reducer, defaultState) {
  if (reducer === void 0) {
    reducer = _utils_identity__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  var types = (0,_utils_toString__WEBPACK_IMPORTED_MODULE_2__["default"])(type).split(_constants__WEBPACK_IMPORTED_MODULE_3__.ACTION_TYPE_DELIMITER);
  invariant__WEBPACK_IMPORTED_MODULE_0___default()(!(0,_utils_isUndefined__WEBPACK_IMPORTED_MODULE_4__["default"])(defaultState), "defaultState for reducer handling " + types.join(', ') + " should be defined");
  invariant__WEBPACK_IMPORTED_MODULE_0___default()((0,_utils_isFunction__WEBPACK_IMPORTED_MODULE_5__["default"])(reducer) || (0,_utils_isPlainObject__WEBPACK_IMPORTED_MODULE_6__["default"])(reducer), 'Expected reducer to be a function or object with next and throw reducers');

  var _ref = (0,_utils_isFunction__WEBPACK_IMPORTED_MODULE_5__["default"])(reducer) ? [reducer, reducer] : [reducer.next, reducer.throw].map(function (aReducer) {
    return (0,_utils_isNil__WEBPACK_IMPORTED_MODULE_7__["default"])(aReducer) ? _utils_identity__WEBPACK_IMPORTED_MODULE_1__["default"] : aReducer;
  }),
      nextReducer = _ref[0],
      throwReducer = _ref[1];

  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }

    var actionType = action.type;

    if (!actionType || types.indexOf((0,_utils_toString__WEBPACK_IMPORTED_MODULE_2__["default"])(actionType)) === -1) {
      return state;
    }

    return (action.error === true ? throwReducer : nextReducer)(state, action);
  };
}

/***/ }),

/***/ "./node_modules/redux-actions/es/handleActions.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-actions/es/handleActions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleActions)
/* harmony export */ });
/* harmony import */ var reduce_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reduce-reducers */ "./node_modules/reduce-reducers/es/index.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_isPlainObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/isPlainObject */ "./node_modules/redux-actions/es/utils/isPlainObject.js");
/* harmony import */ var _utils_isMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isMap */ "./node_modules/redux-actions/es/utils/isMap.js");
/* harmony import */ var _utils_ownKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/ownKeys */ "./node_modules/redux-actions/es/utils/ownKeys.js");
/* harmony import */ var _utils_flattenReducerMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/flattenReducerMap */ "./node_modules/redux-actions/es/utils/flattenReducerMap.js");
/* harmony import */ var _handleAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handleAction */ "./node_modules/redux-actions/es/handleAction.js");
/* harmony import */ var _utils_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/get */ "./node_modules/redux-actions/es/utils/get.js");








function handleActions(handlers, defaultState, options) {
  if (options === void 0) {
    options = {};
  }

  invariant__WEBPACK_IMPORTED_MODULE_1___default()((0,_utils_isPlainObject__WEBPACK_IMPORTED_MODULE_2__["default"])(handlers) || (0,_utils_isMap__WEBPACK_IMPORTED_MODULE_3__["default"])(handlers), 'Expected handlers to be a plain object.');
  var flattenedReducerMap = (0,_utils_flattenReducerMap__WEBPACK_IMPORTED_MODULE_4__["default"])(handlers, options);
  var reducers = (0,_utils_ownKeys__WEBPACK_IMPORTED_MODULE_5__["default"])(flattenedReducerMap).map(function (type) {
    return (0,_handleAction__WEBPACK_IMPORTED_MODULE_6__["default"])(type, (0,_utils_get__WEBPACK_IMPORTED_MODULE_7__["default"])(type, flattenedReducerMap), defaultState);
  });
  var reducer = reduce_reducers__WEBPACK_IMPORTED_MODULE_0__["default"].apply(void 0, reducers.concat([defaultState]));
  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }

    return reducer(state, action);
  };
}

/***/ }),

/***/ "./node_modules/redux-actions/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/redux-actions/es/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "combineActions": () => (/* reexport safe */ _combineActions__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "createAction": () => (/* reexport safe */ _createAction__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "createActions": () => (/* reexport safe */ _createActions__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "createCurriedAction": () => (/* reexport safe */ _createCurriedAction__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "handleAction": () => (/* reexport safe */ _handleAction__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "handleActions": () => (/* reexport safe */ _handleActions__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _combineActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combineActions */ "./node_modules/redux-actions/es/combineActions.js");
/* harmony import */ var _createAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createAction */ "./node_modules/redux-actions/es/createAction.js");
/* harmony import */ var _createActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createActions */ "./node_modules/redux-actions/es/createActions.js");
/* harmony import */ var _createCurriedAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createCurriedAction */ "./node_modules/redux-actions/es/createCurriedAction.js");
/* harmony import */ var _handleAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleAction */ "./node_modules/redux-actions/es/handleAction.js");
/* harmony import */ var _handleActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handleActions */ "./node_modules/redux-actions/es/handleActions.js");








/***/ }),

/***/ "./node_modules/redux-actions/es/utils/arrayToObject.js":
/*!**************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/arrayToObject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (array, callback) {
  return array.reduce(function (partialObject, element) {
    return callback(partialObject, element);
  }, {});
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/camelCase.js":
/*!**********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/camelCase.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var to_camel_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! to-camel-case */ "./node_modules/to-camel-case/index.js");
/* harmony import */ var to_camel_case__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(to_camel_case__WEBPACK_IMPORTED_MODULE_0__);

var namespacer = '/';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (type) {
  return type.indexOf(namespacer) === -1 ? to_camel_case__WEBPACK_IMPORTED_MODULE_0___default()(type) : type.split(namespacer).map((to_camel_case__WEBPACK_IMPORTED_MODULE_0___default())).join(namespacer);
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/flattenActionMap.js":
/*!*****************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/flattenActionMap.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/redux-actions/es/utils/isPlainObject.js");
/* harmony import */ var _flattenWhenNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flattenWhenNode */ "./node_modules/redux-actions/es/utils/flattenWhenNode.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_flattenWhenNode__WEBPACK_IMPORTED_MODULE_0__["default"])(_isPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/flattenReducerMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/flattenReducerMap.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/redux-actions/es/utils/isPlainObject.js");
/* harmony import */ var _isMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isMap */ "./node_modules/redux-actions/es/utils/isMap.js");
/* harmony import */ var _hasGeneratorInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hasGeneratorInterface */ "./node_modules/redux-actions/es/utils/hasGeneratorInterface.js");
/* harmony import */ var _flattenWhenNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flattenWhenNode */ "./node_modules/redux-actions/es/utils/flattenWhenNode.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_flattenWhenNode__WEBPACK_IMPORTED_MODULE_0__["default"])(function (node) {
  return ((0,_isPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(node) || (0,_isMap__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) && !(0,_hasGeneratorInterface__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
}));

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/flattenWhenNode.js":
/*!****************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/flattenWhenNode.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/redux-actions/es/constants.js");
/* harmony import */ var _ownKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ownKeys */ "./node_modules/redux-actions/es/utils/ownKeys.js");
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get */ "./node_modules/redux-actions/es/utils/get.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (predicate) {
  return function flatten(map, _temp, partialFlatMap, partialFlatActionType) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$namespace = _ref.namespace,
        namespace = _ref$namespace === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_NAMESPACE : _ref$namespace,
        prefix = _ref.prefix;

    if (partialFlatMap === void 0) {
      partialFlatMap = {};
    }

    if (partialFlatActionType === void 0) {
      partialFlatActionType = '';
    }

    function connectNamespace(type) {
      var _ref2;

      if (!partialFlatActionType) return type;
      var types = type.toString().split(_constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPE_DELIMITER);
      var partials = partialFlatActionType.split(_constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPE_DELIMITER);
      return (_ref2 = []).concat.apply(_ref2, partials.map(function (p) {
        return types.map(function (t) {
          return "" + p + namespace + t;
        });
      })).join(_constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPE_DELIMITER);
    }

    function connectPrefix(type) {
      if (partialFlatActionType || !prefix || prefix && new RegExp("^" + prefix + namespace).test(type)) {
        return type;
      }

      return "" + prefix + namespace + type;
    }

    (0,_ownKeys__WEBPACK_IMPORTED_MODULE_1__["default"])(map).forEach(function (type) {
      var nextNamespace = connectPrefix(connectNamespace(type));
      var mapValue = (0,_get__WEBPACK_IMPORTED_MODULE_2__["default"])(type, map);

      if (predicate(mapValue)) {
        flatten(mapValue, {
          namespace: namespace,
          prefix: prefix
        }, partialFlatMap, nextNamespace);
      } else {
        partialFlatMap[nextNamespace] = mapValue;
      }
    });
    return partialFlatMap;
  };
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/get.js":
/*!****************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/get.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ get)
/* harmony export */ });
/* harmony import */ var _isMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isMap */ "./node_modules/redux-actions/es/utils/isMap.js");

function get(key, x) {
  return (0,_isMap__WEBPACK_IMPORTED_MODULE_0__["default"])(x) ? x.get(key) : x[key];
}

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/getLastElement.js":
/*!***************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/getLastElement.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (array) {
  return array[array.length - 1];
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/hasGeneratorInterface.js":
/*!**********************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/hasGeneratorInterface.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hasGeneratorInterface)
/* harmony export */ });
/* harmony import */ var _ownKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownKeys */ "./node_modules/redux-actions/es/utils/ownKeys.js");

function hasGeneratorInterface(handler) {
  var keys = (0,_ownKeys__WEBPACK_IMPORTED_MODULE_0__["default"])(handler);
  var hasOnlyInterfaceNames = keys.every(function (ownKey) {
    return ownKey === 'next' || ownKey === 'throw';
  });
  return keys.length && keys.length <= 2 && hasOnlyInterfaceNames;
}

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/identity.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/identity.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (value) {
  return value;
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isArray.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isArray.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (value) {
  return Array.isArray(value);
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isEmpty.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isEmpty.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (value) {
  return value.length === 0;
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isFunction.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isFunction.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (value) {
  return typeof value === 'function';
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isMap.js":
/*!******************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isMap.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (value) {
  return typeof Map !== 'undefined' && value instanceof Map;
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isNil.js":
/*!******************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isNil.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (value) {
  return value === null || value === undefined;
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isNull.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isNull.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (value) {
  return value === null;
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isPlainObject.js":
/*!**************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isPlainObject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (value) {
  if (typeof value !== 'object' || value === null) return false;
  var proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isString.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isString.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (value) {
  return typeof value === 'string';
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isSymbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isSymbol.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (value) {
  return typeof value === 'symbol' || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Symbol]';
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isUndefined.js":
/*!************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isUndefined.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (value) {
  return value === undefined;
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/ownKeys.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/ownKeys.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ownKeys)
/* harmony export */ });
/* harmony import */ var _isMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isMap */ "./node_modules/redux-actions/es/utils/isMap.js");

function ownKeys(object) {
  if ((0,_isMap__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    // We are using loose transforms in babel. Here we are trying to convert an
    // interable to an array. Loose mode expects everything to already be an
    // array. The problem is that our eslint rules encourage us to prefer
    // spread over Array.from.
    //
    // Instead of disabling loose mode we simply disable the warning.
    // eslint-disable-next-line unicorn/prefer-spread
    return Array.from(object.keys());
  }

  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    return Reflect.ownKeys(object);
  }

  var keys = Object.getOwnPropertyNames(object);

  if (typeof Object.getOwnPropertySymbols === 'function') {
    keys = keys.concat(Object.getOwnPropertySymbols(object));
  }

  return keys;
}

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/toString.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/toString.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (value) {
  return value.toString();
});

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/unflattenActionCreators.js":
/*!************************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/unflattenActionCreators.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unflattenActionCreators)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/redux-actions/es/constants.js");
/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isEmpty */ "./node_modules/redux-actions/es/utils/isEmpty.js");
/* harmony import */ var _camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camelCase */ "./node_modules/redux-actions/es/utils/camelCase.js");



function unflattenActionCreators(flatActionCreators, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_NAMESPACE : _ref$namespace,
      prefix = _ref.prefix;

  function unflatten(flatActionType, partialNestedActionCreators, partialFlatActionTypePath) {
    var nextNamespace = (0,_camelCase__WEBPACK_IMPORTED_MODULE_1__["default"])(partialFlatActionTypePath.shift());

    if ((0,_isEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(partialFlatActionTypePath)) {
      partialNestedActionCreators[nextNamespace] = flatActionCreators[flatActionType];
    } else {
      if (!partialNestedActionCreators[nextNamespace]) {
        partialNestedActionCreators[nextNamespace] = {};
      }

      unflatten(flatActionType, partialNestedActionCreators[nextNamespace], partialFlatActionTypePath);
    }
  }

  var nestedActionCreators = {};
  Object.getOwnPropertyNames(flatActionCreators).forEach(function (type) {
    var unprefixedType = prefix ? type.replace("" + prefix + namespace, '') : type;
    return unflatten(type, nestedActionCreators, unprefixedType.split(namespace));
  });
  return nestedActionCreators;
}

/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

!function(e,t){ true?t(exports):0}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof __webpack_require__.g?"undefined":N(__webpack_require__.g))&&__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});


/***/ }),

/***/ "./node_modules/rifm/dist/rifm.esm.js":
/*!********************************************!*\
  !*** ./node_modules/rifm/dist/rifm.esm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rifm": () => (/* binding */ Rifm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var Rifm =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Rifm, _React$Component);

  function Rifm(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._state = null;
    _this._del = false;

    _this._handleChange = function (evt) {
      if (true) {
        if (evt.target.type === 'number') {
          console.error('Rifm does not support input type=number, use type=tel instead.');
          return;
        }
      } // FUTURE: use evt.nativeEvent.inputType for del event, see comments at onkeydown


      var stateValue = _this.state.value;
      var value = evt.target.value;
      var input = evt.target;
      var op = value.length > stateValue.length;
      var del = _this._del;

      var noOp = stateValue === _this.props.format(value);

      _this.setState({
        value: value,
        local: true
      }, function () {
        var selectionStart = input.selectionStart;
        var refuse = _this.props.refuse || /[^\d]+/g;
        var before = value.substr(0, selectionStart).replace(refuse, '');
        _this._state = {
          input: input,
          before: before,
          op: op,
          di: del && noOp,
          del: del
        };

        if (_this.props.replace && _this.props.replace(stateValue) && op && !noOp) {
          var start = -1;

          for (var i = 0; i !== before.length; ++i) {
            start = Math.max(start, value.toLowerCase().indexOf(before[i].toLowerCase(), start + 1));
          }

          var c = value.substr(start + 1).replace(refuse, '')[0];
          start = value.indexOf(c, start + 1);
          value = "" + value.substr(0, start) + value.substr(start + 1);
        }

        var fv = _this.props.format(value);

        if (stateValue === fv) {
          _this.setState({
            value: value
          });
        } else {
          _this.props.onChange(fv);
        }
      });
    };

    _this._hKD = function (evt) {
      if (evt.code === 'Delete') {
        _this._del = true;
      }
    };

    _this._hKU = function (evt) {
      if (evt.code === 'Delete') {
        _this._del = false;
      }
    };

    _this.state = {
      value: props.value,
      local: true
    };
    return _this;
  }

  Rifm.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    return {
      value: state.local ? state.value : props.value,
      local: false
    };
  };

  var _proto = Rifm.prototype;

  _proto.render = function render() {
    var _handleChange = this._handleChange,
        value = this.state.value,
        children = this.props.children;
    return children({
      value: value,
      onChange: _handleChange
    });
  } // delete when  https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType will be supported by all major browsers
  ;

  _proto.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('keydown', this._hKD);
    document.removeEventListener('keyup', this._hKU);
  } // delete when  https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType will be supported by all major browsers
  ;

  _proto.componentDidMount = function componentDidMount() {
    document.addEventListener('keydown', this._hKD);
    document.addEventListener('keyup', this._hKU);
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    var _state = this._state;

    if (_state) {
      var value = this.state.value;
      var start = -1;

      for (var i = 0; i !== _state.before.length; ++i) {
        start = Math.max(start, value.toLowerCase().indexOf(_state.before[i].toLowerCase(), start + 1));
      } // format usually looks better without this


      if (this.props.replace && (_state.op || _state.del && !_state.di)) {
        while (value[start + 1] && (this.props.refuse || /[^\d]+/).test(value[start + 1])) {
          start += 1;
        }
      }

      _state.input.selectionStart = _state.input.selectionEnd = start + 1 + (_state.di ? 1 : 0);
    }

    this._state = null;
  };

  return Rifm;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);




/***/ }),

/***/ "./node_modules/to-camel-case/index.js":
/*!*********************************************!*\
  !*** ./node_modules/to-camel-case/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var space = __webpack_require__(/*! to-space-case */ "./node_modules/to-space-case/index.js")

/**
 * Export.
 */

module.exports = toCamelCase

/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toCamelCase(string) {
  return space(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase()
  })
}


/***/ }),

/***/ "./node_modules/to-no-case/index.js":
/*!******************************************!*\
  !*** ./node_modules/to-no-case/index.js ***!
  \******************************************/
/***/ ((module) => {


/**
 * Export.
 */

module.exports = toNoCase

/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/
var hasSeparator = /(_|-|\.|:)/
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase(string) {
  if (hasSpace.test(string)) return string.toLowerCase()
  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()
  return string.toLowerCase()
}

/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g

/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : ''
  })
}

/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ')
  })
}


/***/ }),

/***/ "./node_modules/to-space-case/index.js":
/*!*********************************************!*\
  !*** ./node_modules/to-space-case/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var clean = __webpack_require__(/*! to-no-case */ "./node_modules/to-no-case/index.js")

/**
 * Export.
 */

module.exports = toSpaceCase

/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

function toSpaceCase(string) {
  return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : ''
  }).trim()
}


/***/ }),

/***/ "./node_modules/trello-smooth-dnd/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/trello-smooth-dnd/dist/index.js ***!
  \******************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.containerInstance="smooth-dnd-container-instance",t.containersInDraggable="smooth-dnd-containers-in-draggable",t.defaultGroupName="@@smooth-dnd-default-group@@",t.wrapperClass="smooth-dnd-draggable-wrapper",t.defaultGrabHandleClass="smooth-dnd-default-grap-handle",t.animationClass="animated",t.translationValue="__smooth_dnd_draggable_translation_value",t.visibilityValue="__smooth_dnd_draggable_visibility_value",t.ghostClass="smooth-dnd-ghost",t.containerClass="smooth-dnd-container",t.extraSizeForInsertion="smooth-dnd-extra-size-for-insertion",t.stretcherElementClass="smooth-dnd-stretcher-element",t.stretcherElementInstance="smooth-dnd-stretcher-instance",t.isDraggableDetached="smoth-dnd-is-draggable-detached",t.disbaleTouchActions="smooth-dnd-disable-touch-action",t.noUserSelectClass="smooth-dnd-no-user-select"},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});t.getIntersection=function(e,t){return{left:Math.max(e.left,t.left),top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom)}};var n=t.getIntersectionOnAxis=function(e,t,n){return"x"===n?{left:Math.max(e.left,t.left),top:e.top,right:Math.min(e.right,t.right),bottom:e.bottom}:{left:e.left,top:Math.max(e.top,t.top),right:e.right,bottom:Math.min(e.bottom,t.bottom)}},r=t.getContainerRect=function(e){var t=e.getBoundingClientRect(),n={left:t.left,right:t.right+10,top:t.top,bottom:t.bottom};if(a(e,"x")&&!i(e,"x")){var r=n.right-n.left;n.right=n.right+e.scrollWidth-r}if(a(e,"y")&&!i(e,"y")){var o=n.bottom-n.top;n.bottom=n.bottom+e.scrollHeight-o}return n},o=(t.getScrollingAxis=function(t){var n=e.getComputedStyle(t),r=n.overflow;if("auto"===r||"scroll"===r)return"xy";var o=n["overflow-x"],i="auto"===o||"scroll"===o,a=n["overflow-y"];return(i?"x":"")+("auto"===a||"scroll"===a?"y":"")||null},t.isScrolling=function(t,n){var r=e.getComputedStyle(t),o=r.overflow,i=r["overflow-"+n];return"auto"===o||"scroll"===o||("auto"===i||"scroll"===i)}),i=t.isScrollingOrHidden=function(t,n){var r=e.getComputedStyle(t),o=r.overflow,i=r["overflow-"+n];return"auto"===o||"scroll"===o||"hidden"===o||("auto"===i||"scroll"===i||"hidden"===i)},a=t.hasBiggerChild=function(e,t){return"x"===t?e.scrollWidth>e.clientWidth:e.scrollHeight>e.clientHeight};t.hasScrollBar=function(e,t){return a(e,t)&&o(e,t)},t.getVisibleRect=function(e,t){var o=e,l=t||r(e);for(o=e.parentElement;o;)a(o,"x")&&i(o,"x")&&(l=n(l,o.getBoundingClientRect(),"x")),a(o,"y")&&i(o,"y")&&(l=n(l,o.getBoundingClientRect(),"y")),o=o.parentElement;return l},t.listenScrollParent=function(t,n){var r=[];return setTimeout(function(){for(var i=t;i;)(o(i,"x")||o(i,"y"))&&(i.addEventListener("scroll",n),r.push(i)),i=i.parentElement;e.addEventListener("scroll",n)},10),{dispose:function(){r.forEach(function(e){e.removeEventListener("scroll",n)}),e.removeEventListener("scroll",n)}}},t.hasParent=function(e,t){for(var n=e;n;){if(n===t)return!0;n=n.parentElement}return!1},t.getParent=function(e,t){for(var n=e;n;){if(n.matches(t))return n;n=n.parentElement}return null},t.hasClass=function(e,t){return e.className.split(" ").map(function(e){return e}).indexOf(t)>-1},t.addClass=function(e,t){if(e){e.className=e.className||"";var n=e.className.split(" ").filter(function(e){return e});-1===n.indexOf(t)&&(n.unshift(t),e.className=n.join(" "))}},t.removeClass=function(e,t){if(e){var n=e.className.split(" ").filter(function(e){return e&&e!==t});e.className=n.join(" ")}},t.debounce=function(e,t,n){var r=null;return function(){for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];r&&clearTimeout(r),n&&!r?e.call.apply(e,[void 0].concat(i)):r=setTimeout(function(){r=null,e.call.apply(e,[void 0].concat(i))},t)}},t.removeChildAt=function(e,t){return e.removeChild(e.children[t])},t.addChildAt=function(e,t,n){n>=e.children.lenght?e.appendChild(t):e.insertBefore(t,e.children[n])},t.isMobile=function(){return"undefined"!=typeof window&&!!(e.navigator.userAgent.match(/Android/i)||e.navigator.userAgent.match(/webOS/i)||e.navigator.userAgent.match(/iPhone/i)||e.navigator.userAgent.match(/iPad/i)||e.navigator.userAgent.match(/iPod/i)||e.navigator.userAgent.match(/BlackBerry/i)||e.navigator.userAgent.match(/Windows Phone/i))},t.clearSelection=function(){e.getSelection?e.getSelection().empty?e.getSelection().empty():e.getSelection().removeAllRanges&&e.getSelection().removeAllRanges():e.document.selection&&e.document.selection.empty()},t.getElementCursor=function(t){if(t){var n=e.getComputedStyle(t);if(n)return n.cursor}return null}}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.domDropHandler=function(t){var n=t.element,i=t.draggables;t.layout,t.options;return function(t,a){var l=t.removedIndex,u=t.addedIndex,s=t.droppedElement,c=null;if(null!==l&&(c=(0,r.removeChildAt)(n,l),i.splice(l,1)),null!==u){var d=e.document.createElement("div");d.className=""+o.wrapperClass,d.appendChild(c&&c.firstElementChild?c.firstElementChild:s),d[o.containersInDraggable]=[],(0,r.addChildAt)(n,d,u),u>=i.length?i.push(d):i.splice(u,0,d)}a&&a(t)}},t.reactDropHandler=function(){return{handler:function(e){e.element,e.draggables,e.layout,e.options;return function(e,t){t&&t(e)}}}};var r=n(2),o=n(1)}).call(this,n(0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dropHandlers=t.constants=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(5)),o=a(n(1)),i=a(n(3));function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.default=r.default,t.constants=o,t.dropHandlers=i},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(6)),o=u(n(10)),i=n(2),a=n(3),l=n(1);function u(e){return e&&e.__esModule?e:{default:e}}var s={groupName:null,behaviour:"move",orientation:"vertical",getChildPayload:null,animationDuration:250,autoScrollEnabled:!0,shouldAcceptDrop:null,shouldAnimateDrop:null};function c(e,t,n){t?((0,i.addClass)(e,l.animationClass),e.style.transitionDuration=n+"ms"):((0,i.removeClass)(e,l.animationClass),e.style.removeProperty("transition-duration"))}function d(e){return e?e[l.containerInstance]:null}function f(t){if(N.wrapChild)return N.wrapChild(t);var n=e.document.createElement("div");return n.className=""+l.wrapperClass,t.parentElement.insertBefore(n,t),n.appendChild(t),n}function g(e){var t=[];return Array.prototype.map.call(e.children,function(n){if(n.nodeType===Node.ELEMENT_NODE){var r=n;(0,i.hasClass)(n,l.wrapperClass)||(r=f(n)),r[l.containersInDraggable]=[],r[l.translationValue]=0,t.push(r)}else"function"==typeof e.removeChild&&e.removeChild(n)}),t}function p(e){var t=e.layout;return function(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function e(n,r,o,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(i<o)return o;if(o===i){var l=t.getBeginEnd(n[o]),u=l.begin,s=l.end;return r>u&&r<=s?a?r<(s+u)/2?o:o+1:o:null}var c=Math.floor((i+o)/2),d=t.getBeginEnd(n[c]),f=d.begin,g=d.end;return r<f?e(n,r,o,c-1,a):r>g?e(n,r,c+1,i,a):a?r<(g+f)/2?c:c+1:c}(e,n,0,e.length-1,r)}}function m(e){var t=e.element,n=e.draggables,r=e.layout,o=e.options,i=function(e){var t=e.element,n=e.draggables,r=e.layout;return e.options,function(){n.forEach(function(e){c(e,!1),r.setTranslation(e,0),r.setVisibility(e,!0),e[l.containersInDraggable]=[]}),t[l.stretcherElementInstance]&&(t[l.stretcherElementInstance].parentNode.removeChild(t[l.stretcherElementInstance]),t[l.stretcherElementInstance]=null)}}({element:t,draggables:n,layout:r,options:o}),u=(N.dropHandler||a.domDropHandler)({element:t,draggables:n,layout:r,options:o});return function(e,t){var n=t.addedIndex,r=t.removedIndex;if(i(),e.targetElement||o.removeOnDropOut){var a={removedIndex:r,addedIndex:null!==n?null!==r&&r<n?n-1:n:null,payload:e.payload,droppedElement:e.element.firstElementChild};u(a,o.onDrop)}}}function v(e,t){var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return Object.assign({},s,e)}(t),r=g(e,n.orientation,n.animationDuration);return(0,i.addClass)(e,l.containerClass+" "+n.orientation),{element:e,draggables:r,options:n,layout:(0,o.default)(e,n.orientation,n.animationDuration)}}function h(e,t){var n=function(e,t){for(var n=e.element;n;){var r=d(n.parentElement);if(r&&t.indexOf(r)>-1)return{container:r,draggable:n};n=n.parentElement}return null}(e,t);n&&(n.container.getChildContainers().push(e),e.setParentContainer(n.container),n.draggable[l.containersInDraggable].push(e))}function y(e){e.draggables;var t=e.element,n=e.options,r=null;return function(e){var o=e.draggableInfo,i=(e.dragResult,r);return null==r&&o.container.element===t&&"copy"!==n.behaviour&&(i=r=o.elementIndex),{removedIndex:i}}}function b(e){var t=e.draggables,n=e.layout;return function(e){e.draggableInfo;var r=e.dragResult;null!==r.removedIndex&&n.setVisibility(t[r.removedIndex],!1)}}function C(e){var t=e.element,n=e.layout;return function(e){var r=e.draggableInfo;return{pos:d(t).isPosInChildContainer()?null:n.getPosition(r.position)}}}function E(e){var t=e.element,n=!1;return function(e){e.draggableInfo;var r=e.dragResult;d(t).getParentContainer()&&n!==(null!==r.pos)&&(n=null!==r.pos,d(t).getParentContainer().onChildPositionCaptured(n))}}function x(e){var t=e.layout,n=null;return function(e){var r=e.draggableInfo;return null===e.dragResult.pos?n=null:{elementSize:n=n||t.getSize(r.element)}}}function S(e){var t=e.element;return function(e){var n=e.draggableInfo,r=e.dragResult;!function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t&&n?e.targetElement=t:e.targetElement===t&&(e.targetElement=null)}(n,t,!!r.pos)}}function O(e){e.draggables,e.layout;return function(e){return null!==e.dragResult.pos?{addedIndex:0}:{addedIndex:null}}}function w(e){e.draggables;var t=e.layout,n=null;return function(e){var r=e.dragResult.addedIndex;if(r!==n){n=r;var o=t.getBeginEndOfContainer(),i=o.begin,a=o.end;return{shadowBeginEnd:{rect:t.getTopLeftOfElementBegin(i,a)}}}}}function D(e){var t=B(e);return function(e){var n=e.draggableInfo,r=e.dragResult;return n.invalidateShadow?t({draggableInfo:n,dragResult:r}):null}}function I(e){var t=function(e){var t=e.draggables,n=p({layout:e.layout});return function(e){var r=e.dragResult,o=r.shadowBeginEnd,i=r.pos;if(!o){var a=n(t,i,!0);return null!==a?a:t.length}return o.begin+o.beginAdjustment<=i&&o.end>=i?null:i<o.begin+o.beginAdjustment?n(t,i):i>o.end?n(t,i)+1:t.length}}(e);return function(e){var n=e.dragResult,r=null;return null!==n.pos&&null===(r=t({dragResult:n}))&&(r=n.addedIndex),{addedIndex:r}}}function P(){var e=null;return function(t){var n=t.dragResult,r=n.addedIndex,o=n.shadowBeginEnd;r!==e&&null!==e&&o&&(o.beginAdjustment=0),e=r}}function R(t){var n=t.element,r=t.draggables,o=t.layout,i=t.options,a=null;return function(t){var u=t.dragResult,s=u.addedIndex,c=u.removedIndex,d=u.elementSize;if(null===c)if(null!==s){if(!a){var f=o.getBeginEndOfContainer();f.end=f.begin+o.getSize(n);var g=o.getScrollSize(n)>o.getSize(n)?f.begin+o.getScrollSize(n)-o.getScrollValue(n):f.end,p=r.length>0?o.getBeginEnd(r[r.length-1]).end-r[r.length-1][l.translationValue]:f.begin;if(p+d>g){(a=e.document.createElement("div")).className=l.stretcherElementClass+" "+i.orientation;var m=d+p-g;return o.setSize(a.style,m+"px"),n.appendChild(a),n[l.stretcherElementInstance]=a,{containerBoxChanged:!0}}}}else if(a){o.setTranslation(a,0);var v=a;return a=null,n.removeChild(v),n[l.stretcherElementInstance]=null,{containerBoxChanged:!0}}}}function T(e){e.element;var t=e.draggables,n=e.layout,r=null,o=null;return function(e){var i=e.dragResult,a=i.addedIndex,l=i.removedIndex,u=i.elementSize;if(a!==r||l!==o){for(var s=0;s<t.length;s++)if(s!==l){var c=t[s],d=0;null!==l&&l<s&&(d-=n.getSize(t[l])),null!==a&&a<=s&&(d+=u),n.setTranslation(c,d)}return r=a,o=l,{addedIndex:a,removedIndex:l}}}}function B(e){var t=e.draggables,n=e.layout,r=null;return function(e){var o=e.draggableInfo,i=e.dragResult,a=i.addedIndex,l=i.removedIndex,u=i.elementSize,s=i.pos,c=i.shadowBeginEnd;if(null!==s){if(null===a||!o.invalidateShadow&&a===r)return null;r&&(r=a);var d=a-1,f=0,g=null,p=null;if(d===l&&d--,d>-1){var m=n.getSize(t[d]);if(p=n.getBeginEnd(t[d]),u<m){var v=(m-u)/2;f=p.end-v}else f=p.end}else p={end:n.getBeginEndOfContainer().begin};var h=1e4,y=a;if(y===l&&y++,y<t.length){var b=n.getSize(t[y]);if(g=n.getBeginEnd(t[y]),u<b){var C=(b-u)/2;h=g.begin+C}else h=g.begin}else g={begin:n.getContainerRectangles().end};return{shadowBeginEnd:{begin:f,end:h,rect:p&&g?n.getTopLeftOfElementBegin(p.end,g.begin):null,beginAdjustment:c?c.beginAdjustment:0}}}return r=null,{shadowBeginEnd:null}}}function A(){var e=null;return function(t){var n=t.dragResult,r=n.pos,o=n.addedIndex,i=n.shadowBeginEnd;t.draggableInfo.invalidateShadow;if(null!==r){if(null!=o&&null===e){if(r<i.begin){var a=r-i.begin-5;i.beginAdjustment=a}e=o}}else e=null}}function _(e){var t=e.options,n=!1;return function(e){var r=!!e.dragResult.pos;if(r!==n){if(n=r,!r)return t.onDragLeave&&t.onDragLeave(),{dragLeft:!0};t.onDragEnter&&t.onDragEnter()}}}function z(e){var t=e.options,n=null;return function(e){var r=e.dragResult,o=r.addedIndex,i=r.removedIndex,a=e.draggableInfo,l=a.payload,u=a.element;if(t.onDropReady&&n!==o){n=o;var s=o;null!==i&&o>i&&s--,t.onDropReady({addedIndex:s,removedIndex:i,payload:l,element:u.firstElementChild})}}}function j(e){return"drop-zone"===e.options.behaviour?M(e)(y,b,C,E,x,S,O,w,_,z):M(e)(y,b,C,E,x,S,D,I,P,R,T,B,A,_,z)}function M(e){return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=n.map(function(t){return t(e)}),i=null;return function(e){return i=o.reduce(function(t,n){return Object.assign(t,n({draggableInfo:e,dragResult:t}))},i||{addedIndex:null,removedIndex:null,elementSize:null,pos:null,shadowBeginEnd:null})}}}function L(e){return function(t){var n=null,r=null,o=v(e,t),a=j(o),u=m(o),s=null,d=!1,p=[];function y(){null!==r&&(r.invalidateShadow=!0,n=a(r),r.invalidateShadow=!1)}function b(e){d=e,s&&(s.onChildPositionCaptured(e),r&&(n=a(r)))}function C(e,t,n){for(var r=g(t,n.orientation,n.animationDuration),o=0;o<r.length;o++)e[o]=r[o];for(var i=0;i<e.length-r.length;i++)e.pop()}return o.layout.setScrollListener(function(){y()}),{element:e,draggables:o.draggables,isDragRelevant:function(e){var t=e.element,n=e.options;return function(e,r){if(n.shouldAcceptDrop)return n.shouldAcceptDrop(e.getOptions(),r);var o=e.getOptions();return"copy"!==n.behaviour&&(0,i.getParent)(t,"."+l.wrapperClass)!==e.element&&(e.element===t||!(!o.groupName||o.groupName!==n.groupName))}}(o),getScale:o.layout.getContainerScale,layout:o.layout,getChildContainers:function(){return p},onChildPositionCaptured:b,dispose:function(e){!function(e){Array.prototype.map.call(e.children,function(t){if(t.nodeType===Node.ELEMENT_NODE){var n=t;(0,i.hasClass)(t,l.wrapperClass)&&(e.insertBefore(n,f.firstElementChild),e.removeChild(n))}})}(e.element)},prepareDrag:function(e,t){var n=e.element,r=o.draggables,i=e.getOptions();C(r,n,i),e.layout.invalidateRects(),h(e,t),r.forEach(function(e){return c(e,!0,i.animationDuration)})},isPosInChildContainer:function(){return d},handleDrag:function(e){return r=e,(n=a(e)).dragLeft&&"drop-zone"!==o.options.behaviour&&(n.dragLeft=!1,setTimeout(function(){n&&T(o)({dragResult:n})},20)),n},handleDrop:function(e){r=null,b(!1),a=j(o),u(e,n),n=null,s=null,p=[]},getDragResult:function(){return n},getTranslateCalculator:function(){return T(o).apply(void 0,arguments)},setParentContainer:function(e){s=e},getParentContainer:function(){return s},onTranslated:function(){y()},getOptions:function(){return o.options},setDraggables:function(){C(o.draggables,e,o.options)}}}}function N(e,t){var n=L(e)(t);return e[l.containerInstance]=n,r.default.register(n),{dispose:function(){r.default.unregister(n),n.layout.dispose(),n.dispose(n)}}}t.default=N}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),n(7);var r=l(n(2)),o=l(n(1)),i=n(8),a=function(e){return e&&e.__esModule?e:{default:e}}(n(9));function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var u=["mousedown","touchstart"],s=["mousemove","touchmove"],c=["mouseup","touchend"],d=null,f=null,g=null,p=null,m=[],v=!1,h=null,y=null,b=null,C=null,E=r.isMobile();function x(){"undefined"!=typeof window&&u.forEach(function(t){e.document.addEventListener(t,w,{passive:!1})})}function S(){return p.ghostParent?p.ghostParent:f&&f.parentElement||e.document.body}var O=function(){var t=void 0,n=void 0,r=void 0,o=null,i=1,a=5;function l(e){var r=I(e),o=r.clientX,l=r.clientY;if(n)(Math.abs(t.clientX-o)>a||Math.abs(t.clientY-l)>a)&&f();else if(Math.abs(t.clientX-o)>i||Math.abs(t.clientY-l)>i)return g()}function u(){f()}function d(){f()}function f(){clearTimeout(o),s.forEach(function(t){return e.document.removeEventListener(t,l)},{passive:!1}),c.forEach(function(t){return e.document.removeEventListener(t,u)},{passive:!1}),e.document.removeEventListener("drag",d,{passive:!1})}function g(){clearTimeout(o),f(),r()}return function(i,a,f){t=I(i),r=f,(n="number"==typeof a?a:E?200:0)&&(o=setTimeout(g,n)),s.forEach(function(t){return e.document.addEventListener(t,l)},{passive:!1}),c.forEach(function(t){return e.document.addEventListener(t,u)},{passive:!1}),e.document.addEventListener("drag",d,{passive:!1})}}();function w(t){var n=I(t);if(!v&&(void 0===n.button||0===n.button)&&(f=r.getParent(n.target,"."+o.wrapperClass))){var i=r.getParent(f,"."+o.containerClass),a=m.filter(function(e){return e.element===i})[0],l=a.getOptions().dragHandleSelector,u=a.getOptions().nonDragAreaSelector,d=!0;l&&!r.getParent(n.target,l)&&(d=!1),u&&r.getParent(n.target,u)&&(d=!1),d&&O(n,a.getOptions().dragBeginDelay,function(){r.clearSelection(),R(n,r.getElementCursor(t.target)),s.forEach(function(t){e.document.addEventListener(t,T,{passive:!1})}),c.forEach(function(t){e.document.addEventListener(t,D,{passive:!1})})})}}function D(){s.forEach(function(t){e.document.removeEventListener(t,T,{passive:!1})}),c.forEach(function(t){e.document.removeEventListener(t,D,{passive:!1})}),y({reset:!0}),C&&((0,i.removeStyle)(C),C=null),p&&function(e){function t(){r.removeClass(g.ghost,"animated"),g.ghost.style.transitionDuration=null,S().removeChild(g.ghost),e()}function n(e,n,o){var i=e.top,a=e.left;r.addClass(g.ghost,"animated"),o&&r.addClass(g.ghost.firstElementChild,o),g.ghost.style.transitionDuration=n+"ms",g.ghost.style.left=a+"px",g.ghost.style.top=i+"px",setTimeout(function(){t()},n+20)}if(p.targetElement){var o=m.filter(function(e){return e.element===p.targetElement})[0];!function(e){return!e.shouldAnimateDrop||e.shouldAnimateDrop(p.container.getOptions(),p.payload)}(o.getOptions())?t():n(o.getDragResult().shadowBeginEnd.rect,Math.max(150,o.getOptions().animationDuration/2),o.getOptions().dropClass)}else{var i=m.filter(function(e){return e===p.container})[0],a=i.getOptions(),l=a.behaviour,u=a.removeOnDropOut;if("move"===l&&!u&&i.getDragResult()){var s=i.getDragResult(),c=s.removedIndex,d=s.elementSize,f=i.layout;i.getTranslateCalculator({dragResult:{removedIndex:c,addedIndex:c,elementSize:d}});var v=c>0?f.getBeginEnd(i.draggables[c-1]).end:f.getBeginEndOfContainer().begin;n(f.getTopLeftOfElementBegin(v),i.getOptions().animationDuration,i.getOptions().dropClass)}else r.addClass(g.ghost,"animated"),g.ghost.style.transitionDuration=i.getOptions().animationDuration+"ms",g.ghost.style.opacity="0",g.ghost.style.transform="scale(0.90)",setTimeout(function(){t()},i.getOptions().animationDuration)}}(function(){r.removeClass(e.document.body,o.disbaleTouchActions),r.removeClass(e.document.body,o.noUserSelectClass),P(!1),(d||[]).forEach(function(e){e.handleDrop(p)}),d=null,f=null,g=null,p=null,v=!1,null,b=null,h=null})}function I(e){return e.touches?e.touches[0]:e}function P(e){m.forEach(function(t){var n=e?t.getOptions().onDragStart:t.getOptions().onDragEnd;if(n){var r={isSource:t===p.container,payload:p.payload};t.isDragRelevant(p.container,p.payload)?r.willAcceptDrop=!0:r.willAcceptDrop=!1,n(r)}})}function R(t,n){v=!0;var l=m.filter(function(e){return f.parentElement===e.element})[0];l.setDraggables(),l,b=l.getOptions().lockAxis?l.getOptions().lockAxis.toLowerCase():null,p=function(e){var t=m.filter(function(t){return e.parentElement===t.element})[0],n=t.draggables.indexOf(e),r=t.getOptions().getGhostParent;return{container:t,element:e,elementIndex:n,payload:t.getOptions().getChildPayload?t.getOptions().getChildPayload(n):void 0,targetElement:null,position:{x:0,y:0},groupName:t.getOptions().groupName,ghostParent:r?r():null}}(f),g=function(t,n,a,l){var u=n.x,s=n.y,c=a.getScale(),d=(c.scaleX,c.scaleY,t.getBoundingClientRect()),f=d.left,g=d.top,p=d.right,m=d.bottom,v=f+(p-f)/2,h=g+(m-g)/2,y=t.cloneNode(!0);return y.style.zIndex=1e3,y.style.boxSizing="border-box",y.style.position="fixed",y.style.left=f+"px",y.style.top=g+"px",y.style.width=p-f+"px",y.style.height=m-g+"px",y.style.overflow="visible",y.style.transition=null,y.style.removeProperty("transition"),y.style.pointerEvents="none",a.getOptions().dragClass?setTimeout(function(){r.addClass(y.firstElementChild,a.getOptions().dragClass);var t=e.getComputedStyle(y.firstElementChild).cursor;C=(0,i.addCursorStyleToBody)(t)}):C=(0,i.addCursorStyleToBody)(l),r.addClass(y,a.getOptions().orientation),r.addClass(y,o.ghostClass),{ghost:y,centerDelta:{x:v-u,y:h-s},positionDelta:{left:f-u,top:g-s}}}(f,{x:t.clientX,y:t.clientY},p.container,n),p.position={x:t.clientX+g.centerDelta.x,y:t.clientY+g.centerDelta.y},p.mousePosition={x:t.clientX,y:t.clientY},r.addClass(e.document.body,o.disbaleTouchActions),r.addClass(e.document.body,o.noUserSelectClass),d=m.filter(function(e){return e.isDragRelevant(l,p.payload)}),h=function(e){var t=e;return function(e){var n=!1;t.forEach(function(t){var r=t.handleDrag(e);n|=r.containerBoxChanged||!1,r.containerBoxChanged=!1}),y({draggableInfo:e}),n&&(n=!1,setTimeout(function(){m.forEach(function(e){e.layout.invalidateRects(),e.onTranslated()})},10))}}(d),y&&y({reset:!0}),y=function(e,t){return e.getOptions().autoScrollEnabled?(0,a.default)(t):function(){return null}}(l,d),d.forEach(function(e){return e.prepareDrag(e,d)}),P(!0),h(p),S().appendChild(g.ghost)}function T(e){e.preventDefault();var t=I(e);p?(b?"y"===b?(g.ghost.style.top=t.clientY+g.positionDelta.top+"px",p.position.y=t.clientY+g.centerDelta.y,p.mousePosition.y=t.clientY):"x"===b&&(g.ghost.style.left=t.clientX+g.positionDelta.left+"px",p.position.x=t.clientX+g.centerDelta.x,p.mousePosition.x=t.clientX):(g.ghost.style.left=t.clientX+g.positionDelta.left+"px",g.ghost.style.top=t.clientY+g.positionDelta.top+"px",p.position.x=t.clientX+g.centerDelta.x,p.position.y=t.clientY+g.centerDelta.y,p.mousePosition.x=t.clientX,p.mousePosition.y=t.clientY),h(p)):R(t,r.getElementCursor(e.target))}(0,i.addStyleToHead)(),t.default=(x(),{register:function(e){m.push(e)},unregister:function(e){m.splice(m.indexOf(e),1)}})}).call(this,n(0))},function(e,t,n){"use strict";(function(e){!function(e){e&&e.prototype&&!e.prototype.matches&&(e.prototype.matches=e.prototype.matchesSelector||e.prototype.mozMatchesSelector||e.prototype.msMatchesSelector||e.prototype.oMatchesSelector||e.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1})}(e.Node||e.Element),function(e){e&&e.prototype&&null==e.prototype.firstElementChild&&Object.defineProperty(e.prototype,"firstElementChild",{get:function(){for(var e,t=this.childNodes,n=0;e=t[n++];)if(1===e.nodeType)return e;return null}})}(e.Node||e.Element),Array.prototype.some||(Array.prototype.some=function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof e)throw new TypeError;for(var t=Object(this),n=t.length>>>0,r=arguments.length>=2?arguments[1]:void 0,o=0;o<n;o++)if(o in t&&e.call(r,t[o],o,t))return!0;return!1})}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.removeStyle=t.addCursorStyleToBody=t.addStyleToHead=void 0;var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1));function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={overflow:"hidden",display:"block"},u={height:"100%",display:"inline-block","vertical-align":"top","white-space":"normal"},s=(a(r={},"."+i.containerClass,{position:"relative"}),a(r,"."+i.containerClass+" *",{"box-sizing":"border-box"}),a(r,"."+i.containerClass+".horizontal",{"white-space":"nowrap"}),a(r,"."+i.containerClass+".horizontal > ."+i.stretcherElementClass,{display:"inline-block"}),a(r,"."+i.containerClass+".horizontal > ."+i.wrapperClass,u),a(r,"."+i.containerClass+".vertical > ."+i.wrapperClass,l),a(r,"."+i.wrapperClass,{}),a(r,"."+i.wrapperClass+".horizontal",u),a(r,"."+i.wrapperClass+".vertical",l),a(r,"."+i.wrapperClass+".animated",{transition:"transform ease"}),a(r,"."+i.ghostClass+" *",{"box-sizing":"border-box"}),a(r,"."+i.ghostClass+".animated",{transition:"all ease-in-out"}),a(r,"."+i.disbaleTouchActions+" *",{"touch-actions":"none","-ms-touch-actions":"none"}),a(r,"."+i.noUserSelectClass+" *",{"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),r);function c(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return"object"===(void 0===r?"undefined":o(r))?""+t+n+"{"+c(r)+"}":""+t+n+":"+r+";"},"")}t.addStyleToHead=function(){if("undefined"!=typeof window){var t=e.document.head||e.document.getElementsByTagName("head")[0],n=e.document.createElement("style"),r=c(s);n.type="text/css",n.styleSheet?n.styleSheet.cssText=r:n.appendChild(e.document.createTextNode(r)),t.appendChild(n)}},t.addCursorStyleToBody=function(t){if(t&&"undefined"!=typeof window){var n=e.document.head||e.document.getElementsByTagName("head")[0],r=e.document.createElement("style"),o=c({"body *":{cursor:t+" !important"}});return r.type="text/css",r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.document.createTextNode(o)),n.appendChild(r),r}return null},t.removeStyle=function(t){t&&"undefined"!=typeof window&&(e.document.head||e.document.getElementsByTagName("head")[0]).removeChild(t)}}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y",n=!1,r=null,o=null,i=null,a=null;return{animate:function(l,u){i=l,a=u,(n=!0)&&function n(){null===r&&(r=requestAnimationFrame(function(l){null===o&&(o=l);var u=l-o;o=l;var s=u/1e3*a;(function(e,t,n){e&&(e!==window?"x"===t?e.scrollLeft+=n:e.scrollTop+=n:"x"===t?e.scrollBy(n,0):e.scrollBy(0,n))})(e,t,s="begin"===i?0-s:s),r=null,n()}))}()},stop:function(){n&&(cancelAnimationFrame(r),n=!1,o=null,r=null)}}};function a(e){var t={element:e,rect:(0,r.getVisibleRect)(e,e.getBoundingClientRect()),descendants:[],invalidate:n,axis:null,dispose:function(){e.removeEventListener("scroll",n)}};function n(){t.rect=(0,r.getVisibleRect)(e,e.getBoundingClientRect()),t.descendants.forEach(function(e){return e.invalidate()})}return e.addEventListener("scroll",n),t}function l(e){return Object.assign(e,i(e.element,e.axis))}t.default=function(t){var n=function(e){var t=[],n=null;return e.forEach(function(e){var o=e;for(n=null;o;){var i=(0,r.getScrollingAxis)(o);if(i&&!t.some(function(e){return e.element===o})){var l=a(o);n&&l.descendants.push(n),n=l,"xy"===i?(t.push(Object.assign({},l,{axis:"x"})),t.push(Object.assign({},l,{axis:"y"},{descendants:[]}))):t.push(Object.assign({},l,{axis:i}))}o=o.parentElement}}),t}(t.map(function(e){return e.element})),u=[].concat(o(n.map(l)),o(function(){function t(){return{left:0,right:e.innerWidth,top:0,bottom:e.innerHeight}}return[Object.assign({rect:t(),axis:"y"},i(e)),Object.assign({rect:t(),axis:"x"},i(e,"x"))]}()));return function(e){var t=e.draggableInfo,r=e.reset;if(u.length){if(r)return u.forEach(function(e){return e.stop()}),n.forEach(function(e){return e.dispose()}),null;u.forEach(function(e){var n=function(e,t){var n=t.rect,r=n.left,o=n.right,i=n.top,a=n.bottom,l=e.x,u=e.y;if(l<r||l>o||u<i||u>a)return null;var s=void 0,c=void 0,d=void 0;return"x"===t.axis?(s=r,c=o,d=l):(s=i,c=a,d=u),c-d<100?{direction:"end",speedFactor:(100-(c-d))/100}:d-s<100?{direction:"begin",speedFactor:(100-(d-s))/100}:void 0}(t.mousePosition,e);n?e.animate(n.direction,1500*n.speedFactor):e.stop()})}}}}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t,n,l){t[o.extraSizeForInsertion]=0;var u=l,s=function(e){return{get:function(t,n){var r=e[n];return t[r||n]},set:function(t,n,r){requestAnimationFrame(function(){t[e[n]]=e.setters[n]?e.setters[n](r):r})}}}("horizontal"===n?i:a),c={translation:0},d=null;e.addEventListener("resize",function(){m(t)}),setTimeout(function(){g()},10);var f=r.listenScrollParent(t,function(){m(t),d&&d()});function g(){m(t),function(e){var t=e.getBoundingClientRect();c.scaleX=e.offsetWidth?(t.right-t.left)/e.offsetWidth:1,c.scaleY=e.offsetHeight?(t.bottom-t.top)/e.offsetHeight:1}(t)}var p=void 0;function m(e){c.rect=r.getContainerRect(e),c.visibleRect=r.getVisibleRect(e,c.rect)}function v(e){return s.get(e,"size")*s.get(c,"scale")}function h(e){return s.get(e,"dragPosition")}function y(e,t){var r=c.visibleRect,o=r.left,i=r.top,a=r.right,l=r.bottom;l-i<2&&(l=i+30);var u=c.rect;return"vertical"===n?e>u.left&&e<u.right&&t>i&&t<l:e>o&&e<a&&t>u.top&&t<u.bottom}return{getSize:v,getContainerRectangles:function(){return{rect:c.rect,visibleRect:c.visibleRect}},getBeginEndOfDOMRect:function(e){return{begin:s.get(e,"begin"),end:s.get(e,"end")}},getBeginEndOfContainer:function(){var e=s.get(c.rect,"begin")+c.translation,t=s.get(c.rect,"end")+c.translation;return{begin:e,end:t}},getBeginEndOfContainerVisibleRect:function(){var e=s.get(c.visibleRect,"begin")+c.translation,t=s.get(c.visibleRect,"end")+c.translation;return{begin:e,end:t}},getBeginEnd:function(e){var n=function(e){return(s.get(e,"distanceToParent")+(e[o.translationValue]||0))*s.get(c,"scale")}(e)+(s.get(c.rect,"begin")+c.translation)-s.get(t,"scrollValue");return{begin:n,end:n+v(e)*s.get(c,"scale")}},getAxisValue:h,setTranslation:function(e,t){t?s.set(e.style,"translate",t):e.style.removeProperty("transform");e[o.translationValue]=t,e[o.containersInDraggable]&&setTimeout(function(){e[o.containersInDraggable].forEach(function(e){!function e(t){t.layout.invalidateRects();t.onTranslated();t.getChildContainers()&&t.getChildContainers().forEach(function(t){return e(t)})}(e)})},u+20)},getTranslation:function(e){return e[o.translationValue]},setVisibility:function(e,t){void 0!==e[o.visibilityValue]&&e[o.visibilityValue]===t||(t?e.style.removeProperty("visibility"):e.style.visibility="hidden",e[o.visibilityValue]=t)},isVisible:function(e){return void 0===e[o.visibilityValue]||e[o.visibilityValue]},isInVisibleRect:y,dispose:function(){f&&f.dispose();p&&(p.parentNode.removeChild(p),p=null)},getContainerScale:function(){return{scaleX:c.scaleX,scaleY:c.scaleY}},setScrollListener:function(e){d=e},setSize:function(e,t){s.set(e,"setSize",t)},getTopLeftOfElementBegin:function(e){var t=0,r=0;"horizontal"===n?(r=e,t=c.rect.top):(r=c.rect.left,t=e);return{top:t,left:r}},getScrollSize:function(e){return s.get(e,"scrollSize")},getScrollValue:function(e){return s.get(e,"scrollValue")},setScrollValue:function(e,t){return s.set(e,"scrollValue",t)},invalidate:g,invalidateRects:function(){m(t)},getPosition:function(e){return y(e.x,e.y)?h(e):null}}};var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(2)),o=n(1);var i={size:"offsetWidth",distanceToParent:"offsetLeft",translate:"transform",begin:"left",end:"right",dragPosition:"x",scrollSize:"scrollWidth",offsetSize:"offsetWidth",scrollValue:"scrollLeft",scale:"scaleX",setSize:"width",setters:{translate:function(e){return"translate3d("+e+"px, 0, 0)"}}},a={size:"offsetHeight",distanceToParent:"offsetTop",translate:"transform",begin:"top",end:"bottom",dragPosition:"y",scrollSize:"scrollHeight",offsetSize:"offsetHeight",scrollValue:"scrollTop",scale:"scaleY",setSize:"height",setters:{translate:function(e){return"translate3d(0,"+e+"px, 0)"}}}}).call(this,n(0))}])});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

module.exports = _taggedTemplateLiteral, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/react-trello/dist/locales/en/translation.json":
/*!********************************************************************!*\
  !*** ./node_modules/react-trello/dist/locales/en/translation.json ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Add another lane":"+ Add another lane","Click to add card":"Click to add card","Delete lane":"Delete lane","Lane actions":"Lane actions","button":{"Add lane":"Add lane","Add card":"Add card","Cancel":"Cancel"},"placeholder":{"title":"title","description":"description","label":"label"}}');

/***/ }),

/***/ "./node_modules/react-trello/dist/locales/ru/translation.json":
/*!********************************************************************!*\
  !*** ./node_modules/react-trello/dist/locales/ru/translation.json ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Add another lane":"＋Добавить колонку","Click to add card":"＋Добавить карточку","Delete lane":"Удалить колонку","Lane actions":"Действия над колонкой","button":{"Add card":"Добавить карту","Add lane":"Добавить колонку","Cancel":"Отменить"},"placeholder":{"title":"Название","description":"Описание","label":"Метка"}}');

/***/ })

}]);