"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_routes_Apps_Profile_index_js"],{

/***/ "./node_modules/@material-ui/core/esm/TabScrollButton/TabScrollButton.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TabScrollButton/TabScrollButton.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _internal_svg_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../internal/svg-icons/KeyboardArrowLeft */ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowLeft.js");
/* harmony import */ var _internal_svg_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/svg-icons/KeyboardArrowRight */ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowRight.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js");



/* eslint-disable jsx-a11y/aria-role */







var styles = {
  /* Styles applied to the root element. */
  root: {
    width: 40,
    flexShrink: 0,
    opacity: 0.8,
    '&$disabled': {
      opacity: 0
    }
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    width: '100%',
    height: 40,
    '& svg': {
      transform: 'rotate(90deg)'
    }
  },

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {}
};

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_4__["default"], {
  fontSize: "small"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_svg_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_5__["default"], {
  fontSize: "small"
});

var TabScrollButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TabScrollButton(props, ref) {
  var classes = props.classes,
      classNameProp = props.className,
      direction = props.direction,
      orientation = props.orientation,
      disabled = props.disabled,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "direction", "orientation", "disabled"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: "div",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, classNameProp, disabled && classes.disabled, orientation === 'vertical' && classes.vertical),
    ref: ref,
    role: null,
    tabIndex: null
  }, other), direction === 'left' ? _ref : _ref2);
});
 true ? TabScrollButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
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
   * Which direction should the button indicate?
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(['left', 'right']).isRequired,

  /**
   * If `true`, the element will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(['horizontal', 'vertical']).isRequired
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiTabScrollButton'
})(TabScrollButton));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tab/Tab.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tab/Tab.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "styles": () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_unsupportedProp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/unsupportedProp */ "./node_modules/@material-ui/core/esm/utils/unsupportedProp.js");










