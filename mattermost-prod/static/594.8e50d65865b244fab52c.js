"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[594],{

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

/***/ 78453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19601);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var components_common_hooks_useGetUsageDeltas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22826);

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



function withUseGetUsageDelta(WrappedComponent) {
  return props => {
    const usageDeltas = (0,components_common_hooks_useGetUsageDeltas__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(WrappedComponent, Object.assign({
      usageDeltas: usageDeltas
    }, props));
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withUseGetUsageDelta);

/***/ }),

/***/ 37635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SiteNameAndDescription)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44012);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


class SiteNameAndDescription extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      customDescriptionText,
      siteName
    } = this.props;
    let description = null;

    if (customDescriptionText) {
      description = customDescriptionText;
    } else {
      description = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        id: "web.root.signup_info",
        defaultMessage: "All team communication in one place, searchable and accessible anywhere"
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
      id: "site_name"
    }, siteName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
      id: "site_description",
      className: "color--light"
    }, description));
  }

}

_defineProperty(SiteNameAndDescription, "propTypes", {
  customDescriptionText: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  siteName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
});

_defineProperty(SiteNameAndDescription, "defaultProps", {
  siteName: 'Mattermost'
});

/***/ }),

/***/ 11594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create_team)
});

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 1 modules
var redux = __webpack_require__(97779);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/general.ts
var general = __webpack_require__(22742);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/channels.ts
var channels = __webpack_require__(9276);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/teams.ts
var teams = __webpack_require__(5596);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/cloud.ts
var cloud = __webpack_require__(6498);
// EXTERNAL MODULE: ./components/common/hocs/cloud/with_use_get_usage_deltas.tsx
var with_use_get_usage_deltas = __webpack_require__(78453);
// EXTERNAL MODULE: ./utils/license_utils.jsx
var license_utils = __webpack_require__(46195);
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
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./components/announcement_bar/index.ts + 23 modules
var announcement_bar = __webpack_require__(13301);
// EXTERNAL MODULE: ./components/common/back_button.tsx
var back_button = __webpack_require__(96512);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(73210);
// EXTERNAL MODULE: ./actions/telemetry_actions.jsx
var telemetry_actions = __webpack_require__(59925);
// EXTERNAL MODULE: ./utils/constants.tsx + 19 modules
var constants = __webpack_require__(66788);
// EXTERNAL MODULE: ./utils/url.tsx + 1 modules
var url = __webpack_require__(12266);
// EXTERNAL MODULE: ./images/logo.png
var logo = __webpack_require__(16406);
// EXTERNAL MODULE: ./components/widgets/icons/fa_next_icon.tsx
var fa_next_icon = __webpack_require__(86040);
;// CONCATENATED MODULE: ./components/create_team/components/display_name.tsx



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable react/no-string-refs */







