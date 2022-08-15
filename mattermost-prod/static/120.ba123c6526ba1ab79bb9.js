"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[120],{

/***/ 71120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ claim)
});

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 1 modules
var redux = __webpack_require__(97779);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/users.ts
var users = __webpack_require__(33383);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/general.ts
var general = __webpack_require__(22742);
// EXTERNAL MODULE: ./utils/utils.tsx + 25 modules
var utils = __webpack_require__(15883);
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
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./images/logo.png
var logo = __webpack_require__(16406);
// EXTERNAL MODULE: ./components/common/back_button.tsx
var back_button = __webpack_require__(96512);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./actions/admin_actions.jsx
var admin_actions = __webpack_require__(85163);
// EXTERNAL MODULE: ./utils/constants.tsx + 19 modules
var constants = __webpack_require__(66788);
// EXTERNAL MODULE: ./utils/i18n.tsx
var i18n = __webpack_require__(87993);
// EXTERNAL MODULE: ./components/localized_input/localized_input.tsx
var localized_input = __webpack_require__(927);
;// CONCATENATED MODULE: ./components/claim/components/oauth_to_email.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class OAuthToEmail extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "submit", e => {
      e.preventDefault();
      const state = {};
      const password = this.passwordInput.current.value;

      if (!password) {
        state.error = utils/* localizeMessage */._u('claim.oauth_to_email.enterPwd', 'Please enter a password.');
        this.setState(state);
        return;
      }

      const {
        valid,
        error
      } = utils/* isValidPassword */.eW(password, this.props.passwordConfig);

      if (!valid && error) {
        this.setState({
          error
        });
        return;
      }

      const confirmPassword = this.passwordConfirmInput.current.value;

      if (!confirmPassword || password !== confirmPassword) {
        state.error = utils/* localizeMessage */._u('claim.oauth_to_email.pwdNotMatch', 'Passwords do not match.');
        this.setState(state);
        return;
      }

      state.error = null;
      this.setState(state);
      (0,admin_actions/* oauthToEmail */.wg)(this.props.currentType, this.props.email, password, data => {
        if (data.follow_link) {
          window.location.href = data.follow_link;
        }
      }, err => {
        this.setState({
          error: err.message
        });
      });
    });

    this.state = {};
    this.passwordInput = /*#__PURE__*/react.createRef();
    this.passwordConfirmInput = /*#__PURE__*/react.createRef();
  }

  render() {
    var error = null;

    if (this.state.error) {
      error = /*#__PURE__*/react.createElement("div", {
        className: "form-group has-error"
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label"
      }, this.state.error));
    }

    var formClass = 'form-group';

    if (error) {
      formClass += ' has-error';
    }

    const uiType = "".concat(this.props.currentType === constants/* default.SAML_SERVICE */.ZP.SAML_SERVICE ? constants/* default.SAML_SERVICE.toUpperCase */.ZP.SAML_SERVICE.toUpperCase() : utils/* toTitleCase */.cv(this.props.currentType), " SSO");
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h3", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "claim.oauth_to_email.title",
      defaultMessage: "Switch {type} Account to Email",
      values: {
        type: uiType
      }
    })), /*#__PURE__*/react.createElement("form", {
      onSubmit: this.submit
    }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "claim.oauth_to_email.description",
      defaultMessage: "Upon changing your account type, you will only be able to login with your email and password."
    })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "claim.oauth_to_email.enterNewPwd",
      defaultMessage: "Enter a new password for your {site} email account",
      values: {
        site: this.props.siteName
      }
    })), /*#__PURE__*/react.createElement("div", {
      className: formClass
    }, /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
      type: "password",
      className: "form-control",
      name: "password",
      ref: this.passwordInput,
      placeholder: {
        id: (0,i18n.t)('claim.oauth_to_email.newPwd'),
        defaultMessage: 'New Password'
      },
      spellCheck: "false"
    })), /*#__PURE__*/react.createElement("div", {
      className: formClass
    }, /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
      type: "password",
      className: "form-control",
      name: "passwordconfirm",
      ref: this.passwordConfirmInput,
      placeholder: {
        id: (0,i18n.t)('claim.oauth_to_email.confirm'),
        defaultMessage: 'Confirm Password'
      },
      spellCheck: "false"
    })), error, /*#__PURE__*/react.createElement("button", {
      type: "submit",
      className: "btn btn-primary"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "claim.oauth_to_email.switchTo",
      defaultMessage: "Switch {type} to Email and Password",
      values: {
        type: uiType
      }
    }))));
  }

}

