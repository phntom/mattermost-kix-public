"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[854],{

/***/ 61854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ logged_in)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 1 modules
var redux = __webpack_require__(97779);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/timezone.ts
var timezone = __webpack_require__(73042);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/channels.ts
var channels = __webpack_require__(9276);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/general.ts
var general = __webpack_require__(22742);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/users.ts
var users = __webpack_require__(12707);
// EXTERNAL MODULE: ./utils/browser_history.jsx
var browser_history = __webpack_require__(89262);
// EXTERNAL MODULE: ./utils/route.tsx
var route = __webpack_require__(52542);
// EXTERNAL MODULE: ./utils/utils.tsx + 25 modules
var utils = __webpack_require__(15883);
// EXTERNAL MODULE: ./utils/url.tsx + 1 modules
var utils_url = __webpack_require__(12266);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(64765);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./node_modules/semver/index.js
var semver = __webpack_require__(81249);
var semver_default = /*#__PURE__*/__webpack_require__.n(semver);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/channels.ts
var actions_channels = __webpack_require__(88229);
// EXTERNAL MODULE: ./actions/global_actions.tsx + 1 modules
var global_actions = __webpack_require__(34288);
// EXTERNAL MODULE: ./actions/websocket_actions.jsx + 4 modules
var websocket_actions = __webpack_require__(91717);
// EXTERNAL MODULE: ./utils/user_agent.tsx
var user_agent = __webpack_require__(47470);
// EXTERNAL MODULE: ./components/loading_screen.tsx
var loading_screen = __webpack_require__(19476);
// EXTERNAL MODULE: ./utils/timezone.jsx
var utils_timezone = __webpack_require__(58367);
// EXTERNAL MODULE: ./stores/redux_store.jsx + 2 modules
var redux_store = __webpack_require__(52182);
// EXTERNAL MODULE: ./client/web_websocket_client.jsx + 1 modules
var web_websocket_client = __webpack_require__(58194);
// EXTERNAL MODULE: ./stores/browser_store.tsx
var browser_store = __webpack_require__(91384);
;// CONCATENATED MODULE: ./components/logged_in/logged_in.tsx




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.












const dispatch = redux_store/* default.dispatch */.Z.dispatch;
const getState = redux_store/* default.getState */.Z.getState;
const BACKSPACE_CHAR = 8;
class LoggedIn extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onDesktopMessageListener", desktopMessage => {
      if (!this.props.currentUser) {
        return;
      }

      if (desktopMessage.origin !== window.location.origin) {
        return;
      }

      switch (desktopMessage.data.type) {
        case 'register-desktop':
          {
            const {
              version
            } = desktopMessage.data.message;

            if (!window.desktop) {
              window.desktop = {};
            }

            window.desktop.version = semver_default().valid(semver_default().coerce(version));
            break;
          }

        case 'user-activity-update':
          {
            const {
              userIsActive,
              manual
            } = desktopMessage.data.message; // update the server with the users current away status

            if (userIsActive === true || userIsActive === false) {
              web_websocket_client/* default.userUpdateActiveStatus */.Z.userUpdateActiveStatus(userIsActive, manual);
            }

            break;
          }

        case 'notification-clicked':
          {
            const {
              channel,
              teamId,
              url
            } = desktopMessage.data.message;
            window.focus(); // navigate to the appropriate channel

            this.props.actions.getChannelURLAction(channel, teamId, url);
            break;
          }
      }
    });

    _defineProperty(this, "handleBackSpace", e => {
      const excludedElements = ['input', 'textarea'];

      if (e.which === BACKSPACE_CHAR && !excludedElements.includes(e.target.tagName.toLowerCase())) {
        e.preventDefault();
      }
    });

    _defineProperty(this, "handleBeforeUnload", () => {
      // remove the event listener to prevent getting stuck in a loop
      window.removeEventListener('beforeunload', this.handleBeforeUnload);

      if (document.cookie.indexOf('MMUSERID=') > -1) {
        (0,actions_channels/* viewChannel */.SU)('', this.props.currentChannelId || '')(dispatch, getState);
      }

      websocket_actions/* close */.xv();
    });

    const root = document.getElementById('root');

    if (root) {
      root.className += ' channel-view';
    }
  }

  isValidState() {
    return this.props.currentUser != null;
  }

  componentDidMount() {
    // Initialize websocket
    websocket_actions/* initialize */.j2();

    if (this.props.enableTimezone) {
      this.props.actions.autoUpdateTimezone((0,utils_timezone/* getBrowserTimezone */.x_)());
    } // Make sure the websockets close and reset version


    window.addEventListener('beforeunload', this.handleBeforeUnload); // Listen for focused tab/window state

    window.addEventListener('focus', this.onFocusListener);
    window.addEventListener('blur', this.onBlurListener);

    if (!document.hasFocus()) {
      global_actions/* emitBrowserFocus */.UF(false);
    } // Listen for messages from the desktop app


    window.addEventListener('message', this.onDesktopMessageListener); // Tell the desktop app the webapp is ready

    window.postMessage({
      type: 'webapp-ready'
    }, window.location.origin); // Device tracking setup

    if (user_agent/* isIos */.s()) {
      document.body.classList.add('ios');
    } else if (user_agent/* isAndroid */.Dt()) {
      document.body.classList.add('android');
    }

    if (!this.props.currentUser) {
      const rootEl = document.getElementById('root');

      if (rootEl) {
        rootEl.setAttribute('class', '');
      }

      global_actions/* emitUserLoggedOutEvent */.gc('/login?redirect_to=' + encodeURIComponent("".concat(this.props.location.pathname).concat(this.props.location.search)), true, false);
    } // Prevent backspace from navigating back a page


    window.addEventListener('keydown', this.handleBackSpace);

    if (this.isValidState()) {
      browser_store/* default.signalLogin */.Z.signalLogin();
    }
  }

  componentWillUnmount() {
    websocket_actions/* close */.xv();
    window.removeEventListener('keydown', this.handleBackSpace);
    window.removeEventListener('focus', this.onFocusListener);
    window.removeEventListener('blur', this.onBlurListener);
    window.removeEventListener('message', this.onDesktopMessageListener);
  }

  render() {
    if (!this.isValidState()) {
      return /*#__PURE__*/react.createElement(loading_screen/* default */.Z, null);
    }

    if (this.props.mfaRequired) {
      if (this.props.location.pathname !== '/mfa/setup') {
        return /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
          to: '/mfa/setup'
        });
      }
    } else if (this.props.location.pathname === '/mfa/confirm') {// Nothing to do. Wait for MFA flow to complete before prompting TOS.
    } else if (this.props.showTermsOfService) {
      if (this.props.location.pathname !== '/terms_of_service') {
        return /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
          to: '/terms_of_service?redirect_to=' + encodeURIComponent(this.props.location.pathname)
        });
      }
    }

    return this.props.children;
  }

  onFocusListener() {
    global_actions/* emitBrowserFocus */.UF(true);
  }

  onBlurListener() {
    global_actions/* emitBrowserFocus */.UF(false);
  } // listen for messages from the desktop app


}