class TeamSignupDisplayNamePage extends react.PureComponent {
  constructor(props) {
    var _this$props$state$tea;

    super(props);

    _defineProperty(this, "submitNext", e => {
      e.preventDefault();
      (0,telemetry_actions/* trackEvent */.L9)('display_name', 'click_next');
      const displayName = this.state.teamDisplayName.trim();

      if (!displayName) {
        this.setState({
          nameError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "create_team.display_name.required",
            defaultMessage: "This field is required"
          })
        });
        return;
      } else if (displayName.length < constants/* default.MIN_TEAMNAME_LENGTH */.ZP.MIN_TEAMNAME_LENGTH || displayName.length > constants/* default.MAX_TEAMNAME_LENGTH */.ZP.MAX_TEAMNAME_LENGTH) {
        this.setState({
          nameError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "create_team.display_name.charLength",
            defaultMessage: "Name must be {min} or more characters up to a maximum of {max}. You can add a longer team description later.",
            values: {
              min: constants/* default.MIN_TEAMNAME_LENGTH */.ZP.MIN_TEAMNAME_LENGTH,
              max: constants/* default.MAX_TEAMNAME_LENGTH */.ZP.MAX_TEAMNAME_LENGTH
            }
          })
        });
        return;
      }

      const newState = this.props.state;
      newState.wizard = 'team_url';
      newState.team.display_name = displayName;
      newState.team.name = (0,url/* cleanUpUrlable */.oK)(displayName);
      this.props.updateParent(newState);
    });

    _defineProperty(this, "handleFocus", e => {
      e.preventDefault();
      e.currentTarget.select();
    });

    _defineProperty(this, "handleDisplayNameChange", e => {
      this.setState({
        teamDisplayName: e.target.value
      });
    });

    this.state = {
      teamDisplayName: ((_this$props$state$tea = this.props.state.team) === null || _this$props$state$tea === void 0 ? void 0 : _this$props$state$tea.display_name) || '' // eslint-disable-line camelcase

    };
  }

  componentDidMount() {
    (0,telemetry_actions/* trackEvent */.L9)('signup', 'signup_team_01_name');
  }

  render() {
    let nameError = null;
    let nameDivClass = 'form-group';

    if (this.state.nameError) {
      nameError = /*#__PURE__*/react.createElement("label", {
        className: "control-label"
      }, this.state.nameError);
      nameDivClass += ' has-error';
    }

    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("form", null, /*#__PURE__*/react.createElement("img", {
      alt: 'signup logo',
      className: "signup-team-logo",
      src: logo/* default */.Z
    }), /*#__PURE__*/react.createElement("h5", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "create_team.display_name.teamName",
      tagName: "strong",
      defaultMessage: "Team Name"
    })), /*#__PURE__*/react.createElement("div", {
      className: nameDivClass
    }, /*#__PURE__*/react.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react.createElement("div", {
      className: "col-sm-9"
    }, /*#__PURE__*/react.createElement("input", {
      id: "teamNameInput",
      type: "text",
      className: "form-control",
      placeholder: "",
      maxLength: 128,
      value: this.state.teamDisplayName,
      autoFocus: true,
      onFocus: this.handleFocus,
      onChange: this.handleDisplayNameChange,
      spellCheck: "false"
    }))), nameError), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "create_team.display_name.nameHelp",
      defaultMessage: "Name your team in any language. Your team name shows in menus and headings."
    })), /*#__PURE__*/react.createElement("button", {
      id: "teamNameNextButton",
      type: "submit",
      className: "btn btn-primary mt-8",
      onClick: this.submitNext
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "create_team.display_name.next",
      defaultMessage: "Next"
    }), /*#__PURE__*/react.createElement(fa_next_icon/* default */.Z, null))));
  }

}
/* eslint-disable react/no-string-refs */

_defineProperty(TeamSignupDisplayNamePage, "propTypes", {
  state: prop_types_default().shape({
    wizard: (prop_types_default()).string.isRequired
  }).isRequired,
  updateParent: (prop_types_default()).func.isRequired
});
// EXTERNAL MODULE: ./components/common/site_name_and_description.tsx
var site_name_and_description = __webpack_require__(37635);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/teams.ts
var actions_teams = __webpack_require__(92743);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(88674);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/Button.js
var Button = __webpack_require__(78318);
// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(45288);
// EXTERNAL MODULE: ./components/overlay_trigger.tsx
var overlay_trigger = __webpack_require__(15558);
// EXTERNAL MODULE: ./components/tooltip.tsx
var tooltip = __webpack_require__(89959);
;// CONCATENATED MODULE: ./components/create_team/components/team_url/team_url.tsx





function team_url_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable react/no-string-refs */










