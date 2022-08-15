"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[808],{

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

/***/ 4808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ select_team)
});

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 1 modules
var redux = __webpack_require__(97779);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/teams.ts
var teams = __webpack_require__(92743);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/roles.ts
var roles = __webpack_require__(74147);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/cloud.ts
var cloud = __webpack_require__(6498);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/general.ts
var general = __webpack_require__(22742);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/constants/index.ts + 10 modules
var constants = __webpack_require__(33407);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/roles.ts
var entities_roles = __webpack_require__(34111);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/teams.ts
var entities_teams = __webpack_require__(5596);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/users.ts
var users = __webpack_require__(12707);
// EXTERNAL MODULE: ./components/common/hocs/cloud/with_use_get_usage_deltas.tsx
var with_use_get_usage_deltas = __webpack_require__(78453);
// EXTERNAL MODULE: ./actions/team_actions.jsx
var team_actions = __webpack_require__(28823);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/utils/user_utils.ts
var user_utils = __webpack_require__(60690);
// EXTERNAL MODULE: ./utils/license_utils.jsx
var license_utils = __webpack_require__(46195);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(88674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(32023);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(23123);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./actions/global_actions.tsx + 1 modules
var global_actions = __webpack_require__(34288);
// EXTERNAL MODULE: ./actions/telemetry_actions.jsx
var telemetry_actions = __webpack_require__(59925);
// EXTERNAL MODULE: ./utils/user_agent.tsx
var user_agent = __webpack_require__(47470);
// EXTERNAL MODULE: ./utils/constants.tsx + 19 modules
var utils_constants = __webpack_require__(66788);
// EXTERNAL MODULE: ./images/logo.png
var logo = __webpack_require__(16406);
// EXTERNAL MODULE: ./components/announcement_bar/index.ts + 23 modules
var announcement_bar = __webpack_require__(13301);
// EXTERNAL MODULE: ./components/common/back_button.tsx
var back_button = __webpack_require__(96512);
// EXTERNAL MODULE: ./components/loading_screen.tsx
var loading_screen = __webpack_require__(19476);
// EXTERNAL MODULE: ./components/permissions_gates/system_permission_gate/index.ts + 1 modules
var system_permission_gate = __webpack_require__(36846);
// EXTERNAL MODULE: ./components/common/site_name_and_description.tsx
var site_name_and_description = __webpack_require__(37635);
// EXTERNAL MODULE: ./components/widgets/icons/fa_logout_icon.tsx
var fa_logout_icon = __webpack_require__(73406);
// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(45288);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
;// CONCATENATED MODULE: ./components/common/infinite_scroll.tsx



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



const SCROLL_BUFFER = 100;
const DEBOUNCE_WAIT_TIME = 200;
class InfiniteScroll extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "node", void 0);

    _defineProperty(this, "validateBuffer", buffer => {
      if (buffer < SCROLL_BUFFER) {
        return SCROLL_BUFFER;
      }

      return Math.abs(buffer);
    });

    _defineProperty(this, "getAmountOfPages", (total, freq) => {
      return Math.ceil(total / freq);
    });

    _defineProperty(this, "handleScroll", () => {
      const {
        isFetching,
        isEndofData
      } = this.state;
      const {
        callBack,
        bufferValue,
        totalItems,
        itemsPerPage,
        pageNumber
      } = this.props;
      const node = this.node.current;
      const validBuffer = this.validateBuffer(bufferValue);
      const toScroll = node.scrollHeight - node.clientHeight - validBuffer;
      const nearBottom = node.scrollTop > toScroll;

      if (nearBottom && !isEndofData && !isFetching) {
        this.setState({
          isFetching: true
        }, async () => {
          await callBack();
          this.setState({
            isFetching: false
          });

          if (totalItems === 0) {
            this.setState({
              isEndofData: true
            });
            return;
          }

          const amountOfPages = this.getAmountOfPages(totalItems, itemsPerPage);

          if (pageNumber === amountOfPages) {
            this.setState({
              isEndofData: true
            });
          }
        });
      }
    });

    _defineProperty(this, "debounceHandleScroll", debounce_default()(this.handleScroll, DEBOUNCE_WAIT_TIME));

    this.state = {
      isFetching: false,
      isEndofData: false
    };
    this.node = /*#__PURE__*/react.createRef();
  }

  componentDidMount() {
    var _this$node$current;

    (_this$node$current = this.node.current) === null || _this$node$current === void 0 ? void 0 : _this$node$current.addEventListener('scroll', this.debounceHandleScroll);
  }

  componentWillUnmount() {
    var _this$node$current2;

    (_this$node$current2 = this.node.current) === null || _this$node$current2 === void 0 ? void 0 : _this$node$current2.removeEventListener('scroll', this.debounceHandleScroll);
  }

  render() {
    const {
      children,
      endOfDataMessage,
      styleClass,
      loaderStyle
    } = this.props;
    const {
      isEndofData,
      isFetching
    } = this.state;
    const showLoader = !isEndofData && isFetching; // show loader if fetching and end of data is not reached.

    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
      className: "infinite-scroll ".concat(styleClass),
      ref: this.node
    }, children, showLoader && /*#__PURE__*/react.createElement(loading_screen/* default */.Z, {
      style: loaderStyle,
      message: " "
    }), !showLoader && endOfDataMessage));
  }

}

