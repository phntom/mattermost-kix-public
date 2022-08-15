"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[396],{

/***/ 36192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BackstageNavbar)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44012);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73727);
/* harmony import */ var components_widgets_icons_fa_back_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70767);
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





class BackstageNavbar extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  static get propTypes() {
    return {
      team: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
      siteName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
    };
  }

  render() {
    const {
      team
    } = this.props;
    const teamExists = (team === null || team === void 0 ? void 0 : team.delete_at) === 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "backstage-navbar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      className: "backstage-navbar__back",
      to: "/".concat(teamExists ? this.props.team.name : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_widgets_icons_fa_back_icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, teamExists ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      id: "backstage_navbar.backToMattermost",
      defaultMessage: "Back to {siteName}",
      values: {
        siteName: this.props.siteName ? this.props.siteName : this.props.team.name
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      id: "backstage_navbar.back",
      defaultMessage: "Back"
    }))));
  }

}

/***/ }),

/***/ 21396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ backstage)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/users.ts
var entities_users = __webpack_require__(12707);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/teams.ts
var teams = __webpack_require__(5596);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/general.ts
var general = __webpack_require__(22742);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/roles.ts
var entities_roles = __webpack_require__(34111);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/constants/index.ts + 10 modules
var constants = __webpack_require__(33407);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(19601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(85827);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 1 modules
var redux = __webpack_require__(97779);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/bots.ts
var entities_bots = __webpack_require__(71436);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/bots.ts
var bots = __webpack_require__(45341);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/integrations.ts
var integrations = __webpack_require__(3448);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(2707);
// EXTERNAL MODULE: ./packages/reselect/src/index.js
var src = __webpack_require__(39346);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/apps.ts
var apps = __webpack_require__(11850);
;// CONCATENATED MODULE: ./packages/mattermost-redux/src/selectors/entities/integrations.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



function getIncomingHooks(state) {
  return state.entities.integrations.incomingHooks;
}
function getOutgoingHooks(state) {
  return state.entities.integrations.outgoingHooks;
}
function getCommands(state) {
  return state.entities.integrations.commands;
}
function getOAuthApps(state) {
  return state.entities.integrations.oauthApps;
}
const getAppsOAuthAppIDs = (0,src/* createSelector */.P1)('getAppsOAuthAppIDs', apps/* appsEnabled */.D8, state => state.entities.integrations.appsOAuthAppIDs, (apps, ids) => {
  return apps ? ids : [];
});
const getAppsBotIDs = (0,src/* createSelector */.P1)('getAppsBotIDs', apps/* appsEnabled */.D8, state => state.entities.integrations.appsBotIDs, (apps, ids) => {
  return apps ? ids : [];
});
function getSystemCommands(state) {
  return state.entities.integrations.systemCommands;
}
/**
 * get outgoing hooks in current team
 */

const getOutgoingHooksInCurrentTeam = (0,src/* createSelector */.P1)('getOutgoingHooksInCurrentTeam', teams/* getCurrentTeamId */.ev, getOutgoingHooks, (teamId, hooks) => {
  return Object.values(hooks).filter(o => o.team_id === teamId);
});
const getAllCommands = (0,src/* createSelector */.P1)('getAllCommands', getCommands, getSystemCommands, (commands, systemCommands) => {
  return _objectSpread(_objectSpread({}, commands), systemCommands);
});
const getAutocompleteCommandsList = (0,src/* createSelector */.P1)('getAutocompleteCommandsList', getAllCommands, teams/* getCurrentTeamId */.ev, (commands, currentTeamId) => {
  return Object.values(commands).filter(command => {
    return command && (!command.team_id || command.team_id === currentTeamId) && command.auto_complete;
  }).sort((a, b) => a.display_name.localeCompare(b.display_name));
});
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/users.ts
var users = __webpack_require__(33383);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(32023);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__(91058);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(88674);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./utils/url.tsx + 1 modules
var url = __webpack_require__(12266);
// EXTERNAL MODULE: ./utils/utils.tsx + 25 modules
var utils = __webpack_require__(15883);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(64765);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./components/loading_screen.tsx
var loading_screen = __webpack_require__(19476);
// EXTERNAL MODULE: ./components/widgets/icons/fa_search_icon.tsx
var fa_search_icon = __webpack_require__(30866);
;// CONCATENATED MODULE: ./components/backstage/components/backstage_list.jsx




function backstage_list_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class BackstageList extends react.PureComponent {
  constructor(props) {
    super(props);

    backstage_list_defineProperty(this, "updateFilter", e => {
      this.setState({
        filter: e.target.value
      });
    });

    this.state = {
      filter: ''
    };
  }

  render() {
    const filter = this.state.filter.toLowerCase();
    let children;

    if (this.props.loading) {
      children = /*#__PURE__*/react.createElement(loading_screen/* default */.Z, null);
    } else {
      children = this.props.children;
      let hasChildren = true;

      if (typeof children === 'function') {
        [children, hasChildren] = children(filter);
      }

      children = react.Children.map(children, child => {
        return /*#__PURE__*/react.cloneElement(child, {
          filter
        });
      });

      if (children.length === 0 || !hasChildren) {
        if (!filter) {
          if (this.props.emptyText) {
            children = /*#__PURE__*/react.createElement("div", {
              className: "backstage-list__item backstage-list__empty"
            }, this.props.emptyText);
          }
        } else if (this.props.emptyTextSearch) {
          children = /*#__PURE__*/react.createElement("div", {
            className: "backstage-list__item backstage-list__empty",
            id: "emptySearchResultsMessage"
          }, /*#__PURE__*/react.cloneElement(this.props.emptyTextSearch, {
            values: {
              searchTerm: filter
            }
          }));
        }
      }
    }

    let addLink = null;

    if (this.props.addLink && this.props.addText) {
      addLink = /*#__PURE__*/react.createElement(react_router_dom.Link, {
        className: "add-link",
        to: this.props.addLink
      }, /*#__PURE__*/react.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        id: this.props.addButtonId
      }, /*#__PURE__*/react.createElement("span", null, this.props.addText)));
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-content"
    }, /*#__PURE__*/react.createElement("div", {
      className: "backstage-header"
    }, /*#__PURE__*/react.createElement("h1", null, this.props.header), addLink), /*#__PURE__*/react.createElement("div", {
      className: "backstage-filters"
    }, /*#__PURE__*/react.createElement("div", {
      className: "backstage-filter__search"
    }, /*#__PURE__*/react.createElement(fa_search_icon/* default */.Z, null), /*#__PURE__*/react.createElement("input", {
      type: "search",
      className: "form-control",
      placeholder: this.props.searchPlaceholder,
      value: this.state.filter,
      onChange: this.updateFilter,
      style: style.search,
      id: "searchInput"
    }))), /*#__PURE__*/react.createElement("span", {
      className: "backstage-list__help"
    }, this.props.helpText), /*#__PURE__*/react.createElement("div", {
      className: "backstage-list"
    }, children));
  }

}

backstage_list_defineProperty(BackstageList, "propTypes", {
  children: prop_types_default().oneOfType([(prop_types_default()).node, (prop_types_default()).func]),
  header: (prop_types_default()).node.isRequired,
  addLink: (prop_types_default()).string,
  addText: (prop_types_default()).node,
  addButtonId: (prop_types_default()).string,
  emptyText: (prop_types_default()).node,
  emptyTextSearch: (prop_types_default()).node,
  helpText: (prop_types_default()).node,
  loading: (prop_types_default()).bool.isRequired,
  searchPlaceholder: (prop_types_default()).string
});

backstage_list_defineProperty(BackstageList, "defaultProps", {
  searchPlaceholder: utils/* localizeMessage */._u('backstage_list.search', 'Search')
});

const style = {
  search: {
    flexGrow: 0,
    flexShrink: 0
  }
};
// EXTERNAL MODULE: ./utils/constants.tsx + 19 modules
var utils_constants = __webpack_require__(66788);
// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(45288);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(41817);
// EXTERNAL MODULE: ./components/confirm_modal.tsx
var confirm_modal = __webpack_require__(32579);
// EXTERNAL MODULE: ./components/markdown/index.ts + 1 modules
var markdown = __webpack_require__(64852);
// EXTERNAL MODULE: ./components/save_button.tsx
var save_button = __webpack_require__(58657);
// EXTERNAL MODULE: ./components/widgets/icons/fa_warning_icon.tsx
var fa_warning_icon = __webpack_require__(37668);
;// CONCATENATED MODULE: ./components/integrations/bots/bot.tsx


function bot_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








function matchesFilter(bot, filter, owner) {
  if (!filter) {
    return true;
  }

  const username = bot.username || '';
  const description = bot.description || '';
  const displayName = bot.display_name || '';
  let ownerUsername = 'plugin';

  if (owner && owner.username) {
    ownerUsername = owner.username;
  }

  return !(username.toLowerCase().indexOf(filter) === -1 && displayName.toLowerCase().indexOf(filter) === -1 && description.toLowerCase().indexOf(filter) === -1 && ownerUsername.toLowerCase().indexOf(filter) === -1);
}
class Bot extends react.PureComponent {
  constructor(props) {
    super(props);

    bot_defineProperty(this, "enableBot", () => {
      this.props.actions.enableBot(this.props.bot.user_id);
    });

    bot_defineProperty(this, "disableBot", () => {
      this.props.actions.disableBot(this.props.bot.user_id);
    });

    bot_defineProperty(this, "enableUserAccessToken", id => {
      this.props.actions.enableUserAccessToken(id);
    });

    bot_defineProperty(this, "disableUserAccessToken", id => {
      this.props.actions.disableUserAccessToken(id);
    });

    bot_defineProperty(this, "confirmRevokeToken", id => {
      this.setState({
        confirmingId: id
      });
    });

    bot_defineProperty(this, "revokeTokenConfirmed", () => {
      this.props.actions.revokeUserAccessToken(this.state.confirmingId);
      this.closeConfirm();
    });

    bot_defineProperty(this, "closeConfirm", () => {
      this.setState({
        confirmingId: ''
      });
    });

    bot_defineProperty(this, "openCreateToken", () => {
      this.setState({
        creatingTokenState: 'OPEN',
        token: {
          description: ''
        }
      });
    });

    bot_defineProperty(this, "closeCreateToken", () => {
      this.setState({
        creatingTokenState: 'CLOSED',
        token: {
          description: ''
        }
      });
    });

    bot_defineProperty(this, "handleUpdateDescription", e => {
      const target = e.target;
      this.setState({
        token: Object.assign({}, this.state.token, {
          description: target.value
        })
      });
    });

    bot_defineProperty(this, "handleCreateToken", async e => {
      e.preventDefault();

      if (this.state.token.description === '') {
        this.setState({
          error: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "bot.token.error.description",
            defaultMessage: "Please enter a description."
          })
        });
        return;
      }

      const {
        data,
        error
      } = await this.props.actions.createUserAccessToken(this.props.bot.user_id, this.state.token.description);

      if (data) {
        this.setState({
          creatingTokenState: 'CREATED',
          token: data
        });
      } else if (error) {
        this.setState({
          error: error.message
        });
      }
    });

    this.state = {
      confirmingId: '',
      creatingTokenState: 'CLOSED',
      token: {},
      error: ''
    };
  }

  render() {
    const username = this.props.bot.username || '';
    const description = this.props.bot.description || '';
    const displayName = this.props.bot.display_name || '';
    let ownerUsername = 'plugin';

    if (this.props.fromApp) {
      ownerUsername = 'Apps Framework';
    } else if (this.props.owner && this.props.owner.username) {
      ownerUsername = this.props.owner.username;
    }

    const filter = this.props.filter ? this.props.filter.toLowerCase() : '';

    if (!matchesFilter(this.props.bot, filter, this.props.owner)) {
      return null;
    }

    const tokenList = [];
    Object.values(this.props.accessTokens).forEach(token => {
      let activeLink;
      let disableClass = '';
      let disabledText;

      if (token.is_active) {
        activeLink = /*#__PURE__*/react.createElement("a", {
          id: token.id + '_deactivate',
          href: "#",
          onClick: e => {
            e.preventDefault();
            this.disableUserAccessToken(token.id);
          }
        }, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "user.settings.tokens.deactivate",
          defaultMessage: "Disable"
        }));
      } else {
        disableClass = 'light';
        disabledText = /*#__PURE__*/react.createElement("span", {
          className: "mr-2 light"
        }, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "user.settings.tokens.deactivatedWarning",
          defaultMessage: "(Disabled)"
        }));
        activeLink = /*#__PURE__*/react.createElement("a", {
          id: token.id + '_activate',
          href: "#",
          onClick: e => {
            e.preventDefault();
            this.enableUserAccessToken(token.id);
          }
        }, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "user.settings.tokens.activate",
          defaultMessage: "Enable"
        }));
      }

      tokenList.push( /*#__PURE__*/react.createElement("div", {
        key: token.id,
        className: "bot-list__item"
      }, /*#__PURE__*/react.createElement("div", {
        className: "item-details__row d-flex justify-content-between"
      }, /*#__PURE__*/react.createElement("div", {
        className: disableClass
      }, /*#__PURE__*/react.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, /*#__PURE__*/react.createElement("b", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "user.settings.tokens.tokenDesc",
        defaultMessage: "Token Description: "
      })), token.description), /*#__PURE__*/react.createElement("div", {
        className: "setting-box__token-id whitespace--nowrap overflow--ellipsis"
      }, /*#__PURE__*/react.createElement("b", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "user.settings.tokens.tokenId",
        defaultMessage: "Token ID: "
      })), token.id)), /*#__PURE__*/react.createElement("div", null, disabledText, activeLink, ' - ', /*#__PURE__*/react.createElement("a", {
        id: token.id + '_delete',
        href: "#",
        onClick: e => {
          e.preventDefault();
          this.confirmRevokeToken(token.id);
        }
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "user.settings.tokens.delete",
        defaultMessage: "Delete"
      }))))));
    });
    let options;

    if (ownerUsername !== 'plugin') {
      options = /*#__PURE__*/react.createElement("div", {
        className: "item-actions"
      }, /*#__PURE__*/react.createElement("button", {
        id: "createToken",
        className: "style--none color--link",
        onClick: this.openCreateToken
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bot.manage.create_token",
        defaultMessage: "Create New Token"
      })), ' - ', /*#__PURE__*/react.createElement(react_router_dom.Link, {
        to: "/".concat(this.props.team.name, "/integrations/bots/edit?id=").concat(this.props.bot.user_id)
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bots.manage.edit",
        defaultMessage: "Edit"
      })), ' - ', /*#__PURE__*/react.createElement("button", {
        className: "style--none color--link",
        onClick: this.disableBot
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bot.manage.disable",
        defaultMessage: "Disable"
      })));
    }

    if (this.props.bot.delete_at !== 0) {
      options = /*#__PURE__*/react.createElement("div", {
        className: "item-actions"
      }, /*#__PURE__*/react.createElement("button", {
        className: "style--none color--link",
        onClick: this.enableBot
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bot.manage.enable",
        defaultMessage: "Enable"
      })));
    }

    if (this.state.creatingTokenState === 'OPEN') {
      tokenList.push( /*#__PURE__*/react.createElement("div", {
        key: 'create',
        className: "bot-list__item"
      }, /*#__PURE__*/react.createElement("div", {
        key: 'create'
      }, /*#__PURE__*/react.createElement("form", {
        className: "form-horizontal",
        onSubmit: this.handleCreateToken
      }, /*#__PURE__*/react.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react.createElement("label", {
        className: "col-sm-auto control-label"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "user.settings.tokens.name",
        defaultMessage: "Token Description: "
      })), /*#__PURE__*/react.createElement("div", {
        className: "col-sm-4"
      }, /*#__PURE__*/react.createElement("input", {
        autoFocus: true,
        className: "form-control form-sm",
        type: "text",
        maxLength: 64,
        value: this.state.token.description,
        onChange: this.handleUpdateDescription
      }))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
        className: "pt-2 pb-2"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "user.settings.tokens.nameHelp",
        defaultMessage: "Enter a description for your token to remember what it does."
      })), /*#__PURE__*/react.createElement("label", {
        id: "clientError",
        className: "has-error is-empty"
      }, this.state.error), /*#__PURE__*/react.createElement("div", {
        className: "mt-2"
      }, /*#__PURE__*/react.createElement(save_button/* default */.Z, {
        btnClass: "btn-sm btn-primary",
        savingMessage: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "user.settings.tokens.save",
          defaultMessage: "Save"
        }),
        saving: false
      }), /*#__PURE__*/react.createElement("button", {
        className: "btn btn-sm btn-link",
        onClick: this.closeCreateToken
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "user.settings.tokens.cancel",
        defaultMessage: "Cancel"
      }))))))));
    } else if (this.state.creatingTokenState === 'CREATED') {
      tokenList.push( /*#__PURE__*/react.createElement("div", {
        key: 'created',
        className: "bot-list__item alert alert-warning"
      }, /*#__PURE__*/react.createElement("div", {
        className: "mb-2"
      }, /*#__PURE__*/react.createElement(fa_warning_icon/* default */.Z, {
        additionalClassName: "mr-2"
      }), /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "user.settings.tokens.copy",
        defaultMessage: "Please copy the access token below. You won't be able to see it again!"
      })), /*#__PURE__*/react.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "user.settings.tokens.name",
        defaultMessage: "Token Description: "
      }), this.state.token.description), /*#__PURE__*/react.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "user.settings.tokens.id",
        defaultMessage: "Token ID: "
      }), this.state.token.id), /*#__PURE__*/react.createElement("strong", {
        className: "word-break--all"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "user.settings.tokens.token",
        defaultMessage: "Access Token: "
      }), this.state.token.token), /*#__PURE__*/react.createElement("div", {
        className: "mt-2"
      }, /*#__PURE__*/react.createElement("button", {
        className: "btn btn-sm btn-primary",
        onClick: this.closeCreateToken
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bot.create_token.close",
        defaultMessage: "Close"
      })))));
    }

    const imageURL = utils/* imageURLForUser */.bb(this.props.user.id, this.props.user.last_picture_update);
    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-list__item"
    }, /*#__PURE__*/react.createElement("div", {
      className: 'bot-list-img-container'
    }, /*#__PURE__*/react.createElement("img", {
      className: 'bot-list-img',
      alt: 'bot image',
      src: imageURL
    })), /*#__PURE__*/react.createElement("div", {
      className: "item-details"
    }, /*#__PURE__*/react.createElement("div", {
      className: "item-details__row d-flex flex-column flex-md-row justify-content-between"
    }, /*#__PURE__*/react.createElement("strong", {
      className: "item-details__name"
    }, displayName + ' (@' + username + ')'), options), /*#__PURE__*/react.createElement("div", {
      className: "bot-details__description"
    }, /*#__PURE__*/react.createElement(markdown/* default */.Z, {
      message: description
    })), /*#__PURE__*/react.createElement("div", {
      className: "light small"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bots.managed_by",
      defaultMessage: "Managed by "
    }), ownerUsername), /*#__PURE__*/react.createElement("div", {
      className: "bot-list is-empty"
    }, tokenList)), /*#__PURE__*/react.createElement(confirm_modal/* default */.Z, {
      title: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bots.token.delete",
        defaultMessage: "Delete Token"
      }),
      message: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bots.token.confirm_text",
        defaultMessage: "Are you sure you want to delete the token?"
      }),
      confirmButtonText: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bots.token.confirm",
        defaultMessage: "Delete"
      }),
      show: this.state.confirmingId !== '',
      onConfirm: this.revokeTokenConfirmed,
      onCancel: this.closeConfirm
    }));
  }

}

bot_defineProperty(Bot, "propTypes", {
  filter: (prop_types_default()).string,
  fromApp: (prop_types_default()).bool.isRequired,
  actions: prop_types_default().shape({
    disableBot: (prop_types_default()).func.isRequired,
    enableBot: (prop_types_default()).func.isRequired,
    createUserAccessToken: (prop_types_default()).func.isRequired,
    revokeUserAccessToken: (prop_types_default()).func.isRequired,
    enableUserAccessToken: (prop_types_default()).func.isRequired,
    disableUserAccessToken: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/integrations/bots/bots.tsx







function bots_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class Bots extends react.PureComponent {
  constructor(props) {
    super(props);

    bots_defineProperty(this, "botToJSX", bot => {
      return /*#__PURE__*/react.createElement(Bot, {
        key: bot.user_id,
        bot: bot,
        owner: this.props.owners[bot.user_id],
        user: this.props.users[bot.user_id],
        accessTokens: this.props.accessTokens && this.props.accessTokens[bot.user_id] || {},
        actions: this.props.actions,
        team: this.props.team,
        fromApp: this.props.appsBotIDs.includes(bot.user_id)
      });
    });

    bots_defineProperty(this, "bots", filter => {
      const bots = Object.values(this.props.bots).sort((a, b) => a.username.localeCompare(b.username));

      const match = bot => matchesFilter(bot, filter, this.props.owners[bot.user_id]);

      const enabledBots = bots.filter(bot => bot.delete_at === 0).filter(match).map(this.botToJSX);
      const disabledBots = bots.filter(bot => bot.delete_at > 0).filter(match).map(this.botToJSX);
      const sections = /*#__PURE__*/react.createElement("div", {
        key: "sections"
      }, /*#__PURE__*/react.createElement(this.EnabledSection, {
        enabledBots: enabledBots
      }), /*#__PURE__*/react.createElement(this.DisabledSection, {
        hasDisabled: disabledBots.length > 0,
        disabledBots: disabledBots
      }));
      return [sections, enabledBots.length > 0 || disabledBots.length > 0];
    });

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.actions.loadBots(utils_constants/* default.Integrations.START_PAGE_NUM */.ZP.Integrations.START_PAGE_NUM, parseInt(utils_constants/* default.Integrations.PAGE_SIZE */.ZP.Integrations.PAGE_SIZE, 10)).then(result => {
      if (result.data) {
        const promises = [];

        for (const bot of result.data) {
          // We don't need to wait for this and we need to accept failure in the case where bot.owner_id is a plugin id
          this.props.actions.getUser(bot.owner_id); // We want to wait for these.

          promises.push(this.props.actions.getUser(bot.user_id));
          promises.push(this.props.actions.getUserAccessTokensForUser(bot.user_id));
        }

        Promise.all(promises).then(() => {
          this.setState({
            loading: false
          });
        });
      }
    });

    if (this.props.appsEnabled) {
      this.props.actions.fetchAppsBotIDs();
    }
  }

  DisabledSection(props) {
    if (!props.hasDisabled) {
      return null;
    }

    const botsToDisplay = react.Children.map(props.disabledBots, child => {
      return /*#__PURE__*/react.cloneElement(child, {
        filter: props.filter
      });
    });
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
      className: "bot-disabled"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bots.disabled",
      defaultMessage: "Disabled"
    })), /*#__PURE__*/react.createElement("div", {
      className: "bot-list__disabled"
    }, botsToDisplay));
  }

  EnabledSection(props) {
    const botsToDisplay = react.Children.map(props.enabledBots, child => {
      return /*#__PURE__*/react.cloneElement(child, {
        filter: props.filter
      });
    });
    return /*#__PURE__*/react.createElement("div", null, botsToDisplay);
  }

  render() {
    return /*#__PURE__*/react.createElement(BackstageList, {
      header: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bots.manage.header",
        defaultMessage: "Bot Accounts"
      }),
      addText: this.props.createBots && /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bots.manage.add",
        defaultMessage: "Add Bot Account"
      }),
      addLink: '/' + this.props.team.name + '/integrations/bots/add',
      addButtonId: "addBotAccount",
      emptyText: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bots.manage.empty",
        defaultMessage: "No bot accounts found"
      }),
      emptyTextSearch: /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "bots.manage.emptySearch",
        defaultMessage: "No bot accounts match **{searchTerm}**"
      }),
      helpText: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bots.manage.help1",
        defaultMessage: "Use {botAccounts} to integrate with Mattermost through plugins or the API. Bot accounts are available to everyone on your server. ",
        values: {
          botAccounts: /*#__PURE__*/react.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://mattermost.com/pl/default-bot-accounts"
          }, /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "bots.manage.bot_accounts",
            defaultMessage: "Bot Accounts"
          }))
        }
      }), /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "bots.manage.help2",
        defaultMessage: 'Enable bot account creation in the [System Console]({siteURL}/admin_console/integrations/bot_accounts).',
        values: {
          siteURL: (0,url/* getSiteURL */.fO)()
        }
      })),
      searchPlaceholder: utils/* localizeMessage */._u('bots.manage.search', 'Search Bot Accounts'),
      loading: this.state.loading
    }, this.bots);
  }

}

bots_defineProperty(Bots, "propTypes", {
  appsBotIDs: prop_types_default().arrayOf((prop_types_default()).string).isRequired,
  appsEnabled: (prop_types_default()).bool.isRequired,
  createBots: (prop_types_default()).bool,
  actions: prop_types_default().shape({
    loadBots: (prop_types_default()).func.isRequired,
    getUserAccessTokensForUser: (prop_types_default()).func.isRequired,
    createUserAccessToken: (prop_types_default()).func.isRequired,
    revokeUserAccessToken: (prop_types_default()).func.isRequired,
    enableUserAccessToken: (prop_types_default()).func.isRequired,
    disableUserAccessToken: (prop_types_default()).func.isRequired,
    getUser: (prop_types_default()).func.isRequired,
    disableBot: (prop_types_default()).func.isRequired,
    enableBot: (prop_types_default()).func.isRequired,
    fetchAppsBotIDs: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/integrations/bots/index.ts

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.












function mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const createBots = config.EnableBotAccountCreation === 'true';
  const bots = (0,entities_bots/* getExternalBotAccounts */.Zh)(state);
  const botValues = Object.values(bots);
  const owners = botValues.reduce((result, bot) => {
    result[bot.user_id] = entities_users/* getUser */.PR(state, bot.owner_id);
    return result;
  }, {});
  const users = botValues.reduce((result, bot) => {
    result[bot.user_id] = entities_users/* getUser */.PR(state, bot.user_id);
    return result;
  }, {});
  return {
    createBots,
    bots,
    accessTokens: state.entities.admin.userAccessTokensByUser,
    owners,
    users,
    appsBotIDs: getAppsBotIDs(state),
    appsEnabled: (0,apps/* appsEnabled */.D8)(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      fetchAppsBotIDs: integrations/* getAppsBotIDs */.J4,
      loadBots: bots/* loadBots */.l5,
      getUserAccessTokensForUser: users/* getUserAccessTokensForUser */.fh,
      createUserAccessToken: users/* createUserAccessToken */.CR,
      revokeUserAccessToken: users/* revokeUserAccessToken */.ei,
      enableUserAccessToken: users/* enableUserAccessToken */.q9,
      disableUserAccessToken: users/* disableUserAccessToken */.Wv,
      getUser: users/* getUser */.PR,
      disableBot: bots/* disableBot */.Uc,
      enableBot: bots/* enableBot */.PZ
    }, dispatch)
  };
}

/* harmony default export */ const integrations_bots = ((0,es.connect)(mapStateToProps, mapDispatchToProps)(Bots));
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(41637);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(60285);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(73210);
// EXTERNAL MODULE: ./utils/file_utils.tsx
var file_utils = __webpack_require__(81540);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/utils/user_utils.ts
var user_utils = __webpack_require__(60690);
;// CONCATENATED MODULE: ./images/bot_default_icon.png
/* harmony default export */ const bot_default_icon = (__webpack_require__.p + "files/f6e98d6b5fccaa0c93bd8091b05295ad.png");
// EXTERNAL MODULE: ./utils/browser_history.jsx
var browser_history = __webpack_require__(89262);
// EXTERNAL MODULE: ./components/localized_icon.tsx
var localized_icon = __webpack_require__(68492);
// EXTERNAL MODULE: ./utils/i18n.tsx
var i18n = __webpack_require__(87993);
;// CONCATENATED MODULE: ./components/backstage/components/backstage_header.jsx
function backstage_header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




class BackstageHeader extends react.PureComponent {
  render() {
    const children = [];
    react.Children.forEach(this.props.children, (child, index) => {
      if (index !== 0) {
        children.push( /*#__PURE__*/react.createElement("span", {
          key: 'divider' + index,
          className: "backstage-header__divider"
        }, /*#__PURE__*/react.createElement(localized_icon/* default */.Z, {
          className: "fa fa-angle-right",
          title: {
            id: (0,i18n.t)('generic_icons.breadcrumb'),
            defaultMessage: 'Breadcrumb Icon'
          }
        })));
      }

      children.push(child);
    });
    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-header"
    }, /*#__PURE__*/react.createElement("h1", null, children));
  }

}

backstage_header_defineProperty(BackstageHeader, "propTypes", {
  children: (prop_types_default()).node
});
// EXTERNAL MODULE: ./components/overlay_trigger.tsx
var overlay_trigger = __webpack_require__(15558);
// EXTERNAL MODULE: ./components/tooltip.tsx
var components_tooltip = __webpack_require__(89959);
// EXTERNAL MODULE: ./components/spinner_button.tsx
var spinner_button = __webpack_require__(77555);
// EXTERNAL MODULE: ./components/form_error.tsx
var form_error = __webpack_require__(95795);
;// CONCATENATED MODULE: ./components/integrations/bots/add_bot/add_bot.jsx








function add_bot_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

















