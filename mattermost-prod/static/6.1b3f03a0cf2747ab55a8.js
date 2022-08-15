"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[6],{

/***/ 76006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ header_footer_template)
});

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/general.ts
var general = __webpack_require__(22742);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
;// CONCATENATED MODULE: ./components/header_footer_template/header_footer_template.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class NotLoggedIn extends react.PureComponent {
  componentDidMount() {
    document.body.classList.add('sticky');
    const rootElement = document.getElementById('root');

    if (rootElement) {
      rootElement.classList.add('container-fluid');
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('sticky');
    const rootElement = document.getElementById('root');

    if (rootElement) {
      rootElement.classList.remove('container-fluid');
    }
  }

  render() {
    const content = [];

    if (!this.props.config) {
      return null;
    }

    if (this.props.config.AboutLink) {
      content.push( /*#__PURE__*/react.createElement("a", {
        key: "about_link",
        id: "about_link",
        className: "footer-link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: this.props.config.AboutLink
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "web.footer.about"
      })));
    }

    if (this.props.config.PrivacyPolicyLink) {
      content.push( /*#__PURE__*/react.createElement("a", {
        key: "privacy_link",
        id: "privacy_link",
        className: "footer-link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: this.props.config.PrivacyPolicyLink
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "web.footer.privacy"
      })));
    }

    if (this.props.config.TermsOfServiceLink) {
      content.push( /*#__PURE__*/react.createElement("a", {
        key: "terms_link",
        id: "terms_link",
        className: "footer-link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: this.props.config.TermsOfServiceLink
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "web.footer.terms"
      })));
    }

    if (this.props.config.HelpLink) {
      content.push( /*#__PURE__*/react.createElement("a", {
        key: "help_link",
        id: "help_link",
        className: "footer-link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: this.props.config.HelpLink
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "web.footer.help"
      })));
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "inner-wrap"
    }, /*#__PURE__*/react.createElement("div", {
      className: "row content"
    }, this.props.children), /*#__PURE__*/react.createElement("div", {
      className: "row footer"
    }, /*#__PURE__*/react.createElement("div", {
      id: "footer_section",
      className: "footer-pane col-xs-12"
    }, /*#__PURE__*/react.createElement("div", {
      className: "col-xs-12"
    }, /*#__PURE__*/react.createElement("span", {
      id: "company_name",
      className: "pull-right footer-site-name"
    }, 'Mattermost')), /*#__PURE__*/react.createElement("div", {
      className: "col-xs-12"
    }, /*#__PURE__*/react.createElement("span", {
      id: "copyright",
      className: "pull-right footer-link copyright"
    }, "\xA9 2015-".concat(new Date().getFullYear(), " Mattermost, Inc.")), /*#__PURE__*/react.createElement("span", {
      className: "pull-right"
    }, content)))));
  }

}

_defineProperty(NotLoggedIn, "propTypes", {
  /*
   * Content of the page
   */
  children: (prop_types_default()).object,

  /*
   * Mattermost configuration
   */
  config: (prop_types_default()).object
});
;// CONCATENATED MODULE: ./components/header_footer_template/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function mapStateToProps(state) {
  return {
    config: (0,general/* getConfig */.iE)(state)
  };
}

/* harmony default export */ const header_footer_template = ((0,es.connect)(mapStateToProps)(NotLoggedIn));

/***/ })

}]);
//# sourceMappingURL=6.1b3f03a0cf2747ab55a8.js.map