_defineProperty(InfiniteScroll, "propTypes", {
  children: (prop_types_default()).node.isRequired,
  callBack: (prop_types_default()).func.isRequired,
  endOfDataMessage: (prop_types_default()).string,
  styleClass: (prop_types_default()).string,
  bufferValue: (prop_types_default()).number,
  totalItems: (prop_types_default()).number.isRequired,
  itemsPerPage: (prop_types_default()).number.isRequired,
  pageNumber: (prop_types_default()).number.isRequired
});

_defineProperty(InfiniteScroll, "defaultProps", {
  bufferValue: SCROLL_BUFFER,
  endOfDataMessage: '',
  styleClass: '',
  loaderStyle: {}
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(41817);
// EXTERNAL MODULE: ./components/localized_icon.tsx
var localized_icon = __webpack_require__(68492);
// EXTERNAL MODULE: ./components/overlay_trigger.tsx
var overlay_trigger = __webpack_require__(15558);
// EXTERNAL MODULE: ./components/tooltip.tsx
var tooltip = __webpack_require__(89959);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
;// CONCATENATED MODULE: ./components/widgets/icons/team_info_icon.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


function TeamInfoIcon(props) {
  const {
    formatMessage
  } = (0,useIntl/* default */.Z)();
  return /*#__PURE__*/react.createElement("span", props, /*#__PURE__*/react.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 20 20",
    style: style,
    role: "img",
    "aria-label": formatMessage({
      id: 'generic_icons.info',
      defaultMessage: 'Info Icon'
    })
  }, /*#__PURE__*/react.createElement("g", {
    transform: "matrix(1.17647,0,0,1.17647,-1.55431e-15,-1.00573e-14)"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M8.5,0C3.797,0 0,3.797 0,8.5C0,13.203 3.797,17 8.5,17C13.203,17 17,13.203 17,8.5C17,3.797 13.203,0 8.5,0ZM10,8.5C10,7.672 9.328,7 8.5,7C7.672,7 7,7.672 7,8.5L7,12.45C7,13.278 7.672,13.95 8.5,13.95C9.328,13.95 10,13.278 10,12.45L10,8.5ZM8.5,3C9.328,3 10,3.672 10,4.5C10,5.328 9.328,6 8.5,6C7.672,6 7,5.328 7,4.5C7,3.672 7.672,3 8.5,3Z"
  }))));
}
const style = {
  fillRule: 'evenodd',
  clipRule: 'evenodd',
  strokeLinejoin: 'round',
  strokeMiterlimit: 1.41421
};
// EXTERNAL MODULE: ./utils/i18n.tsx
var i18n = __webpack_require__(87993);
// EXTERNAL MODULE: ./utils/utils.tsx + 25 modules
var utils = __webpack_require__(15883);
;// CONCATENATED MODULE: ./components/select_team/components/select_team_item.tsx




function select_team_item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







