"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[422],{

/***/ 95422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ linking_landing_page)
});

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/client/index.ts + 4 modules
var client = __webpack_require__(53473);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/general.ts
var general = __webpack_require__(22742);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/preferences.ts
var preferences = __webpack_require__(89754);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(15306);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
;// CONCATENATED MODULE: ./images/deep-linking/deeplinking-desktop-img.png
/* harmony default export */ const deeplinking_desktop_img = (__webpack_require__.p + "files/34c82b247a366d047105491d979556bf.png");
;// CONCATENATED MODULE: ./images/deep-linking/deeplinking-mobile-img.png
/* harmony default export */ const deeplinking_mobile_img = (__webpack_require__.p + "files/9b0519e1f5fbf82b0548515994fd49d4.png");
;// CONCATENATED MODULE: ./images/logo.svg
/* harmony default export */ const logo = (__webpack_require__.p + "files/17a50e2f200ecc8c4a58557603654d89.svg");
// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(45288);
// EXTERNAL MODULE: ./components/widgets/icons/checkbox_checked_icon.tsx
var checkbox_checked_icon = __webpack_require__(1011);
// EXTERNAL MODULE: ./stores/browser_store.tsx
var browser_store = __webpack_require__(91384);
// EXTERNAL MODULE: ./utils/constants.tsx + 19 modules
var constants = __webpack_require__(66788);
// EXTERNAL MODULE: ./utils/utils.tsx + 25 modules
var utils = __webpack_require__(15883);
// EXTERNAL MODULE: ./utils/user_agent.tsx
var user_agent = __webpack_require__(47470);
;// CONCATENATED MODULE: ./components/linking_landing_page/linking_landing_page.tsx




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.