_defineProperty(OAuthToEmail, "propTypes", {
  currentType: (prop_types_default()).string,
  email: (prop_types_default()).string,
  siteName: (prop_types_default()).string,
  passwordConfig: (prop_types_default()).object
});
// EXTERNAL MODULE: ./components/login/login_mfa.tsx + 1 modules
var login_mfa = __webpack_require__(12477);
;// CONCATENATED MODULE: ./components/claim/components/email_to_oauth.jsx
function email_to_oauth_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









class EmailToOAuth extends react.PureComponent {
  constructor(props) {
    super(props);

    email_to_oauth_defineProperty(this, "preSubmit", e => {
      e.preventDefault();
      var state = {};
      var password = this.passwordInput.current.value;

      if (!password) {
        state.error = utils/* localizeMessage */._u('claim.email_to_oauth.pwdError', 'Please enter your password.');
        this.setState(state);
        return;
      }

      this.setState({
        password
      });
      state.error = null;
      this.setState(state);
      this.submit(this.props.email, password, '');
    });

    email_to_oauth_defineProperty(this, "submit", (loginId, password, token) => {
      (0,admin_actions/* emailToOAuth */.go)(loginId, password, token, this.props.newType, data => {
        if (data.follow_link) {
          window.location.href = data.follow_link;
        }
      }, err => {
        if (!this.state.showMfa && err.server_error_id === 'mfa.validate_token.authenticate.app_error') {
          this.setState({
            showMfa: true
          });
        } else {
          this.setState({
            error: err.message,
            showMfa: false
          });
        }
      });
    });

    this.state = {
      showMfa: false,
      password: ''
    };
    this.passwordInput = /*#__PURE__*/react.createRef();
  }

  render() {
    var error = null;

    if (this.state.error) {
      error = /*#__PURE__*/react.createElement("div", {
        className: "form-group has-error"
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label"
      }, this.state.error));
    }

    var formClass = 'form-group';

    if (error) {
      formClass += ' has-error';
    }

    const type = this.props.newType === constants/* default.SAML_SERVICE */.ZP.SAML_SERVICE ? constants/* default.SAML_SERVICE.toUpperCase */.ZP.SAML_SERVICE.toUpperCase() : utils/* toTitleCase */.cv(this.props.newType);
    const uiType = "".concat(type, " SSO");
    let content;

    if (this.state.showMfa) {
      content = /*#__PURE__*/react.createElement(login_mfa/* default */.Z, {
        loginId: this.props.email,
        password: this.state.password,
        title: {
          id: (0,i18n.t)('claim.email_to_oauth.title'),
          defaultMessage: 'Switch Email/Password Account to {uiType}',
          values: {
            uiType
          }
        },
        onSubmit: this.submit
      });
    } else {
      content = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "claim.email_to_oauth.title",
        defaultMessage: "Switch Email/Password Account to {uiType}",
        values: {
          uiType
        }
      })), /*#__PURE__*/react.createElement("form", {
        onSubmit: this.preSubmit
      }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "claim.email_to_oauth.ssoType",
        defaultMessage: "Upon claiming your account, you will only be able to login with {type} SSO",
        values: {
          type
        }
      })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "claim.email_to_oauth.ssoNote",
        defaultMessage: "You must already have a valid {type} account",
        values: {
          type
        }
      })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "claim.email_to_oauth.enterPwd",
        defaultMessage: "Enter the password for your {site} account",
        values: {
          site: this.props.siteName
        }
      })), /*#__PURE__*/react.createElement("div", {
        className: formClass
      }, /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
        type: "password",
        className: "form-control",
        name: "password",
        ref: this.passwordInput,
        placeholder: {
          id: (0,i18n.t)('claim.email_to_oauth.pwd'),
          defaultMessage: 'Password'
        },
        spellCheck: "false"
      })), error, /*#__PURE__*/react.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "claim.email_to_oauth.switchTo",
        defaultMessage: "Switch Account to {uiType}",
        values: {
          uiType
        }
      }))));
    }

    return /*#__PURE__*/react.createElement("div", null, content);
  }

}