var styles = function styles(theme) {
  var _extends2;

  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.typography.button, (_extends2 = {
      maxWidth: 264,
      minWidth: 72,
      position: 'relative',
      boxSizing: 'border-box',
      minHeight: 48,
      flexShrink: 0,
      padding: '6px 12px'
    }, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, theme.breakpoints.up('sm'), {
      padding: '6px 24px'
    }), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, "overflow", 'hidden'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, "whiteSpace", 'normal'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, "textAlign", 'center'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, theme.breakpoints.up('sm'), {
      minWidth: 160
    }), _extends2)),

    /* Styles applied to the root element if both `icon` and `label` are provided. */
    labelIcon: {
      minHeight: 72,
      paddingTop: 9,
      '& $wrapper > *:first-child': {
        marginBottom: 6
      }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="inherit"`. */
    textColorInherit: {
      color: 'inherit',
      opacity: 0.7,
      '&$selected': {
        opacity: 1
      },
      '&$disabled': {
        opacity: 0.5
      }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="primary"`. */
    textColorPrimary: {
      color: theme.palette.text.secondary,
      '&$selected': {
        color: theme.palette.primary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="secondary"`. */
    textColorSecondary: {
      color: theme.palette.text.secondary,
      '&$selected': {
        color: theme.palette.secondary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    },

    /* Pseudo-class applied to the root element if `selected={true}` (controlled by the Tabs component). */
    selected: {},

    /* Pseudo-class applied to the root element if `disabled={true}` (controlled by the Tabs component). */
    disabled: {},

    /* Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
    fullWidth: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: 'none'
    },

    /* Styles applied to the root element if `wrapped={true}`. */
    wrapped: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1.5
    },

    /* Styles applied to the `icon` and `label`'s wrapper element. */
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'column'
    }
  };
};
var Tab = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Tab(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      fullWidth = props.fullWidth,
      icon = props.icon,
      indicator = props.indicator,
      label = props.label,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      selected = props.selected,
      selectionFollowsFocus = props.selectionFollowsFocus,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? 'inherit' : _props$textColor,
      value = props.value,
      _props$wrapped = props.wrapped,
      wrapped = _props$wrapped === void 0 ? false : _props$wrapped,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["classes", "className", "disabled", "disableFocusRipple", "fullWidth", "icon", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"]);

  var handleClick = function handleClick(event) {
    if (onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleFocus = function handleFocus(event) {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    focusRipple: !disableFocusRipple,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["textColor".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(textColor))], className, disabled && classes.disabled, selected && classes.selected, label && icon && classes.labelIcon, fullWidth && classes.fullWidth, wrapped && classes.wrapped),
    ref: ref,
    role: "tab",
    "aria-selected": selected,
    disabled: disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    tabIndex: selected ? 0 : -1
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: classes.wrapper
  }, icon, label), indicator);
});
 true ? Tab.propTypes = {
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: _utils_unsupportedProp__WEBPACK_IMPORTED_MODULE_7__["default"],

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),

  /**
   * If `true`, the tab will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),

  /**
   * @ignore
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),

  /**
   * The icon element.
   */
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node),

  /**
   * @ignore
   * For server-side rendering consideration, we let the selected tab
   * render the indicator.
   */
  indicator: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node),

  /**
   * The label element.
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().node),

  /**
   * @ignore
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * @ignore
   */
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * @ignore
   */
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * @ignore
   */
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),

  /**
   * @ignore
   */
  selectionFollowsFocus: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),

  /**
   * @ignore
   */
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOf(['secondary', 'primary', 'inherit']),

  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().any),

  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   */
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__["default"])(styles, {
  name: 'MuiTab'
})(Tab));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tabs/ScrollbarSize.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tabs/ScrollbarSize.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollbarSize)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");





var styles = {
  width: 99,
  height: 99,
  position: 'absolute',
  top: -9999,
  overflow: 'scroll'
};
/**
 * @ignore - internal component.
 * The component originates from https://github.com/STORIS/react-scrollbar-size.
 * It has been moved into the core in order to minimize the bundle size.
 */

function ScrollbarSize(props) {
  var onChange = props.onChange,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["onChange"]);

  var scrollbarHeight = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);

  var setMeasurements = function setMeasurements() {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    var handleResize = (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
      var prevHeight = scrollbarHeight.current;
      setMeasurements();

      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [onChange]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    style: styles,
    ref: nodeRef
  }, other));
}
 true ? ScrollbarSize.propTypes = {
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
} : 0;

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tabs/TabIndicator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tabs/TabIndicator.js ***!
  \*****************************************************************/
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
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");







var styles = function styles(theme) {
  return {
    root: {
      position: 'absolute',
      height: 2,
      bottom: 0,
      width: '100%',
      transition: theme.transitions.create()
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main
    },
    vertical: {
      height: '100%',
      width: 2,
      right: 0
    }
  };
};
/**
 * @ignore - internal component.
 */

var TabIndicator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TabIndicator(props, ref) {
  var classes = props.classes,
      className = props.className,
      color = props.color,
      orientation = props.orientation,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "orientation"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__["default"])(color))], className, orientation === 'vertical' && classes.vertical),
    ref: ref
  }, other));
});
 true ? TabIndicator.propTypes = {
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
   * @ignore
   * The color of the tab indicator.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(['primary', 'secondary']).isRequired,

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(['horizontal', 'vertical']).isRequired
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'PrivateTabIndicator'
})(TabIndicator));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tabs/Tabs.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tabs/Tabs.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "styles": () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/refType.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");
/* harmony import */ var _utils_scrollLeft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/scrollLeft */ "./node_modules/@material-ui/core/esm/utils/scrollLeft.js");
/* harmony import */ var _internal_animate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../internal/animate */ "./node_modules/@material-ui/core/esm/internal/animate.js");
/* harmony import */ var _ScrollbarSize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ScrollbarSize */ "./node_modules/@material-ui/core/esm/Tabs/ScrollbarSize.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _TabIndicator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TabIndicator */ "./node_modules/@material-ui/core/esm/Tabs/TabIndicator.js");
/* harmony import */ var _TabScrollButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TabScrollButton */ "./node_modules/@material-ui/core/esm/TabScrollButton/TabScrollButton.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");


















var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: 'hidden',
      minHeight: 48,
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      display: 'flex'
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      flexDirection: 'column'
    },

    /* Styles applied to the flex container element. */
    flexContainer: {
      display: 'flex'
    },

    /* Styles applied to the flex container element if `orientation="vertical"`. */
    flexContainerVertical: {
      flexDirection: 'column'
    },

    /* Styles applied to the flex container element if `centered={true}` & `!variant="scrollable"`. */
    centered: {
      justifyContent: 'center'
    },

    /* Styles applied to the tablist element. */
    scroller: {
      position: 'relative',
      display: 'inline-block',
      flex: '1 1 auto',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the tablist element if `!variant="scrollable"`. */
    fixed: {
      overflowX: 'hidden',
      width: '100%'
    },

    /* Styles applied to the tablist element if `variant="scrollable"`. */
    scrollable: {
      overflowX: 'scroll',
      // Hide dimensionless scrollbar on MacOS
      scrollbarWidth: 'none',
      // Firefox
      '&::-webkit-scrollbar': {
        display: 'none' // Safari + Chrome

      }
    },

    /* Styles applied to the `ScrollButtonComponent` component. */
    scrollButtons: {},

    /* Styles applied to the `ScrollButtonComponent` component if `scrollButtons="auto"` or scrollButtons="desktop"`. */
    scrollButtonsDesktop: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.breakpoints.down('xs'), {
      display: 'none'
    }),

    /* Styles applied to the `TabIndicator` component. */
    indicator: {}
  };
};
var Tabs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Tabs(props, ref) {
  var ariaLabel = props['aria-label'],
      ariaLabelledBy = props['aria-labelledby'],
      action = props.action,
      _props$centered = props.centered,
      centered = _props$centered === void 0 ? false : _props$centered,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$indicatorColor = props.indicatorColor,
      indicatorColor = _props$indicatorColor === void 0 ? 'secondary' : _props$indicatorColor,
      onChange = props.onChange,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$ScrollButtonCo = props.ScrollButtonComponent,
      ScrollButtonComponent = _props$ScrollButtonCo === void 0 ? _TabScrollButton__WEBPACK_IMPORTED_MODULE_6__["default"] : _props$ScrollButtonCo,
      _props$scrollButtons = props.scrollButtons,
      scrollButtons = _props$scrollButtons === void 0 ? 'auto' : _props$scrollButtons,
      selectionFollowsFocus = props.selectionFollowsFocus,
      _props$TabIndicatorPr = props.TabIndicatorProps,
      TabIndicatorProps = _props$TabIndicatorPr === void 0 ? {} : _props$TabIndicatorPr,
      TabScrollButtonProps = props.TabScrollButtonProps,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? 'inherit' : _props$textColor,
      value = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["aria-label", "aria-labelledby", "action", "centered", "children", "classes", "className", "component", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant"]);

  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var scrollable = variant === 'scrollable';
  var isRtl = theme.direction === 'rtl';
  var vertical = orientation === 'vertical';
  var scrollStart = vertical ? 'scrollTop' : 'scrollLeft';
  var start = vertical ? 'top' : 'left';
  var end = vertical ? 'bottom' : 'right';
  var clientSize = vertical ? 'clientHeight' : 'clientWidth';
  var size = vertical ? 'height' : 'width';

  if (true) {
    if (centered && scrollable) {
      console.error('Material-UI: You can not use the `centered={true}` and `variant="scrollable"` properties ' + 'at the same time on a `Tabs` component.');
    }
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(false),
      mounted = _React$useState[0],
      setMounted = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_3__.useState({}),
      indicatorStyle = _React$useState2[0],
      setIndicatorStyle = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__.useState({
    start: false,
    end: false
  }),
      displayScroll = _React$useState3[0],
      setDisplayScroll = _React$useState3[1];

  var _React$useState4 = react__WEBPACK_IMPORTED_MODULE_3__.useState({
    overflow: 'hidden',
    marginBottom: null
  }),
      scrollerStyle = _React$useState4[0],
      setScrollerStyle = _React$useState4[1];

  var valueToIndex = new Map();
  var tabsRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);
  var tabListRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);

  var getTabsMeta = function getTabsMeta() {
    var tabsNode = tabsRef.current;
    var tabsMeta;

    if (tabsNode) {
      var rect = tabsNode.getBoundingClientRect(); // create a new object with ClientRect class props + scrollLeft

      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollLeftNormalized: (0,_utils_scrollLeft__WEBPACK_IMPORTED_MODULE_8__.getNormalizedScrollLeft)(tabsNode, theme.direction),
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    }

    var tabMeta;

    if (tabsNode && value !== false) {
      var _children = tabListRef.current.children;

      if (_children.length > 0) {
        var tab = _children[valueToIndex.get(value)];

        if (true) {
          if (!tab) {
            console.error(["Material-UI: The value provided to the Tabs component is invalid.", "None of the Tabs' children match with `".concat(value, "`."), valueToIndex.keys ? "You can provide one of the following values: ".concat(Array.from(valueToIndex.keys()).join(', '), ".") : null].join('\n'));
          }
        }

        tabMeta = tab ? tab.getBoundingClientRect() : null;
      }
    }

    return {
      tabsMeta: tabsMeta,
      tabMeta: tabMeta
    };
  };

  var updateIndicatorState = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
    var _newIndicatorStyle;

    var _getTabsMeta = getTabsMeta(),
        tabsMeta = _getTabsMeta.tabsMeta,
        tabMeta = _getTabsMeta.tabMeta;

    var startValue = 0;

    if (tabMeta && tabsMeta) {
      if (vertical) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      } else {
        var correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
        startValue = tabMeta.left - tabsMeta.left + correction;
      }
    }

    var newIndicatorStyle = (_newIndicatorStyle = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_newIndicatorStyle, start, startValue), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_newIndicatorStyle, size, tabMeta ? tabMeta[size] : 0), _newIndicatorStyle);

    if (isNaN(indicatorStyle[start]) || isNaN(indicatorStyle[size])) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      var dStart = Math.abs(indicatorStyle[start] - newIndicatorStyle[start]);
      var dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);

      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });

  var scroll = function scroll(scrollValue) {
    (0,_internal_animate__WEBPACK_IMPORTED_MODULE_10__["default"])(scrollStart, tabsRef.current, scrollValue);
  };

  var moveTabsScroll = function moveTabsScroll(delta) {
    var scrollValue = tabsRef.current[scrollStart];

    if (vertical) {
      scrollValue += delta;
    } else {
      scrollValue += delta * (isRtl ? -1 : 1); // Fix for Edge

      scrollValue *= isRtl && (0,_utils_scrollLeft__WEBPACK_IMPORTED_MODULE_8__.detectScrollType)() === 'reverse' ? -1 : 1;
    }

    scroll(scrollValue);
  };

  var handleStartScrollClick = function handleStartScrollClick() {
    moveTabsScroll(-tabsRef.current[clientSize]);
  };

  var handleEndScrollClick = function handleEndScrollClick() {
    moveTabsScroll(tabsRef.current[clientSize]);
  };

  var handleScrollbarSizeChange = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function (scrollbarHeight) {
    setScrollerStyle({
      overflow: null,
      marginBottom: -scrollbarHeight
    });
  }, []);

  var getConditionalElements = function getConditionalElements() {
    var conditionalElements = {};
    conditionalElements.scrollbarSizeListener = scrollable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ScrollbarSize__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: classes.scrollable,
      onChange: handleScrollbarSizeChange
    }) : null;
    var scrollButtonsActive = displayScroll.start || displayScroll.end;
    var showScrollButtons = scrollable && (scrollButtons === 'auto' && scrollButtonsActive || scrollButtons === 'desktop' || scrollButtons === 'on');
    conditionalElements.scrollButtonStart = showScrollButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ScrollButtonComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      orientation: orientation,
      direction: isRtl ? 'right' : 'left',
      onClick: handleStartScrollClick,
      disabled: !displayScroll.start,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.scrollButtons, scrollButtons !== 'on' && classes.scrollButtonsDesktop)
    }, TabScrollButtonProps)) : null;
    conditionalElements.scrollButtonEnd = showScrollButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ScrollButtonComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      orientation: orientation,
      direction: isRtl ? 'left' : 'right',
      onClick: handleEndScrollClick,
      disabled: !displayScroll.end,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.scrollButtons, scrollButtons !== 'on' && classes.scrollButtonsDesktop)
    }, TabScrollButtonProps)) : null;
    return conditionalElements;
  };

  var scrollSelectedIntoView = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
    var _getTabsMeta2 = getTabsMeta(),
        tabsMeta = _getTabsMeta2.tabsMeta,
        tabMeta = _getTabsMeta2.tabMeta;

    if (!tabMeta || !tabsMeta) {
      return;
    }

    if (tabMeta[start] < tabsMeta[start]) {
      // left side of button is out of view
      var nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart);
    } else if (tabMeta[end] > tabsMeta[end]) {
      // right side of button is out of view
      var _nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);

      scroll(_nextScrollStart);
    }
  });
  var updateScrollButtonState = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
    if (scrollable && scrollButtons !== 'off') {
      var _tabsRef$current = tabsRef.current,
          scrollTop = _tabsRef$current.scrollTop,
          scrollHeight = _tabsRef$current.scrollHeight,
          clientHeight = _tabsRef$current.clientHeight,
          scrollWidth = _tabsRef$current.scrollWidth,
          clientWidth = _tabsRef$current.clientWidth;
      var showStartScroll;
      var showEndScroll;

      if (vertical) {
        showStartScroll = scrollTop > 1;
        showEndScroll = scrollTop < scrollHeight - clientHeight - 1;
      } else {
        var scrollLeft = (0,_utils_scrollLeft__WEBPACK_IMPORTED_MODULE_8__.getNormalizedScrollLeft)(tabsRef.current, theme.direction); // use 1 for the potential rounding error with browser zooms.

        showStartScroll = isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
        showEndScroll = !isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
      }

      if (showStartScroll !== displayScroll.start || showEndScroll !== displayScroll.end) {
        setDisplayScroll({
          start: showStartScroll,
          end: showEndScroll
        });
      }
    }
  });
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    var handleResize = (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_12__["default"])(function () {
      updateIndicatorState();
      updateScrollButtonState();
    });
    var win = (0,_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_13__["default"])(tabsRef.current);
    win.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      win.removeEventListener('resize', handleResize);
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  var handleTabsScroll = react__WEBPACK_IMPORTED_MODULE_3__.useCallback((0,_utils_debounce__WEBPACK_IMPORTED_MODULE_12__["default"])(function () {
    updateScrollButtonState();
  }));
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    return function () {
      handleTabsScroll.clear();
    };
  }, [handleTabsScroll]);
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    setMounted(true);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    updateIndicatorState();
    updateScrollButtonState();
  });
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    scrollSelectedIntoView();
  }, [scrollSelectedIntoView, indicatorStyle]);
  react__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle(action, function () {
    return {
      updateIndicator: updateIndicatorState,
      updateScrollButtons: updateScrollButtonState
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  var indicator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_TabIndicator__WEBPACK_IMPORTED_MODULE_14__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.indicator,
    orientation: orientation,
    color: indicatorColor
  }, TabIndicatorProps, {
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, indicatorStyle, TabIndicatorProps.style)
  }));
  var childIndex = 0;
  var children = react__WEBPACK_IMPORTED_MODULE_3__.Children.map(childrenProp, function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.isValidElement(child)) {
      return null;
    }

    if (true) {
      if ((0,react_is__WEBPACK_IMPORTED_MODULE_4__.isFragment)(child)) {
        console.error(["Material-UI: The Tabs component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    var childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    var selected = childValue === value;
    childIndex += 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.cloneElement(child, {
      fullWidth: variant === 'fullWidth',
      indicator: selected && !mounted && indicator,
      selected: selected,
      selectionFollowsFocus: selectionFollowsFocus,
      onChange: onChange,
      textColor: textColor,
      value: childValue
    });
  });

  var handleKeyDown = function handleKeyDown(event) {
    var target = event.target; // Keyboard navigation assumes that [role="tab"] are siblings
    // though we might warn in the future about nested, interactive elements
    // as a a11y violation

    var role = target.getAttribute('role');

    if (role !== 'tab') {
      return;
    }

    var newFocusTarget = null;
    var previousItemKey = orientation !== "vertical" ? 'ArrowLeft' : 'ArrowUp';
    var nextItemKey = orientation !== "vertical" ? 'ArrowRight' : 'ArrowDown';

    if (orientation !== "vertical" && theme.direction === 'rtl') {
      // swap previousItemKey with nextItemKey
      previousItemKey = 'ArrowRight';
      nextItemKey = 'ArrowLeft';
    }

    switch (event.key) {
      case previousItemKey:
        newFocusTarget = target.previousElementSibling || tabListRef.current.lastChild;
        break;

      case nextItemKey:
        newFocusTarget = target.nextElementSibling || tabListRef.current.firstChild;
        break;

      case 'Home':
        newFocusTarget = tabListRef.current.firstChild;
        break;

      case 'End':
        newFocusTarget = tabListRef.current.lastChild;
        break;

      default:
        break;
    }

    if (newFocusTarget !== null) {
      newFocusTarget.focus();
      event.preventDefault();
    }
  };

  var conditionalElements = getConditionalElements();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className, vertical && classes.vertical),
    ref: ref
  }, other), conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.scroller, scrollable ? classes.scrollable : classes.fixed),
    style: scrollerStyle,
    ref: tabsRef,
    onScroll: handleTabsScroll
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.flexContainer, vertical && classes.flexContainerVertical, centered && !scrollable && classes.centered),
    onKeyDown: handleKeyDown,
    ref: tabListRef,
    role: "tablist"
  }, children), mounted && indicator), conditionalElements.scrollButtonEnd);
});
 true ? Tabs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It supports two actions: `updateIndicator()` and `updateScrollButtons()`
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: _material_ui_utils__WEBPACK_IMPORTED_MODULE_15__["default"],

  /**
   * The label for the Tabs as a string.
   */
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  'aria-labelledby': (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /**
   * If `true`, the tabs will be centered.
   * This property is intended for large views.
   */
  centered: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().elementType),

  /**
   * Determines the color of the indicator.
   */
  indicatorColor: prop_types__WEBPACK_IMPORTED_MODULE_16___default().oneOf(['primary', 'secondary']),

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {any} value We default to the index of the child (number)
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_16___default().oneOf(['horizontal', 'vertical']),

  /**
   * The component used to render the scroll buttons.
   */
  ScrollButtonComponent: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().elementType),

  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   *
   * - `auto` will only present them when not all the items are visible.
   * - `desktop` will only present them on medium and larger viewports.
   * - `on` will always present them.
   * - `off` will never present them.
   */
  scrollButtons: prop_types__WEBPACK_IMPORTED_MODULE_16___default().oneOf(['auto', 'desktop', 'off', 'on']),

  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),

  /**
   * Props applied to the tab indicator element.
   */
  TabIndicatorProps: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object),

  /**
   * Props applied to the [`TabScrollButton`](/api/tab-scroll-button/) element.
   */
  TabScrollButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object),

  /**
   * Determines the color of the `Tab`.
   */
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_16___default().oneOf(['inherit', 'primary', 'secondary']),

  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this property to `false`.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().any),

  /**
   * Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  -`fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_16___default().oneOf(['fullWidth', 'scrollable', 'standard'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_17__["default"])(styles, {
  name: 'MuiTabs'
})(Tabs));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/animate.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/animate.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ animate)
/* harmony export */ });
function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}