class TeamUrl extends react.PureComponent {
  constructor(props) {
    var _props$state$team;

    super(props);

    team_url_defineProperty(this, "submitBack", e => {
      e.preventDefault();
      (0,telemetry_actions/* trackEvent */.L9)('signup', 'click_back');
      const newState = this.props.state;
      newState.wizard = 'display_name';
      this.props.updateParent(newState);
    });

    team_url_defineProperty(this, "submitNext", async e => {
      e.preventDefault();
      (0,telemetry_actions/* trackEvent */.L9)('signup', 'click_finish');
      const name = this.state.teamURL.trim();
      const cleanedName = url/* cleanUpUrlable */.oK(name);
      const urlRegex = /^[a-z]+([a-z\-0-9]+|(__)?)[a-z0-9]+$/g;
      const {
        actions: {
          checkIfTeamExists,
          createTeam
        }
      } = this.props;

      if (!name) {
        this.setState({
          nameError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "create_team.team_url.required",
            defaultMessage: "This field is required"
          })
        });
        return;
      }

      if (cleanedName.length < constants/* default.MIN_TEAMNAME_LENGTH */.ZP.MIN_TEAMNAME_LENGTH || cleanedName.length > constants/* default.MAX_TEAMNAME_LENGTH */.ZP.MAX_TEAMNAME_LENGTH) {
        this.setState({
          nameError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "create_team.team_url.charLength",
            defaultMessage: "Name must be {min} or more characters up to a maximum of {max}",
            values: {
              min: constants/* default.MIN_TEAMNAME_LENGTH */.ZP.MIN_TEAMNAME_LENGTH,
              max: constants/* default.MAX_TEAMNAME_LENGTH */.ZP.MAX_TEAMNAME_LENGTH
            }
          })
        });
        return;
      }

      if (cleanedName !== name || !urlRegex.test(name)) {
        this.setState({
          nameError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "create_team.team_url.regex",
            defaultMessage: "Use only lower case letters, numbers and dashes. Must start with a letter and can't end in a dash."
          })
        });
        return;
      }

      for (let index = 0; index < constants/* default.RESERVED_TEAM_NAMES.length */.ZP.RESERVED_TEAM_NAMES.length; index++) {
        if (cleanedName.indexOf(constants/* default.RESERVED_TEAM_NAMES */.ZP.RESERVED_TEAM_NAMES[index]) === 0) {
          this.setState({
            nameError: /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
              id: "create_team.team_url.taken",
              defaultMessage: "This URL [starts with a reserved word](!https://docs.mattermost.com/help/getting-started/creating-teams.html#team-url) or is unavailable. Please try another."
            })
          });
          return;
        }
      }

      this.setState({
        isLoading: true
      });
      const teamSignup = JSON.parse(JSON.stringify(this.props.state));
      teamSignup.team.type = 'O';
      teamSignup.team.name = name;
      const checkIfTeamExistsData = await checkIfTeamExists(name);
      const exists = checkIfTeamExistsData.exists;

      if (exists) {
        this.setState({
          nameError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "create_team.team_url.unavailable",
            defaultMessage: "This URL is taken or unavailable. Please try another."
          })
        });
        this.setState({
          isLoading: false
        });
        return;
      }

      const createTeamData = await createTeam(teamSignup.team);
      const data = createTeamData.data;
      const error = createTeamData.error;

      if (data) {
        this.props.history.push('/' + data.name + '/channels/' + constants/* default.DEFAULT_CHANNEL */.ZP.DEFAULT_CHANNEL);
        (0,telemetry_actions/* trackEvent */.L9)('signup', 'signup_team_03_complete');
      } else if (error) {
        this.setState({
          nameError: error.message
        });
        this.setState({
          isLoading: false
        });
      }
    });

    team_url_defineProperty(this, "handleFocus", e => {
      e.preventDefault();
      e.currentTarget.select();
    });

    team_url_defineProperty(this, "handleTeamURLInputChange", e => {
      this.setState({
        teamURL: e.target.value
      });
    });

    this.state = {
      nameError: '',
      isLoading: false,
      teamURL: (_props$state$team = props.state.team) === null || _props$state$team === void 0 ? void 0 : _props$state$team.name
    };
  }

  componentDidMount() {
    (0,telemetry_actions/* trackEvent */.L9)('signup', 'signup_team_02_url');
  }

  render() {
    let nameError = null;
    let nameDivClass = 'form-group';

    if (this.state.nameError) {
      nameError = /*#__PURE__*/react.createElement("label", {
        className: "control-label"
      }, this.state.nameError);
      nameDivClass += ' has-error';
    }

    const title = "".concat(url/* getSiteURL */.fO(), "/");
    const urlTooltip = /*#__PURE__*/react.createElement(tooltip/* default */.Z, {
      id: "urlTooltip"
    }, title);
    let finishMessage = /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "create_team.team_url.finish",
      defaultMessage: "Finish"
    });

    if (this.state.isLoading) {
      finishMessage = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "create_team.team_url.creatingTeam",
        defaultMessage: "Creating team..."
      });
    }

    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("form", null, /*#__PURE__*/react.createElement("img", {
      alt: 'signup team logo',
      className: "signup-team-logo",
      src: logo/* default */.Z
    }), /*#__PURE__*/react.createElement("h5", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "create_team.team_url.teamUrl",
      tagName: "strong",
      defaultMessage: "Team URL"
    })), /*#__PURE__*/react.createElement("div", {
      className: nameDivClass
    }, /*#__PURE__*/react.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react.createElement("div", {
      className: "col-sm-11"
    }, /*#__PURE__*/react.createElement("div", {
      className: "input-group input-group--limit"
    }, /*#__PURE__*/react.createElement(overlay_trigger/* default */.Z, {
      delayShow: constants/* default.OVERLAY_TIME_DELAY */.ZP.OVERLAY_TIME_DELAY,
      placement: "top",
      overlay: urlTooltip
    }, /*#__PURE__*/react.createElement("span", {
      className: "input-group-addon"
    }, title)), /*#__PURE__*/react.createElement("input", {
      id: "teamURLInput",
      type: "text",
      className: "form-control",
      placeholder: "",
      maxLength: 128,
      value: this.state.teamURL,
      autoFocus: true,
      onFocus: this.handleFocus,
      onChange: this.handleTeamURLInputChange,
      spellCheck: "false"
    })))), nameError), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "create_team.team_url.webAddress",
      defaultMessage: "Choose the web address of your new team:"
    })), /*#__PURE__*/react.createElement("ul", {
      className: "color--light"
    }, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "create_team.team_url.hint1",
      defaultMessage: "Short and memorable is best"
    })), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "create_team.team_url.hint2",
      defaultMessage: "Use lowercase letters, numbers and dashes"
    })), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "create_team.team_url.hint3",
      defaultMessage: "Must start with a letter and can't end in a dash"
    }))), /*#__PURE__*/react.createElement("div", {
      className: "mt-8"
    }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
      id: "teamURLFinishButton",
      type: "submit",
      bsStyle: "primary",
      disabled: this.state.isLoading,
      onClick: e => this.submitNext(e)
    }, finishMessage)), /*#__PURE__*/react.createElement("div", {
      className: "mt-8"
    }, /*#__PURE__*/react.createElement("a", {
      href: "#",
      onClick: this.submitBack
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "create_team.team_url.back",
      defaultMessage: "Back to previous step"
    })))));
  }

}
/* eslint-enable react/no-string-refs */