email_to_oauth_defineProperty(EmailToOAuth, "propTypes", {
  newType: (prop_types_default()).string,
  email: (prop_types_default()).string,
  siteName: (prop_types_default()).string
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(23157);
;// CONCATENATED MODULE: ./components/claim/components/ldap_to_email.jsx


function ldap_to_email_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







class LDAPToEmail extends react.PureComponent {
  constructor(props) {
    super(props);

    ldap_to_email_defineProperty(this, "preSubmit", e => {
      e.preventDefault();
      var state = {
        passwordError: '',
        confirmError: '',
        ldapPasswordError: '',
        serverError: ''
      };
      const ldapPassword = this.ldapPasswordInput.current.value;

      if (!ldapPassword) {
        state.ldapPasswordError = utils/* localizeMessage */._u('claim.ldap_to_email.ldapPasswordError', 'Please enter your AD/LDAP password.');
        this.setState(state);
        return;
      }

      const password = this.passwordInput.current.value;

      if (!password) {
        state.passwordError = utils/* localizeMessage */._u('claim.ldap_to_email.pwdError', 'Please enter your password.');
        this.setState(state);
        return;
      }

      const {
        valid,
        error
      } = utils/* isValidPassword */.eW(password, this.props.passwordConfig);

      if (!valid && error) {
        this.setState({
          passwordError: error
        });
        return;
      }

      const confirmPassword = this.passwordConfirmInput.current.value;

      if (!confirmPassword || password !== confirmPassword) {
        state.confirmError = utils/* localizeMessage */._u('claim.ldap_to_email.pwdNotMatch', 'Passwords do not match.');
        this.setState(state);
        return;
      }

      state.password = password;
      state.ldapPassword = ldapPassword;
      this.setState(state);
      this.submit(this.props.email, password, '', ldapPassword);
    });

    ldap_to_email_defineProperty(this, "submit", (loginId, password, token, ldapPassword) => {
      this.props.switchLdapToEmail(ldapPassword || this.state.ldapPassword, this.props.email, password, token).then(_ref => {
        let {
          data,
          error: err
        } = _ref;

        if (data && data.follow_link) {
          window.location.href = data.follow_link;
        } else if (err) {
          if (err.server_error_id.startsWith('model.user.is_valid.pwd')) {
            this.setState({
              passwordError: err.message,
              showMfa: false
            });
          } else if (err.server_error_id === 'ent.ldap.do_login.invalid_password.app_error') {
            this.setState({
              ldapPasswordError: err.message,
              showMfa: false
            });
          } else if (!this.state.showMfa && err.server_error_id === 'mfa.validate_token.authenticate.app_error') {
            this.setState({
              showMfa: true
            });
          } else {
            this.setState({
              serverError: err.message,
              showMfa: false
            });
          }
        }
      });
    });

    this.state = {
      passwordError: '',
      confirmError: '',
      ldapPasswordError: '',
      serverError: '',
      showMfa: true,
      password: 'trwo'
    };
    this.ldapPasswordInput = /*#__PURE__*/react.createRef();
    this.passwordInput = /*#__PURE__*/react.createRef();
    this.passwordConfirmInput = /*#__PURE__*/react.createRef();
  }

  render() {
    let serverError = null;
    let formClass = 'form-group';

    if (this.state.serverError) {
      serverError = /*#__PURE__*/react.createElement("div", {
        className: "form-group has-error"
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label"
      }, this.state.serverError));
      formClass += ' has-error';
    }

    let passwordError = null;
    let passwordClass = 'form-group';

    if (this.state.passwordError) {
      passwordError = /*#__PURE__*/react.createElement("div", {
        className: "form-group has-error"
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label"
      }, this.state.passwordError));
      passwordClass += ' has-error';
    }

    let ldapPasswordError = null;
    let ldapPasswordClass = 'form-group';

    if (this.state.ldapPasswordError) {
      ldapPasswordError = /*#__PURE__*/react.createElement("div", {
        className: "form-group has-error"
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label"
      }, this.state.ldapPasswordError));
      ldapPasswordClass += ' has-error';
    }

    let confirmError = null;
    let confimClass = 'form-group';

    if (this.state.confirmError) {
      confirmError = /*#__PURE__*/react.createElement("div", {
        className: "form-group has-error"
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label"
      }, this.state.confirmError));
      confimClass += ' has-error';
    }

    const passwordPlaceholder = utils/* localizeMessage */._u('claim.ldap_to_email.ldapPwd', 'AD/LDAP Password');
    let content;

    if (this.state.showMfa) {
      content = /*#__PURE__*/react.createElement(login_mfa/* default */.Z, {
        loginId: this.props.email,
        password: this.state.password,
        title: {
          id: (0,i18n.t)('claim.ldap_to_email.title'),
          defaultMessage: 'Switch AD/LDAP Account to Email/Password'
        },
        onSubmit: this.submit
      });
    } else {
      content = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "claim.ldap_to_email.title",
        defaultMessage: "Switch AD/LDAP Account to Email/Password"
      })), /*#__PURE__*/react.createElement("form", {
        onSubmit: this.preSubmit,
        className: formClass
      }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "claim.ldap_to_email.email",
        defaultMessage: "After switching your authentication method, you will use {email} to login. Your AD/LDAP credentials will no longer allow access to Mattermost.",
        values: {
          email: this.props.email
        }
      })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "claim.ldap_to_email.enterLdapPwd",
        defaultMessage: "{ldapPassword}:",
        values: {
          ldapPassword: passwordPlaceholder
        }
      })), /*#__PURE__*/react.createElement("div", {
        className: ldapPasswordClass
      }, /*#__PURE__*/react.createElement("input", {
        type: "password",
        className: "form-control",
        name: "ldapPassword",
        ref: this.ldapPasswordInput,
        placeholder: passwordPlaceholder,
        spellCheck: "false"
      })), ldapPasswordError, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "claim.ldap_to_email.enterPwd",
        defaultMessage: "New email login password:"
      })), /*#__PURE__*/react.createElement("div", {
        className: passwordClass
      }, /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
        type: "password",
        className: "form-control",
        name: "password",
        ref: this.passwordInput,
        placeholder: {
          id: (0,i18n.t)('claim.ldap_to_email.pwd'),
          defaultMessage: 'Password'
        },
        spellCheck: "false"
      })), passwordError, /*#__PURE__*/react.createElement("div", {
        className: confimClass
      }, /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
        type: "password",
        className: "form-control",
        name: "passwordconfirm",
        ref: this.passwordConfirmInput,
        placeholder: {
          id: (0,i18n.t)('claim.ldap_to_email.confirm'),
          defaultMessage: 'Confirm Password'
        },
        spellCheck: "false"
      })), confirmError, /*#__PURE__*/react.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "claim.ldap_to_email.switchTo",
        defaultMessage: "Switch account to email/password"
      })), serverError));
    }

    return /*#__PURE__*/react.createElement("div", null, content);
  }

}