function animate(property, element, to) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var cb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
  var _options$ease = options.ease,
      ease = _options$ease === void 0 ? easeInOutSin : _options$ease,
      _options$duration = options.duration,
      duration = _options$duration === void 0 ? 300 : _options$duration;
  var start = null;
  var from = element[property];
  var cancelled = false;

  var cancel = function cancel() {
    cancelled = true;
  };

  var step = function step(timestamp) {
    if (cancelled) {
      cb(new Error('Animation cancelled'));
      return;
    }

    if (start === null) {
      start = timestamp;
    }

    var time = Math.min(1, (timestamp - start) / duration);
    element[property] = ease(time) * (to - from) + from;

    if (time >= 1) {
      requestAnimationFrame(function () {
        cb(null);
      });
      return;
    }

    requestAnimationFrame(step);
  };

  if (from === to) {
    cb(new Error('Element already at target position'));
    return cancel;
  }

  requestAnimationFrame(step);
  return cancel;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/scrollLeft.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/scrollLeft.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detectScrollType": () => (/* binding */ detectScrollType),
/* harmony export */   "getNormalizedScrollLeft": () => (/* binding */ getNormalizedScrollLeft)
/* harmony export */ });
// Source from https://github.com/alitaheri/normalize-scroll-left
var cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
 *
 * Type             | <- Most Left | Most Right -> | Initial
 * ---------------- | ------------ | ------------- | -------
 * default          | 0            | 100           | 100
 * negative (spec*) | -100         | 0             | 0
 * reverse          | 100          | 0             | 0
 *
 * Edge 85: default
 * Safari 14: negative
 * Chrome 85: negative
 * Firefox 81: negative
 * IE 11: reverse
 *
 * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  var dummy = document.createElement('div');
  var container = document.createElement('div');
  container.style.width = '10px';
  container.style.height = '1px';
  dummy.appendChild(container);
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  var scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  var type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}

