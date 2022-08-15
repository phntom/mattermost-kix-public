"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[182],{

/***/ 96512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44012);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73727);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const BackButton = _ref => {
  let {
    url,
    className,
    onClick
  } = _ref;
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "back_button",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('signup-header', className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    onClick: onClick,
    to: url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    id: "back_button_icon",
    className: "fa fa-1x fa-angle-left",
    title: formatMessage({
      id: 'generic_icons.back',
      defaultMessage: 'Back Icon'
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    id: "web.header.back",
    defaultMessage: "Back"
  })));
};

BackButton.propTypes = {
  url: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)
};
BackButton.defaultProps = {
  url: '/'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackButton);

/***/ }),

/***/ 98182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64765);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73727);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14494);
/* harmony import */ var components_common_back_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96512);
/* harmony import */ var components_common_svg_images_components_logo_dark_blue_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35961);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22742);



// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








const Header = _ref => {
  let {
    alternateMessage,
    alternateLinkPath,
    alternateLinkLabel,
    backButtonURL,
    onBackButtonClick
  } = _ref;
  const {
    EnableCustomBrand,
    SiteName
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__/* .getConfig */ .iE);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "hfroute-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "header-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
    className: "header-logo-link",
    to: "/"
  }, EnableCustomBrand === 'true' || SiteName !== 'Mattermost' ? SiteName : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(components_common_svg_images_components_logo_dark_blue_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "header-alternate-container"
  }, alternateMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "header-alternate-message"
  }, alternateMessage), alternateLinkPath && alternateLinkLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
    className: "header-alternate-link",
    to: {
      pathname: alternateLinkPath,
      search: location.search
    }
  }, alternateLinkLabel))), onBackButtonClick && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(components_common_back_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    className: "header-back-button",
    url: backButtonURL,
    onClick: onBackButtonClick
  }));
};

Header.propTypes = {
  alternateMessage: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  alternateLinkPath: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  alternateLinkLabel: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  backButtonURL: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  onBackButtonClick: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ })

}]);
//# sourceMappingURL=182.c5d20e68abaaf3d27d03.js.map