ldap_to_email_defineProperty(LDAPToEmail, "propTypes", {
  email: (prop_types_default()).string,
  passwordConfig: (prop_types_default()).object,
  switchLdapToEmail: (prop_types_default()).func.isRequired
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(73210);
;// CONCATENATED MODULE: ./components/claim/components/email_to_ldap.jsx


function email_to_ldap_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class EmailToLDAP extends react.PureComponent {
  constructor(props) {
    super(props);

    email_to_ldap_defineProperty(this, "preSubmit", e => {
      e.preventDefault();
      var state = {
        passwordError: '',
        ldapError: '',
        ldapPasswordError: '',
        serverError: ''
      };
      const password = this.emailPasswordInput.current && this.emailPasswordInput.current.value;

      if (!password) {
        state.passwordError = utils/* localizeMessage */._u('claim.email_to_ldap.pwdError', 'Please enter your password.');
        this.setState(state);
        return;
      }

      const ldapId = this.ldapIdInput.current && this.ldapIdInput.current.value.trim();

      if (!ldapId) {
        state.ldapError = utils/* localizeMessage */._u('claim.email_to_ldap.ldapIdError', 'Please enter your AD/LDAP ID.');
        this.setState(state);
        return;
      }

      const ldapPassword = this.ldapPasswordInput.current && this.ldapPasswordInput.current.value;

      if (!ldapPassword) {
        state.ldapPasswordError = utils/* localizeMessage */._u('claim.email_to_ldap.ldapPasswordError', 'Please enter your AD/LDAP password.');
        this.setState(state);
        return;
      }

      state.password = password;
      state.ldapId = ldapId;
      state.ldapPassword = ldapPassword;
      this.setState(state);
      this.submit(this.props.email, password, '', ldapId, ldapPassword);
    });

    email_to_ldap_defineProperty(this, "submit", (loginId, password, token, ldapId, ldapPassword) => {
      (0,admin_actions/* emailToLdap */.Is)(loginId, password, token, ldapId || this.state.ldapId, ldapPassword || this.state.ldapPassword, data => {
        if (data.follow_link) {
          window.location.href = data.follow_link;
        }
      }, err => {
        if (!this.state.showMfa && err.server_error_id === 'mfa.validate_token.authenticate.app_error') {
          this.setState({
            showMfa: true
          });
        } else {
          switch (err.id) {
            case 'ent.ldap.do_login.user_not_registered.app_error':
            case 'ent.ldap.do_login.user_filtered.app_error':
            case 'ent.ldap.do_login.matched_to_many_users.app_error':
              this.setState({
                ldapError: err.message,
                showMfa: false
              });
              break;

            case 'ent.ldap.do_login.invalid_password.app_error':
              this.setState({
                ldapPasswordError: err.message,
                showMfa: false
              });
              break;

            case 'api.user.check_user_password.invalid.app_error':
              this.setState({
                passwordError: err.message,
                showMfa: false
              });
              break;

            default:
              this.setState({
                serverError: err.message,
                showMfa: false
              });
          }
        }
      });
    });

    this.state = {
      passwordError: '',
      ldapError: '',
      ldapPasswordError: '',
      serverError: '',
      showMfa: false
    };
    this.emailPasswordInput = /*#__PURE__*/react.createRef();
    this.ldapIdInput = /*#__PURE__*/react.createRef();
    this.ldapPasswordInput = /*#__PURE__*/react.createRef();
  }

  render() {
    let serverError = null;
    let formClass = 'form-group';

    if (this.state.serverError) {
      serverError = /*#__PURE__*/react.createElement("div", {
        className: "form-group has-error"
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label"
      }, this.state.serverError));
      formClass += ' has-error';
    }

    let passwordError = null;
    let passwordClass = 'form-group';

    if (this.state.passwordError) {
      passwordError = /*#__PURE__*/react.createElement("div", {
        className: "form-group has-error"
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label"
      }, this.state.passwordError));
      passwordClass += ' has-error';
    }

    let ldapError = null;
    let ldapClass = 'form-group';

    if (this.state.ldapError) {
      ldapError = /*#__PURE__*/react.createElement("div", {
        className: "form-group has-error"
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label"
      }, this.state.ldapError));
      ldapClass += ' has-error';
    }

    let ldapPasswordError = null;
    let ldapPasswordClass = 'form-group';

    if (this.state.ldapPasswordError) {
      ldapPasswordError = /*#__PURE__*/react.createElement("div", {
        className: "form-group has-error"
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label"
      }, this.state.ldapPasswordError));
      ldapPasswordClass += ' has-error';
    }

    let loginPlaceholder;

    if (this.props.ldapLoginFieldName) {
      loginPlaceholder = this.props.ldapLoginFieldName;
    } else {
      loginPlaceholder = utils/* localizeMessage */._u('claim.email_to_ldap.ldapId', 'AD/LDAP ID');
    }

    let content;

    if (this.state.showMfa) {
      content = /*#__PURE__*/react.createElement(login_mfa/* default */.Z, {
        loginId: this.props.email,
        password: this.state.password,
        title: {
          id: (0,i18n.t)('claim.email_to_ldap.title'),
          defaultMessage: 'Switch Email/Password Account to AD/LDAP'
        },
        onSubmit: this.submit
      });
    } else {
      content = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "claim.email_to_ldap.title",
        defaultMessage: "Switch Email/Password Account to AD/LDAP"
      })), /*#__PURE__*/react.createElement("form", {
        onSubmit: this.preSubmit,
        className: formClass
      }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "claim.email_to_ldap.ssoType",
        defaultMessage: "Upon claiming your account, you will only be able to login with AD/LDAP"
      })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "claim.email_to_ldap.ssoNote",
        defaultMessage: "You must already have a valid AD/LDAP account"
      })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "claim.email_to_ldap.enterPwd",
        defaultMessage: "Enter the password for your {site} email account",
        values: {
          site: this.props.siteName
        }
      })), /*#__PURE__*/react.createElement("input", {
        type: "text",
        style: style.usernameInput,
        name: "fakeusernameremembered"
      }), /*#__PURE__*/react.createElement("div", {
        className: passwordClass
      }, /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
        type: "password",
        className: "form-control",
        name: "emailPassword",
        ref: this.emailPasswordInput,
        autoComplete: "off",
        placeholder: {
          id: (0,i18n.t)('claim.email_to_ldap.pwd'),
          defaultMessage: 'Password'
        },
        spellCheck: "false"
      })), passwordError, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "claim.email_to_ldap.enterLdapPwd",
        defaultMessage: "Enter the ID and password for your AD/LDAP account"
      })), /*#__PURE__*/react.createElement("div", {
        className: ldapClass
      }, /*#__PURE__*/react.createElement("input", {
        type: "text",
        className: "form-control",
        name: "ldapId",
        ref: this.ldapIdInput,
        autoComplete: "off",
        placeholder: loginPlaceholder,
        spellCheck: "false"
      })), ldapError, /*#__PURE__*/react.createElement("div", {
        className: ldapPasswordClass
      }, /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
        type: "password",
        className: "form-control",
        name: "ldapPassword",
        ref: this.ldapPasswordInput,
        autoComplete: "off",
        placeholder: {
          id: (0,i18n.t)('claim.email_to_ldap.ldapPwd'),
          defaultMessage: 'AD/LDAP Password'
        },
        spellCheck: "false"
      })), ldapPasswordError, /*#__PURE__*/react.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "claim.email_to_ldap.switchTo",
        defaultMessage: "Switch Account to AD/LDAP"
      })), serverError));
    }

    return /*#__PURE__*/react.createElement("div", null, content);
  }

}