/***/ }),

/***/ "./node_modules/@material-ui/icons/ArrowForward.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/icons/ArrowForward.js ***!
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
  d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
}), 'ArrowForward');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Business.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/Business.js ***!
  \*****************************************************/
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
  d: "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"
}), 'Business');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/DateRange.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/DateRange.js ***!
  \******************************************************/
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
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), 'DateRange');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Link.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Link.js ***!
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
  d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
}), 'Link');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/LocalPhone.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/LocalPhone.js ***!
  \*******************************************************/
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
  d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
}), 'LocalPhone');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/LocationOn.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/LocationOn.js ***!
  \*******************************************************/
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
  d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
}), 'LocationOn');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/MailOutline.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/icons/MailOutline.js ***!
  \********************************************************/
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
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"
}), 'MailOutline');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/PeopleAlt.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/PeopleAlt.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "8",
  r: "4",
  fillRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
})), 'PeopleAlt');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/School.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/School.js ***!
  \***************************************************/
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
  d: "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
}), 'School');

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

/***/ "./resources/js/src/redux/actions/ProfileApp.js":
/*!******************************************************!*\
  !*** ./resources/js/src/redux/actions/ProfileApp.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserDetail": () => (/* binding */ getUserDetail)
/* harmony export */ });
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Common */ "./resources/js/src/redux/actions/Common.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jumbo_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@jumbo/constants/ActionTypes */ "./resources/js/src/@jumbo/constants/ActionTypes.js");
//for getting  mail detail



var getUserDetail = function getUserDetail() {
  return function (dispatch) {
    dispatch((0,_Common__WEBPACK_IMPORTED_MODULE_0__.fetchStart)());
    axios__WEBPACK_IMPORTED_MODULE_1___default().get('/profile').then(function (data) {
      if (data.status === 200) {
        dispatch((0,_Common__WEBPACK_IMPORTED_MODULE_0__.fetchSuccess)());
        dispatch({
          type: _jumbo_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__.GET_USER_DETAIL,
          payload: data.data
        });
      } else {
        dispatch((0,_Common__WEBPACK_IMPORTED_MODULE_0__.fetchError)('Something went wrong'));
      }
    })["catch"](function (error) {
      dispatch((0,_Common__WEBPACK_IMPORTED_MODULE_0__.fetchError)('Something went wrong'));
    });
  };
};

/***/ }),

/***/ "./resources/js/src/routes/Apps/Profile/About.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/routes/Apps/Profile/About.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coremat_CmtCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@coremat/CmtCard */ "./resources/js/src/@coremat/CmtCard/index.js");
/* harmony import */ var _coremat_CmtCard_CmtCardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@coremat/CmtCard/CmtCardHeader */ "./resources/js/src/@coremat/CmtCard/CmtCardHeader.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/Tabs.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/Tab.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _coremat_CmtAvatarGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@coremat/CmtAvatarGroup */ "./resources/js/src/@coremat/CmtAvatarGroup/index.js");
/* harmony import */ var _coremat_CmtCard_CmtCardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@coremat/CmtCard/CmtCardContent */ "./resources/js/src/@coremat/CmtCard/CmtCardContent.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _coremat_CmtGridView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@coremat/CmtGridView */ "./resources/js/src/@coremat/CmtGridView/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Business */ "./node_modules/@material-ui/icons/Business.js");
/* harmony import */ var _material_ui_icons_Cake__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Cake */ "./node_modules/@material-ui/icons/Cake.js");
/* harmony import */ var _material_ui_icons_School__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/School */ "./node_modules/@material-ui/icons/School.js");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "./node_modules/@material-ui/icons/LocationOn.js");
/* harmony import */ var _material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/PeopleAlt */ "./node_modules/@material-ui/icons/PeopleAlt.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




















var tabs = [{
  id: 33232,
  title: 'Overview',
  slug: 'overview'
}, {
  id: 45345,
  title: 'Work',
  slug: 'work'
}, {
  id: 76545,
  title: 'Eduction',
  slug: 'education'
}];
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["default"])(function (theme) {
  return {
    cardRoot: {
      '& .Cmt-header-root': {
        paddingTop: 3,
        paddingBottom: 0
      }
    },
    tabsList: {
      position: 'relative',
      minHeight: 60,
      '& .MuiTabs-indicator': {
        backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.alpha)(theme.palette.primary.main, 0.8)
      }
    },
    tabItem: {
      maxWidth: 'none',
      minWidth: 10,
      minHeight: 60,
      padding: '5px 10px',
      textTransform: 'capitalize',
      color: theme.palette.text.primary,
      fontSize: 14,
      fontWeight: theme.typography.fontWeightRegular
    },
    columnRoot: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.5px'
    }
  };
});