const roleOptionSystemAdmin = 'System Admin';
const roleOptionMember = 'Member';
class AddBot extends react.PureComponent {
  constructor(props) {
    super(props);

    add_bot_defineProperty(this, "updateUsername", e => {
      this.setState({
        username: e.target.value
      });
    });

    add_bot_defineProperty(this, "updateDisplayName", e => {
      this.setState({
        displayName: e.target.value
      });
    });

    add_bot_defineProperty(this, "updateDescription", e => {
      this.setState({
        description: e.target.value
      });
    });

    add_bot_defineProperty(this, "updateRole", e => {
      this.setState({
        role: e.target.value
      });
    });

    add_bot_defineProperty(this, "updatePostAll", e => {
      this.setState({
        postAll: e.target.checked
      });
    });

    add_bot_defineProperty(this, "updatePostChannels", e => {
      this.setState({
        postChannels: e.target.checked
      });
    });

    add_bot_defineProperty(this, "updatePicture", e => {
      if (e.target.files && e.target.files[0]) {
        const pictureFile = e.target.files[0];
        this.previewBlob = URL.createObjectURL(pictureFile);
        var reader = new FileReader();

        reader.onload = e2 => {
          const orientation = file_utils/* getExifOrientation */.Ii(e2.target.result);
          const orientationStyles = file_utils/* getOrientationStyles */.vl(orientation);
          this.setState({
            image: this.previewBlob,
            orientationStyles
          });
        };

        reader.readAsArrayBuffer(pictureFile);
        e.target.value = null;
        this.setState({
          pictureFile
        });
      } else {
        this.setState({
          pictureFile: null,
          image: null
        });
      }
    });

    add_bot_defineProperty(this, "setDefault", () => {
      this.setState({
        pictureFile: 'default',
        image: bot_default_icon
      });
    });

    add_bot_defineProperty(this, "updateRoles", async data => {
      let roles = constants/* General.SYSTEM_USER_ROLE */.LQ.SYSTEM_USER_ROLE;

      if (this.state.role === roleOptionSystemAdmin) {
        roles += ' ' + constants/* General.SYSTEM_ADMIN_ROLE */.LQ.SYSTEM_ADMIN_ROLE;
      } else if (this.state.postAll) {
        roles += ' ' + constants/* General.SYSTEM_POST_ALL_ROLE */.LQ.SYSTEM_POST_ALL_ROLE;
      } else if (this.state.postChannels) {
        roles += ' ' + constants/* General.SYSTEM_POST_ALL_PUBLIC_ROLE */.LQ.SYSTEM_POST_ALL_PUBLIC_ROLE;
      }

      const rolesResult = await this.props.actions.updateUserRoles(data.user_id, roles);

      if (rolesResult) {
        return rolesResult.error;
      }

      return null;
    });

    add_bot_defineProperty(this, "handleSubmit", async e => {
      e.preventDefault();

      if (this.state.adding) {
        return;
      }

      if (!this.state.username || this.state.username.length < 3) {
        this.setState({
          error: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "bots.manage.add.invalid_username",
            defaultMessage: "Usernames have to begin with a lowercase letter and be 3-22 characters long. You can use lowercase letters, numbers, periods, dashes, and underscores."
          })
        });
        return;
      }

      if (this.state.pictureFile) {
        if (!utils_constants/* AcceptedProfileImageTypes.includes */.Ec.includes(this.state.pictureFile.type)) {
          this.setState({
            error: /*#__PURE__*/react.createElement(message/* default */.Z, {
              id: "user.settings.general.validImage",
              defaultMessage: "Only BMP, JPG or PNG images may be used for profile pictures"
            })
          });
        } else if (this.state.pictureFile.size > this.props.maxFileSize) {
          this.setState({
            error: /*#__PURE__*/react.createElement(message/* default */.Z, {
              id: "user.settings.general.imageTooLarge",
              defaultMessage: "Unable to upload profile image. File is too large."
            })
          });
        }
      }

      this.setState({
        adding: true,
        error: ''
      });
      const bot = {
        username: this.state.username.toLowerCase().trim(),
        display_name: this.state.displayName,
        description: this.state.description
      };
      let data;
      let error;

      if (this.props.bot) {
        const result = await this.props.actions.patchBot(this.props.bot.user_id, bot);

        if (result) {
          data = result.data;
          error = result.error;
        } else {
          error = utils/* localizeMessage */._u('bot.edit_failed', 'Failed to edit bot');
        }

        if (!error) {
          if (this.state.pictureFile && this.state.pictureFile !== 'default') {
            const imageResult = await this.props.actions.uploadProfileImage(data.user_id, this.state.pictureFile);
            error = imageResult.error;
          } else if (this.state.pictureFile && this.state.pictureFile === 'default') {
            await this.props.actions.setDefaultProfileImage(data.user_id);
          }
        }

        if (!error && data) {
          error = this.updateRoles(data);
        }

        if (data) {
          browser_history/* browserHistory.push */.m.push("/".concat(this.props.team.name, "/integrations/bots"));
          return;
        }
      } else {
        const usernameError = utils/* isValidBotUsername */.LH(bot.username);

        if (usernameError) {
          let errObj;

          if (usernameError.id === utils_constants/* ValidationErrors.INVALID_LAST_CHARACTER */.qf.INVALID_LAST_CHARACTER) {
            errObj = {
              adding: false,
              error: /*#__PURE__*/react.createElement(message/* default */.Z, {
                id: "bots.manage.add.invalid_last_char",
                defaultMessage: "Bot usernames cannot have a period as the last character"
              })
            };
          } else {
            errObj = {
              adding: false,
              error: /*#__PURE__*/react.createElement(message/* default */.Z, {
                id: "bots.manage.add.invalid_username",
                defaultMessage: "Usernames must begin with a lowercase letter and be 3-22 characters long. You can use lowercase letters, numbers, periods, dashes, and underscores."
              })
            };
          }

          this.setState(errObj);
          return;
        }

        const result = await this.props.actions.createBot(bot);

        if (result) {
          data = result.data;
          error = result.error;
        } else {
          error = utils/* localizeMessage */._u('bot.create_failed', 'Failed to create bot');
        }

        let token = '';

        if (!error) {
          if (this.state.pictureFile && this.state.pictureFile !== 'default') {
            await this.props.actions.uploadProfileImage(data.user_id, this.state.pictureFile);
          } else {
            await this.props.actions.setDefaultProfileImage(data.user_id);
          }

          const tokenResult = await this.props.actions.createUserAccessToken(data.user_id, utils/* localizeMessage */._u('bot.token.default.description', 'Default Token')); // On error just skip the confirmation because we have a bot without a token.

          if (!tokenResult || tokenResult.error) {
            browser_history/* browserHistory.push */.m.push("/".concat(this.props.team.name, "/integrations/bots"));
            return;
          }

          token = tokenResult.data.token;
        }

        if (!error && data) {
          error = this.updateRoles(data);
        }

        if (data) {
          browser_history/* browserHistory.push */.m.push("/".concat(this.props.team.name, "/integrations/confirm?type=bots&id=").concat(data.user_id, "&token=").concat(token));
          return;
        }
      }

      this.setState({
        adding: false
      });

      if (error) {
        this.setState({
          error: error.message
        });
      }
    });

    this.state = {
      error: '',
      username: '',
      displayName: '',
      description: '',
      adding: false,
      image: bot_default_icon,
      role: roleOptionMember,
      postAll: false,
      postChannels: false
    };

    if (this.props.bot) {
      this.state.username = this.props.bot.username;
      this.state.displayName = this.props.bot.display_name;
      this.state.description = this.props.bot.description;
      this.state.role = user_utils/* isSystemAdmin */.$O(this.props.roles || '') ? roleOptionSystemAdmin : roleOptionMember;
      this.state.postAll = user_utils/* hasPostAllRole */.dB(this.props.roles || '');
      this.state.postChannels = user_utils/* hasPostAllPublicRole */.fG(this.props.roles || '');
    }
  }

  render() {
    let subtitle = /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bots.manage.add",
      defaultMessage: "Add"
    });
    let buttonText = /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bots.manage.add.create",
      defaultMessage: "Create Bot Account"
    });
    let buttonActiveText = /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bots.manage.add.creating",
      defaultMessage: "Creating..."
    }); // If we are editing

    if (this.props.bot) {
      subtitle = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bots.manage.edit",
        defaultMessage: "Edit"
      });
      buttonText = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bots.manage.edit.title",
        defaultMessage: "Update"
      });
      buttonActiveText = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bots.manage.edit.editing",
        defaultMessage: "Updating..."
      });
    }

    let imageURL = '';
    let removeImageIcon = /*#__PURE__*/react.createElement(overlay_trigger/* default */.Z, {
      delayShow: utils_constants/* Constants.OVERLAY_TIME_DELAY */.gT.OVERLAY_TIME_DELAY,
      placement: "right",
      overlay: /*#__PURE__*/react.createElement(components_tooltip/* default */.Z, {
        id: "removeIcon"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bot.remove_profile_picture",
        defaultMessage: "Remove Bot Icon"
      }))
    }, /*#__PURE__*/react.createElement("a", {
      className: 'bot-profile__remove',
      onClick: this.setDefault
    }, /*#__PURE__*/react.createElement("span", null, '×')));
    let imageStyles = null;

    if (this.props.bot && !this.state.pictureFile) {
      if (this.props.user) {
        imageURL = utils/* imageURLForUser */.bb(this.props.user.id, this.props.user.last_picture_update);
      } else {
        imageURL = utils/* imageURLForUser */.bb(this.props.bot.user_id);
      }
    } else {
      imageURL = this.state.image;
      imageStyles = this.state.orientationStyles;

      if (this.state.image === bot_default_icon) {
        removeImageIcon = null;
      }
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-content"
    }, /*#__PURE__*/react.createElement(BackstageHeader, null, /*#__PURE__*/react.createElement(react_router_dom.Link, {
      to: "/".concat(this.props.team.name, "/integrations/bots")
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bots.manage.header",
      defaultMessage: "Bot Accounts"
    })), subtitle), /*#__PURE__*/react.createElement("div", {
      className: "backstage-form"
    }, /*#__PURE__*/react.createElement("form", {
      className: "form-horizontal",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "username"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bots.add.username",
      defaultMessage: "Username"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "username",
      type: "text",
      maxLength: "22",
      className: "form-control",
      value: this.state.username,
      onChange: this.updateUsername
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bot.add.username.help",
      defaultMessage: "You can use lowercase letters, numbers, periods, dashes, and underscores."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "boticon"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bots.add.icon",
      defaultMessage: "Bot Icon"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("div", {
      className: 'bot-img-container'
    }, /*#__PURE__*/react.createElement("img", {
      className: 'bot-img',
      alt: 'bot image',
      src: imageURL,
      style: imageStyles
    }), removeImageIcon), /*#__PURE__*/react.createElement("div", {
      className: "btn btn-sm btn-primary btn-file sel-btn"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bots.image.upload",
      defaultMessage: "Upload Image"
    }), /*#__PURE__*/react.createElement("input", {
      accept: utils_constants/* Constants.ACCEPT_STATIC_IMAGE */.gT.ACCEPT_STATIC_IMAGE,
      type: "file",
      onChange: this.updatePicture
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "displayName"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bots.add.displayName",
      defaultMessage: "Display Name"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "displayName",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.displayName,
      onChange: this.updateDisplayName
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bot.add.display_name.help",
      defaultMessage: '(Optional) You can choose to display your bot\'s full name rather than its username.'
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "description"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bot.add.description",
      defaultMessage: "Description"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "description",
      type: "text",
      maxLength: "1024",
      className: "form-control",
      value: this.state.description,
      onChange: this.updateDescription
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bot.add.description.help",
      defaultMessage: "(Optional) Let others know what this bot does."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "role"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bot.add.role",
      defaultMessage: "Role"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("select", {
      className: "form-control",
      value: this.state.role,
      disabled: !this.props.editingUserHasManageSystem,
      onChange: this.updateRole
    }, /*#__PURE__*/react.createElement("option", {
      value: roleOptionMember
    }, utils/* localizeMessage */._u('bot.add.role.member', 'Member')), /*#__PURE__*/react.createElement("option", {
      value: roleOptionSystemAdmin
    }, utils/* localizeMessage */._u('bot.add.role.admin', 'System Admin'))), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bot.add.role.help",
      defaultMessage: "Choose what role the bot should have."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "row bot-profile__section"
    }, /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8 col-sm-offset-4"
    }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
      id: "admin.manage_roles.additionalRoles",
      defaultMessage: "Select additional permissions for the account. [Read more about roles and permissions](!https://developers.mattermost.com/integrate/admin-guide/admin-personal-access-token/)."
    }))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "postAll"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bot.add.post_all",
      defaultMessage: "post:all"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8 checkbox"
    }, /*#__PURE__*/react.createElement("div", {
      className: "checkbox no-padding"
    }, /*#__PURE__*/react.createElement("label", {
      htmlFor: "postAll"
    }, /*#__PURE__*/react.createElement("input", {
      id: "postAll",
      type: "checkbox",
      checked: this.state.postAll || this.state.role === roleOptionSystemAdmin,
      onChange: this.updatePostAll,
      disabled: !this.props.editingUserHasManageSystem || this.state.role === roleOptionSystemAdmin
    }), /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bot.add.post_all.enabled",
      defaultMessage: "Enabled"
    }))), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bot.add.post_all.help",
      defaultMessage: "Bot will have access to post to all Mattermost channels including direct messages."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "postChannels"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bot.add.post_channels",
      defaultMessage: "post:channels"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8 checkbox"
    }, /*#__PURE__*/react.createElement("div", {
      className: "checkbox no-padding"
    }, /*#__PURE__*/react.createElement("label", {
      htmlFor: "postChannels"
    }, /*#__PURE__*/react.createElement("input", {
      id: "postChannels",
      type: "checkbox",
      checked: this.state.postChannels || this.state.role === roleOptionSystemAdmin || this.state.postAll,
      onChange: this.updatePostChannels,
      disabled: !this.props.editingUserHasManageSystem || this.state.role === roleOptionSystemAdmin || this.state.postAll
    }), /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bot.add.post_channels.enabled",
      defaultMessage: "Enabled"
    }))), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bot.add.post_channels.help",
      defaultMessage: "Bot will have access to post to all Mattermost public channels."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "backstage-form__footer"
    }, /*#__PURE__*/react.createElement(form_error/* default */.Z, {
      type: "backstage",
      errors: [this.state.error]
    }), /*#__PURE__*/react.createElement(react_router_dom.Link, {
      className: "btn btn-link btn-sm",
      to: "/".concat(this.props.team.name, "/integrations/bots")
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "bots.manage.add.cancel",
      defaultMessage: "Cancel"
    })), /*#__PURE__*/react.createElement(spinner_button/* default */.Z, {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.adding,
      spinningText: buttonActiveText,
      onClick: this.handleSubmit,
      id: "saveBot"
    }, buttonText)))));
  }

}

add_bot_defineProperty(AddBot, "propTypes", {
  /**
  *  Only used for routing since backstage is team based.
  */
  team: (prop_types_default()).object.isRequired,

  /**
  *  Bot to edit (if editing)
  */
  bot: (prop_types_default()).object,

  /**
  *  Bot user
  */
  user: (prop_types_default()).object,

  /**
  *  Roles of the bot to edit (if editing)
  */
  roles: (prop_types_default()).string,

  /**
  * Maximum upload file size (for bot account profile picture)
  */
  maxFileSize: (prop_types_default()).number.isRequired,

  /**
   * Editing user has the MANAGE_SYSTEM permission
  */
  editingUserHasManageSystem: (prop_types_default()).bool.isRequired,

  /**
  * Bot to edit
  */
  actions: prop_types_default().shape({
    /**
    * Creates a new bot account.
    */
    createBot: (prop_types_default()).func.isRequired,

    /**
    * Patches an existing bot account.
    */
    patchBot: (prop_types_default()).func.isRequired,

    /**
    * Uploads a user profile image
    */
    uploadProfileImage: (prop_types_default()).func.isRequired,

    /**
    * Set profile image to default
    */
    setDefaultProfileImage: (prop_types_default()).func.isRequired,

    /**
    * For creating default access token
    */
    createUserAccessToken: (prop_types_default()).func.isRequired,

    /**
    * For creating setting bot to system admin or special posting permissions
    */
    updateUserRoles: (prop_types_default()).func.isRequired
  })
});
;// CONCATENATED MODULE: ./components/integrations/bots/add_bot/index.js





// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.











function add_bot_mapStateToProps(state, ownProps) {
  const config = (0,general/* getConfig */.iE)(state);
  const botId = new URLSearchParams(ownProps.location.search).get('id');
  const bots = (0,entities_bots/* getBotAccounts */.Gb)(state);
  const bot = bots ? bots[botId] : null;
  const user = bot ? (0,entities_users/* getUser */.PR)(state, bot.user_id) : null;
  const roles = user ? user.roles : null;
  return {
    maxFileSize: parseInt(config.MaxFileSize, 10),
    bot,
    roles,
    editingUserHasManageSystem: (0,entities_roles/* haveISystemPermission */.AN)(state, {
      permission: constants/* Permissions.MANAGE_SYSTEM */.Pl.MANAGE_SYSTEM
    }),
    user
  };
}

function add_bot_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      createBot: bots/* createBot */.lz,
      patchBot: bots/* patchBot */.XI,
      uploadProfileImage: users/* uploadProfileImage */._p,
      setDefaultProfileImage: users/* setDefaultProfileImage */.QJ,
      createUserAccessToken: users/* createUserAccessToken */.CR,
      updateUserRoles: users/* updateUserRoles */.hB
    }, dispatch)
  };
}

/* harmony default export */ const add_bot = ((0,es.connect)(add_bot_mapStateToProps, add_bot_mapDispatchToProps)(AddBot));
// EXTERNAL MODULE: ./plugins/pluggable/index.ts + 1 modules
var pluggable = __webpack_require__(62986);
// EXTERNAL MODULE: ./components/announcement_bar/index.ts + 23 modules
var announcement_bar = __webpack_require__(13301);
// EXTERNAL MODULE: ./components/system_notice/index.ts + 2 modules
var system_notice = __webpack_require__(21440);
;// CONCATENATED MODULE: ./images/incoming_webhook.jpg
/* harmony default export */ const incoming_webhook = (__webpack_require__.p + "files/357ed0208b2f0eab27a2b67d4b5f129c.jpg");
;// CONCATENATED MODULE: ./images/oauth_icon.png
/* harmony default export */ const oauth_icon = (__webpack_require__.p + "files/445dd2ab20befc4a78c9e77bc9fd260f.png");
;// CONCATENATED MODULE: ./images/outgoing_webhook.jpg
/* harmony default export */ const outgoing_webhook = (__webpack_require__.p + "files/4651fd92bdc643485b9edc86e79e02e7.jpg");
;// CONCATENATED MODULE: ./images/slash_command_icon.jpg
/* harmony default export */ const slash_command_icon = (__webpack_require__.p + "files/8a9816ae9c0cd846ae780433ccb979f0.jpg");
// EXTERNAL MODULE: ./components/permissions_gates/system_permission_gate/index.ts + 1 modules
var system_permission_gate = __webpack_require__(36846);
// EXTERNAL MODULE: ./components/permissions_gates/team_permission_gate/index.ts + 1 modules
var team_permission_gate = __webpack_require__(33574);
;// CONCATENATED MODULE: ./components/integrations/integration_option.jsx

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class IntegrationOption extends react.PureComponent {
  static get propTypes() {
    return {
      image: (prop_types_default()).string.isRequired,
      title: (prop_types_default()).node.isRequired,
      description: (prop_types_default()).node.isRequired,
      link: (prop_types_default()).string.isRequired
    };
  }

  render() {
    const {
      image,
      title,
      description,
      link
    } = this.props;
    return /*#__PURE__*/react.createElement(react_router_dom.Link, {
      to: link,
      className: "integration-option"
    }, /*#__PURE__*/react.createElement("img", {
      alt: 'integration image',
      className: "integration-option__image",
      src: image
    }), /*#__PURE__*/react.createElement("div", {
      className: "integration-option__title"
    }, title), /*#__PURE__*/react.createElement("div", {
      className: "integration-option__description"
    }, description));
  }

}
;// CONCATENATED MODULE: ./components/integrations/integrations.jsx


function integrations_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.













class Integrations extends react.PureComponent {
  constructor() {
    super(...arguments);

    integrations_defineProperty(this, "updateTitle", () => {
      const currentSiteName = this.props.siteName || '';
      document.title = utils/* localizeMessage */._u('admin.sidebar.integrations', 'Integrations') + ' - ' + this.props.team.display_name + ' ' + currentSiteName;
    });
  }

  static get propTypes() {
    return {
      team: (prop_types_default()).object,
      user: (prop_types_default()).object,
      siteName: (prop_types_default()).string,
      enableIncomingWebhooks: (prop_types_default()).bool,
      enableOutgoingWebhooks: (prop_types_default()).bool,
      enableCommands: (prop_types_default()).bool,
      enableOAuthServiceProvider: (prop_types_default()).bool
    };
  }

  componentDidMount() {
    this.updateTitle();
  }

  render() {
    const options = [];

    if (this.props.enableIncomingWebhooks) {
      options.push( /*#__PURE__*/react.createElement(team_permission_gate/* default */.Z, {
        teamId: this.props.team.id,
        permissions: [constants/* Permissions.MANAGE_INCOMING_WEBHOOKS */.Pl.MANAGE_INCOMING_WEBHOOKS],
        key: "incomingWebhookPermission"
      }, /*#__PURE__*/react.createElement(IntegrationOption, {
        key: "incomingWebhook",
        image: incoming_webhook,
        title: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "integrations.incomingWebhook.title",
          defaultMessage: "Incoming Webhooks"
        }),
        description: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "integrations.incomingWebhook.description",
          defaultMessage: "Incoming webhooks allow external integrations to send messages"
        }),
        link: '/' + this.props.team.name + '/integrations/incoming_webhooks'
      })));
    }

    if (this.props.enableOutgoingWebhooks) {
      options.push( /*#__PURE__*/react.createElement(team_permission_gate/* default */.Z, {
        teamId: this.props.team.id,
        permissions: [constants/* Permissions.MANAGE_OUTGOING_WEBHOOKS */.Pl.MANAGE_OUTGOING_WEBHOOKS],
        key: "outgoingWebhookPermission"
      }, /*#__PURE__*/react.createElement(IntegrationOption, {
        key: "outgoingWebhook",
        image: outgoing_webhook,
        title: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "integrations.outgoingWebhook.title",
          defaultMessage: "Outgoing Webhooks"
        }),
        description: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "integrations.outgoingWebhook.description",
          defaultMessage: "Outgoing webhooks allow external integrations to receive and respond to messages"
        }),
        link: '/' + this.props.team.name + '/integrations/outgoing_webhooks'
      })));
    }

    if (this.props.enableCommands) {
      options.push( /*#__PURE__*/react.createElement(team_permission_gate/* default */.Z, {
        teamId: this.props.team.id,
        permissions: [constants/* Permissions.MANAGE_SLASH_COMMANDS */.Pl.MANAGE_SLASH_COMMANDS],
        key: "commandPermission"
      }, /*#__PURE__*/react.createElement(IntegrationOption, {
        key: "command",
        image: slash_command_icon,
        title: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "integrations.command.title",
          defaultMessage: "Slash Commands"
        }),
        description: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "integrations.command.description",
          defaultMessage: "Slash commands send events to an external integration"
        }),
        link: '/' + this.props.team.name + '/integrations/commands'
      })));
    }

    if (this.props.enableOAuthServiceProvider) {
      options.push( /*#__PURE__*/react.createElement(system_permission_gate/* default */.Z, {
        permissions: [constants/* Permissions.MANAGE_OAUTH */.Pl.MANAGE_OAUTH],
        key: "oauth2AppsPermission"
      }, /*#__PURE__*/react.createElement(IntegrationOption, {
        key: "oauth2Apps",
        image: oauth_icon,
        title: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "integrations.oauthApps.title",
          defaultMessage: "OAuth 2.0 Applications"
        }),
        description: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "integrations.oauthApps.description",
          defaultMessage: "Auth 2.0 allows external applications to make authorized requests to the Mattermost API"
        }),
        link: '/' + this.props.team.name + '/integrations/oauth2-apps'
      })));
    }

    options.push( /*#__PURE__*/react.createElement(system_permission_gate/* default */.Z, {
      permissions: ['manage_bots'],
      key: "botsPermissions"
    }, /*#__PURE__*/react.createElement(IntegrationOption, {
      image: bot_default_icon,
      title: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bots.manage.header",
        defaultMessage: "Bot Accounts"
      }),
      description: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bots.manage.description",
        defaultMessage: "Use bot accounts to integrate with Mattermost through plugins or the API"
      }),
      link: '/' + this.props.team.name + '/integrations/bots'
    })));
    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-content row"
    }, /*#__PURE__*/react.createElement("div", {
      className: "backstage-header"
    }, /*#__PURE__*/react.createElement("h1", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "integrations.header",
      defaultMessage: "Integrations"
    }))), /*#__PURE__*/react.createElement("div", {
      className: "backstage-list__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "integrations.help",
      defaultMessage: "Visit the {appDirectory} to find self-hosted, third-party apps and integrations for Mattermost.",
      values: {
        appDirectory: /*#__PURE__*/react.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: "https://mattermost.com/marketplace"
        }, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "integrations.help.appDirectory",
          defaultMessage: "App Directory"
        }))
      }
    })), /*#__PURE__*/react.createElement("div", {
      className: "integrations-list d-flex flex-wrap"
    }, options));
  }

}
;// CONCATENATED MODULE: ./components/integrations/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function integrations_mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const siteName = config.SiteName;
  const enableIncomingWebhooks = config.EnableIncomingWebhooks === 'true';
  const enableOutgoingWebhooks = config.EnableOutgoingWebhooks === 'true';
  const enableCommands = config.EnableCommands === 'true';
  const enableOAuthServiceProvider = config.EnableOAuthServiceProvider === 'true';
  return {
    siteName,
    enableIncomingWebhooks,
    enableOutgoingWebhooks,
    enableCommands,
    enableOAuthServiceProvider
  };
}

/* harmony default export */ const components_integrations = ((0,es.connect)(integrations_mapStateToProps)(Integrations));
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/roles.ts
var roles = __webpack_require__(74147);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/constants/permissions.ts
var permissions = __webpack_require__(25267);
// EXTERNAL MODULE: ./components/permissions_gates/any_team_permission_gate/index.ts + 1 modules
var any_team_permission_gate = __webpack_require__(26500);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/emojis.ts
var emojis = __webpack_require__(74327);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/emojis.ts
var actions_emojis = __webpack_require__(24377);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/client/index.ts + 4 modules
var client = __webpack_require__(53473);
// EXTERNAL MODULE: ./actions/views/modals.ts
var modals = __webpack_require__(97486);
// EXTERNAL MODULE: ./components/confirm_modal_redux/index.ts + 1 modules
var confirm_modal_redux = __webpack_require__(78289);
;// CONCATENATED MODULE: ./components/integrations/delete_integration_link/delete_integration_link.tsx

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




const ModalId = 'delete_integration_confirm';
function DeleteIntegrationLink(props) {
  const {
    confirmButtonText = /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "integrations.delete.confirm.button",
      defaultMessage: "Delete"
    }),
    linkText = /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_integrations.delete",
      defaultMessage: "Delete"
    }),
    modalMessage,
    modalTitle = /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "integrations.delete.confirm.title",
      defaultMessage: "Delete Integration"
    }),
    onDelete,
    openModal
  } = props;
  const onClick = (0,react.useCallback)(() => {
    openModal({
      modalId: ModalId,
      dialogProps: {
        confirmButtonText,
        message: /*#__PURE__*/react.createElement("div", {
          className: "alert alert-warning"
        }, /*#__PURE__*/react.createElement(fa_warning_icon/* default */.Z, {
          additionalClassName: "mr-1"
        }), props.modalMessage),
        onConfirm: onDelete,
        title: modalTitle
      },
      dialogType: confirm_modal_redux/* default */.Z
    });
  }, [confirmButtonText, modalMessage, modalTitle, onDelete, openModal]);
  return /*#__PURE__*/react.createElement("button", {
    className: "color--link style--none",
    onClick: onClick
  }, linkText);
}
DeleteIntegrationLink.propTypes = {
  confirmButtonText: (prop_types_default()).node,
  linkText: (prop_types_default()).node,
  modalMessage: (prop_types_default()).node,
  modalTitle: (prop_types_default()).node,
  onDelete: (prop_types_default()).func.isRequired,
  openModal: (prop_types_default()).any.isRequired
};
;// CONCATENATED MODULE: ./components/integrations/delete_integration_link/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



const delete_integration_link_mapDispatchToProps = {
  openModal: modals/* openModal */.h
};
/* harmony default export */ const delete_integration_link = ((0,es.connect)(null, delete_integration_link_mapDispatchToProps)(DeleteIntegrationLink));
;// CONCATENATED MODULE: ./components/emoji/emoji_list_item/delete_emoji_button.tsx

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



function DeleteEmojiButton(props) {
  return /*#__PURE__*/react.createElement(delete_integration_link, {
    confirmButtonText: /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "emoji_list.delete.confirm.button",
      defaultMessage: "Delete"
    }),
    linkText: /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "emoji_list.delete",
      defaultMessage: "Delete"
    }),
    modalMessage: /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "emoji_list.delete.confirm.msg",
      defaultMessage: "This action permanently deletes the custom emoji. Are you sure you want to delete it?"
    }),
    modalTitle: /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "emoji_list.delete.confirm.title",
      defaultMessage: "Delete Custom Emoji"
    }),
    onDelete: props.onDelete
  });
}
DeleteEmojiButton.propTypes = {
  onDelete: (prop_types_default()).func.isRequired
};
;// CONCATENATED MODULE: ./components/emoji/emoji_list_item/emoji_list_item.tsx



function emoji_list_item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





class EmojiListItem extends react.PureComponent {
  constructor() {
    super(...arguments);

    emoji_list_item_defineProperty(this, "handleDelete", () => {
      if (this.props.onDelete) {
        this.props.onDelete(this.props.emoji.id);
      }

      this.props.actions.deleteCustomEmoji(this.props.emoji.id);
    });
  }

  render() {
    const emoji = this.props.emoji;
    const creatorUsername = this.props.creatorUsername;
    let creatorDisplayName = this.props.creatorDisplayName;

    if (creatorUsername && creatorUsername !== creatorDisplayName) {
      creatorDisplayName += ' (@' + creatorUsername + ')';
    }

    let deleteButton = /*#__PURE__*/react.createElement(DeleteEmojiButton, {
      onDelete: this.handleDelete
    });

    if (emoji.creator_id === this.props.currentUserId) {
      deleteButton = /*#__PURE__*/react.createElement(any_team_permission_gate/* default */.Z, {
        permissions: [permissions/* default.DELETE_EMOJIS */.Z.DELETE_EMOJIS]
      }, deleteButton);
    } else {
      deleteButton = /*#__PURE__*/react.createElement(any_team_permission_gate/* default */.Z, {
        permissions: [permissions/* default.DELETE_EMOJIS */.Z.DELETE_EMOJIS]
      }, /*#__PURE__*/react.createElement(any_team_permission_gate/* default */.Z, {
        permissions: [permissions/* default.DELETE_OTHERS_EMOJIS */.Z.DELETE_OTHERS_EMOJIS]
      }, deleteButton));
    }

    return /*#__PURE__*/react.createElement("tr", {
      className: "backstage-list__item"
    }, /*#__PURE__*/react.createElement("td", {
      className: "emoji-list__name"
    }, ':' + emoji.name + ':'), /*#__PURE__*/react.createElement("td", {
      className: "emoji-list__image"
    }, /*#__PURE__*/react.createElement("span", {
      className: "emoticon",
      style: {
        backgroundImage: 'url(' + client/* Client4.getCustomEmojiImageUrl */.je.getCustomEmojiImageUrl(emoji.id) + ')'
      }
    })), /*#__PURE__*/react.createElement("td", {
      className: "emoji-list__creator"
    }, creatorDisplayName), /*#__PURE__*/react.createElement("td", {
      className: "emoji-list-item_actions"
    }, deleteButton));
  }

}