class LinkingLandingPage extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "clearLandingPreferenceIfNotChecked", () => {
      if (!this.state.navigating && !this.state.rememberChecked) {
        browser_store/* default.clearLandingPreference */.Z.clearLandingPreference(this.props.siteUrl);
      }
    });

    _defineProperty(this, "checkLandingPreferenceBrowser", () => {
      const landingPreference = browser_store/* default.getLandingPreference */.Z.getLandingPreference(this.props.siteUrl);
      return landingPreference && landingPreference === constants/* LandingPreferenceTypes.BROWSER */.PH.BROWSER;
    });

    _defineProperty(this, "checkLandingPreferenceApp", () => {
      const landingPreference = browser_store/* default.getLandingPreference */.Z.getLandingPreference(this.props.siteUrl);
      return landingPreference && landingPreference === constants/* LandingPreferenceTypes.MATTERMOSTAPP */.PH.MATTERMOSTAPP;
    });

    _defineProperty(this, "handleChecked", () => {
      // If it was checked, and now we're unchecking it, clear the preference
      if (this.state.rememberChecked) {
        browser_store/* default.clearLandingPreference */.Z.clearLandingPreference(this.props.siteUrl);
      }

      this.setState({
        rememberChecked: !this.state.rememberChecked
      });
    });

    _defineProperty(this, "setPreference", (pref, clearIfNotChecked) => {
      if (!this.state.rememberChecked) {
        if (clearIfNotChecked) {
          browser_store/* default.clearLandingPreference */.Z.clearLandingPreference(this.props.siteUrl);
        }

        return;
      }

      switch (pref) {
        case constants/* LandingPreferenceTypes.MATTERMOSTAPP */.PH.MATTERMOSTAPP:
          browser_store/* default.setLandingPreferenceToMattermostApp */.Z.setLandingPreferenceToMattermostApp(this.props.siteUrl);
          break;

        case constants/* LandingPreferenceTypes.BROWSER */.PH.BROWSER:
          browser_store/* default.setLandingPreferenceToBrowser */.Z.setLandingPreferenceToBrowser(this.props.siteUrl);
          break;

        default:
          break;
      }
    });

    _defineProperty(this, "openMattermostApp", () => {
      this.setPreference(constants/* LandingPreferenceTypes.MATTERMOSTAPP */.PH.MATTERMOSTAPP);
      this.setState({
        redirectPage: true
      });
      window.location.href = this.state.nativeLocation;
    });

    _defineProperty(this, "openInBrowser", () => {
      this.setPreference(constants/* LandingPreferenceTypes.BROWSER */.PH.BROWSER);
      window.location.href = this.state.location;
    });

    _defineProperty(this, "renderSystemDialogMessage", () => {
      const isMobile = user_agent/* isMobile */.tq();

      if (isMobile) {
        return /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "get_app.systemDialogMessageMobile",
          defaultMessage: "View in App"
        });
      }

      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "get_app.systemDialogMessage",
        defaultMessage: "View in Desktop App"
      });
    });

    _defineProperty(this, "renderGoNativeAppMessage", () => {
      return /*#__PURE__*/react.createElement("a", {
        href: utils/* isMobile */.tq() ? '#' : this.state.nativeLocation,
        onMouseDown: () => {
          this.setPreference(constants/* LandingPreferenceTypes.MATTERMOSTAPP */.PH.MATTERMOSTAPP, true);
        },
        onClick: () => {
          this.setPreference(constants/* LandingPreferenceTypes.MATTERMOSTAPP */.PH.MATTERMOSTAPP, true);
          this.setState({
            redirectPage: true,
            navigating: true
          });

          if (utils/* isMobile */.tq()) {
            if (user_agent/* isAndroidWeb */.eL()) {
              const timeout = setTimeout(() => {
                window.location.replace(this.getDownloadLink());
              }, 2000);
              window.addEventListener('blur', () => {
                clearTimeout(timeout);
              });
            }

            window.location.replace(this.state.nativeLocation);
          }
        },
        className: "btn btn-primary btn-lg get-app__download"
      }, this.renderSystemDialogMessage());
    });

    _defineProperty(this, "getDownloadLink", () => {
      if (user_agent/* isIosWeb */.Vg()) {
        return this.props.iosAppLink;
      } else if (user_agent/* isAndroidWeb */.eL()) {
        return this.props.androidAppLink;
      }

      return this.props.desktopAppLink;
    });

    _defineProperty(this, "handleBrandImageError", () => {
      this.setState({
        brandImageError: true
      });
    });

    _defineProperty(this, "renderCheckboxIcon", () => {
      if (this.state.rememberChecked) {
        return /*#__PURE__*/react.createElement(checkbox_checked_icon/* default */.Z, null);
      }

      return null;
    });

    _defineProperty(this, "renderGraphic", () => {
      const isMobile = user_agent/* isMobile */.tq();

      if (isMobile) {
        return /*#__PURE__*/react.createElement("img", {
          src: deeplinking_mobile_img
        });
      }

      return /*#__PURE__*/react.createElement("img", {
        src: deeplinking_desktop_img
      });
    });

    _defineProperty(this, "renderDownloadLinkText", () => {
      const isMobile = user_agent/* isMobile */.tq();

      if (isMobile) {
        return /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "get_app.dontHaveTheMobileApp",
          defaultMessage: 'Don\'t have the Mobile App?'
        });
      }

      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "get_app.dontHaveTheDesktopApp",
        defaultMessage: 'Don\'t have the Desktop App?'
      });
    });

    _defineProperty(this, "renderDownloadLinkSection", () => {
      const downloadLink = this.getDownloadLink();

      if (this.state.redirectPage) {
        return /*#__PURE__*/react.createElement("div", {
          className: "get-app__download-link"
        }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
          id: "get_app.openLinkInBrowser",
          defaultMessage: "Or, [open this link in your browser.](!{link})",
          values: {
            link: this.state.location
          }
        }));
      } else if (downloadLink) {
        return /*#__PURE__*/react.createElement("div", {
          className: "get-app__download-link"
        }, this.renderDownloadLinkText(), '\u00A0', /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("a", {
          href: downloadLink
        }, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "get_app.downloadTheAppNow",
          defaultMessage: "Download the app now."
        })));
      }

      return null;
    });

    _defineProperty(this, "renderDialogHeader", () => {
      const downloadLink = this.getDownloadLink();
      const isMobile = user_agent/* isMobile */.tq();
      let openingLink = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "get_app.openingLink",
        defaultMessage: "Opening link in Mattermost..."
      });

      if (this.props.enableCustomBrand) {
        openingLink = /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "get_app.openingLinkWhiteLabel",
          defaultMessage: "Opening link in {appName}...",
          values: {
            appName: this.props.siteName || 'Mattermost'
          }
        });
      }

      if (this.state.redirectPage) {
        return /*#__PURE__*/react.createElement("h1", {
          className: "get-app__launching"
        }, openingLink, /*#__PURE__*/react.createElement("div", {
          className: "get-app__alternative".concat(this.state.redirectPage ? ' redirect-page' : '')
        }, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "get_app.redirectedInMoments",
          defaultMessage: "You will be redirected in a few moments."
        }), /*#__PURE__*/react.createElement("br", null), this.renderDownloadLinkText(), '\u00A0', /*#__PURE__*/react.createElement("br", {
          className: "mobile-only"
        }), /*#__PURE__*/react.createElement("a", {
          href: downloadLink
        }, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "get_app.downloadTheAppNow",
          defaultMessage: "Download the app now."
        }))));
      }

      let viewApp = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "get_app.ifNothingPrompts",
        defaultMessage: "You can view {siteName} in the desktop app or continue in your web browser.",
        values: {
          siteName: this.props.enableCustomBrand ? '' : ' Mattermost'
        }
      });

      if (isMobile) {
        viewApp = /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "get_app.ifNothingPromptsMobile",
          defaultMessage: "You can view {siteName} in the mobile app or continue in your web browser.",
          values: {
            siteName: this.props.enableCustomBrand ? '' : ' Mattermost'
          }
        });
      }

      return /*#__PURE__*/react.createElement("div", {
        className: "get-app__launching"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "get_app.launching",
        tagName: "h1",
        defaultMessage: "Where would you like to view this?"
      }), /*#__PURE__*/react.createElement("div", {
        className: "get-app__alternative"
      }, viewApp));
    });

    _defineProperty(this, "renderDialogBody", () => {
      if (this.state.redirectPage) {
        return /*#__PURE__*/react.createElement("div", {
          className: "get-app__dialog-body"
        }, this.renderDialogHeader(), this.renderDownloadLinkSection());
      }

      return /*#__PURE__*/react.createElement("div", {
        className: "get-app__dialog-body"
      }, this.renderDialogHeader(), /*#__PURE__*/react.createElement("div", {
        className: "get-app__buttons"
      }, /*#__PURE__*/react.createElement("div", {
        className: "get-app__status"
      }, this.renderGoNativeAppMessage()), /*#__PURE__*/react.createElement("div", {
        className: "get-app__status"
      }, /*#__PURE__*/react.createElement("a", {
        href: this.state.location,
        onMouseDown: () => {
          this.setPreference(constants/* LandingPreferenceTypes.BROWSER */.PH.BROWSER, true);
        },
        onClick: () => {
          this.setPreference(constants/* LandingPreferenceTypes.BROWSER */.PH.BROWSER, true);
          this.setState({
            navigating: true
          });
        },
        className: "btn btn-default btn-lg get-app__continue"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "get_app.continueToBrowser",
        defaultMessage: "View in Browser"
      })))), /*#__PURE__*/react.createElement("div", {
        className: "get-app__preference"
      }, /*#__PURE__*/react.createElement("button", {
        className: "get-app__checkbox ".concat(this.state.rememberChecked ? 'checked' : ''),
        onClick: this.handleChecked
      }, this.renderCheckboxIcon()), /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "get_app.rememberMyPreference",
        defaultMessage: "Remember my preference"
      })), this.renderDownloadLinkSection());
    });

    _defineProperty(this, "renderHeader", () => {
      let header = /*#__PURE__*/react.createElement("div", {
        className: "get-app__header"
      }, /*#__PURE__*/react.createElement("img", {
        src: logo,
        className: "get-app__logo"
      }));

      if (this.props.enableCustomBrand && this.props.brandImageUrl) {
        let customLogo;

        if (this.props.brandImageUrl && !this.state.brandImageError) {
          customLogo = /*#__PURE__*/react.createElement("img", {
            src: this.props.brandImageUrl,
            onError: this.handleBrandImageError,
            className: "get-app__custom-logo"
          });
        }

        header = /*#__PURE__*/react.createElement("div", {
          className: "get-app__header"
        }, customLogo, /*#__PURE__*/react.createElement("div", {
          className: "get-app__custom-site-name"
        }, /*#__PURE__*/react.createElement("span", null, this.props.siteName)));
      }

      return header;
    });

    const location = window.location.href.replace('/landing#', '');
    this.state = {
      rememberChecked: false,
      redirectPage: false,
      location,
      nativeLocation: location.replace(/^(https|http)/, 'mattermost'),
      brandImageError: false,
      navigating: false
    };

    if (utils/* isMobile */.tq() && !browser_store/* default.hasSeenLandingPage */.Z.hasSeenLandingPage()) {
      browser_store/* default.setLandingPageSeen */.Z.setLandingPageSeen(true);
    }
  }

  componentDidMount() {
    utils/* applyTheme */._v(this.props.defaultTheme);

    if (this.checkLandingPreferenceApp()) {
      this.openMattermostApp();
    }

    window.addEventListener('beforeunload', this.clearLandingPreferenceIfNotChecked);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.clearLandingPreferenceIfNotChecked);
  }

  render() {
    const isMobile = user_agent/* isMobile */.tq();

    if (this.checkLandingPreferenceBrowser()) {
      this.openInBrowser();
      return null;
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "get-app"
    }, this.renderHeader(), /*#__PURE__*/react.createElement("div", {
      className: "get-app__dialog"
    }, /*#__PURE__*/react.createElement("div", {
      className: "get-app__graphic ".concat(isMobile ? 'mobile' : '')
    }, this.renderGraphic()), this.renderDialogBody()));
  }

}

