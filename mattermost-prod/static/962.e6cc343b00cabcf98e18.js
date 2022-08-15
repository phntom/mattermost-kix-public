"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[962],{

/***/ 2962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86896);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14494);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22742);
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const Footer = () => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  const {
    AboutLink,
    PrivacyPolicyLink,
    TermsOfServiceLink,
    HelpLink
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__/* .getConfig */ .iE);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hfroute-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    key: "footer-copyright",
    className: "footer-copyright"
  }, "\xA9 ".concat(new Date().getFullYear(), " Mattermost Inc.")), AboutLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    key: "footer-link-about",
    className: "footer-link",
    href: AboutLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, formatMessage({
    id: 'web.footer.about',
    defaultMessage: 'About'
  })), PrivacyPolicyLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    key: "footer-link-privacy",
    className: "footer-link",
    href: PrivacyPolicyLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, formatMessage({
    id: 'web.footer.privacy',
    defaultMessage: 'Privacy Policy'
  })), TermsOfServiceLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    key: "footer-link-terms",
    className: "footer-link",
    href: TermsOfServiceLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, formatMessage({
    id: 'web.footer.terms',
    defaultMessage: 'Terms'
  })), HelpLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    key: "footer-link-help",
    className: "footer-link",
    href: HelpLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, formatMessage({
    id: 'web.footer.help',
    defaultMessage: 'Help'
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ })

}]);
//# sourceMappingURL=962.e6cc343b00cabcf98e18.js.map