emoji_list_item_defineProperty(EmojiListItem, "propTypes", {
  emojiId: (prop_types_default()).string,
  currentUserId: (prop_types_default()).string,
  creatorDisplayName: (prop_types_default()).string,
  creatorUsername: (prop_types_default()).string,
  onDelete: (prop_types_default()).func,
  actions: prop_types_default().shape({
    deleteCustomEmoji: (prop_types_default()).func.isRequired
  }).isRequired
});

emoji_list_item_defineProperty(EmojiListItem, "defaultProps", {
  emoji: {},
  currentUserId: '',
  creatorDisplayName: ''
});
;// CONCATENATED MODULE: ./components/emoji/emoji_list_item/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








function emoji_list_item_mapStateToProps(state, ownProps) {
  const emoji = state.entities.emojis.customEmoji[ownProps.emojiId];
  const creator = (0,entities_users/* getUser */.PR)(state, emoji.creator_id);
  return {
    emoji,
    creatorDisplayName: (0,utils/* getDisplayNameByUser */.hI)(state, creator),
    creatorUsername: creator ? creator.username : '',
    currentUserId: (0,entities_users/* getCurrentUserId */.rc)(state),
    currentTeam: (0,teams/* getCurrentTeam */.kA)(state)
  };
}

function emoji_list_item_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      deleteCustomEmoji: actions_emojis/* deleteCustomEmoji */._2
    }, dispatch)
  };
}

/* harmony default export */ const emoji_list_item = ((0,es.connect)(emoji_list_item_mapStateToProps, emoji_list_item_mapDispatchToProps)(EmojiListItem));
// EXTERNAL MODULE: ./components/widgets/icons/fa_next_icon.tsx
var fa_next_icon = __webpack_require__(86040);
// EXTERNAL MODULE: ./components/widgets/icons/fa_previous_icon.tsx
var fa_previous_icon = __webpack_require__(42243);
// EXTERNAL MODULE: ./components/localized_input/localized_input.tsx
var localized_input = __webpack_require__(927);
;// CONCATENATED MODULE: ./components/emoji/emoji_list/emoji_list.tsx







function emoji_list_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.












const EMOJI_PER_PAGE = 50;
const EMOJI_SEARCH_DELAY_MILLISECONDS = 200;
class EmojiList extends react.PureComponent {
  constructor(props) {
    super(props);

    emoji_list_defineProperty(this, "searchTimeout", void 0);

    emoji_list_defineProperty(this, "nextPage", e => {
      if (e) {
        e.preventDefault();
      }

      const next = this.state.page + 1;
      this.setState({
        nextLoading: true
      });
      this.props.actions.getCustomEmojis(next, EMOJI_PER_PAGE, constants/* Emoji.SORT_BY_NAME */.dy.SORT_BY_NAME, true).then(_ref => {
        let {
          data
        } = _ref;
        this.setState({
          page: next,
          nextLoading: false
        });

        if (data && data.length < EMOJI_PER_PAGE) {
          this.setState({
            missingPages: false
          });
        }

        this.props.scrollToTop();
      });
    });

    emoji_list_defineProperty(this, "previousPage", e => {
      if (e) {
        e.preventDefault();
      }

      this.setState({
        page: this.state.page - 1,
        nextLoading: false,
        missingPages: true
      });
      this.props.scrollToTop();
    });

    emoji_list_defineProperty(this, "onSearchChange", e => {
      if (!e || !e.target) {
        return;
      }

      const term = e.target.value || '';
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(async () => {
        if (term.trim() === '') {
          this.setState({
            searchEmojis: null,
            page: 0
          });
          return;
        }

        this.setState({
          loading: true
        });
        const {
          data
        } = await this.props.actions.searchCustomEmojis(term, {}, true);

        if (data) {
          this.setState({
            searchEmojis: data.map(em => em.id),
            loading: false
          });
        } else {
          this.setState({
            searchEmojis: [],
            loading: false
          });
        }
      }, EMOJI_SEARCH_DELAY_MILLISECONDS);
    });

    emoji_list_defineProperty(this, "deleteFromSearch", emojiId => {
      if (!this.state.searchEmojis) {
        return;
      }

      const index = this.state.searchEmojis.indexOf(emojiId);

      if (index < 0) {
        return;
      }

      const newSearchEmojis = [...this.state.searchEmojis];
      newSearchEmojis.splice(index, 1);
      this.setState({
        searchEmojis: newSearchEmojis
      });
    });

    this.searchTimeout = null;
    this.state = {
      loading: true,
      page: 0,
      nextLoading: false,
      searchEmojis: null,
      missingPages: true
    };
  }

  async componentDidMount() {
    this.props.actions.getCustomEmojis(0, EMOJI_PER_PAGE + 1, constants/* Emoji.SORT_BY_NAME */.dy.SORT_BY_NAME, true).then(_ref2 => {
      let {
        data
      } = _ref2;
      this.setState({
        loading: false
      });

      if (data && data.length < EMOJI_PER_PAGE) {
        this.setState({
          missingPages: false
        });
      }
    });
  }

  render() {
    const searchEmojis = this.state.searchEmojis;
    const emojis = [];
    let nextButton;
    let previousButton;

    if (this.state.loading) {
      emojis.push( /*#__PURE__*/react.createElement("tr", {
        key: "loading",
        className: "backstage-list__item backstage-list__empty"
      }, /*#__PURE__*/react.createElement("td", {
        colSpan: 4
      }, /*#__PURE__*/react.createElement(loading_screen/* default */.Z, {
        key: "loading"
      }))));
    } else if (this.props.emojiIds.length === 0 || searchEmojis && searchEmojis.length === 0) {
      emojis.push( /*#__PURE__*/react.createElement("tr", {
        key: "empty",
        className: "backstage-list__item backstage-list__empty"
      }, /*#__PURE__*/react.createElement("td", {
        colSpan: 4
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "emoji_list.empty",
        defaultMessage: "No custom emoji found"
      }))));
    } else if (searchEmojis) {
      searchEmojis.forEach(emojiId => {
        emojis.push( /*#__PURE__*/react.createElement(emoji_list_item, {
          key: 'emoji_search_item' + emojiId,
          emojiId: emojiId,
          onDelete: this.deleteFromSearch,
          actions: {
            deleteCustomEmoji: actions_emojis/* deleteCustomEmoji */._2
          }
        }));
      });
    } else {
      const pageStart = this.state.page * EMOJI_PER_PAGE;
      const pageEnd = pageStart + EMOJI_PER_PAGE;
      const emojisToDisplay = this.props.emojiIds.slice(pageStart, pageEnd);
      emojisToDisplay.forEach(emojiId => {
        emojis.push( /*#__PURE__*/react.createElement(emoji_list_item, {
          key: 'emoji_list_item' + emojiId,
          emojiId: emojiId,
          actions: {
            deleteCustomEmoji: actions_emojis/* deleteCustomEmoji */._2
          }
        }));
      });

      if (this.state.missingPages) {
        const buttonContents = /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "filtered_user_list.next",
          defaultMessage: "Next"
        }), /*#__PURE__*/react.createElement(fa_next_icon/* default */.Z, {
          additionalClassName: "ml-2"
        }));
        nextButton = /*#__PURE__*/react.createElement(save_button/* default */.Z, {
          btnClass: "btn-link",
          extraClasses: "pull-right",
          onClick: this.nextPage,
          saving: this.state.nextLoading,
          disabled: this.state.nextLoading,
          defaultMessage: buttonContents,
          savingMessage: buttonContents
        });
      }

      if (this.state.page > 0) {
        previousButton = /*#__PURE__*/react.createElement("button", {
          className: "btn btn-link",
          onClick: this.previousPage
        }, /*#__PURE__*/react.createElement(fa_previous_icon/* default */.Z, {
          additionalClassName: "mr-2"
        }), /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "filtered_user_list.prev",
          defaultMessage: "Previous"
        }));
      }
    }

    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
      className: "backstage-filters"
    }, /*#__PURE__*/react.createElement("div", {
      className: "backstage-filter__search"
    }, /*#__PURE__*/react.createElement(fa_search_icon/* default */.Z, null), /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
      type: "search",
      className: "form-control",
      placeholder: {
        id: (0,i18n.t)('emoji_list.search'),
        defaultMessage: 'Search Custom Emoji'
      },
      onChange: this.onSearchChange,
      style: emoji_list_style.search
    }))), /*#__PURE__*/react.createElement("span", {
      className: "backstage-list__help"
    }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "emoji_list.help",
      defaultMessage: "Custom emoji are available to everyone on your server. Type ':' followed by two characters in a message box to bring up the emoji selection menu."
    })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "emoji_list.help2",
      defaultMessage: "Tip: If you add #, ##, or ### as the first character on a new line containing emoji, you can use larger sized emoji. To try it out, send a message such as: '# :smile:'."
    }))), /*#__PURE__*/react.createElement("div", {
      className: "backstage-list"
    }, /*#__PURE__*/react.createElement("table", {
      className: "emoji-list__table"
    }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", {
      className: "backstage-list__item emoji-list__table-header"
    }, /*#__PURE__*/react.createElement("th", {
      className: "emoji-list__name"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "emoji_list.name",
      defaultMessage: "Name"
    })), /*#__PURE__*/react.createElement("th", {
      className: "emoji-list__image"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "emoji_list.image",
      defaultMessage: "Image"
    })), /*#__PURE__*/react.createElement("th", {
      className: "emoji-list__creator"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "emoji_list.creator",
      defaultMessage: "Creator"
    })), /*#__PURE__*/react.createElement("th", {
      className: "emoji-list_actions"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "emoji_list.actions",
      defaultMessage: "Actions"
    })))), /*#__PURE__*/react.createElement("tbody", null, emojis))), /*#__PURE__*/react.createElement("div", {
      className: "filter-controls pt-3"
    }, previousButton, nextButton));
  }

}

emoji_list_defineProperty(EmojiList, "propTypes", {
  emojiIds: prop_types_default().arrayOf((prop_types_default()).string).isRequired,
  scrollToTop: (prop_types_default()).func.isRequired,
  actions: prop_types_default().shape({
    getCustomEmojis: (prop_types_default()).func.isRequired,
    searchCustomEmojis: (prop_types_default()).func.isRequired
  }).isRequired
});

const emoji_list_style = {
  search: {
    flexGrow: 0,
    flexShrink: 0
  }
};
;// CONCATENATED MODULE: ./components/emoji/emoji_list/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function emoji_list_mapStateToProps(state) {
  return {
    emojiIds: (0,emojis/* getCustomEmojiIdsSortedByName */.pI)(state) || []
  };
}

function emoji_list_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      getCustomEmojis: actions_emojis/* getCustomEmojis */.cc,
      searchCustomEmojis: actions_emojis/* searchCustomEmojis */.pL
    }, dispatch)
  };
}

/* harmony default export */ const emoji_list = ((0,es.connect)(emoji_list_mapStateToProps, emoji_list_mapDispatchToProps)(EmojiList));
;// CONCATENATED MODULE: ./components/emoji/emoji_page.tsx



function emoji_page_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







class EmojiPage extends react.PureComponent {
  constructor() {
    super(...arguments);

    emoji_page_defineProperty(this, "updateTitle", () => {
      document.title = utils/* localizeMessage */._u('custom_emoji.header', 'Custom Emoji') + ' - ' + this.props.teamDisplayName + ' ' + this.props.siteName;
    });
  }

  componentDidMount() {
    this.updateTitle();
    this.props.actions.loadRolesIfNeeded(['system_admin', 'team_admin', 'system_user', 'team_user']);
  }

  componentDidUpdate(prevProps) {
    if (this.props.siteName !== prevProps.siteName) {
      this.updateTitle();
    }
  }

  render() {
    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-content emoji-list"
    }, /*#__PURE__*/react.createElement("div", {
      className: "backstage-header"
    }, /*#__PURE__*/react.createElement("h1", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "emoji_list.header",
      defaultMessage: "Custom Emoji"
    })), /*#__PURE__*/react.createElement(any_team_permission_gate/* default */.Z, {
      permissions: [permissions/* default.CREATE_EMOJIS */.Z.CREATE_EMOJIS]
    }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
      className: "add-link",
      to: '/' + this.props.teamName + '/emoji/add'
    }, /*#__PURE__*/react.createElement("button", {
      type: "button",
      className: "btn btn-primary"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "emoji_list.add",
      defaultMessage: "Add Custom Emoji"
    }))))), /*#__PURE__*/react.createElement(emoji_list, {
      scrollToTop: this.props.scrollToTop
    }));
  }

}

emoji_page_defineProperty(EmojiPage, "propTypes", {
  teamId: (prop_types_default()).string.isRequired,
  teamName: (prop_types_default()).string,
  teamDisplayName: (prop_types_default()).string,
  siteName: (prop_types_default()).string,
  actions: prop_types_default().shape({}).isRequired
});

emoji_page_defineProperty(EmojiPage, "defaultProps", {
  teamName: '',
  teamDisplayName: '',
  siteName: ''
});
;// CONCATENATED MODULE: ./components/emoji/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function emoji_mapStateToProps(state) {
  const team = (0,teams/* getCurrentTeam */.kA)(state) || {};
  return {
    teamId: team.id,
    teamName: team.name,
    teamDisplayName: team.display_name,
    siteName: state.entities.general.config.SiteName
  };
}

function emoji_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      loadRolesIfNeeded: roles/* loadRolesIfNeeded */.k3
    }, dispatch)
  };
}

/* harmony default export */ const emoji = ((0,es.connect)(emoji_mapStateToProps, emoji_mapDispatchToProps)(EmojiPage));
// EXTERNAL MODULE: ./selectors/emojis.ts
var selectors_emojis = __webpack_require__(37792);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(23157);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__(27852);
;// CONCATENATED MODULE: ./components/emoji/add_emoji/add_emoji.tsx







function add_emoji_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









class AddEmoji extends react.PureComponent {
  constructor(props) {
    super(props);

    add_emoji_defineProperty(this, "handleFormSubmit", async e => {
      return this.handleSubmit(e);
    });

    add_emoji_defineProperty(this, "handleSaveButtonClick", async e => {
      return this.handleSubmit(e);
    });

    add_emoji_defineProperty(this, "handleSubmit", async e => {
      const {
        actions,
        emojiMap,
        user,
        team
      } = this.props;
      const {
        image,
        name,
        saving
      } = this.state;
      e.preventDefault();

      if (saving) {
        return;
      }

      this.setState({
        saving: true,
        error: null
      });
      const emoji = {
        creator_id: user.id,
        name: name.trim().toLowerCase()
      }; // trim surrounding colons if the user accidentally included them in the name

      if (emoji.name.startsWith(':') && emoji.name.endsWith(':')) {
        emoji.name = emoji.name.substring(1, emoji.name.length - 1);
      }

      if (!emoji.name) {
        this.setState({
          saving: false,
          error: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_emoji.nameRequired",
            defaultMessage: "A name is required for the emoji"
          })
        });
        return;
      }

      if (/[^a-z0-9+_-]/.test(emoji.name)) {
        this.setState({
          saving: false,
          error: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_emoji.nameInvalid",
            defaultMessage: "An emoji's name can only contain lowercase letters, numbers, and the symbols '-', '+' and '_'."
          })
        });
        return;
      }

      if (emojiMap.hasSystemEmoji(emoji.name)) {
        this.setState({
          saving: false,
          error: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_emoji.nameTaken",
            defaultMessage: "This name is already in use by a system emoji. Please choose another name."
          })
        });
        return;
      }

      if (emojiMap.has(emoji.name)) {
        this.setState({
          saving: false,
          error: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_emoji.customNameTaken",
            defaultMessage: "This name is already in use by a custom emoji. Please choose another name."
          })
        });
        return;
      }

      if (!image) {
        this.setState({
          saving: false,
          error: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_emoji.imageRequired",
            defaultMessage: "An image is required for the emoji"
          })
        });
        return;
      }

      const maxFileSizeBytes = 1024 * 1024;

      if (image.size > maxFileSizeBytes) {
        this.setState({
          saving: false,
          error: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_emoji.imageTooLarge",
            defaultMessage: "Unable to create emoji. Image must be less than 1 MB in size."
          })
        });
        return;
      }

      const response = await actions.createCustomEmoji(emoji, image);

      if ('data' in response) {
        const savedEmoji = response;

        if (savedEmoji && savedEmoji.data.name === emoji.name) {
          browser_history/* browserHistory.push */.m.push('/' + team.name + '/emoji');
          return;
        }
      }

      if ('error' in response) {
        const responseError = response;

        if (responseError) {
          this.setState({
            saving: false,
            error: responseError.error.message
          });
          return;
        }
      }

      const genericError = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "add_emoji.failedToAdd",
        defaultMessage: "Something when wrong when adding the custom emoji."
      });
      this.setState({
        saving: false,
        error: genericError
      });
    });

    add_emoji_defineProperty(this, "updateName", e => {
      this.setState({
        name: e.target.value
      });
    });

    add_emoji_defineProperty(this, "updateImage", e => {
      if (e.target.files == null || e.target.files.length === 0) {
        this.setState({
          image: null,
          imageUrl: ''
        });
        return;
      }

      const image = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.setState({
          image,
          imageUrl: reader.result
        });
      };

      reader.readAsDataURL(image);
    });

    this.state = {
      name: '',
      image: null,
      imageUrl: '',
      saving: false,
      error: null
    };
  }

  render() {
    let filename = null;

    if (this.state.image) {
      filename = /*#__PURE__*/react.createElement("span", {
        className: "add-emoji__filename"
      }, this.state.image.name);
    }

    let preview = null;

    if (this.state.imageUrl) {
      preview = /*#__PURE__*/react.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label col-sm-4",
        htmlFor: "preview"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "add_emoji.preview",
        defaultMessage: "Preview"
      })), /*#__PURE__*/react.createElement("div", {
        className: "col-md-5 col-sm-8 add-emoji__preview"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "add_emoji.preview.sentence",
        defaultMessage: "This is a sentence with {image} in it.",
        values: {
          image: /*#__PURE__*/react.createElement("span", {
            className: "emoticon",
            style: {
              backgroundImage: 'url(' + this.state.imageUrl + ')'
            }
          })
        }
      })));
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-content row"
    }, /*#__PURE__*/react.createElement(BackstageHeader, null, /*#__PURE__*/react.createElement(react_router_dom.Link, {
      to: '/' + this.props.team.name + '/emoji'
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "emoji_list.header",
      defaultMessage: "Custom Emoji"
    })), /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_emoji.header",
      defaultMessage: "Add"
    })), /*#__PURE__*/react.createElement("div", {
      className: "backstage-form"
    }, /*#__PURE__*/react.createElement("form", {
      className: "form-horizontal",
      onSubmit: this.handleFormSubmit
    }, /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "name"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_emoji.name",
      defaultMessage: "Name"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "name",
      type: "text",
      maxLength: 64,
      className: "form-control",
      value: this.state.name,
      onChange: this.updateName
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_emoji.name.help",
      defaultMessage: "Name your emoji. The name can be up to 64 characters, and can contain lowercase letters, numbers, and the symbols '-' and '_'."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "image"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_emoji.image",
      defaultMessage: "Image"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
      className: "add-emoji__upload"
    }, /*#__PURE__*/react.createElement("button", {
      className: "btn btn-primary"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_emoji.image.button",
      defaultMessage: "Select"
    })), /*#__PURE__*/react.createElement("input", {
      id: "select-emoji",
      type: "file",
      accept: utils_constants/* Constants.ACCEPT_EMOJI_IMAGE */.gT.ACCEPT_EMOJI_IMAGE,
      multiple: false,
      onChange: this.updateImage
    })), filename, /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_emoji.image.help",
      defaultMessage: "Specify a .gif, .png, or .jpg file of up to 64 KB for your emoji. The dimensions can be up to 128 pixels by 128 pixels."
    }))))), preview, /*#__PURE__*/react.createElement("div", {
      className: "backstage-form__footer"
    }, /*#__PURE__*/react.createElement(form_error/* default */.Z, {
      type: "backstage",
      error: this.state.error
    }), /*#__PURE__*/react.createElement(react_router_dom.Link, {
      className: "btn btn-link btn-sm",
      to: '/' + this.props.team.name + '/emoji'
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_emoji.cancel",
      defaultMessage: "Cancel"
    })), /*#__PURE__*/react.createElement(spinner_button/* default */.Z, {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.saving,
      spinningText: (0,utils/* localizeMessage */._u)('add_emoji.saving', 'Saving...'),
      onClick: this.handleSaveButtonClick
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_emoji.save",
      defaultMessage: "Save"
    }))))));
  }

}

add_emoji_defineProperty(AddEmoji, "propTypes", {
  actions: prop_types_default().shape({
    createCustomEmoji: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/emoji/add_emoji/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function add_emoji_mapStateToProps(state) {
  return {
    emojiMap: (0,selectors_emojis/* getEmojiMap */.kM)(state)
  };
}

function add_emoji_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      createCustomEmoji: actions_emojis/* createCustomEmoji */.uK
    }, dispatch)
  };
}

/* harmony default export */ const add_emoji = ((0,es.connect)(add_emoji_mapStateToProps, add_emoji_mapDispatchToProps)(AddEmoji));
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/channels.ts
var channels = __webpack_require__(9276);
;// CONCATENATED MODULE: ./actions/integration_actions.jsx

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




const DEFAULT_PAGE_SIZE = 100;
function loadIncomingHooksAndProfilesForTeam(teamId) {
  let page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_PAGE_SIZE;
  return async dispatch => {
    const {
      data
    } = await dispatch(integrations/* getIncomingHooks */.tJ(teamId, page, perPage));

    if (data) {
      dispatch(loadProfilesForIncomingHooks(data));
    }
  };
}
function loadProfilesForIncomingHooks(hooks) {
  return async (dispatch, getState) => {
    const state = getState();
    const profilesToLoad = {};

    for (let i = 0; i < hooks.length; i++) {
      const hook = hooks[i];

      if (!(0,entities_users/* getUser */.PR)(state, hook.user_id)) {
        profilesToLoad[hook.user_id] = true;
      }
    }

    const list = Object.keys(profilesToLoad);

    if (list.length === 0) {
      return;
    }

    dispatch((0,users/* getProfilesByIds */.Ef)(list));
  };
}
function loadOutgoingHooksAndProfilesForTeam(teamId) {
  let page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_PAGE_SIZE;
  return async dispatch => {
    const {
      data
    } = await dispatch(integrations/* getOutgoingHooks */.w9('', teamId, page, perPage));

    if (data) {
      dispatch(loadProfilesForOutgoingHooks(data));
    }
  };
}
function loadProfilesForOutgoingHooks(hooks) {
  return async (dispatch, getState) => {
    const state = getState();
    const profilesToLoad = {};

    for (let i = 0; i < hooks.length; i++) {
      const hook = hooks[i];

      if (!(0,entities_users/* getUser */.PR)(state, hook.creator_id)) {
        profilesToLoad[hook.creator_id] = true;
      }
    }

    const list = Object.keys(profilesToLoad);

    if (list.length === 0) {
      return;
    }

    dispatch((0,users/* getProfilesByIds */.Ef)(list));
  };
}
function loadCommandsAndProfilesForTeam(teamId) {
  return async dispatch => {
    const {
      data
    } = await dispatch(integrations/* getCustomTeamCommands */.cC(teamId));

    if (data) {
      dispatch(loadProfilesForCommands(data));
    }
  };
}
function loadProfilesForCommands(commands) {
  return async (dispatch, getState) => {
    const state = getState();
    const profilesToLoad = {};

    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];

      if (!(0,entities_users/* getUser */.PR)(state, command.creator_id)) {
        profilesToLoad[command.creator_id] = true;
      }
    }

    const list = Object.keys(profilesToLoad);

    if (list.length === 0) {
      return;
    }

    dispatch((0,users/* getProfilesByIds */.Ef)(list));
  };
}
function loadOAuthAppsAndProfiles() {
  let page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_PAGE_SIZE;
  return async (dispatch, getState) => {
    if ((0,apps/* appsEnabled */.D8)(getState())) {
      dispatch(integrations/* getAppsOAuthAppIDs */.D());
    }

    const {
      data
    } = await dispatch(integrations/* getOAuthApps */.i5(page, perPage));

    if (data) {
      dispatch(loadProfilesForOAuthApps(data));
    }
  };
}
function loadProfilesForOAuthApps(apps) {
  return async (dispatch, getState) => {
    const state = getState();
    const profilesToLoad = {};

    for (let i = 0; i < apps.length; i++) {
      const app = apps[i];

      if (!(0,entities_users/* getUser */.PR)(state, app.creator_id)) {
        profilesToLoad[app.creator_id] = true;
      }
    }

    const list = Object.keys(profilesToLoad);

    if (list.length === 0) {
      return;
    }

    dispatch((0,users/* getProfilesByIds */.Ef)(list));
  };
}
;// CONCATENATED MODULE: ./components/copy_text.tsx



function copy_text_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class CopyText extends react.PureComponent {
  constructor() {
    super(...arguments);

    copy_text_defineProperty(this, "copyText", e => {
      e.preventDefault();
      (0,utils/* copyToClipboard */.vQ)(this.props.value);
    });
  }

  render() {
    if (!document.queryCommandSupported('copy')) {
      return null;
    }

    const tooltip = /*#__PURE__*/react.createElement(components_tooltip/* default */.Z, {
      id: "copy"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: this.props.idMessage,
      defaultMessage: this.props.defaultMessage
    }));
    return /*#__PURE__*/react.createElement(overlay_trigger/* default */.Z, {
      delayShow: utils_constants/* default.OVERLAY_TIME_DELAY */.ZP.OVERLAY_TIME_DELAY,
      placement: "top",
      overlay: tooltip
    }, /*#__PURE__*/react.createElement("a", {
      href: "#",
      "data-testid": "copyText",
      className: "fa fa-copy ml-2",
      onClick: this.copyText
    }));
  }

}

copy_text_defineProperty(CopyText, "propTypes", {
  value: (prop_types_default()).string.isRequired,
  defaultMessage: (prop_types_default()).string,
  idMessage: (prop_types_default()).string
});

copy_text_defineProperty(CopyText, "defaultProps", {
  defaultMessage: 'Copy',
  idMessage: 'integrations.copy'
});
;// CONCATENATED MODULE: ./components/integrations/installed_incoming_webhook.jsx
function installed_incoming_webhook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function installed_incoming_webhook_matchesFilter(incomingWebhook, channel, filter) {
  if (!filter) {
    return true;
  }

  if (incomingWebhook.display_name.toLowerCase().indexOf(filter) !== -1 || incomingWebhook.description.toLowerCase().indexOf(filter) !== -1) {
    return true;
  }

  if (incomingWebhook.channel_id) {
    if (channel && channel.name.toLowerCase().indexOf(filter) !== -1) {
      return true;
    }
  }

  return false;
}
class InstalledIncomingWebhook extends react.PureComponent {
  constructor() {
    super(...arguments);

    installed_incoming_webhook_defineProperty(this, "handleDelete", () => {
      this.props.onDelete(this.props.incomingWebhook);
    });
  }

  render() {
    const incomingWebhook = this.props.incomingWebhook;
    const channel = this.props.channel;
    const filter = this.props.filter ? this.props.filter.toLowerCase() : '';

    if (!installed_incoming_webhook_matchesFilter(incomingWebhook, channel, filter)) {
      return null;
    }

    let displayName;

    if (incomingWebhook.display_name) {
      displayName = incomingWebhook.display_name;
    } else if (channel) {
      displayName = channel.display_name;
    } else {
      displayName = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_incoming_webhooks.unknown_channel",
        defaultMessage: "A Private Webhook"
      });
    }

    let description = null;

    if (incomingWebhook.description) {
      description = /*#__PURE__*/react.createElement("div", {
        className: "item-details__row"
      }, /*#__PURE__*/react.createElement("span", {
        className: "item-details__description"
      }, incomingWebhook.description));
    }

    let actions = null;

    if (this.props.canChange) {
      actions = /*#__PURE__*/react.createElement("div", {
        className: "item-actions"
      }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
        to: "/".concat(this.props.team.name, "/integrations/incoming_webhooks/edit?id=").concat(incomingWebhook.id)
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_integrations.edit",
        defaultMessage: "Edit"
      })), ' - ', /*#__PURE__*/react.createElement(delete_integration_link, {
        modalMessage: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "installed_incoming_webhooks.delete.confirm",
          defaultMessage: "This action permanently deletes the incoming webhook and breaks any integrations using it. Are you sure you want to delete it?"
        }),
        onDelete: this.handleDelete
      }));
    }

    const incomingWebhookId = (0,url/* getSiteURL */.fO)() + '/hooks/' + incomingWebhook.id;
    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-list__item"
    }, /*#__PURE__*/react.createElement("div", {
      className: "item-details"
    }, /*#__PURE__*/react.createElement("div", {
      className: "item-details__row d-flex flex-column flex-md-row justify-content-between"
    }, /*#__PURE__*/react.createElement("strong", {
      className: "item-details__name"
    }, displayName), actions), description, /*#__PURE__*/react.createElement("div", {
      className: "item-details__row"
    }, /*#__PURE__*/react.createElement("span", {
      className: "item-details__url word-break--all"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_integrations.url",
      defaultMessage: "URL: {url}",
      values: {
        url: incomingWebhookId
      }
    }), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(CopyText, {
      value: incomingWebhookId
    })))), /*#__PURE__*/react.createElement("div", {
      className: "item-details__row"
    }, /*#__PURE__*/react.createElement("span", {
      className: "item-details__creation"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_integrations.creation",
      defaultMessage: "Created by {creator} on {createAt, date, full}",
      values: {
        creator: this.props.creator.username,
        createAt: incomingWebhook.create_at
      }
    })))));
  }

}