var About = function About(_ref) {
  var userDetail = _ref.userDetail;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('overview'),
      _useState2 = _slicedToArray(_useState, 2),
      tabValue = _useState2[0],
      setTabValue = _useState2[1];

  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"])();

  var handleTabChange = function handleTabChange(event, newValue) {
    setTabValue(newValue);
  };

  var company = userDetail.company,
      birthday = userDetail.birthday,
      college = userDetail.college,
      locality = userDetail.locality,
      family = userDetail.family;
  var classes = useStyles();
  var renderData = [{
    title: 'Works at',
    desc: company,
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_10__["default"], {})
  }, {
    title: 'Birthday',
    desc: birthday,
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_icons_Cake__WEBPACK_IMPORTED_MODULE_11__["default"], {})
  }, {
    title: 'Went to',
    desc: college,
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_icons_School__WEBPACK_IMPORTED_MODULE_12__["default"], {})
  }, {
    title: 'lives in',
    desc: locality,
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_13__["default"], {})
  }, {
    title: "".concat(family.length, " Family Members"),
    list: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_14__["default"], {
      mt: 1,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coremat_CmtAvatarGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
        items: family,
        srcKey: "profile_pic",
        avatarSize: 24,
        spacing: 1,
        max: 6,
        titleKey: "name",
        renderItemSummary: function renderItemSummary(item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["default"], {
            color: "inherit",
            style: {
              fontSize: 10
            },
            children: item.name
          });
        }
      })
    }),
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_icons_PeopleAlt__WEBPACK_IMPORTED_MODULE_16__["default"], {})
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coremat_CmtCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.cardRoot,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coremat_CmtCard_CmtCardHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      separator: {
        color: theme.palette.borderColor.dark
      },
      title: "About",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: classes.tabsList,
        value: tabValue,
        onChange: handleTabChange,
        "aria-label": "profile tabs",
        children: tabs.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_18__["default"], {
            className: classes.tabItem,
            value: item.slug,
            label: item.title
          }, index);
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coremat_CmtCard_CmtCardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coremat_CmtGridView__WEBPACK_IMPORTED_MODULE_5__["default"], {
        itemPadding: 24,
        responsive: {
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 3
        },
        data: renderData,
        renderRow: function renderRow(item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_14__["default"], {
            display: "flex",
            alignItems: "center",
            children: [item.icon, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_14__["default"], {
              ml: 6,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_14__["default"], {
                fontSize: 12,
                color: "text.secondary",
                children: item.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_14__["default"], {
                className: classes.columnRoot,
                children: item.desc ? item.desc : item.list
              })]
            })]
          }, index);
        }
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);
About.prototype = {
  userDetail: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().object.isRequired)
};

/***/ }),

/***/ "./resources/js/src/routes/Apps/Profile/Biography.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/routes/Apps/Profile/Biography.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coremat_CmtCard_CmtCardHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@coremat/CmtCard/CmtCardHeader */ "./resources/js/src/@coremat/CmtCard/CmtCardHeader.js");
/* harmony import */ var _coremat_CmtCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@coremat/CmtCard */ "./resources/js/src/@coremat/CmtCard/index.js");
/* harmony import */ var _coremat_CmtCard_CmtCardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@coremat/CmtCard/CmtCardContent */ "./resources/js/src/@coremat/CmtCard/CmtCardContent.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var useStyles = (0,_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
  return {
    bioTitle: {
      marginBottom: 16
    }
  };
});

var Biography = function Biography() {
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coremat_CmtCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coremat_CmtCard_CmtCardHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Biography"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coremat_CmtCard_CmtCardContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
        mb: 3,
        component: "p",
        color: "text.secondary",
        children: "A little flash back of Kiley Brown"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
        component: "div",
        variant: "h2",
        className: classes.bioTitle,
        children: "Donec dignissim gravida sem, ut cursus dolor hendrerit et. Morbi volutpat."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
        component: "p",
        mb: {
          xs: 5,
          md: 6
        },
        children: "Augue mauris dignissim arcu, ut venenatis metus ante eu orci. Donec non maximus neque, ut finibus ex. Quisque semper ornare magna, sed ullamcorper risus luctus quis. Etiam tristique dui vitae diam rutrum sodales. Mauris feugiat lectus felis, nec ullamcorper risus elementum at. Aliquam erat volutpat. Nullam et est eget metus gravida tincidunt. Phasellus sed odio eu lacus venenatis."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
        component: "p",
        children: "Suspendisse vel bibendum ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed a felis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie ultricies urna non volutpat. Nam fermentum cursus elit, et tempus metus scelerisque imperdiet. Sed tincidunt molestie justo, a vulputate velit sagittis at. Pellentesque consequat leo tortor."
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Biography);

/***/ }),

/***/ "./resources/js/src/routes/Apps/Profile/Contact.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/routes/Apps/Profile/Contact.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _coremat_CmtCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@coremat/CmtCard */ "./resources/js/src/@coremat/CmtCard/index.js");
/* harmony import */ var _coremat_CmtCard_CmtCardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@coremat/CmtCard/CmtCardHeader */ "./resources/js/src/@coremat/CmtCard/CmtCardHeader.js");
/* harmony import */ var _coremat_CmtCard_CmtCardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@coremat/CmtCard/CmtCardContent */ "./resources/js/src/@coremat/CmtCard/CmtCardContent.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/MailOutline */ "./node_modules/@material-ui/icons/MailOutline.js");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Link */ "./node_modules/@material-ui/icons/Link.js");
/* harmony import */ var _material_ui_icons_LocalPhone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/LocalPhone */ "./node_modules/@material-ui/icons/LocalPhone.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _jumbo_utils_commonHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@jumbo/utils/commonHelper */ "./resources/js/src/@jumbo/utils/commonHelper.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");















var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["default"])(function (theme) {
  return {
    iconView: {
      backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.alpha)(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_9__["default"][500], 0.1),
      color: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_9__["default"][500],
      padding: 8,
      borderRadius: 4,
      '& .MuiSvgIcon-root': {
        display: 'block'
      },
      '&.web': {
        backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.alpha)(theme.palette.warning.main, 0.1),
        color: theme.palette.warning.main
      },
      '&.phone': {
        backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.alpha)(theme.palette.success.main, 0.15),
        color: theme.palette.success.dark
      }
    },
    wordAddress: {
      wordBreak: 'break-all',
      cursor: 'pointer'
    }
  };
});

var Contact = function Contact(_ref) {
  var userDetail = _ref.userDetail;
  var email = userDetail.email,
      website = userDetail.website,
      phone = userDetail.phone;
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coremat_CmtCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coremat_CmtCard_CmtCardHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Contact"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coremat_CmtCard_CmtCardContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
        display: "flex",
        alignItems: "center",
        mb: {
          xs: 4,
          sm: 6
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: classes.iconView,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_11__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
          ml: 5,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
            component: "span",
            fontSize: 12,
            color: "text.secondary",
            children: "Email"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
            component: "p",
            className: classes.wordAddress,
            fontSize: 16,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
              component: "a",
              href: "mailto:".concat(email),
              children: email
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
        display: "flex",
        alignItems: "center",
        mb: {
          xs: 4,
          sm: 6
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.iconView, 'web'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_12__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
          ml: 5,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
            component: "span",
            fontSize: 12,
            color: "text.secondary",
            children: "Web page"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
            component: "p",
            className: classes.wordAddress,
            fontSize: 16,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
              component: "a",
              href: (0,_jumbo_utils_commonHelper__WEBPACK_IMPORTED_MODULE_5__.geValidUrl)(website),
              children: website
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
        display: "flex",
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.iconView, 'phone'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_icons_LocalPhone__WEBPACK_IMPORTED_MODULE_13__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
          ml: 5,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
            component: "span",
            fontSize: 12,
            color: "text.secondary",
            children: "Phone"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
            component: "p",
            className: classes.wordAddress,
            fontSize: 16,
            color: "text.primary",
            children: phone
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);
Contact.prototype = {
  userDetail: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object.isRequired)
};

/***/ }),

