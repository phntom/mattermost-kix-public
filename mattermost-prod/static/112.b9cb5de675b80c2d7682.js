"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[112],{

/***/ 39112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_password_reset_form)
});

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 1 modules
var redux = __webpack_require__(97779);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/general.ts
var general = __webpack_require__(22742);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/users.ts
var users = __webpack_require__(33383);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(88674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(41637);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(64765);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./utils/browser_history.jsx
var browser_history = __webpack_require__(89262);
// EXTERNAL MODULE: ./utils/constants.tsx + 19 modules
var constants = __webpack_require__(66788);
// EXTERNAL MODULE: ./components/localized_input/localized_input.tsx
var localized_input = __webpack_require__(927);
// EXTERNAL MODULE: ./utils/i18n.tsx
var i18n = __webpack_require__(87993);
;// CONCATENATED MODULE: ./components/password_reset_form/password_reset_form.tsx






// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








const PasswordResetForm = _ref => {
  let {
    location,
    siteName,
    actions
  } = _ref;
  const [error, setError] = (0,react.useState)(null);
  const passwordInput = (0,react.useRef)(null);

  const handlePasswordReset = async e => {
    e.preventDefault();
    const password = passwordInput.current.value;

    if (!password || password.length < constants/* default.MIN_PASSWORD_LENGTH */.ZP.MIN_PASSWORD_LENGTH) {
      setError( /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "password_form.error",
        defaultMessage: "Please enter at least {chars} characters.",
        values: {
          chars: constants/* default.MIN_PASSWORD_LENGTH */.ZP.MIN_PASSWORD_LENGTH
        }
      }));
      return;
    }

    const token = new URLSearchParams(location.search).get('token');

    if (typeof token !== 'string') {
      throw new Error('token must be a string');
    }

    const {
      data,
      error
    } = await actions.resetUserPassword(token, password);

    if (data) {
      browser_history/* browserHistory.push */.m.push('/login?extra=' + constants/* default.PASSWORD_CHANGE */.ZP.PASSWORD_CHANGE);
      setError(null);
    } else if (error) {
      setError(error.message);
    }
  };

  const errorElement = error ? /*#__PURE__*/react.createElement("div", {
    className: "form-group has-error"
  }, /*#__PURE__*/react.createElement("label", {
    className: "control-label"
  }, error)) : null;
  return /*#__PURE__*/react.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "signup-team__container"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "password_form.title",
    tagName: "h1",
    defaultMessage: "Password Reset"
  }), /*#__PURE__*/react.createElement("form", {
    onSubmit: handlePasswordReset
  }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "password_form.enter",
    defaultMessage: "Enter a new password for your {siteName} account.",
    values: {
      siteName
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: classnames_default()('form-group', {
      'has-error': error
    })
  }, /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
    id: "resetPasswordInput",
    type: "password",
    className: "form-control",
    name: "password",
    ref: passwordInput,
    placeholder: {
      id: (0,i18n.t)('password_form.pwd'),
      defaultMessage: 'Password'
    },
    spellCheck: "false",
    autoFocus: true
  })), errorElement, /*#__PURE__*/react.createElement("button", {
    id: "resetPasswordButton",
    type: "submit",
    className: "btn btn-primary"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "password_form.change",
    defaultMessage: "Change my password"
  })))));
};

PasswordResetForm.propTypes = {
  location: prop_types_default().shape({
    search: (prop_types_default()).string.isRequired
  }).isRequired,
  actions: prop_types_default().shape({
    resetUserPassword: (prop_types_default()).func.isRequired
  }).isRequired,
  siteName: (prop_types_default()).string
};
/* harmony default export */ const password_reset_form = (/*#__PURE__*/(0,react.memo)(PasswordResetForm));
;// CONCATENATED MODULE: ./components/password_reset_form/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function mapStateToProps(state) {
  return {
    siteName: (0,general/* getConfig */.iE)(state).SiteName
  };
}

const mapDispatchToProps = dispatch => ({
  actions: (0,redux.bindActionCreators)({
    resetUserPassword: users/* resetUserPassword */.$P
  }, dispatch)
});

/* harmony default export */ const components_password_reset_form = ((0,es.connect)(mapStateToProps, mapDispatchToProps)(password_reset_form));

/***/ })

}]);
//# sourceMappingURL=112.b9cb5de675b80c2d7682.js.map