installed_incoming_webhook_defineProperty(InstalledIncomingWebhook, "propTypes", {
  /**
  * Data used for showing webhook details
  */
  incomingWebhook: (prop_types_default()).object.isRequired,

  /**
  * Function to call when webhook delete button is pressed
  */
  onDelete: (prop_types_default()).func.isRequired,

  /**
  * String used for filtering webhook item
  */
  filter: (prop_types_default()).string,

  /**
  * Data used for showing created by details
  */
  creator: (prop_types_default()).object.isRequired,

  /**
  *  Set to show available actions on webhook
  */
  canChange: (prop_types_default()).bool.isRequired,

  /**
  *  Data used in routing of webhook for modifications
  */
  team: (prop_types_default()).object.isRequired,

  /**
  *  Data used for filtering of webhook based on filter prop
  */
  channel: (prop_types_default()).object
});
;// CONCATENATED MODULE: ./components/integrations/installed_incoming_webhooks/installed_incoming_webhooks.tsx



function installed_incoming_webhooks_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







class InstalledIncomingWebhooks extends react.PureComponent {
  constructor(props) {
    super(props);

    installed_incoming_webhooks_defineProperty(this, "deleteIncomingWebhook", incomingWebhook => {
      this.props.actions.removeIncomingHook(incomingWebhook.id);
    });

    installed_incoming_webhooks_defineProperty(this, "incomingWebhookCompare", (a, b) => {
      let displayNameA = a.display_name;

      if (!displayNameA) {
        const channelA = this.props.channels[a.channel_id];

        if (channelA) {
          displayNameA = channelA.display_name;
        } else {
          displayNameA = utils/* localizeMessage */._u('installed_incoming_webhooks.unknown_channel', 'A Private Webhook');
        }
      }

      const displayNameB = b.display_name;
      return displayNameA.localeCompare(displayNameB);
    });

    installed_incoming_webhooks_defineProperty(this, "incomingWebhooks", filter => this.props.incomingWebhooks.sort(this.incomingWebhookCompare).filter(incomingWebhook => installed_incoming_webhook_matchesFilter(incomingWebhook, this.props.channels[incomingWebhook.channel_id], filter)).map(incomingWebhook => {
      const canChange = this.props.canManageOthersWebhooks || this.props.user.id === incomingWebhook.user_id;
      const channel = this.props.channels[incomingWebhook.channel_id];
      return /*#__PURE__*/react.createElement(InstalledIncomingWebhook, {
        key: incomingWebhook.id,
        incomingWebhook: incomingWebhook,
        onDelete: this.deleteIncomingWebhook,
        creator: this.props.users[incomingWebhook.user_id] || {},
        canChange: canChange,
        team: this.props.team,
        channel: channel
      });
    }));

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    if (this.props.enableIncomingWebhooks) {
      this.props.actions.loadIncomingHooksAndProfilesForTeam(this.props.team.id, utils_constants/* default.Integrations.START_PAGE_NUM */.ZP.Integrations.START_PAGE_NUM, utils_constants/* default.Integrations.PAGE_SIZE */.ZP.Integrations.PAGE_SIZE).then(() => this.setState({
        loading: false
      }));
    }
  }

  render() {
    return /*#__PURE__*/react.createElement(BackstageList, {
      header: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_incoming_webhooks.header",
        defaultMessage: "Installed Incoming Webhooks"
      }),
      addText: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_incoming_webhooks.add",
        defaultMessage: "Add Incoming Webhook"
      }),
      addLink: '/' + this.props.team.name + '/integrations/incoming_webhooks/add',
      addButtonId: "addIncomingWebhook",
      emptyText: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_incoming_webhooks.empty",
        defaultMessage: "No incoming webhooks found"
      }),
      emptyTextSearch: /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "installed_incoming_webhooks.emptySearch",
        defaultMessage: "No incoming webhooks match {searchTerm}"
      }),
      helpText: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_incoming_webhooks.help",
        defaultMessage: "Use incoming webhooks to connect external tools to Mattermost. {buildYourOwn} or visit the {appDirectory} to find self-hosted, third-party apps and integrations.",
        values: {
          buildYourOwn: /*#__PURE__*/react.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://developers.mattermost.com/integrate/admin-guide/admin-webhooks-incoming/"
          }, /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "installed_incoming_webhooks.help.buildYourOwn",
            defaultMessage: "Build Your Own"
          })),
          appDirectory: /*#__PURE__*/react.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://mattermost.com/marketplace"
          }, /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "installed_incoming_webhooks.help.appDirectory",
            defaultMessage: "App Directory"
          }))
        }
      }),
      searchPlaceholder: utils/* localizeMessage */._u('installed_incoming_webhooks.search', 'Search Incoming Webhooks'),
      loading: this.state.loading
    }, filter => {
      const children = this.incomingWebhooks(filter);
      return [children, children.length > 0];
    });
  }

}

installed_incoming_webhooks_defineProperty(InstalledIncomingWebhooks, "propTypes", {
  canManageOthersWebhooks: (prop_types_default()).bool.isRequired,
  incomingWebhooks: (prop_types_default()).array.isRequired,
  enableIncomingWebhooks: (prop_types_default()).bool.isRequired,
  actions: prop_types_default().shape({
    removeIncomingHook: (prop_types_default()).func.isRequired,
    loadIncomingHooksAndProfilesForTeam: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/integrations/installed_incoming_webhooks/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.













function installed_incoming_webhooks_mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const teamId = (0,teams/* getCurrentTeamId */.ev)(state);
  const canManageOthersWebhooks = (0,entities_roles/* haveITeamPermission */.Rm)(state, teamId, constants/* Permissions.MANAGE_OTHERS_INCOMING_WEBHOOKS */.Pl.MANAGE_OTHERS_INCOMING_WEBHOOKS);
  const incomingHooks = getIncomingHooks(state);
  const incomingWebhooks = Object.keys(incomingHooks).map(key => incomingHooks[key]).filter(incomingWebhook => incomingWebhook.team_id === teamId);
  const enableIncomingWebhooks = config.EnableIncomingWebhooks === 'true';
  return {
    incomingWebhooks,
    channels: (0,channels/* getAllChannels */.IU)(state),
    users: (0,entities_users/* getUsers */.Rf)(state),
    canManageOthersWebhooks,
    enableIncomingWebhooks
  };
}

function installed_incoming_webhooks_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      loadIncomingHooksAndProfilesForTeam: loadIncomingHooksAndProfilesForTeam,
      removeIncomingHook: integrations/* removeIncomingHook */.Ht
    }, dispatch)
  };
}

/* harmony default export */ const installed_incoming_webhooks = ((0,es.connect)(installed_incoming_webhooks_mapStateToProps, installed_incoming_webhooks_mapDispatchToProps)(InstalledIncomingWebhooks));
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/i18n.ts
var entities_i18n = __webpack_require__(29757);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/utils/channel_utils.ts
var channel_utils = __webpack_require__(80555);
;// CONCATENATED MODULE: ./components/channel_select/channel_select.tsx


function channel_select_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class ChannelSelect extends react.PureComponent {
  render() {
    const options = [/*#__PURE__*/react.createElement("option", {
      key: "",
      value: ""
    }, utils/* localizeMessage */._u('channel_select.placeholder', '--- Select a channel ---'))];
    this.props.channels.forEach(channel => {
      const channelName = channel.display_name || channel.name;

      if (channel.type === utils_constants/* default.OPEN_CHANNEL */.ZP.OPEN_CHANNEL && this.props.selectOpen) {
        options.push( /*#__PURE__*/react.createElement("option", {
          key: channel.id,
          value: channel.id
        }, channelName));
      } else if (channel.type === utils_constants/* default.PRIVATE_CHANNEL */.ZP.PRIVATE_CHANNEL && this.props.selectPrivate) {
        options.push( /*#__PURE__*/react.createElement("option", {
          key: channel.id,
          value: channel.id
        }, channelName));
      } else if (channel.type === utils_constants/* default.DM_CHANNEL */.ZP.DM_CHANNEL && this.props.selectDm) {
        options.push( /*#__PURE__*/react.createElement("option", {
          key: channel.id,
          value: channel.id
        }, channelName));
      }
    });
    return /*#__PURE__*/react.createElement("select", {
      className: "form-control",
      value: this.props.value,
      onChange: this.props.onChange,
      id: "channelSelect"
    }, options);
  }

}

channel_select_defineProperty(ChannelSelect, "propTypes", {
  channels: (prop_types_default()).array.isRequired,
  onChange: (prop_types_default()).func,
  value: (prop_types_default()).string,
  selectOpen: (prop_types_default()).bool.isRequired,
  selectPrivate: (prop_types_default()).bool.isRequired,
  selectDm: (prop_types_default()).bool.isRequired
});
;// CONCATENATED MODULE: ./components/channel_select/index.ts


// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const getMyChannelsSorted = (0,src/* createSelector */.P1)('getMyChannelsSorted', channels/* getMyChannels */.qB, entities_i18n/* getCurrentUserLocale */.M, (channels, locale) => {
  return [...channels].sort(channel_utils/* sortChannelsByTypeAndDisplayName.bind */.Ut.bind(null, locale));
});

function channel_select_mapStateToProps(state) {
  return {
    channels: getMyChannelsSorted(state)
  };
}

/* harmony default export */ const channel_select = ((0,es.connect)(channel_select_mapStateToProps)(ChannelSelect));
;// CONCATENATED MODULE: ./components/integrations/abstract_incoming_webhook.jsx


function abstract_incoming_webhook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









class AbstractIncomingWebhook extends react.PureComponent {
  constructor(props) {
    super(props);

    abstract_incoming_webhook_defineProperty(this, "getStateFromHook", hook => {
      return {
        displayName: hook.display_name || '',
        description: hook.description || '',
        channelId: hook.channel_id || '',
        channelLocked: hook.channel_locked || false,
        username: hook.username || '',
        iconURL: hook.icon_url || '',
        saving: false,
        serverError: '',
        clientError: null
      };
    });

    abstract_incoming_webhook_defineProperty(this, "handleSubmit", e => {
      e.preventDefault();

      if (this.state.saving) {
        return;
      }

      this.setState({
        saving: true,
        serverError: '',
        clientError: ''
      });

      if (!this.state.channelId) {
        this.setState({
          saving: false,
          clientError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_incoming_webhook.channelRequired",
            defaultMessage: "A valid channel is required"
          })
        });
        return;
      }

      const hook = {
        channel_id: this.state.channelId,
        channel_locked: this.state.channelLocked,
        display_name: this.state.displayName,
        description: this.state.description,
        username: this.state.username,
        icon_url: this.state.iconURL
      };
      this.props.action(hook).then(() => this.setState({
        saving: false
      }));
    });

    abstract_incoming_webhook_defineProperty(this, "updateDisplayName", e => {
      this.setState({
        displayName: e.target.value
      });
    });

    abstract_incoming_webhook_defineProperty(this, "updateDescription", e => {
      this.setState({
        description: e.target.value
      });
    });

    abstract_incoming_webhook_defineProperty(this, "updateChannelId", e => {
      this.setState({
        channelId: e.target.value
      });
    });

    abstract_incoming_webhook_defineProperty(this, "updateChannelLocked", e => {
      this.setState({
        channelLocked: e.target.checked
      });
    });

    abstract_incoming_webhook_defineProperty(this, "updateUsername", e => {
      this.setState({
        username: e.target.value
      });
    });

    abstract_incoming_webhook_defineProperty(this, "updateIconURL", e => {
      this.setState({
        iconURL: e.target.value
      });
    });

    this.state = this.getStateFromHook(this.props.initialHook || {});
  }

  render() {
    var headerToRender = this.props.header;
    var footerToRender = this.props.footer;
    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-content"
    }, /*#__PURE__*/react.createElement(BackstageHeader, null, /*#__PURE__*/react.createElement(react_router_dom.Link, {
      to: "/".concat(this.props.team.name, "/integrations/incoming_webhooks")
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_incoming_webhooks.header",
      defaultMessage: "Incoming Webhooks"
    })), /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: headerToRender.id,
      defaultMessage: headerToRender.defaultMessage
    })), /*#__PURE__*/react.createElement("div", {
      className: "backstage-form"
    }, /*#__PURE__*/react.createElement("form", {
      className: "form-horizontal",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "displayName"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_incoming_webhook.displayName",
      defaultMessage: "Title"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "displayName",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.displayName,
      onChange: this.updateDisplayName
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_incoming_webhook.displayName.help",
      defaultMessage: "Specify a title, of up to 64 characters, for the webhook settings page."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "description"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_incoming_webhook.description",
      defaultMessage: "Description"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "description",
      type: "text",
      maxLength: "500",
      className: "form-control",
      value: this.state.description,
      onChange: this.updateDescription
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_incoming_webhook.description.help",
      defaultMessage: "Describe your incoming webhook."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "channelId"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_incoming_webhook.channel",
      defaultMessage: "Channel"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement(channel_select, {
      id: "channelId",
      value: this.state.channelId,
      onChange: this.updateChannelId,
      selectOpen: true,
      selectPrivate: true
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_incoming_webhook.channel.help",
      defaultMessage: "This is the default public or private channel that receives the webhook payloads.  When setting up the webhook, you must belong to the private channel."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "channelLocked"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_incoming_webhook.channelLocked",
      defaultMessage: "Lock to this channel"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8 checkbox"
    }, /*#__PURE__*/react.createElement("input", {
      id: "channelLocked",
      type: "checkbox",
      checked: this.state.channelLocked,
      onChange: this.updateChannelLocked
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_incoming_webhook.channelLocked.help",
      defaultMessage: "If set, the incoming webhook can post only to the selected channel."
    })))), this.props.enablePostUsernameOverride && /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "username"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_incoming_webhook.username",
      defaultMessage: "Username"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "username",
      type: "text",
      maxLength: "22",
      className: "form-control",
      value: this.state.username,
      onChange: this.updateUsername
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_incoming_webhook.username.help",
      defaultMessage: "Specify the username this integration will post as. Usernames can be up to 22 characters, and can contain lowercase letters, numbers and the symbols \\\"-\\\", \\\"_\\\", and \\\".\\\". If left blank, the name specified by the webhook creator is used."
    })))), this.props.enablePostIconOverride && /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "iconURL"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_incoming_webhook.icon_url",
      defaultMessage: "Profile Picture"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "iconURL",
      type: "text",
      maxLength: "1024",
      className: "form-control",
      value: this.state.iconURL,
      onChange: this.updateIconURL
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_incoming_webhook.icon_url.help",
      defaultMessage: "Enter the URL of a .png or .jpg file for the profile picture of this integration when posting. The file should be at least 128 pixels by 128 pixels. If left blank, the profile picture specified by the webhook creator is used."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "backstage-form__footer"
    }, /*#__PURE__*/react.createElement(form_error/* default */.Z, {
      type: "backstage",
      errors: [this.props.serverError, this.state.clientError]
    }), /*#__PURE__*/react.createElement(react_router_dom.Link, {
      className: "btn btn-link btn-sm",
      to: "/".concat(this.props.team.name, "/integrations/incoming_webhooks")
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_incoming_webhook.cancel",
      defaultMessage: "Cancel"
    })), /*#__PURE__*/react.createElement(spinner_button/* default */.Z, {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.saving,
      spinningText: (0,utils/* localizeMessage */._u)(this.props.loading.id, this.props.loading.defaultMessage),
      onClick: this.handleSubmit,
      id: "saveWebhook"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: footerToRender.id,
      defaultMessage: footerToRender.defaultMessage
    }))))));
  }

}

abstract_incoming_webhook_defineProperty(AbstractIncomingWebhook, "propTypes", {
  /**
  * The current team
  */
  team: (prop_types_default()).object.isRequired,

  /**
  * The header text to render, has id and defaultMessage
  */
  header: (prop_types_default()).object.isRequired,

  /**
  * The footer text to render, has id and defaultMessage
  */
  footer: (prop_types_default()).object.isRequired,

  /**
  * The spinner loading text to render, has id and defaultMessage
  */
  loading: (prop_types_default()).object.isRequired,

  /**
  * The server error text after a failed action
  */
  serverError: (prop_types_default()).string.isRequired,

  /**
  * The hook used to set the initial state
  */
  initialHook: (prop_types_default()).object,

  /**
  * Whether to allow configuration of the default post username.
  */
  enablePostUsernameOverride: (prop_types_default()).bool.isRequired,

  /**
  * Whether to allow configuration of the default post icon.
  */
  enablePostIconOverride: (prop_types_default()).bool.isRequired,

  /**
  * The async function to run when the action button is pressed
  */
  action: (prop_types_default()).func.isRequired
});
;// CONCATENATED MODULE: ./components/integrations/add_incoming_webhook/add_incoming_webhook.tsx



function add_incoming_webhook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




const HEADER = {
  id: (0,i18n.t)('integrations.add'),
  defaultMessage: 'Add'
};
const FOOTER = {
  id: (0,i18n.t)('add_incoming_webhook.save'),
  defaultMessage: 'Save'
};
const LOADING = {
  id: (0,i18n.t)('add_incoming_webhook.saving'),
  defaultMessage: 'Saving...'
};
class AddIncomingWebhook extends react.PureComponent {
  constructor(props) {
    super(props);

    add_incoming_webhook_defineProperty(this, "addIncomingHook", async hook => {
      this.setState({
        serverError: ''
      });
      const {
        data,
        error
      } = await this.props.actions.createIncomingHook(hook);

      if (data) {
        browser_history/* browserHistory.push */.m.push("/".concat(this.props.team.name, "/integrations/confirm?type=incoming_webhooks&id=").concat(data.id));
        return;
      }

      if (error) {
        this.setState({
          serverError: error.message
        });
      }
    });

    this.state = {
      serverError: ''
    };
  }

  render() {
    return /*#__PURE__*/react.createElement(AbstractIncomingWebhook, {
      team: this.props.team,
      header: HEADER,
      footer: FOOTER,
      loading: LOADING,
      enablePostUsernameOverride: this.props.enablePostUsernameOverride,
      enablePostIconOverride: this.props.enablePostIconOverride,
      action: this.addIncomingHook,
      serverError: this.state.serverError
    });
  }

}

add_incoming_webhook_defineProperty(AddIncomingWebhook, "propTypes", {
  enablePostUsernameOverride: (prop_types_default()).bool.isRequired,
  enablePostIconOverride: (prop_types_default()).bool.isRequired,
  actions: prop_types_default().shape({
    createIncomingHook: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/integrations/add_incoming_webhook/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function add_incoming_webhook_mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const enablePostUsernameOverride = config.EnablePostUsernameOverride === 'true';
  const enablePostIconOverride = config.EnablePostIconOverride === 'true';
  return {
    enablePostUsernameOverride,
    enablePostIconOverride
  };
}

function add_incoming_webhook_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      createIncomingHook: integrations/* createIncomingHook */.ct
    }, dispatch)
  };
}

/* harmony default export */ const add_incoming_webhook = ((0,es.connect)(add_incoming_webhook_mapStateToProps, add_incoming_webhook_mapDispatchToProps)(AddIncomingWebhook));
;// CONCATENATED MODULE: ./components/integrations/edit_incoming_webhook/edit_incoming_webhook.tsx



function edit_incoming_webhook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const edit_incoming_webhook_HEADER = {
  id: (0,i18n.t)('integrations.edit'),
  defaultMessage: 'Edit'
};
const edit_incoming_webhook_FOOTER = {
  id: (0,i18n.t)('update_incoming_webhook.update'),
  defaultMessage: 'Update'
};
const edit_incoming_webhook_LOADING = {
  id: (0,i18n.t)('update_incoming_webhook.updating'),
  defaultMessage: 'Updating...'
};
class EditIncomingWebhook extends react.PureComponent {
  constructor(props) {
    super(props);

    edit_incoming_webhook_defineProperty(this, "newHook", void 0);

    edit_incoming_webhook_defineProperty(this, "editIncomingHook", async hook => {
      var _this$props$hook;

      this.newHook = hook;

      if ((_this$props$hook = this.props.hook) !== null && _this$props$hook !== void 0 && _this$props$hook.id) {
        hook.id = this.props.hook.id;
      }

      await this.submitHook();
    });

    edit_incoming_webhook_defineProperty(this, "submitHook", async () => {
      this.setState({
        serverError: ''
      });

      if (!this.newHook) {
        return;
      }

      const result = await this.props.actions.updateIncomingHook(this.newHook);

      if ('data' in result) {
        browser_history/* browserHistory.push */.m.push("/".concat(this.props.team.name, "/integrations/incoming_webhooks"));
        return;
      }

      if ('error' in result) {
        const {
          error
        } = result;
        this.setState({
          serverError: error.message
        });
      }
    });

    this.state = {
      showConfirmModal: false,
      serverError: ''
    };
  }

  componentDidMount() {
    if (this.props.enableIncomingWebhooks) {
      this.props.actions.getIncomingHook(this.props.hookId);
    }
  }

  render() {
    if (!this.props.hook) {
      return /*#__PURE__*/react.createElement(loading_screen/* default */.Z, null);
    }

    return /*#__PURE__*/react.createElement(AbstractIncomingWebhook, {
      team: this.props.team,
      header: edit_incoming_webhook_HEADER,
      footer: edit_incoming_webhook_FOOTER,
      loading: edit_incoming_webhook_LOADING,
      enablePostUsernameOverride: this.props.enablePostUsernameOverride,
      enablePostIconOverride: this.props.enablePostIconOverride,
      action: this.editIncomingHook,
      serverError: this.state.serverError,
      initialHook: this.props.hook
    });
  }

}

edit_incoming_webhook_defineProperty(EditIncomingWebhook, "propTypes", {
  hookId: (prop_types_default()).string.isRequired,
  enableIncomingWebhooks: (prop_types_default()).bool.isRequired,
  enablePostUsernameOverride: (prop_types_default()).bool.isRequired,
  enablePostIconOverride: (prop_types_default()).bool.isRequired,
  actions: prop_types_default().shape({
    updateIncomingHook: (prop_types_default()).func.isRequired,
    getIncomingHook: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/integrations/edit_incoming_webhook/index.ts




// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function edit_incoming_webhook_mapStateToProps(state, ownProps) {
  const config = (0,general/* getConfig */.iE)(state);
  const enableIncomingWebhooks = config.EnableIncomingWebhooks === 'true';
  const enablePostUsernameOverride = config.EnablePostUsernameOverride === 'true';
  const enablePostIconOverride = config.EnablePostIconOverride === 'true';
  const hookId = new URLSearchParams(ownProps.location.search).get('id') || '';
  return {
    hookId,
    hook: state.entities.integrations.incomingHooks[hookId],
    enableIncomingWebhooks,
    enablePostUsernameOverride,
    enablePostIconOverride
  };
}

function edit_incoming_webhook_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      updateIncomingHook: integrations/* updateIncomingHook */.V4,
      getIncomingHook: integrations/* getIncomingHook */.kA
    }, dispatch)
  };
}

/* harmony default export */ const edit_incoming_webhook = ((0,es.connect)(edit_incoming_webhook_mapStateToProps, edit_incoming_webhook_mapDispatchToProps)(EditIncomingWebhook));
;// CONCATENATED MODULE: ./components/integrations/installed_outgoing_webhook.jsx
function installed_outgoing_webhook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function installed_outgoing_webhook_matchesFilter(outgoingWebhook, channel, filter) {
  if (!filter) {
    return true;
  }

  const {
    display_name: displayName,
    description,
    trigger_words: triggerWords
  } = outgoingWebhook;

  if (displayName && displayName.toLowerCase().indexOf(filter) !== -1 || description && description.toLowerCase().indexOf(filter) !== -1) {
    return true;
  }

  if (triggerWords) {
    for (const triggerWord of triggerWords) {
      if (triggerWord.toLowerCase().indexOf(filter) !== -1) {
        return true;
      }
    }
  }

  if (channel && channel.name) {
    if (channel.name.toLowerCase().indexOf(filter) !== -1) {
      return true;
    }
  }

  return false;
}
class InstalledOutgoingWebhook extends react.PureComponent {
  constructor() {
    super(...arguments);

    installed_outgoing_webhook_defineProperty(this, "handleRegenToken", e => {
      e.preventDefault();
      this.props.onRegenToken(this.props.outgoingWebhook);
    });

    installed_outgoing_webhook_defineProperty(this, "handleDelete", () => {
      this.props.onDelete(this.props.outgoingWebhook);
    });
  }

  makeDisplayName(outgoingWebhook, channel) {
    if (outgoingWebhook.display_name) {
      return outgoingWebhook.display_name;
    } else if (channel) {
      return channel.display_name;
    }

    return /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_outgoing_webhooks.unknown_channel",
      defaultMessage: "A Private Webhook"
    });
  }

  render() {
    const outgoingWebhook = this.props.outgoingWebhook;
    const channel = this.props.channel;
    const filter = this.props.filter ? this.props.filter.toLowerCase() : '';
    const triggerWordsFull = 0;
    const triggerWordsStartsWith = 1;

    if (outgoingWebhook && !installed_outgoing_webhook_matchesFilter(outgoingWebhook, channel, filter)) {
      return null;
    }

    const displayName = this.makeDisplayName(outgoingWebhook, channel);
    let description = null;

    if (outgoingWebhook.description) {
      description = /*#__PURE__*/react.createElement("div", {
        className: "item-details__row"
      }, /*#__PURE__*/react.createElement("span", {
        className: "item-details__description"
      }, outgoingWebhook.description));
    }

    let triggerWords = null;

    if (outgoingWebhook.trigger_words && outgoingWebhook.trigger_words.length > 0) {
      triggerWords = /*#__PURE__*/react.createElement("div", {
        className: "item-details__row"
      }, /*#__PURE__*/react.createElement("span", {
        className: "item-details__trigger-words"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_integrations.triggerWords",
        defaultMessage: "Trigger Words: {triggerWords}",
        values: {
          triggerWords: outgoingWebhook.trigger_words.join(', ')
        }
      })));
    }

    const urls = /*#__PURE__*/react.createElement("div", {
      className: "item-details__row"
    }, /*#__PURE__*/react.createElement("span", {
      className: "item-details__url word-break--all"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_integrations.callback_urls",
      defaultMessage: "Callback URLs: {urls}",
      values: {
        urls: outgoingWebhook.callback_urls.join(', ')
      }
    })));
    let triggerWhen;

    if (outgoingWebhook.trigger_when === triggerWordsFull) {
      triggerWhen = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "add_outgoing_webhook.triggerWordsTriggerWhenFullWord",
        defaultMessage: "First word matches a trigger word exactly"
      });
    } else if (outgoingWebhook.trigger_when === triggerWordsStartsWith) {
      triggerWhen = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "add_outgoing_webhook.triggerWordsTriggerWhenStartsWith",
        defaultMessage: "First word starts with a trigger word"
      });
    }

    let actions = null;

    if (this.props.canChange) {
      actions = /*#__PURE__*/react.createElement("div", {
        className: "item-actions"
      }, /*#__PURE__*/react.createElement("button", {
        className: "style--none color--link",
        onClick: this.handleRegenToken
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_integrations.regenToken",
        defaultMessage: "Regen Token"
      })), ' - ', /*#__PURE__*/react.createElement(react_router_dom.Link, {
        to: "/".concat(this.props.team.name, "/integrations/outgoing_webhooks/edit?id=").concat(outgoingWebhook.id)
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_integrations.edit",
        defaultMessage: "Edit"
      })), ' - ', /*#__PURE__*/react.createElement(delete_integration_link, {
        modalMessage: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "installed_outgoing_webhooks.delete.confirm",
          defaultMessage: "This action permanently deletes the outgoing webhook and breaks any integrations using it. Are you sure you want to delete it?"
        }),
        onDelete: this.handleDelete
      }));
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-list__item"
    }, /*#__PURE__*/react.createElement("div", {
      className: "item-details"
    }, /*#__PURE__*/react.createElement("div", {
      className: "item-details__row d-flex flex-column flex-md-row justify-content-between"
    }, /*#__PURE__*/react.createElement("strong", {
      className: "item-details__name"
    }, displayName), actions), description, /*#__PURE__*/react.createElement("div", {
      className: "item-details__row"
    }, /*#__PURE__*/react.createElement("span", {
      className: "item-details__content_type"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_integrations.content_type",
      defaultMessage: "Content-Type: {contentType}",
      values: {
        contentType: outgoingWebhook.content_type || 'application/x-www-form-urlencoded'
      }
    }))), triggerWords, /*#__PURE__*/react.createElement("div", {
      className: "item-details__row"
    }, /*#__PURE__*/react.createElement("span", {
      className: "item-details__trigger-when"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_integrations.triggerWhen",
      defaultMessage: "Trigger When: {triggerWhen}",
      values: {
        triggerWhen
      }
    }))), /*#__PURE__*/react.createElement("div", {
      className: "item-details__row"
    }, /*#__PURE__*/react.createElement("span", {
      className: "item-details__token"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_integrations.token",
      defaultMessage: "Token: {token}",
      values: {
        token: outgoingWebhook.token
      }
    }), /*#__PURE__*/react.createElement(CopyText, {
      value: outgoingWebhook.token
    }))), /*#__PURE__*/react.createElement("div", {
      className: "item-details__row"
    }, /*#__PURE__*/react.createElement("span", {
      className: "item-details__creation"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_integrations.creation",
      defaultMessage: "Created by {creator} on {createAt, date, full}",
      values: {
        creator: this.props.creator.username,
        createAt: outgoingWebhook.create_at
      }
    }))), urls));
  }

}