team_url_defineProperty(TeamUrl, "propTypes", {
  state: prop_types_default().shape({
    wizard: (prop_types_default()).string.isRequired
  }).isRequired,
  updateParent: (prop_types_default()).func.isRequired,
  actions: prop_types_default().shape({
    checkIfTeamExists: (prop_types_default()).func.isRequired,
    createTeam: (prop_types_default()).func.isRequired
  }).isRequired,
  history: prop_types_default().shape({}).isRequired
});
;// CONCATENATED MODULE: ./components/create_team/components/team_url/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      checkIfTeamExists: actions_teams/* checkIfTeamExists */.iw,
      createTeam: actions_teams/* createTeam */.Cm
    }, dispatch)
  };
}

/* harmony default export */ const team_url = ((0,es.connect)(null, mapDispatchToProps)(TeamUrl));
;// CONCATENATED MODULE: ./components/create_team/create_team.tsx





function create_team_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class CreateTeam extends react.PureComponent {
  constructor(props) {
    super(props);

    create_team_defineProperty(this, "updateParent", state => {
      this.setState(state);
      this.props.history.push('/create_team/' + state.wizard);
    });

    this.state = {
      team: {},
      wizard: 'display_name'
    };
  }

  render() {
    const {
      currentChannel,
      currentTeam,
      customDescriptionText,
      match,
      siteName,
      isCloud,
      isFreeTrial,
      usageDeltas: {
        teams: {
          active: usageDeltaTeams
        }
      }
    } = this.props;
    const teamsLimitReached = usageDeltaTeams >= 0;
    const createTeamRestricted = isCloud && !isFreeTrial && teamsLimitReached;
    let url = '/select_team';

    if (currentTeam) {
      url = "/".concat(currentTeam.name);

      if (currentChannel) {
        url += "/channels/".concat(currentChannel.name);
      }
    }

    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(announcement_bar/* default */.Z, null), /*#__PURE__*/react.createElement(back_button/* default */.Z, {
      url: url
    }), /*#__PURE__*/react.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/react.createElement("div", {
      className: "signup-team__container"
    }, /*#__PURE__*/react.createElement(site_name_and_description/* default */.Z, {
      customDescriptionText: customDescriptionText,
      siteName: siteName
    }), /*#__PURE__*/react.createElement("div", {
      className: "signup__content"
    }, createTeamRestricted ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h5", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "create_team.createTeamRestricted.title",
      tagName: "strong",
      defaultMessage: "Professional feature"
    })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "create_team.createTeamRestricted.message",
      defaultMessage: "Your workspace plan has reached the limit on the number of teams. Create unlimited teams with a free 30-day trial. Contact your System Administrator."
    }))) : /*#__PURE__*/react.createElement(react_router/* Switch */.rs, null, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/display_name"),
      render: props => /*#__PURE__*/react.createElement(TeamSignupDisplayNamePage, Object.assign({
        state: this.state,
        updateParent: this.updateParent
      }, props))
    }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: "".concat(this.props.match.url, "/team_url"),
      render: props => /*#__PURE__*/react.createElement(team_url, Object.assign({
        state: this.state,
        updateParent: this.updateParent
      }, props))
    }), /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
      to: "".concat(match.url, "/display_name")
    }))))));
  }

}