/***/ "./resources/js/src/routes/Apps/Profile/Events.js":
/*!********************************************************!*\
  !*** ./resources/js/src/routes/Apps/Profile/Events.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _coremat_CmtImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@coremat/CmtImage */ "./resources/js/src/@coremat/CmtImage/index.js");
/* harmony import */ var _coremat_CmtMediaObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@coremat/CmtMediaObject */ "./resources/js/src/@coremat/CmtMediaObject/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _coremat_CmtCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@coremat/CmtCard */ "./resources/js/src/@coremat/CmtCard/index.js");
/* harmony import */ var _coremat_CmtCard_CmtCardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@coremat/CmtCard/CmtCardHeader */ "./resources/js/src/@coremat/CmtCard/CmtCardHeader.js");
/* harmony import */ var _coremat_CmtCard_CmtCardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@coremat/CmtCard/CmtCardContent */ "./resources/js/src/@coremat/CmtCard/CmtCardContent.js");
/* harmony import */ var _coremat_CmtList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@coremat/CmtList */ "./resources/js/src/@coremat/CmtList/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "./node_modules/@material-ui/icons/LocationOn.js");
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/DateRange */ "./node_modules/@material-ui/icons/DateRange.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "./node_modules/@material-ui/icons/ArrowForward.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["default"])(function (theme) {
  var _CmtMediaImage;

  return {
    subTitleRoot: {
      fontSize: 14,
      color: theme.palette.text.secondary,
      marginBottom: 0,
      marginTop: 6
    },
    eventItem: {
      padding: 0,
      '&:not(:last-child)': {
        marginBottom: 18,
        paddingBottom: 15,
        borderBottom: "1px solid ".concat(theme.palette.borderColor.main)
      },
      '& .Cmt-media-object': _defineProperty({
        width: '100%',
        flexWrap: 'wrap'
      }, theme.breakpoints.down('xs'), {
        flexDirection: 'column'
      }),
      '& .Cmt-media-image': (_CmtMediaImage = {
        marginBottom: 12,
        width: '100%'
      }, _defineProperty(_CmtMediaImage, theme.breakpoints.up('sm'), {
        marginRight: 16,
        maxWidth: 150,
        marginBottom: 0
      }), _defineProperty(_CmtMediaImage, theme.breakpoints.up('md'), {
        marginRight: 24,
        maxWidth: 200
      }), _defineProperty(_CmtMediaImage, '& img', {
        width: '100%',
        borderRadius: 6,
        marginRight: 0,
        display: 'block',
        objectFit: 'cover'
      }), _CmtMediaImage),
      '& .Cmt-media-footer': {
        '@media screen and (max-width: 700px)': {
          width: '100%',
          marginLeft: 0
        }
      }
    },
    badgeRoot: {
      padding: '5px 12px',
      backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__.alpha)(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,
      borderRadius: 5,
      fontSize: 14,
      display: 'inline-block',
      marginBottom: 16
    },
    linkRoot: {
      color: theme.palette.primary.main,
      textTransform: 'uppercase',
      cursor: 'pointer',
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        display: 'block'
      }
    }
  };
});

var EventItem = function EventItem(_ref) {
  var item = _ref.item;
  var classes = useStyles();

  var getTitle = function getTitle() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
      mb: 4,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
        component: "span",
        className: classes.badgeRoot,
        bgcolor: "#FF8C00",
        children: item.type
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "pointer",
        component: "div",
        variant: "h3",
        mb: 1,
        children: item.title
      })]
    });
  };

  var getSubTitle = function getSubTitle() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
      color: "text.disabled",
      display: "flex",
      alignItems: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_12__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
        ml: 4,
        component: "p",
        children: item.location
      })]
    });
  };

  var getFooter = function getFooter() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
      mt: {
        xs: 2,
        md: 11
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
        color: "error.main",
        display: "flex",
        alignItems: "center",
        fontSize: {
          xs: 13,
          lg: 14
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_13__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
          component: "span",
          ml: 2,
          children: item.date
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: classes.linkRoot,
        display: "flex",
        alignItems: "center",
        mt: {
          xs: 2,
          md: 10
        },
        fontSize: {
          xs: 12,
          lg: 14
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
          children: "Check In Detail"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
          ml: 2,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_14__["default"], {})
        })]
      })]
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coremat_CmtMediaObject__WEBPACK_IMPORTED_MODULE_2__["default"], {
    avatar: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coremat_CmtImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "pointer",
      src: item.thumb,
      alt: item.title
    }),
    avatarPos: "center",
    title: getTitle(),
    subTitle: getSubTitle(),
    footerComponent: getFooter()
  });
};

var Events = function Events(_ref2) {
  var events = _ref2.events;
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coremat_CmtCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coremat_CmtCard_CmtCardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Events",
      subTitle: "What Kiley is up to",
      subTitleProps: {
        className: classes.subTitleRoot
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coremat_CmtCard_CmtCardContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coremat_CmtList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: events,
        renderRow: function renderRow(item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
            className: classes.eventItem,
            component: "div",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(EventItem, {
              item: item
            })
          }, index);
        }
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);
Events.prototype = {
  events: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().array.isRequired)
};

/***/ }),

/***/ "./resources/js/src/routes/Apps/Profile/Friends.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/routes/Apps/Profile/Friends.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coremat_CmtCard_CmtCardHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@coremat/CmtCard/CmtCardHeader */ "./resources/js/src/@coremat/CmtCard/CmtCardHeader.js");
/* harmony import */ var _coremat_CmtCard_CmtCardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@coremat/CmtCard/CmtCardContent */ "./resources/js/src/@coremat/CmtCard/CmtCardContent.js");
/* harmony import */ var _coremat_CmtCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@coremat/CmtCard */ "./resources/js/src/@coremat/CmtCard/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _coremat_CmtGridView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@coremat/CmtGridView */ "./resources/js/src/@coremat/CmtGridView/index.js");
/* harmony import */ var _coremat_CmtImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@coremat/CmtImage */ "./resources/js/src/@coremat/CmtImage/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var statusColors = {
  online: '#8DCD03',
  away: '#FF8C00',
  offline: '#D9D9D9'
};
var useStyles = (0,_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(function (theme) {
  return {
    textUppercase: {
      textTransform: 'uppercase'
    },
    thumbRoot: {
      position: 'relative',
      borderRadius: 4,
      overflow: 'hidden',
      cursor: 'pointer',
      '& img': {
        width: '100%',
        height: '100%',
        display: 'block'
      }
    },
    thumbContent: {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(180deg,rgba(0,0,0,.01) 0,rgba(0,0,0,.65))',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 8
    },
    dotRoot: {
      position: 'absolute',
      right: 10,
      top: 10,
      zIndex: 1,
      width: 14,
      height: 14,
      border: "solid 2px ".concat(theme.palette.common.white),
      borderRadius: '50%'
    },
    thumbTitle: {
      fontSize: 12,
      letterSpacing: 0.4,
      color: theme.palette.common.white,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  };
});

var Friends = function Friends(_ref) {
  var friends = _ref.friends;
  var total = friends.total,
      frndProfiles = friends.frndProfiles,
      mutual = friends.mutual;
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coremat_CmtCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coremat_CmtCard_CmtCardHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Friends",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: classes.textUppercase,
        fontSize: 10,
        color: "text.secondary",
        children: "".concat(total, " ( ").concat(mutual, " Mutual)")
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coremat_CmtCard_CmtCardContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coremat_CmtGridView__WEBPACK_IMPORTED_MODULE_4__["default"], {
        itemPadding: 24,
        responsive: {
          xs: 2,
          sm: 3,
          md: 3,
          lg: 3,
          xl: 3
        },
        data: frndProfiles,
        renderRow: function renderRow(item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: classes.thumbRoot,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coremat_CmtImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
              src: item.profile_pic,
              alt: item.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
              className: classes.thumbContent,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
                className: classes.dotRoot,
                bgcolor: statusColors[item.status]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
                className: classes.thumbTitle,
                children: item.name
              })]
            })]
          }, index);
        }
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Friends);
Friends.prototype = {
  friends: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object.isRequired)
};