installed_outgoing_webhook_defineProperty(InstalledOutgoingWebhook, "propTypes", {
  /**
  * Data used for showing webhook details
  */
  outgoingWebhook: (prop_types_default()).object.isRequired,

  /**
  * Function used for webhook token regeneration
  */
  onRegenToken: (prop_types_default()).func.isRequired,

  /**
  * Function to call when webhook delete button is pressed
  */
  onDelete: (prop_types_default()).func.isRequired,

  /**
  * String used for filtering webhook item
  */
  filter: (prop_types_default()).string,

  /**
  * Data used for showing created by details
  */
  creator: (prop_types_default()).object.isRequired,

  /**
  *  Set to show available actions on webhook
  */
  canChange: (prop_types_default()).bool.isRequired,

  /**
  *  Data used in routing of webhook for modifications
  */
  team: (prop_types_default()).object.isRequired,

  /**
  *  Data used for filtering of webhooks based in filter prop
  */
  channel: (prop_types_default()).object
});
;// CONCATENATED MODULE: ./components/integrations/installed_outgoing_webhooks/installed_outgoing_webhooks.jsx


function installed_outgoing_webhooks_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class InstalledOutgoingWebhooks extends react.PureComponent {
  constructor(props) {
    super(props);

    installed_outgoing_webhooks_defineProperty(this, "regenOutgoingWebhookToken", outgoingWebhook => {
      this.props.actions.regenOutgoingHookToken(outgoingWebhook.id);
    });

    installed_outgoing_webhooks_defineProperty(this, "removeOutgoingHook", outgoingWebhook => {
      this.props.actions.removeOutgoingHook(outgoingWebhook.id);
    });

    installed_outgoing_webhooks_defineProperty(this, "outgoingWebhookCompare", (a, b) => {
      let displayNameA = a.display_name;

      if (!displayNameA) {
        const channelA = this.props.channels[a.channel_id];

        if (channelA) {
          displayNameA = channelA.display_name;
        } else {
          displayNameA = utils/* localizeMessage */._u('installed_outgoing_webhooks.unknown_channel', 'A Private Webhook');
        }
      }

      let displayNameB = b.display_name;

      if (!displayNameB) {
        const channelB = this.props.channels[b.channel_id];

        if (channelB) {
          displayNameB = channelB.display_name;
        } else {
          displayNameB = utils/* localizeMessage */._u('installed_outgoing_webhooks.unknown_channel', 'A Private Webhook');
        }
      }

      return displayNameA.localeCompare(displayNameB);
    });

    installed_outgoing_webhooks_defineProperty(this, "outgoingWebhooks", filter => this.props.outgoingWebhooks.sort(this.outgoingWebhookCompare).filter(outgoingWebhook => installed_outgoing_webhook_matchesFilter(outgoingWebhook, this.props.channels[outgoingWebhook.channel_id], filter)).map(outgoingWebhook => {
      const canChange = this.props.canManageOthersWebhooks || this.props.user.id === outgoingWebhook.creator_id;
      const channel = this.props.channels[outgoingWebhook.channel_id];
      return /*#__PURE__*/react.createElement(InstalledOutgoingWebhook, {
        key: outgoingWebhook.id,
        outgoingWebhook: outgoingWebhook,
        onRegenToken: this.regenOutgoingWebhookToken,
        onDelete: this.removeOutgoingHook,
        creator: this.props.users[outgoingWebhook.creator_id] || {},
        canChange: canChange,
        team: this.props.team,
        channel: channel
      });
    }));

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    if (this.props.enableOutgoingWebhooks) {
      this.props.actions.loadOutgoingHooksAndProfilesForTeam(this.props.teamId, utils_constants/* default.Integrations.START_PAGE_NUM */.ZP.Integrations.START_PAGE_NUM, utils_constants/* default.Integrations.PAGE_SIZE */.ZP.Integrations.PAGE_SIZE).then(() => this.setState({
        loading: false
      }));
    }
  }

  render() {
    return /*#__PURE__*/react.createElement(BackstageList, {
      header: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_outgoing_webhooks.header",
        defaultMessage: "Installed Outgoing Webhooks"
      }),
      addText: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_outgoing_webhooks.add",
        defaultMessage: "Add Outgoing Webhook"
      }),
      addLink: '/' + this.props.team.name + '/integrations/outgoing_webhooks/add',
      addButtonId: "addOutgoingWebhook",
      emptyText: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_outgoing_webhooks.empty",
        defaultMessage: "No outgoing webhooks found"
      }),
      emptyTextSearch: /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "installed_outgoing_webhooks.emptySearch",
        defaultMessage: "No outgoing webhooks match {searchTerm}"
      }),
      helpText: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_outgoing_webhooks.help",
        defaultMessage: "Use outgoing webhooks to connect external tools to Mattermost. {buildYourOwn} or visit the {appDirectory} to find self-hosted, third-party apps and integrations.",
        values: {
          buildYourOwn: /*#__PURE__*/react.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://developers.mattermost.com/integrate/admin-guide/admin-webhooks-outgoing/"
          }, /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "installed_outgoing_webhooks.help.buildYourOwn",
            defaultMessage: "Build your own"
          })),
          appDirectory: /*#__PURE__*/react.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://mattermost.com/marketplace"
          }, /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "installed_outgoing_webhooks.help.appDirectory",
            defaultMessage: "App Directory"
          }))
        }
      }),
      searchPlaceholder: utils/* localizeMessage */._u('installed_outgoing_webhooks.search', 'Search Outgoing Webhooks'),
      loading: this.state.loading
    }, filter => {
      const children = this.outgoingWebhooks(filter);
      return [children, children.length > 0];
    });
  }

}

installed_outgoing_webhooks_defineProperty(InstalledOutgoingWebhooks, "propTypes", {
  /**
  *  Data used in passing down as props for webhook modifications
  */
  team: (prop_types_default()).object,

  /**
  * Data used for checking if webhook is created by current user
  */
  user: (prop_types_default()).object,

  /**
  *  Data used for checking modification privileges
  */
  canManageOthersWebhooks: (prop_types_default()).bool,

  /**
  * Data used in passing down as props for showing webhook details
  */
  outgoingWebhooks: (prop_types_default()).array,

  /**
  * Data used in sorting for displaying list and as props channel details
  */
  channels: (prop_types_default()).object,

  /**
  *  Data used in passing down as props for webhook -created by label
  */
  users: (prop_types_default()).object,

  /**
  *  Data used in passing as argument for loading webhooks
  */
  teamId: (prop_types_default()).string,
  actions: prop_types_default().shape({
    /**
    * The function to call for removing outgoingWebhook
    */
    removeOutgoingHook: (prop_types_default()).func,

    /**
    * The function to call for outgoingWebhook List and for the status of api
    */
    loadOutgoingHooksAndProfilesForTeam: (prop_types_default()).func,

    /**
    * The function to call for regeneration of webhook token
    */
    regenOutgoingHookToken: (prop_types_default()).func
  }),

  /**
  * Whether or not outgoing webhooks are enabled.
  */
  enableOutgoingWebhooks: (prop_types_default()).bool
});
;// CONCATENATED MODULE: ./components/integrations/installed_outgoing_webhooks/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.













function installed_outgoing_webhooks_mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const teamId = (0,teams/* getCurrentTeamId */.ev)(state);
  const canManageOthersWebhooks = (0,entities_roles/* haveITeamPermission */.Rm)(state, teamId, constants/* Permissions.MANAGE_OTHERS_OUTGOING_WEBHOOKS */.Pl.MANAGE_OTHERS_OUTGOING_WEBHOOKS);
  const outgoingHooks = getOutgoingHooks(state);
  const outgoingWebhooks = Object.keys(outgoingHooks).map(key => outgoingHooks[key]).filter(outgoingWebhook => outgoingWebhook.team_id === teamId);
  const enableOutgoingWebhooks = config.EnableOutgoingWebhooks === 'true';
  return {
    outgoingWebhooks,
    channels: (0,channels/* getAllChannels */.IU)(state),
    users: (0,entities_users/* getUsers */.Rf)(state),
    teamId,
    canManageOthersWebhooks,
    enableOutgoingWebhooks
  };
}

function installed_outgoing_webhooks_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      loadOutgoingHooksAndProfilesForTeam: loadOutgoingHooksAndProfilesForTeam,
      removeOutgoingHook: integrations/* removeOutgoingHook */.vn,
      regenOutgoingHookToken: integrations/* regenOutgoingHookToken */.Bm
    }, dispatch)
  };
}

/* harmony default export */ const installed_outgoing_webhooks = ((0,es.connect)(installed_outgoing_webhooks_mapStateToProps, installed_outgoing_webhooks_mapDispatchToProps)(InstalledOutgoingWebhooks));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(23123);
;// CONCATENATED MODULE: ./components/integrations/abstract_outgoing_webhook.jsx







function abstract_outgoing_webhook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









class AbstractOutgoingWebhook extends react.PureComponent {
  constructor(props) {
    super(props);

    abstract_outgoing_webhook_defineProperty(this, "getStateFromHook", hook => {
      let triggerWords = '';

      if (hook.trigger_words) {
        let i = 0;

        for (i = 0; i < hook.trigger_words.length; i++) {
          triggerWords += hook.trigger_words[i] + '\n';
        }
      }

      let callbackUrls = '';

      if (hook.callback_urls) {
        let i = 0;

        for (i = 0; i < hook.callback_urls.length; i++) {
          callbackUrls += hook.callback_urls[i] + '\n';
        }
      }

      return {
        displayName: hook.display_name || '',
        description: hook.description || '',
        contentType: hook.content_type || 'application/x-www-form-urlencoded',
        channelId: hook.channel_id || '',
        triggerWords,
        triggerWhen: hook.trigger_when || 0,
        callbackUrls,
        saving: false,
        clientError: null,
        username: hook.username || '',
        iconURL: hook.icon_url || ''
      };
    });

    abstract_outgoing_webhook_defineProperty(this, "handleSubmit", e => {
      e.preventDefault();

      if (this.state.saving) {
        return;
      }

      this.setState({
        saving: true,
        clientError: ''
      });
      const triggerWords = [];

      if (this.state.triggerWords) {
        for (let triggerWord of this.state.triggerWords.split('\n')) {
          triggerWord = triggerWord.trim();

          if (triggerWord.length > 0) {
            triggerWords.push(triggerWord);
          }
        }
      }

      if (!this.state.channelId && triggerWords.length === 0) {
        this.setState({
          saving: false,
          clientError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_outgoing_webhook.triggerWordsOrChannelRequired",
            defaultMessage: "A valid channel or a list of trigger words is required"
          })
        });
        return;
      }

      const callbackUrls = [];

      for (let callbackUrl of this.state.callbackUrls.split('\n')) {
        callbackUrl = callbackUrl.trim();

        if (callbackUrl.length > 0) {
          callbackUrls.push(callbackUrl);
        }
      }

      if (callbackUrls.length === 0) {
        this.setState({
          saving: false,
          clientError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_outgoing_webhook.callbackUrlsRequired",
            defaultMessage: "One or more callback URLs are required"
          })
        });
        return;
      }

      const hook = {
        team_id: this.props.team.id,
        channel_id: this.state.channelId,
        trigger_words: triggerWords,
        trigger_when: parseInt(this.state.triggerWhen, 10),
        callback_urls: callbackUrls,
        display_name: this.state.displayName,
        content_type: this.state.contentType,
        description: this.state.description,
        username: this.state.username,
        icon_url: this.state.iconURL
      };
      this.props.action(hook).then(() => this.setState({
        saving: false
      }));
    });

    abstract_outgoing_webhook_defineProperty(this, "updateDisplayName", e => {
      this.setState({
        displayName: e.target.value
      });
    });

    abstract_outgoing_webhook_defineProperty(this, "updateDescription", e => {
      this.setState({
        description: e.target.value
      });
    });

    abstract_outgoing_webhook_defineProperty(this, "updateContentType", e => {
      this.setState({
        contentType: e.target.value
      });
    });

    abstract_outgoing_webhook_defineProperty(this, "updateChannelId", e => {
      this.setState({
        channelId: e.target.value
      });
    });

    abstract_outgoing_webhook_defineProperty(this, "updateTriggerWords", e => {
      this.setState({
        triggerWords: e.target.value
      });
    });

    abstract_outgoing_webhook_defineProperty(this, "updateTriggerWhen", e => {
      this.setState({
        triggerWhen: e.target.value
      });
    });

    abstract_outgoing_webhook_defineProperty(this, "updateCallbackUrls", e => {
      this.setState({
        callbackUrls: e.target.value
      });
    });

    abstract_outgoing_webhook_defineProperty(this, "updateUsername", e => {
      this.setState({
        username: e.target.value
      });
    });

    abstract_outgoing_webhook_defineProperty(this, "updateIconURL", e => {
      this.setState({
        iconURL: e.target.value
      });
    });

    this.state = this.getStateFromHook(this.props.initialHook || {});
  }

  render() {
    const contentTypeOption1 = 'application/x-www-form-urlencoded';
    const contentTypeOption2 = 'application/json';
    var headerToRender = this.props.header;
    var footerToRender = this.props.footer;
    var renderExtra = this.props.renderExtra;
    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-content"
    }, /*#__PURE__*/react.createElement(BackstageHeader, null, /*#__PURE__*/react.createElement(react_router_dom.Link, {
      to: "/".concat(this.props.team.name, "/integrations/outgoing_webhooks")
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_outgoing_webhooks.header",
      defaultMessage: "Outgoing Webhooks"
    })), /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: headerToRender.id,
      defaultMessage: headerToRender.defaultMessage
    })), /*#__PURE__*/react.createElement("div", {
      className: "backstage-form"
    }, /*#__PURE__*/react.createElement("form", {
      className: "form-horizontal",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "displayName"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.displayName",
      defaultMessage: "Title"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "displayName",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.displayName,
      onChange: this.updateDisplayName
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.displayName.help",
      defaultMessage: "Specify a title, of up to 64 characters, for the webhook settings page."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "description"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.description",
      defaultMessage: "Description"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "description",
      type: "text",
      maxLength: "500",
      className: "form-control",
      value: this.state.description,
      onChange: this.updateDescription
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.description.help",
      defaultMessage: "Describe your outgoing webhook."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "contentType"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.content_Type",
      defaultMessage: "Content Type"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("select", {
      className: "form-control",
      value: this.state.contentType,
      onChange: this.updateContentType
    }, /*#__PURE__*/react.createElement("option", {
      value: contentTypeOption1
    }, contentTypeOption1), /*#__PURE__*/react.createElement("option", {
      value: contentTypeOption2
    }, contentTypeOption2)), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.contentType.help1",
      defaultMessage: "Specify the content type by which to send the request."
    })), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.contentType.help2",
      defaultMessage: "For the server to encode the parameters in a URL format in the request body, select application/x-www-form-urlencoded."
    })), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.contentType.help3",
      defaultMessage: "For the server to format the request body as JSON, select application/json."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "channelId"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.channel",
      defaultMessage: "Channel"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement(channel_select, {
      id: "channelId",
      value: this.state.channelId,
      onChange: this.updateChannelId,
      selectOpen: true
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.channel.help",
      defaultMessage: "This field is optional if you specify at least one trigger word. Specify the public channel that delivers the payload to the webhook."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "triggerWords"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.triggerWords",
      defaultMessage: "Trigger Words (One Per Line)"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("textarea", {
      id: "triggerWords",
      rows: "3",
      maxLength: "1000",
      className: "form-control",
      value: this.state.triggerWords,
      onChange: this.updateTriggerWords
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.triggerWords.help",
      defaultMessage: "Specify the trigger words that send an HTTP POST request to your application.  The trigger can be for the channel, the outgoing webhook, or both. If you select only Channel, trigger words are optional. If you select both, the message must match both values."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "triggerWords"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.triggerWordsTriggerWhen",
      defaultMessage: "Trigger When"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("select", {
      className: "form-control",
      value: this.state.triggerWhen,
      onChange: this.updateTriggerWhen
    }, /*#__PURE__*/react.createElement("option", {
      value: "0"
    }, (0,utils/* localizeMessage */._u)('add_outgoing_webhook.triggerWordsTriggerWhenFullWord', 'First word matches a trigger word exactly')), /*#__PURE__*/react.createElement("option", {
      value: "1"
    }, (0,utils/* localizeMessage */._u)('add_outgoing_webhook.triggerWordsTriggerWhenStartsWith', 'First word starts with a trigger word'))), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.triggerWordsTriggerWhen.help",
      defaultMessage: "Specify when to trigger the outgoing webhook."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "callbackUrls"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.callbackUrls",
      defaultMessage: "Callback URLs (One Per Line)"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("textarea", {
      id: "callbackUrls",
      rows: "3",
      maxLength: "1000",
      className: "form-control",
      value: this.state.callbackUrls,
      onChange: this.updateCallbackUrls
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.callbackUrls.help",
      defaultMessage: "Specify the URL that the messages will be sent to. If the URL is private, add it as a {link}.",
      values: {
        link: /*#__PURE__*/react.createElement("a", {
          href: "https://docs.mattermost.com/configure/configuration-settings.html#session-lengths",
          target: "_blank",
          rel: "noopener noreferrer"
        }, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "add_outgoing_webhook.callbackUrls.helpLinkText",
          defaultMessage: "trusted internal connection"
        }))
      }
    })))), this.props.enablePostUsernameOverride && /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "username"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.username",
      defaultMessage: "Username"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "username",
      type: "text",
      maxLength: "22",
      className: "form-control",
      value: this.state.username,
      onChange: this.updateUsername
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.username.help",
      defaultMessage: "Specify the username this integration will post as. Usernames can be up to 22 characters, and contain lowercase letters, numbers and the symbols \\\"-\\\", \\\"_\\\", and \\\".\\\". If left blank, the name specified by the webhook creator is used."
    })))), this.props.enablePostIconOverride && /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "iconURL"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.icon_url",
      defaultMessage: "Profile Picture"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "iconURL",
      type: "text",
      maxLength: "1024",
      className: "form-control",
      value: this.state.iconURL,
      onChange: this.updateIconURL
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.icon_url.help",
      defaultMessage: "Enter the URL of a .png or .jpg file for this integration to use as the profile picture when posting. The file should be at least 128 pixels by 128 pixels. If left blank, the profile picture specified by the webhook creator is used."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "backstage-form__footer"
    }, /*#__PURE__*/react.createElement(form_error/* default */.Z, {
      type: "backstage",
      errors: [this.props.serverError, this.state.clientError]
    }), /*#__PURE__*/react.createElement(react_router_dom.Link, {
      className: "btn btn-link btn-sm",
      to: "/".concat(this.props.team.name, "/integrations/outgoing_webhooks")
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_outgoing_webhook.cancel",
      defaultMessage: "Cancel"
    })), /*#__PURE__*/react.createElement(spinner_button/* default */.Z, {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.saving,
      spinningText: (0,utils/* localizeMessage */._u)(this.props.loading.id, this.props.loading.defaultMessage),
      onClick: this.handleSubmit,
      id: "saveWebhook"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: footerToRender.id,
      defaultMessage: footerToRender.defaultMessage
    })), renderExtra))));
  }

}

abstract_outgoing_webhook_defineProperty(AbstractOutgoingWebhook, "propTypes", {
  /**
   * The current team
   */
  team: (prop_types_default()).object.isRequired,

  /**
   * The header text to render, has id and defaultMessage
   */
  header: (prop_types_default()).object.isRequired,

  /**
   * The footer text to render, has id and defaultMessage
   */
  footer: (prop_types_default()).object.isRequired,

  /**
  * The spinner loading text to render, has id and defaultMessage
  */
  loading: (prop_types_default()).object.isRequired,

  /**
   * Any extra component/node to render
   */
  renderExtra: (prop_types_default()).node.isRequired,

  /**
   * The server error text after a failed action
   */
  serverError: (prop_types_default()).string.isRequired,

  /**
   * The hook used to set the initial state
   */
  initialHook: (prop_types_default()).object,

  /**
   * The async function to run when the action button is pressed
   */
  action: (prop_types_default()).func.isRequired,

  /**
   * Whether to allow configuration of the default post username.
   */
  enablePostUsernameOverride: (prop_types_default()).bool.isRequired,

  /**
   * Whether to allow configuration of the default post icon.
   */
  enablePostIconOverride: (prop_types_default()).bool.isRequired
});
;// CONCATENATED MODULE: ./components/integrations/add_outgoing_webhook/add_outgoing_webhook.jsx


function add_outgoing_webhook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const add_outgoing_webhook_HEADER = {
  id: (0,i18n.t)('integrations.add'),
  defaultMessage: 'Add'
};
const add_outgoing_webhook_FOOTER = {
  id: (0,i18n.t)('add_outgoing_webhook.save'),
  defaultMessage: 'Save'
};
const add_outgoing_webhook_LOADING = {
  id: (0,i18n.t)('add_outgoing_webhook.saving'),
  defaultMessage: 'Saving...'
};
class AddOutgoingWebhook extends react.PureComponent {
  constructor(props) {
    super(props);

    add_outgoing_webhook_defineProperty(this, "addOutgoingHook", async hook => {
      this.setState({
        serverError: ''
      });
      const {
        data,
        error
      } = await this.props.actions.createOutgoingHook(hook);

      if (data) {
        browser_history/* browserHistory.push */.m.push("/".concat(this.props.team.name, "/integrations/confirm?type=outgoing_webhooks&id=").concat(data.id));
        return;
      }

      if (error) {
        this.setState({
          serverError: error.message
        });
      }
    });

    this.state = {
      serverError: ''
    };
  }

  render() {
    return /*#__PURE__*/react.createElement(AbstractOutgoingWebhook, {
      team: this.props.team,
      header: add_outgoing_webhook_HEADER,
      footer: add_outgoing_webhook_FOOTER,
      loading: add_outgoing_webhook_LOADING,
      renderExtra: '',
      action: this.addOutgoingHook,
      serverError: this.state.serverError,
      enablePostUsernameOverride: this.props.enablePostUsernameOverride,
      enablePostIconOverride: this.props.enablePostIconOverride
    });
  }

}

add_outgoing_webhook_defineProperty(AddOutgoingWebhook, "propTypes", {
  /**
   * The current team
   */
  team: (prop_types_default()).object.isRequired,
  actions: prop_types_default().shape({
    /**
     * The function to call to add a new outgoing webhook
     */
    createOutgoingHook: (prop_types_default()).func.isRequired
  }).isRequired,

  /**
   * Whether to allow configuration of the default post username.
   */
  enablePostUsernameOverride: (prop_types_default()).bool.isRequired,

  /**
   * Whether to allow configuration of the default post icon.
   */
  enablePostIconOverride: (prop_types_default()).bool.isRequired
});
;// CONCATENATED MODULE: ./components/integrations/add_outgoing_webhook/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function add_outgoing_webhook_mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const enablePostUsernameOverride = config.EnablePostUsernameOverride === 'true';
  const enablePostIconOverride = config.EnablePostIconOverride === 'true';
  return {
    enablePostUsernameOverride,
    enablePostIconOverride
  };
}

function add_outgoing_webhook_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      createOutgoingHook: integrations/* createOutgoingHook */.M1
    }, dispatch)
  };
}

/* harmony default export */ const add_outgoing_webhook = ((0,es.connect)(add_outgoing_webhook_mapStateToProps, add_outgoing_webhook_mapDispatchToProps)(AddOutgoingWebhook));
;// CONCATENATED MODULE: ./components/integrations/edit_outgoing_webhook/edit_outgoing_webhook.tsx



function edit_outgoing_webhook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const edit_outgoing_webhook_HEADER = {
  id: 'integrations.edit',
  defaultMessage: 'Edit'
};
const edit_outgoing_webhook_FOOTER = {
  id: 'update_outgoing_webhook.update',
  defaultMessage: 'Update'
};
const edit_outgoing_webhook_LOADING = {
  id: 'update_outgoing_webhook.updating',
  defaultMessage: 'Updating...'
};
class EditOutgoingWebhook extends react.PureComponent {
  constructor(props) {
    super(props);

    edit_outgoing_webhook_defineProperty(this, "newHook", void 0);

    edit_outgoing_webhook_defineProperty(this, "editOutgoingHook", async hook => {
      this.newHook = hook;

      if (this.props.hook.id) {
        hook.id = this.props.hook.id;
      }

      if (this.props.hook.token) {
        hook.token = this.props.hook.token;
      }

      const triggerWordsSame = this.props.hook.trigger_words.length === hook.trigger_words.length && this.props.hook.trigger_words.every((v, i) => v === hook.trigger_words[i]);
      const callbackUrlsSame = this.props.hook.callback_urls.length === hook.callback_urls.length && this.props.hook.callback_urls.every((v, i) => v === hook.callback_urls[i]);

      if (this.props.hook.content_type !== hook.content_type || !triggerWordsSame || !callbackUrlsSame) {
        this.handleConfirmModal();
      } else {
        await this.submitHook();
      }
    });

    edit_outgoing_webhook_defineProperty(this, "handleConfirmModal", () => {
      this.setState({
        showConfirmModal: true
      });
    });

    edit_outgoing_webhook_defineProperty(this, "confirmModalDismissed", () => {
      this.setState({
        showConfirmModal: false
      });
    });

    edit_outgoing_webhook_defineProperty(this, "submitHook", async () => {
      this.setState({
        serverError: ''
      });
      const {
        data,
        error
      } = await this.props.actions.updateOutgoingHook(this.newHook);

      if (data) {
        browser_history/* browserHistory.push */.m.push("/".concat(this.props.team.name, "/integrations/outgoing_webhooks"));
        return;
      }

      this.setState({
        showConfirmModal: false
      });

      if (error) {
        this.setState({
          serverError: error.message
        });
      }
    });

    edit_outgoing_webhook_defineProperty(this, "renderExtra", () => {
      const confirmButton = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "update_outgoing_webhook.update",
        defaultMessage: "Update"
      });
      const confirmTitle = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "update_outgoing_webhook.confirm",
        defaultMessage: "Edit Outgoing Webhook"
      });
      const confirmMessage = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "update_outgoing_webhook.question",
        defaultMessage: "Your changes may break the existing outgoing webhook. Are you sure you would like to update it?"
      });
      return /*#__PURE__*/react.createElement(confirm_modal/* default */.Z, {
        title: confirmTitle,
        message: confirmMessage,
        confirmButtonText: confirmButton,
        show: this.state.showConfirmModal,
        onConfirm: this.submitHook,
        onCancel: this.confirmModalDismissed
      });
    });

    this.state = {
      showConfirmModal: false,
      serverError: ''
    };
  }

  componentDidMount() {
    if (this.props.enableOutgoingWebhooks) {
      this.props.actions.getOutgoingHook(this.props.hookId);
    }
  }

  render() {
    if (!this.props.hook) {
      return /*#__PURE__*/react.createElement(loading_screen/* default */.Z, null);
    }

    return /*#__PURE__*/react.createElement(AbstractOutgoingWebhook, {
      team: this.props.team,
      header: edit_outgoing_webhook_HEADER,
      footer: edit_outgoing_webhook_FOOTER,
      loading: edit_outgoing_webhook_LOADING,
      renderExtra: this.renderExtra(),
      action: this.editOutgoingHook,
      serverError: this.state.serverError,
      initialHook: this.props.hook,
      enablePostUsernameOverride: this.props.enablePostUsernameOverride,
      enablePostIconOverride: this.props.enablePostIconOverride
    });
  }

}

edit_outgoing_webhook_defineProperty(EditOutgoingWebhook, "propTypes", {
  hookId: (prop_types_default()).string.isRequired,
  actions: prop_types_default().shape({
    updateOutgoingHook: (prop_types_default()).func.isRequired,
    getOutgoingHook: (prop_types_default()).func.isRequired
  }).isRequired,
  enableOutgoingWebhooks: (prop_types_default()).bool,
  enablePostUsernameOverride: (prop_types_default()).bool.isRequired,
  enablePostIconOverride: (prop_types_default()).bool.isRequired
});
;// CONCATENATED MODULE: ./components/integrations/edit_outgoing_webhook/index.ts




// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function edit_outgoing_webhook_mapStateToProps(state, ownProps) {
  const config = (0,general/* getConfig */.iE)(state);
  const hookId = new URLSearchParams(ownProps.location.search).get('id');
  const enableOutgoingWebhooks = config.EnableOutgoingWebhooks === 'true';
  const enablePostUsernameOverride = config.EnablePostUsernameOverride === 'true';
  const enablePostIconOverride = config.EnablePostIconOverride === 'true';
  return {
    hookId: hookId,
    hook: state.entities.integrations.outgoingHooks[hookId],
    enableOutgoingWebhooks,
    enablePostUsernameOverride,
    enablePostIconOverride
  };
}

function edit_outgoing_webhook_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      updateOutgoingHook: integrations/* updateOutgoingHook */.z0,
      getOutgoingHook: integrations/* getOutgoingHook */.f5
    }, dispatch)
  };
}

/* harmony default export */ const edit_outgoing_webhook = ((0,es.connect)(edit_outgoing_webhook_mapStateToProps, edit_outgoing_webhook_mapDispatchToProps)(EditOutgoingWebhook));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(39714);
;// CONCATENATED MODULE: ./components/integrations/installed_oauth_app/installed_oauth_app.tsx


function installed_oauth_app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








const FAKE_SECRET = '***************';
function installed_oauth_app_matchesFilter(oauthApp, filter) {
  if (!filter) {
    return true;
  }

  return oauthApp.name.toLowerCase().includes(filter);
}
class InstalledOAuthApp extends react.PureComponent {
  constructor(props) {
    super(props);

    installed_oauth_app_defineProperty(this, "handleShowClientSecret", e => {
      if (e && e.preventDefault) {
        e.preventDefault();
      }

      this.setState({
        clientSecret: this.props.oauthApp.client_secret
      });
    });

    installed_oauth_app_defineProperty(this, "handleHideClientSecret", e => {
      e.preventDefault();
      this.setState({
        clientSecret: FAKE_SECRET
      });
    });

    installed_oauth_app_defineProperty(this, "handleRegenerate", e => {
      e.preventDefault();
      this.props.onRegenerateSecret(this.props.oauthApp.id).then(_ref => {
        let {
          error
        } = _ref;

        if (error) {
          this.setState({
            error: error.message
          });
        } else {
          this.setState({
            error: null
          });
          this.handleShowClientSecret();
        }
      });
    });

    installed_oauth_app_defineProperty(this, "handleDelete", () => {
      this.props.onDelete(this.props.oauthApp);
    });

    this.state = {
      clientSecret: FAKE_SECRET
    };
  }