class SelectTeamItem extends react.PureComponent {
  constructor() {
    super(...arguments);

    select_team_item_defineProperty(this, "handleTeamClick", e => {
      e.preventDefault();
      this.props.onTeamClick(this.props.team);
    });

    select_team_item_defineProperty(this, "renderDescriptionTooltip", () => {
      const team = this.props.team;

      if (!team.description) {
        return null;
      }

      const descriptionTooltip = /*#__PURE__*/react.createElement(tooltip/* default */.Z, {
        id: "team-description__tooltip"
      }, team.description);
      return /*#__PURE__*/react.createElement(overlay_trigger/* default */.Z, {
        delayShow: 1000,
        placement: "top",
        overlay: descriptionTooltip,
        rootClose: true,
        container: this
      }, /*#__PURE__*/react.createElement(TeamInfoIcon, {
        className: "icon icon--info"
      }));
    });
  }

  render() {
    const {
      canJoinPublicTeams,
      canJoinPrivateTeams,
      loading,
      team
    } = this.props;
    let icon;

    if (loading) {
      icon = /*#__PURE__*/react.createElement(localized_icon/* default */.Z, {
        className: "fa fa-refresh fa-spin right signup-team__icon",
        component: "span",
        title: {
          id: (0,i18n.t)('generic_icons.loading'),
          defaultMessage: 'Loading Icon'
        }
      });
    } else {
      icon = /*#__PURE__*/react.createElement(localized_icon/* default */.Z, {
        className: "fa fa-angle-right right signup-team__icon",
        component: "span",
        title: {
          id: (0,i18n.t)('select_team.join.icon'),
          defaultMessage: 'Join Team Icon'
        }
      });
    }

    const canJoin = team.allow_open_invite && canJoinPublicTeams || !team.allow_open_invite && canJoinPrivateTeams;
    return /*#__PURE__*/react.createElement("div", {
      className: "signup-team-dir"
    }, this.renderDescriptionTooltip(), /*#__PURE__*/react.createElement("a", {
      href: "#",
      id: utils/* createSafeId */.x(team.display_name),
      onClick: canJoin ? this.handleTeamClick : undefined,
      className: canJoin ? '' : 'disabled'
    }, /*#__PURE__*/react.createElement("span", {
      className: "signup-team-dir__name"
    }, team.display_name), !team.allow_open_invite && /*#__PURE__*/react.createElement(localized_icon/* default */.Z, {
      className: "fa fa-lock light",
      title: {
        id: (0,i18n.t)('select_team.private.icon'),
        defaultMessage: 'Private team'
      }
    }), canJoin && icon));
  }

}

select_team_item_defineProperty(SelectTeamItem, "propTypes", {
  onTeamClick: (prop_types_default()).func.isRequired,
  loading: (prop_types_default()).bool.isRequired,
  canJoinPublicTeams: (prop_types_default()).bool.isRequired,
  canJoinPrivateTeams: (prop_types_default()).bool.isRequired
});
;// CONCATENATED MODULE: ./components/select_team/select_team.tsx






function select_team_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


















const TEAMS_PER_PAGE = 30;
const TEAM_MEMBERSHIP_DENIAL_ERROR_ID = 'api.team.add_members.user_denied';
class SelectTeam extends react.PureComponent {
  constructor(props) {
    super(props);

    select_team_defineProperty(this, "fetchMoreTeams", async () => {
      const {
        currentPage
      } = this.state;
      const {
        actions
      } = this.props;
      const response = await actions.getTeams(currentPage, TEAMS_PER_PAGE, true); // We don't want to increase the page number if no data came back previously

      if (!response.error && !(response.error instanceof Error)) {
        this.setState(prevState => ({
          currentPage: prevState.currentPage + 1
        }));
      }
    });

    select_team_defineProperty(this, "handleTeamClick", async team => {
      const {
        siteURL,
        currentUserRoles
      } = this.props;
      this.setState({
        loadingTeamId: team.id
      });
      const {
        data,
        error
      } = await this.props.actions.addUserToTeam(team.id, this.props.currentUserId);

      if (data && this.props.history !== undefined) {
        this.props.history.push("/".concat(team.name, "/channels/").concat(utils_constants/* default.DEFAULT_CHANNEL */.ZP.DEFAULT_CHANNEL));
      } else if (error) {
        let errorMsg = error.message;

        if (error.server_error_id === TEAM_MEMBERSHIP_DENIAL_ERROR_ID) {
          if (currentUserRoles !== undefined && currentUserRoles.includes(utils_constants/* default.PERMISSIONS_SYSTEM_ADMIN */.ZP.PERMISSIONS_SYSTEM_ADMIN)) {
            errorMsg = /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
              id: "join_team_group_constrained_denied_admin",
              defaultMessage: "You need to be a member of a linked group to join this team. You can add a group to this team [here](".concat(siteURL, "/admin_console/user_management/groups)."),
              values: {
                siteURL
              }
            });
          } else {
            errorMsg = /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
              id: "join_team_group_constrained_denied",
              defaultMessage: "You need to be a member of a linked group to join this team."
            });
          }
        }

