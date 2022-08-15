"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[679],{

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

/***/ 95679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ password_reset_send_link)
});

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 1 modules
var redux = __webpack_require__(97779);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/users.ts
var users = __webpack_require__(33383);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(88674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(73210);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/utils/helpers.ts
var helpers = __webpack_require__(16794);
// EXTERNAL MODULE: ./components/common/back_button.tsx
var back_button = __webpack_require__(96512);
// EXTERNAL MODULE: ./components/localized_input/localized_input.tsx
var localized_input = __webpack_require__(927);
// EXTERNAL MODULE: ./utils/i18n.tsx
var i18n = __webpack_require__(87993);
;// CONCATENATED MODULE: ./components/password_reset_send_link/password_reset_send_link.tsx





function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class PasswordResetSendLink extends react.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      error: null,
      updateText: null
    });

    _defineProperty(this, "resetForm", /*#__PURE__*/react.createRef());

    _defineProperty(this, "emailInput", /*#__PURE__*/react.createRef());

    _defineProperty(this, "handleSendLink", async e => {
      e.preventDefault();
      const email = this.emailInput.current.value.trim().toLowerCase();

      if (!email || !(0,helpers/* isEmail */.Jh)(email)) {
        this.setState({
          error: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "password_send.error",
            defaultMessage: "Please enter a valid email address."
          })
        });
        return;
      } // End of error checking clear error


      this.setState({
        error: null
      });
      const {
        data,
        error
      } = await this.props.actions.sendPasswordResetEmail(email);

      if (data) {
        this.setState({
          error: null,
          updateText: /*#__PURE__*/react.createElement("div", {
            id: "passwordResetEmailSent",
            className: "reset-form alert alert-success"
          }, /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "password_send.link",
            defaultMessage: "If the account exists, a password reset email will be sent to:"
          }), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("b", null, email)), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "password_send.checkInbox",
            defaultMessage: "Please check your inbox."
          }))
        });

        if (this.resetForm.current) {
          this.resetForm.current.hidden = true;
        }
      } else if (error) {
        this.setState({
          error: error.message,
          updateText: null
        });
      }
    });
  }

  render() {
    let error = null;

    if (this.state.error) {
      error = /*#__PURE__*/react.createElement("div", {
        className: "form-group has-error"
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label"
      }, this.state.error));
    }

    let formClass = 'form-group';

    if (error) {
      formClass += ' has-error';
    }

    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(back_button/* default */.Z, null), /*#__PURE__*/react.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/react.createElement("div", {
      className: "signup-team__container"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "password_send.title",
      tagName: "h1",
      defaultMessage: "Password Reset"
    }), this.state.updateText, /*#__PURE__*/react.createElement("form", {
      onSubmit: this.handleSendLink,
      ref: this.resetForm
    }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "password_send.description",
      defaultMessage: "To reset your password, enter the email address you used to sign up"
    })), /*#__PURE__*/react.createElement("div", {
      className: formClass
    }, /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
      id: "passwordResetEmailInput",
      type: "email",
      className: "form-control",
      name: "email",
      placeholder: {
        id: (0,i18n.t)('password_send.email'),
        defaultMessage: 'Email'
      },
      ref: this.emailInput,
      spellCheck: "false",
      autoFocus: true
    })), error, /*#__PURE__*/react.createElement("button", {
      id: "passwordResetButton",
      type: "submit",
      className: "btn btn-primary"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "password_send.reset",
      defaultMessage: "Reset my password"
    }))))));
  }

}

_defineProperty(PasswordResetSendLink, "propTypes", {
  actions: prop_types_default().shape({
    sendPasswordResetEmail: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/password_reset_send_link/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const mapDispatchToProps = dispatch => ({
  actions: (0,redux.bindActionCreators)({
    sendPasswordResetEmail: users/* sendPasswordResetEmail */.LS
  }, dispatch)
});

/* harmony default export */ const password_reset_send_link = ((0,es.connect)(null, mapDispatchToProps)(PasswordResetSendLink));

/***/ })

}]);
//# sourceMappingURL=679.308d9f1144c8b22e4d05.js.map