  render() {
    const {
      oauthApp,
      creatorName
    } = this.props;
    let error;

    if (this.state.error) {
      error = /*#__PURE__*/react.createElement(form_error/* default */.Z, {
        error: this.state.error
      });
    }

    if (!installed_oauth_app_matchesFilter(oauthApp, this.props.filter)) {
      return null;
    }

    let name;

    if (oauthApp.name) {
      name = oauthApp.name;
    } else {
      name = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_integrations.unnamed_oauth_app",
        defaultMessage: "Unnamed OAuth 2.0 Application"
      });
    }

    let description;

    if (oauthApp.description) {
      description = /*#__PURE__*/react.createElement("div", {
        className: "item-details__row"
      }, /*#__PURE__*/react.createElement("span", {
        className: "item-details__description"
      }, oauthApp.description));
    }

    const urls = /*#__PURE__*/react.createElement("div", {
      className: "item-details__row"
    }, /*#__PURE__*/react.createElement("span", {
      className: "item-details__url word-break--all"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_integrations.callback_urls",
      defaultMessage: "Callback URLs: {urls}",
      values: {
        urls: oauthApp.callback_urls.join(', ')
      }
    })));
    let isTrusted;

    if (oauthApp.is_trusted) {
      isTrusted = utils/* localizeMessage */._u('installed_oauth_apps.trusted.yes', 'Yes');
    } else {
      isTrusted = utils/* localizeMessage */._u('installed_oauth_apps.trusted.no', 'No');
    }

    let showHide;
    let clientSecret;

    if (this.state.clientSecret === FAKE_SECRET) {
      showHide = /*#__PURE__*/react.createElement("button", {
        id: "showSecretButton",
        className: "style--none color--link",
        onClick: this.handleShowClientSecret
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_integrations.showSecret",
        defaultMessage: "Show Secret"
      }));
      clientSecret = /*#__PURE__*/react.createElement("span", {
        className: "item-details__token"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_integrations.client_secret",
        defaultMessage: "Client Secret: **{clientSecret}**",
        values: {
          clientSecret: this.state.clientSecret
        }
      }));
    } else {
      showHide = /*#__PURE__*/react.createElement("button", {
        id: "hideSecretButton",
        className: "style--none color--link",
        onClick: this.handleHideClientSecret
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_integrations.hideSecret",
        defaultMessage: "Hide Secret"
      }));
      clientSecret = /*#__PURE__*/react.createElement("span", {
        className: "item-details__token"
      }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "installed_integrations.client_secret",
        defaultMessage: "Client Secret: **{clientSecret}**",
        values: {
          clientSecret: this.state.clientSecret
        }
      }), /*#__PURE__*/react.createElement(CopyText, {
        idMessage: "integrations.copy_client_secret",
        defaultMessage: "Copy Client Secret",
        value: this.state.clientSecret
      }));
    }

    const regen = /*#__PURE__*/react.createElement("button", {
      id: "regenerateSecretButton",
      className: "style--none color--link",
      onClick: this.handleRegenerate
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_integrations.regenSecret",
      defaultMessage: "Regenerate Secret"
    }));
    let icon;

    if (oauthApp.icon_url) {
      icon = /*#__PURE__*/react.createElement("div", {
        className: "integration__icon integration-list__icon"
      }, /*#__PURE__*/react.createElement("img", {
        alt: 'get app screenshot',
        src: oauthApp.icon_url
      }));
    }

    let actions;

    if (!this.props.fromApp) {
      actions = /*#__PURE__*/react.createElement("div", {
        className: "item-actions"
      }, showHide, ' - ', regen, ' - ', /*#__PURE__*/react.createElement(react_router_dom.Link, {
        to: "/".concat(this.props.team.name, "/integrations/oauth2-apps/edit?id=").concat(oauthApp.id)
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_integrations.edit",
        defaultMessage: "Edit"
      })), ' - ', /*#__PURE__*/react.createElement(delete_integration_link, {
        modalMessage: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "installed_oauth_apps.delete.confirm",
          defaultMessage: "This action permanently deletes the OAuth 2.0 application and breaks any integrations using it. Are you sure you want to delete it?"
        }),
        onDelete: this.handleDelete
      }));
    }

    let appInfo = /*#__PURE__*/react.createElement("div", {
      className: "item-details__row"
    }, /*#__PURE__*/react.createElement("span", {
      className: "item-details__creation"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_integrations.fromApp",
      defaultMessage: "Managed by Apps Framework"
    })));

    if (!this.props.fromApp) {
      appInfo = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
        className: "item-details__row"
      }, /*#__PURE__*/react.createElement("span", {
        className: "item-details__url word-break--all"
      }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "installed_oauth_apps.is_trusted",
        defaultMessage: "Is Trusted: **{isTrusted}**",
        values: {
          isTrusted
        }
      }))), /*#__PURE__*/react.createElement("div", {
        className: "item-details__row"
      }, /*#__PURE__*/react.createElement("span", {
        className: "item-details__token"
      }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "installed_integrations.client_id",
        defaultMessage: "Client ID: **{clientId}**",
        values: {
          clientId: oauthApp.id
        }
      }), /*#__PURE__*/react.createElement(CopyText, {
        idMessage: "integrations.copy_client_id",
        defaultMessage: "Copy Client Id",
        value: oauthApp.id
      }))), /*#__PURE__*/react.createElement("div", {
        className: "item-details__row"
      }, clientSecret), urls, /*#__PURE__*/react.createElement("div", {
        className: "item-details__row"
      }, /*#__PURE__*/react.createElement("span", {
        className: "item-details__creation"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_integrations.creation",
        defaultMessage: "Created by {creator} on {createAt, date, full}",
        values: {
          creator: creatorName,
          createAt: oauthApp.create_at
        }
      }))));
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-list__item"
    }, icon, /*#__PURE__*/react.createElement("div", {
      className: "item-details"
    }, /*#__PURE__*/react.createElement("div", {
      className: "item-details__row d-flex flex-column flex-md-row justify-content-between"
    }, /*#__PURE__*/react.createElement("strong", {
      className: "item-details__name"
    }, name), actions), error, description, appInfo));
  }

}

installed_oauth_app_defineProperty(InstalledOAuthApp, "propTypes", {
  fromApp: (prop_types_default()).bool.isRequired,
  creatorName: (prop_types_default()).string.isRequired,
  onRegenerateSecret: (prop_types_default()).func.isRequired,
  onDelete: (prop_types_default()).func.isRequired,
  filter: prop_types_default().oneOfType([(prop_types_default()).string, prop_types_default().oneOf([null])])
});
;// CONCATENATED MODULE: ./components/integrations/installed_oauth_app/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function installed_oauth_app_mapStateToProps(state, ownProps) {
  const oauthApp = ownProps.oauthApp || {};
  return {
    creatorName: (0,utils/* getDisplayNameByUser */.hI)(state, (0,entities_users/* getUser */.PR)(state, oauthApp.creator_id))
  };
}

/* harmony default export */ const installed_oauth_app = ((0,es.connect)(installed_oauth_app_mapStateToProps)(InstalledOAuthApp));
;// CONCATENATED MODULE: ./components/integrations/installed_oauth_apps/installed_oauth_apps.tsx






function installed_oauth_apps_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







class InstalledOAuthApps extends react.PureComponent {
  constructor(props) {
    super(props);

    installed_oauth_apps_defineProperty(this, "deleteOAuthApp", app => {
      if (app && app.id) {
        this.props.actions.deleteOAuthApp(app.id);
      }
    });

    installed_oauth_apps_defineProperty(this, "oauthApps", filter => Object.values(this.props.oauthApps).filter(app => installed_oauth_app_matchesFilter(app, filter)).sort(this.oauthAppCompare).map(app => {
      return /*#__PURE__*/react.createElement(installed_oauth_app, {
        key: app.id,
        oauthApp: app,
        onRegenerateSecret: this.props.actions.regenOAuthAppSecret,
        onDelete: this.deleteOAuthApp,
        team: this.props.team,
        creatorName: "",
        fromApp: this.props.appsOAuthAppIDs.includes(app.id)
      });
    }));

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    if (this.props.enableOAuthServiceProvider) {
      this.props.actions.loadOAuthAppsAndProfiles().then(() => this.setState({
        loading: false
      }));
    }
  }

  oauthAppCompare(a, b) {
    let nameA = a.name.toString();

    if (!nameA) {
      nameA = (0,utils/* localizeMessage */._u)('installed_integrations.unnamed_oauth_app', 'Unnamed OAuth 2.0 Application');
    }

    let nameB = b.name.toString();

    if (!nameB) {
      nameB = (0,utils/* localizeMessage */._u)('installed_integrations.unnamed_oauth_app', 'Unnamed OAuth 2.0 Application');
    }

    return nameA.localeCompare(nameB);
  }

  render() {
    const integrationsEnabled = this.props.enableOAuthServiceProvider && this.props.canManageOauth;
    let props;

    if (integrationsEnabled) {
      props = {
        addLink: '/' + this.props.team.name + '/integrations/oauth2-apps/add',
        addText: (0,utils/* localizeMessage */._u)('installed_oauth_apps.add', 'Add OAuth 2.0 Application'),
        addButtonId: 'addOauthApp'
      };
    }

    return /*#__PURE__*/react.createElement(BackstageList, Object.assign({
      header: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_oauth_apps.header",
        defaultMessage: "OAuth 2.0 Applications"
      }),
      helpText: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_oauth_apps.help",
        defaultMessage: "Create {oauthApplications} to securely integrate bots and third-party apps with Mattermost. Visit the {appDirectory} to find available self-hosted apps.",
        values: {
          oauthApplications: /*#__PURE__*/react.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://developers.mattermost.com/integrate/admin-guide/admin-oauth2/"
          }, /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "installed_oauth_apps.help.oauthApplications",
            defaultMessage: "OAuth 2.0 applications"
          })),
          appDirectory: /*#__PURE__*/react.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://mattermost.com/marketplace/"
          }, /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "installed_oauth_apps.help.appDirectory",
            defaultMessage: "App Directory"
          }))
        }
      }),
      emptyText: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_oauth_apps.empty",
        defaultMessage: "No OAuth 2.0 Applications found"
      }),
      emptyTextSearch: /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "installed_oauth_apps.emptySearch",
        defaultMessage: "No OAuth 2.0 Applications match {searchTerm}"
      }),
      searchPlaceholder: (0,utils/* localizeMessage */._u)('installed_oauth_apps.search', 'Search OAuth 2.0 Applications'),
      loading: this.state.loading
    }, props), filter => {
      const children = this.oauthApps(filter);
      return [children, children.length > 0];
    });
  }

}

installed_oauth_apps_defineProperty(InstalledOAuthApps, "propTypes", {
  team: prop_types_default().shape({
    name: (prop_types_default()).string.isRequired
  }).isRequired,
  appsOAuthAppIDs: prop_types_default().arrayOf((prop_types_default()).string).isRequired,
  canManageOauth: (prop_types_default()).bool.isRequired,
  enableOAuthServiceProvider: (prop_types_default()).bool.isRequired,
  actions: prop_types_default().shape({
    loadOAuthAppsAndProfiles: (prop_types_default()).func.isRequired,
    regenOAuthAppSecret: (prop_types_default()).func.isRequired,
    deleteOAuthApp: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/integrations/installed_oauth_apps/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.











function installed_oauth_apps_mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const enableOAuthServiceProvider = config.EnableOAuthServiceProvider === 'true';
  return {
    canManageOauth: (0,entities_roles/* haveISystemPermission */.AN)(state, {
      permission: constants/* Permissions.MANAGE_OAUTH */.Pl.MANAGE_OAUTH
    }),
    oauthApps: getOAuthApps(state),
    appsOAuthAppIDs: getAppsOAuthAppIDs(state),
    enableOAuthServiceProvider,
    team: (0,teams/* getCurrentTeam */.kA)(state)
  };
}

function installed_oauth_apps_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      loadOAuthAppsAndProfiles: loadOAuthAppsAndProfiles,
      regenOAuthAppSecret: integrations/* regenOAuthAppSecret */.H,
      deleteOAuthApp: integrations/* deleteOAuthApp */.qu
    }, dispatch)
  };
}

/* harmony default export */ const installed_oauth_apps = ((0,es.connect)(installed_oauth_apps_mapStateToProps, installed_oauth_apps_mapDispatchToProps)(InstalledOAuthApps));
;// CONCATENATED MODULE: ./components/integrations/abstract_oauth_app.jsx






function abstract_oauth_app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










class AbstractOAuthApp extends react.PureComponent {
  constructor(props) {
    super(props);

    abstract_oauth_app_defineProperty(this, "getStateFromApp", app => {
      return {
        name: app.name || '',
        description: app.description || '',
        homepage: app.homepage || '',
        icon_url: app.icon_url || '',
        callbackUrls: app.callback_urls ? app.callback_urls.join('\n') : '',
        is_trusted: app.is_trusted || false,
        has_icon: Boolean(app.icon_url),
        saving: false,
        clientError: null
      };
    });

    abstract_oauth_app_defineProperty(this, "imageLoaded", () => {
      this.setState({
        has_icon: true,
        icon_url: this.icon_url.current.value
      });
    });

    abstract_oauth_app_defineProperty(this, "handleSubmit", e => {
      e.preventDefault();

      if (this.state.saving) {
        return;
      }

      this.setState({
        saving: true,
        clientError: ''
      });

      if (!this.state.name) {
        this.setState({
          saving: false,
          clientError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_oauth_app.nameRequired",
            defaultMessage: "Name for the OAuth 2.0 application is required."
          })
        });
        return;
      }

      if (!this.state.description) {
        this.setState({
          saving: false,
          clientError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_oauth_app.descriptionRequired",
            defaultMessage: "Description for the OAuth 2.0 application is required."
          })
        });
        return;
      }

      if (!this.state.homepage) {
        this.setState({
          saving: false,
          clientError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_oauth_app.homepageRequired",
            defaultMessage: "Homepage for the OAuth 2.0 application is required."
          })
        });
        return;
      }

      const callbackUrls = [];

      for (let callbackUrl of this.state.callbackUrls.split('\n')) {
        callbackUrl = callbackUrl.trim();

        if (callbackUrl.length > 0) {
          callbackUrls.push(callbackUrl);
        }
      }

      if (callbackUrls.length === 0) {
        this.setState({
          saving: false,
          clientError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_oauth_app.callbackUrlsRequired",
            defaultMessage: "One or more callback URLs are required."
          })
        });
        return;
      }

      const app = {
        name: this.state.name,
        callback_urls: callbackUrls,
        homepage: this.state.homepage,
        description: this.state.description,
        is_trusted: this.state.is_trusted,
        icon_url: this.state.icon_url
      };
      this.props.action(app).then(() => this.setState({
        saving: false
      }));
    });

    abstract_oauth_app_defineProperty(this, "updateName", e => {
      this.setState({
        name: e.target.value
      });
    });

    abstract_oauth_app_defineProperty(this, "updateTrusted", e => {
      this.setState({
        is_trusted: e.target.value === 'true'
      });
    });

    abstract_oauth_app_defineProperty(this, "updateDescription", e => {
      this.setState({
        description: e.target.value
      });
    });

    abstract_oauth_app_defineProperty(this, "updateHomepage", e => {
      this.setState({
        homepage: e.target.value
      });
    });

    abstract_oauth_app_defineProperty(this, "updateIconUrl", e => {
      this.setState({
        has_icon: false,
        icon_url: e.target.value
      });
      this.image.src = e.target.value;
    });

    abstract_oauth_app_defineProperty(this, "updateCallbackUrls", e => {
      this.setState({
        callbackUrls: e.target.value
      });
    });

    this.image = new Image();
    this.image.onload = this.imageLoaded;
    this.icon_url = /*#__PURE__*/react.createRef();
    this.state = this.getStateFromApp(this.props.initialApp || {});
  }

  render() {
    const headerToRender = this.props.header;
    const footerToRender = this.props.footer;
    const renderExtra = this.props.renderExtra;
    let icon;

    if (this.state.has_icon) {
      icon = /*#__PURE__*/react.createElement("div", {
        className: "integration__icon"
      }, /*#__PURE__*/react.createElement("img", {
        alt: 'integration icon',
        src: this.state.icon_url
      }));
    }

    const trusted = /*#__PURE__*/react.createElement(system_permission_gate/* default */.Z, {
      permissions: [constants/* Permissions.MANAGE_SYSTEM */.Pl.MANAGE_SYSTEM]
    }, /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "is_trusted"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_oauth_apps.trusted",
      defaultMessage: "Is Trusted"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("label", {
      className: "radio-inline"
    }, /*#__PURE__*/react.createElement("input", {
      type: "radio",
      value: "true",
      name: "is_trusted",
      checked: this.state.is_trusted,
      onChange: this.updateTrusted
    }), /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_oauth_apps.trusted.yes",
      defaultMessage: "Yes"
    })), /*#__PURE__*/react.createElement("label", {
      className: "radio-inline"
    }, /*#__PURE__*/react.createElement("input", {
      type: "radio",
      value: "false",
      name: "is_trusted",
      checked: !this.state.is_trusted,
      onChange: this.updateTrusted
    }), /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_oauth_apps.trusted.no",
      defaultMessage: "No"
    })), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_oauth_app.trusted.help",
      defaultMessage: "If true, the OAuth 2.0 application is considered trusted by the Mattermost server and does not require the user to accept authorization. If false, a window opens to ask the user to accept or deny the authorization."
    })))));
    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-content"
    }, /*#__PURE__*/react.createElement(BackstageHeader, null, /*#__PURE__*/react.createElement(react_router_dom.Link, {
      to: "/".concat(this.props.team.name, "/integrations/oauth2-apps")
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_oauth_apps.header",
      defaultMessage: "Installed OAuth2 Apps"
    })), /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: headerToRender.id,
      defaultMessage: headerToRender.defaultMessage
    })), /*#__PURE__*/react.createElement("div", {
      className: "backstage-form"
    }, icon, /*#__PURE__*/react.createElement("form", {
      className: "form-horizontal"
    }, trusted, /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "name"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_oauth_apps.name",
      defaultMessage: "Display Name"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "name",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.name,
      onChange: this.updateName
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_oauth_app.name.help",
      defaultMessage: "Specify the display name, of up to 64 characters, for your OAuth 2.0 application."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "description"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_oauth_apps.description",
      defaultMessage: "Description"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "description",
      type: "text",
      maxLength: "512",
      className: "form-control",
      value: this.state.description,
      onChange: this.updateDescription
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_oauth_app.description.help",
      defaultMessage: "Describe your OAuth 2.0 application."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "homepage"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_oauth_apps.homepage",
      defaultMessage: "Homepage"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "homepage",
      type: "url",
      maxLength: "256",
      className: "form-control",
      value: this.state.homepage,
      onChange: this.updateHomepage
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_oauth_app.homepage.help",
      defaultMessage: "This is the URL for the homepage of the OAuth 2.0 application. Depending on your server configuration, use HTTP or HTTPS in the URL."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "icon_url"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_oauth_apps.iconUrl",
      defaultMessage: "Icon URL"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "icon_url",
      ref: this.icon_url,
      type: "url",
      maxLength: "512",
      className: "form-control",
      value: this.state.icon_url,
      onChange: this.updateIconUrl
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_oauth_app.icon.help",
      defaultMessage: "(Optional) The URL of the image used for your OAuth 2.0 application. Make sure you use HTTP or HTTPS in your URL."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "callbackUrls"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_oauth_apps.callbackUrls",
      defaultMessage: "Callback URLs (One Per Line)"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("textarea", {
      id: "callbackUrls",
      rows: "3",
      maxLength: "1024",
      className: "form-control",
      value: this.state.callbackUrls,
      onChange: this.updateCallbackUrls
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_oauth_app.callbackUrls.help",
      defaultMessage: "The redirect URIs to which the service will redirect users after accepting or denying authorization of your application, and which will handle authorization codes or access tokens. Must be a valid URL and start with http:// or https://."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "backstage-form__footer"
    }, /*#__PURE__*/react.createElement(form_error/* default */.Z, {
      type: "backstage",
      errors: [this.props.serverError, this.state.clientError]
    }), /*#__PURE__*/react.createElement(react_router_dom.Link, {
      className: "btn btn-link btn-sm",
      to: "/".concat(this.props.team.name, "/integrations/oauth2-apps")
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_oauth_apps.cancel",
      defaultMessage: "Cancel"
    })), /*#__PURE__*/react.createElement(spinner_button/* default */.Z, {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.saving,
      spinningText: (0,utils/* localizeMessage */._u)(this.props.loading.id, this.props.loading.defaultMessage),
      onClick: this.handleSubmit,
      id: "saveOauthApp"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: footerToRender.id,
      defaultMessage: footerToRender.defaultMessage
    })), renderExtra))));
  }

}

abstract_oauth_app_defineProperty(AbstractOAuthApp, "propTypes", {
  /**
  * The current team
  */
  team: (prop_types_default()).object.isRequired,

  /**
  * The header text to render, has id and defaultMessage
  */
  header: (prop_types_default()).object.isRequired,

  /**
  * The footer text to render, has id and defaultMessage
  */
  footer: (prop_types_default()).object.isRequired,

  /**
  * The spinner loading text to render, has id and defaultMessage
  */
  loading: (prop_types_default()).object.isRequired,

  /**
   * Any extra component/node to render
   */
  renderExtra: (prop_types_default()).node.isRequired,

  /**
  * The server error text after a failed action
  */
  serverError: (prop_types_default()).string.isRequired,

  /**
  * The OAuthApp used to set the initial state
  */
  initialApp: (prop_types_default()).object,

  /**
  * The async function to run when the action button is pressed
  */
  action: (prop_types_default()).func.isRequired
});
;// CONCATENATED MODULE: ./components/integrations/add_oauth_app/add_oauth_app.jsx


function add_oauth_app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const add_oauth_app_HEADER = {
  id: (0,i18n.t)('add_oauth_app.header'),
  defaultMessage: 'Add'
};
const add_oauth_app_FOOTER = {
  id: (0,i18n.t)('installed_oauth_apps.save'),
  defaultMessage: 'Save'
};
const add_oauth_app_LOADING = {
  id: (0,i18n.t)('installed_oauth_apps.saving'),
  defaultMessage: 'Saving...'
};
class AddOAuthApp extends react.PureComponent {
  constructor(props) {
    super(props);

    add_oauth_app_defineProperty(this, "addOAuthApp", async app => {
      this.setState({
        serverError: ''
      });
      const {
        data,
        error
      } = await this.props.actions.addOAuthApp(app);

      if (data) {
        browser_history/* browserHistory.push */.m.push("/".concat(this.props.team.name, "/integrations/confirm?type=oauth2-apps&id=").concat(data.id));
        return;
      }

      if (error) {
        this.setState({
          serverError: error.message
        });
      }
    });

    this.state = {
      serverError: ''
    };
  }

  render() {
    return /*#__PURE__*/react.createElement(AbstractOAuthApp, {
      team: this.props.team,
      header: add_oauth_app_HEADER,
      footer: add_oauth_app_FOOTER,
      loading: add_oauth_app_LOADING,
      renderExtra: '',
      action: this.addOAuthApp,
      serverError: this.state.serverError
    });
  }

}

add_oauth_app_defineProperty(AddOAuthApp, "propTypes", {
  /**
  * The team data
  */
  team: (prop_types_default()).object,

  /**
  * The request state for addOAuthApp action. Contains status and error
  */
  addOAuthAppRequest: (prop_types_default()).object.isRequired,
  actions: prop_types_default().shape({
    /**
    * The function to call to add new OAuthApp
    */
    addOAuthApp: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/integrations/add_oauth_app/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function add_oauth_app_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      addOAuthApp: integrations/* addOAuthApp */.eo
    }, dispatch)
  };
}

/* harmony default export */ const add_oauth_app = ((0,es.connect)(null, add_oauth_app_mapDispatchToProps)(AddOAuthApp));
;// CONCATENATED MODULE: ./components/integrations/edit_oauth_app/edit_oauth_app.tsx



function edit_oauth_app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const edit_oauth_app_HEADER = {
  id: 'integrations.edit',
  defaultMessage: 'Edit'
};
const edit_oauth_app_FOOTER = {
  id: 'update_incoming_webhook.update',
  defaultMessage: 'Update'
};
const edit_oauth_app_LOADING = {
  id: 'update_incoming_webhook.updating',
  defaultMessage: 'Updating...'
};
class EditOAuthApp extends react.PureComponent {
  constructor(props) {
    super(props);

    edit_oauth_app_defineProperty(this, "newApp", void 0);

    edit_oauth_app_defineProperty(this, "editOAuthApp", async app => {
      this.newApp = app;

      if (this.props.oauthApp.id) {
        app.id = this.props.oauthApp.id;
      }

      const callbackUrlsSame = this.props.oauthApp.callback_urls.length === app.callback_urls.length && this.props.oauthApp.callback_urls.every((v, i) => v === app.callback_urls[i]);

      if (callbackUrlsSame === false) {
        this.handleConfirmModal();
      } else {
        await this.submitOAuthApp();
      }
    });

    edit_oauth_app_defineProperty(this, "handleConfirmModal", () => {
      this.setState({
        showConfirmModal: true
      });
    });

    edit_oauth_app_defineProperty(this, "confirmModalDismissed", () => {
      this.setState({
        showConfirmModal: false
      });
    });

    edit_oauth_app_defineProperty(this, "submitOAuthApp", async () => {
      this.setState({
        serverError: ''
      });
      const res = await this.props.actions.editOAuthApp(this.newApp);

      if ('data' in res && res.data) {
        browser_history/* browserHistory.push */.m.push("/".concat(this.props.team.name, "/integrations/oauth2-apps"));
        return;
      }

      this.setState({
        showConfirmModal: false
      });

      if ('error' in res) {
        const {
          error: err
        } = res;
        this.setState({
          serverError: err.message
        });
      }
    });

    edit_oauth_app_defineProperty(this, "renderExtra", () => {
      const confirmButton = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "update_command.update",
        defaultMessage: "Update"
      });
      const confirmTitle = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "update_oauth_app.confirm",
        defaultMessage: "Edit OAuth 2.0 application"
      });
      const confirmMessage = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "update_oauth_app.question",
        defaultMessage: "Your changes may break the existing OAuth 2.0 application. Are you sure you would like to update it?"
      });
      return /*#__PURE__*/react.createElement(confirm_modal/* default */.Z, {
        title: confirmTitle,
        message: confirmMessage,
        confirmButtonText: confirmButton,
        show: this.state.showConfirmModal,
        onConfirm: this.submitOAuthApp,
        onCancel: this.confirmModalDismissed
      });
    });

    this.state = {
      showConfirmModal: false,
      serverError: ''
    };
    this.newApp = this.props.oauthApp;
  }

  componentDidMount() {
    if (this.props.enableOAuthServiceProvider) {
      this.props.actions.getOAuthApp(this.props.oauthAppId);
    }
  }

  render() {
    if (!this.props.oauthApp) {
      return /*#__PURE__*/react.createElement(loading_screen/* default */.Z, null);
    }

    return /*#__PURE__*/react.createElement(AbstractOAuthApp, {
      team: this.props.team,
      header: edit_oauth_app_HEADER,
      footer: edit_oauth_app_FOOTER,
      loading: edit_oauth_app_LOADING,
      renderExtra: this.renderExtra(),
      action: this.editOAuthApp,
      serverError: this.state.serverError,
      initialApp: this.props.oauthApp
    });
  }

}

edit_oauth_app_defineProperty(EditOAuthApp, "propTypes", {
  oauthAppId: (prop_types_default()).string.isRequired,
  actions: prop_types_default().shape({
    getOAuthApp: (prop_types_default()).func.isRequired,
    editOAuthApp: (prop_types_default()).func.isRequired
  }).isRequired,
  enableOAuthServiceProvider: (prop_types_default()).bool.isRequired
});
;// CONCATENATED MODULE: ./components/integrations/edit_oauth_app/index.ts




// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function edit_oauth_app_mapStateToProps(state, ownProps) {
  const config = (0,general/* getConfig */.iE)(state);
  const oauthAppId = new URLSearchParams(ownProps.location.search).get('id') || '';
  const enableOAuthServiceProvider = config.EnableOAuthServiceProvider === 'true';
  return {
    oauthAppId,
    oauthApp: state.entities.integrations.oauthApps[oauthAppId],
    enableOAuthServiceProvider
  };
}

function edit_oauth_app_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      getOAuthApp: integrations/* getOAuthApp */.oh,
      editOAuthApp: integrations/* editOAuthApp */.N4
    }, dispatch)
  };
}

/* harmony default export */ const edit_oauth_app = ((0,es.connect)(edit_oauth_app_mapStateToProps, edit_oauth_app_mapDispatchToProps)(EditOAuthApp));
;// CONCATENATED MODULE: ./components/integrations/installed_command.jsx
function installed_command_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function installed_command_matchesFilter(command, filter) {
  if (!filter) {
    return true;
  }

  return command.display_name.toLowerCase().indexOf(filter) !== -1 || command.description.toLowerCase().indexOf(filter) !== -1 || command.trigger.toLowerCase().indexOf(filter) !== -1;
}
class InstalledCommand extends react.PureComponent {
  constructor() {
    super(...arguments);

    installed_command_defineProperty(this, "handleRegenToken", e => {
      e.preventDefault();
      this.props.onRegenToken(this.props.command);
    });

    installed_command_defineProperty(this, "handleDelete", () => {
      this.props.onDelete(this.props.command);
    });
  }