        this.setState({
          error: errorMsg,
          loadingTeamId: ''
        });
      }
    });

    select_team_defineProperty(this, "handleLogoutClick", e => {
      e.preventDefault();
      (0,telemetry_actions/* trackEvent */.L9)('select_team', 'click_logout');
      (0,global_actions/* emitUserLoggedOutEvent */.gc)('/login');
    });

    select_team_defineProperty(this, "clearError", e => {
      e.preventDefault();
      this.setState({
        error: null
      });
    });

    this.state = {
      loadingTeamId: '',
      error: null,
      endofTeamsData: false,
      currentPage: 0,
      currentListableTeams: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.listableTeams.length !== state.currentListableTeams.length) {
      return {
        currentListableTeams: props.listableTeams.slice(0, TEAMS_PER_PAGE * state.currentPage)
      };
    }

    return null;
  }

  componentDidMount() {
    (0,telemetry_actions/* trackEvent */.L9)('signup', 'signup_select_team', {
      userId: this.props.currentUserId
    });
    this.fetchMoreTeams();

    if (this.props.currentUserRoles !== undefined) {
      this.props.actions.loadRolesIfNeeded(this.props.currentUserRoles.split(' '));
    }
  }

  render() {
    const {
      currentPage,
      currentListableTeams
    } = this.state;
    const {
      currentUserIsGuest,
      canManageSystem,
      customDescriptionText,
      isMemberOfTeam,
      siteName,
      canCreateTeams,
      canJoinPublicTeams,
      canJoinPrivateTeams,
      totalTeamsCount,
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
    let openContent;

    if (this.state.loadingTeamId) {
      openContent = /*#__PURE__*/react.createElement(loading_screen/* default */.Z, null);
    } else if (this.state.error) {
      openContent = /*#__PURE__*/react.createElement("div", {
        className: "signup__content"
      }, /*#__PURE__*/react.createElement("div", {
        className: 'form-group has-error'
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label"
      }, this.state.error)));
    } else if (currentUserIsGuest) {
      openContent = /*#__PURE__*/react.createElement("div", {
        className: "signup__content"
      }, /*#__PURE__*/react.createElement("div", {
        className: 'form-group has-error'
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "signup_team.guest_without_channels",
        defaultMessage: "Your guest account has no channels assigned. Please contact an administrator."
      }))));
    } else {
      let joinableTeamContents = [];
      currentListableTeams.forEach(listableTeam => {
        if (listableTeam.allow_open_invite && canJoinPublicTeams || !listableTeam.allow_open_invite && canJoinPrivateTeams) {
          joinableTeamContents.push( /*#__PURE__*/react.createElement(SelectTeamItem, {
            key: 'team_' + listableTeam.name,
            team: listableTeam,
            onTeamClick: this.handleTeamClick,
            loading: this.state.loadingTeamId === listableTeam.id,
            canJoinPublicTeams: canJoinPublicTeams,
            canJoinPrivateTeams: canJoinPrivateTeams
          }));
        }
      });

      if (joinableTeamContents.length === 0 && (canCreateTeams || canManageSystem)) {
        joinableTeamContents = /*#__PURE__*/react.createElement("div", {
          className: "signup-team-dir-err"
        }, /*#__PURE__*/react.createElement("div", null, createTeamRestricted ? /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "signup_team.no_open_teams",
          defaultMessage: "No teams are available to join. Please ask your administrator for an invite."
        }) : /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "signup_team.no_open_teams_canCreate",
          defaultMessage: "No teams are available to join. Please create a new team or ask your administrator for an invite."
        })));
      } else if (joinableTeamContents.length === 0) {
        joinableTeamContents = /*#__PURE__*/react.createElement("div", {
          className: "signup-team-dir-err"
        }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(system_permission_gate/* default */.Z, {
          permissions: [constants/* Permissions.CREATE_TEAM */.Pl.CREATE_TEAM]
        }, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "signup_team.no_open_teams_canCreate",
          defaultMessage: "No teams are available to join. Please create a new team or ask your administrator for an invite."
        })), /*#__PURE__*/react.createElement(system_permission_gate/* default */.Z, {
          permissions: [constants/* Permissions.CREATE_TEAM */.Pl.CREATE_TEAM],
          invert: true
        }, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "signup_team.no_open_teams",
          defaultMessage: "No teams are available to join. Please ask your administrator for an invite."
        }))));
      }

      openContent = /*#__PURE__*/react.createElement("div", {
        id: "teamsYouCanJoinContent",
        className: "signup__content"
      }, /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "signup_team.join_open",
        defaultMessage: "Teams you can join: "
      })), /*#__PURE__*/react.createElement(InfiniteScroll, {
        callBack: this.fetchMoreTeams,
        styleClass: "signup-team-all",
        totalItems: totalTeamsCount,
        itemsPerPage: TEAMS_PER_PAGE,
        bufferValue: 280,
        pageNumber: currentPage,
        loaderStyle: {
          padding: '0px',
          height: '40px'
        }
      }, joinableTeamContents));
    }

    const teamSignUp = !createTeamRestricted && /*#__PURE__*/react.createElement(system_permission_gate/* default */.Z, {
      permissions: [constants/* Permissions.CREATE_TEAM */.Pl.CREATE_TEAM]
    }, /*#__PURE__*/react.createElement("div", {
      className: "margin--extra",
      style: {
        marginTop: '0.5em'
      }
    }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
      id: "createNewTeamLink",
      to: "/create_team",
      onClick: () => (0,telemetry_actions/* trackEvent */.L9)('select_team', 'click_create_team'),
      className: "signup-team-login"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "login.createTeam",
      defaultMessage: "Create a team"
    }))));
    let adminConsoleLink;

    if (!user_agent/* isMobileApp */.k()) {
      adminConsoleLink = /*#__PURE__*/react.createElement(system_permission_gate/* default */.Z, {
        permissions: [constants/* Permissions.MANAGE_SYSTEM */.Pl.MANAGE_SYSTEM]
      }, /*#__PURE__*/react.createElement("div", {
        className: "mt-8 hidden-xs"
      }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
        to: "/admin_console",
        className: "signup-team-login",
        onClick: () => (0,telemetry_actions/* trackEvent */.L9)('select_team', 'click_system_console')
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "signup_team_system_console",
        defaultMessage: "Go to System Console"
      }))));
    }

    let headerButton;

    if (this.state.error) {
      headerButton = /*#__PURE__*/react.createElement(back_button/* default */.Z, {
        onClick: this.clearError
      });
    } else if (isMemberOfTeam) {
      headerButton = /*#__PURE__*/react.createElement(back_button/* default */.Z, null);
    } else {
      headerButton = /*#__PURE__*/react.createElement("div", {
        className: "signup-header"
      }, /*#__PURE__*/react.createElement("a", {
        href: "#",
        id: "logout",
        onClick: this.handleLogoutClick
      }, /*#__PURE__*/react.createElement(fa_logout_icon/* default */.Z, null), /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "web.header.logout",
        defaultMessage: "Logout"
      })));
    }

    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(announcement_bar/* default */.Z, null), headerButton, /*#__PURE__*/react.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/react.createElement("div", {
      className: 'select-team__container signup-team__container'
    }, /*#__PURE__*/react.createElement("img", {
      alt: 'signup team logo',
      className: "signup-team-logo",
      src: logo/* default */.Z
    }), /*#__PURE__*/react.createElement(site_name_and_description/* default */.Z, {
      customDescriptionText: customDescriptionText,
      siteName: siteName
    }), openContent, teamSignUp, adminConsoleLink)));
  }

}

