"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[507],{

/***/ 51507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ authorize)
});

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 1 modules
var redux = __webpack_require__(97779);
// EXTERNAL MODULE: ./actions/admin_actions.jsx
var admin_actions = __webpack_require__(85163);
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
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(23157);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(15306);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./images/icon50x50.png
var icon50x50 = __webpack_require__(16429);
// EXTERNAL MODULE: ./components/form_error.tsx
var form_error = __webpack_require__(95795);
// EXTERNAL MODULE: ./utils/browser_history.jsx
var browser_history = __webpack_require__(89262);
// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(45288);
;// CONCATENATED MODULE: ./components/authorize/authorize.tsx








function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class Authorize extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleAllow", () => {
      const searchParams = new URLSearchParams(this.props.location.search);
      const params = {
        responseType: searchParams.get('response_type'),
        clientId: searchParams.get('client_id'),
        redirectUri: searchParams.get('redirect_uri'),
        state: searchParams.get('state'),
        scope: searchParams.get('store')
      };
      this.props.actions.allowOAuth2(params).then(_ref => {
        let {
          data,
          error
        } = _ref;

        if (data && data.redirect) {
          window.location.href = data.redirect;
        } else if (error) {
          this.setState({
            error: error.message
          });
        }
      });
    });

    _defineProperty(this, "handleDeny", () => {
      const redirectUri = new URLSearchParams(this.props.location.search).get('redirect_uri');

      if (redirectUri && (redirectUri.startsWith('https://') || redirectUri.startsWith('http://'))) {
        window.location.href = redirectUri + '?error=access_denied';
        return;
      }

      browser_history/* browserHistory.replace */.m.replace('/error');
    });

    this.state = {};
  }

  componentDidMount() {
    // if we get to this point remove the antiClickjack blocker
    const blocker = document.getElementById('antiClickjack');

    if (blocker && blocker.parentNode) {
      blocker.parentNode.removeChild(blocker);
    }

    const clientId = new URLSearchParams(this.props.location.search).get('client_id');

    if (clientId && !/^[a-z0-9]+$/.test(clientId)) {
      return;
    }

    this.props.actions.getOAuthAppInfo(clientId).then(_ref2 => {
      let {
        data
      } = _ref2;

      if (data) {
        this.setState({
          app: data
        });
      }
    });
  }

  render() {
    const app = this.state.app;

    if (!app) {
      return null;
    }

    let icon;

    if (app.icon_url) {
      icon = app.icon_url;
    } else {
      icon = icon50x50/* default */.Z;
    }

    let error;

    if (this.state.error) {
      error = /*#__PURE__*/react.createElement("div", {
        className: "prompt__error form-group"
      }, /*#__PURE__*/react.createElement(form_error/* default */.Z, {
        error: this.state.error
      }));
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "container-fluid"
    }, /*#__PURE__*/react.createElement("div", {
      className: "prompt"
    }, /*#__PURE__*/react.createElement("div", {
      className: "prompt__heading"
    }, /*#__PURE__*/react.createElement("div", {
      className: "prompt__app-icon"
    }, /*#__PURE__*/react.createElement("img", {
      alt: 'prompt icon',
      src: icon,
      width: "50",
      height: "50"
    })), /*#__PURE__*/react.createElement("div", {
      className: "text"
    }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
      id: "authorize.title",
      defaultMessage: "Authorize **{appName}** to Connect to Your **Mattermost** User Account",
      values: {
        appName: app.name
      }
    }))), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
      id: "authorize.app",
      defaultMessage: "The app **{appName}** would like the ability to access and modify your basic information.",
      values: {
        appName: app.name
      }
    })), /*#__PURE__*/react.createElement("h2", {
      className: "prompt__allow"
    }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
      id: "authorize.access",
      defaultMessage: "Allow **{appName}** access?",
      values: {
        appName: app.name
      }
    })), /*#__PURE__*/react.createElement("div", {
      className: "prompt__buttons"
    }, /*#__PURE__*/react.createElement("button", {
      type: "submit",
      className: "btn btn-link authorize-btn",
      onClick: this.handleDeny
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "authorize.deny",
      defaultMessage: "Deny"
    })), /*#__PURE__*/react.createElement("button", {
      type: "submit",
      className: "btn btn-primary authorize-btn",
      onClick: this.handleAllow
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "authorize.allow",
      defaultMessage: "Allow"
    }))), error));
  }

}

_defineProperty(Authorize, "propTypes", {
  location: prop_types_default().shape({
    search: (prop_types_default()).string.isRequired
  }).isRequired,
  actions: prop_types_default().shape({
    getOAuthAppInfo: (prop_types_default()).func.isRequired,
    allowOAuth2: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/authorize/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      getOAuthAppInfo: admin_actions/* getOAuthAppInfo */.jI,
      allowOAuth2: admin_actions/* allowOAuth2 */.yT
    }, dispatch)
  };
}

/* harmony default export */ const authorize = ((0,es.connect)(null, mapDispatchToProps)(Authorize));

/***/ })

}]);
//# sourceMappingURL=507.52bf82f326d105244fc1.js.map