  render() {
    const command = this.props.command;
    const filter = this.props.filter ? this.props.filter.toLowerCase() : '';

    if (!installed_command_matchesFilter(command, filter)) {
      return null;
    }

    let name;

    if (command.display_name) {
      name = command.display_name;
    } else {
      name = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_commands.unnamed_command",
        defaultMessage: "Unnamed Slash Command"
      });
    }

    let description = null;

    if (command.description) {
      description = /*#__PURE__*/react.createElement("div", {
        className: "item-details__row"
      }, /*#__PURE__*/react.createElement("span", {
        className: "item-details__description"
      }, command.description));
    }

    let trigger = '- /' + command.trigger;

    if (command.auto_complete && command.auto_complete_hint) {
      trigger += ' ' + command.auto_complete_hint;
    }

    let actions = null;

    if (this.props.canChange) {
      actions = /*#__PURE__*/react.createElement("div", {
        className: "item-actions"
      }, /*#__PURE__*/react.createElement("button", {
        className: "style--none color--link",
        onClick: this.handleRegenToken
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_integrations.regenToken",
        defaultMessage: "Regenerate Token"
      })), ' - ', /*#__PURE__*/react.createElement(react_router_dom.Link, {
        to: "/".concat(this.props.team.name, "/integrations/commands/edit?id=").concat(command.id)
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_integrations.edit",
        defaultMessage: "Edit"
      })), ' - ', /*#__PURE__*/react.createElement(delete_integration_link, {
        modalMessage: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "installed_commands.delete.confirm",
          defaultMessage: "This action permanently deletes the slash command and breaks any integrations using it. Are you sure you want to delete it?"
        }),
        onDelete: this.handleDelete
      }));
    }

    const commandToken = command.token;
    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-list__item"
    }, /*#__PURE__*/react.createElement("div", {
      className: "item-details"
    }, /*#__PURE__*/react.createElement("div", {
      className: "item-details__row d-flex flex-column flex-md-row justify-content-between"
    }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("strong", {
      className: "item-details__name"
    }, name), /*#__PURE__*/react.createElement("span", {
      className: "item-details__trigger"
    }, trigger)), actions), description, /*#__PURE__*/react.createElement("div", {
      className: "item-details__row"
    }, /*#__PURE__*/react.createElement("span", {
      className: "item-details__token"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_integrations.token",
      defaultMessage: "Token: {token}",
      values: {
        token: commandToken
      }
    }), /*#__PURE__*/react.createElement(CopyText, {
      value: commandToken
    }))), /*#__PURE__*/react.createElement("div", {
      className: "item-details__row"
    }, /*#__PURE__*/react.createElement("span", {
      className: "item-details__creation"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_integrations.creation",
      defaultMessage: "Created by {creator} on {createAt, date, full}",
      values: {
        creator: this.props.creator.username,
        createAt: command.create_at
      }
    })))));
  }

}

installed_command_defineProperty(InstalledCommand, "propTypes", {
  /**
  * The team data
  */
  team: (prop_types_default()).object.isRequired,

  /**
  * Installed slash command to display
  */
  command: (prop_types_default()).object.isRequired,

  /**
  * The function to call when Regenerate Token link is clicked
  */
  onRegenToken: (prop_types_default()).func.isRequired,

  /**
  * The function to call when Delete link is clicked
  */
  onDelete: (prop_types_default()).func.isRequired,

  /**
  * Set to filter command, comes from BackstageList
  */
  filter: (prop_types_default()).string,

  /**
  * The creator user data
  */
  creator: (prop_types_default()).object.isRequired,

  /**
  * Set to show edit link
  */
  canChange: (prop_types_default()).bool.isRequired
});
;// CONCATENATED MODULE: ./components/integrations/installed_commands/installed_commands.tsx




function installed_commands_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class InstalledCommands extends react.PureComponent {
  constructor() {
    super(...arguments);

    installed_commands_defineProperty(this, "regenCommandToken", command => {
      this.props.actions.regenCommandToken(command.id);
    });

    installed_commands_defineProperty(this, "deleteCommand", command => {
      this.props.actions.deleteCommand(command.id);
    });
  }

  commandCompare(a, b) {
    let nameA = a.display_name;

    if (!nameA) {
      nameA = utils/* localizeMessage */._u('installed_commands.unnamed_command', 'Unnamed Slash Command');
    }

    let nameB = b.display_name;

    if (!nameB) {
      nameB = utils/* localizeMessage */._u('installed_commands.unnamed_command', 'Unnamed Slash Command');
    }

    return nameA.localeCompare(nameB);
  }

  render() {
    const commands = filter => this.props.commands.filter(command => command.team_id === this.props.team.id).filter(command => installed_command_matchesFilter(command, filter)).sort(this.commandCompare).map(command => {
      const canChange = this.props.canManageOthersSlashCommands || this.props.user.id === command.creator_id;
      return /*#__PURE__*/react.createElement(InstalledCommand, {
        key: command.id,
        team: this.props.team,
        command: command,
        onRegenToken: this.regenCommandToken,
        onDelete: this.deleteCommand,
        creator: this.props.users[command.creator_id] || {},
        canChange: canChange
      });
    });

    return /*#__PURE__*/react.createElement(BackstageList, {
      header: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_commands.header",
        defaultMessage: "Installed Slash Commands"
      }),
      addText: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_commands.add",
        defaultMessage: "Add Slash Command"
      }),
      addLink: '/' + this.props.team.name + '/integrations/commands/add',
      addButtonId: "addSlashCommand",
      emptyText: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_commands.empty",
        defaultMessage: "No slash commands found"
      }),
      emptyTextSearch: /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "installed_commands.emptySearch",
        defaultMessage: "No slash commands match {searchTerm}"
      }),
      helpText: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "installed_commands.help",
        defaultMessage: "Use slash commands to connect external tools to Mattermost. {buildYourOwn} or visit the {appDirectory} to find self-hosted, third-party apps and integrations.",
        values: {
          buildYourOwn: /*#__PURE__*/react.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://developers.mattermost.com/integrate/admin-guide/admin-slash-commands/"
          }, /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "installed_commands.help.buildYourOwn",
            defaultMessage: "Build Your Own"
          })),
          appDirectory: /*#__PURE__*/react.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://mattermost.com/marketplace"
          }, /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "installed_commands.help.appDirectory",
            defaultMessage: "App Directory"
          }))
        }
      }),
      searchPlaceholder: utils/* localizeMessage */._u('installed_commands.search', 'Search Slash Commands'),
      loading: this.props.loading
    }, filter => {
      const children = commands(filter);
      return [children, children.length > 0];
    });
  }

}

installed_commands_defineProperty(InstalledCommands, "propTypes", {
  commands: (prop_types_default()).array.isRequired,
  loading: (prop_types_default()).bool.isRequired,
  canManageOthersSlashCommands: (prop_types_default()).bool.isRequired,
  actions: prop_types_default().shape({
    regenCommandToken: (prop_types_default()).func.isRequired,
    deleteCommand: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/integrations/installed_commands/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function installed_commands_mapStateToProps(state, ownProps) {
  const canManageOthersSlashCommands = (0,entities_roles/* haveITeamPermission */.Rm)(state, ownProps.team.id, constants/* Permissions.MANAGE_OTHERS_SLASH_COMMANDS */.Pl.MANAGE_OTHERS_SLASH_COMMANDS);
  return {
    canManageOthersSlashCommands
  };
}

function installed_commands_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      regenCommandToken: integrations/* regenCommandToken */.kq,
      deleteCommand: integrations/* deleteCommand */.JL
    }, dispatch)
  };
}

/* harmony default export */ const installed_commands = ((0,es.connect)(installed_commands_mapStateToProps, installed_commands_mapDispatchToProps)(InstalledCommands));
;// CONCATENATED MODULE: ./components/integrations/abstract_command.jsx



function abstract_command_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.











const REQUEST_POST = 'P';
const REQUEST_GET = 'G';
class AbstractCommand extends react.PureComponent {
  constructor(props) {
    super(props);

    abstract_command_defineProperty(this, "getStateFromCommand", command => {
      return {
        displayName: command.display_name || '',
        description: command.description || '',
        trigger: command.trigger || '',
        url: command.url || '',
        method: command.method || REQUEST_POST,
        username: command.username || '',
        iconUrl: command.icon_url || '',
        autocomplete: command.auto_complete || false,
        autocompleteHint: command.auto_complete_hint || '',
        autocompleteDescription: command.auto_complete_desc || '',
        saving: false,
        clientError: null
      };
    });

    abstract_command_defineProperty(this, "handleSubmit", e => {
      e.preventDefault();

      if (this.state.saving) {
        return;
      }

      this.setState({
        saving: true,
        clientError: ''
      });
      let triggerWord = this.state.trigger.trim().toLowerCase();

      if (triggerWord.indexOf('/') === 0) {
        triggerWord = triggerWord.substr(1);
      }

      const command = {
        display_name: this.state.displayName,
        description: this.state.description,
        trigger: triggerWord,
        url: this.state.url.trim(),
        method: this.state.method,
        username: this.state.username,
        icon_url: this.state.iconUrl,
        auto_complete: this.state.autocomplete,
        team_id: this.props.team.id
      };

      if (command.auto_complete) {
        command.auto_complete_desc = this.state.autocompleteDescription;
        command.auto_complete_hint = this.state.autocompleteHint;
      }

      if (!command.trigger) {
        this.setState({
          saving: false,
          clientError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_command.triggerRequired",
            defaultMessage: "A trigger word is required"
          })
        });
        return;
      }

      if (command.trigger.indexOf('/') === 0) {
        this.setState({
          saving: false,
          clientError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_command.triggerInvalidSlash",
            defaultMessage: "A trigger word cannot begin with a /"
          })
        });
        return;
      }

      if (command.trigger.indexOf(' ') !== -1) {
        this.setState({
          saving: false,
          clientError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_command.triggerInvalidSpace",
            defaultMessage: "A trigger word must not contain spaces"
          })
        });
        return;
      }

      if (command.trigger.length < utils_constants/* default.MIN_TRIGGER_LENGTH */.ZP.MIN_TRIGGER_LENGTH || command.trigger.length > utils_constants/* default.MAX_TRIGGER_LENGTH */.ZP.MAX_TRIGGER_LENGTH) {
        this.setState({
          saving: false,
          clientError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_command.triggerInvalidLength",
            defaultMessage: "A trigger word must contain between {min} and {max} characters",
            values: {
              min: utils_constants/* default.MIN_TRIGGER_LENGTH */.ZP.MIN_TRIGGER_LENGTH,
              max: utils_constants/* default.MAX_TRIGGER_LENGTH */.ZP.MAX_TRIGGER_LENGTH
            }
          })
        });
        return;
      }

      if (!command.url) {
        this.setState({
          saving: false,
          clientError: /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: "add_command.urlRequired",
            defaultMessage: "A request URL is required"
          })
        });
        return;
      }

      this.props.action(command).then(() => this.setState({
        saving: false
      }));
    });

    abstract_command_defineProperty(this, "updateDisplayName", e => {
      this.setState({
        displayName: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateDescription", e => {
      this.setState({
        description: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateTrigger", e => {
      this.setState({
        trigger: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateUrl", e => {
      this.setState({
        url: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateMethod", e => {
      this.setState({
        method: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateUsername", e => {
      this.setState({
        username: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateIconUrl", e => {
      this.setState({
        iconUrl: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateAutocomplete", e => {
      this.setState({
        autocomplete: e.target.checked
      });
    });

    abstract_command_defineProperty(this, "updateAutocompleteHint", e => {
      this.setState({
        autocompleteHint: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateAutocompleteDescription", e => {
      this.setState({
        autocompleteDescription: e.target.value
      });
    });

    this.state = this.getStateFromCommand(this.props.initialCommand || {});
  }

  render() {
    let autocompleteHint = null;
    let autocompleteDescription = null;

    if (this.state.autocomplete) {
      autocompleteHint = /*#__PURE__*/react.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label col-sm-4",
        htmlFor: "autocompleteHint"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "add_command.autocompleteHint",
        defaultMessage: "Autocomplete Hint"
      })), /*#__PURE__*/react.createElement("div", {
        className: "col-md-5 col-sm-8"
      }, /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
        id: "autocompleteHint",
        type: "text",
        maxLength: "1024",
        className: "form-control",
        value: this.state.autocompleteHint,
        onChange: this.updateAutocompleteHint,
        placeholder: {
          id: (0,i18n.t)('add_command.autocompleteHint.placeholder'),
          defaultMessage: 'Example: [Patient Name]'
        }
      }), /*#__PURE__*/react.createElement("div", {
        className: "form__help"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "add_command.autocompleteHint.help",
        defaultMessage: "(Optional) Specify the arguments associated with your slash command. These are displayed as help on the autocomplete list."
      }))));
      autocompleteDescription = /*#__PURE__*/react.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react.createElement("label", {
        className: "control-label col-sm-4",
        htmlFor: "autocompleteDescription"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "add_command.autocompleteDescription",
        defaultMessage: "Autocomplete Description"
      })), /*#__PURE__*/react.createElement("div", {
        className: "col-md-5 col-sm-8"
      }, /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
        id: "description",
        type: "text",
        maxLength: "128",
        className: "form-control",
        value: this.state.autocompleteDescription,
        onChange: this.updateAutocompleteDescription,
        placeholder: {
          id: (0,i18n.t)('add_command.autocompleteDescription.placeholder'),
          defaultMessage: 'Example: "Returns search results for patient records"'
        }
      }), /*#__PURE__*/react.createElement("div", {
        className: "form__help"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "add_command.autocompleteDescription.help",
        defaultMessage: "(Optional) Describe your slash command for the autocomplete list."
      }))));
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-content row"
    }, /*#__PURE__*/react.createElement(BackstageHeader, null, /*#__PURE__*/react.createElement(react_router_dom.Link, {
      to: '/' + this.props.team.name + '/integrations/commands'
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "installed_command.header",
      defaultMessage: "Slash Commands"
    })), /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: this.props.header.id,
      defaultMessage: this.props.header.defaultMessage
    })), /*#__PURE__*/react.createElement("div", {
      className: "backstage-form"
    }, /*#__PURE__*/react.createElement("form", {
      className: "form-horizontal",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "displayName"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.displayName",
      defaultMessage: "Title"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "displayName",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.displayName,
      onChange: this.updateDisplayName
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.displayName.help",
      defaultMessage: "Specify a title, of up to 64 characters, for the slash command settings page."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "description"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.description",
      defaultMessage: "Description"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("input", {
      id: "description",
      type: "text",
      maxLength: "128",
      className: "form-control",
      value: this.state.description,
      onChange: this.updateDescription
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.description.help",
      defaultMessage: "Describe your incoming webhook."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "trigger"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.trigger",
      defaultMessage: "Command Trigger Word"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
      id: "trigger",
      type: "text",
      maxLength: utils_constants/* default.MAX_TRIGGER_LENGTH */.ZP.MAX_TRIGGER_LENGTH,
      className: "form-control",
      value: this.state.trigger,
      onChange: this.updateTrigger,
      placeholder: {
        id: (0,i18n.t)('add_command.trigger.placeholder'),
        defaultMessage: 'Command trigger e.g. "hello" not including the slash'
      }
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.trigger.help",
      defaultMessage: "Specify a trigger word that is not a built-in command, does not contain spaces, and does not begin with the slash character."
    })), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.trigger.helpExamples",
      defaultMessage: "Examples: client, employee, patient, weather"
    })), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.trigger.helpReserved",
      defaultMessage: "Reserved: {link}",
      values: {
        link: /*#__PURE__*/react.createElement("a", {
          href: "https://developers.mattermost.com/integrate/admin-guide/admin-slash-commands/#built-in-commands",
          target: "_blank",
          rel: "noopener noreferrer"
        }, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "add_command.trigger.helpReservedLinkText",
          defaultMessage: "See built-in slash commands"
        }))
      }
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "url"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.url",
      defaultMessage: "Request URL"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
      id: "url",
      type: "text",
      maxLength: "1024",
      className: "form-control",
      value: this.state.url,
      onChange: this.updateUrl,
      placeholder: {
        id: (0,i18n.t)('add_command.url.placeholder'),
        defaultMessage: 'Must start with http:// or https://'
      }
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.url.help",
      defaultMessage: "Specify the callback URL to receive the HTTP POST or GET event request when the slash command is run."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "method"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.method",
      defaultMessage: "Request Method"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement("select", {
      id: "method",
      className: "form-control",
      value: this.state.method,
      onChange: this.updateMethod
    }, /*#__PURE__*/react.createElement("option", {
      value: REQUEST_POST
    }, utils/* localizeMessage */._u('add_command.method.post', 'POST')), /*#__PURE__*/react.createElement("option", {
      value: REQUEST_GET
    }, utils/* localizeMessage */._u('add_command.method.get', 'GET'))), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.method.help",
      defaultMessage: "Specify the type of request, either POST or GET, sent to the endpoint that Mattermost hits to reach your application."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "username"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.username",
      defaultMessage: "Response Username"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
      id: "username",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.username,
      onChange: this.updateUsername,
      placeholder: {
        id: (0,i18n.t)('add_command.username.placeholder'),
        defaultMessage: 'Username'
      }
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.username.help",
      defaultMessage: "(Optional) Specify the name to use when posting responses for this slash command. Usernames can be up to 22 characters, and contain lowercase letters, numbers, and the symbols \\\"-\\\", \\\"_\\\", and \\\".\\\". If left blank, your Mattermost username is used."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "iconUrl"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.iconUrl",
      defaultMessage: "Response Icon"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
      id: "iconUrl",
      type: "text",
      maxLength: "1024",
      className: "form-control",
      value: this.state.iconUrl,
      onChange: this.updateIconUrl,
      placeholder: {
        id: (0,i18n.t)('add_command.iconUrl.placeholder'),
        defaultMessage: 'https://www.example.com/myicon.png'
      }
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.iconUrl.help",
      defaultMessage: "(Optional) Enter the URL of a .png or .jpg file to use as the icon when posting responses to this slash command. The file must be at least 128 pixels by 128 pixels. If left blank, your profile picture is used."
    })))), /*#__PURE__*/react.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "autocomplete"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.autocomplete",
      defaultMessage: "Autocomplete"
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-md-5 col-sm-8 checkbox"
    }, /*#__PURE__*/react.createElement("input", {
      id: "autocomplete",
      type: "checkbox",
      checked: this.state.autocomplete,
      onChange: this.updateAutocomplete
    }), /*#__PURE__*/react.createElement("div", {
      className: "form__help"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.autocomplete.help",
      defaultMessage: "(Optional) Show your slash command on the autocomplete list when someone types \"/\" in the input box."
    })))), autocompleteHint, autocompleteDescription, /*#__PURE__*/react.createElement("div", {
      className: "backstage-form__footer"
    }, /*#__PURE__*/react.createElement(form_error/* default */.Z, {
      type: "backstage",
      errors: [this.props.serverError, this.state.clientError]
    }), /*#__PURE__*/react.createElement(react_router_dom.Link, {
      className: "btn btn-link btn-sm",
      to: '/' + this.props.team.name + '/integrations/commands'
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "add_command.cancel",
      defaultMessage: "Cancel"
    })), /*#__PURE__*/react.createElement(spinner_button/* default */.Z, {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.saving,
      spinningText: utils/* localizeMessage */._u(this.props.loading.id, this.props.loading.defaultMessage),
      onClick: this.handleSubmit,
      id: "saveCommand"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: this.props.footer.id,
      defaultMessage: this.props.footer.defaultMessage
    })), this.props.renderExtra))));
  }

}

abstract_command_defineProperty(AbstractCommand, "propTypes", {
  /**
  * The current team
  */
  team: (prop_types_default()).object.isRequired,

  /**
  * The header text to render, has id and defaultMessage
  */
  header: (prop_types_default()).object.isRequired,

  /**
  * The footer text to render, has id and defaultMessage
  */
  footer: (prop_types_default()).object.isRequired,

  /**
  * The spinner loading text to render, has id and defaultMessage
  */
  loading: (prop_types_default()).object.isRequired,

  /**
   * Any extra component/node to render
   */
  renderExtra: (prop_types_default()).node.isRequired,

  /**
  * The server error text after a failed action
  */
  serverError: (prop_types_default()).string.isRequired,

  /**
  * The Command used to set the initial state
  */
  initialCommand: (prop_types_default()).object,

  /**
  * The async function to run when the action button is pressed
  */
  action: (prop_types_default()).func.isRequired
});
;// CONCATENATED MODULE: ./components/integrations/add_command/add_command.jsx


function add_command_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const add_command_HEADER = {
  id: (0,i18n.t)('integrations.add'),
  defaultMessage: 'Add'
};
const add_command_FOOTER = {
  id: (0,i18n.t)('add_command.save'),
  defaultMessage: 'Save'
};
const add_command_LOADING = {
  id: (0,i18n.t)('add_command.saving'),
  defaultMessage: 'Saving...'
};
class AddCommand extends react.PureComponent {
  constructor(props) {
    super(props);

    add_command_defineProperty(this, "addCommand", async command => {
      this.setState({
        serverError: ''
      });
      const {
        data,
        error
      } = await this.props.actions.addCommand(command);

      if (data) {
        browser_history/* browserHistory.push */.m.push("/".concat(this.props.team.name, "/integrations/commands/confirm?type=commands&id=").concat(data.id));
        return;
      }

      if (error) {
        this.setState({
          serverError: error.message
        });
      }
    });

    this.state = {
      serverError: ''
    };
  }

  render() {
    return /*#__PURE__*/react.createElement(AbstractCommand, {
      team: this.props.team,
      header: add_command_HEADER,
      footer: add_command_FOOTER,
      loading: add_command_LOADING,
      renderExtra: '',
      action: this.addCommand,
      serverError: this.state.serverError
    });
  }

}

add_command_defineProperty(AddCommand, "propTypes", {
  /**
  * The team data
  */
  team: (prop_types_default()).object,
  actions: prop_types_default().shape({
    /**
    * The function to call to add new command
    */
    addCommand: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/integrations/add_command/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function add_command_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      addCommand: integrations/* addCommand */.OH
    }, dispatch)
  };
}

/* harmony default export */ const add_command = ((0,es.connect)(null, add_command_mapDispatchToProps)(AddCommand));
;// CONCATENATED MODULE: ./components/integrations/edit_command/edit_command.tsx



function edit_command_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







const edit_command_HEADER = {
  id: (0,i18n.t)('integrations.edit'),
  defaultMessage: 'Edit'
};
const edit_command_FOOTER = {
  id: (0,i18n.t)('edit_command.update'),
  defaultMessage: 'Update'
};
const edit_command_LOADING = {
  id: (0,i18n.t)('edit_command.updating'),
  defaultMessage: 'Updating...'
};
class EditCommand extends react.PureComponent {
  constructor(props) {
    super(props);

    edit_command_defineProperty(this, "newCommand", void 0);

    edit_command_defineProperty(this, "editCommand", async command => {
      var _this$state$originalC, _this$state$originalC2, _this$state$originalC3, _this$state$originalC4;

      this.newCommand = command;

      if ((_this$state$originalC = this.state.originalCommand) !== null && _this$state$originalC !== void 0 && _this$state$originalC.id) {
        command.id = this.state.originalCommand.id;
      }

      if (((_this$state$originalC2 = this.state.originalCommand) === null || _this$state$originalC2 === void 0 ? void 0 : _this$state$originalC2.url) !== this.newCommand.url || ((_this$state$originalC3 = this.state.originalCommand) === null || _this$state$originalC3 === void 0 ? void 0 : _this$state$originalC3.trigger) !== this.newCommand.trigger || ((_this$state$originalC4 = this.state.originalCommand) === null || _this$state$originalC4 === void 0 ? void 0 : _this$state$originalC4.method) !== this.newCommand.method) {
        this.handleConfirmModal();
      } else {
        await this.submitCommand();
      }
    });

    edit_command_defineProperty(this, "handleConfirmModal", () => {
      this.setState({
        showConfirmModal: true
      });
    });

    edit_command_defineProperty(this, "confirmModalDismissed", () => {
      this.setState({
        showConfirmModal: false
      });
    });

    edit_command_defineProperty(this, "submitCommand", async () => {
      this.setState({
        serverError: ''
      });
      const {
        data,
        error
      } = await this.props.actions.editCommand(this.newCommand);

      if (data) {
        browser_history/* browserHistory.push */.m.push("/".concat(this.props.team.name, "/integrations/commands"));
        return;
      }

      this.setState({
        showConfirmModal: false
      });

      if (error) {
        this.setState({
          serverError: error.message
        });
      }
    });

    edit_command_defineProperty(this, "renderExtra", () => {
      const confirmButton = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "update_command.update",
        defaultMessage: "Update"
      });
      const confirmTitle = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "update_command.confirm",
        defaultMessage: "Edit Slash Command"
      });
      const confirmMessage = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "update_command.question",
        defaultMessage: "Your changes may break the existing slash command. Are you sure you would like to update it?"
      });
      return /*#__PURE__*/react.createElement(confirm_modal/* default */.Z, {
        title: confirmTitle,
        message: confirmMessage,
        confirmButtonText: confirmButton,
        show: this.state.showConfirmModal,
        onConfirm: this.submitCommand,
        onCancel: this.confirmModalDismissed
      });
    });

    this.newCommand = undefined;
    this.state = {
      originalCommand: null,
      showConfirmModal: false,
      serverError: ''
    };
  }

  componentDidMount() {
    if (this.props.enableCommands) {
      this.props.actions.getCustomTeamCommands(this.props.team.id).then(() => {
        this.setState({
          originalCommand: Object.values(this.props.commands).filter(command => command.id === this.props.commandId)[0]
        });
      });
    }
  }

  render() {
    if (!this.state.originalCommand) {
      return /*#__PURE__*/react.createElement(loading_screen/* default */.Z, null);
    }

    return /*#__PURE__*/react.createElement(AbstractCommand, {
      team: this.props.team,
      header: edit_command_HEADER,
      footer: edit_command_FOOTER,
      loading: edit_command_LOADING,
      renderExtra: this.renderExtra(),
      action: this.editCommand,
      serverError: this.state.serverError,
      initialCommand: this.state.originalCommand
    });
  }

}

edit_command_defineProperty(EditCommand, "propTypes", {
  commandId: prop_types_default().oneOfType([(prop_types_default()).string, prop_types_default().oneOf([null])]),
  actions: prop_types_default().shape({
    getCustomTeamCommands: (prop_types_default()).func.isRequired,
    editCommand: (prop_types_default()).func.isRequired
  }).isRequired,
  enableCommands: (prop_types_default()).bool.isRequired
});
;// CONCATENATED MODULE: ./components/integrations/edit_command/index.ts




// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function edit_command_mapStateToProps(state, ownProps) {
  const config = (0,general/* getConfig */.iE)(state);
  const commandId = new URLSearchParams(ownProps.location.search).get('id');
  const enableCommands = config.EnableCommands === 'true';
  return {
    commandId,
    commands: getCommands(state),
    enableCommands
  };
}

function edit_command_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      getCustomTeamCommands: integrations/* getCustomTeamCommands */.cC,
      editCommand: integrations/* editCommand */.h0
    }, dispatch)
  };
}

/* harmony default export */ const edit_command = ((0,es.connect)(edit_command_mapStateToProps, edit_command_mapDispatchToProps)(EditCommand));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(15306);
;// CONCATENATED MODULE: ./components/integrations/confirm_integration/confirm_integration.jsx






function confirm_integration_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










class ConfirmIntegration extends react.PureComponent {
  static get propTypes() {
    return {
      team: (prop_types_default()).object,
      location: (prop_types_default()).object,
      commands: (prop_types_default()).object,
      oauthApps: (prop_types_default()).object,
      incomingHooks: (prop_types_default()).object,
      outgoingHooks: (prop_types_default()).object,
      bots: (prop_types_default()).object
    };
  }