create_team_defineProperty(CreateTeam, "propTypes", {
  customDescriptionText: (prop_types_default()).string.isRequired,
  siteName: (prop_types_default()).string.isRequired,
  match: prop_types_default().shape({
    url: (prop_types_default()).string.isRequired
  }).isRequired,
  isCloud: (prop_types_default()).bool.isRequired,
  isFreeTrial: (prop_types_default()).bool.isRequired
});
;// CONCATENATED MODULE: ./components/create_team/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










function mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const currentChannel = (0,channels/* getCurrentChannel */.TB)(state);
  const currentTeam = (0,teams/* getCurrentTeam */.kA)(state);
  const customDescriptionText = config.CustomDescriptionText;
  const siteName = config.SiteName;
  const subscription = (0,cloud/* getCloudSubscription */.oR)(state);
  const license = (0,general/* getLicense */.lJ)(state);
  const isCloud = (0,license_utils/* isCloudLicense */.Ht)(license);
  const isFreeTrial = (subscription === null || subscription === void 0 ? void 0 : subscription.is_free_trial) === 'true';
  return {
    currentChannel,
    currentTeam,
    customDescriptionText,
    siteName,
    isCloud,
    isFreeTrial
  };
}

/* harmony default export */ const create_team = ((0,redux.compose)((0,es.connect)(mapStateToProps), with_use_get_usage_deltas/* default */.Z)(CreateTeam));

/***/ }),

/***/ 16406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "files/ab8aa80cba445eb0fb75e6611c292567.png");

/***/ })

}]);
//# sourceMappingURL=594.8e50d65865b244fab52c.js.map