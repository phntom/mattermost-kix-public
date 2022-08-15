"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[665],{

/***/ 63470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QI": () => (/* binding */ activateMfa),
/* harmony export */   "sk": () => (/* binding */ deactivateMfa),
/* harmony export */   "lg": () => (/* binding */ generateMfaSecret)
/* harmony export */ });
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33383);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12707);
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


function activateMfa(code) {
  return (dispatch, getState) => {
    const currentUserId = (0,mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__/* .getCurrentUserId */ .rc)(getState());
    return dispatch(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__/* .updateUserMfa */ .zP(currentUserId, true, code));
  };
}
function deactivateMfa() {
  return (dispatch, getState) => {
    const currentUserId = (0,mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__/* .getCurrentUserId */ .rc)(getState());
    return dispatch(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__/* .updateUserMfa */ .zP(currentUserId, false));
  };
}
function generateMfaSecret() {
  return (dispatch, getState) => {
    const currentUserId = (0,mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__/* .getCurrentUserId */ .rc)(getState());
    return dispatch(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__/* .generateMfaSecret */ .lg(currentUserId));
  };
}

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

/***/ 17665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mfa_controller)
});

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/general.ts
var general = __webpack_require__(22742);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(19601);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./actions/global_actions.tsx + 1 modules
var global_actions = __webpack_require__(34288);
// EXTERNAL MODULE: ./images/logo.png
var logo = __webpack_require__(16406);
// EXTERNAL MODULE: ./components/common/back_button.tsx
var back_button = __webpack_require__(96512);
// EXTERNAL MODULE: ./components/widgets/icons/fa_logout_icon.tsx
var fa_logout_icon = __webpack_require__(73406);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 1 modules
var redux = __webpack_require__(97779);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/users.ts
var users = __webpack_require__(12707);
// EXTERNAL MODULE: ./actions/views/mfa.js
var mfa = __webpack_require__(63470);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(15306);
// EXTERNAL MODULE: ./utils/utils.tsx + 25 modules
var utils = __webpack_require__(15883);
// EXTERNAL MODULE: ./utils/i18n.tsx
var i18n = __webpack_require__(87993);
// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(45288);
// EXTERNAL MODULE: ./components/localized_input/localized_input.tsx
var localized_input = __webpack_require__(927);
;// CONCATENATED MODULE: ./components/mfa/setup/setup.tsx




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class Setup extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "input", void 0);

    _defineProperty(this, "submit", e => {
      var _this$input, _this$input$current;

      e.preventDefault();
      const code = (_this$input = this.input) === null || _this$input === void 0 ? void 0 : (_this$input$current = _this$input.current) === null || _this$input$current === void 0 ? void 0 : _this$input$current.value.replace(/\s/g, '');

      if (!code || code.length === 0) {
        this.setState({
          error: utils/* localizeMessage */._u('mfa.setup.codeError', 'Please enter the code from Google Authenticator.')
        });
        return;
      }

      this.setState({
        error: null
      });
      this.props.actions.activateMfa(code).then(_ref => {
        let {
          error
        } = _ref;

        if (error) {
          if (error.server_error_id === 'ent.mfa.activate.authenticate.app_error') {
            this.setState({
              error: utils/* localizeMessage */._u('mfa.setup.badCode', 'Invalid code. If this issue persists, contact your System Administrator.')
            });
          } else {
            this.setState({
              error: error.message
            });
          }

          return;
        }

        this.props.history.push('/mfa/confirm');
      });
    });

    this.state = {
      secret: '',
      qrCode: ''
    };
    this.input = /*#__PURE__*/react.createRef();
  }

  componentDidMount() {
    const user = this.props.currentUser;

    if (!user || user.mfa_active) {
      this.props.history.push('/');
      return;
    }

    this.props.actions.generateMfaSecret().then(_ref2 => {
      let {
        data,
        error
      } = _ref2;

      if (error) {
        this.setState({
          serverError: error.message
        });
        return;
      }

      this.setState({
        secret: data.secret,
        qrCode: data.qr_code
      });
    });
  }

  render() {
    let formClass = 'form-group';
    let errorContent;

    if (this.state.error) {
      errorContent = /*#__PURE__*/react.createElement("div", {
        className: "form-group has-error"
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label"
      }, this.state.error));
      formClass += ' has-error';
    }

    let mfaRequired;

    if (this.props.enforceMultifactorAuthentication) {
      mfaRequired = /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "mfa.setup.required",
        defaultMessage: "**Multi-factor authentication is required on {siteName}.**",
        values: {
          siteName: this.props.siteName
        }
      }));
    }

    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("form", {
      onSubmit: this.submit,
      className: formClass
    }, mfaRequired, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
      id: "mfa.setup.step1",
      defaultMessage: "**Step 1: **On your phone, download Google Authenticator from [iTunes](!https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8') or [Google Play](!https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en)"
    })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
      id: "mfa.setup.step2",
      defaultMessage: "**Step 2: **Use Google Authenticator to scan this QR code, or manually type in the secret key"
    })), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/react.createElement("img", {
      alt: 'qr code image',
      style: style.qrCode,
      src: 'data:image/png;base64,' + this.state.qrCode
    }))), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("p", {
      className: "col-sm-12"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "mfa.setup.secret",
      defaultMessage: "Secret: {secret}",
      values: {
        secret: this.state.secret
      }
    }))), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
      id: "mfa.setup.step3",
      defaultMessage: "**Step 3: **Enter the code generated by Google Authenticator"
    })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
      ref: this.input,
      className: "form-control",
      placeholder: {
        id: (0,i18n.t)('mfa.setup.code'),
        defaultMessage: 'MFA Code'
      },
      autoFocus: true
    })), errorContent, /*#__PURE__*/react.createElement("button", {
      type: "submit",
      className: "btn btn-primary"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "mfa.setup.save",
      defaultMessage: "Save"
    }))));
  }

}