_defineProperty(LinkingLandingPage, "propTypes", {
  defaultTheme: (prop_types_default()).any.isRequired,
  desktopAppLink: (prop_types_default()).string,
  iosAppLink: (prop_types_default()).string,
  androidAppLink: (prop_types_default()).string,
  siteUrl: (prop_types_default()).string,
  siteName: (prop_types_default()).string,
  brandImageUrl: (prop_types_default()).string,
  enableCustomBrand: (prop_types_default()).bool.isRequired
});
;// CONCATENATED MODULE: ./components/linking_landing_page/index.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  return {
    desktopAppLink: config.AppDownloadLink,
    iosAppLink: config.IosAppDownloadLink,
    androidAppLink: config.AndroidAppDownloadLink,
    defaultTheme: (0,preferences/* getTheme */.gh)(state),
    siteUrl: config.SiteURL,
    siteName: config.SiteName,
    brandImageUrl: client/* Client4.getBrandImageUrl */.je.getBrandImageUrl('0'),
    enableCustomBrand: config.EnableCustomBrand === 'true'
  };
}

/* harmony default export */ const linking_landing_page = ((0,es.connect)(mapStateToProps)(LinkingLandingPage));

/***/ }),

/***/ 1011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CheckboxCheckedIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

class CheckboxCheckedIcon extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      width: "18px",
      height: "18px",
      viewBox: "0 0 18 18"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
      id: "Developer-Export",
      stroke: "none",
      strokeWidth: "1",
      fillRule: "evenodd"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
      transform: "translate(-285.000000, -933.000000)",
      id: "All-Team-Members"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
      transform: "translate(245.000000, 698.000000)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
      id: "Channel-Administrators",
      transform: "translate(0.000000, 106.000000)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
      id: "data-table/column-1",
      transform: "translate(11.000000, 86.000000)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
      id: "row-checkbox---Public-Channels",
      transform: "translate(12.000000, 35.000000)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
      id: "Stacked-Group",
      transform: "translate(0.000000, 5.000000)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
      id: "data-table/1st/row-checkbox-label-base"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
      id: "check-on-copy-11",
      transform: "translate(14.000000, 0.000000)"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: "M19,3 L5,3 C3.9,3 3,3.9 3,5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 L19,3 Z M10,17 L5,12.1923077 L6.4,10.8461538 L10,14.3076923 L17.6,7 L19,8.34615385 L10,17 L10,17 Z",
      id: "checkbox---checked"
    })))))))))));
  }

}

/***/ })

}]);
//# sourceMappingURL=422.8b726be56930203b6cb9.js.map