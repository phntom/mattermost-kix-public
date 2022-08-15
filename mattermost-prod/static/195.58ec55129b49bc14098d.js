"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[195],{

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

/***/ 64652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_audit_table)
});

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 1 modules
var redux = __webpack_require__(97779);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/users.ts
var users = __webpack_require__(33383);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/users.ts
var entities_users = __webpack_require__(12707);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/channels.ts
var channels = __webpack_require__(9276);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(15306);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(23123);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(73210);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 4 modules
var lib = __webpack_require__(33470);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./utils/i18n.tsx
var i18n = __webpack_require__(87993);
// EXTERNAL MODULE: ./utils/utils.tsx + 25 modules
var utils = __webpack_require__(15883);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/utils/user_utils.ts
var user_utils = __webpack_require__(60690);
;// CONCATENATED MODULE: ./components/audit_table/audit_table.tsx







function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const holders = (0,lib.defineMessages)({
  sessionRevoked: {
    id: (0,i18n.t)('audit_table.sessionRevoked'),
    defaultMessage: 'The session with id {sessionId} was revoked'
  },
  channelCreated: {
    id: (0,i18n.t)('audit_table.channelCreated'),
    defaultMessage: 'Created the {channelName} channel'
  },
  establishedDM: {
    id: (0,i18n.t)('audit_table.establishedDM'),
    defaultMessage: 'Established a direct message channel with {username}'
  },
  nameUpdated: {
    id: (0,i18n.t)('audit_table.nameUpdated'),
    defaultMessage: 'Updated the {channelName} channel name'
  },
  headerUpdated: {
    id: (0,i18n.t)('audit_table.headerUpdated'),
    defaultMessage: 'Updated the {channelName} channel header'
  },
  channelDeleted: {
    id: (0,i18n.t)('audit_table.channelDeleted'),
    defaultMessage: 'Archived the channel with the URL {url}'
  },
  userAdded: {
    id: (0,i18n.t)('audit_table.userAdded'),
    defaultMessage: 'Added {username} to the {channelName} channel'
  },
  userRemoved: {
    id: (0,i18n.t)('audit_table.userRemoved'),
    defaultMessage: 'Removed {username} to the {channelName} channel'
  },
  attemptedRegisterApp: {
    id: (0,i18n.t)('audit_table.attemptedRegisterApp'),
    defaultMessage: 'Attempted to register a new OAuth Application with ID {id}'
  },
  attemptedAllowOAuthAccess: {
    id: (0,i18n.t)('audit_table.attemptedAllowOAuthAccess'),
    defaultMessage: 'Attempted to allow a new OAuth service access'
  },
  successfullOAuthAccess: {
    id: (0,i18n.t)('audit_table.successfullOAuthAccess'),
    defaultMessage: 'Successfully gave a new OAuth service access'
  },
  failedOAuthAccess: {
    id: (0,i18n.t)('audit_table.failedOAuthAccess'),
    defaultMessage: 'Failed to allow a new OAuth service access - the redirect URI did not match the previously registered callback'
  },
  attemptedOAuthToken: {
    id: (0,i18n.t)('audit_table.attemptedOAuthToken'),
    defaultMessage: 'Attempted to get an OAuth access token'
  },
  successfullOAuthToken: {
    id: (0,i18n.t)('audit_table.successfullOAuthToken'),
    defaultMessage: 'Successfully added a new OAuth service'
  },
  oauthTokenFailed: {
    id: (0,i18n.t)('audit_table.oauthTokenFailed'),
    defaultMessage: 'Failed to get an OAuth access token - {token}'
  },
  attemptedLogin: {
    id: (0,i18n.t)('audit_table.attemptedLogin'),
    defaultMessage: 'Attempted to login'
  },
  authenticated: {
    id: (0,i18n.t)('audit_table.authenticated'),
    defaultMessage: 'Successfully authenticated'
  },
  successfullLogin: {
    id: (0,i18n.t)('audit_table.successfullLogin'),
    defaultMessage: 'Successfully logged in'
  },
  failedLogin: {
    id: (0,i18n.t)('audit_table.failedLogin'),
    defaultMessage: 'FAILED login attempt'
  },
  updatePicture: {
    id: (0,i18n.t)('audit_table.updatePicture'),
    defaultMessage: 'Updated your profile picture'
  },
  updateGeneral: {
    id: (0,i18n.t)('audit_table.updateGeneral'),
    defaultMessage: 'Updated the general settings of your account'
  },
  attemptedPassword: {
    id: (0,i18n.t)('audit_table.attemptedPassword'),
    defaultMessage: 'Attempted to change password'
  },
  successfullPassword: {
    id: (0,i18n.t)('audit_table.successfullPassword'),
    defaultMessage: 'Successfully changed password'
  },
  failedPassword: {
    id: (0,i18n.t)('audit_table.failedPassword'),
    defaultMessage: 'Failed to change password - tried to update user password who was logged in through OAuth'
  },
  updatedRol: {
    id: (0,i18n.t)('audit_table.updatedRol'),
    defaultMessage: 'Updated user role(s) to '
  },
  member: {
    id: (0,i18n.t)('audit_table.member'),
    defaultMessage: 'member'
  },
  accountActive: {
    id: (0,i18n.t)('audit_table.accountActive'),
    defaultMessage: 'Account activated'
  },
  accountInactive: {
    id: (0,i18n.t)('audit_table.accountInactive'),
    defaultMessage: 'Account deactivated'
  },
  by: {
    id: (0,i18n.t)('audit_table.by'),
    defaultMessage: ' by {username}'
  },
  byAdmin: {
    id: (0,i18n.t)('audit_table.byAdmin'),
    defaultMessage: ' by an admin'
  },
  sentEmail: {
    id: (0,i18n.t)('audit_table.sentEmail'),
    defaultMessage: 'Sent an email to {email} to reset your password'
  },
  attemptedReset: {
    id: (0,i18n.t)('audit_table.attemptedReset'),
    defaultMessage: 'Attempted to reset password'
  },
  successfullReset: {
    id: (0,i18n.t)('audit_table.successfullReset'),
    defaultMessage: 'Successfully reset password'
  },
  updateGlobalNotifications: {
    id: (0,i18n.t)('audit_table.updateGlobalNotifications'),
    defaultMessage: 'Updated your global notification settings'
  },
  attemptedWebhookCreate: {
    id: (0,i18n.t)('audit_table.attemptedWebhookCreate'),
    defaultMessage: 'Attempted to create a webhook'
  },
  succcessfullWebhookCreate: {
    id: (0,i18n.t)('audit_table.successfullWebhookCreate'),
    defaultMessage: 'Successfully created a webhook'
  },
  failedWebhookCreate: {
    id: (0,i18n.t)('audit_table.failedWebhookCreate'),
    defaultMessage: 'Failed to create a webhook - bad channel permissions'
  },
  attemptedWebhookDelete: {
    id: (0,i18n.t)('audit_table.attemptedWebhookDelete'),
    defaultMessage: 'Attempted to delete a webhook'
  },
  successfullWebhookDelete: {
    id: (0,i18n.t)('audit_table.successfullWebhookDelete'),
    defaultMessage: 'Successfully deleted a webhook'
  },
  failedWebhookDelete: {
    id: (0,i18n.t)('audit_table.failedWebhookDelete'),
    defaultMessage: 'Failed to delete a webhook - inappropriate conditions'
  },
  logout: {
    id: (0,i18n.t)('audit_table.logout'),
    defaultMessage: 'Logged out of your account'
  },
  verified: {
    id: (0,i18n.t)('audit_table.verified'),
    defaultMessage: 'Successfully verified your email address'
  },
  revokedAll: {
    id: (0,i18n.t)('audit_table.revokedAll'),
    defaultMessage: 'Revoked all current sessions for the team'
  },
  loginAttempt: {
    id: (0,i18n.t)('audit_table.loginAttempt'),
    defaultMessage: ' (Login attempt)'
  },
  loginFailure: {
    id: (0,i18n.t)('audit_table.loginFailure'),
    defaultMessage: ' (Login failure)'
  },
  attemptedLicenseAdd: {
    id: (0,i18n.t)('audit_table.attemptedLicenseAdd'),
    defaultMessage: 'Attempted to add new license'
  },
  successfullLicenseAdd: {
    id: (0,i18n.t)('audit_table.successfullLicenseAdd'),
    defaultMessage: 'Successfully added new license'
  },
  failedExpiredLicenseAdd: {
    id: (0,i18n.t)('audit_table.failedExpiredLicenseAdd'),
    defaultMessage: 'Failed to add a new license as it has either expired or not yet been started'
  },
  failedInvalidLicenseAdd: {
    id: (0,i18n.t)('audit_table.failedInvalidLicenseAdd'),
    defaultMessage: 'Failed to add an invalid license'
  },
  licenseRemoved: {
    id: (0,i18n.t)('audit_table.licenseRemoved'),
    defaultMessage: 'Successfully removed a license'
  }
});
class AuditTable extends react.PureComponent {
  componentDidMount() {
    const ids = this.props.audits.map(audit => audit.user_id);
    this.props.actions.getMissingProfilesByIds(ids);
  }

  render() {
    const {
      audits,
      showUserId,
      showIp,
      showSession
    } = this.props;
    const accessList = [];

    for (const [i, audit] of audits.entries()) {
      const auditInfo = this.formatAuditInfo(audit);
      let uContent;

      if (showUserId) {
        uContent = /*#__PURE__*/react.createElement("td", {
          className: "word-break--all"
        }, auditInfo.userId);
      }

      let iContent;

      if (showIp) {
        iContent = /*#__PURE__*/react.createElement("td", {
          className: "whitespace--nowrap word-break--all"
        }, auditInfo.ip);
      }

      let sContent;

      if (showSession) {
        sContent = /*#__PURE__*/react.createElement("td", {
          className: "whitespace--nowrap word-break--all"
        }, auditInfo.sessionId);
      }

      let descStyle = '';

      if (auditInfo.desc.toLowerCase().indexOf('fail') !== -1) {
        descStyle = ' color--error';
      }

      accessList[i] = /*#__PURE__*/react.createElement("tr", {
        key: audit.id
      }, /*#__PURE__*/react.createElement("td", {
        className: "whitespace--nowrap word-break--all"
      }, auditInfo.timestamp), uContent, /*#__PURE__*/react.createElement("td", {
        className: 'word-break--all' + descStyle
      }, auditInfo.desc), iContent, sContent);
    }

    let userIdContent;

    if (showUserId) {
      userIdContent = /*#__PURE__*/react.createElement("th", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "audit_table.userId",
        defaultMessage: "User ID"
      }));
    }

    let ipContent;

    if (showIp) {
      ipContent = /*#__PURE__*/react.createElement("th", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "audit_table.ip",
        defaultMessage: "IP Address"
      }));
    }

    let sessionContent;

    if (showSession) {
      sessionContent = /*#__PURE__*/react.createElement("th", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "audit_table.session",
        defaultMessage: "Session ID"
      }));
    }

    return /*#__PURE__*/react.createElement("table", {
      className: "table"
    }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "audit_table.timestamp",
      defaultMessage: "Timestamp"
    })), userIdContent, /*#__PURE__*/react.createElement("th", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "audit_table.action",
      defaultMessage: "Action"
    })), ipContent, sessionContent)), /*#__PURE__*/react.createElement("tbody", {
      "data-testid": "auditTableBody"
    }, accessList));
  }

  formatAuditInfo(audit) {
    const {
      formatMessage
    } = this.props.intl;
    const actionURL = audit.action.replace(/\/api\/v[1-9]/, '');
    let auditDesc = '';

    if (actionURL.indexOf('/channels') === 0) {
      const channelInfo = audit.extra_info.split(' ');
      const channelNameField = channelInfo[0].split('=');
      let channelURL = '';
      let channelObj;
      let channelName = '';

      if (channelNameField.indexOf('name') >= 0) {
        channelURL = channelNameField[channelNameField.indexOf('name') + 1];
        channelObj = this.props.getByName(channelURL);

        if (channelObj) {
          channelName = channelObj.display_name;
        } else {
          channelName = channelURL;
        }
      }

      switch (actionURL) {
        case '/channels/create':
          auditDesc = formatMessage(holders.channelCreated, {
            channelName
          });
          break;

        case '/channels/create_direct':
          if (channelObj) {
            auditDesc = formatMessage(holders.establishedDM, {
              username: this.props.getDirectTeammate(channelObj.id).username
            });
          }

          break;

        case '/channels/update':
          auditDesc = formatMessage(holders.nameUpdated, {
            channelName
          });
          break;

        case '/channels/update_desc': // support the old path

        case '/channels/update_header':
          auditDesc = formatMessage(holders.headerUpdated, {
            channelName
          });
          break;

        default:
          {
            let userIdField = [];
            let userId = '';
            let username = '';

            if (channelInfo[1]) {
              userIdField = channelInfo[1].split('=');

              if (userIdField.indexOf('user_id') >= 0) {
                userId = userIdField[userIdField.indexOf('user_id') + 1];
                const profile = this.props.getUser(userId);

                if (profile) {
                  username = profile.username;
                }
              }
            }

            if (/\/channels\/[A-Za-z0-9]+\/delete/.test(actionURL)) {
              auditDesc = formatMessage(holders.channelDeleted, {
                url: channelURL
              });
            } else if (/\/channels\/[A-Za-z0-9]+\/add/.test(actionURL)) {
              auditDesc = formatMessage(holders.userAdded, {
                username,
                channelName
              });
            } else if (/\/channels\/[A-Za-z0-9]+\/remove/.test(actionURL)) {
              auditDesc = formatMessage(holders.userRemoved, {
                username,
                channelName
              });
            }

            break;
          }
      }
    } else if (actionURL.indexOf('/oauth') === 0) {
      const oauthInfo = audit.extra_info.split(' ');

      switch (actionURL) {
        case '/oauth/register':
          {
            const clientIdField = oauthInfo[0].split('=');

            if (clientIdField[0] === 'client_id') {
              auditDesc = formatMessage(holders.attemptedRegisterApp, {
                id: clientIdField[1]
              });
            }

            break;
          }

        case '/oauth/allow':
          if (oauthInfo[0] === 'attempt') {
            auditDesc = formatMessage(holders.attemptedAllowOAuthAccess);
          } else if (oauthInfo[0] === 'success') {
            auditDesc = formatMessage(holders.successfullOAuthAccess);
          } else if (oauthInfo[0] === 'fail - redirect_uri did not match registered callback') {
            auditDesc = formatMessage(holders.failedOAuthAccess);
          }

          break;

        case '/oauth/access_token':
          if (oauthInfo[0] === 'attempt') {
            auditDesc = formatMessage(holders.attemptedOAuthToken);
          } else if (oauthInfo[0] === 'success') {
            auditDesc = formatMessage(holders.successfullOAuthToken);
          } else {
            const oauthTokenFailure = oauthInfo[0].split('-');

            if (oauthTokenFailure[0].trim() === 'fail' && oauthTokenFailure[1]) {
              auditDesc = formatMessage(holders.oauthTokenFailed, {
                token: oauthTokenFailure[1].trim()
              });
            }
          }

          break;

        default:
          break;
      }
    } else if (actionURL.indexOf('/users') === 0) {
      const userInfo = audit.extra_info.split(' ');

      switch (actionURL) {
        case '/users/login':
          if (userInfo[0] === 'attempt') {
            auditDesc = formatMessage(holders.attemptedLogin);
          } else if (userInfo[0] === 'success') {
            auditDesc = formatMessage(holders.successfullLogin);
          } else if (userInfo[0] === 'authenticated') {
            auditDesc = formatMessage(holders.authenticated);
          } else if (userInfo[0]) {
            auditDesc = formatMessage(holders.failedLogin);
          }

          break;

        case '/users/revoke_session':
          auditDesc = formatMessage(holders.sessionRevoked, {
            sessionId: userInfo[0].split('=')[1]
          });
          break;

        case '/users/newimage':
          auditDesc = formatMessage(holders.updatePicture);
          break;

        case '/users/update':
          auditDesc = formatMessage(holders.updateGeneral);
          break;

        case '/users/newpassword':
          if (userInfo[0] === 'attempted') {
            auditDesc = formatMessage(holders.attemptedPassword);
          } else if (userInfo[0] === 'completed') {
            auditDesc = formatMessage(holders.successfullPassword);
          } else if (userInfo[0] === 'failed - tried to update user password who was logged in through oauth') {
            auditDesc = formatMessage(holders.failedPassword);
          }

          break;

        case '/users/update_roles':
          {
            const userRoles = userInfo[0].split('=')[1];
            auditDesc = formatMessage(holders.updatedRol);

            if (userRoles.trim()) {
              auditDesc += userRoles;
            } else {
              auditDesc += formatMessage(holders.member);
            }

            break;
          }

        case '/users/update_active':
          {
            const updateType = userInfo[0].split('=')[0];
            const updateField = userInfo[0].split('=')[1];
            /* Either describes account activation/deactivation or a revoked session as part of an account deactivation */

            if (updateType === 'active') {
              if (updateField === 'true') {
                auditDesc = formatMessage(holders.accountActive);
              } else if (updateField === 'false') {
                auditDesc = formatMessage(holders.accountInactive);
              }

              const actingUserInfo = userInfo[1].split('=');

              if (actingUserInfo[0] === 'session_user') {
                const actingUser = this.props.getUser(actingUserInfo[1]);
                const user = this.props.currentUser;

                if (user && actingUser && (0,user_utils/* isSystemAdmin */.$O)(user.roles)) {
                  auditDesc += formatMessage(holders.by, {
                    username: actingUser.username
                  });
                } else if (user && actingUser) {
                  auditDesc += formatMessage(holders.byAdmin);
                }
              }
            } else if (updateType === 'session_id') {
              auditDesc = formatMessage(holders.sessionRevoked, {
                sessionId: updateField
              });
            }

            break;
          }

        case '/users/send_password_reset':
          auditDesc = formatMessage(holders.sentEmail, {
            email: userInfo[0].split('=')[1]
          });
          break;

        case '/users/reset_password':
          if (userInfo[0] === 'attempt') {
            auditDesc = formatMessage(holders.attemptedReset);
          } else if (userInfo[0] === 'success') {
            auditDesc = formatMessage(holders.successfullReset);
          }

          break;

        case '/users/update_notify':
          auditDesc = formatMessage(holders.updateGlobalNotifications);
          break;

        default:
          break;
      }
    } else if (actionURL.indexOf('/hooks') === 0) {
      const webhookInfo = audit.extra_info;

      switch (actionURL) {
        case '/hooks/incoming/create':
          if (webhookInfo === 'attempt') {
            auditDesc = formatMessage(holders.attemptedWebhookCreate);
          } else if (webhookInfo === 'success') {
            auditDesc = formatMessage(holders.succcessfullWebhookCreate);
          } else if (webhookInfo === 'fail - bad channel permissions') {
            auditDesc = formatMessage(holders.failedWebhookCreate);
          }

          break;

        case '/hooks/incoming/delete':
          if (webhookInfo === 'attempt') {
            auditDesc = formatMessage(holders.attemptedWebhookDelete);
          } else if (webhookInfo === 'success') {
            auditDesc = formatMessage(holders.successfullWebhookDelete);
          } else if (webhookInfo === 'fail - inappropriate conditions') {
            auditDesc = formatMessage(holders.failedWebhookDelete);
          }

          break;

        default:
          break;
      }
    } else if (actionURL.indexOf('/license') === 0) {
      const licenseInfo = audit.extra_info;

      switch (actionURL) {
        case '/license/add':
          if (licenseInfo === 'attempt') {
            auditDesc = formatMessage(holders.attemptedLicenseAdd);
          } else if (licenseInfo === 'success') {
            auditDesc = formatMessage(holders.successfullLicenseAdd);
          } else if (licenseInfo === 'failed - expired or non-started license') {
            auditDesc = formatMessage(holders.failedExpiredLicenseAdd);
          } else if (licenseInfo === 'failed - invalid license') {
            auditDesc = formatMessage(holders.failedInvalidLicenseAdd);
          }

          break;

        case '/license/remove':
          auditDesc = formatMessage(holders.licenseRemoved);
          break;

        default:
          break;
      }
    } else if (actionURL.indexOf('/admin/download_compliance_report') === 0) {
      auditDesc = (0,utils/* toTitleCase */.cv)(audit.extra_info);
    } else {
      switch (actionURL) {
        case '/logout':
          auditDesc = formatMessage(holders.logout);
          break;

        case '/verify_email':
          auditDesc = formatMessage(holders.verified);
          break;

        default:
          break;
      }
    }
    /* If all else fails... */


    if (!auditDesc) {
      /* Currently not called anywhere */
      if (audit.extra_info.indexOf('revoked_all=') >= 0) {
        auditDesc = formatMessage(holders.revokedAll);
      } else {
        let actionDesc = '';

        if (actionURL && actionURL.lastIndexOf('/') !== -1) {
          actionDesc = actionURL.substring(actionURL.lastIndexOf('/') + 1).replace('_', ' ');
          actionDesc = (0,utils/* toTitleCase */.cv)(actionDesc);
        }

        let extraInfoDesc = '';

        if (audit.extra_info) {
          extraInfoDesc = audit.extra_info;

          if (extraInfoDesc.indexOf('=') !== -1) {
            extraInfoDesc = extraInfoDesc.substring(extraInfoDesc.indexOf('=') + 1);
          }
        }

        auditDesc = actionDesc + ' ' + extraInfoDesc;
      }
    }

    const date = new Date(audit.create_at);
    const timestamp = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(lib.FormattedDate, {
      value: date,
      day: "2-digit",
      month: "short",
      year: "numeric"
    })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(lib.FormattedTime, {
      value: date,
      hour: "2-digit",
      minute: "2-digit"
    })));
    const auditProfile = this.props.getUser(audit.user_id);
    const userId = auditProfile ? auditProfile.email : audit.user_id;
    const desc = auditDesc;
    const ip = audit.ip_address;
    const sessionId = audit.session_id;
    return {
      timestamp,
      userId,
      desc,
      ip,
      sessionId
    };
  }

}

_defineProperty(AuditTable, "propTypes", {
  audits: (prop_types_default()).array.isRequired,
  showUserId: (prop_types_default()).bool,
  showIp: (prop_types_default()).bool,
  showSession: (prop_types_default()).bool,
  getUser: (prop_types_default()).func.isRequired,
  getByName: (prop_types_default()).func.isRequired,
  actions: prop_types_default().shape({
    getMissingProfilesByIds: (prop_types_default()).func.isRequired
  }).isRequired,
  getDirectTeammate: (prop_types_default()).func.isRequired
});

/* harmony default export */ const audit_table = ((0,injectIntl/* default */.ZP)(AuditTable));
;// CONCATENATED MODULE: ./components/audit_table/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function mapStateToProps(state) {
  return {
    currentUser: (0,entities_users/* getCurrentUser */.ts)(state),
    getUser: userId => (0,entities_users/* getUser */.PR)(state, userId),
    getByName: channelName => (0,channels/* getChannelByName */.ZO)(state, channelName),
    getDirectTeammate: channelId => (0,channels/* getDirectTeammate */.PR)(state, channelId)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      getMissingProfilesByIds: users/* getMissingProfilesByIds */.C4
    }, dispatch)
  };
}

/* harmony default export */ const components_audit_table = ((0,es.connect)(mapStateToProps, mapDispatchToProps)(audit_table));

/***/ }),

/***/ 71850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ColorInput)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93565);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17621);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_2__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class ColorInput extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "colorPicker", void 0);

    _defineProperty(this, "colorInput", void 0);

    _defineProperty(this, "checkClick", e => {
      if (!this.colorPicker.current || !this.colorPicker.current.contains(e.target)) {
        this.setState({
          isOpened: false
        });
      }
    });

    _defineProperty(this, "togglePicker", () => {
      if (!this.state.isOpened && this.colorInput.current) {
        this.colorInput.current.focus();
      }

      this.setState({
        isOpened: !this.state.isOpened
      });
    });

    _defineProperty(this, "handleColorChange", newColorData => {
      this.props.onChange(newColorData.hex);
    });

    _defineProperty(this, "onChange", event => {
      const value = event.target.value;
      const color = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(value);
      const normalizedColor = '#' + color.toHex();

      if (color.isValid()) {
        this.props.onChange(normalizedColor);
      }

      this.setState({
        value
      });
    });

    _defineProperty(this, "onFocus", event => {
      this.setState({
        focused: true
      });

      if (event.target) {
        event.target.setSelectionRange(1, event.target.value.length);
      }
    });

    _defineProperty(this, "onBlur", () => {
      const value = this.state.value;
      const color = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(value);
      const normalizedColor = '#' + color.toHex();

      if (color.isValid()) {
        this.props.onChange(normalizedColor);
        this.setState({
          value: normalizedColor
        });
      } else {
        this.setState({
          value: this.props.value
        });
      }

      this.setState({
        focused: false
      });
    });

    _defineProperty(this, "onKeyDown", event => {
      // open picker on enter or space
      if (event.key === 'Enter' || event.key === ' ') {
        this.togglePicker();
      }
    });

    this.colorPicker = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    this.colorInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    this.state = {
      focused: false,
      isOpened: false,
      value: props.value
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.focused && props.value !== state.value) {
      return {
        value: props.value
      };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      isOpened: prevIsOpened
    } = prevState;
    const {
      isOpened
    } = this.state;

    if (isOpened !== prevIsOpened) {
      if (isOpened) {
        document.addEventListener('click', this.checkClick);
      } else {
        document.removeEventListener('click', this.checkClick);
      }
    }
  }

  render() {
    const {
      id
    } = this.props;
    const {
      isOpened,
      value
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "color-input input-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      id: "".concat(id, "-inputColorValue"),
      ref: this.colorInput,
      className: "form-control",
      type: "text",
      value: value,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onKeyDown: this.onKeyDown,
      maxLength: 7,
      disabled: this.props.isDisabled
    }), !this.props.isDisabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      id: "".concat(id, "-squareColorIcon"),
      className: "input-group-addon color-pad",
      onClick: this.togglePicker
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      id: "".concat(id, "-squareColorIconValue"),
      className: "color-icon",
      style: {
        backgroundColor: value
      }
    })), isOpened && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: this.colorPicker,
      className: "color-popover",
      id: "".concat(id, "-ChromePickerModal")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_color__WEBPACK_IMPORTED_MODULE_1__/* .ChromePicker */ .AI, {
      color: value,
      onChange: this.handleColorChange,
      disableAlpha: true
    })));
  }

}

_defineProperty(ColorInput, "propTypes", {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
});

/***/ }),

/***/ 76195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ user_settings)
});

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/users.ts
var users = __webpack_require__(12707);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 1 modules
var redux = __webpack_require__(97779);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/general.ts
var general = __webpack_require__(22742);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/preferences.ts
var preferences = __webpack_require__(89754);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/preferences.ts
var actions_preferences = __webpack_require__(33969);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/users.ts
var actions_users = __webpack_require__(33383);
// EXTERNAL MODULE: ./utils/constants.tsx + 19 modules
var constants = __webpack_require__(66788);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(88674);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var components_message = __webpack_require__(44012);
// EXTERNAL MODULE: ./actions/global_actions.tsx + 1 modules
var global_actions = __webpack_require__(34288);
// EXTERNAL MODULE: ./utils/utils.tsx + 25 modules
var utils = __webpack_require__(15883);
// EXTERNAL MODULE: ./utils/i18n.tsx
var i18n = __webpack_require__(87993);
// EXTERNAL MODULE: ./components/setting_item_max.jsx
var setting_item_max = __webpack_require__(93733);
// EXTERNAL MODULE: ./components/setting_item_min/index.ts + 1 modules
var setting_item_min = __webpack_require__(24204);
// EXTERNAL MODULE: ./components/confirm_modal.tsx
var confirm_modal = __webpack_require__(32579);
// EXTERNAL MODULE: ./components/widgets/icons/fa_back_icon.tsx
var fa_back_icon = __webpack_require__(70767);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/constants/index.ts + 10 modules
var src_constants = __webpack_require__(33407);
;// CONCATENATED MODULE: ./components/user_settings/advanced/join_leave_section/join_leave_section.tsx


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class JoinLeaveSection extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleOnChange", e => {
      const value = e.currentTarget.value;
      this.setState({
        joinLeaveState: value
      });
    });

    _defineProperty(this, "handleUpdateSection", section => {
      if (!section) {
        this.setState({
          joinLeaveState: this.props.joinLeave
        });
      }

      this.props.onUpdateSection(section);
    });

    _defineProperty(this, "handleSubmit", () => {
      const {
        actions,
        currentUserId,
        onUpdateSection
      } = this.props;
      const joinLeavePreference = {
        category: src_constants/* Preferences.CATEGORY_ADVANCED_SETTINGS */.uP.CATEGORY_ADVANCED_SETTINGS,
        user_id: currentUserId,
        name: src_constants/* Preferences.ADVANCED_FILTER_JOIN_LEAVE */.uP.ADVANCED_FILTER_JOIN_LEAVE,
        value: this.state.joinLeaveState
      };
      actions.savePreferences(currentUserId, [joinLeavePreference]);
      onUpdateSection();
    });

    this.state = {
      joinLeaveState: props.joinLeave
    };
  }

  render() {
    const {
      joinLeaveState
    } = this.state;

    if (this.props.activeSection === constants/* AdvancedSections.JOIN_LEAVE */.ZE.JOIN_LEAVE) {
      return /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
        title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.advance.joinLeaveTitle",
          defaultMessage: "Enable Join/Leave Messages"
        }),
        inputs: [/*#__PURE__*/react.createElement("fieldset", {
          key: "joinLeaveSetting"
        }, /*#__PURE__*/react.createElement("legend", {
          className: "form-legend hidden-label"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.advance.joinLeaveTitle",
          defaultMessage: "Enable Join/Leave Messages"
        })), /*#__PURE__*/react.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
          id: "joinLeaveOn",
          type: "radio",
          value: 'true',
          name: constants/* AdvancedSections.JOIN_LEAVE */.ZE.JOIN_LEAVE,
          checked: joinLeaveState === 'true',
          onChange: this.handleOnChange
        }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.advance.on",
          defaultMessage: "On"
        })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
          id: "joinLeaveOff",
          type: "radio",
          value: 'false',
          name: constants/* AdvancedSections.JOIN_LEAVE */.ZE.JOIN_LEAVE,
          checked: joinLeaveState === 'false',
          onChange: this.handleOnChange
        }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.advance.off",
          defaultMessage: "Off"
        })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
          className: "mt-5"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.advance.joinLeaveDesc",
          defaultMessage: "When \"On\", System Messages saying a user has joined or left a channel will be visible. When \"Off\", the System Messages about joining or leaving a channel will be hidden. A message will still show up when you are added to a channel, so you can receive a notification."
        })))],
        setting: constants/* AdvancedSections.JOIN_LEAVE */.ZE.JOIN_LEAVE,
        submit: this.handleSubmit,
        saving: this.state.isSaving,
        server_error: this.state.serverError,
        updateSection: this.handleUpdateSection
      });
    }

    return /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
      title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.advance.joinLeaveTitle",
        defaultMessage: "Enable Join/Leave Messages"
      }),
      describe: this.props.renderOnOffLabel(joinLeaveState),
      section: constants/* AdvancedSections.JOIN_LEAVE */.ZE.JOIN_LEAVE,
      updateSection: this.handleUpdateSection
    });
  }

}

_defineProperty(JoinLeaveSection, "propTypes", {
  activeSection: (prop_types_default()).string,
  currentUserId: (prop_types_default()).string.isRequired,
  joinLeave: (prop_types_default()).string,
  onUpdateSection: (prop_types_default()).func.isRequired,
  renderOnOffLabel: (prop_types_default()).func.isRequired,
  actions: prop_types_default().shape({
    savePreferences: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/user_settings/advanced/join_leave_section/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








function mapStateToProps(state) {
  const joinLeave = (0,preferences/* get */.U2)(state, src_constants/* Preferences.CATEGORY_ADVANCED_SETTINGS */.uP.CATEGORY_ADVANCED_SETTINGS, src_constants/* Preferences.ADVANCED_FILTER_JOIN_LEAVE */.uP.ADVANCED_FILTER_JOIN_LEAVE, 'true');
  return {
    currentUserId: (0,users/* getCurrentUserId */.rc)(state),
    joinLeave
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      savePreferences: actions_preferences/* savePreferences */.$A
    }, dispatch)
  };
}

/* harmony default export */ const join_leave_section = ((0,es.connect)(mapStateToProps, mapDispatchToProps)(JoinLeaveSection));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(39714);
;// CONCATENATED MODULE: ./components/user_settings/advanced/performance_debugging_section/performance_debugging_section.tsx



// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function PerformanceDebuggingSection(props) {
  if (!props.performanceDebuggingEnabled) {
    return null;
  }

  let settings;

  if (props.activeSection === constants/* AdvancedSections.PERFORMANCE_DEBUGGING */.ZE.PERFORMANCE_DEBUGGING) {
    settings = /*#__PURE__*/react.createElement(PerformanceDebuggingSectionExpanded, props);
  } else {
    settings = /*#__PURE__*/react.createElement(PerformanceDebuggingSectionCollapsed, props);
  }

  return /*#__PURE__*/react.createElement(react.Fragment, null, settings, /*#__PURE__*/react.createElement("div", {
    className: "divider-light"
  }));
}
PerformanceDebuggingSection.propTypes = {
  activeSection: (prop_types_default()).string,
  onUpdateSection: (prop_types_default()).func.isRequired
};

function PerformanceDebuggingSectionCollapsed(props) {
  let settingsEnabled = 0;

  if (props.disableClientPlugins) {
    settingsEnabled += 1;
  }

  if (props.disableTelemetry) {
    settingsEnabled += 1;
  }

  if (props.disableTypingMessages) {
    settingsEnabled += 1;
  }

  let description;

  if (settingsEnabled === 0) {
    description = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.advance.performance.noneEnabled",
      defaultMessage: "No settings enabled"
    });
  } else {
    description = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.advance.performance.settingsEnabled",
      defaultMessage: "{count, number} {count, plural, one {setting} other {settings}} enabled",
      values: {
        count: settingsEnabled
      }
    });
  }

  return /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
    title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.advance.performance.title",
      defaultMessage: "Performance Debugging"
    }),
    describe: description,
    section: constants/* AdvancedSections.PERFORMANCE_DEBUGGING */.ZE.PERFORMANCE_DEBUGGING,
    updateSection: props.onUpdateSection
  });
}

PerformanceDebuggingSectionCollapsed.propTypes = {
  activeSection: (prop_types_default()).string,
  onUpdateSection: (prop_types_default()).func.isRequired
};

function PerformanceDebuggingSectionExpanded(props) {
  const [disableClientPlugins, setDisableClientPlugins] = (0,react.useState)(props.disableClientPlugins);
  const [disableTelemetry, setDisableTelemetry] = (0,react.useState)(props.disableTelemetry);
  const [disableTypingMessages, setDisableTypingMessages] = (0,react.useState)(props.disableTypingMessages);
  const handleSubmit = (0,react.useCallback)(() => {
    const preferences = [];

    if (disableClientPlugins !== props.disableClientPlugins) {
      preferences.push({
        user_id: props.currentUserId,
        category: src_constants/* Preferences.CATEGORY_PERFORMANCE_DEBUGGING */.uP.CATEGORY_PERFORMANCE_DEBUGGING,
        name: src_constants/* Preferences.NAME_DISABLE_CLIENT_PLUGINS */.uP.NAME_DISABLE_CLIENT_PLUGINS,
        value: disableClientPlugins.toString()
      });
    }

    if (disableTelemetry !== props.disableTelemetry) {
      preferences.push({
        user_id: props.currentUserId,
        category: src_constants/* Preferences.CATEGORY_PERFORMANCE_DEBUGGING */.uP.CATEGORY_PERFORMANCE_DEBUGGING,
        name: src_constants/* Preferences.NAME_DISABLE_TELEMETRY */.uP.NAME_DISABLE_TELEMETRY,
        value: disableTelemetry.toString()
      });
    }

    if (disableTypingMessages !== props.disableTypingMessages) {
      preferences.push({
        user_id: props.currentUserId,
        category: src_constants/* Preferences.CATEGORY_PERFORMANCE_DEBUGGING */.uP.CATEGORY_PERFORMANCE_DEBUGGING,
        name: src_constants/* Preferences.NAME_DISABLE_TYPING_MESSAGES */.uP.NAME_DISABLE_TYPING_MESSAGES,
        value: disableTypingMessages.toString()
      });
    }

    if (preferences.length !== 0) {
      props.savePreferences(props.currentUserId, preferences);
    }

    props.onUpdateSection('');
  }, [props.currentUserId, props.onUpdateSection, props.savePreferences, disableClientPlugins, disableTelemetry, disableTypingMessages]);
  return /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
    title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.advance.performance.title",
      defaultMessage: "Performance Debugging"
    }),
    inputs: [/*#__PURE__*/react.createElement("fieldset", {
      key: "settings"
    }, /*#__PURE__*/react.createElement("div", {
      className: "checkbox"
    }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
      type: "checkbox",
      checked: disableClientPlugins,
      onChange: e => {
        setDisableClientPlugins(e.target.checked);
      }
    }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.advance.performance.disableClientPlugins",
      defaultMessage: "Disable Client-side Plugins"
    }))), /*#__PURE__*/react.createElement("div", {
      className: "checkbox"
    }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
      type: "checkbox",
      checked: disableTelemetry,
      onChange: e => {
        setDisableTelemetry(e.target.checked);
      }
    }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.advance.performance.disableTelemetry",
      defaultMessage: "Disable telemetry events sent from the client"
    }))), /*#__PURE__*/react.createElement("div", {
      className: "checkbox"
    }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
      type: "checkbox",
      checked: disableTypingMessages,
      onChange: e => {
        setDisableTypingMessages(e.target.checked);
      }
    }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.advance.performance.disableTypingMessages",
      defaultMessage: "Disable \"User is typing...\" messages"
    }))), /*#__PURE__*/react.createElement("div", {
      className: "mt-5"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.advance.performance.info1",
      defaultMessage: "You may enable these settings temporarily to help isolate performance issues while debugging. We don't recommend leaving these settings enabled for an extended period of time as they can negatively impact your user experience."
    }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.advance.performance.info2",
      defaultMessage: "You may need to refresh the page before these settings take effect."
    })))],
    submit: handleSubmit,
    updateSection: props.onUpdateSection
  });
}

PerformanceDebuggingSectionExpanded.propTypes = {
  activeSection: (prop_types_default()).string,
  onUpdateSection: (prop_types_default()).func.isRequired
};
;// CONCATENATED MODULE: ./components/user_settings/advanced/performance_debugging_section/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








function performance_debugging_section_mapStateToProps(state) {
  return {
    currentUserId: (0,users/* getCurrentUserId */.rc)(state),
    disableClientPlugins: (0,preferences/* getBool */.o4)(state, src_constants/* Preferences.CATEGORY_PERFORMANCE_DEBUGGING */.uP.CATEGORY_PERFORMANCE_DEBUGGING, src_constants/* Preferences.NAME_DISABLE_CLIENT_PLUGINS */.uP.NAME_DISABLE_CLIENT_PLUGINS),
    disableTelemetry: (0,preferences/* getBool */.o4)(state, src_constants/* Preferences.CATEGORY_PERFORMANCE_DEBUGGING */.uP.CATEGORY_PERFORMANCE_DEBUGGING, src_constants/* Preferences.NAME_DISABLE_TELEMETRY */.uP.NAME_DISABLE_TELEMETRY),
    disableTypingMessages: (0,preferences/* getBool */.o4)(state, src_constants/* Preferences.CATEGORY_PERFORMANCE_DEBUGGING */.uP.CATEGORY_PERFORMANCE_DEBUGGING, src_constants/* Preferences.NAME_DISABLE_TYPING_MESSAGES */.uP.NAME_DISABLE_TYPING_MESSAGES),
    performanceDebuggingEnabled: (0,general/* isPerformanceDebuggingEnabled */.SU)(state)
  };
}

const performance_debugging_section_mapDispatchToProps = {
  savePreferences: actions_preferences/* savePreferences */.$A
};
const connector = (0,es.connect)(performance_debugging_section_mapStateToProps, performance_debugging_section_mapDispatchToProps);
/* harmony default export */ const performance_debugging_section = (connector(PerformanceDebuggingSection));
;// CONCATENATED MODULE: ./components/user_settings/advanced/user_settings_advanced.jsx



function user_settings_advanced_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable react/no-string-refs */













const PreReleaseFeatures = constants/* default.PRE_RELEASE_FEATURES */.ZP.PRE_RELEASE_FEATURES;
class AdvancedSettingsDisplay extends react.PureComponent {
  constructor(props) {
    super(props);

    user_settings_advanced_defineProperty(this, "getStateFromProps", () => {
      const advancedSettings = this.props.advancedSettingsCategory;
      const settings = {
        send_on_ctrl_enter: this.props.sendOnCtrlEnter,
        code_block_ctrl_enter: this.props.codeBlockOnCtrlEnter,
        formatting: this.props.formatting,
        join_leave: this.props.joinLeave
      };
      const PreReleaseFeaturesLocal = JSON.parse(JSON.stringify(PreReleaseFeatures));

      if (this.props.isAdvancedTextEditorEnabled) {
        delete PreReleaseFeaturesLocal.MARKDOWN_PREVIEW;
      }

      const preReleaseFeaturesKeys = Object.keys(PreReleaseFeaturesLocal);
      let enabledFeatures = 0;

      for (const as of advancedSettings) {
        for (const key of preReleaseFeaturesKeys) {
          const feature = PreReleaseFeaturesLocal[key];

          if (as.name === constants/* default.FeatureTogglePrefix */.ZP.FeatureTogglePrefix + feature.label) {
            settings[as.name] = as.value;

            if (as.value === 'true') {
              enabledFeatures += 1;
            }
          }
        }
      }

      const isSaving = false;
      const previewFeaturesEnabled = this.props.enablePreviewFeatures;
      const showDeactivateAccountModal = false;
      return {
        preReleaseFeatures: PreReleaseFeaturesLocal,
        settings,
        preReleaseFeaturesKeys,
        enabledFeatures,
        isSaving,
        previewFeaturesEnabled,
        showDeactivateAccountModal
      };
    });

    user_settings_advanced_defineProperty(this, "updateSetting", (setting, value) => {
      const settings = this.state.settings;
      settings[setting] = value;
      this.setState(settings);
    });

    user_settings_advanced_defineProperty(this, "toggleFeature", (feature, checked) => {
      const settings = this.state.settings;
      settings[constants/* default.FeatureTogglePrefix */.ZP.FeatureTogglePrefix + feature] = String(checked);
      let enabledFeatures = 0;
      Object.keys(this.state.settings).forEach(setting => {
        if (setting.lastIndexOf(constants/* default.FeatureTogglePrefix */.ZP.FeatureTogglePrefix) === 0 && this.state.settings[setting] === 'true') {
          enabledFeatures++;
        }
      });
      this.setState({
        settings,
        enabledFeatures
      });
    });

    user_settings_advanced_defineProperty(this, "saveEnabledFeatures", () => {
      const features = [];
      Object.keys(this.state.settings).forEach(setting => {
        if (setting.lastIndexOf(constants/* default.FeatureTogglePrefix */.ZP.FeatureTogglePrefix) === 0) {
          features.push(setting);
        }
      });
      this.handleSubmit(features);
    });

    user_settings_advanced_defineProperty(this, "handleSubmit", async settings => {
      const preferences = [];
      const {
        actions,
        currentUser
      } = this.props;
      const userId = currentUser.id; // this should be refactored so we can actually be certain about what type everything is

      (Array.isArray(settings) ? settings : [settings]).forEach(setting => {
        preferences.push({
          user_id: userId,
          category: constants/* default.Preferences.CATEGORY_ADVANCED_SETTINGS */.ZP.Preferences.CATEGORY_ADVANCED_SETTINGS,
          name: setting,
          value: this.state.settings[setting]
        });
      });
      this.setState({
        isSaving: true
      });
      await actions.savePreferences(userId, preferences);
      this.handleUpdateSection('');
    });

    user_settings_advanced_defineProperty(this, "handleDeactivateAccountSubmit", async () => {
      const userId = this.props.currentUser.id;
      this.setState({
        isSaving: true
      });
      this.props.actions.updateUserActive(userId, false).then(_ref => {
        let {
          error
        } = _ref;

        if (error) {
          this.setState({
            serverError: error.message
          });
        }
      });
      const {
        data,
        error
      } = await this.props.actions.revokeAllSessionsForUser(userId);

      if (data) {
        (0,global_actions/* emitUserLoggedOutEvent */.gc)();
      } else if (error) {
        this.setState({
          serverError: error.message
        });
      }
    });

    user_settings_advanced_defineProperty(this, "handleShowDeactivateAccountModal", () => {
      this.setState({
        showDeactivateAccountModal: true
      });
    });

    user_settings_advanced_defineProperty(this, "handleHideDeactivateAccountModal", () => {
      this.setState({
        showDeactivateAccountModal: false
      });
    });

    user_settings_advanced_defineProperty(this, "handleUpdateSection", section => {
      if (!section) {
        this.setState(this.getStateFromProps());
      }

      this.setState({
        isSaving: false
      });
      this.props.updateSection(section);
    });

    user_settings_advanced_defineProperty(this, "getCtrlSendText", () => {
      const description = {
        default: {
          id: (0,i18n.t)('user.settings.advance.sendDesc'),
          defaultMessage: 'When enabled, CTRL + ENTER will send the message and ENTER inserts a new line.'
        },
        mac: {
          id: (0,i18n.t)('user.settings.advance.sendDesc.mac'),
          defaultMessage: 'When enabled, ⌘ + ENTER will send the message and ENTER inserts a new line.'
        }
      };
      const title = {
        default: {
          id: (0,i18n.t)('user.settings.advance.sendTitle'),
          defaultMessage: 'Send Messages on CTRL+ENTER'
        },
        mac: {
          id: (0,i18n.t)('user.settings.advance.sendTitle.mac'),
          defaultMessage: 'Send Messages on ⌘+ENTER'
        }
      };

      if (utils/* isMac */.V5()) {
        return {
          ctrlSendTitle: title.mac,
          ctrlSendDesc: description.mac
        };
      }

      return {
        ctrlSendTitle: title.default,
        ctrlSendDesc: description.default
      };
    });

    user_settings_advanced_defineProperty(this, "renderFormattingSection", () => {
      if (this.props.activeSection === 'formatting') {
        return /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
          title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.advance.formattingTitle",
            defaultMessage: "Enable Post Formatting"
          }),
          inputs: [/*#__PURE__*/react.createElement("fieldset", {
            key: "formattingSetting"
          }, /*#__PURE__*/react.createElement("legend", {
            className: "form-legend hidden-label"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.advance.formattingTitle",
            defaultMessage: "Enable Post Formatting"
          })), /*#__PURE__*/react.createElement("div", {
            className: "radio"
          }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
            id: "postFormattingOn",
            type: "radio",
            name: "formatting",
            checked: this.state.settings.formatting !== 'false',
            onChange: this.updateSetting.bind(this, 'formatting', 'true')
          }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.advance.on",
            defaultMessage: "On"
          })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
            className: "radio"
          }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
            id: "postFormattingOff",
            type: "radio",
            name: "formatting",
            checked: this.state.settings.formatting === 'false',
            onChange: this.updateSetting.bind(this, 'formatting', 'false')
          }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.advance.off",
            defaultMessage: "Off"
          })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
            className: "mt-5"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.advance.formattingDesc",
            defaultMessage: "If enabled, posts will be formatted to create links, show emoji, style the text, and add line breaks. By default, this setting is enabled."
          })))],
          setting: 'formatting',
          submit: this.handleSubmit,
          saving: this.state.isSaving,
          server_error: this.state.serverError,
          updateSection: this.handleUpdateSection
        });
      }

      return /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.advance.formattingTitle",
          defaultMessage: "Enable Post Formatting"
        }),
        describe: this.renderOnOffLabel(this.state.settings.formatting),
        section: 'formatting',
        updateSection: this.handleUpdateSection
      });
    });

    this.state = this.getStateFromProps();
  }

  renderOnOffLabel(enabled) {
    if (enabled === 'false') {
      return /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.advance.off",
        defaultMessage: "Off"
      });
    }

    return /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.advance.on",
      defaultMessage: "On"
    });
  }

  renderCtrlEnterLabel() {
    const ctrlEnter = this.state.settings.send_on_ctrl_enter;
    const codeBlockCtrlEnter = this.state.settings.code_block_ctrl_enter;

    if (ctrlEnter === 'false' && codeBlockCtrlEnter === 'false') {
      return /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.advance.off",
        defaultMessage: "Off"
      });
    } else if (ctrlEnter === 'true' && codeBlockCtrlEnter === 'true') {
      return /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.advance.onForAllMessages",
        defaultMessage: "On for all messages"
      });
    }

    return /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.advance.onForCode",
      defaultMessage: "On only for code blocks starting with ```"
    });
  }

  renderFeatureLabel(feature) {
    switch (feature) {
      case 'MARKDOWN_PREVIEW':
        return /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.advance.markdown_preview",
          defaultMessage: "Show markdown preview option in message input box"
        });

      default:
        return null;
    }
  }

  render() {
    const serverError = this.state.serverError || null;
    let ctrlSendSection;
    const {
      ctrlSendTitle,
      ctrlSendDesc
    } = this.getCtrlSendText();

    if (this.props.activeSection === 'advancedCtrlSend') {
      const ctrlSendActive = [this.state.settings.send_on_ctrl_enter === 'true', this.state.settings.send_on_ctrl_enter === 'false' && this.state.settings.code_block_ctrl_enter === 'true', this.state.settings.send_on_ctrl_enter === 'false' && this.state.settings.code_block_ctrl_enter === 'false'];
      const inputs = [/*#__PURE__*/react.createElement("fieldset", {
        key: "ctrlSendSetting"
      }, /*#__PURE__*/react.createElement("legend", {
        className: "form-legend hidden-label"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, ctrlSendTitle)), /*#__PURE__*/react.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        id: "ctrlSendOn",
        type: "radio",
        name: "sendOnCtrlEnter",
        checked: ctrlSendActive[0],
        onChange: () => {
          this.updateSetting('send_on_ctrl_enter', 'true');
          this.updateSetting('code_block_ctrl_enter', 'true');
        }
      }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.advance.onForAllMessages",
        defaultMessage: "On for all messages"
      })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        id: "ctrlSendOnForCode",
        type: "radio",
        name: "sendOnCtrlEnter",
        checked: ctrlSendActive[1],
        onChange: () => {
          this.updateSetting('send_on_ctrl_enter', 'false');
          this.updateSetting('code_block_ctrl_enter', 'true');
        }
      }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.advance.onForCode",
        defaultMessage: "On only for code blocks starting with ```"
      })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        id: "ctrlSendOff",
        type: "radio",
        name: "sendOnCtrlEnter",
        checked: ctrlSendActive[2],
        onChange: () => {
          this.updateSetting('send_on_ctrl_enter', 'false');
          this.updateSetting('code_block_ctrl_enter', 'false');
        }
      }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.advance.off",
        defaultMessage: "Off"
      })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(components_message/* default */.Z, ctrlSendDesc)))];
      ctrlSendSection = /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
        title: /*#__PURE__*/react.createElement(components_message/* default */.Z, ctrlSendTitle),
        inputs: inputs,
        submit: this.handleSubmit.bind(this, ['send_on_ctrl_enter', 'code_block_ctrl_enter']),
        saving: this.state.isSaving,
        server_error: serverError,
        updateSection: this.handleUpdateSection
      });
    } else {
      ctrlSendSection = /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: /*#__PURE__*/react.createElement(components_message/* default */.Z, ctrlSendTitle),
        describe: this.renderCtrlEnterLabel(),
        section: 'advancedCtrlSend',
        updateSection: this.handleUpdateSection
      });
    }

    const formattingSection = this.props.isAdvancedTextEditorEnabled ? null : this.renderFormattingSection();
    let formattingSectionDivider = null;

    if (formattingSection) {
      formattingSectionDivider = /*#__PURE__*/react.createElement("div", {
        className: "divider-light"
      });
    }

    let previewFeaturesSection;
    let previewFeaturesSectionDivider;

    if (this.state.previewFeaturesEnabled && this.state.preReleaseFeaturesKeys.length > 0) {
      previewFeaturesSectionDivider = /*#__PURE__*/react.createElement("div", {
        className: "divider-light"
      });

      if (this.props.activeSection === 'advancedPreviewFeatures') {
        const inputs = [];
        this.state.preReleaseFeaturesKeys.forEach(key => {
          const feature = this.state.preReleaseFeatures[key];
          inputs.push( /*#__PURE__*/react.createElement("div", {
            key: 'advancedPreviewFeatures_' + feature.label
          }, /*#__PURE__*/react.createElement("div", {
            className: "checkbox"
          }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
            id: 'advancedPreviewFeatures' + feature.label,
            type: "checkbox",
            checked: this.state.settings[constants/* default.FeatureTogglePrefix */.ZP.FeatureTogglePrefix + feature.label] === 'true',
            onChange: e => {
              this.toggleFeature(feature.label, e.target.checked);
            }
          }), this.renderFeatureLabel(key)))));
        });
        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "advancedPreviewFeatures_helptext"
        }, /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.advance.preReleaseDesc",
          defaultMessage: "Check any pre-released features you'd like to preview.  You may also need to refresh the page before the setting will take effect."
        })));
        previewFeaturesSection = /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
          title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.advance.preReleaseTitle",
            defaultMessage: "Preview Pre-release Features"
          }),
          inputs: inputs,
          submit: this.saveEnabledFeatures,
          saving: this.state.isSaving,
          server_error: serverError,
          updateSection: this.handleUpdateSection
        });
      } else {
        previewFeaturesSection = /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
          title: utils/* localizeMessage */._u('user.settings.advance.preReleaseTitle', 'Preview Pre-release Features'),
          describe: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.advance.enabledFeatures",
            defaultMessage: "{count, number} {count, plural, one {feature} other {features}} enabled",
            values: {
              count: this.state.enabledFeatures
            }
          }),
          section: 'advancedPreviewFeatures',
          updateSection: this.handleUpdateSection
        });
      }
    }

    let deactivateAccountSection = '';
    let makeConfirmationModal = '';
    const currentUser = this.props.currentUser;

    if (currentUser.auth_service === '' && this.props.enableUserDeactivation) {
      if (this.props.activeSection === 'deactivateAccount') {
        deactivateAccountSection = /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
          title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.advance.deactivateAccountTitle",
            defaultMessage: "Deactivate Account"
          }),
          inputs: [/*#__PURE__*/react.createElement("div", {
            key: "formattingSetting"
          }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.advance.deactivateDesc",
            defaultMessage: "Deactivating your account removes your ability to log in to this server and disables all email and mobile notifications. To reactivate your account, contact your System Administrator."
          })))],
          saveButtonText: 'Deactivate',
          setting: 'deactivateAccount',
          submit: this.handleShowDeactivateAccountModal,
          saving: this.state.isSaving,
          server_error: this.state.serverError,
          updateSection: this.handleUpdateSection
        });
      } else {
        deactivateAccountSection = /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
          title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.advance.deactivateAccountTitle",
            defaultMessage: "Deactivate Account"
          }),
          describe: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.advance.deactivateDescShort",
            defaultMessage: "Click 'Edit' to deactivate your account"
          }),
          section: 'deactivateAccount',
          updateSection: this.handleUpdateSection
        });
      }

      const confirmButtonClass = 'btn btn-danger';
      const deactivateMemberButton = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.advance.deactivate_member_modal.deactivateButton",
        defaultMessage: "Yes, deactivate my account"
      });
      makeConfirmationModal = /*#__PURE__*/react.createElement(confirm_modal/* default */.Z, {
        show: this.state.showDeactivateAccountModal,
        title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.advance.confirmDeactivateAccountTitle",
          defaultMessage: "Confirm Deactivation"
        }),
        message: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.advance.confirmDeactivateDesc",
          defaultMessage: "Are you sure you want to deactivate your account? This can only be reversed by your System Administrator."
        }),
        confirmButtonClass: confirmButtonClass,
        confirmButtonText: deactivateMemberButton,
        onConfirm: this.handleDeactivateAccountSubmit,
        onCancel: this.handleHideDeactivateAccountModal
      });
    }

    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
      className: "modal-header"
    }, /*#__PURE__*/react.createElement("button", {
      id: "closeButton",
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.props.closeModal
    }, /*#__PURE__*/react.createElement("span", {
      "aria-hidden": "true"
    }, '×')), /*#__PURE__*/react.createElement("h4", {
      className: "modal-title",
      ref: "title"
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal-back"
    }, /*#__PURE__*/react.createElement("span", {
      onClick: this.props.collapseModal
    }, /*#__PURE__*/react.createElement(fa_back_icon/* default */.Z, null))), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.advance.title",
      defaultMessage: "Advanced Settings"
    }))), /*#__PURE__*/react.createElement("div", {
      className: "user-settings"
    }, /*#__PURE__*/react.createElement("h3", {
      className: "tab-header"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.advance.title",
      defaultMessage: "Advanced Settings"
    })), /*#__PURE__*/react.createElement("div", {
      className: "divider-dark first"
    }), ctrlSendSection, formattingSectionDivider, formattingSection, /*#__PURE__*/react.createElement("div", {
      className: "divider-light"
    }), /*#__PURE__*/react.createElement(join_leave_section, {
      activeSection: this.props.activeSection,
      onUpdateSection: this.handleUpdateSection,
      renderOnOffLabel: this.renderOnOffLabel
    }), previewFeaturesSectionDivider, previewFeaturesSection, formattingSectionDivider, /*#__PURE__*/react.createElement(performance_debugging_section, {
      activeSection: this.props.activeSection,
      onUpdateSection: this.handleUpdateSection
    }), deactivateAccountSection, /*#__PURE__*/react.createElement("div", {
      className: "divider-dark"
    }), makeConfirmationModal));
  }

}
/* eslint-enable react/no-string-refs */

user_settings_advanced_defineProperty(AdvancedSettingsDisplay, "propTypes", {
  currentUser: (prop_types_default()).object.isRequired,
  advancedSettingsCategory: (prop_types_default()).array.isRequired,
  isAdvancedTextEditorEnabled: (prop_types_default()).bool,
  sendOnCtrlEnter: (prop_types_default()).string.isRequired,
  codeBlockOnCtrlEnter: (prop_types_default()).bool,
  formatting: (prop_types_default()).string.isRequired,
  joinLeave: (prop_types_default()).string.isRequired,
  updateSection: (prop_types_default()).func,
  activeSection: (prop_types_default()).string,
  closeModal: (prop_types_default()).func.isRequired,
  collapseModal: (prop_types_default()).func.isRequired,
  enablePreviewFeatures: (prop_types_default()).bool,
  enableUserDeactivation: (prop_types_default()).bool,
  actions: prop_types_default().shape({
    savePreferences: (prop_types_default()).func.isRequired,
    updateUserActive: (prop_types_default()).func.isRequired,
    revokeAllSessionsForUser: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/user_settings/advanced/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










function makeMapStateToProps() {
  const getAdvancedSettingsCategory = (0,preferences/* makeGetCategory */.YX)();
  return state => {
    const config = (0,general/* getConfig */.iE)(state);
    const enablePreviewFeatures = config.EnablePreviewFeatures === 'true';
    const enableUserDeactivation = config.EnableUserDeactivation === 'true';
    return {
      advancedSettingsCategory: getAdvancedSettingsCategory(state, constants/* Preferences.CATEGORY_ADVANCED_SETTINGS */.uP.CATEGORY_ADVANCED_SETTINGS),
      isAdvancedTextEditorEnabled: (0,preferences/* getIsAdvancedTextEditorEnabled */.P3)(state),
      sendOnCtrlEnter: (0,preferences/* get */.U2)(state, constants/* Preferences.CATEGORY_ADVANCED_SETTINGS */.uP.CATEGORY_ADVANCED_SETTINGS, 'send_on_ctrl_enter', 'false'),
      codeBlockOnCtrlEnter: (0,preferences/* get */.U2)(state, constants/* Preferences.CATEGORY_ADVANCED_SETTINGS */.uP.CATEGORY_ADVANCED_SETTINGS, 'code_block_ctrl_enter', 'true'),
      formatting: (0,preferences/* get */.U2)(state, constants/* Preferences.CATEGORY_ADVANCED_SETTINGS */.uP.CATEGORY_ADVANCED_SETTINGS, 'formatting', 'true'),
      joinLeave: (0,preferences/* get */.U2)(state, constants/* Preferences.CATEGORY_ADVANCED_SETTINGS */.uP.CATEGORY_ADVANCED_SETTINGS, 'join_leave', 'true'),
      currentUser: (0,users/* getCurrentUser */.ts)(state),
      enablePreviewFeatures,
      enableUserDeactivation
    };
  };
}

function advanced_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      savePreferences: actions_preferences/* savePreferences */.$A,
      updateUserActive: actions_users/* updateUserActive */.q0,
      revokeAllSessionsForUser: actions_users/* revokeAllSessionsForUser */.tG
    }, dispatch)
  };
}

/* harmony default export */ const advanced = ((0,es.connect)(makeMapStateToProps, advanced_mapDispatchToProps)(AdvancedSettingsDisplay));
// EXTERNAL MODULE: ./node_modules/timezones.json/index.js
var timezones_json = __webpack_require__(65326);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/timezone.ts
var timezone = __webpack_require__(73042);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/timezone.ts
var entities_timezone = __webpack_require__(66469);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/utils/timezone_utils.ts
var timezone_utils = __webpack_require__(92966);
// EXTERNAL MODULE: ./packages/types/src/config.ts
var src_config = __webpack_require__(66099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(41817);
// EXTERNAL MODULE: ./node_modules/fast-deep-equal/index.js
var fast_deep_equal = __webpack_require__(64063);
var fast_deep_equal_default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal);
// EXTERNAL MODULE: ./actions/telemetry_actions.jsx
var telemetry_actions = __webpack_require__(59925);
// EXTERNAL MODULE: ./utils/timezone.jsx
var utils_timezone = __webpack_require__(58367);
// EXTERNAL MODULE: ./i18n/i18n.jsx + 20 modules
var i18n_i18n = __webpack_require__(89363);
// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(45288);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/teams.ts
var teams = __webpack_require__(5596);
// EXTERNAL MODULE: ./actions/views/modals.ts
var modals = __webpack_require__(97486);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(19601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(23123);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/Modal.js
var Modal = __webpack_require__(43253);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/utils/theme_utils.ts
var theme_utils = __webpack_require__(71170);
;// CONCATENATED MODULE: ./components/user_settings/import_theme_modal.tsx





function import_theme_modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





class ImportThemeModal extends react.PureComponent {
  constructor(props) {
    super(props);

    import_theme_modal_defineProperty(this, "handleOnHide", () => {
      this.setState({
        show: false
      });
    });

    import_theme_modal_defineProperty(this, "handleSubmit", e => {
      var _this$props$callback, _this$props;

      e.preventDefault();
      const text = this.state.value;

      if (!ImportThemeModal.isInputValid(text)) {
        this.setState({
          inputError: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.import_theme.submitError",
            defaultMessage: "Invalid format, please try copying and pasting in again."
          })
        });
        return;
      }
      /*
       * index mapping of slack theme format (index => slack-property name)
       *
       * |-------|-------------------------|-------------------------|
       * | index | Slack theme-property    | MM theme-property       |
       * |-------|-------------------------|-------------------------|
       * |   0   | Column BG               | sidebarBg               |
       * |   1   | ???                     | sidebarHeaderBg         |
       * |   2   | Active Item BG          | sidebarTextActiveBorder |
       * |   3   | Active Item Text        | sidebarTextActiveColor  |
       * |   4   | Hover Item BG           | sidebarTextHoverBg      |
       * |   5   | Text Color              | sidebarText             |
       * |   6   | Active Presence         | onlineIndicator         |
       * |   7   | Mention Badge           | mentionBg               |
       * |   8   | TOP-NAV BG              | --- (desktop only)      |
       * |   9   | TOP-NAV Text            | --- (desktop only)      |
       * |-------|-------------------------|-------------------------|
       *
       * values at index 8 + 9 are only for the desktop app
       */


      const [sidebarBg, // 0
      sidebarHeaderBg, // 1
      sidebarTextActiveBorder, // 2
      sidebarTextActiveColor, // 3
      sidebarTextHoverBg, // 4
      sidebarText, // 5
      onlineIndicator, // 6
      mentionBg // 7
      ] = text.split(',');
      const theme = (0,theme_utils/* setThemeDefaults */.Yn)({
        type: 'custom',
        sidebarBg,
        sidebarText,
        sidebarUnreadText: sidebarText,
        sidebarTextHoverBg,
        sidebarTextActiveBorder,
        sidebarTextActiveColor,
        sidebarHeaderBg,
        sidebarHeaderTextColor: sidebarText,
        onlineIndicator,
        mentionBg
      });
      (_this$props$callback = (_this$props = this.props).callback) === null || _this$props$callback === void 0 ? void 0 : _this$props$callback.call(_this$props, theme);
      this.handleOnHide();
    });

    import_theme_modal_defineProperty(this, "handleChange", e => {
      const value = e.target.value;
      this.setState({
        value
      });

      if (ImportThemeModal.isInputValid(value)) {
        this.setState({
          inputError: null
        });
      } else {
        this.setState({
          inputError: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.import_theme.submitError",
            defaultMessage: "Invalid format, please try copying and pasting in again."
          })
        });
      }
    });

    this.state = {
      value: '',
      inputError: null,
      show: true
    };
  }

  static isInputValid(text) {
    if (text.length === 0) {
      return false;
    }

    if (text.indexOf(' ') !== -1) {
      return false;
    }

    if (text.length > 0 && text.indexOf(',') === -1) {
      return false;
    }

    if (text.length > 0) {
      const colors = text.split(',');

      if (colors.length !== 10) {
        return false;
      }

      for (let i = 0; i < colors.length; i++) {
        if (colors[i].length !== 7 && colors[i].length !== 4) {
          return false;
        }

        if (colors[i].charAt(0) !== '#') {
          return false;
        }
      }
    }

    return true;
  }

  render() {
    return /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Modal/* default */.Z, {
      dialogClassName: "a11y__modal",
      show: this.state.show,
      onHide: this.handleOnHide,
      onExited: this.props.onExited,
      role: "dialog",
      "aria-labelledby": "importThemeModalLabel"
    }, /*#__PURE__*/react.createElement(Modal/* default.Header */.Z.Header, {
      closeButton: true
    }, /*#__PURE__*/react.createElement(Modal/* default.Title */.Z.Title, {
      componentClass: "h1",
      id: "importThemeModalLabel"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.import_theme.importHeader",
      defaultMessage: "Import Slack Theme"
    }))), /*#__PURE__*/react.createElement("form", {
      role: "form",
      className: "form-horizontal"
    }, /*#__PURE__*/react.createElement(Modal/* default.Body */.Z.Body, null, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.import_theme.importBody",
      defaultMessage: "To import a theme, go to a Slack team and look for \"Preferences -> Themes\". Open the custom theme option, copy the theme color values and paste them here:"
    })), /*#__PURE__*/react.createElement("div", {
      className: "form-group less"
    }, /*#__PURE__*/react.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/react.createElement("input", {
      id: "themeVector",
      type: "text",
      className: "form-control",
      value: this.state.value,
      onChange: this.handleChange
    }), /*#__PURE__*/react.createElement("div", {
      className: "input__help"
    }, this.state.inputError)))), /*#__PURE__*/react.createElement(Modal/* default.Footer */.Z.Footer, null, /*#__PURE__*/react.createElement("button", {
      id: "cancelButton",
      type: "button",
      className: "btn btn-link",
      onClick: this.handleOnHide
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.import_theme.cancel",
      defaultMessage: "Cancel"
    })), /*#__PURE__*/react.createElement("button", {
      id: "submitButton",
      onClick: this.handleSubmit,
      type: "submit",
      className: "btn btn-primary"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.import_theme.submit",
      defaultMessage: "Submit"
    }))))));
  }

}

import_theme_modal_defineProperty(ImportThemeModal, "propTypes", {
  callback: prop_types_default().oneOfType([(prop_types_default()).func, prop_types_default().oneOf([null])]),
  onExited: (prop_types_default()).func.isRequired
});

/* harmony default export */ const import_theme_modal = ((0,injectIntl/* default */.ZP)(ImportThemeModal));
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 4 modules
var lib = __webpack_require__(33470);
// EXTERNAL MODULE: ./components/localized_icon.tsx
var localized_icon = __webpack_require__(68492);
// EXTERNAL MODULE: ./components/overlay_trigger.tsx
var overlay_trigger = __webpack_require__(15558);
// EXTERNAL MODULE: ./components/widgets/popover/index.tsx
var popover = __webpack_require__(6429);
// EXTERNAL MODULE: ./components/color_input.tsx
var color_input = __webpack_require__(71850);
;// CONCATENATED MODULE: ./components/user_settings/display/user_settings_theme/color_chooser.tsx

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


function ColorChooser(props) {
  const handleChange = newColor => {
    var _props$onChange;

    (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, props.id, newColor);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("label", {
    className: "custom-label"
  }, props.label), /*#__PURE__*/react.createElement(color_input/* default */.Z, {
    id: props.id,
    value: props.value,
    onChange: handleChange
  }));
}
ColorChooser.propTypes = {
  id: (prop_types_default()).string.isRequired,
  label: (prop_types_default()).node.isRequired,
  value: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func
};
;// CONCATENATED MODULE: ./components/user_settings/display/user_settings_theme/custom_theme_chooser.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { custom_theme_chooser_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function custom_theme_chooser_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable react/no-string-refs */










const COPY_SUCCESS_INTERVAL = 3000;
const messages = (0,lib.defineMessages)({
  sidebarBg: {
    id: (0,i18n.t)('user.settings.custom_theme.sidebarBg'),
    defaultMessage: 'Sidebar BG'
  },
  sidebarText: {
    id: (0,i18n.t)('user.settings.custom_theme.sidebarText'),
    defaultMessage: 'Sidebar Text'
  },
  sidebarHeaderBg: {
    id: (0,i18n.t)('user.settings.custom_theme.sidebarHeaderBg'),
    defaultMessage: 'Sidebar Header BG'
  },
  sidebarTeamBarBg: {
    id: (0,i18n.t)('user.settings.custom_theme.sidebarTeamBarBg'),
    defaultMessage: 'Team Sidebar BG'
  },
  sidebarHeaderTextColor: {
    id: (0,i18n.t)('user.settings.custom_theme.sidebarHeaderTextColor'),
    defaultMessage: 'Sidebar Header Text'
  },
  sidebarUnreadText: {
    id: (0,i18n.t)('user.settings.custom_theme.sidebarUnreadText'),
    defaultMessage: 'Sidebar Unread Text'
  },
  sidebarTextHoverBg: {
    id: (0,i18n.t)('user.settings.custom_theme.sidebarTextHoverBg'),
    defaultMessage: 'Sidebar Text Hover BG'
  },
  sidebarTextActiveBorder: {
    id: (0,i18n.t)('user.settings.custom_theme.sidebarTextActiveBorder'),
    defaultMessage: 'Sidebar Text Active Border'
  },
  sidebarTextActiveColor: {
    id: (0,i18n.t)('user.settings.custom_theme.sidebarTextActiveColor'),
    defaultMessage: 'Sidebar Text Active Color'
  },
  onlineIndicator: {
    id: (0,i18n.t)('user.settings.custom_theme.onlineIndicator'),
    defaultMessage: 'Online Indicator'
  },
  awayIndicator: {
    id: (0,i18n.t)('user.settings.custom_theme.awayIndicator'),
    defaultMessage: 'Away Indicator'
  },
  dndIndicator: {
    id: (0,i18n.t)('user.settings.custom_theme.dndIndicator'),
    defaultMessage: 'Do Not Disturb Indicator'
  },
  mentionBg: {
    id: (0,i18n.t)('user.settings.custom_theme.mentionBg'),
    defaultMessage: 'Mention Jewel BG'
  },
  mentionColor: {
    id: (0,i18n.t)('user.settings.custom_theme.mentionColor'),
    defaultMessage: 'Mention Jewel Text'
  },
  centerChannelBg: {
    id: (0,i18n.t)('user.settings.custom_theme.centerChannelBg'),
    defaultMessage: 'Center Channel BG'
  },
  centerChannelColor: {
    id: (0,i18n.t)('user.settings.custom_theme.centerChannelColor'),
    defaultMessage: 'Center Channel Text'
  },
  newMessageSeparator: {
    id: (0,i18n.t)('user.settings.custom_theme.newMessageSeparator'),
    defaultMessage: 'New Message Separator'
  },
  linkColor: {
    id: (0,i18n.t)('user.settings.custom_theme.linkColor'),
    defaultMessage: 'Link Color'
  },
  buttonBg: {
    id: (0,i18n.t)('user.settings.custom_theme.buttonBg'),
    defaultMessage: 'Button BG'
  },
  buttonColor: {
    id: (0,i18n.t)('user.settings.custom_theme.buttonColor'),
    defaultMessage: 'Button Text'
  },
  errorTextColor: {
    id: (0,i18n.t)('user.settings.custom_theme.errorTextColor'),
    defaultMessage: 'Error Text Color'
  },
  mentionHighlightBg: {
    id: (0,i18n.t)('user.settings.custom_theme.mentionHighlightBg'),
    defaultMessage: 'Mention Highlight BG'
  },
  mentionHighlightLink: {
    id: (0,i18n.t)('user.settings.custom_theme.mentionHighlightLink'),
    defaultMessage: 'Mention Highlight Link'
  },
  codeTheme: {
    id: (0,i18n.t)('user.settings.custom_theme.codeTheme'),
    defaultMessage: 'Code Theme'
  }
});
class CustomThemeChooser extends react.PureComponent {
  constructor(props) {
    super(props);

    custom_theme_chooser_defineProperty(this, "handleColorChange", (settingId, color) => {
      const {
        updateTheme,
        theme
      } = this.props;

      if (theme[settingId] !== color) {
        const newTheme = _objectSpread(_objectSpread({}, theme), {}, {
          type: 'custom',
          [settingId]: color
        }); // For backwards compatability


        if (settingId === 'mentionBg') {
          newTheme.mentionBj = color;
        }

        updateTheme(newTheme);
        const copyTheme = this.setCopyTheme(newTheme);
        this.setState({
          copyTheme
        });
      }
    });

    custom_theme_chooser_defineProperty(this, "pasteBoxChange", e => {
      let text = '';

      if (window.clipboardData && window.clipboardData.getData) {
        // IE
        text = window.clipboardData.getData('Text');
      } else {
        text = e.clipboardData.getData('Text'); //e.clipboardData.getData('text/plain');
      }

      if (text.length === 0) {
        return;
      }

      let theme;

      try {
        theme = JSON.parse(text);
      } catch (err) {
        return;
      }

      theme = (0,theme_utils/* setThemeDefaults */.Yn)(theme);
      this.setState({
        copyTheme: JSON.stringify(theme)
      });
      theme.type = 'custom';
      this.props.updateTheme(theme);
    });

    custom_theme_chooser_defineProperty(this, "onChangeHandle", e => {
      e.stopPropagation();
    });

    custom_theme_chooser_defineProperty(this, "selectTheme", () => {
      const textarea = this.refs.textarea;
      textarea.focus();
      textarea.setSelectionRange(0, this.state.copyTheme.length);
    });

    custom_theme_chooser_defineProperty(this, "toggleSidebarStyles", e => {
      e.preventDefault();
      this.refs.sidebarStylesHeader.classList.toggle('open');
      this.toggleSection(this.refs.sidebarStyles);
    });

    custom_theme_chooser_defineProperty(this, "toggleCenterChannelStyles", e => {
      e.preventDefault();
      this.refs.centerChannelStylesHeader.classList.toggle('open');
      this.toggleSection(this.refs.centerChannelStyles);
    });

    custom_theme_chooser_defineProperty(this, "toggleLinkAndButtonStyles", e => {
      e.preventDefault();
      this.refs.linkAndButtonStylesHeader.classList.toggle('open');
      this.toggleSection(this.refs.linkAndButtonStyles);
    });

    custom_theme_chooser_defineProperty(this, "onCodeThemeChange", e => {
      const theme = _objectSpread(_objectSpread({}, this.props.theme), {}, {
        type: 'custom',
        codeTheme: e.target.value
      });

      this.props.updateTheme(theme);
    });

    custom_theme_chooser_defineProperty(this, "copyTheme", () => {
      this.selectTheme();
      document.execCommand('copy');
      this.showCopySuccess();
    });

    custom_theme_chooser_defineProperty(this, "showCopySuccess", () => {
      const copySuccess = document.querySelector('.copy-theme-success');
      copySuccess.style.display = 'inline-block';
      setTimeout(() => {
        copySuccess.style.display = 'none';
      }, COPY_SUCCESS_INTERVAL);
    });

    const _copyTheme = this.setCopyTheme(this.props.theme);

    this.state = {
      copyTheme: _copyTheme
    };
  }

  setCopyTheme(theme) {
    const copyTheme = Object.assign({}, theme);
    delete copyTheme.type;
    delete copyTheme.image;
    return JSON.stringify(copyTheme);
  }

  toggleSection(node) {
    node.classList.toggle('open'); // set overflow after animation, so the colorchooser is fully shown

    node.ontransitionend = () => {
      if (node.classList.contains('open')) {
        node.style.overflowY = 'inherit';
      } else {
        node.style.overflowY = 'hidden';
      }
    };
  }

  render() {
    const theme = this.props.theme;
    const sidebarElements = [];
    const centerChannelElements = [];
    const linkAndButtonElements = [];
    constants/* default.THEME_ELEMENTS.forEach */.ZP.THEME_ELEMENTS.forEach((element, index) => {
      if (element.id === 'codeTheme') {
        const codeThemeOptions = [];
        let codeThemeURL = '';
        element.themes.forEach((codeTheme, codeThemeIndex) => {
          if (codeTheme.id === theme[element.id]) {
            codeThemeURL = codeTheme.iconURL;
          }

          codeThemeOptions.push( /*#__PURE__*/react.createElement("option", {
            key: 'code-theme-key' + codeThemeIndex,
            value: codeTheme.id
          }, codeTheme.uiName));
        });
        var popoverContent = /*#__PURE__*/react.createElement(popover/* default */.Z, {
          popoverStyle: "info",
          id: "code-popover",
          className: "code-popover"
        }, /*#__PURE__*/react.createElement("img", {
          width: "200",
          alt: 'code theme image',
          src: codeThemeURL
        }));
        centerChannelElements.push( /*#__PURE__*/react.createElement("div", {
          className: "col-sm-6 form-group",
          key: 'custom-theme-key' + index
        }, /*#__PURE__*/react.createElement("label", {
          className: "custom-label"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, messages[element.id])), /*#__PURE__*/react.createElement("div", {
          className: "input-group theme-group group--code dropdown",
          id: element.id
        }, /*#__PURE__*/react.createElement("select", {
          id: "codeThemeSelect",
          className: "form-control",
          type: "text",
          defaultValue: theme[element.id],
          onChange: this.onCodeThemeChange
        }, codeThemeOptions), /*#__PURE__*/react.createElement(overlay_trigger/* default */.Z, {
          placement: "top",
          overlay: popoverContent,
          ref: "headerOverlay"
        }, /*#__PURE__*/react.createElement("span", {
          className: "input-group-addon"
        }, /*#__PURE__*/react.createElement("img", {
          alt: 'code theme image',
          src: codeThemeURL
        }))))));
      } else if (element.group === 'centerChannelElements') {
        centerChannelElements.push( /*#__PURE__*/react.createElement("div", {
          className: "col-sm-6 form-group element",
          key: 'custom-theme-key' + index
        }, /*#__PURE__*/react.createElement(ColorChooser, {
          id: element.id,
          label: /*#__PURE__*/react.createElement(components_message/* default */.Z, messages[element.id]),
          value: theme[element.id],
          onChange: this.handleColorChange
        })));
      } else if (element.group === 'sidebarElements') {
        // Need to support old typo mentionBj element for mentionBg
        let color = theme[element.id];

        if (!color && element.id === 'mentionBg') {
          color = theme.mentionBj;
        }

        sidebarElements.push( /*#__PURE__*/react.createElement("div", {
          className: "col-sm-6 form-group element",
          key: 'custom-theme-key' + index
        }, /*#__PURE__*/react.createElement(ColorChooser, {
          id: element.id,
          label: /*#__PURE__*/react.createElement(components_message/* default */.Z, messages[element.id]),
          value: color,
          onChange: this.handleColorChange
        })));
      } else {
        linkAndButtonElements.push( /*#__PURE__*/react.createElement("div", {
          className: "col-sm-6 form-group element",
          key: 'custom-theme-key' + index
        }, /*#__PURE__*/react.createElement(ColorChooser, {
          id: element.id,
          label: /*#__PURE__*/react.createElement(components_message/* default */.Z, messages[element.id]),
          value: theme[element.id],
          onChange: this.handleColorChange
        })));
      }
    });
    const pasteBox = /*#__PURE__*/react.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/react.createElement("label", {
      className: "custom-label"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.custom_theme.copyPaste",
      defaultMessage: "Copy to share or paste theme colors here:"
    })), /*#__PURE__*/react.createElement("textarea", {
      ref: "textarea",
      className: "form-control",
      id: "pasteBox",
      value: this.state.copyTheme,
      onCopy: this.showCopySuccess,
      onPaste: this.pasteBoxChange,
      onChange: this.onChangeHandle,
      onClick: this.selectTheme
    }), /*#__PURE__*/react.createElement("div", {
      className: "mt-3"
    }, /*#__PURE__*/react.createElement("button", {
      className: "btn btn-link copy-theme-button",
      onClick: this.copyTheme
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.custom_theme.copyThemeColors",
      defaultMessage: "Copy Theme Colors"
    })), /*#__PURE__*/react.createElement("span", {
      className: "alert alert-success copy-theme-success",
      role: "alert",
      style: {
        display: 'none'
      }
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.custom_theme.copied",
      defaultMessage: "\u2714 Copied"
    }))));
    return /*#__PURE__*/react.createElement("div", {
      className: "appearance-section pt-2"
    }, /*#__PURE__*/react.createElement("div", {
      className: "theme-elements row"
    }, /*#__PURE__*/react.createElement("div", {
      ref: "sidebarStylesHeader",
      id: "sidebarStyles",
      className: "theme-elements__header",
      onClick: this.toggleSidebarStyles
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.custom_theme.sidebarTitle",
      defaultMessage: "Sidebar Styles"
    }), /*#__PURE__*/react.createElement("div", {
      className: "header__icon"
    }, /*#__PURE__*/react.createElement(localized_icon/* default */.Z, {
      className: "fa fa-plus",
      title: {
        id: (0,i18n.t)('generic_icons.expand'),
        defaultMessage: 'Expand Icon'
      }
    }), /*#__PURE__*/react.createElement(localized_icon/* default */.Z, {
      className: "fa fa-minus",
      title: {
        id: (0,i18n.t)('generic_icons.collapse'),
        defaultMessage: 'Collapse Icon'
      }
    }))), /*#__PURE__*/react.createElement("div", {
      ref: "sidebarStyles",
      className: "theme-elements__body"
    }, sidebarElements)), /*#__PURE__*/react.createElement("div", {
      className: "theme-elements row"
    }, /*#__PURE__*/react.createElement("div", {
      ref: "centerChannelStylesHeader",
      id: "centerChannelStyles",
      className: "theme-elements__header",
      onClick: this.toggleCenterChannelStyles
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.custom_theme.centerChannelTitle",
      defaultMessage: "Center Channel Styles"
    }), /*#__PURE__*/react.createElement("div", {
      className: "header__icon"
    }, /*#__PURE__*/react.createElement(localized_icon/* default */.Z, {
      className: "fa fa-plus",
      title: {
        id: (0,i18n.t)('generic_icons.expand'),
        defaultMessage: 'Expand Icon'
      }
    }), /*#__PURE__*/react.createElement(localized_icon/* default */.Z, {
      className: "fa fa-minus",
      title: {
        id: (0,i18n.t)('generic_icons.collapse'),
        defaultMessage: 'Collapse Icon'
      }
    }))), /*#__PURE__*/react.createElement("div", {
      ref: "centerChannelStyles",
      id: "centerChannelStyles",
      className: "theme-elements__body"
    }, centerChannelElements)), /*#__PURE__*/react.createElement("div", {
      className: "theme-elements row"
    }, /*#__PURE__*/react.createElement("div", {
      ref: "linkAndButtonStylesHeader",
      id: "linkAndButtonsStyles",
      className: "theme-elements__header",
      onClick: this.toggleLinkAndButtonStyles
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.custom_theme.linkButtonTitle",
      defaultMessage: "Link and Button Styles"
    }), /*#__PURE__*/react.createElement("div", {
      className: "header__icon"
    }, /*#__PURE__*/react.createElement(localized_icon/* default */.Z, {
      className: "fa fa-plus",
      title: {
        id: (0,i18n.t)('generic_icons.expand'),
        defaultMessage: 'Expand Icon'
      }
    }), /*#__PURE__*/react.createElement(localized_icon/* default */.Z, {
      className: "fa fa-minus",
      title: {
        id: (0,i18n.t)('generic_icons.collapse'),
        defaultMessage: 'Collapse Icon'
      }
    }))), /*#__PURE__*/react.createElement("div", {
      ref: "linkAndButtonStyles",
      className: "theme-elements__body"
    }, linkAndButtonElements)), /*#__PURE__*/react.createElement("div", {
      className: "row mt-3"
    }, pasteBox));
  }

}
/* eslint-enable react/no-string-refs */

custom_theme_chooser_defineProperty(CustomThemeChooser, "propTypes", {
  theme: (prop_types_default()).object.isRequired,
  updateTheme: (prop_types_default()).func.isRequired
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(73210);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(15306);
;// CONCATENATED MODULE: ./components/user_settings/display/user_settings_theme/theme_thumbnail.tsx

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable react/jsx-max-props-per-line */


function ThemeThumbnail(_ref) {
  let {
    themeName,
    themeKey,
    sidebarBg = '#174AB5',
    sidebarText = '#86A1D9',
    sidebarUnreadText = 'white',
    onlineIndicator = '#3DB887',
    awayIndicator = '#FFBC1F',
    dndIndicator = '#D24B4E',
    centerChannelColor = '#E0E1E3',
    centerChannelBg = 'white',
    newMessageSeparator = '#1C58D9',
    buttonBg = '#15B7B7'
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    width: "112",
    height: "86",
    viewBox: "0 0 112 86",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": "".concat(themeKey, "-theme-icon"),
    role: "img"
  }, /*#__PURE__*/react.createElement("title", {
    id: "".concat(themeKey, "-theme-icon")
  }, "".concat(themeName, " theme icon")), /*#__PURE__*/react.createElement("rect", {
    style: {
      fill: centerChannelBg
    },
    x: "0",
    y: "0",
    width: "112",
    height: "86"
  }), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    style: {
      fill: centerChannelBg
    },
    x: "50",
    y: "-1",
    width: "63",
    height: "88"
  }), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    style: {
      fill: centerChannelColor
    },
    x: "55",
    y: "75",
    width: "52",
    height: "6",
    rx: "3"
  }), /*#__PURE__*/react.createElement("rect", {
    style: {
      fill: centerChannelBg
    },
    x: "56",
    y: "76",
    width: "50",
    height: "4",
    rx: "2"
  })), /*#__PURE__*/react.createElement("rect", {
    style: {
      fill: buttonBg
    },
    x: "71",
    y: "65",
    width: "22",
    height: "5",
    rx: "2.5"
  }), /*#__PURE__*/react.createElement("rect", {
    style: {
      fill: newMessageSeparator
    },
    x: "50",
    y: "32",
    width: "62",
    height: "1"
  }), /*#__PURE__*/react.createElement("g", {
    style: {
      fill: centerChannelColor
    }
  }, /*#__PURE__*/react.createElement("rect", {
    x: "55",
    y: "5",
    width: "52",
    height: "4",
    rx: "2"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "55",
    y: "14",
    width: "52",
    height: "4",
    rx: "2"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "55",
    y: "23",
    width: "52",
    height: "4",
    rx: "2"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "55",
    y: "38",
    width: "52",
    height: "4",
    rx: "2"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "55",
    y: "47",
    width: "52",
    height: "4",
    rx: "2"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "55",
    y: "56",
    width: "52",
    height: "4",
    rx: "2"
  }))), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    style: {
      fill: sidebarBg
    },
    x: "-1",
    y: "-1",
    width: "51",
    height: "88"
  }), /*#__PURE__*/react.createElement("g", {
    style: {
      fill: sidebarText
    }
  }, /*#__PURE__*/react.createElement("circle", {
    cx: "7",
    cy: "61",
    r: "2"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "7",
    cy: "70",
    r: "2"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "7",
    cy: "43",
    r: "2"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "7",
    cy: "34",
    r: "2"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "7",
    cy: "16",
    r: "2"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "2"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "11",
    y: "5",
    width: "28",
    height: "4",
    rx: "2"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "11",
    y: "14",
    width: "28",
    height: "4",
    rx: "2"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "11",
    y: "32",
    width: "28",
    height: "4",
    rx: "2"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "11",
    y: "41",
    width: "28",
    height: "4",
    rx: "2"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "11",
    y: "50",
    width: "28",
    height: "4",
    rx: "2"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "11",
    y: "59",
    width: "28",
    height: "4",
    rx: "2"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "11",
    y: "68",
    width: "28",
    height: "4",
    rx: "2"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "11",
    y: "77",
    width: "28",
    height: "4",
    rx: "2"
  })), /*#__PURE__*/react.createElement("circle", {
    style: {
      fill: dndIndicator
    },
    cx: "7",
    cy: "79",
    r: "2"
  }), /*#__PURE__*/react.createElement("circle", {
    style: {
      fill: awayIndicator
    },
    cx: "7",
    cy: "52",
    r: "2"
  }), /*#__PURE__*/react.createElement("circle", {
    style: {
      fill: onlineIndicator
    },
    cx: "7",
    cy: "25",
    r: "2"
  }), /*#__PURE__*/react.createElement("g", {
    style: {
      fill: sidebarUnreadText
    }
  }, /*#__PURE__*/react.createElement("circle", {
    cx: "43",
    cy: "25",
    r: "2"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "11",
    y: "23",
    width: "28",
    height: "4",
    rx: "2"
  }))));
}

ThemeThumbnail.propTypes = {
  themeName: (prop_types_default()).string.isRequired,
  themeKey: (prop_types_default()).string.isRequired,
  sidebarBg: (prop_types_default()).string.isRequired,
  sidebarText: (prop_types_default()).string.isRequired,
  sidebarUnreadText: (prop_types_default()).string.isRequired,
  onlineIndicator: (prop_types_default()).string.isRequired,
  awayIndicator: (prop_types_default()).string.isRequired,
  dndIndicator: (prop_types_default()).string.isRequired,
  centerChannelColor: (prop_types_default()).string.isRequired,
  centerChannelBg: (prop_types_default()).string.isRequired,
  newMessageSeparator: (prop_types_default()).string.isRequired,
  buttonBg: (prop_types_default()).string.isRequired
};
/* harmony default export */ const theme_thumbnail = (ThemeThumbnail);
;// CONCATENATED MODULE: ./components/user_settings/display/user_settings_theme/premade_theme_chooser/premade_theme_chooser.jsx




// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class PremadeThemeChooser extends react.PureComponent {
  render() {
    const theme = this.props.theme;
    const premadeThemes = [];
    const allowedThemes = this.props.allowedThemes;
    const hasAllowedThemes = allowedThemes.length > 1 || allowedThemes[0] && allowedThemes[0].trim().length > 0;

    for (const k in src_constants/* Preferences.THEMES */.uP.THEMES) {
      if (src_constants/* Preferences.THEMES.hasOwnProperty */.uP.THEMES.hasOwnProperty(k)) {
        if (hasAllowedThemes && allowedThemes.indexOf(k) < 0) {
          continue;
        }

        const premadeTheme = Object.assign({}, src_constants/* Preferences.THEMES */.uP.THEMES[k]);
        let activeClass = '';

        if (premadeTheme.type === theme.type) {
          activeClass = 'active';
        }

        premadeThemes.push( /*#__PURE__*/react.createElement("div", {
          className: "col-xs-6 col-sm-3 premade-themes",
          key: 'premade-theme-key' + k
        }, /*#__PURE__*/react.createElement("div", {
          id: "premadeTheme".concat(premadeTheme.type.replace(' ', '')),
          className: activeClass,
          onClick: () => this.props.updateTheme(premadeTheme)
        }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement(theme_thumbnail, {
          themeKey: k,
          themeName: premadeTheme.type,
          sidebarBg: premadeTheme.sidebarBg,
          sidebarText: (0,theme_utils/* changeOpacity */.v5)(premadeTheme.sidebarText, 0.48),
          sidebarUnreadText: premadeTheme.sidebarUnreadText,
          onlineIndicator: premadeTheme.onlineIndicator,
          awayIndicator: premadeTheme.awayIndicator,
          dndIndicator: premadeTheme.dndIndicator,
          centerChannelColor: (0,theme_utils/* changeOpacity */.v5)(premadeTheme.centerChannelColor, 0.16),
          centerChannelBg: premadeTheme.centerChannelBg,
          newMessageSeparator: premadeTheme.newMessageSeparator,
          buttonBg: premadeTheme.buttonBg
        }), /*#__PURE__*/react.createElement("div", {
          className: "theme-label"
        }, utils/* toTitleCase */.cv(premadeTheme.type))))));
      }
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "row appearance-section"
    }, /*#__PURE__*/react.createElement("div", {
      className: "clearfix"
    }, premadeThemes));
  }

}
PremadeThemeChooser.propTypes = {
  theme: (prop_types_default()).object.isRequired,
  updateTheme: (prop_types_default()).func.isRequired,
  allowedThemes: prop_types_default().arrayOf((prop_types_default()).string)
};
PremadeThemeChooser.defaultProps = {
  allowedThemes: []
};
;// CONCATENATED MODULE: ./components/user_settings/display/user_settings_theme/premade_theme_chooser/index.js


// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function premade_theme_chooser_mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const allowedThemes = config.AllowedThemes && config.AllowedThemes.split(',') || [];
  return {
    allowedThemes
  };
}

/* harmony default export */ const premade_theme_chooser = ((0,es.connect)(premade_theme_chooser_mapStateToProps)(PremadeThemeChooser));
;// CONCATENATED MODULE: ./components/user_settings/display/user_settings_theme/user_settings_theme.jsx
function user_settings_theme_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function user_settings_theme_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { user_settings_theme_ownKeys(Object(source), true).forEach(function (key) { user_settings_theme_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { user_settings_theme_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function user_settings_theme_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










class ThemeSetting extends react.PureComponent {
  constructor(props) {
    super(props);

    user_settings_theme_defineProperty(this, "submitTheme", async () => {
      const teamId = this.state.applyToAllTeams ? '' : this.props.currentTeamId;
      this.setState({
        isSaving: true
      });
      await this.props.actions.saveTheme(teamId, this.state.theme);

      if (this.state.applyToAllTeams) {
        await this.props.actions.deleteTeamSpecificThemes();
      }

      this.props.setRequireConfirm(false);
      this.originalTheme = Object.assign({}, this.state.theme);
      this.props.updateSection('');
      this.setState({
        isSaving: false
      });
    });

    user_settings_theme_defineProperty(this, "updateTheme", theme => {
      let themeChanged = this.state.theme.length === theme.length;

      if (!themeChanged) {
        for (const field in theme) {
          if (theme.hasOwnProperty(field)) {
            if (this.state.theme[field] !== theme[field]) {
              themeChanged = true;
              break;
            }
          }
        }
      }

      this.props.setRequireConfirm(themeChanged);
      this.setState({
        theme
      });
      utils/* applyTheme */._v(theme);
    });

    user_settings_theme_defineProperty(this, "resetFields", () => {
      const state = this.getStateFromProps();
      state.serverError = null;
      this.setState(state);
      utils/* applyTheme */._v(state.theme);
      this.props.setRequireConfirm(false);
    });

    user_settings_theme_defineProperty(this, "handleImportModal", () => {
      this.props.actions.openModal({
        modalId: constants/* ModalIdentifiers.IMPORT_THEME_MODAL */.r8.IMPORT_THEME_MODAL,
        dialogType: import_theme_modal,
        dialogProps: {
          callback: this.updateTheme
        }
      });
      this.props.setEnforceFocus(false);
    });

    user_settings_theme_defineProperty(this, "handleUpdateSection", section => {
      this.props.updateSection(section);
    });

    this.state = user_settings_theme_objectSpread(user_settings_theme_objectSpread({}, this.getStateFromProps(props)), {}, {
      isSaving: false
    });
    this.originalTheme = Object.assign({}, this.state.theme);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selected && !this.props.selected) {
      this.resetFields();
    }
  }

  componentWillUnmount() {
    if (this.props.selected) {
      utils/* applyTheme */._v(this.props.theme);
    }
  }

  getStateFromProps() {
    let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

    const theme = user_settings_theme_objectSpread({}, props.theme);

    if (!theme.codeTheme) {
      theme.codeTheme = constants/* Constants.DEFAULT_CODE_THEME */.gT.DEFAULT_CODE_THEME;
    }

    return {
      theme,
      type: theme.type || 'premade',
      showAllTeamsCheckbox: props.showAllTeamsCheckbox,
      applyToAllTeams: props.applyToAllTeams
    };
  }

  updateType(type) {
    this.setState({
      type
    });
  }

  render() {
    let serverError;

    if (this.state.serverError) {
      serverError = this.state.serverError;
    }

    const displayCustom = this.state.type === 'custom';
    let custom;
    let premade;

    if (displayCustom && this.props.allowCustomThemes) {
      custom = /*#__PURE__*/react.createElement("div", {
        key: "customThemeChooser"
      }, /*#__PURE__*/react.createElement(CustomThemeChooser, {
        theme: this.state.theme,
        updateTheme: this.updateTheme
      }));
    } else {
      premade = /*#__PURE__*/react.createElement("div", {
        key: "premadeThemeChooser"
      }, /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(premade_theme_chooser, {
        theme: this.state.theme,
        updateTheme: this.updateTheme
      }));
    }

    let themeUI;

    if (this.props.selected) {
      const inputs = [];

      if (this.props.allowCustomThemes) {
        inputs.push( /*#__PURE__*/react.createElement("div", {
          className: "radio",
          key: "premadeThemeColorLabel"
        }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
          id: "standardThemes",
          type: "radio",
          name: "theme",
          checked: !displayCustom,
          onChange: this.updateType.bind(this, 'premade')
        }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.display.theme.themeColors",
          defaultMessage: "Theme Colors"
        })), /*#__PURE__*/react.createElement("br", null)));
      }

      inputs.push(premade);

      if (this.props.allowCustomThemes) {
        inputs.push( /*#__PURE__*/react.createElement("div", {
          className: "radio",
          key: "customThemeColorLabel"
        }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
          id: "customThemes",
          type: "radio",
          name: "theme",
          checked: displayCustom,
          onChange: this.updateType.bind(this, 'custom')
        }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.display.theme.customTheme",
          defaultMessage: "Custom Theme"
        }))));
        inputs.push(custom);
        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "otherThemes"
        }, /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("a", {
          id: "otherThemes",
          href: "http://docs.mattermost.com/help/settings/theme-colors.html#custom-theme-examples",
          target: "_blank",
          rel: "noopener noreferrer"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.display.theme.otherThemes",
          defaultMessage: "See other themes"
        }))));
        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "importSlackThemeButton",
          className: "pt-2"
        }, /*#__PURE__*/react.createElement("button", {
          id: "slackImportTheme",
          className: "theme style--none color--link",
          onClick: this.handleImportModal
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.display.theme.import",
          defaultMessage: "Import theme colors from Slack"
        }))));
      }

      let allTeamsCheckbox = null;

      if (this.state.showAllTeamsCheckbox) {
        allTeamsCheckbox = /*#__PURE__*/react.createElement("div", {
          className: "checkbox user-settings__submit-checkbox"
        }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
          id: "applyThemeToAllTeams",
          type: "checkbox",
          checked: this.state.applyToAllTeams,
          onChange: e => this.setState({
            applyToAllTeams: e.target.checked
          })
        }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.display.theme.applyToAllTeams",
          defaultMessage: "Apply new theme to all my teams"
        })));
      }

      themeUI = /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
        inputs: inputs,
        submitExtra: allTeamsCheckbox,
        submit: this.submitTheme,
        disableEnterSubmit: true,
        saving: this.state.isSaving,
        server_error: serverError,
        width: "full",
        updateSection: this.handleUpdateSection
      });
    } else {
      themeUI = /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.display.theme.title",
          defaultMessage: "Theme"
        }),
        describe: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.display.theme.describe",
          defaultMessage: "Open to manage your theme"
        }),
        section: 'theme',
        updateSection: this.handleUpdateSection
      });
    }

    return themeUI;
  }

}

user_settings_theme_defineProperty(ThemeSetting, "propTypes", {
  actions: prop_types_default().shape({
    saveTheme: (prop_types_default()).func.isRequired,
    deleteTeamSpecificThemes: (prop_types_default()).func.isRequired,
    openModal: (prop_types_default()).func.isRequired
  }).isRequired,
  currentTeamId: (prop_types_default()).string.isRequired,
  theme: (prop_types_default()).object,
  selected: (prop_types_default()).bool.isRequired,
  updateSection: (prop_types_default()).func.isRequired,
  setRequireConfirm: (prop_types_default()).func.isRequired,
  setEnforceFocus: (prop_types_default()).func.isRequired,
  allowCustomThemes: (prop_types_default()).bool
});
;// CONCATENATED MODULE: ./components/user_settings/display/user_settings_theme/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









function user_settings_theme_makeMapStateToProps() {
  const getThemeCategory = (0,preferences/* makeGetCategory */.YX)();
  return state => {
    return {
      currentTeamId: (0,teams/* getCurrentTeamId */.ev)(state),
      theme: (0,preferences/* getTheme */.gh)(state),
      applyToAllTeams: getThemeCategory(state, constants/* Preferences.CATEGORY_THEME */.uP.CATEGORY_THEME).length <= 1,
      showAllTeamsCheckbox: (0,teams/* getMyTeamsCount */.Ew)(state) > 1
    };
  };
}

function user_settings_theme_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      saveTheme: actions_preferences/* saveTheme */.DV,
      deleteTeamSpecificThemes: actions_preferences/* deleteTeamSpecificThemes */.w_,
      openModal: modals/* openModal */.h
    }, dispatch)
  };
}

/* harmony default export */ const user_settings_theme = ((0,es.connect)(user_settings_theme_makeMapStateToProps, user_settings_theme_mapDispatchToProps)(ThemeSetting));
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.esm.js
var react_select_esm = __webpack_require__(14504);
;// CONCATENATED MODULE: ./components/user_settings/display/manage_timezones/manage_timezones.tsx


function manage_timezones_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function manage_timezones_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { manage_timezones_ownKeys(Object(source), true).forEach(function (key) { manage_timezones_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { manage_timezones_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function manage_timezones_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class ManageTimezones extends react.PureComponent {
  constructor(props) {
    super(props);

    manage_timezones_defineProperty(this, "onChange", selectedOption => {
      if (selectedOption && 'value' in selectedOption) {
        this.setState({
          manualTimezone: selectedOption.value,
          selectedOption
        });
      }
    });

    manage_timezones_defineProperty(this, "timezoneNotChanged", () => {
      const {
        useAutomaticTimezone,
        automaticTimezone,
        manualTimezone
      } = this.state;
      const {
        useAutomaticTimezone: oldUseAutomaticTimezone,
        automaticTimezone: oldAutomaticTimezone,
        manualTimezone: oldManualTimezone
      } = this.props;
      return useAutomaticTimezone === oldUseAutomaticTimezone && automaticTimezone === oldAutomaticTimezone && manualTimezone === oldManualTimezone;
    });

    manage_timezones_defineProperty(this, "changeTimezone", () => {
      if (this.timezoneNotChanged()) {
        this.props.updateSection('');
        return;
      }

      this.submitUser();
    });

    manage_timezones_defineProperty(this, "submitUser", () => {
      const {
        user,
        actions
      } = this.props;
      const {
        useAutomaticTimezone,
        automaticTimezone,
        manualTimezone
      } = this.state;
      const timezone = {
        useAutomaticTimezone: useAutomaticTimezone.toString(),
        automaticTimezone,
        manualTimezone
      };

      const updatedUser = manage_timezones_objectSpread(manage_timezones_objectSpread({}, user), {}, {
        timezone
      });

      actions.updateMe(updatedUser).then(res => {
        if ('data' in res) {
          this.props.updateSection('');
        } else if ('error' in res) {
          const {
            error
          } = res;
          let serverError;

          if (error instanceof Error) {
            serverError = error.message;
          } else {
            serverError = error;
          }

          this.setState({
            serverError,
            isSaving: false
          });
        }
      });
    });

    manage_timezones_defineProperty(this, "handleAutomaticTimezone", e => {
      const useAutomaticTimezone = e.target.checked;
      let automaticTimezone = '';
      let timezoneLabel;
      let selectedOptionValue;

      if (useAutomaticTimezone) {
        automaticTimezone = (0,utils_timezone/* getBrowserTimezone */.x_)();
        timezoneLabel = (0,timezone_utils/* getTimezoneLabel */.HG)(this.props.timezones, automaticTimezone);
        selectedOptionValue = automaticTimezone;
      } else {
        timezoneLabel = (0,timezone_utils/* getTimezoneLabel */.HG)(this.props.timezones, (0,utils_timezone/* getBrowserTimezone */.x_)());
        selectedOptionValue = (0,utils_timezone/* getBrowserTimezone */.x_)();
        this.setState({
          manualTimezone: (0,utils_timezone/* getBrowserTimezone */.x_)()
        });
      }

      this.setState({
        useAutomaticTimezone,
        automaticTimezone,
        selectedOption: {
          label: timezoneLabel,
          value: selectedOptionValue
        }
      });
    });

    manage_timezones_defineProperty(this, "handleManualTimezone", e => {
      this.setState({
        manualTimezone: e.target.value
      });
    });

    this.state = {
      useAutomaticTimezone: props.useAutomaticTimezone,
      automaticTimezone: props.automaticTimezone,
      manualTimezone: props.manualTimezone,
      isSaving: false,
      openMenu: false,
      selectedOption: {
        label: props.timezoneLabel,
        value: props.useAutomaticTimezone ? props.automaticTimezone : props.manualTimezone
      }
    };
  }

  render() {
    const {
      timezones
    } = this.props;
    const {
      useAutomaticTimezone
    } = this.state;
    const timeOptions = this.props.timezones.map(timeObject => {
      return {
        value: timeObject.utc[0],
        label: timeObject.text
      };
    });
    let serverError;

    if (this.state.serverError) {
      serverError = /*#__PURE__*/react.createElement("label", {
        className: "has-error"
      }, this.state.serverError);
    }

    const inputs = [];
    const reactStyles = {
      menuPortal: provided => manage_timezones_objectSpread(manage_timezones_objectSpread({}, provided), {}, {
        zIndex: 9999
      })
    };
    const noTimezonesFromServer = timezones.length === 0;
    const automaticTimezoneInput = /*#__PURE__*/react.createElement("div", {
      className: "checkbox"
    }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
      id: "automaticTimezoneInput",
      type: "checkbox",
      checked: useAutomaticTimezone,
      onChange: this.handleAutomaticTimezone,
      disabled: noTimezonesFromServer
    }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.timezones.automatic",
      defaultMessage: "Automatic"
    })));
    const manualTimezoneInput = /*#__PURE__*/react.createElement("div", {
      className: "pt-2"
    }, /*#__PURE__*/react.createElement(react_select_esm/* default */.ZP, {
      className: "react-select react-select-top",
      classNamePrefix: "react-select",
      id: "displayTimezone",
      menuPortalTarget: document.body,
      styles: reactStyles,
      options: timeOptions,
      clearable: false,
      onChange: this.onChange,
      value: this.state.selectedOption,
      "aria-labelledby": "changeInterfaceTimezoneLabel",
      isDisabled: useAutomaticTimezone
    }), serverError);
    inputs.push(automaticTimezoneInput);
    inputs.push(manualTimezoneInput);
    inputs.push( /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.timezones.promote",
      defaultMessage: "Select the time zone used for timestamps in the user interface and email notifications."
    })));
    return /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
      title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.display.timezone",
        defaultMessage: "Timezone"
      }),
      containerStyle: "timezone-container",
      width: "medium",
      submit: this.changeTimezone,
      saving: this.state.isSaving,
      inputs: inputs,
      updateSection: this.props.updateSection
    });
  }

}

manage_timezones_defineProperty(ManageTimezones, "propTypes", {
  updateSection: (prop_types_default()).func.isRequired,
  useAutomaticTimezone: (prop_types_default()).bool.isRequired,
  automaticTimezone: (prop_types_default()).string.isRequired,
  manualTimezone: (prop_types_default()).string.isRequired,
  timezones: (prop_types_default()).array.isRequired,
  timezoneLabel: (prop_types_default()).string.isRequired,
  actions: prop_types_default().shape({
    updateMe: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/user_settings/display/manage_timezones/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








function manage_timezones_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      updateMe: actions_users/* updateMe */.DO
    }, dispatch)
  };
}

function manage_timezones_mapStateToProps(state) {
  const currentUserId = (0,users/* getCurrentUserId */.rc)(state);
  const timezoneLabel = (0,entities_timezone/* getTimezoneLabel */.HG)(state, currentUserId);
  return {
    timezones: timezones_json,
    timezoneLabel
  };
}

/* harmony default export */ const manage_timezones = ((0,es.connect)(manage_timezones_mapStateToProps, manage_timezones_mapDispatchToProps)(ManageTimezones));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(2707);
;// CONCATENATED MODULE: ./components/user_settings/display/manage_languages/manage_languages.tsx



function manage_languages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function manage_languages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { manage_languages_ownKeys(Object(source), true).forEach(function (key) { manage_languages_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { manage_languages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function manage_languages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class ManageLanguage extends react.PureComponent {
  constructor(props) {
    super(props);

    manage_languages_defineProperty(this, "reactSelectContainer", void 0);

    manage_languages_defineProperty(this, "handleContainerKeyDown", e => {
      const modalBody = document.querySelector('.modal-body');

      if ((0,utils/* isKeyPressed */.pD)(e, constants/* default.KeyCodes.ESCAPE */.ZP.KeyCodes.ESCAPE) && this.state.openMenu) {
        modalBody === null || modalBody === void 0 ? void 0 : modalBody.classList.remove('no-scroll');
        this.setState({
          openMenu: false
        });
        e.stopPropagation();
      }
    });

    manage_languages_defineProperty(this, "handleKeyDown", e => {
      const modalBody = document.querySelector('.modal-body');

      if ((0,utils/* isKeyPressed */.pD)(e, constants/* default.KeyCodes.ENTER */.ZP.KeyCodes.ENTER)) {
        modalBody === null || modalBody === void 0 ? void 0 : modalBody.classList.add('no-scroll');
        this.setState({
          openMenu: true
        });
      }
    });

    manage_languages_defineProperty(this, "setLanguage", selectedOption => {
      if (selectedOption && 'value' in selectedOption) {
        this.setState({
          locale: selectedOption.value,
          selectedOption
        });
      }
    });

    manage_languages_defineProperty(this, "changeLanguage", () => {
      if (this.props.user.locale === this.state.locale) {
        this.props.updateSection('');
      } else {
        this.submitUser(manage_languages_objectSpread(manage_languages_objectSpread({}, this.props.user), {}, {
          locale: this.state.locale
        }));
      }
    });

    manage_languages_defineProperty(this, "submitUser", user => {
      this.setState({
        isSaving: true
      });
      this.props.actions.updateMe(user).then(res => {
        if ('data' in res) {// Do nothing since changing the locale essentially refreshes the page
        } else if ('error' in res) {
          let serverError;
          const {
            error
          } = res;

          if (error instanceof Error) {
            serverError = error.message;
          } else {
            serverError = error;
          }

          this.setState({
            serverError,
            isSaving: false
          });
        }
      });
    });

    manage_languages_defineProperty(this, "handleMenuClose", () => {
      const modalBody = document.querySelector('.modal-body');

      if (modalBody) {
        modalBody.classList.remove('no-scroll');
      }

      this.setState({
        openMenu: false
      });
    });

    manage_languages_defineProperty(this, "handleMenuOpen", () => {
      const modalBody = document.querySelector('.modal-body');

      if (modalBody) {
        modalBody.classList.add('no-scroll');
      }

      this.setState({
        openMenu: true
      });
    });

    const locales = i18n_i18n/* getLanguages */.Vb();
    const userLocale = props.locale;
    const _selectedOption = {
      value: locales[userLocale].value,
      label: locales[userLocale].name
    };
    this.reactSelectContainer = /*#__PURE__*/react.createRef();
    this.state = {
      locale: props.locale,
      selectedOption: _selectedOption,
      isSaving: false,
      openMenu: false
    };
  }

  componentDidMount() {
    const reactSelectContainer = this.reactSelectContainer.current;

    if (reactSelectContainer) {
      reactSelectContainer.addEventListener('keydown', this.handleContainerKeyDown);
    }
  }

  componentWillUnmount() {
    if (this.reactSelectContainer.current) {
      this.reactSelectContainer.current.removeEventListener('keydown', this.handleContainerKeyDown);
    }
  }

  render() {
    let serverError;

    if (this.state.serverError) {
      serverError = /*#__PURE__*/react.createElement("label", {
        className: "has-error"
      }, this.state.serverError);
    }

    const options = [];
    const locales = i18n_i18n/* getLanguages */.Vb();
    const languages = Object.keys(locales).map(l => {
      return {
        value: locales[l].value,
        name: locales[l].name,
        order: locales[l].order
      };
    }).sort((a, b) => a.order - b.order);
    languages.forEach(lang => {
      options.push({
        value: lang.value,
        label: lang.name
      });
    });
    const reactStyles = {
      menuPortal: provided => manage_languages_objectSpread(manage_languages_objectSpread({}, provided), {}, {
        zIndex: 9999
      })
    };
    const input = /*#__PURE__*/react.createElement("div", {
      key: "changeLanguage"
    }, /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("label", {
      className: "control-label",
      id: "changeInterfaceLanguageLabel"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.languages.change",
      defaultMessage: "Change interface language"
    })), /*#__PURE__*/react.createElement("div", {
      ref: this.reactSelectContainer,
      className: "pt-2"
    }, /*#__PURE__*/react.createElement(react_select_esm/* default */.ZP, {
      className: "react-select react-select-top",
      classNamePrefix: "react-select",
      id: "displayLanguage",
      menuIsOpen: this.state.openMenu,
      menuPortalTarget: document.body,
      styles: reactStyles,
      options: options,
      clearable: false,
      onChange: this.setLanguage,
      onKeyDown: this.handleKeyDown,
      value: this.state.selectedOption,
      onMenuClose: this.handleMenuClose,
      onMenuOpen: this.handleMenuOpen,
      "aria-labelledby": "changeInterfaceLanguageLabel"
    }), serverError), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
      id: "user.settings.languages.promote",
      defaultMessage: "Select which language Mattermost displays in the user interface.\\n \\nWould you like to help with translations? Join the [Mattermost Translation Server](!http://translate.mattermost.com/) to contribute."
    })));
    return /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
      title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.display.language",
        defaultMessage: "Language"
      }),
      width: "medium",
      submit: this.changeLanguage,
      saving: this.state.isSaving,
      inputs: [input],
      updateSection: this.props.updateSection
    });
  }

}

manage_languages_defineProperty(ManageLanguage, "propTypes", {
  locale: (prop_types_default()).string.isRequired,
  updateSection: (prop_types_default()).func.isRequired,
  actions: prop_types_default().shape({
    updateMe: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/user_settings/display/manage_languages/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function manage_languages_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      updateMe: actions_users/* updateMe */.DO
    }, dispatch)
  };
}

/* harmony default export */ const manage_languages = ((0,es.connect)(null, manage_languages_mapDispatchToProps)(ManageLanguage));
;// CONCATENATED MODULE: ./components/user_settings/display/user_settings_display.tsx


function user_settings_display_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function user_settings_display_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { user_settings_display_ownKeys(Object(source), true).forEach(function (key) { user_settings_display_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { user_settings_display_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function user_settings_display_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable react/no-string-refs */















const Preferences = constants/* default.Preferences */.ZP.Preferences;

function getDisplayStateFromProps(props) {
  return {
    militaryTime: props.militaryTime,
    teammateNameDisplay: props.teammateNameDisplay,
    availabilityStatusOnPosts: props.availabilityStatusOnPosts,
    channelDisplayMode: props.channelDisplayMode,
    messageDisplay: props.messageDisplay,
    collapseDisplay: props.collapseDisplay,
    collapsedReplyThreads: props.collapsedReplyThreads,
    linkPreviewDisplay: props.linkPreviewDisplay,
    oneClickReactionsOnPosts: props.oneClickReactionsOnPosts,
    clickToReply: props.clickToReply
  };
}

class UserSettingsDisplay extends react.PureComponent {
  constructor(props) {
    super(props);

    user_settings_display_defineProperty(this, "prevSections", void 0);

    user_settings_display_defineProperty(this, "handleSubmit", async () => {
      const userId = this.props.user.id;
      const timePreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.USE_MILITARY_TIME,
        value: this.state.militaryTime
      };
      const availabilityStatusOnPostsPreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.AVAILABILITY_STATUS_ON_POSTS,
        value: this.state.availabilityStatusOnPosts
      };
      const teammateNameDisplayPreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.NAME_NAME_FORMAT,
        value: this.state.teammateNameDisplay
      };
      const channelDisplayModePreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.CHANNEL_DISPLAY_MODE,
        value: this.state.channelDisplayMode
      };
      const messageDisplayPreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.MESSAGE_DISPLAY,
        value: this.state.messageDisplay
      };
      const collapseDisplayPreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.COLLAPSE_DISPLAY,
        value: this.state.collapseDisplay
      };
      const collapsedReplyThreadsPreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.COLLAPSED_REPLY_THREADS,
        value: this.state.collapsedReplyThreads
      };
      const linkPreviewDisplayPreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.LINK_PREVIEW_DISPLAY,
        value: this.state.linkPreviewDisplay
      };
      const oneClickReactionsOnPostsPreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.ONE_CLICK_REACTIONS_ENABLED,
        value: this.state.oneClickReactionsOnPosts
      };
      const clickToReplyPreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.CLICK_TO_REPLY,
        value: this.state.clickToReply
      };
      this.setState({
        isSaving: true
      });
      const preferences = [timePreference, channelDisplayModePreference, messageDisplayPreference, collapsedReplyThreadsPreference, clickToReplyPreference, collapseDisplayPreference, linkPreviewDisplayPreference, teammateNameDisplayPreference, availabilityStatusOnPostsPreference, oneClickReactionsOnPostsPreference];
      this.trackChangeIfNecessary(collapsedReplyThreadsPreference, this.props.collapsedReplyThreads);
      await this.props.actions.savePreferences(userId, preferences);
      this.updateSection('');
    });

    user_settings_display_defineProperty(this, "handleClockRadio", militaryTime => {
      this.setState({
        militaryTime
      });
    });

    user_settings_display_defineProperty(this, "handleTeammateNameDisplayRadio", teammateNameDisplay => {
      this.setState({
        teammateNameDisplay
      });
    });

    user_settings_display_defineProperty(this, "handleAvailabilityStatusRadio", availabilityStatusOnPosts => {
      this.setState({
        availabilityStatusOnPosts
      });
    });

    user_settings_display_defineProperty(this, "handleOneClickReactionsRadio", oneClickReactionsOnPosts => {
      this.setState({
        oneClickReactionsOnPosts
      });
    });

    user_settings_display_defineProperty(this, "handleClickToReplyRadio", clickToReply => {
      this.setState({
        clickToReply
      });
    });

    user_settings_display_defineProperty(this, "updateSection", section => {
      this.updateState();
      this.props.updateSection(section);
    });

    user_settings_display_defineProperty(this, "updateState", () => {
      const newState = getDisplayStateFromProps(this.props);

      if (!fast_deep_equal_default()(newState, this.state)) {
        this.setState(newState);
      }

      this.setState({
        isSaving: false
      });
    });

    this.state = user_settings_display_objectSpread(user_settings_display_objectSpread({}, getDisplayStateFromProps(props)), {}, {
      isSaving: false
    });
    this.prevSections = {
      theme: 'dummySectionName',
      // dummy value that should never match any section name
      clock: 'theme',
      linkpreview: 'clock',
      message_display: 'linkpreview',
      channel_display_mode: 'message_display',
      languages: 'channel_display_mode'
    };
  }

  componentDidMount() {
    const {
      actions,
      enableTimezone,
      shouldAutoUpdateTimezone
    } = this.props;

    if (enableTimezone && shouldAutoUpdateTimezone) {
      actions.autoUpdateTimezone((0,utils_timezone/* getBrowserTimezone */.x_)());
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.teammateNameDisplay !== prevProps.teammateNameDisplay) {
      this.updateState();
    }
  }

  trackChangeIfNecessary(preference, oldValue) {
    const props = {
      field: 'display.' + preference.name,
      value: preference.value
    };

    if (preference.value !== oldValue) {
      (0,telemetry_actions/* trackEvent */.L9)('settings', 'user_settings_update', props);
    }
  }

  handleChannelDisplayModeRadio(channelDisplayMode) {
    this.setState({
      channelDisplayMode
    });
  }

  handlemessageDisplayRadio(messageDisplay) {
    this.setState({
      messageDisplay
    });
  }

  handleCollapseRadio(collapseDisplay) {
    this.setState({
      collapseDisplay
    });
  }

  handleCollapseReplyThreadsRadio(collapsedReplyThreads) {
    this.setState({
      collapsedReplyThreads
    });
  }

  handleLinkPreviewRadio(linkPreviewDisplay) {
    this.setState({
      linkPreviewDisplay
    });
  }

  handleOnChange(display) {
    this.setState(user_settings_display_objectSpread({}, display));
  }

  createSection(props) {
    const {
      section,
      display,
      value,
      title,
      firstOption,
      secondOption,
      thirdOption,
      description,
      disabled
    } = props;
    let extraInfo = null;
    let submit = this.handleSubmit;
    const firstMessage = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: firstOption.radionButtonText.id,
      defaultMessage: firstOption.radionButtonText.message
    });
    let moreColon;
    let firstMessageMore;

    if (firstOption.radionButtonText.moreId) {
      moreColon = ': ';
      firstMessageMore = /*#__PURE__*/react.createElement("span", {
        className: "font-weight--normal"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: firstOption.radionButtonText.moreId,
        defaultMessage: firstOption.radionButtonText.moreMessage
      }));
    }

    const secondMessage = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: secondOption.radionButtonText.id,
      defaultMessage: secondOption.radionButtonText.message
    });
    let secondMessageMore;

    if (secondOption.radionButtonText.moreId) {
      secondMessageMore = /*#__PURE__*/react.createElement("span", {
        className: "font-weight--normal"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: secondOption.radionButtonText.moreId,
        defaultMessage: secondOption.radionButtonText.moreMessage
      }));
    }

    let thirdMessage;

    if (thirdOption) {
      thirdMessage = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: thirdOption.radionButtonText.id,
        defaultMessage: thirdOption.radionButtonText.message
      });
    }

    const messageTitle = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: title.id,
      defaultMessage: title.message
    });
    const messageDesc = /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
      id: description.id,
      defaultMessage: description.message
    });

    if (this.props.activeSection === section) {
      const format = [false, false, false];

      if (value === firstOption.value) {
        format[0] = true;
      } else if (value === secondOption.value) {
        format[1] = true;
      } else {
        format[2] = true;
      }

      const name = section + 'Format';
      const key = section + 'UserDisplay';
      const firstDisplay = {
        [display]: firstOption.value
      };
      const secondDisplay = {
        [display]: secondOption.value
      };
      let thirdSection;

      if (thirdOption && thirdMessage) {
        const thirdDisplay = {
          [display]: thirdOption.value
        };
        thirdSection = /*#__PURE__*/react.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
          id: name + 'C',
          type: "radio",
          name: name,
          checked: format[2],
          onChange: () => this.handleOnChange(thirdDisplay)
        }), thirdMessage), /*#__PURE__*/react.createElement("br", null));
      }

      let inputs = [/*#__PURE__*/react.createElement("fieldset", {
        key: key
      }, /*#__PURE__*/react.createElement("legend", {
        className: "form-legend hidden-label"
      }, messageTitle), /*#__PURE__*/react.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        id: name + 'A',
        type: "radio",
        name: name,
        checked: format[0],
        onChange: () => this.handleOnChange(firstDisplay)
      }), firstMessage, moreColon, firstMessageMore), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        id: name + 'B',
        type: "radio",
        name: name,
        checked: format[1],
        onChange: () => this.handleOnChange(secondDisplay)
      }), secondMessage, moreColon, secondMessageMore), /*#__PURE__*/react.createElement("br", null)), thirdSection, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("br", null), messageDesc))];

      if (display === 'teammateNameDisplay' && disabled) {
        extraInfo = /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.display.teammateNameDisplay",
          defaultMessage: "This field is handled through your System Administrator. If you want to change it, you need to do so through your System Administrator."
        }));
        submit = null;
        inputs = [];
      }

      return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
        title: messageTitle,
        inputs: inputs,
        submit: submit,
        saving: this.state.isSaving,
        server_error: this.state.serverError,
        updateSection: this.updateSection,
        extraInfo: extraInfo
      }), /*#__PURE__*/react.createElement("div", {
        className: "divider-dark"
      }));
    }

    let describe;

    if (value === firstOption.value) {
      describe = firstMessage;
    } else if (value === secondOption.value) {
      describe = secondMessage;
    } else {
      describe = thirdMessage;
    }

    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
      title: messageTitle,
      describe: describe,
      section: section,
      updateSection: this.updateSection
    }), /*#__PURE__*/react.createElement("div", {
      className: "divider-dark"
    }));
  }

  render() {
    const collapseSection = this.createSection({
      section: 'collapse',
      display: 'collapseDisplay',
      value: this.state.collapseDisplay,
      defaultDisplay: 'false',
      title: {
        id: (0,i18n.t)('user.settings.display.collapseDisplay'),
        message: 'Default Appearance of Image Previews'
      },
      firstOption: {
        value: 'false',
        radionButtonText: {
          id: (0,i18n.t)('user.settings.display.collapseOn'),
          message: 'On'
        }
      },
      secondOption: {
        value: 'true',
        radionButtonText: {
          id: (0,i18n.t)('user.settings.display.collapseOff'),
          message: 'Off'
        }
      },
      description: {
        id: (0,i18n.t)('user.settings.display.collapseDesc'),
        message: 'Set whether previews of image links and image attachment thumbnails show as expanded or collapsed by default. This setting can also be controlled using the slash commands /expand and /collapse.'
      }
    });
    let linkPreviewSection = null;

    if (this.props.enableLinkPreviews) {
      linkPreviewSection = this.createSection({
        section: 'linkpreview',
        display: 'linkPreviewDisplay',
        value: this.state.linkPreviewDisplay,
        defaultDisplay: 'true',
        title: {
          id: (0,i18n.t)('user.settings.display.linkPreviewDisplay'),
          message: 'Website Link Previews'
        },
        firstOption: {
          value: 'true',
          radionButtonText: {
            id: (0,i18n.t)('user.settings.display.linkPreviewOn'),
            message: 'On'
          }
        },
        secondOption: {
          value: 'false',
          radionButtonText: {
            id: (0,i18n.t)('user.settings.display.linkPreviewOff'),
            message: 'Off'
          }
        },
        description: {
          id: (0,i18n.t)('user.settings.display.linkPreviewDesc'),
          message: 'When available, the first web link in a message will show a preview of the website content below the message.'
        }
      });
      this.prevSections.message_display = 'linkpreview';
    } else {
      this.prevSections.message_display = this.prevSections.linkpreview;
    }

    const clockSection = this.createSection({
      section: 'clock',
      display: 'militaryTime',
      value: this.state.militaryTime,
      defaultDisplay: 'false',
      title: {
        id: (0,i18n.t)('user.settings.display.clockDisplay'),
        message: 'Clock Display'
      },
      firstOption: {
        value: 'false',
        radionButtonText: {
          id: (0,i18n.t)('user.settings.display.normalClock'),
          message: '12-hour clock (example: 4:00 PM)'
        }
      },
      secondOption: {
        value: 'true',
        radionButtonText: {
          id: (0,i18n.t)('user.settings.display.militaryClock'),
          message: '24-hour clock (example: 16:00)'
        }
      },
      description: {
        id: (0,i18n.t)('user.settings.display.preferTime'),
        message: 'Select how you prefer time displayed.'
      }
    });
    const teammateNameDisplaySection = this.createSection({
      section: Preferences.NAME_NAME_FORMAT,
      display: 'teammateNameDisplay',
      value: this.props.lockTeammateNameDisplay ? this.props.configTeammateNameDisplay : this.state.teammateNameDisplay,
      defaultDisplay: this.props.configTeammateNameDisplay,
      title: {
        id: (0,i18n.t)('user.settings.display.teammateNameDisplayTitle'),
        message: 'Teammate Name Display'
      },
      firstOption: {
        value: constants/* default.TEAMMATE_NAME_DISPLAY.SHOW_USERNAME */.ZP.TEAMMATE_NAME_DISPLAY.SHOW_USERNAME,
        radionButtonText: {
          id: (0,i18n.t)('user.settings.display.teammateNameDisplayUsername'),
          message: 'Show username'
        }
      },
      secondOption: {
        value: constants/* default.TEAMMATE_NAME_DISPLAY.SHOW_NICKNAME_FULLNAME */.ZP.TEAMMATE_NAME_DISPLAY.SHOW_NICKNAME_FULLNAME,
        radionButtonText: {
          id: (0,i18n.t)('user.settings.display.teammateNameDisplayNicknameFullname'),
          message: 'Show nickname if one exists, otherwise show first and last name'
        }
      },
      thirdOption: {
        value: constants/* default.TEAMMATE_NAME_DISPLAY.SHOW_FULLNAME */.ZP.TEAMMATE_NAME_DISPLAY.SHOW_FULLNAME,
        radionButtonText: {
          id: (0,i18n.t)('user.settings.display.teammateNameDisplayFullname'),
          message: 'Show first and last name'
        }
      },
      description: {
        id: (0,i18n.t)('user.settings.display.teammateNameDisplayDescription'),
        message: 'Set how to display other user\'s names in posts and the Direct Messages list.'
      },
      disabled: this.props.lockTeammateNameDisplay
    });
    const availabilityStatusOnPostsSection = this.createSection({
      section: 'availabilityStatus',
      display: 'availabilityStatusOnPosts',
      value: this.state.availabilityStatusOnPosts,
      defaultDisplay: 'true',
      title: {
        id: (0,i18n.t)('user.settings.display.availabilityStatusOnPostsTitle'),
        message: 'Show user availability on posts'
      },
      firstOption: {
        value: 'true',
        radionButtonText: {
          id: (0,i18n.t)('user.settings.sidebar.on'),
          message: 'On'
        }
      },
      secondOption: {
        value: 'false',
        radionButtonText: {
          id: (0,i18n.t)('user.settings.sidebar.off'),
          message: 'Off'
        }
      },
      description: {
        id: (0,i18n.t)('user.settings.display.availabilityStatusOnPostsDescription'),
        message: 'When enabled, online availability is displayed on profile images in the message list.'
      }
    });
    let timezoneSelection;

    if (this.props.enableTimezone && !this.props.shouldAutoUpdateTimezone) {
      const userTimezone = this.props.userTimezone;

      if (this.props.activeSection === 'timezone') {
        timezoneSelection = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(manage_timezones, {
          user: this.props.user,
          useAutomaticTimezone: Boolean(userTimezone.useAutomaticTimezone),
          automaticTimezone: userTimezone.automaticTimezone,
          manualTimezone: userTimezone.manualTimezone,
          updateSection: this.updateSection
        }), /*#__PURE__*/react.createElement("div", {
          className: "divider-dark"
        }));
      } else {
        timezoneSelection = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
          title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.display.timezone",
            defaultMessage: "Timezone"
          }),
          describe: this.props.timezoneLabel,
          section: 'timezone',
          updateSection: this.updateSection
        }), /*#__PURE__*/react.createElement("div", {
          className: "divider-dark"
        }));
      }
    }

    const messageDisplaySection = this.createSection({
      section: Preferences.MESSAGE_DISPLAY,
      display: 'messageDisplay',
      value: this.state.messageDisplay,
      defaultDisplay: Preferences.MESSAGE_DISPLAY_CLEAN,
      title: {
        id: (0,i18n.t)('user.settings.display.messageDisplayTitle'),
        message: 'Message Display'
      },
      firstOption: {
        value: Preferences.MESSAGE_DISPLAY_CLEAN,
        radionButtonText: {
          id: (0,i18n.t)('user.settings.display.messageDisplayClean'),
          message: 'Standard',
          moreId: (0,i18n.t)('user.settings.display.messageDisplayCleanDes'),
          moreMessage: 'Easy to scan and read.'
        }
      },
      secondOption: {
        value: Preferences.MESSAGE_DISPLAY_COMPACT,
        radionButtonText: {
          id: (0,i18n.t)('user.settings.display.messageDisplayCompact'),
          message: 'Compact',
          moreId: (0,i18n.t)('user.settings.display.messageDisplayCompactDes'),
          moreMessage: 'Fit as many messages on the screen as we can.'
        }
      },
      description: {
        id: (0,i18n.t)('user.settings.display.messageDisplayDescription'),
        message: 'Select how messages in a channel should be displayed.'
      }
    });
    let collapsedReplyThreads;

    if (this.props.collapsedReplyThreadsAllowUserPreference) {
      collapsedReplyThreads = this.createSection({
        section: Preferences.COLLAPSED_REPLY_THREADS,
        display: 'collapsedReplyThreads',
        value: this.state.collapsedReplyThreads,
        defaultDisplay: Preferences.COLLAPSED_REPLY_THREADS_FALLBACK_DEFAULT,
        title: {
          id: (0,i18n.t)('user.settings.display.collapsedReplyThreadsTitle'),
          message: 'Collapsed Reply Threads'
        },
        firstOption: {
          value: Preferences.COLLAPSED_REPLY_THREADS_ON,
          radionButtonText: {
            id: (0,i18n.t)('user.settings.display.collapsedReplyThreadsOn'),
            message: 'On'
          }
        },
        secondOption: {
          value: Preferences.COLLAPSED_REPLY_THREADS_OFF,
          radionButtonText: {
            id: (0,i18n.t)('user.settings.display.collapsedReplyThreadsOff'),
            message: 'Off'
          }
        },
        description: {
          id: (0,i18n.t)('user.settings.display.collapsedReplyThreadsDescription'),
          message: 'When enabled, reply messages are not shown in the channel and you\'ll be notified about threads you\'re following in the "Threads" view.'
        }
      });
    }

    const clickToReply = this.createSection({
      section: Preferences.CLICK_TO_REPLY,
      display: 'clickToReply',
      value: this.state.clickToReply,
      defaultDisplay: 'true',
      title: {
        id: (0,i18n.t)('user.settings.display.clickToReply'),
        message: 'Click to open threads'
      },
      firstOption: {
        value: 'true',
        radionButtonText: {
          id: (0,i18n.t)('user.settings.sidebar.on'),
          message: 'On'
        }
      },
      secondOption: {
        value: 'false',
        radionButtonText: {
          id: (0,i18n.t)('user.settings.sidebar.off'),
          message: 'Off'
        }
      },
      description: {
        id: (0,i18n.t)('user.settings.display.clickToReplyDescription'),
        message: 'When enabled, click anywhere on a message to open the reply thread.'
      }
    });
    const channelDisplayModeSection = this.createSection({
      section: Preferences.CHANNEL_DISPLAY_MODE,
      display: 'channelDisplayMode',
      value: this.state.channelDisplayMode,
      defaultDisplay: Preferences.CHANNEL_DISPLAY_MODE_FULL_SCREEN,
      title: {
        id: (0,i18n.t)('user.settings.display.channelDisplayTitle'),
        message: 'Channel Display'
      },
      firstOption: {
        value: Preferences.CHANNEL_DISPLAY_MODE_FULL_SCREEN,
        radionButtonText: {
          id: (0,i18n.t)('user.settings.display.fullScreen'),
          message: 'Full width'
        }
      },
      secondOption: {
        value: Preferences.CHANNEL_DISPLAY_MODE_CENTERED,
        radionButtonText: {
          id: (0,i18n.t)('user.settings.display.fixedWidthCentered'),
          message: 'Fixed width, centered'
        }
      },
      description: {
        id: (0,i18n.t)('user.settings.display.channeldisplaymode'),
        message: 'Select the width of the center channel.'
      }
    });
    let languagesSection;
    let userLocale = this.props.user.locale;

    if (this.props.activeSection === 'languages') {
      if (!i18n_i18n/* isLanguageAvailable */.cY(userLocale)) {
        userLocale = this.props.defaultClientLocale;
      }

      languagesSection = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(manage_languages, {
        user: this.props.user,
        locale: userLocale,
        updateSection: this.updateSection
      }), /*#__PURE__*/react.createElement("div", {
        className: "divider-dark"
      }));
    } else {
      let locale;

      if (i18n_i18n/* isLanguageAvailable */.cY(userLocale)) {
        locale = i18n_i18n/* getLanguageInfo */.fK(userLocale).name;
      } else {
        locale = i18n_i18n/* getLanguageInfo */.fK(this.props.defaultClientLocale).name;
      }

      languagesSection = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.display.language",
          defaultMessage: "Language"
        }),
        describe: locale,
        section: 'languages',
        updateSection: this.updateSection
      }), /*#__PURE__*/react.createElement("div", {
        className: "divider-dark"
      }));
    }

    if (Object.keys(i18n_i18n/* getLanguages */.Vb()).length === 1) {
      languagesSection = null;
    }

    let themeSection;

    if (this.props.enableThemeSelection) {
      themeSection = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(user_settings_theme, {
        selected: this.props.activeSection === 'theme',
        updateSection: this.updateSection,
        setRequireConfirm: this.props.setRequireConfirm,
        setEnforceFocus: this.props.setEnforceFocus,
        allowCustomThemes: this.props.allowCustomThemes
      }), /*#__PURE__*/react.createElement("div", {
        className: "divider-dark"
      }));
    }

    let oneClickReactionsOnPostsSection;

    if (this.props.emojiPickerEnabled) {
      oneClickReactionsOnPostsSection = this.createSection({
        section: Preferences.ONE_CLICK_REACTIONS_ENABLED,
        display: 'oneClickReactionsOnPosts',
        value: this.state.oneClickReactionsOnPosts,
        defaultDisplay: 'true',
        title: {
          id: (0,i18n.t)('user.settings.display.oneClickReactionsOnPostsTitle'),
          message: 'Quick reactions on messages'
        },
        firstOption: {
          value: 'true',
          radionButtonText: {
            id: (0,i18n.t)('user.settings.sidebar.on'),
            message: 'On'
          }
        },
        secondOption: {
          value: 'false',
          radionButtonText: {
            id: (0,i18n.t)('user.settings.sidebar.off'),
            message: 'Off'
          }
        },
        description: {
          id: (0,i18n.t)('user.settings.display.oneClickReactionsOnPostsDescription'),
          message: 'When enabled, you can react in one-click with recently used reactions when hovering over a message.'
        }
      });
    }

    return /*#__PURE__*/react.createElement("div", {
      id: "displaySettings"
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal-header"
    }, /*#__PURE__*/react.createElement("button", {
      id: "closeButton",
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.props.closeModal
    }, /*#__PURE__*/react.createElement("span", {
      "aria-hidden": "true"
    }, '×')), /*#__PURE__*/react.createElement("h4", {
      className: "modal-title",
      ref: "title"
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal-back"
    }, /*#__PURE__*/react.createElement("span", {
      onClick: this.props.collapseModal
    }, /*#__PURE__*/react.createElement(fa_back_icon/* default */.Z, null))), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.display.title",
      defaultMessage: "Display Settings"
    }))), /*#__PURE__*/react.createElement("div", {
      className: "user-settings"
    }, /*#__PURE__*/react.createElement("h3", {
      id: "displaySettingsTitle",
      className: "tab-header"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.display.title",
      defaultMessage: "Display Settings"
    })), /*#__PURE__*/react.createElement("div", {
      className: "divider-dark first"
    }), themeSection, collapsedReplyThreads, clockSection, teammateNameDisplaySection, availabilityStatusOnPostsSection, timezoneSelection, linkPreviewSection, collapseSection, messageDisplaySection, clickToReply, channelDisplayModeSection, oneClickReactionsOnPostsSection, languagesSection));
  }

}
/* eslint-enable react/no-string-refs */

user_settings_display_defineProperty(UserSettingsDisplay, "propTypes", {
  updateSection: (prop_types_default()).func.isRequired,
  activeSection: (prop_types_default()).string,
  closeModal: (prop_types_default()).func,
  collapseModal: (prop_types_default()).func,
  setRequireConfirm: (prop_types_default()).func,
  setEnforceFocus: (prop_types_default()).func,
  timezones: (prop_types_default()).array.isRequired,
  allowCustomThemes: (prop_types_default()).bool.isRequired,
  enableLinkPreviews: (prop_types_default()).bool.isRequired,
  defaultClientLocale: (prop_types_default()).string.isRequired,
  enableThemeSelection: (prop_types_default()).bool.isRequired,
  configTeammateNameDisplay: (prop_types_default()).string.isRequired,
  currentUserTimezone: (prop_types_default()).string.isRequired,
  enableTimezone: (prop_types_default()).bool.isRequired,
  shouldAutoUpdateTimezone: prop_types_default().oneOfType([(prop_types_default()).bool, (prop_types_default()).string]).isRequired,
  lockTeammateNameDisplay: (prop_types_default()).bool.isRequired,
  militaryTime: (prop_types_default()).string.isRequired,
  teammateNameDisplay: (prop_types_default()).string.isRequired,
  availabilityStatusOnPosts: (prop_types_default()).string.isRequired,
  channelDisplayMode: (prop_types_default()).string.isRequired,
  messageDisplay: (prop_types_default()).string.isRequired,
  collapseDisplay: (prop_types_default()).string.isRequired,
  collapsedReplyThreads: (prop_types_default()).string.isRequired,
  collapsedReplyThreadsAllowUserPreference: (prop_types_default()).bool.isRequired,
  clickToReply: (prop_types_default()).string.isRequired
});
;// CONCATENATED MODULE: ./components/user_settings/display/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.













function display_makeMapStateToProps() {
  const getUserTimezone = (0,entities_timezone/* makeGetUserTimezone */.n5)();
  return state => {
    const config = (0,general/* getConfig */.iE)(state);
    const currentUserId = (0,users/* getCurrentUserId */.rc)(state);
    const userTimezone = getUserTimezone(state, currentUserId);
    const automaticTimezoneNotSet = userTimezone && userTimezone.useAutomaticTimezone && !userTimezone.automaticTimezone;
    const shouldAutoUpdateTimezone = !userTimezone || automaticTimezoneNotSet;
    const timezoneLabel = (0,entities_timezone/* getTimezoneLabel */.HG)(state, currentUserId);
    const allowCustomThemes = config.AllowCustomThemes === 'true';
    const enableLinkPreviews = config.EnableLinkPreviews === 'true';
    const defaultClientLocale = config.DefaultClientLocale;
    const enableThemeSelection = config.EnableThemeSelection === 'true';
    const enableTimezone = config.ExperimentalTimezone === 'true';
    const lockTeammateNameDisplay = (0,general/* getLicense */.lJ)(state).LockTeammateNameDisplay === 'true' && config.LockTeammateNameDisplay === 'true';
    const configTeammateNameDisplay = config.TeammateNameDisplay;
    const emojiPickerEnabled = config.EnableEmojiPicker === 'true';
    return {
      lockTeammateNameDisplay,
      allowCustomThemes,
      configTeammateNameDisplay,
      enableLinkPreviews,
      defaultClientLocale,
      enableThemeSelection,
      enableTimezone,
      timezones: timezones_json,
      timezoneLabel,
      userTimezone,
      shouldAutoUpdateTimezone,
      currentUserTimezone: (0,timezone_utils/* getUserCurrentTimezone */.GB)(userTimezone),
      availabilityStatusOnPosts: (0,preferences/* get */.U2)(state, constants/* Preferences.CATEGORY_DISPLAY_SETTINGS */.uP.CATEGORY_DISPLAY_SETTINGS, constants/* Preferences.AVAILABILITY_STATUS_ON_POSTS */.uP.AVAILABILITY_STATUS_ON_POSTS, constants/* Preferences.AVAILABILITY_STATUS_ON_POSTS_DEFAULT */.uP.AVAILABILITY_STATUS_ON_POSTS_DEFAULT),
      militaryTime: (0,preferences/* get */.U2)(state, constants/* Preferences.CATEGORY_DISPLAY_SETTINGS */.uP.CATEGORY_DISPLAY_SETTINGS, constants/* Preferences.USE_MILITARY_TIME */.uP.USE_MILITARY_TIME, constants/* Preferences.USE_MILITARY_TIME_DEFAULT */.uP.USE_MILITARY_TIME_DEFAULT),
      teammateNameDisplay: (0,preferences/* get */.U2)(state, constants/* Preferences.CATEGORY_DISPLAY_SETTINGS */.uP.CATEGORY_DISPLAY_SETTINGS, constants/* Preferences.NAME_NAME_FORMAT */.uP.NAME_NAME_FORMAT, configTeammateNameDisplay),
      channelDisplayMode: (0,preferences/* get */.U2)(state, constants/* Preferences.CATEGORY_DISPLAY_SETTINGS */.uP.CATEGORY_DISPLAY_SETTINGS, constants/* Preferences.CHANNEL_DISPLAY_MODE */.uP.CHANNEL_DISPLAY_MODE, constants/* Preferences.CHANNEL_DISPLAY_MODE_DEFAULT */.uP.CHANNEL_DISPLAY_MODE_DEFAULT),
      messageDisplay: (0,preferences/* get */.U2)(state, constants/* Preferences.CATEGORY_DISPLAY_SETTINGS */.uP.CATEGORY_DISPLAY_SETTINGS, constants/* Preferences.MESSAGE_DISPLAY */.uP.MESSAGE_DISPLAY, constants/* Preferences.MESSAGE_DISPLAY_DEFAULT */.uP.MESSAGE_DISPLAY_DEFAULT),
      collapseDisplay: (0,preferences/* get */.U2)(state, constants/* Preferences.CATEGORY_DISPLAY_SETTINGS */.uP.CATEGORY_DISPLAY_SETTINGS, constants/* Preferences.COLLAPSE_DISPLAY */.uP.COLLAPSE_DISPLAY, constants/* Preferences.COLLAPSE_DISPLAY_DEFAULT */.uP.COLLAPSE_DISPLAY_DEFAULT),
      collapsedReplyThreadsAllowUserPreference: (0,preferences/* isCollapsedThreadsAllowed */.OU)(state) && (0,general/* getConfig */.iE)(state).CollapsedThreads !== src_config/* CollapsedThreads.ALWAYS_ON */.t.ALWAYS_ON,
      collapsedReplyThreads: (0,preferences/* getCollapsedThreadsPreference */.b$)(state),
      clickToReply: (0,preferences/* get */.U2)(state, constants/* Preferences.CATEGORY_DISPLAY_SETTINGS */.uP.CATEGORY_DISPLAY_SETTINGS, constants/* Preferences.CLICK_TO_REPLY */.uP.CLICK_TO_REPLY, constants/* Preferences.CLICK_TO_REPLY_DEFAULT */.uP.CLICK_TO_REPLY_DEFAULT),
      linkPreviewDisplay: (0,preferences/* get */.U2)(state, constants/* Preferences.CATEGORY_DISPLAY_SETTINGS */.uP.CATEGORY_DISPLAY_SETTINGS, constants/* Preferences.LINK_PREVIEW_DISPLAY */.uP.LINK_PREVIEW_DISPLAY, constants/* Preferences.LINK_PREVIEW_DISPLAY_DEFAULT */.uP.LINK_PREVIEW_DISPLAY_DEFAULT),
      oneClickReactionsOnPosts: (0,preferences/* get */.U2)(state, constants/* Preferences.CATEGORY_DISPLAY_SETTINGS */.uP.CATEGORY_DISPLAY_SETTINGS, constants/* Preferences.ONE_CLICK_REACTIONS_ENABLED */.uP.ONE_CLICK_REACTIONS_ENABLED, constants/* Preferences.ONE_CLICK_REACTIONS_ENABLED_DEFAULT */.uP.ONE_CLICK_REACTIONS_ENABLED_DEFAULT),
      emojiPickerEnabled
    };
  };
}

function display_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      autoUpdateTimezone: timezone/* autoUpdateTimezone */.g,
      savePreferences: actions_preferences/* savePreferences */.$A
    }, dispatch)
  };
}

/* harmony default export */ const display = ((0,es.connect)(display_makeMapStateToProps, display_mapDispatchToProps)(UserSettingsDisplay));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__(91058);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/errors.ts
var errors = __webpack_require__(10386);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(32023);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/utils/helpers.ts
var helpers = __webpack_require__(16794);
// EXTERNAL MODULE: ./components/setting_picture.jsx
var setting_picture = __webpack_require__(68538);
// EXTERNAL MODULE: ./components/widgets/loading/loading_wrapper.tsx
var loading_wrapper = __webpack_require__(21843);
;// CONCATENATED MODULE: ./components/user_settings/general/user_settings_general.tsx






function user_settings_general_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable react/no-string-refs */












const holders = (0,lib.defineMessages)({
  usernameReserved: {
    id: (0,i18n.t)('user.settings.general.usernameReserved'),
    defaultMessage: 'This username is reserved, please choose a new one.'
  },
  usernameGroupNameUniqueness: {
    id: (0,i18n.t)('user.settings.general.usernameGroupNameUniqueness'),
    defaultMessage: 'This username conflicts with an existing group name.'
  },
  usernameRestrictions: {
    id: (0,i18n.t)('user.settings.general.usernameRestrictions'),
    defaultMessage: "Username must begin with a letter, and contain between {min} to {max} lowercase characters made up of numbers, letters, and the symbols '.', '-', and '_'."
  },
  validEmail: {
    id: (0,i18n.t)('user.settings.general.validEmail'),
    defaultMessage: 'Please enter a valid email address.'
  },
  emailMatch: {
    id: (0,i18n.t)('user.settings.general.emailMatch'),
    defaultMessage: 'The new emails you entered do not match.'
  },
  incorrectPassword: {
    id: (0,i18n.t)('user.settings.general.incorrectPassword'),
    defaultMessage: 'Your password is incorrect.'
  },
  emptyPassword: {
    id: (0,i18n.t)('user.settings.general.emptyPassword'),
    defaultMessage: 'Please enter your current password.'
  },
  validImage: {
    id: (0,i18n.t)('user.settings.general.validImage'),
    defaultMessage: 'Only BMP, JPG, JPEG, or PNG images may be used for profile pictures'
  },
  imageTooLarge: {
    id: (0,i18n.t)('user.settings.general.imageTooLarge'),
    defaultMessage: 'Unable to upload profile image. File is too large.'
  },
  uploadImage: {
    id: (0,i18n.t)('user.settings.general.uploadImage'),
    defaultMessage: "Click 'Edit' to upload an image."
  },
  uploadImageMobile: {
    id: (0,i18n.t)('user.settings.general.mobile.uploadImage'),
    defaultMessage: 'Click to upload an image'
  },
  fullName: {
    id: (0,i18n.t)('user.settings.general.fullName'),
    defaultMessage: 'Full Name'
  },
  nickname: {
    id: (0,i18n.t)('user.settings.general.nickname'),
    defaultMessage: 'Nickname'
  },
  username: {
    id: (0,i18n.t)('user.settings.general.username'),
    defaultMessage: 'Username'
  },
  profilePicture: {
    id: (0,i18n.t)('user.settings.general.profilePicture'),
    defaultMessage: 'Profile Picture'
  },
  close: {
    id: (0,i18n.t)('user.settings.general.close'),
    defaultMessage: 'Close'
  },
  position: {
    id: (0,i18n.t)('user.settings.general.position'),
    defaultMessage: 'Position'
  }
});
class UserSettingsGeneralTab extends react.Component {
  constructor(props) {
    super(props);

    user_settings_general_defineProperty(this, "submitActive", false);

    user_settings_general_defineProperty(this, "handleEmailResend", email => {
      this.setState({
        resendStatus: 'sending',
        showSpinner: true
      });
      this.props.actions.sendVerificationEmail(email).then(_ref => {
        let {
          data,
          error: err
        } = _ref;

        if (data) {
          this.setState({
            resendStatus: 'success'
          });
        } else if (err) {
          this.setState({
            resendStatus: 'failure'
          });
        }
      });
    });

    user_settings_general_defineProperty(this, "createEmailResendLink", email => {
      return /*#__PURE__*/react.createElement("span", {
        className: "resend-verification-wrapper"
      }, /*#__PURE__*/react.createElement(loading_wrapper/* default */.Z, {
        loading: this.state.showSpinner,
        text: utils/* localizeMessage */._u('user.settings.general.sending', 'Sending')
      }, /*#__PURE__*/react.createElement("a", {
        onClick: () => {
          this.handleEmailResend(email);
          setTimeout(() => {
            this.setState({
              showSpinner: false
            });
          }, 500);
        }
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.general.sendAgain",
        defaultMessage: "Send again"
      }))));
    });

    user_settings_general_defineProperty(this, "submitUsername", () => {
      const user = Object.assign({}, this.props.user);
      const username = this.state.username.trim().toLowerCase();
      const {
        formatMessage
      } = this.props.intl;
      const usernameError = utils/* isValidUsername */.rh(username);

      if (usernameError) {
        let errObj;

        if (usernameError.id === constants/* ValidationErrors.RESERVED_NAME */.qf.RESERVED_NAME) {
          errObj = {
            clientError: formatMessage(holders.usernameReserved),
            serverError: ''
          };
        } else {
          errObj = {
            clientError: formatMessage(holders.usernameRestrictions, {
              min: constants/* Constants.MIN_USERNAME_LENGTH */.gT.MIN_USERNAME_LENGTH,
              max: constants/* Constants.MAX_USERNAME_LENGTH */.gT.MAX_USERNAME_LENGTH
            }),
            serverError: ''
          };
        }

        this.setState(errObj);
        return;
      }

      if (user.username === username) {
        this.updateSection('');
        return;
      }

      user.username = username;
      (0,telemetry_actions/* trackEvent */.L9)('settings', 'user_settings_update', {
        field: 'username'
      });
      this.submitUser(user, false);
    });

    user_settings_general_defineProperty(this, "submitNickname", () => {
      const user = Object.assign({}, this.props.user);
      const nickname = this.state.nickname.trim();

      if (user.nickname === nickname) {
        this.updateSection('');
        return;
      }

      user.nickname = nickname;
      (0,telemetry_actions/* trackEvent */.L9)('settings', 'user_settings_update', {
        field: 'nickname'
      });
      this.submitUser(user, false);
    });

    user_settings_general_defineProperty(this, "submitName", () => {
      const user = Object.assign({}, this.props.user);
      const firstName = this.state.firstName.trim();
      const lastName = this.state.lastName.trim();

      if (user.first_name === firstName && user.last_name === lastName) {
        this.updateSection('');
        return;
      }

      user.first_name = firstName;
      user.last_name = lastName;
      (0,telemetry_actions/* trackEvent */.L9)('settings', 'user_settings_update', {
        field: 'fullname'
      });
      this.submitUser(user, false);
    });

    user_settings_general_defineProperty(this, "submitEmail", () => {
      const user = Object.assign({}, this.props.user);
      const email = this.state.email.trim().toLowerCase();
      const confirmEmail = this.state.confirmEmail.trim().toLowerCase();
      const currentPassword = this.state.currentPassword;
      const {
        formatMessage
      } = this.props.intl;

      if (email === user.email && (confirmEmail === '' || confirmEmail === user.email)) {
        this.updateSection('');
        return;
      }

      if (email === '' || !(0,helpers/* isEmail */.Jh)(email)) {
        this.setState({
          emailError: formatMessage(holders.validEmail),
          clientError: '',
          serverError: ''
        });
        return;
      }

      if (email !== confirmEmail) {
        this.setState({
          emailError: formatMessage(holders.emailMatch),
          clientError: '',
          serverError: ''
        });
        return;
      }

      if (currentPassword === '') {
        this.setState({
          emailError: formatMessage(holders.emptyPassword),
          clientError: '',
          serverError: ''
        });
        return;
      }

      user.email = email;
      user.password = currentPassword;
      (0,telemetry_actions/* trackEvent */.L9)('settings', 'user_settings_update', {
        field: 'email'
      });
      this.submitUser(user, true);
    });

    user_settings_general_defineProperty(this, "submitUser", (user, emailUpdated) => {
      const {
        formatMessage
      } = this.props.intl;
      this.setState({
        sectionIsSaving: true
      });
      this.props.actions.updateMe(user).then(_ref2 => {
        let {
          data,
          error: err
        } = _ref2;

        if (data) {
          this.updateSection('');
          const verificationEnabled = this.props.requireEmailVerification && emailUpdated;

          if (verificationEnabled) {
            this.props.actions.clearErrors();
            this.props.actions.logError({
              message: constants/* AnnouncementBarMessages.EMAIL_VERIFICATION_REQUIRED */.MN.EMAIL_VERIFICATION_REQUIRED,
              type: constants/* AnnouncementBarTypes.SUCCESS */.Mw.SUCCESS
            }, true);
          }
        } else if (err) {
          let serverError;

          if (err.server_error_id && err.server_error_id === 'api.user.check_user_password.invalid.app_error') {
            serverError = formatMessage(holders.incorrectPassword);
          } else if (err.server_error_id === 'app.user.group_name_conflict') {
            serverError = formatMessage(holders.usernameGroupNameUniqueness);
          } else if (err.message) {
            serverError = err.message;
          } else {
            serverError = err;
          }

          this.setState({
            serverError,
            emailError: '',
            clientError: '',
            sectionIsSaving: false
          });
        }
      });
    });

    user_settings_general_defineProperty(this, "setDefaultProfilePicture", async () => {
      try {
        await this.props.actions.setDefaultProfileImage(this.props.user.id);
        this.updateSection('');
        this.submitActive = false;
      } catch (err) {
        let serverError;

        if (err.message) {
          serverError = err.message;
        } else {
          serverError = err;
        }

        this.setState({
          serverError,
          emailError: '',
          clientError: '',
          sectionIsSaving: false
        });
      }
    });

    user_settings_general_defineProperty(this, "submitPicture", () => {
      if (!this.state.pictureFile) {
        return;
      }

      if (!this.submitActive) {
        return;
      }

      (0,telemetry_actions/* trackEvent */.L9)('settings', 'user_settings_update', {
        field: 'picture'
      });
      const {
        formatMessage
      } = this.props.intl;
      const file = this.state.pictureFile;

      if (!constants/* AcceptedProfileImageTypes.includes */.Ec.includes(file.type)) {
        this.setState({
          clientError: formatMessage(holders.validImage),
          serverError: ''
        });
        return;
      } else if (file.size > this.props.maxFileSize) {
        this.setState({
          clientError: formatMessage(holders.imageTooLarge),
          serverError: ''
        });
        return;
      }

      this.setState({
        loadingPicture: true
      });
      this.props.actions.uploadProfileImage(this.props.user.id, file).then(_ref3 => {
        let {
          data,
          error: err
        } = _ref3;

        if (data) {
          this.updateSection('');
          this.submitActive = false;
        } else if (err) {
          const state = this.setupInitialState(this.props);
          state.serverError = err.message;
          this.setState(state);
        }
      });
    });

    user_settings_general_defineProperty(this, "submitPosition", () => {
      const user = Object.assign({}, this.props.user);
      const position = this.state.position.trim();

      if (user.position === position) {
        this.updateSection('');
        return;
      }

      user.position = position;
      (0,telemetry_actions/* trackEvent */.L9)('settings', 'user_settings_update', {
        field: 'position'
      });
      this.submitUser(user, false);
    });

    user_settings_general_defineProperty(this, "updateUsername", e => {
      this.setState({
        username: e.target.value
      });
    });

    user_settings_general_defineProperty(this, "updateFirstName", e => {
      this.setState({
        firstName: e.target.value
      });
    });

    user_settings_general_defineProperty(this, "updateLastName", e => {
      this.setState({
        lastName: e.target.value
      });
    });

    user_settings_general_defineProperty(this, "updateNickname", e => {
      this.setState({
        nickname: e.target.value
      });
    });

    user_settings_general_defineProperty(this, "updatePosition", e => {
      this.setState({
        position: e.target.value
      });
    });

    user_settings_general_defineProperty(this, "updateEmail", e => {
      this.setState({
        email: e.target.value
      });
    });

    user_settings_general_defineProperty(this, "updateConfirmEmail", e => {
      this.setState({
        confirmEmail: e.target.value
      });
    });

    user_settings_general_defineProperty(this, "updateCurrentPassword", e => {
      this.setState({
        currentPassword: e.target.value
      });
    });

    user_settings_general_defineProperty(this, "updatePicture", e => {
      if (e.target.files && e.target.files[0]) {
        this.setState({
          pictureFile: e.target.files[0]
        });
        this.submitActive = true;
        this.setState({
          clientError: null
        });
      } else {
        this.setState({
          pictureFile: null
        });
      }
    });

    user_settings_general_defineProperty(this, "updateSection", section => {
      this.setState(Object.assign({}, this.setupInitialState(this.props), {
        clientError: '',
        serverError: '',
        emailError: '',
        sectionIsSaving: false
      }));
      this.submitActive = false;
      this.props.updateSection(section);
    });

    this.state = this.setupInitialState(props);
  }

  setupInitialState(props) {
    const user = props.user;
    return {
      username: user.username,
      firstName: user.first_name,
      lastName: user.last_name,
      nickname: user.nickname,
      position: user.position,
      originalEmail: user.email,
      email: '',
      confirmEmail: '',
      currentPassword: '',
      pictureFile: null,
      loadingPicture: false,
      sectionIsSaving: false,
      showSpinner: false,
      serverError: ''
    };
  }

  createEmailSection() {
    const {
      formatMessage
    } = this.props.intl;
    let emailSection;

    if (this.props.activeSection === 'email') {
      const emailVerificationEnabled = this.props.requireEmailVerification;
      const inputs = [];
      let helpText = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.general.emailHelp1",
        defaultMessage: "Email is used for sign-in, notifications, and password reset. Email requires verification if changed."
      });

      if (!emailVerificationEnabled) {
        helpText = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.emailHelp3",
          defaultMessage: "Email is used for sign-in, notifications, and password reset."
        });
      }

      let submit = null;

      if (this.props.user.auth_service === '') {
        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "currentEmailSetting"
        }, /*#__PURE__*/react.createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/react.createElement("label", {
          className: "col-sm-5 control-label"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.currentEmail",
          defaultMessage: "Current Email"
        })), /*#__PURE__*/react.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react.createElement("label", {
          className: "control-label word-break--all text-left"
        }, this.state.originalEmail)))));
        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "emailSetting"
        }, /*#__PURE__*/react.createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/react.createElement("label", {
          className: "col-sm-5 control-label"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.newEmail",
          defaultMessage: "New Email"
        })), /*#__PURE__*/react.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react.createElement("input", {
          autoFocus: true,
          id: "primaryEmail",
          className: "form-control",
          type: "email",
          onChange: this.updateEmail,
          maxLength: constants/* Constants.MAX_EMAIL_LENGTH */.gT.MAX_EMAIL_LENGTH,
          value: this.state.email,
          "aria-label": formatMessage({
            id: 'user.settings.general.newEmail',
            defaultMessage: 'New Email'
          })
        })))));
        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "confirmEmailSetting"
        }, /*#__PURE__*/react.createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/react.createElement("label", {
          className: "col-sm-5 control-label"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.confirmEmail",
          defaultMessage: "Confirm Email"
        })), /*#__PURE__*/react.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react.createElement("input", {
          id: "confirmEmail",
          className: "form-control",
          type: "email",
          onChange: this.updateConfirmEmail,
          maxLength: constants/* Constants.MAX_EMAIL_LENGTH */.gT.MAX_EMAIL_LENGTH,
          value: this.state.confirmEmail,
          "aria-label": formatMessage({
            id: 'user.settings.general.confirmEmail',
            defaultMessage: 'Confirm Email'
          })
        })))));
        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "currentPassword"
        }, /*#__PURE__*/react.createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/react.createElement("label", {
          className: "col-sm-5 control-label"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.currentPassword",
          defaultMessage: "Current Password"
        })), /*#__PURE__*/react.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react.createElement("input", {
          id: "currentPassword",
          className: "form-control",
          type: "password",
          onChange: this.updateCurrentPassword,
          value: this.state.currentPassword,
          "aria-label": formatMessage({
            id: 'user.settings.general.currentPassword',
            defaultMessage: 'Current Password'
          })
        }))), helpText));
        submit = this.submitEmail;
      } else if (this.props.user.auth_service === constants/* Constants.GITLAB_SERVICE */.gT.GITLAB_SERVICE) {
        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "oauthEmailInfo",
          className: "form-group"
        }, /*#__PURE__*/react.createElement("div", {
          className: "setting-list__hint pb-3"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.emailGitlabCantUpdate",
          defaultMessage: "Login occurs through GitLab. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        })), helpText));
      } else if (this.props.user.auth_service === constants/* Constants.GOOGLE_SERVICE */.gT.GOOGLE_SERVICE) {
        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "oauthEmailInfo",
          className: "form-group"
        }, /*#__PURE__*/react.createElement("div", {
          className: "setting-list__hint pb-3"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.emailGoogleCantUpdate",
          defaultMessage: "Login occurs through Google Apps. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        })), helpText));
      } else if (this.props.user.auth_service === constants/* Constants.OFFICE365_SERVICE */.gT.OFFICE365_SERVICE) {
        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "oauthEmailInfo",
          className: "form-group"
        }, /*#__PURE__*/react.createElement("div", {
          className: "setting-list__hint pb-3"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.emailOffice365CantUpdate",
          defaultMessage: "Login occurs through Office 365. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        })), helpText));
      } else if (this.props.user.auth_service === constants/* Constants.OPENID_SERVICE */.gT.OPENID_SERVICE) {
        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "oauthEmailInfo",
          className: "form-group"
        }, /*#__PURE__*/react.createElement("div", {
          className: "setting-list__hint pb-3"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.emailOpenIdCantUpdate",
          defaultMessage: "Login occurs through OpenID Connect. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        })), helpText));
      } else if (this.props.user.auth_service === constants/* Constants.LDAP_SERVICE */.gT.LDAP_SERVICE) {
        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "oauthEmailInfo",
          className: "pb-2"
        }, /*#__PURE__*/react.createElement("div", {
          className: "setting-list__hint pb-3"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.emailLdapCantUpdate",
          defaultMessage: "Login occurs through AD/LDAP. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        }))));
      } else if (this.props.user.auth_service === constants/* Constants.SAML_SERVICE */.gT.SAML_SERVICE) {
        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "oauthEmailInfo",
          className: "pb-2"
        }, /*#__PURE__*/react.createElement("div", {
          className: "setting-list__hint pb-3"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.emailSamlCantUpdate",
          defaultMessage: "Login occurs through SAML. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        })), helpText));
      }

      emailSection = /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
        title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.email",
          defaultMessage: "Email"
        }),
        inputs: inputs,
        submit: submit,
        saving: this.state.sectionIsSaving,
        serverError: this.state.serverError,
        clientError: this.state.emailError,
        updateSection: this.updateSection
      });
    } else {
      let describe = '';

      if (this.props.user.auth_service === '') {
        describe = this.props.user.email;
      } else if (this.props.user.auth_service === constants/* Constants.GITLAB_SERVICE */.gT.GITLAB_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.loginGitlab",
          defaultMessage: "Login done through GitLab ({email})",
          values: {
            email: this.state.originalEmail
          }
        });
      } else if (this.props.user.auth_service === constants/* Constants.GOOGLE_SERVICE */.gT.GOOGLE_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.loginGoogle",
          defaultMessage: "Login done through Google Apps ({email})",
          values: {
            email: this.state.originalEmail
          }
        });
      } else if (this.props.user.auth_service === constants/* Constants.OFFICE365_SERVICE */.gT.OFFICE365_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.loginOffice365",
          defaultMessage: "Login done through Office 365 ({email})",
          values: {
            email: this.state.originalEmail
          }
        });
      } else if (this.props.user.auth_service === constants/* Constants.LDAP_SERVICE */.gT.LDAP_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.loginLdap",
          defaultMessage: "Login done through AD/LDAP ({email})",
          values: {
            email: this.state.originalEmail
          }
        });
      } else if (this.props.user.auth_service === constants/* Constants.SAML_SERVICE */.gT.SAML_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.loginSaml",
          defaultMessage: "Login done through SAML ({email})",
          values: {
            email: this.state.originalEmail
          }
        });
      }

      emailSection = /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.email",
          defaultMessage: "Email"
        }),
        describe: describe,
        section: 'email',
        updateSection: this.updateSection
      });
    }

    return emailSection;
  }

  render() {
    const user = this.props.user;
    const {
      formatMessage
    } = this.props.intl;
    let clientError = null;

    if (this.state.clientError) {
      clientError = this.state.clientError;
    }

    let serverError = null;

    if (this.state.serverError) {
      serverError = this.state.serverError;
    }

    let nameSection;
    const inputs = [];

    if (this.props.activeSection === 'name') {
      let extraInfo;
      let submit = null;

      if (this.props.user.auth_service === constants/* Constants.LDAP_SERVICE */.gT.LDAP_SERVICE && (this.props.ldapFirstNameAttributeSet || this.props.ldapLastNameAttributeSet) || this.props.user.auth_service === constants/* Constants.SAML_SERVICE */.gT.SAML_SERVICE && (this.props.samlFirstNameAttributeSet || this.props.samlLastNameAttributeSet) || constants/* Constants.OAUTH_SERVICES.includes */.gT.OAUTH_SERVICES.includes(this.props.user.auth_service) && false) {
        extraInfo = /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.field_handled_externally",
          defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so through your login provider."
        }));
      } else {
        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "firstNameSetting",
          className: "form-group"
        }, /*#__PURE__*/react.createElement("label", {
          className: "col-sm-5 control-label"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.firstName",
          defaultMessage: "First Name"
        })), /*#__PURE__*/react.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react.createElement("input", {
          id: "firstName",
          autoFocus: true,
          className: "form-control",
          type: "text",
          onChange: this.updateFirstName,
          maxLength: constants/* Constants.MAX_FIRSTNAME_LENGTH */.gT.MAX_FIRSTNAME_LENGTH,
          value: this.state.firstName,
          onFocus: utils/* moveCursorToEnd */.fe,
          "aria-label": formatMessage({
            id: 'user.settings.general.firstName',
            defaultMessage: 'First Name'
          })
        }))));
        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "lastNameSetting",
          className: "form-group"
        }, /*#__PURE__*/react.createElement("label", {
          className: "col-sm-5 control-label"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.lastName",
          defaultMessage: "Last Name"
        })), /*#__PURE__*/react.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react.createElement("input", {
          id: "lastName",
          className: "form-control",
          type: "text",
          onChange: this.updateLastName,
          maxLength: constants/* Constants.MAX_LASTNAME_LENGTH */.gT.MAX_LASTNAME_LENGTH,
          value: this.state.lastName,
          "aria-label": formatMessage({
            id: 'user.settings.general.lastName',
            defaultMessage: 'Last Name'
          })
        }))));

        const notifClick = e => {
          e.preventDefault();
          this.updateSection('');
          this.props.updateTab('notifications');
        };

        const notifLink = /*#__PURE__*/react.createElement("a", {
          href: "#",
          onClick: notifClick.bind(this)
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.notificationsLink",
          defaultMessage: "Notifications"
        }));
        extraInfo = /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.notificationsExtra",
          defaultMessage: "By default, you will receive mention notifications when someone types your first name. Go to {notify} settings to change this default.",
          values: {
            notify: notifLink
          }
        }));
        submit = this.submitName;
      }

      nameSection = /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
        title: formatMessage(holders.fullName),
        inputs: inputs,
        submit: submit,
        saving: this.state.sectionIsSaving,
        serverError: serverError,
        clientError: clientError,
        updateSection: this.updateSection,
        extraInfo: extraInfo
      });
    } else {
      let describe = '';

      if (user.first_name && user.last_name) {
        describe = user.first_name + ' ' + user.last_name;
      } else if (user.first_name) {
        describe = user.first_name;
      } else if (user.last_name) {
        describe = user.last_name;
      } else {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.emptyName",
          defaultMessage: "Click 'Edit' to add your full name"
        });

        if (utils/* isMobile */.tq()) {
          describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.general.mobile.emptyName",
            defaultMessage: "Click to add your full name"
          });
        }
      }

      nameSection = /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: formatMessage(holders.fullName),
        describe: describe,
        section: 'name',
        updateSection: this.updateSection
      });
    }

    let nicknameSection;

    if (this.props.activeSection === 'nickname') {
      let extraInfo;
      let submit = null;

      if (this.props.user.auth_service === 'ldap' && this.props.ldapNicknameAttributeSet || this.props.user.auth_service === constants/* Constants.SAML_SERVICE */.gT.SAML_SERVICE && this.props.samlNicknameAttributeSet) {
        extraInfo = /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.field_handled_externally",
          defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so through your login provider."
        }));
      } else {
        let nicknameLabel = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.nickname",
          defaultMessage: "Nickname"
        });

        if (utils/* isMobile */.tq()) {
          nicknameLabel = '';
        }

        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "nicknameSetting",
          className: "form-group"
        }, /*#__PURE__*/react.createElement("label", {
          className: "col-sm-5 control-label"
        }, nicknameLabel), /*#__PURE__*/react.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react.createElement("input", {
          id: "nickname",
          autoFocus: true,
          className: "form-control",
          type: "text",
          onChange: this.updateNickname,
          value: this.state.nickname,
          maxLength: constants/* Constants.MAX_NICKNAME_LENGTH */.gT.MAX_NICKNAME_LENGTH,
          autoCapitalize: "off",
          "aria-label": formatMessage({
            id: 'user.settings.general.nickname',
            defaultMessage: 'Nickname'
          })
        }))));
        extraInfo = /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.nicknameExtra",
          defaultMessage: "Use Nickname for a name you might be called that is different from your first name and username. This is most often used when two or more people have similar sounding names and usernames."
        }));
        submit = this.submitNickname;
      }

      nicknameSection = /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
        title: formatMessage(holders.nickname),
        inputs: inputs,
        submit: submit,
        saving: this.state.sectionIsSaving,
        serverError: serverError,
        clientError: clientError,
        updateSection: this.updateSection,
        extraInfo: extraInfo
      });
    } else {
      let describe = '';

      if (user.nickname) {
        describe = user.nickname;
      } else {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.emptyNickname",
          defaultMessage: "Click 'Edit' to add a nickname"
        });

        if (utils/* isMobile */.tq()) {
          describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.general.mobile.emptyNickname",
            defaultMessage: "Click to add a nickname"
          });
        }
      }

      nicknameSection = /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: formatMessage(holders.nickname),
        describe: describe,
        section: 'nickname',
        updateSection: this.updateSection
      });
    }

    let usernameSection;

    if (this.props.activeSection === 'username') {
      let extraInfo;
      let submit = null;

      if (this.props.user.auth_service === '' || this.props.user.auth_service !== '') {
        let usernameLabel = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.username",
          defaultMessage: "Username"
        });

        if (utils/* isMobile */.tq()) {
          usernameLabel = '';
        }

        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "usernameSetting",
          className: "form-group"
        }, /*#__PURE__*/react.createElement("label", {
          className: "col-sm-5 control-label"
        }, usernameLabel), /*#__PURE__*/react.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react.createElement("input", {
          id: "username",
          autoFocus: true,
          maxLength: constants/* Constants.MAX_USERNAME_LENGTH */.gT.MAX_USERNAME_LENGTH,
          className: "form-control",
          type: "text",
          onChange: this.updateUsername,
          value: this.state.username,
          autoCapitalize: "off",
          onFocus: utils/* moveCursorToEnd */.fe,
          "aria-label": formatMessage({
            id: 'user.settings.general.username',
            defaultMessage: 'Username'
          })
        }))));
        extraInfo = /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.usernameInfo",
          defaultMessage: "Pick something easy for teammates to recognize and recall."
        }));
        submit = this.submitUsername;
      } else {
        extraInfo = /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.field_handled_externally",
          defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so through your login provider."
        }));
      }

      usernameSection = /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
        title: formatMessage(holders.username),
        inputs: inputs,
        submit: submit,
        saving: this.state.sectionIsSaving,
        serverError: serverError,
        clientError: clientError,
        updateSection: this.updateSection,
        extraInfo: extraInfo
      });
    } else {
      usernameSection = /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: formatMessage(holders.username),
        describe: this.props.user.username,
        section: 'username',
        updateSection: this.updateSection
      });
    }

    let positionSection;

    if (this.props.activeSection === 'position') {
      let extraInfo;
      let submit = null;

      if (this.props.user.auth_service === constants/* Constants.LDAP_SERVICE */.gT.LDAP_SERVICE && this.props.ldapPositionAttributeSet || this.props.user.auth_service === constants/* Constants.SAML_SERVICE */.gT.SAML_SERVICE && this.props.samlPositionAttributeSet) {
        extraInfo = /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.field_handled_externally",
          defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so through your login provider."
        }));
      } else {
        let positionLabel = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.position",
          defaultMessage: "Position"
        });

        if (utils/* isMobile */.tq()) {
          positionLabel = '';
        }

        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "positionSetting",
          className: "form-group"
        }, /*#__PURE__*/react.createElement("label", {
          className: "col-sm-5 control-label"
        }, positionLabel), /*#__PURE__*/react.createElement("div", {
          className: "col-sm-7"
        }, /*#__PURE__*/react.createElement("input", {
          id: "position",
          autoFocus: true,
          className: "form-control",
          type: "text",
          onChange: this.updatePosition,
          value: this.state.position,
          maxLength: constants/* Constants.MAX_POSITION_LENGTH */.gT.MAX_POSITION_LENGTH,
          autoCapitalize: "off",
          onFocus: utils/* moveCursorToEnd */.fe,
          "aria-label": formatMessage({
            id: 'user.settings.general.position',
            defaultMessage: 'Position'
          })
        }))));
        extraInfo = /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.positionExtra",
          defaultMessage: "Use Position for your role or job title. This will be shown in your profile popover."
        }));
        submit = this.submitPosition;
      }

      positionSection = /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
        title: formatMessage(holders.position),
        inputs: inputs,
        submit: submit,
        saving: this.state.sectionIsSaving,
        serverError: serverError,
        clientError: clientError,
        updateSection: this.updateSection,
        extraInfo: extraInfo
      });
    } else {
      let describe = '';

      if (user.position) {
        describe = user.position;
      } else {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.emptyPosition",
          defaultMessage: "Click 'Edit' to add your job title / position"
        });

        if (utils/* isMobile */.tq()) {
          describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.general.mobile.emptyPosition",
            defaultMessage: "Click to add your job title / position"
          });
        }
      }

      positionSection = /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: formatMessage(holders.position),
        describe: describe,
        section: 'position',
        updateSection: this.updateSection
      });
    }

    const emailSection = this.createEmailSection();
    let pictureSection;

    if (this.props.activeSection === 'picture') {
      let submit = null;
      let setDefault = null;
      let helpText = null;
      let imgSrc = null;

      if ((this.props.user.auth_service === constants/* Constants.LDAP_SERVICE */.gT.LDAP_SERVICE || this.props.user.auth_service === constants/* Constants.SAML_SERVICE */.gT.SAML_SERVICE) && this.props.ldapPictureAttributeSet) {
        helpText = /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.field_handled_externally",
          defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so through your login provider."
        }));
      } else {
        submit = this.submitPicture;
        setDefault = user.last_picture_update > 0 ? this.setDefaultProfilePicture : null;
        imgSrc = utils/* imageURLForUser */.bb(user.id, user.last_picture_update);
        helpText = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: 'setting_picture.help.profile',
          defaultMessage: "Upload a picture in BMP, JPG, JPEG, or PNG format. Maximum file size: {max}",
          values: {
            max: utils/* fileSizeToString */.eA(this.props.maxFileSize)
          }
        });
      }

      pictureSection = /*#__PURE__*/react.createElement(setting_picture/* default */.Z, {
        title: formatMessage(holders.profilePicture),
        onSubmit: submit,
        onSetDefault: setDefault,
        src: imgSrc,
        defaultImageSrc: utils/* defaultImageURLForUser */.Vl(user.id),
        serverError: serverError,
        clientError: clientError,
        updateSection: e => {
          this.updateSection('');
          e.preventDefault();
        },
        file: this.state.pictureFile,
        onFileChange: this.updatePicture,
        submitActive: this.submitActive,
        loadingPicture: this.state.loadingPicture,
        maxFileSize: this.props.maxFileSize,
        helpText: helpText
      });
    } else {
      let minMessage = formatMessage(holders.uploadImage);

      if (utils/* isMobile */.tq()) {
        minMessage = formatMessage(holders.uploadImageMobile);
      }

      if (user.last_picture_update) {
        minMessage = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.general.imageUpdated",
          defaultMessage: "Image last updated {date}",
          values: {
            date: /*#__PURE__*/react.createElement(lib.FormattedDate, {
              value: new Date(user.last_picture_update),
              day: "2-digit",
              month: "short",
              year: "numeric"
            })
          }
        });
      }

      pictureSection = /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: formatMessage(holders.profilePicture),
        describe: minMessage,
        section: 'picture',
        updateSection: this.updateSection
      });
    }

    return /*#__PURE__*/react.createElement("div", {
      id: "generalSettings"
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal-header"
    }, /*#__PURE__*/react.createElement("button", {
      id: "closeUserSettings",
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": formatMessage(holders.close),
      onClick: this.props.closeModal
    }, /*#__PURE__*/react.createElement("span", {
      "aria-hidden": "true"
    }, '×')), /*#__PURE__*/react.createElement("h4", {
      className: "modal-title",
      ref: "title"
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal-back"
    }, /*#__PURE__*/react.createElement(localized_icon/* default */.Z, {
      className: "fa fa-angle-left",
      title: {
        id: (0,i18n.t)('generic_icons.collapse'),
        defaultMessage: 'Collapse Icon'
      },
      onClick: this.props.collapseModal
    })), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.modal.profile",
      defaultMessage: "Profile"
    }))), /*#__PURE__*/react.createElement("div", {
      className: "user-settings"
    }, /*#__PURE__*/react.createElement("h3", {
      id: "generalSettingsTitle",
      className: "tab-header"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.modal.profile",
      defaultMessage: "Profile"
    })), /*#__PURE__*/react.createElement("div", {
      className: "divider-dark first"
    }), nameSection, /*#__PURE__*/react.createElement("div", {
      className: "divider-light"
    }), usernameSection, /*#__PURE__*/react.createElement("div", {
      className: "divider-light"
    }), nicknameSection, /*#__PURE__*/react.createElement("div", {
      className: "divider-light"
    }), positionSection, /*#__PURE__*/react.createElement("div", {
      className: "divider-light"
    }), emailSection, /*#__PURE__*/react.createElement("div", {
      className: "divider-light"
    }), pictureSection, /*#__PURE__*/react.createElement("div", {
      className: "divider-dark"
    })));
  }

}

user_settings_general_defineProperty(UserSettingsGeneralTab, "propTypes", {
  updateSection: (prop_types_default()).func.isRequired,
  updateTab: (prop_types_default()).func.isRequired,
  activeSection: (prop_types_default()).string,
  closeModal: (prop_types_default()).func.isRequired,
  collapseModal: (prop_types_default()).func.isRequired,
  maxFileSize: (prop_types_default()).number.isRequired,
  actions: prop_types_default().shape({
    logError: (prop_types_default()).func.isRequired,
    clearErrors: (prop_types_default()).func.isRequired,
    updateMe: (prop_types_default()).func.isRequired,
    sendVerificationEmail: (prop_types_default()).func.isRequired,
    setDefaultProfileImage: (prop_types_default()).func.isRequired,
    uploadProfileImage: (prop_types_default()).func.isRequired
  }).isRequired,
  requireEmailVerification: (prop_types_default()).bool,
  ldapFirstNameAttributeSet: (prop_types_default()).bool,
  ldapLastNameAttributeSet: (prop_types_default()).bool,
  samlFirstNameAttributeSet: (prop_types_default()).bool,
  samlLastNameAttributeSet: (prop_types_default()).bool,
  ldapNicknameAttributeSet: (prop_types_default()).bool,
  samlNicknameAttributeSet: (prop_types_default()).bool,
  ldapPositionAttributeSet: (prop_types_default()).bool,
  samlPositionAttributeSet: (prop_types_default()).bool,
  ldapPictureAttributeSet: (prop_types_default()).bool
});

/* harmony default export */ const user_settings_general = ((0,injectIntl/* default */.ZP)(UserSettingsGeneralTab));
/* eslint-enable react/no-string-refs */
;// CONCATENATED MODULE: ./components/user_settings/general/index.ts

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function general_mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const requireEmailVerification = config.RequireEmailVerification === 'true';
  const maxFileSize = parseInt(config.MaxFileSize, 10);
  const ldapFirstNameAttributeSet = config.LdapFirstNameAttributeSet === 'true';
  const ldapLastNameAttributeSet = config.LdapLastNameAttributeSet === 'true';
  const samlFirstNameAttributeSet = config.SamlFirstNameAttributeSet === 'true';
  const samlLastNameAttributeSet = config.SamlLastNameAttributeSet === 'true';
  const ldapNicknameAttributeSet = config.LdapNicknameAttributeSet === 'true';
  const samlNicknameAttributeSet = config.SamlNicknameAttributeSet === 'true';
  const samlPositionAttributeSet = config.SamlPositionAttributeSet === 'true';
  const ldapPositionAttributeSet = config.LdapPositionAttributeSet === 'true';
  const ldapPictureAttributeSet = config.LdapPictureAttributeSet === 'true';
  return {
    requireEmailVerification,
    maxFileSize,
    ldapFirstNameAttributeSet,
    ldapLastNameAttributeSet,
    samlFirstNameAttributeSet,
    samlLastNameAttributeSet,
    ldapNicknameAttributeSet,
    samlNicknameAttributeSet,
    samlPositionAttributeSet,
    ldapPositionAttributeSet,
    ldapPictureAttributeSet
  };
}

function general_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      logError: errors/* logError */.H,
      clearErrors: errors/* clearErrors */.b9,
      updateMe: actions_users/* updateMe */.DO,
      sendVerificationEmail: actions_users/* sendVerificationEmail */.zk,
      setDefaultProfileImage: actions_users/* setDefaultProfileImage */.QJ,
      uploadProfileImage: actions_users/* uploadProfileImage */._p
    }, dispatch)
  };
}

/* harmony default export */ const components_user_settings_general = ((0,es.connect)(general_mapStateToProps, general_mapDispatchToProps)(user_settings_general));
// EXTERNAL MODULE: ./node_modules/semver/index.js
var semver = __webpack_require__(81249);
var semver_default = /*#__PURE__*/__webpack_require__.n(semver);
// EXTERNAL MODULE: ./utils/user_agent.tsx
var user_agent = __webpack_require__(47470);
;// CONCATENATED MODULE: ./components/user_settings/notifications/desktop_notification_settings.jsx


function desktop_notification_settings_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.











class DesktopNotificationSettings extends react.PureComponent {
  constructor(props) {
    super(props);

    desktop_notification_settings_defineProperty(this, "handleMinUpdateSection", section => {
      this.props.updateSection(section);
      this.props.cancel();
    });

    desktop_notification_settings_defineProperty(this, "handleMaxUpdateSection", section => {
      this.props.updateSection(section);
    });

    desktop_notification_settings_defineProperty(this, "handleOnChange", e => {
      const key = e.currentTarget.getAttribute('data-key');
      const value = e.currentTarget.getAttribute('data-value');
      this.props.setParentState(key, value);
    });

    desktop_notification_settings_defineProperty(this, "handleThreadsOnChange", e => {
      const value = e.target.checked ? constants/* NotificationLevels.ALL */.XH.ALL : constants/* NotificationLevels.MENTION */.XH.MENTION;
      this.props.setParentState('desktopThreads', value);
    });

    desktop_notification_settings_defineProperty(this, "setDesktopNotificationSound", selectedOption => {
      this.props.setParentState('desktopNotificationSound', selectedOption.value);
      this.setState({
        selectedOption
      });
      utils/* tryNotificationSound */.zn(selectedOption.value);
    });

    desktop_notification_settings_defineProperty(this, "buildMaximizedSetting", () => {
      const inputs = [];
      const activityRadio = [false, false, false];

      if (this.props.activity === constants/* NotificationLevels.MENTION */.XH.MENTION) {
        activityRadio[1] = true;
      } else if (this.props.activity === constants/* NotificationLevels.NONE */.XH.NONE) {
        activityRadio[2] = true;
      } else {
        activityRadio[0] = true;
      }

      let soundSection;
      let notificationSelection;
      let threadsNotificationSelection;

      if (this.props.activity !== constants/* NotificationLevels.NONE */.XH.NONE) {
        const soundRadio = [false, false];

        if (this.props.sound === 'false') {
          soundRadio[1] = true;
        } else {
          soundRadio[0] = true;
        }

        if (this.props.sound === 'true') {
          const sounds = Array.from(utils/* notificationSounds.keys */.ux.keys());
          const options = sounds.map(sound => {
            return {
              value: sound,
              label: sound
            };
          });

          if (!(0,user_agent/* isDesktopApp */.P)() || window.desktop && semver_default().gte(window.desktop.version, '4.6.0')) {
            notificationSelection = /*#__PURE__*/react.createElement("div", {
              className: "pt-2"
            }, /*#__PURE__*/react.createElement(react_select_esm/* default */.ZP, {
              className: "react-select notification-sound-dropdown",
              classNamePrefix: "react-select",
              id: "displaySoundNotification",
              options: options,
              clearable: false,
              onChange: this.setDesktopNotificationSound,
              value: this.state.selectedOption,
              isSearchable: false,
              ref: this.dropdownSoundRef
            }));
          }
        }

        if (utils/* hasSoundOptions */.Vo()) {
          soundSection = /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("legend", {
            className: "form-legend"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.notifications.desktop.sound",
            defaultMessage: "Notification sound"
          })), /*#__PURE__*/react.createElement("div", {
            className: "radio"
          }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
            id: "soundOn",
            type: "radio",
            name: "notificationSounds",
            checked: soundRadio[0],
            "data-key": 'desktopSound',
            "data-value": 'true',
            onChange: this.handleOnChange
          }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.notifications.on",
            defaultMessage: "On"
          })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
            className: "radio"
          }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
            id: "soundOff",
            type: "radio",
            name: "notificationSounds",
            checked: soundRadio[1],
            "data-key": 'desktopSound',
            "data-value": 'false',
            onChange: this.handleOnChange
          }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.notifications.off",
            defaultMessage: "Off"
          })), /*#__PURE__*/react.createElement("br", null)), notificationSelection, /*#__PURE__*/react.createElement("div", {
            className: "mt-5"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.notifications.sounds_info",
            defaultMessage: "Notification sounds are available on Firefox, Edge, Safari, Chrome and Mattermost Desktop Apps."
          })));
        } else {
          soundSection = /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("legend", {
            className: "form-legend"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.notifications.desktop.sound",
            defaultMessage: "Notification sound"
          })), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.notifications.soundConfig",
            defaultMessage: "Please configure notification sounds in your browser settings"
          }));
        }
      }

      if (this.props.isCollapsedThreadsEnabled && constants/* NotificationLevels.MENTION */.XH.MENTION === this.props.activity) {
        threadsNotificationSelection = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("legend", {
          className: "form-legend"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.threads.desktop",
          defaultMessage: "Thread reply notifications"
        })), /*#__PURE__*/react.createElement("div", {
          className: "checkbox"
        }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
          id: "desktopThreadsNotificationAllActivity",
          type: "checkbox",
          name: "desktopThreadsNotificationLevel",
          checked: this.props.threads === constants/* NotificationLevels.ALL */.XH.ALL,
          onChange: this.handleThreadsOnChange
        }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.threads.allActivity",
          defaultMessage: 'Notify me about threads I\'m following'
        })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
          className: "mt-5"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.threads",
          defaultMessage: 'When enabled, any reply to a thread you\'re following will send a desktop notification.'
        }))), /*#__PURE__*/react.createElement("hr", null));
      }

      inputs.push( /*#__PURE__*/react.createElement("div", {
        key: "userNotificationLevelOption"
      }, /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("legend", {
        className: "form-legend"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.notifications.desktop",
        defaultMessage: "Send desktop notifications"
      })), /*#__PURE__*/react.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        id: "desktopNotificationAllActivity",
        type: "radio",
        name: "desktopNotificationLevel",
        checked: activityRadio[0],
        "data-key": 'desktopActivity',
        "data-value": constants/* NotificationLevels.ALL */.XH.ALL,
        onChange: this.handleOnChange
      }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.notifications.allActivity",
        defaultMessage: "For all activity"
      })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        id: "desktopNotificationMentions",
        type: "radio",
        name: "desktopNotificationLevel",
        checked: activityRadio[1],
        "data-key": 'desktopActivity',
        "data-value": constants/* NotificationLevels.MENTION */.XH.MENTION,
        onChange: this.handleOnChange
      }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.notifications.onlyMentions",
        defaultMessage: "Only for mentions and direct messages"
      })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        id: "desktopNotificationNever",
        type: "radio",
        name: "desktopNotificationLevel",
        checked: activityRadio[2],
        "data-key": 'desktopActivity',
        "data-value": constants/* NotificationLevels.NONE */.XH.NONE,
        onChange: this.handleOnChange
      }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.notifications.never",
        defaultMessage: "Never"
      }))), /*#__PURE__*/react.createElement("div", {
        className: "mt-5"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.notifications.info",
        defaultMessage: "Desktop notifications are available on Edge, Firefox, Safari, Chrome and Mattermost Desktop Apps."
      }))), /*#__PURE__*/react.createElement("hr", null), threadsNotificationSelection, soundSection));
      return /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
        title: utils/* localizeMessage */._u('user.settings.notifications.desktop.title', 'Desktop Notifications'),
        inputs: inputs,
        submit: this.props.submit,
        saving: this.props.saving,
        server_error: this.props.error,
        updateSection: this.handleMaxUpdateSection
      });
    });

    desktop_notification_settings_defineProperty(this, "buildMinimizedSetting", () => {
      let formattedMessageProps;
      const hasSoundOption = utils/* hasSoundOptions */.Vo();

      if (this.props.activity === constants/* NotificationLevels.MENTION */.XH.MENTION) {
        if (hasSoundOption && this.props.sound !== 'false') {
          formattedMessageProps = {
            id: (0,i18n.t)('user.settings.notifications.desktop.mentionsSound'),
            defaultMessage: 'For mentions and direct messages, with sound'
          };
        } else if (hasSoundOption && this.props.sound === 'false') {
          formattedMessageProps = {
            id: (0,i18n.t)('user.settings.notifications.desktop.mentionsNoSound'),
            defaultMessage: 'For mentions and direct messages, without sound'
          };
        } else {
          formattedMessageProps = {
            id: (0,i18n.t)('user.settings.notifications.desktop.mentionsSoundHidden'),
            defaultMessage: 'For mentions and direct messages'
          };
        }
      } else if (this.props.activity === constants/* NotificationLevels.NONE */.XH.NONE) {
        formattedMessageProps = {
          id: (0,i18n.t)('user.settings.notifications.off'),
          defaultMessage: 'Off'
        };
      } else {
        if (hasSoundOption && this.props.sound !== 'false') {
          //eslint-disable-line no-lonely-if
          formattedMessageProps = {
            id: (0,i18n.t)('user.settings.notifications.desktop.allSound'),
            defaultMessage: 'For all activity, with sound'
          };
        } else if (hasSoundOption && this.props.sound === 'false') {
          formattedMessageProps = {
            id: (0,i18n.t)('user.settings.notifications.desktop.allNoSound'),
            defaultMessage: 'For all activity, without sound'
          };
        } else {
          formattedMessageProps = {
            id: (0,i18n.t)('user.settings.notifications.desktop.allSoundHidden'),
            defaultMessage: 'For all activity'
          };
        }
      }

      return /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: utils/* localizeMessage */._u('user.settings.notifications.desktop.title', 'Desktop Notifications'),
        describe: /*#__PURE__*/react.createElement(components_message/* default */.Z, formattedMessageProps),
        focused: this.props.focused,
        section: 'desktop',
        updateSection: this.handleMinUpdateSection
      });
    });

    const _selectedOption = {
      value: props.selectedSound,
      label: props.selectedSound
    };
    this.state = {
      selectedOption: _selectedOption,
      blurDropdown: false
    };
    this.dropdownSoundRef = /*#__PURE__*/react.createRef();
  }

  blurDropdown() {
    if (!this.state.blurDropdown) {
      this.setState({
        blurDropdown: true
      });

      if (this.dropdownSoundRef.current) {
        this.dropdownSoundRef.current.blur();
      }
    }
  }

  componentDidUpdate() {
    this.blurDropdown();
  }

  render() {
    if (this.props.active) {
      return this.buildMaximizedSetting();
    }

    return this.buildMinimizedSetting();
  }

}
DesktopNotificationSettings.propTypes = {
  activity: (prop_types_default()).string.isRequired,
  threads: (prop_types_default()).string.isRequired,
  sound: (prop_types_default()).string.isRequired,
  updateSection: (prop_types_default()).func,
  setParentState: (prop_types_default()).func,
  submit: (prop_types_default()).func,
  cancel: (prop_types_default()).func,
  error: (prop_types_default()).string,
  active: (prop_types_default()).bool,
  saving: (prop_types_default()).bool,
  focused: (prop_types_default()).bool,
  selectedSound: (prop_types_default()).string,
  isCollapsedThreadsEnabled: (prop_types_default()).bool.isRequired
};
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/common.ts
var common = __webpack_require__(61505);
;// CONCATENATED MODULE: ./packages/mattermost-redux/src/utils/notify_props.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

function getEmailInterval(enableEmailNotification, enableEmailBatching, emailIntervalPreference) {
  const {
    INTERVAL_NEVER,
    INTERVAL_IMMEDIATE,
    INTERVAL_FIFTEEN_MINUTES,
    INTERVAL_HOUR
  } = src_constants/* Preferences */.uP;
  const validValuesWithEmailBatching = [INTERVAL_IMMEDIATE, INTERVAL_NEVER, INTERVAL_FIFTEEN_MINUTES, INTERVAL_HOUR];
  const validValuesWithoutEmailBatching = [INTERVAL_IMMEDIATE, INTERVAL_NEVER];

  if (!enableEmailNotification) {
    return INTERVAL_NEVER;
  } else if (enableEmailBatching && validValuesWithEmailBatching.indexOf(emailIntervalPreference) === -1) {
    // When email batching is enabled, the default interval is 15 minutes
    return INTERVAL_FIFTEEN_MINUTES;
  } else if (!enableEmailBatching && validValuesWithoutEmailBatching.indexOf(emailIntervalPreference) === -1) {
    // When email batching is not enabled, the default interval is immediately
    return INTERVAL_IMMEDIATE;
  } else if (enableEmailNotification && emailIntervalPreference === INTERVAL_NEVER) {
    // When email notification is enabled, the default interval is immediately
    return INTERVAL_IMMEDIATE;
  }

  return emailIntervalPreference;
}
;// CONCATENATED MODULE: ./components/user_settings/notifications/email_notification_setting/email_notification_setting.tsx





function email_notification_setting_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







const SECONDS_PER_MINUTE = 60;
class EmailNotificationSetting extends react.PureComponent {
  constructor(props) {
    super(props);

    email_notification_setting_defineProperty(this, "handleChange", e => {
      const enableEmail = e.currentTarget.getAttribute('data-enable-email');
      const newInterval = parseInt(e.currentTarget.getAttribute('data-email-interval'), 10);
      this.setState({
        enableEmail: enableEmail === 'true',
        newInterval
      });
      this.props.onChange(enableEmail);
    });

    email_notification_setting_defineProperty(this, "handleThreadsOnChange", e => {
      const value = e.target.checked ? constants/* NotificationLevels.ALL */.XH.ALL : constants/* NotificationLevels.MENTION */.XH.MENTION;
      this.props.setParentState('emailThreads', value);
    });

    email_notification_setting_defineProperty(this, "handleSubmit", async () => {
      const {
        newInterval
      } = this.state;

      if (this.props.emailInterval === newInterval && this.props.enableEmail === this.state.enableEmail) {
        this.props.updateSection('');
      } else {
        // until the rest of the notification settings are moved to preferences, we have to do this separately
        const {
          currentUserId,
          actions
        } = this.props;
        const emailIntervalPreference = {
          user_id: currentUserId,
          category: constants/* Preferences.CATEGORY_NOTIFICATIONS */.uP.CATEGORY_NOTIFICATIONS,
          name: constants/* Preferences.EMAIL_INTERVAL */.uP.EMAIL_INTERVAL,
          value: newInterval.toString()
        };
        await actions.savePreferences(currentUserId, [emailIntervalPreference]);
      }

      this.props.onSubmit();
    });

    email_notification_setting_defineProperty(this, "handleUpdateSection", section => {
      if (section) {
        this.props.updateSection(section);
      } else {
        this.props.updateSection('');
        this.setState({
          enableEmail: this.props.enableEmail,
          newInterval: this.props.emailInterval
        });
        this.props.onCancel();
      }
    });

    email_notification_setting_defineProperty(this, "renderMinSettingView", () => {
      const {
        enableEmail,
        sendEmailNotifications
      } = this.props;
      const {
        newInterval
      } = this.state;
      let description;

      if (!sendEmailNotifications) {
        description = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.email.disabled",
          defaultMessage: "Email notifications are not enabled"
        });
      } else if (enableEmail) {
        switch (newInterval) {
          case constants/* Preferences.INTERVAL_IMMEDIATE */.uP.INTERVAL_IMMEDIATE:
            description = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.notifications.email.immediately",
              defaultMessage: "Immediately"
            });
            break;

          case constants/* Preferences.INTERVAL_HOUR */.uP.INTERVAL_HOUR:
            description = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.notifications.email.everyHour",
              defaultMessage: "Every hour"
            });
            break;

          case constants/* Preferences.INTERVAL_FIFTEEN_MINUTES */.uP.INTERVAL_FIFTEEN_MINUTES:
            description = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.notifications.email.everyXMinutes",
              defaultMessage: "Every {count, plural, one {minute} other {{count, number} minutes}}",
              values: {
                count: newInterval / SECONDS_PER_MINUTE
              }
            });
            break;

          default:
            description = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.notifications.email.never",
              defaultMessage: "Never"
            });
        }
      } else {
        description = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.email.never",
          defaultMessage: "Never"
        });
      }

      return /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: (0,utils/* localizeMessage */._u)('user.settings.notifications.emailNotifications', 'Email Notifications'),
        describe: description,
        section: 'email',
        updateSection: this.handleUpdateSection
      });
    });

    email_notification_setting_defineProperty(this, "renderMaxSettingView", () => {
      if (!this.props.sendEmailNotifications) {
        return /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
          title: (0,utils/* localizeMessage */._u)('user.settings.notifications.emailNotifications', 'Email Notifications'),
          inputs: [/*#__PURE__*/react.createElement("div", {
            key: "oauthEmailInfo",
            className: "pt-2"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.notifications.email.disabled_long",
            defaultMessage: "Email notifications have not been enabled by your System Administrator."
          }))],
          server_error: this.props.serverError,
          section: 'email',
          updateSection: this.handleUpdateSection
        });
      }

      const {
        newInterval
      } = this.state;
      let batchingOptions = null;
      let batchingInfo = null;

      if (this.props.enableEmailBatching) {
        batchingOptions = /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
          id: "emailNotificationMinutes",
          type: "radio",
          name: "emailNotifications",
          checked: newInterval === constants/* Preferences.INTERVAL_FIFTEEN_MINUTES */.uP.INTERVAL_FIFTEEN_MINUTES,
          "data-enable-email": 'true',
          "data-email-interval": constants/* Preferences.INTERVAL_FIFTEEN_MINUTES */.uP.INTERVAL_FIFTEEN_MINUTES,
          onChange: this.handleChange
        }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.email.everyXMinutes",
          defaultMessage: "Every {count} minutes",
          values: {
            count: constants/* Preferences.INTERVAL_FIFTEEN_MINUTES */.uP.INTERVAL_FIFTEEN_MINUTES / SECONDS_PER_MINUTE
          }
        }))), /*#__PURE__*/react.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
          id: "emailNotificationHour",
          type: "radio",
          name: "emailNotifications",
          checked: newInterval === constants/* Preferences.INTERVAL_HOUR */.uP.INTERVAL_HOUR,
          "data-enable-email": 'true',
          "data-email-interval": constants/* Preferences.INTERVAL_HOUR */.uP.INTERVAL_HOUR,
          onChange: this.handleChange
        }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.email.everyHour",
          defaultMessage: "Every hour"
        }))));
        batchingInfo = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.emailBatchingInfo",
          defaultMessage: "Notifications received over the time period selected are combined and sent in a single email."
        });
      }

      let threadsNotificationSelection = null;

      if (this.props.isCollapsedThreadsEnabled && this.props.enableEmail) {
        threadsNotificationSelection = /*#__PURE__*/react.createElement(react.Fragment, {
          key: "userNotificationEmailThreadsOptions"
        }, /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("legend", {
          className: "form-legend"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.threads.desktop",
          defaultMessage: "Thread reply notifications"
        })), /*#__PURE__*/react.createElement("div", {
          className: "checkbox"
        }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
          id: "desktopThreadsNotificationAllActivity",
          type: "checkbox",
          name: "desktopThreadsNotificationLevel",
          checked: this.props.threads === constants/* NotificationLevels.ALL */.XH.ALL,
          onChange: this.handleThreadsOnChange
        }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.threads.allActivity",
          defaultMessage: 'Notify me about threads I\'m following'
        })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
          className: "mt-5"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.email_threads",
          defaultMessage: 'When enabled, any reply to a thread you\'re following will send an email notification.'
        }))));
      }

      return /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
        title: (0,utils/* localizeMessage */._u)('user.settings.notifications.emailNotifications', 'Email Notifications'),
        inputs: [/*#__PURE__*/react.createElement("fieldset", {
          key: "userNotificationEmailOptions"
        }, /*#__PURE__*/react.createElement("legend", {
          className: "form-legend"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.email.send",
          defaultMessage: "Send email notifications"
        })), /*#__PURE__*/react.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
          id: "emailNotificationImmediately",
          type: "radio",
          name: "emailNotifications",
          checked: newInterval === constants/* Preferences.INTERVAL_IMMEDIATE */.uP.INTERVAL_IMMEDIATE,
          "data-enable-email": 'true',
          "data-email-interval": constants/* Preferences.INTERVAL_IMMEDIATE */.uP.INTERVAL_IMMEDIATE,
          onChange: this.handleChange
        }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.email.immediately",
          defaultMessage: "Immediately"
        }))), batchingOptions, /*#__PURE__*/react.createElement("div", {
          className: "radio"
        }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
          id: "emailNotificationNever",
          type: "radio",
          name: "emailNotifications",
          checked: newInterval === constants/* Preferences.INTERVAL_NEVER */.uP.INTERVAL_NEVER,
          "data-enable-email": 'false',
          "data-email-interval": constants/* Preferences.INTERVAL_NEVER */.uP.INTERVAL_NEVER,
          onChange: this.handleChange
        }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.email.never",
          defaultMessage: "Never"
        }))), /*#__PURE__*/react.createElement("div", {
          className: "mt-3"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.emailInfo",
          defaultMessage: "Email notifications are sent for mentions and direct messages when you are offline or away for more than 5 minutes."
        }), ' ', batchingInfo)), threadsNotificationSelection],
        submit: this.handleSubmit,
        saving: this.props.saving,
        server_error: this.props.serverError,
        updateSection: this.handleUpdateSection
      });
    });

    const {
      emailInterval,
      enableEmail: _enableEmail,
      enableEmailBatching,
      sendEmailNotifications: _sendEmailNotifications,
      activeSection
    } = props;
    this.state = {
      activeSection,
      emailInterval,
      enableEmail: _enableEmail,
      enableEmailBatching,
      sendEmailNotifications: _sendEmailNotifications,
      newInterval: getEmailInterval(_enableEmail && _sendEmailNotifications, enableEmailBatching, emailInterval)
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      emailInterval,
      enableEmail,
      enableEmailBatching,
      sendEmailNotifications,
      activeSection
    } = nextProps; // If we're re-opening this section, reset to defaults from props

    if (activeSection === 'email' && prevState.activeSection !== 'email') {
      return {
        activeSection,
        emailInterval,
        enableEmail,
        enableEmailBatching,
        sendEmailNotifications,
        newInterval: getEmailInterval(enableEmail && sendEmailNotifications, enableEmailBatching, emailInterval)
      };
    }

    if (sendEmailNotifications !== prevState.sendEmailNotifications || enableEmailBatching !== prevState.enableEmailBatching || emailInterval !== prevState.emailInterval || activeSection !== prevState.activeSection) {
      return {
        activeSection,
        emailInterval,
        enableEmail,
        enableEmailBatching,
        sendEmailNotifications,
        newInterval: getEmailInterval(enableEmail && sendEmailNotifications, enableEmailBatching, emailInterval)
      };
    }

    return null;
  }

  render() {
    if (this.props.activeSection !== 'email') {
      return this.renderMinSettingView();
    }

    return this.renderMaxSettingView();
  }

}

email_notification_setting_defineProperty(EmailNotificationSetting, "propTypes", {
  currentUserId: (prop_types_default()).string.isRequired,
  activeSection: (prop_types_default()).string.isRequired,
  updateSection: (prop_types_default()).func.isRequired,
  enableEmail: (prop_types_default()).bool.isRequired,
  emailInterval: (prop_types_default()).number.isRequired,
  onSubmit: (prop_types_default()).func.isRequired,
  onCancel: (prop_types_default()).func.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  serverError: (prop_types_default()).string,
  saving: (prop_types_default()).bool,
  sendEmailNotifications: (prop_types_default()).bool.isRequired,
  enableEmailBatching: (prop_types_default()).bool.isRequired,
  actions: prop_types_default().shape({
    savePreferences: (prop_types_default()).func.isRequired
  }).isRequired,
  isCollapsedThreadsEnabled: (prop_types_default()).bool.isRequired,
  threads: (prop_types_default()).string.isRequired,
  setParentState: (prop_types_default()).func.isRequired
});
;// CONCATENATED MODULE: ./components/user_settings/notifications/email_notification_setting/index.ts


// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









function email_notification_setting_mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const emailInterval = parseInt((0,preferences/* get */.U2)(state, src_constants/* Preferences.CATEGORY_NOTIFICATIONS */.uP.CATEGORY_NOTIFICATIONS, src_constants/* Preferences.EMAIL_INTERVAL */.uP.EMAIL_INTERVAL, src_constants/* Preferences.INTERVAL_NOT_SET.toString */.uP.INTERVAL_NOT_SET.toString()), 10);
  return {
    currentUserId: (0,common/* getCurrentUserId */.rc)(state),
    emailInterval,
    enableEmailBatching: config.EnableEmailBatching === 'true',
    sendEmailNotifications: config.SendEmailNotifications === 'true'
  };
}

function email_notification_setting_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      savePreferences: actions_preferences/* savePreferences */.$A
    }, dispatch)
  };
}

/* harmony default export */ const email_notification_setting = ((0,es.connect)(email_notification_setting_mapStateToProps, email_notification_setting_mapDispatchToProps)(EmailNotificationSetting));
;// CONCATENATED MODULE: ./components/user_settings/notifications/manage_auto_responder.jsx


function manage_auto_responder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const MESSAGE_MAX_LENGTH = 200;
class ManageAutoResponder extends react.PureComponent {
  constructor() {
    super(...arguments);

    manage_auto_responder_defineProperty(this, "handleAutoResponderChecked", e => {
      this.props.setParentState('autoResponderActive', e.target.checked);
    });

    manage_auto_responder_defineProperty(this, "onMessageChanged", e => {
      this.props.setParentState('autoResponderMessage', e.target.value);
    });
  }

  render() {
    const {
      autoResponderActive,
      autoResponderMessage
    } = this.props;
    let serverError;

    if (this.props.error) {
      serverError = /*#__PURE__*/react.createElement("label", {
        className: "has-error"
      }, this.props.error);
    }

    const inputs = [];
    const activeToggle = /*#__PURE__*/react.createElement("div", {
      id: "autoResponderCheckbox",
      key: "autoResponderCheckbox",
      className: "checkbox"
    }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
      id: "autoResponderActive",
      type: "checkbox",
      checked: autoResponderActive,
      onChange: this.handleAutoResponderChecked
    }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.notifications.autoResponderEnabled",
      defaultMessage: "Enabled"
    })));
    const message = /*#__PURE__*/react.createElement("div", {
      id: "autoResponderMessage",
      key: "autoResponderMessage"
    }, /*#__PURE__*/react.createElement("div", {
      className: "pt-2"
    }, /*#__PURE__*/react.createElement("textarea", {
      style: {
        resize: 'none'
      },
      id: "autoResponderMessageInput",
      className: "form-control",
      rows: "5",
      placeholder: (0,utils/* localizeMessage */._u)('user.settings.notifications.autoResponderPlaceholder', 'Message'),
      value: autoResponderMessage,
      maxLength: MESSAGE_MAX_LENGTH,
      onChange: this.onMessageChanged
    }), serverError));
    inputs.push(activeToggle);

    if (autoResponderActive) {
      inputs.push(message);
    }

    inputs.push( /*#__PURE__*/react.createElement("div", {
      key: "autoResponderHint",
      className: "mt-5"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.notifications.autoResponderHint",
      defaultMessage: "Set a custom message that will be automatically sent in response to Direct Messages. Mentions in Public and Private Channels will not trigger the automated reply. Enabling Automatic Replies sets your status to Out of Office and disables email and push notifications."
    })));
    return /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
      title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.notifications.autoResponder",
        defaultMessage: "Automatic Direct Message Replies"
      }),
      width: "medium",
      shiftEnter: true,
      submit: this.props.submit,
      saving: this.props.saving,
      inputs: inputs,
      updateSection: this.props.updateSection
    });
  }

}

manage_auto_responder_defineProperty(ManageAutoResponder, "propTypes", {
  autoResponderActive: (prop_types_default()).bool.isRequired,
  autoResponderMessage: (prop_types_default()).string.isRequired,
  updateSection: (prop_types_default()).func.isRequired,
  setParentState: (prop_types_default()).func.isRequired,
  submit: (prop_types_default()).func.isRequired,
  saving: (prop_types_default()).bool.isRequired,
  error: (prop_types_default()).string
});
;// CONCATENATED MODULE: ./components/user_settings/notifications/user_settings_notifications.jsx
function user_settings_notifications_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable max-lines */













function getNotificationsStateFromProps(props) {
  const user = props.user;
  let desktop = constants/* NotificationLevels.MENTION */.XH.MENTION;
  let desktopThreads = constants/* NotificationLevels.ALL */.XH.ALL;
  let pushThreads = constants/* NotificationLevels.ALL */.XH.ALL;
  let emailThreads = constants/* NotificationLevels.ALL */.XH.ALL;
  let sound = 'true';
  let desktopNotificationSound = 'Bing';
  let comments = 'never';
  let enableEmail = 'true';
  let pushActivity = constants/* NotificationLevels.MENTION */.XH.MENTION;
  let pushStatus = constants/* default.UserStatuses.AWAY */.ZP.UserStatuses.AWAY;
  let autoResponderActive = false;
  let autoResponderMessage = utils/* localizeMessage */._u('user.settings.notifications.autoResponderDefault', 'Hello, I am out of office and unable to respond to messages.');

  if (user.notify_props) {
    if (user.notify_props.desktop) {
      desktop = user.notify_props.desktop;
    }

    if (user.notify_props.desktop_threads) {
      desktopThreads = user.notify_props.desktop_threads;
    }

    if (user.notify_props.push_threads) {
      pushThreads = user.notify_props.push_threads;
    }

    if (user.notify_props.email_threads) {
      emailThreads = user.notify_props.email_threads;
    }

    if (user.notify_props.desktop_sound) {
      sound = user.notify_props.desktop_sound;
    }

    if (user.notify_props.desktop_notification_sound) {
      desktopNotificationSound = user.notify_props.desktop_notification_sound;
    }

    if (user.notify_props.comments) {
      comments = user.notify_props.comments;
    }

    if (user.notify_props.email) {
      enableEmail = user.notify_props.email;
    }

    if (user.notify_props.push) {
      pushActivity = user.notify_props.push;
    }

    if (user.notify_props.push_status) {
      pushStatus = user.notify_props.push_status;
    }

    if (user.notify_props.auto_responder_active) {
      autoResponderActive = user.notify_props.auto_responder_active === 'true';
    }

    if (user.notify_props.auto_responder_message) {
      autoResponderMessage = user.notify_props.auto_responder_message;
    }
  }

  let usernameKey = false;
  let customKeys = '';
  let firstNameKey = false;
  let channelKey = false;

  if (user.notify_props) {
    if (user.notify_props.mention_keys) {
      const keys = user.notify_props.mention_keys.split(',');

      if (keys.indexOf(user.username) === -1) {
        usernameKey = false;
      } else {
        usernameKey = true;
        keys.splice(keys.indexOf(user.username), 1);

        if (keys.indexOf("@".concat(user.username)) !== -1) {
          keys.splice(keys.indexOf("@".concat(user.username)), 1);
        }
      }

      customKeys = keys.join(',');
    }

    if (user.notify_props.first_name) {
      firstNameKey = user.notify_props.first_name === 'true';
    }

    if (user.notify_props.channel) {
      channelKey = user.notify_props.channel === 'true';
    }
  }

  return {
    desktopActivity: desktop,
    desktopThreads,
    pushThreads,
    emailThreads,
    enableEmail,
    pushActivity,
    pushStatus,
    desktopSound: sound,
    desktopNotificationSound,
    usernameKey,
    customKeys,
    customKeysChecked: customKeys.length > 0,
    firstNameKey,
    channelKey,
    autoResponderActive,
    autoResponderMessage,
    notifyCommentsLevel: comments,
    isSaving: false
  };
}

class NotificationsTab extends react.PureComponent {
  constructor(props) {
    super(props);

    user_settings_notifications_defineProperty(this, "handleSubmit", () => {
      const data = {};
      data.email = this.state.enableEmail;
      data.desktop_sound = this.state.desktopSound;

      if (!(0,user_agent/* isDesktopApp */.P)() || window.desktop && semver_default().gte(window.desktop.version, '4.6.0')) {
        data.desktop_notification_sound = this.state.desktopNotificationSound;
      }

      data.desktop = this.state.desktopActivity;
      data.desktop_threads = this.state.desktopThreads;
      data.email_threads = this.state.emailThreads;
      data.push_threads = this.state.pushThreads;
      data.push = this.state.pushActivity;
      data.push_status = this.state.pushStatus;
      data.comments = this.state.notifyCommentsLevel;
      data.auto_responder_active = this.state.autoResponderActive.toString();
      data.auto_responder_message = this.state.autoResponderMessage;

      if (!data.auto_responder_message || data.auto_responder_message === '') {
        data.auto_responder_message = utils/* localizeMessage */._u('user.settings.notifications.autoResponderDefault', 'Hello, I am out of office and unable to respond to messages.');
      }

      const mentionKeys = [];

      if (this.state.usernameKey) {
        mentionKeys.push(this.props.user.username);
      }

      let stringKeys = mentionKeys.join(',');

      if (this.state.customKeys.length > 0 && this.state.customKeysChecked) {
        stringKeys += ',' + this.state.customKeys;
      }

      data.mention_keys = stringKeys;
      data.first_name = this.state.firstNameKey.toString();
      data.channel = this.state.channelKey.toString();
      this.setState({
        isSaving: true
      });
      this.props.actions.updateMe({
        notify_props: data
      }).then(_ref => {
        let {
          data: result,
          error: err
        } = _ref;

        if (result) {
          this.handleUpdateSection('');
          this.setState(getNotificationsStateFromProps(this.props));
        } else if (err) {
          this.setState({
            serverError: err.message,
            isSaving: false
          });
        }
      });
    });

    user_settings_notifications_defineProperty(this, "handleCancel", e => {
      if (e) {
        e.preventDefault();
      }

      this.setState(getNotificationsStateFromProps(this.props));
    });

    user_settings_notifications_defineProperty(this, "handleUpdateSection", section => {
      if (section) {
        this.props.updateSection(section);
      } else {
        this.props.updateSection('');
      }

      this.setState({
        isSaving: false
      });
      this.handleCancel();
    });

    user_settings_notifications_defineProperty(this, "setStateValue", (key, value) => {
      const data = {};
      data[key] = value;
      this.setState(data);
    });

    user_settings_notifications_defineProperty(this, "handleNotifyPushThread", e => {
      const pushThreads = e.target.checked ? constants/* NotificationLevels.ALL */.XH.ALL : constants/* NotificationLevels.MENTION */.XH.MENTION;
      this.setState({
        pushThreads
      });
    });

    user_settings_notifications_defineProperty(this, "handleEmailRadio", enableEmail => {
      this.setState({
        enableEmail
      });
    });

    user_settings_notifications_defineProperty(this, "updateUsernameKey", val => {
      this.setState({
        usernameKey: val
      });
    });

    user_settings_notifications_defineProperty(this, "updateFirstNameKey", val => {
      this.setState({
        firstNameKey: val
      });
    });

    user_settings_notifications_defineProperty(this, "updateChannelKey", val => {
      this.setState({
        channelKey: val
      });
    });

    user_settings_notifications_defineProperty(this, "updateCustomMentionKeys", () => {
      const checked = this.customCheckRef.current.checked;

      if (checked) {
        const text = this.customMentionsRef.current.value; // remove all spaces and split string into individual keys

        this.setState({
          customKeys: text.replace(/ /g, ''),
          customKeysChecked: true
        });
      } else {
        this.setState({
          customKeys: '',
          customKeysChecked: false
        });
      }
    });

    user_settings_notifications_defineProperty(this, "onCustomChange", () => {
      this.customCheckRef.current.checked = true;
      this.updateCustomMentionKeys();
    });

    user_settings_notifications_defineProperty(this, "createPushNotificationSection", () => {
      if (this.props.activeSection === 'push') {
        const inputs = [];
        let submit = null;

        if (this.props.sendPushNotifications) {
          const pushActivityRadio = [false, false, false];

          if (this.state.pushActivity === constants/* NotificationLevels.ALL */.XH.ALL) {
            pushActivityRadio[0] = true;
          } else if (this.state.pushActivity === constants/* NotificationLevels.NONE */.XH.NONE) {
            pushActivityRadio[2] = true;
          } else {
            pushActivityRadio[1] = true;
          }

          const pushStatusRadio = [false, false, false];

          if (this.state.pushStatus === constants/* default.UserStatuses.ONLINE */.ZP.UserStatuses.ONLINE) {
            pushStatusRadio[0] = true;
          } else if (this.state.pushStatus === constants/* default.UserStatuses.AWAY */.ZP.UserStatuses.AWAY) {
            pushStatusRadio[1] = true;
          } else {
            pushStatusRadio[2] = true;
          }

          let pushThreadsNotificationSelection = null;

          if (this.props.isCollapsedThreadsEnabled && this.state.pushActivity === constants/* NotificationLevels.MENTION */.XH.MENTION) {
            pushThreadsNotificationSelection = /*#__PURE__*/react.createElement(react.Fragment, {
              key: "userNotificationPushThreadsOptions"
            }, /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("legend", {
              className: "form-legend"
            }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.notifications.threads.push",
              defaultMessage: "Thread reply notifications"
            })), /*#__PURE__*/react.createElement("div", {
              className: "checkbox"
            }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
              id: "pushThreadsNotificationAllActivity",
              type: "checkbox",
              name: "pushThreadsNotificationLevel",
              checked: this.state.pushThreads === constants/* NotificationLevels.ALL */.XH.ALL,
              onChange: this.handleNotifyPushThread
            }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.notifications.push_threads.allActivity",
              defaultMessage: 'Notify me about threads I\'m following'
            })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
              className: "mt-5"
            }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.notifications.push_threads",
              defaultMessage: 'When enabled, any reply to a thread you\'re following will send a mobile push notification.'
            }))));
          }

          let pushStatusSettings;

          if (this.state.pushActivity !== constants/* NotificationLevels.NONE */.XH.NONE) {
            pushStatusSettings = /*#__PURE__*/react.createElement(react.Fragment, {
              key: "userNotificationPushStatusOptions"
            }, /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("legend", {
              className: "form-legend"
            }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.notifications.push_notification.status",
              defaultMessage: "Trigger push notifications when"
            })), /*#__PURE__*/react.createElement("div", {
              className: "radio"
            }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
              id: "pushNotificationOnline",
              type: "radio",
              name: "pushNotificationStatus",
              checked: pushStatusRadio[0],
              onChange: this.handlePushStatusRadio.bind(this, constants/* default.UserStatuses.ONLINE */.ZP.UserStatuses.ONLINE)
            }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.push_notification.online",
              defaultMessage: "Online, away or offline"
            }))), /*#__PURE__*/react.createElement("div", {
              className: "radio"
            }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
              id: "pushNotificationAway",
              type: "radio",
              name: "pushNotificationStatus",
              checked: pushStatusRadio[1],
              onChange: this.handlePushStatusRadio.bind(this, constants/* default.UserStatuses.AWAY */.ZP.UserStatuses.AWAY)
            }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.push_notification.away",
              defaultMessage: "Away or offline"
            }))), /*#__PURE__*/react.createElement("div", {
              className: "radio"
            }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
              id: "pushNotificationOffline",
              type: "radio",
              name: "pushNotificationStatus",
              checked: pushStatusRadio[2],
              onChange: this.handlePushStatusRadio.bind(this, constants/* default.UserStatuses.OFFLINE */.ZP.UserStatuses.OFFLINE)
            }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.push_notification.offline",
              defaultMessage: "Offline"
            }))), /*#__PURE__*/react.createElement("div", {
              className: "mt-5"
            }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.push_notification.status_info",
              defaultMessage: "Notification alerts are only pushed to your mobile device when your availability matches the selection above."
            })))));
          }

          inputs.push( /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("fieldset", {
            key: "userNotificationLevelOption"
          }, /*#__PURE__*/react.createElement("legend", {
            className: "form-legend"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.push_notification.send",
            defaultMessage: "Send mobile push notifications"
          })), /*#__PURE__*/react.createElement("div", {
            className: "radio"
          }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
            id: "pushNotificationAllActivity",
            type: "radio",
            name: "pushNotificationLevel",
            checked: pushActivityRadio[0],
            onChange: this.handlePushRadio.bind(this, constants/* NotificationLevels.ALL */.XH.ALL)
          }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.push_notification.allActivity",
            defaultMessage: "For all activity"
          }))), /*#__PURE__*/react.createElement("div", {
            className: "radio"
          }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
            id: "pushNotificationMentions",
            type: "radio",
            name: "pushNotificationLevel",
            checked: pushActivityRadio[1],
            onChange: this.handlePushRadio.bind(this, constants/* NotificationLevels.MENTION */.XH.MENTION)
          }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.push_notification.onlyMentions",
            defaultMessage: "For mentions and direct messages"
          }))), /*#__PURE__*/react.createElement("div", {
            className: "radio"
          }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
            id: "pushNotificationNever",
            type: "radio",
            name: "pushNotificationLevel",
            checked: pushActivityRadio[2],
            onChange: this.handlePushRadio.bind(this, constants/* NotificationLevels.NONE */.XH.NONE)
          }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.notifications.never",
            defaultMessage: "Never"
          }))), /*#__PURE__*/react.createElement("div", {
            className: "mt-5"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.push_notification.info",
            defaultMessage: "Notification alerts are pushed to your mobile device when there is activity in Mattermost."
          })))), pushStatusSettings, pushThreadsNotificationSelection);
          submit = this.handleSubmit;
        } else {
          inputs.push( /*#__PURE__*/react.createElement("div", {
            key: "oauthEmailInfo",
            className: "pt-2"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.push_notification.disabled_long",
            defaultMessage: "Push notifications have not been enabled by your System Administrator."
          })));
        }

        return /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
          title: utils/* localizeMessage */._u('user.settings.notifications.push', 'Mobile Push Notifications'),
          inputs: inputs,
          submit: submit,
          server_error: this.state.serverError,
          updateSection: this.handleUpdateSection
        });
      }

      let describe = '';

      if (this.state.pushActivity === constants/* NotificationLevels.ALL */.XH.ALL) {
        if (this.state.pushStatus === constants/* default.UserStatuses.AWAY */.ZP.UserStatuses.AWAY) {
          describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.push_notification.allActivityAway",
            defaultMessage: "For all activity when away or offline"
          });
        } else if (this.state.pushStatus === constants/* default.UserStatuses.OFFLINE */.ZP.UserStatuses.OFFLINE) {
          describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.push_notification.allActivityOffline",
            defaultMessage: "For all activity when offline"
          });
        } else {
          describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.push_notification.allActivityOnline",
            defaultMessage: "For all activity when online, away or offline"
          });
        }
      } else if (this.state.pushActivity === constants/* NotificationLevels.NONE */.XH.NONE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.never",
          defaultMessage: "Never"
        });
      } else if (this.props.sendPushNotifications) {
        if (this.state.pushStatus === constants/* default.UserStatuses.AWAY */.ZP.UserStatuses.AWAY) {
          //eslint-disable-line no-lonely-if
          describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.push_notification.onlyMentionsAway",
            defaultMessage: "For mentions and direct messages when away or offline"
          });
        } else if (this.state.pushStatus === constants/* default.UserStatuses.OFFLINE */.ZP.UserStatuses.OFFLINE) {
          describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.push_notification.onlyMentionsOffline",
            defaultMessage: "For mentions and direct messages when offline"
          });
        } else {
          describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.push_notification.onlyMentionsOnline",
            defaultMessage: "For mentions and direct messages when online, away or offline"
          });
        }
      } else {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.push_notification.disabled",
          defaultMessage: "Push notifications are not enabled"
        });
      }

      return /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: utils/* localizeMessage */._u('user.settings.notifications.push', 'Mobile Push Notifications'),
        describe: describe,
        section: 'push',
        updateSection: this.handleUpdateSection
      });
    });

    this.state = getNotificationsStateFromProps(props);
    this.customCheckRef = /*#__PURE__*/react.createRef();
    this.customMentionsRef = /*#__PURE__*/react.createRef();
    this.drawerRef = /*#__PURE__*/react.createRef();
    this.wrapperRef = /*#__PURE__*/react.createRef();
  }

  handleNotifyCommentsRadio(notifyCommentsLevel) {
    this.setState({
      notifyCommentsLevel
    });
  }

  handlePushRadio(pushActivity) {
    this.setState({
      pushActivity
    });
  }

  handlePushStatusRadio(pushStatus) {
    this.setState({
      pushStatus
    });
  }

  render() {
    const serverError = this.state.serverError;
    const user = this.props.user;
    let keysSection;

    if (this.props.activeSection === 'keys') {
      const inputs = [];

      if (user.first_name) {
        const handleUpdateFirstNameKey = e => {
          this.updateFirstNameKey(e.target.checked);
        };

        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "userNotificationFirstNameOption"
        }, /*#__PURE__*/react.createElement("div", {
          className: "checkbox"
        }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
          id: "notificationTriggerFirst",
          type: "checkbox",
          checked: this.state.firstNameKey,
          onChange: handleUpdateFirstNameKey
        }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.sensitiveName",
          defaultMessage: "Your case sensitive first name \"{first_name}\"",
          values: {
            first_name: user.first_name
          }
        })))));
      }

      const handleUpdateUsernameKey = e => {
        this.updateUsernameKey(e.target.checked);
      };

      inputs.push( /*#__PURE__*/react.createElement("div", {
        key: "userNotificationUsernameOption"
      }, /*#__PURE__*/react.createElement("div", {
        className: "checkbox"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        id: "notificationTriggerUsername",
        type: "checkbox",
        checked: this.state.usernameKey,
        onChange: handleUpdateUsernameKey
      }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.notifications.sensitiveUsername",
        defaultMessage: "Your non case-sensitive username \"{username}\"",
        values: {
          username: user.username
        }
      })))));

      const handleUpdateChannelKey = e => {
        this.updateChannelKey(e.target.checked);
      };

      inputs.push( /*#__PURE__*/react.createElement("div", {
        key: "userNotificationChannelOption"
      }, /*#__PURE__*/react.createElement("div", {
        className: "checkbox"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        id: "notificationTriggerShouts",
        type: "checkbox",
        checked: this.state.channelKey,
        onChange: handleUpdateChannelKey
      }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.notifications.channelWide",
        defaultMessage: "Channel-wide mentions \"@channel\", \"@all\", \"@here\""
      })))));
      inputs.push( /*#__PURE__*/react.createElement("div", {
        key: "userNotificationCustomOption"
      }, /*#__PURE__*/react.createElement("div", {
        className: "checkbox"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        id: "notificationTriggerCustom",
        ref: this.customCheckRef,
        type: "checkbox",
        checked: this.state.customKeysChecked,
        onChange: this.updateCustomMentionKeys
      }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.notifications.sensitiveWords",
        defaultMessage: "Other non-case sensitive words, separated by commas:"
      }))), /*#__PURE__*/react.createElement("input", {
        id: "notificationTriggerCustomText",
        autoFocus: this.state.customKeysChecked,
        ref: this.customMentionsRef,
        className: "form-control mentions-input",
        type: "text",
        defaultValue: this.state.customKeys,
        onChange: this.onCustomChange,
        onFocus: utils/* moveCursorToEnd */.fe,
        "aria-labelledby": "notificationTriggerCustom"
      })));
      const extraInfo = /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.notifications.mentionsInfo",
        defaultMessage: "Mentions trigger when someone sends a message that includes your username (@{username}) or any of the options selected above.",
        values: {
          username: user.username
        }
      }));
      keysSection = /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
        title: utils/* localizeMessage */._u('user.settings.notifications.wordsTrigger', 'Words That Trigger Mentions'),
        inputs: inputs,
        submit: this.handleSubmit,
        saving: this.state.isSaving,
        server_error: serverError,
        updateSection: this.handleUpdateSection,
        extraInfo: extraInfo
      });
    } else {
      let keys = ['@' + user.username];

      if (this.state.firstNameKey) {
        keys.push(user.first_name);
      }

      if (this.state.usernameKey) {
        keys.push(user.username);
      }

      if (this.state.channelKey) {
        keys.push('@channel');
        keys.push('@all');
        keys.push('@here');
      }

      if (this.state.customKeys.length > 0) {
        keys = keys.concat(this.state.customKeys.split(','));
      }

      let describe = '';

      for (let i = 0; i < keys.length; i++) {
        if (keys[i] !== '') {
          describe += '"' + keys[i] + '", ';
        }
      }

      if (describe.length > 0) {
        describe = describe.substring(0, describe.length - 2);
      } else {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.noWords",
          defaultMessage: "No words configured"
        });
      }

      keysSection = /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: utils/* localizeMessage */._u('user.settings.notifications.wordsTrigger', 'Words That Trigger Mentions'),
        describe: describe,
        section: 'keys',
        updateSection: this.handleUpdateSection
      });
    }

    let commentsSection;

    if (this.props.activeSection === 'comments') {
      const commentsActive = [false, false, false];

      if (this.state.notifyCommentsLevel === 'never') {
        commentsActive[2] = true;
      } else if (this.state.notifyCommentsLevel === 'root') {
        commentsActive[1] = true;
      } else {
        commentsActive[0] = true;
      }

      const inputs = [];
      inputs.push( /*#__PURE__*/react.createElement("fieldset", {
        key: "userNotificationLevelOption"
      }, /*#__PURE__*/react.createElement("legend", {
        className: "form-legend hidden-label"
      }, utils/* localizeMessage */._u('user.settings.notifications.comments', 'Reply notifications')), /*#__PURE__*/react.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        id: "notificationCommentsAny",
        type: "radio",
        name: "commentsNotificationLevel",
        checked: commentsActive[0],
        onChange: this.handleNotifyCommentsRadio.bind(this, 'any')
      }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.notifications.commentsAny",
        defaultMessage: "Trigger notifications on messages in reply threads that I start or participate in"
      })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        id: "notificationCommentsRoot",
        type: "radio",
        name: "commentsNotificationLevel",
        checked: commentsActive[1],
        onChange: this.handleNotifyCommentsRadio.bind(this, 'root')
      }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.notifications.commentsRoot",
        defaultMessage: "Trigger notifications on messages in threads that I start"
      })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        id: "notificationCommentsNever",
        type: "radio",
        name: "commentsNotificationLevel",
        checked: commentsActive[2],
        onChange: this.handleNotifyCommentsRadio.bind(this, 'never')
      }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.notifications.commentsNever",
        defaultMessage: "Do not trigger notifications on messages in reply threads unless I'm mentioned"
      })))));
      const extraInfo = /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.notifications.commentsInfo",
        defaultMessage: "In addition to notifications for when you're mentioned, select if you would like to receive notifications on reply threads."
      }));
      commentsSection = /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
        title: utils/* localizeMessage */._u('user.settings.notifications.comments', 'Reply notifications'),
        extraInfo: extraInfo,
        inputs: inputs,
        submit: this.handleSubmit,
        saving: this.state.isSaving,
        server_error: serverError,
        updateSection: this.handleUpdateSection
      });
    } else {
      let describe = '';

      if (this.state.notifyCommentsLevel === 'never') {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.commentsNever",
          defaultMessage: "Do not trigger notifications on messages in reply threads unless I'm mentioned"
        });
      } else if (this.state.notifyCommentsLevel === 'root') {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.commentsRoot",
          defaultMessage: "Trigger notifications on messages in threads that I start"
        });
      } else {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.commentsAny",
          defaultMessage: "Trigger notifications on messages in reply threads that I start or participate in"
        });
      }

      commentsSection = /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: utils/* localizeMessage */._u('user.settings.notifications.comments', 'Reply notifications'),
        describe: describe,
        section: 'comments',
        updateSection: this.handleUpdateSection
      });
    }

    let autoResponderSection;

    if (this.props.enableAutoResponder) {
      if (this.props.activeSection === 'auto-responder') {
        autoResponderSection = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(ManageAutoResponder, {
          autoResponderActive: this.state.autoResponderActive,
          autoResponderMessage: this.state.autoResponderMessage,
          updateSection: this.handleUpdateSection,
          setParentState: this.setStateValue,
          submit: this.handleSubmit,
          error: this.state.serverError,
          saving: this.state.isSaving
        }), /*#__PURE__*/react.createElement("div", {
          className: "divider-dark"
        }));
      } else {
        const describe = this.state.autoResponderActive ? /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.autoResponderEnabled",
          defaultMessage: "Enabled"
        }) : /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.notifications.autoResponderDisabled",
          defaultMessage: "Disabled"
        });
        autoResponderSection = /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
          title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.notifications.autoResponder",
            defaultMessage: "Automatic Direct Message Replies"
          }),
          width: "medium",
          describe: describe,
          section: 'auto-responder',
          updateSection: this.handleUpdateSection
        });
      }
    }

    const pushNotificationSection = this.createPushNotificationSection();
    return /*#__PURE__*/react.createElement("div", {
      id: "notificationSettings"
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal-header"
    }, /*#__PURE__*/react.createElement("button", {
      id: "closeButton",
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      onClick: this.props.closeModal
    }, /*#__PURE__*/react.createElement("span", {
      "aria-hidden": "true"
    }, '×')), /*#__PURE__*/react.createElement("h4", {
      className: "modal-title",
      ref: this.drawerRef
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal-back"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "generic_icons.collapse",
      defaultMessage: "Collapse Icon"
    }, title => /*#__PURE__*/react.createElement("i", {
      className: "fa fa-angle-left",
      title: title,
      onClick: this.props.collapseModal
    }))), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.notifications.title",
      defaultMessage: "Notification Settings"
    }))), /*#__PURE__*/react.createElement("div", {
      ref: this.wrapperRef,
      className: "user-settings"
    }, /*#__PURE__*/react.createElement("h3", {
      id: "notificationSettingsTitle",
      className: "tab-header"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.notifications.header",
      defaultMessage: "Notifications"
    })), /*#__PURE__*/react.createElement("div", {
      className: "divider-dark first"
    }), /*#__PURE__*/react.createElement(DesktopNotificationSettings, {
      activity: this.state.desktopActivity,
      threads: this.state.desktopThreads,
      sound: this.state.desktopSound,
      updateSection: this.handleUpdateSection,
      setParentState: this.setStateValue,
      submit: this.handleSubmit,
      saving: this.state.isSaving,
      cancel: this.handleCancel,
      error: this.state.serverError,
      active: this.props.activeSection === 'desktop',
      selectedSound: this.state.desktopNotificationSound,
      isCollapsedThreadsEnabled: this.props.isCollapsedThreadsEnabled
    }), /*#__PURE__*/react.createElement("div", {
      className: "divider-light"
    }), /*#__PURE__*/react.createElement(email_notification_setting, {
      activeSection: this.props.activeSection,
      updateSection: this.handleUpdateSection,
      enableEmail: this.state.enableEmail === 'true',
      onSubmit: this.handleSubmit,
      onCancel: this.handleCancel,
      onChange: this.handleEmailRadio,
      saving: this.state.isSaving,
      serverError: this.state.serverError,
      isCollapsedThreadsEnabled: this.props.isCollapsedThreadsEnabled,
      setParentState: this.setStateValue,
      threads: this.state.emailThreads
    }), /*#__PURE__*/react.createElement("div", {
      className: "divider-light"
    }), pushNotificationSection, /*#__PURE__*/react.createElement("div", {
      className: "divider-light"
    }), keysSection, /*#__PURE__*/react.createElement("div", {
      className: "divider-light"
    }), !this.props.isCollapsedThreadsEnabled && /*#__PURE__*/react.createElement(react.Fragment, null, commentsSection, /*#__PURE__*/react.createElement("div", {
      className: "divider-light"
    })), autoResponderSection, /*#__PURE__*/react.createElement("div", {
      className: "divider-dark"
    })));
  }

}
/* eslint-enable react/no-string-refs */

user_settings_notifications_defineProperty(NotificationsTab, "propTypes", {
  user: (prop_types_default()).object,
  updateSection: (prop_types_default()).func,
  activeSection: (prop_types_default()).string,
  closeModal: (prop_types_default()).func.isRequired,
  collapseModal: (prop_types_default()).func.isRequired,
  sendPushNotifications: (prop_types_default()).bool,
  enableAutoResponder: (prop_types_default()).bool,
  actions: prop_types_default().shape({
    updateMe: (prop_types_default()).func.isRequired
  }).isRequired,
  isCollapsedThreadsEnabled: (prop_types_default()).bool.isRequired
});

user_settings_notifications_defineProperty(NotificationsTab, "defaultProps", {
  user: null,
  activeSection: '',
  activeTab: ''
});
;// CONCATENATED MODULE: ./components/user_settings/notifications/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function notifications_mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  const sendPushNotifications = config.SendPushNotifications === 'true';
  const enableAutoResponder = config.ExperimentalEnableAutomaticReplies === 'true';
  return {
    sendPushNotifications,
    enableAutoResponder,
    isCollapsedThreadsEnabled: (0,preferences/* isCollapsedThreadsEnabled */.ym)(state)
  };
}

function notifications_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      updateMe: actions_users/* updateMe */.DO
    }, dispatch)
  };
}

/* harmony default export */ const notifications = ((0,es.connect)(notifications_mapStateToProps, notifications_mapDispatchToProps)(NotificationsTab));
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/integrations.ts
var integrations = __webpack_require__(3448);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/utils/user_utils.ts
var user_utils = __webpack_require__(60690);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./images/icon50x50.png
var icon50x50 = __webpack_require__(16429);
// EXTERNAL MODULE: ./components/audit_table/index.ts + 1 modules
var audit_table = __webpack_require__(64652);
// EXTERNAL MODULE: ./components/loading_screen.tsx
var loading_screen = __webpack_require__(19476);
;// CONCATENATED MODULE: ./components/access_history_modal/access_history_modal.tsx


function access_history_modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





class AccessHistoryModal extends react.PureComponent {
  constructor(props) {
    super(props);

    access_history_modal_defineProperty(this, "onShow", () => {
      // public for testing
      this.props.actions.getUserAudits(this.props.currentUserId, 0, 200);
    });

    access_history_modal_defineProperty(this, "onHide", () => {
      // public for testing
      this.setState({
        show: false
      });
    });

    this.state = {
      show: true
    };
  }

  componentDidMount() {
    this.onShow();
  }

  render() {
    let content;

    if (this.props.userAudits.length === 0) {
      content = /*#__PURE__*/react.createElement(loading_screen/* default */.Z, null);
    } else {
      content = /*#__PURE__*/react.createElement(audit_table/* default */.Z, {
        audits: this.props.userAudits,
        showIp: true,
        showSession: true
      });
    }

    return /*#__PURE__*/react.createElement(Modal/* default */.Z, {
      dialogClassName: "a11y__modal modal--scroll",
      show: this.state.show,
      onHide: this.onHide,
      onExited: this.props.onHide,
      bsSize: "large",
      role: "dialog",
      "aria-labelledby": "accessHistoryModalLabel"
    }, /*#__PURE__*/react.createElement(Modal/* default.Header */.Z.Header, {
      closeButton: true
    }, /*#__PURE__*/react.createElement(Modal/* default.Title */.Z.Title, {
      componentClass: "h1",
      id: "accessHistoryModalLabel"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "access_history.title",
      defaultMessage: "Access History"
    }))), /*#__PURE__*/react.createElement(Modal/* default.Body */.Z.Body, null, content), /*#__PURE__*/react.createElement(Modal/* default.Footer */.Z.Footer, {
      className: "modal-footer--invisible"
    }, /*#__PURE__*/react.createElement("button", {
      id: "closeModalButton",
      type: "button",
      className: "btn btn-link"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "general_button.close",
      defaultMessage: "Close"
    }))));
  }

}

access_history_modal_defineProperty(AccessHistoryModal, "propTypes", {
  onHide: (prop_types_default()).func.isRequired,
  actions: prop_types_default().shape({
    getUserAudits: (prop_types_default()).func.isRequired
  }).isRequired,
  userAudits: prop_types_default().arrayOf((prop_types_default()).any).isRequired,
  currentUserId: (prop_types_default()).string.isRequired
});
;// CONCATENATED MODULE: ./components/access_history_modal/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function access_history_modal_mapStateToProps(state) {
  return {
    currentUserId: (0,users/* getCurrentUserId */.rc)(state),
    userAudits: (0,users/* getUserAudits */.Oc)(state) || []
  };
}

function access_history_modal_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      getUserAudits: actions_users/* getUserAudits */.Oc
    }, dispatch)
  };
}

/* harmony default export */ const access_history_modal = ((0,es.connect)(access_history_modal_mapStateToProps, access_history_modal_mapDispatchToProps)(AccessHistoryModal));
// EXTERNAL MODULE: ./selectors/i18n.ts
var selectors_i18n = __webpack_require__(32966);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(85827);
;// CONCATENATED MODULE: ./components/activity_log_modal/components/more_info.tsx

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



function MoreInfo(props) {
  const {
    locale,
    currentSession,
    handleMoreInfo,
    moreInfo
  } = props;

  if (moreInfo) {
    const firstAccessTime = new Date(currentSession.create_at);
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "activity_log.firstTime",
      defaultMessage: "First time active: {date}, {time}",
      values: {
        date: /*#__PURE__*/react.createElement(lib.FormattedDate, {
          value: firstAccessTime,
          day: "2-digit",
          month: (0,i18n/* getMonthLong */.u)(locale),
          year: "numeric"
        }),
        time: /*#__PURE__*/react.createElement(lib.FormattedTime, {
          value: firstAccessTime,
          hour: "2-digit",
          minute: "2-digit"
        })
      }
    })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "activity_log.os",
      defaultMessage: "OS: {os}",
      values: {
        os: currentSession.props.os
      }
    })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "activity_log.browser",
      defaultMessage: "Browser: {browser}",
      values: {
        browser: currentSession.props.browser
      }
    })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "activity_log.sessionId",
      defaultMessage: "Session ID: {id}",
      values: {
        id: currentSession.id
      }
    })));
  }

  return /*#__PURE__*/react.createElement("a", {
    className: "theme",
    href: "#",
    onClick: handleMoreInfo
  }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
    id: "activity_log.moreInfo",
    defaultMessage: "More info"
  }));
}
MoreInfo.propTypes = {
  locale: (prop_types_default()).string.isRequired,
  handleMoreInfo: (prop_types_default()).func.isRequired,
  moreInfo: (prop_types_default()).bool.isRequired
};
;// CONCATENATED MODULE: ./components/activity_log_modal/components/activity_log.tsx



function activity_log_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class ActivityLog extends react.PureComponent {
  constructor(props) {
    super(props);

    activity_log_defineProperty(this, "handleMoreInfo", () => {
      this.setState({
        moreInfo: true
      });
    });

    activity_log_defineProperty(this, "submitRevoke", e => {
      this.props.submitRevoke(this.props.currentSession.id, e);
    });

    activity_log_defineProperty(this, "isMobileSession", session => {
      return Boolean(session.device_id && (session.device_id.includes('apple') || session.device_id.includes('android')));
    });

    activity_log_defineProperty(this, "mobileSessionInfo", session => {
      let deviceTypeId;
      let deviceTypeMessage;
      let devicePicture;
      let deviceTitle;

      if (session.device_id.includes('apple')) {
        devicePicture = 'fa fa-apple';
        deviceTitle = (0,utils/* localizeMessage */._u)('device_icons.apple', 'Apple Icon');
        deviceTypeId = (0,i18n.t)('activity_log_modal.iphoneNativeClassicApp');
        deviceTypeMessage = 'iPhone Native Classic App';

        if (session.device_id.includes(src_constants/* General.PUSH_NOTIFY_APPLE_REACT_NATIVE */.LQ.PUSH_NOTIFY_APPLE_REACT_NATIVE)) {
          deviceTypeId = (0,i18n.t)('activity_log_modal.iphoneNativeApp');
          deviceTypeMessage = 'iPhone Native App';
        }
      } else if (session.device_id.includes('android')) {
        devicePicture = 'fa fa-android';
        deviceTitle = (0,utils/* localizeMessage */._u)('device_icons.android', 'Android Icon');
        deviceTypeId = (0,i18n.t)('activity_log_modal.androidNativeClassicApp');
        deviceTypeMessage = 'Android Native Classic App';

        if (session.device_id.includes(src_constants/* General.PUSH_NOTIFY_ANDROID_REACT_NATIVE */.LQ.PUSH_NOTIFY_ANDROID_REACT_NATIVE)) {
          deviceTypeId = (0,i18n.t)('activity_log_modal.androidNativeApp');
          deviceTypeMessage = 'Android Native App';
        }
      }

      return {
        devicePicture,
        deviceTitle,
        devicePlatform: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: deviceTypeId,
          defaultMessage: deviceTypeMessage
        })
      };
    });

    this.state = {
      moreInfo: false
    };
  }

  render() {
    const {
      index,
      locale,
      currentSession
    } = this.props;
    const lastAccessTime = new Date(currentSession.last_activity_at);
    let devicePlatform = currentSession.props.platform;
    let devicePicture = '';
    let deviceTitle = '';

    if (currentSession.props.platform === 'Windows') {
      devicePicture = 'fa fa-windows';
      deviceTitle = (0,utils/* localizeMessage */._u)('device_icons.windows', 'Windows Icon');
    } else if (this.isMobileSession(currentSession)) {
      const sessionInfo = this.mobileSessionInfo(currentSession);
      devicePicture = sessionInfo.devicePicture;
      devicePlatform = sessionInfo.devicePlatform;
    } else if (currentSession.props.platform === 'Macintosh' || currentSession.props.platform === 'iPhone') {
      devicePicture = 'fa fa-apple';
      deviceTitle = (0,utils/* localizeMessage */._u)('device_icons.apple', 'Apple Icon');
    } else if (currentSession.props.platform === 'Linux') {
      if (currentSession.props.os.indexOf('Android') >= 0) {
        devicePlatform = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "activity_log_modal.android",
          defaultMessage: "Android"
        });
        devicePicture = 'fa fa-android';
        deviceTitle = (0,utils/* localizeMessage */._u)('device_icons.android', 'Android Icon');
      } else {
        devicePicture = 'fa fa-linux';
        deviceTitle = (0,utils/* localizeMessage */._u)('device_icons.linux', 'Linux Icon');
      }
    } else if (currentSession.props.os.indexOf('Linux') !== -1) {
      devicePicture = 'fa fa-linux';
      deviceTitle = (0,utils/* localizeMessage */._u)('device_icons.linux', 'Linux Icon');
    }

    if (currentSession.props.browser.indexOf('Desktop App') !== -1) {
      devicePlatform = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "activity_log_modal.desktop",
        defaultMessage: "Native Desktop App"
      });
    }

    return /*#__PURE__*/react.createElement("div", {
      key: 'activityLogEntryKey' + index,
      className: "activity-log__table"
    }, /*#__PURE__*/react.createElement("div", {
      className: "activity-log__report"
    }, /*#__PURE__*/react.createElement("div", {
      className: "report__platform"
    }, /*#__PURE__*/react.createElement("i", {
      className: devicePicture,
      title: deviceTitle
    }), devicePlatform), /*#__PURE__*/react.createElement("div", {
      className: "report__info"
    }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "activity_log.lastActivity",
      defaultMessage: "Last activity: {date}, {time}",
      values: {
        date: /*#__PURE__*/react.createElement(lib.FormattedDate, {
          value: lastAccessTime,
          day: "2-digit",
          month: (0,i18n/* getMonthLong */.u)(locale),
          year: "numeric"
        }),
        time: /*#__PURE__*/react.createElement(lib.FormattedTime, {
          value: lastAccessTime,
          hour: "2-digit",
          minute: "2-digit"
        })
      }
    })), /*#__PURE__*/react.createElement(MoreInfo, {
      locale: locale,
      currentSession: currentSession,
      moreInfo: this.state.moreInfo,
      handleMoreInfo: this.handleMoreInfo
    }))), /*#__PURE__*/react.createElement("div", {
      className: "activity-log__action"
    }, /*#__PURE__*/react.createElement("button", {
      onClick: this.submitRevoke,
      className: "btn btn-primary"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "activity_log.logout",
      defaultMessage: "Log Out"
    }))));
  }

}

activity_log_defineProperty(ActivityLog, "propTypes", {
  index: (prop_types_default()).number.isRequired,
  locale: (prop_types_default()).string.isRequired,
  submitRevoke: (prop_types_default()).func.isRequired
});
;// CONCATENATED MODULE: ./components/activity_log_modal/activity_log_modal.tsx



function activity_log_modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




class ActivityLogModal extends react.PureComponent {
  constructor(props) {
    super(props);

    activity_log_modal_defineProperty(this, "submitRevoke", (altId, e) => {
      var _e$target;

      e.preventDefault();
      const modalContent = (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest('.modal-content');
      modalContent === null || modalContent === void 0 ? void 0 : modalContent.classList.add('animation--highlight');
      setTimeout(() => {
        modalContent === null || modalContent === void 0 ? void 0 : modalContent.classList.remove('animation--highlight');
      }, 1500);
      this.props.actions.revokeSession(this.props.currentUserId, altId).then(() => {
        this.props.actions.getSessions(this.props.currentUserId);
      });
    });

    activity_log_modal_defineProperty(this, "onShow", () => {
      this.props.actions.getSessions(this.props.currentUserId);
    });

    activity_log_modal_defineProperty(this, "onHide", () => {
      this.setState({
        show: false
      });
    });

    this.state = {
      show: true
    };
  }

  componentDidMount() {
    this.onShow();
  }

  render() {
    const activityList = this.props.sessions.reduce((array, currentSession, index) => {
      if (currentSession.props.type === 'UserAccessToken') {
        return array;
      }

      array.push( /*#__PURE__*/react.createElement(ActivityLog, {
        key: currentSession.id,
        index: index,
        locale: this.props.locale,
        currentSession: currentSession,
        submitRevoke: this.submitRevoke
      }));
      return array;
    }, []);
    const content = /*#__PURE__*/react.createElement("form", {
      role: "form"
    }, activityList);
    return /*#__PURE__*/react.createElement(Modal/* default */.Z, {
      dialogClassName: "a11y__modal modal--scroll",
      show: this.state.show,
      onHide: this.onHide,
      onExited: this.props.onHide,
      bsSize: "large",
      role: "dialog",
      "aria-labelledby": "activityLogModalLabel"
    }, /*#__PURE__*/react.createElement(Modal/* default.Header */.Z.Header, {
      closeButton: true
    }, /*#__PURE__*/react.createElement(Modal/* default.Title */.Z.Title, {
      componentClass: "h1",
      id: "activityLogModalLabel"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "activity_log.activeSessions",
      defaultMessage: "Active Sessions"
    }))), /*#__PURE__*/react.createElement(Modal/* default.Body */.Z.Body, null, /*#__PURE__*/react.createElement("p", {
      className: "session-help-text"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "activity_log.sessionsDescription",
      defaultMessage: "Sessions are created when you log in through a new browser on a device. Sessions let you use Mattermost without having to log in again for a time period specified by the system administrator. To end the session sooner, use the 'Log Out' button."
    })), content), /*#__PURE__*/react.createElement(Modal/* default.Footer */.Z.Footer, {
      className: "modal-footer--invisible"
    }, /*#__PURE__*/react.createElement("button", {
      id: "closeModalButton",
      type: "button",
      className: "btn btn-link"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "general_button.close",
      defaultMessage: "Close"
    }))));
  }

}

activity_log_modal_defineProperty(ActivityLogModal, "propTypes", {
  actions: prop_types_default().shape({
    getSessions: (prop_types_default()).func.isRequired,
    revokeSession: (prop_types_default()).func.isRequired
  }).isRequired,
  onHide: (prop_types_default()).func.isRequired,
  locale: (prop_types_default()).string.isRequired,
  sessions: (prop_types_default()).array.isRequired,
  currentUserId: (prop_types_default()).string.isRequired
});
;// CONCATENATED MODULE: ./components/activity_log_modal/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function activity_log_modal_mapStateToProps(state) {
  return {
    currentUserId: (0,users/* getCurrentUserId */.rc)(state),
    sessions: (0,users/* getUserSessions */.c7)(state),
    locale: (0,selectors_i18n/* getCurrentLocale */.B)(state)
  };
}

function activity_log_modal_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      getSessions: actions_users/* getSessions */.Rx,
      revokeSession: actions_users/* revokeSession */._1
    }, dispatch)
  };
}

/* harmony default export */ const activity_log_modal = ((0,es.connect)(activity_log_modal_mapStateToProps, activity_log_modal_mapDispatchToProps)(ActivityLogModal));
// EXTERNAL MODULE: ./components/toggle_modal_button/index.js + 1 modules
var toggle_modal_button = __webpack_require__(81642);
// EXTERNAL MODULE: ./actions/views/mfa.js
var mfa = __webpack_require__(63470);
// EXTERNAL MODULE: ./utils/browser_history.jsx
var browser_history = __webpack_require__(89262);
;// CONCATENATED MODULE: ./components/user_settings/security/mfa_section/mfa_section.tsx



function mfa_section_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const SECTION_MFA = 'mfa';
class MfaSection extends react.PureComponent {
  constructor(props) {
    super(props);

    mfa_section_defineProperty(this, "setupMfa", e => {
      e.preventDefault();
      browser_history/* browserHistory.push */.m.push('/mfa/setup');
    });

    mfa_section_defineProperty(this, "removeMfa", async e => {
      e.preventDefault();
      const {
        error
      } = await this.props.actions.deactivateMfa();

      if (error) {
        this.setState({
          serverError: error.message
        });
        return;
      }

      if (this.props.mfaEnforced) {
        browser_history/* browserHistory.push */.m.push('/mfa/setup');
        return;
      }

      this.props.updateSection('');
      this.setState({
        serverError: null
      });
    });

    mfa_section_defineProperty(this, "renderTitle", () => {
      return /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.mfa.title",
        defaultMessage: "Multi-factor Authentication"
      });
    });

    mfa_section_defineProperty(this, "renderDescription", () => {
      if (this.props.mfaActive) {
        return /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.active",
          defaultMessage: "Active"
        });
      }

      return /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.security.inactive",
        defaultMessage: "Inactive"
      });
    });

    mfa_section_defineProperty(this, "renderContent", () => {
      let content;

      if (this.props.mfaActive) {
        let buttonText;

        if (this.props.mfaEnforced) {
          buttonText = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.mfa.reset",
            defaultMessage: "Reset MFA on Account"
          });
        } else {
          buttonText = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.mfa.remove",
            defaultMessage: "Remove MFA from Account"
          });
        }

        content = /*#__PURE__*/react.createElement("a", {
          className: "btn btn-primary",
          href: "#",
          onClick: this.removeMfa
        }, buttonText);
      } else {
        content = /*#__PURE__*/react.createElement("a", {
          className: "btn btn-primary",
          href: "#",
          onClick: this.setupMfa
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.mfa.add",
          defaultMessage: "Add MFA to Account"
        }));
      }

      return /*#__PURE__*/react.createElement("div", {
        className: "pt-2"
      }, content, /*#__PURE__*/react.createElement("br", null));
    });

    mfa_section_defineProperty(this, "renderHelpText", () => {
      if (this.props.mfaActive) {
        if (this.props.mfaEnforced) {
          return /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.mfa.requiredHelp",
            defaultMessage: "Multi-factor authentication is required on this server. Resetting is only recommended when you need to switch code generation to a new mobile device. You will be required to set it up again immediately."
          });
        }

        return /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.mfa.removeHelp",
          defaultMessage: "Removing multi-factor authentication means you will no longer require a phone-based passcode to sign-in to your account."
        });
      }

      return /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.mfa.addHelp",
        defaultMessage: "Adding multi-factor authentication will make your account more secure by requiring a code from your mobile phone each time you sign in."
      });
    });

    this.state = {
      serverError: null
    };
  }

  render() {
    const title = this.renderTitle();

    if (!this.props.mfaAvailable) {
      return null;
    }

    if (!this.props.active) {
      return /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: title,
        describe: this.renderDescription(),
        section: SECTION_MFA,
        updateSection: this.props.updateSection
      });
    }

    return /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
      title: title,
      inputs: this.renderContent(),
      extraInfo: this.renderHelpText(),
      serverError: this.state.serverError,
      updateSection: this.props.updateSection,
      width: "medium"
    });
  }

}

mfa_section_defineProperty(MfaSection, "propTypes", {
  active: (prop_types_default()).bool.isRequired,
  mfaActive: (prop_types_default()).bool.isRequired,
  mfaAvailable: (prop_types_default()).bool.isRequired,
  mfaEnforced: (prop_types_default()).bool.isRequired,
  updateSection: (prop_types_default()).func.isRequired,
  actions: prop_types_default().shape({
    deactivateMfa: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/user_settings/security/mfa_section/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








function mfa_section_mapStateToProps(state) {
  const license = (0,general/* getLicense */.lJ)(state);
  const config = (0,general/* getConfig */.iE)(state);
  const mfaLicensed = license && license.IsLicensed === 'true' && license.MFA === 'true';
  const mfaEnabled = config.EnableMultifactorAuthentication === 'true';
  const mfaEnforced = mfaLicensed && config.EnforceMultifactorAuthentication === 'true';
  const user = (0,users/* getCurrentUser */.ts)(state);
  let mfaActive = false;
  let mfaAvailable = false;

  if (user) {
    mfaActive = user.mfa_active;
    mfaAvailable = mfaEnabled && (user.auth_service === '' || user.auth_service === constants/* default.LDAP_SERVICE */.ZP.LDAP_SERVICE);
  }

  return {
    mfaActive,
    mfaAvailable,
    mfaEnforced
  };
}

function mfa_section_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      deactivateMfa: mfa/* deactivateMfa */.sk
    }, dispatch)
  };
}

/* harmony default export */ const mfa_section = ((0,es.connect)(mfa_section_mapStateToProps, mfa_section_mapDispatchToProps)(MfaSection));
// EXTERNAL MODULE: ./components/save_button.tsx
var save_button = __webpack_require__(58657);
// EXTERNAL MODULE: ./components/widgets/icons/fa_warning_icon.tsx
var fa_warning_icon = __webpack_require__(37668);
;// CONCATENATED MODULE: ./components/user_settings/security/user_access_token_section/user_access_token_section.tsx




function user_access_token_section_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.













const SECTION_TOKENS = 'tokens';
const TOKEN_CREATING = 'creating';
const TOKEN_CREATED = 'created';
const TOKEN_NOT_CREATING = 'not_creating';
class UserAccessTokenSection extends react.PureComponent {
  constructor(props) {
    super(props);

    user_access_token_section_defineProperty(this, "newtokendescriptionRef", void 0);

    user_access_token_section_defineProperty(this, "startCreatingToken", () => {
      this.setState({
        tokenCreationState: TOKEN_CREATING
      });
    });

    user_access_token_section_defineProperty(this, "stopCreatingToken", () => {
      this.setState({
        tokenCreationState: TOKEN_NOT_CREATING,
        saving: false
      });
    });

    user_access_token_section_defineProperty(this, "handleCreateToken", async () => {
      this.handleCancelConfirm();
      const description = this.newtokendescriptionRef ? this.newtokendescriptionRef.current.value : '';

      if (description === '') {
        this.setState({
          tokenError: utils/* localizeMessage */._u('user.settings.tokens.nameRequired', 'Please enter a description.')
        });
        return;
      }

      this.setState({
        tokenError: '',
        saving: true
      });
      this.props.setRequireConfirm(true, this.confirmCopyToken);
      const userId = this.props.user ? this.props.user.id : '';
      const {
        data,
        error
      } = await this.props.actions.createUserAccessToken(userId, description);

      if (data && this.state.tokenCreationState === TOKEN_CREATING) {
        this.setState({
          tokenCreationState: TOKEN_CREATED,
          newToken: data,
          saving: false
        });
      } else if (error) {
        this.setState({
          serverError: error.message,
          saving: false
        });
      }
    });

    user_access_token_section_defineProperty(this, "confirmCopyToken", confirmAction => {
      this.setState({
        showConfirmModal: true,
        confirmTitle: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.tokens.confirmCopyTitle",
          defaultMessage: "Copied Your Token?"
        }),
        confirmMessage: state => /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.tokens.confirmCopyMessage",
          defaultMessage: "Make sure you have copied and saved the access token below. You won't be able to see it again!"
        }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), state.tokenCreationState === TOKEN_CREATING ? /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("strong", {
          className: "word-break--all"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.tokens.token",
          defaultMessage: "Access Token: "
        })), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.tokens.tokenLoading",
          defaultMessage: "Loading..."
        })) : /*#__PURE__*/react.createElement("strong", {
          className: "word-break--all"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.tokens.token",
          defaultMessage: "Access Token: "
        }), state.newToken.token)),
        confirmButton: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.tokens.confirmCopyButton",
          defaultMessage: "Yes, I have copied the token"
        }),
        confirmComplete: () => {
          this.handleCancelConfirm();
          confirmAction();
        },
        confirmHideCancel: true
      });
    });

    user_access_token_section_defineProperty(this, "handleCancelConfirm", () => {
      this.setState({
        showConfirmModal: false,
        confirmTitle: null,
        confirmMessage: null,
        confirmButton: null,
        confirmComplete: null,
        confirmHideCancel: false
      });
    });

    user_access_token_section_defineProperty(this, "confirmCreateToken", () => {
      if (!user_utils/* isSystemAdmin */.$O(this.props.user.roles)) {
        this.handleCreateToken();
        return;
      }

      this.setState({
        showConfirmModal: true,
        confirmTitle: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.tokens.confirmCreateTitle",
          defaultMessage: "Create System Admin Personal Access Token"
        }),
        confirmMessage: () => /*#__PURE__*/react.createElement("div", {
          className: "alert alert-danger"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.tokens.confirmCreateMessage",
          defaultMessage: "You are generating a personal access token with System Admin permissions. Are you sure want to create this token?"
        })),
        confirmButton: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.tokens.confirmCreateButton",
          defaultMessage: "Yes, Create"
        }),
        confirmComplete: () => {
          this.handleCreateToken();
          (0,telemetry_actions/* trackEvent */.L9)('settings', 'system_admin_create_user_access_token');
        }
      });
    });

    user_access_token_section_defineProperty(this, "saveTokenKeyPress", e => {
      if (utils/* isKeyPressed */.pD(e, constants/* default.KeyCodes.ENTER */.ZP.KeyCodes.ENTER)) {
        this.confirmCreateToken();
      }
    });

    user_access_token_section_defineProperty(this, "confirmRevokeToken", tokenId => {
      const token = this.props.userAccessTokens[tokenId];
      this.setState({
        showConfirmModal: true,
        confirmTitle: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.tokens.confirmDeleteTitle",
          defaultMessage: "Delete Token?"
        }),
        confirmMessage: () => /*#__PURE__*/react.createElement("div", {
          className: "alert alert-danger"
        }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
          id: "user.settings.tokens.confirmDeleteMessage",
          defaultMessage: "Any integrations using this token will no longer be able to access the Mattermost API. You cannot undo this action. \\n \\nAre you sure want to delete the **{description}** token?",
          values: {
            description: token.description
          }
        })),
        confirmButton: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.tokens.confirmDeleteButton",
          defaultMessage: "Yes, Delete"
        }),
        confirmComplete: () => {
          this.revokeToken(tokenId);
          (0,telemetry_actions/* trackEvent */.L9)('settings', 'revoke_user_access_token');
        }
      });
    });

    user_access_token_section_defineProperty(this, "revokeToken", async tokenId => {
      const {
        error
      } = await this.props.actions.revokeUserAccessToken(tokenId);

      if (error) {
        this.setState({
          serverError: error.message
        });
      }

      this.handleCancelConfirm();
    });

    user_access_token_section_defineProperty(this, "activateToken", async tokenId => {
      const {
        error
      } = await this.props.actions.enableUserAccessToken(tokenId);

      if (error) {
        this.setState({
          serverError: error.message
        });
      } else {
        (0,telemetry_actions/* trackEvent */.L9)('settings', 'activate_user_access_token');
      }
    });

    user_access_token_section_defineProperty(this, "deactivateToken", async tokenId => {
      const {
        error
      } = await this.props.actions.disableUserAccessToken(tokenId);

      if (error) {
        this.setState({
          serverError: error.message
        });
      } else {
        (0,telemetry_actions/* trackEvent */.L9)('settings', 'deactivate_user_access_token');
      }
    });

    this.state = {
      active: this.props.active,
      showConfirmModal: false,
      newToken: null,
      tokenCreationState: TOKEN_NOT_CREATING,
      tokenError: '',
      serverError: null,
      saving: false
    };
    this.newtokendescriptionRef = /*#__PURE__*/react.createRef();
  }

  componentDidMount() {
    this.props.actions.clearUserAccessTokens();
    const userId = this.props.user ? this.props.user.id : '';
    this.props.actions.getUserAccessTokensForUser(userId, 0, 200);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.active && prevState.active) {
      return {
        active: nextProps.active,
        showConfirmModal: false,
        newToken: null,
        tokenCreationState: TOKEN_NOT_CREATING,
        tokenError: '',
        serverError: null,
        saving: false
      };
    }

    return {
      active: nextProps.active
    };
  }

  render() {
    let tokenListClass = '';

    if (!this.props.active) {
      const describe = utils/* localizeMessage */._u('user.settings.tokens.clickToEdit', "Click 'Edit' to manage your personal access tokens");
      return /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: utils/* localizeMessage */._u('user.settings.tokens.title', 'Personal Access Tokens'),
        describe: describe,
        section: SECTION_TOKENS,
        updateSection: this.props.updateSection
      });
    }

    const tokenList = [];
    Object.values(this.props.userAccessTokens).forEach(token => {
      if (this.state.newToken && this.state.newToken.id === token.id) {
        return;
      }

      let activeLink;
      let activeStatus;

      if (token.is_active) {
        activeLink = /*#__PURE__*/react.createElement("a", {
          id: token.id + '_deactivate',
          href: "#",
          onClick: e => {
            e.preventDefault();
            this.deactivateToken(token.id);
          }
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.tokens.deactivate",
          defaultMessage: "Disable"
        }));
      } else {
        activeStatus = /*#__PURE__*/react.createElement("span", {
          className: "has-error setting-box__inline-error"
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.tokens.deactivatedWarning",
          defaultMessage: "(Disabled)"
        }));
        activeLink = /*#__PURE__*/react.createElement("a", {
          id: token.id + '_activate',
          href: "#",
          onClick: e => {
            e.preventDefault();
            this.activateToken(token.id);
          }
        }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.tokens.activate",
          defaultMessage: "Enable"
        }));
      }

      tokenList.push( /*#__PURE__*/react.createElement("div", {
        key: token.id,
        className: "setting-box__item"
      }, /*#__PURE__*/react.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.tokens.tokenDesc",
        defaultMessage: "Token Description: "
      }), token.description, activeStatus), /*#__PURE__*/react.createElement("div", {
        className: "setting-box__token-id whitespace--nowrap overflow--ellipsis"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.tokens.tokenId",
        defaultMessage: "Token ID: "
      }), token.id), /*#__PURE__*/react.createElement("div", null, activeLink, ' - ', /*#__PURE__*/react.createElement("a", {
        id: token.id + '_delete',
        href: "#",
        onClick: e => {
          e.preventDefault();
          this.confirmRevokeToken(token.id);
        }
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.tokens.delete",
        defaultMessage: "Delete"
      }))), /*#__PURE__*/react.createElement("hr", {
        className: "mb-3 mt-3"
      })));
    });
    let noTokenText;

    if (tokenList.length === 0) {
      noTokenText = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        key: "notokens",
        id: "user.settings.tokens.userAccessTokensNone",
        defaultMessage: "No personal access tokens."
      });
    }

    let extraInfo;

    if ((0,user_agent/* isMobile */.tq)()) {
      extraInfo = /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.tokens.description_mobile",
        defaultMessage: "<linktokens>Personal access tokens</linktokens> function similarly to session tokens and can be used by integrations to <linkAPI>authenticate against the REST API</linkAPI>. Create new tokens on your desktop.",
        values: {
          linktokens: msg => /*#__PURE__*/react.createElement("a", {
            href: "https://developers.mattermost.com/integrate/admin-guide/admin-personal-access-token/",
            target: "_blank",
            rel: "noreferrer"
          }, msg),
          linkAPI: msg => /*#__PURE__*/react.createElement("a", {
            href: "https://api.mattermost.com/#tag/authentication",
            target: "_blank",
            rel: "noreferrer"
          }, msg)
        }
      }));
    } else {
      extraInfo = /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.tokens.description",
        defaultMessage: "<linkTokens>Personal access tokens</linkTokens> function similarly to session tokens and can be used by integrations to <linkAPI>authenticate against the REST API</linkAPI>.",
        values: {
          linkTokens: msg => /*#__PURE__*/react.createElement("a", {
            href: "https://developers.mattermost.com/integrate/admin-guide/admin-personal-access-token/",
            target: "_blank",
            rel: "noreferrer"
          }, msg),
          linkApi: msg => /*#__PURE__*/react.createElement("a", {
            href: "https://api.mattermost.com/#tag/authentication",
            target: "_blank",
            rel: "noreferrer"
          }, msg)
        }
      }));
    }

    let newTokenSection;

    if (this.state.tokenCreationState === TOKEN_CREATING) {
      newTokenSection = /*#__PURE__*/react.createElement("div", {
        className: "pl-3"
      }, /*#__PURE__*/react.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react.createElement("label", {
        className: "col-sm-auto control-label pr-3"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.tokens.name",
        defaultMessage: "Token Description: "
      })), /*#__PURE__*/react.createElement("div", {
        className: "col-sm-5"
      }, /*#__PURE__*/react.createElement("input", {
        autoFocus: true,
        ref: this.newtokendescriptionRef,
        className: "form-control",
        type: "text",
        maxLength: 64,
        onKeyPress: this.saveTokenKeyPress
      }))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
        className: "pt-3"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.tokens.nameHelp",
        defaultMessage: "Enter a description for your token to remember what it does."
      })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", {
        id: "clientError",
        className: "has-error mt-2 mb-2"
      }, this.state.tokenError)), /*#__PURE__*/react.createElement(save_button/* default */.Z, {
        btnClass: "btn-primary",
        savingMessage: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.tokens.save",
          defaultMessage: "Save"
        }),
        saving: this.state.saving,
        onClick: this.confirmCreateToken
      }), /*#__PURE__*/react.createElement("button", {
        className: "btn btn-link",
        onClick: this.stopCreatingToken
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.tokens.cancel",
        defaultMessage: "Cancel"
      }))));
    } else if (this.state.tokenCreationState === TOKEN_CREATED) {
      if (tokenList.length === 0) {
        tokenListClass = ' hidden';
      }

      newTokenSection = /*#__PURE__*/react.createElement("div", {
        className: "alert alert-warning"
      }, /*#__PURE__*/react.createElement(fa_warning_icon/* default */.Z, {
        additionalClassName: "mr-2"
      }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.tokens.copy",
        defaultMessage: "Please copy the access token below. You won't be able to see it again!"
      }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.tokens.name",
        defaultMessage: "Token Description: "
      }), this.state.newToken.description), /*#__PURE__*/react.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.tokens.id",
        defaultMessage: "Token ID: "
      }), this.state.newToken.id), /*#__PURE__*/react.createElement("strong", {
        className: "word-break--all"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.tokens.token",
        defaultMessage: "Access Token: "
      }), this.state.newToken.token));
    } else {
      newTokenSection = /*#__PURE__*/react.createElement("a", {
        className: "btn btn-primary",
        href: "#",
        onClick: this.startCreatingToken
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.tokens.create",
        defaultMessage: "Create Token"
      }));
    }

    const inputs = [];
    inputs.push( /*#__PURE__*/react.createElement("div", {
      key: "tokensSetting",
      className: "pt-2"
    }, /*#__PURE__*/react.createElement("div", {
      key: "tokenList"
    }, /*#__PURE__*/react.createElement("div", {
      className: 'alert alert-transparent' + tokenListClass
    }, tokenList, noTokenText), newTokenSection)));
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
      title: utils/* localizeMessage */._u('user.settings.tokens.title', 'Personal Access Tokens'),
      inputs: inputs,
      extraInfo: extraInfo,
      infoPosition: "top",
      serverError: this.state.serverError,
      updateSection: this.props.updateSection,
      width: "full",
      saving: this.state.saving,
      cancelButtonText: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.security.close",
        defaultMessage: "Close"
      })
    }), /*#__PURE__*/react.createElement(confirm_modal/* default */.Z, {
      title: this.state.confirmTitle,
      message: this.state.confirmMessage ? this.state.confirmMessage(this.state) : null,
      confirmButtonText: this.state.confirmButton,
      show: this.state.showConfirmModal,
      onConfirm: this.state.confirmComplete || (() => null),
      onCancel: this.handleCancelConfirm,
      hideCancel: this.state.confirmHideCancel
    }));
  }

}
/* eslint-enable react/no-string-refs */

user_access_token_section_defineProperty(UserAccessTokenSection, "propTypes", {
  active: (prop_types_default()).bool,
  updateSection: (prop_types_default()).func.isRequired,
  userAccessTokens: prop_types_default().objectOf(prop_types_default().shape({
    description: (prop_types_default()).string.isRequired,
    id: (prop_types_default()).string.isRequired,
    is_active: (prop_types_default()).bool.isRequired
  })).isRequired,
  setRequireConfirm: (prop_types_default()).func.isRequired,
  actions: prop_types_default().shape({
    getUserAccessTokensForUser: (prop_types_default()).func.isRequired,
    createUserAccessToken: (prop_types_default()).func.isRequired,
    revokeUserAccessToken: (prop_types_default()).func.isRequired,
    enableUserAccessToken: (prop_types_default()).func.isRequired,
    disableUserAccessToken: (prop_types_default()).func.isRequired,
    clearUserAccessTokens: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/user_settings/security/user_access_token_section/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function user_access_token_section_mapStateToProps(state) {
  return {
    userAccessTokens: state.entities.users.myUserAccessTokens
  };
}

function user_access_token_section_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      getUserAccessTokensForUser: actions_users/* getUserAccessTokensForUser */.fh,
      createUserAccessToken: actions_users/* createUserAccessToken */.CR,
      revokeUserAccessToken: actions_users/* revokeUserAccessToken */.ei,
      enableUserAccessToken: actions_users/* enableUserAccessToken */.q9,
      disableUserAccessToken: actions_users/* disableUserAccessToken */.Wv,
      clearUserAccessTokens: actions_users/* clearUserAccessTokens */.RZ
    }, dispatch)
  };
}

/* harmony default export */ const user_access_token_section = ((0,es.connect)(user_access_token_section_mapStateToProps, user_access_token_section_mapDispatchToProps)(UserAccessTokenSection));
;// CONCATENATED MODULE: ./components/user_settings/security/user_settings_security.tsx





function user_settings_security_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.















const user_settings_security_SECTION_MFA = 'mfa';
const SECTION_PASSWORD = 'password';
const SECTION_SIGNIN = 'signin';
const SECTION_APPS = 'apps';
const user_settings_security_SECTION_TOKENS = 'tokens';
class SecurityTab extends react.PureComponent {
  constructor(props) {
    super(props);

    user_settings_security_defineProperty(this, "loadAuthorizedOAuthApps", async () => {
      const res = await this.props.actions.getAuthorizedOAuthApps();

      if ('data' in res) {
        const {
          data
        } = res;
        this.setState({
          authorizedApps: data,
          serverError: null
        }); //eslint-disable-line react/no-did-mount-set-state
      } else if ('error' in res) {
        const {
          error
        } = res;
        this.setState({
          serverError: error.message
        }); //eslint-disable-line react/no-did-mount-set-state
      }
    });

    user_settings_security_defineProperty(this, "submitPassword", async () => {
      const user = this.props.user;
      const currentPassword = this.state.currentPassword;
      const newPassword = this.state.newPassword;
      const confirmPassword = this.state.confirmPassword;

      if (currentPassword === '') {
        this.setState({
          passwordError: utils/* localizeMessage */._u('user.settings.security.currentPasswordError', 'Please enter your current password.'),
          serverError: ''
        });
        return;
      }

      const {
        valid,
        error
      } = utils/* isValidPassword */.eW(newPassword, this.props.passwordConfig);

      if (!valid && error) {
        this.setState({
          passwordError: error,
          serverError: ''
        });
        return;
      }

      if (newPassword !== confirmPassword) {
        const defaultState = Object.assign(this.getDefaultState(), {
          passwordError: utils/* localizeMessage */._u('user.settings.security.passwordMatchError', 'The new passwords you entered do not match.'),
          serverError: ''
        });
        this.setState(defaultState);
        return;
      }

      this.setState({
        savingPassword: true
      });
      const res = await this.props.actions.updateUserPassword(user.id, currentPassword, newPassword);

      if ('data' in res) {
        this.props.updateSection('');
        this.props.actions.getMe();
        this.setState(this.getDefaultState());
      } else if ('error' in res) {
        const {
          error: err
        } = res;
        const state = this.getDefaultState();

        if (err.message) {
          state.serverError = err.message;
        } else {
          state.serverError = err;
        }

        state.passwordError = '';
        this.setState(state);
      }
    });

    user_settings_security_defineProperty(this, "updateCurrentPassword", e => {
      this.setState({
        currentPassword: e.target.value
      });
    });

    user_settings_security_defineProperty(this, "updateNewPassword", e => {
      this.setState({
        newPassword: e.target.value
      });
    });

    user_settings_security_defineProperty(this, "updateConfirmPassword", e => {
      this.setState({
        confirmPassword: e.target.value
      });
    });

    user_settings_security_defineProperty(this, "deauthorizeApp", async e => {
      e.preventDefault();
      const appId = e.currentTarget.getAttribute('data-app');
      const res = await this.props.actions.deauthorizeOAuthApp(appId);

      if ('data' in res) {
        const authorizedApps = this.state.authorizedApps.filter(app => {
          return app.id !== appId;
        });
        this.setState({
          authorizedApps,
          serverError: null
        });
      } else if ('error' in res) {
        const {
          error
        } = res;
        this.setState({
          serverError: error.message
        });
      }
    });

    user_settings_security_defineProperty(this, "handleUpdateSection", section => {
      if (section) {
        this.props.updateSection(section);
      } else {
        switch (this.props.activeSection) {
          case user_settings_security_SECTION_MFA:
          case SECTION_SIGNIN:
          case user_settings_security_SECTION_TOKENS:
          case SECTION_APPS:
            this.setState({
              serverError: null
            });
            break;

          case SECTION_PASSWORD:
            this.setState({
              currentPassword: '',
              newPassword: '',
              confirmPassword: '',
              serverError: null,
              passwordError: null
            });
            break;

          default:
        }

        this.props.updateSection('');
      }
    });

    user_settings_security_defineProperty(this, "createPasswordSection", () => {
      if (this.props.activeSection === SECTION_PASSWORD) {
        const inputs = [];
        let submit;

        if (this.props.user.auth_service === '') {
          submit = this.submitPassword;
          inputs.push( /*#__PURE__*/react.createElement("div", {
            key: "currentPasswordUpdateForm",
            className: "form-group"
          }, /*#__PURE__*/react.createElement("label", {
            className: "col-sm-5 control-label"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.security.currentPassword",
            defaultMessage: "Current Password"
          })), /*#__PURE__*/react.createElement("div", {
            className: "col-sm-7"
          }, /*#__PURE__*/react.createElement("input", {
            id: "currentPassword",
            autoFocus: true,
            className: "form-control",
            type: "password",
            onChange: this.updateCurrentPassword,
            value: this.state.currentPassword,
            "aria-label": utils/* localizeMessage */._u('user.settings.security.currentPassword', 'Current Password')
          }))));
          inputs.push( /*#__PURE__*/react.createElement("div", {
            key: "newPasswordUpdateForm",
            className: "form-group"
          }, /*#__PURE__*/react.createElement("label", {
            className: "col-sm-5 control-label"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.security.newPassword",
            defaultMessage: "New Password"
          })), /*#__PURE__*/react.createElement("div", {
            className: "col-sm-7"
          }, /*#__PURE__*/react.createElement("input", {
            id: "newPassword",
            className: "form-control",
            type: "password",
            onChange: this.updateNewPassword,
            value: this.state.newPassword,
            "aria-label": utils/* localizeMessage */._u('user.settings.security.newPassword', 'New Password')
          }))));
          inputs.push( /*#__PURE__*/react.createElement("div", {
            key: "retypeNewPasswordUpdateForm",
            className: "form-group"
          }, /*#__PURE__*/react.createElement("label", {
            className: "col-sm-5 control-label"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.security.retypePassword",
            defaultMessage: "Retype New Password"
          })), /*#__PURE__*/react.createElement("div", {
            className: "col-sm-7"
          }, /*#__PURE__*/react.createElement("input", {
            id: "confirmPassword",
            className: "form-control",
            type: "password",
            onChange: this.updateConfirmPassword,
            value: this.state.confirmPassword,
            "aria-label": utils/* localizeMessage */._u('user.settings.security.retypePassword', 'Retype New Password')
          }))));
        } else if (this.props.user.auth_service === constants/* default.GITLAB_SERVICE */.ZP.GITLAB_SERVICE) {
          inputs.push( /*#__PURE__*/react.createElement("div", {
            key: "oauthEmailInfo",
            className: "form-group"
          }, /*#__PURE__*/react.createElement("div", {
            className: "pb-3"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.security.passwordGitlabCantUpdate",
            defaultMessage: "Login occurs through GitLab. Password cannot be updated."
          }))));
        } else if (this.props.user.auth_service === constants/* default.LDAP_SERVICE */.ZP.LDAP_SERVICE) {
          inputs.push( /*#__PURE__*/react.createElement("div", {
            key: "oauthEmailInfo",
            className: "form-group"
          }, /*#__PURE__*/react.createElement("div", {
            className: "pb-3"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.security.passwordLdapCantUpdate",
            defaultMessage: "Login occurs through AD/LDAP. Password cannot be updated."
          }))));
        } else if (this.props.user.auth_service === constants/* default.SAML_SERVICE */.ZP.SAML_SERVICE) {
          inputs.push( /*#__PURE__*/react.createElement("div", {
            key: "oauthEmailInfo",
            className: "form-group"
          }, /*#__PURE__*/react.createElement("div", {
            className: "pb-3"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.security.passwordSamlCantUpdate",
            defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so through your login provider."
          }))));
        } else if (this.props.user.auth_service === constants/* default.GOOGLE_SERVICE */.ZP.GOOGLE_SERVICE) {
          inputs.push( /*#__PURE__*/react.createElement("div", {
            key: "oauthEmailInfo",
            className: "form-group"
          }, /*#__PURE__*/react.createElement("div", {
            className: "pb-3"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.security.passwordGoogleCantUpdate",
            defaultMessage: "Login occurs through Google Apps. Password cannot be updated."
          }))));
        } else if (this.props.user.auth_service === constants/* default.OFFICE365_SERVICE */.ZP.OFFICE365_SERVICE) {
          inputs.push( /*#__PURE__*/react.createElement("div", {
            key: "oauthEmailInfo",
            className: "form-group"
          }, /*#__PURE__*/react.createElement("div", {
            className: "pb-3"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.security.passwordOffice365CantUpdate",
            defaultMessage: "Login occurs through Office 365. Password cannot be updated."
          }))));
        }

        return /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
          title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.security.password",
            defaultMessage: "Password"
          }),
          inputs: inputs,
          submit: submit,
          saving: this.state.savingPassword,
          serverError: this.state.serverError,
          clientError: this.state.passwordError,
          updateSection: this.handleUpdateSection
        });
      }

      let describe;

      if (this.props.user.auth_service === '') {
        const d = new Date(this.props.user.last_password_update);
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.lastUpdated",
          defaultMessage: "Last updated {date} at {time}",
          values: {
            date: /*#__PURE__*/react.createElement(lib.FormattedDate, {
              value: d,
              day: "2-digit",
              month: "short",
              year: "numeric"
            }),
            time: /*#__PURE__*/react.createElement(lib.FormattedTime, {
              value: d,
              hour12: !this.props.militaryTime,
              hour: "2-digit",
              minute: "2-digit"
            })
          }
        });
      } else if (this.props.user.auth_service === constants/* default.GITLAB_SERVICE */.ZP.GITLAB_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.loginGitlab",
          defaultMessage: "Login done through GitLab"
        });
      } else if (this.props.user.auth_service === constants/* default.FACEBOOK_SERVICE */.ZP.FACEBOOK_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.loginFacebook",
          defaultMessage: "Login done through Facebook"
        });
      } else if (this.props.user.auth_service === constants/* default.LINKEDIN_SERVICE */.ZP.LINKEDIN_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.loginLinkedIn",
          defaultMessage: "Login done through LinkedIn"
        });
      } else if (this.props.user.auth_service === constants/* default.GITHUB_SERVICE */.ZP.GITHUB_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.loginGitHub",
          defaultMessage: "Login done through GitHub"
        });
      } else if (this.props.user.auth_service === constants/* default.TWITTER_SERVICE */.ZP.TWITTER_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.loginTwitter",
          defaultMessage: "Login done through Twitter"
        });
      } else if (this.props.user.auth_service === constants/* default.LDAP_SERVICE */.ZP.LDAP_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.loginLdap",
          defaultMessage: "Login done through AD/LDAP"
        });
      } else if (this.props.user.auth_service === constants/* default.SAML_SERVICE */.ZP.SAML_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.loginSaml",
          defaultMessage: "Login done through SAML"
        });
      } else if (this.props.user.auth_service === constants/* default.GOOGLE_SERVICE */.ZP.GOOGLE_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.loginGoogle",
          defaultMessage: "Login done through Google Apps"
        });
      } else if (this.props.user.auth_service === constants/* default.OFFICE365_SERVICE */.ZP.OFFICE365_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.loginOffice365",
          defaultMessage: "Login done through Office 365"
        });
      }

      return /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.password",
          defaultMessage: "Password"
        }),
        describe: describe,
        section: SECTION_PASSWORD,
        updateSection: this.handleUpdateSection
      });
    });

    user_settings_security_defineProperty(this, "createSignInSection", () => {
      const user = this.props.user;

      if (this.props.activeSection === SECTION_SIGNIN) {
        let emailOption;
        let gitlabOption;
        let facebookOption;
        let linkedinOption;
        let githubOption;
        let googleOption;
        let office365Option;
        let openidOption;
        let ldapOption;
        let samlOption;

        if (user.auth_service === '') {
          if (this.props.enableSignUpWithGoogle) {
            googleOption = /*#__PURE__*/react.createElement("div", {
              className: "pb-3"
            }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + constants/* default.GOOGLE_SERVICE */.ZP.GOOGLE_SERVICE
            }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.security.switchGoogle",
              defaultMessage: "Switch to Using Google SSO"
            })), /*#__PURE__*/react.createElement("br", null));
          }

          if (this.props.enableSignUpWithOffice365) {
            office365Option = /*#__PURE__*/react.createElement("div", {
              className: "pb-3"
            }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + constants/* default.OFFICE365_SERVICE */.ZP.OFFICE365_SERVICE
            }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.security.switchOffice365",
              defaultMessage: "Switch to Using Office 365 SSO"
            })), /*#__PURE__*/react.createElement("br", null));
          }

          if (this.props.enableSignUpWithFacebook) {
            facebookOption = /*#__PURE__*/react.createElement("div", {
              className: "pb-3"
            }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + constants/* default.FACEBOOK_SERVICE */.ZP.FACEBOOK_SERVICE
            }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.security.switchFacebook",
              defaultMessage: "Switch to Using Facebook Login"
            })), /*#__PURE__*/react.createElement("br", null));
          }

          if (this.props.enableSignUpWithGitHub) {
            githubOption = /*#__PURE__*/react.createElement("div", {
              className: "pb-3"
            }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + constants/* default.GITHUB_SERVICE */.ZP.GITHUB_SERVICE
            }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.security.switchGitHub",
              defaultMessage: "Switch to Using a GitHub Account"
            })), /*#__PURE__*/react.createElement("br", null));
          }

          if (this.props.enableSignUpWithLinkedIn) {
            linkedinOption = /*#__PURE__*/react.createElement("div", {
              className: "pb-3"
            }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + constants/* default.LINKEDIN_SERVICE */.ZP.LINKEDIN_SERVICE
            }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.security.switchLinkedIn",
              defaultMessage: "Switch to Using a LinkedIn Account"
            })), /*#__PURE__*/react.createElement("br", null));
          }

          if (this.props.enableSignUpWithGitLab) {
            gitlabOption = /*#__PURE__*/react.createElement("div", {
              className: "pb-3"
            }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + constants/* default.GITLAB_SERVICE */.ZP.GITLAB_SERVICE
            }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.security.switchGitlab",
              defaultMessage: "Switch to Using GitLab SSO"
            })), /*#__PURE__*/react.createElement("br", null));
          }

          if (this.props.enableSignUpWithOpenId) {
            openidOption = /*#__PURE__*/react.createElement("div", {
              className: "pb-3"
            }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + constants/* default.OPENID_SERVICE */.ZP.OPENID_SERVICE
            }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.security.switchOpenId",
              defaultMessage: "Switch to Using OpenID SSO"
            })), /*#__PURE__*/react.createElement("br", null));
          }

          if (this.props.enableLdap) {
            ldapOption = /*#__PURE__*/react.createElement("div", {
              className: "pb-3"
            }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
              className: "btn btn-primary",
              to: '/claim/email_to_ldap?email=' + encodeURIComponent(user.email)
            }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.security.switchLdap",
              defaultMessage: "Switch to Using AD/LDAP"
            })), /*#__PURE__*/react.createElement("br", null));
          }

          if (this.props.enableSaml) {
            samlOption = /*#__PURE__*/react.createElement("div", {
              className: "pb-3"
            }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + constants/* default.SAML_SERVICE */.ZP.SAML_SERVICE
            }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.security.switchSaml",
              defaultMessage: "Switch to Using SAML SSO"
            })), /*#__PURE__*/react.createElement("br", null));
          }
        } else if (this.props.enableSignUpWithEmail) {
          let link;

          if (user.auth_service === constants/* default.LDAP_SERVICE */.ZP.LDAP_SERVICE) {
            link = '/claim/ldap_to_email?email=' + encodeURIComponent(user.email);
          } else {
            link = '/claim/oauth_to_email?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service;
          }

          emailOption = /*#__PURE__*/react.createElement("div", {
            className: "pb-3"
          }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
            className: "btn btn-primary",
            to: link
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.security.switchEmail",
            defaultMessage: "Switch to Using Email and Password"
          })), /*#__PURE__*/react.createElement("br", null));
        }

        const inputs = [];
        inputs.push( /*#__PURE__*/react.createElement("div", {
          key: "userSignInOption"
        }, emailOption, googleOption, office365Option, facebookOption, githubOption, linkedinOption, gitlabOption, openidOption, ldapOption, samlOption));
        const extraInfo = /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.oneSignin",
          defaultMessage: "You may only have one sign-in method at a time. Switching sign-in method will send an email notifying you if the change was successful."
        }));
        return /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
          title: utils/* localizeMessage */._u('user.settings.security.method', 'Sign-in Method'),
          extraInfo: extraInfo,
          inputs: inputs,
          serverError: this.state.serverError,
          updateSection: this.handleUpdateSection
        });
      }

      let describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.security.emailPwd",
        defaultMessage: "Email and Password"
      });

      if (this.props.user.auth_service === constants/* default.GITLAB_SERVICE */.ZP.GITLAB_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.gitlab",
          defaultMessage: "GitLab"
        });
      } else if (this.props.user.auth_service === constants/* default.GOOGLE_SERVICE */.ZP.GOOGLE_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.google",
          defaultMessage: "Google"
        });
      } else if (this.props.user.auth_service === constants/* default.OFFICE365_SERVICE */.ZP.OFFICE365_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.office365",
          defaultMessage: "Office 365"
        });
      } else if (this.props.user.auth_service === constants/* default.OPENID_SERVICE */.ZP.OPENID_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.openid",
          defaultMessage: "OpenID"
        });
      } else if (this.props.user.auth_service === constants/* default.LDAP_SERVICE */.ZP.LDAP_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.ldap",
          defaultMessage: "AD/LDAP"
        });
      } else if (this.props.user.auth_service === constants/* default.SAML_SERVICE */.ZP.SAML_SERVICE) {
        describe = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.saml",
          defaultMessage: "SAML"
        });
      }

      return /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: utils/* localizeMessage */._u('user.settings.security.method', 'Sign-in Method'),
        describe: describe,
        section: SECTION_SIGNIN,
        updateSection: this.handleUpdateSection
      });
    });

    user_settings_security_defineProperty(this, "createOAuthAppsSection", () => {
      if (this.props.activeSection === SECTION_APPS) {
        let apps;

        if (this.state.authorizedApps && this.state.authorizedApps.length > 0) {
          apps = this.state.authorizedApps.map(app => {
            const homepage = /*#__PURE__*/react.createElement("a", {
              href: app.homepage,
              target: "_blank",
              rel: "noopener noreferrer"
            }, app.homepage);
            return /*#__PURE__*/react.createElement("div", {
              key: app.id,
              className: "pb-3 authorized-app"
            }, /*#__PURE__*/react.createElement("div", {
              className: "col-sm-10"
            }, /*#__PURE__*/react.createElement("div", {
              className: "authorized-app__name"
            }, app.name, /*#__PURE__*/react.createElement("span", {
              className: "authorized-app__url"
            }, ' -', " ", homepage)), /*#__PURE__*/react.createElement("div", {
              className: "authorized-app__description"
            }, app.description), /*#__PURE__*/react.createElement("div", {
              className: "authorized-app__deauthorize"
            }, /*#__PURE__*/react.createElement("a", {
              href: "#",
              "data-app": app.id,
              onClick: this.deauthorizeApp
            }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
              id: "user.settings.security.deauthorize",
              defaultMessage: "Deauthorize"
            })))), /*#__PURE__*/react.createElement("div", {
              className: "col-sm-2 pull-right"
            }, /*#__PURE__*/react.createElement("img", {
              alt: app.name,
              src: app.icon_url || icon50x50/* default */.Z
            })), /*#__PURE__*/react.createElement("br", null));
          });
        } else {
          apps = /*#__PURE__*/react.createElement("div", {
            className: "pb-3 authorized-app"
          }, /*#__PURE__*/react.createElement("div", {
            className: "setting-list__hint"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.security.noApps",
            defaultMessage: "No OAuth 2.0 Applications are authorized."
          })));
        }

        const inputs = [];
        let wrapperClass;
        let helpText;

        if (Array.isArray(apps)) {
          wrapperClass = 'authorized-apps__wrapper';
          helpText = /*#__PURE__*/react.createElement("div", {
            className: "authorized-apps__help"
          }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.security.oauthAppsHelp",
            defaultMessage: "Applications act on your behalf to access your data based on the permissions you grant them."
          }));
        }

        inputs.push( /*#__PURE__*/react.createElement("div", {
          className: wrapperClass,
          key: "authorizedApps"
        }, apps));
        const title = /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.oauthApps",
          defaultMessage: "OAuth 2.0 Applications"
        }), helpText);
        return /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
          title: title,
          inputs: inputs,
          serverError: this.state.serverError,
          updateSection: this.handleUpdateSection,
          width: "full",
          cancelButtonText: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
            id: "user.settings.security.close",
            defaultMessage: "Close"
          })
        });
      }

      return /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: utils/* localizeMessage */._u('user.settings.security.oauthApps', 'OAuth 2.0 Applications'),
        describe: /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.security.oauthAppsDescription",
          defaultMessage: "Click 'Edit' to manage your OAuth 2.0 Applications"
        }),
        section: SECTION_APPS,
        updateSection: this.handleUpdateSection
      });
    });

    this.state = this.getDefaultState();
  }

  getDefaultState() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      passwordError: '',
      serverError: '',
      tokenError: '',
      authService: this.props.user.auth_service,
      savingPassword: false,
      authorizedApps: []
    };
  }

  componentDidMount() {
    if (this.props.enableOAuthServiceProvider) {
      this.loadAuthorizedOAuthApps();
    }
  }

  render() {
    const user = this.props.user;
    const passwordSection = this.createPasswordSection();
    let numMethods = 0;
    numMethods = this.props.enableSignUpWithGitLab ? numMethods + 1 : numMethods;
    numMethods = this.props.enableSignUpWithGoogle ? numMethods + 1 : numMethods;
    numMethods = this.props.enableSignUpWithOffice365 ? numMethods + 1 : numMethods;
    numMethods = this.props.enableSignUpWithOpenId ? numMethods + 1 : numMethods;
    numMethods = this.props.enableSignUpWithFacebook ? numMethods + 1 : numMethods;
    numMethods = this.props.enableSignUpWithLinkedIn ? numMethods + 1 : numMethods;
    numMethods = this.props.enableSignUpWithGitHub ? numMethods + 1 : numMethods;
    numMethods = this.props.enableLdap ? numMethods + 1 : numMethods;
    numMethods = this.props.enableSaml ? numMethods + 1 : numMethods; // If there are other sign-in methods and either email is enabled or the user's account is email, then allow switching

    let signInSection;

    if ((this.props.enableSignUpWithEmail || user.auth_service === '') && numMethods > 0 && this.props.experimentalEnableAuthenticationTransfer) {
      signInSection = this.createSignInSection();
    }

    let oauthSection;

    if (this.props.enableOAuthServiceProvider) {
      oauthSection = this.createOAuthAppsSection();
    }

    let tokensSection;

    if (this.props.canUseAccessTokens) {
      tokensSection = /*#__PURE__*/react.createElement(user_access_token_section, {
        user: this.props.user,
        active: this.props.activeSection === user_settings_security_SECTION_TOKENS,
        updateSection: this.handleUpdateSection,
        setRequireConfirm: this.props.setRequireConfirm
      });
    }

    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
      className: "modal-header"
    }, /*#__PURE__*/react.createElement("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": utils/* localizeMessage */._u('user.settings.security.close', 'Close'),
      onClick: this.props.closeModal
    }, /*#__PURE__*/react.createElement("span", {
      "aria-hidden": "true"
    }, '×')), /*#__PURE__*/react.createElement("h4", {
      className: "modal-title"
    }, /*#__PURE__*/react.createElement("div", {
      className: "modal-back"
    }, /*#__PURE__*/react.createElement(localized_icon/* default */.Z, {
      className: "fa fa-angle-left",
      title: {
        id: (0,i18n.t)('generic_icons.collapse'),
        defaultMessage: 'Collapse Icon'
      },
      onClick: this.props.collapseModal
    })), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.security.title",
      defaultMessage: "Security Settings"
    }))), /*#__PURE__*/react.createElement("div", {
      className: "user-settings"
    }, /*#__PURE__*/react.createElement("h3", {
      className: "tab-header"
    }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.security.title",
      defaultMessage: "Security Settings"
    })), /*#__PURE__*/react.createElement("div", {
      className: "divider-dark first"
    }), passwordSection, /*#__PURE__*/react.createElement("div", {
      className: "divider-light"
    }), /*#__PURE__*/react.createElement(mfa_section, {
      active: this.props.activeSection === user_settings_security_SECTION_MFA,
      updateSection: this.handleUpdateSection
    }), /*#__PURE__*/react.createElement("div", {
      className: "divider-light"
    }), oauthSection, /*#__PURE__*/react.createElement("div", {
      className: "divider-light"
    }), tokensSection, /*#__PURE__*/react.createElement("div", {
      className: "divider-light"
    }), signInSection, /*#__PURE__*/react.createElement("div", {
      className: "divider-dark"
    }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(toggle_modal_button/* default */.Z, {
      className: "security-links color--link",
      modalId: "access_history",
      dialogType: access_history_modal,
      id: "viewAccessHistory"
    }, /*#__PURE__*/react.createElement(localized_icon/* default */.Z, {
      className: "fa fa-clock-o",
      title: {
        id: (0,i18n.t)('user.settings.security.viewHistory.icon'),
        defaultMessage: 'Access History Icon'
      }
    }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.security.viewHistory",
      defaultMessage: "View Access History"
    })), /*#__PURE__*/react.createElement(toggle_modal_button/* default */.Z, {
      className: "security-links color--link mt-2",
      modalId: "activity_log",
      dialogType: activity_log_modal,
      id: "viewAndLogOutOfActiveSessions"
    }, /*#__PURE__*/react.createElement(localized_icon/* default */.Z, {
      className: "fa fa-clock-o",
      title: {
        id: (0,i18n.t)('user.settings.security.logoutActiveSessions.icon'),
        defaultMessage: 'Active Sessions Icon'
      }
    }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.security.logoutActiveSessions",
      defaultMessage: "View and Log Out of Active Sessions"
    }))));
  }

}

user_settings_security_defineProperty(SecurityTab, "propTypes", {
  activeSection: (prop_types_default()).string,
  updateSection: (prop_types_default()).func.isRequired,
  closeModal: (prop_types_default()).func.isRequired,
  collapseModal: (prop_types_default()).func.isRequired,
  setRequireConfirm: (prop_types_default()).func.isRequired,
  canUseAccessTokens: (prop_types_default()).bool.isRequired,
  enableOAuthServiceProvider: (prop_types_default()).bool.isRequired,
  enableSignUpWithEmail: (prop_types_default()).bool.isRequired,
  enableSignUpWithFacebook: (prop_types_default()).bool.isRequired,
  enableSignUpWithGitHub: (prop_types_default()).bool.isRequired,
  enableSignUpWithGitLab: (prop_types_default()).bool.isRequired,
  enableSignUpWithGoogle: (prop_types_default()).bool.isRequired,
  enableSignUpWithLinkedIn: (prop_types_default()).bool.isRequired,
  enableSignUpWithOffice365: (prop_types_default()).bool.isRequired,
  enableSignUpWithOpenId: (prop_types_default()).bool.isRequired,
  enableLdap: (prop_types_default()).bool.isRequired,
  enableSaml: (prop_types_default()).bool.isRequired,
  experimentalEnableAuthenticationTransfer: (prop_types_default()).bool.isRequired,
  militaryTime: (prop_types_default()).bool.isRequired,
  actions: prop_types_default().shape({
    getMe: (prop_types_default()).func.isRequired,
    updateUserPassword: (prop_types_default()).func.isRequired,
    getAuthorizedOAuthApps: (prop_types_default()).func.isRequired,
    deauthorizeOAuthApp: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/user_settings/security/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.











function security_mapStateToProps(state, ownProps) {
  const config = (0,general/* getConfig */.iE)(state);
  const tokensEnabled = config.EnableUserAccessTokens === 'true';
  const userHasTokenRole = user_utils/* hasUserAccessTokenRole */.$t(ownProps.user.roles) || user_utils/* isSystemAdmin */.$O(ownProps.user.roles);
  const enableOAuthServiceProvider = config.EnableOAuthServiceProvider === 'true';
  const enableSignUpWithEmail = config.EnableSignUpWithEmail === 'true';
  const enableSignUpWithGitLab = config.EnableSignUpWithGitLab === 'true';
  const enableSignUpWithGoogle = config.EnableSignUpWithGoogle === 'true';
  const enableSignUpWithOpenId = config.EnableSignUpWithOpenId === 'true';
  const enableSignUpWithFacebook = config.EnableSignUpWithFacebook === 'true';
  const enableSignUpWithLinkedIn = config.EnableSignUpWithLinkedIn === 'true';
  const enableSignUpWithGitHub = config.EnableSignUpWithGitHub === 'true';
  const enableLdap = config.EnableLdap === 'true';
  const enableSaml = config.EnableSaml === 'true';
  const enableSignUpWithOffice365 = config.EnableSignUpWithOffice365 === 'true';
  const experimentalEnableAuthenticationTransfer = config.ExperimentalEnableAuthenticationTransfer === 'true';
  return {
    canUseAccessTokens: tokensEnabled && userHasTokenRole,
    enableOAuthServiceProvider,
    enableSignUpWithEmail,
    enableSignUpWithGitLab,
    enableSignUpWithGoogle,
    enableSignUpWithOpenId,
    enableSignUpWithFacebook,
    enableSignUpWithLinkedIn,
    enableSignUpWithGitHub,
    enableLdap,
    enableSaml,
    enableSignUpWithOffice365,
    experimentalEnableAuthenticationTransfer,
    passwordConfig: (0,utils/* getPasswordConfig */.lD)(config),
    militaryTime: (0,preferences/* getBool */.o4)(state, constants/* Preferences.CATEGORY_DISPLAY_SETTINGS */.uP.CATEGORY_DISPLAY_SETTINGS, constants/* Preferences.USE_MILITARY_TIME */.uP.USE_MILITARY_TIME, false)
  };
}

function security_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      getMe: actions_users/* getMe */.jo,
      updateUserPassword: actions_users/* updateUserPassword */.Zy,
      getAuthorizedOAuthApps: integrations/* getAuthorizedOAuthApps */.eg,
      deauthorizeOAuthApp: integrations/* deauthorizeOAuthApp */.VZ
    }, dispatch)
  };
}

/* harmony default export */ const security = ((0,es.connect)(security_mapStateToProps, security_mapDispatchToProps)(SecurityTab));
;// CONCATENATED MODULE: ./components/user_settings/sidebar/show_unreads_category/show_unreads_category.tsx




function show_unreads_category_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





class ShowUnreadsCategory extends react.PureComponent {
  constructor(props) {
    super(props);

    show_unreads_category_defineProperty(this, "handleChange", e => {
      this.setState({
        checked: e.target.value === 'true'
      });
    });

    show_unreads_category_defineProperty(this, "handleSubmit", async () => {
      this.setState({
        isSaving: true
      });
      await this.props.savePreferences(this.props.currentUserId, [{
        user_id: this.props.currentUserId,
        category: src_constants/* Preferences.CATEGORY_SIDEBAR_SETTINGS */.uP.CATEGORY_SIDEBAR_SETTINGS,
        name: src_constants/* Preferences.SHOW_UNREAD_SECTION */.uP.SHOW_UNREAD_SECTION,
        value: this.state.checked.toString()
      }]);
      this.setState({
        isSaving: false
      });
      this.props.updateSection('');
    });

    show_unreads_category_defineProperty(this, "renderDescription", () => {
      if (this.props.showUnreadsCategory) {
        return /*#__PURE__*/react.createElement(components_message/* default */.Z, {
          id: "user.settings.sidebar.on",
          defaultMessage: "On"
        });
      }

      return /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.sidebar.off",
        defaultMessage: "Off"
      });
    });

    this.state = {
      active: false,
      checked: false,
      isSaving: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.active !== state.active) {
      if (props.active && !state.active) {
        return {
          checked: props.showUnreadsCategory,
          active: props.active
        };
      }

      return {
        active: props.active
      };
    }

    return null;
  }

  render() {
    const title = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.sidebar.showUnreadsCategoryTitle",
      defaultMessage: "Group unread channels separately"
    });

    if (!this.props.active) {
      return /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: title,
        describe: this.renderDescription(),
        section: "showUnreadsCategory",
        updateSection: this.props.updateSection
      });
    }

    return /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
      title: title,
      inputs: /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("legend", {
        className: "form-legend hidden-label"
      }, title), /*#__PURE__*/react.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        "data-testid": "showUnreadsCategoryOn",
        type: "radio",
        name: "showUnreadsCategory",
        checked: this.state.checked,
        onChange: () => this.setState({
          checked: true
        })
      }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.sidebar.on",
        defaultMessage: "On"
      })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
        className: "radio"
      }, /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("input", {
        "data-testid": "showUnreadsCategoryOff",
        type: "radio",
        name: "showUnreadsCategory",
        checked: !this.state.checked,
        onChange: () => this.setState({
          checked: false
        })
      }), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.sidebar.off",
        defaultMessage: "Off"
      })), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
        className: "mt-5"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.sidebar.showUnreadsCategoryDesc",
        defaultMessage: "When enabled, all unread channels and direct messages will be grouped together in the sidebar."
      }))),
      submit: this.handleSubmit,
      saving: this.state.isSaving,
      updateSection: this.props.updateSection
    });
  }

}

show_unreads_category_defineProperty(ShowUnreadsCategory, "propTypes", {
  active: (prop_types_default()).bool.isRequired,
  currentUserId: (prop_types_default()).string.isRequired,
  savePreferences: (prop_types_default()).func.isRequired,
  showUnreadsCategory: (prop_types_default()).bool.isRequired,
  updateSection: (prop_types_default()).func.isRequired
});
;// CONCATENATED MODULE: ./components/user_settings/sidebar/show_unreads_category/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function show_unreads_category_mapStateToProps(state) {
  return {
    currentUserId: (0,users/* getCurrentUserId */.rc)(state),
    showUnreadsCategory: (0,preferences/* shouldShowUnreadsCategory */.hC)(state)
  };
}

const show_unreads_category_mapDispatchToProps = {
  savePreferences: actions_preferences/* savePreferences */.$A
};
/* harmony default export */ const show_unreads_category = ((0,es.connect)(show_unreads_category_mapStateToProps, show_unreads_category_mapDispatchToProps)(ShowUnreadsCategory));
;// CONCATENATED MODULE: ./components/user_settings/sidebar/limit_visible_gms_dms/limit_visible_gms_dms.tsx


function limit_visible_gms_dms_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function limit_visible_gms_dms_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { limit_visible_gms_dms_ownKeys(Object(source), true).forEach(function (key) { limit_visible_gms_dms_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { limit_visible_gms_dms_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function limit_visible_gms_dms_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







const limits = [{
  value: 10000,
  label: (0,utils/* localizeMessage */._u)('user.settings.sidebar.limitVisibleGMsDMs.allDirectMessages', 'All Direct Messages')
}, {
  value: 10,
  label: '10'
}, {
  value: 15,
  label: '15'
}, {
  value: 20,
  label: '20'
}, {
  value: 40,
  label: '40'
}];
class LimitVisibleGMsDMs extends react.PureComponent {
  constructor(props) {
    super(props);

    limit_visible_gms_dms_defineProperty(this, "handleChange", selected => {
      if (selected && 'value' in selected) {
        this.setState({
          limit: selected
        });
      }
    });

    limit_visible_gms_dms_defineProperty(this, "handleSubmit", async () => {
      this.setState({
        isSaving: true
      });
      await this.props.savePreferences(this.props.currentUserId, [{
        user_id: this.props.currentUserId,
        category: src_constants/* Preferences.CATEGORY_SIDEBAR_SETTINGS */.uP.CATEGORY_SIDEBAR_SETTINGS,
        name: src_constants/* Preferences.LIMIT_VISIBLE_DMS_GMS */.uP.LIMIT_VISIBLE_DMS_GMS,
        value: this.state.limit.value.toString()
      }]);
      this.setState({
        isSaving: false
      });
      this.props.updateSection('');
    });

    limit_visible_gms_dms_defineProperty(this, "renderDescription", () => {
      return /*#__PURE__*/react.createElement("span", null, this.state.limit.label);
    });

    this.state = {
      active: false,
      limit: {
        value: 20,
        label: '20'
      },
      isSaving: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.active !== state.active) {
      if (props.active && !state.active) {
        return {
          limit: limits.find(l => l.value === props.dmGmLimit),
          active: props.active
        };
      }

      return {
        active: props.active
      };
    } else if (!props.active) {
      return {
        limit: limits.find(l => l.value === props.dmGmLimit)
      };
    }

    return null;
  }

  render() {
    const title = /*#__PURE__*/react.createElement(components_message/* default */.Z, {
      id: "user.settings.sidebar.limitVisibleGMsDMsTitle",
      defaultMessage: "Number of direct messages to show"
    });

    if (!this.props.active) {
      return /*#__PURE__*/react.createElement(setting_item_min/* default */.Z, {
        title: title,
        describe: this.renderDescription(),
        section: "limitVisibleGMsDMs",
        updateSection: this.props.updateSection
      });
    }

    return /*#__PURE__*/react.createElement(setting_item_max/* default */.Z, {
      title: title,
      inputs: /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("legend", {
        className: "form-legend hidden-label"
      }, title), /*#__PURE__*/react.createElement(react_select_esm/* default */.ZP, {
        className: "react-select",
        classNamePrefix: "react-select",
        id: "limitVisibleGMsDMs",
        options: limits,
        clearable: false,
        onChange: this.handleChange,
        value: this.state.limit,
        isSearchable: false,
        menuPortalTarget: document.body,
        styles: reactStyles
      }), /*#__PURE__*/react.createElement("div", {
        className: "mt-5"
      }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
        id: "user.settings.sidebar.limitVisibleGMsDMsDesc",
        defaultMessage: "You can also change these settings in the direct messages sidebar menu."
      }))),
      submit: this.handleSubmit,
      saving: this.state.isSaving,
      updateSection: this.props.updateSection
    });
  }

}

limit_visible_gms_dms_defineProperty(LimitVisibleGMsDMs, "propTypes", {
  active: (prop_types_default()).bool.isRequired,
  currentUserId: (prop_types_default()).string.isRequired,
  savePreferences: (prop_types_default()).func.isRequired,
  dmGmLimit: (prop_types_default()).number.isRequired,
  updateSection: (prop_types_default()).func.isRequired
});

const reactStyles = {
  menuPortal: provided => limit_visible_gms_dms_objectSpread(limit_visible_gms_dms_objectSpread({}, provided), {}, {
    zIndex: 9999
  })
};
;// CONCATENATED MODULE: ./components/user_settings/sidebar/limit_visible_gms_dms/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function limit_visible_gms_dms_mapStateToProps(state) {
  return {
    currentUserId: (0,users/* getCurrentUserId */.rc)(state),
    dmGmLimit: (0,preferences/* getInt */.wS)(state, src_constants/* Preferences.CATEGORY_SIDEBAR_SETTINGS */.uP.CATEGORY_SIDEBAR_SETTINGS, src_constants/* Preferences.LIMIT_VISIBLE_DMS_GMS */.uP.LIMIT_VISIBLE_DMS_GMS, 20)
  };
}

const limit_visible_gms_dms_mapDispatchToProps = {
  savePreferences: actions_preferences/* savePreferences */.$A
};
/* harmony default export */ const limit_visible_gms_dms = ((0,es.connect)(limit_visible_gms_dms_mapStateToProps, limit_visible_gms_dms_mapDispatchToProps)(LimitVisibleGMsDMs));
;// CONCATENATED MODULE: ./components/user_settings/sidebar/user_settings_sidebar.tsx

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function UserSettingsSidebar(props) {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react.createElement("button", {
    id: "closeButton",
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: props.closeModal
  }, /*#__PURE__*/react.createElement("span", {
    "aria-hidden": "true"
  }, '×')), /*#__PURE__*/react.createElement("h4", {
    className: "modal-title"
  }, /*#__PURE__*/react.createElement("div", {
    className: "modal-back",
    onClick: props.collapseModal
  }, /*#__PURE__*/react.createElement(localized_icon/* default */.Z, {
    className: "fa fa-angle-left",
    title: {
      id: (0,i18n.t)('generic_icons.collapse'),
      defaultMessage: 'Collapse Icon'
    }
  })), /*#__PURE__*/react.createElement(components_message/* default */.Z, {
    id: "user.settings.sidebar.title",
    defaultMessage: "Sidebar Settings"
  }))), /*#__PURE__*/react.createElement("div", {
    id: "sidebarTitle",
    className: "user-settings"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "tab-header"
  }, /*#__PURE__*/react.createElement(components_message/* default */.Z, {
    id: "user.settings.sidebar.title",
    defaultMessage: "Sidebar Settings"
  })), /*#__PURE__*/react.createElement("div", {
    className: "divider-dark first"
  }), /*#__PURE__*/react.createElement(show_unreads_category, {
    active: props.activeSection === 'showUnreadsCategory',
    updateSection: props.updateSection
  }), /*#__PURE__*/react.createElement("div", {
    className: "divider-dark"
  }), /*#__PURE__*/react.createElement(limit_visible_gms_dms, {
    active: props.activeSection === 'limitVisibleGMsDMs',
    updateSection: props.updateSection
  }), /*#__PURE__*/react.createElement("div", {
    className: "divider-dark"
  })));
}
UserSettingsSidebar.propTypes = {
  updateSection: (prop_types_default()).func.isRequired,
  activeSection: (prop_types_default()).string.isRequired,
  closeModal: (prop_types_default()).func.isRequired,
  collapseModal: (prop_types_default()).func.isRequired
};
;// CONCATENATED MODULE: ./components/user_settings/sidebar/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* harmony default export */ const sidebar = (UserSettingsSidebar);
;// CONCATENATED MODULE: ./components/user_settings/user_settings.tsx


function user_settings_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







class UserSettings extends react.PureComponent {
  render() {
    if (this.props.activeTab === 'profile') {
      return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(components_user_settings_general, {
        user: this.props.user,
        activeSection: this.props.activeSection,
        updateSection: this.props.updateSection,
        updateTab: this.props.updateTab,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal
      }));
    } else if (this.props.activeTab === 'security') {
      return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(security, {
        user: this.props.user,
        activeSection: this.props.activeSection,
        updateSection: this.props.updateSection,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal,
        setRequireConfirm: this.props.setRequireConfirm
      }));
    } else if (this.props.activeTab === 'notifications') {
      return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(notifications, {
        user: this.props.user,
        activeSection: this.props.activeSection,
        updateSection: this.props.updateSection,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal
      }));
    } else if (this.props.activeTab === 'display') {
      return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(display, {
        user: this.props.user,
        activeSection: this.props.activeSection,
        updateSection: this.props.updateSection,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal,
        setEnforceFocus: this.props.setEnforceFocus,
        setRequireConfirm: this.props.setRequireConfirm
      }));
    } else if (this.props.activeTab === 'sidebar') {
      return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(sidebar, {
        activeSection: this.props.activeSection,
        updateSection: this.props.updateSection,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal
      }));
    } else if (this.props.activeTab === 'advanced') {
      return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(advanced, {
        activeSection: this.props.activeSection,
        updateSection: this.props.updateSection,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal
      }));
    }

    return /*#__PURE__*/react.createElement("div", null);
  }

}

user_settings_defineProperty(UserSettings, "propTypes", {
  activeTab: (prop_types_default()).string,
  activeSection: (prop_types_default()).string.isRequired,
  updateSection: (prop_types_default()).func.isRequired,
  updateTab: (prop_types_default()).func.isRequired,
  closeModal: (prop_types_default()).func.isRequired,
  collapseModal: (prop_types_default()).func.isRequired,
  setEnforceFocus: (prop_types_default()).func.isRequired,
  setRequireConfirm: (prop_types_default()).func.isRequired
});
;// CONCATENATED MODULE: ./components/user_settings/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function user_settings_mapStateToProps(state) {
  return {
    user: (0,users/* getCurrentUser */.ts)(state)
  };
}

/* harmony default export */ const user_settings = ((0,es.connect)(user_settings_mapStateToProps)(UserSettings));

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
//# sourceMappingURL=195.58ec55129b49bc14098d.js.map