_defineProperty(Setup, "propTypes", {
  state: prop_types_default().shape({
    enforceMultifactorAuthentication: (prop_types_default()).bool.isRequired
  }).isRequired,
  updateParent: (prop_types_default()).func.isRequired,
  siteName: (prop_types_default()).string,
  enforceMultifactorAuthentication: (prop_types_default()).bool.isRequired,
  actions: prop_types_default().shape({
    activateMfa: (prop_types_default()).func.isRequired,
    generateMfaSecret: (prop_types_default()).func.isRequired
  }).isRequired,
  history: prop_types_default().shape({}).isRequired
});

const style = {
  qrCode: {
    maxHeight: 170
  }
};
;// CONCATENATED MODULE: ./components/mfa/setup/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const siteName = config.SiteName;
  const enforceMultifactorAuthentication = config.EnforceMultifactorAuthentication === 'true';
  return {
    currentUser: (0,users/* getCurrentUser */.ts)(state),
    siteName,
    enforceMultifactorAuthentication
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      activateMfa: mfa/* activateMfa */.QI,
      generateMfaSecret: mfa/* generateMfaSecret */.lg
    }, dispatch)
  };
}

/* harmony default export */ const setup = ((0,es.connect)(mapStateToProps, mapDispatchToProps)(Setup));
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./utils/constants.tsx + 19 modules
var constants = __webpack_require__(66788);
;// CONCATENATED MODULE: ./components/mfa/confirm.tsx



function confirm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const KeyCodes = constants/* default.KeyCodes */.ZP.KeyCodes;
class Confirm extends react.PureComponent {
  constructor() {
    super(...arguments);

    confirm_defineProperty(this, "submit", e => {
      e.preventDefault();
      (0,global_actions/* redirectUserToDefaultTeam */.mc)();
    });

    confirm_defineProperty(this, "onKeyPress", e => {
      if ((0,utils/* isKeyPressed */.pD)(e, KeyCodes.ENTER)) {
        this.submit(e);
      }
    });
  }

  componentDidMount() {
    document.body.addEventListener('keydown', this.onKeyPress);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.onKeyPress);
  }

  render() {
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("form", {
      onSubmit: this.submit,
      onKeyPress: this.onKeyPress,
      className: "form-group"
    }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
      id: "mfa.confirm.complete",
      defaultMessage: "**Set up complete!**"
    })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "mfa.confirm.secure",
      defaultMessage: "Your account is now secure. Next time you sign in, you will be asked to enter a code from the Google Authenticator app on your phone."
    })), /*#__PURE__*/react.createElement("button", {
      type: "submit",
      className: "btn btn-primary"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "mfa.confirm.okay",
      defaultMessage: "Okay"
    }))));
  }

}

