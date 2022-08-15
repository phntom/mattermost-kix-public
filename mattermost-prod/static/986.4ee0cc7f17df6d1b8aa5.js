(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[986],{

/***/ 3058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ error_page)
});

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/general.ts
var general = __webpack_require__(22742);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/common.ts
var common = __webpack_require__(61505);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/utils/user_utils.ts
var user_utils = __webpack_require__(60690);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(41637);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(64765);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(39714);
// EXTERNAL MODULE: ./node_modules/crypto-browserify/index.js
var crypto_browserify = __webpack_require__(82011);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var components_message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./utils/constants.tsx + 19 modules
var constants = __webpack_require__(66788);
// EXTERNAL MODULE: ./components/widgets/icons/fa_warning_icon.tsx
var fa_warning_icon = __webpack_require__(37668);
// EXTERNAL MODULE: ./utils/utils.tsx + 25 modules
var utils = __webpack_require__(15883);
;// CONCATENATED MODULE: ./components/error_page/error_title.tsx

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const ErrorTitle = _ref => {
  let {
    type,
    title
  } = _ref;
  let errorTitle = null;

  if (type) {
    switch (type) {
      case constants/* ErrorPageTypes.LOCAL_STORAGE */.vU.LOCAL_STORAGE:
        errorTitle = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.local_storage.title",
          defaultMessage: "Cannot Load Mattermost"
        });
        break;

      case constants/* ErrorPageTypes.PERMALINK_NOT_FOUND */.vU.PERMALINK_NOT_FOUND:
        errorTitle = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "permalink.error.title",
          defaultMessage: "Message Not Found"
        });
        break;

      case constants/* ErrorPageTypes.OAUTH_ACCESS_DENIED */.vU.OAUTH_ACCESS_DENIED:
        errorTitle = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.oauth_access_denied.title",
          defaultMessage: "Authorization Error"
        });
        break;

      case constants/* ErrorPageTypes.OAUTH_MISSING_CODE */.vU.OAUTH_MISSING_CODE:
        errorTitle = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.oauth_missing_code.title",
          defaultMessage: "Mattermost Needs Your Help"
        });
        break;

      case constants/* ErrorPageTypes.OAUTH_INVALID_REDIRECT_URL */.vU.OAUTH_INVALID_REDIRECT_URL:
      case constants/* ErrorPageTypes.OAUTH_INVALID_PARAM */.vU.OAUTH_INVALID_PARAM:
        errorTitle = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.oauth_invalid_param.title",
          defaultMessage: "OAuth Parameter Error"
        });
        break;

      case constants/* ErrorPageTypes.TEAM_NOT_FOUND */.vU.TEAM_NOT_FOUND:
        errorTitle = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.team_not_found.title",
          defaultMessage: "Team Not Found"
        });
        break;

      case constants/* ErrorPageTypes.CHANNEL_NOT_FOUND */.vU.CHANNEL_NOT_FOUND:
        errorTitle = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.channel_not_found.title",
          defaultMessage: "Channel Not Found"
        });
        break;

      case constants/* ErrorPageTypes.PAGE_NOT_FOUND */.vU.PAGE_NOT_FOUND:
      default:
        errorTitle = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.not_found.title",
          defaultMessage: "Page Not Found"
        });
    }
  } else if (title) {
    errorTitle = /*#__PURE__*/react.createElement(react.Fragment, null, title);
  } else {
    errorTitle = /*#__PURE__*/react.createElement(react.Fragment, null, utils/* localizeMessage */._u('error.generic.title', 'Error'));
  }

  return errorTitle;
};

