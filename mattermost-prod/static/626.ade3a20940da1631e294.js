"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[626],{

/***/ 56626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ terms_of_service)
});

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 1 modules
var redux = __webpack_require__(97779);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/users.ts
var users = __webpack_require__(33383);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/general.ts
var general = __webpack_require__(22742);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/preferences.ts
var preferences = __webpack_require__(89754);
// EXTERNAL MODULE: ./selectors/emojis.ts
var emojis = __webpack_require__(37792);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(88674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(41637);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(64765);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/ButtonGroup.js
var ButtonGroup = __webpack_require__(66456);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/Button.js
var Button = __webpack_require__(78318);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/utils/helpers.ts
var helpers = __webpack_require__(16794);
// EXTERNAL MODULE: ./actions/global_actions.tsx + 1 modules
var global_actions = __webpack_require__(34288);
// EXTERNAL MODULE: ./components/announcement_bar/index.ts + 23 modules
var announcement_bar = __webpack_require__(13301);
// EXTERNAL MODULE: ./components/loading_screen.tsx
var loading_screen = __webpack_require__(19476);
// EXTERNAL MODULE: ./components/widgets/loading/loading_spinner.tsx
var loading_spinner = __webpack_require__(56640);
// EXTERNAL MODULE: ./components/widgets/icons/fa_logout_icon.tsx
var fa_logout_icon = __webpack_require__(73406);
// EXTERNAL MODULE: ./components/widgets/icons/fa_warning_icon.tsx
var fa_warning_icon = __webpack_require__(37668);
// EXTERNAL MODULE: ./utils/browser_history.jsx
var browser_history = __webpack_require__(89262);
// EXTERNAL MODULE: ./utils/message_html_to_component.jsx + 14 modules
var message_html_to_component = __webpack_require__(64522);
// EXTERNAL MODULE: ./utils/text_formatting.tsx
var text_formatting = __webpack_require__(54140);
// EXTERNAL MODULE: ./utils/constants.tsx + 19 modules
var constants = __webpack_require__(66788);
;// CONCATENATED MODULE: ./components/terms_of_service/terms_of_service.tsx








function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.














class TermsOfService extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "formattedText", void 0);

    _defineProperty(this, "getTermsOfService", async () => {
      this.setState({
        customTermsOfServiceId: '',
        customTermsOfServiceText: '',
        loading: true
      });
      const {
        data
      } = await this.props.actions.getTermsOfService();

      if (data) {
        this.setState({
          customTermsOfServiceId: data.id,
          customTermsOfServiceText: data.text,
          loading: false
        });
      } else {
        global_actions/* emitUserLoggedOutEvent */.gc("/login?extra=".concat(constants/* Constants.GET_TERMS_ERROR */.gT.GET_TERMS_ERROR));
      }
    });

    _defineProperty(this, "handleLogoutClick", e => {
      e.preventDefault();
      global_actions/* emitUserLoggedOutEvent */.gc('/login');
    });

    _defineProperty(this, "handleAcceptTerms", () => {
      this.setState({
        loadingAgree: true,
        serverError: null
      });
      this.registerUserAction(true, () => {
        const query = new URLSearchParams(this.props.location.search);
        const redirectTo = query.get('redirect_to');

        if (redirectTo && redirectTo.match(/^\/([^/]|$)/)) {
          browser_history/* browserHistory.push */.m.push(redirectTo);
        } else if (this.props.useCaseOnboarding) {
          // need info about whether admin or not,
          // and whether admin has already completed
          // first time onboarding. Instead of fetching and orchestrating that here,
          // let the default root component handle it.
          browser_history/* browserHistory.push */.m.push('/');
        } else {
          global_actions/* redirectUserToDefaultTeam */.mc();
        }
      });
    });

    _defineProperty(this, "handleRejectTerms", () => {
      this.setState({
        loadingDisagree: true,
        serverError: null
      });
      this.registerUserAction(false, () => {
        global_actions/* emitUserLoggedOutEvent */.gc("/login?extra=".concat(constants/* Constants.TERMS_REJECTED */.gT.TERMS_REJECTED));
      });
    });

    _defineProperty(this, "registerUserAction", async (accepted, success) => {
      const {
        data
      } = await this.props.actions.updateMyTermsOfServiceStatus(this.state.customTermsOfServiceId, accepted);

      if (data) {
        success(data);
      } else {
        this.setState({
          loadingAgree: false,
          loadingDisagree: false,
          serverError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "terms_of_service.api_error",
            defaultMessage: "Unable to complete the request. If this issue persists, contact your System Administrator."
          })
        });
      }
    });

    this.state = {
      customTermsOfServiceId: '',
      customTermsOfServiceText: '',
      loading: true,
      loadingAgree: false,
      loadingDisagree: false,
      serverError: null
    };
    this.formattedText = (0,helpers/* memoizeResult */.GA)(text => (0,text_formatting/* formatText */.RZ)(text, {}, props.emojiMap));
  }

  componentDidMount() {
    if (this.props.termsEnabled) {
      this.getTermsOfService();
    } else {
      global_actions/* redirectUserToDefaultTeam */.mc();
    }
  }

  render() {
    if (this.state.loading) {
      return /*#__PURE__*/react.createElement(loading_screen/* default */.Z, null);
    }

    let termsMarkdownClasses = 'terms-of-service__markdown';

    if (this.state.serverError) {
      termsMarkdownClasses += ' terms-of-service-error__height--fill';
    } else {
      termsMarkdownClasses += ' terms-of-service__height--fill';
    }

    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(announcement_bar/* default */.Z, null), /*#__PURE__*/react.createElement("div", {
      className: "signup-header"
    }, /*#__PURE__*/react.createElement("a", {
      href: "#",
      onClick: this.handleLogoutClick
    }, /*#__PURE__*/react.createElement(fa_logout_icon/* default */.Z, null), /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "web.header.logout",
      defaultMessage: "Logout"
    }))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
      className: "signup-team__container terms-of-service__container"
    }, /*#__PURE__*/react.createElement("div", {
      className: termsMarkdownClasses
    }, /*#__PURE__*/react.createElement("div", {
      className: "medium-center",
      "data-testid": "termsOfService"
    }, (0,message_html_to_component/* default */.Z)(this.formattedText(this.state.customTermsOfServiceText), false, {
      mentions: false
    }))), /*#__PURE__*/react.createElement("div", {
      className: "terms-of-service__footer medium-center"
    }, /*#__PURE__*/react.createElement(ButtonGroup/* default */.Z, {
      className: "terms-of-service__button-group"
    }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
      bsStyle: 'primary',
      disabled: this.state.loadingAgree || this.state.loadingDisagree,
      id: "acceptTerms",
      onClick: this.handleAcceptTerms,
      type: "submit"
    }, this.state.loadingAgree && /*#__PURE__*/react.createElement(loading_spinner/* default */.Z, null), /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "terms_of_service.agreeButton",
      defaultMessage: 'I Agree'
    })), /*#__PURE__*/react.createElement(Button/* default */.Z, {
      bsStyle: 'link',
      disabled: this.state.loadingAgree || this.state.loadingDisagree,
      id: "rejectTerms",
      onClick: this.handleRejectTerms,
      type: "reset"
    }, this.state.loadingDisagree && /*#__PURE__*/react.createElement(loading_spinner/* default */.Z, null), /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "terms_of_service.disagreeButton",
      defaultMessage: 'I Disagree'
    }))), Boolean(this.state.serverError) && /*#__PURE__*/react.createElement("div", {
      className: "terms-of-service__server-error alert alert-warning"
    }, /*#__PURE__*/react.createElement(fa_warning_icon/* default */.Z, null), ' ', this.state.serverError)))));
  }

}