/***/ }),

/***/ "./resources/js/src/routes/Apps/Profile/Header.js":
/*!********************************************************!*\
  !*** ./resources/js/src/routes/Apps/Profile/Header.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@coremat/CmtAvatar */ "./resources/js/src/@coremat/CmtAvatar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/Tabs.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/Tab.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _coremat_CmtImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@coremat/CmtImage */ "./resources/js/src/@coremat/CmtImage/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var tabs = [{
  id: 1,
  title: 'Timeline',
  slug: 'timeline'
}, {
  id: 2,
  title: 'About',
  slug: 'about'
}, {
  id: 3,
  title: 'Photos',
  slug: 'photos'
}, {
  id: 4,
  title: 'Friends',
  slug: 'friends'
}, {
  id: 5,
  title: 'More',
  slug: 'more'
}];
var useStyles = (0,_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(function (theme) {
  var _headerRoot, _headerBgImg, _followerListItem;

  return {
    headerRoot: (_headerRoot = {
      position: 'relative',
      margin: '-30px -15px 0 -15px',
      paddingRight: 15,
      paddingLeft: 15,
      paddingTop: 30,
      paddingBottom: 20
    }, _defineProperty(_headerRoot, theme.breakpoints.up('sm'), {
      paddingTop: 56
    }), _defineProperty(_headerRoot, theme.breakpoints.up('md'), {
      marginLeft: -50,
      marginRight: -50,
      paddingLeft: 50,
      paddingRight: 50
    }), _defineProperty(_headerRoot, theme.breakpoints.up('lg'), {
      marginLeft: -65,
      marginRight: -65,
      paddingLeft: 65,
      paddingRight: 65
    }), _defineProperty(_headerRoot, theme.breakpoints.up('xl'), {
      marginLeft: -88,
      marginRight: -88,
      paddingLeft: 88,
      paddingRight: 88
    }), _headerRoot),
    headerBgImg: (_headerBgImg = {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      minHeight: 370,
      zIndex: 0
    }, _defineProperty(_headerBgImg, theme.breakpoints.up('sm'), {
      minHeight: 270
    }), _defineProperty(_headerBgImg, '&:before', {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.primary.main, 0.5)
    }), _defineProperty(_headerBgImg, '& img', {
      width: '100%',
      height: '100%'
    }), _headerBgImg),
    headerContent: {
      position: 'relative',
      zIndex: 3
    },
    titleRoot: {
      color: theme.palette.common.white,
      marginBottom: 4
    },
    subTitleRoot: {
      color: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.common.white, 0.74)
    },
    followerList: _defineProperty({
      display: 'flex',
      alignItems: 'center',
      marginLeft: -15,
      marginRight: -15
    }, theme.breakpoints.up('md'), {
      marginLeft: -24,
      marginRight: -24
    }),
    followerListItem: (_followerListItem = {
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: 'center',
      cursor: 'pointer',
      color: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.common.white, 0.74),
      fontSize: 12
    }, _defineProperty(_followerListItem, theme.breakpoints.up('md'), {
      paddingLeft: 24,
      paddingRight: 24
    }), _defineProperty(_followerListItem, '&:not(:first-child)', {
      borderLeft: "solid 1px ".concat((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.common.white, 0.38))
    }), _followerListItem),
    followerListTitle: {
      color: theme.palette.common.white,
      marginBottom: 3
    },
    tabsList: {
      position: 'relative',
      minHeight: 10,
      '& .MuiTabs-indicator': {
        backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.common.white, 0.4)
      }
    },
    tabItem: {
      maxWidth: 'none',
      minWidth: 10,
      minHeight: 10,
      padding: '5px 10px',
      textTransform: 'capitalize',
      color: theme.palette.common.white,
      fontSize: 14,
      fontWeight: theme.typography.fontWeightRegular
    }
  };
});

var Header = function Header(_ref) {
  var userDetail = _ref.userDetail,
      tabValue = _ref.tabValue,
      handleTabChange = _ref.handleTabChange;
  var name = userDetail.name,
      profile_pic = userDetail.profile_pic,
      location = userDetail.location,
      followers = userDetail.followers,
      following = userDetail.following,
      friends = userDetail.friends;
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.headerRoot,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.headerBgImg,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coremat_CmtImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
        src: '/images/profile-bg-img.png'
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.headerContent,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
        display: "flex",
        flexDirection: {
          xs: 'column',
          sm: 'row'
        },
        alignItems: "center",
        mb: 4,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
          display: "flex",
          flexDirection: {
            xs: 'column',
            sm: 'row'
          },
          alignItems: "center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
            mr: {
              sm: 4,
              md: 5,
              lg: 6
            },
            mb: {
              xs: 3,
              sm: 0
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coremat_CmtAvatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
              size: 80,
              src: profile_pic,
              alt: name
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: classes.titleRoot,
              component: "div",
              variant: "h1",
              children: name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: classes.subTitleRoot,
              children: location
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
          ml: {
            sm: 'auto'
          },
          mt: {
            xs: 3,
            sm: 0
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: classes.followerList,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
              className: classes.followerListItem,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                className: classes.followerListTitle,
                component: "div",
                variant: "h3",
                children: [followers > 2000 ? '2k+' : followers, ' ']
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
                component: "p",
                children: "Followers"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
              className: classes.followerListItem,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                className: classes.followerListTitle,
                component: "div",
                variant: "h3",
                children: [following, ' ']
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
                component: "p",
                children: "Following"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
              className: classes.followerListItem,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                className: classes.followerListTitle,
                component: "div",
                variant: "h3",
                children: [friends.total, ' ']
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
                component: "p",
                children: "Friends"
              })]
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
        display: "flex",
        justifyContent: {
          xs: 'center',
          sm: 'flex-end'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: classes.tabsList,
          value: tabValue,
          onChange: handleTabChange,
          "aria-label": "profile tabs",
          children: tabs.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__["default"], {
              className: classes.tabItem,
              value: item.slug,
              label: item.title,
              style: {
                color: 'white'
              }
            }, index);
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);
Header.prototype = {
  userDetail: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object.isRequired),
  tabValue: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string.isRequired),
  handleTabChange: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)
};