ErrorTitle.propTypes = {
  type: prop_types_default().oneOfType([(prop_types_default()).string, prop_types_default().oneOf([null])]),
  title: (prop_types_default()).string.isRequired
};
/* harmony default export */ const error_title = (ErrorTitle);
// EXTERNAL MODULE: ./utils/i18n.tsx
var i18n = __webpack_require__(87993);
// EXTERNAL MODULE: ./components/error_page/error_link.tsx
var error_link = __webpack_require__(47675);
;// CONCATENATED MODULE: ./components/error_page/error_message.tsx

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const ErrorMessage = _ref => {
  let {
    type,
    message,
    service,
    isGuest
  } = _ref;
  let errorMessage = null;

  if (type) {
    switch (type) {
      case constants/* ErrorPageTypes.LOCAL_STORAGE */.vU.LOCAL_STORAGE:
        errorMessage = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.local_storage.message",
          defaultMessage: "Mattermost was unable to load because a setting in your browser prevents the use of its local storage features. To allow Mattermost to load, try the following actions:"
        }), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.local_storage.help1",
          defaultMessage: "Enable cookies"
        })), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.local_storage.help2",
          defaultMessage: "Turn off private browsing"
        })), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.local_storage.help3",
          defaultMessage: "Use a supported browser (IE 11, Chrome 61+, Firefox 60+, Safari 12+, Edge 42+)"
        }))));
        break;

      case constants/* ErrorPageTypes.PERMALINK_NOT_FOUND */.vU.PERMALINK_NOT_FOUND:
        errorMessage = /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "permalink.error.access",
          defaultMessage: "Permalink belongs to a deleted message or to a channel to which you do not have access."
        }));
        break;

      case constants/* ErrorPageTypes.TEAM_NOT_FOUND */.vU.TEAM_NOT_FOUND:
        errorMessage = /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.team_not_found.message",
          defaultMessage: "The team you're requesting is private or does not exist. Please contact your Administrator for an invitation."
        }));
        break;

      case constants/* ErrorPageTypes.CHANNEL_NOT_FOUND */.vU.CHANNEL_NOT_FOUND:
        errorMessage = /*#__PURE__*/react.createElement("p", null, isGuest ? /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.channel_not_found.message_guest",
          defaultMessage: "Your guest account has no channels assigned. Please contact an administrator."
        }) : /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.channel_not_found.message",
          defaultMessage: "The channel you're requesting is private or does not exist. Please contact an Administrator to be added to the channel."
        }));
        break;

      case constants/* ErrorPageTypes.OAUTH_MISSING_CODE */.vU.OAUTH_MISSING_CODE:
        errorMessage = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.oauth_missing_code",
          defaultMessage: "The service provider {service} did not provide an authorization code in the redirect URL.",
          values: {
            service
          }
        })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.oauth_missing_code.google",
          defaultMessage: "For {link} make sure your administrator enabled the Google+ API.",
          values: {
            link: /*#__PURE__*/react.createElement(error_link/* default */.Z, {
              url: 'https://docs.mattermost.com/deployment/sso-google.html',
              messageId: (0,i18n.t)('error.oauth_missing_code.google.link'),
              defaultMessage: 'Google Apps'
            })
          }
        })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.oauth_missing_code.office365",
          defaultMessage: "For {link} make sure the administrator of your Microsoft organization has enabled the Mattermost app.",
          values: {
            link: /*#__PURE__*/react.createElement(error_link/* default */.Z, {
              url: 'https://docs.mattermost.com/deployment/sso-office.html',
              messageId: (0,i18n.t)('error.oauth_missing_code.office365.link'),
              defaultMessage: 'Office 365'
            })
          }
        })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.oauth_missing_code.gitlab",
          defaultMessage: "For {link} please make sure you followed the setup instructions.",
          values: {
            link: /*#__PURE__*/react.createElement(error_link/* default */.Z, {
              url: 'https://docs.mattermost.com/deployment/sso-gitlab.html',
              messageId: (0,i18n.t)('error.oauth_missing_code.gitlab.link'),
              defaultMessage: 'GitLab'
            })
          }
        })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.oauth_missing_code.forum",
          defaultMessage: "If you reviewed the above and are still having trouble with configuration, you may post in our {link} where we'll be happy to help with issues during setup.",
          values: {
            link: /*#__PURE__*/react.createElement(error_link/* default */.Z, {
              url: 'https://forum.mattermost.com/c/trouble-shoot',
              messageId: (0,i18n.t)('error.oauth_missing_code.forum.link'),
              defaultMessage: 'Troubleshooting forum'
            })
          }
        })));
        break;

      case constants/* ErrorPageTypes.OAUTH_ACCESS_DENIED */.vU.OAUTH_ACCESS_DENIED:
        errorMessage = /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.oauth_access_denied",
          defaultMessage: "You must authorize Mattermost to log in with {service}.",
          values: {
            service
          }
        }));
        break;

      case constants/* ErrorPageTypes.OAUTH_INVALID_REDIRECT_URL */.vU.OAUTH_INVALID_REDIRECT_URL:
      case constants/* ErrorPageTypes.OAUTH_INVALID_PARAM */.vU.OAUTH_INVALID_PARAM:
        errorMessage = /*#__PURE__*/react.createElement("p", null, message);
        break;

      case constants/* ErrorPageTypes.PAGE_NOT_FOUND */.vU.PAGE_NOT_FOUND:
      default:
        errorMessage = /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "error.not_found.message",
          defaultMessage: "The page you were trying to reach does not exist"
        }));
    }
  } else if (message) {
    errorMessage = /*#__PURE__*/react.createElement("p", null, message);
  } else {
    errorMessage = /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "error.generic.message",
      defaultMessage: "An error has occurred."
    }));
  }

  return errorMessage;
};

ErrorMessage.propTypes = {
  type: prop_types_default().oneOfType([(prop_types_default()).string, prop_types_default().oneOf([null])]),
  message: (prop_types_default()).string,
  service: (prop_types_default()).string,
  isGuest: (prop_types_default()).bool
};
/* harmony default export */ const error_message = (ErrorMessage);
;// CONCATENATED MODULE: ./components/error_page/error_page.tsx