select_team_defineProperty(SelectTeam, "propTypes", {
  currentUserId: (prop_types_default()).string.isRequired,
  currentUserRoles: (prop_types_default()).string.isRequired,
  currentUserIsGuest: (prop_types_default()).bool,
  customDescriptionText: (prop_types_default()).string,
  isMemberOfTeam: (prop_types_default()).bool.isRequired,
  listableTeams: (prop_types_default()).array.isRequired,
  siteName: (prop_types_default()).string,
  canCreateTeams: (prop_types_default()).bool.isRequired,
  canManageSystem: (prop_types_default()).bool.isRequired,
  canJoinPublicTeams: (prop_types_default()).bool.isRequired,
  canJoinPrivateTeams: (prop_types_default()).bool.isRequired,
  history: (prop_types_default()).any,
  siteURL: (prop_types_default()).string,
  actions: prop_types_default().shape({
    getTeams: (prop_types_default()).func.isRequired,
    loadRolesIfNeeded: (prop_types_default()).func.isRequired,
    addUserToTeam: (prop_types_default()).func.isRequired
  }).isRequired,
  totalTeamsCount: (prop_types_default()).number.isRequired,
  isCloud: (prop_types_default()).bool.isRequired,
  isFreeTrial: (prop_types_default()).bool.isRequired
});
;// CONCATENATED MODULE: ./components/select_team/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

















function mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const currentUser = (0,users/* getCurrentUser */.ts)(state);
  const myTeamMemberships = Object.values((0,entities_teams/* getTeamMemberships */.gb)(state));
  const license = (0,general/* getLicense */.lJ)(state);
  const subscription = (0,cloud/* getCloudSubscription */.oR)(state);
  const isCloud = (0,license_utils/* isCloudLicense */.Ht)(license);
  const isFreeTrial = (subscription === null || subscription === void 0 ? void 0 : subscription.is_free_trial) === 'true';
  return {
    currentUserId: currentUser.id,
    currentUserRoles: currentUser.roles || '',
    currentUserIsGuest: (0,user_utils/* isGuest */.nJ)(currentUser.roles),
    customDescriptionText: config.CustomDescriptionText,
    isMemberOfTeam: myTeamMemberships && myTeamMemberships.length > 0,
    listableTeams: (0,entities_teams/* getSortedListableTeams */.LN)(state, currentUser.locale),
    siteName: config.SiteName,
    canCreateTeams: (0,entities_roles/* haveISystemPermission */.AN)(state, {
      permission: constants/* Permissions.CREATE_TEAM */.Pl.CREATE_TEAM
    }),
    canManageSystem: (0,entities_roles/* haveISystemPermission */.AN)(state, {
      permission: constants/* Permissions.MANAGE_SYSTEM */.Pl.MANAGE_SYSTEM
    }),
    canJoinPublicTeams: (0,entities_roles/* haveISystemPermission */.AN)(state, {
      permission: constants/* Permissions.JOIN_PUBLIC_TEAMS */.Pl.JOIN_PUBLIC_TEAMS
    }),
    canJoinPrivateTeams: (0,entities_roles/* haveISystemPermission */.AN)(state, {
      permission: constants/* Permissions.JOIN_PRIVATE_TEAMS */.Pl.JOIN_PRIVATE_TEAMS
    }),
    siteURL: config.SiteURL,
    totalTeamsCount: state.entities.teams.totalCount || 0,
    isCloud,
    isFreeTrial
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      getTeams: teams/* getTeams */.LK,
      loadRolesIfNeeded: roles/* loadRolesIfNeeded */.k3,
      addUserToTeam: team_actions/* addUserToTeam */.aJ
    }, dispatch)
  };
}

/* harmony default export */ const select_team = ((0,redux.compose)(react_router/* withRouter */.EN, (0,es.connect)(mapStateToProps, mapDispatchToProps), with_use_get_usage_deltas/* default */.Z)(SelectTeam));

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
//# sourceMappingURL=808.36d41aabce55abd06d5d.js.map