email_to_ldap_defineProperty(EmailToLDAP, "propTypes", {
  email: (prop_types_default()).string,
  siteName: (prop_types_default()).string,
  ldapLoginFieldName: (prop_types_default()).string
});

const style = {
  usernameInput: {
    display: 'none'
  }
};
;// CONCATENATED MODULE: ./components/claim/claim_controller.tsx







function claim_controller_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class ClaimController extends react.PureComponent {
  render() {
    const email = new URLSearchParams(this.props.location.search).get('email');
    const newType = new URLSearchParams(this.props.location.search).get('new_type');
    const currentType = new URLSearchParams(this.props.location.search).get('old_type');
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(back_button/* default */.Z, null), /*#__PURE__*/react.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/react.createElement("div", {
      className: "signup-team__container"
    }, /*#__PURE__*/react.createElement("img", {
      alt: 'signup logo',
      className: "signup-team-logo",
      src: logo/* default */.Z
    }), /*#__PURE__*/react.createElement("div", {
      id: "claim"
    }, /*#__PURE__*/react.createElement(react_router/* Switch */.rs, null, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/oauth_to_email"),
      render: () => /*#__PURE__*/react.createElement(OAuthToEmail, {
        currentType: currentType,
        email: email,
        siteName: this.props.siteName,
        passwordConfig: this.props.passwordConfig
      })
    }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/email_to_oauth"),
      render: () => /*#__PURE__*/react.createElement(EmailToOAuth, {
        newType: newType,
        email: email,
        siteName: this.props.siteName
      })
    }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/ldap_to_email"),
      render: () => /*#__PURE__*/react.createElement(LDAPToEmail, {
        email: email,
        passwordConfig: this.props.passwordConfig,
        switchLdapToEmail: this.props.actions.switchLdapToEmail
      })
    }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/email_to_ldap"),
      render: () => /*#__PURE__*/react.createElement(EmailToLDAP, {
        email: email,
        siteName: this.props.siteName,
        ldapLoginFieldName: this.props.ldapLoginFieldName
      })
    }))))));
  }

}