  constructor(props) {
    super(props);

    confirm_integration_defineProperty(this, "handleKeyPress", e => {
      if (e.key === 'Enter') {
        browser_history/* browserHistory.push */.m.push('/' + this.props.team.name + '/integrations/' + this.state.type);
      }
    });

    this.state = {
      type: new URLSearchParams(this.props.location.search).get('type'),
      id: new URLSearchParams(this.props.location.search).get('id')
    };
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress);
  }

  render() {
    let headerText = null;
    let helpText = null;
    let tokenText = null;
    const command = this.props.commands[this.state.id];
    const incomingHook = this.props.incomingHooks[this.state.id];
    const outgoingHook = this.props.outgoingHooks[this.state.id];
    const oauthApp = this.props.oauthApps[this.state.id];
    const bot = this.props.bots[this.state.id];

    if (this.state.type === utils_constants/* Constants.Integrations.COMMAND */.gT.Integrations.COMMAND && command) {
      const commandToken = command.token;
      headerText = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: 'installed_commands.header',
        defaultMessage: "Slash Commands"
      });
      helpText = /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "add_command.doneHelp",
        defaultMessage: "Your slash command is set up. The following token will be sent in the outgoing payload. Please use it to verify the request came from your Mattermost team (details at <link>Slash Commands</link>).",
        values: {
          link: msg => /*#__PURE__*/react.createElement("a", {
            href: "https://developers.mattermost.com/integrate/admin-guide/admin-slash-commands/",
            referrer: "noreferrer",
            target: "_blank",
            rel: "noreferrer"
          }, msg)
        }
      }));
      tokenText = /*#__PURE__*/react.createElement("p", {
        className: "word-break--all"
      }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "add_command.token",
        defaultMessage: "**Token**: {token}",
        values: {
          token: commandToken
        }
      }), /*#__PURE__*/react.createElement(CopyText, {
        value: commandToken
      }));
    } else if (this.state.type === utils_constants/* Constants.Integrations.INCOMING_WEBHOOK */.gT.Integrations.INCOMING_WEBHOOK && incomingHook) {
      const incomingHookToken = (0,url/* getSiteURL */.fO)() + '/hooks/' + incomingHook.id;
      headerText = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: 'installed_incoming_webhooks.header',
        defaultMessage: "Incoming Webhooks"
      });
      helpText = /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "add_incoming_webhook.doneHelp",
        defaultMessage: "Your incoming webhook is set up. Please send data to the following URL (details at <link>Incoming Webhooks</link>).",
        values: {
          link: msg => /*#__PURE__*/react.createElement("a", {
            href: "https://developers.mattermost.com/integrate/admin-guide/admin-webhooks-incoming/",
            referrer: "noreferrer",
            target: "_blank",
            rel: "noreferrer"
          }, msg)
        }
      }));
      tokenText = /*#__PURE__*/react.createElement("p", {
        className: "word-break--all"
      }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "add_incoming_webhook.url",
        defaultMessage: "**URL**: {url}",
        values: {
          url: '`' + incomingHookToken + '`'
        }
      }), /*#__PURE__*/react.createElement(CopyText, {
        value: incomingHookToken
      }));
    } else if (this.state.type === utils_constants/* Constants.Integrations.OUTGOING_WEBHOOK */.gT.Integrations.OUTGOING_WEBHOOK && outgoingHook) {
      const outgoingHookToken = outgoingHook.token;
      headerText = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: 'installed_outgoing_webhooks.header',
        defaultMessage: "Outgoing Webhooks"
      });
      helpText = /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "add_outgoing_webhook.doneHelp",
        defaultMessage: "Your outgoing webhook is set up. The following token will be sent in the outgoing payload. Please use it to verify that the request came from your Mattermost team (details at <link>Outgoing Webhooks</link>).",
        values: {
          link: msg => /*#__PURE__*/react.createElement("a", {
            href: "https://developers.mattermost.com/integrate/admin-guide/admin-webhooks-outgoing/",
            referrer: "noreferrer",
            target: "_blank",
            rel: "noreferrer"
          }, msg)
        }
      }));
      tokenText = /*#__PURE__*/react.createElement("p", {
        className: "word-break--all"
      }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "add_outgoing_webhook.token",
        defaultMessage: "**Token**: {token}",
        values: {
          token: outgoingHookToken
        }
      }), /*#__PURE__*/react.createElement(CopyText, {
        value: outgoingHookToken
      }));
    } else if (this.state.type === utils_constants/* Constants.Integrations.OAUTH_APP */.gT.Integrations.OAUTH_APP && oauthApp) {
      const oauthAppToken = oauthApp.id;
      const oauthAppSecret = oauthApp.client_secret;
      headerText = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: 'installed_oauth_apps.header',
        defaultMessage: "OAuth 2.0 Applications"
      });
      helpText = [];
      helpText.push( /*#__PURE__*/react.createElement("p", {
        key: "add_oauth_app.doneHelp"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "add_oauth_app.doneHelp",
        defaultMessage: "Your OAuth 2.0 application is set up. Please use the following Client ID and Client Secret when requesting authorization for your application (details at <link>oAuth 2 Applications</link>).",
        values: {
          link: msg => /*#__PURE__*/react.createElement("a", {
            href: "https://developers.mattermost.com/integrate/admin-guide/admin-oauth2/",
            referrer: "noreferrer",
            target: "_blank",
            rel: "noreferrer"
          }, msg)
        }
      })));
      helpText.push( /*#__PURE__*/react.createElement("p", {
        key: "add_oauth_app.clientId"
      }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "add_oauth_app.clientId",
        defaultMessage: "**Client ID**: {id}",
        values: {
          id: oauthAppToken
        }
      }), /*#__PURE__*/react.createElement(CopyText, {
        idMessage: "integrations.copy_client_id",
        defaultMessage: "Copy Client Id",
        value: oauthAppToken
      }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "add_oauth_app.clientSecret",
        defaultMessage: "**Client Secret**: {secret}",
        values: {
          secret: oauthAppSecret
        }
      }), /*#__PURE__*/react.createElement(CopyText, {
        idMessage: "integrations.copy_client_secret",
        defaultMessage: "Copy Client Secret",
        value: oauthAppSecret
      })));
      helpText.push( /*#__PURE__*/react.createElement("p", {
        key: "add_oauth_app.doneUrlHelp"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "add_oauth_app.doneUrlHelp",
        defaultMessage: "Here are your authorized redirect URLs."
      })));
      tokenText = /*#__PURE__*/react.createElement("p", {
        className: "word-break--all"
      }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "add_oauth_app.url",
        defaultMessage: "**URL(s)**: {url}",
        values: {
          url: oauthApp.callback_urls.join(', ')
        }
      }));
    } else if (this.state.type === utils_constants/* Constants.Integrations.BOT */.gT.Integrations.BOT && bot) {
      const botToken = new URLSearchParams(this.props.location.search).get('token');
      headerText = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "bots.manage.header",
        defaultMessage: "Bot Accounts"
      });
      helpText = /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "bots.manage.created.text",
        defaultMessage: "Your bot account **{botname}** has been created successfully. Please use the following access token to connect to the bot (see [documentation](https://mattermost.com/pl/default-bot-accounts) for further details).",
        values: {
          botname: bot.display_name || bot.username
        }
      }));
      tokenText = /*#__PURE__*/react.createElement("p", {
        className: "word-break--all"
      }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "add_outgoing_webhook.token",
        defaultMessage: "**Token**: {token}",
        values: {
          token: botToken
        }
      }), /*#__PURE__*/react.createElement(CopyText, {
        value: botToken
      }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "add_outgoing_webhook.token.message",
        defaultMessage: "Make sure to add this bot account to teams and channels you want it to interact in. See <link>documentation</link> to learn more.",
        values: {
          link: msg => /*#__PURE__*/react.createElement("a", {
            href: "https://mattermost.com/pl/default-bot-accounts",
            referrer: "noreferrer",
            target: "_blank",
            rel: "noreferrer"
          }, msg)
        }
      }));
    } else {
      browser_history/* browserHistory.replace */.m.replace("/error?type=".concat(utils_constants/* ErrorPageTypes.PAGE_NOT_FOUND */.vU.PAGE_NOT_FOUND));
      return '';
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-content row"
    }, /*#__PURE__*/react.createElement(BackstageHeader, null, /*#__PURE__*/react.createElement(react_router_dom.Link, {
      to: '/' + this.props.team.name + '/integrations/' + this.state.type
    }, headerText), /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "integrations.add",
      defaultMessage: "Add"
    })), /*#__PURE__*/react.createElement("div", {
      className: "backstage-form backstage-form__confirmation"
    }, /*#__PURE__*/react.createElement("h4", {
      className: "backstage-form__title",
      id: "formTitle"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "integrations.successful",
      defaultMessage: "Setup Successful"
    })), helpText, tokenText, /*#__PURE__*/react.createElement("div", {
      className: "backstage-form__footer"
    }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
      className: "btn btn-primary",
      type: "submit",
      to: '/' + this.props.team.name + '/integrations/' + this.state.type,
      id: "doneButton"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "integrations.done",
      defaultMessage: "Done"
    })))));
  }

}
;// CONCATENATED MODULE: ./components/integrations/confirm_integration/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function confirm_integration_mapStateToProps(state) {
  return {
    commands: getCommands(state),
    oauthApps: getOAuthApps(state),
    incomingHooks: getIncomingHooks(state),
    outgoingHooks: getOutgoingHooks(state),
    bots: (0,entities_bots/* getBotAccounts */.Gb)(state)
  };
}

/* harmony default export */ const confirm_integration = ((0,es.connect)(confirm_integration_mapStateToProps)(ConfirmIntegration));
;// CONCATENATED MODULE: ./components/integrations/commands_container/commands_container.tsx

const _excluded = ["component", "extraProps"];

function commands_container_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







const CommandRoute = _ref => {
  let {
    component: Component,
    extraProps
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react.createElement(react_router/* Route */.AW, Object.assign({}, rest, {
    render: props => /*#__PURE__*/react.createElement(Component, Object.assign({}, extraProps, props))
  }));
};

CommandRoute.propTypes = {
  component: (prop_types_default()).any.isRequired,
  extraProps: prop_types_default().shape({
    loading: (prop_types_default()).bool.isRequired,
    commands: (prop_types_default()).array.isRequired
  }).isRequired,
  path: (prop_types_default()).string.isRequired
};
class CommandsContainer extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    if (this.props.enableCommands) {
      var _this$props$team;

      this.props.actions.loadCommandsAndProfilesForTeam((_this$props$team = this.props.team) === null || _this$props$team === void 0 ? void 0 : _this$props$team.id).then(() => this.setState({
        loading: false
      }));
    }
  }

  render() {
    const extraProps = {
      loading: this.state.loading,
      commands: this.props.commands || [],
      users: this.props.users,
      team: this.props.team,
      user: this.props.user
    };
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(react_router/* Switch */.rs, null, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      exact: true,
      path: "".concat(this.props.match.url, "/"),
      render: () => /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
        to: "".concat(this.props.match.url, "/installed")
      })
    }), /*#__PURE__*/react.createElement(CommandRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/installed"),
      component: installed_commands
    }), /*#__PURE__*/react.createElement(CommandRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/add"),
      component: add_command
    }), /*#__PURE__*/react.createElement(CommandRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/edit"),
      component: edit_command
    }), /*#__PURE__*/react.createElement(CommandRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/confirm"),
      component: confirm_integration
    })));
  }

}

commands_container_defineProperty(CommandsContainer, "propTypes", {
  commands: (prop_types_default()).array.isRequired,
  match: prop_types_default().shape({
    url: (prop_types_default()).string.isRequired
  }).isRequired,
  actions: prop_types_default().shape({
    loadCommandsAndProfilesForTeam: (prop_types_default()).func.isRequired
  }).isRequired,
  enableCommands: (prop_types_default()).bool
});
;// CONCATENATED MODULE: ./components/integrations/commands_container/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








function commands_container_mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const enableCommands = config.EnableCommands === 'true';
  return {
    commands: Object.values(getCommands(state)),
    users: (0,entities_users/* getUsers */.Rf)(state),
    enableCommands
  };
}

function commands_container_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      loadCommandsAndProfilesForTeam: loadCommandsAndProfilesForTeam
    }, dispatch)
  };
}

/* harmony default export */ const commands_container = ((0,es.connect)(commands_container_mapStateToProps, commands_container_mapDispatchToProps)(CommandsContainer));
;// CONCATENATED MODULE: ./components/backstage/components/backstage_category.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class BackstageCategory extends react.PureComponent {
  static get propTypes() {
    return {
      name: (prop_types_default()).string.isRequired,
      title: (prop_types_default()).node.isRequired,
      icon: (prop_types_default()).string.isRequired,
      parentLink: (prop_types_default()).string,
      children: prop_types_default().arrayOf((prop_types_default()).element)
    };
  }

  static get defaultProps() {
    return {
      parentLink: '',
      children: []
    };
  }

  render() {
    const {
      name,
      title,
      icon,
      parentLink,
      children
    } = this.props;
    const link = parentLink + '/' + name;
    return /*#__PURE__*/react.createElement("li", {
      className: "backstage-sidebar__category"
    }, /*#__PURE__*/react.createElement(react_router_dom.NavLink, {
      to: link,
      className: "category-title",
      activeClassName: "category-title--active"
    }, /*#__PURE__*/react.createElement("i", {
      className: 'fa ' + icon
    }), /*#__PURE__*/react.createElement("span", {
      className: "category-title__text"
    }, title)), children && children.length > 0 && /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      path: link,
      render: () => /*#__PURE__*/react.createElement("ul", {
        className: "sections"
      }, react.Children.map(children, child => {
        if (!child) {
          return child;
        }

        return /*#__PURE__*/react.cloneElement(child, {
          parentLink: link
        });
      }))
    }));
  }

}
;// CONCATENATED MODULE: ./components/backstage/components/backstage_section.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class BackstageSection extends react.PureComponent {
  static get propTypes() {
    return {
      name: (prop_types_default()).string.isRequired,
      title: (prop_types_default()).node.isRequired,
      parentLink: (prop_types_default()).string,
      subsection: (prop_types_default()).bool,
      children: prop_types_default().arrayOf((prop_types_default()).element),
      id: (prop_types_default()).string
    };
  }

  static get defaultProps() {
    return {
      parentLink: '',
      subsection: false,
      children: []
    };
  }

  getLink() {
    return this.props.parentLink + '/' + this.props.name;
  }

  render() {
    const {
      title,
      subsection,
      children
    } = this.props;
    const link = this.getLink();
    let clonedChildren = null;

    if (children.length > 0) {
      clonedChildren = /*#__PURE__*/react.createElement("ul", {
        className: "subsections"
      }, react.Children.map(children, child => {
        return /*#__PURE__*/react.cloneElement(child, {
          parentLink: link,
          subsection: true
        });
      }));
    }

    let className = 'section';

    if (subsection) {
      className = 'subsection';
    }

    return /*#__PURE__*/react.createElement("li", {
      className: className,
      id: this.props.id
    }, /*#__PURE__*/react.createElement(react_router_dom.NavLink, {
      className: "".concat(className, "-title"),
      activeClassName: "".concat(className, "-title--active"),
      to: link
    }, /*#__PURE__*/react.createElement("span", {
      className: "".concat(className, "-title__text")
    }, title)), clonedChildren);
  }

}
;// CONCATENATED MODULE: ./components/backstage/components/backstage_sidebar.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class BackstageSidebar extends react.PureComponent {
  static get propTypes() {
    return {
      team: (prop_types_default()).object.isRequired,
      user: (prop_types_default()).object.isRequired,
      enableCustomEmoji: (prop_types_default()).bool.isRequired,
      enableIncomingWebhooks: (prop_types_default()).bool.isRequired,
      enableOutgoingWebhooks: (prop_types_default()).bool.isRequired,
      enableCommands: (prop_types_default()).bool.isRequired,
      enableOAuthServiceProvider: (prop_types_default()).bool.isRequired,
      canCreateOrDeleteCustomEmoji: (prop_types_default()).bool.isRequired,
      canManageIntegrations: (prop_types_default()).bool.isRequired
    };
  }

  renderCustomEmoji() {
    if (!this.props.enableCustomEmoji || !this.props.canCreateOrDeleteCustomEmoji) {
      return null;
    }

    return /*#__PURE__*/react.createElement(BackstageCategory, {
      name: "emoji",
      parentLink: '/' + this.props.team.name,
      icon: "fa-smile-o",
      title: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "backstage_sidebar.emoji",
        defaultMessage: "Custom Emoji"
      })
    });
  }

  renderIntegrations() {
    if (!this.props.canManageIntegrations) {
      return null;
    }

    let incomingWebhooks = null;

    if (this.props.enableIncomingWebhooks) {
      incomingWebhooks = /*#__PURE__*/react.createElement(team_permission_gate/* default */.Z, {
        permissions: [constants/* Permissions.MANAGE_INCOMING_WEBHOOKS */.Pl.MANAGE_INCOMING_WEBHOOKS],
        teamId: this.props.team.id
      }, /*#__PURE__*/react.createElement(BackstageSection, {
        name: "incoming_webhooks",
        parentLink: '/' + this.props.team.name + '/integrations',
        title: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "backstage_sidebar.integrations.incoming_webhooks",
          defaultMessage: "Incoming Webhooks"
        }),
        id: "incomingWebhooks"
      }));
    }

    let outgoingWebhooks = null;

    if (this.props.enableOutgoingWebhooks) {
      outgoingWebhooks = /*#__PURE__*/react.createElement(team_permission_gate/* default */.Z, {
        permissions: [constants/* Permissions.MANAGE_OUTGOING_WEBHOOKS */.Pl.MANAGE_OUTGOING_WEBHOOKS],
        teamId: this.props.team.id
      }, /*#__PURE__*/react.createElement(BackstageSection, {
        name: "outgoing_webhooks",
        parentLink: '/' + this.props.team.name + '/integrations',
        title: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "backstage_sidebar.integrations.outgoing_webhooks",
          defaultMessage: "Outgoing Webhooks"
        }),
        id: "outgoingWebhooks"
      }));
    }

    let commands = null;

    if (this.props.enableCommands) {
      commands = /*#__PURE__*/react.createElement(team_permission_gate/* default */.Z, {
        permissions: [constants/* Permissions.MANAGE_SLASH_COMMANDS */.Pl.MANAGE_SLASH_COMMANDS],
        teamId: this.props.team.id
      }, /*#__PURE__*/react.createElement(BackstageSection, {
        name: "commands",
        parentLink: '/' + this.props.team.name + '/integrations',
        title: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "backstage_sidebar.integrations.commands",
          defaultMessage: "Slash Commands"
        }),
        id: "slashCommands"
      }));
    }

    let oauthApps = null;

    if (this.props.enableOAuthServiceProvider) {
      oauthApps = /*#__PURE__*/react.createElement(system_permission_gate/* default */.Z, {
        permissions: [constants/* Permissions.MANAGE_OAUTH */.Pl.MANAGE_OAUTH]
      }, /*#__PURE__*/react.createElement(BackstageSection, {
        name: "oauth2-apps",
        parentLink: '/' + this.props.team.name + '/integrations',
        title: /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "backstage_sidebar.integrations.oauthApps",
          defaultMessage: "OAuth 2.0 Applications"
        }),
        id: "oauthApps"
      }));
    } // Note that we allow managing bot accounts even if bot account creation is disabled: only
    // a permissions check is required.


    const botAccounts = /*#__PURE__*/react.createElement(system_permission_gate/* default */.Z, {
      permissions: ['manage_bots', 'manage_others_bots']
    }, /*#__PURE__*/react.createElement(BackstageSection, {
      name: "bots",
      parentLink: '/' + this.props.team.name + '/integrations',
      title: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "backstage_sidebar.bots",
        defaultMessage: "Bot Accounts"
      }),
      id: "botAccounts"
    }));
    return /*#__PURE__*/react.createElement(BackstageCategory, {
      name: "integrations",
      icon: "fa-link",
      parentLink: '/' + this.props.team.name,
      title: /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "backstage_sidebar.integrations",
        defaultMessage: "Integrations"
      })
    }, incomingWebhooks, outgoingWebhooks, commands, oauthApps, botAccounts);
  }

  render() {
    return /*#__PURE__*/react.createElement("div", {
      className: "backstage-sidebar"
    }, /*#__PURE__*/react.createElement("ul", null, this.renderCustomEmoji(), this.renderIntegrations()));
  }

}
// EXTERNAL MODULE: ./components/backstage/components/backstage_navbar.jsx
var backstage_navbar = __webpack_require__(36192);
;// CONCATENATED MODULE: ./components/backstage/backstage_controller.jsx
const backstage_controller_excluded = ["component", "extraProps"];

function backstage_controller_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function backstage_controller_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = backstage_controller_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function backstage_controller_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

























const BackstageRoute = _ref => {
  let {
    component: Component,
    extraProps
  } = _ref,
      rest = backstage_controller_objectWithoutProperties(_ref, backstage_controller_excluded);

  return (
    /*#__PURE__*/
    //eslint-disable-line react/prop-types
    react.createElement(react_router/* Route */.AW, Object.assign({}, rest, {
      render: props => /*#__PURE__*/react.createElement(Component, Object.assign({}, extraProps, props))
    }))
  );
};

class BackstageController extends react.PureComponent {
  constructor() {
    super(...arguments);

    backstage_controller_defineProperty(this, "scrollToTop", () => {
      if (this.listRef) {
        this.listRef.scrollTop = 0;
      }
    });

    backstage_controller_defineProperty(this, "setListRef", ref => {
      this.listRef = ref;
    });
  }

  render() {
    if (this.props.team == null || this.props.user == null) {
      return /*#__PURE__*/react.createElement("div", null);
    }

    const extraProps = {
      team: this.props.team,
      user: this.props.user,
      scrollToTop: this.scrollToTop
    };
    return /*#__PURE__*/react.createElement("div", {
      className: "backstage"
    }, /*#__PURE__*/react.createElement(announcement_bar/* default */.Z, null), /*#__PURE__*/react.createElement(system_notice/* default */.Z, null), /*#__PURE__*/react.createElement(backstage_navbar/* default */.Z, {
      team: this.props.team,
      siteName: this.props.siteName
    }), /*#__PURE__*/react.createElement(pluggable/* default */.Z, {
      pluggableName: "Root"
    }), /*#__PURE__*/react.createElement("div", {
      className: "backstage-body",
      ref: this.setListRef
    }, /*#__PURE__*/react.createElement(BackstageSidebar, {
      team: this.props.team,
      user: this.props.user,
      enableCustomEmoji: this.props.enableCustomEmoji,
      enableIncomingWebhooks: this.props.enableIncomingWebhooks,
      enableOutgoingWebhooks: this.props.enableOutgoingWebhooks,
      enableCommands: this.props.enableCommands,
      enableOAuthServiceProvider: this.props.enableOAuthServiceProvider,
      canCreateOrDeleteCustomEmoji: this.props.canCreateOrDeleteCustomEmoji,
      canManageIntegrations: this.props.canManageIntegrations
    }), /*#__PURE__*/react.createElement(react_router/* Switch */.rs, null, /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      exact: true,
      path: '/:team/integrations',
      component: components_integrations
    }), /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      exact: true,
      path: "".concat(this.props.match.url, "/incoming_webhooks"),
      component: installed_incoming_webhooks
    }), /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/incoming_webhooks/add"),
      component: add_incoming_webhook
    }), /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/incoming_webhooks/edit"),
      component: edit_incoming_webhook
    }), /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      exact: true,
      path: "".concat(this.props.match.url, "/outgoing_webhooks"),
      component: installed_outgoing_webhooks
    }), /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/outgoing_webhooks/add"),
      component: add_outgoing_webhook
    }), /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/outgoing_webhooks/edit"),
      component: edit_outgoing_webhook
    }), /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/commands"),
      component: commands_container
    }), /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      exact: true,
      path: "".concat(this.props.match.url, "/oauth2-apps"),
      component: installed_oauth_apps
    }), /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/oauth2-apps/add"),
      component: add_oauth_app
    }), /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/oauth2-apps/edit"),
      component: edit_oauth_app
    }), /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/confirm"),
      component: confirm_integration
    }), /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      exact: true,
      path: '/:team/emoji',
      component: emoji
    }), /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/add"),
      component: add_emoji
    }), /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/bots/add"),
      component: add_bot
    }), /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/bots/edit"),
      component: add_bot
    }), /*#__PURE__*/react.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/bots"),
      component: integrations_bots
    }))));
  }

}

backstage_controller_defineProperty(BackstageController, "propTypes", {
  /**
   * Current user.
   */
  user: (prop_types_default()).object,

  /**
   * Current team.
   */
  team: (prop_types_default()).object,

  /**
   * Object from react-router
   */
  match: prop_types_default().shape({
    url: (prop_types_default()).string.isRequired
  }).isRequired,
  siteName: (prop_types_default()).string,
  enableCustomEmoji: (prop_types_default()).bool.isRequired,
  enableIncomingWebhooks: (prop_types_default()).bool.isRequired,
  enableOutgoingWebhooks: (prop_types_default()).bool.isRequired,
  enableCommands: (prop_types_default()).bool.isRequired,
  enableOAuthServiceProvider: (prop_types_default()).bool.isRequired,
  canCreateOrDeleteCustomEmoji: (prop_types_default()).bool.isRequired,
  canManageIntegrations: (prop_types_default()).bool.isRequired
});
;// CONCATENATED MODULE: ./components/backstage/index.js

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









function backstage_mapStateToProps(state) {
  const user = (0,entities_users/* getCurrentUser */.ts)(state);
  const team = (0,teams/* getCurrentTeam */.kA)(state);
  const config = (0,general/* getConfig */.iE)(state);
  const siteName = config.SiteName;
  const enableCustomEmoji = config.EnableCustomEmoji === 'true';
  const enableIncomingWebhooks = config.EnableIncomingWebhooks === 'true';
  const enableOutgoingWebhooks = config.EnableOutgoingWebhooks === 'true';
  const enableCommands = config.EnableCommands === 'true';
  const enableOAuthServiceProvider = config.EnableOAuthServiceProvider === 'true';
  let canCreateOrDeleteCustomEmoji = (0,entities_roles/* haveISystemPermission */.AN)(state, {
    permission: constants/* Permissions.CREATE_EMOJIS */.Pl.CREATE_EMOJIS
  }) || (0,entities_roles/* haveISystemPermission */.AN)(state, {
    permission: constants/* Permissions.DELETE_EMOJIS */.Pl.DELETE_EMOJIS
  });

  if (!canCreateOrDeleteCustomEmoji) {
    for (const t of (0,teams/* getMyTeams */.Dc)(state)) {
      if ((0,entities_roles/* haveITeamPermission */.Rm)(state, t.id, constants/* Permissions.CREATE_EMOJIS */.Pl.CREATE_EMOJIS) || (0,entities_roles/* haveITeamPermission */.Rm)(state, t.id, constants/* Permissions.DELETE_EMOJIS */.Pl.DELETE_EMOJIS)) {
        canCreateOrDeleteCustomEmoji = true;
        break;
      }
    }
  }

  const canManageTeamIntegrations = (0,entities_roles/* haveITeamPermission */.Rm)(state, '', constants/* Permissions.MANAGE_SLASH_COMMANDS */.Pl.MANAGE_SLASH_COMMANDS) || (0,entities_roles/* haveITeamPermission */.Rm)(state, '', constants/* Permissions.MANAGE_OAUTH */.Pl.MANAGE_OAUTH) || (0,entities_roles/* haveITeamPermission */.Rm)(state, '', constants/* Permissions.MANAGE_INCOMING_WEBHOOKS */.Pl.MANAGE_INCOMING_WEBHOOKS) || (0,entities_roles/* haveITeamPermission */.Rm)(state, '', constants/* Permissions.MANAGE_OUTGOING_WEBHOOKS */.Pl.MANAGE_OUTGOING_WEBHOOKS);
  const canManageSystemBots = (0,entities_roles/* haveISystemPermission */.AN)(state, {
    permission: constants/* Permissions.MANAGE_BOTS */.Pl.MANAGE_BOTS
  }) || (0,entities_roles/* haveISystemPermission */.AN)(state, {
    permission: constants/* Permissions.MANAGE_OTHERS_BOTS */.Pl.MANAGE_OTHERS_BOTS
  });
  const canManageIntegrations = canManageTeamIntegrations || canManageSystemBots;
  return {
    user,
    team,
    siteName,
    enableCustomEmoji,
    enableIncomingWebhooks,
    enableOutgoingWebhooks,
    enableCommands,
    enableOAuthServiceProvider,
    canCreateOrDeleteCustomEmoji,
    canManageIntegrations
  };
}

/* harmony default export */ const backstage = ((0,react_router/* withRouter */.EN)((0,es.connect)(backstage_mapStateToProps)(BackstageController)));

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

/***/ }),

/***/ 45341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lz": () => (/* binding */ createBot),
/* harmony export */   "XI": () => (/* binding */ patchBot),
/* harmony export */   "l5": () => (/* binding */ loadBots),
/* harmony export */   "Uc": () => (/* binding */ disableBot),
/* harmony export */   "PZ": () => (/* binding */ enableBot)
/* harmony export */ });
/* unused harmony exports loadBot, assignBot */
/* harmony import */ var mattermost_redux_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53473);
/* harmony import */ var mattermost_redux_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7039);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28399);
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



const BOTS_PER_PAGE_DEFAULT = 20;
function createBot(bot) {
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .bindClientFunc */ .Vs)({
    clientFunc: mattermost_redux_client__WEBPACK_IMPORTED_MODULE_0__/* .Client4.createBot */ .je.createBot,
    onSuccess: mattermost_redux_action_types__WEBPACK_IMPORTED_MODULE_1__/* .BotTypes.RECEIVED_BOT_ACCOUNT */ .Jv.RECEIVED_BOT_ACCOUNT,
    params: [bot]
  });
}
function patchBot(botUserId, botPatch) {
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .bindClientFunc */ .Vs)({
    clientFunc: mattermost_redux_client__WEBPACK_IMPORTED_MODULE_0__/* .Client4.patchBot */ .je.patchBot,
    onSuccess: mattermost_redux_action_types__WEBPACK_IMPORTED_MODULE_1__/* .BotTypes.RECEIVED_BOT_ACCOUNT */ .Jv.RECEIVED_BOT_ACCOUNT,
    params: [botUserId, botPatch]
  });
}
function loadBot(botUserId) {
  return bindClientFunc({
    clientFunc: Client4.getBot,
    onSuccess: BotTypes.RECEIVED_BOT_ACCOUNT,
    params: [botUserId]
  });
}
function loadBots() {
  let page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BOTS_PER_PAGE_DEFAULT;
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .bindClientFunc */ .Vs)({
    clientFunc: mattermost_redux_client__WEBPACK_IMPORTED_MODULE_0__/* .Client4.getBotsIncludeDeleted */ .je.getBotsIncludeDeleted,
    onSuccess: mattermost_redux_action_types__WEBPACK_IMPORTED_MODULE_1__/* .BotTypes.RECEIVED_BOT_ACCOUNTS */ .Jv.RECEIVED_BOT_ACCOUNTS,
    params: [page, perPage]
  });
}
function disableBot(botUserId) {
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .bindClientFunc */ .Vs)({
    clientFunc: mattermost_redux_client__WEBPACK_IMPORTED_MODULE_0__/* .Client4.disableBot */ .je.disableBot,
    onSuccess: mattermost_redux_action_types__WEBPACK_IMPORTED_MODULE_1__/* .BotTypes.RECEIVED_BOT_ACCOUNT */ .Jv.RECEIVED_BOT_ACCOUNT,
    params: [botUserId]
  });
}
function enableBot(botUserId) {
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .bindClientFunc */ .Vs)({
    clientFunc: mattermost_redux_client__WEBPACK_IMPORTED_MODULE_0__/* .Client4.enableBot */ .je.enableBot,
    onSuccess: mattermost_redux_action_types__WEBPACK_IMPORTED_MODULE_1__/* .BotTypes.RECEIVED_BOT_ACCOUNT */ .Jv.RECEIVED_BOT_ACCOUNT,
    params: [botUserId]
  });
}
function assignBot(botUserId, newOwnerId) {
  return bindClientFunc({
    clientFunc: Client4.assignBot,
    onSuccess: BotTypes.RECEIVED_BOT_ACCOUNT,
    params: [botUserId, newOwnerId]
  });
}

/***/ }),

/***/ 71436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gb": () => (/* binding */ getBotAccounts),
/* harmony export */   "Zh": () => (/* binding */ getExternalBotAccounts)
/* harmony export */ });
/* unused harmony export ExternalBotAccountNames */
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39346);
/* harmony import */ var mattermost_redux_selectors_entities_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61505);
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


const ExternalBotAccountNames = ['mattermost-advisor'];
function getBotAccounts(state) {
  return state.entities.bots.accounts;
}
const getExternalBotAccounts = (0,reselect__WEBPACK_IMPORTED_MODULE_0__/* .createSelector */ .P1)('getExternalBotAccounts', getBotAccounts, mattermost_redux_selectors_entities_common__WEBPACK_IMPORTED_MODULE_1__/* .getUsers */ .Rf, (botAccounts, userProfiles) => {
  const nextState = {};
  Object.values(botAccounts).forEach(botAccount => {
    const botUser = userProfiles[botAccount.user_id];

    if (botUser && !ExternalBotAccountNames.includes(botUser.username)) {
      nextState[botAccount.user_id] = botAccount;
    }
  });
  return nextState;
});

/***/ })

}]);
//# sourceMappingURL=396.1c8fdd9f51156ae1ae49.js.map