confirm_defineProperty(Confirm, "propTypes", {
  state: prop_types_default().shape({
    enforceMultifactorAuthentication: (prop_types_default()).bool.isRequired
  }).isRequired,
  updateParent: (prop_types_default()).func.isRequired
});
;// CONCATENATED MODULE: ./components/mfa/mfa_controller/mfa_controller.tsx





function mfa_controller_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









class MFAController extends react.PureComponent {
  constructor(props) {
    super(props);

    mfa_controller_defineProperty(this, "handleOnClick", e => {
      e.preventDefault();
      (0,global_actions/* emitUserLoggedOutEvent */.gc)('/login');
    });

    mfa_controller_defineProperty(this, "updateParent", state => {
      this.setState(state);
    });

    this.state = {
      enforceMultifactorAuthentication: props.enableMultifactorAuthentication
    };
  }

  componentDidMount() {
    document.body.classList.add('sticky');
    document.getElementById('root').classList.add('container-fluid');

    if (!this.props.enableMultifactorAuthentication) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('sticky');
    document.getElementById('root').classList.remove('container-fluid');
  }

  render() {
    let backButton;

    if (this.props.mfa && this.props.enforceMultifactorAuthentication) {
      backButton = /*#__PURE__*/react.createElement("div", {
        className: "signup-header"
      }, /*#__PURE__*/react.createElement("button", {
        className: "style--none color--link",
        onClick: this.handleOnClick
      }, /*#__PURE__*/react.createElement(fa_logout_icon/* default */.Z, null), /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "web.header.logout",
        defaultMessage: "Logout"
      })));
    } else {
      backButton = /*#__PURE__*/react.createElement(back_button/* default */.Z, null);
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "inner-wrap"
    }, /*#__PURE__*/react.createElement("div", {
      className: "row content"
    }, /*#__PURE__*/react.createElement("div", null, backButton, /*#__PURE__*/react.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/react.createElement("div", {
      className: "signup-team__container"
    }, /*#__PURE__*/react.createElement("h3", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "mfa.setupTitle",
      defaultMessage: "Multi-factor Authentication Setup"
    })), /*#__PURE__*/react.createElement("img", {
      alt: 'signup team logo',
      className: "signup-team-logo",
      src: logo/* default */.Z
    }), /*#__PURE__*/react.createElement("div", {
      id: "mfa"
    }, /*#__PURE__*/react.createElement(react_router/* Switch */.rs, null, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/setup"),
      render: props => /*#__PURE__*/react.createElement(setup, Object.assign({
        state: this.state,
        updateParent: this.updateParent
      }, props))
    }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/confirm"),
      render: props => /*#__PURE__*/react.createElement(Confirm, Object.assign({
        state: this.state,
        updateParent: this.updateParent
      }, props))
    }))))))));
  }

}

mfa_controller_defineProperty(MFAController, "propTypes", {
  location: prop_types_default().shape({
    search: (prop_types_default()).string.isRequired
  }).isRequired,
  children: (prop_types_default()).node,
  mfa: (prop_types_default()).bool.isRequired,
  enableMultifactorAuthentication: (prop_types_default()).bool.isRequired,
  enforceMultifactorAuthentication: (prop_types_default()).bool.isRequired,
  match: prop_types_default().shape({
    url: (prop_types_default()).string.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/mfa/mfa_controller/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function mfa_controller_mapStateToProps(state) {
  const license = (0,general/* getLicense */.lJ)(state);
  const config = (0,general/* getConfig */.iE)(state);
  const mfa = license.MFA === 'true';
  const enableMultifactorAuthentication = config.EnableMultifactorAuthentication === 'true';
  const enforceMultifactorAuthentication = config.EnforceMultifactorAuthentication === 'true';
  return {
    mfa,
    enableMultifactorAuthentication,
    enforceMultifactorAuthentication
  };
}

/* harmony default export */ const mfa_controller = ((0,es.connect)(mfa_controller_mapStateToProps)(MFAController));

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

/***/ 16406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "files/ab8aa80cba445eb0fb75e6611c292567.png");

/***/ })

}]);
//# sourceMappingURL=665.3792a7ecfc77cffd89fc.js.map