_defineProperty(LoggedIn, "propTypes", {
  currentChannelId: (prop_types_default()).string,
  children: (prop_types_default()).node,
  mfaRequired: (prop_types_default()).bool.isRequired,
  enableTimezone: (prop_types_default()).bool.isRequired,
  actions: prop_types_default().shape({
    autoUpdateTimezone: (prop_types_default()).func.isRequired,
    getChannelURLAction: (prop_types_default()).func.isRequired
  }).isRequired,
  showTermsOfService: (prop_types_default()).bool.isRequired,
  location: prop_types_default().shape({
    pathname: (prop_types_default()).string.isRequired,
    search: (prop_types_default()).string.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/logged_in/index.ts


// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.












function mapStateToProps(state, ownProps) {
  const license = (0,general/* getLicense */.lJ)(state);
  const config = (0,general/* getConfig */.iE)(state);
  const showTermsOfService = (0,users/* shouldShowTermsOfService */.YE)(state);
  return {
    currentUser: (0,users/* getCurrentUser */.ts)(state),
    currentChannelId: (0,channels/* getCurrentChannelId */.gO)(state),
    mfaRequired: (0,route/* checkIfMFARequired */.b)((0,users/* getCurrentUser */.ts)(state), license, config, ownProps.match.url),
    enableTimezone: config.ExperimentalTimezone === 'true',
    showTermsOfService
  };
} // NOTE: suggestions where to keep this welcomed


const getChannelURLAction = (channel, teamId, url) => (dispatch, getState) => {
  const state = getState();

  if (url && (0,utils_url/* isPermalinkURL */.Db)(url)) {
    return browser_history/* browserHistory.push */.m.push(url);
  }

  return browser_history/* browserHistory.push */.m.push((0,utils/* getChannelURL */.qr)(state, channel, teamId));
};

function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      autoUpdateTimezone: timezone/* autoUpdateTimezone */.g,
      getChannelURLAction
    }, dispatch)
  };
}

/* harmony default export */ const logged_in = ((0,es.connect)(mapStateToProps, mapDispatchToProps)(LoggedIn));

/***/ }),

/***/ 73042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ autoUpdateTimezone)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88674);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12707);
/* harmony import */ var mattermost_redux_selectors_entities_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66469);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33383);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



function autoUpdateTimezone(deviceTimezone) {
  return async (dispatch, getState) => {
    const currentUser = (0,mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__/* .getCurrentUser */ .ts)(getState());
    const currentTimezone = (0,mattermost_redux_selectors_entities_timezone__WEBPACK_IMPORTED_MODULE_2__/* .makeGetUserTimezone */ .n5)()(getState(), currentUser.id);
    const newTimezoneExists = currentTimezone.automaticTimezone !== deviceTimezone;

    if (currentTimezone.useAutomaticTimezone && newTimezoneExists) {
      const timezone = {
        useAutomaticTimezone: 'true',
        automaticTimezone: deviceTimezone,
        manualTimezone: currentTimezone.manualTimezone
      };

      const updatedUser = _objectSpread(_objectSpread({}, currentUser), {}, {
        timezone
      });

      (0,_users__WEBPACK_IMPORTED_MODULE_3__/* .updateMe */ .DO)(updatedUser)(dispatch, getState);
    }
  };
}

/***/ })

}]);
//# sourceMappingURL=854.217657bd74aef57ea5f0.js.map