function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class ErrorPage extends react.PureComponent {
  componentDidMount() {
    document.body.setAttribute('class', 'sticky error');
  }

  componentWillUnmount() {
    document.body.removeAttribute('class');
  }

  render() {
    const {
      isGuest
    } = this.props;
    const params = new URLSearchParams(this.props.location.search);
    const signature = params.get('s');
    let trustParams = false;

    if (signature) {
      params.delete('s');
      const key = this.props.asymmetricSigningPublicKey;
      const keyPEM = '-----BEGIN PUBLIC KEY-----\n' + key + '\n-----END PUBLIC KEY-----';
      const verify = crypto_browserify.createVerify('sha256');
      verify.update('/error?' + params.toString());
      trustParams = verify.verify(keyPEM, signature, 'base64');
    }

    const type = params.get('type');
    const title = trustParams && params.get('title') || '';
    const message = trustParams && params.get('message') || '';
    const service = trustParams && params.get('service') || '';
    const returnTo = trustParams && params.get('returnTo') || '';
    let backButton;

    if (type === constants/* ErrorPageTypes.PERMALINK_NOT_FOUND */.vU.PERMALINK_NOT_FOUND && returnTo) {
      backButton = /*#__PURE__*/react.createElement(react_router_dom.Link, {
        to: returnTo
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "error.generic.link",
        defaultMessage: "Back to Mattermost"
      }));
    } else if (type === constants/* ErrorPageTypes.TEAM_NOT_FOUND */.vU.TEAM_NOT_FOUND) {
      backButton = /*#__PURE__*/react.createElement(react_router_dom.Link, {
        to: "/"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "error.generic.link",
        defaultMessage: "Back to {siteName}",
        values: {
          siteName: this.props.siteName
        }
      }));
    } else if (type === constants/* ErrorPageTypes.CHANNEL_NOT_FOUND */.vU.CHANNEL_NOT_FOUND && isGuest) {
      backButton = /*#__PURE__*/react.createElement(react_router_dom.Link, {
        to: "/"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "error.channelNotFound.guest_link",
        defaultMessage: "Back"
      }));
    } else if (type === constants/* ErrorPageTypes.CHANNEL_NOT_FOUND */.vU.CHANNEL_NOT_FOUND) {
      backButton = /*#__PURE__*/react.createElement(react_router_dom.Link, {
        to: params.get('returnTo')
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "error.channelNotFound.link",
        defaultMessage: "Back to {defaultChannelName}",
        values: {
          defaultChannelName: constants/* Constants.DEFAULT_CHANNEL_UI_NAME */.gT.DEFAULT_CHANNEL_UI_NAME
        }
      }));
    } else if (type === constants/* ErrorPageTypes.OAUTH_ACCESS_DENIED */.vU.OAUTH_ACCESS_DENIED || type === constants/* ErrorPageTypes.OAUTH_MISSING_CODE */.vU.OAUTH_MISSING_CODE) {
      backButton = /*#__PURE__*/react.createElement(react_router_dom.Link, {
        to: "/"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "error.generic.link_login",
        defaultMessage: "Back to Login Page"
      }));
    } else if (type === constants/* ErrorPageTypes.OAUTH_INVALID_PARAM */.vU.OAUTH_INVALID_PARAM || type === constants/* ErrorPageTypes.OAUTH_INVALID_REDIRECT_URL */.vU.OAUTH_INVALID_REDIRECT_URL) {
      backButton = null;
    } else {
      backButton = /*#__PURE__*/react.createElement(react_router_dom.Link, {
        to: "/"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "error.generic.link",
        defaultMessage: "Back to {siteName}",
        values: {
          siteName: this.props.siteName
        }
      }));
    }

    const errorPage = /*#__PURE__*/react.createElement("div", {
      className: "container-fluid"
    }, /*#__PURE__*/react.createElement("div", {
      className: "error__container"
    }, /*#__PURE__*/react.createElement("div", {
      className: "error__icon"
    }, /*#__PURE__*/react.createElement(fa_warning_icon/* default */.Z, null)), /*#__PURE__*/react.createElement("h2", {
      "data-testid": "errorMessageTitle"
    }, /*#__PURE__*/react.createElement(error_title, {
      type: type,
      title: title
    })), /*#__PURE__*/react.createElement(error_message, {
      type: type,
      message: message,
      service: service,
      isGuest: isGuest
    }), backButton));
    return /*#__PURE__*/react.createElement(react.Fragment, null, errorPage);
  }

}

_defineProperty(ErrorPage, "propTypes", {
  location: prop_types_default().shape({
    search: (prop_types_default()).string.isRequired
  }).isRequired,
  asymmetricSigningPublicKey: (prop_types_default()).string,
  siteName: (prop_types_default()).string,
  isGuest: (prop_types_default()).bool
});
;// CONCATENATED MODULE: ./components/error_page/index.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const user = (0,common/* getCurrentUser */.ts)(state);
  return {
    siteName: config.SiteName,
    asymmetricSigningPublicKey: config.AsymmetricSigningPublicKey,
    isGuest: Boolean(user && (0,user_utils/* isGuest */.nJ)(user.roles))
  };
}

/* harmony default export */ const error_page = ((0,es.connect)(mapStateToProps)(ErrorPage));

/***/ }),

/***/ 37668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 80950:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 46601:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 89214:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8623:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 7748:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 85568:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 56619:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 77108:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 52361:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 94616:
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=986.4ee0cc7f17df6d1b8aa5.js.map