claim_controller_defineProperty(ClaimController, "propTypes", {
  location: prop_types_default().shape({
    search: (prop_types_default()).string.isRequired
  }).isRequired,
  siteName: (prop_types_default()).string,
  ldapLoginFieldName: (prop_types_default()).string,
  passwordConfig: prop_types_default().shape({
    minimumLength: (prop_types_default()).number.isRequired,
    requireLowercase: (prop_types_default()).bool.isRequired,
    requireUppercase: (prop_types_default()).bool.isRequired,
    requireNumber: (prop_types_default()).bool.isRequired,
    requireSymbol: (prop_types_default()).bool.isRequired
  }),
  match: prop_types_default().shape({
    url: (prop_types_default()).string.isRequired
  }).isRequired,
  actions: prop_types_default().shape({
    switchLdapToEmail: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/claim/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const siteName = config.SiteName;
  const ldapLoginFieldName = config.LdapLoginFieldName;
  return {
    siteName,
    ldapLoginFieldName,
    passwordConfig: (0,utils/* getPasswordConfig */.lD)(config)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      switchLdapToEmail: users/* switchLdapToEmail */.jh
    }, dispatch)
  };
}

/* harmony default export */ const claim = ((0,es.connect)(mapStateToProps, mapDispatchToProps)(ClaimController));

/***/ }),

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