_defineProperty(TermsOfService, "propTypes", {
  location: prop_types_default().shape({
    search: (prop_types_default()).string.isRequired
  }).isRequired,
  termsEnabled: (prop_types_default()).bool.isRequired,
  actions: prop_types_default().shape({
    getTermsOfService: (prop_types_default()).func.isRequired,
    updateMyTermsOfServiceStatus: (prop_types_default()).func.isRequired
  }).isRequired,
  useCaseOnboarding: (prop_types_default()).bool.isRequired
});
;// CONCATENATED MODULE: ./components/terms_of_service/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








function mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const useCaseOnboarding = (0,preferences/* getUseCaseOnboarding */.NC)(state);
  return {
    useCaseOnboarding,
    termsEnabled: config.EnableCustomTermsOfService === 'true',
    emojiMap: (0,emojis/* getEmojiMap */.kM)(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      getTermsOfService: users/* getTermsOfService */.Oi,
      updateMyTermsOfServiceStatus: users/* updateMyTermsOfServiceStatus */.oR
    }, dispatch)
  };
}

/* harmony default export */ const terms_of_service = ((0,es.connect)(mapStateToProps, mapDispatchToProps)(TermsOfService));

/***/ }),

/***/ 73406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LogoutIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86896);
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


function LogoutIcon() {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-1x fa-angle-left",
    title: formatMessage({
      id: 'generic_icons.logout',
      defaultMessage: 'Logout Icon'
    })
  });
}

/***/ }),

/***/ 37668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WarningIcon)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var components_localized_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68492);
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87993);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class WarningIcon extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const className = 'fa fa-warning' + (this.props.additionalClassName ? ' ' + this.props.additionalClassName : '');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_localized_icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      className: className,
      title: {
        id: (0,utils_i18n__WEBPACK_IMPORTED_MODULE_2__.t)('generic_icons.warning'),
        defaultMessage: 'Warning Icon'
      }
    });
  }

}

_defineProperty(WarningIcon, "propTypes", {
  additionalClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf([null])])
});

_defineProperty(WarningIcon, "defaultProps", {
  additionalClassName: null
});

/***/ })

}]);
//# sourceMappingURL=626.ade3a20940da1631e294.js.map