/***/ }),

/***/ "./resources/js/src/routes/Apps/Profile/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/routes/Apps/Profile/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./resources/js/src/routes/Apps/Profile/Header.js");
/* harmony import */ var _jumbo_components_GridContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@jumbo/components/GridContainer */ "./resources/js/src/@jumbo/components/GridContainer/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact */ "./resources/js/src/routes/Apps/Profile/Contact.js");
/* harmony import */ var _Friends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Friends */ "./resources/js/src/routes/Apps/Profile/Friends.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./About */ "./resources/js/src/routes/Apps/Profile/About.js");
/* harmony import */ var _Biography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Biography */ "./resources/js/src/routes/Apps/Profile/Biography.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Events */ "./resources/js/src/routes/Apps/Profile/Events.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_ProfileApp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../redux/actions/ProfileApp */ "./resources/js/src/redux/actions/ProfileApp.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _Dashboards_Intranet_UserPhotos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Dashboards/Intranet/UserPhotos */ "./resources/js/src/routes/Dashboards/Intranet/UserPhotos/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var useStyles = (0,_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_12__["default"])(function () {
  return {
    pageFull: {
      width: '100%'
    },
    profileSidebar: {
      '@media screen and (min-width: 1280px) and (max-width: 1499px)': {
        flexBasis: '100%',
        maxWidth: '100%'
      }
    },
    profileMainContent: {
      '@media screen and (min-width: 1280px) and (max-width: 1499px)': {
        flexBasis: '100%',
        maxWidth: '100%'
      }
    }
  };
});

var Profile = function Profile() {
  var classes = useStyles();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('about'),
      _useState2 = _slicedToArray(_useState, 2),
      tabValue = _useState2[0],
      setTabValue = _useState2[1];

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (_ref) {
    var profileApp = _ref.profileApp;
    return profileApp;
  }),
      userDetail = _useSelector.userDetail;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_redux_actions_ProfileApp__WEBPACK_IMPORTED_MODULE_9__.getUserDetail)());
  }, [dispatch]);

  var handleTabChange = function handleTabChange(event, newValue) {
    setTabValue(newValue);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: userDetail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: classes.pageFull,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        classes: classes,
        userDetail: userDetail,
        tabValue: tabValue,
        handleTabChange: handleTabChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_jumbo_components_GridContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
          item: true,
          xs: 12,
          lg: 4,
          className: classes.profileSidebar,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
            mb: 6,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Contact__WEBPACK_IMPORTED_MODULE_3__["default"], {
              userDetail: userDetail
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
            mb: 6,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Friends__WEBPACK_IMPORTED_MODULE_4__["default"], {
              friends: userDetail.friends
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
            mb: 6,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Dashboards_Intranet_UserPhotos__WEBPACK_IMPORTED_MODULE_10__["default"], {})
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
          item: true,
          xs: 12,
          lg: 8,
          className: classes.profileMainContent,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
            mb: 6,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_About__WEBPACK_IMPORTED_MODULE_5__["default"], {
              userDetail: userDetail
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
            mb: 6,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Biography__WEBPACK_IMPORTED_MODULE_6__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Events__WEBPACK_IMPORTED_MODULE_7__["default"], {
            events: userDetail.events
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "./resources/js/src/routes/Dashboards/Intranet/UserPhotos/PictureItem.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/routes/Dashboards/Intranet/UserPhotos/PictureItem.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _coremat_CmtImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@coremat/CmtImage */ "./resources/js/src/@coremat/CmtImage/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return {
    root: {
      position: 'relative',
      borderRadius: 6,
      overflow: 'hidden',
      cursor: 'pointer',
      '&:hover': {
        '& $titleBar': {
          bottom: 0
        }
      }
    },
    titleBar: {
      position: 'absolute',
      color: theme.palette.common.white,
      backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.common.black, 0.8),
      bottom: '-100px',
      left: 0,
      right: 0,
      zIndex: 1,
      padding: '10px 16px',
      transition: 'all 0.3s ease'
    },
    titleRoot: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '100%'
    },
    subTitleRoot: {
      fontSize: 12,
      color: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.common.white, 0.38)
    }
  };
});
var boxRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();

var PictureItem = function PictureItem(_ref) {
  var item = _ref.item;
  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      boxHeight = _useState2[0],
      setBoxHeight = _useState2[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    height: 0,
    width: 0
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      dimensions = _React$useState2[0],
      setDimensions = _React$useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (boxRef.current) {
      setBoxHeight(boxRef.current.clientWidth);
    }
  }, [item, dimensions]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    function windowResized() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    window.addEventListener('resize', windowResized);
    windowResized();
    return function () {
      return window.removeEventListener('resize', windowResized);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classes.root,
    ref: boxRef,
    style: {
      height: boxHeight
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coremat_CmtImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      src: item.photo_url,
      alt: item.caption,
      style: {
        height: '100%',
        width: '100%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: classes.titleBar,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        component: "div",
        variant: "body1",
        className: classes.titleRoot,
        children: item.caption
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.subTitleRoot,
        children: [item.size, " Mb"]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PictureItem);

/***/ }),

/***/ "./resources/js/src/routes/Dashboards/Intranet/UserPhotos/index.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/routes/Dashboards/Intranet/UserPhotos/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coremat_CmtCard_CmtCardHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@coremat/CmtCard/CmtCardHeader */ "./resources/js/src/@coremat/CmtCard/CmtCardHeader.js");
/* harmony import */ var _coremat_CmtSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@coremat/CmtSearch */ "./resources/js/src/@coremat/CmtSearch/index.js");
/* harmony import */ var _coremat_CmtCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@coremat/CmtCard */ "./resources/js/src/@coremat/CmtCard/index.js");
/* harmony import */ var _fake_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@fake-db */ "./resources/js/src/@fake-db/index.js");
/* harmony import */ var _coremat_CmtCard_CmtCardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@coremat/CmtCard/CmtCardContent */ "./resources/js/src/@coremat/CmtCard/CmtCardContent.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _coremat_CmtGridView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@coremat/CmtGridView */ "./resources/js/src/@coremat/CmtGridView/index.js");
/* harmony import */ var _PictureItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PictureItem */ "./resources/js/src/routes/Dashboards/Intranet/UserPhotos/PictureItem.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var useStyles = (0,_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_10__["default"])(function (theme) {
  return {
    scrollBar: {
      height: 300
    }
  };
});

var UserPhotos = function UserPhotos() {
  var userPhotos = _fake_db__WEBPACK_IMPORTED_MODULE_4__.intranet.userPhotos;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      searchText = _useState2[0],
      setSearchText = _useState2[1];

  var onSearchText = function onSearchText(e) {
    setSearchText(e.target.value);
  };

  var getPhotos = function getPhotos() {
    if (searchText) {
      return userPhotos.filter(function (item) {
        return item.caption.toLowerCase().includes(searchText.toLowerCase());
      });
    } else return userPhotos;
  };

  var photos = getPhotos();
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_coremat_CmtCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coremat_CmtCard_CmtCardHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Pictures",
      className: "pt-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coremat_CmtSearch__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onlyIcon: true,
        value: searchText,
        onChange: onSearchText,
        border: false
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coremat_CmtCard_CmtCardContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default()), {
        className: classes.scrollBar,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coremat_CmtGridView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          data: photos,
          itemPadding: 24,
          responsive: {
            xs: 1,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3
          },
          renderRow: function renderRow(item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PictureItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
              item: item
            }, index);
          }
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserPhotos);

/***/ })

}]);