/***/ 71284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66788);

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




const Column = _ref => {
  let {
    title,
    message,
    SVGElement,
    extraContent,
    onEnterKeyDown
  } = _ref;

  const handleOnEnterKeyDown = e => {
    if (onEnterKeyDown && e.key === utils_constants__WEBPACK_IMPORTED_MODULE_1__/* ["default"].KeyCodes.ENTER[0] */ .ZP.KeyCodes.ENTER[0]) {
      onEnterKeyDown(e);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content-layout-column",
    onKeyDown: handleOnEnterKeyDown,
    tabIndex: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content-layout-column-svg"
  }, SVGElement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "content-layout-column-title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "content-layout-column-message"
  }, message), extraContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content-layout-column-extra-content"
  }, extraContent));
};

Column.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  message: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  SVGElement: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
  extraContent: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
  onEnterKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Column);

/***/ }),

/***/ 12477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ login_mfa)
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(15306);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(73210);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./components/header_footer_route/content_layouts/column.tsx
var column = __webpack_require__(71284);
// EXTERNAL MODULE: ./components/save_button.tsx
var save_button = __webpack_require__(58657);
// EXTERNAL MODULE: ./components/widgets/inputs/input/input.tsx
var input = __webpack_require__(96953);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(39714);
;// CONCATENATED MODULE: ./components/common/svg_images_components/shield_with_checkmark.tsx


// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


const Svg = props => {
  var _props$width, _props$height;

  return /*#__PURE__*/react.createElement("svg", {
    width: ((_props$width = props.width) === null || _props$width === void 0 ? void 0 : _props$width.toString()) || '102',
    height: ((_props$height = props.height) === null || _props$height === void 0 ? void 0 : _props$height.toString()) || '123',
    viewBox: "0 0 102 123",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M101.675 27.9958L99.2946 16.0841C98.9367 14.3239 97.8957 12.7705 96.3927 11.7537C85.2266 4.1723 70.423 0.223633 51.0193 0.223633C31.6156 0.223633 16.7987 4.17233 5.67264 11.7801C4.17376 12.8008 3.13398 14.3524 2.7708 16.1104L0.336967 27.9958C0.184635 28.743 0.245121 29.5171 0.511798 30.2325C0.778474 30.948 1.24096 31.5769 1.84808 32.0498C5.05752 34.5111 6.51514 37.7622 7.19714 41.8688C7.96339 46.1871 7.78096 50.6168 6.6622 54.8599C-3.27367 93.2541 13.4555 110.72 50.9524 122.777C88.3958 110.72 105.165 93.2541 95.2293 54.8599C94.1175 50.6158 93.9351 46.1876 94.6944 41.8688C95.4299 37.7622 96.8875 34.5111 100.043 32.0498C100.675 31.593 101.162 30.9705 101.451 30.2536C101.74 29.5366 101.817 28.7542 101.675 27.9958Z",
    fill: "#CC8F00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M51.019 113.063C16.9455 101.507 8.05264 87.1071 15.8088 57.1236C17.2606 51.6118 17.4932 45.8575 16.4908 40.2496C15.7615 35.2997 13.534 30.681 10.0986 26.9954L11.7568 18.8348C21.4921 12.4906 34.3433 9.41064 51.019 9.41064C67.6947 9.41064 80.5324 12.4906 90.2677 18.8348L91.9259 26.9954C88.4947 30.6822 86.2718 35.301 85.5471 40.2496C84.5448 45.8575 84.7773 51.6118 86.2291 57.1236C93.9451 87.0939 85.0925 101.572 51.019 113.063Z",
    fill: "var(--away-indicator)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M51.019 113.063C16.9455 101.507 8.05264 87.1071 15.8088 57.1236C17.2606 51.6118 17.4932 45.8575 16.4908 40.2496C15.7615 35.2997 13.534 30.681 10.0986 26.9954L11.7568 18.8348C21.4921 12.4906 34.3433 9.41064 51.019 9.41064C67.6947 9.41064 80.5324 12.4906 90.2677 18.8348L91.9259 26.9954C88.4947 30.6822 86.2718 35.301 85.5471 40.2496C84.5448 45.8575 84.7773 51.6118 86.2291 57.1236C93.9451 87.0939 85.0925 101.572 51.019 113.063Z",
    fill: "var(--away-indicator)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M51.019 52.4511V9.43701C34.3433 9.43701 21.4921 12.5169 11.7568 18.8611L10.0986 27.0217C13.534 30.7073 15.7615 35.3261 16.4908 40.276C17.2085 44.307 17.2852 48.4233 16.7181 52.4774L51.019 52.4511Z",
    fill: "var(--away-indicator)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M51.0195 113.063C85.093 101.573 93.9457 87.0941 86.2297 57.1237C85.8321 55.5847 85.5241 54.0247 85.3069 52.4512H51.0195V113.063Z",
    fill: "var(--away-indicator)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M15.809 57.1237C8.05289 87.1072 16.9457 101.507 51.0192 113.063V52.4512H16.7184C16.5058 54.0245 16.2022 55.5845 15.809 57.1237Z",
    fill: "#FFD470"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M51.0195 9.43701V52.4774H85.3069C84.7377 48.423 84.8189 44.3057 85.5476 40.276C86.2723 35.3274 88.4952 30.7085 91.9264 27.0217L90.2682 18.8611C80.5731 12.4906 67.6819 9.43701 51.0195 9.43701Z",
    fill: "#FFD470"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M71.0644 38.9336L43.4633 68.8118L35.4531 62.8361H31L43.4633 82.7505L75.5175 38.9336H71.0644Z",
    fill: "#6F370B"
  }));
};

