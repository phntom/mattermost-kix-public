"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[821],{

/***/ 76821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsSidebar)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var utils_user_agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47470);



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


class SettingsSidebar extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "handleClick", (tab, e) => {
      var _closest;

      e.preventDefault();
      this.props.updateTab(tab.name);
      (_closest = e.target.closest('.settings-modal')) === null || _closest === void 0 ? void 0 : _closest.classList.add('display--content');
    });
  }

  componentDidMount() {
    if (utils_user_agent__WEBPACK_IMPORTED_MODULE_2__/* .isFirefox */ .vU()) {
      var _document$querySelect;

      (_document$querySelect = document.querySelector('.settings-modal .settings-table .nav')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.classList.add('position--top');
    }
  }

  render() {
    const tabList = this.props.tabs.map(tab => {
      const key = "".concat(tab.name, "_li");
      let className = '';

      if (this.props.activeTab === tab.name) {
        className = 'active';
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
        id: "".concat(tab.name, "Li"),
        key: key,
        className: className
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
        id: "".concat(tab.name, "Button"),
        className: "cursor--pointer style--none",
        onClick: this.handleClick.bind(null, tab),
        "aria-label": tab.uiName.toLowerCase()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", {
        className: tab.icon,
        title: tab.iconTitle
      }), tab.uiName));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
      id: "tabList",
      className: "nav nav-pills nav-stacked"
    }, tabList));
  }

}

_defineProperty(SettingsSidebar, "propTypes", {
  activeTab: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  tabs: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
    iconTitle: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
    uiName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)
  })).isRequired,
  updateTab: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired)
});

/***/ })

}]);
//# sourceMappingURL=821.6d1a050f891598d23dfe.js.map