Svg.propTypes = {
  width: (prop_types_default()).number,
  height: (prop_types_default()).number
};
/* harmony default export */ const shield_with_checkmark = (Svg);
;// CONCATENATED MODULE: ./components/login/login_mfa.tsx





// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








const LoginMfa = _ref => {
  let {
    loginId,
    password,
    title,
    subtitle,
    onSubmit
  } = _ref;
  const {
    formatMessage
  } = (0,useIntl/* default */.Z)();
  const [token, setToken] = (0,react.useState)('');
  const [saving, setSaving] = (0,react.useState)(false);

  const handleInputOnChange = _ref2 => {
    let {
      target: {
        value: token
      }
    } = _ref2;
    setToken(token.trim().replace(/\s/g, ''));
  };

  const handleSaveButtonOnClick = e => {
    e.preventDefault();

    if (!saving) {
      setSaving(true);
      onSubmit(loginId, password, token);
    }
  };

  const onEnterKeyDown = e => {
    if (token) {
      handleSaveButtonOnClick(e);
    }
  };

  return /*#__PURE__*/react.createElement(column/* default */.Z, {
    title: formatMessage(title || {
      id: 'login_mfa.title',
      defaultMessage: 'Enter MFA Token'
    }),
    message: formatMessage(subtitle || {
      id: 'login_mfa.subtitle',
      defaultMessage: 'To complete the sign in process, please enter a token from your smartphone\'s authenticator'
    }),
    SVGElement: /*#__PURE__*/react.createElement(shield_with_checkmark, null),
    extraContent: /*#__PURE__*/react.createElement("div", {
      className: "login-mfa-form"
    }, /*#__PURE__*/react.createElement(input/* default */.Z, {
      name: "token",
      containerClassName: "login-mfa-form-input",
      type: "text",
      inputSize: input/* SIZE.LARGE */.N.LARGE,
      value: token,
      onChange: handleInputOnChange,
      placeholder: formatMessage({
        id: 'login_mfa.token',
        defaultMessage: 'Enter MFA Token'
      }),
      autoFocus: true,
      disabled: saving
    }), /*#__PURE__*/react.createElement("div", {
      className: "login-mfa-form-button-container"
    }, /*#__PURE__*/react.createElement(save_button/* default */.Z, {
      extraClasses: "login-mfa-form-button-submit large",
      saving: saving,
      disabled: !token,
      onClick: handleSaveButtonOnClick,
      defaultMessage: formatMessage({
        id: 'login_mfa.submit',
        defaultMessage: 'Submit'
      }),
      savingMessage: formatMessage({
        id: 'login_mfa.saving',
        defaultMessage: 'Logging in…'
      })
    }))),
    onEnterKeyDown: onEnterKeyDown
  });
};

LoginMfa.propTypes = {
  loginId: (prop_types_default()).string.isRequired,
  password: (prop_types_default()).string.isRequired,
  onSubmit: (prop_types_default()).func.isRequired
};
/* harmony default export */ const login_mfa = (LoginMfa);

/***/ }),

/***/ 16406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "files/ab8aa80cba445eb0fb75e6611c292567.png");

/***/ })

}]);
//# sourceMappingURL=120.ba123c6526ba1ab79bb9.js.map